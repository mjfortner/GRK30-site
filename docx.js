/* =========================================================================
   GRK30 editable text.
   node docx.js <quizId|readingId>… [--greek] [--lines a-b] [--flat]
                                    [--title text] [--out name]

   Emits a .docx of the readings for hand-formatting in Word or Google Docs.
   Structure only — built-in Title/Heading styles and plain Normal body text —
   so restyling "Normal text" in Docs reflows the whole poem.

     node docx.js quiz3                              → Greek + English
     node docx.js quiz3 --greek                      → Greek only
     node docx.js theoc11-1-18 theoc11-19-81 --lines 18-81 --greek
                                                     → a range across readings

   Each verse line is one paragraph: line number, tab, text, with a hanging
   indent — so setting one tab stop in Docs lines the whole poem up.

   Companion to print.js (which goes straight to PDF). Neither feeds the site.
   ========================================================================= */

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

const { READINGS } = require("./readings.js");
const { QUIZZES }  = require("./quizzes.js");

const OUTDIR = "print";

const esc = s => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

/* ---------- arguments ---------- */

const args = process.argv.slice(2);
const flagVal = name => {
  const i = args.indexOf("--" + name);
  return i >= 0 ? args[i + 1] : null;
};
const VALUE_FLAGS = ["--out", "--lines", "--title"];
const isFlagVal = i => i > 0 && VALUE_FLAGS.includes(args[i - 1]);
const targets   = args.filter((a, i) => !a.startsWith("--") && !isFlagVal(i));
const greekOnly = args.includes("--greek");
// --flat drops the per-reading headings, for a range that runs continuously
// across two readings and should read as one poem.
const flat      = args.includes("--flat");

if (!targets.length) {
  console.error("usage: node docx.js <quizId|readingId>… [--greek] [--lines a-b] [--flat] [--title text] [--out name]");
  console.error("  quizzes:  " + QUIZZES.map(q => q.id).join(", "));
  console.error("  readings: " + READINGS.map(r => r.id).join(", "));
  process.exit(1);
}

const readings = [];
targets.forEach(t => {
  const quiz = QUIZZES.find(q => q.id === t);
  const found = quiz
    ? quiz.readings.map(id => READINGS.find(r => r.id === id)).filter(Boolean)
    : READINGS.filter(r => r.id === t);
  if (!found.length) { console.error(`nothing found for "${t}"`); process.exit(1); }
  found.forEach(r => { if (!readings.includes(r)) readings.push(r); });
});

// --lines 18-81 keeps only the segments that overlap that verse range.
let range = null;
if (flagVal("lines")) {
  const m = /^(\d+)\s*[-–—]\s*(\d+)$/.exec(flagVal("lines"));
  if (!m) { console.error(`--lines wants a range like 18-81, got "${flagVal("lines")}"`); process.exit(1); }
  range = { from: +m[1], to: +m[2] };
}

/* ---------- segment helpers ---------- */

const isAside = seg => (seg.greek || []).every(t => t.punct);

// "68–69" -> {a:68, b:69}; a Stephanus label or a speaker row -> null
function lineRange(label) {
  if (!label) return null;
  const s = String(label).trim();
  if (!/^\d+(\s*[–—-]\s*\d+)?$/.test(s)) return null;
  const n = s.match(/\d+/g);
  return { a: +n[0], b: +n[n.length - 1] };
}

// Join tokens exactly as app.js renders them, so the text matches the site.
function greekLine(seg) {
  let out = "";
  (seg.greek || []).forEach((tok, i) => {
    if (tok.punct) { if (!tok.nospaceBefore) out += " "; out += tok.w; return; }
    if (i > 0) out += " ";
    out += tok.w;
  });
  return out.trim();
}

// Apply --lines. Asides (speaker labels, editorial markers) carry no line
// number of their own, so keep the ones that fall between kept segments.
function select(segments) {
  if (!range) return segments.map((s, i) => ({ seg: s, i }));
  const keep = new Set();
  segments.forEach((s, i) => {
    const r = lineRange(s.lines);
    if (r && r.b >= range.from && r.a <= range.to) keep.add(i);
  });
  if (!keep.size) return [];
  const lo = Math.min(...keep), hi = Math.max(...keep);
  return segments
    .map((s, i) => ({ seg: s, i }))
    .filter(({ seg, i }) => keep.has(i) || (isAside(seg) && i > lo && i < hi));
}

/* ---------- docx parts ---------- */

const T = "http://schemas.openxmlformats.org/wordprocessingml/2006/main";

const run = (text, opts = {}) =>
  `<w:r>${opts.i || opts.b ? `<w:rPr>${opts.b ? "<w:b/>" : ""}${opts.i ? "<w:i/>" : ""}</w:rPr>` : ""}` +
  `<w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;

const para = (content, opts = {}) => {
  const pr = [];
  if (opts.style) pr.push(`<w:pStyle w:val="${opts.style}"/>`);
  if (opts.hanging) pr.push(
    `<w:tabs><w:tab w:val="left" w:pos="720"/></w:tabs>` +
    `<w:ind w:left="720" w:hanging="720"/>`);
  if (opts.center) pr.push(`<w:jc w:val="center"/>`);
  if (opts.space) pr.push(`<w:spacing w:before="${opts.space}" w:after="0"/>`);
  return `<w:p>${pr.length ? `<w:pPr>${pr.join("")}</w:pPr>` : ""}${content}</w:p>`;
};

const heading = flagVal("title")
  || (readings.length === 1 ? readings[0].title
      : (QUIZZES.find(q => readings.every(r => q.readings.includes(r.id))) || {}).label
      || "GRK30 readings");

const body = [];
body.push(para(run(heading), { style: "Title" }));
if (range && !flagVal("title"))
  body.push(para(run(`lines ${range.from}–${range.to}`, { i: true }), { style: "Subtitle" }));

readings.forEach(r => {
  const picked = select(r.segments);
  if (!picked.length) return;

  if (!flat) {
    body.push(para(run(r.title), { style: "Heading1" }));
    if (r.citation) body.push(para(run(r.citation, { i: true }), { style: "Subtitle" }));
  }

  picked.forEach(({ seg }) => {
    if (isAside(seg)) {
      const en = seg.translation || "";
      const keepEn = !greekOnly || en.startsWith("[");
      body.push(para(run(greekLine(seg)) + (keepEn ? run("  " + en, { i: true }) : ""),
                     { center: true, space: 200 }));
      return;
    }
    const label = seg.lines || "";
    body.push(para(run(label) + "<w:r><w:tab/></w:r>" + run(greekLine(seg)),
                   { hanging: true, space: 120 }));
    if (!greekOnly && seg.translation) {
      body.push(para("<w:r><w:tab/></w:r>" + run(seg.translation, { i: true }),
                     { hanging: true }));
    }
  });
});

const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="${T}"><w:body>
${body.join("\n")}
<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>
<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>
</w:sectPr></w:body></w:document>`;

// Times New Roman is the safe default: present everywhere and complete for
// polytonic Greek. Swap to Cardo or Gentium in Docs for a nicer face.
const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="${T}">
<w:docDefaults><w:rPrDefault><w:rPr>
<w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
<w:sz w:val="24"/><w:szCs w:val="24"/>
</w:rPr></w:rPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/>
<w:pPr><w:spacing w:after="0" w:line="360" w:lineRule="auto"/></w:pPr></w:style>
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/>
<w:pPr><w:spacing w:after="120"/></w:pPr><w:rPr><w:b/><w:sz w:val="36"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Subtitle"><w:name w:val="Subtitle"/><w:basedOn w:val="Normal"/>
<w:pPr><w:spacing w:after="240"/></w:pPr><w:rPr><w:i/><w:sz w:val="20"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/>
<w:pPr><w:spacing w:before="360" w:after="60"/><w:outlineLvl w:val="0"/></w:pPr>
<w:rPr><w:b/><w:sz w:val="28"/></w:rPr></w:style>
</w:styles>`;

const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
<Default Extension="xml" ContentType="application/xml"/>
<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`;

const rootRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

const docRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;

/* ---------- write the package ---------- */

const slug = "GRK30-" + (flagVal("out") || targets.join("+"));
fs.mkdirSync(OUTDIR, { recursive: true });
const outPath = path.resolve(OUTDIR, slug + ".docx");

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "grk30-docx-"));
const write = (rel, text) => {
  const f = path.join(tmp, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, text, "utf8");
};
write("[Content_Types].xml", contentTypes);
write("_rels/.rels", rootRels);
write("word/document.xml", documentXml);
write("word/styles.xml", stylesXml);
write("word/_rels/document.xml.rels", docRels);

fs.rmSync(outPath, { force: true });
// -X drops the extra Finder/OS metadata that can confuse strict readers.
execFileSync("zip", ["-r", "-X", "-q", outPath, ".", "-i", "*"], { cwd: tmp });
fs.rmSync(tmp, { recursive: true, force: true });

const kept = readings.reduce((n, r) => n + select(r.segments).length, 0);
console.log(`${outPath}\n  ${readings.length} reading(s), ${kept} segments` +
            (range ? `, lines ${range.from}–${range.to}` : "") +
            (greekOnly ? ", Greek only" : ", Greek + English"));

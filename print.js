/* =========================================================================
   GRK30 printable text.
   node print.js <quizId|readingId>… [--notes] [--out name] [--title text]

   Builds a paper version of the readings — Greek on the left, the literal
   translation on the right, line numbers in the gutter — and renders it to PDF
   with headless Chrome. Output lands in print/.

     node print.js quiz2                       → the whole quiz
     node print.js quiz2 --notes               → adds a per-reading glossary
     node print.js theoc11-1-18                → a single reading
     node print.js theoc1-64-118 theoc1-120-152 theoc11-1-18 --out quiz2-part2
                                               → any subset, in the order given
     node print.js quiz2 --greek               → Greek only, spaced for annotating

   Nothing here feeds the website; it only reads readings.js / quizzes.js.
   ========================================================================= */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const { READINGS } = require("./readings.js");
const { QUIZZES }  = require("./quizzes.js");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTDIR = "print";

const esc = s => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* ---------- what to print ---------- */

const args = process.argv.slice(2);
const flag = name => {
  const i = args.indexOf("--" + name);
  return i >= 0 ? args[i + 1] : null;
};
const targets   = args.filter((a, i) =>
  !a.startsWith("--") && !(i > 0 && (args[i - 1] === "--out" || args[i - 1] === "--title")));
const withNotes = args.includes("--notes");
const greekOnly = args.includes("--greek");

if (!targets.length) {
  console.error("usage: node print.js <quizId|readingId>… [--notes] [--out name] [--title text]");
  console.error("  quizzes:  " + QUIZZES.map(q => q.id).join(", "));
  console.error("  readings: " + READINGS.map(r => r.id).join(", "));
  process.exit(1);
}

// Each target is either a quiz (expands to its readings, in quiz order) or a
// single reading. Order follows the command line; duplicates drop out.
const readings = [];
targets.forEach(t => {
  const quiz = QUIZZES.find(q => q.id === t);
  const found = quiz
    ? quiz.readings.map(id => READINGS.find(r => r.id === id)).filter(Boolean)
    : READINGS.filter(r => r.id === t);
  if (!found.length) {
    console.error(`nothing found for "${t}"`);
    process.exit(1);
  }
  found.forEach(r => { if (!readings.includes(r)) readings.push(r); });
});

// Which quiz these readings belong to — used for the default heading, and only
// when they all come from the same one.
const owner = QUIZZES.find(q => readings.every(r => q.readings.includes(r.id)));

const heading = flag("title")
  || (targets.length === 1 && QUIZZES.some(q => q.id === targets[0])
        ? QUIZZES.find(q => q.id === targets[0]).label
        : owner ? owner.label
        : readings.length === 1 ? readings[0].title : "Readings");
const slug = "GRK30-" + (flag("out") || targets.join("+"));

/* ---------- rendering ---------- */

// Join a segment's tokens the way app.js renders them, so the printed Greek
// matches the site character for character.
function greekLine(seg) {
  let out = "";
  (seg.greek || []).forEach((tok, i) => {
    if (tok.punct) {
      if (!tok.nospaceBefore) out += " ";
      out += tok.w;
      return;
    }
    if (i > 0) out += " ";
    out += tok.w;
  });
  return out.trim();
}

const isSpeaker = seg => (seg.greek || []).every(t => t.punct);

function segmentHtml(seg) {
  // Speaker labels and the "lines omitted" markers are not text to construe:
  // they get their own centred row rather than a Greek/English pair. In
  // Greek-only mode the English is dropped — except for a bracketed editorial
  // note, which is not a translation and would be lost with it.
  if (isSpeaker(seg)) {
    const en = seg.translation || "";
    const keep = !greekOnly || en.startsWith("[");
    return `<div class="aside"><span class="gk">${esc(greekLine(seg))}</span>` +
           (keep ? `<span class="en">${esc(en)}</span>` : "") + `</div>`;
  }
  return `<div class="seg">
      <div class="ln">${esc(seg.lines || "")}</div>
      <div class="gk">${esc(greekLine(seg))}</div>
      ${greekOnly ? "" : `<div class="en">${esc(seg.translation || "")}</div>`}
    </div>`;
}

// One glossary per reading: every lemma the reading uses, once, in Greek order
// of first appearance, with its gloss. Only built with --notes.
function glossaryHtml(rdg) {
  const seen = new Map();
  rdg.segments.forEach(s => (s.greek || []).forEach(t => {
    if (!t.punct && t.lemma && !seen.has(t.lemma)) seen.set(t.lemma, t.gloss || "");
  }));
  const rows = [...seen.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], "el"))
    .map(([lemma, gloss]) =>
      `<div class="gl"><span class="gl-l">${esc(lemma)}</span>` +
      `<span class="gl-g">${esc(gloss)}</span></div>`)
    .join("\n");
  return `<section class="glossary">
      <h3>Vocabulary — ${esc(rdg.title)}</h3>
      <div class="gl-grid">${rows}</div>
    </section>`;
}

const body = readings.map(r => `
  <section class="reading">
    <h2>${esc(r.title)}</h2>
    ${r.citation ? `<p class="cit">${esc(r.citation)}</p>` : ""}
    ${(r.segments || []).map(segmentHtml).join("\n")}
  </section>
  ${withNotes ? glossaryHtml(r) : ""}`).join("\n");

const html = `<!doctype html>
<html lang="grc">
<head>
<meta charset="utf-8">
<title>GRK30 — ${esc(heading)}</title>
<style>
  @page { size: letter; margin: 18mm 16mm 20mm; }

  /* Palatino carries polytonic Greek well and is on every Mac; the rest are
     fallbacks in case this is ever printed elsewhere. */
  html { font-family: Palatino, "Palatino Linotype", "Book Antiqua",
                      "New Athena Unicode", "Times New Roman", serif; }
  body { margin: 0; font-size: 10.5pt; line-height: 1.45; color: #000; }

  h1 { font-size: 15pt; margin: 0 0 2mm; letter-spacing: .02em; }
  .sub { font-size: 9.5pt; color: #444; margin: 0 0 8mm; }

  .reading { break-before: page; }
  .reading:first-of-type { break-before: avoid; }

  h2 { font-size: 12.5pt; margin: 0 0 1mm; }
  .cit { font-size: 9pt; color: #444; font-style: italic;
         margin: 0 0 5mm; padding-bottom: 2mm; border-bottom: .4pt solid #bbb; }

  /* line number | Greek | English */
  .seg { display: grid; grid-template-columns: ${greekOnly ? "11mm 1fr" : "11mm 1fr 1fr"};
         gap: 0 5mm; margin-bottom: ${greekOnly ? "5mm" : "3.2mm"}; break-inside: avoid; }
  .ln  { font-size: 8pt; color: #777; text-align: right; padding-top: .9mm; }
  .gk  { font-size: ${greekOnly ? "12.5pt" : "11pt"};
         line-height: ${greekOnly ? "2.0" : "1.45"}; }
  .en  { font-size: 9.5pt; color: #222; padding-top: .5mm; }

  .aside { text-align: center; margin: 5mm 0 3mm; break-inside: avoid;
           break-after: avoid; }
  .aside .gk { font-size: 10pt; letter-spacing: .12em; }
  .aside .en { display: block; font-size: 8pt; color: #666; }

  .glossary { break-before: page; }
  .glossary h3 { font-size: 11pt; margin: 0 0 4mm; }
  .gl-grid { column-count: 2; column-gap: 8mm; }
  .gl { break-inside: avoid; font-size: 8.5pt; margin-bottom: 1.2mm;
        text-indent: -4mm; padding-left: 4mm; }
  .gl-l { }
  .gl-g { color: #333; }
  .gl-l::after { content: "  "; }
</style>
</head>
<body>
  <h1>GRK30 — ${esc(heading)}</h1>
  <p class="sub">${readings.map(r => esc(r.title)).join(" · ")}</p>
  ${body}
</body>
</html>`;

/* ---------- write + render ---------- */

fs.mkdirSync(OUTDIR, { recursive: true });
const htmlPath = path.resolve(OUTDIR, slug + ".html");
const pdfPath  = path.resolve(OUTDIR, slug + ".pdf");
fs.writeFileSync(htmlPath, html, "utf8");

if (!fs.existsSync(CHROME)) {
  console.log(`wrote ${htmlPath}`);
  console.error(`Chrome not found at ${CHROME} — open the HTML and print it by hand.`);
  process.exit(0);
}

execFileSync(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${pdfPath}`,
  "file://" + htmlPath
], { stdio: ["ignore", "ignore", "pipe"] });

const segs = readings.reduce((n, r) => n + r.segments.length, 0);
console.log(`${pdfPath}\n  ${readings.length} reading(s), ${segs} segments` +
            (withNotes ? ", with glossary" : ""));

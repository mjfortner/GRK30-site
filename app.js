/* =========================================================================
   GRK30 shared engine.

   Loaded by every page after readings.js / quizzes.js (and, where relevant,
   review.js / questions.js). Owns:
     - data lookup (quizzes, readings, segments)
     - the ?quiz= URL parameter and the header/nav
     - Greek token rendering + the fixed bottom word-breakdown panel
     - segment "line weight" maths used to cut a ~20-line practice window

   Nothing here is page-specific; each page drives it from its own <script>.
   ========================================================================= */

const GRK = (function () {

  const quizzes  = (typeof QUIZZES  !== "undefined" && Array.isArray(QUIZZES))  ? QUIZZES  : [];
  const readings = (typeof READINGS !== "undefined" && Array.isArray(READINGS)) ? READINGS : [];

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------------- data lookup ---------------- */

  const reading = id => readings.find(r => r.id === id) || null;
  const quiz    = id => quizzes.find(q => q.id === id) || null;

  // readings belonging to a quiz, in the order the quiz lists them
  function quizReadings(quizId) {
    const q = quiz(quizId);
    if (!q) return [];
    return q.readings.map(reading).filter(Boolean);
  }

  // the quiz a page should show: ?quiz=… , else the last "ready" one, else the first
  function currentQuizId() {
    const asked = new URLSearchParams(location.search).get("quiz");
    if (asked && quiz(asked)) return asked;
    const ready = quizzes.filter(q => q.status === "ready");
    if (ready.length) return ready[ready.length - 1].id;
    return quizzes.length ? quizzes[0].id : null;
  }

  /* ---------------- segments ---------------- */

  const isWord = tok => !tok.punct;
  const words  = seg => (seg.greek || []).filter(isWord);

  // Only the first segment of each block carries a `lines:` label (Homer labels
  // every segment; Phaedrus labels one per Stephanus letter). Carry the last
  // seen label forward so every segment knows where it sits in the text.
  function segLabel(rdg, i) {
    for (let k = i; k >= 0; k--) {
      const l = rdg.segments[k].lines;
      if (l) return l;
    }
    return "";
  }

  // "56–57" -> {start:56, end:57}; "55" -> {start:55, end:55}.
  // A Stephanus label like "230b" is NOT a verse line and must return null —
  // otherwise Plato gets scored as if page 230 were line 230.
  function lineRange(label) {
    if (!label) return null;
    const s = String(label).trim();
    if (!/^\d+(\s*[–—-]\s*\d+)?$/.test(s)) return null;
    const nums = s.match(/\d+/g);
    return { start: parseInt(nums[0], 10), end: parseInt(nums[nums.length - 1], 10) };
  }

  // How many verse lines a segment is "worth". Verse segments know exactly;
  // prose segments are scored at ~8 Greek words to the line, which is about
  // what a hexameter holds — so a 20-line window means the same amount of
  // reading whether it lands in Homer or in Plato.
  const WORDS_PER_LINE = 8;
  function segWeight(rdg, i) {
    const seg = rdg.segments[i];
    const n = words(seg).length;
    if (!n) return 0;            // speaker labels ("Σωκράτης") are not text to read
    const r = lineRange(seg.lines);
    if (r) return Math.max(1, r.end - r.start + 1);
    return Math.max(1, n / WORDS_PER_LINE);
  }

  // Bare line range for a run of segments: "61–80" / "230b–d"
  function rangeLabel(rdg, from, to) {
    const a = segLabel(rdg, from), b = segLabel(rdg, to);
    const ra = lineRange(a), rb = lineRange(b);
    if (ra && rb) return ra.start === rb.end ? `${ra.start}` : `${ra.start}–${rb.end}`;
    if (!a && !b) return "";
    if (a === b) return a;
    // Stephanus: "230b" + "230d" -> "230b–d"
    const sa = /^(\d+)([a-e])$/.exec(a), sb = /^(\d+)([a-e])$/.exec(b);
    if (sa && sb && sa[1] === sb[1]) return `${a}–${sb[2]}`;
    return `${a}–${b}`;
  }

  // The work, keeping the book number: "Odyssey 5.55–94" -> "Odyssey 5."
  // "Phaedrus 230a–e" -> "Phaedrus ". Without this, an Odyssey 5 window and an
  // Odyssey 7 window would both just say "Odyssey".
  function workPrefix(rdg) {
    const m = /^(.+?)\s+(\d+)\.\s*[\d–—]/.exec(rdg.title);
    if (m) return `${m[1]} ${m[2]}.`;
    return rdg.title.replace(/\s+[\d.–—a-e]+$/, "") + " ";
  }

  // Full citation for a run of segments: "Odyssey 5.61–80", "Phaedrus 230b–230d"
  function cite(rdg, from, to) {
    return workPrefix(rdg) + rangeLabel(rdg, from, to);
  }

  // Citation for a single segment, for example/drill labels.
  const citeSeg = (rdg, i) => cite(rdg, i, i);

  /* ---------------- word panel ---------------- */

  let panelEl = null;
  let selectedEl = null;

  // The panel is created hidden and only shows once a word is actually clicked —
  // otherwise an empty "click a word" bar sits at the bottom of the review and
  // practice pages, where there may be nothing clickable to begin with.
  function mountPanel() {
    panelEl = document.createElement("section");
    panelEl.id = "panel";
    panelEl.className = "hidden";
    panelEl.setAttribute("aria-live", "polite");
    document.body.appendChild(panelEl);
    document.addEventListener("keydown", e => { if (e.key === "Escape") clearPanel(); });
  }

  function clearPanel() {
    if (!panelEl) return;
    if (selectedEl) { selectedEl.classList.remove("sel"); selectedEl = null; }
    panelEl.classList.add("hidden");
    panelEl.innerHTML = "";
    document.body.classList.remove("has-panel");
  }

  function showWord(tok, el) {
    if (!panelEl) return;
    panelEl.classList.remove("hidden");
    document.body.classList.add("has-panel");
    if (selectedEl) selectedEl.classList.remove("sel");
    selectedEl = el || null;
    if (el) el.classList.add("sel");

    const rows = [
      ["Lemma", tok.lemma],
      ["Part of speech", tok.pos],
      ["Parsing", tok.parse],
      ["Meaning", tok.gloss],
      ["Note", tok.note]
    ].filter(([, v]) => v);

    panelEl.innerHTML = `
      <button class="close" title="close">×</button>
      <div class="word-head">
        <span class="form">${esc(tok.w)}</span>
        ${tok.lemma ? `<span class="lemma"><span class="lbl">from </span>${esc(tok.lemma)}</span>` : ""}
      </div>
      <div class="grid">
        ${rows.map(([k, v]) => `<div class="k">${esc(k)}</div><div class="v">${esc(v)}</div>`).join("")}
      </div>`;
    panelEl.querySelector(".close").addEventListener("click", clearPanel);
    panelEl.scrollTop = 0;
  }

  /* ---------------- rendering ---------------- */

  // One segment's Greek. clickable=false renders the same text as inert spans
  // (the practice quiz shows the passage without giving the parsing away).
  function renderGreek(seg, { clickable = true, lineLabel = null } = {}) {
    const gk = document.createElement("div");
    gk.className = "gk";

    if (lineLabel) {
      const ln = document.createElement("span");
      ln.className = "lineno";
      ln.textContent = lineLabel;
      gk.appendChild(ln);
    }

    (seg.greek || []).forEach((tok, i) => {
      if (tok.punct) {
        const sp = document.createElement("span");
        sp.className = "punct";
        sp.textContent = tok.w;
        if (!tok.nospaceBefore) gk.appendChild(document.createTextNode(" "));
        gk.appendChild(sp);
        return;
      }
      if (i > 0) gk.appendChild(document.createTextNode(" "));
      const sp = document.createElement("span");
      sp.className = clickable ? "w" : "w inert";
      sp.textContent = tok.w;
      if (clickable) sp.addEventListener("click", () => showWord(tok, sp));
      gk.appendChild(sp);
    });
    return gk;
  }

  // A full Greek↔English row. Returns the element; the .tr child can be hidden
  // by the caller (practice quiz) and unhidden on reveal.
  function renderSegment(seg, { clickable = true, lineLabel = null, translation = true } = {}) {
    const el = document.createElement("div");
    el.className = "segment";
    el.appendChild(renderGreek(seg, { clickable, lineLabel }));

    const tr = document.createElement("div");
    tr.className = "tr" + (translation ? "" : " hidden");
    tr.textContent = seg.translation || "";
    el.appendChild(tr);
    return el;
  }

  // Whole reading, as on the readings page.
  function renderReading(rdg, opts = {}) {
    const sec = document.createElement("section");
    sec.className = "reading";
    sec.id = rdg.id;

    const h = document.createElement("h2");
    h.textContent = rdg.title || "Untitled reading";
    sec.appendChild(h);

    if (rdg.citation) {
      const c = document.createElement("p");
      c.className = "citation";
      c.textContent = rdg.citation;
      sec.appendChild(c);
    }

    (rdg.segments || []).forEach((seg, i) => {
      sec.appendChild(renderSegment(seg, { ...opts, lineLabel: seg.lines || null }));
    });
    return sec;
  }

  /* ---------------- chrome ---------------- */

  const PAGES = [
    { file: "readings.html", label: "Readings" },
    { file: "review.html",   label: "Review"   },
    { file: "practice.html", label: "Practice" },
    { file: "parse.html",    label: "Parse"    }
  ];

  // Header + nav shared by the three quiz pages. `here` is the current filename.
  function mountChrome(here, quizId) {
    const q = quiz(quizId);

    const header = document.createElement("header");
    header.className = "site";
    header.innerHTML = `
      <h1><a href="index.html">GRK30</a></h1>
      <span class="sub">${q ? esc(q.label) : "no quiz"}${q && q.status === "collecting" ? " — still collecting readings" : ""}</span>`;

    const nav = document.createElement("nav");
    nav.className = "toc";

    const sel = document.createElement("select");
    sel.title = "switch quiz";
    quizzes.forEach(qq => {
      const o = document.createElement("option");
      o.value = qq.id;
      o.textContent = qq.label + (qq.status === "collecting" ? " (collecting)" : "");
      if (qq.id === quizId) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener("change", () => {
      location.search = "?quiz=" + encodeURIComponent(sel.value);
    });
    nav.appendChild(sel);

    PAGES.forEach(p => {
      const sep = document.createElement("span");
      sep.className = "sep";
      sep.textContent = "|";
      nav.appendChild(sep);

      if (p.file === here) {
        const a = document.createElement("a");
        a.className = "here";
        a.textContent = p.label;
        nav.appendChild(a);
      } else {
        const a = document.createElement("a");
        a.href = `${p.file}?quiz=${encodeURIComponent(quizId)}`;
        a.textContent = p.label;
        nav.appendChild(a);
      }
    });

    document.body.insertBefore(nav, document.body.firstChild);
    document.body.insertBefore(header, document.body.firstChild);
    return q;
  }

  /* ---------------- misc ---------------- */

  // Fisher–Yates, on a copy.
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  return {
    QUIZZES: quizzes, READINGS: readings,
    esc, reading, quiz, quizReadings, currentQuizId,
    isWord, words, segLabel, lineRange, segWeight, rangeLabel, cite, citeSeg, WORDS_PER_LINE,
    mountPanel, showWord, clearPanel,
    renderGreek, renderSegment, renderReading,
    mountChrome, shuffle, pick
  };
})();

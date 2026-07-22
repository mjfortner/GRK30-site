/* =========================================================================
   GRK30 data sanity check.  Run:  node validate.js

   Checks the things that silently break the site or the Anki import:
     - every reading belongs to exactly one quiz
     - every question / review example points at a real reading + segment
     - every .tsv has the six header directives, three columns, no dupe lemmas
     - every vocab Front matches a lemma that actually appears in readings.js
       (this is what catches lemmas whose variant hides in parentheses)
   ========================================================================= */

const fs = require("fs");
const path = require("path");

const { READINGS }  = require("./readings.js");
const { QUIZZES }   = require("./quizzes.js");
const { QUESTIONS } = require("./questions.js");
const { REVIEW }    = require("./review.js");

let errors = 0, warnings = 0;
const fail = m => { console.error("  ✗ " + m); errors++; };
const warn = m => { console.warn("  ! " + m); warnings++; };
const ok   = m => console.log("  ✓ " + m);

const byId = new Map(READINGS.map(r => [r.id, r]));

/* ---------- quizzes ---------- */
console.log("\nQuizzes");
{
  const seen = new Map();
  QUIZZES.forEach(q => {
    q.readings.forEach(rid => {
      if (!byId.has(rid)) fail(`${q.id} lists unknown reading "${rid}"`);
      if (seen.has(rid)) fail(`reading "${rid}" is in both ${seen.get(rid)} and ${q.id}`);
      seen.set(rid, q.id);
    });
  });
  READINGS.forEach(r => {
    if (!seen.has(r.id)) fail(`reading "${r.id}" belongs to no quiz`);
  });
  const collecting = QUIZZES.filter(q => q.status === "collecting");
  if (collecting.length === 0) warn("no quiz has status \"collecting\" — new readings have nowhere to land");
  if (collecting.length > 1) fail("more than one quiz is \"collecting\": " + collecting.map(q => q.id).join(", "));
  if (!errors) ok(`${QUIZZES.length} quizzes, ${READINGS.length} readings, each in exactly one quiz`);
}

/* ---------- questions ---------- */
console.log("\nConstruction questions");
{
  const ids = new Set();
  QUESTIONS.forEach(q => {
    if (ids.has(q.id)) fail(`duplicate question id "${q.id}"`);
    ids.add(q.id);

    const r = byId.get(q.readingId);
    if (!r) { fail(`${q.id}: unknown readingId "${q.readingId}"`); return; }
    if (!(q.seg >= 0 && q.seg < r.segments.length))
      fail(`${q.id}: seg ${q.seg} out of range (${r.id} has ${r.segments.length} segments)`);
    ["prompt", "answer", "why"].forEach(f => {
      if (!q[f] || !String(q[f]).trim()) fail(`${q.id}: empty ${f}`);
    });
  });

  // a practice window must never come up empty-handed
  QUIZZES.filter(q => q.readings.length).forEach(quiz => {
    quiz.readings.forEach(rid => {
      const n = QUESTIONS.filter(q => q.readingId === rid).length;
      const segs = byId.get(rid).segments.length;
      if (!n) fail(`${rid} has no construction questions at all`);
      else if (n < segs / 4) warn(`${rid}: only ${n} questions for ${segs} segments — thin coverage`);
    });
  });
  if (!errors) ok(`${QUESTIONS.length} questions, all anchored to real segments`);
}

/* ---------- review ---------- */
console.log("\nReview topics");
{
  REVIEW.forEach(rev => {
    if (!QUIZZES.some(q => q.id === rev.quizId))
      fail(`review block for unknown quiz "${rev.quizId}"`);
    rev.topics.forEach(t => {
      (t.examples || []).forEach(ex => {
        const r = byId.get(ex.readingId);
        if (!r) { fail(`"${t.title}": unknown readingId "${ex.readingId}"`); return; }
        if (!(ex.seg >= 0 && ex.seg < r.segments.length))
          fail(`"${t.title}": seg ${ex.seg} out of range in ${r.id}`);
      });
    });
  });
  QUIZZES.filter(q => q.status === "ready" && q.readings.length).forEach(q => {
    if (!REVIEW.some(r => r.quizId === q.id))
      warn(`${q.id} is "ready" but has no review topics written`);
  });
  const n = REVIEW.reduce((a, r) => a + r.topics.length, 0);
  if (!errors) ok(`${n} topics, all examples resolve`);
}

/* ---------- vocab files ---------- */
console.log("\nVocab decks");
{
  // every lemma that actually occurs in the readings
  const lemmas = new Map();  // readingId -> Set of lemma strings
  READINGS.forEach(r => {
    const set = new Set();
    r.segments.forEach(s => (s.greek || []).forEach(t => {
      if (!t.punct && t.lemma) set.add(t.lemma);
    }));
    lemmas.set(r.id, set);
  });

  const DIRECTIVES = ["#separator:", "#html:", "#notetype:", "#deck:", "#columns:", "#tags column:"];

  QUIZZES.forEach(quiz => {
    quiz.readings.forEach(rid => {
      const file = path.join("vocab", quiz.id, `vocab-${rid}.tsv`);
      if (!fs.existsSync(file)) { fail(`missing ${file}`); return; }

      const lines = fs.readFileSync(file, "utf8").split("\n");
      const head = lines.slice(0, 6);
      DIRECTIVES.forEach((d, i) => {
        if (!head[i] || !head[i].startsWith(d))
          fail(`${file}: line ${i + 1} should start with "${d}"`);
      });

      const rdg = byId.get(rid);
      const expectDeck = `#deck:GRK30 Greek Vocab::${quiz.label}::${rdg.title}`;
      if (head[3] !== expectDeck)
        fail(`${file}: #deck is\n      "${head[3]}"\n    expected\n      "${expectDeck}"`);

      const seen = new Set();
      const known = lemmas.get(rid);
      let rows = 0, unmatched = 0;

      lines.slice(6).forEach((ln, n) => {
        if (!ln.trim()) return;
        rows++;
        const cols = ln.split("\t");
        if (cols.length !== 3)
          fail(`${file}:${n + 7}: ${cols.length} columns, expected 3`);
        const front = cols[0];
        if (seen.has(front)) fail(`${file}: duplicate Front "${front}"`);
        seen.add(front);
        if (!/\bQuiz\d+\b/.test(cols[2] || ""))
          fail(`${file}: row "${front}" has no QuizN tag`);
        // Front must be a lemma the reading actually uses
        if (known && !known.has(front)) { unmatched++; warn(`${file}: Front "${front}" is not a lemma in ${rid}`); }
      });
      if (unmatched === 0) ok(`${file} — ${rows} cards, deck + lemmas all check out`);
    });
  });
}

console.log(`\n${errors ? "✗" : "✓"} ${errors} error(s), ${warnings} warning(s)\n`);
process.exit(errors ? 1 : 0);

# GRK30 — Greek study site

Context for Claude when working in this folder. (Lives here, not in global memory.)

## What this is
The user is taking an advanced Ancient Greek course (GRK30). Each week they prepare
readings; periodically there is a quiz. **A quiz covers a random ~20-line stretch of
any reading assigned since the previous quiz**, and asks the student to translate it,
parse words from it, identify its constructions, and gloss its vocabulary.

So **the quiz — not the week — is the organizing unit of this project.** Readings,
vocab decks, grammar review, and practice quizzes are all grouped by quiz.

## The task — when the user uploads Greek
Four things happen for every new reading. Do all four.

1. **Add the reading** — append one object to the `READINGS` array in `readings.js`
   (schema below). Don't touch the HTML unless changing the UI itself.
2. **Assign it to the open quiz** — add its `id` to the `readings` array of the quiz
   whose `status` is `"collecting"` in `quizzes.js`.
3. **Build its Anki deck** — a new `vocab/<quizId>/vocab-<reading-id>.tsv`
   (see "Vocab decks").
4. **Write its construction questions** — append to `QUESTIONS` in `questions.js`,
   1–3 per segment (see "Practice quiz").

Then run `node validate.js` — it catches every structural mistake listed below.

Open `index.html` in a browser to view. No build step, no server.

## When the user says a quiz's readings are complete
They will say so explicitly ("that's everything for quiz 2"). By now each reading's
study section, vocab deck, and construction questions are already in place (they were
built per reading at upload). All that's left is to close the quiz and write the one
thing that needs the whole set — the review. So:

1. Flip that quiz's `status` from `"collecting"` to `"ready"` in `quizzes.js`.
2. Add a new `{ id:"quizN+1", status:"collecting", readings:[] }` below it, so the
   next readings have somewhere to land.
3. Write that quiz's grammar review: a `REVIEW` block in `review.js` — the
   constructions that actually recur across its readings, with real examples.
4. Re-run `node validate.js`.

## Files
- `index.html` — the hub: lists the quizzes and links to their three pages.
- `readings.html` / `review.html` / `practice.html` — take `?quiz=<id>`.
- `app.js` — shared engine (data lookup, token rendering, word panel, line-weight
  maths, page chrome). Everything page-agnostic lives here.
- `styles.css` — all styling.
- `readings.js` — `READINGS`. **The file that grows each week.**
- `quizzes.js` — `QUIZZES`: which readings belong to which quiz, and its status.
- `questions.js` — `QUESTIONS`: hand-written construction questions.
- `review.js` — `REVIEW`: hand-written grammar topics, per quiz.
- `validate.js` — `node validate.js`. Run it after every change.
- `vocab/<quizId>/vocab-<reading-id>.tsv` — one Anki file per reading.

## Reading object schema
```js
{
  id: "ody5-55-94",                    // unique, no spaces — used for the #anchor
  title: "Odyssey 5.55–94",            // "<Work> <book>.<lines>" — the book number
                                       // matters: it's parsed for citations
  citation: "Homer, Odyssey 5.55–94 — Hermes comes to Calypso's island",
  segments: [                          // each segment = one aligned Greek↔English row
    {
      lines: "56–57",                  // verse line/range, or a Stephanus page ("230b").
                                       // Verse: label EVERY segment. Prose: label the
                                       // first segment of each page; the engine carries
                                       // the label forward.
      translation: "literal English for this chunk",
      greek: [                         // one token per word, in order
        { w:"μῆνιν",                   // the Greek word as it appears
          lemma:"μῆνις, -ιος, ἡ",
          pos:"noun",
          parse:"acc. sg. fem.",
          gloss:"wrath, anger",
          note:"direct object of ἄειδε" },
        { w:".", punct:true }          // punctuation: renders but is NOT clickable
      ]
    }
  ]
}
```

## Conventions
- **Layout:** Greek on the LEFT, literal English on the RIGHT, aligned per segment.
- **Segment size:** clause/sentence-sized. This matters more than it looks: segments
  are the unit the practice quiz cuts its ~20-line window out of, and the unit that
  questions anchor to. Aim for ~8–15 Greek words. Never one giant segment per page.
- **Translation style:** **as literal as possible while still reading sensibly** —
  faithful to case, tense, and word force, but not so wooden it stops making sense.
  Not smooth idiomatic paraphrase. (The practice quiz uses these as its model
  translation answers, so they must be defensible word by word.)
- **Parsing style:** spell it out in full — "aorist active indicative, 3rd singular",
  not "aor. act. ind. 3 sg." (lemma/pos can stay conventional).
- **Every Greek word** is its own clickable token with lemma / pos / parse / gloss,
  plus a syntax `note` where useful. The `note` is not decoration: the practice quiz
  reuses it as the explanation for auto-generated parsing questions, so write it as
  a reason, not a label.
- **Line weight:** the engine scores a verse segment by its line range and a prose
  segment at ~8 Greek words to the line, so a "20-line window" means the same amount
  of reading in Homer and in Plato.

## Practice quiz — what to write and what not to
The practice quiz generates **translation, parsing, and vocabulary** questions
automatically from the token data (the answer key *is* the token's lemma/parse/gloss
and the segment's translation). **Do not hand-write those.** They can never drift out
of sync with the text, and they come for free with a well-parsed reading.

The one thing it cannot derive is **"what construction is this, and why"** — so that
is what `questions.js` holds:

```js
{ id:"ody5-55-94:s12:q1",     // "<readingId>:s<seg>:q<n>", unique
  readingId:"ody5-55-94",
  seg:12,                     // 0-based index into that reading's segments
  type:"syntax",
  prompt:"…",
  answer:"…",
  why:"…" }                   // WHY that answer is right — the reasoning, not a restatement
```

- 1–3 per segment, on segments that have real syntax in them. Skip the ones that are
  just a list of trees.
- Each must be answerable **from its own segment** (plus at most the sentence around
  it) — the quiz only shows the window it selected.
- `why` is the whole point. It should teach the rule and say how to recognize it next
  time, not just assert the answer. Cross-reference the other readings when the same
  construction shows up in them — that's what makes it stick.

## Vocab decks (Anki)
Each reading gets its **own** file: `vocab/<quizId>/vocab-<reading-id>.tsv`.
One reading = one file = one Anki subdeck. Never append a new reading's words to an
existing file.

- **Header:** six `#`-directive lines. Only `#deck:` varies — it nests the reading
  under its **quiz**, which is what lets the user study a whole quiz at once (Anki
  studies a parent deck's subdecks together):
  ```
  #separator:tab
  #html:false
  #notetype:Basic
  #deck:GRK30 Greek Vocab::Quiz 1::Odyssey 7.108–145
  #columns:Front	Back	Tags
  #tags column:3
  ```
  i.e. `GRK30 Greek Vocab::<quiz label>::<reading title>`.
- **Format:** tab-separated, three columns — `Front` (full lemma, e.g. `νῆσος, -ου, ἡ`),
  `Back` (English gloss), `Tags` (space-separated). **Every row's tags must start with
  the `QuizN` tag**, e.g. `Quiz1 Odyssey7 Homer verb`.
- **Front = the lemma string from `readings.js`, character for character.** Watch for
  lemmas whose variant sits inside parentheses (`θηέομαι (θεάομαι)`,
  `ἀγνοιέω (ἀγνοέω)`, `ἐσχάρα, -ας, ἡ (+ -φι)`) — the headword alone won't match.
  `validate.js` checks this.
- **What to include:** reasonably common words a student should learn — most verbs,
  nouns, and adjectives of general vocabulary.
- **What to skip:** super-niche words (specific flora/fauna, ornate epithets) — e.g.
  κέδρος "cedar", σκώψ "scops-owl", ἰοειδής "violet-dark", τανυσίπτερος "long-winged".
  Also skip particles, prepositions, pronouns, and most adverbs.
- **Duplicates:** dedup **within** the file. Across files a repeat is fine and expected
  — each reading's deck stands alone, and Anki merges on the first field at import.
  Do *not* omit a word from a new reading just because an earlier reading taught it.
- **Importing:** Anki → File → Import → select the file(s). Re-importing is safe; Anki
  matches on the first field and updates rather than duplicating. Note `#deck:` only
  places **new** cards — it will not move cards that already exist in another deck.
  (If decks were imported before the quiz nesting existed, they must be dragged under
  their `Quiz N` parent by hand, once.)

Careful with shell dedup checks on Greek: macOS `sort`/`uniq` under a UTF-8 locale
collate distinct accented words as equal. Use `LC_ALL=C`, or check in Python.

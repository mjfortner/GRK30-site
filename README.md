# GRK30 — Greek study site

A little website for studying for **GRK30** (advanced Ancient Greek). Every quiz in
the course covers a random ~20-line stretch of *any* reading assigned since the last
quiz, and asks you to translate it, parse the words, name the constructions, and gloss
the vocabulary. So this site is organized **by quiz**: each quiz gets its own reading
page, grammar review, practice quiz, and Anki vocab deck.

There's no build step and no server. It's just a folder of files you open in a browser.

---

## 1. Getting it running on your computer

You don't need to be a programmer. This is a one-time setup of about ten minutes.

### a. Install the two things you need

- **Git** — the tool that copies the project onto your computer and pulls updates later.
  - **Mac:** open the **Terminal** app (press `⌘ + Space`, type "Terminal", hit Enter),
    paste `git --version`, and press Enter. If it's not installed, macOS will pop up an
    installer — click through it.
  - **Windows:** download and install [Git for Windows](https://git-scm.com/download/win).
    Then use the "Git Bash" app it installs for the commands below.
- **Node.js** — only needed to run the checker script (`node validate.js`). If you just
  want to *read and study*, you can skip this. To install, get the "LTS" version from
  [nodejs.org](https://nodejs.org/).

### b. Copy the project onto your computer ("clone")

In the Terminal (Mac) or Git Bash (Windows), paste this and press Enter:

```sh
git clone https://github.com/mjfortner/GRK30-site.git
```

That creates a folder called `GRK30-site`. Move into it:

```sh
cd GRK30-site
```

### c. Open it

Just open **`index.html`** in your web browser — double-click it in Finder / File
Explorer, or drag it onto a browser window. That's the whole site. From the front page
you can click into any quiz's **Readings**, **Review**, or **Practice quiz**.

Everything runs locally in your browser. Nothing needs to be online.

---

## 2. Getting updates later

This project lives on Max's GitHub. When Max adds new readings or fixes something, your
copy **does not update by itself** — you have to pull the changes down. In the project
folder, run:

```sh
git pull
```

That fetches the latest version. Then just refresh `index.html` in your browser. Do this
whenever you want the newest readings.

> If `git pull` ever complains that you have local changes it would overwrite, it means
> you edited a file yourself. If you didn't mean to, run `git stash` first, then
> `git pull`. If you *did* mean to, that's the workflow in the next section.

---

## 3. How the site is organized

A few plain-text files hold all the content. You never edit the HTML.

| File | What's in it |
|------|--------------|
| `readings.js` | Every reading — the Greek text, word-by-word parsing, and English. **The file that grows each week.** |
| `quizzes.js` | Which readings belong to which quiz, and whether a quiz is still "collecting" readings or "ready" to study. |
| `questions.js` | Hand-written "what construction is this, and why" questions for the practice quiz. |
| `review.js` | The grammar review write-up for each quiz. |
| `vocab/<quiz>/vocab-<reading>.tsv` | One Anki vocabulary deck per reading. |
| `validate.js` | A checker you run to make sure nothing is broken. |

The web pages (`index.html`, `readings.html`, `review.html`, `practice.html`) read from
those files. **A quiz — not a week — is the unit of study:** readings, vocab, and review
are all grouped under the quiz they'll be tested on.

---

## 4. Adding a new reading

The easiest way to add readings is to hand the Greek text to **Claude Code** in this
folder — the project's `CLAUDE.md` file tells it exactly the four steps to follow. But
here's what actually has to happen for each new reading, so you know what's going on:

1. **Add the reading** — one entry appended to the `READINGS` list in `readings.js`,
   with the Greek broken into segments and every word given a lemma, part of speech,
   parse, and gloss.
2. **Assign it to the open quiz** — add its `id` to the quiz whose status is
   `"collecting"` in `quizzes.js`. (Only one quiz is ever "collecting" at a time — that's
   the one new readings land in.)
3. **Build its vocab deck** — a new `vocab/<quizId>/vocab-<reading-id>.tsv` file.
4. **Write its construction questions** — a few entries in `questions.js`.

Then check your work:

```sh
node validate.js
```

That script catches the common mistakes — a reading in no quiz, a question pointing at a
line that doesn't exist, a vocab word whose spelling doesn't match the text, a malformed
Anki file. Fix anything it flags with a `✗`, and re-run until it's clean.

### When a quiz's readings are all in

Once every reading for a quiz is added, you "close" that quiz:

1. In `quizzes.js`, change that quiz's `status` from `"collecting"` to `"ready"`.
2. Add a new empty quiz below it (`{ id:"quizN+1", status:"collecting", readings:[] }`)
   so the next readings have somewhere to go.
3. Write that quiz's grammar review in `review.js`.
4. Run `node validate.js` again.

### Saving your additions back

If you're contributing readings back to the shared copy (and have access), commit and
push:

```sh
git add -A
git commit -m "Add <the reading> to quiz N"
git push
```

---

## 5. Studying vocabulary with Anki

Each reading comes with its own **Anki** deck so you can drill vocabulary. Anki is a free
flashcard app — get it from [apps.ankiweb.net](https://apps.ankiweb.net/).

The decks live in the `vocab/` folder, grouped by quiz, as `.tsv` files (tab-separated
text — Greek lemma on one side, English gloss on the other).

**To import into Anki:**

1. Open Anki.
2. **File → Import…**
3. Select a `.tsv` file (e.g. `vocab/quiz1/vocab-ody5-55-94.tsv`) — or several at once.
4. Anki reads the settings baked into the file and files each reading's cards under its
   quiz, like `GRK30 Greek Vocab :: Quiz 1 :: Odyssey 5.55–94`.

Because the decks nest under a quiz, you can **study a whole quiz's vocabulary at once**
by studying its `Quiz N` parent deck — Anki drills all the readings under it together.

Re-importing after an update is safe: Anki matches cards on the Greek word and updates
them rather than making duplicates. One caveat — importing only *files* new cards; it
won't move a card you already have into a different deck. If you imported some decks
before the quiz-grouping existed, you may need to drag them under their `Quiz N` parent
in Anki once, by hand.

---

## 6. Quick reference

```sh
git clone https://github.com/mjfortner/GRK30-site.git   # get it, first time only
cd GRK30-site                                            # go into the folder
git pull                                                 # get the latest updates
node validate.js                                         # check nothing is broken
```

Then open **`index.html`** in a browser to study. That's it.

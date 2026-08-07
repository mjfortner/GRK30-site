/* =========================================================================
   GRK30 quiz definitions.

   A quiz covers every reading assigned since the previous quiz. Each quiz is
   the unit of study: its own reading page, review page, practice quiz, and
   Anki deck (GRK30 Greek Vocab::<label>::<reading title>).

   status:
     "collecting" — still receiving readings. New readings get appended here.
     "ready"      — all readings are in; time to study.

   Workflow: readings land in the "collecting" quiz as they arrive. When Max
   says the quiz's readings are complete, flip it to "ready" and open the next
   "collecting" quiz below it.
   ========================================================================= */

const QUIZZES = [
  {
    id: "quiz1",
    label: "Quiz 1",
    status: "ready",
    readings: ["ody5-55-94", "ody7-81-107", "ody7-108-145", "phdr-230a-e"]
  },
  {
    id: "quiz2",
    label: "Quiz 2",
    status: "ready",
    readings: ["theoc1-1-63", "theoc1-64-118", "theoc1-120-152", "theoc11-1-18"]
  },
  {
    id: "quiz3",
    label: "Quiz 3",
    status: "collecting",
    readings: ["theoc11-19-81"]
  }
];

if (typeof module !== "undefined") module.exports = { QUIZZES };

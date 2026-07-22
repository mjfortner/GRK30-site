/* =========================================================================
   GRK30 grammar reference — the fundamentals behind parsing a verb.

   Static, quiz-independent scaffolding: the ending-sets, the augment and
   reduplication rules, the tense-formation markers, and the mood signs. The
   Parse Trainer (parse.html) renders these sections and links into them by
   `id` whenever the drill catches you missing that feature, so the anchors
   below are load-bearing — keep them in sync with the FEATURE→ref map in
   parse.html.

   Section shape:
     { id, title, intro,
       tables: [ { caption, cols:[...], rows:[[...], ...] } ],
       notes:  [ "…", … ] }          // tables and notes both optional
   ========================================================================= */

const GRAMMAR = [

  {
    id: "parse-routine",
    title: "How to parse any verb",
    intro:
      "Parsing is decomposition, not recall. Read a finite verb off its slots " +
      "in this order — the ending first, because it is the part that is always " +
      "there and always means the same thing.",
    notes: [
      "1. The ENDING → person, number, and voice. Active endings (-ω, -εις, -ει… / -ον, -ες, -ε…) look nothing like middle/passive ones (-ομαι, -ῃ, -εται… / -όμην, -ου, -ετο…). Learn the two columns cold and half the parse falls out immediately.",
      "2. Primary or secondary ending? Primary (-ω, -ει, -ουσι; -μαι, -ται, -νται) means present, future, perfect, or ANY subjunctive. Secondary (-ον, -ε, -ν; -μην, -το, -ντο) means an augmented past tense or ANY optative.",
      "3. The FRONT of the word → tense. A syllabic augment (ἐ-) or a lengthened initial vowel marks a past-tense indicative. A reduplication (consonant + ε: λέ-, γέ-, πέ-) marks the perfect system, in every mood.",
      "4. The STEM and any suffix → which tense exactly. -σ- before the ending → future or first aorist; -θη-/-η- → aorist passive; -κα- after reduplication → perfect active; a bare changed stem with secondary endings → second aorist.",
      "5. The MOOD SIGN, if the endings were primary/secondary-ambiguous. Long ω/η running through the thematic vowel → subjunctive; -οι-/-αι-/-ιη- → optative; the special imperative endings → imperative.",
      "Two warnings. The augment lives ONLY in the indicative: an aorist subjunctive, optative, participle or infinitive has no augment, so their 'pastness' is aspect (a single completed action), not past time. And a second aorist (ἔλαβε) wears the same augment and thematic endings as an imperfect (ἔβαλλε) — only the stem tells them apart, so you must know the principal parts."
    ]
  },

  {
    id: "personal-endings",
    title: "Personal endings — the two columns",
    intro:
      "Every finite form ends in one of these. The active set and the " +
      "middle/passive set are the first thing to recognize (that is the voice); " +
      "primary vs. secondary within each is the second (present-type vs. " +
      "past-type / subjunctive vs. optative). Shown with the thematic vowel a " +
      "regular ω-verb carries.",
    tables: [
      {
        caption: "Active",
        cols: ["", "Primary — pres./fut./subj.", "Secondary — impf./aor./opt."],
        rows: [
          ["1 sg.", "-ω",        "-ον / -ν"],
          ["2 sg.", "-εις",      "-ες / -ς"],
          ["3 sg.", "-ει",       "-ε(ν) / —"],
          ["1 pl.", "-ομεν",     "-ομεν / -μεν"],
          ["2 pl.", "-ετε",      "-ετε / -τε"],
          ["3 pl.", "-ουσι(ν)",  "-ον / -σαν"]
        ]
      },
      {
        caption: "Middle / passive",
        cols: ["", "Primary", "Secondary"],
        rows: [
          ["1 sg.", "-ομαι",   "-όμην"],
          ["2 sg.", "-ῃ (-ει)", "-ου"],
          ["3 sg.", "-εται",   "-ετο"],
          ["1 pl.", "-όμεθα",  "-όμεθα"],
          ["2 pl.", "-εσθε",   "-εσθε"],
          ["3 pl.", "-ονται",  "-οντο"]
        ]
      }
    ],
    notes: [
      "Voice first: if the ending has an -μ-/-σθ-/-τ- + vowel shape (-μαι, -σαι, -ται, -μεθα, -σθε, -νται and their secondaries), it is middle or passive. In the present, imperfect, and perfect the middle and passive are identical in form — the label 'middle/passive' just means the ending cannot decide, only the aorist (-θη-) and future can.",
      "Athematic verbs (εἰμί, φημί, δίδωμι, τίθημι, ἵστημι, δείκνυμι) attach primary active endings directly: -μι, -ς, -σι(ν), -μεν, -τε, -ασι(ν). Their secondary active is -ν, -ς, —, -μεν, -τε, -σαν. Memorize these paradigms separately; they are common in Homer.",
      "The 2 sg. middle is the slippery one: primary -ῃ / -ει (from -σαι with the σ lost), secondary -ου (from -σο). When a σ survives between vowels (as after an athematic stem) you see the fuller -σαι, -σο."
    ]
  },

  {
    id: "augment-reduplication",
    title: "Augment & reduplication — reading the front of the word",
    intro:
      "What sits in front of the stem tells you the tense system at a glance, " +
      "and whether you are even in the indicative.",
    notes: [
      "Syllabic augment: a consonant-initial stem prefixes ἐ- → λύω → ἔλυον, γράφω → ἔγραφον. This marks the imperfect, aorist, or pluperfect INDICATIVE.",
      "Temporal augment: a vowel-initial stem lengthens its first vowel instead — α, ε → η; ο → ω; ι → ῑ; υ → ῡ; αι, ᾳ → ῃ; αυ → ηυ; οι → ῳ. So ἀκούω → ἤκουον, ἐθέλω → ἤθελον, ὁράω → ἑώρων.",
      "The augment appears ONLY in the indicative. No augment on a subjunctive, optative, participle, or infinitive — even an aorist one. If you translate an unaugmented aorist as past time you are mis-parsing its aspect for tense.",
      "Reduplication: the perfect repeats the initial consonant with ε — λύω → λέλυκα, γράφω → γέγραφα, παύω → πέπαυμαι. A stem beginning with a vowel, or an awkward consonant cluster, reduplicates by lengthening or by a bare ἐ- instead (ἀγγέλλω → ἤγγελκα).",
      "Reduplication is the perfect system's fingerprint and it stays in EVERY mood (λελυκώς, λελύσθαι), which is exactly how you tell a reduplicated perfect from an augmented aorist. The pluperfect stacks an augment in front of the reduplication: ἐ-λε-λύκειν."
    ]
  },

  {
    id: "tense-markers",
    title: "Tense formation — the tell-tale suffix",
    intro:
      "Once you know it is a verb, this is the marker that fixes which tense. " +
      "Examples from λύω except where a second-aorist verb is needed.",
    tables: [
      {
        caption: null,
        cols: ["Tense system", "Tell-tale marker", "Example"],
        rows: [
          ["Present / Imperfect", "plain present stem; the imperfect adds the augment", "λύει / ἔλυε"],
          ["Future",              "-σ- between stem and ending, primary endings",      "λύσει"],
          ["First (sigmatic) aorist", "augment + -σα-, secondary endings",             "ἔλυσε"],
          ["Second (strong) aorist",  "augment + a CHANGED stem, thematic secondary endings", "ἔλαβε (λαμβάνω)"],
          ["Aorist passive",      "augment + -θη- (or bare -η-), active-type endings", "ἐλύθη"],
          ["Perfect active",      "reduplication + -κα-",                              "λέλυκε"],
          ["Perfect mid./pass.",  "reduplication + endings straight on the stem",      "λέλυται"],
          ["Pluperfect",          "augment + reduplication + -(ε)ι-",                   "ἐλελύκει"]
        ]
      }
    ],
    notes: [
      "The trap: a second aorist (ἔλαβε, ἔβαλε, εἶδε) carries the same augment and the same thematic secondary endings as an imperfect. Only the STEM separates them — the imperfect keeps the present stem (ἔβαλλε 'was throwing'), the second aorist uses a distinct one (ἔβαλε 'threw'). This is why the principal parts are worth memorizing.",
      "A -σ- with primary endings (λύσει) is future; the same -σ- with an augment and secondary endings (ἔλυσε) is aorist. The augment is the deciding vote.",
      "Homer routinely drops the augment and doubles consonants (ἔλλαβε), and shows -σκ- iteratives (ἔχεσκε 'used to hold'). Parse to the underlying form; the epic surface is cosmetic."
    ]
  },

  {
    id: "mood-signs",
    title: "Mood & the non-finite forms",
    intro:
      "If the endings alone left the mood open, this is the sign that settles " +
      "it — and the shapes to recognize for the infinitive and the participle, " +
      "which carry tense and voice but not person.",
    tables: [
      {
        caption: null,
        cols: ["Mood", "Sign to look for", "Example"],
        rows: [
          ["Indicative",  "the plain primary/secondary endings, no extra marker", "λύει, ἔλυε"],
          ["Subjunctive", "lengthened thematic vowel ω/η running throughout, primary endings", "λύῃ, λύωμεν"],
          ["Optative",    "-οι- (thematic), -αι- (1st aorist), -ιη- (athematic); secondary endings", "λύοι, λύσαι(το)"],
          ["Imperative",  "its own endings: -ε, -έτω, -ετε, -όντων; mid. -ου, -έσθω", "λῦε, λυέτω"]
        ]
      },
      {
        caption: "Non-finite: tense + voice, no person",
        cols: ["Form", "Endings by tense/voice", "Example"],
        rows: [
          ["Infinitive", "-ειν (pres. act.), -σαι (1st aor. act.), -εῖν (2nd aor.), -ναι (perf./athem.), -(ε)σθαι (mid./pass.)", "λύειν, λῦσαι, λελυκέναι, λύεσθαι"],
          ["Participle", "act. -ων/-ουσα/-ον, aor. -σας/-σασα/-σαν, perf. -κώς/-κυῖα/-κός; mid./pass. -μενος/-η/-ον", "λύων, λύσας, λελυκώς, λυόμενος"]
        ]
      }
    ],
    notes: [
      "A participle is parsed like an adjective on top of a verb: give its tense and voice (from the verb markers above) AND its case, gender, and number (from the -ος/-η/-ον or third-declension endings). 'aorist active participle, masculine nominative singular' is the full answer.",
      "The -μενος/-μένη/-μενον shape is the giveaway for a middle/passive participle in the present, future, and perfect; the aorist passive participle instead ends -θείς/-θεῖσα/-θέν (from the -θη- marker).",
      "Because subjunctives and optatives never take an augment, an aorist subjunctive (λύσῃ) or optative (λύσαι) shows the -σα-/-σ- aorist marker with no ἐ- in front. Read the -σ- as aorist aspect, not the endings as present."
    ]
  },

  {
    id: "noun-routine",
    cat: "noun",
    title: "How to parse a noun or adjective",
    intro:
      "A noun tells you two things you parse — case and number — and one you " +
      "learn with the word: its gender. An adjective changes all three to agree " +
      "with the noun it modifies, so for an adjective you parse the gender too.",
    notes: [
      "1. The LEMMA gives you the declension, and the declension tells you which ending-set to read against. The dictionary form lists the genitive singular for exactly this reason: -ης/-ας → 1st declension, -ου → 2nd, -ος (on a changed stem) → 3rd. νῆσος, -ου → 2nd; νύξ, νυκτός → 3rd.",
      "2. The ENDING gives case and number, once you know the set. -ου is a 2nd-declension genitive singular; -ων is a genitive plural in every declension; -οις/-αις/-σι(ν) are dative plurals. Learn the three tables below as three shapes, not thirty forms.",
      "3. GENDER: for a noun it is fixed — memorize it with the noun (the article ὁ / ἡ / τό is the cleanest tag). For an adjective it is live: μέγας (m.), μεγάλη (f.), μέγα (n.). When an adjective ending is ambiguous, the noun it agrees with settles the gender.",
      "Ambiguities to expect: the nominative and vocative are often identical; the neuter nominative and accusative are ALWAYS identical (both sg. -ον and pl. -α); a bare -α can be neuter plural (nom./acc.) or 1st-declension feminine singular; -ων is genitive plural everywhere. Use agreement and context to break the tie.",
      "Homer's endings differ on the surface: genitive singular -οιο/-οο for -ου, genitive plural -άων/-έων for -ων, dative plural -οισι/-ῃσι/-εσσι for -οις/-αις/-σι, and the old instrumental/locative -φι. Parse to the classical form underneath."
    ]
  },

  {
    id: "case-endings",
    cat: "noun",
    title: "Case endings — the three declensions",
    intro:
      "The ending carries case and number. Read it against the right column: " +
      "the lemma's genitive singular told you which declension you are in.",
    tables: [
      {
        caption: "1st declension — mostly feminine (-η / -α), some masculine (-ης)",
        cols: ["Case", "Singular", "Plural"],
        rows: [
          ["Nom.", "-η / -α",   "-αι"],
          ["Gen.", "-ης / -ας", "-ῶν"],
          ["Dat.", "-ῃ / -ᾳ",   "-αις"],
          ["Acc.", "-ην / -αν", "-ας"],
          ["Voc.", "-η / -α",   "-αι"]
        ]
      },
      {
        caption: "2nd declension — masc./fem. (-ος), neuter (-ον)",
        cols: ["Case", "Singular", "Plural"],
        rows: [
          ["Nom.", "-ος / -ον", "-οι / -α"],
          ["Gen.", "-ου",       "-ων"],
          ["Dat.", "-ῳ",        "-οις"],
          ["Acc.", "-ον",       "-ους / -α"],
          ["Voc.", "-ε / -ον",  "-οι / -α"]
        ]
      },
      {
        caption: "3rd declension — endings on the stem (find the stem in the gen. sg.)",
        cols: ["Case", "Singular", "Plural"],
        rows: [
          ["Nom.", "-ς or — (lengthened stem)", "-ες / -α (neut.)"],
          ["Gen.", "-ος",  "-ων"],
          ["Dat.", "-ι",   "-σι(ν)"],
          ["Acc.", "-α / -ν", "-ας / -α (neut.)"],
          ["Voc.", "— (bare stem)", "-ες / -α (neut.)"]
        ]
      }
    ],
    notes: [
      "In every declension: the genitive plural is -ων, the neuter nominative and accusative match, and the dative plural has an ι or σι in it. Those three facts alone resolve a large share of forms.",
      "3rd-declension forms are built on the stem you get by removing -ος from the genitive singular: σῶμα, σώματ-ος → dative σώματ-ι, accusative σῶμα, genitive plural σωμάτ-ων. The nominative singular often hides the stem (a final consonant is dropped or altered), so trust the genitive."
    ]
  },

  {
    id: "case-functions",
    cat: "noun",
    title: "What each case does",
    intro:
      "Naming the case is half the job; knowing what it is doing in the sentence " +
      "is the other half, and it is what the parse is for.",
    tables: [
      {
        caption: null,
        cols: ["Case", "Core job", "Usually rendered"],
        rows: [
          ["Nominative", "subject; predicate after 'to be'", "the … (does)"],
          ["Genitive",   "possession; source/separation; the whole (partitive); with many prepositions", "of / from …"],
          ["Dative",     "indirect object; means or instrument; place or time where; with prepositions of rest", "to / for / with / by / at …"],
          ["Accusative", "direct object; extent of space or time; motion toward (with a preposition or -δε)", "the … (is done to); toward …"],
          ["Vocative",   "direct address", "O …!"]
        ]
      }
    ],
    notes: [
      "A bare genitive or dative with no preposition is doing one of these jobs on its own — genitive of possession/source, dative of means or indirect object. Reach for a preposition in your English ('of', 'with', 'to') and see which fits the sense.",
      "With prepositions the case is a strong clue to meaning: the same preposition often takes the genitive for motion-from, the dative for rest-at, and the accusative for motion-toward (e.g. παρά + gen. 'from beside', + dat. 'beside', + acc. 'to beside')."
    ]
  }

];

if (typeof module !== "undefined" && module.exports) module.exports = { GRAMMAR };

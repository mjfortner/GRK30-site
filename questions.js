/* =========================================================================
   GRK30 construction questions.

   These are the questions that CANNOT be derived from readings.js. The practice
   quiz already generates translation, parsing, and vocabulary questions straight
   out of the token data (a token's own lemma/parse/gloss/note is the answer key).
   What it can't generate is "what construction is this, and why" — so that lives
   here, hand-written, anchored to the segment it asks about.

   {
     id:        "<readingId>:s<seg>:q<n>",   // unique
     readingId: "ody5-55-94",                // must exist in READINGS
     seg:       12,                          // 0-based index into that reading's segments
     type:      "syntax",
     prompt:    "the question",
     answer:    "the model answer",
     why:       "why that answer is right — the reasoning, not just the label"
   }

   The practice quiz pulls only the questions whose `seg` falls inside the
   ~20-line window it selected, so every question must be answerable from its
   own segment (plus, at most, the sentence around it).
   ========================================================================= */

const QUESTIONS = [

  /* ================= Odyssey 5.55–94 ================= */

  { id:"ody5-55-94:s0:q1", readingId:"ody5-55-94", seg:0, type:"syntax",
    prompt:"ἀλλ᾽ ὅτε δὴ … ἀφίκετο — what kind of clause is this, and what does it tell you to expect next?",
    answer:"A temporal clause introduced by ὅτε with the aorist indicative ἀφίκετο: “but when he had reached…”. It is subordinate, so a main clause must follow — and it does, in the next line (ἤιεν).",
    why:"ὅτε + a past indicative states a single completed event in past time, not a repeated or hypothetical one (that would need ὅτε + optative, or ὅταν + subjunctive). δή sharpens it to “just when, at the very moment when.” Homer builds long sentences this way: a ὅτε-clause holds the action in suspense until the main verb lands." },

  { id:"ody5-55-94:s0:q2", readingId:"ody5-55-94", seg:0, type:"syntax",
    prompt:"What is ἐοῦσαν doing, and what does it agree with?",
    answer:"It is the present participle of εἰμί (epic ἐών, ἐοῦσα, ἐόν), fem. acc. sg., agreeing with νῆσον, with τηλόθι as its predicate: “the island, being far off / lying far away.”",
    why:"The participle is circumstantial, attached to the object of ἀφίκετο. Note the uncontracted epic form: Attic would give οὖσαν. Homer regularly leaves such vowels uncontracted, and spotting ἐών/ἐοῦσα as simply “being” is worth a lot in reading speed." },

  { id:"ody5-55-94:s1:q1", readingId:"ody5-55-94", seg:1, type:"syntax",
    prompt:"ὄφρα μέγα σπέος ἵκετο — what does ὄφρα mean here, and how do you know it isn't the other sense?",
    answer:"Here ὄφρα means “until,” introducing a temporal clause with the aorist indicative ἵκετο: “he kept going until he came to a great cave.”",
    why:"ὄφρα has two lives: with the subjunctive/optative it is a purpose conjunction (“in order that”), but with a plain past indicative it is temporal (“until”). ἵκετο is indicative, so the sense must be temporal. The imperfect ἤιεν (“kept going”) sets up exactly the kind of ongoing action an “until” clause terminates." },

  { id:"ody5-55-94:s1:q2", readingId:"ody5-55-94", seg:1, type:"syntax",
    prompt:"Explain the form ἤπειρόνδε.",
    answer:"ἤπειρος (“mainland”) in the accusative plus the enclitic suffix -δε, which marks the goal of motion: “to the mainland, landward.”",
    why:"-δε is not a preposition but a suffix that attaches to an accusative to express motion toward (cf. οἶκόνδε “homeward,” Ἀθήναζε). It does the work of εἰς + accusative, which is why there is no preposition in the clause. The accent on ἤπειρόνδε shifts because the enclitic adds a syllable." },

  { id:"ody5-55-94:s2:q1", readingId:"ody5-55-94", seg:2, type:"syntax",
    prompt:"τῷ ἔνι — what is unusual about ἔνι here, and how does τῷ function?",
    answer:"ἔνι is epic ἐν with its accent thrown back (anastrophe), following its object instead of preceding it. τῷ is a relative/demonstrative dative referring back to σπέος: “in which (cave) the nymph was dwelling.”",
    why:"Anastrophe — a disyllabic preposition retracting its accent when it follows its noun — is a standing Homeric feature; the same thing happens to σπέος ἀμφί and περὶ σπείους later in this passage. Recognizing it stops you hunting for a verb ἔνι that doesn't exist." },

  { id:"ody5-55-94:s3:q1", readingId:"ody5-55-94", seg:3, type:"syntax",
    prompt:"τὴν δ᾽ ἔνδοθι τέτμεν ἐοῦσαν — what kind of participle is ἐοῦσαν, and why isn't it circumstantial?",
    answer:"Supplementary: it completes the sense of the verb of finding. τέτμεν takes an object (τήν) plus a participle telling you in what state she was found — “he found her being inside.”",
    why:"Verbs of finding, perceiving, and showing (εὑρίσκω, τέτμον, ὁράω, δείκνυμι) take a supplementary participle agreeing with their object; the participle is not a loose add-on but part of what the verb asserts. Contrast the genuinely circumstantial ἐοῦσαν back in line 55, which merely describes the island." },

  { id:"ody5-55-94:s4:q1", readingId:"ody5-55-94", seg:4, type:"syntax",
    prompt:"Parse the case-form ἐσχαρόφιν and explain what it is doing.",
    answer:"It is ἐσχάρα (“hearth”) with the old case-ending -φι(ν), here locatival and governed by ἐπί: “on the hearth.” It stands in for what Attic would express with ἐπὶ τῆς ἐσχάρας.",
    why:"-φι(ν) is an inherited Homeric ending that can do duty for a genitive, dative, instrumental, or locative, singular or plural (cf. ἶφι “by force,” ναῦφι “from the ships”). It is a form you can only learn to recognize, not derive — and Homer uses it freely, often just because it fits the metre." },

  { id:"ody5-55-94:s4:q2", readingId:"ody5-55-94", seg:4, type:"syntax",
    prompt:"πῦρ μὲν … — what does this μέν set up, and where is it answered?",
    answer:"It sets up a contrast that is answered by τηλόσε δ᾽ ὀδμή in the following clause: on the one hand the fire on the hearth, on the other the fragrance spreading over the island.",
    why:"μέν … δέ is Homer's basic way of organizing a description into balanced panels. Reading μέν as a flag — “something is about to be set against this” — lets you predict the shape of the sentence before you meet the δέ. Here it structures the whole cave-scene: the fire, then the scent, then Calypso singing." },

  { id:"ody5-55-94:s5:q1", readingId:"ody5-55-94", seg:5, type:"syntax",
    prompt:"δαιομένων is a genitive plural participle. What does it agree with, and what is the construction?",
    answer:"It agrees with κέδρου … θύου, the genitives of source dependent on ὀδμή: “the fragrance of cedar and citron-wood as they burned.” It is an attributive/circumstantial participle in agreement, not a genitive absolute.",
    why:"This is the classic trap. A genitive absolute requires a noun and participle in the genitive that are grammatically independent of the rest of the sentence. Here the genitives κέδρου and θύου are already tied into the clause as the source-genitives of ὀδμή, so the participle agreeing with them cannot be “absolute.” The test is always: does the genitive noun have another job in the sentence? If yes, it is not absolute." },

  { id:"ody5-55-94:s5:q2", readingId:"ody5-55-94", seg:5, type:"syntax",
    prompt:"ὀδώδει is a pluperfect. Why does it translate as an imperfect?",
    answer:"ὄζω belongs to the class of verbs whose perfect has present force (“to give off a smell” = to be in a state of smelling); its pluperfect therefore carries imperfect force: “a fragrance was wafting / hung over the island.”",
    why:"When a perfect denotes a resulting state rather than a completed act, the pluperfect denotes that state in the past — not an action prior to a past action. The same thing is at work with πεφύκει (“had grown” = “stood growing”) and τεθήλει (“was teeming”) a few lines later, and with μέμηλεν and ἄνωγεν, whose perfects are simply presents." },

  { id:"ody5-55-94:s6:q1", readingId:"ody5-55-94", seg:6, type:"syntax",
    prompt:"Identify the case usage of ὀπὶ καλῇ and of χρυσείῃ κερκίδ᾽.",
    answer:"ὀπὶ καλῇ is a dative of manner/means with ἀοιδιάουσα — singing “with a beautiful voice.” χρυσείῃ κερκίδ(ι) is a dative of instrument with ὕφαινεν — weaving “with a golden shuttle.”",
    why:"Both are the plain instrumental dative, with no preposition, which is the default in Homer for the thing by which an action is performed. Note that κερκίδ᾽ is elided κερκίδι, not an accusative — the adjective χρυσείῃ is unambiguously dative and pins the case down. Letting the adjective disambiguate an elided noun is a habit worth building." },

  { id:"ody5-55-94:s6:q2", readingId:"ody5-55-94", seg:6, type:"syntax",
    prompt:"How many participles modify the subject 'she' in this segment, and what does each add?",
    answer:"Two, both circumstantial and both nominative feminine: ἀοιδιάουσ(α) (“singing”) and ἐποιχομένη (“plying, going to and fro at” the loom, with ἱστόν as its object). The finite verb is ὕφαινεν.",
    why:"Homer loves stacking circumstantial participles around one finite verb to build a picture — here, three simultaneous actions collapsed into one clause. The trick when reading is to find the finite verb first (ὕφαινεν) and hang the participles off it, rather than trying to translate in word order." },

  { id:"ody5-55-94:s7:q1", readingId:"ody5-55-94", seg:7, type:"syntax",
    prompt:"σπέος ἀμφί — explain the word order and the accent.",
    answer:"Anastrophe again: the preposition ἀμφί follows its accusative object σπέος and throws its accent back to the first syllable. “Around the cave.”",
    why:"Postposition of a preposition after its noun is normal in Homer and is signalled by the retracted accent. If you read ἀμφί as an adverb here you would leave σπέος stranded without a construction — the accusative demands to be governed by something, and ἀμφί is it. (Contrast line 72, where ἀμφὶ genuinely is adverbial and has no object.)" },

  { id:"ody5-55-94:s7:q2", readingId:"ody5-55-94", seg:7, type:"syntax",
    prompt:"πεφύκει — parse it and explain its force.",
    answer:"Pluperfect active indicative, 3rd singular of φύω, used intransitively: “had grown up / stood growing.” With τηλεθόωσα agreeing with ὕλη.",
    why:"φύω is transitive in the present (“make grow”) but its perfect system is intransitive and stative (πέφυκα = “I am by nature, I have grown”). So the pluperfect describes the standing condition of the wood, not an action completed before another action. This is the same stative-perfect logic as ὀδώδει above." },

  { id:"ody5-55-94:s9:q1", readingId:"ody5-55-94", seg:9, type:"syntax",
    prompt:"ἔνθα δέ τ᾽ ὄρνιθες — what is this τε doing? It doesn't mean 'and'.",
    answer:"It is the “epic” or generalizing τε, which marks a statement as a general or permanent truth rather than a one-off event. It is not translated.",
    why:"This τε appears in descriptions of how things habitually are, and in general relative clauses — you meet it again three segments later in τῇσίν τε θαλάσσια ἔργα μέμηλεν, and in οὐ γάρ τ᾽ ἀγνῶτες θεοί at 79. If you try to make it coordinate two things you will look for a second member that never arrives. Recognize it and move on." },

  { id:"ody5-55-94:s11:q1", readingId:"ody5-55-94", seg:11, type:"syntax",
    prompt:"τῇσίν τε θαλάσσια ἔργα μέμηλεν — account for the number of the verb and for the dative.",
    answer:"ἔργα is a neuter plural subject and takes a singular verb (μέμηλεν). τῇσιν is dative plural feminine, the epic form of αἷς, a relative pronoun with κορῶναι as antecedent: “to whom the works of the sea are a care.”",
    why:"Two Greek habits in one line. First, neuter plural subjects regularly take a singular verb — a rule that holds from Homer through Attic prose and that catches people out constantly. Second, μέλω is used with the thing cared about as subject and the person as dative: literally “the sea's works are a care to them,” not “they care about the sea's works.”" },

  { id:"ody5-55-94:s12:q1", readingId:"ody5-55-94", seg:12, type:"syntax",
    prompt:"τετάνυστο and τεθήλει are both pluperfects, but they behave differently. How?",
    answer:"τετάνυστο is a true pluperfect middle/passive: the vine “had been trained/spread out” around the cave — a state resulting from a prior action. τεθήλει is a stative pluperfect of θάλλω with imperfect force: it “was teeming/flourishing” with grape-clusters.",
    why:"The difference is lexical, not grammatical: τανύω has an ordinary passive perfect, whereas θάλλω (like φύω, ὄζω) forms a perfect that simply means “be in bloom.” You have to know which verbs are stative in the perfect. σταφυλῇσι is a dative of respect with τεθήλει — flourishing with respect to its clusters." },

  { id:"ody5-55-94:s13:q1", readingId:"ody5-55-94", seg:13, type:"syntax",
    prompt:"Explain πλησίαι ἀλλήλων and ἄλλυδις ἄλλη.",
    answer:"πλησίαι (“near”) is a predicative adjective with κρῆναι and governs a genitive, ἀλλήλων: “near to one another.” ἄλλυδις ἄλλη is a distributive idiom: “one in one direction, another in another.”",
    why:"Adjectives of nearness, like verbs of the same idea, take the genitive. The ἄλλος … ἄλλος idiom is worth memorizing as a unit: Greek says “another elsewhere” where English needs a whole clause (“each turned a different way”). Trying to translate the two words separately produces nonsense." },

  { id:"ody5-55-94:s15:q1", readingId:"ody5-55-94", seg:15, type:"syntax",
    prompt:"ἔνθα κ᾽ … θηήσαιτο … καὶ τερφθείη — identify the construction precisely.",
    answer:"A potential optative: κε (epic = ἄν) with the aorist optatives θηήσαιτο (middle) and τερφθείη (passive). “There even an immortal, coming upon it, would gaze in wonder and be delighted.”",
    why:"ἄν/κε + optative states what would happen under some (often unstated) condition — the hallmark of the potential optative. Here the condition is smuggled in by the participle ἐπελθών, “were he to come upon it”: a conditional participle standing in for a protasis. So the sentence is effectively a future-less-vivid condition with its “if” clause turned into a participle." },

  { id:"ody5-55-94:s15:q2", readingId:"ody5-55-94", seg:15, type:"syntax",
    prompt:"What is καὶ … περ doing with ἀθάνατός … ἐπελθών?",
    answer:"καί … περ is concessive: “even an immortal, immortal though he be.” περ attaches to the participle/adjective and grants the point — a god, of all beings, is hard to impress, and yet even he would marvel.",
    why:"περ regularly makes a participle concessive (the origin of Attic καίπερ + participle). Reading it as merely intensive loses the whole rhetorical force of the line, which is that the place is so lovely it would astonish someone who has seen everything." },

  { id:"ody5-55-94:s16:q1", readingId:"ody5-55-94", seg:16, type:"syntax",
    prompt:"στὰς is from ἵστημι. Why is it intransitive, and how does that follow from its form?",
    answer:"It is the root (second) aorist active participle, στάς, στᾶσα, στάν, which is intransitive: “having taken his stand, standing.” “He stood there and gazed.”",
    why:"ἵστημι splits its aorists by meaning: the sigmatic first aorist ἔστησα is transitive (“I set X up”), while the athematic root aorist ἔστην is intransitive (“I stood”). So the form itself tells you the voice-sense. The same split runs through the perfect (ἕστηκα, “I stand”), and it is one of the highest-yield facts in Greek verb morphology." },

  { id:"ody5-55-94:s17:q1", readingId:"ody5-55-94", seg:17, type:"syntax",
    prompt:"αὐτὰρ ἐπεὶ δὴ πάντα … θηήσατο — what is the relationship of this clause to the one that follows?",
    answer:"It is a temporal clause (ἐπεί + aorist indicative) subordinate to the main clause αὐτίκ᾽ ἄρ᾽ … ἤλυθεν: “But when he had marvelled at everything…, at once he went into the cave.”",
    why:"ἐπεί + aorist indicative gives an action completed before the main verb. This is the same architecture as ἀλλ᾽ ὅτε δή at line 55 — Homer marks each new stage of the narrative with a subordinate temporal clause and then releases it into a main verb, often with αὐτίκα (“at once”) picking up the sequence." },

  { id:"ody5-55-94:s19:q1", readingId:"ody5-55-94", seg:19, type:"syntax",
    prompt:"οὐδέ μιν ἄντην ἠγνοίησεν ἰδοῦσα Καλυψώ — what rhetorical figure is at work, and what does the line actually assert?",
    answer:"Litotes: “nor did she fail to recognize him.” The negated negative asserts the positive strongly — she knew him instantly.",
    why:"Homer often understates by negating the opposite; the effect is emphasis, not hesitancy. Translating it flatly as “she did not not-know him” misses the point, but so does flattening it to “she recognized him” — the idiom carries a note of “of course she did,” which the γάρ-clause that follows then explains." },

  { id:"ody5-55-94:s20:q1", readingId:"ody5-55-94", seg:20, type:"syntax",
    prompt:"οὐδ᾽ εἴ τις ἀπόπροθι δώματα ναίει — classify this condition.",
    answer:"A simple/present general condition: εἰ + present indicative (ναίει), with no ἄν. Concessive in force because of οὐδ(έ): “not even if someone dwells in a home far away.”",
    why:"The mood tells you everything. εἰ + indicative makes no comment on whether the supposition is true — it is a neutral “if.” Had Homer wanted “even if he were to dwell,” he would have needed the optative (with κε in the apodosis); had he wanted a general “whenever,” the subjunctive with ἄν/κε. Note too δώματα as an internal accusative of place inhabited with ναίει." },

  { id:"ody5-55-94:s21:q1", readingId:"ody5-55-94", seg:21, type:"syntax",
    prompt:"ἔτετμεν and τέτμεν (line 58) look like perfects. What are they really?",
    answer:"They are aorist active indicative, 3rd singular, of the defective root aorist τέτμον, “find, come upon.” The verb has no present. ἔτετμεν simply carries the augment; τέτμεν does not.",
    why:"The reduplicated look is misleading — this is a root aorist, not a perfect, and the augment is optional in Homer (unaugmented past tenses are everywhere in epic, often purely for the metre). If you parse it as a perfect you will hunt for a present τέτμω that does not exist." },

  { id:"ody5-55-94:s22:q1", readingId:"ody5-55-94", seg:22, type:"syntax",
    prompt:"ἀλλ᾽ ὅ γ᾽ ἐπ᾽ ἀκτῆς κλαῖε καθήμενος — what is ὅ, and what is καθήμενος doing?",
    answer:"ὅ is the demonstrative pronoun “he” (Odysseus), not the article — Homer still uses ὁ/ἡ/τό as a demonstrative. καθήμενος is a circumstantial present participle agreeing with the subject: “he sat weeping,” literally “he was weeping, sitting.”",
    why:"In Homer the “article” is really a weak demonstrative, and a bare ὅ/ἡ/τό with γε at the start of a clause almost always means “he/she, for his part.” Recognizing this stops you searching for a noun for the article to attach to. γε marks the shift of focus from Calypso to Odysseus." },

  { id:"ody5-55-94:s23:q1", readingId:"ody5-55-94", seg:23, type:"syntax",
    prompt:"δάκρυσι καὶ στοναχῇσι καὶ ἄλγεσι — what case usage is this, and what governs it?",
    answer:"Dative of means with the participle ἐρέχθων: “rending his heart with tears and groans and griefs.” θυμόν is the object of the participle.",
    why:"Three plain instrumental datives with no preposition — Greek's normal way of saying “by means of.” Note στοναχῇσι with the epic dative plural ending -ῇσι (Attic -αις); the same ending shows up in σταφυλῇσι at 69 and ᾗσιν at 74. Learning to see -ῃσι/-οισι as ordinary dative plurals removes a lot of friction in Homer." },

  { id:"ody5-55-94:s24:q1", readingId:"ody5-55-94", seg:24, type:"syntax",
    prompt:"δερκέσκετο — what does the -σκ- infix add?",
    answer:"It is the iterative/frequentative suffix: “he kept gazing, he would gaze again and again” out over the sea.",
    why:"Homer uses -σκ- forms (usually unaugmented) to express repeated or habitual action in the past. It layers onto an already durative imperfect to give “used to, kept on.” The detail matters for the sense: this is not one look at the sea but Odysseus's daily routine of grief." },

  { id:"ody5-55-94:s25:q1", readingId:"ody5-55-94", seg:25, type:"syntax",
    prompt:"ἱδρύσασα is aorist and ἐρέεινε is imperfect. What does that difference in aspect tell you about the order of events?",
    answer:"The aorist participle expresses action prior to the main verb: she first seated him on the chair, and then (imperfect, durative) went on questioning him.",
    why:"Aspect, not tense, is doing the temporal work. An aorist circumstantial participle is normally antecedent to its main verb, a present participle contemporaneous with it. Compare ἰδοῦσα at 78 (“on seeing him”) and φωνήσασα at 92 (“having spoken”) — both aorist, both prior. This is the single most useful thing to know about Greek participles." },

  { id:"ody5-55-94:s26:q1", readingId:"ody5-55-94", seg:26, type:"syntax",
    prompt:"αἰδοῖός τε φίλος τε — what do these two nominatives modify, and what is the force?",
    answer:"They are predicative nominatives agreeing with the unexpressed subject “you” of εἰλήλουθας: “honoured and dear though you are.” The τε … τε pair joins them.",
    why:"A predicative adjective with the subject of a finite verb often carries a concessive or causal colour that English needs a clause for — here the courteous “welcome as you are, why exactly are you here?” The τε … τε correlation (rather than a single καί) is a Homeric mannerism worth recognizing." },

  { id:"ody5-55-94:s28:q1", readingId:"ody5-55-94", seg:28, type:"syntax",
    prompt:"αὔδα ὅ τι φρονέεις — what kind of clause is ὅ τι φρονέεις?",
    answer:"An indefinite relative clause serving as the object of the imperative αὔδα: “say whatever you have in mind.” ὅ τι is the neuter of ὅστις (ὅ + τι).",
    why:"The two words are written apart in Homer but function as one indefinite relative pronoun. It is the object of φρονέεις inside its own clause, and the whole clause is the object of αὔδα — a nested structure Greek handles without any “that.”" },

  { id:"ody5-55-94:s28:q2", readingId:"ody5-55-94", seg:28, type:"syntax",
    prompt:"τελέσαι δέ με θυμὸς ἄνωγεν — explain the case of με and the form ἄνωγεν.",
    answer:"θυμός is the subject, με is the accusative object of ἄνωγεν and at the same time the subject of the infinitive τελέσαι: “my heart bids me accomplish it.” ἄνωγεν is perfect in form but present in force.",
    why:"Verbs of commanding, urging, and permitting take an accusative + infinitive, where the accusative does double duty — object of the main verb, subject of the infinitive. And ἄνωγα is one of the small set of perfects with present meaning (like οἶδα, ἔοικα, μέμηλεν above); its pluperfect would mean “bade.”" },

  { id:"ody5-55-94:s29:q1", readingId:"ody5-55-94", seg:29, type:"syntax",
    prompt:"εἰ … τετελεσμένον ἐστίν — what construction is this, and what does it mean?",
    answer:"A periphrastic perfect passive: the perfect middle/passive participle τετελεσμένον with ἐστίν. Here it has a potential/gerundive colour: “if it is a thing that can be accomplished.”",
    why:"Greek forms perfect passives periphrastically wherever a single form is awkward, but the idiom also drifts toward “is in a state of being do-able.” The two εἰ-clauses in this line pair a subjective condition (εἰ δύναμαι — “if I have the power”) with an objective one (“and if the thing is possible at all”), which is Calypso hedging carefully." },

  { id:"ody5-55-94:s30:q1", readingId:"ody5-55-94", seg:30, type:"syntax",
    prompt:"ἵνα τοι πὰρ ξείνια θείω — identify the clause, and explain πάρ.",
    answer:"A purpose clause: ἵνα + the aorist subjunctive θείω (epic for θῶ, from τίθημι). πάρ is παρά in tmesis with the verb — πὰρ … θείω = παραθείω, “set before.”",
    why:"Two things at once. The subjunctive after ἵνα gives purpose (“so that I may set…”); and tmesis — the preverb standing apart from its verb — is a Homeric habit left over from a time when these “prefixes” were still free adverbs. When you meet a stray preposition with no object, suspect tmesis and look for the verb it belongs to." },

  { id:"ody5-55-94:s31:q1", readingId:"ody5-55-94", seg:31, type:"syntax",
    prompt:"ἀμβροσίης πλήσασα — what case does πίμπλημι take, and why?",
    answer:"The genitive of content/material: ἀμβροσίης, “having filled it with ambrosia.” The unexpressed object is τράπεζαν.",
    why:"Verbs of filling, and adjectives of fullness, take a genitive of the thing filled with — a genitive of material, not a dative of means. It is worth grouping these with verbs of ruling, tasting, remembering, and touching as the standard genitive-taking classes; the case is a large part of what identifies the verb." },


  /* ================= Odyssey 7.81–107 ================= */

  { id:"ody7-81-107:s0:q1", readingId:"ody7-81-107", seg:0, type:"syntax",
    prompt:"δῦνε … πυκινὸν δόμον — δύω has no preposition here. What is the case of δόμον doing?",
    answer:"An accusative of goal of motion (terminal accusative): “she plunged into the close-built house.” The verb takes the destination directly, without εἰς.",
    why:"Homer regularly expresses motion toward with a bare accusative where Attic would insist on a preposition — a survival of an older, freer use of the case. Verbs of going, entering, and reaching (ἱκνέομαι, δύω, ἔρχομαι) do this constantly. If you look for a missing εἰς you will lose the thread." },

  { id:"ody7-81-107:s2:q1", readingId:"ody7-81-107", seg:2, type:"syntax",
    prompt:"πρὶν χάλκεον οὐδὸν ἱκέσθαι — identify the construction, and explain why the mood is what it is.",
    answer:"πρίν + the aorist infinitive ἱκέσθαι: “before reaching the bronze threshold.” οὐδόν is the object of the infinitive.",
    why:"After an affirmative main clause, πρίν regularly takes the infinitive — no conjunction-plus-finite-verb, no ἄν, no subordinating mood. (It is only after a negative main clause that πρίν takes a finite verb: “not … until.”) The main clause here is affirmative (ὥρμαινε), so the infinitive is exactly what the rule predicts." },

  { id:"ody7-81-107:s2:q2", readingId:"ody7-81-107", seg:2, type:"syntax",
    prompt:"πολλὰ δέ οἱ κῆρ ὥρμαιν᾽ ἱσταμένῳ — what case is οἱ, what is it doing, and what does ἱσταμένῳ agree with?",
    answer:"οἱ is dative singular (the enclitic third-person pronoun), a dative of possession with κῆρ: “his heart.” ἱσταμένῳ is a circumstantial participle agreeing with that same οἱ: “as he stood.”",
    why:"Greek very often says “the heart to him” where English says “his heart,” and then hangs further agreement off the dative pronoun rather than off the subject. Note the mismatch this creates: the grammatical subject is κῆρ (neuter), but the participle is masculine dative, because it describes the man, not the heart. Tracking that is the whole difficulty of the line." },

  { id:"ody7-81-107:s3:q1", readingId:"ody7-81-107", seg:3, type:"syntax",
    prompt:"ὥς τε γὰρ ἠελίου αἴγλη πέλεν ἠὲ σελήνης — what are the genitives doing, and what is τε?",
    answer:"ἠελίου and σελήνης are genitives of source/comparison with αἴγλη: “there was a radiance as of the sun or of the moon.” τε is the generalizing epic τε, standard in similes and comparisons, and is not translated.",
    why:"ὥς τε introducing a comparison is a fixed Homeric formula — you meet it again at 106 in οἷά τε φύλλα. The genitives are not possessive so much as “the kind of gleam that belongs to the sun”; πέλεν is simply the epic copula (= ἦν), which is worth knowing because it looks nothing like εἰμί." },

  { id:"ody7-81-107:s4:q1", readingId:"ody7-81-107", seg:4, type:"syntax",
    prompt:"ἐληλέδατ(ο) — parse it, and explain what the ending tells you.",
    answer:"Pluperfect middle/passive indicative, 3rd plural of ἐλαύνω (epic ἐληλέδατο, Attic would be ἐληλαμένοι ἦσαν): “(the walls) had been drawn out, ran.” Subject τοῖχοι.",
    why:"The ending -ατο is the epic third-plural middle/passive of the perfect system, where Attic uses a periphrasis. You meet the same ending twice more in this passage — ἐρηρέδατο (95, “had been fixed”) and βεβλήατο (96, “had been thrown”) — and once you recognize the pattern the whole description of the palace unlocks: it is a series of stative pluperfect passives describing how the house stood." },

  { id:"ody7-81-107:s4:q2", readingId:"ody7-81-107", seg:4, type:"syntax",
    prompt:"κυάνοιο is a genitive. What kind, and what is the ending?",
    answer:"A genitive of material with θριγκός: “a frieze of dark-blue enamel.” -οιο is the epic genitive singular of the second declension (Attic -ου).",
    why:"The -οιο ending is everywhere in Homer (Ἀλκινόοιο, οὐδοῖο, αἰγείροιο, all in this passage) and is simply the older form of -ου. The genitive of material answers “made of what?” — distinct from the possessive genitive Ἀλκινόοιο in the same sentence, which answers “belonging to whom?”" },

  { id:"ody7-81-107:s6:q1", readingId:"ody7-81-107", seg:6, type:"syntax",
    prompt:"ἕστασαν looks like a pluperfect but means “stood.” Explain.",
    answer:"It is the pluperfect active of ἵστημι, 3rd plural, used intransitively: the doorposts “stood.” The perfect ἕστηκα of this verb means “I stand,” so its pluperfect means “I was standing.”",
    why:"This is the same stative-perfect logic as πεφύκει and ὀδώδει in Odyssey 5: when a perfect denotes a resulting state, the pluperfect denotes that state in past time — not an action before an action. The intransitive sense is tied to the athematic forms (ἔστην, ἕστηκα), as against the transitive sigmatic ἔστησα, “I set up.”" },

  { id:"ody7-81-107:s7:q1", readingId:"ody7-81-107", seg:7, type:"syntax",
    prompt:"ἀργύρεον δ᾽ ἐφ᾽ ὑπερθύριον, χρυσέη δὲ κορώνη — what is missing from this line, and what is ἐφ᾽?",
    answer:"The verb: “was” must be supplied with both nominatives (ὑπερθύριον, κορώνη). ἐφ᾽ is ἐπί used adverbially — “on top (was) a silver lintel.”",
    why:"Ellipse of the copula is normal in Greek description, and Homer's catalogue of the palace runs on it. The adverbial use of ἐπί, with no object in an oblique case, is a reminder that these words were adverbs before they were prepositions — which is also what makes tmesis possible." },

  { id:"ody7-81-107:s9:q1", readingId:"ody7-81-107", seg:9, type:"syntax",
    prompt:"δῶμα φυλασσέμεναι — parse φυλασσέμεναι and identify the construction.",
    answer:"Present active infinitive of φυλάσσω (epic for φυλάσσειν), used as an infinitive of purpose after ἔτευξεν: Hephaestus made them “to guard the house.” δῶμα is its object.",
    why:"Greek can use a bare infinitive to express purpose after verbs of making, giving, and choosing — no ὥστε, no ἵνα required. The epic infinitive endings (-μεναι, -μεν, -έμεναι) are a pure recognition problem: they mean nothing different from -ειν, but if you don't know them you will try to parse this as a middle form." },

  { id:"ody7-81-107:s10:q1", readingId:"ody7-81-107", seg:10, type:"syntax",
    prompt:"ἀθανάτους ὄντας — what case, and why? And what is ἤματα πάντα?",
    answer:"Accusative plural, agreeing with οὕς / κύνες (the dogs) from the relative clause above: “being immortal and ageless.” ἤματα πάντα is an accusative of extent of time: “for all their days.”",
    why:"The participle is circumstantial and takes its case from the noun it describes, which happens to be an accusative object two lines back — Homer's syntax runs on across line-ends. And extent of time (“for how long”) is the accusative, as against a point in time, which is the dative; the distinction is a reliable exam question." },

  { id:"ody7-81-107:s11:q1", readingId:"ody7-81-107", seg:11, type:"syntax",
    prompt:"ἐν δὲ θρόνοι … ἐρηρέδατ᾽ — what is ἐν doing, given that no noun follows it in the dative?",
    answer:"It is adverbial / in tmesis with the verb: ἐν … ἐρηρέδατο = ἐνηρήρειντο, “were fixed within.” It is not governing a dative.",
    why:"When you meet a preposition with no object in the case it should govern, the answer is almost always tmesis or adverbial use — the preverb has come loose from its verb. Compare πὰρ … θείω in Odyssey 5.91. Hunting for a dative that isn't there is the classic wrong turn." },

  { id:"ody7-81-107:s13:q1", readingId:"ody7-81-107", seg:13, type:"syntax",
    prompt:"ἔχεσκον — what does the -σκ- add, and how does it fit the sense of the sentence?",
    answer:"It is the iterative/frequentative suffix: “they used to have, they habitually had” an unfailing supply. It pairs with the durative imperfect ἑδριόωντο (“they used to sit”) to describe the Phaeacians' standing custom.",
    why:"The -σκ- imperfect is Homer's way of marking habitual past action, and it usually appears without an augment. Compare δερκέσκετο in Odyssey 5.84. The whole sentence is about what the Phaeacian nobles were always doing, and the two verb-forms are what carry that." },

  { id:"ody7-81-107:s13:q2", readingId:"ody7-81-107", seg:13, type:"syntax",
    prompt:"πίνοντες καὶ ἔδοντες — what kind of participles, and what do they agree with?",
    answer:"Circumstantial present participles, nominative plural masculine, agreeing with the subject ἡγήτορες: “the leaders used to sit there, drinking and eating.”",
    why:"Present participles express action contemporaneous with the main verb — here the drinking and eating go on while they sit, which is exactly the point. Note ἔδοντες from ἔδω, the epic verb “eat” that supplies forms for ἐσθίω; the same root shows up as ἦσθε at Odyssey 5.94." },

  { id:"ody7-81-107:s14:q1", readingId:"ody7-81-107", seg:14, type:"syntax",
    prompt:"αἰθομένας δαΐδας μετὰ χερσὶν ἔχοντες — sort out what agrees with what.",
    answer:"ἔχοντες is a nominative plural participle agreeing with κοῦροι (the golden youths). δαΐδας is its object, accusative plural feminine, and αἰθομένας is a participle agreeing with δαΐδας: “holding blazing torches in their hands.”",
    why:"Two participles in one clause, in different cases, doing different jobs — this is where careless reading collapses. The rule that saves you is agreement: αἰθομένας is accusative, so it cannot describe the youths; ἔχοντες is nominative, so it must. Let the endings, not the word order, tell you the structure." },

  { id:"ody7-81-107:s15:q1", readingId:"ody7-81-107", seg:15, type:"syntax",
    prompt:"νύκτας and δαιτυμόνεσσι — identify each case usage.",
    answer:"νύκτας is an accusative of extent of time (“through the nights, night after night”). δαιτυμόνεσσι is a dative of advantage (“for the banqueters”), with the epic dative plural ending -εσσι.",
    why:"Two different cases doing two different adverbial jobs off one participle (φαίνοντες). The -εσσι ending is a Homeric dative plural you simply have to know (cf. πραπίδεσσι at 92, φρεσίν-type datives generally); the accusative of duration is the same construction as ἤματα πάντα in line 94." },

  { id:"ody7-81-107:s16:q1", readingId:"ody7-81-107", seg:16, type:"syntax",
    prompt:"πεντήκοντα δέ οἱ δμῳαὶ κατὰ δῶμα γυναῖκες — there is no verb. What supplies the sense, and what is οἱ?",
    answer:"The copula “are/there are” is understood, and οἱ is a dative of possession: “and he has fifty slave-women throughout the house.”",
    why:"Greek expresses possession by putting the possessor in the dative with the verb “to be” — literally “there are to him fifty women.” With the copula ellipsed, only the dative οἱ tells you whose they are. This is the same dative of possession as in line 82 (οἱ κῆρ, “his heart”)." },

  { id:"ody7-81-107:s17:q1", readingId:"ody7-81-107", seg:17, type:"syntax",
    prompt:"αἱ μέν … αἱ δέ (104–105) — what are αἱ, and what does the pair do?",
    answer:"They are demonstrative pronouns (not the article), correlated by μέν … δέ to divide the fifty women into two groups: “some grind the grain … others weave.”",
    why:"ὁ μέν … ὁ δέ is the standard Greek way of saying “some … others,” and in Homer the words are still full demonstratives rather than articles. Reading αἱ as an article leaves you hunting for a noun; reading the μέν as a signal of a coming δέ tells you the sentence's shape in advance." },

  { id:"ody7-81-107:s17:q2", readingId:"ody7-81-107", seg:17, type:"syntax",
    prompt:"μύλῃς ἔπι — explain the accent on ἔπι.",
    answer:"Anastrophe: ἐπί follows its object (the dative μύλῃς) and throws its accent back onto the first syllable. “On the millstones.”",
    why:"The retracted accent is the visible sign that the preposition is postpositive. The word order is metrically convenient but the syntax is unchanged — ἐπί still governs the dative. Compare σπέος ἀμφί and πόντον ἐπ᾽ ἀτρύγετον in Odyssey 5, and δῶμα καθ᾽ ὑψερεφές earlier in this very passage." },

  { id:"ody7-81-107:s18:q1", readingId:"ody7-81-107", seg:18, type:"syntax",
    prompt:"ὑφόωσι and ἑδριόωντο (98) show a feature called diectasis. What is it?",
    answer:"“Distraction”: a contracted form is artificially re-expanded to fit the hexameter. ὑφόωσι stands for ὑφῶσι (from ὑφαίνω) and ἑδριόωντο for ἑδριῶντο — the vowel is spread out again into two long syllables.",
    why:"Homer's language inherited uncontracted forms, but by the time the poems were fixed the contracted ones were current; diectasis is the compromise, giving a form that never existed in speech but scans. Practically, you must learn to see -όω-/-άα- clusters and mentally contract them back. ἡβώωσα and τηλεθόωσα in Odyssey 5 are the same phenomenon." },

  { id:"ody7-81-107:s18:q2", readingId:"ody7-81-107", seg:18, type:"syntax",
    prompt:"οἷά τε φύλλα μακεδνῆς αἰγείροιο — what is this, and what is being compared to what?",
    answer:"A (compressed) simile introduced by οἷά τε, “like”: the shimmering of the women's work — or the quivering of the yarn as they spin — is compared to the leaves of a tall poplar. τε is the generalizing epic τε of similes; αἰγείροιο is an epic genitive with φύλλα.",
    why:"Homeric similes are regularly launched by ὡς / ὥς τε / οἷά τε with no verb of their own — the point of comparison must be inferred from the surrounding action. Recognizing the formula is what tells you a simile has begun; the τε here is a grammatical marker, not a conjunction, and looking for something for it to join is a dead end." },


  /* ================= Odyssey 7.108–145 ================= */

  { id:"ody7-108-145:s0:q1", readingId:"ody7-108-145", seg:0, type:"syntax",
    prompt:"ὅσσον … ὣς δέ … — what is the structure of this sentence, and what verb governs it?",
    answer:"A correlative comparison: ὅσσον (“as much as”) is answered by ὣς (“so”). “As much as the Phaeacians surpass all men at driving a ship, so the women are skilled at the loom.” There is no expressed verb — εἰσί must be supplied in both halves, with ἴδριες and τεχνῆσσαι as the predicates.",
    why:"Greek correlatives come in pairs, and spotting the first member lets you predict the second. Here both halves are verbless: the adjectives ἴδριες and τεχνῆσσαι carry the whole predication. Ellipse of the copula is so routine in Homer that failing to supply it is the commonest reason a line “has no verb.”" },

  { id:"ody7-108-145:s0:q2", readingId:"ody7-108-145", seg:0, type:"syntax",
    prompt:"νῆα θοὴν ἐνὶ πόντῳ ἐλαυνέμεν — what is ἐλαυνέμεν, and what licenses it?",
    answer:"Present active infinitive of ἐλαύνω (epic -έμεν for -ειν), an epexegetic (explanatory) infinitive after the adjective ἴδριες: “skilled at driving a swift ship on the sea.” νῆα θοήν is its object.",
    why:"Adjectives of ability, skill, and fitness take an infinitive that specifies what one is skilled at — the infinitive limits the adjective. Note the pairing with ἱστῶν τεχνῆσσαι in the other half of the comparison, where the same idea is expressed with a genitive instead. Greek can complement these adjectives either way." },

  { id:"ody7-108-145:s1:q1", readingId:"ody7-108-145", seg:1, type:"syntax",
    prompt:"δῶκεν … ἔργα τ᾽ ἐπίστασθαι — how is the infinitive functioning after δίδωμι?",
    answer:"Epexegetic/complementary: Athena “granted them to know exceedingly beautiful handiwork.” ἔργα is the object of ἐπίστασθαι, and the whole infinitive phrase is what was given.",
    why:"δίδωμι regularly takes an infinitive naming the thing granted — the gift is an ability. Notice how the sentence then switches construction: τε … καί joins the infinitive phrase to a plain accusative object, φρένας ἐσθλάς. Greek is happy to coordinate unlike constructions this way, which is disorienting until you expect it." },

  { id:"ody7-108-145:s1:q2", readingId:"ody7-108-145", seg:1, type:"syntax",
    prompt:"πέρι at the start of the line has a retracted accent. What does that tell you?",
    answer:"It is adverbial περί, “exceedingly, above all,” not a preposition governing a case. The recessive accent marks the adverbial use.",
    why:"Accent is doing real grammatical work here. Compare περὶ πάντων ἀνδρῶν in the previous line, where περί is a true preposition with the genitive and accented normally. If you take πέρι as a preposition you will go hunting for a genitive that never comes." },

  { id:"ody7-108-145:s2:q1", readingId:"ody7-108-145", seg:2, type:"syntax",
    prompt:"ἔκτοσθεν αὐλῆς and ἄγχι θυράων — what do these two words have in common grammatically?",
    answer:"Both are adverbs used as prepositions governing the genitive: “outside the courtyard,” “near the doors.” θυράων shows the epic first-declension genitive plural ending -άων (Attic -ῶν).",
    why:"Adverbs of place regularly take a genitive in Greek — the genitive is the case of the sphere or reference-point. Grouping ἔκτοσθεν, ἄγχι, ἐντός, ἐγγύς, εἴσω (which shows up at line 135) as “genitive-taking place-words” saves a lot of guessing." },

  { id:"ody7-108-145:s3:q1", readingId:"ody7-108-145", seg:3, type:"syntax",
    prompt:"πεφύκασι is a perfect. Why does it translate as a present?",
    answer:"φύω has an intransitive, stative perfect: πέφυκα means “I have grown” and hence “I am, I stand grown.” So “tall trees grow there / stand growing there.”",
    why:"Same phenomenon as πεφύκει back in Odyssey 5.63, but here in the primary tense: the perfect denotes the resulting state, not a past act. Homer's whole description of the orchard runs on such perfects — πεφύκασι, ἐλήλαται, ἐρρίζωται, πεφύασιν — all of which describe how the garden permanently stands, not what once happened to it." },

  { id:"ody7-108-145:s5:q1", readingId:"ody7-108-145", seg:5, type:"syntax",
    prompt:"χείματος οὐδὲ θέρευς — what case, and what use of it?",
    answer:"Genitive of time within which: “in winter nor in summer.” θέρευς is the epic genitive of θέρος.",
    why:"Greek uses three cases for time and keeps them apart strictly: accusative for extent (“for a whole day”), dative for a point (“on that day”), genitive for the period within which something falls (“in winter,” i.e. at some point during it). The contrast with ἤματα πάντα (accusative of extent, Odyssey 7.94) is exactly the kind of pairing that gets examined." },

  { id:"ody7-108-145:s6:q1", readingId:"ody7-108-145", seg:6, type:"syntax",
    prompt:"φύει here is transitive, but πεφύκασι two lines earlier was intransitive. Explain.",
    answer:"φύω is transitive in the present and aorist active (“make grow, bring forth”) but intransitive in the perfect (“have grown, be by nature”). So the West Wind “brings some to birth” (φύει, with τὰ μέν as object), while the trees simply “stand grown” (πεφύκασι).",
    why:"This is a genuine split within one verb's paradigm, and it is exactly what an examiner will pick. The tense-stem decides the transitivity. The same logic governs ἵστημι (transitive ἔστησα vs. intransitive ἔστην/ἕστηκα), which you have already met at Odyssey 5.75." },

  { id:"ody7-108-145:s6:q2", readingId:"ody7-108-145", seg:6, type:"syntax",
    prompt:"τὰ μὲν … ἄλλα δέ — what are these, and what do they refer to?",
    answer:"Demonstrative pronouns in correlation, neuter accusative plural, objects of φύει and πέσσει respectively: “some (fruits) it brings to birth, others it ripens.”",
    why:"Another instance of the μέν … δέ partitioning that runs through all these readings (αἱ μέν … αἱ δέ at 7.104, ἕτερον μέν … ἑτέρας δέ just below at 123). Note the neuter plural, which refers back loosely to the fruit of all those trees rather than to any one noun." },

  { id:"ody7-108-145:s7:q1", readingId:"ody7-108-145", seg:7, type:"syntax",
    prompt:"ὄγχνη ἐπ᾽ ὄγχνῃ γηράσκει, μῆλον δ᾽ ἐπὶ μήλῳ — only the first clause has a verb. What is going on?",
    answer:"γηράσκει is understood in each following clause. The pattern is a nominative subject + ἐπί with the dative of the same noun: “pear grows old upon pear, apple upon apple, cluster upon cluster, fig upon fig.”",
    why:"Ellipse of a repeated verb across parallel clauses is normal, and the rhetorical repetition is the whole point — the doubling of each noun in two different cases enacts the endless succession of crops. Notice how much work the case-endings do: the same word appears twice, and only the ending tells you which is subject and which is the thing beneath." },

  { id:"ody7-108-145:s8:q1", readingId:"ody7-108-145", seg:8, type:"syntax",
    prompt:"ἔνθα δέ οἱ … ἀλωὴ ἐρρίζωται — what is οἱ, and what is the force of ἐρρίζωται?",
    answer:"οἱ is the enclitic dative pronoun, a dative of interest/possession: “there a vineyard has been planted for him / he has a vineyard planted there.” ἐρρίζωται is perfect middle/passive of ῥιζόω: it “has been rooted” and so now stands rooted.",
    why:"The perfect passive describes a present standing condition resulting from a past planting — the vineyard is not being planted, it is established. Combined with the dative of interest, the line says something closer to “his vineyard stands rooted there” than to any English passive." },

  { id:"ody7-108-145:s9:q1", readingId:"ody7-108-145", seg:9, type:"syntax",
    prompt:"τῆς ἕτερον μέν … ἑτέρας δέ … — what does τῆς refer to, and what is its case-use?",
    answer:"τῆς is a relative pronoun, genitive singular feminine, referring to ἀλωή (the vineyard), and it is a partitive genitive with ἕτερον: “one part of which…”. ἑτέρας (accusative plural feminine, with σταφυλάς understood) then answers it: “and other grapes they gather.”",
    why:"The partitive genitive is what lets Greek carve a whole into parts without a preposition — “of which, one portion.” Note the gender-shift: ἕτερον is neuter (a part, a piece of ground), whereas ἑτέρας is feminine because it now refers to grapes, not ground. The endings track a change of referent the English has to spell out." },

  { id:"ody7-108-145:s9:q2", readingId:"ody7-108-145", seg:9, type:"syntax",
    prompt:"τρυγόωσιν and τραπέουσι are 3rd plural with no expressed subject. Who is doing the action?",
    answer:"Nobody in particular: it is the indefinite third plural, “they gather / they tread,” meaning “people gather, one gathers.”",
    why:"Greek uses a bare third-person plural for an unspecified agent where English reaches for a passive or an impersonal “one.” Looking for a subject noun here is a waste of effort — the very vagueness is the point, since the description is of what habitually happens in the vineyard, not of anyone's particular act." },

  { id:"ody7-108-145:s12:q1", readingId:"ody7-108-145", seg:12, type:"syntax",
    prompt:"ἡ μέν … ἡ δ᾽ ἑτέρωθεν — what are ἡ and ἡ, and what do they organize?",
    answer:"Demonstrative pronouns, nominative singular feminine, in μέν … δέ correlation, dividing the δύω κρῆναι: “the one … the other.” Each is the subject of its own verb (σκίδναται, ἵησι).",
    why:"Again the Homeric “article” working as a demonstrative. The pair also shows the μέν … δέ structure operating over three whole lines — you need to hold ἡ μέν open across a relative clause and a prepositional phrase before ἡ δέ lands. Reading Greek well is largely a matter of keeping such pairs suspended." },

  { id:"ody7-108-145:s13:q1", readingId:"ody7-108-145", seg:13, type:"syntax",
    prompt:"ἐν Ἀλκινόοιο — a preposition with a genitive of a person's name, and no noun. What is understood?",
    answer:"“The house of”: ἐν (δόμοις) Ἀλκινόοιο, “in the house of Alcinous.” The word for house is simply omitted.",
    why:"This ellipse — a bare possessive genitive after ἐν or εἰς meaning “at/to so-and-so's place” — is idiomatic in Greek and survives into Attic (εἰς Ἅιδου, “to Hades' house”). If you don't know the idiom, the genitive looks unattached to anything. Here it also neatly closes the whole description as a summary line: τοῖ᾽ ἄρ᾽ … ἔσαν, “such, then, were…”" },

  { id:"ody7-108-145:s15:q1", readingId:"ody7-108-145", seg:15, type:"syntax",
    prompt:"δώματος εἴσω — explain the case and the word order.",
    answer:"εἴσω (“inside, into”) is a place-adverb governing the genitive δώματος, and it follows its noun: “into the interior of the house.”",
    why:"Another genitive-taking place-word, like ἔκτοσθεν and ἄγχι at line 112. Its position after the noun is normal for these adverbial “prepositions.” Notice the two motion-expressions stacked in one line — ὑπὲρ οὐδόν (over the threshold, accusative) and δώματος εἴσω (into the house, genitive) — each with its own case." },

  { id:"ody7-108-145:s16:q1", readingId:"ody7-108-145", seg:16, type:"syntax",
    prompt:"εὗρε … σπένδοντας — what kind of participle, and how do you know?",
    answer:"Supplementary: it completes the sense of the verb of finding, agreeing with the objects ἡγήτορας and μέδοντας. “He found the leaders pouring libations.”",
    why:"Verbs of finding and perceiving take a supplementary participle in agreement with their object — the participle tells you what the object was caught doing, and is not an optional extra. Exactly the same construction as τέτμεν … ἐοῦσαν at Odyssey 5.58." },

  { id:"ody7-108-145:s16:q2", readingId:"ody7-108-145", seg:16, type:"syntax",
    prompt:"ὅτε μνησαίατο κοίτου — identify the construction precisely. Why an optative with no ἄν?",
    answer:"An iterative (indefinite) temporal clause in past time: ὅτε + optative, with no ἄν/κε, expressing repeated action — “whenever they were minded of bed.” μνησαίατο is aorist middle optative, 3rd plural (epic -αίατο for -αιντο). The main verb σπένδεσκον is itself an iterative -σκ- imperfect.",
    why:"This is one of the highest-value constructions in the passage. In primary sequence, an indefinite “whenever” clause uses ἄν + subjunctive; but in secondary (past) sequence it uses the bare optative with no ἄν at all. The absence of ἄν is not an omission — it is the rule. And the iterative optative pairs naturally with an iterative -σκ- imperfect in the main clause, so the two forms confirm each other. Note also that μιμνήσκομαι takes a genitive (κοίτου) of the thing remembered." },

  { id:"ody7-108-145:s17:q1", readingId:"ody7-108-145", seg:17, type:"syntax",
    prompt:"ἥν οἱ περίχευεν Ἀθήνη — account for the case of ἥν and of οἱ.",
    answer:"ἥν is a relative pronoun, accusative singular feminine, taking its gender and number from its antecedent ἠέρα (“mist”) and its case (accusative) from its own clause, where it is the object of περίχευεν. οἱ is a dative of interest: Athena shed the mist “about him.”",
    why:"The core rule of relative pronouns: agreement in gender and number with the antecedent, but case from the function inside the relative clause. Getting this right is what stops you mistaking ἥν for the possessive adjective ἥν (“her own”), which exists and would fit the metre — only the syntax rules it out." },

  { id:"ody7-108-145:s17:q2", readingId:"ody7-108-145", seg:17, type:"syntax",
    prompt:"ὄφρ᾽ ἵκετ᾽ Ἀρήτην — which sense of ὄφρα is this, and how can you tell?",
    answer:"Temporal, “until”: ὄφρα with the aorist indicative ἵκετο. “He went through the hall … until he reached Arete.”",
    why:"Same test as at Odyssey 5.57: indicative means temporal (“until”), subjunctive or optative would mean purpose (“in order that”). The mood, not the conjunction, decides. And the structure is the same as there too — an ongoing action (βῆ … ἔχων) brought to its endpoint by the ὄφρα-clause." },

  { id:"ody7-108-145:s18:q1", readingId:"ody7-108-145", seg:18, type:"syntax",
    prompt:"ἀμφὶ δ᾽ ἄρ᾽ Ἀρήτης βάλε γούνασι χεῖρας — what has happened to ἀμφί, and how does the sentence fit together?",
    answer:"Tmesis: ἀμφί belongs with βάλε (= ἀμφέβαλε, “he cast around”). χεῖρας is the object, γούνασι the dative governed by the ἀμφι-, and Ἀρήτης a possessive genitive with γούνασι. “Odysseus cast his arms about Arete's knees.”",
    why:"The preverb has come adrift from its verb — a Homeric habit, and the reason a stray preposition should always prompt you to look for a compound verb it belongs to. Note that the dative γούνασι is licensed by the ἀμφι- element, not by anything else in the clause: the “preposition” is still doing its governing work at a distance." },

  { id:"ody7-108-145:s18:q2", readingId:"ody7-108-145", seg:18, type:"syntax",
    prompt:"αὐτοῖο πάλιν χύτο — parse χύτο and explain the case of αὐτοῖο.",
    answer:"χύτο is a root aorist middle/passive, 3rd singular of χέω, unaugmented: “(the mist) flowed / was shed.” αὐτοῖο is a genitive of separation with πάλιν χύτο — it flowed back “away from him.”",
    why:"Two things worth having. First, χύτο is an athematic root aorist with no thematic vowel and no augment — a form you can only recognize, not derive. Second, the genitive is the case of separation (“from”) as well as of possession; πάλιν gives the direction, and αὐτοῖο (epic -οιο again) gives the point departed from." },

  { id:"ody7-108-145:s19:q1", readingId:"ody7-108-145", seg:19, type:"syntax",
    prompt:"ἰδόντες and ὁρόωντες are both participles of ὁράω in the same sentence. Why are they different, and what does the difference mean?",
    answer:"ἰδόντες is aorist (“on seeing the man”) — a single, prior act of catching sight of him. ὁρόωντες is present (“as they went on gazing”) — continuous action alongside the imperfect θαύμαζον. The aspectual contrast is the whole point: they fell silent the moment they saw him, and then kept staring in wonder.",
    why:"This is the clearest illustration in the whole quiz of participial aspect. Aorist = antecedent/punctual; present = contemporaneous/ongoing. Homer sets the two side by side within two lines, and each is paired with an appropriate main verb (aorist ἐγένοντο, imperfect θαύμαζον). If you can explain this pair you understand Greek participles." },

  { id:"ody7-108-145:s19:q2", readingId:"ody7-108-145", seg:19, type:"syntax",
    prompt:"δόμον κάτα — what is this, and what is the tell?",
    answer:"Anastrophe: κατά follows its accusative object δόμον and retracts its accent to κάτα. “Throughout the hall.”",
    why:"The accent is the whole signal. It is the same phenomenon as μύλῃς ἔπι and δῶμα καθ᾽ ὑψερεφές in the previous reading, and σπέος ἀμφί in Odyssey 5 — a postposed disyllabic preposition throws its accent back. Once you see it, the accusative has a governor and the clause resolves." },


  /* ================= Plato, Phaedrus 230a–e ================= */

  { id:"phdr-230a-e:s1:q1", readingId:"phdr-230a-e", seg:1, type:"syntax",
    prompt:"ἆρ᾽ οὐ τόδε ἦν τὸ δένδρον … ; — what does ἆρ᾽ οὐ signal, and why is the verb imperfect?",
    answer:"ἆρα οὐ introduces a question expecting the answer “yes”: “this was the tree, wasn't it?” The imperfect ἦν is the so-called imperfect of recognition — “this is the tree (as you were telling me all along).”",
    why:"Greek marks the expected answer in the question particle itself: ἆρ᾽ οὐ expects “yes,” ἆρα μή expects “no.” And the past tense is not a mistake: Greek uses the imperfect when something now recognized turns out to have been so all along. English has to render it with a present." },

  { id:"phdr-230a-e:s1:q2", readingId:"phdr-230a-e", seg:1, type:"syntax",
    prompt:"ἐφ᾽ ὅπερ ἦγες ἡμᾶς — what is ὅπερ, what case, and why?",
    answer:"A relative pronoun (ὅσπερ, “the very one which”), accusative singular neuter. Its antecedent is τὸ δένδρον, which gives it its gender and number; the accusative comes from its own clause, where it is governed by ἐπί (motion toward).",
    why:"The standard relative rule again — gender/number from the antecedent, case from the relative clause. The suffix -περ intensifies: “the very tree to which you were leading us.” Note the imperfect ἦγες, of the journey still in progress." },

  { id:"phdr-230a-e:s5:q1", readingId:"phdr-230a-e", seg:5, type:"syntax",
    prompt:"νὴ τὴν Ἥραν, καλή γε ἡ καταγωγή — two things are missing or unusual here. What?",
    answer:"νή is the particle of affirmative swearing and takes an accusative (τὴν Ἥραν): “by Hera!” And the sentence has no verb — ἐστί must be supplied, with καλή as predicate and ἡ καταγωγή as subject: “the resting-place is a fine one indeed.”",
    why:"Two Attic habits. Oaths take a bare accusative after νή (affirming) or μά (usually denying). And the copula is routinely omitted in exclamations and predications — the position of the article tells you which word is the subject: ἡ καταγωγή has the article and so is the subject, while the anarthrous καλή must be the predicate. That article test is a reliable way to sort subject from predicate in a verbless Greek sentence." },

  { id:"phdr-230a-e:s7:q1", readingId:"phdr-230a-e", seg:7, type:"syntax",
    prompt:"τὸ σύσκιον — what part of speech is σύσκιον here, and what is the article doing?",
    answer:"σύσκιος is an adjective (“shady”), but with the neuter article τό it is substantivized into an abstract noun: “the shadiness.” It is a second subject alongside τὸ ὕψος, with πάγκαλον as the predicate of both.",
    why:"The article turns anything into a noun — this is one of the most productive devices in Greek, and Plato leans on it constantly. Compare τὸ εὔπνουν (“the breeziness”) a few lines later and τὸ παρόν (“the present”) at 230e. Once you expect it, an unexplained neuter article stops being a puzzle and becomes a signal." },

  { id:"phdr-230a-e:s8:q1", readingId:"phdr-230a-e", seg:8, type:"syntax",
    prompt:"ὡς ἂν εὐωδέστατον παρέχοι τὸν τόπον — identify the mood and construction.",
    answer:"A potential optative: ἄν + the present optative παρέχοι. “So that it would make the place as fragrant as could be.” εὐωδέστατον is a predicate accusative with τὸν τόπον — “render the place most fragrant.”",
    why:"ἄν + optative is the potential construction — what would happen, not what does. The ὡς here has a consecutive colour (“such that it would…”), but the mood is what carries the modality. Note also the double accusative after παρέχω: a verb of making/rendering takes an object plus a predicate accusative describing what it is made into." },

  { id:"phdr-230a-e:s9:q1", readingId:"phdr-230a-e", seg:9, type:"syntax",
    prompt:"ὥστε γε τῷ ποδὶ τεκμήρασθαι — what construction, and what is the force of the infinitive?",
    answer:"ὥστε + infinitive (aorist middle τεκμήρασθαι): a result clause of the “natural/limiting” kind — “so as to judge by the foot, so far at least as one may judge by the foot.” τῷ ποδί is a dative of means.",
    why:"This is the key distinction to be able to state: ὥστε + infinitive expresses a natural or contemplated result (and can shade into a limiting “so far as to…”), while ὥστε + indicative expresses an actual, achieved result. Plato uses both in this passage — compare ὥστε … ἐξενάγηται a few lines below, with the indicative, where the result genuinely happened. The mood, not the conjunction, tells you which." },

  { id:"phdr-230a-e:s10:q1", readingId:"phdr-230a-e", seg:10, type:"syntax",
    prompt:"ἔοικεν εἶναι — what does ἔοικα take, and what is odd about its tense?",
    answer:"It takes a complementary infinitive (εἶναι): “it seems to be a shrine of some Nymphs and of Achelous.” ἔοικα is perfect in form but present in meaning.",
    why:"ἔοικα belongs to the set of perfects with present force — the same group as οἶδα, ἄνωγα, and μέμηλεν from the Homer readings. Note that a few lines later ἔοικας takes a dative instead (ξεναγουμένῳ … ἔοικας, “you resemble a man being shown around”); the verb means “seem” with an infinitive, “be like” with a dative. Same verb, two constructions, two meanings." },

  { id:"phdr-230a-e:s11:q1", readingId:"phdr-230a-e", seg:11, type:"syntax",
    prompt:"τὸ εὔπνουν τοῦ τόπου ὡς ἀγαπητόν — what is τὸ εὔπνουν, and what is ὡς doing?",
    answer:"τὸ εὔπνουν is a substantivized adjective, “the fresh air, the breeziness,” with τοῦ τόπου as a possessive genitive. ὡς is exclamatory: “how welcome and exceedingly sweet the fresh air of the place is!”",
    why:"Two things at once — the substantivizing article again, and ὡς in its exclamatory use (not “as,” not “that”). The copula is once more omitted. Recognizing exclamatory ὡς matters because it changes the whole sentence-type: this is not a subordinate clause but an outburst." },

  { id:"phdr-230a-e:s12:q1", readingId:"phdr-230a-e", seg:12, type:"syntax",
    prompt:"θερινόν τε καὶ λιγυρὸν ὑπηχεῖ — these look like accusative adjectives with no noun. What are they?",
    answer:"Adverbial accusatives (neuter singular): “it echoes back summery and clear,” i.e. with a summery, clear-toned sound. And τῷ … χορῷ is a dative governed by the ὑπο- of the compound verb ὑπηχεῖ.",
    why:"A neuter adjective in the accusative, with no noun to agree with, is regularly adverbial in Greek — the case does the work an English -ly ending would. Meanwhile the dative χορῷ is licensed not by any preposition in the sentence but by the prefix of the compound verb: compounds in ὑπο-, συν-, ἐπι-, προσ- routinely govern a dative. If you don't look at the prefix you can't account for the case." },

  { id:"phdr-230a-e:s13:q1", readingId:"phdr-230a-e", seg:13, type:"syntax",
    prompt:"τὸ τῆς πόας — explain this phrase. There is no noun for the article to modify.",
    answer:"It is the idiom “article + genitive”: “the business of the grass, the matter of the grass.” A vague neuter noun (πρᾶγμα, “thing, business”) is understood. It is the subject, with κομψότατον as predicate.",
    why:"This is a very Platonic idiom — τὸ τῆς τύχης, “the matter of chance,” and so on. The neuter article alone plus a genitive means “the affair/business of X.” It is also worth seeing that πάντων is a partitive genitive with the superlative κομψότατον: “most exquisite of all things.”" },

  { id:"phdr-230a-e:s13:q2", readingId:"phdr-230a-e", seg:13, type:"syntax",
    prompt:"ἱκανὴ πέφυκε κατακλινέντι … ἔχειν — sort out the three constructions here.",
    answer:"πέφυκε is the intransitive perfect of φύω, “has grown, stands grown” (subject ἡ πόα, understood). ἱκανή is a predicative adjective, “sufficient,” and it governs the epexegetic infinitive ἔχειν — “sufficient for one to have his head beautifully placed.” κατακλινέντι is an aorist passive participle in the dative of reference: “for a person who has lain down.”",
    why:"Three separate things stacked in one clause. The infinitive after ἱκανός is the same construction you met after ἴδριες in Odyssey 7.108 — adjectives of sufficiency and capacity take an explanatory infinitive. And the dative participle with no expressed noun means “for anyone who…” — the dative of reference specifying the person concerned. Note that πέφυκε is exactly the same form and force as the Homeric πεφύκασι, which is a nice bridge between the two authors." },

  { id:"phdr-230a-e:s14:q1", readingId:"phdr-230a-e", seg:14, type:"syntax",
    prompt:"ὥστε ἄριστά σοι ἐξενάγηται — parse ἐξενάγηται, and explain σοι.",
    answer:"Perfect middle/passive indicative, 3rd singular of ξεναγέω, used impersonally: literally “the guiding has been excellently done by you.” σοι is a dative of agent, which is what the perfect passive takes.",
    why:"Two high-value points. The impersonal passive (a passive with no subject, where English needs “you have…”) is common in Greek. And the perfect passive system takes a dative of agent rather than ὑπό + genitive — so σοι is “by you,” not “to you.” Also note that this ὥστε takes the indicative, marking an actual result, in deliberate contrast with the ὥστε + infinitive at 230b." },

  { id:"phdr-230a-e:s16:q1", readingId:"phdr-230a-e", seg:16, type:"syntax",
    prompt:"ἀτοπώτατός τις φαίνῃ — what does φαίνομαι mean here, and what is τις doing to the superlative?",
    answer:"φαίνῃ (2nd singular present middle) with a predicate adjective and no participle means “you appear (to be), you seem”; ἀτοπώτατος is that predicate. τις softens the superlative: “a sort of most extraordinary man.”",
    why:"φαίνομαι splits by construction: with a participle it means “you are manifestly / you plainly are,” with an infinitive “you appear (but perhaps aren't).” Here, with a bare predicate adjective, it is simply “you seem.” And the indefinite τις attached to a superlative is a colloquial softener — Phaedrus is teasing. Worth remembering that ἄτοπος literally means “out of place,” and Socrates is precisely a man out of his usual place." },

  { id:"phdr-230a-e:s17:q1", readingId:"phdr-230a-e", seg:17, type:"syntax",
    prompt:"ξεναγουμένῳ τινὶ καὶ οὐκ ἐπιχωρίῳ ἔοικας — what case does ἔοικα govern here, and what is ξεναγουμένῳ?",
    answer:"The dative. ξεναγουμένῳ is a present middle/passive participle used substantivally: “you are like some man being shown around, and not like a local.”",
    why:"ἔοικα in the sense “resemble, be like” takes a dative of the thing resembled — as against ἔοικεν + infinitive (“it seems to be”) at 230b. The participle is doing the work of a noun (“a person being given a tour”), which is the article-plus-participle habit again, here without the article because τινί makes it indefinite. Note that ὃ λέγεις is a parenthetical relative — “as you say” — with ὅ as an internal accusative." },

  { id:"phdr-230a-e:s18:q1", readingId:"phdr-230a-e", seg:18, type:"syntax",
    prompt:"οὔτ᾽ … ἀποδημεῖς, οὔτ᾽ … δοκεῖς … ἐξιέναι — what does the οὔτε … οὔτε pair coordinate, and what construction follows δοκεῖς?",
    answer:"It coordinates the two verbs (ἀποδημεῖς and δοκεῖς): “you neither travel abroad beyond the borders, nor do you seem to me to go outside the wall at all.” δοκεῖς takes a complementary infinitive ἐξιέναι, with ἔμοιγε a dative of reference (“to me at least”).",
    why:"οὔτε … οὔτε is the negative correlative pair (“neither … nor”), and once you spot the first you should expect the second and let it show you the sentence's shape. Note ἔξω governing the genitive τείχους — another place-adverb taking the genitive, exactly like ἔκτοσθεν and ἄγχι in Odyssey 7. And τὸ παράπαν is an adverbial accusative: “altogether, at all.”" },

  { id:"phdr-230a-e:s20:q1", readingId:"phdr-230a-e", seg:20, type:"syntax",
    prompt:"συγγίγνωσκέ μοι — why is the imperative accented on its last syllable, and why is μοι dative?",
    answer:"The accent shifts because the enclitic μοι follows and throws an accent back onto the preceding word. μοι is dative because συγγιγνώσκω (“pardon, make allowance for”) governs a dative of the person forgiven.",
    why:"Two independent things that both come down to knowing the word. Enclitics regularly cause an extra accent on the word before them — the same thing happens to ἄριστά σοι and ἀτοπώτατός τις in this passage. And compound verbs in συν- very often take a dative; the case is part of the verb's lexical entry, not something you can derive from the sentence." },

  { id:"phdr-230a-e:s21:q1", readingId:"phdr-230a-e", seg:21, type:"syntax",
    prompt:"τὰ … χωρία καὶ τὰ δένδρα … ἐθέλει — the subject is plural but the verb is singular. Why?",
    answer:"Because the subjects are neuter plural, and a neuter plural subject regularly takes a singular verb in Greek.",
    why:"The rule holds from Homer to Attic prose — you met it already with θαλάσσια ἔργα μέμηλεν at Odyssey 5.67. It is not a mistake or an attraction; it is the norm, and Greek writers deviate from it only for special emphasis. This is the sort of thing an examiner asks precisely because it looks like an error." },

  { id:"phdr-230a-e:s21:q2", readingId:"phdr-230a-e", seg:21, type:"syntax",
    prompt:"οὐδέν μ᾽ ἐθέλει διδάσκειν — account for both accusatives.",
    answer:"διδάσκω takes a double accusative: one of the person taught (μ(ε)) and one of the thing taught (οὐδέν). “The fields and trees are not willing to teach me anything.” διδάσκειν is a complementary infinitive with ἐθέλει.",
    why:"Verbs of teaching, asking, reminding, clothing, and depriving take two accusatives — person and thing. Neither is an “indirect object” in the English sense, and you should not expect a dative. Note also the elegant ellipse at the end of the sentence: οἱ δ᾽ ἐν τῷ ἄστει ἄνθρωποι has no verb, because ἐθέλουσι διδάσκειν is simply understood from the first half." },

  { id:"phdr-230a-e:s21:q3", readingId:"phdr-230a-e", seg:21, type:"syntax",
    prompt:"οἱ δ᾽ ἐν τῷ ἄστει ἄνθρωποι — comment on the position of the prepositional phrase.",
    answer:"It sits in attributive position, between the article and its noun: “the in-the-city people,” i.e. “the people in the city.” The phrase is thereby made an attribute of ἄνθρωποι rather than a modifier of the verb.",
    why:"Attributive position — article + modifier + noun — is how Greek welds a phrase onto a noun. Had Plato written οἱ ἄνθρωποι ἐν τῷ ἄστει without repeating the article, the phrase could have been read adverbially. The position is the grammar. This is a distinctively Attic precision that Homer does not bother with, and it is worth contrasting the two authors on exactly this point." },

  { id:"phdr-230a-e:s22:q1", readingId:"phdr-230a-e", seg:22, type:"syntax",
    prompt:"τῆς ἐμῆς ἐξόδου τὸ φάρμακον — what kind of genitive is τῆς ἐμῆς ἐξόδου?",
    answer:"An objective genitive: “the drug for my going out,” i.e. the remedy that produces my departure — not a drug belonging to the departure.",
    why:"The objective genitive names the object of the action implied in the head noun (φάρμακον implies “curing/effecting”), as against the subjective genitive, which names its agent. The distinction is worth having ready: “fear of the enemy” can mean the enemy's fear (subjective) or fear directed at the enemy (objective), and only context decides. Here only the objective sense makes any sense. Note also ηὑρηκέναι, a perfect infinitive complementing δοκεῖς." },

  { id:"phdr-230a-e:s23:q1", readingId:"phdr-230a-e", seg:23, type:"syntax",
    prompt:"οἱ … προσείοντες ἄγουσιν — what is the subject of ἄγουσιν?",
    answer:"οἱ προσείοντες — the article plus the participle, “those who dangle (a branch),” i.e. people who lead animals by holding food out in front of them. The participle, made a noun by the article, is the subject.",
    why:"Article + participle is Greek's way of saying “the ones who…,” and it can swallow a great deal of material: here the whole phrase τὰ πεινῶντα θρέμματα θαλλὸν ἤ τινα καρπόν sits between the article and its participle. When you meet a lone article, read forward to find the word it belongs to before you try to construe anything else — otherwise the intervening accusatives look like chaos." },

  { id:"phdr-230a-e:s24:q1", readingId:"phdr-230a-e", seg:24, type:"syntax",
    prompt:"φαίνῃ περιάξειν — the infinitive is future. What does that do to the meaning of φαίνομαι?",
    answer:"With a future infinitive, φαίνομαι means “you look as though you will…”: “you look as though you will lead me all round Attica.” It reports an appearance about the future, not an established fact.",
    why:"This is the contrast with ἀτοπώτατός τις φαίνῃ at 230c, where φαίνομαι with a bare predicate adjective simply meant “you seem.” The construction changes the sense of the verb — and a future infinitive is Greek's normal complement after verbs of seeming, expecting, hoping, and promising. Compare οἴει … ἀναγνώσεσθαι and δοκῶ κατακείσεσθαι in the very next lines: three future infinitives in a row, all after verbs of thinking/seeming." },

  { id:"phdr-230a-e:s24:q2", readingId:"phdr-230a-e", seg:24, type:"syntax",
    prompt:"ὅποι ἂν ἄλλοσε βούλῃ — identify the clause and the mood.",
    answer:"An indefinite (general) relative clause: ὅποι + ἄν + the present subjunctive βούλῃ. “To wherever else you may wish.”",
    why:"This is the primary-sequence counterpart of the iterative optative you met at Odyssey 7.137 (ὅτε μνησαίατο). The rule: indefinite/general clauses take ἄν + subjunctive after a primary tense, but the bare optative (no ἄν) after a secondary tense. The main verb here is φαίνῃ, a present — hence subjunctive with ἄν. Being able to state that pair of rules, and to point to an example of each in the quiz readings, is exactly what a construction question is after." },

  { id:"phdr-230a-e:s25:q1", readingId:"phdr-230a-e", seg:25, type:"syntax",
    prompt:"ἐγὼ μέν μοι δοκῶ κατακείσεσθαι — what is odd about δοκῶ μοι, and what is the infinitive?",
    answer:"δοκῶ μοι is literally “I seem to myself,” an idiom meaning “I think I shall, I intend to.” κατακείσεσθαι is a future middle infinitive: “I think I shall lie down.”",
    why:"The idiom is worth memorizing whole — Greek expresses a settled intention by having the speaker “seem to himself.” Note also ἐν τῷ παρόντι, the substantivized participle again (“in the present”), and ἀφικόμενος, an aorist participle expressing action prior to the main verb (“now that I have arrived here”). And ἐγὼ μέν is answered by σὺ δέ in the next clause — Plato's habitual balancing." },

  { id:"phdr-230a-e:s26:q1", readingId:"phdr-230a-e", seg:26, type:"syntax",
    prompt:"σὺ δ᾽ ἐν ὁποίῳ σχήματι οἴει … ἀναγνώσεσθαι, τοῦθ᾽ ἑλόμενος ἀναγίγνωσκε — unpick the structure of this sentence.",
    answer:"The relative clause comes first and the demonstrative picks it up afterwards: “whatever posture you think you will read most easily in — having chosen that one, read.” τοῦθ᾽ (τοῦτο) resumes the whole preceding clause and is the object of ἑλόμενος; ἀναγίγνωσκε is the main verb, a present imperative. ἀναγνώσεσθαι is a future infinitive after οἴει.",
    why:"Greek is perfectly comfortable putting a relative clause before its demonstrative — the “prospective” or preparatory relative. English has to reorder. The tell is the resumptive τοῦτο: when you see a demonstrative that seems to have nothing to point at, look back for a whole clause it is summing up. And the aorist participle ἑλόμενος is prior to the imperative: choose first, then read." }

,

  /* ================= Idyll 1.1–56 (Theocritus, Doric) ================= */

  { id:"theoc1-1-56:s1:q1", readingId:"theoc1-1-56", seg:1, type:"syntax",
    prompt:"The very first word is ἁδύ, not ἡδύ. What dialect are you in, and what are the three or four sound-changes that will announce it on every line?",
    answer:"Doric. The tells: (1) ᾱ where Attic-Ionic has η — ἁδύ = ἡδύ, παγά = πηγή, γυνά = γυνή; (2) -σδ- for -ζ- — μελίσδεται = μελίζεται, συρίσδω, ἐρίσδω, ἑσδώμεθα; (3) ἁ/ταί/τοί for ἡ/αἱ/οἱ, and τᾶς/τᾶν for τῆς/τῶν; (4) 1st pl. -μες for -μεν (δεδοίκαμες) and 3rd pl. -οντι/-αντι for -ουσι/-ασι (μοχθίζοντι, ᾠδήκαντι).",
    why:"Theocritus writes his pastoral in literary Doric, and the dialect is not decoration — it is the genre. If you internalize these four correspondences you can read the whole idyll at speed: whenever a form looks 'wrong', run it back through the changes and the familiar Attic word appears (ἁδύ→ἡδύ, παγαῖσι→πηγαῖς). The same ᾱ-for-η you meet here is what makes χολά, ἀλωά, ἅβα, θάημα look strange." },

  { id:"theoc1-1-56:s1:q2", readingId:"theoc1-1-56", seg:1, type:"syntax",
    prompt:"In ἁ ποτὶ ταῖς παγαῖσι μελίσδεται, the word ἁ looks like the article. How do you know it is a relative pronoun here?",
    answer:"Because it has its own finite verb (μελίσδεται) and refers back to πίτυς: 'the pine … which makes music by the springs.' An article would sit next to a noun; a word that governs a verb is a relative.",
    why:"In Doric the feminine relative ἅ/ἁ and the article ἁ are spelled alike (both from the ᾱ that Attic keeps only in the relative ἥ). The discriminator is syntactic, not orthographic: look for a verb that the word could be subject/object of. The same test settles ἃ … ποταμέλγεται (line 26) and τὰν … φυλάσσει (line 47), where τάν = ἥν." },

  { id:"theoc1-1-56:s2:q1", readingId:"theoc1-1-56", seg:2, type:"syntax",
    prompt:"ἀποισῇ — what verb is this the future of, and why does the stem look nothing like the present?",
    answer:"It is 2nd sg. future middle of ἀποφέρω, 'you will carry off / win.' The future of φέρω is suppletive: it borrows the stem οἰσ- (οἴσω), so ἀπο- + οισ- + -ῇ (Doric for -ῃ) = ἀποισῇ.",
    why:"φέρω builds its principal parts from three different roots (φερ-, οἰσ-, ἐνεγκ-). Recognizing that the future lives on οἰσ- saves you here and everywhere: ἀποίσω, οἴσω, προσοίσω. The middle 'carry off for oneself' naturally means 'win a prize,' the point of the wager." },

  { id:"theoc1-1-56:s3:q1", readingId:"theoc1-1-56", seg:3, type:"syntax",
    prompt:"αἴ κα τῆνος ἕλῃ … αἶγα τὺ λαψῇ. Identify the conditional construction, dialect and all, and say why the two verbs are in different moods.",
    answer:"A future-more-vivid / present-general condition. Doric αἴ κα = Attic ἐάν (αἰ = εἰ, κα = ἄν); the protasis takes the subjunctive ἕλῃ, and the apodosis the future indicative λαψῇ: 'if he takes …, you will get.'",
    why:"The moods are doing exactly what they do in Attic ἐάν + subjunctive → future indicative; only the spellings have changed (αἰ, κα, and the Doric future λαψῇ = λήψῃ). Train yourself to read αἰ κα / αἰ κε as ἐάν on sight — it opens nearly every conditional in the poem (lines 4, 5, 9, 10, 23)." },

  { id:"theoc1-1-56:s4:q1", readingId:"theoc1-1-56", seg:4, type:"syntax",
    prompt:"In ἐς τὲ καταρρεῖ ὁ χίμαρος, the word τέ is not the connective 'and.' What is it?",
    answer:"It is the Doric enclitic accusative of the 2nd person pronoun, τέ = σέ, governed by ἐς: 'the kid streams down to you.'",
    why:"Doric has τύ (nom.), τέ/τυ (acc.), τοι (dat.) for σύ/σέ/σοι. Here the preposition ἐς demands an accusative object, and the connective τε would have nothing to connect — so τέ must be the pronoun. The same enclitic returns at the very end: τέρας κέ τυ … ἀτύξαι (line 56), where τυ = σε." },

  { id:"theoc1-1-56:s5:q1", readingId:"theoc1-1-56", seg:5, type:"syntax",
    prompt:"ἔστε κ᾿ ἀμέλξῃς — what kind of clause is this, and how does κε change the mood?",
    answer:"An indefinite temporal clause, 'until (such time as) you milk.' ἔστε ('until') + κε (= ἄν) requires the subjunctive ἀμέλξῃς, giving the sense 'until you should milk / whenever you milk.'",
    why:"'Until' clauses that look to an as-yet-unrealized point take ἄν/κε + subjunctive, exactly like the ὄφρα … ἵκετο pattern you met in Odyssey 5 — except there the event was past and factual (indicative), here it is prospective (subjunctive with κε). The presence of κε is your signal to expect the subjunctive." },

  { id:"theoc1-1-56:s7:q1", readingId:"theoc1-1-56", seg:7, type:"syntax",
    prompt:"ἅδιον … τὸ τεὸν μέλος ἢ τὸ … ὕδωρ. Parse ἅδιον and lay out the comparison.",
    answer:"ἅδιον is the comparative neuter of ἡδύς (ἡδίων, ἥδιον; Doric ἅδιον), predicate of μέλος: 'your song is sweeter than the water.' The two terms of the comparison are joined by ἤ ('than'), τὸ τεὸν μέλος vs. τὸ … ὕδωρ.",
    why:"The goatherd caps Thyrsis by turning his ἁδύ into a comparative ἅδιον — a competitive echo typical of amoebean (exchange) song. Note τεόν = σόν (Doric/epic possessive), and that the comparison is elliptical: 'sweeter than the water (is), which pours down.' Comparison with ἤ keeps both compared things in the same case (here both nominative)." },

  { id:"theoc1-1-56:s10:q1", readingId:"theoc1-1-56", seg:10, type:"syntax",
    prompt:"αἰ δέ κ᾿ ἀρέσκῃ τήναις ἄρνα λαβεῖν — what is the subject of ἀρέσκῃ, and what is τήναις doing?",
    answer:"The subject of ἀρέσκῃ ('it is pleasing') is the infinitive phrase ἄρνα λαβεῖν, 'to take the lamb.' τήναις (= ἐκείναις, the Muses) is dative with ἀρέσκῃ: 'if to take the lamb is pleasing to them.'",
    why:"ἀρέσκω is used impersonally with a dative of the person and an infinitive (or clause) as its real subject — English inverts it to 'if they prefer to take the lamb.' Spotting that the infinitive is the grammatical subject, not a complement, keeps you from hunting for a missing 'it.' τήναις is the Doric dative plural of τῆνος." },

  { id:"theoc1-1-56:s12:q1", readingId:"theoc1-1-56", seg:12, type:"syntax",
    prompt:"λῇς ποτὶ τᾶν Νυμφᾶν, λῇς … καθίξας — what is λῇς, and what force has ποτὶ + genitive here?",
    answer:"λῇς is 2nd sg. of the Doric verb λῶ (λῶ, λῇς, λῇ) = ἐθέλω/βούλομαι, 'do you wish?' ποτὶ τᾶν Νυμφᾶν is πρός + genitive of adjuration, 'by the Nymphs' — an oath, not motion.",
    why:"Two things to bank. (1) Doric λῶ is the ordinary verb for 'want' in this poem; λῇς … λῇς repeated is coaxing insistence. (2) πρός (Doric ποτί) + genitive in an entreaty means 'by (a god),' calling the divinity to witness — quite distinct from ποτί + acc. 'toward' (line 36) or ποτί + dat. 'at' (line 18). The case tells you the sense." },

  { id:"theoc1-1-56:s14:q1", readingId:"theoc1-1-56", seg:14, type:"syntax",
    prompt:"The infinitive συρίσδεν opens line 14, but its governing verb was back in line 12. Explain the construction and the form of the infinitive.",
    answer:"συρίσδεν is a present active infinitive (Doric -εν for -ειν) completing λῇς from line 12: 'do you wish … to pipe?' The intervening ὡς-clause (line 13) has delayed the infinitive to the head of line 14.",
    why:"Hyperbaton on this scale — the complement stranded a whole line from its verb — is a feature of the leisurely bucolic sentence; hold λῇς in suspense and let συρίσδεν land. The infinitive ending -εν (not -ειν) is a steady Doric marker (cf. συρίσδεν line 16): whenever an infinitive seems to be missing its final ι, you are looking at the Doric form." },

  { id:"theoc1-1-56:s16:q1", readingId:"theoc1-1-56", seg:16, type:"syntax",
    prompt:"οὐ θέμις … τὸ μεσαμβρινὸν … ἄμμιν συρίσδεν. What is the subject of the (understood) 'is', what is τὸ μεσαμβρινόν, and what is ἄμμιν?",
    answer:"The subject is the infinitive συρίσδεν: 'to pipe is not θέμις (right) for us.' τὸ μεσαμβρινόν is an adverbial accusative of time, 'at noontide.' ἄμμιν is the dat. pl. of the 1st person pronoun (= ἡμῖν), 'for us.'",
    why:"θέμις (ἐστί) + infinitive is the impersonal 'it is lawful/right to …,' the infinitive being the subject. The article-plus-neuter-adjective τὸ μεσαμβρινόν used adverbially ('at the noon-time') is worth filing away. ἄμμι(ν) is the epic/Aeolic-Doric dative — the same shape you will meet in Homer for ἡμῖν." },

  { id:"theoc1-1-56:s17:q1", readingId:"theoc1-1-56", seg:17, type:"syntax",
    prompt:"δεδοίκαμες — parse it fully, and explain both the ending and the tense-meaning.",
    answer:"1st plural perfect active indicative of δείδω, 'we fear.' The ending is Doric -μες for -μεν; the tense is perfect (δέδοικα) but the sense is present, 'we are in a state of fear.'",
    why:"Two payoffs. (1) The perfect of δείδω/δέδοικα, like οἶδα and ἕστηκα, is a 'stative' perfect with present meaning — 'I have come to fear' = 'I fear.' (2) The 1st pl. -μες (δεδοίκαμες, and cf. any Doric -μες form) is one of the surest dialect signatures: Attic -μεν, Doric -μες. Don't read it as some odd -μαι middle." },

  { id:"theoc1-1-56:s17:q2", readingId:"theoc1-1-56", seg:17, type:"syntax",
    prompt:"Account for the form ἀμπαύεται.",
    answer:"It is ἀναπαύεται, 'he rests' (present middle of ἀναπαύομαι), with the prefix ἀνα- apocopated to ἀν- and then assimilated to ἀμ- before the π of παύεται.",
    why:"Apocope (dropping the short final vowel of a prefix: ἀνά→ἀν, κατά→κατ, παρά→παρ) is regular in epic and Doric, and the bared consonant then assimilates to what follows: ἀν- + π- → ἀμπ-. You saw the same ἀμ- in ἄμμιν; you will meet κατ᾽ and πὰρ (πάρ, line 33) too. Undo the apocope to recover the verb: ἀμπαύεται → ἀναπαύεται." },

  { id:"theoc1-1-56:s19:q1", readingId:"theoc1-1-56", seg:19, type:"syntax",
    prompt:"τᾶς βουκολικᾶς … ἵκεο μοίσας — parse ἵκεο and explain its ending.",
    answer:"2nd sg. aorist middle indicative of ἱκνέομαι, 'you reached/attained.' The ending is the uncontracted -εο (for Attic -ου): ἵκε(σ)ο → ἵκεο.",
    why:"Epic and Doric leave the 2nd sg. middle -εσο to lose only its σ, giving -εο, where Attic contracts all the way to -ου (ἵκου). The same uncontracted vowels explain ἁδέι for ἁδεῖ (line 27). Reading ἵκεο as 'you came/attained' also recovers the genitive it governs, τᾶς βουκολικᾶς … μοίσας, 'you reached the height of the bucolic Muse.'" },

  { id:"theoc1-1-56:s20:q1", readingId:"theoc1-1-56", seg:20, type:"syntax",
    prompt:"ἑσδώμεθα — parse it and name the construction.",
    answer:"1st plural present middle subjunctive of ἕζομαι (Doric ἕσδομαι), 'let us sit down' — a hortatory (exhortation) subjunctive.",
    why:"The 1st-person subjunctive with no introductory word is the hortatory subjunctive, 'let us …' — English needs 'let' to render it. Here δεῦρ᾽ ('come!') primes it. And note the Doric -σδ- for -ζ-: ἕσδομαι = ἕζομαι, the same swap as μελίσδεται, συρίσδω, ἐρίσδω, ἐφαρμόσδων." },

  { id:"theoc1-1-56:s22:q1", readingId:"theoc1-1-56", seg:22, type:"syntax",
    prompt:"ὡς ὅκα τὸν Λιβύαθε ποτὶ Χρόμιν ᾆσας ἐρίσδων — explain ὅκα and the suffix on Λιβύαθε.",
    answer:"ὅκα is the Doric form of ὅτε, 'when' (here 'as once when …'). Λιβύαθε is Λιβύη + the suffix -θε(ν), 'from Libya,' describing Chromis: 'Chromis, the man from Libya.'",
    why:"Doric systematically replaces the ὁτ-/τοτ- family with ὁκ-/τοκ-: ὅκα = ὅτε, τόκα = τότε, ἄλλοκα = ἄλλοτε (line 37), τανίκα = τηνίκα (line 16). And the ablatival suffix -θε(ν) marks 'place from which' (cf. οἴκοθεν 'from home,' οὐρανόθεν 'from heaven') — it makes a preposition unnecessary. Two participles then hang on the subject 'you': ᾆσας ('having sung') and ἐρίσδων ('competing')." },

  { id:"theoc1-1-56:s23:q1", readingId:"theoc1-1-56", seg:23, type:"syntax",
    prompt:"αἶγά τέ τοι δωσῶ διδυματόκον ἐς τρὶς ἀμέλξαι — what job does the infinitive ἀμέλξαι do?",
    answer:"It is an epexegetic (explanatory) / consecutive infinitive depending on the noun phrase: 'a twin-bearing goat (such as) to milk three times over.' It tells you what the goat is good for.",
    why:"An infinitive can be tacked onto a noun or adjective to specify capacity or result — 'a goat to milk thrice' = 'a goat that can be milked thrice.' This 'infinitive of respect/result' is common after words of fitness and quantity (cf. English 'water fit to drink'). τοι here is the Doric dative σοι, 'for you.'" },

  { id:"theoc1-1-56:s24:q1", readingId:"theoc1-1-56", seg:24, type:"syntax",
    prompt:"ἃ δύ᾽ ἔχοισ᾽ ἐρίφως ποταμέλγεται — parse ἔχοισα and ἐρίφως, and give the force of the participle.",
    answer:"ἔχοισα is the Doric present active participle = ἔχουσα, fem. nom. sg., here concessive: 'although she has two kids.' ἐρίφως is the Doric accusative plural = ἐρίφους, 'kids,' its object.",
    why:"Two Doric endings in three words. (1) The participle -οισα for -ουσα (from -ονσα) — the same in τεύχοισα (line 49), and its α-stem twin γέλαισα (line 36). (2) The 2nd-declension acc. pl. -ως for -ους, also in ὄρχως (line 48). Context makes ἔχοισα concessive: she nurses two kids and yields milk besides." },

  { id:"theoc1-1-56:s25:q1", readingId:"theoc1-1-56", seg:25, type:"syntax",
    prompt:"κεκλυσμένον and (a line later) κεκονιμένος are both perfect participles. What voice/aspect are they, and what do they contribute?",
    answer:"Both are perfect middle/passive participles — κεκλυσμένον (from κλύζω) 'sealed/coated' with the cup, κεκονιμένος (from κονίω) 'dusted/powdered' with the ivy. They describe a settled, resultant state of the object.",
    why:"Ekphrasis (description of an artwork) lives on the perfect: the carving is not being done, it stands done. So the passage is thick with perfect passives of state — κεκλυσμένον, κεκονιμένος, and the recurring τέτυκται ('has been wrought,' lines 32, 39) and περιπέπταται ('lies spread round,' line 55). Read them as 'is (in the state of being) X-ed.'" },

  { id:"theoc1-1-56:s28:q1", readingId:"theoc1-1-56", seg:28, type:"syntax",
    prompt:"ἔντοσθεν δὲ γυνά … τέτυκται, ἀσκητὰ πέπλῳ τε καὶ ἄμπυκι. What is τέτυκται, and what case-usage is πέπλῳ … ἄμπυκι?",
    answer:"τέτυκται is 3rd sg. perfect middle/passive of τεύχω, 'has been fashioned / is wrought' (subject γυνά). πέπλῳ and ἄμπυκι are datives of respect/means with ἀσκητά: 'adorned in respect of / by means of robe and headband.'",
    why:"τεύχω's perfect passive τέτυγμαι/τέτυκται is the signature verb of Greek ekphrasis (it is all over Homer's Shield of Achilles). And the dative with a passive verbal adjective like ἀσκητά ('wrought, decked') tells you what she is decked with — a dative of means shading into respect. Note γυνά = γυνή, Doric ᾱ." },

  { id:"theoc1-1-56:s29:q1", readingId:"theoc1-1-56", seg:29, type:"syntax",
    prompt:"πὰρ δέ οἱ ἄνδρες … ἄλλοθεν ἄλλος νεικείουσ᾿ ἐπέεσσι. Explain the idiom ἄλλοθεν ἄλλος and parse ἐπέεσσι.",
    answer:"ἄλλοθεν ἄλλος = 'one from one side, the other from the other' — a distributive idiom for two parties on opposite sides. ἐπέεσσι is the epic dative plural of ἔπος, 'with words' (dative of means).",
    why:"Greek loves to double a form of ἄλλος to distribute an action: ἄλλος ἄλλα λέγει 'one says one thing, another another'; here ἄλλοθεν ἄλλος splits the two quarrelling suitors. And ἐπέεσσι shows the epic -εσσι dative plural on the uncontracted stem ἐπε- (ἔπος, ἔπε(σ)-εσσι) — a Homeric colour Theocritus borrows. καλόν beside it is an adverbial accusative, 'beautifully (long-haired).'" },

  { id:"theoc1-1-56:s30:q1", readingId:"theoc1-1-56", seg:30, type:"syntax",
    prompt:"τὰ δ᾽ οὐ φρενὸς ἅπτεται αὐτᾶς — what is the subject, and why is φρενός in the genitive?",
    answer:"The subject is τά, 'these things' (the men's wrangling), used as a demonstrative. φρενός is genitive because ἅπτομαι ('touch, take hold of') governs the genitive: 'but these things do not touch her heart.'",
    why:"Verbs of touching, grasping, and aiming take a genitive of the thing touched (ἅπτομαι, λαμβάνομαι, θιγγάνω) — the genitive of the part reached for. And the plural article τά standing alone as 'these things' is the old demonstrative use of ὁ/ἡ/τό, common in Homer and kept here. αὐτᾶς = αὐτῆς (Doric ᾱ)." },

  { id:"theoc1-1-56:s31:q1", readingId:"theoc1-1-56", seg:31, type:"syntax",
    prompt:"ὅκα μὲν … γέλαισα, ἄλλοκα δ᾽ αὖ … Explain the ὅκα μέν … ἄλλοκα δέ frame and parse γέλαισα.",
    answer:"ὅκα μέν … ἄλλοκα δέ = 'at one moment … at another' (Doric ὅκα = ὅτε, ἄλλοκα = ἄλλοτε), correlating her two glances. γέλαισα is the Doric present active participle of γελάω = γελῶσα, fem. nom. sg., 'smiling.'",
    why:"The μέν … δέ pair here is temporal-distributive ('now … now'), carried by the Doric ὁκ-/ἀλλοκ- adverbs. And γέλαισα shows the α-contract verb's participle in Doric -αισα (γελά-οισα → γέλαισα), the twin of the -οισα you saw in ἔχοισα/τεύχοισα. ποτιδέρκεται just before is Doric ποτι- (= προσ-)." },

  { id:"theoc1-1-56:s32:q1", readingId:"theoc1-1-56", seg:32, type:"syntax",
    prompt:"μοχθίζοντι ends line 38. Parse it, and connect its ending to ᾠδήκαντι in the next scene.",
    answer:"μοχθίζοντι is 3rd plural present active indicative, 'they toil' — Doric -οντι for Attic -ουσι. Likewise ᾠδήκαντι (line 43) is 3rd pl. perfect, Doric -αντι for -ασι, 'they are swollen.'",
    why:"The Attic 3rd-plural endings -ουσι/-ασι are the eroded descendants of original -οντι/-αντι, which Doric preserves intact. So a verb ending in -οντι or -αντι is not a dative participle but a 3rd-plural finite verb — a classic trap. File the pair together: μοχθίζοντι = μοχθίζουσι, ᾠδήκαντι = ᾠδήκασι." },

  { id:"theoc1-1-56:s33:q1", readingId:"theoc1-1-56", seg:33, type:"syntax",
    prompt:"τοῖς δὲ μέτα … τέτυκται. Why is it μέτα with the accent on the first syllable, and what case does it govern?",
    answer:"This is anastrophe: the disyllabic preposition μετά throws its accent back to μέτα when it follows its object. It governs the dative τοῖς, 'among/beside them.'",
    why:"When a two-syllable preposition stands after the noun it governs, its accent retracts to the first syllable (μετά→μέτα, ἐπί→ἔπι, περί→πέρι). You met the same thing in Homer with ἔνι and περὶ σπείους. Recognizing anastrophe stops you from parsing μέτα as some separate word and shows you the phrase is τοῖς … μέτα = μετὰ τοῖς." },

  { id:"theoc1-1-56:s34:q1", readingId:"theoc1-1-56", seg:34, type:"syntax",
    prompt:"ἐφ᾽ ᾇ σπεύδων … ἕλκει — what is ᾇ, and what is its antecedent?",
    answer:"ᾇ is the Doric feminine dative singular of the relative ὅς/ἥ/ὅ (= ᾗ), governed by ἐπί: 'on which.' Its antecedent is πέτρα (line 40), the rock: 'a rock, on which the old man hauls his net.'",
    why:"The Doric relative takes the long ᾱ throughout, so ᾗ appears as ᾇ, ἥ as ἅ, ἥν as τάν. Here ἐπί + dative ᾇ locates the action 'on' the rock. Tracking the relative back to πέτρα two words earlier is what stitches the fisherman to his crag." },

  { id:"theoc1-1-56:s36:q1", readingId:"theoc1-1-56", seg:36, type:"syntax",
    prompt:"φαίης κεν … νιν … ἐλλοπιεύειν — name the construction of φαίης κεν, the case/role of νιν, and the role of ἐλλοπιεύειν.",
    answer:"φαίης κεν is a potential optative (κεν = ἄν + optative), 'you would say.' νιν is the Doric enclitic accusative (= αὐτόν), the subject-accusative of the infinitive. ἐλλοπιεύειν is a present infinitive in indirect statement after φαίης: 'you would say that he was fishing.'",
    why:"Three things at once, all high-value. (1) optative + ἄν/κε = potential, 'would/could' — the ekphrastic appeal to the imagined viewer. (2) νιν is Doric/lyric for 'him/her/it,' a caseless-looking enclitic that here is accusative. (3) φημί takes indirect statement with accusative-and-infinitive. The whole idea is bracketed by potentials: it opens here (φαίης κεν) and closes at τέρας κέ … ἀτύξαι (line 56)." },

  { id:"theoc1-1-56:s37:q1", readingId:"theoc1-1-56", seg:37, type:"syntax",
    prompt:"καὶ πολιῷ περ ἐόντι — what does περ add, and what is ἐόντι?",
    answer:"περ with a participle marks concession, 'although': καὶ … περ ἐόντι = 'even though he is (grey).' ἐόντι is the uncontracted epic/Doric present participle of εἰμί (ἐών, ἐόντος), dat. sg., agreeing with οἱ.",
    why:"Enclitic περ intensifies, and with a participle it regularly means 'although' (καίπερ + participle is the fossilized version). So the sinews stand out 'grey-haired though he is.' And ἐών/ἐόντος is simply 'being' — the same uncontracted participle you met as ἐοῦσαν at Odyssey 5.55. Attic would contract to ὄντι." },

  { id:"theoc1-1-56:s39:q1", readingId:"theoc1-1-56", seg:39, type:"syntax",
    prompt:"τυτθὸν δ᾽ ὅσσον ἄπωθεν ἁλιτρύτοιο γέροντος — explain τυτθὸν ὅσσον and the ending of ἁλιτρύτοιο.",
    answer:"τυτθὸν ὅσσον is an adverbial idiom, 'just a little way,' both neuter accusatives used adverbially with ἄπωθεν ('far off'). ἁλιτρύτοιο is the epic genitive singular in -οιο (= -ου) of the adjective ἁλίτρυτος, 'sea-worn,' agreeing with γέροντος.",
    why:"τυτθὸν ὅσσον ('so much as a little' = 'a very little') is a set adverbial phrase measuring distance. And the 2nd-declension genitive -οιο is the old Homeric ending that Theocritus sprinkles in for epic flavour (also γλυφάνοιο, line 28) — read -οιο as plain -ου. ἄπωθεν takes a genitive of the point measured from." },

  { id:"theoc1-1-56:s41:q1", readingId:"theoc1-1-56", seg:41, type:"syntax",
    prompt:"ἀμφὶ δέ νιν δύ᾽ ἀλώπεκες, ἁ μὲν … ἁ δ᾽ … How is the pair of foxes distributed, and what is νιν?",
    answer:"By ἁ μέν … ἁ δέ, 'the one … the other' (Doric ἁ = ἡ, article used as demonstrative), splitting the two foxes across lines 48–49. νιν is again the enclitic accusative (= αὐτόν), object of ἀμφί, referring to the boy.",
    why:"ὁ μέν … ὁ δέ (here ἁ μέν … ἁ δέ) is the standard 'the one … the other,' the article doing demonstrative duty — the same construction as οἱ δ᾽ in line 37. Once you see ἁ μέν you should already expect ἁ δέ to answer it. ὄρχως in the same clause is Doric acc. pl. = ὄρχους." },

  { id:"theoc1-1-56:s43:q1", readingId:"theoc1-1-56", seg:43, type:"syntax",
    prompt:"τὸ παιδίον οὐ πρὶν ἀνησεῖν φατὶ πρὶν ἢ … καθίξῃ. Unpick the double πρίν and the mood of καθίξῃ.",
    answer:"The main clause is negative — φατὶ (Doric = φησί) οὐ … ἀνησεῖν, 'she says she will not let the boy go.' After a negated main clause πρίν (πρὶν ἤ) means 'until' and takes the subjunctive: πρὶν … καθίξῃ, 'until she sets him down (breakfastless).' ἀνησεῖν is a future infinitive (Doric = ἀνήσειν) in indirect statement.",
    why:"The rule: πρίν after an affirmative clause takes the infinitive ('before'), but after a negative clause it means 'until' and behaves like other temporal conjunctions — here indefinite, so subjunctive (πρὶν … καθίξῃ). The οὐ that negates ἀνησεῖν is what flips πρίν into 'until.' φατί for φησί and the ξ-aorist subjunctive καθίξῃ (cf. καθίξας, line 12) are the Doric touches." },

  { id:"theoc1-1-56:s45:q1", readingId:"theoc1-1-56", seg:45, type:"syntax",
    prompt:"μέλεται δέ οἱ οὔτε τι πήρας οὔτε φυτῶν τοσσῆνον, ὅσον … γαθεῖ. What kind of verb is μέλεται, and what cases hang on it?",
    answer:"μέλεται is impersonal, 'it is a care,' with a dative of the person (οἱ, 'to him') and a genitive of the thing cared about (πήρας … φυτῶν, 'for his wallet nor for the vines'). τοσσῆνον … ὅσον ('so much … as') then correlates his indifference with his delight (γαθεῖ).",
    why:"μέλει/μέλομαι 'is a concern' takes dative-of-person + genitive-of-thing — 'X is a care to someone.' Learn the frame and the two cases fall into place. The correlative τοσσῆνον (Doric = τοσοῦτον) … ὅσον measures one thing against another: he cares for wallet and vines not so much as he rejoices (γαθεῖ = γηθεῖ, Doric ᾱ) in his weaving." },

  { id:"theoc1-1-56:s47:q1", readingId:"theoc1-1-56", seg:47, type:"syntax",
    prompt:"τέρας κέ τυ θυμὸν ἀτύξαι — parse ἀτύξαι and explain θυμόν.",
    answer:"ἀτύξαι is 3rd sg. aorist active optative of ἀτύζω, with κέ (= ἄν) a potential optative: 'a marvel that would astound (you).' θυμόν is an accusative of respect: 'would astound you as to your heart' = 'would astound your very heart.' τυ = σε (Doric).",
    why:"The idyll's ekphrasis is framed by two potentials — φαίης κεν 'you would say' (line 42) and now τέρας κέ … ἀτύξαι 'it would astound you' — a deliberate ring that hands the wonder to the reader. The accusative of respect (θυμόν, 'in respect of the heart') is the same construction as 'swift of foot': it limits how the astounding applies. τυ is once more the Doric enclitic σε, as at line 5." },

];

if (typeof module !== "undefined") module.exports = { QUESTIONS };

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

  /* ================= Idyll 1.1–63 (Theocritus, Doric) ================= */

  { id:"theoc1-1-63:s1:q1", readingId:"theoc1-1-63", seg:1, type:"syntax",
    prompt:"The very first word is ἁδύ, not ἡδύ. What dialect are you in, and what are the three or four sound-changes that will announce it on every line?",
    answer:"Doric. The tells: (1) ᾱ where Attic-Ionic has η — ἁδύ = ἡδύ, παγά = πηγή, γυνά = γυνή; (2) -σδ- for -ζ- — μελίσδεται = μελίζεται, συρίσδω, ἐρίσδω, ἑσδώμεθα; (3) ἁ/ταί/τοί for ἡ/αἱ/οἱ, and τᾶς/τᾶν for τῆς/τῶν; (4) 1st pl. -μες for -μεν (δεδοίκαμες) and 3rd pl. -οντι/-αντι for -ουσι/-ασι (μοχθίζοντι, ᾠδήκαντι).",
    why:"Theocritus writes his pastoral in literary Doric, and the dialect is not decoration — it is the genre. If you internalize these four correspondences you can read the whole idyll at speed: whenever a form looks 'wrong', run it back through the changes and the familiar Attic word appears (ἁδύ→ἡδύ, παγαῖσι→πηγαῖς). The same ᾱ-for-η you meet here is what makes χολά, ἀλωά, ἅβα, θάημα look strange." },

  { id:"theoc1-1-63:s1:q2", readingId:"theoc1-1-63", seg:1, type:"syntax",
    prompt:"In ἁ ποτὶ ταῖς παγαῖσι μελίσδεται, the word ἁ looks like the article. How do you know it is a relative pronoun here?",
    answer:"Because it has its own finite verb (μελίσδεται) and refers back to πίτυς: 'the pine … which makes music by the springs.' An article would sit next to a noun; a word that governs a verb is a relative.",
    why:"In Doric the feminine relative ἅ/ἁ and the article ἁ are spelled alike (both from the ᾱ that Attic keeps only in the relative ἥ). The discriminator is syntactic, not orthographic: look for a verb that the word could be subject/object of. The same test settles ἃ … ποταμέλγεται (line 26) and τὰν … φυλάσσει (line 47), where τάν = ἥν." },

  { id:"theoc1-1-63:s2:q1", readingId:"theoc1-1-63", seg:2, type:"syntax",
    prompt:"ἀποισῇ — what verb is this the future of, and why does the stem look nothing like the present?",
    answer:"It is 2nd sg. future middle of ἀποφέρω, 'you will carry off / win.' The future of φέρω is suppletive: it borrows the stem οἰσ- (οἴσω), so ἀπο- + οισ- + -ῇ (Doric for -ῃ) = ἀποισῇ.",
    why:"φέρω builds its principal parts from three different roots (φερ-, οἰσ-, ἐνεγκ-). Recognizing that the future lives on οἰσ- saves you here and everywhere: ἀποίσω, οἴσω, προσοίσω. The middle 'carry off for oneself' naturally means 'win a prize,' the point of the wager." },

  { id:"theoc1-1-63:s3:q1", readingId:"theoc1-1-63", seg:3, type:"syntax",
    prompt:"αἴ κα τῆνος ἕλῃ … αἶγα τὺ λαψῇ. Identify the conditional construction, dialect and all, and say why the two verbs are in different moods.",
    answer:"A future-more-vivid / present-general condition. Doric αἴ κα = Attic ἐάν (αἰ = εἰ, κα = ἄν); the protasis takes the subjunctive ἕλῃ, and the apodosis the future indicative λαψῇ: 'if he takes …, you will get.'",
    why:"The moods are doing exactly what they do in Attic ἐάν + subjunctive → future indicative; only the spellings have changed (αἰ, κα, and the Doric future λαψῇ = λήψῃ). Train yourself to read αἰ κα / αἰ κε as ἐάν on sight — it opens nearly every conditional in the poem (lines 4, 5, 9, 10, 23)." },

  { id:"theoc1-1-63:s4:q1", readingId:"theoc1-1-63", seg:4, type:"syntax",
    prompt:"In ἐς τὲ καταρρεῖ ὁ χίμαρος, the word τέ is not the connective 'and.' What is it?",
    answer:"It is the Doric enclitic accusative of the 2nd person pronoun, τέ = σέ, governed by ἐς: 'the kid streams down to you.'",
    why:"Doric has τύ (nom.), τέ/τυ (acc.), τοι (dat.) for σύ/σέ/σοι. Here the preposition ἐς demands an accusative object, and the connective τε would have nothing to connect — so τέ must be the pronoun. The same enclitic returns at the very end: τέρας κέ τυ … ἀτύξαι (line 56), where τυ = σε." },

  { id:"theoc1-1-63:s5:q1", readingId:"theoc1-1-63", seg:5, type:"syntax",
    prompt:"ἔστε κ᾿ ἀμέλξῃς — what kind of clause is this, and how does κε change the mood?",
    answer:"An indefinite temporal clause, 'until (such time as) you milk.' ἔστε ('until') + κε (= ἄν) requires the subjunctive ἀμέλξῃς, giving the sense 'until you should milk / whenever you milk.'",
    why:"'Until' clauses that look to an as-yet-unrealized point take ἄν/κε + subjunctive, exactly like the ὄφρα … ἵκετο pattern you met in Odyssey 5 — except there the event was past and factual (indicative), here it is prospective (subjunctive with κε). The presence of κε is your signal to expect the subjunctive." },

  { id:"theoc1-1-63:s7:q1", readingId:"theoc1-1-63", seg:7, type:"syntax",
    prompt:"ἅδιον … τὸ τεὸν μέλος ἢ τὸ … ὕδωρ. Parse ἅδιον and lay out the comparison.",
    answer:"ἅδιον is the comparative neuter of ἡδύς (ἡδίων, ἥδιον; Doric ἅδιον), predicate of μέλος: 'your song is sweeter than the water.' The two terms of the comparison are joined by ἤ ('than'), τὸ τεὸν μέλος vs. τὸ … ὕδωρ.",
    why:"The goatherd caps Thyrsis by turning his ἁδύ into a comparative ἅδιον — a competitive echo typical of amoebean (exchange) song. Note τεόν = σόν (Doric/epic possessive), and that the comparison is elliptical: 'sweeter than the water (is), which pours down.' Comparison with ἤ keeps both compared things in the same case (here both nominative)." },

  { id:"theoc1-1-63:s10:q1", readingId:"theoc1-1-63", seg:10, type:"syntax",
    prompt:"αἰ δέ κ᾿ ἀρέσκῃ τήναις ἄρνα λαβεῖν — what is the subject of ἀρέσκῃ, and what is τήναις doing?",
    answer:"The subject of ἀρέσκῃ ('it is pleasing') is the infinitive phrase ἄρνα λαβεῖν, 'to take the lamb.' τήναις (= ἐκείναις, the Muses) is dative with ἀρέσκῃ: 'if to take the lamb is pleasing to them.'",
    why:"ἀρέσκω is used impersonally with a dative of the person and an infinitive (or clause) as its real subject — English inverts it to 'if they prefer to take the lamb.' Spotting that the infinitive is the grammatical subject, not a complement, keeps you from hunting for a missing 'it.' τήναις is the Doric dative plural of τῆνος." },

  { id:"theoc1-1-63:s12:q1", readingId:"theoc1-1-63", seg:12, type:"syntax",
    prompt:"λῇς ποτὶ τᾶν Νυμφᾶν, λῇς … καθίξας — what is λῇς, and what force has ποτὶ + genitive here?",
    answer:"λῇς is 2nd sg. of the Doric verb λῶ (λῶ, λῇς, λῇ) = ἐθέλω/βούλομαι, 'do you wish?' ποτὶ τᾶν Νυμφᾶν is πρός + genitive of adjuration, 'by the Nymphs' — an oath, not motion.",
    why:"Two things to bank. (1) Doric λῶ is the ordinary verb for 'want' in this poem; λῇς … λῇς repeated is coaxing insistence. (2) πρός (Doric ποτί) + genitive in an entreaty means 'by (a god),' calling the divinity to witness — quite distinct from ποτί + acc. 'toward' (line 36) or ποτί + dat. 'at' (line 18). The case tells you the sense." },

  { id:"theoc1-1-63:s14:q1", readingId:"theoc1-1-63", seg:14, type:"syntax",
    prompt:"The infinitive συρίσδεν opens line 14, but its governing verb was back in line 12. Explain the construction and the form of the infinitive.",
    answer:"συρίσδεν is a present active infinitive (Doric -εν for -ειν) completing λῇς from line 12: 'do you wish … to pipe?' The intervening ὡς-clause (line 13) has delayed the infinitive to the head of line 14.",
    why:"Hyperbaton on this scale — the complement stranded a whole line from its verb — is a feature of the leisurely bucolic sentence; hold λῇς in suspense and let συρίσδεν land. The infinitive ending -εν (not -ειν) is a steady Doric marker (cf. συρίσδεν line 16): whenever an infinitive seems to be missing its final ι, you are looking at the Doric form." },

  { id:"theoc1-1-63:s16:q1", readingId:"theoc1-1-63", seg:16, type:"syntax",
    prompt:"οὐ θέμις … τὸ μεσαμβρινὸν … ἄμμιν συρίσδεν. What is the subject of the (understood) 'is', what is τὸ μεσαμβρινόν, and what is ἄμμιν?",
    answer:"The subject is the infinitive συρίσδεν: 'to pipe is not θέμις (right) for us.' τὸ μεσαμβρινόν is an adverbial accusative of time, 'at noontide.' ἄμμιν is the dat. pl. of the 1st person pronoun (= ἡμῖν), 'for us.'",
    why:"θέμις (ἐστί) + infinitive is the impersonal 'it is lawful/right to …,' the infinitive being the subject. The article-plus-neuter-adjective τὸ μεσαμβρινόν used adverbially ('at the noon-time') is worth filing away. ἄμμι(ν) is the epic/Aeolic-Doric dative — the same shape you will meet in Homer for ἡμῖν." },

  { id:"theoc1-1-63:s17:q1", readingId:"theoc1-1-63", seg:17, type:"syntax",
    prompt:"δεδοίκαμες — parse it fully, and explain both the ending and the tense-meaning.",
    answer:"1st plural perfect active indicative of δείδω, 'we fear.' The ending is Doric -μες for -μεν; the tense is perfect (δέδοικα) but the sense is present, 'we are in a state of fear.'",
    why:"Two payoffs. (1) The perfect of δείδω/δέδοικα, like οἶδα and ἕστηκα, is a 'stative' perfect with present meaning — 'I have come to fear' = 'I fear.' (2) The 1st pl. -μες (δεδοίκαμες, and cf. any Doric -μες form) is one of the surest dialect signatures: Attic -μεν, Doric -μες. Don't read it as some odd -μαι middle." },

  { id:"theoc1-1-63:s17:q2", readingId:"theoc1-1-63", seg:17, type:"syntax",
    prompt:"Account for the form ἀμπαύεται.",
    answer:"It is ἀναπαύεται, 'he rests' (present middle of ἀναπαύομαι), with the prefix ἀνα- apocopated to ἀν- and then assimilated to ἀμ- before the π of παύεται.",
    why:"Apocope (dropping the short final vowel of a prefix: ἀνά→ἀν, κατά→κατ, παρά→παρ) is regular in epic and Doric, and the bared consonant then assimilates to what follows: ἀν- + π- → ἀμπ-. You saw the same ἀμ- in ἄμμιν; you will meet κατ᾽ and πὰρ (πάρ, line 33) too. Undo the apocope to recover the verb: ἀμπαύεται → ἀναπαύεται." },

  { id:"theoc1-1-63:s19:q1", readingId:"theoc1-1-63", seg:19, type:"syntax",
    prompt:"τᾶς βουκολικᾶς … ἵκεο μοίσας — parse ἵκεο and explain its ending.",
    answer:"2nd sg. aorist middle indicative of ἱκνέομαι, 'you reached/attained.' The ending is the uncontracted -εο (for Attic -ου): ἵκε(σ)ο → ἵκεο.",
    why:"Epic and Doric leave the 2nd sg. middle -εσο to lose only its σ, giving -εο, where Attic contracts all the way to -ου (ἵκου). The same uncontracted vowels explain ἁδέι for ἁδεῖ (line 27). Reading ἵκεο as 'you came/attained' also recovers the genitive it governs, τᾶς βουκολικᾶς … μοίσας, 'you reached the height of the bucolic Muse.'" },

  { id:"theoc1-1-63:s20:q1", readingId:"theoc1-1-63", seg:20, type:"syntax",
    prompt:"ἑσδώμεθα — parse it and name the construction.",
    answer:"1st plural present middle subjunctive of ἕζομαι (Doric ἕσδομαι), 'let us sit down' — a hortatory (exhortation) subjunctive.",
    why:"The 1st-person subjunctive with no introductory word is the hortatory subjunctive, 'let us …' — English needs 'let' to render it. Here δεῦρ᾽ ('come!') primes it. And note the Doric -σδ- for -ζ-: ἕσδομαι = ἕζομαι, the same swap as μελίσδεται, συρίσδω, ἐρίσδω, ἐφαρμόσδων." },

  { id:"theoc1-1-63:s22:q1", readingId:"theoc1-1-63", seg:22, type:"syntax",
    prompt:"ὡς ὅκα τὸν Λιβύαθε ποτὶ Χρόμιν ᾆσας ἐρίσδων — explain ὅκα and the suffix on Λιβύαθε.",
    answer:"ὅκα is the Doric form of ὅτε, 'when' (here 'as once when …'). Λιβύαθε is Λιβύη + the suffix -θε(ν), 'from Libya,' describing Chromis: 'Chromis, the man from Libya.'",
    why:"Doric systematically replaces the ὁτ-/τοτ- family with ὁκ-/τοκ-: ὅκα = ὅτε, τόκα = τότε, ἄλλοκα = ἄλλοτε (line 37), τανίκα = τηνίκα (line 16). And the ablatival suffix -θε(ν) marks 'place from which' (cf. οἴκοθεν 'from home,' οὐρανόθεν 'from heaven') — it makes a preposition unnecessary. Two participles then hang on the subject 'you': ᾆσας ('having sung') and ἐρίσδων ('competing')." },

  { id:"theoc1-1-63:s23:q1", readingId:"theoc1-1-63", seg:23, type:"syntax",
    prompt:"αἶγά τέ τοι δωσῶ διδυματόκον ἐς τρὶς ἀμέλξαι — what job does the infinitive ἀμέλξαι do?",
    answer:"It is an epexegetic (explanatory) / consecutive infinitive depending on the noun phrase: 'a twin-bearing goat (such as) to milk three times over.' It tells you what the goat is good for.",
    why:"An infinitive can be tacked onto a noun or adjective to specify capacity or result — 'a goat to milk thrice' = 'a goat that can be milked thrice.' This 'infinitive of respect/result' is common after words of fitness and quantity (cf. English 'water fit to drink'). τοι here is the Doric dative σοι, 'for you.'" },

  { id:"theoc1-1-63:s24:q1", readingId:"theoc1-1-63", seg:24, type:"syntax",
    prompt:"ἃ δύ᾽ ἔχοισ᾽ ἐρίφως ποταμέλγεται — parse ἔχοισα and ἐρίφως, and give the force of the participle.",
    answer:"ἔχοισα is the Doric present active participle = ἔχουσα, fem. nom. sg., here concessive: 'although she has two kids.' ἐρίφως is the Doric accusative plural = ἐρίφους, 'kids,' its object.",
    why:"Two Doric endings in three words. (1) The participle -οισα for -ουσα (from -ονσα) — the same in τεύχοισα (line 49), and its α-stem twin γέλαισα (line 36). (2) The 2nd-declension acc. pl. -ως for -ους, also in ὄρχως (line 48). Context makes ἔχοισα concessive: she nurses two kids and yields milk besides." },

  { id:"theoc1-1-63:s25:q1", readingId:"theoc1-1-63", seg:25, type:"syntax",
    prompt:"κεκλυσμένον and (a line later) κεκονιμένος are both perfect participles. What voice/aspect are they, and what do they contribute?",
    answer:"Both are perfect middle/passive participles — κεκλυσμένον (from κλύζω) 'sealed/coated' with the cup, κεκονιμένος (from κονίω) 'dusted/powdered' with the ivy. They describe a settled, resultant state of the object.",
    why:"Ekphrasis (description of an artwork) lives on the perfect: the carving is not being done, it stands done. So the passage is thick with perfect passives of state — κεκλυσμένον, κεκονιμένος, and the recurring τέτυκται ('has been wrought,' lines 32, 39) and περιπέπταται ('lies spread round,' line 55). Read them as 'is (in the state of being) X-ed.'" },

  { id:"theoc1-1-63:s28:q1", readingId:"theoc1-1-63", seg:28, type:"syntax",
    prompt:"ἔντοσθεν δὲ γυνά … τέτυκται, ἀσκητὰ πέπλῳ τε καὶ ἄμπυκι. What is τέτυκται, and what case-usage is πέπλῳ … ἄμπυκι?",
    answer:"τέτυκται is 3rd sg. perfect middle/passive of τεύχω, 'has been fashioned / is wrought' (subject γυνά). πέπλῳ and ἄμπυκι are datives of respect/means with ἀσκητά: 'adorned in respect of / by means of robe and headband.'",
    why:"τεύχω's perfect passive τέτυγμαι/τέτυκται is the signature verb of Greek ekphrasis (it is all over Homer's Shield of Achilles). And the dative with a passive verbal adjective like ἀσκητά ('wrought, decked') tells you what she is decked with — a dative of means shading into respect. Note γυνά = γυνή, Doric ᾱ." },

  { id:"theoc1-1-63:s29:q1", readingId:"theoc1-1-63", seg:29, type:"syntax",
    prompt:"πὰρ δέ οἱ ἄνδρες … ἄλλοθεν ἄλλος νεικείουσ᾿ ἐπέεσσι. Explain the idiom ἄλλοθεν ἄλλος and parse ἐπέεσσι.",
    answer:"ἄλλοθεν ἄλλος = 'one from one side, the other from the other' — a distributive idiom for two parties on opposite sides. ἐπέεσσι is the epic dative plural of ἔπος, 'with words' (dative of means).",
    why:"Greek loves to double a form of ἄλλος to distribute an action: ἄλλος ἄλλα λέγει 'one says one thing, another another'; here ἄλλοθεν ἄλλος splits the two quarrelling suitors. And ἐπέεσσι shows the epic -εσσι dative plural on the uncontracted stem ἐπε- (ἔπος, ἔπε(σ)-εσσι) — a Homeric colour Theocritus borrows. καλόν beside it is an adverbial accusative, 'beautifully (long-haired).'" },

  { id:"theoc1-1-63:s30:q1", readingId:"theoc1-1-63", seg:30, type:"syntax",
    prompt:"τὰ δ᾽ οὐ φρενὸς ἅπτεται αὐτᾶς — what is the subject, and why is φρενός in the genitive?",
    answer:"The subject is τά, 'these things' (the men's wrangling), used as a demonstrative. φρενός is genitive because ἅπτομαι ('touch, take hold of') governs the genitive: 'but these things do not touch her heart.'",
    why:"Verbs of touching, grasping, and aiming take a genitive of the thing touched (ἅπτομαι, λαμβάνομαι, θιγγάνω) — the genitive of the part reached for. And the plural article τά standing alone as 'these things' is the old demonstrative use of ὁ/ἡ/τό, common in Homer and kept here. αὐτᾶς = αὐτῆς (Doric ᾱ)." },

  { id:"theoc1-1-63:s31:q1", readingId:"theoc1-1-63", seg:31, type:"syntax",
    prompt:"ὅκα μὲν … γέλαισα, ἄλλοκα δ᾽ αὖ … Explain the ὅκα μέν … ἄλλοκα δέ frame and parse γέλαισα.",
    answer:"ὅκα μέν … ἄλλοκα δέ = 'at one moment … at another' (Doric ὅκα = ὅτε, ἄλλοκα = ἄλλοτε), correlating her two glances. γέλαισα is the Doric present active participle of γελάω = γελῶσα, fem. nom. sg., 'smiling.'",
    why:"The μέν … δέ pair here is temporal-distributive ('now … now'), carried by the Doric ὁκ-/ἀλλοκ- adverbs. And γέλαισα shows the α-contract verb's participle in Doric -αισα (γελά-οισα → γέλαισα), the twin of the -οισα you saw in ἔχοισα/τεύχοισα. ποτιδέρκεται just before is Doric ποτι- (= προσ-)." },

  { id:"theoc1-1-63:s32:q1", readingId:"theoc1-1-63", seg:32, type:"syntax",
    prompt:"μοχθίζοντι ends line 38. Parse it, and connect its ending to ᾠδήκαντι in the next scene.",
    answer:"μοχθίζοντι is 3rd plural present active indicative, 'they toil' — Doric -οντι for Attic -ουσι. Likewise ᾠδήκαντι (line 43) is 3rd pl. perfect, Doric -αντι for -ασι, 'they are swollen.'",
    why:"The Attic 3rd-plural endings -ουσι/-ασι are the eroded descendants of original -οντι/-αντι, which Doric preserves intact. So a verb ending in -οντι or -αντι is not a dative participle but a 3rd-plural finite verb — a classic trap. File the pair together: μοχθίζοντι = μοχθίζουσι, ᾠδήκαντι = ᾠδήκασι." },

  { id:"theoc1-1-63:s33:q1", readingId:"theoc1-1-63", seg:33, type:"syntax",
    prompt:"τοῖς δὲ μέτα … τέτυκται. Why is it μέτα with the accent on the first syllable, and what case does it govern?",
    answer:"This is anastrophe: the disyllabic preposition μετά throws its accent back to μέτα when it follows its object. It governs the dative τοῖς, 'among/beside them.'",
    why:"When a two-syllable preposition stands after the noun it governs, its accent retracts to the first syllable (μετά→μέτα, ἐπί→ἔπι, περί→πέρι). You met the same thing in Homer with ἔνι and περὶ σπείους. Recognizing anastrophe stops you from parsing μέτα as some separate word and shows you the phrase is τοῖς … μέτα = μετὰ τοῖς." },

  { id:"theoc1-1-63:s34:q1", readingId:"theoc1-1-63", seg:34, type:"syntax",
    prompt:"ἐφ᾽ ᾇ σπεύδων … ἕλκει — what is ᾇ, and what is its antecedent?",
    answer:"ᾇ is the Doric feminine dative singular of the relative ὅς/ἥ/ὅ (= ᾗ), governed by ἐπί: 'on which.' Its antecedent is πέτρα (line 40), the rock: 'a rock, on which the old man hauls his net.'",
    why:"The Doric relative takes the long ᾱ throughout, so ᾗ appears as ᾇ, ἥ as ἅ, ἥν as τάν. Here ἐπί + dative ᾇ locates the action 'on' the rock. Tracking the relative back to πέτρα two words earlier is what stitches the fisherman to his crag." },

  { id:"theoc1-1-63:s36:q1", readingId:"theoc1-1-63", seg:36, type:"syntax",
    prompt:"φαίης κεν … νιν … ἐλλοπιεύειν — name the construction of φαίης κεν, the case/role of νιν, and the role of ἐλλοπιεύειν.",
    answer:"φαίης κεν is a potential optative (κεν = ἄν + optative), 'you would say.' νιν is the Doric enclitic accusative (= αὐτόν), the subject-accusative of the infinitive. ἐλλοπιεύειν is a present infinitive in indirect statement after φαίης: 'you would say that he was fishing.'",
    why:"Three things at once, all high-value. (1) optative + ἄν/κε = potential, 'would/could' — the ekphrastic appeal to the imagined viewer. (2) νιν is Doric/lyric for 'him/her/it,' a caseless-looking enclitic that here is accusative. (3) φημί takes indirect statement with accusative-and-infinitive. The whole idea is bracketed by potentials: it opens here (φαίης κεν) and closes at τέρας κέ … ἀτύξαι (line 56)." },

  { id:"theoc1-1-63:s37:q1", readingId:"theoc1-1-63", seg:37, type:"syntax",
    prompt:"καὶ πολιῷ περ ἐόντι — what does περ add, and what is ἐόντι?",
    answer:"περ with a participle marks concession, 'although': καὶ … περ ἐόντι = 'even though he is (grey).' ἐόντι is the uncontracted epic/Doric present participle of εἰμί (ἐών, ἐόντος), dat. sg., agreeing with οἱ.",
    why:"Enclitic περ intensifies, and with a participle it regularly means 'although' (καίπερ + participle is the fossilized version). So the sinews stand out 'grey-haired though he is.' And ἐών/ἐόντος is simply 'being' — the same uncontracted participle you met as ἐοῦσαν at Odyssey 5.55. Attic would contract to ὄντι." },

  { id:"theoc1-1-63:s39:q1", readingId:"theoc1-1-63", seg:39, type:"syntax",
    prompt:"τυτθὸν δ᾽ ὅσσον ἄπωθεν ἁλιτρύτοιο γέροντος — explain τυτθὸν ὅσσον and the ending of ἁλιτρύτοιο.",
    answer:"τυτθὸν ὅσσον is an adverbial idiom, 'just a little way,' both neuter accusatives used adverbially with ἄπωθεν ('far off'). ἁλιτρύτοιο is the epic genitive singular in -οιο (= -ου) of the adjective ἁλίτρυτος, 'sea-worn,' agreeing with γέροντος.",
    why:"τυτθὸν ὅσσον ('so much as a little' = 'a very little') is a set adverbial phrase measuring distance. And the 2nd-declension genitive -οιο is the old Homeric ending that Theocritus sprinkles in for epic flavour (also γλυφάνοιο, line 28) — read -οιο as plain -ου. ἄπωθεν takes a genitive of the point measured from." },

  { id:"theoc1-1-63:s41:q1", readingId:"theoc1-1-63", seg:41, type:"syntax",
    prompt:"ἀμφὶ δέ νιν δύ᾽ ἀλώπεκες, ἁ μὲν … ἁ δ᾽ … How is the pair of foxes distributed, and what is νιν?",
    answer:"By ἁ μέν … ἁ δέ, 'the one … the other' (Doric ἁ = ἡ, article used as demonstrative), splitting the two foxes across lines 48–49. νιν is again the enclitic accusative (= αὐτόν), object of ἀμφί, referring to the boy.",
    why:"ὁ μέν … ὁ δέ (here ἁ μέν … ἁ δέ) is the standard 'the one … the other,' the article doing demonstrative duty — the same construction as οἱ δ᾽ in line 37. Once you see ἁ μέν you should already expect ἁ δέ to answer it. ὄρχως in the same clause is Doric acc. pl. = ὄρχους." },

  { id:"theoc1-1-63:s43:q1", readingId:"theoc1-1-63", seg:43, type:"syntax",
    prompt:"τὸ παιδίον οὐ πρὶν ἀνησεῖν φατὶ πρὶν ἢ … καθίξῃ. Unpick the double πρίν and the mood of καθίξῃ.",
    answer:"The main clause is negative — φατὶ (Doric = φησί) οὐ … ἀνησεῖν, 'she says she will not let the boy go.' After a negated main clause πρίν (πρὶν ἤ) means 'until' and takes the subjunctive: πρὶν … καθίξῃ, 'until she sets him down (breakfastless).' ἀνησεῖν is a future infinitive (Doric = ἀνήσειν) in indirect statement.",
    why:"The rule: πρίν after an affirmative clause takes the infinitive ('before'), but after a negative clause it means 'until' and behaves like other temporal conjunctions — here indefinite, so subjunctive (πρὶν … καθίξῃ). The οὐ that negates ἀνησεῖν is what flips πρίν into 'until.' φατί for φησί and the ξ-aorist subjunctive καθίξῃ (cf. καθίξας, line 12) are the Doric touches." },

  { id:"theoc1-1-63:s45:q1", readingId:"theoc1-1-63", seg:45, type:"syntax",
    prompt:"μέλεται δέ οἱ οὔτε τι πήρας οὔτε φυτῶν τοσσῆνον, ὅσον … γαθεῖ. What kind of verb is μέλεται, and what cases hang on it?",
    answer:"μέλεται is impersonal, 'it is a care,' with a dative of the person (οἱ, 'to him') and a genitive of the thing cared about (πήρας … φυτῶν, 'for his wallet nor for the vines'). τοσσῆνον … ὅσον ('so much … as') then correlates his indifference with his delight (γαθεῖ).",
    why:"μέλει/μέλομαι 'is a concern' takes dative-of-person + genitive-of-thing — 'X is a care to someone.' Learn the frame and the two cases fall into place. The correlative τοσσῆνον (Doric = τοσοῦτον) … ὅσον measures one thing against another: he cares for wallet and vines not so much as he rejoices (γαθεῖ = γηθεῖ, Doric ᾱ) in his weaving." },

  { id:"theoc1-1-63:s47:q1", readingId:"theoc1-1-63", seg:47, type:"syntax",
    prompt:"τέρας κέ τυ θυμὸν ἀτύξαι — parse ἀτύξαι and explain θυμόν.",
    answer:"ἀτύξαι is 3rd sg. aorist active optative of ἀτύζω, with κέ (= ἄν) a potential optative: 'a marvel that would astound (you).' θυμόν is an accusative of respect: 'would astound you as to your heart' = 'would astound your very heart.' τυ = σε (Doric).",
    why:"The idyll's ekphrasis is framed by two potentials — φαίης κεν 'you would say' (line 42) and now τέρας κέ … ἀτύξαι 'it would astound you' — a deliberate ring that hands the wonder to the reader. The accusative of respect (θυμόν, 'in respect of the heart') is the same construction as 'swift of foot': it limits how the astounding applies. τυ is once more the Doric enclitic σε, as at line 5." },

  { id:"theoc1-1-63:s48:q1", readingId:"theoc1-1-63", seg:48, type:"syntax",
    prompt:"τῷ μὲν ἐγὼ πορθμῆι Καλυδνίῳ αἶγά τ᾽ ἔδωκα ὦνον … What does τῷ do here, and what is ὦνον?",
    answer:"τῷ is a dative of price, 'in exchange for it (the cup),' with ἔδωκα. ὦνον, 'as the price,' is an accusative in apposition to the gifts αἶγα … τυρόεντα: the goat and the cheese together were the price he paid the ferryman.",
    why:"Verbs of buying, selling, and exchanging put what something is worth in the dative (or a genitive of value); here the cup's worth is measured by the dative τῷ. ὦνον in apposition then labels the whole gift as 'the purchase-price.' Sort out the case-frame of ἔδωκα — dative recipient (πορθμῆι), accusative thing given (αἶγα), plus this dative of exchange — and the sentence falls open." },

  { id:"theoc1-1-63:s49:q1", readingId:"theoc1-1-63", seg:49, type:"syntax",
    prompt:"οὐδέ τι πω ποτὶ χεῖλος ἐμὸν θίγεν, ἀλλ᾽ ἔτι κεῖται ἄχραντον. What is the unstated subject, and how does ἄχραντον work?",
    answer:"The subject of both θίγεν and κεῖται is the cup (δέπας, neuter), carried over from the ekphrasis: 'it has not yet touched my lip, but still lies undefiled.' ἄχραντον is a predicative adjective agreeing with that neuter subject — it lies there in the state of being unstained. θίγεν is an unaugmented epic aorist = ἔθιγε.",
    why:"Greek drops a subject once it is obvious — here the cup the whole passage has described. A predicative adjective like ἄχραντον names the state the subject is in as it 'lies' (κεῖται), not a mere epithet: 'lies undefiled,' i.e. never yet drunk from. And keep an eye out for augmentless aorists (θίγεν for ἔθιγε) in this epic-coloured verse, the same licence as unaugmented forms elsewhere in the idyll." },

  { id:"theoc1-1-63:s50:q1", readingId:"theoc1-1-63", seg:50, type:"syntax",
    prompt:"τῷ κά τυ μάλα πρόφρων ἀρεσαίμαν, αἴ κα … ἀείσῃς. Parse ἀρεσαίμαν and explain the conditional.",
    answer:"ἀρεσαίμαν is 1st sg. aorist middle optative (Doric -μαν = -μην) of ἀρέσκομαι, with κά (= ἄν) a potential optative: 'I would gladly gratify you.' The protasis αἴ κα … ἀείσῃς is Doric for ἐάν + subjunctive, 'if you sing.' So a prospective (subjunctive) 'if'-clause is answered by a potential-optative main clause.",
    why:"αἴ κα = ἐάν is the Doric shape of the prospective protasis, so ἀείσῃς is subjunctive. Its natural apodosis would be a future indicative, but Theocritus softens it to the potential optative ἀρεσαίμαν + κά — the courteous 'I would gladly…,' an offer rather than a flat promise. Note the two κα/κά particles doing different jobs: one builds ἐάν, the other builds the potential. πρόφρων is a predicative adjective used adverbially, 'with a ready heart' = gladly." },

  { id:"theoc1-1-63:s51:q1", readingId:"theoc1-1-63", seg:51, type:"syntax",
    prompt:"κοὔτι τυ κερτομέω. πόταγ᾽, ὠγαθέ. Resolve κοὔτι and ὠγαθέ, and parse πόταγ᾽.",
    answer:"κοὔτι is crasis of καί + οὔ (τι), 'and not at all.' ὠγαθέ is crasis of ὦ + ἀγαθέ, the vocative 'good sir!' πόταγ᾽ is πόταγε, Doric for πρόσαγε (ποτ- = προσ-), a 2nd sg. present imperative used intransitively, 'come here!'",
    why:"Crasis fuses a short word (καί, ὦ) onto the next, flagged by the coronis/smooth breathing: κ-οὔτι, ὠ-γαθέ — split them back out and the sense is plain. And ποτ(ι)- for προσ- is the reliable Doric swap you have already met in ποτί, ποτιδέρκεται (line 36), ποτόσδω (28); πόταγε 'bring-to' → intransitive 'approach' is just προσάγω in Doric dress." },

  { id:"theoc1-1-63:s52:q1", readingId:"theoc1-1-63", seg:52, type:"syntax",
    prompt:"τὰν … ἀοιδάν … εἰς Ἀίδαν … τὸν ἐκλελάθοντα φυλαξεῖς. What is ἐκλελάθοντα, and what does the sentence mean?",
    answer:"ἐκλελάθοντα is the aorist active participle of the reduplicated causative aorist ἐκλέλαθον ('I made to forget utterly') of ἐκλανθάνω, acc. sg. masc. agreeing with Ἀίδαν: 'Hades that makes one forget everything.' The whole: 'for you will in no way keep the song for yourself once you reach all-forgetting Hades' — so sing it now.",
    why:"The reduplicated aorist ἐκλέλαθον is causative and transitive ('make forget'), not the intransitive middle λανθάνομαι ('forget'): the reduplication plus active endings is the tell. Pinned with the article to Ἀίδαν, it turns Hades into 'the god who blots out memory.' φυλαξεῖς is the Doric contracted-type future = φυλάξεις. The thought — you cannot carry your art past death — is the goatherd's clinching reason for Thyrsis to sing." },

  /* ===================== Theocritus, Idyll 1.64–107, 115–118 ===================== */

  { id:"theoc1-64-118:s1:q1", readingId:"theoc1-64-118", seg:1, type:"syntax",
    prompt:"ἄρχετε βουκολικᾶς, Μοῖσαι φίλαι, ἄρχετ᾽ ἀοιδᾶς. What case is ἀοιδᾶς, and why?",
    answer:"Genitive singular feminine (Doric -ᾶς for Attic -ῆς), governed by ἄρχετε: ἄρχω 'make a beginning of' takes the genitive of the thing begun. βουκολικᾶς agrees with it, split off across the whole line.",
    why:"The ending -ᾶς is genuinely ambiguous in Doric — it could equally be an accusative plural (Attic -άς). What settles it is the verb: ἄρχω, like λήγω, ἐπιλαμβάνομαι and the other verbs of beginning/ceasing/taking hold, governs a genitive. The proof is inside the poem: when Thyrsis' song ends the refrain becomes λήγετε βουκολικᾶς … ἀοιδᾶς, and λήγω 'cease from' can only take a genitive. Note also the pattern the refrain uses seven times: adjective … vocative … repeated imperative … noun, so that the agreeing pair βουκολικᾶς/ἀοιδᾶς brackets the line. Getting used to hunting the far end of the line for the noun that matches an adjective is most of what reading hexameter word-order requires." },

  { id:"theoc1-64-118:s2:q1", readingId:"theoc1-64-118", seg:2, type:"syntax",
    prompt:"Θύρσις ὅδ᾽ ὡξ Αἴτνας, καὶ Θύρσιδος ἁδέα φωνά. Resolve ὡξ, and say whether ἁδέα is attributive or predicative.",
    answer:"ὡξ is crasis of ὁ ἐξ — article plus preposition, doing the work of a relative clause: 'the man from Etna'. ἁδέα is PREDICATIVE: 'and the voice of Thyrsis is sweet', not 'and (this is) the sweet voice of Thyrsis'.",
    why:"Two habits to build. First, when a word starts with a vowel carrying a circumflex and a rough/smooth breathing where you expected the article, suspect crasis: ὁ + ἐξ → ὡξ, exactly as ὁ + αἰπόλος → ᾡπόλος at 80 and 87. The article + prepositional phrase (ὁ ἐξ Αἴτνας) is a standard Greek substitute for a relative clause, and English has to supply 'who is'. Second, there is no article with either ἁδέα or φωνά, and both are nominative, so the two must stand in a predicative relation to each other: no article anywhere in a nominal sentence means 'X is Y'. Dover insists on the point because the two renderings say quite different things — the line is a boast about the voice, not an identification of the speaker. Compare the poem's opening, where ἁδύ … τὸ ψιθύρισμα works the same way." },

  { id:"theoc1-64-118:s3:q1", readingId:"theoc1-64-118", seg:3, type:"syntax",
    prompt:"πᾷ ποκ᾽ ἄρ᾽ ἦσθ᾽, ὅκα Δάφνις ἐτάκετο, πᾷ ποκα, Νύμφαι; Parse ἦσθ᾽ — and how do you know?",
    answer:"ἦσθ(ε), imperfect indicative 2nd PLURAL of εἰμί (a poetic form for Attic ἦτε), not the 2nd singular ἦσθα. The vocative Νύμφαι at the end of the line proves it: the addressees are plural.",
    why:"The trap is real: ἦσθα is the familiar 2nd singular, and ἦσθ᾽ looks like it elided. But Greek built an analogical plural ἦσθε off that singular, and here the syntax forces it — the whole question is addressed to the Νύμφαι, and εἴχετ᾽ (= εἴχετε) three lines later is unambiguously 2nd plural, confirming the person. This is the general lesson: when a verb's ending is ambiguous, let the vocatives and the nearby unambiguous verbs settle it, not your first guess. Dover adds the point of the question — Thyrsis is not curious about geography, he is saying 'why did you not save him?', and the four places named in 67–69 are all places the Nymphs were NOT." },

  { id:"theoc1-64-118:s4:q1", readingId:"theoc1-64-118", seg:4, type:"syntax",
    prompt:"ἦ κατὰ Πηνειῶ καλὰ τέμπεα, ἦ κατὰ Πίνδω; The same preposition κατά appears twice. What case does it take each time, and what difference does that make?",
    answer:"First κατά + accusative (καλὰ τέμπεα), 'along, down through the lovely glens'; then κατά + genitive (Πίνδω, Doric for Πίνδου), 'down from, down over Pindos'. Πηνειῶ is not governed by κατά at all — it is a possessive genitive with τέμπεα.",
    why:"κατά is the classic two-case preposition, and the case is the only thing that tells you which sense you have: + acc. is extension 'along/through/according to', + gen. is 'down from/down upon'. Here Theocritus uses both within one line, so you cannot coast — you have to decide the case of each noun. That also means spotting that Πηνειῶ, sitting right next to κατά, is NOT its object: -ῶ is the Doric/epic contracted genitive of -ος nouns (cf. Ἀνάπω 68, αὑτῶ 92), and it belongs to τέμπεα, 'the glens of Peneios'. The nearest noun is not always the governed one. The same κατά + gen. returns at 118, κατὰ Θύβριδος ὕδωρ." },

  { id:"theoc1-64-118:s5:q1", readingId:"theoc1-64-118", seg:5, type:"syntax",
    prompt:"οὐ γὰρ δὴ ποταμοῖο μέγαν ῥόον εἴχετ᾽ Ἀνάπω, οὐδ᾽ Αἴτνας σκοπιάν, οὐδ᾽ Ἄκιδος ἱερὸν ὕδωρ. How many objects does εἴχετε have, and how is the sentence built?",
    answer:"Three accusative objects — ῥόον, σκοπιάν, ὕδωρ — each with a possessive genitive attached (ποταμοῖο … Ἀνάπω, Αἴτνας, Ἄκιδος), linked by οὐδ᾽ … οὐδ᾽ and getting longer as they go. ἔχω here means 'occupy, keep to, haunt'.",
    why:"Two things worth carrying away. First, ἔχω with a place as object is not 'have' but 'occupy, be at' — a use you will meet all over verse, and it is what makes the sentence mean 'you were not at your own waters'. Second, the shape: one verb governing a series of accusatives, each expanded a little more than the last, is the same rising-list technique Dover labels a 'rising trikolon' at 100–101 (Κύπρι βαρεῖα, Κύπρι νεμεσσατά, Κύπρι θνατοῖσιν ἀπεχθής) and again at 115 (ὦ λύκοι, ὦ θῶες, ὦ … φωλάδες ἄρκτοι). Once you notice Theocritus building in threes you can predict where a sentence is going. Note too that every genitive here is possessive with its noun, none of them dependent on a verb — the epic -οιο of ποταμοῖο is the giveaway for the first pair." },

  { id:"theoc1-64-118:s7:q1", readingId:"theoc1-64-118", seg:7, type:"syntax",
    prompt:"τῆνον μὰν θῶες, τῆνον λύκοι ὠρύσαντο, τῆνον χὠκ δρυμοῖο λέων ἔκλαυσε θανόντα. Unpack χὠκ, and account for the case of τῆνον and the tense of θανόντα.",
    answer:"χὠκ is a triple crasis of καὶ ὁ ἐκ (καί + ὁ → χὠ, with the κ aspirated, then + ἐκ), so read καὶ ὁ ἐκ δρυμοῖο λέων. τῆνον is accusative, the object of ὠρύσαντο and ἔκλαυσε — both verbs of wailing take an accusative of the person mourned. θανόντα is aorist participle agreeing with τῆνον, so 'dead', not 'dying'.",
    why:"Crasis with καί is everywhere in this poem, and it always leaves the same fingerprint: an initial χ where you expected κ, because καί's lost -ί aspirates the consonant. Collect them as you go — χὠ (100), χὠκ here, and the un-aspirated κἤφα (82), κεῖπε (97), κἠν (103). Second, ὠρύομαι and κλαίω taking a direct object is a small but useful fact: English needs 'howled FOR him', Greek just puts him in the accusative. Third, the tense of the participle is doing real work. Dover: θανόντα is aorist, so it means 'dead' — the couplet leaps forward past the wasting-away to the death itself, and only at 74 (πολλαί οἱ πὰρ ποσσὶ βόες) do we come back to the deathbed. Reading participle tense as aspect rather than time is what lets you follow the chronology of the song." },

  { id:"theoc1-64-118:s9:q1", readingId:"theoc1-64-118", seg:9, type:"syntax",
    prompt:"πολλαί οἱ πὰρ ποσσὶ βόες, πολλοὶ δέ τε ταῦροι, πολλαὶ δὲ δαμάλαι καὶ πόρτιες ὠδύραντο. Identify οἱ and πὰρ, and say how many subjects the verb has.",
    answer:"οἱ is not the article but the epic enclitic dative of the third-person pronoun (= αὐτῷ), 'for him' — taken with πὰρ ποσσί, 'at his feet'. πὰρ is παρά by apocope, + dative. There are four subjects (βόες, ταῦροι, δαμάλαι, πόρτιες) for the single verb ὠδύραντο at the very end.",
    why:"οἱ is one of the standard epic ambush words: identical in shape to the nominative plural masculine article, but here an enclitic dative pronoun. Two clues — it cannot be nominative plural masculine when the noun beside it (βόες, with πολλαί) is feminine, and an enclitic sits in second position in its clause, which is exactly where this one is. Apocope (πὰρ for παρά, ἀν᾽ for ἀνά at 115–117) is the other epic licence to internalize: a preposition can shed its final vowel before a consonant. And note the structure — three πολλ- phrases, four subjects, one verb held back to the last word, so the grief of the whole herd arrives at once. When a Greek sentence gives you a pile of nominatives and no verb, keep reading to the end of the sentence rather than assuming an ellipse." },

  { id:"theoc1-64-118:s11:q1", readingId:"theoc1-64-118", seg:11, type:"syntax",
    prompt:"ἦνθ᾽ Ἑρμᾶς πράτιστος ἀπ᾽ ὤρεος. Parse ἦνθ᾽ and πράτιστος, and translate πράτιστος idiomatically.",
    answer:"ἦνθ(ε) is the Doric aorist of ἔρχομαι, = Attic ἦλθε (λ → ν). πράτιστος is nominative singular masculine, Doric for πρώτιστος (superlative of πρᾶτος = πρῶτος), used PREDICATIVELY with the verb: 'Hermes came first', not 'the very first Hermes came'.",
    why:"ἦνθον for ἦλθον is the single Doric form you will trip over most in this passage — it recurs at 80 twice, 81, and 95. Learn to see the ν as a substitute for λ and the form becomes transparent. The predicative adjective is the more transferable point: Greek regularly attaches an adjective to the subject where English wants an adverb (πρῶτος ἦλθε 'he came first', μόνος ἦλθε 'he came alone', ἄσμενος ἦλθε 'he came gladly'). The test is the absence of an article: an attributive adjective in Greek normally sits inside the article-noun bracket, so a bare nominative adjective standing loose beside the verb is predicative. You saw the same thing at 62 with πρόφρων ἀρεσαίμαν, 'I would gladly gratify you'." },

  { id:"theoc1-64-118:s12:q1", readingId:"theoc1-64-118", seg:12, type:"syntax",
    prompt:"τίνος, ὠγαθέ, τόσσον ἔρασαι; Why is τίνος genitive, and what is τόσσον doing?",
    answer:"τίνος is genitive because ἔρασαι (ἔραμαι, 'be in love with') governs the genitive of the person desired: 'for whom do you long?'. τόσσον is an adverbial accusative (neuter of τόσσος), 'so much, so greatly', with the verb.",
    why:"This is the case-clue that tells you what Hermes is actually asking. Verbs of desiring, longing and loving — ἔραμαι, ἐπιθυμέω, ἐράω — take a genitive of the object of desire, as do verbs of remembering, aiming at and taking hold of. If you read τίνος as a possessive you lose the sense entirely. The adverbial accusative of the neuter adjective is the other reusable point: Greek makes adverbs out of neuter adjectives freely and constantly, and this passage is full of them — καλόν 'sweetly' at 107, ἁδεῖα 'with enjoyment' at 95, πάνθ᾽ 'wholly' at 102, τί 'why?' at 82. Whenever a neuter accusative has no verb to be the object of, try it as an adverb. (On the form itself, Dover notes the α of ἔρᾱσαι is long, and that Theocritus uses ἐρῶ and ἔρᾱμαι but never ἔρᾰμαι.)" },

  { id:"theoc1-64-118:s14:q1", readingId:"theoc1-64-118", seg:14, type:"syntax",
    prompt:"ἦνθον τοὶ βοῦται, τοὶ ποιμένες, ᾡπόλοι ἦνθον· What is ᾡπόλοι, and what is the effect of the word-order?",
    answer:"ᾡπόλοι is crasis of οἱ αἰπόλοι, 'the goatherds' — article and noun fused. The line is a ring: the same verb ἦνθον stands first and last, with the three subjects enclosed between them.",
    why:"Crasis of the article with a following vowel is constant in this poem — οἱ αἰπόλοι → ᾡπόλοι here, ὁ αἰπόλος → ᾡπόλος at 87, ὁ ἐξ → ὡξ at 65. The iota-subscript is your clue that an ο- or οι- article has been swallowed. Notice too that the third subject has no visible article precisely because it has been absorbed, so 'article, article, none' is only apparent. The ring-composition (verb … subjects … same verb) is worth naming: repeating the verb at both ends of a line is how Greek verse encloses a list, and it makes the whole countryside converge on the dying man in a single breath. The three trades named — βοῦται, ποιμένες, αἰπόλοι — are between them the entire social world of the Idylls, and Priapos will play cowherd against goatherd in 86–91." },

  { id:"theoc1-64-118:s15:q1", readingId:"theoc1-64-118", seg:15, type:"syntax",
    prompt:"πάντες ἀνηρώτευν τί πάθοι κακόν. Parse πάθοι and explain the mood.",
    answer:"Aorist active optative, 3rd singular, of πάσχω. It is an indirect question in secondary sequence: after the past-tense main verb ἀνηρώτευν, the original indicative of the direct question (τί ἔπαθε; 'what has happened to him?') may be changed to the optative.",
    why:"The optative of indirect discourse is one of the highest-value constructions to recognize, because an optative with no ἄν and no wish-force is otherwise baffling. The rule: after a main verb in a past tense, a subordinate indicative in indirect speech, an indirect question, or a causal or temporal clause MAY shift to the optative, keeping its own tense (aorist optative = aorist indicative, i.e. simple past aspect, not 'would'). It is optional — Greek often keeps the indicative for vividness — so the shift is a stylistic choice. Translate back through the direct form and it is easy: τί ἔπαθε κακόν; → τί πάθοι κακόν. Compare ἀνηρώτευν itself, a Doric imperfect in -ευν for -ων (the contract verb keeps its -ε-), the same feature as ἐλέγευ 86, βατεῦνται 87, βομβεῦντι 107." },

  { id:"theoc1-64-118:s16:q1", readingId:"theoc1-64-118", seg:16, type:"syntax",
    prompt:"κἤφα “Δάφνι τάλαν, τί τὺ τάκεαι; Unpack κἤφα, and distinguish τὺ here from the τυ of line 78.",
    answer:"κἤφα is crasis of καί + ἔφα, with Doric ἔφα for Attic ἔφη (3rd sg. of φημί): 'and he said'. τὺ here is the ACCENTED Doric form of σύ, nominative subject of τάκεαι; the enclitic, unaccented τυ (78, 83) is instead the accusative = σε.",
    why:"Doric collapses σύ, σέ and σοί into forms built on τ-, and the accent is the only thing that keeps them apart: accented τύ/τὺ = σύ (nominative), enclitic τυ = σε (accusative). Get into the habit of checking the accent before you assign the case — in this very passage you meet τυ = σε at 78 and 83 and τύ = σύ at 82, 90 and 97, and the syntax breaks completely if you swap them. Note also that τάκεαι is Doric twice over: τάκ- for τήκ- (ᾱ where Attic has η) and the uncontracted 2nd sg. middle -εαι where Attic gives -ῃ. This verb — 66 ἐτάκετο, 82 and 91 τάκεαι, 88 τάκεται — is the poem's word for dying of love, so it is worth knowing on sight." },

  { id:"theoc1-64-118:s17:q1", readingId:"theoc1-64-118", seg:17, type:"syntax",
    prompt:"ἁ δέ τυ κώρα πάσας ἀνὰ κράνας, πάντ᾽ ἄλσεα ποσσὶ φορεῖται. What is τυ doing here, and what governs it?",
    answer:"τυ is the enclitic accusative (= σε), and nothing in these two lines governs it: it is the object of the participle ζάτεισ(α) at 85, three lines further on, with the whole refrain interposed. Meanwhile it has been slipped in between the article ἁ and its noun κώρα.",
    why:"Two separate oddities in one phrase. First, Dover notes that inserting an enclitic pronoun object between article and noun (ἁ … τυ … κώρα) is normal in Ionic but rare otherwise — so do not assume the article's noun is the next word; the enclitic has simply taken the second position in the clause that enclitics like. Second, and more important for reading: an accusative can sit unattached for lines while you wait for its verb. Here Theocritus deliberately suspends the whole clause across the refrain, which is why 83 ends with a dash. When a case has nothing to attach to, hold it in reserve rather than forcing it onto the nearest verb. Note too πάσας ἀνὰ κράνας, with the preposition inside the adjective-noun pair, and ἀνά left to be understood again with πάντ᾽ ἄλσεα — Greek does not repeat a preposition in a parallel member (cf. 117 οὐκέτ᾽ ἀνὰ δρυμώς, οὐκ ἄλσεα)." },

  { id:"theoc1-64-118:s19:q1", readingId:"theoc1-64-118", seg:19, type:"syntax",
    prompt:"ζάτεισ᾽· ἆ δύσερώς τις ἄγαν καὶ ἀμήχανος ἐσσί. Parse ζάτεισ᾽ and say what it agrees with.",
    answer:"ζάτεισ(α), present active participle, nominative singular feminine — Doric for ζητοῦσα (ζατέω = ζητέω, and the participle ending -εισα for -οῦσα). It agrees with ἁ κώρα back at 82 and takes that line's τυ as its object: 'the girl … is roaming … LOOKING FOR YOU'.",
    why:"This is the passage's most striking piece of architecture, and Dover points it out: introducing the new and decisive word at the head of a line with a pause immediately after is a favourite epic device, and here the interposition of the refrain makes the effect far stronger — Priapos' sentence is left hanging at the end of 83, the Muses are invoked, and only then does the one word that explains everything arrive. To read it you have to be willing to carry an unfinished clause across an intervening line. The form is worth drilling separately: Doric -εισα for the feminine participle -ουσα of contract verbs sits alongside -οισα for uncontracted ones (γελάοισα, ἔχοισα at 95–96, Ἀρέθοισα at 117). And ζατ- for ζητ- is the same ᾱ-for-η you have met in ἀοιδά, φωνά, κράνα, ἅλιος, θνατός." },

  { id:"theoc1-64-118:s20:q1", readingId:"theoc1-64-118", seg:20, type:"syntax",
    prompt:"βούτας μὲν ἐλέγευ, νῦν δ᾽ αἰπόλῳ ἀνδρὶ ἔοικας. Why is βούτας nominative and ἀνδρί dative?",
    answer:"βούτας is a predicate nominative with the passive ἐλέγευ ('you used to be called a cowherd'): what an active verb of naming would put in the accusative stays nominative when the verb goes passive. ἀνδρί is dative because ἔοικα, like other words of likeness and equality, governs the dative.",
    why:"Both are rules with wide reach. Verbs of naming, calling, choosing and appointing take a double accusative in the active (καλῶ σε βούταν); make them passive and the person becomes the subject in the nominative and the second accusative follows it into the nominative — exactly as in English 'you were called a cowherd'. And ἔοικα joins ὅμοιος, ἴσος, ὁ αὐτός and the verbs of resembling in taking the dative of the thing resembled. Dover adds the literary point: what follows in 87–91 is an elaborate εἰκών, the 'likeness' that was a standard form of Greek wit with a riddling shape ('why is X like Y? Because…'), so ἔοικας is not idle abuse but the announcement of a set-piece. Note also the Doric imperfect ἐλέγευ for ἐλέγου — -ευ from uncontracted -εο." },

  { id:"theoc1-64-118:s21:q1", readingId:"theoc1-64-118", seg:21, type:"syntax",
    prompt:"ᾡπόλος, ὅκκ᾽ ἐσορῇ τὰς μηκάδας οἷα βατεῦνται, τάκεται ὀφθαλμὼς … Resolve ὅκκ᾽, justify the mood of ἐσορῇ, and explain the case of ὀφθαλμὼς.",
    answer:"ὅκκ(α) is Doric ὅκα (= ὅτε) fused with κα (= ἄν), so ὅκκα = ὅταν, 'whenever'; that ἄν is why ἐσορῇ is subjunctive rather than indicative. ὀφθαλμὼς is accusative plural (Doric -ώς for Attic -ούς), an accusative of respect with τάκεται: 'melts as to his eyes'.",
    why:"Three transferable things. First, Doric κα = ἄν, so any κ- particle fused onto a temporal or conditional word signals an indefinite construction: ὅκκα = ὅταν here, αἴ κα = ἐάν, ἐπεί κ᾽ = ἐπειδάν at 90. The mood follows automatically — indefinite + subjunctive for a general truth ('whenever a goatherd sees'), against plain ὅκα + indicative at 66 for a definite past occasion. Second, the Doric second-declension accusative plural in -ώς is a form to recognize instantly, because it looks like nothing in Attic: ὀφθαλμώς (88, 91), τώς (92), δρυμώς (117) are all accusative plural, never genitive singular. Third, the accusative of respect (also called limiting or 'Greek' accusative) names the part or aspect in which something is true — τάκεται ὀφθαλμώς, 'he melts in respect of his eyes'; compare ποδὸς ὠκύς, ἀλγῶ τὴν κεφαλήν. And οἷα … βατεῦνται is an indirect exclamation after the verb of seeing: 'sees HOW they are mounted'." },

  { id:"theoc1-64-118:s21:q2", readingId:"theoc1-64-118", seg:21, type:"syntax",
    prompt:"ὅτι οὐ τράγος αὐτὸς ἔγεντο. Parse ἔγεντο, and account for τράγος.",
    answer:"ἔγεντο is an epic syncopated aorist middle indicative, 3rd singular, of γίγνομαι — a shortened ἐγένετο. τράγος is a predicate nominative with it: γίγνομαι is a copulative verb, so what it predicates of the subject stays nominative — 'he was not born a he-goat'.",
    why:"γίγνομαι, εἰμί, φαίνομαι, μένω and the other linking verbs never take an object; whatever completes them agrees with the subject in the nominative. That is why τράγος and (at 103) ἄλγος are nominative, and why the same principle explains βούτας at 86 with a passive of naming. On the form: epic and Doric verse constantly squeeze syllables out of familiar words (ἔγεντο for ἐγένετο, δεδύκειν for δεδυκέναι at 102, ἔσσεται for ἔσται at 103), so when a form looks almost right, try restoring the missing syllable rather than hunting for a new verb. αὐτός is the intensive 'himself', pointing the contrast the whole εἰκών depends on: the goats can do what the goatherd watching them cannot." },

  { id:"theoc1-64-118:s23:q1", readingId:"theoc1-64-118", seg:23, type:"morphology",
    prompt:"καὶ τὺ δ᾽ ἐπεί κ᾽ ἐσορῇς τὰς παρθένος οἷα γελᾶντι. Parse παρθένος and γελᾶντι.",
    answer:"παρθένος is accusative PLURAL feminine, Doric for Attic παρθένους (from -ονς) — the article τὰς proves it, and it is the object of ἐσορῇς. γελᾶντι is 3rd plural present active indicative, Doric for γελῶσι.",
    why:"Both are pure Doric trip-hazards, and both are settled by looking at the surrounding words rather than the ending. παρθένος looks like a nominative singular; the accompanying τὰς makes that impossible, and Doric simply preserves the accusative plural in -ος where Attic lengthened to -ους. Once you know the ending exists, τὰς παρθένος gives no trouble. γελᾶντι is the more valuable form: Doric keeps the original 3rd plural ending -ντι where Attic lost the ν and compensated (-νσι → -ουσι/-ᾶσι). Learn to read -ντι as -ουσι and a whole class of forms opens up — γελᾶντι here, βομβεῦντι at 107, and any -οντι/-εῦντι you meet elsewhere in the Idylls. Do not mistake it for a participle dative singular. Note also ἐπεί κ᾽ + subjunctive = ἐπειδάν, the same indefinite construction as ὅκκα at 87, deliberately repeated so the two halves of the likeness match word for word." },

  { id:"theoc1-64-118:s23:q2", readingId:"theoc1-64-118", seg:23, type:"syntax",
    prompt:"ὅτι οὐ μετὰ ταῖσι χορεύεις. What case is ταῖσι, and what does μετά mean with it?",
    answer:"Dative plural feminine (epic/Doric -αισι for -αις), the article used as a third-person pronoun, 'them'. μετά + dative means 'among, in the company of' — a poetic use.",
    why:"μετά is another preposition whose sense depends entirely on its case, and the poetic + dative is the one most likely to catch you out: + acc. 'after', + gen. 'with', + dat. 'among' (Homeric and lyric; Attic prose uses σύν + dat. or μετά + gen. instead). So the ending -αισι has to be read as a dative before you can even choose the meaning. The other habit this line teaches is that ὁ, ἡ, τό in verse is often not an article at all but a demonstrative or personal pronoun — ταῖσι here, τὼς 'them' at 92, τὰν 'her' at 100. An 'article' with no noun anywhere near it is a pronoun. Dover reads the line as a hint that Daphnis is somehow bound not to join the dance, which is as close as the poem comes to explaining his death." },

  { id:"theoc1-64-118:s24:q1", readingId:"theoc1-64-118", seg:24, type:"syntax",
    prompt:"τὼς δ᾽ οὐδὲν ποτελέξαθ᾽ ὁ βουκόλος, ἀλλὰ τὸν αὑτῶ ἄνυε πικρὸν ἔρωτα. Account for τὼς and οὐδέν together, and for the position and breathing of αὑτῶ.",
    answer:"τὼς is Doric accusative plural masculine (= τούς) used as a pronoun, 'them' — the person addressed; οὐδέν is an internal accusative, the thing said. Verbs of speaking take this double accusative: 'he answered them nothing'. αὑτῶ is the Doric reflexive genitive (= αὑτοῦ, 'his own'), placed between article and noun (τὸν αὑτῶ … ἔρωτα) as possessives regularly are; the rough breathing is what makes it reflexive rather than plain αὐτῶ 'his'.",
    why:"The double accusative with verbs of saying, asking and teaching (person + thing) is worth having ready, because it explains two accusatives that otherwise look like a mistake. And the Doric -ώς accusative plural returns here for the third time — ὀφθαλμώς (88, 91), τώς, δρυμώς (117): once you accept the ending, τὼς δ᾽ οὐδέν parses itself. The breathing on αὑτῶ is the finer point and a genuine reading skill: αὑτοῦ/αὑτῶ (rough, contracted from ἑαυτοῦ) is reflexive 'his own', αὐτοῦ (smooth) is the ordinary 'his', and the difference is a single diacritic. The sandwich position between article and noun is the normal home of a possessive genitive in Greek and is itself a clue that the word must be attributive. Dover notes that τὸν … ἔρωτα is where the poem finally confirms Daphnis really is in love — until now we have had only Hermes' and Priapos' guesses. Note also the unaugmented ἄνυε (for ἤνυε), an epic licence, repeated in the next line for grim emphasis." },

  { id:"theoc1-64-118:s25:q1", readingId:"theoc1-64-118", seg:25, type:"syntax",
    prompt:"ἄρχετε βουκολικᾶς, Μοῖσαι, πάλιν ἄρχετ᾽ ἀοιδᾶς. How does this refrain differ from the one at 64–89, and what does the change mark?",
    answer:"φίλαι has dropped out and πάλιν has come in to fill its metrical space. The new form is kept for the rest of the lament (94, 99, 104, 108, 111, 114) before the song's final refrains turn to λήγετε, 'cease'.",
    why:"The refrain is not decoration and it is not fixed: Theocritus uses three versions of it, and the point at which one gives way to the next divides the song. ἄρχετε … Μοῖσαι φίλαι … ἀοιδᾶς carries the visits of the mourners and the gods; the πάλιν form begins exactly where Aphrodite herself appears and the poem turns from consolation to quarrel; λήγετε closes it. So when you meet a refrain, check the wording against its last appearance — the variation is where the structure is. Grammatically the line is unchanged: ἄρχετε is still a 2nd plural present imperative and ἀοιδᾶς still the genitive it governs, with βουκολικᾶς agreeing at the far end of the line." },

  { id:"theoc1-64-118:s26:q1", readingId:"theoc1-64-118", seg:26, type:"morphology",
    prompt:"ἦνθέ γε μὰν ἁδεῖα καὶ ἁ Κύπρις γελάοισα. Parse ἁδεῖα. (It is not what it looks like.)",
    answer:"Not nominative singular feminine agreeing with Κύπρις, but accusative plural NEUTER used adverbially with the participle γελάοισα: 'laughing sweetly, laughing with enjoyment'. (Doric ἁδεῖα = Attic ἡδεῖα.)",
    why:"The form is ambiguous — ἡδεῖα is both nom. sg. fem. and, as here, neut. pl. — and Dover argues from sense that it must be the neuter plural: the sense wanted is not 'smiling agreeably' but 'laughing with enjoyment', as Homer's Greeks laugh ἡδὺ at someone's discomfiture and Aphrodite herself boasts of laughing ἡδύ in the Homeric Hymn. Read with Κύπρις, the word makes her sweet; read with γελάοισα, it makes her laughter cruel, which is exactly what λάθρῃ μὲν γελάοισα, βαρὺν δ᾽ ἀνὰ θυμὸν ἔχοισα then explains. The general lesson: a neuter accusative adjective standing next to a verb or participle is very often an adverb, and in this passage alone you have καλόν 'sweetly' (107), πάνθ᾽ 'wholly' (102), τόσσον 'so much' (78), τί 'why' (82). Attach it to the verb before you attach it to a noun. Note also the Doric feminine participles in -οισα (γελάοισα, ἔχοισα) for Attic -ουσα." },

  { id:"theoc1-64-118:s26:q2", readingId:"theoc1-64-118", seg:26, type:"syntax",
    prompt:"λάθρῃ μὲν γελάοισα, βαρὺν δ᾽ ἀνὰ θυμὸν ἔχοισα. What is ἀνά doing, and what case relation does θυμόν stand in?",
    answer:"ἀνά is not a preposition governing θυμόν but the prefix of the participle at the end of the line, separated from it by tmesis: ἀνὰ … ἔχοισα = ἀνέχοισα, 'holding up'. θυμόν is therefore the direct OBJECT of ἀν-έχοισα — 'holding up her heavy anger' — not 'in her heart'.",
    why:"Tmesis (the 'cutting' of a compound verb from its prefix) is an epic licence Theocritus keeps, and it is easy to miss because the stranded prefix looks exactly like a preposition with the noun beside it. The tell is that the sense of the preposition does not work: ἀνὰ θυμόν 'up over her heart' is odd, and the participle ἔχοισα is left with nothing to hold. Dover (after Zuntz) makes the reading concrete: she 'holds up' her grievance the way one raises a signal for others to see, which is the exact opposite of concealing it — and that is the whole point of the μέν … δέ, hidden laughter against displayed anger. So when a preposition sits loose in a line with a compoundable verb further off, try putting them back together. Compare 96 with 95: the participle γελάοισα is repeated from the line before and then qualified, a favourite figure at the head of a new line." },

  { id:"theoc1-64-118:s27:q1", readingId:"theoc1-64-118", seg:27, type:"syntax",
    prompt:"κεῖπε “τύ θην τὸν Ἔρωτα κατεύχεο, Δάφνι, λυγιξεῖν· Resolve κεῖπε, and explain the tense of λυγιξεῖν.",
    answer:"κεῖπε is crasis of καί + εἶπε, 'and said'. λυγιξεῖν is a FUTURE active infinitive (Doric λυγιξεῖν = Attic λυγίσειν) governed by κατεύχεο: verbs of boasting, promising, hoping and swearing take the future infinitive, because what is boasted about is still to come — 'you boasted that you WOULD bend Eros'.",
    why:"Infinitive tense is the point. With most verbs the infinitive shows aspect, not time, and a future infinitive is rare; but after a specific family of verbs — ὄμνυμι, ἐλπίζω, ὑπισχνέομαι, αὐχέω/κατεύχομαι, μέλλω — the future infinitive is the norm and must be translated with 'would/will'. Spotting the -σ- (here Doric -ξ-) before the ending is what tells you. The Doric shape is worth noting on its own: these futures contract like -έω verbs (λυγιξῶ, λυγιξεῖν), the same pattern as φυλαξεῖς at 63. And note how far τὸν Ἔρωτα stands from its own infinitive — an accusative can wait many words for the verb that governs it, so hold it rather than forcing it on κατεύχεο. Aphrodite's word choice sets up the next line, where the same verb comes back in the passive." },

  { id:"theoc1-64-118:s28:q1", readingId:"theoc1-64-118", seg:28, type:"syntax",
    prompt:"ἦ ῥ᾽ οὐκ αὐτὸς Ἔρωτος ὑπ᾽ ἀργαλέω ἐλυγίχθης; Explain the position of ὑπ᾽ and how ἀργαλέω fits.",
    answer:"Anastrophe: the preposition ὑπό follows its noun (Ἔρωτος ὑπ᾽) instead of preceding it, which verse allows. It takes the genitive of the agent with the passive ἐλυγίχθης, and ἀργαλέω (Doric for ἀργαλέου) agrees with Ἔρωτος across the intervening preposition: 'by cruel Eros'.",
    why:"Anastrophe is common in hexameter and always looks alarming the first time: a preposition can be postponed after its object, and when it is, the accent normally retreats (ὕπο, πάρα). The practical rule for reading — if a preposition appears to have nothing after it to govern, look immediately before it. Here the effect is to wrap the phrase Ἔρωτος … ἀργαλέω around it, so agreement has to be traced across the preposition, exactly the skill 118 will ask for with καλὸν κατὰ Θύβριδος ὕδωρ. ὑπό + genitive of the agent with a passive verb is the construction to have automatic. Then note the rhetoric: ἐλυγίχθης is the aorist passive of the very verb Daphnis had boasted he would use actively (λυγιξεῖν, 97) — turning a man's own word back on him in another voice. Dover observes that ἀργαλέος is a strikingly derogatory word for Love, which suits Aphrodite's pretence of sympathy; Daphnis' furious reply shows he sees straight through it." },

  { id:"theoc1-64-118:s30:q1", readingId:"theoc1-64-118", seg:30, type:"syntax",
    prompt:"Κύπρι βαρεῖα, Κύπρι νεμεσσατά, Κύπρι θνατοῖσιν ἀπεχθής. Name the figure, and say why θνατοῖσιν is dative.",
    answer:"A 'rising trikolon' — three parallel members, each longer than the one before. θνατοῖσιν is dative with the adjective ἀπεχθής: adjectives of liking, loathing, friendship and hostility govern the dative of the person concerned.",
    why:"Dover flags the trikolon because it is a recurrent structural habit of Greek poetry, first found at Iliad 1.145, and Daphnis uses it again in his farewell at 115 (ὦ λύκοι, ὦ θῶες, ὦ ἀν᾽ ὤρεα φωλάδες ἄρκτοι). Recognizing it is genuinely useful for reading: once you see two short parallel members you can expect the third to expand, which tells you not to look for a new construction when the phrase suddenly lengthens. The dative with ἀπεχθής belongs to the same rule as ἔοικας + ἀνδρί at 86 — a whole family of adjectives (φίλος, ἐχθρός, ὅμοιος, ἴσος, ἀπεχθής) takes the dative rather than a genitive of the person. Note also that βαρεῖα deliberately throws back the βαρύν of 96: Daphnis has read her concealed mood exactly, which is his answer to her pretended sympathy. The Doric ᾱ for η is everywhere here — νεμεσσατά, θνατοῖσιν." },

  { id:"theoc1-64-118:s31:q1", readingId:"theoc1-64-118", seg:31, type:"syntax",
    prompt:"ἤδη γὰρ φράσδη πάνθ᾽ ἅλιον ἄμμι δεδύκειν; Identify the construction after φράσδη, and parse πάνθ᾽ and ἄμμι.",
    answer:"An accusative-and-infinitive of indirect statement: ἅλιον is the subject accusative and δεδύκειν (perfect active infinitive, epic for δεδυκέναι) its verb — 'that the sun has set'. πάνθ᾽ is πάντα, adverbial accusative 'wholly', not an agreement with the masculine ἅλιον. ἄμμι is the Aeolic/epic dative plural (= ἡμῖν), poetic plural for singular: 'for me'.",
    why:"Verbs of thinking and saying introduce indirect statement with the accusative and infinitive, and the tense of the infinitive keeps the tense of the original direct thought — so the perfect δεδύκειν means 'has set and is down', a state, not a past event. Reading the accusative as the subject rather than the object of the main verb is the essential move; here the clue is that φράζομαι cannot govern ἅλιον directly in this sense. πάνθ᾽ is the neuter-plural-as-adverb again (cf. ἁδεῖα 95, καλόν 107), and the aspiration πάντα + ἅλιον → πάνθ᾽ ἅλιον is worth registering: elision before a rough breathing aspirates the exposed consonant, as in χαίρεθ᾽ ὁ at 116. Dover's reading of the sense is worth having: γάρ here amounts to 'No!' — an answer to her taunt at 98 — and the question is not 'do you think I'm as good as dead?' (he is, and knows it) but 'do you think I'm BEATEN?', which 103 denies." },

  { id:"theoc1-64-118:s32:q1", readingId:"theoc1-64-118", seg:32, type:"syntax",
    prompt:"Δάφνις κἠν Ἀΐδα κακὸν ἔσσεται ἄλγος Ἔρωτι. What case is Ἀΐδα, and why is it not the dative you might expect after ἐν?",
    answer:"Genitive singular (Doric -α for Attic -ου). Dover: the sense is 'even in ⟨the house⟩ of Hades' — Hades is a person, not a place, and ἐν/εἰς regularly take the genitive of a person with 'house' left to be understood. κἠν is crasis of καὶ ἐν, with καί = 'even'.",
    why:"This is a real idiom, not a licence: ἐν Ἅιδου, εἰς Ἅιδου, ἐν Ἀΐδα all mean 'at/to Hades' HOUSE', exactly as English says 'at Joe's', 'to my brother's'. Greek does the same with ἐν διδασκάλου, εἰς Ἀσκληπιοῦ. So a genitive after ἐν or εἰς is not an error to be emended away — it is a signal that the noun is a person and a word for 'house' has been suppressed. The rest of the line is a set of copulative agreements: ἔσσεται (epic future of εἰμί for ἔσται) is a linking verb, so κακὸν ἄλγος is predicate NOMINATIVE, and Ἔρωτι is a dative of the person affected — Daphnis will not merely feel pain, he will BE a pain, and for Love. Dover: he is a grief to Love because he refuses to concede the victory by accepting the natural consequence of falling in love; keeping up a feud beyond death is Homeric, like Ajax's ghost refusing to speak to Odysseus." },

  { id:"theoc1-64-118:s34:q1", readingId:"theoc1-64-118", seg:34, type:"syntax",
    prompt:"οὐ λέγεται τὰν Κύπριν ὁ βουκόλος — ; Why is βουκόλος nominative, and what is missing?",
    answer:"λέγεται is used personally, so its subject ὁ βουκόλος stands in the nominative and an infinitive should follow ('the cowherd is said to …'). The infinitive is never spoken: Κύπριν is left as the object of a verb that never arrives, which is what the dash marks.",
    why:"First the grammar: λέγομαι has two constructions — impersonal λέγεται + acc. and inf. ('it is said that…'), and personal λέγεται + nom. and inf. ('he is said to…'), and the case of βουκόλος tells you which you have. The nominative subject with an infinitive of this kind is the same pattern as δοκεῖ … εἶναι and φαίνεται … εἶναι. Then the rhetoric: Dover explains that Daphnis breaks off deliberately, as though he had a coarse word for sex in mind and disdained to utter it — aposiopesis — and notes that suppressing the verb like this is common in proverbs. The 'cowherd' is not Daphnis but Anchises, the Trojan herdsman by whom Aphrodite bore Aeneas, which is why the next breath is ἕρπε ποτ᾽ Ἴδαν, 'off to Ida'. So when a sentence in this poem seems ungrammatical, check first whether the gap is the point." },

  { id:"theoc1-64-118:s35:q1", readingId:"theoc1-64-118", seg:35, type:"syntax",
    prompt:"τηνεὶ δρύες ἠδὲ κύπειρος, αἱ δὲ καλὸν βομβεῦντι ποτὶ σμάνεσσι μέλισσαι. What verb governs δρύες and κύπειρος, and parse βομβεῦντι and καλόν.",
    answer:"None: the copula is simply omitted — 'there (are) oaks and galingale', a verbless nominal sentence. βομβεῦντι is 3rd plural present active indicative, Doric for βομβοῦσι. καλόν is an adverbial accusative with it, 'sweetly'.",
    why:"Omission of the copula is standard Greek, and especially at home in this kind of landscape catalogue — the poem opened the same way (ἁδύ τι τὸ ψιθύρισμα … 'sweet is that whispering'). If a nominative has no verb and none is coming, supply 'is/are' rather than hunting further. βομβεῦντι is the most Doric word in the passage, stacking two features: -ευ- for the contraction -ου- (as ἀνηρώτευν 81, ἐλέγευ 86, βατεῦνται 87) and the ending -ντι for -νσι (as γελᾶντι 90). Read them together and βομβεῦντι = βομβοῦσι falls out. καλόν is the neuter-adjective-as-adverb once more. Dover's note on the content is worth keeping: after the oaks and the galingale, the bees are a malicious third item, because it was traditionally believed that bees sting adulterers — the rising list is a trap. (The text here is Meineke's ἠδέ … αἱ δέ; the manuscripts read ὧδε … ὧδε, 'here … here'.)" },

  { id:"theoc1-64-118:s37:q1", readingId:"theoc1-64-118", seg:37, type:"syntax",
    prompt:"ὦ λύκοι, ὦ θῶες, ὦ ἀν᾽ ὤρεα φωλάδες ἄρκτοι. Identify ἀν᾽, and describe how the third member is built.",
    answer:"ἀν᾽ is ἀνά by apocope (final vowel dropped before a consonant), + accusative ὤρεα. The third member is the longest: the adjective-noun pair φωλάδες … ἄρκτοι has the whole prepositional phrase inserted before it, making a rising trikolon of two bare vocatives and one expanded one.",
    why:"Apocope is the companion of elision and crasis in this poem's toolkit: παρά → πὰρ (74), ἀνά → ἀν᾽ (115, 116). Recognize the truncated preposition and the case tells you the rest. The trikolon is the same figure as at 100–101, and Dover compares the abducted Philoctetes' long farewell to his island in Sophocles — so the shape itself signals 'this is a formal leave-taking', which is how you know Daphnis is now saying goodbye rather than continuing to abuse Aphrodite. Structurally, notice that the vocatives here answer 71–72, where these same beasts howled for him: he is taking leave of his own mourners. And the practical reading habit: when the adjective and its noun bracket other material (φωλάδες ἀν᾽ ὤρεα … ἄρκτοι in effect), resolve the agreement first and fit the prepositional phrase inside it." },

  { id:"theoc1-64-118:s38:q1", readingId:"theoc1-64-118", seg:38, type:"syntax",
    prompt:"χαίρεθ᾽· ὁ βουκόλος ὕμμιν ἐγὼ Δάφνις οὐκέτ᾽ ἀν᾽ ὕλαν. What is the main verb of the second clause, and what is ὕμμιν?",
    answer:"There is no expressed verb: the copula is omitted — '(I am) no longer among you in the woodland'. ὕμμιν is the Aeolic/Doric dative plural of ὑμεῖς (= ὑμῖν), with the understood 'am'. ὁ βουκόλος and Δάφνις are both in apposition to ἐγώ.",
    why:"Ellipse of εἰμί again, and here it does something expressive: the sentence about no longer being present has no verb of being in it. Once you accept the omission, the three nominatives (βουκόλος, ἐγώ, Δάφνις) sort themselves out as apposition — 'I, Daphnis the cowherd' — rather than as a subject looking for a predicate. ὕμμιν is worth pairing with ἄμμι at 102: the Aeolic pronouns with double consonant, ἄμμες/ἄμμι = ἡμεῖς/ἡμῖν and ὕμμες/ὕμμιν = ὑμεῖς/ὑμῖν, are standard in this poetry and easy to recognize once you expect them. And note that χαίρεθ᾽ is 2nd PLURAL (χαίρετε, with the τ aspirated before the rough breathing of ὁ) while χαῖρ᾽ at 117 is singular — the number of the imperative tells you at every point who is being addressed: the beasts, then the single spring Arethusa." },

  { id:"theoc1-64-118:s39:q1", readingId:"theoc1-64-118", seg:39, type:"morphology",
    prompt:"οὐκέτ᾽ ἀνὰ δρυμώς, οὐκ ἄλσεα. Parse δρυμώς, and say what governs ἄλσεα.",
    answer:"δρυμώς is accusative plural masculine, Doric for δρυμούς — not a genitive singular. ἄλσεα is accusative plural neuter, governed by the same ἀνά, which is not repeated: Greek leaves a preposition to be understood in a parallel member.",
    why:"The Doric second-declension accusative plural in -ώς is now the fourth of its kind in this passage (ὀφθαλμώς 88 and 91, τώς 92, δρυμώς here), and the -ώς spelling is the one Attic gives no help with — treat any -ώς as -ούς and check the syntax. Non-repetition of a preposition across parallel phrases is the other lesson, and this passage teaches it twice: πάσας ἀνὰ κράνας, πάντ᾽ ἄλσεα at 82–83, and οὐκέτ᾽ ἀνὰ δρυμώς, οὐκ ἄλσεα here. So a bare accusative sitting beside a prepositional phrase is usually inside it. Notice the shrinking of the negatives as the farewell goes on — οὐκέτ᾽ … οὐκέτ᾽ … οὐκ — and that χαῖρ᾽ that follows is singular, marking the switch of addressee from the beasts to Arethusa." },

  { id:"theoc1-64-118:s40:q1", readingId:"theoc1-64-118", seg:40, type:"syntax",
    prompt:"καὶ ποταμοὶ τοὶ χεῖτε καλὸν κατὰ Θύβριδος ὕδωρ. Is τοὶ an article or a relative? And why is χεῖτε 2nd person?",
    answer:"A relative pronoun: Doric/epic τοί = οἵ. χεῖτε is 2nd plural because the antecedent ποταμοί is a VOCATIVE — a relative clause attached to the person addressed keeps that person, so 'you rivers, who pour', never 'who pours'.",
    why:"τοί is one of the passage's genuine ambiguities: at 80 (τοὶ βοῦται, τοὶ ποιμένες) it is the Doric article = οἱ, and here it is the Doric relative = οἵ. The way to decide is what follows — an article leans on a noun, a relative introduces a finite verb, and χεῖτε settles it. Build the habit of reading one word further before committing. The person of the verb is the second lesson and a rule worth stating: when a relative clause modifies a vocative or a 1st/2nd-person pronoun, its verb agrees with that person, not with a notional third person (ὦ Ζεῦ, ὃς πάντα ὁρᾷς / ἐγὼ ὃς ἦλθον). Finally, agreement across an intervening phrase: καλὸν goes with ὕδωρ at the end of the line, with κατὰ Θύβριδος sandwiched between — the same hyperbaton as Ἔρωτος ὑπ᾽ ἀργαλέω at 98. And κατά + genitive is 'down from', as in 67." },
  /* ===================== Theocritus, Idyll 1.120–152 ===================== */

  { id:"theoc1-120-152:s0:q1", readingId:"theoc1-120-152", seg:0, type:"syntax",
    prompt:"Δάφνις ἐγὼν ὅδε τῆνος ὁ τὰς βόας ὧδε νομεύων. Where is the verb, and what is ὁ … νομεύων?",
    answer:"There is no expressed verb — the copula is omitted: '(I am) Daphnis, that man here'. ὁ … νομεύων is an article plus participle forming an attributive phrase, the equivalent of a relative clause: 'the one who pastures his cows here'.",
    why:"Two habits worth fixing. Ellipse of εἰμί is normal in Greek, and especially in self-identifications and epitaphs — if a run of nominatives has no verb and none is coming, supply 'is/am'. And article + participle is one of the commonest ways Greek makes a relative clause: ὁ νομεύων = ὃς νομεύει. Everything between the article and the participle belongs inside the phrase, so read forward to the participle before construing τὰς βόας. The pairing ὅδε … τῆνος is idiomatic too: 'this one here' plus 'that famous one' = 'I am the man you have heard of'. The next line repeats the whole shape with a second participle (ποτίσδων), so once you have parsed 120 you have parsed 121." },

  { id:"theoc1-120-152:s0:q2", readingId:"theoc1-120-152", seg:0, type:"morphology",
    prompt:"Δάφνις ὁ τὼς ταύρως καὶ πόρτιας ὧδε ποτίσδων. Parse τὼς ταύρως, and say what ποτίσδων is.",
    answer:"τὼς ταύρως is accusative plural masculine — the Doric second-declension accusative plural in -ώς/-ως for Attic -ούς. ποτίσδων is the present active participle of ποτίζω 'water, give to drink' (Doric -σδ- for -ζ-).",
    why:"The Doric -ώς accusative plural is now familiar from ὀφθαλμώς (88, 91), τώς (92) and δρυμώς (117); here BOTH the article and its noun carry it, which makes the pair unmistakable. Never read it as a genitive singular. ποτίσδων raises the other constant Doric feature, -σδ- for -ζ- (μελίσδεται, ἐρίσδω, φράσδη at 102, ὄσδει at 149, γενειάσδων at Idyll 11.9). The trap here is a different one: ποτ- looks like the Doric ποτί = πρός you have met a dozen times, but it is not — it is part of the stem of ποτίζω, from πότος 'drink'. Check whether the letters after ποτ- make a verb stem before you assume a preposition." },

  { id:"theoc1-120-152:s2:q1", readingId:"theoc1-120-152", seg:2, type:"syntax",
    prompt:"ὦ Πὰν Πάν, εἴτ᾽ ἐσσὶ κατ᾽ ὤρεα μακρὰ Λυκαίω, εἴτε τύγ᾽ ἀμφιπολεῖς μέγα Μαίναλον … What kind of prayer-form is this, and what should you expect next?",
    answer:"A cletic hymn — a summons to a god. Dover: Greek invocation regularly takes the form 'whether you are in … or at …, COME!'. So the εἴτε … εἴτε alternatives must be followed by an imperative, and it arrives immediately: ἔνθ᾽ (= ἐλθέ) at the start of the next clause.",
    why:"Recognizing the shape saves you from hunting for a main verb inside the εἴτε clauses: both ἐσσί and ἀμφιπολεῖς are subordinate, and the sentence is still waiting for its imperative. The convention is old and widespread — Orestes summons Athena the same way in Aeschylus' Eumenides ('whether she is in Libya or on the Phlegraean plain … may she come'), and Thyrsis' own opening question at 66 ('where were you, Nymphs?') assumes the same theology, that a god can hear from anywhere but can only act where present. Two forms to note in passing: ἐσσί is the uncontracted Doric/epic 'you are' (= εἶ), and Λυκαίω is the Doric genitive in -ω for -ου, dependent on ὤρεα, not on κατά." },

  { id:"theoc1-120-152:s2:q2", readingId:"theoc1-120-152", seg:2, type:"syntax",
    prompt:"εἴτε τύγ᾽ ἀμφιπολεῖς μέγα Μαίναλον. Resolve τύγ᾽, and say how much emphasis γε carries here.",
    answer:"τύ γε — the Doric nominative τύ (= σύ) plus the particle γε. Dover's point: although γε normally emphasizes a pronoun, it is WHOLLY UNEMPHATIC when it accompanies a pronoun inserted with the second member of a disjunction, as here. So translate simply 'or if you range over great Mainalos', not 'or if YOU at least …'.",
    why:"This is a genuinely useful warning against mechanical translation of particles. γε usually means 'at least, at any rate', and a student trained to render it that way will produce nonsense here, because there is no contrast between Pan and anyone else — the contrast is between two places. Dover cites Theognis for the same idiom. Compare the τύγα of 148 (τέττιγος ἐπεὶ τύγα φέρτερον ᾄδεις), where the same combination IS emphatic, because there the goatherd really is contrasting Thyrsis with the cicada. The lesson: decide what is being contrasted before you decide how much weight a particle carries." },

  { id:"theoc1-120-152:s3:q1", readingId:"theoc1-120-152", seg:3, type:"morphology",
    prompt:"ἔνθ᾽ ἐπὶ νᾶσον τὰν Σικελάν. Parse ἔνθ᾽ — and beware the obvious guess.",
    answer:"ἔνθε, the Doric aorist active imperative 2nd singular of ἔρχομαι = Attic ἐλθέ, 'come!'. It is NOT the adverb ἔνθα 'there' and not ἔνθεν 'from where'.",
    why:"The whole sentence turns on getting this right: if you read it as an adverb, the cletic hymn has no main verb and no request. The key is the sound-change you have been meeting all through the poem — Doric ν for λ in the aorist of ἔρχομαι, giving ἦνθον for ἦλθον (77, 80, 81, 95) and ἀπῆνθον for ἀπῆλθον at Idyll 11.12. Apply it in reverse to ἔνθε and ἐλθέ falls out. Note also the attributive order νᾶσον τὰν Σικελάν, with article and adjective following the noun ('the island, the Sicilian one') — a perfectly regular Greek arrangement that looks odd only because English cannot do it. Dover adds that Σικελός means 'Sicilian' of the whole island, whereas earlier writers use it of one non-Greek people." },

  { id:"theoc1-120-152:s4:q1", readingId:"theoc1-120-152", seg:4, type:"syntax",
    prompt:"Ἑλίκας δὲ λίπε ῥίον αἰπύ τε σᾶμα τῆνο Λυκαονίδαο, τὸ καὶ μακάρεσσιν ἀγητόν. Parse Λυκαονίδαο and ἀγητόν, and account for the case of μακάρεσσιν.",
    answer:"Λυκαονίδαο is genitive singular of a first-declension masculine patronymic, epic -αο for -ου: 'of the son of Lykaon'. ἀγητόν is a -τός verbal adjective, predicate of the relative clause with an understood ἐστί. μακάρεσσιν is a dative with that verbal adjective — 'a thing marvelled at even BY the blessed gods'.",
    why:"Three recognitions. First, the epic genitive -αο of masculine α-stems is everywhere in this kind of verse (Ἀτρεΐδαο, Πηληϊάδαο) and should be automatic. Second, verbal adjectives in -τός either state a fact ('admired') or a possibility ('admirable'), and Greek gives them a DATIVE where English wants 'by' — the same dative of agent that perfect passives take (cf. Μοίσαις … πεφιλημένον at Idyll 11.6). Third, τό here is the article doing duty as a relative pronoun, which is standard in epic and Doric; its antecedent is σᾶμα, and καί inside the clause means 'even'. Note also the imperative λίπε, aorist of λείπω, balancing ἔνθ᾽: come here, and leave there." },

  { id:"theoc1-120-152:s5:q1", readingId:"theoc1-120-152", seg:5, type:"syntax",
    prompt:"λήγετε βουκολικᾶς, Μοῖσαι, ἴτε λήγετ᾽ ἀοιδᾶς. What has changed in the refrain, and what does λήγετε prove about ἀοιδᾶς?",
    answer:"ἄρχετε 'begin' has become λήγετε 'cease' — the refrain's third and final form, which now runs to the end of the song. And since λήγω 'cease from' can only take a genitive, ἀοιδᾶς must be genitive singular, which settles retrospectively that it was genitive with ἄρχετε too, not an accusative plural.",
    why:"This is the passage that resolves an ambiguity you have been living with since line 64. In Doric, -ᾶς serves both as the genitive singular (Attic -ῆς) and the accusative plural (Attic -άς), so βουκολικᾶς … ἀοιδᾶς could in principle have been either. λήγω decides it, because it belongs to the family of verbs — ἄρχω, λήγω, παύομαι, ἀπέχομαι — that govern a genitive of the activity begun, ended or refrained from. Track the refrain's three shapes as a map of the song: ἄρχετε … Μοῖσαι φίλαι (64–89) for the visitors, ἄρχετε … πάλιν (94–122) for the quarrel with Aphrodite, λήγετε … ἴτε (127–142) for the farewell and the death. ἴτε is the imperative of εἶμι, filling the metrical slot that φίλαι and then πάλιν had occupied." },

  { id:"theoc1-120-152:s6:q1", readingId:"theoc1-120-152", seg:6, type:"syntax",
    prompt:"ἔνθ᾽, ὦναξ, καὶ τάνδε φέρευ πακτοῖο μελίπνουν ἐκ κηρῶ σύριγγα καλὸν περὶ χεῖλος ἑλικτάν. Parse φέρευ, and describe the word-order around σύριγγα.",
    answer:"φέρευ is the present MIDDLE imperative 2nd singular, Doric for φέρου: 'take it for yourself', not merely 'carry'. σύριγγα is postponed until after a demonstrative (τάνδε), an adjective (μελίπνουν) and a whole prepositional phrase (πακτοῖο … ἐκ κηρῶ) have already agreed with or modified it, and a second adjective (ἑλικτάν) follows it.",
    why:"The middle voice is doing real work: Daphnis is not asking Pan to carry the pipe somewhere but to take possession of it, and Greek marks that with the middle rather than with a separate word. Doric -ευ for -ου (from uncontracted -εο) is the same ending as ἐλέγευ at 86. The word-order is the more transferable lesson: in hexameter an adjective can be separated from its noun by several words and even by a line-end, so the practical technique is to hold each unattached agreement in mind and let the noun, when it comes, collect them all. Here μελίπνουν, τάνδε and ἑλικτάν are all accusative singular feminine, so all three must belong to σύριγγα, and πακτοῖο must belong to κηρῶ (both genitive). Dover explains the object: a syrinx is reeds glued with wax and bound round, so 'honey-breathing from fitted wax' probably refers to the smell, and 'finely wound about the lip' to the binding at the mouth-end." },

  { id:"theoc1-120-152:s7:q1", readingId:"theoc1-120-152", seg:7, type:"syntax",
    prompt:"ἦ γὰρ ἐγὼν ὑπ᾽ Ἔρωτος ἐς Ἅιδαν ἕλκομαι ἤδη. Parse ἕλκομαι, and contrast Ἅιδαν here with Ἀΐδα at 103.",
    answer:"ἕλκομαι is present passive, 1st singular, with ὑπ᾽ Ἔρωτος as its agent: 'I am being dragged'. Ἅιδαν is accusative after ἐς, the goal of motion; at 103 the same god's name was GENITIVE (κἠν Ἀΐδα) because there ἐν governed 'the house of Hades' with 'house' understood.",
    why:"A neat pair for testing whether you are reading case or guessing. ἐς + accusative is straightforward motion towards; ἐν/εἰς + genitive of a person is the idiom 'at/to so-and-so's house' (ἐν Ἅιδου, εἰς διδασκάλου), which is why 103 looked wrong and was not. On the verb: middle and passive are identical in the present, and only ὑπό + genitive of agent tells you this one is passive. The tense matters as much as the voice — the present says the dragging is happening now, as he speaks, which is why the pipe must change hands at once. And note ἦ here is the ASSEVERATIVE particle 'truly', not the interrogative ἦ of 98 nor the disjunctive ἦ … ἦ of 67; the same two letters do three jobs in this poem." },

  { id:"theoc1-120-152:s9:q1", readingId:"theoc1-120-152", seg:9, type:"syntax",
    prompt:"νῦν ἴα μὲν φορέοιτε βάτοι, φορέοιτε δ᾽ ἄκανθαι. Parse φορέοιτε and explain the mood.",
    answer:"Present active OPTATIVE, 2nd plural — an optative of wish: 'may you bear'. βάτοι and ἄκανθαι are vocatives, which is why the verb is second person: the plants are addressed directly.",
    why:"An optative with no ἄν and no subordinating conjunction is a wish, and this stanza (132–136) is built almost entirely of them: φορέοιτε, κομάσαι, γένοιτο, ἐνείκαι, ἕλκοι, γαρύσαιντο. Get the mood and the whole passage opens; miss it and you will try to read impossibilities as statements. The figure itself is the adynaton — the catalogue of impossible reversals of nature that must now come about because Daphnis is dying. Dover notes the idea is traditional (Archilochus, Herodotus) and that Theocritus deliberately avoids a mechanical list: 'may A and B happen, may everything be reversed, and may D happen, since Daphnis is dying, and may E happen'. The one indicative in the stanza is θνάσκει at 135 — the single fact around which all the wishes turn." },

  { id:"theoc1-120-152:s10:q1", readingId:"theoc1-120-152", seg:10, type:"morphology",
    prompt:"ἁ δὲ καλὰ νάρκισσος ἐπ᾽ ἀρκεύθοισι κομάσαι. Parse κομάσαι. What else could the ending -σαι be, and how do you rule it out?",
    answer:"Aorist active optative, 3rd singular, of κομάω — another wish-optative, 'may the narcissus bloom'. The ending -σαι could also be an aorist active infinitive or an aorist middle imperative 2nd singular, but neither fits: there is no verb for an infinitive to depend on, and the subject ἁ καλὰ νάρκισσος is nominative third person, not an addressee.",
    why:"This is the single most ambiguous ending in Greek, and the way through it is always syntactic rather than morphological. Ask three questions: is there a governing verb that wants an infinitive? is there someone being addressed? is there a nominative subject waiting for a finite verb? Here only the third is true. The surrounding optatives (φορέοιτε before, γένοιτο and ἐνείκαι after) confirm it, and that is a good general strategy — a construction rarely appears alone. Compare θᾶσαι at 149, which IS an aorist middle imperative, and where the context (a vocative φίλος, a person being told to look) makes that just as clear. κομάω of plants is 'to be in leaf, luxuriate', from κόμη 'hair' — foliage as the plant's hair." },

  { id:"theoc1-120-152:s11:q1", readingId:"theoc1-120-152", seg:11, type:"syntax",
    prompt:"πάντα δ᾽ ἄναλλα γένοιτο, καὶ ἁ πίτυς ὄχνας ἐνείκαι. Why is γένοιτο singular, and what verb is ἐνείκαι from?",
    answer:"γένοιτο is singular because its subject πάντα is a neuter plural — a neuter plural subject regularly takes a singular verb in Greek. ἐνείκαι is the aorist optative of φέρω, built on the epic aorist stem ἤνεικα (Attic ἤνεγκα), here unaugmented.",
    why:"The neuter-plural rule is one of the few places where Greek agreement will look to you like an error, and it is worth being certain about: τὰ ζῷα τρέχει, 'the animals run'. It recurs at 139, λίνα πάντα λελοίπει. The verb is the harder half. φέρω is the great suppletive verb of Greek — φέρω, οἴσω, ἤνεγκα/ἤνεικα, ἐνήνοχα, ἠνέχθην — and no stem resembles any other, so ἐνείκαι has to be recognized rather than derived. You have already met the future stem in ἀποισῇ at line 2. ἄναλλα (ἀνά + ἄλλος, 'other than it was') is the word that names the principle of the whole catalogue: not just this or that oddity but total reversal." },

  { id:"theoc1-120-152:s12:q1", readingId:"theoc1-120-152", seg:12, type:"syntax",
    prompt:"Δάφνις ἐπεὶ θνάσκει, καὶ τὰς κύνας ὥλαφος ἕλκοι. What is the force of ἐπεί, and why is θνάσκει indicative while ἕλκοι is optative?",
    answer:"ἐπεί here is CAUSAL, 'since, seeing that', not temporal. θνάσκει is indicative because it states the one fact of the stanza; ἕλκοι returns to the optative of wish that governs everything else in 132–136.",
    why:"The mood shift is the interpretation. Everything else in the passage is something Daphnis wishes to be true; his own death is the thing that is true, and Greek marks the difference simply by putting the causal clause in the indicative. Notice too where the clause sits — dropped into the middle of the catalogue rather than heading it, which is exactly the unsystematic ordering Dover admires in these lines. The reversal in this line is physical and precise: τὰς κύνας is the accusative object and ὥλαφος (crasis of ὁ ἔλαφος) the nominative subject, so the hunted stag is hauling the hunting dogs. And ἕλκοι is the same verb Daphnis has just applied to himself in the passive at 130, ἕλκομαι — he is dragged by Love as the dogs are to be dragged by the deer." },

  { id:"theoc1-120-152:s13:q1", readingId:"theoc1-120-152", seg:13, type:"syntax",
    prompt:"κἠξ ὀρέων τοὶ σκῶπες ἀηδόσι γαρύσαιντο. Unpack κἠξ, and explain why the case of ἀηδόσι matters for the sense.",
    answer:"κἠξ is crasis of καὶ ἐξ, governing ὀρέων. ἀηδόσι is DATIVE, and γηρύομαί σοι means 'I sing TO you' — so the picture is not a singing contest but the owls singing to the nightingales, i.e. the nightingales falling silent to listen.",
    why:"Dover works the point out carefully. We might have expected 'outdo' or 'surpass', and even 'cry in competition with' would fall short of a reversal of nature, since a scops-owl in a sense does compete with a nightingale. But to be sung TO, in Theocritus, implies that you listen with silent admiration and respect — so the impossibility is that the nightingale, the singer of singers, becomes the audience. Only the dative gets you there, which is why case is worth more than a plausible guess about vocabulary. Add κἠξ to your crasis collection (κἤφα, κεῖπε, χὠ, χὠκ, κἠν, κἠξ, ὦναξ, ὥλαφος, ᾡπόλος, ὡξ): the giveaway is always a fused vowel with a coronis or a κ turned to χ. And note τοὶ σκῶπες — τοί is the Doric ARTICLE here (= οἱ), not the relative of 118, because a noun follows rather than a verb." },

  { id:"theoc1-120-152:s15:q1", readingId:"theoc1-120-152", seg:15, type:"syntax",
    prompt:"χὠ μὲν τόσσ᾽ εἰπὼν ἀπεπαύσατο· τὸν δ᾽ Ἀφροδίτα ἤθελ᾽ ἀνορθῶσαι. Account for the aspect of εἰπών and for the imperfect ἤθελε.",
    answer:"εἰπών is an aorist participle, so ANTECEDENT to the main verb: he finished speaking and then stopped. ἤθελε is imperfect of attempted or unfulfilled wanting — she went on wanting to raise him up, and did not manage it, as the next line explains.",
    why:"Participle aspect is the workhorse of Greek narrative: an aorist participle is prior to the main verb, a present participle contemporaneous with it. Compare ἀείδων at Idyll 11.13, present, where the Cyclops wastes away AS he sings. The imperfect ἤθελε belongs to a related habit — the imperfect of verbs of wishing, urging and giving often reports an attempt rather than an achievement (the 'conative' imperfect), and here the attempt is defeated in the very next clause by λελοίπει. Dover supplies the motive: if Daphnis dies, Aphrodite's victory is hollow, since he will have kept his vow — so she wants him alive in the hope that he may yet surrender. Note also the μέν … δέ pivot (χὠ μέν … τὸν δ᾽), and that τόν is the article used as a pronoun, 'him', fronted before its own clause." },

  { id:"theoc1-120-152:s16:q1", readingId:"theoc1-120-152", seg:16, type:"syntax",
    prompt:"τά γε μὰν λίνα πάντα λελοίπει ἐκ Μοιρᾶν, χὠ Δάφνις ἔβα ῥόον. Parse λελοίπει and ἔβα, and say what ἐκ contributes.",
    answer:"λελοίπει is pluperfect active, 3rd singular, of λείπω, used INTRANSITIVELY: 'had run out'. ἔβα is Doric for ἔβη, the root (athematic) aorist of βαίνω. Dover: ἐκ here marks the supernatural AUTHORITY by which something happens — 'by the Fates' decree'.",
    why:"λείπω is transitive in the present ('leave behind') but its perfect system can be intransitive, 'be gone, have run out' — exactly as at Odyssey 14.213, νῦν δ᾽ ἤδη πάντα λέλοιπεν. A verb changing transitivity by tense-stem is a recurring Greek fact (compare ἵστημι, transitive ἔστησα against intransitive ἔστην, and ἀνέστη at 152). ἔβα is one of the small class of root aorists — ἔβην, ἔστην, ἔγνων — with no σ and no thematic vowel, which have to be recognized rather than derived. And ῥόον is an accusative of the goal reached with no preposition at all, a poetic construction: 'went to the stream'. The stream is Acheron, which the dead must cross, and Theocritus never names it — Dover calls the allusion uniquely oblique. Note too the neuter plural λίνα with a singular verb." },

  { id:"theoc1-120-152:s17:q1", readingId:"theoc1-120-152", seg:17, type:"syntax",
    prompt:"ἔκλυσε δίνα τὸν Μοίσαις φίλον ἄνδρα, τὸν οὐ Νύμφαισιν ἀπεχθῆ. Why are Μοίσαις and Νύμφαισιν dative, and what is the second τόν doing?",
    answer:"Both are datives governed by adjectives of liking and loathing — φίλον and ἀπεχθῆ — which take the dative of the person concerned. The second τόν repeats the article with ἄνδρα understood, making a second attributive phrase in apposition to the first.",
    why:"φίλος, ἐχθρός, ἀπεχθής, ὅμοιος, ἴσος and their kind all govern the dative rather than a genitive, the same rule you met with θνατοῖσιν ἀπεχθής at 101 and ἀνδρὶ ἔοικας at 86. Repeating the article to add a second description without repeating the noun is a normal economy — you saw the same shape with ὁ … νομεύων / ὁ … ποτίσδων at 120–121. The line is Daphnis' epitaph, and every word of it answers something earlier: Νύμφαισιν picks up the reproach of 66 ('where were you, Nymphs?') and insists they had not abandoned him out of dislike, while ἀπεχθῆ is the very adjective Daphnis threw at Aphrodite at 101. οὐ … ἀπεχθῆ is litotes — understatement for 'much loved'. Dover notes ἔκλυσε means 'washed', not 'engulfed': the dead waited at the water's edge to be ferried, they were not submerged." },

  { id:"theoc1-120-152:s19:q1", readingId:"theoc1-120-152", seg:19, type:"syntax",
    prompt:"καὶ τὺ δίδου τὰν αἶγα τό τε σκύφος, ὥς κεν ἀμέλξας σπείσω ταῖς Μοίσαις. Parse σπείσω, and justify your answer.",
    answer:"Aorist active SUBJUNCTIVE, 1st singular, of σπένδω, in a purpose clause introduced by ὥς κεν. It is identical in form to the future indicative, and only the ὥς κεν tells you which it is.",
    why:"ὡς, ὅπως, ἵνα and (in epic) ὄφρα introduce purpose clauses with the subjunctive after a primary main verb; the epic κε(ν) = ἄν can be added, giving a shade of contingency. Since -σω is both the future indicative and the aorist subjunctive of a sigmatic verb, the conjunction is your only evidence, and this is a standard exam question. The participle ἀμέλξας is aorist and therefore prior: milk first, then pour — where English would say 'milk her and pour a libation', Greek subordinates the first action. Note also δίδου, the present imperative of the athematic δίδωμι (contracted from δίδοε), asking for what was agreed at 25–26 rather than making a fresh request; and Dover's note that pouring a libation is one of the commonest ways a Greek symbolically shares what he has with his gods." },

  { id:"theoc1-120-152:s20:q1", readingId:"theoc1-120-152", seg:20, type:"morphology",
    prompt:"ἐγὼ δ᾽ ὔμμιν καὶ ἐς ὕστερον ἅδιον ᾀσῶ. Parse ἅδιον and ᾀσῶ.",
    answer:"ἅδιον is the comparative of ἡδύς used ADVERBIALLY — Doric ἅδιον = Attic ἥδιον, 'more sweetly'. ᾀσῶ is the future active indicative, 1st singular, of ἀείδω/ᾄδω, in the Doric contracted form (Attic ᾄσομαι).",
    why:"The neuter singular of a comparative adjective IS its adverb in Greek — ἥδιον, θᾶσσον, μᾶλλον, ῥᾷον — so do not go hunting for a noun for ἅδιον to agree with. (The superlative behaves the same way in the neuter plural: ῥάιστα at Idyll 11.7.) Two other things are worth collecting. Doric ᾱ for η, which by now you should register without thinking. And the Doric contracted-type future, a family that runs right through the quiz: φυλαξεῖς (63), λυγιξεῖν (97), ᾀσῶ here, δοκησεῖς (150), σκιρτασεῖτε (152) — all where Attic would give an uncontracted -σω/-ξω form. Dover reads the promise as implying a prayer, on the model of Greek dedications: 'may you rejoice in this, and grant me to offer another'." },

  { id:"theoc1-120-152:s22:q1", readingId:"theoc1-120-152", seg:22, type:"syntax",
    prompt:"πλῆρές τοι μέλιτος τὸ καλὸν στόμα, Θύρσι, γένοιτο. What governs μέλιτος, what is τοι, and what is the mood of γένοιτο?",
    answer:"μέλιτος is genitive governed by πλῆρες — adjectives of filling and emptying take the genitive of what fills. τοι is the enclitic dative pronoun (= σοι), a possessive dative: 'your mouth'. γένοιτο is an optative of wish.",
    why:"Three separate things in one line. The genitive with πλήρης, μεστός, κενός, and with verbs like πίμπλημι and δέομαι, is a fixed rule worth having automatic. τοι is a trap because the identical form is also a particle ('you know, I tell you'); here it sits in second position like a proper enclitic pronoun and is picked up again at 149 (ἠνίδε τοι τὸ δέπας), so read it as σοι. And the wish-optative returns — the same mood as the whole adynaton at 132–136, but now benevolent: the goatherd pays Thyrsis in blessings before he pays him in goods. Note the difference of position that distinguishes predicate from attribute: πλῆρες stands outside the article-noun bracket, καλόν inside it (τὸ καλὸν στόμα), so the mouth IS fair and BECOMES full. Dover observes drily that a mouth full of honey sounds rather sickening." },

  { id:"theoc1-120-152:s23:q1", readingId:"theoc1-120-152", seg:23, type:"syntax",
    prompt:"ἁδεῖαν, τέττιγος ἐπεὶ τύγα φέρτερον ᾄδεις. Why is τέττιγος genitive?",
    answer:"It is a GENITIVE OF COMPARISON with the comparative φέρτερον: 'you sing better than the cicada'. Greek can express the second term of a comparison either with ἤ + the same case, or with a bare genitive.",
    why:"The genitive of comparison is easy to miss because nothing marks it except the presence of a comparative somewhere in the clause — and here φέρτερον is four words away, after the conjunction. Train yourself to react to any comparative by looking for either ἤ or a stray genitive. φέρτερον itself is the neuter comparative used adverbially, the same formation as ἅδιον three lines earlier. Note also ἁδεῖαν, held over from the previous line to agree with ἰσχάδα: here the accusative singular feminine ending makes the agreement unambiguous, which is worth contrasting with ἁδεῖα at 95, where the identical-looking word was neuter plural and adverbial. Dover: the cicada is the singer par excellence — Socrates in the Phaedrus tells how cicadas were once men who sang until they forgot to eat, which makes the compliment a large one." },

  { id:"theoc1-120-152:s25:q1", readingId:"theoc1-120-152", seg:25, type:"syntax",
    prompt:"Ὡρᾶν πεπλύσθαι νιν ἐπὶ κράναισι δοκησεῖς. Identify the construction after δοκησεῖς and parse πεπλύσθαι.",
    answer:"An accusative-and-infinitive of indirect statement: νιν is the subject accusative and πεπλύσθαι, the perfect middle/passive infinitive of πλύνω, its verb — 'you will think that IT has been washed'. δοκησεῖς is the Doric contracted future of δοκέω (Attic δόξεις).",
    why:"Verbs of thinking take the accusative and infinitive, and the infinitive keeps the tense of the original direct thought — so the perfect here means 'it stands washed', a present state resulting from a past act, which is precisely why the cup still smells so good. The same construction with the same perfect force appeared at 102, φράσδη … ἅλιον δεδύκειν. νιν is the Doric all-purpose enclitic accusative pronoun (= αὐτόν/αὐτήν/αὐτό), used again two lines later of the goat; it has no nominative, so it is always an object or, as here, a subject accusative. Ὡρᾶν is a possessive genitive with κράναισι. Dover: the Hours personify the stages in a creature's or plant's life that attract us by their beauty, so they are the powers that CONFER such beauty — and their 'spring' is probably Theocritus' own invention." },

  { id:"theoc1-120-152:s26:q1", readingId:"theoc1-120-152", seg:26, type:"syntax",
    prompt:"αἱ δὲ χίμαιραι, οὐ μὴ σκιρτασεῖτε, μὴ ὁ τράγος ὔμμιν ἀναστῇ. There are two μή's here doing different jobs. Explain each, and account for the article with χίμαιραι.",
    answer:"The first is part of οὐ μή + FUTURE INDICATIVE (σκιρτασεῖτε), an emphatic prohibition: 'don't you dare frisk about'. The second is a separate μή introducing a negative purpose / fear clause, which is why ἀναστῇ is aorist SUBJUNCTIVE: 'lest the he-goat be up at you'. Dover notes the article with a vocative is not uncommon in peremptory orders.",
    why:"Distinguishing the two μή's is the whole of the sentence. οὐ μή with the future indicative is a strong prohibition (and with the aorist subjunctive an emphatic denial) — the doubled negative is the signal, and it is far more forceful than an ordinary μή + imperative. Then μή alone after a verb or command introduces the thing to be avoided, taking the subjunctive: the same construction as μὴ … γένηται. ἀναστῇ is worth a second look: it is the INTRANSITIVE aorist of ἀνίστημι, from the root aorist ἀνέστην, since ἵστημι is transitive in the sigmatic aorist (ἔστησα, 'I set up') but intransitive in the root aorist and perfect. And note where the poem ends — on the same barnyard note as Priapos' consolation at 87–88, with the τράγος that goatherd wished he had been born." },

  /* ===================== Theocritus, Idyll 11.1–18 ===================== */

  { id:"theoc11-1-18:s0:q1", readingId:"theoc11-1-18", seg:0, type:"syntax",
    prompt:"οὐδὲν ποττὸν ἔρωτα πεφύκει φάρμακον ἄλλο … ἢ ταὶ Πιερίδες. Resolve ποττόν, parse πεφύκει, and say what ἄλλο is waiting for.",
    answer:"ποττόν = ποτὶ τόν, i.e. πρὸς τόν (Doric ποτί with its -τι assimilated to the following τ-). πεφύκει is a perfect with PRESENT meaning, Doric for πέφυκε: 'has grown' and so 'exists, is by nature'. ἄλλο is waiting for the ἤ of comparison, which does not arrive until the start of line 3.",
    why:"Three things the first sentence teaches at once. Doric assimilation is a habit of the dialect — ποττόν, ποττάν, and the same principle behind κάββαλε for κατέβαλε; when a word looks like a preposition welded to an article, split it. πέφυκα belongs to that class of perfects that denote a resulting state and are therefore present in force (ἕστηκα 'I stand', οἶδα 'I know', ἔοικα 'I seem'), so do not translate it as a past. And the metaphor is live: φάρμακα are plants, so 'no other drug has GROWN' launches the medical-botanical conceit that runs through the whole prologue and flatters Nikias the doctor. Finally, ἄλλος regularly takes ἤ for 'other than', and Theocritus lets two lines stand between them — a reminder to hold a construction open across line-ends." },

  { id:"theoc11-1-18:s0:q2", readingId:"theoc11-1-18", seg:0, type:"syntax",
    prompt:"οὔτ᾽ ἔγχριστον, ἐμὶν δοκεῖ, οὔτ᾽ ἐπίπαστον. What kind of words are ἔγχριστον and ἐπίπαστον, and what is ἐμὶν δοκεῖ doing in between?",
    answer:"Both are verbal adjectives in -τος, expressing possibility — 'to be smeared on' and 'to be sprinkled on', hence 'ointment' and 'powder'. They are nominative neuter, in apposition to φάρμακον. ἐμὶν δοκεῖ is a parenthesis, 'it seems to me', dropped into the middle of the οὔτε … οὔτε pair; ἐμίν is Doric for ἐμοί.",
    why:"Verbal adjectives in -τός are formed from almost any verb and mean either 'having been X-ed' or 'able to be X-ed' — here the second. Recognizing the type turns two unfamiliar words into transparent compounds of ἐγχρίω and ἐπιπάσσω. Dover shows the phrase is a medical commonplace being quoted in order to be dismissed: Euripides' Hippolytus asks 'is the remedy one to be smeared on or drunk?', and the pair is the standard alternative. The parenthesis is a matter of tone — the conversational aside is exactly what makes this feel like a verse letter to a friend rather than a treatise. Note that both adjectives are NOMINATIVE, agreeing with φάρμακον, not accusative objects of anything." },

  { id:"theoc11-1-18:s2:q1", readingId:"theoc11-1-18", seg:2, type:"syntax",
    prompt:"εὑρεῖν δ᾽ οὐ ῥᾴδιόν ἐστι. What kind of infinitive is εὑρεῖν, and where does the thought go from here?",
    answer:"An epexegetic (explanatory) infinitive with the adjective ῥᾴδιον: 'easy TO FIND'. Adjectives like ῥᾴδιος, χαλεπός, δεινός, ἡδύς, ἄξιος regularly take an infinitive specifying in what respect they hold.",
    why:"The construction is everywhere once you look for it (χαλεπὸν ποιεῖν, ἄξιος θαυμάζειν), and it is the reason an infinitive can turn up with no governing verb in sight. It also carries the argument of the poem: Dover shows that line 17, ἀλλὰ τὸ φάρμακον εὗρε, picks this line up exactly — the remedy is hard to find, but Polyphemus, by persisting in song, eventually found what he could have found no other way. Dover's paraphrase of 3–4 is worth memorizing as a guide to the syntax: 'although an agreeable remedy — unlike so many medicines, regimes and operations — it is difficult to find, like a rare medicinal plant'. Note also that ῥᾴδιόν carries a second accent thrown back on it by the following enclitic ἐστι, which is a reliable clue that the next word is an enclitic." },

  { id:"theoc11-1-18:s3:q1", readingId:"theoc11-1-18", seg:3, type:"syntax",
    prompt:"γινώσκειν δ᾽ οἶμαί τυ καλῶς ἰατρὸν ἐόντα καὶ ταῖς ἐννέα δὴ πεφιλημένον ἔξοχα Μοίσαις. What is τυ, and what are ἐόντα and πεφιλημένον doing?",
    answer:"τυ is the SUBJECT ACCUSATIVE of the infinitive γινώσκειν in indirect statement after οἶμαι — 'I think that you know' — not an object of οἶμαι. ἐόντα and πεφιλημένον are circumstantial participles agreeing with τυ, causal in force: 'since you are a doctor and are especially beloved of the nine Muses'. Μοίσαις is a dative of agent with the perfect passive participle.",
    why:"Verbs of thinking and saying take an accusative and infinitive, and the accusative belongs to the infinitive, not to the main verb — mis-assigning it is one of the commonest ways to lose a sentence. The word-order here makes the point sharply, since γινώσκειν stands first, before its own governing verb. Two further recognitions: ἐών for ὤν is the uncontracted epic/Ionic participle of εἰμί; and perfect passives take a DATIVE of agent rather than ὑπό + genitive, the same rule as μακάρεσσιν ἀγητόν at Idyll 1.126. ἔξοχα is a neuter plural adjective used adverbially, exactly like ἁδεῖα at Idyll 1.95. Dover warns against over-reading ἐννέα: it does not mean Nikias excelled in all nine arts, since the apportionment of separate arts among the Muses is later than Theocritus." },

  { id:"theoc11-1-18:s4:q1", readingId:"theoc11-1-18", seg:4, type:"syntax",
    prompt:"οὕτω γοῦν ῥάιστα διᾶγ᾽ ὁ Κύκλωψ ὁ παρ᾽ ἁμῖν, ὡρχαῖος Πολύφαμος, ὅκ᾽ ἤρατο τᾶς Γαλατείας. Parse ῥάιστα, resolve ὡρχαῖος, and account for the case of τᾶς Γαλατείας.",
    answer:"ῥάιστα is the neuter plural superlative of ῥᾴδιος used ADVERBIALLY with διᾶγε: 'got through most easily'. ὡρχαῖος is crasis of ὁ ἀρχαῖος. τᾶς Γαλατείας is genitive because ἤρατο (ἔραμαι) governs the genitive of the person loved.",
    why:"The adverbial neuter is now a running theme of this quiz — neuter plural for superlatives (ῥάιστα, ἔξοχα), neuter singular for comparatives (ἅδιον, φέρτερον at Idyll 1.145, 148), neuter singular or plural for positives (καλόν, ἁδεῖα, πάνθ᾽). Treat any stray neuter accusative next to a verb as a candidate adverb. ἔραμαι + genitive is the same rule as τίνος … ἔρασαι at Idyll 1.78, and it repeats at line 10 — worth fixing, since verbs of desiring, remembering, aiming at and taking hold of all take the genitive. Note also the second article in ὁ Κύκλωψ ὁ παρ᾽ ἁμῖν, introducing an attributive prepositional phrase, 'the one in our parts' — Theocritus the Syracusan claiming Polyphemus as a countryman. And ἁμῖν is Doric for ἡμῖν, to be set beside the Aeolic ἄμμι at Idyll 1.102." },

  { id:"theoc11-1-18:s5:q1", readingId:"theoc11-1-18", seg:5, type:"syntax",
    prompt:"ἄρτι γενειάσδων περὶ τὸ στόμα τὼς κροτάφως τε. How many objects does περί have, and what tells you?",
    answer:"Two — τὸ στόμα and τὼς κροτάφως, joined by the postpositive τε at the very end. One preposition governs both accusatives; Greek does not repeat it in a parallel member.",
    why:"τε is postpositive, so it stands AFTER the phrase it links rather than before it, which is why the line seems to end with a stray particle. Reading τε as 'and' looking backwards is a small habit that clears up a great many lines. The non-repetition of the preposition you have already met twice in Idyll 1 (πάσας ἀνὰ κράνας, πάντ᾽ ἄλσεα at 83; οὐκέτ᾽ ἀνὰ δρυμώς, οὐκ ἄλσεα at 117), so a bare accusative beside a prepositional phrase is usually inside it. τὼς κροτάφως is the Doric accusative plural in -ώς again, with article and noun both showing it. And γενειάσδων is Doric -σδ- for -ζ- (γενειάζω) — the participle dates Polyphemus precisely: he is an adolescent just getting his first beard, which is half the pathos of the poem." },

  { id:"theoc11-1-18:s6:q1", readingId:"theoc11-1-18", seg:6, type:"syntax",
    prompt:"ἤρατο δ᾽ οὐ μάλοις οὐδὲ ῥόδῳ οὐδὲ κικίννοις, ἀλλ᾽ ὀρθαῖς μανίαις. What is the case of all four nouns, and what does it express?",
    answer:"All four are datives of MEANS or manner with ἤρατο: he loved not by means of apples, or a rose, or love-locks, but with sheer madness.",
    why:"The instrumental dative needs no preposition in Greek, and here the whole rhetorical shape depends on recognizing it: three conventional love-tokens are rejected and a fourth, incongruous item is put in their place. Apples, roses and a lock of hair are the standard courtship gifts of Greek love poetry, so the joke is that Polyphemus skipped the entire etiquette. Dover adds a nice detail about the third: this passage shows a curl could serve as a love-token, and since hair could be used in magic, lovers thereby put themselves in each other's power — so a prudent lover might present someone else's. On ὀρθαῖς Dover notes the sense 'real, outright' is a fourth-century development from the earlier ὀρθῶς 'truly, correctly'. Then ἁγεῖτο (Doric for ἡγεῖτο) takes a double accusative in the sense 'consider X to be Y': πάντα is the object, πάρεργα the predicate — 'he counted everything else a sideline'." },

  { id:"theoc11-1-18:s7:q1", readingId:"theoc11-1-18", seg:7, type:"morphology",
    prompt:"πολλάκι ταὶ ὄιες ποτὶ τωὔλιον αὐταὶ ἀπῆνθον χλωρᾶς ἐκ βοτάνας. Resolve τωὔλιον, parse ἀπῆνθον, and say what αὐταί contributes.",
    answer:"τωὔλιον is crasis of τὸ αὔλιον, 'the fold'. ἀπῆνθον is the Doric aorist of ἀπέρχομαι = ἀπῆλθον (ν for λ). αὐταί is the intensive 'by themselves, of their own accord' — with no shepherd driving them.",
    why:"The coronis over the υ is the visible mark of the crasis; add τωὔλιον to the collection (ὡξ, ᾡπόλος, χὠ, κἠν, κἠξ, ὥλαφος, ὦναξ, ὡρχαῖος). ἀπῆνθον applies the ἦνθον/ἦλθον rule you learned all through Idyll 1, now with a prefix. αὐταί is the point of the couplet, and it is easy to skip: αὐτός in the nominative, not preceded by an article, is intensive ('himself, themselves'), not the pronoun 'them' — the sheep went home unattended because the Cyclops had abandoned them. Dover compares the lovesick Boukaios neglecting his crops in Idyll 10. Note also χλωρᾶς ἐκ βοτάνας, with the preposition wedged between adjective and noun: resolve agreement first, and do not assume the word nearest the preposition is its object." },

  { id:"theoc11-1-18:s8:q1", readingId:"theoc11-1-18", seg:8, type:"syntax",
    prompt:"ὁ δὲ τὰν Γαλάτειαν ἀείδων αὐτὸς ἐπ᾽ ἀϊόνος κατετάκετο φυκιοέσσας. Γαλάτεια was genitive at line 8 and is accusative here. Why?",
    answer:"Because a different verb governs it. ἤρατο (ἔραμαι) takes a genitive of the person loved; ἀείδων takes an accusative of the thing sung about. The case follows the verb, not the sense.",
    why:"This is the cleanest possible illustration of a rule students often resist: case is assigned by the governing word, not by the meaning you would give the phrase in English. 'He loved Galateia' and 'he sang of Galateia' look equally like direct objects to us, and Greek marks them differently. When a familiar name changes case within ten lines, that is your prompt to find its verb. Two further points. ἀείδων is a present participle, so contemporaneous with κατετάκετο — the wasting and the singing go on together, which is the hinge of the poem, since the singing turns out to be both symptom and cure. And κατετάκετο is the τάκομαι of Idyll 1 (66, 82, 88, 91) intensified with κατα-: the same disease, the same word, a different poem. Dover allows αὐτός to mean either 'by himself' or 'he, in contrast to his flocks' — the αὐταί of line 12 makes the contrast attractive." },

  { id:"theoc11-1-18:s9:q1", readingId:"theoc11-1-18", seg:9, type:"syntax",
    prompt:"ἔχθιστον ἔχων ὑποκάρδιον ἕλκος, Κύπριδος ἐκ μεγάλας τό οἱ ἥπατι πᾶξε βέλεμνον. What is τό, what is its antecedent, and what is βέλεμνον?",
    answer:"Dover states it flatly: τό is a relative pronoun and the OBJECT of πᾶξε, with ἕλκος as its antecedent. βέλεμνον is therefore predicative — 'the wound, which she fixed in his liver AS a shaft'. οἱ is the epic enclitic dative, possessive with ἥπατι.",
    why:"The trap is to take βέλεμνον as the object of πᾶξε, which leaves τό with no job at all — and an unattached relative is always a sign you have mis-assigned something. Reading it Dover's way also explains the strange image: the wound itself is what was driven in, in the form of a dart. Two supporting details. οἱ is not the article but the epic third-person enclitic dative (= αὐτῷ), the same word as at Idyll 1.74; an enclitic in second position with a feminine or neuter noun nearby cannot be a masculine nominative plural article. And Κύπριδος ἐκ μεγάλας shows anastrophe, the preposition following its noun, with μεγάλας agreeing across it — exactly as at Idyll 1.98 (Ἔρωτος ὑπ᾽ ἀργαλέω). This is also the authority-marking ἐκ of Idyll 1.140 (ἐκ Μοιρᾶν): 'at the hands of'. Dover notes there is often no anatomical precision in descriptions of love-sickness, so 'under the heart' and 'in the liver' need not be reconciled." },

  { id:"theoc11-1-18:s10:q1", readingId:"theoc11-1-18", seg:10, type:"syntax",
    prompt:"ἀλλὰ τὸ φάρμακον εὗρε, καθεζόμενος δ᾽ ἐπὶ πέτρας ὑψηλᾶς ἐς πόντον ὁρῶν ἄειδε τοιαῦτα. Why is ἄειδε imperfect rather than aorist, and what does τοιαῦτα do?",
    answer:"The imperfect is iterative and durative — not 'he sang' once but 'he used to sing, he would go on singing'. That repetition IS the cure. τοιαῦτα is an internal object of ἄειδε pointing forward to the quoted song: 'songs of this kind', i.e. the ones that follow.",
    why:"Aspect is carrying the argument. Dover's paraphrase makes it explicit: by PERSISTING in singing, Polyphemus eventually found a remedy he could have found in no other way — and Greek says 'persisting' simply by choosing the imperfect over the aorist εὗρε that stands beside it in the same sentence. Set the two side by side and you have the clearest possible lesson in aspect: the finding is a single completed event, the singing an ongoing practice. The two participles are both present and so contemporaneous with ἄειδε (sitting, looking, singing all at once), while the aorist εὗρε is the one punctual act. τοιαῦτα as a forward-pointing internal object is the standard way Greek introduces quoted speech or song — expect the quotation to begin at once." },
];

if (typeof module !== "undefined") module.exports = { QUESTIONS };

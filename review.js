/* =========================================================================
   GRK30 grammar review.

   The hand-written half of review.html: the constructions that actually recur
   across a quiz's readings, each with a plain explanation and real examples
   lifted from the passages. (The other half of the page — the form drills — is
   generated automatically from the token data in readings.js and needs no
   maintenance here.)

   {
     quizId: "quiz1",
     topics: [{
       title:   "…",
       summary: "the explanation, in prose",
       examples: [{
         readingId: "ody5-55-94",   // must exist in READINGS
         seg: 15,                   // 0-based segment index — used for the citation link
         quote: "ἔνθα κ᾽ ἔπειτα …",  // the Greek being pointed at
         explain: "what it shows"
       }]
     }]
   }

   When a quiz closes, write its topics here: pick the constructions that show up
   in more than one reading, or that are genuinely hard, not every rule in the book.
   ========================================================================= */

const REVIEW = [
{
  quizId: "quiz1",
  topics: [

    {
      title: "Epic forms you simply have to recognize",
      summary:
        "Most of what makes Homer look difficult is not syntax but morphology: older endings that Attic later replaced. None of them mean anything different from their Attic equivalents — they are pure recognition, and once you can see through them the sentences are usually simpler than Plato's. The main ones in these readings: genitive singular -οιο for -ου (Ἀλκινόοιο, γλαφυροῖο, κυάνοιο); genitive plural -άων for -ῶν (θεάων, θυράων); dative plural -εσσι and -ῃσι/-οισι for -σι/-αις/-οις (πραπίδεσσι, στοναχῇσι, ἀλλήλοισι); the old case-ending -φι (ἐσχαρόφιν); uncontracted vowels where Attic contracts (ἐοῦσαν for οὖσαν, φρονέεις for φρονεῖς); infinitives in -μεναι / -έμεν (φυλασσέμεναι, ἐλαυνέμεν) for -ειν; the iterative suffix -σκ- (δερκέσκετο, ἔχεσκον, σπένδεσκον); and 'diectasis', where a contracted form is artificially re-expanded to fit the metre (ὑφόωσι for ὑφῶσι, ἡβώωσα, τηλεθόωσα). Add to that the freely omitted augment (τέτμεν, βῆ, χύτο) and the fact that ὁ, ἡ, τό is still a demonstrative pronoun rather than an article.",
      examples: [
        { readingId:"ody5-55-94", seg:4, quote:"πῦρ μὲν ἐπ᾽ ἐσχαρόφιν μέγα καίετο",
          explain:"-φι(ν) is an inherited case-ending that can stand for a genitive, dative, instrumental or locative. Here it is locatival and governed by ἐπί: 'on the hearth' = ἐπὶ τῆς ἐσχάρας." },
        { readingId:"ody7-81-107", seg:4, quote:"χάλκεοι μὲν γὰρ τοῖχοι ἐληλέδατ᾽ ἔνθα καὶ ἔνθα",
          explain:"-ατο is the epic 3rd plural middle/passive of the perfect system, where Attic needs a periphrasis. The same ending gives ἐρηρέδατο and βεβλήατο in the following lines — the whole palace description runs on these stative pluperfect passives." },
        { readingId:"ody7-108-145", seg:18, quote:"τότε δή ῥ᾽ αὐτοῖο πάλιν χύτο θέσφατος ἀήρ",
          explain:"χύτο is an unaugmented athematic root aorist of χέω — no thematic vowel, no augment, nothing to derive it from. Forms like this and τέτμεν (Od. 5.58) can only be recognized, not worked out." }
      ]
    },

    {
      title: "Anastrophe and tmesis: prepositions coming loose",
      summary:
        "Prepositions in Homer were still adverbs not long before, and they behave like it. Two consequences show up constantly. Anastrophe: a disyllabic preposition that follows its noun throws its accent back onto the first syllable (σπέος ἀμφί, πόντον ἐπ᾽, μύλῃς ἔπι, δόμον κάτα, δῶμα καθ᾽). The accent is the visible tell, and the preposition still governs its case perfectly normally. Tmesis: the preverb of a compound verb stands apart from the verb itself (πὰρ … θείω = παραθείω; ἀμφὶ … βάλε = ἀμφέβαλε; ἐν … ἐρηρέδατο). The practical rule for both: whenever you meet a preposition with no object in the case it should govern, do not force it — look either for the noun it follows, or for the verb it belongs to.",
      examples: [
        { readingId:"ody5-55-94", seg:30, quote:"ἵνα τοι πὰρ ξείνια θείω",
          explain:"πάρ is not governing anything — it belongs to θείω. πὰρ … θείω = παραθείω, 'that I may set guest-gifts before you'. The stray preposition is the signal to go looking for its verb." },
        { readingId:"ody7-108-145", seg:18, quote:"ἀμφὶ δ᾽ ἄρ᾽ Ἀρήτης βάλε γούνασι χεῖρας",
          explain:"Tmesis again: ἀμφί + βάλε = ἀμφέβαλε. Note that the dative γούνασι is licensed by the ἀμφι- element, which is still doing its governing work even at a distance from its verb." },
        { readingId:"ody5-55-94", seg:7, quote:"ὕλη δὲ σπέος ἀμφὶ πεφύκει",
          explain:"Anastrophe: ἀμφί follows its accusative object σπέος and retracts its accent. Contrast ἀμφὶ δὲ λειμῶνες at 5.72, where ἀμφί has no object at all and is genuinely adverbial ('round about')." }
      ]
    },

    {
      title: "Participles: which kind, and what the aspect tells you",
      summary:
        "Greek hangs an enormous amount off participles, and the exam will ask you to say which kind you are looking at. Circumstantial: a loose modifier of the subject or another noun, giving the attendant circumstances (στὰς θηεῖτο, 'he stood and gazed'; δάκρυα λείβων, 'shedding tears'). Supplementary: it completes the meaning of the verb and is not optional — this is what verbs of finding and perceiving take (τέτμεν … ἐοῦσαν, 'he found her being inside'; εὗρε … σπένδοντας, 'he found them pouring libations'). Attributive: with an article, functioning as a noun (οἱ … προσείοντες, 'those who dangle'; τὸ παρόν, 'the present'). Then aspect. An aorist participle is normally antecedent to the main verb; a present participle is contemporaneous with it. Odyssey 7.144–145 sets both side by side — ἰδόντες ('on seeing him', a single prior act) against ὁρόωντες ('as they went on gazing'). If you can explain that pair you have understood Greek participles.",
      examples: [
        { readingId:"ody7-108-145", seg:19, quote:"οἱ δ᾽ ἄνεῳ ἐγένοντο … ἰδόντες· θαύμαζον δ᾽ ὁρόωντες",
          explain:"The two aspects of the same verb, two words apart. Aorist ἰδόντες is prior and punctual — they fell silent the moment they caught sight of him. Present ὁρόωντες is ongoing and pairs with the imperfect θαύμαζον — they kept staring and kept marvelling." },
        { readingId:"ody5-55-94", seg:15, quote:"καὶ ἀθάνατός περ ἐπελθὼν θηήσαιτο",
          explain:"A conditional participle: ἐπελθών stands in for a whole protasis ('were he to come upon it'), and καί … περ makes it concessive ('even a god, immortal though he be'). One participle is doing the work of two English clauses." },
        { readingId:"phdr-230a-e", seg:23, quote:"ὥσπερ οἱ τὰ πεινῶντα θρέμματα … προσείοντες ἄγουσιν",
          explain:"Attributive: the article οἱ plus the participle προσείοντες = 'those who dangle', the subject of ἄγουσιν. Note how much material Plato packs between the article and its participle — read forward to find the word the article belongs to before construing anything in between." }
      ]
    },

    {
      title: "The perfect that isn't past",
      summary:
        "A whole class of Greek verbs forms a perfect that denotes a resulting state rather than a completed act — and such a perfect is simply a present in meaning. φύω: πέφυκα = 'I have grown' and so 'I stand grown, I am by nature'. Likewise ὄζω (ὀδώδει, 'a fragrance hung'), θάλλω (τεθήλει, 'was teeming'), ἵστημι (ἕστηκα, 'I stand'), μέλω (μέμηλεν, 'is a care'), ἄνωγα ('I bid'), ἔοικα ('I seem, I am like'), οἶδα ('I know'). The consequence: the pluperfect of these verbs has imperfect force. πεφύκει does not mean 'had grown before something else happened' — it means 'stood growing'. Homer's whole description of Calypso's island and of Alcinous's orchard is built out of these forms, because they describe how a place permanently is, not what once happened to it. Watch too for verbs that split by tense-stem: φύω is transitive in the present and aorist ('make grow') but intransitive in the perfect, and ἵστημι is transitive in the sigmatic aorist (ἔστησα, 'I set up') but intransitive in the root aorist and perfect (ἔστην, ἕστηκα, 'I stood').",
      examples: [
        { readingId:"ody5-55-94", seg:7, quote:"ὕλη δὲ σπέος ἀμφὶ πεφύκει τηλεθόωσα",
          explain:"Pluperfect in form, imperfect in force: the wood 'stood growing' around the cave. Not an action completed before another action — a standing condition." },
        { readingId:"ody7-108-145", seg:6, quote:"τὰ μὲν φύει, ἄλλα δὲ πέσσει",
          explain:"Two lines after the intransitive perfect πεφύκασι ('the trees stand grown'), φύει is transitive: the West Wind 'brings some to birth'. Same verb, opposite transitivity, and the tense-stem is what decides." },
        { readingId:"phdr-230a-e", seg:13, quote:"ἐν ἠρέμα προσάντει ἱκανὴ πέφυκε",
          explain:"The same stative perfect in Plato: the grass 'has grown' thick enough — i.e. it now stands thick enough. A useful bridge between the two authors, and proof that this is Greek, not merely an epic mannerism." }
      ]
    },

    {
      title: "The optative: potential, and indefinite frequency",
      summary:
        "Two uses matter for this quiz. First, the potential optative: ἄν (Homeric κε) with the optative states what would happen — Odyssey 5.73–74, ἔνθα κ᾽ … θηήσαιτο … καὶ τερφθείη, 'there even a god would gaze in wonder and be delighted'; Phaedrus 230b, ὡς ἂν εὐωδέστατον παρέχοι τὸν τόπον, 'so that it would make the place as fragrant as could be'. Second — and this is the one people miss — the iterative or indefinite optative. In a past-time general clause ('whenever…'), Greek uses the bare optative with NO ἄν at all: Odyssey 7.137, ὅτε μνησαίατο κοίτου, 'whenever they were minded of bed'. The absence of ἄν there is not an omission, it is the rule. Contrast the primary-sequence version, which does take ἄν with the subjunctive: Phaedrus 230d, ὅποι ἂν ἄλλοσε βούλῃ, 'wherever else you may wish'. So: indefinite clause + primary tense → ἄν + subjunctive; indefinite clause + secondary tense → bare optative. Being able to state that pair, and point to one of each in these readings, is exactly what a construction question is fishing for.",
      examples: [
        { readingId:"ody5-55-94", seg:15, quote:"ἔνθα κ᾽ ἔπειτα καὶ ἀθάνατός περ ἐπελθὼν θηήσαιτο ἰδὼν καὶ τερφθείη φρεσὶν ᾗσιν",
          explain:"Potential optative: κε (= ἄν) with the aorist optatives θηήσαιτο and τερφθείη. The 'if' is supplied by the participle ἐπελθών, so the sentence is effectively a future-less-vivid condition with its protasis turned into a participle." },
        { readingId:"ody7-108-145", seg:16, quote:"ᾧ πυμάτῳ σπένδεσκον, ὅτε μνησαίατο κοίτου",
          explain:"The iterative optative, with no ἄν: 'to whom they used to pour last, whenever they thought of bed'. Note the confirmation in the main clause — σπένδεσκον is itself an iterative -σκ- imperfect. The two forms agree that this is habitual past action." },
        { readingId:"phdr-230a-e", seg:24, quote:"καὶ ὅποι ἂν ἄλλοσε βούλῃ",
          explain:"The primary-sequence counterpart: ἄν + subjunctive in an indefinite relative clause, because the main verb (φαίνῃ) is a present. Put this beside ὅτε μνησαίατο and the sequence-of-moods rule is right in front of you." }
      ]
    },

    {
      title: "Purpose, result, and 'until'",
      summary:
        "Four things worth keeping straight. (1) ὄφρα is temporal 'until' with the indicative, but purpose 'in order that' with the subjunctive or optative — the mood decides, not the word (Od. 5.57 and 7.139, both indicative, both 'until'). (2) ἵνα + subjunctive is a plain purpose clause (ἵνα … θείω, 'so that I may set'). (3) ὥστε takes the infinitive for a natural or contemplated result, and the indicative for an actual one. Plato uses both within a few lines: ὥστε … τεκμήρασθαι (230b, infinitive, 'so far as one may judge') against ὥστε ἄριστά σοι ἐξενάγηται (230c, indicative, 'and so you have actually played the guide excellently'). (4) πρίν takes the infinitive after an affirmative main clause (πρὶν … ἱκέσθαι, 'before reaching'), and a finite verb only after a negative one. A bare infinitive can also express purpose on its own after verbs of making or giving — δῶμα φυλασσέμεναι, 'to guard the house'.",
      examples: [
        { readingId:"ody5-55-94", seg:1, quote:"ἤιεν, ὄφρα μέγα σπέος ἵκετο",
          explain:"ὄφρα + aorist indicative = 'until'. The imperfect ἤιεν gives the ongoing action that the ὄφρα-clause brings to an end. Had Homer wanted 'in order that', he would have needed a subjunctive." },
        { readingId:"ody7-81-107", seg:2, quote:"πρὶν χάλκεον οὐδὸν ἱκέσθαι",
          explain:"πρίν + infinitive, because the main clause (ὥρμαινε) is affirmative. No conjunction-plus-finite-verb, no ἄν, no subordinating mood — the rule predicts exactly this form." },
        { readingId:"phdr-230a-e", seg:14, quote:"ὥστε ἄριστά σοι ἐξενάγηται, ὦ φίλε Φαῖδρε",
          explain:"ὥστε + indicative: an actual, achieved result — Phaedrus really has guided him well. Set it against ὥστε … τεκμήρασθαι a few lines earlier, with the infinitive, where the result is only contemplated ('so far as one may judge by the foot')." }
      ]
    },

    {
      title: "Cases doing work without prepositions",
      summary:
        "A large share of parsing marks come from naming a case-usage correctly, and Greek uses bare cases where English needs a preposition. Dative: means/instrument (χρυσείῃ κερκίδι, 'with a golden shuttle'; δάκρυσι … ἐρέχθων, 'rending his heart with tears'), possession (οἱ κῆρ, 'his heart'; πεντήκοντα δέ οἱ δμῳαί, 'he has fifty slave-women'), agent with a perfect passive (ἄριστά σοι ἐξενάγηται, 'excellently guided BY you'), reference (κατακλινέντι, 'for a person who lies down'), and whatever a compound verb's prefix demands (ὑπηχεῖ … χορῷ; συγγίγνωσκέ μοι). Genitive: material (κυάνοιο, 'of dark-blue enamel'), source (κέδρου … ὀδμή), partitive (πάντων κομψότατον), separation (αὐτοῖο … χύτο, 'flowed away from him'), time within which (χείματος οὐδὲ θέρευς, 'in winter nor in summer'), objective (τῆς ἐμῆς ἐξόδου τὸ φάρμακον, 'the drug for getting me out'), after verbs of filling (ἀμβροσίης πλήσασα) and remembering (μνησαίατο κοίτου), and after place-adverbs (ἔκτοσθεν αὐλῆς, ἄγχι θυράων, ἔξω τείχους, δώματος εἴσω). Accusative: extent of time (ἤματα πάντα, νύκτας), goal of motion without a preposition (δῦνε … δόμον), adverbial (θερινόν τε καὶ λιγυρὸν ὑπηχεῖ, τὸ παράπαν), and double accusative after verbs of teaching (οὐδέν μ᾽ … διδάσκειν).",
      examples: [
        { readingId:"ody7-108-145", seg:5, quote:"οὔ ποτε καρπὸς ἀπόλλυται … χείματος οὐδὲ θέρευς",
          explain:"Genitive of time within which — 'in winter, in summer'. Keep the three time-cases apart: accusative for extent ('for all their days', ἤματα πάντα), dative for a point in time, genitive for the period within which." },
        { readingId:"phdr-230a-e", seg:14, quote:"ἄριστά σοι ἐξενάγηται",
          explain:"Dative of agent — the case the perfect passive takes, instead of ὑπό + genitive. And ἐξενάγηται is an impersonal passive: literally 'the guiding has been done by you'." },
        { readingId:"ody7-81-107", seg:2, quote:"πολλὰ δέ οἱ κῆρ ὥρμαιν᾽ ἱσταμένῳ",
          explain:"Dative of possession (οἱ κῆρ, 'his heart') with a participle then agreeing with that same dative pronoun — so the grammatical subject is neuter (κῆρ) while the participle is masculine. The endings, not the word order, tell you who is standing." }
      ]
    },

    {
      title: "Plato's article, and the ellipse of the copula",
      summary:
        "Attic prose does things with the article that Homer never does, and Phaedrus 230 is a showcase. (1) The article substantivizes anything: an adjective (τὸ σύσκιον, 'the shadiness'; τὸ εὔπνουν, 'the fresh air'), a participle (τὸ παρόν, 'the present'; οἱ προσείοντες, 'those who dangle'). (2) Article + genitive with no noun means 'the business of' — τὸ τῆς πόας, 'the matter of the grass'. (3) Attributive position — article, modifier, noun — welds a phrase onto a noun: οἱ δ᾽ ἐν τῷ ἄστει ἄνθρωποι, 'the people IN THE CITY', where the position is what makes the phrase an attribute rather than an adverbial. Against all that, remember that Homer's ὁ, ἡ, τό is still a demonstrative pronoun: ἀλλ᾽ ὅ γ᾽ ἐπ᾽ ἀκτῆς κλαῖε means 'but HE sat weeping', not 'but the…'. Finally, in both authors the copula is freely omitted — καλή γε ἡ καταγωγή, 'the resting-place IS a fine one'. In a verbless sentence the article is your tell: the word with the article is the subject, the anarthrous one is the predicate.",
      examples: [
        { readingId:"phdr-230a-e", seg:13, quote:"πάντων δὲ κομψότατον τὸ τῆς πόας",
          explain:"Three things in five words: article + genitive ('the business of the grass'), a partitive genitive with a superlative (πάντων, 'of all things'), and no copula at all. The article on τό marks the subject; the anarthrous κομψότατον is the predicate." },
        { readingId:"phdr-230a-e", seg:21, quote:"οἱ δ᾽ ἐν τῷ ἄστει ἄνθρωποι",
          explain:"Attributive position: the prepositional phrase sits between the article and its noun, and is thereby made an attribute of ἄνθρωποι. Placement is grammar in Attic — a precision Homer does not bother with." },
        { readingId:"ody5-55-94", seg:22, quote:"ἀλλ᾽ ὅ γ᾽ ἐπ᾽ ἀκτῆς κλαῖε καθήμενος",
          explain:"The Homeric counterpart: ὅ is not an article but a demonstrative, 'he, for his part'. If you go hunting for a noun for it to modify you will never find one." }
      ]
    },

    {
      title: "μέν … δέ, and reading in correlated pairs",
      summary:
        "Greek is built out of paired signposts, and half of reading fluently is learning to hear the first one and wait for the second. μέν … δέ is the workhorse — it partitions a description into balanced panels (πῦρ μέν … τηλόσε δ᾽ ὀδμή) and, with a demonstrative, means 'some … others' (αἱ μὲν ἀλετρεύουσι … αἱ δ᾽ ἱστοὺς ὑφόωσι; τὰ μὲν φύει, ἄλλα δὲ πέσσει; ἡ μέν … ἡ δ᾽ ἑτέρωθεν). Others to have ready: ὅσσον … ὥς ('as much as … so'), ὥσπερ … οὕτω ('just as … so'), τε … τε and τε … καί joining pairs, οὔτε … οὔτε ('neither … nor'), and ἐγὼ μέν … σὺ δέ setting two people against each other. Two special cases worth flagging. The epic or 'generalizing' τε marks a statement as a permanent truth and is not translated at all — it appears in general descriptions (ἔνθα δέ τ᾽ ὄρνιθες), general relative clauses (τῇσίν τε … μέμηλεν), and above all in similes (ὥς τε … αἴγλη; οἷά τε φύλλα). Hunting for something for that τε to join is a guaranteed dead end. And in Homer the μέν … δέ panels can run for many lines, so you may have to hold the μέν open across a relative clause and a prepositional phrase before the δέ lands.",
      examples: [
        { readingId:"ody7-108-145", seg:12, quote:"ἡ μέν τ᾽ ἀνὰ κῆπον ἅπαντα σκίδναται, ἡ δ᾽ ἑτέρωθεν ὑπ᾽ αὐλῆς οὐδὸν ἵησι",
          explain:"'The one … the other', dividing the two springs, with each demonstrative the subject of its own verb. The pair is held open across three lines — this is what reading Greek asks of your short-term memory." },
        { readingId:"ody5-55-94", seg:9, quote:"ἔνθα δέ τ᾽ ὄρνιθες τανυσίπτεροι εὐνάζοντο",
          explain:"The generalizing τε: it marks the description as permanently true of the place, and it is not translated. If you try to make it coordinate two things you will look for a second member that never arrives." },
        { readingId:"phdr-230a-e", seg:25, quote:"ἐγὼ μέν μοι δοκῶ κατακείσεσθαι, σὺ δ᾽ …",
          explain:"μέν … δέ setting the two speakers against each other, and closing the passage. Note the idiom inside it: δοκῶ μοι, literally 'I seem to myself', is Greek for 'I intend to'." }
      ]
    }

  ]
},
{
  quizId: "quiz2",
  topics: [

    {
      title: "Reading Doric: a short list of swaps that does most of the work",
      summary:
        "Theocritus' bucolic Doric is not a different grammar, only a different spelling of forms you already know, and almost all of it reduces to a dozen substitutions. Learn them as a checklist and the dialect stops being an obstacle. (1) ᾱ where Attic has η — ἁδύς, ἀοιδά, φωνά, κράνα, ἅλιος, θνατός, ἔφα, Πολύφαμος, σᾶμα, ἀώς: this is the single commonest feature and it touches every part of speech. (2) -σδ- for -ζ- — μελίσδεται, συρίσδω, ἐρίσδω, φράσδη, ποτίσδων, ὄσδει, γενειάσδων. (3) 3rd plural -ντι for -νσι/-ουσι — γελᾶντι, βομβεῦντι. (4) Contract verbs keeping -ε- and closing to -ευ- — ἀνηρώτευν, ἐλέγευ, βατεῦνται, φέρευ. (5) Feminine participles in -οισα/-εισα for -ουσα — γελάοισα, ἔχοισα, ζάτεισα, Ἀρέθοισα. (6) Second-declension accusative plural in -ώς for -ούς — ὀφθαλμώς, τώς, δρυμώς, ταύρως, κροτάφως. (7) Genitive singular in -ω for -ου — Πηνειῶ, Ἀνάπω, αὑτῶ, κηρῶ, Λυκαίω, Αἰγίλω. (8) Pronouns in τ- — accented τύ = σύ, enclitic τυ = σε, plus ἐμίν = ἐμοί and ἁμίν = ἡμῖν. (9) κα = ἄν, and the compounds built on it: αἴ κα = ἐάν, ὅκκα = ὅταν, ἐπεί κα = ἐπειδάν; ὅκα alone = ὅτε. (10) ποτί = πρός, in compounds too (ποτάγω, ποταμείβετο, ποτελέξατο). (11) ν for λ in the aorist of ἔρχομαι — ἦνθον, ἔνθε, ἀπῆνθον. (12) Contracted-type futures — φυλαξεῖς, λυγιξεῖν, ᾀσῶ, δοκησεῖς, σκιρτασεῖτε. Articles follow suit: ἁ = ἡ, τοί = οἱ, ταί = αἱ, τάν = τήν, τᾶς = τῆς, τώς = τούς.",
      examples: [
        { readingId:"theoc1-1-63", seg:1, quote:"ἁδύ τι τὸ ψιθύρισμα … ποτὶ ταῖς παγαῖσι, μελίσδεται",
          explain:"Four features in the poem's first line and a half: ᾱ for η twice (ἁδύ, παγαῖσι = πηγαῖς), ποτί for πρός, and -σδ- for -ζ- in μελίσδεται. Theocritus announces the dialect before he announces the subject." },
        { readingId:"theoc1-120-152", seg:0, quote:"Δάφνις ὁ τὼς ταύρως καὶ πόρτιας ὧδε ποτίσδων",
          explain:"τὼς ταύρως is the Doric accusative plural in -ώς on both article and noun — never a genitive singular. And beware ποτίσδων: the ποτ- here is the stem of ποτίζω 'water', not the preposition ποτί, so check what follows the ποτ- before you assume." },
        { readingId:"theoc11-1-18", seg:7, quote:"πολλάκι ταὶ ὄιες ποτὶ τωὔλιον αὐταὶ ἀπῆνθον",
          explain:"ταί = αἱ, ποτί = πρός, and ἀπῆνθον = ἀπῆλθον by the ν-for-λ rule you met in ἦνθον throughout Idyll 1. Apply the same rule in reverse to ἔνθε (1.124, 128) and you get ἐλθέ, which is what makes the prayer to Pan a prayer at all." }
      ]
    },

    {
      title: "Crasis: when καί, ὁ, τό and ὦ vanish into the next word",
      summary:
        "Theocritus fuses a short word onto the following vowel constantly, and an unrecognized crasis is the fastest way to lose a sentence — you look for an article or a conjunction, find none, and mis-parse everything after it. There are two visible tells. A coronis (the smooth-breathing mark over a vowel inside a word: κοὔτι, τωὔλιον) shows two words have merged. And an initial χ where you expected κ shows that καί has aspirated the consonant after losing its iota: χὠ = καὶ ὁ, χὠκ = καὶ ὁ ἐκ. Collect the whole set from this quiz and none will surprise you: from καί — κοὔτι (καὶ οὔ), κἤφα (καὶ ἔφα), κεῖπε (καὶ εἶπε), κἠν (καὶ ἐν), κἠξ (καὶ ἐξ), χὠ, χὠκ; from the article — ὡξ (ὁ ἐξ), ᾡπόλος/ᾡπόλοι (ὁ/οἱ αἰπόλος), ὥλαφος (ὁ ἔλαφος), ὡρχαῖος (ὁ ἀρχαῖος), τωὔλιον (τὸ αὔλιον); from ὦ — ὠγαθέ (ὦ ἀγαθέ), ὦναξ (ὦ ἄναξ). The method is always the same: split the word back into its parts and construe them separately.",
      examples: [
        { readingId:"theoc1-64-118", seg:7, quote:"τῆνον χὠκ δρυμοῖο λέων ἔκλαυσε θανόντα",
          explain:"A triple crasis — καί + ὁ + ἐκ. Unpack it as καὶ ὁ ἐκ δρυμοῖο λέων and the genitive δρυμοῖο, which otherwise has nothing to govern it, is immediately accounted for." },
        { readingId:"theoc1-120-152", seg:13, quote:"κἠξ ὀρέων τοὶ σκῶπες ἀηδόσι γαρύσαιντο",
          explain:"κἠξ = καὶ ἐξ, on the same pattern as κἠν = καὶ ἐν at 1.103. Note that τοί here is the Doric ARTICLE (= οἱ), not the relative τοί of 1.118 — a noun follows it, not a verb." },
        { readingId:"theoc11-1-18", seg:7, quote:"ποτὶ τωὔλιον αὐταὶ ἀπῆνθον",
          explain:"τωὔλιον = τὸ αὔλιον, marked by the coronis over the υ. Without splitting it you have a preposition governing an unrecognizable word; with it, an ordinary article and noun in the accusative after ποτί." }
      ]
    },

    {
      title: "The neuter adjective used as an adverb",
      summary:
        "Greek makes adverbs out of neuter adjectives so freely that in this quiz it is the default rather than the exception, and the habit accounts for several forms that otherwise look like agreement errors. The positive appears as a neuter singular or plural (καλόν 'sweetly', ἁδεῖα 'with enjoyment', πάνθ᾽ 'wholly', τόσσον 'so much', τί 'why', ἔξοχα 'above all'); the comparative is the neuter singular (ἅδιον 'more sweetly', φέρτερον 'better'); the superlative is the neuter plural (ῥάιστα 'most easily'). The practical rule: when a neuter accusative sits next to a verb or participle and has no plausible noun to agree with — or when the noun it might agree with is the wrong gender — attach it to the verb. Dover uses exactly this reasoning at 1.95 to prove that ἁδεῖα cannot be describing Aphrodite.",
      examples: [
        { readingId:"theoc1-64-118", seg:26, quote:"ἦνθέ γε μὰν ἁδεῖα καὶ ἁ Κύπρις γελάοισα",
          explain:"ἁδεῖα is ambiguous in form between nom. sg. fem. and neut. pl. Dover argues from sense for the neuter plural adverb: not 'sweet Cypris came' but 'Cypris came laughing with enjoyment', which is the reading the next line's concealed laughter and displayed anger requires." },
        { readingId:"theoc1-120-152", seg:20, quote:"ἐγὼ δ᾽ ὔμμιν καὶ ἐς ὕστερον ἅδιον ᾀσῶ",
          explain:"The neuter singular of a comparative IS its adverb — ἅδιον = ἥδιον 'more sweetly'. Do not look for a noun for it to agree with; compare φέρτερον three lines later, and μᾶλλον, θᾶσσον, ῥᾷον generally." },
        { readingId:"theoc11-1-18", seg:4, quote:"οὕτω γοῦν ῥάιστα διᾶγ᾽ ὁ Κύκλωψ",
          explain:"Neuter plural superlative as adverb: 'got through most easily'. It answers the οὐ ῥᾴδιον of line 4 — the remedy is hard to find, but once found it makes life easiest." }
      ]
    },

    {
      title: "The optative, and how to tell which kind you have",
      summary:
        "The optative appears in three distinct jobs across these readings, and each is identified by what surrounds it, not by the ending. (1) WISH: no ἄν, no subordinating word, often introduced by νῦν or εἴθε — 'may X happen'. Idyll 1.132–136 is a solid block of them (φορέοιτε, κομάσαι, γένοιτο, ἐνείκαι, ἕλκοι, γαρύσαιντο), the adynaton or catalogue of impossibilities, and the goatherd answers it with benevolent wishes at 146–148 (γένοιτο, τρώγοις). (2) POTENTIAL: optative WITH ἄν/κα — ἀρεσαίμαν at 1.60, 'I would gladly gratify you'. (3) OPTATIVE OF INDIRECT DISCOURSE: in a subordinate clause after a past main verb, replacing an original indicative — πάθοι at 1.81. So: look for ἄν first; if there is none, ask whether the optative stands in a main clause (wish) or a subordinate one after a past tense (indirect discourse). A useful side-effect: in a stanza of wishes, any INDICATIVE stands out as the one thing that is actually true — which is exactly the force of θνάσκει at 1.135.",
      examples: [
        { readingId:"theoc1-120-152", seg:9, quote:"νῦν ἴα μὲν φορέοιτε βάτοι, φορέοιτε δ᾽ ἄκανθαι",
          explain:"Optative of wish, 2nd plural, because the brambles and thistles are vocatives and are being addressed. Recognize the mood and the whole adynaton opens; miss it and you will try to read impossibilities as statements of fact." },
        { readingId:"theoc1-64-118", seg:15, quote:"πάντες ἀνηρώτευν τί πάθοι κακόν",
          explain:"Optative of indirect discourse: after the past-tense ἀνηρώτευν the indicative of the direct question (τί ἔπαθε;) may be changed to the optative. No ἄν, and a subordinate clause — so not a wish and not potential." },
        { readingId:"theoc1-120-152", seg:22, quote:"πλῆρές τοι μέλιτος τὸ καλὸν στόμα, Θύρσι, γένοιτο",
          explain:"The same wish-optative as the adynaton, now used to bless rather than to curse — the goatherd pays Thyrsis in good wishes before he pays him in goods. Note also πλῆρες + genitive, and the predicative position of πλῆρες outside the article-noun bracket against attributive καλόν inside it." }
      ]
    },

    {
      title: "What governs what: the cases that follow particular words",
      summary:
        "A large share of the difficulty in these passages is not word-order but knowing which case a given verb or adjective demands — and the case, once recognized, often settles a disputed reading. GENITIVE: verbs of beginning and ceasing (ἄρχω, λήγω — and this is what proves ἀοιδᾶς in the refrain is a genitive singular, not an accusative plural); verbs of desiring and loving (ἔραμαι — τίνος … ἔρασαι, ἤρατο τᾶς Γαλατείας); verbs of touching and taking hold (θιγγάνω, ἅπτομαι); adjectives of fullness (πλήρης μέλιτος); comparison without ἤ (τέττιγος … φέρτερον); and the idiomatic ἐν/εἰς + genitive of a person, 'at so-and-so's house' (κἠν Ἀΐδα). DATIVE: adjectives and verbs of likeness, liking and loathing (ἔοικα, φίλος, ἀπεχθής — Μοίσαις φίλον, Νύμφαισιν ἀπεχθῆ, θνατοῖσιν ἀπεχθής); verbal adjectives in -τός and perfect passives, which take a dative of agent rather than ὑπό + genitive (μακάρεσσιν ἀγητόν, Μοίσαις πεφιλημένον); and μετά + dative 'among', poetic. ACCUSATIVE: the accusative of respect (τάκεται ὀφθαλμώς, 'melts as to his eyes'); and the double accusative of person-and-thing with verbs of saying (τὼς δ᾽ οὐδὲν ποτελέξατο).",
      examples: [
        { readingId:"theoc1-120-152", seg:5, quote:"λήγετε βουκολικᾶς, Μοῖσαι, ἴτε λήγετ᾽ ἀοιδᾶς",
          explain:"The refrain's last form settles an ambiguity that has stood since line 64. Doric -ᾶς is both genitive singular and accusative plural, but λήγω 'cease FROM' can only take a genitive — so ἀοιδᾶς was genitive with ἄρχετε all along." },
        { readingId:"theoc11-1-18", seg:8, quote:"ὁ δὲ τὰν Γαλάτειαν ἀείδων … κατετάκετο",
          explain:"Galateia is genitive at line 8 (ἤρατο τᾶς Γαλατείας) and accusative here, because ἔραμαι governs a genitive and ἀείδω an accusative of the thing sung. The case follows the verb, not the English sense." },
        { readingId:"theoc1-120-152", seg:17, quote:"τὸν Μοίσαις φίλον ἄνδρα, τὸν οὐ Νύμφαισιν ἀπεχθῆ",
          explain:"Two datives governed by two adjectives of liking and loathing. The line is Daphnis' epitaph and every word answers something earlier — Νύμφαισιν picks up the reproach of line 66, and ἀπεχθῆ is the very word he flung at Aphrodite at 101." }
      ]
    },

    {
      title: "Prepositions coming loose: anastrophe and tmesis",
      summary:
        "As in Homer, prepositions in this verse still behave partly like the adverbs they once were, and two consequences recur. ANASTROPHE: the preposition follows its noun instead of preceding it (Ἔρωτος ὑπ᾽ ἀργαλέω, Κύπριδος ἐκ μεγάλας). The practical rule for reading is simple — if a preposition appears to have nothing after it to govern, look immediately before it; and expect the adjective agreeing with that noun to sit on the far side, so agreement has to be traced across the preposition. TMESIS: the preverb of a compound verb stands apart from its verb (ἀνὰ … ἔχοισα = ἀνέχοισα). The tell is that the preposition's own sense does not work and the verb is left needing an object. Related, and just as common here, is APOCOPE — a preposition dropping its final vowel before a consonant (πὰρ ποσσί for παρά, ἀν᾽ ὤρεα for ἀνά) — and the fact that Greek does not repeat a preposition in a parallel member, so a bare accusative beside a prepositional phrase is usually inside it (πάσας ἀνὰ κράνας, πάντ᾽ ἄλσεα).",
      examples: [
        { readingId:"theoc1-64-118", seg:28, quote:"ἦ ῥ᾽ οὐκ αὐτὸς Ἔρωτος ὑπ᾽ ἀργαλέω ἐλυγίχθης;",
          explain:"Anastrophe: ὑπό follows Ἔρωτος, and ἀργαλέω agrees with it across the preposition. ὑπό + genitive is the agent of the passive ἐλυγίχθης — the very verb Daphnis boasted he would use on Eros two lines earlier." },
        { readingId:"theoc1-64-118", seg:26, quote:"βαρὺν δ᾽ ἀνὰ θυμὸν ἔχοισα",
          explain:"Tmesis: ἀνά is not governing θυμόν but is the prefix of ἔχοισα at the line-end. Dover's reading — she 'holds up' her anger as one raises a signal for others to see — is what makes θυμόν an object rather than a place." },
        { readingId:"theoc11-1-18", seg:9, quote:"Κύπριδος ἐκ μεγάλας τό οἱ ἥπατι πᾶξε βέλεμνον",
          explain:"Anastrophe again, with μεγάλας agreeing across ἐκ. This is also the authority-marking ἐκ of 1.140 (ἐκ Μοιρᾶν), 'at the hands of'. And note τό: Dover makes it the object of πᾶξε with ἕλκος as antecedent, which leaves βέλεμνον predicative, 'fixed it in his liver as a shaft'." }
      ]
    },

    {
      title: "The article doing everything except being an article",
      summary:
        "ὁ, ἡ, τό in this poetry has not settled into the Attic definite article, and it turns up in at least five roles. (1) As a third-person PRONOUN — τώς 'them' (1.92), τάν 'her' (1.100), ταῖσι 'them' (1.91), τόν 'him' (1.138), ὁ δέ 'but he' (11.13). If an 'article' has no noun anywhere near it, it is a pronoun. (2) As a RELATIVE — τοί = οἵ (1.118), τό = ὅ (1.126, 11.16). The way to decide between article and relative is to read one word further: an article leans on a noun, a relative introduces a finite verb. (3) With a PARTICIPLE, making the equivalent of a relative clause — ὁ τὰς βόας ὧδε νομεύων, 'the one who pastures his cows here'. Everything between article and participle belongs inside the phrase. (4) With a PREPOSITIONAL PHRASE, likewise — ὁ παρ᾽ ἁμῖν 'the one in our parts', ὁ ἐξ Αἴτνας (in crasis, ὡξ). (5) With a VOCATIVE in peremptory orders — αἱ δὲ χίμαιραι, 'you there, you she-goats'. And of course it disappears into crasis at every opportunity.",
      examples: [
        { readingId:"theoc1-64-118", seg:24, quote:"τὼς δ᾽ οὐδὲν ποτελέξαθ᾽ ὁ βουκόλος",
          explain:"τώς is the Doric accusative plural used as a pronoun, 'them' — the visitors — while ὁ βουκόλος beside it is an ordinary article. Two different jobs for the same word in one clause, with a double accusative (person + thing) after the verb of speaking." },
        { readingId:"theoc1-64-118", seg:40, quote:"καὶ ποταμοὶ τοὶ χεῖτε καλὸν κατὰ Θύβριδος ὕδωρ",
          explain:"Here τοί is a relative (= οἵ), because a finite verb follows; at 1.80 the same word is the article. And χεῖτε is 2nd person because the antecedent is a vocative — a relative clause after a vocative keeps that person." },
        { readingId:"theoc1-120-152", seg:26, quote:"αἱ δὲ χίμαιραι, οὐ μὴ σκιρτασεῖτε",
          explain:"Dover: the article with a vocative is not uncommon in peremptory orders. Note also the two different μή's — οὐ μή + future indicative is an emphatic prohibition, while the μή later in the line introduces a fear clause and takes the subjunctive ἀναστῇ." }
      ]
    },

    {
      title: "Aspect: what the tense of a participle, infinitive or perfect is telling you",
      summary:
        "Outside the indicative, Greek tense shows aspect rather than time, and in these readings the choice repeatedly carries the meaning. PARTICIPLES: an aorist participle is antecedent to the main verb, a present participle contemporaneous with it. Dover insists that θανόντα at 1.72 is 'dead', not 'dying' — the aorist jumps ahead to the death, and only at 74 do we return to the deathbed; ἀμέλξας at 1.143 is 'having milked', so milk first and pour second; ἀείδων at 11.13 is present, so the Cyclops wastes away AS he sings. INFINITIVES: the tense keeps that of the original direct thought, so a perfect infinitive reports a state (φράσδη … δεδύκειν 'that the sun HAS set and is down'; πεπλύσθαι νιν 'that it stands washed'), and a future infinitive follows verbs of boasting and promising (κατεύχεο … λυγιξεῖν). PERFECTS WITH PRESENT MEANING: a whole class of verbs forms a perfect denoting a resulting state, which is simply a present — πέφυκα 'I am by nature', ἔοικα 'I am like', and correspondingly the pluperfect λελοίπει 'had run out'. And in the indicative, the imperfect against the aorist can be the whole argument: 11.17–18 sets the single act εὗρε beside the ongoing ἄειδε, because it was by PERSISTING in song that Polyphemus found his cure.",
      examples: [
        { readingId:"theoc1-64-118", seg:7, quote:"τῆνον χὠκ δρυμοῖο λέων ἔκλαυσε θανόντα",
          explain:"Aorist participle, therefore prior: 'wept for him now that he was dead'. Dover uses the aspect to fix the chronology of the whole song — this couplet looks ahead past the wasting-away, and the narrative steps back at 74." },
        { readingId:"theoc11-1-18", seg:10, quote:"ἀλλὰ τὸ φάρμακον εὗρε … ἄειδε τοιαῦτα",
          explain:"Aorist against imperfect in one sentence: the finding is a single completed event, the singing an ongoing practice. The imperfect IS Dover's point — by going on singing he eventually found what he could have found no other way." },
        { readingId:"theoc11-1-18", seg:0, quote:"οὐδὲν ποττὸν ἔρωτα πεφύκει φάρμακον ἄλλο",
          explain:"πέφυκα is a perfect with present force — 'has grown' and so 'exists, is by nature'. Translating it as a past tense makes nonsense of a general truth. The metaphor is live too: φάρμακα are plants, so the drug that has not GROWN launches the whole medical conceit." }
      ]
    }

  ]
}
];

if (typeof module !== "undefined") module.exports = { REVIEW };

/* =========================================================================
   GRK30 reading data.
   To add a weekly reading, append one object to the READINGS array below.

   Schema:
   {
     id: "week1",                 // unique, no spaces (used for the #anchor)
     title: "Week 1 — Homer",     // shown in nav + heading
     citation: "Iliad 1.1–7",     // optional small grey subtitle
     segments: [                  // each segment = one aligned row
       {
         lines: "55",             // optional line number / range shown as superscript
         translation: "literal English ...",
         greek: [
           // one token per word; punctuation gets {w:",", punct:true, nospaceBefore:true}
           { w:"μῆνιν", lemma:"μῆνις, -ιος, ἡ", pos:"noun", parse:"acc. sg. fem.",
             gloss:"wrath, anger", note:"direct object of ἄειδε" },
         ]
       }
     ]
   }
   ========================================================================= */

const READINGS = [

  {
    id: "ody5-55-94",
    title: "Odyssey 5.55–94",
    citation: "Homer, Odyssey 5.55–94 — Hermes comes to Calypso's island",
    segments: [

      /* ---- 55 ---- */
      {
        lines: "55",
        translation: "But when indeed he had reached the island, which lay far off,",
        greek: [
          { w:"ἀλλ᾽", lemma:"ἀλλά", pos:"conjunction", parse:"(elided ἀλλά)",
            gloss:"but", note:"marks the transition back to the main narrative of Hermes' journey" },
          { w:"ὅτε", lemma:"ὅτε", pos:"conjunction (temporal)", parse:"—",
            gloss:"when", note:"introduces the temporal clause; verb ἀφίκετο" },
          { w:"δὴ", lemma:"δή", pos:"particle", parse:"—",
            gloss:"indeed, now", note:"emphasizes ὅτε — 'just when, at the very moment when'" },
          { w:"τὴν", lemma:"ὁ, ἡ, τό", pos:"article / demonstrative", parse:"acc. sg. fem.",
            gloss:"the, that", note:"agrees with νῆσον; in Homer still half-demonstrative ('that island')" },
          { w:"νῆσον", lemma:"νῆσος, -ου, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"island", note:"direct object of ἀφίκετο" },
          { w:"ἀφίκετο", lemma:"ἀφικνέομαι", pos:"verb", parse:"aorist middle indicative, 3rd singular",
            gloss:"arrive at, reach, come to", note:"main verb of the ὅτε-clause; subject is Hermes (unnamed)" },
          { w:"τηλόθ᾽", lemma:"τηλόθι", pos:"adverb", parse:"(elided τηλόθι)",
            gloss:"far off, far away", note:"predicate with ἐοῦσαν — '(the island) being far away'" },
          { w:"ἐοῦσαν", lemma:"εἰμί", pos:"verb (participle)", parse:"present active participle, fem. acc. sg. (Ionic/epic ἐών, ἐοῦσα)",
            gloss:"being", note:"agrees with νῆσον; circumstantial — 'the island, lying far off'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 56–57 ---- */
      {
        lines: "56–57",
        translation: "there, stepping from the violet-dark sea onto the mainland, he kept going, until he came to a great cave,",
        greek: [
          { w:"ἔνθ᾽", lemma:"ἔνθα", pos:"adverb", parse:"(elided ἔνθα)",
            gloss:"there, thereupon", note:"local/temporal — picks up at the point of arrival" },
          { w:"ἐκ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"out of, from", note:"governs πόντου" },
          { w:"πόντου", lemma:"πόντος, -ου, ὁ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"(open) sea", note:"object of ἐκ; modified by ἰοειδέος" },
          { w:"βὰς", lemma:"βαίνω", pos:"verb (participle)", parse:"aorist active participle, masc. nom. sg.",
            gloss:"having stepped, having gone", note:"circumstantial participle agreeing with the subject (Hermes)" },
          { w:"ἰοειδέος", lemma:"ἰοειδής, -ές", pos:"adjective", parse:"gen. sg. masc.",
            gloss:"violet-coloured, dark", note:"attributive with πόντου — the 'wine-dark / violet' sea" },
          { w:"ἤπειρόνδε", lemma:"ἤπειρος, -ου, ἡ (+ -δε)", pos:"noun + directional suffix", parse:"acc. sg. fem. + enclitic -δε (motion toward)",
            gloss:"to the mainland, landward", note:"-δε marks goal of motion: 'onto the dry land'" },
          { w:"ἤιεν", lemma:"εἶμι (ἔρχομαι)", pos:"verb", parse:"imperfect active indicative, 3rd singular (epic)",
            gloss:"was going, kept going", note:"main verb; iterative/durative imperfect of the walk inland" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὄφρα", lemma:"ὄφρα", pos:"conjunction", parse:"+ indicative",
            gloss:"until", note:"introduces the temporal clause with ἵκετο" },
          { w:"μέγα", lemma:"μέγας, μεγάλη, μέγα", pos:"adjective", parse:"neut. acc. sg.",
            gloss:"great, big", note:"attributive with σπέος" },
          { w:"σπέος", lemma:"σπέος, -ους, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"cave, grotto", note:"object of ἵκετο" },
          { w:"ἵκετο", lemma:"ἱκνέομαι", pos:"verb", parse:"aorist middle indicative, 3rd singular",
            gloss:"come to, reach, arrive at", note:"verb of the ὄφρα-clause" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 57–58 ---- */
      {
        lines: "57–58",
        translation: "in which the fair-haired nymph was dwelling;",
        greek: [
          { w:"τῷ", lemma:"ὅς, ἥ, ὅ / ὁ, ἡ, τό", pos:"relative / demonstrative", parse:"dat. sg. neut.",
            gloss:"in which", note:"locatival dative with ἔνι, referring back to σπέος" },
          { w:"ἔνι", lemma:"ἐν (ἔνι)", pos:"preposition (anastrophe)", parse:"+ dative",
            gloss:"in, within", note:"= ἐν; with τῷ = 'in which'. Accent thrown back (anastrophe)" },
          { w:"νύμφη", lemma:"νύμφη, -ης, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"nymph", note:"subject of ναῖεν — Calypso" },
          { w:"ναῖεν", lemma:"ναίω", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"dwell, live, inhabit", note:"durative imperfect" },
          { w:"ἐυπλόκαμος", lemma:"ἐυπλόκαμος, -ον", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"with beautiful braids, fair-haired", note:"attributive with νύμφη; conventional epithet" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 58 ---- */
      {
        lines: "58",
        translation: "and her he found within.",
        greek: [
          { w:"τὴν", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"acc. sg. fem.",
            gloss:"her", note:"object of τέτμεν; resumptive 'her' (the nymph)" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and, but", note:"connective" },
          { w:"ἔνδοθι", lemma:"ἔνδοθι", pos:"adverb", parse:"—",
            gloss:"within, inside", note:"locative adverb with ἐοῦσαν" },
          { w:"τέτμεν", lemma:"τέτμον (root aorist, no present)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"find, come upon, meet with", note:"main verb; subject Hermes" },
          { w:"ἐοῦσαν", lemma:"εἰμί", pos:"verb (participle)", parse:"present active participle, fem. acc. sg.",
            gloss:"being", note:"supplementary participle with τέτμεν — 'found her being inside'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 59 ---- */
      {
        lines: "59",
        translation: "A great fire was burning on the hearth,",
        greek: [
          { w:"πῦρ", lemma:"πῦρ, πυρός, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"fire", note:"subject of καίετο" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by τηλόσε δ᾽ ὀδμή in the next clause" },
          { w:"ἐπ᾽", lemma:"ἐπί", pos:"preposition", parse:"(elided ἐπί) + genitive (here -φι form)",
            gloss:"on, upon", note:"governs ἐσχαρόφιν" },
          { w:"ἐσχαρόφιν", lemma:"ἐσχάρα, -ας, ἡ (+ -φι)", pos:"noun", parse:"loc./instr. -φι ending (= ἐσχάρας/ἐσχάρᾳ)",
            gloss:"on the hearth", note:"old -φι case-form, here locatival: 'on the hearth'" },
          { w:"μέγα", lemma:"μέγας, μεγάλη, μέγα", pos:"adjective", parse:"neut. nom. sg.",
            gloss:"great, large", note:"attributive with πῦρ" },
          { w:"καίετο", lemma:"καίω", pos:"verb", parse:"imperfect middle/passive indicative, 3rd singular",
            gloss:"burn, be ablaze", note:"intransitive middle — 'was burning'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 59–61 ---- */
      {
        lines: "59–61",
        translation: "and far off the fragrance of split cedar and of citron-wood, as they burned, was wafting over the island;",
        greek: [
          { w:"τηλόσε", lemma:"τηλόσε", pos:"adverb", parse:"—",
            gloss:"far, to a distance, afar", note:"adverb of extent with ὀδώδει" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"answers μέν of line 59" },
          { w:"ὀδμὴ", lemma:"ὀδμή, -ῆς, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"smell, scent, fragrance", note:"subject of ὀδώδει" },
          { w:"κέδρου", lemma:"κέδρος, -ου, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"cedar(-wood)", note:"genitive of source with ὀδμή; modified by εὐκεάτοιο" },
          { w:"τ᾽", lemma:"τε", pos:"particle (conjunction)", parse:"(elided τε)",
            gloss:"and", note:"τε ... τε joins κέδρου and θύου" },
          { w:"εὐκεάτοιο", lemma:"εὐκέατος, -ον", pos:"adjective", parse:"gen. sg. fem. (epic -οιο)",
            gloss:"easy to split, well-cleft", note:"attributive with κέδρου" },
          { w:"θύου", lemma:"θύον, -ου, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"citron-wood, fragrant (thyine) wood", note:"second genitive of source with ὀδμή" },
          { w:"τ᾽", lemma:"τε", pos:"particle (conjunction)", parse:"(elided τε)",
            gloss:"and", note:"second member of τε ... τε" },
          { w:"ἀνὰ", lemma:"ἀνά", pos:"preposition", parse:"+ accusative",
            gloss:"up, over, throughout", note:"governs νῆσον — 'all over the island'" },
          { w:"νῆσον", lemma:"νῆσος, -ου, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"island", note:"object of ἀνά" },
          { w:"ὀδώδει", lemma:"ὄζω", pos:"verb", parse:"pluperfect active indicative, 3rd singular (with imperfect force)",
            gloss:"smell, give off a scent", note:"intransitive perfect system: 'a scent hung / was spreading'" },
          { w:"δαιομένων", lemma:"δαίω", pos:"verb (participle)", parse:"present middle/passive participle, gen. pl.",
            gloss:"being kindled, burning", note:"genitive agreeing with κέδρου/θύου — 'as they burned'" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 61–62 ---- */
      {
        lines: "61–62",
        translation: "and she within, singing with a beautiful voice as she plied the loom, was weaving with a golden shuttle.",
        greek: [
          { w:"ἡ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. sg. fem.",
            gloss:"she", note:"subject — Calypso, contrasted (δ᾽) with the scene around her" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and, but", note:"connective" },
          { w:"ἔνδον", lemma:"ἔνδον", pos:"adverb", parse:"—",
            gloss:"within, inside", note:"locative — inside the cave" },
          { w:"ἀοιδιάουσ᾽", lemma:"ἀοιδιάω", pos:"verb (participle)", parse:"present active participle, fem. nom. sg. (elided -ουσα)",
            gloss:"sing", note:"circumstantial participle with the subject 'she'" },
          { w:"ὀπὶ", lemma:"ὄψ, ὀπός, ἡ", pos:"noun", parse:"dat. sg. fem.",
            gloss:"voice", note:"dative of manner/means with ἀοιδιάουσ᾽ — 'with her voice'" },
          { w:"καλῇ", lemma:"καλός, -ή, -όν", pos:"adjective", parse:"dat. sg. fem.",
            gloss:"beautiful, fair", note:"attributive with ὀπί" },
          { w:"ἱστὸν", lemma:"ἱστός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"loom, warp (web)", note:"object of ἐποιχομένη" },
          { w:"ἐποιχομένη", lemma:"ἐποίχομαι", pos:"verb (participle)", parse:"present middle participle, fem. nom. sg.",
            gloss:"go to and fro at, ply", note:"circumstantial — walking back and forth before the upright loom" },
          { w:"χρυσείῃ", lemma:"χρύσεος, -η, -ον", pos:"adjective", parse:"dat. sg. fem. (epic χρυσείη)",
            gloss:"golden", note:"attributive with κερκίδι" },
          { w:"κερκίδ᾽", lemma:"κερκίς, -ίδος, ἡ", pos:"noun", parse:"dat. sg. fem. (= κερκίδι, elided)",
            gloss:"shuttle, weaving-pin", note:"dative of instrument with ὕφαινεν (agrees with χρυσείῃ)" },
          { w:"ὕφαινεν", lemma:"ὑφαίνω", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"weave", note:"main verb of the clause" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 63 ---- */
      {
        lines: "63",
        translation: "And around the cave a wood had grown up, luxuriant —",
        greek: [
          { w:"ὕλη", lemma:"ὕλη, -ης, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"wood, forest, woodland", note:"subject of πεφύκει" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective, beginning the description of the setting" },
          { w:"σπέος", lemma:"σπέος, -ους, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"cave", note:"object of ἀμφί" },
          { w:"ἀμφὶ", lemma:"ἀμφί", pos:"preposition (anastrophe)", parse:"+ accusative",
            gloss:"around, about", note:"governs σπέος; accent thrown back as it follows its noun" },
          { w:"πεφύκει", lemma:"φύω", pos:"verb", parse:"pluperfect active indicative, 3rd singular (intransitive)",
            gloss:"grow, spring up", note:"intransitive perfect system: 'had grown / grew'" },
          { w:"τηλεθόωσα", lemma:"τηλεθάω", pos:"verb (participle)", parse:"present active participle, fem. nom. sg.",
            gloss:"flourish, bloom, be luxuriant", note:"agrees with ὕλη" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 64 ---- */
      {
        lines: "64",
        translation: "alder and black poplar and fragrant cypress.",
        greek: [
          { w:"κλήθρη", lemma:"κλήθρη, -ης, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"alder", note:"in apposition to / specifying ὕλη" },
          { w:"τ᾽", lemma:"τε", pos:"particle (conjunction)", parse:"(elided τε)",
            gloss:"and", note:"τε ... τε ... καί joins the three trees" },
          { w:"αἴγειρός", lemma:"αἴγειρος, -ου, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"black poplar", note:"second of the listed trees" },
          { w:"τε", lemma:"τε", pos:"particle (conjunction)", parse:"—",
            gloss:"and", note:"connects in the τε-series" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the final member" },
          { w:"εὐώδης", lemma:"εὐώδης, -ες", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"fragrant, sweet-smelling", note:"attributive with κυπάρισσος" },
          { w:"κυπάρισσος", lemma:"κυπάρισσος, -ου, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"cypress", note:"third of the trees" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 65 ---- */
      {
        lines: "65",
        translation: "And there long-winged birds roosted,",
        greek: [
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"there", note:"locative — in that woodland" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"τ᾽", lemma:"τε", pos:"particle", parse:"(elided τε)",
            gloss:"(generalizing τε)", note:"epic 'τε' marking a general/permanent description; not translated" },
          { w:"ὄρνιθες", lemma:"ὄρνις, ὄρνιθος, ὁ/ἡ", pos:"noun", parse:"nom. pl.",
            gloss:"birds", note:"subject of εὐνάζοντο" },
          { w:"τανυσίπτεροι", lemma:"τανυσίπτερος, -ον", pos:"adjective", parse:"nom. pl.",
            gloss:"long-winged, with outspread wings", note:"attributive with ὄρνιθες" },
          { w:"εὐνάζοντο", lemma:"εὐνάζω", pos:"verb", parse:"imperfect middle/passive indicative, 3rd plural",
            gloss:"roost, settle to rest, make one's bed", note:"middle: 'were roosting'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 66–67 ---- */
      {
        lines: "66–67",
        translation: "owls and hawks and long-tongued sea-crows,",
        greek: [
          { w:"σκῶπές", lemma:"σκώψ, σκωπός, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"owls, scops-owls", note:"in apposition to ὄρνιθες" },
          { w:"τ᾽", lemma:"τε", pos:"particle (conjunction)", parse:"(elided τε)",
            gloss:"and", note:"τε ... τε ... τε links the birds" },
          { w:"ἴρηκές", lemma:"ἴρηξ, ἴρηκος, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"hawks, falcons", note:"second in the list" },
          { w:"τε", lemma:"τε", pos:"particle (conjunction)", parse:"—",
            gloss:"and", note:"connective in the τε-series" },
          { w:"τανύγλωσσοί", lemma:"τανύγλωσσος, -ον", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"long-tongued", note:"attributive with κορῶναι" },
          { w:"τε", lemma:"τε", pos:"particle (conjunction)", parse:"—",
            gloss:"and", note:"connective" },
          { w:"κορῶναι", lemma:"κορώνη, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"crows, shearwaters (sea-crows)", note:"third bird; modified by εἰνάλιαι in 67" },
          { w:"εἰνάλιαι", lemma:"εἰνάλιος, -η, -ον (epic = ἐνάλιος)", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"of the sea, sea-going", note:"attributive with κορῶναι — marine crows / cormorants" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 67 ---- */
      {
        lines: "67",
        translation: "to whom the works of the sea are a care.",
        greek: [
          { w:"τῇσίν", lemma:"ὅς, ἥ, ὅ", pos:"relative pronoun", parse:"dat. pl. fem. (epic = αἷς)",
            gloss:"to whom, for whom", note:"dative with μέμηλεν, antecedent κορῶναι" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"(generalizing τε)", note:"epic τε in a general relative clause; not translated" },
          { w:"θαλάσσια", lemma:"θαλάσσιος, -η, -ον", pos:"adjective", parse:"neut. nom. pl.",
            gloss:"of the sea, marine", note:"attributive with ἔργα" },
          { w:"ἔργα", lemma:"ἔργον, -ου, τό", pos:"noun", parse:"nom. pl. neut.",
            gloss:"works, business, tasks", note:"subject of μέμηλεν (neut. pl. + sg. verb)" },
          { w:"μέμηλεν", lemma:"μέλω", pos:"verb", parse:"perfect active indicative, 3rd singular (with present force)",
            gloss:"be a care, be an object of concern", note:"impersonal-type construction: 'the sea's works are their care'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 68–69 ---- */
      {
        lines: "68–69",
        translation: "And right there, trained around the hollow cave, a cultivated vine in its prime was spread out, and it teemed with grape-clusters.",
        greek: [
          { w:"ἡ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. sg. fem.",
            gloss:"it (she)", note:"forward-pointing subject, defined as ἡμερίς in 69" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"αὐτοῦ", lemma:"αὐτοῦ", pos:"adverb", parse:"—",
            gloss:"there, in that very spot", note:"locative adverb (not the pronoun here)" },
          { w:"τετάνυστο", lemma:"τανύω", pos:"verb", parse:"pluperfect middle/passive indicative, 3rd singular",
            gloss:"stretch out, train, spread", note:"passive — '(a vine) had been trained / was spread'" },
          { w:"περὶ", lemma:"περί", pos:"preposition (anastrophe)", parse:"+ genitive",
            gloss:"around", note:"governs σπείους; accent thrown back" },
          { w:"σπείους", lemma:"σπέος, -ους, τό", pos:"noun", parse:"gen. sg. neut. (epic σπείους)",
            gloss:"cave", note:"object of περί" },
          { w:"γλαφυροῖο", lemma:"γλαφυρός, -ή, -όν", pos:"adjective", parse:"gen. sg. neut. (epic -οιο)",
            gloss:"hollow, hollowed-out", note:"attributive with σπείους" },
          { w:"ἡμερὶς", lemma:"ἡμερίς, -ίδος, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"cultivated (garden) vine", note:"the real subject, in apposition to ἡ" },
          { w:"ἡβώωσα", lemma:"ἡβάω", pos:"verb (participle)", parse:"present active participle, fem. nom. sg. (epic ἡβώωσα)",
            gloss:"be in one's prime, be vigorous", note:"agrees with ἡμερίς — 'lusty, full of growth'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τεθήλει", lemma:"θάλλω", pos:"verb", parse:"pluperfect active indicative, 3rd singular (with imperfect force)",
            gloss:"bloom, flourish, teem", note:"intransitive perfect system; subject ἡμερίς" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"σταφυλῇσι", lemma:"σταφυλή, -ῆς, ἡ", pos:"noun", parse:"dat. pl. fem. (epic -ῇσι)",
            gloss:"bunch/cluster of grapes", note:"dative of respect/means with τεθήλει — 'teemed with clusters'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 70–71 ---- */
      {
        lines: "70–71",
        translation: "And four springs in a row flowed with clear water, close to one another, each turned to flow a different way.",
        greek: [
          { w:"κρῆναι", lemma:"κρήνη, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"springs, fountains", note:"subject of ῥέον" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἑξείης", lemma:"ἑξείης (epic = ἑξῆς)", pos:"adverb", parse:"—",
            gloss:"in a row, one after another", note:"adverb with the springs' arrangement" },
          { w:"πίσυρες", lemma:"πίσυρες (epic/Aeolic = τέσσαρες)", pos:"numeral adjective", parse:"nom. pl. fem.",
            gloss:"four", note:"attributive with κρῆναι" },
          { w:"ῥέον", lemma:"ῥέω", pos:"verb", parse:"imperfect active indicative, 3rd plural",
            gloss:"flow", note:"main verb" },
          { w:"ὕδατι", lemma:"ὕδωρ, ὕδατος, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"water", note:"dative of means with ῥέον" },
          { w:"λευκῷ", lemma:"λευκός, -ή, -όν", pos:"adjective", parse:"dat. sg. neut.",
            gloss:"clear, bright, white", note:"attributive with ὕδατι" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πλησίαι", lemma:"πλησίος, -η, -ον", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"near, close", note:"predicative with κρῆναι; governs ἀλλήλων" },
          { w:"ἀλλήλων", lemma:"ἀλλήλων", pos:"reciprocal pronoun", parse:"gen. pl.",
            gloss:"of one another", note:"genitive with πλησίαι — 'near each other'" },
          { w:"τετραμμέναι", lemma:"τρέπω", pos:"verb (participle)", parse:"perfect middle/passive participle, fem. nom. pl.",
            gloss:"turned", note:"agrees with κρῆναι — turned (to flow) in different directions" },
          { w:"ἄλλυδις", lemma:"ἄλλυδις", pos:"adverb", parse:"—",
            gloss:"in another direction, elsewhere", note:"ἄλλυδις ἄλλη = 'one one way, another another'" },
          { w:"ἄλλη", lemma:"ἄλλῃ", pos:"adverb", parse:"—",
            gloss:"in another way/direction", note:"completes the distributive ἄλλυδις ἄλλη" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 72–73 ---- */
      {
        lines: "72–73",
        translation: "And round about soft meadows of violet and parsley were blooming.",
        greek: [
          { w:"ἀμφὶ", lemma:"ἀμφί", pos:"adverb", parse:"—",
            gloss:"round about, on both sides", note:"adverbial here (no object) — 'all around'" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"λειμῶνες", lemma:"λειμών, -ῶνος, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"meadows", note:"subject of θήλεον" },
          { w:"μαλακοὶ", lemma:"μαλακός, -ή, -όν", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"soft", note:"attributive with λειμῶνες" },
          { w:"ἴου", lemma:"ἴον, -ου, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"violet", note:"genitive of material/content with λειμῶνες" },
          { w:"ἠδὲ", lemma:"ἠδέ", pos:"conjunction", parse:"—",
            gloss:"and", note:"epic 'and', joining ἴου and σελίνου" },
          { w:"σελίνου", lemma:"σέλινον, -ου, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"parsley, wild celery", note:"second genitive of content" },
          { w:"θήλεον", lemma:"θηλέω", pos:"verb", parse:"imperfect active indicative, 3rd plural (epic)",
            gloss:"bloom, flourish, be in bud", note:"main verb; subject λειμῶνες" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 73–74 ---- */
      {
        lines: "73–74",
        translation: "There even an immortal, coming upon it, would gaze in wonder at the sight and be delighted in his heart.",
        greek: [
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"there", note:"locative — at that spot" },
          { w:"κ᾽", lemma:"κε(ν)", pos:"modal particle", parse:"(elided κε) = ἄν",
            gloss:"(would)", note:"with the optatives θηήσαιτο / τερφθείη — potential optative" },
          { w:"ἔπειτα", lemma:"ἔπειτα", pos:"adverb", parse:"—",
            gloss:"then, in that case", note:"resumes after the condition implied by ἐπελθών" },
          { w:"καὶ", lemma:"καί", pos:"adverb (intensive)", parse:"—",
            gloss:"even", note:"καὶ ... περ = 'even though' with ἀθάνατος" },
          { w:"ἀθάνατός", lemma:"ἀθάνατος, -ον", pos:"adjective (substantive)", parse:"nom. sg. masc.",
            gloss:"immortal one, a god", note:"subject of the optatives — 'even a god'" },
          { w:"περ", lemma:"περ", pos:"particle", parse:"—",
            gloss:"even, although", note:"concessive with καί and ἐπελθών — 'immortal though he be'" },
          { w:"ἐπελθὼν", lemma:"ἐπέρχομαι", pos:"verb (participle)", parse:"aorist active participle, masc. nom. sg.",
            gloss:"come upon, approach", note:"circumstantial/conditional — 'were he to come upon it'" },
          { w:"θηήσαιτο", lemma:"θηέομαι (θεάομαι)", pos:"verb", parse:"aorist middle optative, 3rd singular",
            gloss:"gaze in wonder, marvel at", note:"potential optative with κε" },
          { w:"ἰδὼν", lemma:"ὁράω", pos:"verb (participle)", parse:"aorist active participle, masc. nom. sg.",
            gloss:"see, behold", note:"circumstantial — 'on seeing (it)'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the two optatives" },
          { w:"τερφθείη", lemma:"τέρπω", pos:"verb", parse:"aorist passive optative, 3rd singular",
            gloss:"be delighted, take delight", note:"second potential optative with κε" },
          { w:"φρεσὶν", lemma:"φρήν, φρενός, ἡ", pos:"noun", parse:"dat. pl. fem.",
            gloss:"heart, mind", note:"dative of place/respect — 'in his heart'" },
          { w:"ᾗσιν", lemma:"ἑός, -ή, -όν", pos:"possessive adjective", parse:"dat. pl. fem. (epic ᾗσι)",
            gloss:"his (own)", note:"agrees with φρεσίν" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 75 ---- */
      {
        lines: "75",
        translation: "There the guide Argeïphontes stood and gazed in wonder.",
        greek: [
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"there", note:"locative" },
          { w:"στὰς", lemma:"ἵστημι", pos:"verb (participle)", parse:"aorist active participle, masc. nom. sg. (intransitive)",
            gloss:"stand, halt, take one's stand", note:"circumstantial — 'standing there'" },
          { w:"θηεῖτο", lemma:"θηέομαι (θεάομαι)", pos:"verb", parse:"imperfect middle indicative, 3rd singular",
            gloss:"gaze at, marvel at", note:"main verb; durative imperfect" },
          { w:"διάκτορος", lemma:"διάκτορος, -ου, ὁ", pos:"noun / epithet", parse:"nom. sg. masc.",
            gloss:"the guide, messenger", note:"standing epithet of Hermes, in apposition to ἀργεϊφόντης" },
          { w:"ἀργεϊφόντης", lemma:"ἀργεϊφόντης, -ου, ὁ", pos:"proper noun / epithet", parse:"nom. sg. masc.",
            gloss:"Argeïphontes, slayer of Argus", note:"epithet of Hermes; subject of θηεῖτο" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 76 ---- */
      {
        lines: "76",
        translation: "But when indeed he had marvelled at everything in his heart,",
        greek: [
          { w:"αὐτὰρ", lemma:"αὐτάρ", pos:"conjunction", parse:"—",
            gloss:"but, then", note:"strong adversative/transitional connective" },
          { w:"ἐπεὶ", lemma:"ἐπεί", pos:"conjunction (temporal)", parse:"—",
            gloss:"when, after", note:"introduces the temporal clause" },
          { w:"δὴ", lemma:"δή", pos:"particle", parse:"—",
            gloss:"indeed, now", note:"emphasizes ἐπεί" },
          { w:"πάντα", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective (substantive)", parse:"neut. acc. pl.",
            gloss:"all things, everything", note:"object of θηήσατο" },
          { w:"ἑῷ", lemma:"ἑός, -ή, -όν", pos:"possessive adjective", parse:"dat. sg. masc.",
            gloss:"his (own)", note:"agrees with θυμῷ" },
          { w:"θηήσατο", lemma:"θηέομαι (θεάομαι)", pos:"verb", parse:"aorist middle indicative, 3rd singular",
            gloss:"gaze at, marvel at", note:"verb of the ἐπεί-clause" },
          { w:"θυμῷ", lemma:"θυμός, -οῦ, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"heart, spirit", note:"dative of place/means — 'in his heart'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 77 ---- */
      {
        lines: "77",
        translation: "at once then he went into the broad cave.",
        greek: [
          { w:"αὐτίκ᾽", lemma:"αὐτίκα", pos:"adverb", parse:"(elided αὐτίκα)",
            gloss:"at once, immediately", note:"temporal adverb" },
          { w:"ἄρ᾽", lemma:"ἄρα", pos:"particle", parse:"(elided ἄρα)",
            gloss:"then, so", note:"marks the natural next step in the narrative" },
          { w:"εἰς", lemma:"εἰς", pos:"preposition", parse:"+ accusative",
            gloss:"into", note:"governs σπέος" },
          { w:"εὐρὺ", lemma:"εὐρύς, -εῖα, -ύ", pos:"adjective", parse:"neut. acc. sg.",
            gloss:"wide, broad", note:"attributive with σπέος" },
          { w:"σπέος", lemma:"σπέος, -ους, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"cave", note:"object of εἰς" },
          { w:"ἤλυθεν", lemma:"ἔρχομαι", pos:"verb", parse:"aorist active indicative, 3rd singular (epic ἤλυθε)",
            gloss:"go, come", note:"main verb; subject Hermes" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 77–78 ---- */
      {
        lines: "77–78",
        translation: "Nor did Calypso, bright among goddesses, fail to recognize him face to face when she saw him;",
        greek: [
          { w:"οὐδέ", lemma:"οὐδέ", pos:"conjunction", parse:"—",
            gloss:"and not, nor", note:"negates ἠγνοίησεν; litotes — 'she did not fail to know' = she knew at once" },
          { w:"μιν", lemma:"ἕ (μιν)", pos:"personal pronoun", parse:"acc. sg.",
            gloss:"him", note:"object of ἠγνοίησεν — Hermes" },
          { w:"ἄντην", lemma:"ἄντην", pos:"adverb", parse:"—",
            gloss:"face to face, in person", note:"adverb with ἰδοῦσα/ἠγνοίησεν" },
          { w:"ἠγνοίησεν", lemma:"ἀγνοιέω (ἀγνοέω)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"fail to recognize, not know", note:"main verb, negated by οὐδέ" },
          { w:"ἰδοῦσα", lemma:"ὁράω", pos:"verb (participle)", parse:"aorist active participle, fem. nom. sg.",
            gloss:"see, behold", note:"circumstantial with Καλυψώ — 'on seeing him'" },
          { w:"Καλυψώ", lemma:"Καλυψώ, -οῦς, ἡ", pos:"proper noun", parse:"nom. sg. fem.",
            gloss:"Calypso", note:"subject of ἠγνοίησεν" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"δῖα", lemma:"δῖος, -α, -ον", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"bright, divine, noble", note:"attributive with Καλυψώ; governs θεάων" },
          { w:"θεάων", lemma:"θεά, -ᾶς, ἡ", pos:"noun", parse:"gen. pl. fem. (epic -άων)",
            gloss:"goddesses", note:"partitive genitive — 'divine among goddesses'" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 79–80 ---- */
      {
        lines: "79–80",
        translation: "for the immortal gods are not unknown to one another, not even if one dwells in a home far away.",
        greek: [
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negates ἀγνῶτες ... πέλονται" },
          { w:"γάρ", lemma:"γάρ", pos:"conjunction", parse:"—",
            gloss:"for", note:"gives the reason she knew him" },
          { w:"τ᾽", lemma:"τε", pos:"particle", parse:"(elided τε)",
            gloss:"(generalizing τε)", note:"epic τε in a general statement; not translated" },
          { w:"ἀγνῶτες", lemma:"ἀγνώς, ἀγνῶτος", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"unknown, unrecognized", note:"predicate with πέλονται" },
          { w:"θεοὶ", lemma:"θεός, -οῦ, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"gods", note:"subject of πέλονται" },
          { w:"ἀλλήλοισι", lemma:"ἀλλήλων", pos:"reciprocal pronoun", parse:"dat. pl. masc. (epic -οισι)",
            gloss:"to one another", note:"dative with ἀγνῶτες — 'unknown to each other'" },
          { w:"πέλονται", lemma:"πέλομαι", pos:"verb", parse:"present middle indicative, 3rd plural",
            gloss:"be, become (= εἰσί)", note:"copula with predicate ἀγνῶτες" },
          { w:"ἀθάνατοι", lemma:"ἀθάνατος, -ον", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"immortal", note:"in apposition to θεοί — 'the gods, immortal as they are'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οὐδ᾽", lemma:"οὐδέ", pos:"conjunction", parse:"(elided οὐδέ)",
            gloss:"not even", note:"introduces the concessive condition" },
          { w:"εἴ", lemma:"εἰ", pos:"conjunction", parse:"+ indicative",
            gloss:"if", note:"with ναίει — 'even if someone dwells...'" },
          { w:"τις", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. masc.",
            gloss:"someone, anyone", note:"subject of ναίει" },
          { w:"ἀπόπροθι", lemma:"ἀπόπροθι", pos:"adverb", parse:"—",
            gloss:"far away, at a distance", note:"adverb with ναίει" },
          { w:"δώματα", lemma:"δῶμα, -ατος, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"house, dwelling, halls", note:"object of ναίει (acc. of place inhabited)" },
          { w:"ναίει", lemma:"ναίω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"dwell, live, inhabit", note:"verb of the εἰ-clause" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 81 ---- */
      {
        lines: "81",
        translation: "But great-hearted Odysseus he did not find within,",
        greek: [
          { w:"οὐδ᾽", lemma:"οὐδέ", pos:"conjunction", parse:"(elided οὐδέ)",
            gloss:"but ... not, nor", note:"negates ἔτετμεν; returns to the narrative" },
          { w:"ἄρ᾽", lemma:"ἄρα", pos:"particle", parse:"(elided ἄρα)",
            gloss:"then, as it turned out", note:"marks the turn of events" },
          { w:"Ὀδυσσῆα", lemma:"Ὀδυσσεύς, -ῆος, ὁ", pos:"proper noun", parse:"acc. sg. masc. (epic -ῆα)",
            gloss:"Odysseus", note:"object of ἔτετμεν" },
          { w:"μεγαλήτορα", lemma:"μεγαλήτωρ, -ορος", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"great-hearted", note:"attributive with Ὀδυσσῆα" },
          { w:"ἔνδον", lemma:"ἔνδον", pos:"adverb", parse:"—",
            gloss:"within, inside", note:"locative — inside the cave" },
          { w:"ἔτετμεν", lemma:"τέτμον (root aorist, no present)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"find, come upon", note:"main verb; subject Hermes" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 82 ---- */
      {
        lines: "82",
        translation: "but he was sitting weeping on the shore, where before too,",
        greek: [
          { w:"ἀλλ᾽", lemma:"ἀλλά", pos:"conjunction", parse:"(elided ἀλλά)",
            gloss:"but", note:"adversative — where Odysseus actually was" },
          { w:"ὅ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"he", note:"subject — Odysseus" },
          { w:"γ᾽", lemma:"γε", pos:"particle", parse:"(elided γε)",
            gloss:"at least, indeed", note:"emphasizes ὅ — 'he for his part'" },
          { w:"ἐπ᾽", lemma:"ἐπί", pos:"preposition", parse:"(elided ἐπί) + genitive",
            gloss:"on, upon", note:"governs ἀκτῆς" },
          { w:"ἀκτῆς", lemma:"ἀκτή, -ῆς, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"shore, headland, beach", note:"object of ἐπί" },
          { w:"κλαῖε", lemma:"κλαίω", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"weep, lament", note:"main verb; durative imperfect" },
          { w:"καθήμενος", lemma:"κάθημαι", pos:"verb (participle)", parse:"present middle participle, masc. nom. sg.",
            gloss:"sit", note:"circumstantial with the subject — 'sitting'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb (relative)", parse:"—",
            gloss:"where", note:"relative adverb of place" },
          { w:"πάρος", lemma:"πάρος", pos:"adverb", parse:"—",
            gloss:"before, formerly", note:"temporal adverb — as he had done before" },
          { w:"περ", lemma:"περ", pos:"particle", parse:"—",
            gloss:"even, just", note:"intensive — 'just as before too'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 83 ---- */
      {
        lines: "83",
        translation: "rending his heart with tears and groans and griefs.",
        greek: [
          { w:"δάκρυσι", lemma:"δάκρυ, -υος, τό", pos:"noun", parse:"dat. pl. neut.",
            gloss:"tears", note:"dative of means with ἐρέχθων" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the three datives" },
          { w:"στοναχῇσι", lemma:"στοναχή, -ῆς, ἡ", pos:"noun", parse:"dat. pl. fem. (epic -ῇσι)",
            gloss:"groans, lamentations", note:"dative of means" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the datives" },
          { w:"ἄλγεσι", lemma:"ἄλγος, -εος, τό", pos:"noun", parse:"dat. pl. neut.",
            gloss:"pains, griefs", note:"dative of means" },
          { w:"θυμὸν", lemma:"θυμός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"heart, spirit", note:"object of ἐρέχθων" },
          { w:"ἐρέχθων", lemma:"ἐρέχθω", pos:"verb (participle)", parse:"present active participle, masc. nom. sg.",
            gloss:"rend, tear, break", note:"circumstantial with the subject — 'rending his heart'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 84 ---- */
      {
        lines: "84",
        translation: "He kept gazing out over the barren sea, shedding tears.",
        greek: [
          { w:"πόντον", lemma:"πόντος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"(open) sea", note:"object of ἐπί" },
          { w:"ἐπ᾽", lemma:"ἐπί", pos:"preposition (anastrophe)", parse:"(elided ἐπί) + accusative",
            gloss:"over, on, toward", note:"governs πόντον; accent thrown back, following its noun" },
          { w:"ἀτρύγετον", lemma:"ἀτρύγετος, -ον", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"barren, unharvested, restless", note:"standing epithet of the sea, with πόντον" },
          { w:"δερκέσκετο", lemma:"δέρκομαι", pos:"verb", parse:"imperfect middle indicative, 3rd singular (iterative -σκ-)",
            gloss:"gaze, look", note:"iterative imperfect — 'kept gazing, used to look'" },
          { w:"δάκρυα", lemma:"δάκρυ, -υος, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"tears", note:"object of λείβων" },
          { w:"λείβων", lemma:"λείβω", pos:"verb (participle)", parse:"present active participle, masc. nom. sg.",
            gloss:"shed, pour, let fall", note:"circumstantial — 'shedding tears'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 85–86 ---- */
      {
        lines: "85–86",
        translation: "Calypso, bright among goddesses, questioned Hermes, having seated him on a shining, glistening chair:",
        greek: [
          { w:"Ἑρμείαν", lemma:"Ἑρμείας, -αο, ὁ (epic = Ἑρμῆς)", pos:"proper noun", parse:"acc. sg. masc.",
            gloss:"Hermes", note:"object of ἐρέεινε" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective, shifting back to Calypso" },
          { w:"ἐρέεινε", lemma:"ἐρεείνω", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"ask, question, inquire of", note:"main verb" },
          { w:"Καλυψώ", lemma:"Καλυψώ, -οῦς, ἡ", pos:"proper noun", parse:"nom. sg. fem.",
            gloss:"Calypso", note:"subject of ἐρέεινε" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"δῖα", lemma:"δῖος, -α, -ον", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"bright, divine", note:"attributive with Καλυψώ; governs θεάων" },
          { w:"θεάων", lemma:"θεά, -ᾶς, ἡ", pos:"noun", parse:"gen. pl. fem. (epic -άων)",
            gloss:"goddesses", note:"partitive genitive — 'divine among goddesses'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"on, in", note:"governs θρόνῳ" },
          { w:"θρόνῳ", lemma:"θρόνος, -ου, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"chair, seat, throne", note:"object of ἐν" },
          { w:"ἱδρύσασα", lemma:"ἱδρύω", pos:"verb (participle)", parse:"aorist active participle, fem. nom. sg.",
            gloss:"seat, make to sit", note:"circumstantial with Καλυψώ — 'having seated him'" },
          { w:"φαεινῷ", lemma:"φαεινός, -ή, -όν", pos:"adjective", parse:"dat. sg. masc.",
            gloss:"shining, bright", note:"attributive with θρόνῳ" },
          { w:"σιγαλόεντι", lemma:"σιγαλόεις, -εσσα, -εν", pos:"adjective", parse:"dat. sg. masc.",
            gloss:"glossy, glistening, shining", note:"second attributive with θρόνῳ" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 87–88 ---- */
      {
        lines: "87–88",
        translation: "“Why ever have you come to me, Hermes of the golden wand, honoured and dear though you are?",
        greek: [
          { w:"“", punct:true, nospaceBefore:true },
          { w:"τίπτε", lemma:"τίπτε (= τί ποτε)", pos:"interrogative adverb", parse:"—",
            gloss:"why ever, why now", note:"introduces the direct question with εἰλήλουθας" },
          { w:"μοι", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"to me", note:"ethical/goal dative with εἰλήλουθας" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Ἑρμεία", lemma:"Ἑρμείας, -αο, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Hermes", note:"vocative — addressee" },
          { w:"χρυσόρραπι", lemma:"χρυσόρραπις, -ιος", pos:"adjective (epithet)", parse:"voc. sg. masc.",
            gloss:"of the golden wand", note:"vocative epithet agreeing with Ἑρμεία" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"εἰλήλουθας", lemma:"ἔρχομαι", pos:"verb", parse:"perfect active indicative, 2nd singular (epic = ἐλήλυθας)",
            gloss:"have come", note:"main verb of the question" },
          { w:"αἰδοῖός", lemma:"αἰδοῖος, -η, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"honoured, revered, respected", note:"predicative with 'you' (subject of εἰλήλουθας)" },
          { w:"τε", lemma:"τε", pos:"particle (conjunction)", parse:"—",
            gloss:"both, and", note:"τε ... τε joins αἰδοῖος and φίλος" },
          { w:"φίλος", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"dear, beloved", note:"second predicative adjective — 'dear (to me)'" },
          { w:"τε", lemma:"τε", pos:"particle (conjunction)", parse:"—",
            gloss:"and", note:"second member of τε ... τε" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 88 ---- */
      {
        lines: "88",
        translation: "Before now, at any rate, you do not visit at all.",
        greek: [
          { w:"πάρος", lemma:"πάρος", pos:"adverb", parse:"—",
            gloss:"before, formerly", note:"temporal adverb with θαμίζεις" },
          { w:"γε", lemma:"γε", pos:"particle", parse:"—",
            gloss:"at any rate, indeed", note:"limits πάρος — 'in the past at least'" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"(affirmative μέν)", note:"γε μέν here ≈ 'and yet, however'" },
          { w:"οὔ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negates θαμίζεις" },
          { w:"τι", lemma:"τις, τι", pos:"indefinite pronoun (adverbial)", parse:"neut. acc. sg.",
            gloss:"at all, in any way", note:"adverbial accusative strengthening the negative" },
          { w:"θαμίζεις", lemma:"θαμίζω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"come often, frequent, be a frequent visitor", note:"main verb" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 89 ---- */
      {
        lines: "89",
        translation: "Say what you have in mind; my heart bids me accomplish it,",
        greek: [
          { w:"αὔδα", lemma:"αὐδάω", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"speak, say, tell", note:"command to Hermes" },
          { w:"ὅ", lemma:"ὅς, ἥ, ὅ", pos:"relative pronoun", parse:"neut. acc. sg.",
            gloss:"what, that which", note:"ὅ τι = 'whatever'; object of φρονέεις" },
          { w:"τι", lemma:"τις, τι", pos:"indefinite pronoun", parse:"neut. acc. sg.",
            gloss:"(anything that)", note:"with ὅ forms the indefinite relative ὅ τι" },
          { w:"φρονέεις", lemma:"φρονέω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"think, have in mind, intend", note:"verb of the relative clause" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"τελέσαι", lemma:"τελέω", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"accomplish, fulfil, bring to pass", note:"complementary infinitive with ἄνωγεν" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"με", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg.",
            gloss:"me", note:"accusative subject of τελέσαι / object of ἄνωγεν" },
          { w:"θυμὸς", lemma:"θυμός, -οῦ, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"heart, spirit", note:"subject of ἄνωγεν" },
          { w:"ἄνωγεν", lemma:"ἄνωγα", pos:"verb", parse:"perfect active indicative, 3rd singular (with present force)",
            gloss:"bid, urge, command", note:"main verb — 'my heart bids me'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 90 ---- */
      {
        lines: "90",
        translation: "if I am able to accomplish it and if it is a thing that can be accomplished.",
        greek: [
          { w:"εἰ", lemma:"εἰ", pos:"conjunction", parse:"+ indicative",
            gloss:"if", note:"conditional with δύναμαι" },
          { w:"δύναμαι", lemma:"δύναμαι", pos:"verb", parse:"present middle/passive indicative, 1st singular",
            gloss:"be able, can", note:"verb of the εἰ-clause" },
          { w:"τελέσαι", lemma:"τελέω", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"accomplish, fulfil", note:"complementary infinitive with δύναμαι" },
          { w:"γε", lemma:"γε", pos:"particle", parse:"—",
            gloss:"at least, indeed", note:"emphasizes the condition" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the two εἰ-clauses" },
          { w:"εἰ", lemma:"εἰ", pos:"conjunction", parse:"+ indicative",
            gloss:"if", note:"second condition, with ἐστίν" },
          { w:"τετελεσμένον", lemma:"τελέω", pos:"verb (participle)", parse:"perfect middle/passive participle, neut. nom. sg.",
            gloss:"accomplished, able to be done", note:"with ἐστίν forms periphrastic perfect — 'is a thing accomplishable'" },
          { w:"ἐστίν", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"is", note:"copula with τετελεσμένον" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 91 ---- */
      {
        lines: "91",
        translation: "But come on further, so that I may set guest-gifts before you.”",
        greek: [
          { w:"ἀλλ᾽", lemma:"ἀλλά", pos:"conjunction", parse:"(elided ἀλλά)",
            gloss:"but, come now", note:"with the imperative, urging — 'but come!'" },
          { w:"ἕπεο", lemma:"ἕπομαι", pos:"verb", parse:"present middle imperative, 2nd singular",
            gloss:"follow, come along", note:"command to Hermes" },
          { w:"προτέρω", lemma:"προτέρω", pos:"adverb (comparative)", parse:"—",
            gloss:"further forward, onward", note:"adverb of motion with ἕπεο" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἵνα", lemma:"ἵνα", pos:"conjunction", parse:"+ subjunctive",
            gloss:"so that, in order that", note:"purpose clause with θείω" },
          { w:"τοι", lemma:"σύ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"for you", note:"dative of interest with θείω" },
          { w:"πὰρ", lemma:"παρά", pos:"preposition / preverb (apocope)", parse:"(= παρά, in tmesis with θείω)",
            gloss:"beside, before", note:"πὰρ ... θείω = παραθείω, 'set beside/before' (tmesis)" },
          { w:"ξείνια", lemma:"ξείνιον, -ου, τό (epic = ξένιον)", pos:"noun", parse:"acc. pl. neut.",
            gloss:"guest-gifts, hospitality", note:"object of θείω" },
          { w:"θείω", lemma:"τίθημι", pos:"verb", parse:"aorist active subjunctive, 1st singular (epic θείω)",
            gloss:"set, place, put", note:"subjunctive of the ἵνα-clause; with πάρ = 'set before'" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"”", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 92–93 ---- */
      {
        lines: "92–93",
        translation: "So speaking, the goddess set out a table, having filled it with ambrosia,",
        greek: [
          { w:"ὥς", lemma:"ὥς", pos:"adverb", parse:"—",
            gloss:"thus, so", note:"'thus' referring to her speech, with φωνήσασα" },
          { w:"ἄρα", lemma:"ἄρα", pos:"particle", parse:"—",
            gloss:"then, so", note:"narrative particle" },
          { w:"φωνήσασα", lemma:"φωνέω", pos:"verb (participle)", parse:"aorist active participle, fem. nom. sg.",
            gloss:"speak, utter", note:"circumstantial with θεά — 'having spoken'" },
          { w:"θεὰ", lemma:"θεά, -ᾶς, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"goddess", note:"subject of παρέθηκε — Calypso" },
          { w:"παρέθηκε", lemma:"παρατίθημι", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"set beside, place before, serve", note:"main verb" },
          { w:"τράπεζαν", lemma:"τράπεζα, -ης, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"table", note:"object of παρέθηκε" },
          { w:"ἀμβροσίης", lemma:"ἀμβροσίη, -ης, ἡ (epic = ἀμβροσία)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"ambrosia", note:"genitive of content with πλήσασα — 'filled with ambrosia'" },
          { w:"πλήσασα", lemma:"πίμπλημι", pos:"verb (participle)", parse:"aorist active participle, fem. nom. sg.",
            gloss:"fill", note:"circumstantial with θεά; governs ἀμβροσίης" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 93 ---- */
      {
        lines: "93",
        translation: "and she mixed red nectar.",
        greek: [
          { w:"κέρασσε", lemma:"κεράννυμι", pos:"verb", parse:"aorist active indicative, 3rd singular (epic)",
            gloss:"mix, mingle", note:"main verb — mixing nectar (with water)" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"νέκταρ", lemma:"νέκταρ, -αρος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"nectar", note:"object of κέρασσε" },
          { w:"ἐρυθρόν", lemma:"ἐρυθρός, -ή, -όν", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"red", note:"attributive with νέκταρ" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 94 ---- */
      {
        lines: "94",
        translation: "And the guide Argeïphontes drank and ate.",
        greek: [
          { w:"αὐτὰρ", lemma:"αὐτάρ", pos:"conjunction", parse:"—",
            gloss:"but, and then", note:"transitional connective" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"he", note:"subject — Hermes, named at clause end" },
          { w:"πῖνε", lemma:"πίνω", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"drink", note:"main verb; durative imperfect" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the two verbs" },
          { w:"ἦσθε", lemma:"ἔδω (ἐσθίω)", pos:"verb", parse:"imperfect active indicative, 3rd singular (epic ἦσθε)",
            gloss:"eat", note:"second main verb" },
          { w:"διάκτορος", lemma:"διάκτορος, -ου, ὁ", pos:"noun / epithet", parse:"nom. sg. masc.",
            gloss:"the guide, messenger", note:"epithet of Hermes, in apposition to ἀργεϊφόντης" },
          { w:"ἀργεϊφόντης", lemma:"ἀργεϊφόντης, -ου, ὁ", pos:"proper noun / epithet", parse:"nom. sg. masc.",
            gloss:"Argeïphontes, slayer of Argus", note:"epithet of Hermes; subject of πῖνε / ἦσθε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      }

    ]
  },

  {
    id: "ody7-81-107",
    title: "Odyssey 7.81–107",
    citation: "Homer, Odyssey 7.81–107 — the palace of Alcinous",
    segments: [

      /* ---- 81 ---- */
      {
        lines: "81",
        translation: "And she plunged into the close-built house of Erechtheus.",
        greek: [
          { w:"δῦνε", lemma:"δύω", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"enter, sink into, plunge into", note:"main verb; subject is Athena (from the preceding narrative)" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and, but", note:"connective" },
          { w:"Ἐρεχθῆος", lemma:"Ἐρεχθεύς, -ῆος, ὁ", pos:"proper noun", parse:"gen. sg. masc. (epic -ῆος)",
            gloss:"Erechtheus", note:"possessive genitive with δόμον — the legendary Athenian king/hero" },
          { w:"πυκινὸν", lemma:"πυκινός, -ή, -όν", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"close, thick, well-built", note:"attributive with δόμον" },
          { w:"δόμον", lemma:"δόμος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"house, home", note:"object of δῦνε (accusative of goal of motion)" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 81–82 ---- */
      {
        lines: "81–82",
        translation: "But Odysseus went to the glorious halls of Alcinous;",
        greek: [
          { w:"αὐτὰρ", lemma:"αὐτάρ", pos:"conjunction", parse:"—",
            gloss:"but, and then", note:"strong transitional connective, shifting to Odysseus" },
          { w:"Ὀδυσσεὺς", lemma:"Ὀδυσσεύς, -ῆος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Odysseus", note:"subject of ἴε" },
          { w:"Ἀλκινόου", lemma:"Ἀλκίνοος, -ου, ὁ", pos:"proper noun", parse:"gen. sg. masc.",
            gloss:"Alcinous", note:"possessive genitive with δώματα — king of the Phaeacians" },
          { w:"πρὸς", lemma:"πρός", pos:"preposition", parse:"+ accusative",
            gloss:"to, toward", note:"governs δώματα" },
          { w:"δώματ᾽", lemma:"δῶμα, -ατος, τό", pos:"noun", parse:"acc. pl. neut. (elided δώματα)",
            gloss:"house, halls, dwelling", note:"object of πρός" },
          { w:"ἴε", lemma:"εἶμι (ἔρχομαι)", pos:"verb", parse:"imperfect active indicative, 3rd singular (epic)",
            gloss:"go, was going", note:"main verb" },
          { w:"κλυτά", lemma:"κλυτός, -ή, -όν", pos:"adjective", parse:"acc. pl. neut.",
            gloss:"famous, glorious, renowned", note:"attributive with δώματα (framing the noun phrase)" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 82–83 ---- */
      {
        lines: "82–83",
        translation: "and his heart pondered much as he stood, before he reached the bronze threshold.",
        greek: [
          { w:"πολλὰ", lemma:"πολύς, πολλή, πολύ", pos:"adjective (substantive/adverbial)", parse:"neut. acc. pl.",
            gloss:"many things, much", note:"adverbial accusative with ὥρμαινε — 'pondered much'" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"οἱ", lemma:"ἕ (οἱ)", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"for him, his", note:"dative of possession with κῆρ — 'his heart'" },
          { w:"κῆρ", lemma:"κῆρ, κῆρος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"heart", note:"subject of ὥρμαινε" },
          { w:"ὥρμαιν᾽", lemma:"ὁρμαίνω", pos:"verb", parse:"imperfect active indicative, 3rd singular (elided ὥρμαινε)",
            gloss:"ponder, turn over in the mind, revolve", note:"main verb; durative imperfect" },
          { w:"ἱσταμένῳ", lemma:"ἵστημι", pos:"verb (participle)", parse:"present middle participle, masc. dat. sg.",
            gloss:"stand, halt, take one's stand", note:"circumstantial participle agreeing with οἱ — 'as he stood'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πρὶν", lemma:"πρίν", pos:"conjunction", parse:"+ infinitive",
            gloss:"before", note:"introduces the temporal infinitive clause with ἱκέσθαι" },
          { w:"χάλκεον", lemma:"χάλκεος, -η, -ον", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"of bronze, bronze", note:"attributive with οὐδόν" },
          { w:"οὐδὸν", lemma:"οὐδός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"threshold", note:"object of ἱκέσθαι" },
          { w:"ἱκέσθαι", lemma:"ἱκνέομαι", pos:"verb (infinitive)", parse:"aorist middle infinitive",
            gloss:"come to, reach, arrive at", note:"infinitive with πρίν — 'before reaching'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 84–85 ---- */
      {
        lines: "84–85",
        translation: "For there was a radiance as of the sun or moon throughout the high-roofed house of great-hearted Alcinous.",
        greek: [
          { w:"ὥς", lemma:"ὡς", pos:"adverb / conjunction", parse:"—",
            gloss:"as, like", note:"introduces the comparison ('a gleam as of sun...')" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"(generalizing τε)", note:"epic τε in a general comparison; not translated" },
          { w:"γὰρ", lemma:"γάρ", pos:"conjunction", parse:"—",
            gloss:"for", note:"explains why his heart was in awe" },
          { w:"ἠελίου", lemma:"ἠέλιος, -ου, ὁ (epic = ἥλιος)", pos:"noun", parse:"gen. sg. masc.",
            gloss:"sun", note:"genitive of source/comparison with αἴγλη" },
          { w:"αἴγλη", lemma:"αἴγλη, -ης, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"radiance, gleam, light", note:"subject of πέλεν" },
          { w:"πέλεν", lemma:"πέλομαι", pos:"verb", parse:"imperfect (middle) indicative, 3rd singular",
            gloss:"be, become (= ἦν)", note:"copula — 'there was'" },
          { w:"ἠὲ", lemma:"ἠέ", pos:"conjunction", parse:"—",
            gloss:"or", note:"joins ἠελίου and σελήνης" },
          { w:"σελήνης", lemma:"σελήνη, -ης, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"moon", note:"second genitive of comparison with αἴγλη" },
          { w:"δῶμα", lemma:"δῶμα, -ατος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"house, hall", note:"object of κατά" },
          { w:"καθ᾽", lemma:"κατά", pos:"preposition (anastrophe)", parse:"(elided κατά) + accusative",
            gloss:"throughout, over", note:"governs δῶμα; accent thrown back following its noun" },
          { w:"ὑψερεφὲς", lemma:"ὑψερεφής, -ές", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"high-roofed, with lofty roof", note:"attributive with δῶμα" },
          { w:"μεγαλήτορος", lemma:"μεγαλήτωρ, -ορος", pos:"adjective", parse:"gen. sg. masc.",
            gloss:"great-hearted", note:"attributive with Ἀλκινόοιο" },
          { w:"Ἀλκινόοιο", lemma:"Ἀλκίνοος, -ου, ὁ", pos:"proper noun", parse:"gen. sg. masc. (epic -οιο)",
            gloss:"Alcinous", note:"possessive genitive with δῶμα" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 86–87 ---- */
      {
        lines: "86–87",
        translation: "For walls of bronze ran this way and that, from the threshold to the innermost recess, and around ran a frieze of dark-blue enamel;",
        greek: [
          { w:"χάλκεοι", lemma:"χάλκεος, -η, -ον", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"of bronze, bronze", note:"attributive with τοῖχοι" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by περὶ δὲ θριγκός" },
          { w:"γὰρ", lemma:"γάρ", pos:"conjunction", parse:"—",
            gloss:"for", note:"begins the detailed description of the radiant house" },
          { w:"τοῖχοι", lemma:"τοῖχος, -ου, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"walls", note:"subject of ἐληλέδατο" },
          { w:"ἐληλέδατ᾽", lemma:"ἐλαύνω", pos:"verb", parse:"pluperfect middle/passive indicative, 3rd plural (epic ἐληλέδατο)",
            gloss:"drive; (of a wall) run, extend, be drawn out", note:"'had been drawn / stretched' — the walls ran along" },
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"here, there", note:"ἔνθα καὶ ἔνθα = 'this way and that'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"in the phrase ἔνθα καὶ ἔνθα" },
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"here, there", note:"completes ἔνθα καὶ ἔνθα" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐς", lemma:"εἰς (ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"to, into, as far as", note:"governs μυχόν" },
          { w:"μυχὸν", lemma:"μυχός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"innermost part, recess, nook", note:"object of ἐς" },
          { w:"ἐξ", lemma:"ἐκ (ἐξ)", pos:"preposition", parse:"+ genitive",
            gloss:"out of, from", note:"governs οὐδοῦ" },
          { w:"οὐδοῦ", lemma:"οὐδός, -οῦ, ὁ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"threshold", note:"object of ἐξ — 'from the threshold'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"περὶ", lemma:"περί", pos:"adverb", parse:"—",
            gloss:"round about", note:"adverbial here — 'all around (ran)'" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"answers μέν" },
          { w:"θριγκὸς", lemma:"θριγκός, -οῦ, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"coping, cornice, frieze", note:"subject (verb 'was/ran' understood)" },
          { w:"κυάνοιο", lemma:"κύανος, -ου, ὁ", pos:"noun", parse:"gen. sg. masc. (epic -οιο)",
            gloss:"dark-blue enamel, blue glass-paste, lapis", note:"genitive of material with θριγκός" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 88 ---- */
      {
        lines: "88",
        translation: "and golden doors enclosed the close-built house within;",
        greek: [
          { w:"χρύσειαι", lemma:"χρύσεος, -η, -ον", pos:"adjective", parse:"nom. pl. fem. (epic χρύσειαι)",
            gloss:"golden", note:"attributive with θύραι" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"θύραι", lemma:"θύρα, -ας, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"door(s)", note:"subject of ἔεργον" },
          { w:"πυκινὸν", lemma:"πυκινός, -ή, -όν", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"close, thick, well-built", note:"attributive with δόμον" },
          { w:"δόμον", lemma:"δόμος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"house, home", note:"object of ἔεργον" },
          { w:"ἐντὸς", lemma:"ἐντός", pos:"adverb", parse:"—",
            gloss:"within, inside", note:"adverb with ἔεργον" },
          { w:"ἔεργον", lemma:"ἐέργω (εἴργω)", pos:"verb", parse:"imperfect active indicative, 3rd plural",
            gloss:"shut in, enclose, bar", note:"main verb; subject θύραι" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 89 ---- */
      {
        lines: "89",
        translation: "Silver doorposts stood on the bronze threshold,",
        greek: [
          { w:"σταθμοὶ", lemma:"σταθμός, -οῦ, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"doorpost, jamb", note:"subject of ἕστασαν" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἀργύρεοι", lemma:"ἀργύρεος, -η, -ον", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"of silver, silver", note:"attributive with σταθμοί" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"on, in", note:"governs οὐδῷ" },
          { w:"χαλκέῳ", lemma:"χάλκεος, -η, -ον", pos:"adjective", parse:"dat. sg. masc.",
            gloss:"of bronze, bronze", note:"attributive with οὐδῷ" },
          { w:"ἕστασαν", lemma:"ἵστημι", pos:"verb", parse:"pluperfect active indicative, 3rd plural (intransitive, 'stood')",
            gloss:"stand, be set up", note:"intransitive perfect system; subject σταθμοί" },
          { w:"οὐδῷ", lemma:"οὐδός, -οῦ, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"threshold", note:"object of ἐν" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 90 ---- */
      {
        lines: "90",
        translation: "and upon them a silver lintel, and a golden handle.",
        greek: [
          { w:"ἀργύρεον", lemma:"ἀργύρεος, -η, -ον", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"of silver, silver", note:"attributive/predicative with ὑπερθύριον" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἐφ᾽", lemma:"ἐπί", pos:"adverb", parse:"(elided ἐπί)",
            gloss:"upon, above", note:"adverbial — 'on top (was)'; verb 'was' understood" },
          { w:"ὑπερθύριον", lemma:"ὑπερθύριον, -ου, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"lintel, door-head", note:"subject (with 'was' understood)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"χρυσέη", lemma:"χρύσεος, -η, -ον", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"golden", note:"attributive/predicative with κορώνη" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"κορώνη", lemma:"κορώνη, -ης, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"door-handle, ring, curved handle", note:"subject (with 'was' understood)" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 91 ---- */
      {
        lines: "91",
        translation: "And on either side were dogs of gold and silver,",
        greek: [
          { w:"χρύσειοι", lemma:"χρύσεος, -η, -ον", pos:"adjective", parse:"nom. pl. masc. (epic χρύσειοι)",
            gloss:"golden", note:"attributive with κύνες" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἑκάτερθε", lemma:"ἑκάτερθε(ν)", pos:"adverb", parse:"—",
            gloss:"on each side, on both sides", note:"adverb — flanking the doorway" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins χρύσειοι and ἀργύρεοι" },
          { w:"ἀργύρεοι", lemma:"ἀργύρεος, -η, -ον", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"of silver, silver", note:"attributive with κύνες" },
          { w:"κύνες", lemma:"κύων, κυνός, ὁ/ἡ", pos:"noun", parse:"nom. pl.",
            gloss:"dog(s)", note:"subject of ἦσαν" },
          { w:"ἦσαν", lemma:"εἰμί", pos:"verb", parse:"imperfect active indicative, 3rd plural",
            gloss:"be", note:"'there were'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 92–93 ---- */
      {
        lines: "92–93",
        translation: "which Hephaestus fashioned with cunning skill to guard the house of great-hearted Alcinous,",
        greek: [
          { w:"οὓς", lemma:"ὅς, ἥ, ὅ", pos:"relative pronoun", parse:"acc. pl. masc.",
            gloss:"which, whom", note:"object of ἔτευξεν; antecedent κύνες" },
          { w:"Ἥφαιστος", lemma:"Ἥφαιστος, -ου, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Hephaestus", note:"subject of ἔτευξεν — the smith-god" },
          { w:"ἔτευξεν", lemma:"τεύχω", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"make, fashion, build, prepare", note:"verb of the relative clause" },
          { w:"ἰδυίῃσι", lemma:"οἶδα (participle εἰδυῖα)", pos:"verb (participle)", parse:"perfect active participle, fem. dat. pl. (epic ἰδυίῃσι)",
            gloss:"knowing, skilled, cunning", note:"attributive with πραπίδεσσι — 'with knowing wits'" },
          { w:"πραπίδεσσι", lemma:"πραπίδες, -ων, αἱ", pos:"noun", parse:"dat. pl. fem. (epic -εσσι)",
            gloss:"wits, understanding, mind", note:"dative of means with ἔτευξεν — 'with cunning skill'" },
          { w:"δῶμα", lemma:"δῶμα, -ατος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"house, hall", note:"object of φυλασσέμεναι" },
          { w:"φυλασσέμεναι", lemma:"φυλάσσω", pos:"verb (infinitive)", parse:"present active infinitive (epic = φυλάσσειν)",
            gloss:"guard, watch, keep", note:"infinitive of purpose — 'to guard the house'" },
          { w:"μεγαλήτορος", lemma:"μεγαλήτωρ, -ορος", pos:"adjective", parse:"gen. sg. masc.",
            gloss:"great-hearted", note:"attributive with Ἀλκινόοιο" },
          { w:"Ἀλκινόοιο", lemma:"Ἀλκίνοος, -ου, ὁ", pos:"proper noun", parse:"gen. sg. masc. (epic -οιο)",
            gloss:"Alcinous", note:"possessive genitive with δῶμα" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 94 ---- */
      {
        lines: "94",
        translation: "being immortal and ageless for all their days.",
        greek: [
          { w:"ἀθανάτους", lemma:"ἀθάνατος, -ον", pos:"adjective", parse:"acc. pl. masc.",
            gloss:"immortal, deathless", note:"agrees with οὕς/κύνες" },
          { w:"ὄντας", lemma:"εἰμί", pos:"verb (participle)", parse:"present active participle, masc. acc. pl.",
            gloss:"being", note:"circumstantial participle with κύνες — 'being immortal'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins ἀθανάτους and ἀγήρως" },
          { w:"ἀγήρως", lemma:"ἀγήραος, -ον (contr. ἀγήρως)", pos:"adjective", parse:"acc. pl. masc.",
            gloss:"ageless, unaging", note:"second predicate with the dogs" },
          { w:"ἤματα", lemma:"ἦμαρ, ἤματος, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"day(s)", note:"accusative of extent of time — 'for all their days'" },
          { w:"πάντα", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"neut. acc. pl.",
            gloss:"all, every", note:"attributive with ἤματα" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 95–96 ---- */
      {
        lines: "95–96",
        translation: "And within, seats were fixed along the wall this way and that, from the threshold to the innermost recess, right through,",
        greek: [
          { w:"ἐν", lemma:"ἐν", pos:"adverb", parse:"—",
            gloss:"within, inside", note:"adverbial here (tmesis with ἐρηρέδατο) — 'set within'" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"θρόνοι", lemma:"θρόνος, -ου, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"chair, seat, throne", note:"subject of ἐρηρέδατο" },
          { w:"περὶ", lemma:"περί", pos:"preposition", parse:"+ accusative",
            gloss:"around, along", note:"governs τοῖχον" },
          { w:"τοῖχον", lemma:"τοῖχος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"wall", note:"object of περί" },
          { w:"ἐρηρέδατ᾽", lemma:"ἐρείδω", pos:"verb", parse:"pluperfect middle/passive indicative, 3rd plural (epic ἐρηρέδατο)",
            gloss:"prop, fix firmly, set", note:"'had been set fast' — the seats were fixed in place" },
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"here, there", note:"ἔνθα καὶ ἔνθα = 'this way and that'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"in the phrase ἔνθα καὶ ἔνθα" },
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"here, there", note:"completes ἔνθα καὶ ἔνθα" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐς", lemma:"εἰς (ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"to, as far as", note:"governs μυχόν" },
          { w:"μυχὸν", lemma:"μυχός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"innermost part, recess", note:"object of ἐς" },
          { w:"ἐξ", lemma:"ἐκ (ἐξ)", pos:"preposition", parse:"+ genitive",
            gloss:"out of, from", note:"governs οὐδοῖο" },
          { w:"οὐδοῖο", lemma:"οὐδός, -οῦ, ὁ", pos:"noun", parse:"gen. sg. masc. (epic -οιο)",
            gloss:"threshold", note:"object of ἐξ" },
          { w:"διαμπερές", lemma:"διαμπερές", pos:"adverb", parse:"—",
            gloss:"right through, continuously, all along", note:"adverb of extent" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 96–97 ---- */
      {
        lines: "96–97",
        translation: "whereon soft, well-spun robes were thrown, the work of women.",
        greek: [
          { w:"ἔνθ᾽", lemma:"ἔνθα", pos:"adverb (relative)", parse:"(elided ἔνθα)",
            gloss:"where, whereon", note:"relative adverb of place — on the seats" },
          { w:"ἐνὶ", lemma:"ἐν (ἐνί)", pos:"adverb / preposition", parse:"—",
            gloss:"thereon, in, upon", note:"adverbial ἐνί with ἔνθα — 'on which'" },
          { w:"πέπλοι", lemma:"πέπλος, -ου, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"robe, woven cloth, covering", note:"subject of βεβλήατο" },
          { w:"λεπτοὶ", lemma:"λεπτός, -ή, -όν", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"fine, thin, delicate", note:"attributive with πέπλοι" },
          { w:"ἐύννητοι", lemma:"ἐύννητος, -ον", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"well-spun, finely woven", note:"attributive with πέπλοι" },
          { w:"βεβλήατο", lemma:"βάλλω", pos:"verb", parse:"pluperfect middle/passive indicative, 3rd plural (epic βεβλήατο)",
            gloss:"throw, cast, lay", note:"'had been thrown / laid' — cloths spread over the seats" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἔργα", lemma:"ἔργον, -ου, τό", pos:"noun", parse:"nom. pl. neut.",
            gloss:"work(s), handiwork", note:"in apposition to πέπλοι" },
          { w:"γυναικῶν", lemma:"γυνή, γυναικός, ἡ", pos:"noun", parse:"gen. pl. fem.",
            gloss:"woman, wife", note:"possessive/subjective genitive with ἔργα — 'the work of women'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 98–99 ---- */
      {
        lines: "98–99",
        translation: "And there the leaders of the Phaeacians used to sit, drinking and eating; for they had unfailing supply.",
        greek: [
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"there", note:"locative — on those seats" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"Φαιήκων", lemma:"Φαίηκες, -ων, οἱ", pos:"proper noun", parse:"gen. pl. masc.",
            gloss:"the Phaeacians", note:"possessive genitive with ἡγήτορες" },
          { w:"ἡγήτορες", lemma:"ἡγήτωρ, -ορος, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"leader, commander, chief", note:"subject of ἑδριόωντο" },
          { w:"ἑδριόωντο", lemma:"ἑδριάομαι", pos:"verb", parse:"imperfect middle/passive indicative, 3rd plural (epic diectasis)",
            gloss:"sit, be seated", note:"durative imperfect" },
          { w:"πίνοντες", lemma:"πίνω", pos:"verb (participle)", parse:"present active participle, masc. nom. pl.",
            gloss:"drink", note:"circumstantial with ἡγήτορες" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the participles" },
          { w:"ἔδοντες", lemma:"ἔδω (ἐσθίω)", pos:"verb (participle)", parse:"present active participle, masc. nom. pl.",
            gloss:"eat", note:"circumstantial with ἡγήτορες" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"ἐπηετανὸν", lemma:"ἐπηετανός, -όν", pos:"adjective (substantive)", parse:"neut. acc. sg.",
            gloss:"abundant, continual, ever-flowing", note:"object of ἔχεσκον — 'they had (food) in plenty'" },
          { w:"γὰρ", lemma:"γάρ", pos:"conjunction", parse:"—",
            gloss:"for", note:"explains the ongoing feasting" },
          { w:"ἔχεσκον", lemma:"ἔχω", pos:"verb", parse:"imperfect active indicative, 3rd plural (iterative -σκ-)",
            gloss:"have, hold, keep", note:"iterative imperfect — 'they used to have'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 100–101 ---- */
      {
        lines: "100–101",
        translation: "And golden youths stood upon well-built pedestals, holding blazing torches in their hands,",
        greek: [
          { w:"χρύσειοι", lemma:"χρύσεος, -η, -ον", pos:"adjective", parse:"nom. pl. masc. (epic χρύσειοι)",
            gloss:"golden", note:"attributive with κοῦροι" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἄρα", lemma:"ἄρα", pos:"particle", parse:"—",
            gloss:"then, so", note:"marks the next item in the description" },
          { w:"κοῦροι", lemma:"κοῦρος, -ου, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"youth, boy, young man", note:"subject of ἕστασαν — statues of youths" },
          { w:"ἐυδμήτων", lemma:"ἐΰδμητος, -ον", pos:"adjective", parse:"gen. pl. masc. (epic)",
            gloss:"well-built, well-made", note:"attributive with βωμῶν" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ genitive",
            gloss:"upon, on", note:"governs βωμῶν" },
          { w:"βωμῶν", lemma:"βωμός, -οῦ, ὁ", pos:"noun", parse:"gen. pl. masc.",
            gloss:"base, pedestal, stand; altar", note:"object of ἐπί" },
          { w:"ἕστασαν", lemma:"ἵστημι", pos:"verb", parse:"pluperfect active indicative, 3rd plural (intransitive, 'stood')",
            gloss:"stand, be set up", note:"intransitive perfect system; subject κοῦροι" },
          { w:"αἰθομένας", lemma:"αἴθω", pos:"verb (participle)", parse:"present middle/passive participle, fem. acc. pl.",
            gloss:"blaze, burn, be alight", note:"agrees with δαΐδας — 'blazing torches'" },
          { w:"δαΐδας", lemma:"δαΐς, δαΐδος, ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"torch", note:"object of ἔχοντες" },
          { w:"μετὰ", lemma:"μετά", pos:"preposition", parse:"+ dative",
            gloss:"among, in", note:"governs χερσίν — 'in their hands'" },
          { w:"χερσὶν", lemma:"χείρ, χειρός, ἡ", pos:"noun", parse:"dat. pl. fem.",
            gloss:"hand", note:"object of μετά" },
          { w:"ἔχοντες", lemma:"ἔχω", pos:"verb (participle)", parse:"present active participle, masc. nom. pl.",
            gloss:"have, hold", note:"circumstantial with κοῦροι — 'holding'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 102 ---- */
      {
        lines: "102",
        translation: "giving light by night through the halls for the banqueters.",
        greek: [
          { w:"φαίνοντες", lemma:"φαίνω", pos:"verb (participle)", parse:"present active participle, masc. nom. pl.",
            gloss:"show, bring to light; give light, shine", note:"circumstantial with κοῦροι — 'lighting the way'" },
          { w:"νύκτας", lemma:"νύξ, νυκτός, ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"night", note:"accusative of time — 'through the nights'" },
          { w:"κατὰ", lemma:"κατά", pos:"preposition", parse:"+ accusative",
            gloss:"throughout, over", note:"governs δώματα" },
          { w:"δώματα", lemma:"δῶμα, -ατος, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"house, halls", note:"object of κατά" },
          { w:"δαιτυμόνεσσι", lemma:"δαιτυμών, -όνος, ὁ", pos:"noun", parse:"dat. pl. masc. (epic -εσσι)",
            gloss:"guest at a feast, banqueter, diner", note:"dative of advantage — 'for the banqueters'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 103 ---- */
      {
        lines: "103",
        translation: "And fifty slave-women he has throughout the house,",
        greek: [
          { w:"πεντήκοντα", lemma:"πεντήκοντα", pos:"numeral", parse:"indeclinable",
            gloss:"fifty", note:"attributive with δμῳαί γυναῖκες" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"οἱ", lemma:"ἕ (οἱ)", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"for him, his", note:"dative of possession — 'he has' (Alcinous)" },
          { w:"δμῳαὶ", lemma:"δμῳή, -ῆς, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"female slave, handmaid", note:"predicate with γυναῖκες — 'slave-women'" },
          { w:"κατὰ", lemma:"κατά", pos:"preposition", parse:"+ accusative",
            gloss:"throughout", note:"governs δῶμα" },
          { w:"δῶμα", lemma:"δῶμα, -ατος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"house, hall", note:"object of κατά" },
          { w:"γυναῖκες", lemma:"γυνή, γυναικός, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"woman", note:"subject; δμῳαί γυναῖκες = 'women who are slaves'" }
        ]
      },

      /* ---- 104 ---- */
      {
        lines: "104",
        translation: "some of whom grind the yellow grain on the millstones,",
        greek: [
          { w:"αἱ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. pl. fem.",
            gloss:"these, some", note:"αἱ μέν ... αἱ δέ = 'some ... others'" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by αἱ δ᾽ in 105" },
          { w:"ἀλετρεύουσι", lemma:"ἀλετρεύω", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"grind (at the mill)", note:"main verb of the αἱ μέν clause" },
          { w:"μύλῃς", lemma:"μύλη, -ης, ἡ", pos:"noun", parse:"dat. pl. fem. (epic -ῃς)",
            gloss:"mill, millstone", note:"object of ἔπι — 'on the millstones'" },
          { w:"ἔπι", lemma:"ἐπί", pos:"preposition (anastrophe)", parse:"+ dative",
            gloss:"on, at", note:"governs μύλῃς; accent thrown back following its noun" },
          { w:"μήλοπα", lemma:"μήλοψ, -οπος", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"yellow (as a ripe apple/quince)", note:"attributive with καρπόν" },
          { w:"καρπόν", lemma:"καρπός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"fruit, produce, grain", note:"object of ἀλετρεύουσι" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 105–106 ---- */
      {
        lines: "105–106",
        translation: "while others weave webs and twirl the yarn as they sit, like the leaves of a tall poplar;",
        greek: [
          { w:"αἱ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. pl. fem.",
            gloss:"these, others", note:"answers αἱ μέν — 'others'" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and, but", note:"answers μέν" },
          { w:"ἱστοὺς", lemma:"ἱστός, -οῦ, ὁ", pos:"noun", parse:"acc. pl. masc.",
            gloss:"loom, web, warp", note:"object of ὑφόωσι" },
          { w:"ὑφόωσι", lemma:"ὑφαίνω", pos:"verb", parse:"present active indicative, 3rd plural (epic diectasis = ὑφῶσι)",
            gloss:"weave", note:"main verb of the αἱ δέ clause" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the two verbs" },
          { w:"ἠλάκατα", lemma:"ἠλάκατον, -ου, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"thread on the distaff, yarn, wool", note:"object of στρωφῶσιν" },
          { w:"στρωφῶσιν", lemma:"στρωφάω", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"keep turning, ply, twirl (yarn)", note:"frequentative of στρέφω — spinning" },
          { w:"ἥμεναι", lemma:"ἧμαι", pos:"verb (participle)", parse:"present middle participle, fem. nom. pl.",
            gloss:"sit, be seated", note:"circumstantial — 'as they sit'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οἷά", lemma:"οἷος, -η, -ον", pos:"relative/exclamatory adjective", parse:"neut. nom. pl.",
            gloss:"such as, like", note:"introduces the simile — 'quivering like...'" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"(generalizing τε)", note:"epic τε in a simile; not translated" },
          { w:"φύλλα", lemma:"φύλλον, -ου, τό", pos:"noun", parse:"nom. pl. neut.",
            gloss:"leaf, leaves", note:"the point of comparison (quivering / shimmering)" },
          { w:"μακεδνῆς", lemma:"μακεδνός, -ή, -όν", pos:"adjective", parse:"gen. sg. fem.",
            gloss:"tall, slender", note:"attributive with αἰγείροιο" },
          { w:"αἰγείροιο", lemma:"αἴγειρος, -ου, ἡ", pos:"noun", parse:"gen. sg. fem. (epic -οιο)",
            gloss:"(black) poplar", note:"genitive with φύλλα — 'leaves of a poplar'" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 107 ---- */
      {
        lines: "107",
        translation: "and from the close-woven linens the liquid oil drips down.",
        greek: [
          { w:"καιρουσσέων", lemma:"καιρόεις, -εσσα, -εν", pos:"adjective (participial form)", parse:"gen. pl. fem. (epic καιρουσσέων)",
            gloss:"close-woven, closely-woven", note:"attributive with ὀθονέων — of the tight-woven fabric" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ὀθονέων", lemma:"ὀθόνη, -ης, ἡ", pos:"noun", parse:"gen. pl. fem. (epic -έων)",
            gloss:"fine linen, cloth", note:"genitive of source with ἀπολείβεται — 'off the linens'" },
          { w:"ἀπολείβεται", lemma:"ἀπολείβω", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"drip off, trickle down", note:"main verb; subject ἔλαιον" },
          { w:"ὑγρὸν", lemma:"ὑγρός, -ή, -όν", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"wet, moist, liquid", note:"attributive with ἔλαιον" },
          { w:"ἔλαιον", lemma:"ἔλαιον, -ου, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"olive oil, oil", note:"subject of ἀπολείβεται" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      }

    ]
  },

  {
    id: "ody7-108-145",
    title: "Odyssey 7.108–145",
    citation: "Homer, Odyssey 7.108–145 — the orchard of Alcinous; Odysseus enters the hall",
    segments: [

      /* ---- 108–110 ---- */
      {
        lines: "108–110",
        translation: "As much as the Phaeacians are skilled beyond all men at driving a swift ship on the sea, so too the women are skilled at the loom;",
        greek: [
          { w:"ὅσσον", lemma:"ὅσσος, -η, -ον (epic = ὅσος)", pos:"relative adjective (adverbial)", parse:"neut. acc. sg. used as adverb",
            gloss:"as much as, inasmuch as", note:"correlative with ὣς (109) — 'as much as ... so ...'" },
          { w:"Φαίηκες", lemma:"Φαίηξ, -ηκος, ὁ", pos:"proper noun", parse:"nom. pl. masc.",
            gloss:"Phaeacians", note:"subject of the (understood) εἰσί with ἴδριες" },
          { w:"περὶ", lemma:"περί", pos:"preposition", parse:"+ genitive",
            gloss:"beyond, above", note:"περὶ πάντων ἀνδρῶν — 'beyond all men', with ἴδριες" },
          { w:"πάντων", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"gen. pl. masc.",
            gloss:"all", note:"with ἀνδρῶν, governed by περί" },
          { w:"ἴδριες", lemma:"ἴδρις, -ι (gen. -ιος)", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"skilled, experienced, knowing", note:"predicate of Φαίηκες; governs the infinitive ἐλαυνέμεν" },
          { w:"ἀνδρῶν", lemma:"ἀνήρ, ἀνδρός, ὁ", pos:"noun", parse:"gen. pl. masc.",
            gloss:"man", note:"with περὶ πάντων — 'beyond all men'" },
          { w:"νῆα", lemma:"νηῦς, νηός, ἡ", pos:"noun", parse:"acc. sg. fem. (epic νῆα)",
            gloss:"ship", note:"object of ἐλαυνέμεν" },
          { w:"θοὴν", lemma:"θοός, -ή, -όν", pos:"adjective", parse:"acc. sg. fem.",
            gloss:"swift, quick", note:"attributive with νῆα" },
          { w:"ἐνὶ", lemma:"ἐν (ἐνί)", pos:"preposition", parse:"+ dative",
            gloss:"in, on", note:"= ἐν; governs πόντῳ" },
          { w:"πόντῳ", lemma:"πόντος, -ου, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"(open) sea", note:"object of ἐνί" },
          { w:"ἐλαυνέμεν", lemma:"ἐλαύνω", pos:"verb (infinitive)", parse:"present active infinitive (epic -έμεν)",
            gloss:"drive, row, propel", note:"epexegetic infinitive with ἴδριες — 'skilled at driving'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὣς", lemma:"ὥς", pos:"adverb", parse:"—",
            gloss:"so, thus", note:"answers ὅσσον — completes the comparison" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, so", note:"apodotic/connective in the second half of the comparison" },
          { w:"γυναῖκες", lemma:"γυνή, γυναικός, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"woman, wife", note:"subject of the (understood) εἰσί with τεχνῆσσαι" },
          { w:"ἱστῶν", lemma:"ἱστός, -οῦ, ὁ", pos:"noun", parse:"gen. pl. masc.",
            gloss:"loom, web", note:"genitive with τεχνῆσσαι — 'skilled at looms'" },
          { w:"τεχνῆσσαι", lemma:"τεχνήεις, -εσσα, -εν", pos:"adjective", parse:"nom. pl. fem. (epic τεχνήεσσαι)",
            gloss:"skilled, cunning in craft", note:"predicate of γυναῖκες; governs ἱστῶν" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 110–111 ---- */
      {
        lines: "110–111",
        translation: "for beyond others Athena granted them to know exceedingly beautiful handiwork, and good wits.",
        greek: [
          { w:"πέρι", lemma:"περί", pos:"adverb", parse:"— (adverbial, recessive accent)",
            gloss:"exceedingly, above all", note:"adverbial περί — 'beyond measure', with δῶκεν" },
          { w:"γάρ", lemma:"γάρ", pos:"conjunction", parse:"—",
            gloss:"for", note:"gives the reason for the women's skill" },
          { w:"σφισι", lemma:"σφεῖς (σφι)", pos:"personal pronoun", parse:"dat. pl.",
            gloss:"to them", note:"indirect object of δῶκεν — the Phaeacian women" },
          { w:"δῶκεν", lemma:"δίδωμι", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"give, grant", note:"main verb; subject Ἀθήνη" },
          { w:"Ἀθήνη", lemma:"Ἀθήνη, -ης, ἡ", pos:"proper noun", parse:"nom. sg. fem.",
            gloss:"Athena", note:"subject of δῶκεν" },
          { w:"ἔργα", lemma:"ἔργον, -ου, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"work, handiwork", note:"object of ἐπίστασθαι" },
          { w:"τ᾽", lemma:"τε", pos:"particle (conjunction)", parse:"(elided τε)",
            gloss:"and", note:"τε ... καί joins ἔργα ἐπίστασθαι and φρένας ἐσθλάς" },
          { w:"ἐπίστασθαι", lemma:"ἐπίσταμαι", pos:"verb (infinitive)", parse:"present middle/passive infinitive",
            gloss:"know how, understand, be skilled in", note:"epexegetic infinitive after δῶκεν — 'granted them to understand'" },
          { w:"περικαλλέα", lemma:"περικαλλής, -ές", pos:"adjective", parse:"acc. pl. neut.",
            gloss:"very beautiful, exceedingly lovely", note:"attributive with ἔργα" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the second object φρένας ἐσθλάς" },
          { w:"φρένας", lemma:"φρήν, φρενός, ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"mind, wits, heart", note:"second object of δῶκεν — '(gave them) good wits'" },
          { w:"ἐσθλάς", lemma:"ἐσθλός, -ή, -όν", pos:"adjective", parse:"acc. pl. fem.",
            gloss:"good, noble, brave", note:"attributive with φρένας" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 112–113 ---- */
      {
        lines: "112–113",
        translation: "And outside the courtyard, near the doors, is a great orchard of four measures; and round it a hedge runs on both sides.",
        greek: [
          { w:"ἔκτοσθεν", lemma:"ἔκτοσθεν", pos:"adverb / preposition", parse:"+ genitive",
            gloss:"outside, beyond", note:"governs αὐλῆς — 'outside the court'" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective, beginning the description of the orchard" },
          { w:"αὐλῆς", lemma:"αὐλή, -ῆς, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"courtyard, court", note:"governed by ἔκτοσθεν" },
          { w:"μέγας", lemma:"μέγας, μεγάλη, μέγα", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"great, large", note:"attributive with ὄρχατος" },
          { w:"ὄρχατος", lemma:"ὄρχατος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"orchard, garden-plot", note:"subject of the (understood) ἐστί" },
          { w:"ἄγχι", lemma:"ἄγχι", pos:"adverb / preposition", parse:"+ genitive",
            gloss:"near, close to", note:"governs θυράων" },
          { w:"θυράων", lemma:"θύρα, -ας, ἡ", pos:"noun", parse:"gen. pl. fem. (epic -άων)",
            gloss:"door, gate", note:"governed by ἄγχι — 'near the gates'" },
          { w:"τετράγυος", lemma:"τετράγυος, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"of four measures (guai), four acres in extent", note:"attributive with ὄρχατος — its size" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"περὶ", lemma:"περί", pos:"adverb", parse:"—",
            gloss:"around, round about", note:"adverbial (with δ᾽) — 'and round about'" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἕρκος", lemma:"ἕρκος, -εος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"fence, hedge, enclosure", note:"subject of ἐλήλαται" },
          { w:"ἐλήλαται", lemma:"ἐλαύνω", pos:"verb", parse:"perfect middle/passive indicative, 3rd singular",
            gloss:"drive; (of a wall/hedge) run, be built along", note:"'a hedge has been run around' — perfect passive" },
          { w:"ἀμφοτέρωθεν", lemma:"ἀμφοτέρωθεν", pos:"adverb", parse:"—",
            gloss:"on both sides, from both sides", note:"adverb with ἐλήλαται" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 114 ---- */
      {
        lines: "114",
        translation: "And there tall trees have grown, flourishing:",
        greek: [
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"there", note:"locative — in the orchard" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"δένδρεα", lemma:"δένδρεον, -ου, τό (epic = δένδρον)", pos:"noun", parse:"nom. pl. neut.",
            gloss:"tree", note:"subject of πεφύκασι" },
          { w:"μακρὰ", lemma:"μακρός, -ή, -όν", pos:"adjective", parse:"neut. nom. pl.",
            gloss:"long, tall", note:"attributive with δένδρεα" },
          { w:"πεφύκασι", lemma:"φύω", pos:"verb", parse:"perfect active indicative, 3rd plural (intransitive)",
            gloss:"grow, spring up", note:"intransitive perfect — 'have grown, stand grown'" },
          { w:"τηλεθόωντα", lemma:"τηλεθάω", pos:"verb (participle)", parse:"present active participle, neut. nom. pl. (epic τηλεθόωντα)",
            gloss:"flourish, bloom, grow luxuriantly", note:"agrees with δένδρεα" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 115–116 ---- */
      {
        lines: "115–116",
        translation: "pear-trees and pomegranates and apple-trees with splendid fruit, and sweet fig-trees and flourishing olives.",
        greek: [
          { w:"ὄγχναι", lemma:"ὄγχνη, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"pear-tree; pear", note:"in apposition to δένδρεα" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the list of trees" },
          { w:"ῥοιαὶ", lemma:"ῥοιή, -ῆς, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"pomegranate(-tree)", note:"second of the trees" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"connective in the list" },
          { w:"μηλέαι", lemma:"μηλέα, -ας, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"apple-tree", note:"third of the trees" },
          { w:"ἀγλαόκαρποι", lemma:"ἀγλαόκαρπος, -ον", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"bearing splendid fruit", note:"attributive with μηλέαι" },
          { w:"συκέαι", lemma:"συκέη, -ῆς, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"fig-tree", note:"fourth of the trees" },
          { w:"τε", lemma:"τε", pos:"particle (conjunction)", parse:"—",
            gloss:"and", note:"τε ... καί joins συκέαι and ἐλαῖαι" },
          { w:"γλυκεραὶ", lemma:"γλυκερός, -ή, -όν", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"sweet", note:"attributive with συκέαι" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"connective" },
          { w:"ἐλαῖαι", lemma:"ἐλαίη, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"olive-tree, olive", note:"fifth of the trees" },
          { w:"τηλεθόωσαι", lemma:"τηλεθάω", pos:"verb (participle)", parse:"present active participle, fem. nom. pl.",
            gloss:"flourish, bloom", note:"agrees with ἐλαῖαι" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 117–118 ---- */
      {
        lines: "117–118",
        translation: "Of these the fruit never perishes nor fails, in winter nor in summer, but lasts the whole year round;",
        greek: [
          { w:"τάων", lemma:"ὁ, ἡ, τό (epic τάων = τῶν)", pos:"demonstrative/relative pronoun", parse:"gen. pl. fem.",
            gloss:"of these", note:"partitive/possessive genitive with καρπός" },
          { w:"οὔ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"with ποτε negates ἀπόλλυται" },
          { w:"ποτε", lemma:"ποτέ", pos:"adverb (enclitic)", parse:"—",
            gloss:"ever, at any time", note:"οὔ ποτε = 'never'" },
          { w:"καρπὸς", lemma:"καρπός, -οῦ, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"fruit, produce", note:"subject of ἀπόλλυται and ἀπολείπει" },
          { w:"ἀπόλλυται", lemma:"ἀπόλλυμι", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"perish, be lost, fail", note:"intransitive middle — '(the fruit) perishes'" },
          { w:"οὐδ᾽", lemma:"οὐδέ", pos:"conjunction", parse:"(elided οὐδέ)",
            gloss:"nor, and not", note:"adds ἀπολείπει" },
          { w:"ἀπολείπει", lemma:"ἀπολείπω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"leave off, fail, be wanting", note:"here intransitive — '(the fruit) gives out'" },
          { w:"χείματος", lemma:"χεῖμα, -ατος, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"winter, cold, storm", note:"genitive of time within which — 'in winter'" },
          { w:"οὐδὲ", lemma:"οὐδέ", pos:"conjunction", parse:"—",
            gloss:"nor", note:"joins χείματος and θέρευς" },
          { w:"θέρευς", lemma:"θέρος, -εος, τό", pos:"noun", parse:"gen. sg. neut. (epic θέρευς)",
            gloss:"summer, harvest-time", note:"genitive of time within which — 'in summer'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐπετήσιος", lemma:"ἐπετήσιος, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"lasting all the year, all year round", note:"predicative with καρπός — 'it is a year-round crop'" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 118–119 ---- */
      {
        lines: "118–119",
        translation: "but ever the West Wind, blowing, brings some to birth and ripens others.",
        greek: [
          { w:"ἀλλὰ", lemma:"ἀλλά", pos:"conjunction", parse:"—",
            gloss:"but", note:"adversative" },
          { w:"μάλ᾽", lemma:"μάλα", pos:"adverb", parse:"(elided μάλα)",
            gloss:"very, exceedingly", note:"with αἰεί — 'ever continually'" },
          { w:"αἰεὶ", lemma:"αἰεί (ἀεί)", pos:"adverb", parse:"—",
            gloss:"always, ever", note:"temporal adverb" },
          { w:"Ζεφυρίη", lemma:"Ζεφυρίη, -ης, ἡ (fem. of Ζεφύριος)", pos:"adjective (substantive)", parse:"nom. sg. fem.",
            gloss:"the West Wind (breeze), Zephyr-breeze", note:"subject of φύει/πέσσει — the (fem.) west breeze (αὔρη understood)" },
          { w:"πνείουσα", lemma:"πνέω (epic πνείω)", pos:"verb (participle)", parse:"present active participle, fem. nom. sg.",
            gloss:"blow, breathe", note:"agrees with Ζεφυρίη — 'blowing'" },
          { w:"τὰ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"neut. acc. pl.",
            gloss:"these, some", note:"τὰ μὲν ... ἄλλα δὲ — 'some ... others'; object of φύει" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by ἄλλα δέ" },
          { w:"φύει", lemma:"φύω", pos:"verb", parse:"present active indicative, 3rd singular (transitive)",
            gloss:"bring forth, produce, grow", note:"transitive here — 'makes (them) grow'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄλλα", lemma:"ἄλλος, -η, -ο", pos:"adjective (substantive)", parse:"neut. acc. pl.",
            gloss:"other(s)", note:"object of πέσσει" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, but", note:"answers μέν" },
          { w:"πέσσει", lemma:"πέσσω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"ripen, mellow; cook, digest", note:"'brings (others) to ripeness'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 120–121 ---- */
      {
        lines: "120–121",
        translation: "Pear grows old upon pear, apple upon apple, cluster upon cluster, and fig upon fig.",
        greek: [
          { w:"ὄγχνη", lemma:"ὄγχνη, -ης, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"pear", note:"subject of γηράσκει" },
          { w:"ἐπ᾽", lemma:"ἐπί", pos:"preposition", parse:"(elided ἐπί) + dative",
            gloss:"upon, on", note:"governs ὄγχνῃ" },
          { w:"ὄγχνῃ", lemma:"ὄγχνη, -ης, ἡ", pos:"noun", parse:"dat. sg. fem.",
            gloss:"pear", note:"object of ἐπί — 'pear upon pear'" },
          { w:"γηράσκει", lemma:"γηράσκω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"grow old, ripen and age", note:"of successive crops ripening one after another" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"μῆλον", lemma:"μῆλον, -ου, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"apple", note:"subject of the (understood) γηράσκει" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ dative",
            gloss:"upon", note:"governs μήλῳ" },
          { w:"μήλῳ", lemma:"μῆλον, -ου, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"apple", note:"object of ἐπί" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"αὐτὰρ", lemma:"αὐτάρ", pos:"conjunction", parse:"—",
            gloss:"and, moreover", note:"continues the series" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ dative",
            gloss:"upon", note:"governs σταφυλῇ" },
          { w:"σταφυλῇ", lemma:"σταφυλή, -ῆς, ἡ", pos:"noun", parse:"dat. sg. fem.",
            gloss:"bunch/cluster of grapes", note:"object of ἐπί" },
          { w:"σταφυλή", lemma:"σταφυλή, -ῆς, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"cluster of grapes", note:"subject of the (understood) γηράσκει" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"σῦκον", lemma:"σῦκον, -ου, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"fig", note:"subject of the (understood) γηράσκει" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ dative",
            gloss:"upon", note:"governs σύκῳ" },
          { w:"σύκῳ", lemma:"σῦκον, -ου, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"fig", note:"object of ἐπί" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 122 ---- */
      {
        lines: "122",
        translation: "And there a fruitful vineyard has been planted for him,",
        greek: [
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"there", note:"locative — in the same enclosure" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"οἱ", lemma:"ἕ (οἱ)", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"for him", note:"dative of interest — for Alcinous" },
          { w:"πολύκαρπος", lemma:"πολύκαρπος, -ον", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"rich in fruit, fruitful", note:"attributive with ἀλωή" },
          { w:"ἀλωὴ", lemma:"ἀλωή, -ῆς, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"threshing-floor; vineyard, orchard-plot", note:"subject of ἐρρίζωται" },
          { w:"ἐρρίζωται", lemma:"ῥιζόω", pos:"verb", parse:"perfect middle/passive indicative, 3rd singular",
            gloss:"plant, make take root; (pass.) be firmly rooted", note:"'has been rooted / planted'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 123–124 ---- */
      {
        lines: "123–124",
        translation: "of which one part, a drying-floor on level ground, is being dried in the sun, and others they gather,",
        greek: [
          { w:"τῆς", lemma:"ὅς, ἥ, ὅ", pos:"relative pronoun", parse:"gen. sg. fem.",
            gloss:"of which", note:"partitive genitive with ἕτερον, referring to ἀλωή" },
          { w:"ἕτερον", lemma:"ἕτερος, -η, -ον", pos:"adjective (substantive)", parse:"neut. nom. sg.",
            gloss:"one (of two), one part", note:"ἕτερον μὲν ... ἑτέρας δέ ... ἄλλας δέ — 'one part ... some ... others'" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by ἑτέρας δέ (124)" },
          { w:"θειλόπεδον", lemma:"θειλόπεδον, -ου, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"sunny plot, drying-floor (for grapes)", note:"in apposition to ἕτερον" },
          { w:"λευρῷ", lemma:"λευρός, -ή, -όν", pos:"adjective", parse:"dat. sg. masc.",
            gloss:"smooth, level, open", note:"attributive with χώρῳ" },
          { w:"ἐνὶ", lemma:"ἐν (ἐνί)", pos:"preposition", parse:"+ dative",
            gloss:"in, on", note:"governs χώρῳ" },
          { w:"χώρῳ", lemma:"χῶρος, -ου, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"place, ground, spot", note:"object of ἐνί" },
          { w:"τέρσεται", lemma:"τέρσομαι", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"become dry, be dried", note:"'is being dried' (in the sun)" },
          { w:"ἠελίῳ", lemma:"ἠέλιος, -ου, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"sun", note:"dative of means — 'by the sun'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἑτέρας", lemma:"ἕτερος, -η, -ον", pos:"adjective (substantive)", parse:"acc. pl. fem.",
            gloss:"others (of the grapes)", note:"object of τρυγόωσιν; fem. — σταφυλάς understood" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"answers ἕτερον μέν" },
          { w:"ἄρα", lemma:"ἄρα", pos:"particle", parse:"—",
            gloss:"then, and so", note:"narrative particle" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"(generalizing τε)", note:"epic τε in a general description; not translated" },
          { w:"τρυγόωσιν", lemma:"τρυγάω", pos:"verb", parse:"present active indicative, 3rd plural (epic τρυγόωσι)",
            gloss:"gather in, harvest (grapes)", note:"indefinite 3rd plural — 'they gather'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 125–126 ---- */
      {
        lines: "125–126",
        translation: "and others they tread; and in front are unripe grapes just shedding their blossom, while others are turning dark.",
        greek: [
          { w:"ἄλλας", lemma:"ἄλλος, -η, -ο", pos:"adjective (substantive)", parse:"acc. pl. fem.",
            gloss:"others", note:"object of τραπέουσι" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"τραπέουσι", lemma:"τραπέω", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"tread (grapes), press (in the winepress)", note:"indefinite 3rd plural — 'they tread'" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"πάροιθε", lemma:"πάροιθε(ν)", pos:"adverb", parse:"—",
            gloss:"in front, before", note:"of position — the grapes at the front of the row" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"τ᾽", lemma:"τε", pos:"particle", parse:"(elided τε)",
            gloss:"(generalizing τε)", note:"epic τε; not translated" },
          { w:"ὄμφακές", lemma:"ὄμφαξ, -ακος, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"unripe grape", note:"subject of εἰσιν" },
          { w:"εἰσιν", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"are", note:"'in front are unripe grapes'" },
          { w:"ἄνθος", lemma:"ἄνθος, -εος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"flower, bloom, blossom", note:"object of ἀφιεῖσαι" },
          { w:"ἀφιεῖσαι", lemma:"ἀφίημι", pos:"verb (participle)", parse:"present active participle, fem. nom. pl.",
            gloss:"send forth, let go, shed", note:"agrees with ὄμφακες — 'just shedding the blossom'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἕτεραι", lemma:"ἕτερος, -η, -ον", pos:"adjective (substantive)", parse:"nom. pl. fem.",
            gloss:"others", note:"subject of ὑποπερκάζουσιν" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and, while", note:"connective" },
          { w:"ὑποπερκάζουσιν", lemma:"ὑποπερκάζω", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"begin to turn dark/ripen (of grapes)", note:"'are just growing purple'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 127–128 ---- */
      {
        lines: "127–128",
        translation: "And there well-ordered garden-beds of every kind grow along the furthest row, bright the whole year through.",
        greek: [
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"there", note:"locative" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"κοσμηταὶ", lemma:"κοσμητός, -ή, -όν", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"well-ordered, trim, neatly arranged", note:"attributive with πρασιαί" },
          { w:"πρασιαὶ", lemma:"πρασιή, -ῆς, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"garden-bed, plot", note:"subject of πεφύασιν" },
          { w:"παρὰ", lemma:"παρά", pos:"preposition", parse:"+ accusative",
            gloss:"along, beside", note:"governs ὄρχον" },
          { w:"νείατον", lemma:"νείατος, -η, -ον", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"lowest, last, furthest", note:"attributive with ὄρχον" },
          { w:"ὄρχον", lemma:"ὄρχος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"row (of vines or trees)", note:"object of παρά" },
          { w:"παντοῖαι", lemma:"παντοῖος, -η, -ον", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"of all kinds, manifold", note:"with πρασιαί — 'of every sort'" },
          { w:"πεφύασιν", lemma:"φύω", pos:"verb", parse:"perfect active indicative, 3rd plural (intransitive, epic πεφύασι)",
            gloss:"grow, flourish", note:"intransitive perfect — 'grow, are grown'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐπηετανὸν", lemma:"ἐπηετανός, -όν", pos:"adjective (adverbial)", parse:"neut. acc. sg. used as adverb",
            gloss:"all year long, continually", note:"adverbial — 'flourishing the whole year through'" },
          { w:"γανόωσαι", lemma:"γανάω", pos:"verb (participle)", parse:"present active participle, fem. nom. pl. (epic γανόωσαι)",
            gloss:"shine, gleam, be bright/glossy", note:"agrees with πρασιαί" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 129–131 ---- */
      {
        lines: "129–131",
        translation: "And in it are two springs: the one scatters its water throughout the whole garden, while the other, on the far side, runs beneath the courtyard threshold toward the high house, whence the townsfolk drew their water.",
        greek: [
          { w:"ἐν", lemma:"ἐν", pos:"adverb", parse:"—",
            gloss:"in it, therein", note:"adverbial — 'and in (the garden) are ...'" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"δύω", lemma:"δύο (δύω)", pos:"numeral", parse:"nom. fem.",
            gloss:"two", note:"with κρῆναι" },
          { w:"κρῆναι", lemma:"κρήνη, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"spring, fountain", note:"subject of the (understood) εἰσί" },
          { w:"ἡ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. sg. fem.",
            gloss:"the one", note:"ἡ μέν ... ἡ δέ — 'the one ... the other'" },
          { w:"μέν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by ἡ δ᾽ (130)" },
          { w:"τ᾽", lemma:"τε", pos:"particle", parse:"(elided τε)",
            gloss:"(generalizing τε)", note:"epic τε; not translated" },
          { w:"ἀνὰ", lemma:"ἀνά", pos:"preposition", parse:"+ accusative",
            gloss:"up through, throughout", note:"governs κῆπον" },
          { w:"κῆπον", lemma:"κῆπος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"garden, orchard", note:"object of ἀνά" },
          { w:"ἅπαντα", lemma:"ἅπας, ἅπασα, ἅπαν", pos:"adjective", parse:"masc. acc. sg.",
            gloss:"all, the whole", note:"attributive with κῆπον — 'the whole garden'" },
          { w:"σκίδναται", lemma:"σκίδναμαι (= σκεδάννυμι)", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"scatter, disperse, spread", note:"of the water — 'spreads / is dispersed'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἡ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. sg. fem.",
            gloss:"the other", note:"answering ἡ μέν" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but", note:"connective" },
          { w:"ἑτέρωθεν", lemma:"ἑτέρωθεν", pos:"adverb", parse:"—",
            gloss:"from/on the other side", note:"adverb — the second spring's course" },
          { w:"ὑπ᾽", lemma:"ὑπό", pos:"preposition", parse:"(elided ὑπό) + accusative",
            gloss:"under, beneath", note:"governs οὐδόν (motion under)" },
          { w:"αὐλῆς", lemma:"αὐλή, -ῆς, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"courtyard, court", note:"with οὐδόν — 'the threshold of the court'" },
          { w:"οὐδὸν", lemma:"οὐδός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"threshold", note:"object of ὑπ᾽ — 'beneath the courtyard's threshold'" },
          { w:"ἵησι", lemma:"ἵημι", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"send, let flow, shoot", note:"here of water — 'runs, flows'" },
          { w:"πρὸς", lemma:"πρός", pos:"preposition", parse:"+ accusative",
            gloss:"toward, to", note:"governs δόμον" },
          { w:"δόμον", lemma:"δόμος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"house, home", note:"object of πρός" },
          { w:"ὑψηλόν", lemma:"ὑψηλός, -ή, -όν", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"high, lofty", note:"attributive with δόμον" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὅθεν", lemma:"ὅθεν", pos:"adverb (relative)", parse:"—",
            gloss:"whence, from where", note:"relative adverb of source — from that spring" },
          { w:"ὑδρεύοντο", lemma:"ὑδρεύω", pos:"verb", parse:"imperfect middle indicative, 3rd plural",
            gloss:"draw/fetch water", note:"middle — 'used to draw water for themselves'" },
          { w:"πολῖται", lemma:"πολίτης, -ου, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"citizen, townsman", note:"subject of ὑδρεύοντο" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 132 ---- */
      {
        lines: "132",
        translation: "Such, then, were the splendid gifts of the gods in the house of Alcinous.",
        greek: [
          { w:"τοῖ᾽", lemma:"τοῖος, -η, -ον", pos:"demonstrative adjective", parse:"neut. nom. pl. (elided τοῖα)",
            gloss:"such, of this kind", note:"predicate with δῶρα — summing up the description" },
          { w:"ἄρ᾽", lemma:"ἄρα", pos:"particle", parse:"(elided ἄρα)",
            gloss:"then, so", note:"resumptive — 'such, then'" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"governs Ἀλκινόοιο (δόμοις understood)" },
          { w:"Ἀλκινόοιο", lemma:"Ἀλκίνοος, -ου, ὁ", pos:"proper noun", parse:"gen. sg. masc. (epic -οιο)",
            gloss:"of Alcinous", note:"possessive genitive — 'in (the house) of Alcinous'" },
          { w:"θεῶν", lemma:"θεός, -οῦ, ὁ", pos:"noun", parse:"gen. pl. masc.",
            gloss:"god", note:"possessive genitive with δῶρα — 'gifts of the gods'" },
          { w:"ἔσαν", lemma:"εἰμί", pos:"verb", parse:"imperfect active indicative, 3rd plural (epic = ἦσαν)",
            gloss:"were", note:"main verb" },
          { w:"ἀγλαὰ", lemma:"ἀγλαός, -ή, -όν", pos:"adjective", parse:"neut. nom. pl.",
            gloss:"splendid, shining, glorious", note:"attributive with δῶρα" },
          { w:"δῶρα", lemma:"δῶρον, -ου, τό", pos:"noun", parse:"nom. pl. neut.",
            gloss:"gift", note:"subject of ἔσαν" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 133 ---- */
      {
        lines: "133",
        translation: "There, standing, much-enduring godlike Odysseus gazed in wonder.",
        greek: [
          { w:"ἔνθα", lemma:"ἔνθα", pos:"adverb", parse:"—",
            gloss:"there", note:"locative" },
          { w:"στὰς", lemma:"ἵστημι", pos:"verb (participle)", parse:"aorist active participle, masc. nom. sg. (intransitive)",
            gloss:"stand, halt, take one's stand", note:"circumstantial — 'standing there'" },
          { w:"θηεῖτο", lemma:"θηέομαι (θεάομαι)", pos:"verb", parse:"imperfect middle indicative, 3rd singular",
            gloss:"gaze at, marvel at", note:"main verb; durative imperfect" },
          { w:"πολύτλας", lemma:"πολύτλας, -αντος", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"much-enduring, long-suffering", note:"standing epithet of Odysseus" },
          { w:"δῖος", lemma:"δῖος, -α, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"godlike, divine, noble", note:"epithet of Odysseus" },
          { w:"Ὀδυσσεύς", lemma:"Ὀδυσσεύς, -ῆος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Odysseus", note:"subject of θηεῖτο" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 134–135 ---- */
      {
        lines: "134–135",
        translation: "But when indeed he had marvelled at everything in his heart, swiftly he stepped over the threshold into the house.",
        greek: [
          { w:"αὐτὰρ", lemma:"αὐτάρ", pos:"conjunction", parse:"—",
            gloss:"but, then", note:"strong transitional connective" },
          { w:"ἐπεὶ", lemma:"ἐπεί", pos:"conjunction (temporal)", parse:"—",
            gloss:"when, after", note:"introduces the temporal clause" },
          { w:"δὴ", lemma:"δή", pos:"particle", parse:"—",
            gloss:"indeed, now", note:"emphasizes ἐπεί" },
          { w:"πάντα", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective (substantive)", parse:"neut. acc. pl.",
            gloss:"all things, everything", note:"object of θηήσατο" },
          { w:"ἑῷ", lemma:"ἑός, -ή, -όν", pos:"possessive adjective", parse:"dat. sg. masc.",
            gloss:"his (own)", note:"agrees with θυμῷ" },
          { w:"θηήσατο", lemma:"θηέομαι (θεάομαι)", pos:"verb", parse:"aorist middle indicative, 3rd singular",
            gloss:"gaze at, marvel at", note:"verb of the ἐπεί-clause" },
          { w:"θυμῷ", lemma:"θυμός, -οῦ, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"heart, spirit", note:"dative of place/means — 'in his heart'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καρπαλίμως", lemma:"καρπαλίμως", pos:"adverb", parse:"—",
            gloss:"swiftly, quickly", note:"adverb with ἐβήσετο" },
          { w:"ὑπὲρ", lemma:"ὑπέρ", pos:"preposition", parse:"+ accusative",
            gloss:"over, across", note:"governs οὐδόν" },
          { w:"οὐδὸν", lemma:"οὐδός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"threshold", note:"object of ὑπέρ" },
          { w:"ἐβήσετο", lemma:"βαίνω", pos:"verb", parse:"aorist middle indicative, 3rd singular (mixed aorist)",
            gloss:"go, step, walk", note:"'stepped over'; main verb" },
          { w:"δώματος", lemma:"δῶμα, -ατος, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"house, hall", note:"with εἴσω — 'into the house'" },
          { w:"εἴσω", lemma:"εἴσω", pos:"adverb / preposition", parse:"+ genitive",
            gloss:"inside, into, within", note:"governs δώματος (following its noun) — 'into the interior of the house'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 136–138 ---- */
      {
        lines: "136–138",
        translation: "And he found the leaders and rulers of the Phaeacians pouring libations from their cups to the keen-sighted Argeïphontes, to whom last of all they would pour, whenever they were minded of bed.",
        greek: [
          { w:"εὗρε", lemma:"εὑρίσκω", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"find, come upon", note:"main verb; subject Odysseus" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"Φαιήκων", lemma:"Φαίηξ, -ηκος, ὁ", pos:"proper noun", parse:"gen. pl. masc.",
            gloss:"Phaeacians", note:"possessive genitive with ἡγήτορας/μέδοντας" },
          { w:"ἡγήτορας", lemma:"ἡγήτωρ, -ορος, ὁ", pos:"noun", parse:"acc. pl. masc.",
            gloss:"leader, commander, chief", note:"object of εὗρε" },
          { w:"ἠδὲ", lemma:"ἠδέ", pos:"conjunction", parse:"—",
            gloss:"and", note:"epic 'and', joining ἡγήτορας and μέδοντας" },
          { w:"μέδοντας", lemma:"μέδων, -οντος, ὁ", pos:"noun", parse:"acc. pl. masc.",
            gloss:"ruler, lord, counselor", note:"second object of εὗρε" },
          { w:"σπένδοντας", lemma:"σπένδω", pos:"verb (participle)", parse:"present active participle, masc. acc. pl.",
            gloss:"pour a libation, make a drink-offering", note:"supplementary participle with εὗρε — 'found them pouring'" },
          { w:"δεπάεσσιν", lemma:"δέπας, -αος, τό", pos:"noun", parse:"dat. pl. neut. (epic δεπάεσσι)",
            gloss:"cup, goblet", note:"dative of means — 'with their cups'" },
          { w:"ἐυσκόπῳ", lemma:"ἐύσκοπος, -ον", pos:"adjective", parse:"dat. sg. masc.",
            gloss:"keen-sighted, sharp-eyed", note:"epithet of Hermes; with ἀργεϊφόντῃ" },
          { w:"ἀργεϊφόντῃ", lemma:"ἀργεϊφόντης, -ου, ὁ", pos:"proper noun / epithet", parse:"dat. sg. masc.",
            gloss:"Argeïphontes, slayer of Argus (Hermes)", note:"indirect object of σπένδοντας — 'to Hermes'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ᾧ", lemma:"ὅς, ἥ, ὅ", pos:"relative pronoun", parse:"dat. sg. masc.",
            gloss:"to whom", note:"dative with σπένδεσκον, antecedent ἀργεϊφόντῃ" },
          { w:"πυμάτῳ", lemma:"πύματος, -η, -ον", pos:"adjective", parse:"dat. sg. masc.",
            gloss:"last, hindmost", note:"predicative with ᾧ — 'to whom last of all'" },
          { w:"σπένδεσκον", lemma:"σπένδω", pos:"verb", parse:"imperfect active indicative, 3rd plural (iterative -σκ-)",
            gloss:"pour a libation", note:"iterative imperfect — 'they were wont to pour'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὅτε", lemma:"ὅτε", pos:"conjunction (temporal)", parse:"+ optative (iterative)",
            gloss:"whenever, when", note:"introduces iterative temporal clause with μνησαίατο" },
          { w:"μνησαίατο", lemma:"μιμνήσκω", pos:"verb", parse:"aorist middle optative, 3rd plural (epic -αίατο = -αιντο)",
            gloss:"remember, be mindful of, bethink oneself of", note:"iterative optative — 'whenever they thought of'; governs κοίτου" },
          { w:"κοίτου", lemma:"κοῖτος, -ου, ὁ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"bed, going to bed, sleep", note:"genitive with μνησαίατο — 'of bed'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 139–141 ---- */
      {
        lines: "139–141",
        translation: "But he, much-enduring godlike Odysseus, went through the hall holding the thick mist that Athena had shed about him, until he reached Arete and Alcinous the king.",
        greek: [
          { w:"αὐτὰρ", lemma:"αὐτάρ", pos:"conjunction", parse:"—",
            gloss:"but", note:"transitional connective" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"he", note:"subject — Odysseus" },
          { w:"βῆ", lemma:"βαίνω", pos:"verb", parse:"aorist active indicative, 3rd singular (epic ἔβη → βῆ)",
            gloss:"go, step, walk", note:"'went'; main verb" },
          { w:"διὰ", lemma:"διά", pos:"preposition", parse:"+ accusative",
            gloss:"through", note:"governs δῶμα" },
          { w:"δῶμα", lemma:"δῶμα, -ατος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"house, hall", note:"object of διά" },
          { w:"πολύτλας", lemma:"πολύτλας, -αντος", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"much-enduring", note:"epithet of Odysseus" },
          { w:"δῖος", lemma:"δῖος, -α, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"godlike, divine", note:"epithet" },
          { w:"Ὀδυσσεὺς", lemma:"Ὀδυσσεύς, -ῆος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Odysseus", note:"subject of βῆ" },
          { w:"πολλὴν", lemma:"πολύς, πολλή, πολύ", pos:"adjective", parse:"acc. sg. fem.",
            gloss:"much, thick, dense", note:"attributive with ἠέρα" },
          { w:"ἠέρ᾽", lemma:"ἀήρ, ἠέρος, ὁ/ἡ", pos:"noun", parse:"acc. sg. fem. (elided ἠέρα)",
            gloss:"mist, haze, air", note:"object of ἔχων" },
          { w:"ἔχων", lemma:"ἔχω", pos:"verb (participle)", parse:"present active participle, masc. nom. sg.",
            gloss:"have, hold, keep", note:"circumstantial — 'holding / wrapped in mist'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἥν", lemma:"ὅς, ἥ, ὅ", pos:"relative pronoun", parse:"acc. sg. fem.",
            gloss:"which", note:"object of περίχευεν, antecedent ἠέρα" },
          { w:"οἱ", lemma:"ἕ (οἱ)", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"for/around him", note:"dative of interest with περίχευεν — 'about him'" },
          { w:"περίχευεν", lemma:"περιχέω", pos:"verb", parse:"aorist active indicative, 3rd singular (epic περίχευε)",
            gloss:"pour round, shed around", note:"'which Athena had shed around him'" },
          { w:"Ἀθήνη", lemma:"Ἀθήνη, -ης, ἡ", pos:"proper noun", parse:"nom. sg. fem.",
            gloss:"Athena", note:"subject of περίχευεν" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὄφρ᾽", lemma:"ὄφρα", pos:"conjunction", parse:"+ indicative",
            gloss:"until", note:"introduces temporal clause with ἵκετο" },
          { w:"ἵκετ᾽", lemma:"ἱκνέομαι", pos:"verb", parse:"aorist middle indicative, 3rd singular (elided ἵκετο)",
            gloss:"come to, reach, arrive at", note:"verb of the ὄφρα-clause" },
          { w:"Ἀρήτην", lemma:"Ἀρήτη, -ης, ἡ", pos:"proper noun", parse:"acc. sg. fem.",
            gloss:"Arete", note:"object of ἵκετο — queen of the Phaeacians" },
          { w:"τε", lemma:"τε", pos:"particle (conjunction)", parse:"—",
            gloss:"and", note:"τε ... καί joins Ἀρήτην and Ἀλκίνοον" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"connective" },
          { w:"Ἀλκίνοον", lemma:"Ἀλκίνοος, -ου, ὁ", pos:"proper noun", parse:"acc. sg. masc.",
            gloss:"Alcinous", note:"second object of ἵκετο" },
          { w:"βασιλῆα", lemma:"βασιλεύς, -ῆος, ὁ", pos:"noun", parse:"acc. sg. masc. (epic -ῆα)",
            gloss:"king, chief", note:"in apposition to Ἀλκίνοον" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 142–143 ---- */
      {
        lines: "142–143",
        translation: "And Odysseus cast his arms about the knees of Arete, and just then the god-sent mist flowed back away from him.",
        greek: [
          { w:"ἀμφὶ", lemma:"ἀμφί", pos:"adverb / preposition (tmesis)", parse:"with βάλε — ἀμφιβάλλω",
            gloss:"around, about", note:"ἀμφὶ ... βάλε γούνασι — 'cast around the knees' (tmesis)" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ἄρ᾽", lemma:"ἄρα", pos:"particle", parse:"(elided ἄρα)",
            gloss:"then, so", note:"narrative particle" },
          { w:"Ἀρήτης", lemma:"Ἀρήτη, -ης, ἡ", pos:"proper noun", parse:"gen. sg. fem.",
            gloss:"Arete", note:"possessive genitive with γούνασι — 'Arete's knees'" },
          { w:"βάλε", lemma:"βάλλω", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"throw, cast, lay", note:"with ἀμφί (tmesis) — 'cast around'; main verb" },
          { w:"γούνασι", lemma:"γόνυ, γούνατος, τό", pos:"noun", parse:"dat. pl. neut. (epic γούνασι)",
            gloss:"knee", note:"dative with ἀμφί — 'about the knees'" },
          { w:"χεῖρας", lemma:"χείρ, χειρός, ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"hand, arm", note:"object of βάλε" },
          { w:"Ὀδυσσεύς", lemma:"Ὀδυσσεύς, -ῆος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Odysseus", note:"subject of βάλε" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"connective" },
          { w:"τότε", lemma:"τότε", pos:"adverb", parse:"—",
            gloss:"then, at that moment", note:"temporal" },
          { w:"δή", lemma:"δή", pos:"particle", parse:"—",
            gloss:"indeed, just then", note:"emphatic" },
          { w:"ῥ᾽", lemma:"ἄρα (ῥα)", pos:"particle", parse:"(elided ῥα)",
            gloss:"then, so", note:"narrative particle" },
          { w:"αὐτοῖο", lemma:"αὐτός, -ή, -ό", pos:"intensive/personal pronoun", parse:"gen. sg. masc. (epic -οιο)",
            gloss:"him(self)", note:"genitive of separation with χύτο πάλιν — 'flowed back from him'" },
          { w:"πάλιν", lemma:"πάλιν", pos:"adverb", parse:"—",
            gloss:"back, back again", note:"with χύτο — 'flowed back / away'" },
          { w:"χύτο", lemma:"χέω", pos:"verb", parse:"aorist middle/passive indicative, 3rd singular (root aorist, epic)",
            gloss:"pour; (mid./pass.) flow, be shed, melt away", note:"'the mist poured / flowed back'" },
          { w:"θέσφατος", lemma:"θέσφατος, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"ordained by heaven, divine, wondrous", note:"attributive with ἀήρ" },
          { w:"ἀήρ", lemma:"ἀήρ, ἠέρος, ὁ/ἡ", pos:"noun", parse:"nom. sg. masc./fem.",
            gloss:"mist, haze, air", note:"subject of χύτο" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 144–145 ---- */
      {
        lines: "144–145",
        translation: "And they fell silent, seeing the man throughout the hall; and they marvelled as they gazed. But Odysseus made his entreaty:",
        greek: [
          { w:"οἱ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. pl. masc.",
            gloss:"they", note:"subject — the Phaeacians" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and, but", note:"connective" },
          { w:"ἄνεῳ", lemma:"ἄνεως, -ων", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"silent, mute, speechless", note:"predicate with ἐγένοντο — 'became silent'" },
          { w:"ἐγένοντο", lemma:"γίγνομαι", pos:"verb", parse:"aorist middle indicative, 3rd plural",
            gloss:"become, come to be, be born", note:"'became (silent)'; main verb" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"δόμον", lemma:"δόμος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"house, hall", note:"with κάτα (anastrophe) — 'throughout the house'" },
          { w:"κάτα", lemma:"κατά", pos:"preposition (anastrophe)", parse:"+ accusative",
            gloss:"throughout, down through", note:"governs δόμον; accent thrown back, following its noun" },
          { w:"φῶτα", lemma:"φώς, φωτός, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"man, mortal", note:"object of ἰδόντες — Odysseus" },
          { w:"ἰδόντες", lemma:"ὁράω", pos:"verb (participle)", parse:"aorist active participle, masc. nom. pl.",
            gloss:"see, behold", note:"circumstantial — 'on seeing the man'" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"θαύμαζον", lemma:"θαυμάζω", pos:"verb", parse:"imperfect active indicative, 3rd plural",
            gloss:"wonder, marvel, be amazed", note:"durative imperfect — 'they kept marvelling'" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"connective" },
          { w:"ὁρόωντες", lemma:"ὁράω", pos:"verb (participle)", parse:"present active participle, masc. nom. pl. (epic ὁρόωντες)",
            gloss:"see, look", note:"circumstantial — 'as they gazed'" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"he", note:"subject — Odysseus" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"but", note:"connective" },
          { w:"λιτάνευεν", lemma:"λιτανεύω", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"pray, entreat, beseech", note:"inceptive/durative imperfect — 'began to make his entreaty'" },
          { w:"Ὀδυσσεύς", lemma:"Ὀδυσσεύς, -ῆος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Odysseus", note:"subject of λιτάνευεν" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      }

    ]
  },

  {
    id: "phdr-230a-e",
    title: "Phaedrus 230a–e",
    citation: "Plato, Phaedrus 230a–e — Socrates admires the plane tree by the Ilissus",
    segments: [

      /* ---- 230a ---- */
      {
        lines: "230a",
        translation: "SOCRATES",
        greek: [
          { w:"Σωκράτης", punct:true }
        ]
      },
      {
        translation: "But, my friend, in the middle of our talk — was not this the tree to which you were leading us?",
        greek: [
          { w:"ἀτάρ", lemma:"ἀτάρ", pos:"conjunction (particle)", parse:"—",
            gloss:"but, yet; however", note:"marks an abrupt break — Socrates interrupts himself to notice the scenery" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"with the vocative ἑταῖρε" },
          { w:"ἑταῖρε", lemma:"ἑταῖρος, -ου, ὁ", pos:"noun", parse:"voc. sg. masc.",
            gloss:"companion, comrade, friend", note:"address to Phaedrus" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"μεταξὺ", lemma:"μεταξύ", pos:"preposition (adverbial)", parse:"+ genitive",
            gloss:"in the middle of, between", note:"governs τῶν λόγων — 'in the midst of our conversation'" },
          { w:"τῶν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. pl. masc.",
            gloss:"the", note:"with λόγων" },
          { w:"λόγων", lemma:"λόγος, -ου, ὁ", pos:"noun", parse:"gen. pl. masc.",
            gloss:"word, speech, discourse", note:"object of μεταξύ" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἆρ᾽", lemma:"ἆρα", pos:"particle (interrogative)", parse:"(elided ἆρα)",
            gloss:"(introduces a question)", note:"ἆρ᾽ οὐ expects the answer 'yes' — 'isn't it the case that…?'" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"with ἆρα, makes the question expect an affirmative answer" },
          { w:"τόδε", lemma:"ὅδε, ἥδε, τόδε", pos:"demonstrative pronoun", parse:"nom. sg. neut.",
            gloss:"this (here)", note:"deictic — the tree right in front of them; predicate of ἦν" },
          { w:"ἦν", lemma:"εἰμί", pos:"verb", parse:"imperfect indicative, 3rd singular",
            gloss:"be", note:"imperfect of recognition — 'was (as you told me) this the tree…?'" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with δένδρον" },
          { w:"δένδρον", lemma:"δένδρον, -ου, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"tree", note:"subject of ἦν, with τόδε as predicate" },
          { w:"ἐφ᾽", lemma:"ἐπί", pos:"preposition", parse:"+ accusative (elided ἐπί)",
            gloss:"to, toward", note:"governs ὅπερ — motion toward" },
          { w:"ὅπερ", lemma:"ὅσπερ, ἥπερ, ὅπερ", pos:"relative pronoun", parse:"acc. sg. neut.",
            gloss:"the very one which", note:"object of ἐφ᾽; antecedent τὸ δένδρον; -περ intensifies" },
          { w:"ἦγες", lemma:"ἄγω", pos:"verb", parse:"imperfect active indicative, 2nd singular",
            gloss:"lead, bring", note:"imperfect of the journey in progress — 'you were leading'" },
          { w:"ἡμᾶς", lemma:"ἐγώ (pl. ἡμεῖς)", pos:"personal pronoun", parse:"acc. pl.",
            gloss:"us", note:"direct object of ἦγες" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      {
        translation: "PHAEDRUS",
        greek: [
          { w:"Φαῖδρος", punct:true }
        ]
      },
      {
        translation: "That very one, indeed.",
        greek: [
          { w:"τοῦτο", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative pronoun", parse:"nom. sg. neut.",
            gloss:"this", note:"subject, with the copula understood — 'this (is) the very one'" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"indeed", note:"μὲν οὖν in answers = 'yes, precisely', confirming and strengthening" },
          { w:"οὖν", lemma:"οὖν", pos:"particle", parse:"—",
            gloss:"then, indeed", note:"with μέν — emphatic assent" },
          { w:"αὐτό", lemma:"αὐτός, -ή, -ό", pos:"intensive adjective", parse:"nom. sg. neut.",
            gloss:"itself, the very one", note:"agrees with τοῦτο — 'this very one'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 230b ---- */
      {
        lines: "230b",
        translation: "SOCRATES",
        greek: [
          { w:"Σωκράτης", punct:true }
        ]
      },
      {
        translation: "By Hera, it is a fine resting-place indeed!",
        greek: [
          { w:"νὴ", lemma:"νή", pos:"particle (of swearing)", parse:"+ accusative",
            gloss:"by (…)!", note:"affirmative oath; governs τὴν Ἥραν" },
          { w:"τὴν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with Ἥραν" },
          { w:"Ἥραν", lemma:"Ἥρα, -ας, ἡ", pos:"proper noun", parse:"acc. sg. fem.",
            gloss:"Hera", note:"object of νή — an oath by Hera" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καλή", lemma:"καλός, -ή, -όν", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"beautiful, fine", note:"predicate of ἡ καταγωγή with the copula understood" },
          { w:"γε", lemma:"γε", pos:"particle", parse:"—",
            gloss:"at least, indeed", note:"emphasizes καλή" },
          { w:"ἡ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with καταγωγή" },
          { w:"καταγωγή", lemma:"καταγωγή, -ῆς, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"resting-place, lodging, halting-place", note:"subject of the understood ἐστί" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "For this plane tree is both very spreading and tall,",
        greek: [
          { w:"ἥ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with πλάτανος; accented because the enclitic τε follows" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"and, both", note:"first of a series of τε clauses listing the charms of the spot" },
          { w:"γὰρ", lemma:"γάρ", pos:"particle", parse:"—",
            gloss:"for", note:"explains why the spot is καλή" },
          { w:"πλάτανος", lemma:"πλάτανος, -ου, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"plane tree", note:"subject, with the copula understood" },
          { w:"αὕτη", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative adjective", parse:"nom. sg. fem.",
            gloss:"this", note:"with πλάτανος — 'this plane tree here'" },
          { w:"μάλ᾽", lemma:"μάλα", pos:"adverb", parse:"(elided μάλα)",
            gloss:"very", note:"intensifies the following adjectives" },
          { w:"ἀμφιλαφής", lemma:"ἀμφιλαφής, -ές", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"wide-spreading, broad, ample", note:"predicate with πλάτανος" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"both", note:"τε καί joins ἀμφιλαφής and ὑψηλή" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"with the preceding τε" },
          { w:"ὑψηλή", lemma:"ὑψηλός, -ή, -όν", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"high, lofty, tall", note:"second predicate with πλάτανος" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "and the height of the chaste-tree and its deep shade are altogether lovely,",
        greek: [
          { w:"τοῦ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. masc.",
            gloss:"the", note:"with ἄγνου; accented form because τε follows" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"and", note:"continues the τε-series" },
          { w:"ἄγνου", lemma:"ἄγνος, -ου, ὁ/ἡ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"chaste-tree, agnus castus (a willow-like shrub)", note:"possessive genitive with τὸ ὕψος" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with ὕψος" },
          { w:"ὕψος", lemma:"ὕψος, -ους, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"height", note:"subject, with πάγκαλον as predicate" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the two neuter subjects" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"substantivizes the adjective σύσκιον" },
          { w:"σύσκιον", lemma:"σύσκιος, -ον", pos:"adjective (substantive)", parse:"nom. sg. neut.",
            gloss:"thickly shaded, shady", note:"τὸ σύσκιον = 'the shadiness' — second subject" },
          { w:"πάγκαλον", lemma:"πάγκαλος, -ον", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"altogether beautiful, quite lovely", note:"predicate of both subjects, with the copula understood" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "and how it is at the very peak of its blossom, so that it would make the place as fragrant as could be!",
        greek: [
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"continues the catalogue of delights" },
          { w:"ὡς", lemma:"ὡς", pos:"adverb (exclamatory)", parse:"—",
            gloss:"how!", note:"exclamatory — 'how fully it is in bloom!'" },
          { w:"ἀκμὴν", lemma:"ἀκμή, -ῆς, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"peak, prime, full bloom", note:"object of ἔχει; ἀκμὴν ἔχειν = 'be at its height'" },
          { w:"ἔχει", lemma:"ἔχω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"have, hold", note:"subject is the ἄγνος" },
          { w:"τῆς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. fem.",
            gloss:"the", note:"with ἄνθης" },
          { w:"ἄνθης", lemma:"ἄνθη, -ης, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"bloom, blossom, flower", note:"genitive dependent on ἀκμήν — 'the peak of its bloom'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὡς", lemma:"ὡς", pos:"conjunction", parse:"—",
            gloss:"so that, so as to", note:"with ἄν + optative — a potential/consecutive clause" },
          { w:"ἂν", lemma:"ἄν", pos:"particle (modal)", parse:"—",
            gloss:"(potential)", note:"with the optative παρέχοι" },
          { w:"εὐωδέστατον", lemma:"εὐώδης, -ες", pos:"adjective (superlative)", parse:"acc. sg. masc.",
            gloss:"most fragrant, sweetest-smelling", note:"predicate accusative with τὸν τόπον after παρέχοι" },
          { w:"παρέχοι", lemma:"παρέχω", pos:"verb", parse:"present active optative, 3rd singular",
            gloss:"provide, furnish, render, make", note:"potential optative with ἄν — 'it would make'" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with τόπον" },
          { w:"τόπον", lemma:"τόπος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"place, spot", note:"object of παρέχοι" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "And the spring in turn, a most charming one, flows beneath the plane tree with very cool water, to judge at least by the foot.",
        greek: [
          { w:"ἥ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with πηγή; accented because τε follows" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"and", note:"continues the τε-series" },
          { w:"αὖ", lemma:"αὖ", pos:"adverb", parse:"—",
            gloss:"again, in turn", note:"moves to the next feature of the spot" },
          { w:"πηγὴ", lemma:"πηγή, -ῆς, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"spring, fountain", note:"subject of ῥεῖ" },
          { w:"χαριεστάτη", lemma:"χαρίεις, χαρίεσσα, χαρίεν", pos:"adjective (superlative)", parse:"nom. sg. fem.",
            gloss:"most graceful, most charming, loveliest", note:"predicative with πηγή" },
          { w:"ὑπὸ", lemma:"ὑπό", pos:"preposition", parse:"+ genitive",
            gloss:"under, beneath", note:"governs τῆς πλατάνου" },
          { w:"τῆς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. fem.",
            gloss:"the", note:"with πλατάνου" },
          { w:"πλατάνου", lemma:"πλάτανος, -ου, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"plane tree", note:"object of ὑπό" },
          { w:"ῥεῖ", lemma:"ῥέω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"flow, run", note:"main verb; subject πηγή" },
          { w:"μάλα", lemma:"μάλα", pos:"adverb", parse:"—",
            gloss:"very", note:"intensifies ψυχροῦ" },
          { w:"ψυχροῦ", lemma:"ψυχρός, -ά, -όν", pos:"adjective", parse:"gen. sg. neut.",
            gloss:"cold, cool", note:"attributive with ὕδατος" },
          { w:"ὕδατος", lemma:"ὕδωρ, ὕδατος, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"water", note:"genitive of material with ῥεῖ — 'flows with cold water'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὥστε", lemma:"ὥστε", pos:"conjunction", parse:"+ infinitive",
            gloss:"so as to", note:"with the infinitive τεκμήρασθαι — a limiting result clause" },
          { w:"γε", lemma:"γε", pos:"particle", parse:"—",
            gloss:"at least", note:"restricts the claim — 'so far at least as one may judge'" },
          { w:"τῷ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"dat. sg. masc.",
            gloss:"the", note:"with ποδί" },
          { w:"ποδὶ", lemma:"πούς, ποδός, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"foot", note:"dative of means with τεκμήρασθαι — Socrates has dipped his foot in" },
          { w:"τεκμήρασθαι", lemma:"τεκμαίρομαι", pos:"verb (infinitive)", parse:"aorist middle infinitive",
            gloss:"judge, infer, conclude from evidence", note:"infinitive of result/limitation with ὥστε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "And it seems, from the figurines and the statues, to be a shrine of some Nymphs and of Achelous.",
        greek: [
          { w:"Νυμφῶν", lemma:"Νύμφη, -ης, ἡ", pos:"noun", parse:"gen. pl. fem.",
            gloss:"Nymph", note:"possessive genitive with ἱερόν — 'a shrine of Nymphs'" },
          { w:"τέ", lemma:"τε", pos:"particle", parse:"—",
            gloss:"and", note:"accented because the enclitic τινων follows; τε … καί joins the two divinities" },
          { w:"τινων", lemma:"τις, τι", pos:"indefinite adjective", parse:"gen. pl. fem.",
            gloss:"some, certain", note:"with Νυμφῶν — 'some Nymphs or other'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins Ἀχελῴου to Νυμφῶν" },
          { w:"Ἀχελῴου", lemma:"Ἀχελῷος, -ου, ὁ", pos:"proper noun", parse:"gen. sg. masc.",
            gloss:"Achelous (a river-god)", note:"possessive genitive with ἱερόν; commonly worshipped with the Nymphs" },
          { w:"ἱερὸν", lemma:"ἱερόν, -οῦ, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"shrine, sanctuary, holy place", note:"predicate of εἶναι; the subject (the spot) is understood" },
          { w:"ἀπὸ", lemma:"ἀπό", pos:"preposition", parse:"+ genitive",
            gloss:"from, judging from", note:"source of the inference" },
          { w:"τῶν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. pl. fem.",
            gloss:"the", note:"with κορῶν" },
          { w:"κορῶν", lemma:"κόρη, -ης, ἡ", pos:"noun", parse:"gen. pl. fem.",
            gloss:"maiden; figurine of a maiden, doll", note:"object of ἀπό — votive dolls left at the shrine" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"and", note:"τε καί joins κορῶν and ἀγαλμάτων" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"with the preceding τε" },
          { w:"ἀγαλμάτων", lemma:"ἄγαλμα, -ατος, τό", pos:"noun", parse:"gen. pl. neut.",
            gloss:"statue, image, votive offering", note:"also governed by ἀπό" },
          { w:"ἔοικεν", lemma:"ἔοικα", pos:"verb", parse:"perfect active indicative, 3rd singular (present in sense)",
            gloss:"seem, be like", note:"impersonal-ish 'it seems'; takes the infinitive εἶναι" },
          { w:"εἶναι", lemma:"εἰμί", pos:"verb (infinitive)", parse:"present infinitive",
            gloss:"be", note:"complementary with ἔοικεν" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 230c ---- */
      {
        lines: "230c",
        translation: "And then again, if you like — how welcome and exceedingly sweet the fresh air of the place is!",
        greek: [
          { w:"εἰ", lemma:"εἰ", pos:"conjunction", parse:"—",
            gloss:"if", note:"εἰ δ᾽ αὖ βούλει — a polite parenthesis, 'and if you please'" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and, but", note:"connective" },
          { w:"αὖ", lemma:"αὖ", pos:"adverb", parse:"—",
            gloss:"again, further", note:"adds yet another attraction" },
          { w:"βούλει", lemma:"βούλομαι", pos:"verb", parse:"present middle/passive indicative, 2nd singular",
            gloss:"wish, want, be willing", note:"'if you like' — addressed to Phaedrus" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"substantivizes the adjective εὔπνουν" },
          { w:"εὔπνουν", lemma:"εὔπνους, -ουν (εὔπνοος)", pos:"adjective (substantive)", parse:"nom. sg. neut.",
            gloss:"well-aired, breezy", note:"τὸ εὔπνουν = 'the breeziness, the fresh air'; subject, copula understood" },
          { w:"τοῦ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. masc.",
            gloss:"the", note:"with τόπου" },
          { w:"τόπου", lemma:"τόπος, -ου, ὁ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"place, spot", note:"possessive genitive with τὸ εὔπνουν" },
          { w:"ὡς", lemma:"ὡς", pos:"adverb (exclamatory)", parse:"—",
            gloss:"how!", note:"exclamatory, governing the two predicate adjectives" },
          { w:"ἀγαπητὸν", lemma:"ἀγαπητός, -ή, -όν", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"welcome, delightful, to be prized", note:"predicate of τὸ εὔπνουν" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the two predicates" },
          { w:"σφόδρα", lemma:"σφόδρα", pos:"adverb", parse:"—",
            gloss:"very much, exceedingly", note:"intensifies ἡδύ" },
          { w:"ἡδύ", lemma:"ἡδύς, ἡδεῖα, ἡδύ", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"sweet, pleasant", note:"second predicate of τὸ εὔπνουν" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "Summery and clear, it echoes in answer to the chorus of the cicadas.",
        greek: [
          { w:"θερινόν", lemma:"θερινός, -ή, -όν", pos:"adjective (adverbial)", parse:"acc. sg. neut. used adverbially",
            gloss:"of summer, summery", note:"adverbial accusative with ὑπηχεῖ — describes the quality of the sound" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"both", note:"τε καί joins the two adverbial adjectives" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"with the preceding τε" },
          { w:"λιγυρὸν", lemma:"λιγυρός, -ά, -όν", pos:"adjective (adverbial)", parse:"acc. sg. neut. used adverbially",
            gloss:"clear-toned, shrill, sweet-sounding", note:"adverbial accusative with ὑπηχεῖ" },
          { w:"ὑπηχεῖ", lemma:"ὑπηχέω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"sound in answer, echo back, resound", note:"subject is the place; the ὑπο- prefix takes the dative χορῷ" },
          { w:"τῷ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"dat. sg. masc.",
            gloss:"the", note:"with χορῷ" },
          { w:"τῶν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. pl. masc.",
            gloss:"the", note:"with τεττίγων" },
          { w:"τεττίγων", lemma:"τέττιξ, -ιγος, ὁ", pos:"noun", parse:"gen. pl. masc.",
            gloss:"cicada", note:"possessive genitive with χορῷ" },
          { w:"χορῷ", lemma:"χορός, -οῦ, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"chorus, choir, dance", note:"dative governed by the compound verb ὑπηχεῖ" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "But the most exquisite thing of all is the business of the grass, because it has grown thick enough on a gently sloping rise for one to lie down and have his head beautifully placed.",
        greek: [
          { w:"πάντων", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"gen. pl. neut.",
            gloss:"all", note:"partitive genitive with the superlative κομψότατον" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"but, and", note:"connective, marking the climax of the catalogue" },
          { w:"κομψότατον", lemma:"κομψός, -ή, -όν", pos:"adjective (superlative)", parse:"nom. sg. neut.",
            gloss:"most elegant, most exquisite, most refined", note:"predicate of τὸ τῆς πόας, copula understood" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"τὸ τῆς πόας = 'the matter of the grass' — article + genitive, a common idiom" },
          { w:"τῆς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. fem.",
            gloss:"the", note:"with πόας" },
          { w:"πόας", lemma:"πόα, -ας, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"grass, herbage", note:"genitive dependent on the neuter article τό" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὅτι", lemma:"ὅτι", pos:"conjunction", parse:"—",
            gloss:"because, that", note:"causal — explains why the grass is κομψότατον" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in, on", note:"governs προσάντει" },
          { w:"ἠρέμα", lemma:"ἠρέμα", pos:"adverb", parse:"—",
            gloss:"gently, slightly, quietly", note:"modifies προσάντει — 'a gently sloping' rise" },
          { w:"προσάντει", lemma:"προσάντης, -ες", pos:"adjective (substantive)", parse:"dat. sg. neut.",
            gloss:"sloping upward, uphill, steep", note:"substantivized — 'on a slope'; object of ἐν" },
          { w:"ἱκανὴ", lemma:"ἱκανός, -ή, -όν", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"sufficient, enough, adequate", note:"predicative with the understood subject ἡ πόα; governs the infinitive ἔχειν" },
          { w:"πέφυκε", lemma:"φύω", pos:"verb", parse:"perfect active indicative, 3rd singular",
            gloss:"have grown; be by nature", note:"intransitive perfect of φύω; subject is ἡ πόα — 'has grown (thick)'" },
          { w:"κατακλινέντι", lemma:"κατακλίνω", pos:"verb (participle)", parse:"aorist passive participle, dat. sg. masc.",
            gloss:"lie down, recline", note:"dative of reference — 'for a person who lies down'" },
          { w:"τὴν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with κεφαλήν" },
          { w:"κεφαλὴν", lemma:"κεφαλή, -ῆς, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"head", note:"object of ἔχειν" },
          { w:"παγκάλως", lemma:"παγκάλως", pos:"adverb", parse:"—",
            gloss:"quite beautifully, perfectly", note:"modifies ἔχειν" },
          { w:"ἔχειν", lemma:"ἔχω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"have, hold", note:"epexegetic infinitive with ἱκανή — 'enough for one to have his head lying beautifully'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "And so you have played the guide excellently, dear Phaedrus.",
        greek: [
          { w:"ὥστε", lemma:"ὥστε", pos:"conjunction", parse:"+ indicative",
            gloss:"and so, so that", note:"with the indicative — an actual result" },
          { w:"ἄριστά", lemma:"ἄριστα (adv. of ἄριστος)", pos:"adverb (superlative)", parse:"—",
            gloss:"best, excellently", note:"accented on the final syllable because the enclitic σοι follows" },
          { w:"σοι", lemma:"σύ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"by you", note:"dative of agent with the perfect passive ἐξενάγηται" },
          { w:"ἐξενάγηται", lemma:"ξεναγέω", pos:"verb", parse:"perfect middle/passive indicative, 3rd singular",
            gloss:"act as guide for a stranger, show around", note:"impersonal passive — literally 'the guiding has been done by you'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"with the vocatives φίλε Φαῖδρε" },
          { w:"φίλε", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"voc. sg. masc.",
            gloss:"dear, beloved", note:"attributive with Φαῖδρε" },
          { w:"Φαῖδρε", lemma:"Φαῖδρος, -ου, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Phaedrus", note:"address" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      {
        translation: "PHAEDRUS",
        greek: [
          { w:"Φαῖδρος", punct:true }
        ]
      },
      {
        translation: "But you, my remarkable friend, appear to be a most extraordinary sort of man.",
        greek: [
          { w:"σὺ", lemma:"σύ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"emphatic — turns the compliment back on Socrates" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"but", note:"contrasts Phaedrus's guiding with Socrates's oddity" },
          { w:"γε", lemma:"γε", pos:"particle", parse:"—",
            gloss:"indeed, at any rate", note:"emphasizes σύ" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"with the vocative θαυμάσιε" },
          { w:"θαυμάσιε", lemma:"θαυμάσιος, -α, -ον", pos:"adjective (substantive)", parse:"voc. sg. masc.",
            gloss:"wonderful, marvellous, remarkable", note:"mock-respectful address — 'my extraordinary man'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἀτοπώτατός", lemma:"ἄτοπος, -ον", pos:"adjective (superlative)", parse:"nom. sg. masc.",
            gloss:"most out of place, strangest, most extraordinary", note:"predicate with φαίνῃ; accented on the last syllable because the enclitic τις follows. Note the pun: ἄτοπος literally = 'out of place', and Socrates is out of his usual place" },
          { w:"τις", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. masc. (enclitic)",
            gloss:"a certain, some sort of", note:"softens the superlative — 'a sort of very odd fellow'" },
          { w:"φαίνῃ", lemma:"φαίνω (mid. φαίνομαι)", pos:"verb", parse:"present middle/passive indicative, 2nd singular",
            gloss:"appear, seem", note:"with a predicate adjective (no participle) — 'you appear (to be)'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "For, exactly as you say, you are just like some stranger being shown around, and not like a local at all.",
        greek: [
          { w:"ἀτεχνῶς", lemma:"ἀτεχνῶς", pos:"adverb", parse:"—",
            gloss:"simply, absolutely, exactly", note:"intensifies ἔοικας" },
          { w:"γάρ", lemma:"γάρ", pos:"particle", parse:"—",
            gloss:"for", note:"explains the charge of ἀτοπία" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὃ", lemma:"ὅς, ἥ, ὅ", pos:"relative pronoun", parse:"acc. sg. neut.",
            gloss:"which, the thing which", note:"internal accusative with λέγεις — parenthetical 'as you say'" },
          { w:"λέγεις", lemma:"λέγω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"say, speak", note:"in the parenthetical relative clause" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ξεναγουμένῳ", lemma:"ξεναγέω", pos:"verb (participle)", parse:"present middle/passive participle, dat. sg. masc.",
            gloss:"be shown around as a stranger, be given a guided tour", note:"dative with ἔοικας — 'you resemble a man being shown around'" },
          { w:"τινὶ", lemma:"τις, τι", pos:"indefinite adjective", parse:"dat. sg. masc.",
            gloss:"some, a certain", note:"with the participle ξεναγουμένῳ" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the two datives after ἔοικας" },
          { w:"οὐκ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negates ἐπιχωρίῳ" },
          { w:"ἐπιχωρίῳ", lemma:"ἐπιχώριος, -ον", pos:"adjective (substantive)", parse:"dat. sg. masc.",
            gloss:"of the country, native, local", note:"second dative with ἔοικας — 'and not a native'" },
          { w:"ἔοικας", lemma:"ἔοικα", pos:"verb", parse:"perfect active indicative, 2nd singular (present in sense)",
            gloss:"be like, resemble", note:"takes the dative — ξεναγουμένῳ … καὶ οὐκ ἐπιχωρίῳ" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 230d ---- */
      {
        lines: "230d",
        translation: "So completely do you fail to travel abroad out of the city beyond the borders — and you don't seem to me to go outside the walls at all.",
        greek: [
          { w:"οὕτως", lemma:"οὕτως", pos:"adverb", parse:"—",
            gloss:"so, in this way, to such a degree", note:"'so completely' — sums up the previous comparison" },
          { w:"ἐκ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"out of, from", note:"governs τοῦ ἄστεος" },
          { w:"τοῦ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. neut.",
            gloss:"the", note:"with ἄστεος" },
          { w:"ἄστεος", lemma:"ἄστυ, -εως, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"city, town", note:"object of ἐκ — the city of Athens" },
          { w:"οὔτ᾽", lemma:"οὔτε", pos:"conjunction", parse:"(elided οὔτε)",
            gloss:"neither, and not", note:"first of the pair οὔτε … οὔτε" },
          { w:"εἰς", lemma:"εἰς", pos:"preposition", parse:"+ accusative",
            gloss:"into, to", note:"governs τὴν ὑπερορίαν" },
          { w:"τὴν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with ὑπερορίαν" },
          { w:"ὑπερορίαν", lemma:"ὑπερορία, -ας, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"land beyond the borders, foreign parts", note:"object of εἰς" },
          { w:"ἀποδημεῖς", lemma:"ἀποδημέω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"be away from home, go abroad, travel", note:"first limb of the οὔτε … οὔτε pair" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οὔτ᾽", lemma:"οὔτε", pos:"conjunction", parse:"(elided οὔτε)",
            gloss:"nor", note:"second of the pair" },
          { w:"ἔξω", lemma:"ἔξω", pos:"adverb (as preposition)", parse:"+ genitive",
            gloss:"outside, beyond", note:"governs τείχους" },
          { w:"τείχους", lemma:"τεῖχος, -ους, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"wall, city-wall", note:"object of ἔξω" },
          { w:"ἔμοιγε", lemma:"ἐγώ + γε", pos:"personal pronoun + particle", parse:"dat. sg. (emphatic)",
            gloss:"to me at least", note:"dative with δοκεῖς" },
          { w:"δοκεῖς", lemma:"δοκέω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"seem", note:"with the infinitive ἐξιέναι — 'you seem to go out'" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut. (adverbial)",
            gloss:"the", note:"τὸ παράπαν is an adverbial accusative" },
          { w:"παράπαν", lemma:"παράπαν (τὸ παράπαν)", pos:"adverb", parse:"—",
            gloss:"altogether, at all", note:"with the negative — 'not at all'" },
          { w:"ἐξιέναι", lemma:"ἔξειμι (ἐξιέναι)", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"go out, go forth", note:"complementary infinitive with δοκεῖς" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      {
        translation: "SOCRATES",
        greek: [
          { w:"Σωκράτης", punct:true }
        ]
      },
      {
        translation: "Forgive me, my excellent friend. For I am a lover of learning.",
        greek: [
          { w:"συγγίγνωσκέ", lemma:"συγγιγνώσκω", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"pardon, forgive, make allowance for", note:"takes the dative μοι; accented on the last syllable because the enclitic μοι follows" },
          { w:"μοι", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"me", note:"dative with συγγίγνωσκε" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"with the vocative ἄριστε" },
          { w:"ἄριστε", lemma:"ἄριστος, -η, -ον", pos:"adjective (superlative)", parse:"voc. sg. masc.",
            gloss:"best, most excellent", note:"superlative of ἀγαθός; polite address — 'my good man'" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"φιλομαθὴς", lemma:"φιλομαθής, -ές", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"fond of learning, eager to learn", note:"predicate of εἰμι — Socrates's self-description" },
          { w:"γάρ", lemma:"γάρ", pos:"particle", parse:"—",
            gloss:"for", note:"gives the reason he should be pardoned" },
          { w:"εἰμι", lemma:"εἰμί", pos:"verb", parse:"present indicative, 1st singular",
            gloss:"be", note:"copula with φιλομαθής" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "Now the fields and the trees are not willing to teach me anything, but the people in the city are.",
        greek: [
          { w:"τὰ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. neut.",
            gloss:"the", note:"with χωρία" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by δ᾽ in οἱ δ᾽ … ἄνθρωποι" },
          { w:"οὖν", lemma:"οὖν", pos:"particle", parse:"—",
            gloss:"then, now", note:"resumes and explains φιλομαθὴς γάρ εἰμι" },
          { w:"χωρία", lemma:"χωρίον, -ου, τό", pos:"noun", parse:"nom. pl. neut.",
            gloss:"place, spot, field, country district", note:"subject of ἐθέλει (neuter plural takes a singular verb)" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the two neuter subjects" },
          { w:"τὰ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. neut.",
            gloss:"the", note:"with δένδρα" },
          { w:"δένδρα", lemma:"δένδρον, -ου, τό", pos:"noun", parse:"nom. pl. neut.",
            gloss:"tree", note:"second subject of ἐθέλει" },
          { w:"οὐδέν", lemma:"οὐδείς, οὐδεμία, οὐδέν", pos:"adjective/pronoun", parse:"acc. sg. neut.",
            gloss:"nothing", note:"object of διδάσκειν — διδάσκω takes a double accusative (teach someone something)" },
          { w:"μ᾽", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg. (elided με)",
            gloss:"me", note:"second accusative with διδάσκειν — 'teach me nothing'" },
          { w:"ἐθέλει", lemma:"ἐθέλω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"be willing, wish", note:"singular verb with the neuter plural subjects χωρία καὶ δένδρα" },
          { w:"διδάσκειν", lemma:"διδάσκω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"teach", note:"complementary with ἐθέλει; takes a double accusative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οἱ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. masc.",
            gloss:"the", note:"with ἄνθρωποι, framing the prepositional phrase ἐν τῷ ἄστει" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but", note:"answers μέν — the contrast Socrates is famous for" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"attributive position between article and noun" },
          { w:"τῷ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"dat. sg. neut.",
            gloss:"the", note:"with ἄστει" },
          { w:"ἄστει", lemma:"ἄστυ, -εως, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"city, town", note:"object of ἐν" },
          { w:"ἄνθρωποι", lemma:"ἄνθρωπος, -ου, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"human being, person, man", note:"subject of an understood ἐθέλουσι διδάσκειν — 'but the men in the city do'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "You, however, seem to me to have discovered the drug to get me out.",
        greek: [
          { w:"σὺ", lemma:"σύ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"emphatic subject of δοκεῖς" },
          { w:"μέντοι", lemma:"μέντοι", pos:"particle", parse:"—",
            gloss:"however, yet, to be sure", note:"adversative — sets Phaedrus apart from the trees" },
          { w:"δοκεῖς", lemma:"δοκέω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"seem", note:"with the infinitive ηὑρηκέναι" },
          { w:"μοι", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to me", note:"dative with δοκεῖς" },
          { w:"τῆς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. fem.",
            gloss:"the", note:"with ἐξόδου" },
          { w:"ἐμῆς", lemma:"ἐμός, -ή, -όν", pos:"possessive adjective", parse:"gen. sg. fem.",
            gloss:"my", note:"attributive with ἐξόδου" },
          { w:"ἐξόδου", lemma:"ἔξοδος, -ου, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"going out, departure, exit", note:"objective genitive with φάρμακον — 'the drug for getting me out'" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with φάρμακον" },
          { w:"φάρμακον", lemma:"φάρμακον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"drug, remedy, potion, charm", note:"object of ηὑρηκέναι; the word will return at the end of the dialogue (writing as a φάρμακον)" },
          { w:"ηὑρηκέναι", lemma:"εὑρίσκω", pos:"verb (infinitive)", parse:"perfect active infinitive",
            gloss:"find, discover", note:"complementary with δοκεῖς; the augmented perfect stem ηὑρη- " },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "For just as people lead hungry animals along by dangling a branch or some fruit in front of them,",
        greek: [
          { w:"ὥσπερ", lemma:"ὥσπερ", pos:"conjunction", parse:"—",
            gloss:"just as, exactly as", note:"introduces the simile; answered by σὺ … οὕτω" },
          { w:"γὰρ", lemma:"γάρ", pos:"particle", parse:"—",
            gloss:"for", note:"explains the φάρμακον" },
          { w:"οἱ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. masc.",
            gloss:"the (ones who)", note:"article + participle προσείοντες = 'those who dangle'; subject of ἄγουσιν" },
          { w:"τὰ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. neut.",
            gloss:"the", note:"with θρέμματα" },
          { w:"πεινῶντα", lemma:"πεινάω", pos:"verb (participle)", parse:"present active participle, acc. pl. neut.",
            gloss:"be hungry, hunger", note:"attributive with θρέμματα — 'the hungry beasts'" },
          { w:"θρέμματα", lemma:"θρέμμα, -ατος, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"creature, nursling, beast (of livestock)", note:"object of ἄγουσιν" },
          { w:"θαλλὸν", lemma:"θαλλός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"young shoot, green branch, foliage", note:"object of προσείοντες" },
          { w:"ἤ", lemma:"ἤ", pos:"conjunction", parse:"—",
            gloss:"or", note:"joins θαλλόν and καρπόν" },
          { w:"τινα", lemma:"τις, τι", pos:"indefinite adjective", parse:"acc. sg. masc.",
            gloss:"some, a certain", note:"with καρπόν" },
          { w:"καρπὸν", lemma:"καρπός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"fruit, produce", note:"second object of προσείοντες" },
          { w:"προσείοντες", lemma:"προσείω", pos:"verb (participle)", parse:"present active participle, nom. pl. masc.",
            gloss:"shake at, dangle before, hold out temptingly", note:"attributive with οἱ; expresses the means of ἄγουσιν" },
          { w:"ἄγουσιν", lemma:"ἄγω", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"lead, drive, bring along", note:"main verb of the simile" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "so you, holding out speeches to me in books in just this way, look as though you will lead me all around Attica and anywhere else you like.",
        greek: [
          { w:"σὺ", lemma:"σύ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"subject of φαίνῃ; picks up the ὥσπερ simile" },
          { w:"ἐμοὶ", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg. (emphatic)",
            gloss:"to me", note:"indirect object of προτείνων" },
          { w:"λόγους", lemma:"λόγος, -ου, ὁ", pos:"noun", parse:"acc. pl. masc.",
            gloss:"word, speech, discourse", note:"object of προτείνων — the speeches correspond to the θαλλός of the simile" },
          { w:"οὕτω", lemma:"οὕτω(ς)", pos:"adverb", parse:"—",
            gloss:"thus, in this way", note:"answers ὥσπερ — 'just so'" },
          { w:"προτείνων", lemma:"προτείνω", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"hold out, stretch forth, offer", note:"circumstantial participle of means with φαίνῃ … περιάξειν" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"governs βιβλίοις" },
          { w:"βιβλίοις", lemma:"βιβλίον, -ου, τό", pos:"noun", parse:"dat. pl. neut.",
            gloss:"book, papyrus roll, document", note:"object of ἐν — Phaedrus has Lysias's speech in a book under his cloak" },
          { w:"τήν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with Ἀττικήν; accented because the enclitic τε follows" },
          { w:"τε", lemma:"τε", pos:"particle", parse:"—",
            gloss:"both", note:"τε … καί joins τὴν Ἀττικήν and the ὅποι clause" },
          { w:"Ἀττικὴν", lemma:"Ἀττική, -ῆς, ἡ", pos:"proper noun", parse:"acc. sg. fem.",
            gloss:"Attica", note:"object of περιάξειν" },
          { w:"φαίνῃ", lemma:"φαίνω (mid. φαίνομαι)", pos:"verb", parse:"present middle/passive indicative, 2nd singular",
            gloss:"appear, seem", note:"here with a future infinitive — 'you look as though you will…'" },
          { w:"περιάξειν", lemma:"περιάγω", pos:"verb (infinitive)", parse:"future active infinitive",
            gloss:"lead around, take about", note:"infinitive with φαίνῃ" },
          { w:"ἅπασαν", lemma:"ἅπας, ἅπασα, ἅπαν", pos:"adjective", parse:"acc. sg. fem.",
            gloss:"all, the whole, every bit of", note:"predicative with Ἀττικήν — 'the whole of Attica'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"answers τε" },
          { w:"ὅποι", lemma:"ὅποι", pos:"relative adverb", parse:"—",
            gloss:"to wherever, whither", note:"indefinite relative clause with ἄν + subjunctive" },
          { w:"ἂν", lemma:"ἄν", pos:"particle (modal)", parse:"—",
            gloss:"(with subjunctive)", note:"makes the relative clause indefinite" },
          { w:"ἄλλοσε", lemma:"ἄλλοσε", pos:"adverb", parse:"—",
            gloss:"to another place, elsewhere", note:"with ὅποι — 'anywhere else'" },
          { w:"βούλῃ", lemma:"βούλομαι", pos:"verb", parse:"present middle/passive subjunctive, 2nd singular",
            gloss:"wish, want", note:"subjunctive with ἄν in the indefinite relative clause" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 230e ---- */
      {
        lines: "230e",
        translation: "So now, for the present, having arrived here, I for my part think I shall lie down,",
        greek: [
          { w:"νῦν", lemma:"νῦν", pos:"adverb", parse:"—",
            gloss:"now", note:"turns from the simile back to the immediate situation" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but, and", note:"connective" },
          { w:"οὖν", lemma:"οὖν", pos:"particle", parse:"—",
            gloss:"then, at any rate", note:"δ᾽ οὖν breaks off the digression — 'well, in any case'" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"ἐν τῷ παρόντι = 'at the present moment, for now'" },
          { w:"τῷ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"dat. sg. neut.",
            gloss:"the", note:"substantivizes the participle παρόντι" },
          { w:"παρόντι", lemma:"πάρειμι", pos:"verb (participle, substantive)", parse:"present active participle, dat. sg. neut.",
            gloss:"be present, be at hand", note:"τὸ παρόν = 'the present'; object of ἐν" },
          { w:"δεῦρ᾽", lemma:"δεῦρο", pos:"adverb", parse:"(elided δεῦρο)",
            gloss:"here, hither", note:"with ἀφικόμενος — 'having come here'" },
          { w:"ἀφικόμενος", lemma:"ἀφικνέομαι", pos:"verb (participle)", parse:"aorist middle participle, nom. sg. masc.",
            gloss:"arrive, come to", note:"circumstantial, temporal — 'now that I have arrived'" },
          { w:"ἐγὼ", lemma:"ἐγώ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"emphatic; ἐγὼ μέν answers σὺ δέ in the next clause" },
          { w:"μέν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by σὺ δ᾽" },
          { w:"μοι", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to me", note:"dative with δοκῶ — 'I seem to myself', i.e. 'I intend'" },
          { w:"δοκῶ", lemma:"δοκέω", pos:"verb", parse:"present active indicative, 1st singular",
            gloss:"seem, think", note:"δοκῶ μοι + future infinitive = 'I think I shall'" },
          { w:"κατακείσεσθαι", lemma:"κατάκειμαι", pos:"verb (infinitive)", parse:"future middle infinitive",
            gloss:"lie down, recline", note:"future infinitive with δοκῶ" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },
      {
        translation: "but you — whatever posture you think you will read most easily in, pick that one and read.",
        greek: [
          { w:"σὺ", lemma:"σύ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"answers ἐγὼ μέν" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but", note:"answers μέν" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"governs ὁποίῳ σχήματι" },
          { w:"ὁποίῳ", lemma:"ὁποῖος, -α, -ον", pos:"relative/indirect interrogative adjective", parse:"dat. sg. neut.",
            gloss:"of what sort, whatever kind", note:"with σχήματι; the whole clause is picked up by τοῦθ᾽" },
          { w:"σχήματι", lemma:"σχῆμα, -ατος, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"form, figure, posture, position", note:"object of ἐν" },
          { w:"οἴει", lemma:"οἴομαι", pos:"verb", parse:"present middle/passive indicative, 2nd singular (contracted οἴει)",
            gloss:"think, suppose", note:"with the future infinitive ἀναγνώσεσθαι" },
          { w:"ῥᾷστα", lemma:"ῥᾷστα (adv. superl. of ῥᾴδιος)", pos:"adverb (superlative)", parse:"—",
            gloss:"most easily", note:"modifies ἀναγνώσεσθαι" },
          { w:"ἀναγνώσεσθαι", lemma:"ἀναγιγνώσκω", pos:"verb (infinitive)", parse:"future middle infinitive",
            gloss:"read, read aloud", note:"future infinitive with οἴει" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τοῦθ᾽", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative pronoun", parse:"acc. sg. neut. (elided τοῦτο)",
            gloss:"this", note:"resumes the whole preceding relative clause; object of ἑλόμενος" },
          { w:"ἑλόμενος", lemma:"αἱρέω (mid. αἱρέομαι)", pos:"verb (participle)", parse:"aorist middle participle, nom. sg. masc.",
            gloss:"take for oneself, choose, pick", note:"circumstantial with the imperative — 'having chosen that, read'" },
          { w:"ἀναγίγνωσκε", lemma:"ἀναγιγνώσκω", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"read, read aloud", note:"the command that launches the reading of Lysias's speech" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      }

    ]
  },

  {
    id: "theoc1-1-63",
    title: "Idyll 1.1–63",
    citation: "Theocritus, Idyll 1.1–63 — Thyrsis and the goatherd; the carved cup (Doric)",
    segments: [

      {
        lines: "1",
        translation: "THYRSIS",
        greek: [
          { w:"Θύρσις", punct:true }
        ]
      },

      /* ---- 1–2 ---- */
      {
        lines: "1–2",
        translation: "Sweet is that whispering, goatherd — the pine there — the one that makes its music by the springs,",
        greek: [
          { w:"ἁδύ", lemma:"ἡδύς, -εῖα, -ύ", pos:"adjective", parse:"nom. sg. neut. (Doric ἁδύ = Attic ἡδύ)",
            gloss:"sweet, pleasant", note:"predicate of ψιθύρισμα. Doric keeps original ᾱ where Attic has η: ἁδύς = ἡδύς. This one word tells you at a glance the dialect you are in for the next 56 lines" },
          { w:"τι", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. neut.",
            gloss:"something, somewhat", note:"adverbial/softening — 'something sweet', a light touch that Theocritus likes on his opening adjective" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with ψιθύρισμα" },
          { w:"ψιθύρισμα", lemma:"ψιθύρισμα, -ατος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"whispering, murmur, rustling", note:"subject — the first of the poem's programmatic 'sweet sounds'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and, also", note:"joins ἁ πίτυς as a second subject of the (understood) 'is sweet'" },
          { w:"ἁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. fem. (Doric ἁ = Attic ἡ)",
            gloss:"the", note:"with πίτυς. Doric ἁ, ταί, τοί for ἡ, αἱ, οἱ throughout" },
          { w:"πίτυς", lemma:"πίτυς, -υος, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"pine (tree)", note:"second subject" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"αἰπόλε", lemma:"αἰπόλος, -ου, ὁ", pos:"noun", parse:"voc. sg. masc.",
            gloss:"goatherd", note:"Thyrsis (a shepherd) addressing the goatherd who is his companion in the dialogue" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τήνα", lemma:"τῆνος, -α, -ο", pos:"demonstrative pronoun", parse:"nom. sg. fem. (Doric τῆνος = Attic ἐκεῖνος)",
            gloss:"that, that one there", note:"deictic with πίτυς: 'that pine over there'. τῆνος is the standard Doric demonstrative — you will meet it a dozen times in this passage" },
          { w:"ἁ", lemma:"ὅς, ἥ, ὅ", pos:"relative pronoun", parse:"nom. sg. fem. (Doric ἁ = ἥ)",
            gloss:"which", note:"relative referring to πίτυς; its verb is μελίσδεται. In Doric the relative can look identical to the article ἁ — context (a following verb) tells you it is relative" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ dative",
            gloss:"at, by, near", note:"Doric ποτί = Attic πρός; here + dat. of place 'by the springs'" },
          { w:"ταῖς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"dat. pl. fem.",
            gloss:"the", note:"with παγαῖσι" },
          { w:"παγαῖσι", lemma:"παγά, -ᾶς, ἡ (Doric = πηγή)", pos:"noun", parse:"dat. pl. fem. (Doric -αισι = -αις)",
            gloss:"spring, fountain", note:"Doric on two counts: ᾱ for η (παγά = πηγή) and the fuller dat. pl. ending -αισι for -αις" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"μελίσδεται", lemma:"μελίζομαι (Doric μελίσδομαι)", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"make melody, sing, warble", note:"verb of the relative clause. Doric writes -σδ- where Attic has -ζ-: μελίσδεται = μελίζεται. Watch for the same in συρίσδω, ἐρίσδω, ἑσδώμεθα below" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 2–3 ---- */
      {
        lines: "2–3",
        translation: "and sweetly too do you pipe: after Pan you will carry off the second prize.",
        greek: [
          { w:"ἁδὺ", lemma:"ἡδύς, -εῖα, -ύ", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb (Doric ἁδύ)",
            gloss:"sweetly", note:"neuter adjective used adverbially with συρίσδες — 'you pipe sweetly'" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, but", note:"connective; answered by nothing — simply 'and'" },
          { w:"καὶ", lemma:"καί", pos:"adverb", parse:"—",
            gloss:"also, too", note:"'you too', matching the pine's sweetness to the goatherd's" },
          { w:"τύ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"Doric τύ = σύ. Emphatic nominative subject of συρίσδες" },
          { w:"συρίσδες", lemma:"συρίζω (Doric συρίσδω)", pos:"verb", parse:"present active indicative, 2nd singular (Doric -ες = -εις)",
            gloss:"play the pan-pipe, pipe", note:"two Doric features at once: -σδ- for -ζ-, and 2nd sg. -ες for -εις. From σῦριγξ, the shepherd's syrinx" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"μετὰ", lemma:"μετά", pos:"preposition", parse:"+ accusative",
            gloss:"after, next to", note:"of rank: 'after Pan', i.e. second only to the god of the pipe" },
          { w:"Πᾶνα", lemma:"Πάν, Πανός, ὁ", pos:"proper noun", parse:"acc. sg. masc.",
            gloss:"Pan", note:"the goat-god, inventor of the syrinx and the standard of piping" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with ἆθλον" },
          { w:"δεύτερον", lemma:"δεύτερος, -α, -ον", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"second", note:"attributive with ἆθλον" },
          { w:"ἆθλον", lemma:"ἆθλον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"prize", note:"object of ἀποισῇ" },
          { w:"ἀποισῇ", lemma:"ἀποφέρω (fut. ἀποίσω)", pos:"verb", parse:"future middle indicative, 2nd singular (Doric ἀποισῇ = ἀποίσῃ)",
            gloss:"carry off, win, bear away", note:"future of ἀποφέρω uses the stem οἰσ- (from φέρω's suppletive future οἴσω). Middle 'carry off for yourself' = win. Doric -ῇ for -ῃ" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 4 ---- */
      {
        lines: "4",
        translation: "If he takes the horned he-goat, you will get the she-goat;",
        greek: [
          { w:"αἴ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"Doric αἰ = εἰ. With κα (= ἄν) and the subjunctive it makes a present general/future-more-vivid protasis" },
          { w:"κα", lemma:"ἄν (Doric κα)", pos:"particle", parse:"—",
            gloss:"(modal particle)", note:"Doric κα = Attic ἄν; αἴ κα = ἐάν. Marks the following verb as subjunctive" },
          { w:"τῆνος", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"that one, he", note:"subject of ἕλῃ — 'that other one', i.e. the rival competitor (or Pan)" },
          { w:"ἕλῃ", lemma:"αἱρέω", pos:"verb", parse:"aorist active subjunctive, 3rd singular",
            gloss:"take, seize, win", note:"subjunctive in the αἴ κα protasis. Aorist stem ἑλ- (root aorist of αἱρέω)" },
          { w:"κεραὸν", lemma:"κεραός, -ά, -όν", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"horned", note:"attributive with τράγον" },
          { w:"τράγον", lemma:"τράγος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"he-goat, billy-goat", note:"object of ἕλῃ" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"αἶγα", lemma:"αἴξ, αἰγός, ὁ/ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"goat (here she-goat)", note:"object of λαψῇ — the lesser prize, set against the τράγος" },
          { w:"τὺ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"subject of λαψῇ" },
          { w:"λαψῇ", lemma:"λαμβάνω (fut. λήψομαι, Doric λαψοῦμαι)", pos:"verb", parse:"future middle indicative, 2nd singular (Doric λαψῇ = λήψῃ)",
            gloss:"take, get, receive", note:"apodosis. Doric future of λαμβάνω has α (λαψ-) where Attic has η (ληψ-)" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 5–6 ---- */
      {
        lines: "5–6",
        translation: "but if he takes the she-goat as his prize, the kid falls to you (in turn);",
        greek: [
          { w:"αἴ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"second protasis, balancing the first (αἴ κα … αἴ κα …)" },
          { w:"κα", lemma:"ἄν (Doric κα)", pos:"particle", parse:"—",
            gloss:"(modal particle)", note:"= ἄν; with subjunctive λάβῃ" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but", note:"marks the counter-case to line 4" },
          { w:"αἶγα", lemma:"αἴξ, αἰγός, ὁ/ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"goat, she-goat", note:"object of λάβῃ" },
          { w:"λάβῃ", lemma:"λαμβάνω", pos:"verb", parse:"aorist active subjunctive, 3rd singular",
            gloss:"take, receive", note:"subjunctive in the protasis (contrast the future λαψῇ in the apodosis of line 4)" },
          { w:"τῆνος", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"that one, he", note:"subject of λάβῃ" },
          { w:"γέρας", lemma:"γέρας, -αος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"prize, privilege, gift of honour", note:"in apposition to αἶγα — 'the goat as his prize'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐς", lemma:"εἰς (Doric ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"to, into", note:"Doric/Ionic ἐς = εἰς; here directional, 'down to you'" },
          { w:"τὲ", lemma:"σύ (Doric enclitic τε/τυ = σέ)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"you", note:"Doric τέ (= σέ), object of ἐς: 'to you'. Do not confuse with the connective τε" },
          { w:"καταρρεῖ", lemma:"καταρρέω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"flow down, come down, fall to (one's share)", note:"main verb; χίμαρος is subject — the kid 'streams down' to you as your portion" },
          { w:"ἁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with χίμαρος (here treated as fem.)" },
          { w:"χίμαρος", lemma:"χίμαρος, -ου, ὁ/ἡ", pos:"noun", parse:"nom. sg.",
            gloss:"young goat, kid", note:"subject of καταρρεῖ" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 6 ---- */
      {
        lines: "6",
        translation: "and a kid's flesh is good, until the time you milk her.",
        greek: [
          { w:"χιμάρω", lemma:"χίμαρος, -ου, ὁ/ἡ", pos:"noun", parse:"gen. sg. (Doric -ω = -ου)",
            gloss:"of a kid", note:"possessive genitive with κρέας. Doric contracts -οο/-ου to -ω: χιμάρω = χιμάρου. Same ending on Πριήπω, γλυφάνοιο's neighbours" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"continuative" },
          { w:"καλὸν", lemma:"καλός, -ή, -όν", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"good, fine", note:"predicate of κρέας: '(is) good'" },
          { w:"κρέας", lemma:"κρέας, κρέως, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"flesh, meat", note:"subject; the verb 'is' is understood" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἔστε", lemma:"ἔστε", pos:"conjunction", parse:"—",
            gloss:"until, so long as", note:"temporal conjunction; with κε + subjunctive = 'until such time as you milk'" },
          { w:"κ᾿", lemma:"ἄν (Doric κα/κε)", pos:"particle", parse:"(elided)",
            gloss:"(modal particle)", note:"= ἄν, with the subjunctive ἀμέλξῃς in the indefinite temporal clause" },
          { w:"ἀμέλξῃς", lemma:"ἀμέλγω", pos:"verb", parse:"aorist active subjunctive, 2nd singular",
            gloss:"milk", note:"subjunctive after ἔστε κε. The joke: the kid is good eating only up to the point you would rather keep milking the mother" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      {
        translation: "GOATHERD",
        greek: [
          { w:"Αἰπόλος", punct:true }
        ]
      },

      /* ---- 7–8 ---- */
      {
        lines: "7–8",
        translation: "Sweeter, shepherd, is your song than that resounding water which pours down there from the rock above.",
        greek: [
          { w:"ἅδιον", lemma:"ἡδύς, -εῖα, -ύ (comp. ἡδίων, ἥδιον)", pos:"adjective (comparative)", parse:"nom. sg. neut. (Doric ἅδιον = ἥδιον)",
            gloss:"sweeter, more pleasant", note:"comparative predicate; the goatherd caps Thyrsis by outbidding his ἁδύ with ἅδιον. Doric ᾱ for η again" },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"with the vocative ποιμήν" },
          { w:"ποιμήν", lemma:"ποιμήν, -ένος, ὁ", pos:"noun", parse:"voc. sg. masc.",
            gloss:"shepherd", note:"the goatherd now addresses Thyrsis in turn" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with μέλος" },
          { w:"τεὸν", lemma:"τεός, -ά, -όν (Doric = σός)", pos:"possessive adjective", parse:"nom. sg. neut.",
            gloss:"your", note:"Doric/epic τεός = σός. With μέλος" },
          { w:"μέλος", lemma:"μέλος, -εος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"song, tune, melody", note:"subject — 'your song is sweeter'" },
          { w:"ἢ", lemma:"ἤ", pos:"conjunction", parse:"—",
            gloss:"than", note:"the second term of the comparison after ἅδιον" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with ὕδωρ" },
          { w:"καταχὲς", lemma:"καταχής, -ές", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"resounding, echoing, plashing", note:"attributive with ὕδωρ" },
          { w:"τῆν᾽", lemma:"τῆνος, -α, -ο (adverbial τῆνο = 'there')", pos:"adverb", parse:"(elided)",
            gloss:"there, yonder", note:"Doric demonstrative adverb 'yonder', pointing to the waterfall; qualifies καταλείβεται" },
          { w:"ἀπὸ", lemma:"ἀπό", pos:"preposition", parse:"+ genitive",
            gloss:"from, down from", note:"governs τᾶς πέτρας" },
          { w:"τᾶς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. fem. (Doric τᾶς = τῆς)",
            gloss:"the", note:"with πέτρας" },
          { w:"πέτρας", lemma:"πέτρα, -ας, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"rock, crag", note:"object of ἀπό" },
          { w:"καταλείβεται", lemma:"καταλείβω (mid./pass. καταλείβομαι)", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"trickle down, pour down, stream down", note:"verb of the comparison-clause; subject is ὕδωρ. The comparison is elliptical: 'sweeter than the water (is sweet, as it) pours down'" },
          { w:"ὑψόθεν", lemma:"ὑψόθεν", pos:"adverb", parse:"—",
            gloss:"from on high, from above", note:"of the source of the fall" },
          { w:"ὕδωρ", lemma:"ὕδωρ, ὕδατος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"water", note:"subject of καταλείβεται" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 9 ---- */
      {
        lines: "9",
        translation: "If the Muses take the ewe as their gift,",
        greek: [
          { w:"αἴ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"the goatherd now caps Thyrsis's prize-wager with one of his own" },
          { w:"κα", lemma:"ἄν (Doric κα)", pos:"particle", parse:"—",
            gloss:"(modal particle)", note:"= ἄν, with the subjunctive ἄγωνται" },
          { w:"ταὶ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. fem. (Doric ταί = αἱ)",
            gloss:"the", note:"with Μοῖσαι" },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"nom. pl. fem.",
            gloss:"Muse", note:"subject. Doric Μοῖσα for Μοῦσα (from *Μόνσα): the οι-spelling recurs in μοίσας line 20" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. fem. (Doric τάν = τήν)",
            gloss:"the", note:"with οἴιδα" },
          { w:"οἴιδα", lemma:"ὄϊς, ὄϊος, ἡ", pos:"noun", parse:"acc. sg. fem. (epic/Doric)",
            gloss:"sheep, ewe", note:"object of ἄγωνται. An old consonant-stem accusative of ὄϊς; picked up by τὰν ὄιν in line 11" },
          { w:"δῶρον", lemma:"δῶρον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"gift", note:"predicative/appositional accusative — take the ewe 'as a gift'" },
          { w:"ἄγωνται", lemma:"ἄγω", pos:"verb", parse:"present middle subjunctive, 3rd plural",
            gloss:"take (for oneself), carry off, win", note:"subjunctive in the αἴ κα protasis; middle 'take for themselves'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 10 ---- */
      {
        lines: "10",
        translation: "you will get the stall-fed lamb as your prize;",
        greek: [
          { w:"ἄρνα", lemma:"ἀρήν, ἀρνός, ὁ/ἡ", pos:"noun", parse:"acc. sg.",
            gloss:"lamb", note:"object of λαψῇ. ἀρήν has no nominative in use — the paradigm runs from the oblique stem ἀρν-" },
          { w:"τὺ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"subject of λαψῇ" },
          { w:"σακίταν", lemma:"σακίτας, -α, ὁ (Doric)", pos:"adjective", parse:"acc. sg. masc. (Doric -ταν = -την)",
            gloss:"stall-fed, kept in the fold", note:"attributive with ἄρνα: a pen-reared, well-fattened lamb. Doric acc. -αν for -ην" },
          { w:"λαψῇ", lemma:"λαμβάνω (fut. λήψομαι)", pos:"verb", parse:"future middle indicative, 2nd singular (Doric λαψῇ = λήψῃ)",
            gloss:"take, get, receive", note:"the same Doric future as line 4" },
          { w:"γέρας", lemma:"γέρας, -αος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"prize, gift of honour", note:"appositional accusative, 'as your prize'" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 10–11 ---- */
      {
        lines: "10–11",
        translation: "but if it pleases them to take the lamb, then you will get the ewe afterwards.",
        greek: [
          { w:"αἰ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"the counter-case; here spelled αἰ without elision" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"but", note:"marks the alternative outcome" },
          { w:"κ᾿", lemma:"ἄν (Doric κα)", pos:"particle", parse:"(elided)",
            gloss:"(modal particle)", note:"= ἄν, with the subjunctive ἀρέσκῃ" },
          { w:"ἀρέσκῃ", lemma:"ἀρέσκω", pos:"verb", parse:"present active subjunctive, 3rd singular",
            gloss:"please, be pleasing", note:"impersonal here: 'if it pleases them (τήναις) to take'. The subject is the infinitive phrase ἄρνα λαβεῖν" },
          { w:"τήναις", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"dat. pl. fem.",
            gloss:"to those (women), to them", note:"dative with ἀρέσκῃ — 'if it is pleasing to them', the Muses" },
          { w:"ἄρνα", lemma:"ἀρήν, ἀρνός, ὁ/ἡ", pos:"noun", parse:"acc. sg.",
            gloss:"lamb", note:"object of λαβεῖν" },
          { w:"λαβεῖν", lemma:"λαμβάνω", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"to take", note:"subject of ἀρέσκῃ — 'if to take the lamb pleases them'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὺ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"subject of ἀξῇ" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"then, and", note:"apodotic δέ — picks up the main clause after the protasis" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. fem. (Doric τάν)",
            gloss:"the", note:"with ὄιν" },
          { w:"ὄιν", lemma:"ὄϊς, ὄϊος, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"sheep, ewe", note:"object of ἀξῇ; the ordinary accusative beside the fuller οἴιδα of line 9" },
          { w:"ὕστερον", lemma:"ὕστερος, -α, -ον (adv. ὕστερον)", pos:"adverb", parse:"—",
            gloss:"later, afterwards", note:"the ewe comes to you second, if the lamb goes to the Muses" },
          { w:"ἀξῇ", lemma:"ἄγω (fut. ἄξω)", pos:"verb", parse:"future middle indicative, 2nd singular (Doric ἀξῇ = ἄξῃ)",
            gloss:"lead away, take, carry off", note:"future middle of ἄγω, 'you will take for yourself'. Doric -ῇ for -ῃ" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      {
        lines: "12",
        translation: "THYRSIS",
        greek: [
          { w:"Θύρσις", punct:true }
        ]
      },

      /* ---- 12 ---- */
      {
        lines: "12",
        translation: "Will you not, by the Nymphs — will you, goatherd — sit down here,",
        greek: [
          { w:"λῇς", lemma:"λῶ (Doric, = ἐθέλω)", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"wish, be willing, want", note:"Doric λῶ (λῇς, λῇ) = ἐθέλω/βούλομαι. Governs the infinitive συρίσδεν in line 14. Repeated for urgency" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ genitive",
            gloss:"by (in an oath)", note:"ποτὶ τᾶν Νυμφᾶν = 'by the Nymphs', πρός + gen. of adjuration" },
          { w:"τᾶν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. pl. fem. (Doric τᾶν = τῶν)",
            gloss:"the", note:"with Νυμφᾶν" },
          { w:"Νυμφᾶν", lemma:"νύμφη, -ης, ἡ", pos:"noun", parse:"gen. pl. fem. (Doric -ᾶν = -ῶν)",
            gloss:"Nymph", note:"the local divinities of the springs, fit witnesses to an oath in this landscape" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"λῇς", lemma:"λῶ (Doric)", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"wish, be willing", note:"repeated — 'will you, please will you'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"αἰπόλε", lemma:"αἰπόλος, -ου, ὁ", pos:"noun", parse:"voc. sg. masc.",
            gloss:"goatherd", note:"vocative of address" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τεῖδε", lemma:"τῇδε (Doric τεῖδε)", pos:"adverb", parse:"—",
            gloss:"here, in this place", note:"Doric τεῖδε = τῇδε; local adverb with καθίξας" },
          { w:"καθίξας", lemma:"καθίζω", pos:"verb (participle)", parse:"aorist active participle, nom. sg. masc. (Doric ξ-aorist)",
            gloss:"having sat down, seating oneself", note:"circumstantial with the wish: 'do you wish, having sat here, to pipe?' Doric forms the aorist of -ζω verbs in -ξα (καθίξας, cf. καθίξῃ line 51)" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 13 ---- */
      {
        lines: "13",
        translation: "where this downhill slope is, and the tamarisks,",
        greek: [
          { w:"ὡς", lemma:"ὡς", pos:"adverb (relative, local)", parse:"—",
            gloss:"where", note:"here local 'where' (= ὅπου), introducing the place; not the more common 'as/that'" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with κάταντες/γεώλοφον, subject of an understood 'is'" },
          { w:"κάταντες", lemma:"κάταντες, -ους, τό / κάταντης, -ες", pos:"adjective (substantival)", parse:"nom. sg. neut.",
            gloss:"downward slope, descent", note:"'this downhill ground'; with the understood verb 'is'" },
          { w:"τοῦτο", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative pronoun", parse:"nom. sg. neut.",
            gloss:"this", note:"deictic, pointing to the spot" },
          { w:"γεώλοφον", lemma:"γεώλοφον, -ου, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"hillock, ridge, rise of ground", note:"in apposition to κάταντες — the sloping little rise" },
          { w:"αἵ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. fem. (Doric)",
            gloss:"the", note:"with μυρῖκαι, a second subject of the understood 'are here'" },
          { w:"τε", lemma:"τε", pos:"conjunction (enclitic)", parse:"—",
            gloss:"and", note:"connective 'and the tamarisks (are here too)'" },
          { w:"μυρῖκαι", lemma:"μυρίκη, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"tamarisk", note:"the shrub of dry pastoral ground; second subject" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 14 ---- */
      {
        lines: "14",
        translation: "to pipe? And I will pasture the goats here meanwhile.",
        greek: [
          { w:"συρίσδεν", lemma:"συρίζω (Doric συρίσδω)", pos:"verb (infinitive)", parse:"present active infinitive (Doric -εν = -ειν)",
            gloss:"to pipe, to play the syrinx", note:"the infinitive governed by λῇς back in line 12; the intervening ὡς-clause has delayed it. Doric infinitive -εν for -ειν" },
          { w:";", punct:true, nospaceBefore:true },
          { w:"τὰς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. fem. (Doric τάς)",
            gloss:"the", note:"with αἶγας" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and, meanwhile", note:"marks Thyrsis's own share of the arrangement" },
          { w:"αἶγας", lemma:"αἴξ, αἰγός, ὁ/ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"goat", note:"object of νομευσῶ" },
          { w:"ἐγὼν", lemma:"ἐγώ (Doric/epic ἐγών)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"ἐγών before a vowel (here before ἐν); emphatic 'I for my part'" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"governs τῷδε" },
          { w:"τῷδε", lemma:"ὅδε, ἥδε, τόδε", pos:"demonstrative pronoun", parse:"dat. sg. masc./neut.",
            gloss:"this (place)", note:"'here, in this spot'; object of ἐν" },
          { w:"νομευσῶ", lemma:"νομεύω", pos:"verb", parse:"future active indicative, 1st singular (Doric -σῶ = -σω)",
            gloss:"pasture, herd, graze", note:"Thyrsis will mind the flock while the goatherd listens. Doric contracts the future -έσω/-σω to -σῶ" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      {
        lines: "15",
        translation: "GOATHERD",
        greek: [
          { w:"Αἰπόλος", punct:true }
        ]
      },

      /* ---- 15–16 ---- */
      {
        lines: "15–16",
        translation: "It is not lawful, shepherd — at noontide it is not lawful for us — to pipe.",
        greek: [
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"with θέμις: 'it is not right'" },
          { w:"θέμις", lemma:"θέμις, ἡ", pos:"noun (predicate)", parse:"nom. sg. fem. (indeclinable in this use)",
            gloss:"(divine) law, that which is right/allowed", note:"predicate with understood ἐστί: 'it is not θέμις', not sanctioned by divine custom" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"with ποιμήν" },
          { w:"ποιμήν", lemma:"ποιμήν, -ένος, ὁ", pos:"noun", parse:"voc. sg. masc.",
            gloss:"shepherd", note:"address to Thyrsis" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut. (adverbial)",
            gloss:"the", note:"with μεσαμβρινόν, forming an adverbial accusative of time" },
          { w:"μεσαμβρινὸν", lemma:"μεσημβρινός, -ή, -όν (Doric μεσαμβρινός)", pos:"adjective (adverbial)", parse:"acc. sg. neut.",
            gloss:"at midday, at noon", note:"accusative of time: 'at the noon hour'. Doric ᾱ for η. Noon is Pan's dangerous, sacred rest-time" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"θέμις repeated for emphasis — the prohibition is doubled" },
          { w:"θέμις", lemma:"θέμις, ἡ", pos:"noun (predicate)", parse:"nom. sg. fem.",
            gloss:"right, lawful, permitted", note:"the emphatic repetition frames the noon prohibition" },
          { w:"ἄμμιν", lemma:"ἐγώ (Aeolic/Doric ἄμμιν = ἡμῖν)", pos:"personal pronoun", parse:"dat. pl.",
            gloss:"for us, to us", note:"dative of the person concerned with θέμις. ἄμμι(ν) is the epic/Aeolic-Doric dat. pl. of the 1st person" },
          { w:"συρίσδεν", lemma:"συρίζω (Doric συρίσδω)", pos:"verb (infinitive)", parse:"present active infinitive (Doric -εν)",
            gloss:"to pipe", note:"the real subject of οὐ θέμις (ἐστί): 'to pipe is not right for us'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 16–17 ---- */
      {
        lines: "16–17",
        translation: "We fear Pan; for at that hour, worn out from the hunt, he takes his rest; and he is bitter,",
        greek: [
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with Πᾶνα" },
          { w:"Πᾶνα", lemma:"Πάν, Πανός, ὁ", pos:"proper noun", parse:"acc. sg. masc.",
            gloss:"Pan", note:"object of δεδοίκαμες — the god not to be disturbed at noon" },
          { w:"δεδοίκαμες", lemma:"δείδω (perf. δέδοικα, with pres. sense)", pos:"verb", parse:"perfect active indicative, 1st plural (Doric -μες = -μεν)",
            gloss:"fear, dread, stand in awe of", note:"the perfect δέδοικα of δείδω has present meaning ('we fear'). Doric 1st pl. -μες for -μεν — one of the dialect's most reliable tells" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"ἦ", lemma:"ἦ", pos:"particle (affirmative)", parse:"—",
            gloss:"truly, indeed, for sure", note:"ἦ γάρ = 'for indeed', giving the reason for the fear" },
          { w:"γὰρ", lemma:"γάρ", pos:"conjunction (causal)", parse:"—",
            gloss:"for", note:"introduces the explanation" },
          { w:"ἀπ᾿", lemma:"ἀπό", pos:"preposition", parse:"+ genitive (elided)",
            gloss:"from, after", note:"governs ἄγρας" },
          { w:"ἄγρας", lemma:"ἄγρα, -ας, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"hunt, hunting, the chase", note:"object of ἀπ᾿; Pan rests 'after the hunt'" },
          { w:"τανίκα", lemma:"τηνίκα (Doric τανίκα)", pos:"adverb", parse:"—",
            gloss:"at that time, then, at that hour", note:"Doric τανίκα = τηνίκα — noon, the hour just named" },
          { w:"κεκμακὼς", lemma:"κάμνω (perf. κέκμηκα, Doric κέκμακα)", pos:"verb (participle)", parse:"perfect active participle, nom. sg. masc. (Doric -μακ- = -μηκ-)",
            gloss:"having grown weary, exhausted", note:"circumstantial with ἀμπαύεται — 'worn out, he rests'. Doric ᾱ in the perfect stem" },
          { w:"ἀμπαύεται", lemma:"ἀναπαύομαι (apocope ἀμπαύομαι)", pos:"verb", parse:"present middle indicative, 3rd singular",
            gloss:"rest, take one's rest", note:"ἀνα- apocopated and assimilated to ἀμ- before π — a regular epic/Doric feature (cf. ἄμμιν)" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"ἔστι", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"is", note:"'and he is bitter'; predicate πικρός" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"continuative" },
          { w:"πικρός", lemma:"πικρός, -ά, -όν", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"bitter, sharp, harsh (of temper)", note:"predicate of Pan — dangerous to cross when roused" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 18 ---- */
      {
        lines: "18",
        translation: "and always the sharp bile sits upon his nostril.",
        greek: [
          { w:"καί", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins a second clause describing Pan's temper" },
          { w:"οἱ", lemma:"ἕ (enclitic 3rd person pron.)", pos:"personal pronoun", parse:"dat. sg. (enclitic οἱ)",
            gloss:"for him, on him", note:"dative of possession/reference — 'his bile'" },
          { w:"ἀεὶ", lemma:"ἀεί", pos:"adverb", parse:"—",
            gloss:"always, ever", note:"of Pan's permanent irascibility" },
          { w:"δριμεῖα", lemma:"δριμύς, -εῖα, -ύ", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"sharp, biting, pungent, keen", note:"attributive with χολά" },
          { w:"χολὰ", lemma:"χολή, -ῆς, ἡ (Doric χολά)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"bile, gall; anger, wrath", note:"subject of κάθηται. Physiological bile stands for a hot temper. Doric ᾱ for η" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ dative",
            gloss:"at, on, upon", note:"ποτὶ ῥινί = 'at his nostril', the seat of a flaring temper" },
          { w:"ῥινὶ", lemma:"ῥίς, ῥινός, ἡ", pos:"noun", parse:"dat. sg. fem.",
            gloss:"nose, nostril", note:"object of ποτί" },
          { w:"κάθηται", lemma:"κάθημαι", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"sit, be seated, settle", note:"vivid image — anger 'sits' at the nose, ready to snort out" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 19–20 ---- */
      {
        lines: "19–20",
        translation: "But you, Thyrsis — since you used to sing the sorrows of Daphnis and have reached the summit of the bucolic Muse —",
        greek: [
          { w:"ἀλλὰ", lemma:"ἀλλά", pos:"conjunction", parse:"—",
            gloss:"but", note:"turns from the prohibition to the proposal: not piping, but the song of Daphnis" },
          { w:"τὺ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"emphatic subject, resumed by the imperative-force of the sentence in 21" },
          { w:"γὰρ", lemma:"γάρ", pos:"conjunction", parse:"—",
            gloss:"for, since", note:"'since you (are the man who)…' — γάρ giving the ground for the coming invitation" },
          { w:"δή", lemma:"δή", pos:"particle", parse:"—",
            gloss:"indeed, now", note:"emphasizes τύ — 'you, precisely you'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Θύρσι", lemma:"Θύρσις, -ιος/-ιδος, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Thyrsis", note:"vocative of the shepherd-singer" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὰ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. neut.",
            gloss:"the", note:"with ἄλγε᾽" },
          { w:"Δάφνιδος", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"gen. sg. masc.",
            gloss:"Daphnis", note:"possessive genitive: 'the sorrows of Daphnis', the archetypal cowherd whose death-song Thyrsis will sing" },
          { w:"ἄλγε᾽", lemma:"ἄλγος, -εος, τό", pos:"noun", parse:"acc. pl. neut. (ἄλγεα, elided)",
            gloss:"pain, grief, sorrow, suffering", note:"object of ἀείδες — the theme of the great song to come" },
          { w:"ἀείδες", lemma:"ἀείδω (= ᾄδω)", pos:"verb", parse:"present active indicative, 2nd singular (Doric -ες = -εις)",
            gloss:"sing (of)", note:"here of settled practice, 'you sing / have made your song' — Thyrsis is the recognized master of the Daphnis lament. Doric 2nd sg. -ες" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins a second qualification of Thyrsis" },
          { w:"τᾶς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. fem. (Doric τᾶς)",
            gloss:"the", note:"with βουκολικᾶς μοίσας" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem.",
            gloss:"bucolic, of the cowherd, pastoral", note:"attributive with μοίσας — the very word for the genre Theocritus is founding" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ accusative",
            gloss:"to, up to", note:"with τὸ πλέον, of the point reached: 'to the greater part / the height'" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with πλέον" },
          { w:"πλέον", lemma:"πλείων, πλέον (comp. of πολύς)", pos:"adjective (substantival)", parse:"acc. sg. neut.",
            gloss:"the greater part, the utmost, the height", note:"ἐπὶ τὸ πλέον = 'to the top', of mastery attained" },
          { w:"ἵκεο", lemma:"ἱκνέομαι", pos:"verb", parse:"aorist middle indicative, 2nd singular (epic ἵκεο = ἵκου, uncontracted)",
            gloss:"come to, reach, attain", note:"'you have reached'; uncontracted -εο for -ου, as regularly in epic. Governs ἐπὶ τὸ πλέον" },
          { w:"μοίσας", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"Muse; song, poetic art", note:"the bucolic Μοῖσα — the art of pastoral song. Same οι-spelling as Μοῖσαι line 9" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 21 ---- */
      {
        lines: "21",
        translation: "come, let us sit here beneath the elm, over against Priapus",
        greek: [
          { w:"δεῦρ᾽", lemma:"δεῦρο", pos:"adverb", parse:"(elided δεῦρο)",
            gloss:"here, hither; come!", note:"adverb of invitation launching the hortatory subjunctive ἑσδώμεθα" },
          { w:"ὑπὸ", lemma:"ὑπό", pos:"preposition", parse:"+ accusative",
            gloss:"under, beneath", note:"ὑπό + acc. of the place moved to and settled under: 'in under the elm'" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. fem. (Doric τάν)",
            gloss:"the", note:"with πτελέαν" },
          { w:"πτελέαν", lemma:"πτελέα, -ας, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"elm (tree)", note:"object of ὑπό — the shade for their song" },
          { w:"ἑσδώμεθα", lemma:"ἕζομαι (Doric ἕσδομαι)", pos:"verb", parse:"present middle subjunctive, 1st plural (hortatory)",
            gloss:"sit down, seat oneself", note:"hortatory subjunctive, 'let us sit'. Doric -σδ- for -ζ- (ἕσδομαι = ἕζομαι), as in μελίσδεται, συρίσδω" },
          { w:"τῶ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. sg. masc. (Doric τῶ = τοῦ)",
            gloss:"the", note:"with Πριήπω; both governed by κατεναντίον in line 22" },
          { w:"τε", lemma:"τε", pos:"conjunction (enclitic)", parse:"—",
            gloss:"and", note:"τε … καί coordinating Πριήπω and τᾶν κρανίδων" },
          { w:"Πριήπω", lemma:"Πρίηπος, -ου, ὁ (= Πρίαπος)", pos:"proper noun", parse:"gen. sg. masc. (Doric -ω = -ου)",
            gloss:"Priapus", note:"the rustic fertility-god whose statue stands in the grove. Doric gen. -ω for -ου" },
        ]
      },

      /* ---- 22–23 ---- */
      {
        lines: "22–23",
        translation: "and the springs, just where that shepherds' seat is, and the oaks.",
        greek: [
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"answers τε in line 21, joining τᾶν κρανίδων to τῶ Πριήπω" },
          { w:"τᾶν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"gen. pl. fem. (Doric τᾶν = τῶν)",
            gloss:"the", note:"with κρανίδων" },
          { w:"κρανίδων", lemma:"κρανίς, -ίδος, ἡ (dimin. of κράνα = κρήνη)", pos:"noun", parse:"gen. pl. fem.",
            gloss:"spring, little fountain", note:"governed by κατεναντίον. κράνα is the Doric of κρήνη; κρανίς its diminutive" },
          { w:"κατεναντίον", lemma:"κατεναντίον", pos:"preposition/adverb", parse:"+ genitive",
            gloss:"opposite, over against, facing", note:"governs both τῶ Πριήπω and τᾶν κρανίδων — the seat faces the god's statue and the springs" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ᾇπερ", lemma:"ᾗπερ (Doric ᾇπερ)", pos:"relative adverb", parse:"—",
            gloss:"just where, in the very place where", note:"Doric ᾇ = ᾗ; -περ intensifies ('exactly where'). Introduces the clause locating the θῶκος" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with θῶκος" },
          { w:"θῶκος", lemma:"θῶκος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"seat, chair", note:"subject of the understood 'is'; the customary sitting-place of the herdsmen" },
          { w:"τῆνος", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"that (well-known)", note:"'that seat there', pointing to the familiar spot" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with ποιμενικός, in attributive position after the noun" },
          { w:"ποιμενικὸς", lemma:"ποιμενικός, -ή, -όν", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"of shepherds, pastoral", note:"attributive with θῶκος — the herdsmen's own seat" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"adds a second thing found in that place" },
          { w:"ταὶ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. fem. (Doric ταί = αἱ)",
            gloss:"the", note:"with δρύες" },
          { w:"δρύες", lemma:"δρῦς, δρυός, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"oak (tree)", note:"a second landmark of the singing-place" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 23–24 ---- */
      {
        lines: "23–24",
        translation: "And if you sing as once you sang competing against Chromis from Libya,",
        greek: [
          { w:"αἰ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"opens the wager-protasis; apodosis in line 25 (δωσῶ)" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, but", note:"transitional" },
          { w:"κ᾿", lemma:"ἄν (Doric κα)", pos:"particle", parse:"(elided)",
            gloss:"(modal particle)", note:"= ἄν, with the subjunctive ἀείσῃς" },
          { w:"ἀείσῃς", lemma:"ἀείδω", pos:"verb", parse:"aorist active subjunctive, 2nd singular",
            gloss:"sing", note:"subjunctive in the αἰ κε protasis" },
          { w:"ὡς", lemma:"ὡς", pos:"conjunction", parse:"—",
            gloss:"as, in the way that", note:"comparative 'as (you sang) when…'; introduces ὅκα" },
          { w:"ὅκα", lemma:"ὅτε (Doric ὅκα)", pos:"conjunction (temporal)", parse:"—",
            gloss:"when, once when", note:"Doric ὅκα = ὅτε; the -κα form belongs with τανίκα, ἄλλοκα — Doric replaces the ὁτ-/τοτ- family with ὁκ-/τοκ-" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with Χρόμιν" },
          { w:"Λιβύαθε", lemma:"Λιβύη, -ης, ἡ (+ suffix -θε(ν))", pos:"adverb (source)", parse:"— (ablatival -θε)",
            gloss:"from Libya", note:"the suffix -θε(ν) marks origin: 'Chromis, the man from Libya' (cf. οἴκοθεν 'from home')" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"against, in contest with", note:"ποτί + acc. of the rival: 'competing against Chromis'" },
          { w:"Χρόμιν", lemma:"Χρόμις, -ιος, ὁ", pos:"proper noun", parse:"acc. sg. masc.",
            gloss:"Chromis", note:"a rival singer; object of ποτί" },
          { w:"ᾆσας", lemma:"ἀείδω (aor. ᾖσα/ἄεισα)", pos:"verb (participle)", parse:"aorist active participle, nom. sg. masc.",
            gloss:"having sung", note:"circumstantial with the understood 'you' — 'when you sang, contending'" },
          { w:"ἐρίσδων", lemma:"ἐρίζω (Doric ἐρίσδω)", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"contend, vie, compete", note:"circumstantial of manner. Doric -σδ- for -ζ- again" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 25 ---- */
      {
        lines: "25",
        translation: "I will give you a twin-bearing she-goat to milk three times over,",
        greek: [
          { w:"αἶγά", lemma:"αἴξ, αἰγός, ὁ/ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"goat, she-goat", note:"object of δωσῶ; the apodosis of the wager" },
          { w:"τέ", lemma:"τε", pos:"conjunction (enclitic)", parse:"—",
            gloss:"and", note:"connective τε — 'and I'll give…'; the two gifts (goat and cup) are linked τε … καί (line 27)" },
          { w:"τοι", lemma:"σύ (Doric/epic τοι = σοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to you, for you", note:"dative of the recipient with δωσῶ" },
          { w:"δωσῶ", lemma:"δίδωμι (fut. δώσω)", pos:"verb", parse:"future active indicative, 1st singular (Doric δωσῶ = δώσω)",
            gloss:"give", note:"apodosis of αἰ … ἀείσῃς. Doric accent/contraction on the future" },
          { w:"διδυματόκον", lemma:"διδυματόκος, -ον", pos:"adjective", parse:"acc. sg. fem.",
            gloss:"bearing twins, mother of twins", note:"attributive with αἶγα — a doubly productive prize" },
          { w:"ἐς", lemma:"εἰς (Doric ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"to the amount of, for", note:"ἐς τρίς = 'up to three times, thrice over'" },
          { w:"τρὶς", lemma:"τρίς", pos:"adverb (numeral)", parse:"—",
            gloss:"three times, thrice", note:"the goat gives so much milk she can be milked three times besides nursing her kids" },
          { w:"ἀμέλξαι", lemma:"ἀμέλγω", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"to milk", note:"epexegetic/consecutive infinitive: a goat '(such as) to milk three times'" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 26 ---- */
      {
        lines: "26",
        translation: "which, though she has two kids, is milked besides into two pails.",
        greek: [
          { w:"ἃ", lemma:"ὅς, ἥ, ὅ (Doric ἅ = ἥ)", pos:"relative pronoun", parse:"nom. sg. fem.",
            gloss:"which, who", note:"relative referring to αἶγα; subject of ποταμέλγεται. Doric ἅ = ἥ" },
          { w:"δύ᾽", lemma:"δύο", pos:"numeral", parse:"acc. (elided δύο)",
            gloss:"two", note:"with ἐρίφως, object of ἔχοισ᾽" },
          { w:"ἔχοισ᾽", lemma:"ἔχω", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric ἔχοισα = ἔχουσα)",
            gloss:"have, hold; (here) suckle, have (kids)", note:"concessive circumstantial: 'though she has two kids'. Doric -οισα for the participial -ουσα (from -ονσα)" },
          { w:"ἐρίφως", lemma:"ἔριφος, -ου, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ως = -ους)",
            gloss:"kid (young goat)", note:"object of ἔχοισ᾽. Doric acc. pl. -ως for -ους" },
          { w:"ποταμέλγεται", lemma:"προσαμέλγομαι (Doric ποτ-)", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"be milked besides / in addition", note:"ποτ- (= προσ-) 'in addition': she is milked on top of nursing. Doric ποτί/ποτ- for προς-" },
          { w:"ἐς", lemma:"εἰς (Doric ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"into", note:"of the vessels filled" },
          { w:"δύο", lemma:"δύο", pos:"numeral", parse:"acc.",
            gloss:"two", note:"with πέλλας" },
          { w:"πέλλας", lemma:"πέλλα, -ας, ἡ", pos:"noun", parse:"acc. pl. fem. (Doric -ας)",
            gloss:"milk-pail", note:"object of ἐς" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 27–28 ---- */
      {
        lines: "27–28",
        translation: "and a deep ivy-wood cup, sealed with sweet wax, two-handled, newly made, still smelling of the knife.",
        greek: [
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and, also", note:"the second gift; still object of δωσῶ" },
          { w:"βαθὺ", lemma:"βαθύς, -εῖα, -ύ", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"deep", note:"attributive with κισσύβιον" },
          { w:"κισσύβιον", lemma:"κισσύβιον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"ivy-wood cup, rustic drinking-bowl", note:"object of δωσῶ; the famous ekphrastic cup, described for the next 30 lines" },
          { w:"κεκλυσμένον", lemma:"κλύζω", pos:"verb (participle)", parse:"perfect middle/passive participle, acc. sg. neut.",
            gloss:"washed over, coated, sealed", note:"attributive with κισσύβιον — its surface sealed over with wax" },
          { w:"ἁδέι", lemma:"ἡδύς, -εῖα, -ύ (Doric ἁδύς)", pos:"adjective", parse:"dat. sg. masc. (uncontracted ἁδέϊ)",
            gloss:"sweet(-smelling)", note:"with κηρῷ; uncontracted -έι for -εῖ. Doric ᾱ, third occurrence of the ἁδύς root" },
          { w:"κηρῷ", lemma:"κηρός, -οῦ, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"(bees')wax", note:"dative of means with κεκλυσμένον — coated with fragrant wax" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἀμφῶες", lemma:"ἀμφώης, -ες", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"two-handled, with a handle on each side", note:"attributive with κισσύβιον" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"νεοτευχές", lemma:"νεοτευχής, -ές", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"newly made, fresh-fashioned", note:"attributive with κισσύβιον" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἔτι", lemma:"ἔτι", pos:"adverb", parse:"—",
            gloss:"still, yet", note:"'still smelling', so new is the work" },
          { w:"γλυφάνοιο", lemma:"γλύφανον, -ου, τό", pos:"noun", parse:"gen. sg. neut. (epic -οιο = -ου)",
            gloss:"carving-knife, graver, chisel", note:"genitive with ποτόσδον (verbs of smelling take the gen. of what is smelt of). Epic gen. -οιο" },
          { w:"ποτόσδον", lemma:"προσόζω (Doric ποτόσδω)", pos:"verb (participle)", parse:"present active participle, acc. sg. neut.",
            gloss:"smelling of (+ gen.)", note:"attributive with κισσύβιον. Doric ποτ- (= προσ-) and -σδ- (= -ζ-): ποτόσδον = προσόζον" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 29–30 ---- */
      {
        lines: "29–30",
        translation: "Around its rim above winds ivy, ivy dusted with golden helichrysum;",
        greek: [
          { w:"τῶ", lemma:"ὁ, ἡ, τό (here demonstrative/relative)", pos:"pronoun", parse:"gen. sg. neut. (Doric τῶ = τοῦ)",
            gloss:"of it, of which", note:"possessive genitive referring to the cup — 'around its lips'. Doric τῶ = τοῦ" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"at, around, upon", note:"ποτὶ … χείλη = 'at the rims'" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"μέν … answered by δέ in line 30 (ἁ δὲ …): the rim-ivy vs. the tendril below" },
          { w:"χείλη", lemma:"χεῖλος, -εος, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"lip, rim, edge (of a cup)", note:"object of ποτί — the rim of the bowl" },
          { w:"μαρύεται", lemma:"μαρύομαι", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"wind, trail, coil along", note:"of the ivy running round the rim; κισσός is subject" },
          { w:"ὑψόθι", lemma:"ὑψόθι", pos:"adverb", parse:"—",
            gloss:"up high, above, at the top", note:"the ivy runs round the upper edge" },
          { w:"κισσός", lemma:"κισσός, -οῦ, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"ivy", note:"subject of μαρύεται" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"κισσὸς", lemma:"κισσός, -οῦ, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"ivy", note:"anaphora — the word repeats at the line-break, a hallmark of Theocritus's ekphrastic style, carrying the eye onward" },
          { w:"ἑλιχρύσῳ", lemma:"ἑλίχρυσος, -ου, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"helichrysum, golden-flower, everlasting", note:"dative of means with κεκονιμένος — the ivy 'powdered' with its golden clusters" },
          { w:"κεκονιμένος", lemma:"κονίω (perf. mid./pass. κεκόνιμαι)", pos:"verb (participle)", parse:"perfect middle/passive participle, nom. sg. masc.",
            gloss:"sprinkled, dusted, powdered (as with dust)", note:"agreeing with κισσός — the ivy speckled all over with helichrysum-gold as if with dust" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 30–31 ---- */
      {
        lines: "30–31",
        translation: "and down along it the tendril coils, glorying in its saffron fruit.",
        greek: [
          { w:"ἁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. fem. (Doric ἁ = ἡ)",
            gloss:"the", note:"with ἕλιξ; the δέ answers the μέν of line 29" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, but", note:"answers ποτὶ μὲν — turning from the rim-ivy to the tendril winding down the cup" },
          { w:"κατ᾽", lemma:"κατά", pos:"preposition", parse:"+ accusative (elided)",
            gloss:"down along, over", note:"κατ᾽ αὐτόν = 'down over it (the cup)'" },
          { w:"αὐτόν", lemma:"αὐτός, -ή, -ό", pos:"pronoun", parse:"acc. sg. masc.",
            gloss:"it, the same", note:"refers to the cup (κισσύβιον, treated here as if masc. δέπας/bowl); object of κατά" },
          { w:"καρπῷ", lemma:"καρπός, -οῦ, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"fruit", note:"dative with ἀγαλλομένα — 'glorying in its fruit'; qualified by κροκόεντι" },
          { w:"ἕλιξ", lemma:"ἕλιξ, -ικος, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"tendril, spiral, twining stem", note:"subject of εἱλεῖται" },
          { w:"εἱλεῖται", lemma:"εἰλέω / εἱλέω", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"wind, coil, twist", note:"figura etymologica with ἕλιξ — 'the coil coils'" },
          { w:"ἀγαλλομένα", lemma:"ἀγάλλομαι", pos:"verb (participle)", parse:"present middle participle, nom. sg. fem. (Doric -μένα = -μένη)",
            gloss:"glory in, exult in, take delight in (+ dat.)", note:"circumstantial with ἕλιξ. Doric fem. -μένα for -μένη" },
          { w:"κροκόεντι", lemma:"κροκόεις, -εσσα, -εν", pos:"adjective", parse:"dat. sg. masc.",
            gloss:"saffron-coloured, golden-yellow", note:"attributive with καρπῷ — the tendril's yellow berries" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 32–33 ---- */
      {
        lines: "32–33",
        translation: "And within is wrought a woman, some artwork of the gods, adorned with robe and headband;",
        greek: [
          { w:"ἔντοσθεν", lemma:"ἔντοσθεν", pos:"adverb", parse:"—",
            gloss:"within, inside", note:"turning from the rim to the figures carved inside the bowl — the first of three scenes" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"continuative, moving to the interior" },
          { w:"γυνά", lemma:"γυνή, γυναικός, ἡ (Doric γυνά)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"woman", note:"subject of τέτυκται. Doric γυνά for γυνή (ᾱ for η)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τι", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. neut.",
            gloss:"some, a kind of", note:"'some divine artwork' — τι softening the appositive δαίδαλμα" },
          { w:"θεῶν", lemma:"θεός, -οῦ, ὁ", pos:"noun", parse:"gen. pl. masc.",
            gloss:"god", note:"genitive with δαίδαλμα — a work worthy of the gods, of divine craftsmanship" },
          { w:"δαίδαλμα", lemma:"δαίδαλμα, -ατος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"cunning work, work of art, intricate carving", note:"in apposition to γυνά — the figure is 'a piece of divine artistry'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τέτυκται", lemma:"τεύχω (perf. mid./pass. τέτυγμαι)", pos:"verb", parse:"perfect middle/passive indicative, 3rd singular",
            gloss:"be made, be wrought, be fashioned", note:"the standard ekphrastic verb: the figure 'has been fashioned' on the cup. Repeated at line 39 for the fisherman scene" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἀσκητὰ", lemma:"ἀσκητός, -ή, -όν (Doric ἀσκητά)", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"wrought, adorned, elaborately worked", note:"predicative with γυνά — 'wrought / decked out with robe and headband'. Doric ᾱ" },
          { w:"πέπλῳ", lemma:"πέπλος, -ου, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"robe, woven gown", note:"dative of respect/means with ἀσκητά" },
          { w:"τε", lemma:"τε", pos:"conjunction (enclitic)", parse:"—",
            gloss:"and", note:"τε … καί joining πέπλῳ and ἄμπυκι" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the second ornament" },
          { w:"ἄμπυκι", lemma:"ἄμπυξ, -υκος, ἡ", pos:"noun", parse:"dat. sg. fem.",
            gloss:"headband, diadem, frontlet", note:"dative of respect/means with ἀσκητά" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 33–35 ---- */
      {
        lines: "33–35",
        translation: "and beside her two men with lovely long hair wrangle with words in turn, one from this side, one from that;",
        greek: [
          { w:"πὰρ", lemma:"παρά (apocope πάρ)", pos:"preposition", parse:"+ dative",
            gloss:"beside, next to", note:"apocopated παρά before δ-; governs οἱ — 'beside her'" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"continuative, adding the men to the scene" },
          { w:"οἱ", lemma:"ἕ (enclitic 3rd person pron.)", pos:"personal pronoun", parse:"dat. sg. fem. (enclitic οἱ)",
            gloss:"her, beside her", note:"dative with πάρ, referring to the woman" },
          { w:"ἄνδρες", lemma:"ἀνήρ, ἀνδρός, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"man", note:"subject of νεικείουσ᾽ — the two rival suitors" },
          { w:"καλὸν", lemma:"καλός, -ή, -όν (adv. καλόν)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"beautifully, finely", note:"adverbial accusative with ἐθειράζοντες — 'with beautiful hair'" },
          { w:"ἐθειράζοντες", lemma:"ἐθειράζω", pos:"verb (participle)", parse:"present active participle, nom. pl. masc.",
            gloss:"wear the hair long, have flowing locks", note:"attributive with ἄνδρες — young men with fine long hair, a mark of youthful beauty" },
          { w:"ἀμοιβαδὶς", lemma:"ἀμοιβαδίς", pos:"adverb", parse:"—",
            gloss:"in turn, alternately, one after another", note:"of the back-and-forth of their quarrel" },
          { w:"ἄλλοθεν", lemma:"ἄλλοθεν", pos:"adverb", parse:"—",
            gloss:"from another side", note:"ἄλλοθεν ἄλλος = 'one from one side, one from the other' — a fixed idiom for two parties in opposition" },
          { w:"ἄλλος", lemma:"ἄλλος, -η, -ο", pos:"adjective (pronominal)", parse:"nom. sg. masc.",
            gloss:"the one … the other", note:"paired with ἄλλοθεν; the reduplicated ἄλλ- idiom distributes the action between the two men" },
          { w:"νεικείουσ᾿", lemma:"νεικέω / νεικείω", pos:"verb", parse:"present active indicative, 3rd plural (elided -ουσι)",
            gloss:"quarrel, wrangle, contend, dispute", note:"main verb of the scene; the men vie for the woman with words" },
          { w:"ἐπέεσσι", lemma:"ἔπος, -εος, τό", pos:"noun", parse:"dat. pl. neut. (epic ἐπέεσσι)",
            gloss:"word, speech", note:"dative of means — 'with words'. Epic dat. pl. -εσσι, on the uncontracted stem ἐπε-" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 35 ---- */
      {
        lines: "35",
        translation: "but these things do not touch her heart.",
        greek: [
          { w:"τὰ", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"demonstrative pronoun", parse:"nom. pl. neut.",
            gloss:"these things", note:"'their quarreling'; subject of ἅπτεται. The article used as a demonstrative, common in Homer and here" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but", note:"the pivot — for all their striving, she is untouched" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"with ἅπτεται" },
          { w:"φρενὸς", lemma:"φρήν, φρενός, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"heart, mind, seat of feeling", note:"genitive with ἅπτεται (verbs of touching take the genitive) — 'touches not her heart'" },
          { w:"ἅπτεται", lemma:"ἅπτομαι", pos:"verb", parse:"present middle indicative, 3rd singular",
            gloss:"touch, take hold of (+ gen.)", note:"middle of ἅπτω; governs φρενός. Subject is τά" },
          { w:"αὐτᾶς", lemma:"αὐτός, -ή, -ό (Doric αὐτᾶς)", pos:"pronoun", parse:"gen. sg. fem.",
            gloss:"her (own)", note:"with φρενός — 'her own heart'. Doric αὐτᾶς = αὐτῆς" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 36–37 ---- */
      {
        lines: "36–37",
        translation: "but now, smiling, she looks toward this man, now again she throws her thought toward that one;",
        greek: [
          { w:"ἀλλ᾽", lemma:"ἀλλά", pos:"conjunction", parse:"(elided ἀλλά)",
            gloss:"but", note:"contrasts her indifferent heart with her flirtatious glancing" },
          { w:"ὅκα", lemma:"ὅτε (Doric ὅκα)", pos:"conjunction (temporal)", parse:"—",
            gloss:"when, at one moment", note:"ὅκα μέν … ἄλλοκα δέ = 'at one time … at another'. Doric ὅκα = ὅτε" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by ἄλλοκα δ᾽ in line 37" },
          { w:"τῆνον", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"acc. sg. masc.",
            gloss:"that one, this man", note:"object (with ἄνδρα) of ποτιδέρκεται — one of the two suitors" },
          { w:"ποτιδέρκεται", lemma:"προσδέρκομαι (Doric ποτιδέρκομαι)", pos:"verb", parse:"present middle indicative, 3rd singular",
            gloss:"look at, gaze upon", note:"Doric ποτι- for προσ-; she 'looks toward' one man" },
          { w:"ἄνδρα", lemma:"ἀνήρ, ἀνδρός, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"man", note:"in apposition with τῆνον — 'that man'" },
          { w:"γέλαισα", lemma:"γελάω (Doric)", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric γέλαισα = γελῶσα)",
            gloss:"laughing, smiling", note:"circumstantial with the woman — her coquettish smile. Doric -αισα for -ῶσα (the same -οισα/-αισα participle as ἔχοισα, τεύχοισα)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄλλοκα", lemma:"ἄλλοτε (Doric ἄλλοκα)", pos:"adverb", parse:"—",
            gloss:"at another time", note:"answers ὅκα μέν. Doric ἄλλοκα = ἄλλοτε (the -κα family again)" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but, and", note:"marks the second half of the μέν … δέ" },
          { w:"αὖ", lemma:"αὖ", pos:"adverb", parse:"—",
            gloss:"again, in turn, on the other hand", note:"reinforcing the shift to the other man" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"toward, at", note:"ποτὶ τόν = 'toward the other'" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"demonstrative pronoun", parse:"acc. sg. masc.",
            gloss:"that other, him", note:"object of ποτί — the rival suitor" },
          { w:"ῥιπτεῖ", lemma:"ῥιπτέω (= ῥίπτω)", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"throw, cast, fling", note:"she 'casts her thought' — her attention flits between the two" },
          { w:"νόον", lemma:"νόος, -ου, ὁ (= νοῦς)", pos:"noun", parse:"acc. sg. masc.",
            gloss:"mind, thought, attention", note:"object of ῥιπτεῖ; uncontracted νόος for νοῦς" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 37–38 ---- */
      {
        lines: "37–38",
        translation: "and they, hollow-eyed with love this long while, labour in vain.",
        greek: [
          { w:"οἱ", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"demonstrative pronoun", parse:"nom. pl. masc.",
            gloss:"they, those men", note:"the two suitors; subject of μοχθίζοντι. Article as demonstrative" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but, and", note:"turning from her to their fruitless suffering" },
          { w:"ὑπ᾿", lemma:"ὑπό", pos:"preposition", parse:"+ genitive (elided)",
            gloss:"by, under (the power of)", note:"ὑπ᾿ ἔρωτος = 'under love's power', cause: worn down by desire" },
          { w:"ἔρωτος", lemma:"ἔρως, -ωτος, ὁ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"love, desire, passion", note:"genitive of cause with ὑπό" },
          { w:"δηθὰ", lemma:"δηθά", pos:"adverb", parse:"—",
            gloss:"for a long time, long", note:"epic adverb — their eyes are worn hollow after long yearning" },
          { w:"κυλοιδιόωντες", lemma:"κυλοιδιάω", pos:"verb (participle)", parse:"present active participle, nom. pl. masc. (epic diectasis -όωντες)",
            gloss:"have swollen/hollow eyes (from weeping or sleeplessness)", note:"circumstantial with οἱ. The 'distended' spelling -όωντες (diectasis) is an epic mannerism Theocritus adopts for color" },
          { w:"ἐτώσια", lemma:"ἐτώσιος, -ον", pos:"adjective (adverbial)", parse:"acc. pl. neut. as adverb",
            gloss:"in vain, fruitlessly, to no purpose", note:"neuter plural used adverbially with μοχθίζοντι — their toil comes to nothing (she cares for neither)" },
          { w:"μοχθίζοντι", lemma:"μοχθίζω", pos:"verb", parse:"present active indicative, 3rd plural (Doric -οντι = -ουσι)",
            gloss:"toil, labour, suffer hardship", note:"main verb. Doric 3rd pl. -οντι for -ουσι — the untransformed original ending, a key Doric marker (cf. ᾠδήκαντι line 43)" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 39–40 ---- */
      {
        lines: "39–40",
        translation: "And beside them are fashioned an old fisherman and a rugged rock,",
        greek: [
          { w:"τοῖς", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"demonstrative pronoun", parse:"dat. pl. masc.",
            gloss:"them", note:"dative with μέτα — 'beside them (the previous figures)'; the second scene of the cup" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"moving to the next carved scene" },
          { w:"μέτα", lemma:"μετά (anastrophe μέτα)", pos:"preposition", parse:"+ dative",
            gloss:"among, beside", note:"anastrophe: μετά following its object throws its accent back to μέτα. With dat. = 'among, beside them'" },
          { w:"γριπεύς", lemma:"γριπεύς, -έως, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"fisherman", note:"subject of τέτυκται; the lone figure of the second panel" },
          { w:"τε", lemma:"τε", pos:"conjunction (enclitic)", parse:"—",
            gloss:"and", note:"τε … τε coordinating γριπεύς and πέτρα" },
          { w:"γέρων", lemma:"γέρων, -οντος, ὁ", pos:"noun (in apposition)", parse:"nom. sg. masc.",
            gloss:"old man", note:"in apposition with γριπεύς — 'an old fisherman'" },
          { w:"πέτρα", lemma:"πέτρα, -ας, ἡ (Doric)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"rock, crag", note:"second subject of τέτυκται (a neut.-pl./compound subject takes sg. verb here, or τέτυκται agrees with the nearer γριπεύς)" },
          { w:"τε", lemma:"τε", pos:"conjunction (enclitic)", parse:"—",
            gloss:"and", note:"second of the pair τε … τε" },
          { w:"τέτυκται", lemma:"τεύχω (perf. mid./pass. τέτυγμαι)", pos:"verb", parse:"perfect middle/passive indicative, 3rd singular",
            gloss:"be wrought, be fashioned", note:"the ekphrastic 'is depicted' again, as at line 32" },
          { w:"λεπράς", lemma:"λεπρός, -ά, -όν (Doric λεπράς)", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"rough, scaly, rugged, jagged", note:"attributive with πέτρα, thrown to the start of the next line for emphasis. Doric ᾱ" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 40–41 ---- */
      {
        lines: "40–41",
        translation: "on which the old man, straining, hauls his great net for a cast,",
        greek: [
          { w:"ἐφ᾽", lemma:"ἐπί", pos:"preposition", parse:"+ dative (elided)",
            gloss:"on, upon", note:"ἐφ᾽ ᾇ = 'on which (rock)'" },
          { w:"ᾇ", lemma:"ὅς, ἥ, ὅ (Doric ᾇ = ᾗ)", pos:"relative pronoun", parse:"dat. sg. fem.",
            gloss:"which", note:"relative referring to πέτρα; dat. with ἐπί. Doric ᾇ = ᾗ" },
          { w:"σπεύδων", lemma:"σπεύδω", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"hasten, strive, exert oneself", note:"circumstantial with ὁ πρέσβυς — 'straining, with effort'" },
          { w:"μέγα", lemma:"μέγας, μεγάλη, μέγα", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"great, big", note:"attributive with δίκτυον" },
          { w:"δίκτυον", lemma:"δίκτυον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"(fishing-)net", note:"object of ἕλκει" },
          { w:"ἐς", lemma:"εἰς (Doric ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"for, to (the point of)", note:"ἐς βόλον = 'for a cast', of purpose" },
          { w:"βόλον", lemma:"βόλος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"a cast (of the net), a throw", note:"object of ἐς — the fisherman gathers the net to make a throw" },
          { w:"ἕλκει", lemma:"ἕλκω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"drag, haul, pull", note:"main verb; the old man hauls the heavy net" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with πρέσβυς" },
          { w:"πρέσβυς", lemma:"πρέσβυς, -εως, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"old man", note:"subject of ἕλκει — the fisherman named again by his age" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 41 ---- */
      {
        lines: "41",
        translation: "like a man toiling with all his might.",
        greek: [
          { w:"κάμνοντι", lemma:"κάμνω", pos:"verb (participle)", parse:"present active participle, dat. sg. masc.",
            gloss:"toil, labour, work to exhaustion", note:"dative with ἐοικώς — 'like a man toiling'" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut. (adverbial)",
            gloss:"the", note:"with καρτερόν, forming an adverbial accusative" },
          { w:"καρτερὸν", lemma:"καρτερός, -ά, -όν (adv. τὸ καρτερόν)", pos:"adjective (adverbial)", parse:"acc. sg. neut.",
            gloss:"mightily, with all one's strength", note:"adverbial accusative with κάμνοντι — 'toiling mightily'" },
          { w:"ἀνδρὶ", lemma:"ἀνήρ, ἀνδρός, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"man", note:"dative with ἐοικώς — 'resembling a man'" },
          { w:"ἐοικώς", lemma:"ἔοικα (perf. with pres. sense)", pos:"verb (participle)", parse:"perfect active participle, nom. sg. masc.",
            gloss:"be like, resemble, seem (+ dat.)", note:"agreeing with the fisherman (ὁ πρέσβυς) — the artistry is so true he looks exactly like a man straining at real work" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 42 ---- */
      {
        lines: "42",
        translation: "You would say that he was fishing with all the strength of his limbs,",
        greek: [
          { w:"φαίης", lemma:"φημί", pos:"verb", parse:"present active optative, 2nd singular",
            gloss:"say", note:"potential optative with κεν — 'you would say', the ekphrastic appeal to the viewer's eye" },
          { w:"κεν", lemma:"ἄν / κε(ν)", pos:"particle", parse:"—",
            gloss:"(potential particle)", note:"epic/Doric κε(ν) = ἄν; with the optative φαίης makes a potential — 'you would say'" },
          { w:"γυίων", lemma:"γυῖον, -ου, τό", pos:"noun", parse:"gen. pl. neut.",
            gloss:"limb", note:"partitive/possessive genitive with σθένος — 'the strength of his limbs'" },
          { w:"νιν", lemma:"νιν (Doric enclitic pron. = αὐτόν)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"him, it", note:"Doric/lyric νιν, a general 3rd-person enclitic accusative = αὐτόν; subject-accusative of ἐλλοπιεύειν" },
          { w:"ὅσον", lemma:"ὅσος, -η, -ον (adv. ὅσον)", pos:"adjective (adverbial)", parse:"acc. sg. neut.",
            gloss:"as much as, with all the …", note:"ὅσον σθένος = 'with all the strength there is', of full exertion" },
          { w:"σθένος", lemma:"σθένος, -εος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"strength, might", note:"accusative of respect / internal object with ἐλλοπιεύειν — 'fishing with all his might'" },
          { w:"ἐλλοπιεύειν", lemma:"ἐλλοπιεύω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"fish, ply the fisherman's trade", note:"infinitive in indirect statement after φαίης — 'you would say that he fishes'. From ἔλλοψ, a kind of fish" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 43–44 ---- */
      {
        lines: "43–44",
        translation: "so swollen do the sinews stand out all along his neck, grey-haired though he is;",
        greek: [
          { w:"ὧδέ", lemma:"ὧδε", pos:"adverb", parse:"—",
            gloss:"so, to such a degree, thus", note:"'so much', explaining why you would think him at full strength; introduces the reason for φαίης" },
          { w:"οἱ", lemma:"ἕ (enclitic 3rd person pron.)", pos:"personal pronoun", parse:"dat. sg. masc. (enclitic οἱ)",
            gloss:"for him, on him", note:"dative of possession — 'his sinews'" },
          { w:"ᾠδήκαντι", lemma:"οἰδάω / οἰδέω (perf. ᾤδηκα)", pos:"verb", parse:"perfect active indicative, 3rd plural (Doric -αντι = -ασι)",
            gloss:"swell, be swollen", note:"perfect (with present force) 'stand swollen'. Doric 3rd pl. -αντι for -ασι — the same untransformed ending as μοχθίζοντι (-οντι)" },
          { w:"κατ᾽", lemma:"κατά", pos:"preposition", parse:"+ accusative (elided)",
            gloss:"down along, all over", note:"κατ᾽ αὐχένα = 'along his neck'" },
          { w:"αὐχένα", lemma:"αὐχήν, -ένος, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"neck, throat", note:"object of κατά" },
          { w:"πάντοθεν", lemma:"πάντοθεν", pos:"adverb", parse:"—",
            gloss:"from every side, all over", note:"the sinews bulge everywhere on his straining neck" },
          { w:"ἶνες", lemma:"ἴς, ἰνός, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"sinew, muscle, tendon", note:"subject of ᾠδήκαντι" },
          { w:"καὶ", lemma:"καί", pos:"conjunction (concessive)", parse:"—",
            gloss:"and (yet), even", note:"καὶ … περ = 'even though'; concessive, framing πολιῷ … ἐόντι" },
          { w:"πολιῷ", lemma:"πολιός, -ά, -όν", pos:"adjective", parse:"dat. sg. masc.",
            gloss:"grey, grey-haired, hoary", note:"agreeing with ἐόντι (and with οἱ) — 'grey-haired though he is'" },
          { w:"περ", lemma:"περ", pos:"particle (enclitic)", parse:"—",
            gloss:"although, even (concessive)", note:"περ with a participle = 'although'; καὶ … περ ἐόντι = 'even though he is (old and grey)'" },
          { w:"ἐόντι", lemma:"εἰμί (epic/Doric ἐών, ἐόντος)", pos:"verb (participle)", parse:"present active participle, dat. sg. masc.",
            gloss:"being", note:"concessive participle agreeing with οἱ — 'although being grey'. Uncontracted epic ἐών for ὤν, as at Odyssey 5.55 ἐοῦσαν" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 44 ---- */
      {
        lines: "44",
        translation: "and his strength is worthy of a young man in his prime.",
        greek: [
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with σθένος" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, but", note:"the closing point of the fisherman's portrait" },
          { w:"σθένος", lemma:"σθένος, -εος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"strength, might", note:"subject of an understood 'is'" },
          { w:"ἄξιον", lemma:"ἄξιος, -α, -ον", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"worthy of (+ gen.)", note:"predicate with the understood 'is'; governs the genitive ἅβας" },
          { w:"ἅβας", lemma:"ἥβη, -ης, ἡ (Doric ἅβα)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"youth, youthful vigour, prime of life", note:"genitive with ἄξιον — his old-man's strength is worthy of youth. Doric ἅβα = ἥβη (ᾱ for η)" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 45–46 ---- */
      {
        lines: "45–46",
        translation: "And a little way off from the sea-worn old man, a vineyard is finely laden with darkening clusters,",
        greek: [
          { w:"τυτθὸν", lemma:"τυτθός, -ή, -όν (adv. τυτθόν)", pos:"adjective (adverbial)", parse:"acc. sg. neut.",
            gloss:"a little, a small way", note:"adverbial with ἄπωθεν — 'a little way off'. τυτθὸν ὅσσον = 'just a little distance'" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"the third and last scene on the cup" },
          { w:"ὅσσον", lemma:"ὅσος, -η, -ον (epic ὅσσον)", pos:"adjective (adverbial)", parse:"acc. sg. neut.",
            gloss:"(just) as far as", note:"τυτθὸν ὅσσον is an idiom, 'a very little way'. Epic double-σ" },
          { w:"ἄπωθεν", lemma:"ἄπωθεν", pos:"adverb/preposition", parse:"+ genitive",
            gloss:"far off from, at a distance from", note:"governs ἁλιτρύτοιο γέροντος — measured from the fisherman just described" },
          { w:"ἁλιτρύτοιο", lemma:"ἁλίτρυτος, -ον", pos:"adjective", parse:"gen. sg. masc. (epic -οιο = -ου)",
            gloss:"worn by the sea, sea-battered", note:"attributive with γέροντος — a fine compound epithet (ἅλς + τρύω). Epic gen. -οιο" },
          { w:"γέροντος", lemma:"γέρων, -οντος, ὁ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"old man", note:"object of ἄπωθεν — the fisherman of the previous panel" },
          { w:"περκναῖσι", lemma:"περκνός, -ή, -όν", pos:"adjective", parse:"dat. pl. fem. (Doric -αισι)",
            gloss:"dark, dusky, blackening (of ripening grapes)", note:"attributive with σταφυλαῖσι — the grapes darkening as they ripen. Doric dat. pl. -αισι" },
          { w:"σταφυλαῖσι", lemma:"σταφυλή, -ῆς, ἡ", pos:"noun", parse:"dat. pl. fem. (Doric -αισι)",
            gloss:"bunch of grapes, cluster", note:"dative of means with βέβριθεν — 'laden with clusters'" },
          { w:"καλὸν", lemma:"καλός, -ή, -όν (adv. καλόν)", pos:"adjective (adverbial)", parse:"acc. sg. neut.",
            gloss:"finely, well, beautifully", note:"adverbial accusative with βέβριθεν — the vineyard is 'finely laden'" },
          { w:"βέβριθεν", lemma:"βρίθω (perf. βέβριθα)", pos:"verb", parse:"perfect active indicative, 3rd singular",
            gloss:"be laden, be heavy with (+ dat.)", note:"perfect with present sense; subject ἀλωά, means σταφυλαῖσι — 'is weighed down with clusters'" },
          { w:"ἀλωά", lemma:"ἀλωή, -ῆς, ἡ (Doric ἀλωά)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"vineyard, orchard-plot, threshing-floor", note:"subject of βέβριθεν. Doric ᾱ" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 47–48 ---- */
      {
        lines: "47–48",
        translation: "which a little boy guards, sitting on the dry-stone walls;",
        greek: [
          { w:"τὰν", lemma:"ὅς, ἥ, ὅ (Doric τάν = ἥν)", pos:"relative pronoun", parse:"acc. sg. fem.",
            gloss:"which", note:"relative referring to ἀλωά; object of φυλάσσει. The Doric relative can coincide with the article form τάν — the following subject + verb show it is relative" },
          { w:"ὀλίγος", lemma:"ὀλίγος, -η, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"small, little", note:"attributive with κῶρος — a small boy" },
          { w:"τις", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. masc.",
            gloss:"a certain, some", note:"'a little boy or other' — τις gives the vague, sketched-in quality of a figure on the cup" },
          { w:"κῶρος", lemma:"κοῦρος, -ου, ὁ (Doric κῶρος)", pos:"noun", parse:"nom. sg. masc.",
            gloss:"boy, lad, youth", note:"subject of φυλάσσει. Doric κῶρος = κοῦρος" },
          { w:"ἐφ᾽", lemma:"ἐπί", pos:"preposition", parse:"+ dative (elided)",
            gloss:"on, upon", note:"governs αἱμασιαῖσι — he sits 'on the walls'" },
          { w:"αἱμασιαῖσι", lemma:"αἱμασιά, -ᾶς, ἡ", pos:"noun", parse:"dat. pl. fem. (Doric -αισι)",
            gloss:"dry-stone wall, thorn-hedge (vineyard fence)", note:"object of ἐπί. Doric dat. pl. -αισι" },
          { w:"φυλάσσει", lemma:"φυλάσσω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"guard, watch over, keep watch", note:"main verb; the boy is set to guard the vineyard from thieves — and is failing" },
          { w:"ἥμενος", lemma:"ἧμαι", pos:"verb (participle)", parse:"present middle participle, nom. sg. masc.",
            gloss:"sitting, seated", note:"circumstantial with κῶρος — 'as he sits'. From the athematic ἧμαι, 'I sit'" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 48–49 ---- */
      {
        lines: "48–49",
        translation: "and about him are two foxes: the one ranges along the vine-rows, plundering the ripe grapes,",
        greek: [
          { w:"ἀμφὶ", lemma:"ἀμφί", pos:"preposition", parse:"+ accusative",
            gloss:"around, about", note:"ἀμφὶ … νιν = 'around him'; the foxes prowl about the seated boy" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"introducing the foxes, the mischief-makers of the scene" },
          { w:"νιν", lemma:"νιν (Doric enclitic = αὐτόν)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"him", note:"object of ἀμφί, referring to the boy (κῶρος)" },
          { w:"δύ᾽", lemma:"δύο", pos:"numeral", parse:"nom. (elided δύο)",
            gloss:"two", note:"with ἀλώπεκες" },
          { w:"ἀλώπεκες", lemma:"ἀλώπηξ, -εκος, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"fox", note:"the two thieving foxes; the sentence then splits them ἁ μέν … ἁ δέ" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἁ", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"demonstrative pronoun", parse:"nom. sg. fem. (Doric ἁ = ἡ)",
            gloss:"the one", note:"ἁ μέν … ἁ δέ (line 49) = 'the one … the other'; article as demonstrative, distributing the two foxes" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by ἁ δ᾽ in line 49" },
          { w:"ἀν᾽", lemma:"ἀνά", pos:"preposition", parse:"+ accusative (elided)",
            gloss:"up along, throughout, among", note:"ἀν᾽ ὄρχως = 'along the vine-rows'" },
          { w:"ὄρχως", lemma:"ὄρχος, -ου, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ως = -ους)",
            gloss:"row of vines, vine-row", note:"object of ἀνά. Doric acc. pl. -ως for -ους (cf. ἐρίφως line 26)" },
          { w:"φοιτῇ", lemma:"φοιτάω", pos:"verb", parse:"present active indicative, 3rd singular (contracted)",
            gloss:"go to and fro, range, roam, haunt", note:"main verb of the first fox — she prowls the rows" },
          { w:"σινομένα", lemma:"σίνομαι", pos:"verb (participle)", parse:"present middle participle, nom. sg. fem. (Doric -μένα)",
            gloss:"harm, plunder, ravage, pillage", note:"circumstantial with the fox. Doric fem. -μένα for -μένη" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. fem. (Doric τάν)",
            gloss:"the", note:"with τρώξιμον, substantivized" },
          { w:"τρώξιμον", lemma:"τρώξιμος, -ον", pos:"adjective (substantival)", parse:"acc. sg. fem.",
            gloss:"ripe (for eating), the ripe grapes", note:"τὰν τρώξιμον (sc. σταφυλήν) = 'the ripe fruit'; object of σινομένα" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 49–50 ---- */
      {
        lines: "49–50",
        translation: "while the other brings every trick to bear on his wallet,",
        greek: [
          { w:"ἁ", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"demonstrative pronoun", parse:"nom. sg. fem. (Doric ἁ = ἡ)",
            gloss:"the other", note:"the second fox, answering ἁ μέν of line 48" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"but, while", note:"completes the ἁ μέν … ἁ δέ contrast" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ dative",
            gloss:"against, upon, aimed at", note:"ἐπὶ πήρᾳ = 'against his wallet' — this fox targets the boy's food, not the grapes" },
          { w:"πήρᾳ", lemma:"πήρα, -ας, ἡ (Doric -ᾳ)", pos:"noun", parse:"dat. sg. fem.",
            gloss:"wallet, knapsack, provision-bag, scrip", note:"object of ἐπί; the boy's lunch-bag" },
          { w:"πάντα", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"all, every", note:"attributive with δόλον" },
          { w:"δόλον", lemma:"δόλος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"trick, wile, cunning, ruse", note:"object of τεύχοισα — she 'devises every trick'" },
          { w:"τεύχοισα", lemma:"τεύχω", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric τεύχοισα = τεύχουσα)",
            gloss:"make, contrive, devise", note:"circumstantial with the second fox. Doric -οισα for -ουσα (as ἔχοισα line 26)" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 50–51 ---- */
      {
        lines: "50–51",
        translation: "and vows she will not leave the boy be until she has set him down to a breakfastless meal of dry bread.",
        greek: [
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with παιδίον" },
          { w:"παιδίον", lemma:"παιδίον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"child, little boy", note:"object of ἀνησεῖν — the same boy, now the fox's target" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"with ἀνησεῖν — 'not to let go'; the negative belongs inside the indirect statement" },
          { w:"πρὶν", lemma:"πρίν", pos:"adverb", parse:"—",
            gloss:"before, sooner", note:"'not sooner' — correlative with the πρὶν(-ἤ) clause that follows: 'not before …'" },
          { w:"ἀνησεῖν", lemma:"ἀνίημι (fut. ἀνήσω)", pos:"verb (infinitive)", parse:"future active infinitive (Doric ἀνησεῖν = ἀνήσειν)",
            gloss:"let go, leave alone, give up", note:"future infinitive in indirect statement after φατί — 'she says she will not let the boy be'. Doric infinitive accent -εῖν" },
          { w:"φατὶ", lemma:"φημί (Doric φατί = φησί)", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"say, declare, assert", note:"the vixen 'declares' — mock-heroic. Doric 3rd sg. φατί for φησί" },
          { w:"πρὶν", lemma:"πρίν", pos:"conjunction", parse:"—",
            gloss:"until, before", note:"πρὶν (ἢ) + subjunctive καθίξῃ — 'until she sets him down'. After a negative main clause πρίν = 'until'" },
          { w:"ἢ", lemma:"ἤ", pos:"conjunction", parse:"—",
            gloss:"than (with πρίν)", note:"πρὶν ἤ = 'until', a common fuller form of the conjunction πρίν" },
          { w:"ἀκράτιστον", lemma:"ἀκράτιστος, -ον", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"without breakfast, having had no morning meal", note:"predicative with the boy (acc.) — she'll leave him 'breakfastless'. From ἀ- + ἀκρατίζομαι 'take one's morning bread'" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ dative",
            gloss:"upon, at, over", note:"ἐπὶ ξηροῖσι = 'over dry things', i.e. left to dry bread alone" },
          { w:"ξηροῖσι", lemma:"ξηρός, -ά, -όν", pos:"adjective (substantival)", parse:"dat. pl. neut. (Doric/epic -οισι)",
            gloss:"dry (things), dry bread, plain fare", note:"substantival: 'on dry fare'. Doric/epic dat. pl. -οισι" },
          { w:"καθίξῃ", lemma:"καθίζω", pos:"verb", parse:"aorist active subjunctive, 3rd singular (Doric ξ-aorist)",
            gloss:"set down, seat, reduce (someone to a state)", note:"subjunctive in the πρίν-clause — 'until she leaves him seated to dry bread'. Doric aorist καθίξῃ (cf. καθίξας line 12)" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 52–53 ---- */
      {
        lines: "52–53",
        translation: "But he, for his part, is plaiting a pretty cricket-cage of asphodel-stalks, fitting it together with rush,",
        greek: [
          { w:"αὐτὰρ", lemma:"αὐτάρ", pos:"conjunction", parse:"—",
            gloss:"but, however", note:"strong adversative turning from the foxes to the oblivious boy" },
          { w:"ὅγ᾽", lemma:"ὁ, ἡ, τό + γε", pos:"demonstrative pronoun + particle", parse:"nom. sg. masc. (ὁ + γε, elided)",
            gloss:"he (for his part)", note:"ὁ … γε — 'he, at any rate', pointing the contrast: the foxes scheme, but he is absorbed in a toy" },
          { w:"ἀνθερίκοισι", lemma:"ἀνθέρικος, -ου, ὁ", pos:"noun", parse:"dat. pl. masc. (Doric/epic -οισι)",
            gloss:"asphodel-stalk, stem of asphodel", note:"dative of material with πλέκει — 'plaits out of asphodel-stalks'. Doric/epic dat. pl. -οισι" },
          { w:"καλὰν", lemma:"καλός, -ή, -όν (Doric καλάν)", pos:"adjective", parse:"acc. sg. fem.",
            gloss:"beautiful, pretty, fine", note:"attributive with ἀκριδοθήκαν. Doric acc. -άν for -ήν" },
          { w:"πλέκει", lemma:"πλέκω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"plait, weave, twine", note:"main verb — the boy weaves a little cage" },
          { w:"ἀκριδοθήκαν", lemma:"ἀκριδοθήκη, -ης, ἡ (Doric -αν)", pos:"noun", parse:"acc. sg. fem.",
            gloss:"cricket-cage, cage for a locust/grasshopper", note:"object of πλέκει (ἀκρίς 'locust' + θήκη 'container'). Doric acc. -αν for -ην" },
          { w:"σχοίνῳ", lemma:"σχοῖνος, -ου, ὁ/ἡ", pos:"noun", parse:"dat. sg.",
            gloss:"rush, reed", note:"dative of means with ἐφαρμόσδων — he binds the stalks together with rush" },
          { w:"ἐφαρμόσδων", lemma:"ἐφαρμόζω (Doric ἐφαρμόσδω)", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"fit on, join together, fasten", note:"circumstantial of means with πλέκει. Doric -σδ- for -ζ- once more" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 53–54 ---- */
      {
        lines: "53–54",
        translation: "and he cares neither at all for his wallet nor for the vines, so much does he delight in his plaiting.",
        greek: [
          { w:"μέλεται", lemma:"μέλομαι (impers. μέλει)", pos:"verb", parse:"present middle indicative, 3rd singular",
            gloss:"be a care (to), be of concern (to + dat., of + gen.)", note:"impersonal: 'there is a care to him (οἱ) of neither…'. Governs the genitives πήρας, φυτῶν" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"continuative — the punch-line of the vineyard scene" },
          { w:"οἱ", lemma:"ἕ (enclitic 3rd person pron.)", pos:"personal pronoun", parse:"dat. sg. masc. (enclitic οἱ)",
            gloss:"to him, for him", note:"dative of the person concerned with μέλεται — 'it is a care to him'" },
          { w:"οὔτε", lemma:"οὔτε", pos:"conjunction", parse:"—",
            gloss:"neither, and not", note:"οὔτε … οὔτε — 'neither for his wallet nor for the vines'" },
          { w:"τι", lemma:"τις, τι (adverbial τι)", pos:"indefinite pronoun (adverbial)", parse:"acc. sg. neut.",
            gloss:"at all, in any way", note:"adverbial τι softening/strengthening the negative — 'not at all'" },
          { w:"πήρας", lemma:"πήρα, -ας, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"wallet, knapsack, scrip", note:"genitive of the thing cared about with μέλεται — the very wallet the fox is raiding" },
          { w:"οὔτε", lemma:"οὔτε", pos:"conjunction", parse:"—",
            gloss:"nor", note:"second of the οὔτε … οὔτε pair" },
          { w:"φυτῶν", lemma:"φυτόν, -οῦ, τό", pos:"noun", parse:"gen. pl. neut.",
            gloss:"plant, vine, growing thing", note:"genitive with μέλεται — nor for the vines he is set to guard" },
          { w:"τοσσῆνον", lemma:"τοσσῆνος, -η, -ον (Doric = τοσοῦτον)", pos:"adjective (adverbial)", parse:"acc. sg. neut.",
            gloss:"so much", note:"τοσσῆνον … ὅσον = 'so much … as': he cares for them not so much as he delights in his weaving. Doric/dialectal τοσσῆνος" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὅσον", lemma:"ὅσος, -η, -ον (adv. ὅσον)", pos:"adjective (adverbial)", parse:"acc. sg. neut.",
            gloss:"as (much as)", note:"correlative with τοσσῆνον, introducing the clause of comparison" },
          { w:"περὶ", lemma:"περί", pos:"preposition", parse:"+ dative",
            gloss:"about, over, in (of the object of joy)", note:"περὶ πλέγματι = 'over his plaiting', with γαθεῖ" },
          { w:"πλέγματι", lemma:"πλέγμα, -ατος, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"plaited work, wickerwork, wicker-piece", note:"object of περί; the cricket-cage he is weaving" },
          { w:"γαθεῖ", lemma:"γηθέω (Doric γαθέω)", pos:"verb", parse:"present active indicative, 3rd singular (contracted)",
            gloss:"rejoice, delight, take joy", note:"the correlative verb — his whole heart is in the toy. Doric γαθέω = γηθέω (ᾱ for η)" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 55–56 ---- */
      {
        lines: "55–56",
        translation: "And all around the cup is spread the supple acanthus — a goatherd's marvel;",
        greek: [
          { w:"παντᾷ", lemma:"πάντῃ (Doric παντᾷ)", pos:"adverb", parse:"—",
            gloss:"everywhere, on all sides", note:"Doric παντᾷ = πάντῃ (ᾱ for η); the acanthus runs all round the rim, framing the whole ekphrasis" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"(elided δέ)",
            gloss:"and", note:"rounding off the description of the cup" },
          { w:"ἀμφὶ", lemma:"ἀμφί", pos:"preposition", parse:"+ accusative",
            gloss:"around, about", note:"ἀμφὶ δέπας = 'around the cup'" },
          { w:"δέπας", lemma:"δέπας, -αος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"cup, goblet, drinking-bowl", note:"object of ἀμφί — the κισσύβιον named again by a grander word" },
          { w:"περιπέπταται", lemma:"περιπετάννυμι (perf. mid./pass. περιπέπταμαι)", pos:"verb", parse:"perfect middle/passive indicative, 3rd singular",
            gloss:"be spread around, be stretched round", note:"perfect (with present/stative sense); subject ἄκανθος — the acanthus 'lies spread' round the bowl" },
          { w:"ὑγρὸς", lemma:"ὑγρός, -ά, -όν", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"supple, pliant, lithe, moist", note:"attributive with ἄκανθος — the plant's soft, curling growth" },
          { w:"ἄκανθος", lemma:"ἄκανθος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"acanthus (bear's-foot plant)", note:"subject of περιπέπταται; its curling leaf a favourite decorative motif" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"αἰπολικὸν", lemma:"αἰπολικός, -ή, -όν", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"of a goatherd, such as delights a goatherd", note:"attributive with θάημα — the cup is a 'goatherd's marvel', fit reward in a rustic contest" },
          { w:"θάημα", lemma:"θέαμα, -ατος, τό (Doric θάημα)", pos:"noun", parse:"nom. sg. neut.",
            gloss:"a sight, spectacle, marvel, wonder", note:"in apposition to the whole cup. Doric θάημα = θέαμα" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 56 ---- */
      {
        lines: "56",
        translation: "a wonder that would strike your heart with amazement.",
        greek: [
          { w:"τέρας", lemma:"τέρας, -ατος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"wonder, marvel, portent", note:"in apposition to θάημα, subject of ἀτύξαι — 'a marvel (that) would astound you'" },
          { w:"κέ", lemma:"ἄν / κε(ν)", pos:"particle", parse:"—",
            gloss:"(potential particle)", note:"= ἄν; with the optative ἀτύξαι makes a potential, matching φαίης κεν in line 42 — the ekphrasis opens and closes on the viewer's amazement" },
          { w:"τυ", lemma:"σύ (Doric enclitic τυ = σε)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"you", note:"object of ἀτύξαι. Doric τυ = σε (cf. τέ line 5)" },
          { w:"θυμὸν", lemma:"θυμός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"heart, spirit, soul", note:"accusative of respect — 'would astound you as to your heart', i.e. would amaze you to the core" },
          { w:"ἀτύξαι", lemma:"ἀτύζω", pos:"verb", parse:"aorist active optative, 3rd singular",
            gloss:"amaze, astound, strike with awe/bewilderment", note:"potential optative with κέ; subject τέρας — the cup's beauty 'would dumbfound' the beholder. A fitting close to the ekphrasis" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 57–58 ---- */
      {
        lines: "57–58",
        translation: "For it I gave the Calydnian ferryman a goat as its price, and a great cheese of white milk;",
        greek: [
          { w:"τῷ", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"demonstrative pronoun", parse:"dat. sg. neut.",
            gloss:"for it, in exchange for it", note:"dative of price referring to the cup (δέπας) just described — 'in return for it I gave…'; τῷ μέν sets up the goatherd's past generosity" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"balances what he once paid for the cup against the offer he is about to make to Thyrsis" },
          { w:"ἐγὼ", lemma:"ἐγώ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"emphatic subject of ἔδωκα — the goatherd stresses the cup cost him real goods" },
          { w:"πορθμῆι", lemma:"πορθμεύς, -έως, ὁ", pos:"noun", parse:"dat. sg. masc. (πορθμῆι = πορθμεῖ)",
            gloss:"ferryman, boatman", note:"indirect object of ἔδωκα — the man he bought the cup from. Epic dat. -ῆι for -εῖ" },
          { w:"Καλυδνίῳ", lemma:"Καλύδνιος, -α, -ον", pos:"adjective (proper)", parse:"dat. sg. masc.",
            gloss:"Calydnian, of Calydna", note:"attributive with πορθμῆι — from the Calydnae, islets off Cos; a realistic local colour" },
          { w:"αἶγά", lemma:"αἴξ, αἰγός, ὁ/ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"goat, she-goat", note:"object of ἔδωκα, the first half of the price. The acute on the ultima comes from the following enclitic τ'" },
          { w:"τ᾽", lemma:"τε", pos:"conjunction (enclitic)", parse:"—",
            gloss:"and", note:"τε … καί (line 58) coordinating the two things he gave, αἶγα … τυρόεντα" },
          { w:"ἔδωκα", lemma:"δίδωμι (aor. ἔδωκα)", pos:"verb", parse:"aorist active indicative, 1st singular",
            gloss:"give", note:"main verb — 'I gave'; the goatherd recalls the purchase price of the cup" },
          { w:"ὦνον", lemma:"ὦνος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"price, purchase-price, payment", note:"in apposition to αἶγα (and τυρόεντα) — 'as the price', i.e. the goat and cheese together were what he paid" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"the καί of τε … καί, joining τυρόεντα to αἶγα" },
          { w:"τυρόεντα", lemma:"τυρόεις, -εσσα, -εν", pos:"adjective (substantival)", parse:"acc. sg. masc.",
            gloss:"of cheese, cheesy; (subst.) a cheese", note:"substantival: 'a cheese', the second item of the price. The adjective τυρόεις 'made of cheese' used as a noun" },
          { w:"μέγαν", lemma:"μέγας, μεγάλη, μέγα", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"great, big", note:"attributive with τυρόεντα — 'a great cheese'" },
          { w:"λευκοῖο", lemma:"λευκός, -ή, -όν", pos:"adjective", parse:"gen. sg. neut. (epic -οιο = -ου)",
            gloss:"white, bright", note:"attributive with γάλακτος. Epic genitive -οιο again, as ἁλιτρύτοιο (line 45), γλυφάνοιο (28)" },
          { w:"γάλακτος", lemma:"γάλα, γάλακτος, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"milk", note:"genitive of material with τυρόεντα — 'a cheese of white milk'" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 59–60 ---- */
      {
        lines: "59–60",
        translation: "and it has not yet at all touched my lip, but still lies undefiled.",
        greek: [
          { w:"οὐδέ", lemma:"οὐδέ", pos:"conjunction/adverb", parse:"—",
            gloss:"and not, nor, not even", note:"linking on: he has not even used the cup — it is still pristine, which makes it a fit gift" },
          { w:"τι", lemma:"τις, τι (adverbial τι)", pos:"indefinite pronoun (adverbial)", parse:"acc. sg. neut.",
            gloss:"at all, in any way", note:"adverbial τι strengthening the negative — 'not at all'" },
          { w:"πω", lemma:"πω", pos:"adverb (enclitic)", parse:"—",
            gloss:"yet, as yet", note:"οὐδέ … πω = 'not yet'; the cup is brand-new, never drunk from" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"to, against", note:"ποτὶ χεῖλος = 'to my lip'. Doric ποτί for πρός, as ποτιδέρκεται (36), πόταγε (62)" },
          { w:"χεῖλος", lemma:"χεῖλος, -εος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"lip, rim, edge", note:"object of ποτί — his own lip; the same word serves for the 'rim' of a cup, a quiet overlap" },
          { w:"ἐμὸν", lemma:"ἐμός, -ή, -όν", pos:"possessive adjective", parse:"acc. sg. neut.",
            gloss:"my, mine", note:"attributive with χεῖλος — 'my lip'" },
          { w:"θίγεν", lemma:"θιγγάνω (aor. ἔθιγον)", pos:"verb", parse:"aorist active indicative, 3rd singular (epic/Doric θίγεν = ἔθιγε)",
            gloss:"touch, take hold of (+ gen.)", note:"subject is the cup (δέπας) — 'it has not touched my lip'. Unaugmented epic aorist θίγεν = ἔθιγε(ν)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἀλλ᾽", lemma:"ἀλλά", pos:"conjunction", parse:"—",
            gloss:"but", note:"adversative — untouched, but still waiting to be used" },
          { w:"ἔτι", lemma:"ἔτι", pos:"adverb", parse:"—",
            gloss:"still, yet", note:"'still lies' — the cup remains unused, and so a worthy fresh gift" },
          { w:"κεῖται", lemma:"κεῖμαι", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"lie, be laid up, be set aside", note:"main verb; the cup 'lies' stored away, subject δέπας — κεῖμαι serving as the passive of τίθημι, 'has been put by'" },
          { w:"ἄχραντον", lemma:"ἄχραντος, -ον", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"undefiled, unstained, unused", note:"predicative with the cup (neut.) — 'lies undefiled', never yet drunk from, and so still fit to give away" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 60–61 ---- */
      {
        lines: "60–61",
        translation: "And so I would very gladly gratify you, if you would sing me the lovely song, my friend.",
        greek: [
          { w:"τῷ", lemma:"τῷ (adv. = therefore)", pos:"adverb", parse:"—",
            gloss:"therefore, and so, in that case", note:"instrumental dative frozen as a connective, 'and so' — the offer follows from the cup's worth. Not the article here" },
          { w:"κά", lemma:"ἄν / κε(ν) (Doric κα)", pos:"particle", parse:"—",
            gloss:"(potential particle)", note:"Doric κα = ἄν; with the optative ἀρεσαίμαν it makes a potential — 'I would gladly please you'" },
          { w:"τυ", lemma:"σύ (Doric enclitic τυ = σε)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"you", note:"object of ἀρεσαίμαν. Doric enclitic τυ = σε, as at lines 5, 56" },
          { w:"μάλα", lemma:"μάλα", pos:"adverb", parse:"—",
            gloss:"very, exceedingly", note:"intensifies πρόφρων — 'right gladly'" },
          { w:"πρόφρων", lemma:"πρόφρων, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"eager, willing, gracious, with a ready heart", note:"predicative adjective doing adverbial duty with ἀρεσαίμαν — 'I would please you with a ready heart', i.e. gladly" },
          { w:"ἀρεσαίμαν", lemma:"ἀρέσκομαι (aor. ἠρεσάμην)", pos:"verb", parse:"aorist middle optative, 1st singular (Doric -μαν = -μην)",
            gloss:"please, gratify, win over, make amends to", note:"potential optative with κά — 'I would gratify you'. Doric 1st sg. middle -μαν for -μην" },
          { w:"αἴ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"Doric αἰ = εἰ; αἴ κα + subjunctive = ἐάν, a prospective 'if', pairing a future-more-vivid protasis with the potential apodosis" },
          { w:"κα", lemma:"ἄν / κε(ν) (Doric κα)", pos:"particle", parse:"—",
            gloss:"(conditional particle)", note:"αἴ κα = ἐάν; κα (= ἄν) with the subjunctive ἀείσῃς makes the condition prospective, 'if you (will) sing'" },
          { w:"μοι", lemma:"ἐγώ (enclitic μοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to me, for me", note:"dative of advantage with ἀείσῃς — 'sing for me'" },
          { w:"τύ", lemma:"σύ (Doric τύ = σύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"emphatic nominative subject of ἀείσῃς. Doric accented τύ = σύ — contrast the enclitic τυ = σε just above" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"φίλος", lemma:"φίλος, -η, -ον", pos:"adjective (substantival, vocative sense)", parse:"nom. sg. masc. (for voc.)",
            gloss:"dear, beloved; (subst.) friend", note:"address to Thyrsis, 'my friend'; the nominative form standing in for the vocative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with ὕμνον" },
          { w:"ἐφίμερον", lemma:"ἐφίμερος, -ον", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"longed-for, lovely, charming, desirable", note:"attributive with ὕμνον — the song the goatherd longs to hear (the lament for Daphnis)" },
          { w:"ὕμνον", lemma:"ὕμνος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"song, hymn, lay", note:"object of ἀείσῃς — the very song Thyrsis is famous for" },
          { w:"ἀείσῃς", lemma:"ἀείδω (aor. ἤεισα)", pos:"verb", parse:"aorist active subjunctive, 2nd singular",
            gloss:"sing (of)", note:"subjunctive in the αἴ κα protasis — 'if you sing'. From ἀείδω = ᾄδω" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 62 ---- */
      {
        lines: "62",
        translation: "And I am not mocking you at all. Come here, good friend;",
        greek: [
          { w:"κοὔτι", lemma:"καί + οὔ τι (crasis κοὔτι)", pos:"conjunction + negative", parse:"crasis of καί + οὔ (+ adverbial τι)",
            gloss:"and not at all, and by no means", note:"crasis: καί + οὔ → κοὔ (+ adverbial τι) — 'and I don't in the least…'. The same crasis type as κοὐ, κἀγώ" },
          { w:"τυ", lemma:"σύ (Doric enclitic τυ = σε)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"you", note:"object of κερτομέω. Doric τυ = σε once more" },
          { w:"κερτομέω", lemma:"κερτομέω", pos:"verb", parse:"present active indicative, 1st singular",
            gloss:"mock, taunt, jeer at, tease", note:"main verb — 'I am not mocking you'; he insists the fine cup is a genuine reward, not a joke at Thyrsis' expense" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"πόταγ᾽", lemma:"προσάγω (Doric ποτάγω)", pos:"verb", parse:"present active imperative, 2nd singular (Doric πόταγε = πρόσαγε)",
            gloss:"come here, draw near, approach; (trans.) bring to", note:"intransitive imperative, 'come closer!'. Doric ποτ- for προσ- (cf. ποτί) with shortened πόταγ(ε)" },
          { w:"ὠγαθέ", lemma:"ὦ ἀγαθέ (crasis ὠγαθέ)", pos:"interjection + adjective (vocative)", parse:"voc. sg. masc.",
            gloss:"good sir!, my good friend!", note:"crasis of ὦ + ἀγαθέ (voc. of ἀγαθός) → ὠγαθέ; a warm, coaxing address to Thyrsis" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 62–63 ---- */
      {
        lines: "62–63",
        translation: "for you will in no way keep the song for yourself, once you reach Hades that makes all things forgotten.",
        greek: [
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with ἀοιδάν; object of φυλαξεῖς, fronted before γάρ for emphasis. Doric τάν = τήν" },
          { w:"γὰρ", lemma:"γάρ", pos:"particle", parse:"—",
            gloss:"for", note:"gives the reason to sing now: you cannot carry your song down to the grave" },
          { w:"ἀοιδάν", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"acc. sg. fem.",
            gloss:"song, singing, lay", note:"object of φυλαξεῖς. Doric ᾱ for η (ἀοιδά = ἀοιδή), as παγά, χολά, ἅβα" },
          { w:"οὔ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negates φυλαξεῖς — the emphatic point: you will not keep it" },
          { w:"τι", lemma:"τις, τι (adverbial τι)", pos:"indefinite pronoun (adverbial)", parse:"acc. sg. neut.",
            gloss:"at all, in any way", note:"adverbial τι reinforcing οὔ … πα — 'not in any way'" },
          { w:"πα", lemma:"πῃ / πως (Doric πα)", pos:"adverb (enclitic)", parse:"—",
            gloss:"in any way, somehow, at all", note:"Doric πα = πῃ/πως; οὔ τι πα piles up the negation, 'in no way at all'" },
          { w:"εἰς", lemma:"εἰς", pos:"preposition", parse:"+ accusative",
            gloss:"to, into (the realm of)", note:"εἰς Ἀίδαν = '(down) to Hades', of the destination in death" },
          { w:"Ἀίδαν", lemma:"Ἅιδης, -ου, ὁ (Doric Ἀΐδας)", pos:"noun (proper)", parse:"acc. sg. masc.",
            gloss:"Hades, the underworld", note:"object of εἰς — the place of the dead. Doric acc. -αν" },
          { w:"γε", lemma:"γε", pos:"particle (enclitic)", parse:"—",
            gloss:"at least, at any rate, indeed", note:"emphasizes εἰς Ἀίδαν — 'once you get to Hades of all places'" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the (one who)", note:"article + participle ἐκλελάθοντα, agreeing with Ἀίδαν — 'Hades, the one that makes forget'" },
          { w:"ἐκλελάθοντα", lemma:"ἐκλανθάνω (redupl. aor. ἐκλέλαθον, causative)", pos:"verb (participle)", parse:"aorist active participle, acc. sg. masc. (reduplicated)",
            gloss:"make utterly forget, cause to forget completely", note:"attributive with Ἀίδαν — 'Hades that makes one forget everything'. A causative reduplicated aorist (ἐκλέλαθον 'I made to forget'), hence active but transitive; the underworld wipes out all memory" },
          { w:"φυλαξεῖς", lemma:"φυλάσσω (fut. φυλάξω)", pos:"verb", parse:"future active indicative, 2nd singular (Doric φυλαξεῖς = φυλάξεις)",
            gloss:"keep, guard, preserve, keep in store", note:"main verb — 'you will not keep (the song)'; once dead you lose it, so sing while you can. Doric contracted-type future accent -εῖς = φυλάξεις" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      }

    ]
  },

  {
    id: "theoc1-64-118",
    title: "Idyll 1.64–107, 115–118",
    citation: "Theocritus, Idyll 1.64–107, 115–118 — Thyrsis sings the death of Daphnis: the visitors, the quarrel with Aphrodite, the farewell (Doric)",
    segments: [

      {
        translation: "THYRSIS",
        greek: [
          { w:"Θύρσις", punct:true }
        ]
      },

      /* ---- 64 ---- */
      {
        lines: "64",
        translation: "Begin, dear Muses, begin the pastoral song.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin, make a beginning of (+ gen.)", note:"ἄρχω takes the genitive of the thing begun — that is why ἀοιδᾶς at the line-end is genitive, not accusative. This line is the refrain of Thyrsis' lament: it comes back after every stanza (70, 73, 76, 79, 84, 89), shifts to the πάλιν form at 94, and finally turns into λήγετε 'cease' when the song ends" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral, of herdsmen", note:"attributive with ἀοιδᾶς, from which it is separated by the whole vocative — the refrain's deliberate frame. Doric ᾱ for η" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse; song, poetic art", note:"addressees of the imperative. Doric Μοῖσα for Μοῦσα — the same οι-for-ου you will meet in γελάοισα, ἔχοισα (95–96) and Ἀρέθοισα (117)" },
          { w:"φίλαι", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"voc. pl. fem.",
            gloss:"dear, beloved", note:"agrees with Μοῖσαι. It drops out of the refrain from 94 onwards, which is one way of hearing the song darken" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided ἄρχετε)",
            gloss:"begin", note:"the imperative repeated on either side of the vocative — the figure that gives the refrain its incantatory swing" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"song, singing, lay", note:"genitive governed by ἄρχετε. Do not read it as an accusative plural (the ending would look the same in Doric): the closing refrain λήγετε … ἀοιδᾶς settles it, since λήγω too takes the genitive" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 65 ---- */
      {
        lines: "65",
        translation: "This is Thyrsis from Etna, and the voice of Thyrsis is sweet.",
        greek: [
          { w:"Θύρσις", lemma:"Θύρσις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Thyrsis", note:"subject of a verbless nominal sentence, 'this (is) Thyrsis'. The singer signs his own name as he starts, like Theognis in his sphragis" },
          { w:"ὅδ᾽", lemma:"ὅδε, ἥδε, τόδε", pos:"demonstrative pronoun", parse:"nom. sg. masc. (elided ὅδε)",
            gloss:"this (man here)", note:"deictic, pointing at the speaker himself: 'here stands Thyrsis'" },
          { w:"ὡξ", lemma:"ὁ + ἐξ (crasis ὡξ)", pos:"article + preposition", parse:"crasis of ὁ ἐξ (+ gen.)",
            gloss:"the one from", note:"crasis: ὁ + ἐξ → ὡξ. Article plus prepositional phrase does the work of a relative clause — 'the man (who is) from Etna'" },
          { w:"Αἴτνας", lemma:"Αἴτνα, -ας, ἡ (Doric = Αἴτνη)", pos:"proper noun", parse:"gen. sg. fem. (Doric -ας = Attic -ης)",
            gloss:"Etna", note:"governed by the ἐξ buried in the crasis" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins a second nominal clause" },
          { w:"Θύρσιδος", lemma:"Θύρσις, -ιδος, ὁ", pos:"proper noun", parse:"gen. sg. masc.",
            gloss:"Thyrsis", note:"possessive genitive with φωνά" },
          { w:"ἁδέα", lemma:"ἡδύς, -εῖα, -ύ (Doric ἁδύς)", pos:"adjective", parse:"nom. sg. fem. (Doric ἁδέα = Attic ἡδεῖα)",
            gloss:"sweet, pleasant", note:"PREDICATE, not attribute. Dover insists on the difference: not 'and it is the sweet voice of Thyrsis' but 'and the voice of Thyrsis is sweet'. Doric ᾱ for η plus the uncontracted -έα for -εῖα" },
          { w:"φωνά", lemma:"φωνή, -ῆς, ἡ (Doric φωνά)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"voice", note:"subject of the understood ἐστί. Doric ᾱ for η, as ἀοιδά, παγά, κράνα" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 66 ---- */
      {
        lines: "66",
        translation: "Where ever were you, when Daphnis was wasting away, where were you, Nymphs?",
        greek: [
          { w:"πᾷ", lemma:"πῇ (Doric πᾷ)", pos:"interrogative adverb", parse:"—",
            gloss:"where?, whither?", note:"Doric πᾷ = Attic πῇ. Repeated in the middle of the line: the question is asked twice in one breath" },
          { w:"ποκ᾽", lemma:"ποτέ (Doric ποκά)", pos:"adverb (enclitic)", parse:"elided ποκά",
            gloss:"ever, at that time", note:"Doric ποκά = ποτέ. The Doric κ for τ is the same swap as in ὅκα (= ὅτε) below and ὅκκα at 87" },
          { w:"ἄρ᾽", lemma:"ἄρα", pos:"particle", parse:"elided ἄρα",
            gloss:"then, indeed", note:"with the interrogative it turns the question indignant: 'where on earth were you?'" },
          { w:"ἦσθ᾽", lemma:"εἰμί", pos:"verb", parse:"imperfect indicative, 2nd plural (poetic ἦσθε = Attic ἦτε; elided)",
            gloss:"you were", note:"2nd PLURAL, not 2nd singular — the addressees are the Νύμφαι at the line-end. ἦσθε is an analogical plural built off the 2nd sg. ἦσθα. Dover: the real force of the question is 'why did you not save him?'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὅκα", lemma:"ὅτε (Doric ὅκα)", pos:"conjunction", parse:"—",
            gloss:"when", note:"Doric ὅκα = ὅτε. With a plain indicative (ἐτάκετο) it is a definite temporal clause, 'at the time when'; contrast ὅκκα + subjunctive at 87, 'whenever'" },
          { w:"Δάφνις", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Daphnis", note:"subject of ἐτάκετο — the legendary cowherd whose death is the subject of the whole song" },
          { w:"ἐτάκετο", lemma:"τήκω (Doric τάκομαι)", pos:"verb", parse:"imperfect middle/passive indicative, 3rd singular",
            gloss:"melt; (mid./pass.) waste away, pine away", note:"imperfect of a process drawn out over time. τάκομαι is this poem's word for dying of love, and it keeps coming back: 82 τάκεαι, 88 τάκεται, 91 τάκεαι. Doric τάκ- for τήκ-" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πᾷ", lemma:"πῇ (Doric πᾷ)", pos:"interrogative adverb", parse:"—",
            gloss:"where?", note:"the question resumed after the temporal clause — anaphora" },
          { w:"ποκα", lemma:"ποτέ (Doric ποκά)", pos:"adverb (enclitic)", parse:"—",
            gloss:"ever", note:"unelided here, before the following consonant" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Νύμφαι", lemma:"νύμφη, -ης, ἡ", pos:"noun", parse:"voc. pl. fem.",
            gloss:"nymph", note:"held back to the very last word: only now do we learn whom Thyrsis has been reproaching. Dover notes that Theocritus makes these normally very local spirits into goddesses who can roam the whole Greek world" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 67 ---- */
      {
        lines: "67",
        translation: "Was it down the lovely glens of Peneios, or down Pindos?",
        greek: [
          { w:"ἦ", lemma:"ἦ", pos:"particle", parse:"—",
            gloss:"either …? (in a double question)", note:"ἦ … ἦ frames a disjunctive question, 'was it here, or there?'. Thyrsis guesses where the Nymphs can have been instead" },
          { w:"κατὰ", lemma:"κατά", pos:"preposition", parse:"+ accusative",
            gloss:"down through, along", note:"κατά + acc. of extent, with τέμπεα" },
          { w:"Πηνειῶ", lemma:"Πηνειός, -οῦ, ὁ", pos:"proper noun", parse:"gen. sg. masc. (Doric/epic -ῶ = Attic -οῦ)",
            gloss:"Peneios (the great river of Thessaly)", note:"possessive genitive with τέμπεα. Second-declension genitives contract to -ω in Doric (cf. Ἀνάπω 68, Πίνδω below, αὑτῶ 92)" },
          { w:"καλὰ", lemma:"καλός, -ή, -όν", pos:"adjective", parse:"acc. pl. neut.",
            gloss:"beautiful, lovely, fair", note:"attributive with τέμπεα" },
          { w:"τέμπεα", lemma:"τέμπος, -εος, τό", pos:"noun", parse:"acc. pl. neut. (uncontracted -εα = -η)",
            gloss:"glen, vale, dell", note:"object of κατά. The Vale of Tempe, on this very river, takes its name from the word" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἦ", lemma:"ἦ", pos:"particle", parse:"—",
            gloss:"or …?", note:"the second limb of the disjunction" },
          { w:"κατὰ", lemma:"κατά", pos:"preposition", parse:"+ genitive",
            gloss:"down from, down over", note:"the SAME preposition with a different case two words apart: κατά + acc. is 'along, through', κατά + gen. 'down from, down over'. Πίνδω is genitive, so read 'down over Pindos'" },
          { w:"Πίνδω", lemma:"Πίνδος, -ου, ὁ", pos:"proper noun", parse:"gen. sg. masc. (Doric -ω = Attic -ου)",
            gloss:"Pindos (the mountain range of northern Greece)", note:"Thessaly and Pindos are the far north of the mainland — as far from Sicily as Thyrsis can imagine" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 68–69 ---- */
      {
        lines: "68–69",
        translation: "For certainly you were not keeping the great stream of the river Anapos, nor Etna's peak, nor the holy water of Akis.",
        greek: [
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negates εἴχετε; οὐ γὰρ δή together = 'for certainly not'" },
          { w:"γὰρ", lemma:"γάρ", pos:"particle", parse:"—",
            gloss:"for", note:"explains why he had to look as far as Thessaly: their usual Sicilian haunts were empty" },
          { w:"δὴ", lemma:"δή", pos:"particle", parse:"—",
            gloss:"certainly, indeed", note:"emphatic, reinforcing the negative" },
          { w:"ποταμοῖο", lemma:"ποταμός, -οῦ, ὁ", pos:"noun", parse:"gen. sg. masc. (epic -οιο = -ου)",
            gloss:"river", note:"epic genitive in -οιο, taken with Ἀνάπω at the line-end: 'of the river Anapos'" },
          { w:"μέγαν", lemma:"μέγας, μεγάλη, μέγα", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"great, large", note:"attributive with ῥόον" },
          { w:"ῥόον", lemma:"ῥόος, -ου, ὁ (= ῥοῦς)", pos:"noun", parse:"acc. sg. masc. (uncontracted)",
            gloss:"stream, current, flow", note:"first object of εἴχετε" },
          { w:"εἴχετ᾽", lemma:"ἔχω", pos:"verb", parse:"imperfect active indicative, 2nd plural (elided εἴχετε)",
            gloss:"have, hold; occupy, haunt, keep to", note:"ἔχω of a place is 'occupy, keep to' — 'you were not to be found at' your own waters. 2nd plural again, picking up ἦσθ᾽ from 66" },
          { w:"Ἀνάπω", lemma:"Ἄναπος, -ου, ὁ", pos:"proper noun", parse:"gen. sg. masc. (Doric -ω = Attic -ου)",
            gloss:"Anapos (a river at Syracuse)", note:"genitive with ποταμοῖο. The Anapos runs into the great harbour of Syracuse: after the Thessalian names of 67 we come home to Sicily" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οὐδ᾽", lemma:"οὐδέ", pos:"conjunction (negative)", parse:"elided οὐδέ",
            gloss:"nor, and not", note:"linking the second of three objects" },
          { w:"Αἴτνας", lemma:"Αἴτνα, -ας, ἡ (Doric = Αἴτνη)", pos:"proper noun", parse:"gen. sg. fem.",
            gloss:"Etna", note:"possessive genitive with σκοπιάν" },
          { w:"σκοπιάν", lemma:"σκοπιά, -ᾶς, ἡ", pos:"noun", parse:"acc. sg. fem. (Doric -άν = Attic -ήν)",
            gloss:"peak, height, look-out point", note:"second object of εἴχετε" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οὐδ᾽", lemma:"οὐδέ", pos:"conjunction (negative)", parse:"elided οὐδέ",
            gloss:"nor", note:"the third limb" },
          { w:"Ἄκιδος", lemma:"Ἆκις, -ιδος, ὁ", pos:"proper noun", parse:"gen. sg. masc.",
            gloss:"Akis (a river of eastern Sicily)", note:"possessive genitive with ὕδωρ. The Akis reaches the sea south of Etna — the third and last of the home waters" },
          { w:"ἱερὸν", lemma:"ἱερός, -ά, -όν", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"holy, sacred", note:"attributive with ὕδωρ; rivers and springs are themselves divine" },
          { w:"ὕδωρ", lemma:"ὕδωρ, ὕδατος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"water", note:"third object of εἴχετε. Note how one verb governs three accusatives spread over two lines, each longer than the last" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 70 ---- */
      {
        lines: "70",
        translation: "Begin, dear Muses, begin the pastoral song.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin, make a beginning of (+ gen.)", note:"the refrain, unchanged. ἄρχω + genitive of the thing begun (ἀοιδᾶς)" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral, of herdsmen", note:"attributive with ἀοιδᾶς at the far end of the line" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative. Doric Μοῖσα = Μοῦσα" },
          { w:"φίλαι", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"voc. pl. fem.",
            gloss:"dear, beloved", note:"with Μοῖσαι" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided ἄρχετε)",
            gloss:"begin", note:"repeated imperative closing the frame around the vocative" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"song, singing, lay", note:"genitive with ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 71–72 ---- */
      {
        lines: "71–72",
        translation: "For him the jackals howled, for him the wolves; for him even the lion out of the thicket wept, when he was dead.",
        greek: [
          { w:"τῆνον", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"acc. sg. masc.",
            gloss:"that one, him", note:"object of ὠρύσαντο. Doric τῆνος = ἐκεῖνος. Three times at the head of successive clauses — the anaphora of formal lament" },
          { w:"μὰν", lemma:"μήν (Doric μάν)", pos:"particle", parse:"—",
            gloss:"indeed, truly", note:"Doric μάν = μήν, affirming what follows" },
          { w:"θῶες", lemma:"θώς, θωός, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"jackal", note:"first subject of ὠρύσαντο. These same jackals are among the beasts Daphnis says goodbye to at 115" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τῆνον", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"acc. sg. masc.",
            gloss:"him", note:"repeated with the second subject" },
          { w:"λύκοι", lemma:"λύκος, -ου, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"wolf", note:"second subject of the same verb" },
          { w:"ὠρύσαντο", lemma:"ὠρύομαι", pos:"verb", parse:"aorist middle indicative, 3rd plural",
            gloss:"howl, wail", note:"takes an accusative of the one howled for. Wild animals mourning a herdsman is the pathetic fallacy that shapes the whole lament" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τῆνον", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"acc. sg. masc.",
            gloss:"him", note:"the third and climactic repetition" },
          { w:"χὠκ", lemma:"καί + ὁ + ἐκ (crasis χὠκ)", pos:"conjunction + article + preposition", parse:"crasis of καὶ ὁ ἐκ (+ gen.)",
            gloss:"and the one out of", note:"a triple crasis. καί + ὁ gives χὠ (the κ aspirated to χ by καί's lost iota), then ἐκ is folded in. Unpack it as καὶ ὁ ἐκ δρυμοῖο λέων" },
          { w:"δρυμοῖο", lemma:"δρυμός, -οῦ, ὁ", pos:"noun", parse:"gen. sg. masc. (epic -οιο = -ου)",
            gloss:"thicket, wood, coppice", note:"governed by the ἐκ hidden in χὠκ. Epic genitive -οιο, as ποταμοῖο at 68" },
          { w:"λέων", lemma:"λέων, -οντος, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"lion", note:"subject of ἔκλαυσε. Dover: Sicilian lions belong to fable and to Homeric simile, not to the real world — the lion is here for grandeur" },
          { w:"ἔκλαυσε", lemma:"κλαίω (aor. ἔκλαυσα)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"weep, weep for, lament", note:"transitive with τῆνον. The singular verb after two plural verbs isolates the lion as the climax of the list" },
          { w:"θανόντα", lemma:"θνῄσκω (Doric θνάσκω, aor. ἔθανον)", pos:"verb (participle)", parse:"aorist active participle, acc. sg. masc.",
            gloss:"die; (aor. part.) dead", note:"agrees with τῆνον. Aorist, so 'dead', not 'dying' (Dover): the couplet jumps ahead to the death itself, and only at 74 do we come back to the deathbed" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 73 ---- */
      {
        lines: "73",
        translation: "Begin, dear Muses, begin the pastoral song.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"refrain. The genitive ἀοιδᾶς depends on it" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:"φίλαι", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"voc. pl. fem.",
            gloss:"dear", note:"with Μοῖσαι" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 74–75 ---- */
      {
        lines: "74–75",
        translation: "Many cows at his feet, and many bulls, and many heifers and calves lamented.",
        greek: [
          { w:"πολλαί", lemma:"πολύς, πολλή, πολύ", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"many, much", note:"with βόες. πολλαί … πολλοί … πολλαὶ at the head of three phrases — anaphora again, now for the herd" },
          { w:"οἱ", lemma:"οὗ, οἷ, ἕ (epic 3rd person pronoun)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"for him, to him, his", note:"epic enclitic dative = αὐτῷ. Taken with πὰρ ποσσί: 'at his feet'. Not to be confused with the article οἱ" },
          { w:"πὰρ", lemma:"παρά (apocope πάρ)", pos:"preposition", parse:"+ dative",
            gloss:"beside, at", note:"apocope — παρά drops its final vowel before a consonant, an epic licence. Cf. ἀν᾽ for ἀνά at 115" },
          { w:"ποσσὶ", lemma:"πούς, ποδός, ὁ", pos:"noun", parse:"dat. pl. masc. (epic ποσσί = ποσί)",
            gloss:"foot", note:"epic double σ. The herd is crowded round the dying man where he lies" },
          { w:"βόες", lemma:"βοῦς, βοός, ὁ/ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"cow, ox", note:"first of four subjects sharing the single verb ὠδύραντο" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πολλοὶ", lemma:"πολύς, πολλή, πολύ", pos:"adjective", parse:"nom. pl. masc.",
            gloss:"many", note:"with ταῦροι" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"τε", lemma:"τε", pos:"particle (enclitic)", parse:"—",
            gloss:"and", note:"δέ τε is a purely connective epic combination — do not hunt for a τε … τε pair" },
          { w:"ταῦροι", lemma:"ταῦρος, -ου, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"bull", note:"second subject" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πολλαὶ", lemma:"πολύς, πολλή, πολύ", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"many", note:"with δαμάλαι" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"δαμάλαι", lemma:"δαμάλη, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"heifer, young cow", note:"third subject" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joins the fourth subject" },
          { w:"πόρτιες", lemma:"πόρτις, -ιος, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"calf, young heifer", note:"fourth subject" },
          { w:"ὠδύραντο", lemma:"ὀδύρομαι", pos:"verb", parse:"aorist middle indicative, 3rd plural",
            gloss:"lament, mourn, wail", note:"one verb, held to the last word, for all four subjects: the whole herd's grief lands at once. The augment lengthens ὀ- to ὠ-" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 76 ---- */
      {
        lines: "76",
        translation: "Begin, dear Muses, begin the pastoral song.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"refrain, dividing the visits of the animals from the visits of the gods" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:"φίλαι", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"voc. pl. fem.",
            gloss:"dear", note:"with Μοῖσαι" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 77 ---- */
      {
        lines: "77",
        translation: "Hermes came first from the mountain, and said, “Daphnis,",
        greek: [
          { w:"ἦνθ᾽", lemma:"ἔρχομαι (Doric aor. ἦνθον = ἦλθον)", pos:"verb", parse:"aorist active indicative, 3rd singular (elided ἦνθε)",
            gloss:"come, go", note:"Doric ἦνθον for ἦλθον — λ has become ν. Learn the form now: it returns twice in 80, again in 81, and again at 95" },
          { w:"Ἑρμᾶς", lemma:"Ἑρμῆς, -οῦ, ὁ (Doric Ἑρμᾶς)", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Hermes", note:"subject. Doric ᾱ for η. Hermes is the herdsman's own god, so he is the first of the three divine visitors" },
          { w:"πράτιστος", lemma:"πρῶτος, -η, -ον (Doric πρᾶτος, superl. πρώτιστος)", pos:"adjective", parse:"nom. sg. masc. (Doric πράτιστος = πρώτιστος)",
            gloss:"first of all, very first", note:"PREDICATIVE with the verb — 'came first', not 'the first Hermes'. A predicative adjective of this kind is regularly translated as an adverb in English. Doric ᾱ for ω (πρᾶτος = πρῶτος)" },
          { w:"ἀπ᾽", lemma:"ἀπό", pos:"preposition", parse:"+ genitive (elided ἀπό)",
            gloss:"from, away from", note:"with ὤρεος" },
          { w:"ὤρεος", lemma:"ὄρος, -εος, τό (Doric ὤρος)", pos:"noun", parse:"gen. sg. neut. (uncontracted -εος = -ους)",
            gloss:"mountain", note:"governed by ἀπό. Two archaisms at once: Doric ὤ- for ὄ-, and the uncontracted third-declension genitive" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"εἶπε", lemma:"λέγω", pos:"verb", parse:"aorist active indicative, 3rd singular (aor. εἶπον)",
            gloss:"say, speak", note:"second main verb; the direct speech that follows runs to the end of 78" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"“Δάφνι", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Daphnis", note:"vocative opening Hermes' speech. Note the vocative of an -ις stem: Δάφνι, with no ending at all" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 78 ---- */
      {
        lines: "78",
        translation: "who is wearing you down? For whom, good friend, do you long so greatly?”",
        greek: [
          { w:"τίς", lemma:"τίς, τί", pos:"interrogative pronoun", parse:"nom. sg. masc.",
            gloss:"who?", note:"subject of κατατρύχει. Hermes assumes a person is to blame" },
          { w:"τυ", lemma:"σύ (Doric enclitic τυ = σε)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"you", note:"object of κατατρύχει. Doric enclitic τυ = σε; contrast the accented τύ/τὺ = σύ at 82 and 97" },
          { w:"κατατρύχει", lemma:"κατατρύχω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"wear down, wear out, distress", note:"κατά- intensifies τρύχω 'wear away' — the same wasting the poem calls τάκομαι" },
          { w:";", punct:true, nospaceBefore:true },
          { w:"τίνος", lemma:"τίς, τί", pos:"interrogative pronoun", parse:"gen. sg.",
            gloss:"of whom?, for whom?", note:"GENITIVE because ἔρασαι governs it: verbs of desire and longing (ἔραμαι, ἐπιθυμέω) take the genitive of what is desired. Recognizing that is what tells you the sentence is about love at all" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὠγαθέ", lemma:"ὦ ἀγαθέ (crasis ὠγαθέ)", pos:"interjection + adjective (vocative)", parse:"voc. sg. masc.",
            gloss:"good sir!, my good friend!", note:"crasis of ὦ + ἀγαθέ. The goatherd used the very same coaxing address to Thyrsis at 62" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τόσσον", lemma:"τόσος, -η, -ον (epic τόσσος)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"so much, so greatly", note:"adverbial accusative with ἔρασαι. Epic double σ" },
          { w:"ἔρασαι", lemma:"ἔραμαι", pos:"verb", parse:"present middle indicative, 2nd singular (uncontracted -σαι)",
            gloss:"love, be in love with, long for (+ gen.)", note:"the athematic ending -σαι kept where Attic would contract to ἐρᾷ. Dover notes the long α (-ρᾱ-) and that Theocritus uses ἐρῶ and ἔρᾱμαι elsewhere but never ἔρᾰμαι. Governs τίνος" },
          { w:";", punct:true, nospaceBefore:true },
          { w:"”", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 79 ---- */
      {
        lines: "79",
        translation: "Begin, dear Muses, begin the pastoral song.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"refrain, closing Hermes' visit and opening the herdsmen's" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:"φίλαι", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"voc. pl. fem.",
            gloss:"dear", note:"with Μοῖσαι" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 80 ---- */
      {
        lines: "80",
        translation: "The cowherds came, the shepherds, the goatherds came.",
        greek: [
          { w:"ἦνθον", lemma:"ἔρχομαι (Doric aor. ἦνθον = ἦλθον)", pos:"verb", parse:"aorist active indicative, 3rd plural",
            gloss:"come, go", note:"Doric ἦνθον = ἦλθον. The verb stands first AND last in the line, with the three subjects enclosed between — a ring that makes the whole countryside converge on the dying man" },
          { w:"τοὶ", lemma:"ὁ, ἡ, τό (Doric τοί = οἱ)", pos:"article", parse:"nom. pl. masc.",
            gloss:"the", note:"Doric τοί for οἱ, as ταί for αἱ and ἁ for ἡ" },
          { w:"βοῦται", lemma:"βούτας, -α, ὁ (Doric = βούτης)", pos:"noun", parse:"nom. pl. masc.",
            gloss:"cowherd, oxherd", note:"first subject. Daphnis is himself a βούτας (86, 92)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τοὶ", lemma:"ὁ, ἡ, τό (Doric τοί = οἱ)", pos:"article", parse:"nom. pl. masc.",
            gloss:"the", note:"repeated with the second subject; the third gets no article of its own because it is swallowed by crasis" },
          { w:"ποιμένες", lemma:"ποιμήν, -ένος, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"shepherd", note:"second subject" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ᾡπόλοι", lemma:"ὁ αἰπόλος (crasis ᾡπόλος)", pos:"article + noun", parse:"nom. pl. masc., crasis of οἱ αἰπόλοι",
            gloss:"the goatherds", note:"crasis of οἱ + αἰπόλοι (the same fusion in the singular at 87). Cowherd, shepherd, goatherd: between them these three trades are the whole social world of the Idylls" },
          { w:"ἦνθον", lemma:"ἔρχομαι (Doric aor. ἦνθον = ἦλθον)", pos:"verb", parse:"aorist active indicative, 3rd plural",
            gloss:"came", note:"the verb repeated to close the ring" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 81 ---- */
      {
        lines: "81",
        translation: "All of them kept asking what harm he had suffered. Priapos came",
        greek: [
          { w:"πάντες", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective (substantival)", parse:"nom. pl. masc.",
            gloss:"all, every", note:"sums up the three groups of 80 as the subject of ἀνηρώτευν" },
          { w:"ἀνηρώτευν", lemma:"ἀνερωτάω", pos:"verb", parse:"imperfect active indicative, 3rd plural (Doric -ευν = Attic -ων)",
            gloss:"ask, question, keep asking", note:"Doric keeps the -ε- of the contract verb and closes -εον to -ευν where Attic contracts to -ων (ἀνηρώτεον → ἀνηρώτευν). The same -ευ- appears in ἐλέγευ (86), βατεῦνται (87), βομβεῦντι (107). Imperfect of repeated action: they kept on asking" },
          { w:"τί", lemma:"τίς, τί", pos:"interrogative pronoun", parse:"acc. sg. neut.",
            gloss:"what?", note:"with κακόν — 'what harm', the object of πάθοι, introducing an indirect question" },
          { w:"πάθοι", lemma:"πάσχω (aor. ἔπαθον)", pos:"verb", parse:"aorist active optative, 3rd singular",
            gloss:"suffer, experience, have happen to one", note:"OPTATIVE, not indicative: an indirect question in secondary sequence (here after the imperfect ἀνηρώτευν) may be put into the optative. The direct question would have been τί ἔπαθε; — so render it 'what had happened to him?'" },
          { w:"κακόν", lemma:"κακός, -ή, -όν", pos:"adjective (substantival)", parse:"acc. sg. neut.",
            gloss:"bad, evil; (subst.) harm, trouble", note:"agreeing with τί" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"ἦνθ᾽", lemma:"ἔρχομαι (Doric aor. ἦνθον = ἦλθον)", pos:"verb", parse:"aorist active indicative, 3rd singular (elided ἦνθε)",
            gloss:"come", note:"the second divine visitor arrives; the sentence runs on across the line-end into 82" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with Πρίηπος" },
          { w:"Πρίηπος", lemma:"Πρίηπος, -ου, ὁ (= Πρίαπος)", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Priapos", note:"subject of ἦνθε. The crude phallic god of gardens and fertility — which is exactly why his consolation takes the shape it does at 87–91" }
        ]
      },

      /* ---- 82 ---- */
      {
        lines: "82",
        translation: "and said, “Poor Daphnis, why are you wasting away?",
        greek: [
          { w:"κἤφα", lemma:"καί + ἔφα (crasis κἤφα)", pos:"conjunction + verb", parse:"crasis of καί + ἔφα (3rd sg. of φημί; Doric ἔφα = Attic ἔφη)",
            gloss:"and he said", note:"two things at once: crasis (καί + ἔ- → κἤ-) and Doric ᾱ for η (ἔφα = ἔφη). Unpack it as καὶ ἔφα. Compare κεῖπε (97), χὠ (100), κἠν (103)" },
          { w:"“Δάφνι", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Daphnis", note:"vocative opening Priapos' speech, which runs all the way to the end of 91" },
          { w:"τάλαν", lemma:"τάλας, τάλαινα, τάλαν", pos:"adjective", parse:"voc. sg. masc.",
            gloss:"wretched, poor, suffering", note:"vocative agreeing with Δάφνι — the tone is pity, 'poor Daphnis'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τί", lemma:"τίς, τί", pos:"interrogative pronoun (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"why?", note:"adverbial accusative, the ordinary Greek way of saying 'why?'" },
          { w:"τὺ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"emphatic subject of τάκεαι. ACCENTED τύ/τὺ = σύ; the unaccented enclitic τυ = σε (78, 83). The accent is the only thing that distinguishes them" },
          { w:"τάκεαι", lemma:"τήκω (Doric τάκομαι)", pos:"verb", parse:"present middle/passive indicative, 2nd singular (uncontracted -εαι = Attic -ῃ)",
            gloss:"melt; (mid./pass.) waste away, pine", note:"Doric on two counts: τάκ- for τήκ- (ᾱ for η), and the uncontracted ending -εαι where Attic gives -ῃ. The poem's key verb — cf. 66, 88, 91" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 82–83 ---- */
      {
        lines: "82–83",
        translation: "But the girl, over all the springs and through all the groves, is roaming on foot —",
        greek: [
          { w:"ἁ", lemma:"ὁ, ἡ, τό (Doric ἁ = ἡ)", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with κώρα — but separated from it by the enclitic τυ" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"but, and for her part", note:"contrasting the girl's restless searching with Daphnis' motionless wasting" },
          { w:"τυ", lemma:"σύ (Doric enclitic τυ = σε)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"you", note:"the object not of anything in these two lines but of ζάτεισ᾽ at 85, with the whole refrain standing in between. Dover: slipping an enclitic pronoun object in between article and noun (ἁ … τυ … κώρα) is normal Ionic but otherwise rare" },
          { w:"κώρα", lemma:"κόρη, -ης, ἡ (Doric κώρα)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"girl, maiden", note:"subject of φορεῖται (and, at 85, of the participle ζάτεισ᾽). Doric κώρα = κόρη" },
          { w:"πάσας", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"acc. pl. fem.",
            gloss:"all, every", note:"with κράνας, its own preposition wedged between them" },
          { w:"ἀνὰ", lemma:"ἀνά", pos:"preposition", parse:"+ accusative",
            gloss:"up over, throughout", note:"standing between the adjective and its noun (πάσας ἀνὰ κράνας) — a verse liberty; hunt for the noun that agrees with the adjective, not the nearest one" },
          { w:"κράνας", lemma:"κρήνη, -ης, ἡ (Doric κράνα)", pos:"noun", parse:"acc. pl. fem. (Doric -ας = Attic -ᾱς)",
            gloss:"spring, fountain", note:"governed by ἀνά. Doric ᾱ for η (κράνα = κρήνη), like παγά, ἀοιδά, φωνά" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πάντ᾽", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"acc. pl. neut. (elided πάντα)",
            gloss:"all", note:"with ἄλσεα" },
          { w:"ἄλσεα", lemma:"ἄλσος, -εος, τό", pos:"noun", parse:"acc. pl. neut. (uncontracted -εα = -η)",
            gloss:"grove, sacred grove", note:"a second accusative of the ground covered, with ἀνά understood again from the first half of the line — Greek does not repeat a preposition in a parallel phrase" },
          { w:"ποσσὶ", lemma:"πούς, ποδός, ὁ", pos:"noun", parse:"dat. pl. masc. (epic ποσσί = ποσί)",
            gloss:"foot", note:"instrumental dative, 'on foot' — she is out searching in person, tramping the whole countryside" },
          { w:"φορεῖται", lemma:"φορέω", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"be carried; range, roam, be borne along", note:"the middle/passive of φορέω used intransitively of restless movement, 'she goes ranging'. The sentence breaks off here: its participle ζάτεισ᾽ does not arrive until 85, after the refrain" },
          { w:"—", punct:true }
        ]
      },

      /* ---- 84 ---- */
      {
        lines: "84",
        translation: "— begin, dear Muses, begin the pastoral song —",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"here the refrain does something it does nowhere else: it interrupts a sentence in mid-flight. Priapos' clause hangs unfinished at the end of 83 and is completed only at 85 — hence the dashes on either side of the refrain" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:"φίλαι", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"voc. pl. fem.",
            gloss:"dear", note:"with Μοῖσαι" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with ἄρχετε" },
          { w:"—", punct:true }
        ]
      },

      /* ---- 85 ---- */
      {
        lines: "85",
        translation: "— looking for you. Ah, you are a sort of person too unlucky in love, and beyond help.",
        greek: [
          { w:"ζάτεισ᾽", lemma:"ζητέω (Doric ζατέω)", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric ζάτεισα = Attic ζητοῦσα; elided)",
            gloss:"seek, look for", note:"agrees with ἁ κώρα back at 82 and takes that line's τυ as its object: the sentence is only now complete. Doric on two counts — ζατ- for ζητ- and the participle -εισα for -οῦσα. Dover: putting the new and decisive word first in the line with a pause immediately after is a favourite epic device, and the interposed refrain makes the effect far stronger here" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"ἆ", lemma:"ἆ", pos:"interjection", parse:"—",
            gloss:"ah!, alas!", note:"exclamation of pity or exasperation, introducing Priapos' verdict" },
          { w:"δύσερώς", lemma:"δύσερως, -ωτος", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"unlucky in love, wretched in love", note:"predicate with ἐσσί. Dover: the word is used of a person whose relation to ἔρως provokes an adverse reaction in the speaker — pity, resentment, revulsion or fear. Galateia calls Polyphemos δύσερως for the same reason" },
          { w:"τις", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. masc. (enclitic)",
            gloss:"a sort of, somehow", note:"softens — or belittles — the adjective: 'you're a difficult sort of person'. Dover admits the tone is impossible to pin down exactly" },
          { w:"ἄγαν", lemma:"ἄγαν", pos:"adverb", parse:"—",
            gloss:"too much, excessively", note:"with δύσερως: 'too unlucky in love'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second predicate" },
          { w:"ἀμήχανος", lemma:"ἀμήχανος, -ον", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"helpless; impossible to deal with, hopeless", note:"second predicate with ἐσσί. Both senses of the word are live at once: Daphnis can do nothing, and nothing can be done with him" },
          { w:"ἐσσί", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 2nd singular (Doric/epic ἐσσί = Attic εἶ)",
            gloss:"you are", note:"the uncontracted athematic form; Attic εἶ is a contraction of exactly this" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 86 ---- */
      {
        lines: "86",
        translation: "You used to be called a cowherd, but now you are like a goatherd man.",
        greek: [
          { w:"βούτας", lemma:"βούτας, -α, ὁ (Doric = βούτης)", pos:"noun", parse:"nom. sg. masc.",
            gloss:"cowherd, oxherd", note:"PREDICATE NOMINATIVE with the passive ἐλέγευ. What an active verb of naming would put in the accusative ('they called you a cowherd') a passive leaves in the nominative — exactly as in English 'you were called a cowherd'" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by νῦν δ᾽ — 'once … but now'" },
          { w:"ἐλέγευ", lemma:"λέγω", pos:"verb", parse:"imperfect middle/passive indicative, 2nd singular (Doric ἐλέγευ = Attic ἐλέγου)",
            gloss:"say; (mid./pass.) be called, be spoken of as", note:"Doric -ευ for -ου: the uncontracted -εο is kept and closed to -ευ, the same treatment as in ἀνηρώτευν (81), βατεῦνται (87), βομβεῦντι (107). The imperfect is 'you used to be called'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"νῦν", lemma:"νῦν", pos:"adverb", parse:"—",
            gloss:"now", note:"marking the reversal" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"but", note:"answering μέν" },
          { w:"αἰπόλῳ", lemma:"αἰπόλος, -ου, ὁ", pos:"noun (attributive)", parse:"dat. sg. masc.",
            gloss:"goatherd", note:"a noun used adjectivally with ἀνδρί, 'a goatherd man' — a common Greek idiom (cf. ἀνὴρ ἰατρός)" },
          { w:"ἀνδρὶ", lemma:"ἀνήρ, ἀνδρός, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"man", note:"DATIVE because ἔοικας requires it: verbs and adjectives of likeness take the dative of the thing resembled" },
          { w:"ἔοικας", lemma:"ἔοικα (perf. with pres. sense)", pos:"verb", parse:"perfect active indicative, 2nd singular",
            gloss:"be like, resemble, look like (+ dat.)", note:"perfect in form, present in sense. Dover: what follows is an elaborate εἰκών ('likeness'), a standard form of Greek wit with a riddling shape — 'why is X like Y? Because …' — and Priapos spells it out in 87–91" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 87–88 ---- */
      {
        lines: "87–88",
        translation: "The goatherd, whenever he sees how the she-goats are mounted, melts in his eyes because he himself was not born a he-goat.",
        greek: [
          { w:"ᾡπόλος", lemma:"ὁ αἰπόλος (crasis ᾡπόλος)", pos:"article + noun", parse:"nom. sg. masc., crasis of ὁ αἰπόλος",
            gloss:"the goatherd", note:"crasis of ὁ + αἰπόλος, as ᾡπόλοι in the plural at 80. The article is generic: 'the goatherd' = goatherds as a class" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὅκκ᾽", lemma:"ὅτε + ἄν (Doric ὅκκα = Attic ὅταν)", pos:"conjunction", parse:"elided ὅκκα",
            gloss:"whenever", note:"Doric ὅκα (= ὅτε) fused with κα (= ἄν) → ὅκκα = ὅταν. That κα is why ἐσορῇ is subjunctive: ὅταν + subjunctive gives the indefinite 'whenever', against the plain indicative after ὅκα at 66" },
          { w:"ἐσορῇ", lemma:"ἐσοράω (= εἰσοράω)", pos:"verb", parse:"present active subjunctive, 3rd singular",
            gloss:"look at, behold, see", note:"subjunctive required by the κα in ὅκκα. -άῃ contracts to -ῇ" },
          { w:"τὰς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. fem.",
            gloss:"the", note:"with μηκάδας" },
          { w:"μηκάδας", lemma:"μηκάς, -άδος, ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"bleating one, she-goat", note:"object of ἐσορῇ. Literally 'the bleaters' — an adjective doing duty as a noun, of the kind Greek makes freely" },
          { w:"οἷα", lemma:"οἷος, -α, -ον", pos:"relative adjective (adverbial)", parse:"acc. pl. neut. as adverb",
            gloss:"how, in what manner", note:"introduces an indirect exclamation depending on ἐσορῇ: 'sees HOW they are mounted'" },
          { w:"βατεῦνται", lemma:"βατέω", pos:"verb", parse:"present middle/passive indicative, 3rd plural (Doric -εῦνται = Attic -οῦνται)",
            gloss:"mount, cover, tread (of animals)", note:"passive: the she-goats are the ones being mounted. Doric -ευ- for the contraction -ου-, as in ἐλέγευ (86) and βομβεῦντι (107)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τάκεται", lemma:"τήκω (Doric τάκομαι)", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"melt; waste away, pine", note:"the main verb, at last: 'he melts'. Doric τάκ- for τήκ-. The same verb as of Daphnis at 66 and 82 — Priapos is building the likeness" },
          { w:"ὀφθαλμὼς", lemma:"ὀφθαλμός, -οῦ, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ώς = Attic -ούς)",
            gloss:"eye", note:"ACCUSATIVE OF RESPECT with τάκεται: 'melts as to his eyes'. Note the Doric second-declension accusative plural in -ώς, which you will meet again in τώς (92), δρυμώς (117)" },
          { w:"ὅτι", lemma:"ὅτι", pos:"conjunction", parse:"—",
            gloss:"because", note:"causal ὅτι, giving the reason for the melting" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negates ἔγεντο" },
          { w:"τράγος", lemma:"τράγος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"he-goat, billy-goat", note:"predicate nominative with ἔγεντο — 'was not born a he-goat'" },
          { w:"αὐτὸς", lemma:"αὐτός, -ή, -ό", pos:"intensive pronoun", parse:"nom. sg. masc.",
            gloss:"himself", note:"'he himself', pointing the contrast between the watching goatherd and his goats" },
          { w:"ἔγεντο", lemma:"γίγνομαι (epic aor. ἔγεντο)", pos:"verb", parse:"aorist middle indicative, 3rd singular (epic ἔγεντο = ἐγένετο)",
            gloss:"become, come to be, be born", note:"a syncopated epic aorist — ἐγένετο with the middle syllable squeezed out. The goatherd's grievance is that he cannot do what his own animals do" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 89 ---- */
      {
        lines: "89",
        translation: "Begin, dear Muses, begin the pastoral song.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"the last refrain in the φίλαι form; from 94 on it changes shape" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:"φίλαι", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"voc. pl. fem.",
            gloss:"dear", note:"with Μοῖσαι" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 90–91 ---- */
      {
        lines: "90–91",
        translation: "And you too, whenever you see how the girls laugh, melt in your eyes because you are not dancing among them.”",
        greek: [
          { w:"καὶ", lemma:"καί", pos:"adverb", parse:"—",
            gloss:"also, too", note:"'you too' — the second half of the likeness: as the goatherd is to his goats, so you are to the girls" },
          { w:"τὺ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"accented, therefore = σύ (nominative), not the enclitic τυ = σε" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"καὶ … δέ together, 'and you too', a standard combination" },
          { w:"ἐπεί", lemma:"ἐπεί", pos:"conjunction", parse:"—",
            gloss:"when, whenever", note:"with κ(α) + subjunctive = ἐπειδάν, an indefinite temporal clause — the same construction as ὅκκ᾽ … ἐσορῇ at 87, now turned on Daphnis" },
          { w:"κ᾽", lemma:"ἄν (Doric κα)", pos:"particle", parse:"elided κα",
            gloss:"(modal particle)", note:"Doric κα = Attic ἄν. Its presence is what makes ἐσορῇς subjunctive rather than indicative" },
          { w:"ἐσορῇς", lemma:"ἐσοράω (= εἰσοράω)", pos:"verb", parse:"present active subjunctive, 2nd singular",
            gloss:"look at, behold, see", note:"subjunctive in the indefinite temporal clause" },
          { w:"τὰς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. fem.",
            gloss:"the", note:"with παρθένος — and the giveaway that παρθένος here is accusative plural" },
          { w:"παρθένος", lemma:"παρθένος, -ου, ἡ", pos:"noun", parse:"acc. pl. fem. (Doric -ος = Attic -ους)",
            gloss:"maiden, unmarried girl", note:"object of ἐσορῇς. Do not be fooled by the ending: this is the Doric accusative plural (from -ονς), not a nominative singular. The article τὰς settles it" },
          { w:"οἷα", lemma:"οἷος, -α, -ον", pos:"relative adjective (adverbial)", parse:"acc. pl. neut. as adverb",
            gloss:"how, in what manner", note:"indirect exclamation after ἐσορῇς, exactly as at 87" },
          { w:"γελᾶντι", lemma:"γελάω (Doric)", pos:"verb", parse:"present active indicative, 3rd plural (Doric -ντι = Attic -νσι → -ουσι)",
            gloss:"laugh, smile", note:"Doric keeps the original ending -ντι where Attic lost the ν and lengthened the vowel: γελᾶντι = γελῶσι. This is the single most useful Doric verb ending to be able to recognize — cf. βομβεῦντι at 107" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τάκεαι", lemma:"τήκω (Doric τάκομαι)", pos:"verb", parse:"present middle/passive indicative, 2nd singular (uncontracted -εαι)",
            gloss:"melt; waste away, pine", note:"main verb, answering τάκεται in 88 word for word: the likeness is complete" },
          { w:"ὀφθαλμὼς", lemma:"ὀφθαλμός, -οῦ, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ώς = Attic -ούς)",
            gloss:"eye", note:"accusative of respect again, repeating 88 exactly" },
          { w:"ὅτι", lemma:"ὅτι", pos:"conjunction", parse:"—",
            gloss:"because", note:"causal, as at 88" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negates χορεύεις" },
          { w:"μετὰ", lemma:"μετά", pos:"preposition", parse:"+ dative",
            gloss:"among, in the company of", note:"μετά + DATIVE 'among' is poetic; Attic prose would say μετά + gen. or σύν + dat. The case tells you which sense you are dealing with" },
          { w:"ταῖσι", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"article as pronoun", parse:"dat. pl. fem. (epic/Doric -αισι = -αις)",
            gloss:"them", note:"the article used as a third-person pronoun, as regularly in epic; plus the fuller dative plural -αισι for -αις" },
          { w:"χορεύεις", lemma:"χορεύω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"dance, take part in the dance", note:"the point of the whole comparison: the goatherd cannot mate, and Daphnis will not join the dance. Dover reads a hint here that Daphnis is somehow bound not to" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"”", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 92–93 ---- */
      {
        lines: "92–93",
        translation: "But the cowherd answered them nothing; instead he carried through his own bitter love, and carried it through to the fulfilment of his destiny.",
        greek: [
          { w:"τὼς", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"article as pronoun", parse:"acc. pl. masc. (Doric τώς = τούς)",
            gloss:"them", note:"the Doric second-declension accusative plural in -ώς (cf. ὀφθαλμώς 88, δρυμώς 117), here used as a pronoun: Hermes, Priapos and the assembled herdsmen" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"but", note:"turning from the visitors' speeches to Daphnis' silence" },
          { w:"οὐδὲν", lemma:"οὐδείς, οὐδεμία, οὐδέν", pos:"pronoun", parse:"acc. sg. neut.",
            gloss:"nothing", note:"internal (cognate) accusative with ποτελέξατο. Verbs of speaking take a double accusative — the person addressed (τώς) and the thing said (οὐδέν)" },
          { w:"ποτελέξαθ᾽", lemma:"προσλέγομαι (Doric ποτιλέγομαι)", pos:"verb", parse:"aorist middle indicative, 3rd singular (elided ποτελέξατο)",
            gloss:"address, answer, reply to", note:"Doric ποτ(ι)- for προσ- once again — cf. ποτί, πόταγε (62), ποταμείβετο (100)" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with βουκόλος" },
          { w:"βουκόλος", lemma:"βουκόλος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"cowherd, herdsman", note:"subject — Daphnis, named by his trade rather than his name, as at 86 and 105" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἀλλὰ", lemma:"ἀλλά", pos:"conjunction", parse:"—",
            gloss:"but, instead", note:"strong adversative after the negative οὐδέν: 'not a word — instead …'" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with ἔρωτα, at the start of the next line: article, possessive, adjective and noun straddle the line-end" },
          { w:"αὑτῶ", lemma:"ἑαυτοῦ, -ῆς, -οῦ (Doric αὑτῶ)", pos:"reflexive pronoun", parse:"gen. sg. masc. (Doric -ῶ = Attic -οῦ)",
            gloss:"of himself, his own", note:"reflexive genitive tucked between article and noun (τὸν αὑτῶ … ἔρωτα), the normal place for a possessive. Watch the breathing: αὑτῶ (rough) is reflexive 'his own', αὐτῶ (smooth) would be plain 'his'" },
          { w:"ἄνυε", lemma:"ἀνύω (= ἀνύτω)", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"accomplish, complete, carry through", note:"imperfect of the sustained act, and repeated later in the same line — the anaphora gives a sense of grim persistence. Note the missing augment (ἄνυε for ἤνυε), an epic licence" },
          { w:"πικρὸν", lemma:"πικρός, -ά, -όν", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"bitter, sharp, harsh", note:"attributive with ἔρωτα" },
          { w:"ἔρωτα", lemma:"ἔρως, -ωτος, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"love, desire, passion", note:"object of ἄνυε. Dover: this line at last confirms that Daphnis really is in love — until now we have had only Hermes' and Priapos' guesses" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the repeated verb" },
          { w:"ἐς", lemma:"εἰς (Doric ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"to, up to", note:"Doric/poetic ἐς = εἰς" },
          { w:"τέλος", lemma:"τέλος, -εος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"end, fulfilment, completion", note:"with μοίρας: 'to the fulfilment of his allotted fate'" },
          { w:"ἄνυε", lemma:"ἀνύω (= ἀνύτω)", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"carry through, accomplish", note:"the verb repeated, with μοίρας now as its object — the second time it means 'saw his fate out to the end'" },
          { w:"μοίρας", lemma:"μοῖρα, -ας, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"fate, destiny, allotted portion", note:"genitive with τέλος. Doric gen. sg. -ας where Attic writes -ᾱς" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 94 ---- */
      {
        lines: "94",
        translation: "Begin, Muses, begin the pastoral song again.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"from here the refrain takes a new shape and keeps it: πάλιν comes in and φίλαι drops out. The song has crossed into its second half, where Aphrodite herself appears" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative, now standing alone" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πάλιν", lemma:"πάλιν", pos:"adverb", parse:"—",
            gloss:"again, once more, back", note:"the new word in the refrain, filling the metrical space φίλαι has vacated" },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 95–96 ---- */
      {
        lines: "95–96",
        translation: "And indeed Cypris too came, laughing sweetly — laughing in secret, but holding up her heavy anger for all to see —",
        greek: [
          { w:"ἦνθέ", lemma:"ἔρχομαι (Doric aor. ἦνθον = ἦλθον)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"come, go", note:"Doric ἦνθε = ἦλθε, the same form as at 77 and 81 — the third and last of the visitors" },
          { w:"γε", lemma:"γε", pos:"particle (enclitic)", parse:"—",
            gloss:"indeed, at any rate", note:"γε μάν together: 'and what is more'" },
          { w:"μὰν", lemma:"μήν (Doric μάν)", pos:"particle", parse:"—",
            gloss:"indeed, truly", note:"Doric μάν = μήν" },
          { w:"ἁδεῖα", lemma:"ἡδύς, -εῖα, -ύ (Doric ἁδύς)", pos:"adjective (adverbial)", parse:"acc. pl. neut. as adverb (Doric ἁδεῖα = Attic ἡδεῖα)",
            gloss:"sweetly, with enjoyment", note:"Dover's point: this is NOT nominative singular feminine agreeing with Κύπρις but a NEUTER PLURAL used adverbially with γελάοισα. The sense wanted is not 'smiling agreeably' but 'laughing with enjoyment', like Homer's ἡδὺ γέλασσαν of the Greeks laughing at someone's discomfiture. Read it with the participle, not with the goddess" },
          { w:"καὶ", lemma:"καί", pos:"adverb", parse:"—",
            gloss:"also, too", note:"'Cypris too', after Hermes and Priapos" },
          { w:"ἁ", lemma:"ὁ, ἡ, τό (Doric ἁ = ἡ)", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with Κύπρις. Doric ἁ = ἡ" },
          { w:"Κύπρις", lemma:"Κύπρις, -ιδος, ἡ", pos:"proper noun", parse:"nom. sg. fem.",
            gloss:"Cypris, Aphrodite", note:"subject. 'The Cyprian', from her great cult on Cyprus" },
          { w:"γελάοισα", lemma:"γελάω (Doric)", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric -οισα = Attic -ουσα)",
            gloss:"laugh, smile", note:"Doric -οισα for -ουσα, exactly as in ἔχοισα below and Ἀρέθοισα at 117; the uncontracted γελα- keeps the stem vowel" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"λάθρῃ", lemma:"λάθρῃ / λάθρᾳ", pos:"adverb", parse:"—",
            gloss:"secretly, in secret, unnoticed", note:"with γελάοισα. Dover: if we laugh λάθρῃ, others do not see that we are laughing — Aphrodite comes to Daphnis with a straight face" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by δ᾽ later in the line: the hidden laughter against the displayed anger" },
          { w:"γελάοισα", lemma:"γελάω (Doric)", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric -οισα = Attic -ουσα)",
            gloss:"laughing", note:"the participle picked up from the end of 95 and qualified — a figure of repetition Greek loves at the start of a new line" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"βαρὺν", lemma:"βαρύς, -εῖα, -ύ", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"heavy, grievous, oppressive", note:"attributive with θυμόν. Daphnis will throw the word back at her as βαρεῖα in 100" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"but", note:"answering μέν" },
          { w:"ἀνὰ", lemma:"ἀνά", pos:"preposition (in tmesis)", parse:"prefix of ἀνέχοισα, separated from it",
            gloss:"up", note:"TMESIS: ἀνά here is not a preposition governing θυμόν but the prefix of the participle at the end of the line — ἀνὰ … ἔχοισα = ἀνέχοισα, 'holding up'. Splitting a compound verb from its prefix is an epic licence Theocritus keeps" },
          { w:"θυμὸν", lemma:"θυμός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"heart, spirit; anger, wrath", note:"OBJECT of ἀν-έχοισα, not 'in her heart'. Dover (after Zuntz): she 'holds up' her grievance the way one raises a signal for others to see. That reading is precisely what makes ἀνά a prefix rather than a preposition here" },
          { w:"ἔχοισα", lemma:"ἔχω", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric -οισα = Attic -ουσα)",
            gloss:"have, hold; (with ἀνά) hold up, display", note:"second participle with Κύπρις. Doric -οισα for -ουσα again" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 97 ---- */
      {
        lines: "97",
        translation: "and said, “You, I suppose, were the one who boasted that you would bend Eros, Daphnis;",
        greek: [
          { w:"κεῖπε", lemma:"καί + εἶπε (crasis κεἶπε)", pos:"conjunction + verb", parse:"crasis of καί + εἶπε (aorist active indicative, 3rd singular)",
            gloss:"and said", note:"crasis: καί + εἶ- → κεῖ-. The same trick as κἤφα (82), χὠ (100), κἠν (103) — when a word begins κ- or χ- where you expect καί, suspect crasis" },
          { w:"“τύ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"accented, so nominative subject of κατεύχεο, and thrown to the very head of the speech: 'YOU were the one who…'" },
          { w:"θην", lemma:"θήν", pos:"particle", parse:"—",
            gloss:"surely, doubtless, I suppose", note:"a Doric particle close to δήπου. Here it is heavily ironic — she is quoting his boast back at him" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with Ἔρωτα" },
          { w:"Ἔρωτα", lemma:"Ἔρως, -ωτος, ὁ", pos:"proper noun", parse:"acc. sg. masc.",
            gloss:"Eros, Love (the god)", note:"object of λυγιξεῖν, set at a distance from its own infinitive at the end of the line. Dover notes that in the Hellenistic poets Eros is Aphrodite's son, so she has a personal stake in the insult" },
          { w:"κατεύχεο", lemma:"κατεύχομαι", pos:"verb", parse:"imperfect middle indicative, 2nd singular (uncontracted -εο = Attic -ου)",
            gloss:"boast, vaunt, vow loudly", note:"the governing verb, and it takes the FUTURE infinitive λυγιξεῖν: verbs of boasting, promising, hoping and swearing take a future infinitive, because what is boasted is still to come. Uncontracted -εο for -ου is epic/Doric" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Δάφνι", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Daphnis", note:"vocative, dropped in mid-sentence" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"λυγιξεῖν", lemma:"λυγίζω", pos:"verb (infinitive)", parse:"future active infinitive (Doric λυγιξεῖν = Attic λυγίσειν)",
            gloss:"bend, twist, wrench (as one bends a withy)", note:"future infinitive after κατεύχεο. Doric forms the future of these verbs on the contracted pattern (-ξῶ, -ξεῖν), like φυλαξεῖς at 63. From λύγος, the pliant willow-shoot: to λυγίζω someone is to bend them double — hence the passive ἐλυγίχθης in the next line" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 98 ---- */
      {
        lines: "98",
        translation: "have you not yourself been bent by cruel Eros?”",
        greek: [
          { w:"ἦ", lemma:"ἦ", pos:"particle", parse:"—",
            gloss:"surely?, is it not the case that?", note:"ἦ ῥα introduces a pointed question that expects the answer 'yes'" },
          { w:"ῥ᾽", lemma:"ῥα (= ἄρα)", pos:"particle (enclitic)", parse:"elided ῥα",
            gloss:"then, indeed", note:"epic shortened form of ἄρα" },
          { w:"οὐκ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"with the interrogative ἦ: a negative question inviting agreement" },
          { w:"αὐτὸς", lemma:"αὐτός, -ή, -ό", pos:"intensive pronoun", parse:"nom. sg. masc.",
            gloss:"yourself", note:"'you of all people' — the sting of the taunt: the would-be bender has been bent" },
          { w:"Ἔρωτος", lemma:"Ἔρως, -ωτος, ὁ", pos:"proper noun", parse:"gen. sg. masc.",
            gloss:"Eros, Love", note:"genitive of the AGENT with the passive ἐλυγίχθης, governed by the ὑπ᾽ that follows it" },
          { w:"ὑπ᾽", lemma:"ὑπό", pos:"preposition", parse:"+ genitive (elided ὑπό)",
            gloss:"by (of the agent)", note:"ANASTROPHE — the preposition standing after its noun (Ἔρωτος ὑπ᾽), which verse permits and prose does not. Read Ἔρωτος … ἀργαλέω as a single phrase straddling it" },
          { w:"ἀργαλέω", lemma:"ἀργαλέος, -α, -ον", pos:"adjective", parse:"gen. sg. masc. (Doric -έω = Attic -έου)",
            gloss:"grievous, painful, cruel", note:"agreeing with Ἔρωτος across the intervening preposition. Dover: using such a derogatory word of Love suits Aphrodite's pretence of sympathy — and Daphnis' furious reply shows he sees straight through it" },
          { w:"ἐλυγίχθης", lemma:"λυγίζω (aor. pass. ἐλυγίχθην)", pos:"verb", parse:"aorist passive indicative, 2nd singular",
            gloss:"be bent, be twisted, be wrenched", note:"the passive of the very verb he had boasted he would use on Eros (λυγιξεῖν, 97). Turning a man's own word back on him in another voice is the figure of the whole taunt" },
          { w:";", punct:true, nospaceBefore:true },
          { w:"”", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 99 ---- */
      {
        lines: "99",
        translation: "Begin, Muses, begin the pastoral song again.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"refrain in its second form (πάλιν, no φίλαι)" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πάλιν", lemma:"πάλιν", pos:"adverb", parse:"—",
            gloss:"again, once more", note:"with ἄρχετ᾽" },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 100–101 ---- */
      {
        lines: "100–101",
        translation: "And then Daphnis in his turn answered her: “Cypris the grievous, Cypris the resented, Cypris hateful to mortals,",
        greek: [
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article as pronoun", parse:"acc. sg. fem.",
            gloss:"her", note:"the article doing duty as a third-person pronoun, object of ποταμείβετο. Doric τάν = τήν" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and, but", note:"connective" },
          { w:"ἄρα", lemma:"ἄρα", pos:"particle", parse:"—",
            gloss:"then, so", note:"narrative ἄρα, marking the expected next step" },
          { w:"χὠ", lemma:"καί + ὁ (crasis χὠ)", pos:"conjunction + article", parse:"crasis of καὶ ὁ",
            gloss:"and he", note:"crasis: καί + ὁ → χὠ, with the κ aspirated to χ. Here καί has the force 'in his turn', answering her speech" },
          { w:"Δάφνις", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Daphnis", note:"subject" },
          { w:"ποταμείβετο", lemma:"προσαμείβομαι (Doric ποταμείβομαι)", pos:"verb", parse:"imperfect middle indicative, 3rd singular",
            gloss:"answer, reply to", note:"Doric ποτ(ι)- for προσ-, as ποτελέξατο at 92. Takes the accusative of the person answered (τάν)" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"“Κύπρι", lemma:"Κύπρις, -ιδος, ἡ", pos:"proper noun", parse:"voc. sg. fem.",
            gloss:"Cypris, Aphrodite", note:"vocative, and repeated at the head of each of the three following phrases — the shape of a curse or a formal denunciation" },
          { w:"βαρεῖα", lemma:"βαρύς, -εῖα, -ύ", pos:"adjective", parse:"voc. sg. fem.",
            gloss:"heavy, grievous, oppressive", note:"first element of the address — and a deliberate echo of the βαρύν she was described with at 96: he has read her mood exactly" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Κύπρι", lemma:"Κύπρις, -ιδος, ἡ", pos:"proper noun", parse:"voc. sg. fem.",
            gloss:"Cypris", note:"second vocative" },
          { w:"νεμεσσατά", lemma:"νεμεσητός, -ή, -όν (Doric νεμεσσατά)", pos:"adjective", parse:"voc. sg. fem. (Doric ᾱ for η; epic double σ)",
            gloss:"resented, provoking indignation; resentful", note:"second element, one word longer than the first" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Κύπρι", lemma:"Κύπρις, -ιδος, ἡ", pos:"proper noun", parse:"voc. sg. fem.",
            gloss:"Cypris", note:"third vocative" },
          { w:"θνατοῖσιν", lemma:"θνητός, -ή, -όν (Doric θνατός)", pos:"adjective (substantival)", parse:"dat. pl. masc. (epic -οισιν = -οις)",
            gloss:"mortal; (subst.) mortals", note:"dative with ἀπεχθής — adjectives of liking and loathing govern the dative. Doric ᾱ for η, plus the fuller epic dative plural" },
          { w:"ἀπεχθής", lemma:"ἀπεχθής, -ές", pos:"adjective", parse:"voc. sg. fem.",
            gloss:"hateful, odious", note:"the third and longest element. Dover: this is a 'rising trikolon' — three parallel members, each longer than the last, a figure as old as Iliad 1.145. Daphnis uses the same shape again in his farewell at 115" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 102 ---- */
      {
        lines: "102",
        translation: "for do you really suppose that my sun has wholly set?",
        greek: [
          { w:"ἤδη", lemma:"ἤδη", pos:"adverb", parse:"—",
            gloss:"already, by now", note:"with δεδύκειν: 'already set'" },
          { w:"γὰρ", lemma:"γάρ", pos:"particle", parse:"—",
            gloss:"for", note:"Dover: this γάρ amounts to a flat 'No!' answering her taunt of 98 — 'you are wrong to think…'. And the question is not 'do you think I am as good as dead?' (he is, and he knows it) but 'do you think I am BEATEN?', which the next line denies" },
          { w:"φράσδη", lemma:"φράζομαι (Doric φράσδομαι)", pos:"verb", parse:"present middle indicative, 2nd singular (Doric -σδ- for -ζ-, -η for -ῃ)",
            gloss:"think, suppose, imagine", note:"Doric writes -σδ- where Attic has -ζ- — the same swap as μελίσδεται, συρίσδες, ἐρίσδω earlier in the poem. Governs an accusative-and-infinitive" },
          { w:"πάνθ᾽", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective (adverbial)", parse:"acc. pl. neut. as adverb (elided πάντα, aspirated before the rough breathing)",
            gloss:"wholly, altogether, completely", note:"adverbial accusative with δεδύκειν, NOT an agreement with ἅλιον (which is masculine singular). Note the aspiration: πάντα + ἅλιον → πάνθ᾽ ἅλιον" },
          { w:"ἅλιον", lemma:"ἥλιος, -ου, ὁ (Doric ἅλιος)", pos:"noun", parse:"acc. sg. masc.",
            gloss:"sun", note:"SUBJECT of the infinitive δεδύκειν, and therefore accusative: the accusative-and-infinitive of indirect statement after a verb of thinking. Doric ᾱ for η" },
          { w:"ἄμμι", lemma:"ἐγώ (Aeolic/Doric ἄμμιν = ἡμῖν)", pos:"personal pronoun", parse:"dat. pl. (for sg.)",
            gloss:"for us, for me", note:"Aeolic/epic dative plural = ἡμῖν, poetic plural for singular. Dative of interest: 'my sun'. Cf. ὕμμιν = ὑμῖν at 116" },
          { w:"δεδύκειν", lemma:"δύω (perf. δέδυκα)", pos:"verb (infinitive)", parse:"perfect active infinitive (epic/Doric δεδύκειν = Attic δεδυκέναι)",
            gloss:"sink, go down, set (of the sun)", note:"perfect infinitive in indirect statement after φράσδη. The perfect gives the resulting state: 'has set and is down'. Epic infinitive ending -ειν for -έναι" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 103 ---- */
      {
        lines: "103",
        translation: "Daphnis, even in the house of Hades, will be a bitter pain to Eros.",
        greek: [
          { w:"Δάφνις", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Daphnis", note:"he names himself in the third person — the grand manner proper to a boast or a curse" },
          { w:"κἠν", lemma:"καί + ἐν (crasis κἠν)", pos:"conjunction + preposition", parse:"crasis of καὶ ἐν (+ gen. here)",
            gloss:"even in", note:"crasis καί + ἐν → κἠν, with καί meaning 'even'" },
          { w:"Ἀΐδα", lemma:"Ἅιδης, -ου, ὁ (Doric Ἀΐδας)", pos:"proper noun", parse:"gen. sg. masc. (Doric -α = Attic -ου)",
            gloss:"Hades", note:"GENITIVE, not dative. Dover: 'even in ⟨the house⟩ of Hades' — Hades is a person, not a place, and ἐν/εἰς regularly take the genitive of a person with 'house' left understood, exactly like English 'at Joe's', 'to my brother's'" },
          { w:"κακὸν", lemma:"κακός, -ή, -όν", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"bad, evil, bitter", note:"attributive with ἄλγος" },
          { w:"ἔσσεται", lemma:"εἰμί", pos:"verb", parse:"future middle indicative, 3rd singular (epic ἔσσεται = Attic ἔσται)",
            gloss:"will be", note:"epic future of εἰμί with the double σ" },
          { w:"ἄλγος", lemma:"ἄλγος, -εος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"pain, grief, sorrow", note:"predicate nominative with ἔσσεται — Daphnis will not merely feel pain, he will BE one" },
          { w:"Ἔρωτι", lemma:"Ἔρως, -ωτος, ὁ", pos:"proper noun", parse:"dat. sg. masc.",
            gloss:"Eros, Love", note:"dative of the person affected: a grief FOR Eros. Dover: he will be a pain to Love because he refuses to concede the victory by accepting the natural consequence of falling in love — and keeping up a feud after death is Homeric, like Ajax's ghost refusing to speak to Odysseus" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 104 ---- */
      {
        lines: "104",
        translation: "Begin, Muses, begin the pastoral song again.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"refrain, second form; it now separates Daphnis' defiance from his counter-attack" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πάλιν", lemma:"πάλιν", pos:"adverb", parse:"—",
            gloss:"again", note:"with ἄρχετ᾽" },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 105 ---- */
      {
        lines: "105",
        translation: "Is the cowherd not said to have — Cypris? Off with you to Ida,",
        greek: [
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"a negative question expecting 'yes': 'isn't it said that…?'" },
          { w:"λέγεται", lemma:"λέγω", pos:"verb", parse:"present middle/passive indicative, 3rd singular",
            gloss:"say; (pass.) be said (to)", note:"the personal passive construction: the subject is ὁ βουκόλος (nominative), and an infinitive should follow — but never does" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with Κύπριν" },
          { w:"Κύπριν", lemma:"Κύπρις, -ιδος, ἡ", pos:"proper noun", parse:"acc. sg. fem.",
            gloss:"Cypris, Aphrodite", note:"object of the missing infinitive, left hanging in mid-air" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with βουκόλος" },
          { w:"βουκόλος", lemma:"βουκόλος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"cowherd, herdsman", note:"NOT Daphnis this time but Anchises, the Trojan 'cowherd' by whom Aphrodite became the mother of Aeneas — which is why the very next words are 'go to Ida'. He is nominative because λέγεται is used personally: 'the cowherd is said to…'" },
          { w:"—", punct:true },
          { w:";", punct:true },
          { w:"ἕρπε", lemma:"ἕρπω", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"creep, go, make one's way", note:"imperative dismissing her. Dover: Daphnis deliberately leaves the infinitive that depends on λέγεται unspoken, as though he had a coarse word for sex in mind and disdained to utter it — and such suppression of the verb is common in proverbs" },
          { w:"ποτ᾽", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative (elided ποτί)",
            gloss:"to, towards", note:"Doric ποτί = πρός" },
          { w:"Ἴδαν", lemma:"Ἴδη, -ης, ἡ (Doric Ἴδα)", pos:"proper noun", parse:"acc. sg. fem.",
            gloss:"Ida (the mountain above Troy)", note:"Anchises' mountain, where Aphrodite came to him in the Homeric Hymn — the whole point of the taunt. Doric ᾱ for η" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 106–107 ---- */
      {
        lines: "106–107",
        translation: "go to Anchises; there are oaks there, and galingale, and the bees hum sweetly at the hives.",
        greek: [
          { w:"ἕρπε", lemma:"ἕρπω", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"creep, go, make one's way", note:"the imperative repeated from 105 at the head of the line — anaphora driving her away" },
          { w:"ποτ᾽", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative (elided ποτί)",
            gloss:"to, towards", note:"Doric ποτί = πρός" },
          { w:"Ἀγχίσαν", lemma:"Ἀγχίσης, -ου, ὁ (Doric Ἀγχίσας)", pos:"proper noun", parse:"acc. sg. masc.",
            gloss:"Anchises", note:"named at last: at 105 he was only 'the cowherd'. Doric acc. -αν for -ην" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"τηνεὶ", lemma:"ἐκεῖ (Doric τηνεί)", pos:"adverb", parse:"—",
            gloss:"there, in that place", note:"Doric τηνεί = ἐκεῖ, built on the demonstrative τῆνος (= ἐκεῖνος) you met at 71–72" },
          { w:"δρύες", lemma:"δρῦς, δρυός, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"oak (tree)", note:"subject of an understood 'there are' — the verbless nominal sentence typical of landscape description in this poetry" },
          { w:"ἠδὲ", lemma:"ἠδέ", pos:"conjunction", parse:"—",
            gloss:"and", note:"epic ἠδέ = καί. Dover prints Meineke's ἠδέ … αἱ δέ here; the manuscripts have ὧδε … ὧδε, 'here … here', imported from Idyll 5" },
          { w:"κύπειρος", lemma:"κύπειρος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"galingale, sedge", note:"second subject. A marsh-plant that grazing animals relish — one of the standard furnishings of the bucolic pleasant place" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"αἱ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. fem.",
            gloss:"the", note:"with μέλισσαι, the very last word of the line" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective, introducing the third and stinging item" },
          { w:"καλὸν", lemma:"καλός, -ή, -όν (adv. καλόν)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"beautifully, sweetly", note:"adverbial accusative with βομβεῦντι — the neuter adjective doing the work of an adverb, as ἁδεῖα does at 95" },
          { w:"βομβεῦντι", lemma:"βομβέω", pos:"verb", parse:"present active indicative, 3rd plural (Doric -εῦντι = Attic -οῦσι)",
            gloss:"hum, buzz, boom", note:"TWO Doric features stacked in one word: -ευ- for the contraction -ου- (cf. ἀνηρώτευν 81, βατεῦνται 87), and the ending -ντι for -νσι (cf. γελᾶντι 90)" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ dative",
            gloss:"at, by, near", note:"Doric ποτί = πρός, here + dative of place" },
          { w:"σμάνεσσι", lemma:"σμῆνος, -εος, τό (Doric σμᾶνος)", pos:"noun", parse:"dat. pl. neut. (epic -εσσι = -εσι)",
            gloss:"beehive, swarm of bees", note:"epic dative plural in -εσσι. Doric ᾱ for η" },
          { w:"μέλισσαι", lemma:"μέλισσα, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"bee", note:"kept back to the last word of the couplet. Dover: after the oaks and the galingale this third item turns malicious, because there was a traditional belief that bees sting adulterers" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      {
        translation: "[Lines 108–114 fall outside this assignment: a refrain, Daphnis' jibe that Aphrodite should go to the hunting Adonis (109–110), and his third insult, that she should go and face Diomedes again (112–113).]",
        greek: [
          { w:"⋯", punct:true }
        ]
      },

      /* ---- 115 ---- */
      {
        lines: "115",
        translation: "O wolves, O jackals, O bears that lie in your dens up in the mountains,",
        greek: [
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"the three ὦ's mark another RISING TRIKOLON (cf. 100–101): two bare vocatives, then a third expanded with a whole phrase. Dover compares the long farewell the abducted Philoctetes takes of his island in Sophocles" },
          { w:"λύκοι", lemma:"λύκος, -ου, ὁ", pos:"noun", parse:"voc. pl. masc.",
            gloss:"wolf", note:"first addressee — one of the beasts that howled for him at 71" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"second limb" },
          { w:"θῶες", lemma:"θώς, θωός, ὁ", pos:"noun", parse:"voc. pl. masc.",
            gloss:"jackal", note:"the same animals as at 71: Daphnis now takes his leave of his own mourners" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"third and longest limb" },
          { w:"ἀν᾽", lemma:"ἀνά (apocope ἄν)", pos:"preposition", parse:"+ accusative (apocope ἀν᾽ = ἀνά)",
            gloss:"up through, among", note:"apocope: ἀνά drops its final vowel before a consonant, exactly as παρά does in πὰρ at 74" },
          { w:"ὤρεα", lemma:"ὄρος, -εος, τό (Doric ὤρος)", pos:"noun", parse:"acc. pl. neut. (uncontracted -εα = -η)",
            gloss:"mountain", note:"governed by ἀν᾽. Doric ὤ- for ὄ-, as ὤρεος at 77" },
          { w:"φωλάδες", lemma:"φωλάς, -άδος", pos:"adjective", parse:"voc. pl. fem.",
            gloss:"lying in a den, denning, lurking", note:"attributive with ἄρκτοι: 'bears that den up in the hills'. The prepositional phrase sits inside the adjective-noun pair" },
          { w:"ἄρκτοι", lemma:"ἄρκτος, -ου, ἡ", pos:"noun", parse:"voc. pl. fem.",
            gloss:"bear", note:"the third addressee, and the one that fills out the trikolon" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 116 ---- */
      {
        lines: "116",
        translation: "farewell! I, Daphnis the cowherd, am no longer among you in the woodland,",
        greek: [
          { w:"χαίρεθ᾽", lemma:"χαίρω", pos:"verb", parse:"present active imperative, 2nd plural (elided χαίρετε, aspirated)",
            gloss:"rejoice; (as greeting) hail, farewell", note:"the one Greek word for both 'hello' and 'goodbye'. Note the aspiration: χαίρετε + ὁ (with rough breathing) → χαίρεθ᾽" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with βουκόλος" },
          { w:"βουκόλος", lemma:"βουκόλος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"cowherd, herdsman", note:"in apposition with ἐγώ and Δάφνις: 'I, Daphnis the cowherd'" },
          { w:"ὕμμιν", lemma:"ὑμεῖς (Aeolic/Doric ὕμμιν = ὑμῖν)", pos:"personal pronoun", parse:"dat. pl.",
            gloss:"to you, among you", note:"Aeolic/Doric ὕμμιν = ὑμῖν, the double μ matching ἄμμι = ἡμῖν at 102. Dative with the understood 'am': 'am no longer here for you'" },
          { w:"ἐγὼ", lemma:"ἐγώ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"emphatic, wedged in among its own appositives" },
          { w:"Δάφνις", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Daphnis", note:"in apposition with ἐγώ — the full self-naming of a farewell" },
          { w:"οὐκέτ᾽", lemma:"οὐκέτι", pos:"adverb", parse:"elided οὐκέτι",
            gloss:"no longer, no more", note:"repeated twice in the next line — the hammering negation of the farewell" },
          { w:"ἀν᾽", lemma:"ἀνά (apocope ἄν)", pos:"preposition", parse:"+ accusative (apocope)",
            gloss:"up through, in", note:"apocope again, as in 115" },
          { w:"ὕλαν", lemma:"ὕλη, -ης, ἡ (Doric ὕλα)", pos:"noun", parse:"acc. sg. fem.",
            gloss:"wood, woodland, forest", note:"governed by ἀν᾽. NO VERB is expressed in the whole clause: the copula is simply left out, as Greek does freely — 'I am no longer in the woodland'. Doric ᾱ for η" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 117 ---- */
      {
        lines: "117",
        translation: "no longer through the thickets, not in the groves. Farewell, Arethusa,",
        greek: [
          { w:"οὐκέτ᾽", lemma:"οὐκέτι", pos:"adverb", parse:"elided οὐκέτι",
            gloss:"no longer", note:"the negation picked up from the line before" },
          { w:"ἀνὰ", lemma:"ἀνά", pos:"preposition", parse:"+ accusative",
            gloss:"up through, among", note:"unelided here, before a consonant cluster that will scan" },
          { w:"δρυμώς", lemma:"δρυμός, -οῦ, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ώς = Attic -ούς)",
            gloss:"thicket, wood, coppice", note:"Doric second-declension accusative plural in -ώς — the same ending as ὀφθαλμώς (88, 91) and τώς (92). Do not mistake it for a genitive singular" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οὐκ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"the third negative, now bare — the phrase is stripped down as it goes" },
          { w:"ἄλσεα", lemma:"ἄλσος, -εος, τό", pos:"noun", parse:"acc. pl. neut. (uncontracted -εα = -η)",
            gloss:"grove, sacred grove", note:"with ἀνά still understood from the phrase before: Greek does not repeat the preposition in a parallel member (cf. 83)" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"χαῖρ᾽", lemma:"χαίρω", pos:"verb", parse:"present active imperative, 2nd singular (elided χαῖρε)",
            gloss:"farewell, goodbye", note:"now SINGULAR, addressed to the one spring Arethusa, after the plural χαίρεθ᾽ to the beasts — watch the number of the imperative to see who is being addressed" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Ἀρέθοισα", lemma:"Ἀρέθουσα, -ης, ἡ (Doric Ἀρέθοισα)", pos:"proper noun", parse:"voc. sg. fem.",
            gloss:"Arethusa", note:"the never-failing spring in the middle of Syracuse — Theocritus' own city, and the same homeland the Nymphs were reproached with abandoning at 68–69. Doric -οισα for -ουσα, exactly as in γελάοισα, ἔχοισα (95–96)" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 118 ---- */
      {
        lines: "118",
        translation: "and you rivers who pour your lovely water down from Thybris.",
        greek: [
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining a second addressee to Ἀρέθοισα" },
          { w:"ποταμοὶ", lemma:"ποταμός, -οῦ, ὁ", pos:"noun", parse:"voc. pl. masc.",
            gloss:"river", note:"vocative — the rivers of 68–69 are being taken leave of in their turn" },
          { w:"τοὶ", lemma:"ὅς, ἥ, ὅ (Doric/epic τοί = οἵ)", pos:"relative pronoun", parse:"nom. pl. masc.",
            gloss:"who, which", note:"the Doric/epic relative in τ- (τοί = οἵ) — identical in shape to the ARTICLE τοί at 80, so let the following word decide: a finite verb after it (χεῖτε) makes it a relative" },
          { w:"χεῖτε", lemma:"χέω", pos:"verb", parse:"present active indicative, 2nd plural",
            gloss:"pour, pour forth", note:"SECOND person, not third: a relative clause whose antecedent is a vocative keeps the person of the one addressed. 'You rivers, who pour…' — never 'who pours'" },
          { w:"καλὸν", lemma:"καλός, -ή, -όν", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"beautiful, lovely, fair", note:"attributive with ὕδωρ, from which the whole prepositional phrase separates it" },
          { w:"κατὰ", lemma:"κατά", pos:"preposition", parse:"+ genitive",
            gloss:"down from, down along", note:"κατά + gen., as at 67 — 'down from Thybris'" },
          { w:"Θύβριδος", lemma:"Θύβρις, -ιδος, ὁ", pos:"proper noun", parse:"gen. sg. masc.",
            gloss:"Thybris (a place in Sicily)", note:"Dover: its location and even its nature are obscure to us, but 'down Thybris' makes it sound like a valley or a mountainside" },
          { w:"ὕδωρ", lemma:"ὕδωρ, ὕδατος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"water", note:"object of χεῖτε, held to the last word of the stanza — as μέλισσαι was at 107" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      }

    ]
  },

  {
    id: "theoc1-120-152",
    title: "Idyll 1.120–152",
    citation: "Theocritus, Idyll 1.120–152 — Daphnis' last words, his death, and the goatherd's payment; the end of the poem (Doric)",
    segments: [

      /* ---- 120–121 ---- */
      {
        lines: "120–121",
        translation: "I am that Daphnis here, the one who pastures his cows in these parts, Daphnis, the one who waters his bulls and calves in these parts.",
        greek: [
          { w:"Δάφνις", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Daphnis", note:"predicate of an understood 'am', with ἐγών as subject. He names himself twice at the head of two successive lines — the formal self-identification of a man taking his leave" },
          { w:"ἐγὼν", lemma:"ἐγώ (Doric/epic ἐγών)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"Doric/epic ἐγών for ἐγώ before a vowel. Subject of the verbless sentence: '(I am) that Daphnis here'" },
          { w:"ὅδε", lemma:"ὅδε, ἥδε, τόδε", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"this one here", note:"deictic 'here', pointing at himself — paired with τῆνος 'that famous one', so 'the man you have heard of, standing here'" },
          { w:"τῆνος", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"that one, that famous one", note:"Doric τῆνος = ἐκεῖνος. The combination ὅδε … τῆνος sets 'here' against 'the well-known', the ordinary way Greek says 'I am the one you mean'" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the (one who)", note:"article + participle = an attributive relative clause, 'the one who pastures'. Everything down to νομεύων belongs inside it" },
          { w:"τὰς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. fem.",
            gloss:"the", note:"with βόας" },
          { w:"βόας", lemma:"βοῦς, βοός, ὁ/ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"cow, ox", note:"object of νομεύων" },
          { w:"ὧδε", lemma:"ὧδε", pos:"adverb", parse:"—",
            gloss:"here, in these parts", note:"place, not manner — 'here', in this countryside. Repeated in the next line at the same point" },
          { w:"νομεύων", lemma:"νομεύω", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"pasture, herd, graze", note:"attributive participle governed by ὁ. Present aspect: what he habitually does, which is precisely what is now ending" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Δάφνις", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Daphnis", note:"the name repeated at the head of the second line — anaphora, matching the two parallel participial clauses" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the (one who)", note:"second article + participle clause, exactly parallel to the first" },
          { w:"τὼς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. masc. (Doric τώς = τούς)",
            gloss:"the", note:"the Doric second-declension accusative plural in -ώς again (cf. ὀφθαλμώς 88, δρυμώς 117)" },
          { w:"ταύρως", lemma:"ταῦρος, -ου, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ως = Attic -ους)",
            gloss:"bull", note:"object of ποτίσδων. Both article and noun carry the Doric -ώς/-ως ending, so the pair is unmistakable once you know it" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining a second object" },
          { w:"πόρτιας", lemma:"πόρτις, -ιος, ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"calf, young heifer", note:"the same animals that mourned him at 75 — his herd frames the whole song" },
          { w:"ὧδε", lemma:"ὧδε", pos:"adverb", parse:"—",
            gloss:"here, in these parts", note:"repeated from the line before, in the same metrical slot" },
          { w:"ποτίσδων", lemma:"ποτίζω (Doric ποτίσδω)", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"give to drink, water (animals)", note:"Doric -σδ- for -ζ- (cf. μελίσδεται, φράσδη, γενειάσδων in Idyll 11.9). Do not confuse it with ποτί = πρός: here ποτ- is part of the stem ποτίζω, from πότος 'drink'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 122 ---- */
      {
        lines: "122",
        translation: "Begin, Muses, begin the pastoral song again.",
        greek: [
          { w:"ἄρχετε", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"begin (+ gen.)", note:"the refrain in its second form (πάλιν, no φίλαι). Two more of these and it changes for the last time into λήγετε at 127" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς at the far end of the line" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative. Doric Μοῖσα = Μοῦσα" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πάλιν", lemma:"πάλιν", pos:"adverb", parse:"—",
            gloss:"again, once more", note:"with ἄρχετ᾽" },
          { w:"ἄρχετ᾽", lemma:"ἄρχω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"begin", note:"repeated imperative" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive governed by ἄρχετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 123–124 ---- */
      {
        lines: "123–124",
        translation: "O Pan, Pan, whether you are on the long mountains of Lykaion, or whether you range over great Mainalos,",
        greek: [
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"opening a cletic hymn — a formal summons to a god" },
          { w:"Πὰν", lemma:"Πάν, Πανός, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Pan", note:"the goat-god of Arcadia and the syrinx. Dover: Pan is naturally the deity Daphnis feels closest to — and it is the pipe he is about to hand over" },
          { w:"Πάν", lemma:"Πάν, Πανός, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Pan", note:"the name doubled, as regularly in urgent prayer" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"εἴτ᾽", lemma:"εἴτε", pos:"conjunction", parse:"elided εἴτε",
            gloss:"whether", note:"εἴτε … εἴτε, 'whether … or'. Dover: Greek invocation regularly takes the form 'whether you are in … or at …, COME!' — so expect an imperative once the alternatives are exhausted (it arrives as ἔνθ᾽ in 124)" },
          { w:"ἐσσὶ", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 2nd singular (Doric/epic ἐσσί = Attic εἶ)",
            gloss:"you are", note:"the uncontracted athematic form, as at 85" },
          { w:"κατ᾽", lemma:"κατά", pos:"preposition", parse:"+ accusative (elided κατά)",
            gloss:"down over, along, throughout", note:"κατά + acc. of extent" },
          { w:"ὤρεα", lemma:"ὄρος, -εος, τό (Doric ὤρος)", pos:"noun", parse:"acc. pl. neut. (uncontracted -εα = -η)",
            gloss:"mountain", note:"governed by κατ᾽. Doric ὤ- for ὄ-, as at 77 and 115" },
          { w:"μακρὰ", lemma:"μακρός, -ά, -όν", pos:"adjective", parse:"acc. pl. neut.",
            gloss:"long, tall, high", note:"attributive with ὤρεα" },
          { w:"Λυκαίω", lemma:"Λύκαιον, -ου, τό", pos:"proper noun", parse:"gen. sg. neut. (Doric -ω = Attic -ου)",
            gloss:"Lykaion (a mountain of Arcadia)", note:"possessive genitive with ὤρεα. Dover: Lykaion was traditionally associated with Pan, 'ruler of Arkadia' in Pindar" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"εἴτε", lemma:"εἴτε", pos:"conjunction", parse:"—",
            gloss:"or whether", note:"the second limb of the disjunction" },
          { w:"τύγ᾽", lemma:"σύ (Doric τύ) + γε", pos:"personal pronoun + particle", parse:"nom. sg. + enclitic γε (elided)",
            gloss:"you", note:"τύ γε. Dover makes a nice point: although γε usually emphasizes a pronoun, it is wholly UNemphatic when it goes with a pronoun inserted in the second member of a disjunction, as here — so do not translate 'you at any rate'" },
          { w:"ἀμφιπολεῖς", lemma:"ἀμφιπολέω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"go about, range over, haunt, tend", note:"transitive with μέγα Μαίναλον. Literally 'move about (ἀμφί) on'" },
          { w:"μέγα", lemma:"μέγας, μεγάλη, μέγα", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"great, large", note:"attributive with Μαίναλον" },
          { w:"Μαίναλον", lemma:"Μαίναλον, -ου, τό", pos:"proper noun", parse:"acc. sg. neut.",
            gloss:"Mainalos (a mountain of Arcadia)", note:"object of ἀμφιπολεῖς. Dover: Mainalon was above all the place of Pan — Pausanias reports that the locals say you can hear him piping there" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 124–125 ---- */
      {
        lines: "124–125",
        translation: "come to the Sicilian island,",
        greek: [
          { w:"ἔνθ᾽", lemma:"ἔρχομαι (Doric aor. imper. ἔνθε = ἐλθέ)", pos:"verb", parse:"aorist active imperative, 2nd singular (elided ἔνθε)",
            gloss:"come!, go!", note:"the imperative the whole εἴτε … εἴτε has been building to. Doric ν for λ, exactly as in ἦνθον = ἦλθον (77, 80, 81, 95) — so ἔνθε = ἐλθέ. It comes again at 128" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ accusative",
            gloss:"to, onto", note:"of motion towards, with the imperative" },
          { w:"νᾶσον", lemma:"νῆσος, -ου, ἡ (Doric νᾶσος)", pos:"noun", parse:"acc. sg. fem.",
            gloss:"island", note:"Doric ᾱ for η. Its adjective waits until the next line" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"article + adjective in the attributive position, thrown over the line-end after the noun: νᾶσον τὰν Σικελάν, 'the island, the Sicilian one'" },
          { w:"Σικελάν", lemma:"Σικελός, -ά, -όν (Doric Σικελά)", pos:"adjective", parse:"acc. sg. fem.",
            gloss:"Sicilian", note:"Dover: Σικελός applies to the whole island, whereas Σικελικός/'Sikel' in earlier writers means one particular non-Greek people. Doric ᾱ for η" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 125–126 ---- */
      {
        lines: "125–126",
        translation: "and leave the peak of Helike and that steep tomb of the son of Lykaon, which even the blessed gods marvel at.",
        greek: [
          { w:"Ἑλίκας", lemma:"Ἑλίκη, -ης, ἡ (Doric Ἑλίκα)", pos:"proper noun", parse:"gen. sg. fem.",
            gloss:"Helike", note:"possessive genitive with ῥίον. Dover: Helike was a daughter of Lykaon, and since Arkas was son of Kallisto, another daughter of Lykaon, Theocritus seems to be identifying Kallisto with Helike" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connecting the second half of the summons: come here, and leave there" },
          { w:"λίπε", lemma:"λείπω (aor. ἔλιπον)", pos:"verb", parse:"aorist active imperative, 2nd singular",
            gloss:"leave, leave behind", note:"second imperative, balancing ἔνθ᾽. Note the accent: λίπε (imperative) against λιπέ- forms of the indicative; and no augment, as an imperative never has one" },
          { w:"ῥίον", lemma:"ῥίον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"peak, mountain-top, headland", note:"first object of λίπε" },
          { w:"αἰπύ", lemma:"αἰπύς, -εῖα, -ύ", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"steep, sheer, high", note:"attributive with σᾶμα" },
          { w:"τε", lemma:"τε", pos:"particle (enclitic)", parse:"—",
            gloss:"and", note:"joining the second object" },
          { w:"σᾶμα", lemma:"σῆμα, -ατος, τό (Doric σᾶμα)", pos:"noun", parse:"acc. sg. neut.",
            gloss:"sign, mark; tomb, grave-mound", note:"second object of λίπε. Doric ᾱ for η. A burial mound piled high enough to be a landmark — Pausanias describes exactly such a barrow for Arkas on Mainalos" },
          { w:"τῆνο", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"acc. sg. neut.",
            gloss:"that, that famous one", note:"agreeing with σᾶμα — 'that famous tomb'. Note the neuter in -ο (not -ον), the Doric shape of ἐκεῖνο" },
          { w:"Λυκαονίδαο", lemma:"Λυκαονίδης, -αο, ὁ", pos:"proper noun (patronymic)", parse:"gen. sg. masc. (epic -αο = -ου)",
            gloss:"son of Lykaon (i.e. Arkas)", note:"possessive genitive with σᾶμα. The epic genitive of first-declension masculines in -αο is worth knowing on sight (cf. Ἀτρεΐδαο, Πηληϊάδαο)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὸ", lemma:"ὅς, ἥ, ὅ (article as relative)", pos:"relative pronoun", parse:"nom. sg. neut.",
            gloss:"which", note:"the article doing duty as a relative, as often in epic and Doric; antecedent σᾶμα" },
          { w:"καὶ", lemma:"καί", pos:"adverb", parse:"—",
            gloss:"even", note:"'even to the blessed gods' — the point of the compliment" },
          { w:"μακάρεσσιν", lemma:"μάκαρ, -αρος", pos:"adjective (substantival)", parse:"dat. pl. masc. (epic -εσσιν = -σι)",
            gloss:"blessed; (subst.) the blessed ones, the gods", note:"dative with the verbal adjective ἀγητόν — verbal adjectives in -τός take a dative of the person to whom the action applies, like an agent" },
          { w:"ἀγητόν", lemma:"ἀγητός, -ή, -όν", pos:"adjective (verbal)", parse:"nom. sg. neut.",
            gloss:"admired, wondered at, to be marvelled at", note:"predicate of the relative clause with an understood ἐστί. A -τός verbal adjective, so either 'admired' or 'admirable'; the dative μακάρεσσιν decides it here as 'a thing the gods marvel at'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 127 ---- */
      {
        lines: "127",
        translation: "Cease, Muses, come, cease the pastoral song.",
        greek: [
          { w:"λήγετε", lemma:"λήγω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"cease, leave off (+ gen.)", note:"THE REFRAIN CHANGES FOR THE LAST TIME: ἄρχετε 'begin' becomes λήγετε 'cease', and the song starts winding itself up. Note that λήγω, like ἄρχω, governs the genitive — which is the proof that ἀοιδᾶς has been genitive all along" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς, unchanged from the ἄρχετε form" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἴτε", lemma:"εἶμι (ibo)", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"go!, come!", note:"the imperative of εἶμι, here almost an interjection urging the other imperative on — 'come now, leave off'. Note it fills the slot πάλιν occupied in the middle refrain" },
          { w:"λήγετ᾽", lemma:"λήγω", pos:"verb", parse:"present active imperative, 2nd plural (elided λήγετε)",
            gloss:"cease", note:"repeated, keeping the refrain's frame around the vocative" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with λήγετε — 'cease FROM the song'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 128–129 ---- */
      {
        lines: "128–129",
        translation: "Come, lord, and take this honey-breathing pipe of mine, made of fitted wax, finely wound about the lip;",
        greek: [
          { w:"ἔνθ᾽", lemma:"ἔρχομαι (Doric aor. imper. ἔνθε = ἐλθέ)", pos:"verb", parse:"aorist active imperative, 2nd singular (elided ἔνθε)",
            gloss:"come!", note:"the same Doric imperative as at 124, resuming the summons after the refrain" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦναξ", lemma:"ὦ ἄναξ (crasis ὦναξ)", pos:"interjection + noun (vocative)", parse:"voc. sg. masc.",
            gloss:"O lord!, O king!", note:"crasis of ὦ + ἄναξ, still addressing Pan. Compare ὠγαθέ (78), also crasis with ὦ" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"linking the two imperatives" },
          { w:"τάνδε", lemma:"ὅδε, ἥδε, τόδε (Doric τάνδε = τήνδε)", pos:"demonstrative pronoun", parse:"acc. sg. fem.",
            gloss:"this (one here)", note:"agreeing with σύριγγα in the next line — 'this pipe of mine'. He is handing it over as he speaks" },
          { w:"φέρευ", lemma:"φέρω", pos:"verb", parse:"present middle imperative, 2nd singular (Doric φέρευ = Attic φέρου)",
            gloss:"carry; (mid.) take for oneself, carry off", note:"MIDDLE, so 'take it for yourself', not merely 'carry'. Doric -ευ for -ου from uncontracted -εο, the same ending as ἐλέγευ (86)" },
          { w:"πακτοῖο", lemma:"πηκτός, -ή, -όν (Doric πακτός)", pos:"adjective", parse:"gen. sg. masc. (epic -οιο = -ου)",
            gloss:"fastened together, fixed, glued", note:"with κηρῶ in the next line. Doric ᾱ for η, plus the epic genitive -οιο. From πήγνυμι 'fix, fasten'" },
          { w:"μελίπνουν", lemma:"μελίπνοος, -ον (contr. -πνους)", pos:"adjective", parse:"acc. sg. fem.",
            gloss:"honey-breathing, breathing sweetness", note:"with σύριγγα. Dover: 'honey-breathing from fitted wax' probably refers to the SMELL of the wax rather than the sound — the same appeal to scent as at 149 ὡς καλὸν ὄσδει" },
          { w:"ἐκ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"out of, made of", note:"of material: 'made out of wax'" },
          { w:"κηρῶ", lemma:"κηρός, -οῦ, ὁ", pos:"noun", parse:"gen. sg. masc. (Doric -ῶ = Attic -οῦ)",
            gloss:"(bees')wax", note:"governed by ἐκ. A syrinx is built by glueing reeds together with wax and stopping the pipes with it — the same κηρός that sealed the rim of the goatherd's cup at 27" },
          { w:"σύριγγα", lemma:"σῦριγξ, -ιγγος, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"pan-pipe, syrinx", note:"object of φέρευ, at last — three adjectives and a prepositional phrase have arrived before their noun. The shepherd's pipe, Pan's own instrument" },
          { w:"καλὸν", lemma:"καλός, -ή, -όν (adv. καλόν)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"beautifully, finely", note:"adverbial accusative with ἑλικτάν — 'finely wound'. The neuter-adjective-as-adverb again (cf. 107 καλὸν βομβεῦντι, 149 καλὸν ὄσδει)" },
          { w:"περὶ", lemma:"περί", pos:"preposition", parse:"+ accusative",
            gloss:"around, about", note:"with χεῖλος" },
          { w:"χεῖλος", lemma:"χεῖλος, -εος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"lip, rim, edge", note:"Dover: the reference is to the binding wound round the mouth-end of the pipe, so 'well wound about the lip'" },
          { w:"ἑλικτάν", lemma:"ἑλικτός, -ή, -όν", pos:"adjective (verbal)", parse:"acc. sg. fem. (Doric -άν = Attic -ήν)",
            gloss:"wound, coiled, twisted round", note:"a -τός verbal adjective with σύριγγα, from ἑλίσσω. Compare the ivy's ἕλιξ tendrils on the cup at 31 — the poem's first object and its last are both described as beautifully twisted things" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 130 ---- */
      {
        lines: "130",
        translation: "for truly I am already being dragged down to Hades by Love.",
        greek: [
          { w:"ἦ", lemma:"ἦ", pos:"particle", parse:"—",
            gloss:"truly, indeed", note:"asseverative ἦ, not the interrogative of 98: it introduces a solemn statement, 'truly'" },
          { w:"γὰρ", lemma:"γάρ", pos:"particle", parse:"—",
            gloss:"for", note:"giving the reason for handing over the pipe: he will have no more use for it" },
          { w:"ἐγὼν", lemma:"ἐγώ (Doric/epic ἐγών)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"Doric/epic ἐγών before a vowel, as at 120" },
          { w:"ὑπ᾽", lemma:"ὑπό", pos:"preposition", parse:"+ genitive (elided ὑπό)",
            gloss:"by (of the agent)", note:"ὑπό + genitive of the agent with the passive ἕλκομαι. Contrast 98, where the same phrase Ἔρωτος ὑπ᾽ appeared with the preposition postponed" },
          { w:"Ἔρωτος", lemma:"Ἔρως, -ωτος, ὁ", pos:"proper noun", parse:"gen. sg. masc.",
            gloss:"Eros, Love", note:"the agent. Love drags him down: the god he swore he would bend (97) is bending him after all" },
          { w:"ἐς", lemma:"εἰς (Doric ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"to, into", note:"Doric/poetic ἐς = εἰς" },
          { w:"Ἅιδαν", lemma:"Ἅιδης, -ου, ὁ (Doric Ἀΐδας)", pos:"proper noun", parse:"acc. sg. masc.",
            gloss:"Hades", note:"accusative of the goal after ἐς. Contrast 103 κἠν Ἀΐδα, where the case was genitive because 'the house of' was understood" },
          { w:"ἕλκομαι", lemma:"ἕλκω", pos:"verb", parse:"present middle/passive indicative, 1st singular",
            gloss:"drag, haul; (pass.) be dragged", note:"PASSIVE, with ὑπ᾽ Ἔρωτος as agent. The present tense is the point — not 'I shall be dragged' but 'I am being dragged, right now, as I speak'" },
          { w:"ἤδη", lemma:"ἤδη", pos:"adverb", parse:"—",
            gloss:"already, by now", note:"the last word of Daphnis' address to Pan, and the answer to his own question at 102 — the sun HAS set" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 131 ---- */
      {
        lines: "131",
        translation: "Cease, Muses, come, cease the pastoral song.",
        greek: [
          { w:"λήγετε", lemma:"λήγω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"cease, leave off (+ gen.)", note:"the closing refrain, governing the genitive ἀοιδᾶς" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἴτε", lemma:"εἶμι (ibo)", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"go!, come!", note:"urging on the second imperative" },
          { w:"λήγετ᾽", lemma:"λήγω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"cease", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with λήγετε" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 132 ---- */
      {
        lines: "132",
        translation: "Now, brambles, may you bear violets, and may you, thistles, bear them too,",
        greek: [
          { w:"νῦν", lemma:"νῦν", pos:"adverb", parse:"—",
            gloss:"now", note:"opening the adynaton — the catalogue of impossibilities that must now come true because Daphnis is dying" },
          { w:"ἴα", lemma:"ἴον, -ου, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"violet", note:"object of φορέοιτε. The order is the reversal: soft flowers on thorn-bushes" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by δ᾽ later in the line" },
          { w:"φορέοιτε", lemma:"φορέω", pos:"verb", parse:"present active optative, 2nd plural",
            gloss:"carry, bear, produce", note:"OPTATIVE OF WISH — no ἄν, no subordinating word, second person: 'may you bear'. This whole stanza (132–136) is built of wish-optatives, so recognizing the mood is the key to the passage" },
          { w:"βάτοι", lemma:"βάτος, -ου, ἡ", pos:"noun", parse:"voc. pl. fem.",
            gloss:"bramble, thorn-bush", note:"vocative — the plants are addressed directly, which is why the optatives are 2nd person" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"φορέοιτε", lemma:"φορέω", pos:"verb", parse:"present active optative, 2nd plural",
            gloss:"bear, produce", note:"the verb repeated, with a new vocative — anaphora, the shape of a ritual curse or prayer" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"answering μέν" },
          { w:"ἄκανθαι", lemma:"ἄκανθα, -ης, ἡ", pos:"noun", parse:"voc. pl. fem.",
            gloss:"thistle, thorn, prickly plant", note:"second addressee, with ἴα understood again as object" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 133 ---- */
      {
        lines: "133",
        translation: "and may the fair narcissus bloom on junipers,",
        greek: [
          { w:"ἁ", lemma:"ὁ, ἡ, τό (Doric ἁ = ἡ)", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with νάρκισσος. Doric ἁ = ἡ" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"next item in the catalogue" },
          { w:"καλὰ", lemma:"καλός, -ή, -όν", pos:"adjective", parse:"nom. sg. fem. (Doric -ά = Attic -ή)",
            gloss:"beautiful, fair", note:"attributive with νάρκισσος inside the article's bracket" },
          { w:"νάρκισσος", lemma:"νάρκισσος, -ου, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"narcissus", note:"subject of κομάσαι — feminine here, as flower-names often are" },
          { w:"ἐπ᾽", lemma:"ἐπί", pos:"preposition", parse:"+ dative (elided ἐπί)",
            gloss:"on, upon", note:"of place where" },
          { w:"ἀρκεύθοισι", lemma:"ἄρκευθος, -ου, ἡ", pos:"noun", parse:"dat. pl. fem. (epic -οισι = -οις)",
            gloss:"juniper", note:"governed by ἐπ᾽. Epic fuller dative plural. A prickly shrub — again the wrong plant to be flowering" },
          { w:"κομάσαι", lemma:"κομάω", pos:"verb", parse:"aorist active optative, 3rd singular",
            gloss:"wear long hair; (of plants) grow luxuriantly, be in leaf, bloom", note:"another wish-optative, now 3rd singular. Watch the ending: -σαι here is optative (κομήσειε/κομάσαι), not an aorist infinitive or middle imperative — the surrounding optatives are what settle it" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 134 ---- */
      {
        lines: "134",
        translation: "and may everything be turned about, and may the pine bear pears,",
        greek: [
          { w:"πάντα", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective (substantival)", parse:"nom. pl. neut.",
            gloss:"all things, everything", note:"subject of γένοιτο. A neuter plural subject regularly takes a singular verb in Greek — do not 'correct' γένοιτο to a plural" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ἄναλλα", lemma:"ἄναλλος, -ον", pos:"adjective", parse:"nom. pl. neut.",
            gloss:"changed about, reversed, turned the other way", note:"predicate with γένοιτο. From ἀνά + ἄλλος: 'other than it was'. This one word states the principle the whole catalogue illustrates" },
          { w:"γένοιτο", lemma:"γίγνομαι", pos:"verb", parse:"aorist middle optative, 3rd singular",
            gloss:"become, come to be", note:"wish-optative again, and a linking verb, so ἄναλλα is a predicate NOMINATIVE agreeing with πάντα" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"adding the next impossibility" },
          { w:"ἁ", lemma:"ὁ, ἡ, τό (Doric ἁ = ἡ)", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with πίτυς" },
          { w:"πίτυς", lemma:"πίτυς, -υος, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"pine (tree)", note:"subject of ἐνείκαι. The very tree that was making sweet music in line 1 — the poem's opening image returns inside the catalogue of things gone wrong" },
          { w:"ὄχνας", lemma:"ὄχνη, -ης, ἡ", pos:"noun", parse:"acc. pl. fem. (Doric -ας = Attic -ᾱς)",
            gloss:"pear, pear-tree", note:"object of ἐνείκαι — a conifer bearing orchard fruit" },
          { w:"ἐνείκαι", lemma:"φέρω (epic aor. ἤνεικα)", pos:"verb", parse:"aorist active optative, 3rd singular",
            gloss:"carry, bear, bring forth", note:"wish-optative of the epic aorist ἤνεικα (Attic ἤνεγκα), here unaugmented. φέρω is one of the great suppletive verbs — φέρω / οἴσω / ἤνεγκα-ἤνεικα / ἐνήνοχα — and none of its stems looks like any other" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 135 ---- */
      {
        lines: "135",
        translation: "since Daphnis is dying — and may the stag drag the hounds,",
        greek: [
          { w:"Δάφνις", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Daphnis", note:"subject of θνάσκει" },
          { w:"ἐπεὶ", lemma:"ἐπεί", pos:"conjunction", parse:"—",
            gloss:"since, seeing that", note:"CAUSAL ἐπεί, not temporal: the reason all nature is to be reversed. Dover notes the artful placing — the causal clause is dropped into the middle of the catalogue rather than heading it" },
          { w:"θνάσκει", lemma:"θνῄσκω (Doric θνάσκω)", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"die, be dying", note:"INDICATIVE, breaking the run of optatives — the one fact in the stanza that is not a wish. Doric ᾱ for η. Present tense: he is dying now, on stage" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"resuming the wishes" },
          { w:"τὰς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. fem.",
            gloss:"the", note:"with κύνας" },
          { w:"κύνας", lemma:"κύων, κυνός, ὁ/ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"dog, hound", note:"object of ἕλκοι — the hunting dogs, now the quarry" },
          { w:"ὥλαφος", lemma:"ὁ ἔλαφος (crasis ὥλαφος)", pos:"article + noun", parse:"nom. sg. masc., crasis of ὁ ἔλαφος",
            gloss:"the deer, the stag", note:"crasis of ὁ + ἔλαφος. Subject of ἕλκοι: the hunted animal hauling the hunters — the reversal made physical" },
          { w:"ἕλκοι", lemma:"ἕλκω", pos:"verb", parse:"present active optative, 3rd singular",
            gloss:"drag, haul, pull", note:"wish-optative. The same verb Daphnis has just used of himself in the passive at 130 (ἕλκομαι) — he is dragged by Love as the dogs are to be dragged by the deer" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 136 ---- */
      {
        lines: "136",
        translation: "and from the mountains may the scops-owls sing to the nightingales.”",
        greek: [
          { w:"κἠξ", lemma:"καί + ἐξ (crasis κἠξ)", pos:"conjunction + preposition", parse:"crasis of καὶ ἐξ (+ gen.)",
            gloss:"and out of, and from", note:"crasis καί + ἐξ → κἠξ, on the pattern of κἠν (103). Collect the family: κἤφα, κεῖπε, χὠ, χὠκ, κἠν, κἠξ" },
          { w:"ὀρέων", lemma:"ὄρος, -εος, τό (Doric ὤρος)", pos:"noun", parse:"gen. pl. neut.",
            gloss:"mountain", note:"governed by the ἐξ inside the crasis" },
          { w:"τοὶ", lemma:"ὁ, ἡ, τό (Doric τοί = οἱ)", pos:"article", parse:"nom. pl. masc.",
            gloss:"the", note:"Doric τοί = οἱ, with σκῶπες. An article, not the relative τοί of 118 — the following word is a noun, not a verb" },
          { w:"σκῶπες", lemma:"σκώψ, σκωπός, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"scops-owl, little horned owl", note:"subject of γαρύσαιντο. Dover: the scops-owl lives close to man and the nightingale in lowland woods, so their moving to the mountains is itself part of the reversal" },
          { w:"ἀηδόσι", lemma:"ἀηδών, -όνος, ἡ", pos:"noun", parse:"dat. pl. fem.",
            gloss:"nightingale", note:"DATIVE, and that is the crux of the line: γαρύομαί σοι is 'I sing TO you', implying you listen in silent admiration. So the reversal is not a singing contest but the nightingale falling silent to listen to the owl" },
          { w:"γαρύσαιντο", lemma:"γηρύομαι (Doric γαρύομαι)", pos:"verb", parse:"aorist middle optative, 3rd plural",
            gloss:"utter, sing, cry out", note:"the last wish-optative of the stanza. Doric ᾱ for η (γαρύομαι = γηρύομαι). Dover: we might have expected 'outdo' or 'surpass', but the dative shows the sense is 'sing to' — and to be sung to is to be the admiring listener. The closing quotation mark after this word ends the speech Daphnis began back at 100" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"”", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 137 ---- */
      {
        lines: "137",
        translation: "Cease, Muses, come, cease the pastoral song.",
        greek: [
          { w:"λήγετε", lemma:"λήγω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"cease, leave off (+ gen.)", note:"refrain; ἀοιδᾶς is its genitive" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἴτε", lemma:"εἶμι (ibo)", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"go!, come!", note:"with λήγετ᾽" },
          { w:"λήγετ᾽", lemma:"λήγω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"cease", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with λήγετε. This is the refrain's last appearance inside the song; Thyrsis' narrative resumes at once" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 138–139 ---- */
      {
        lines: "138–139",
        translation: "And he, having said so much, stopped; and Aphrodite wanted to set him on his feet again —",
        greek: [
          { w:"χὠ", lemma:"καί + ὁ (crasis χὠ)", pos:"conjunction + article", parse:"crasis of καὶ ὁ",
            gloss:"and he", note:"crasis καί + ὁ → χὠ, the κ aspirated. The article used as a pronoun: 'and he'" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"answered by τὸν δ᾽ — 'he for his part … but her, on the other hand'. The μέν/δέ turns the scene from Daphnis to Aphrodite" },
          { w:"τόσσ᾽", lemma:"τόσος, -η, -ον (epic τόσσος)", pos:"adjective (substantival)", parse:"acc. pl. neut. (elided τόσσα)",
            gloss:"so much, so many things", note:"internal object of εἰπών: 'having said so much'. Epic double σ" },
          { w:"εἰπὼν", lemma:"λέγω", pos:"verb (participle)", parse:"aorist active participle, nom. sg. masc. (aor. εἶπον)",
            gloss:"say, speak", note:"circumstantial participle, aorist and so PRIOR to the main verb: he finished speaking and then stopped" },
          { w:"ἀπεπαύσατο", lemma:"ἀποπαύομαι", pos:"verb", parse:"aorist middle indicative, 3rd singular",
            gloss:"cease, stop, leave off", note:"middle, intransitive: 'he ceased'. The active ἀποπαύω would mean 'make someone stop'" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"τὸν", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"article as pronoun", parse:"acc. sg. masc.",
            gloss:"him", note:"the article as pronoun, object of ἀνορθῶσαι — fronted before its own clause for the μέν/δέ contrast" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"but", note:"answering μέν" },
          { w:"Ἀφροδίτα", lemma:"Ἀφροδίτη, -ης, ἡ (Doric Ἀφροδίτα)", pos:"proper noun", parse:"nom. sg. fem.",
            gloss:"Aphrodite", note:"subject of ἤθελε. Doric ᾱ for η. She is named in full only now, at the moment she relents" },
          { w:"ἤθελ᾽", lemma:"ἐθέλω", pos:"verb", parse:"imperfect active indicative, 3rd singular (elided ἤθελε)",
            gloss:"wish, want, be willing", note:"imperfect of attempted or unfulfilled wanting — 'she was wanting to', and did not manage it. Governs the infinitive ἀνορθῶσαι" },
          { w:"ἀνορθῶσαι", lemma:"ἀνορθόω", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"set upright again, raise up, restore", note:"complementary infinitive with ἤθελε. Dover: if he dies it is a hollow victory for Aphrodite, since he will have kept his vow — which is why she now wants to save his life, hoping he may yet surrender" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 139–140 ---- */
      {
        lines: "139–140",
        translation: "but all the thread from the Fates had run out, and Daphnis went to the stream.",
        greek: [
          { w:"τά", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. neut.",
            gloss:"the", note:"with λίνα" },
          { w:"γε", lemma:"γε", pos:"particle (enclitic)", parse:"—",
            gloss:"at any rate, indeed", note:"γε μάν together, 'but in fact' — marking the objection that cancels her wish" },
          { w:"μὰν", lemma:"μήν (Doric μάν)", pos:"particle", parse:"—",
            gloss:"indeed, truly", note:"Doric μάν = μήν" },
          { w:"λίνα", lemma:"λίνον, -ου, τό", pos:"noun", parse:"nom. pl. neut.",
            gloss:"thread, flax, linen thread", note:"subject of λελοίπει. Dover: the idea that a thread spun by the Fates runs alongside each human life is Homeric and recurrent — when the thread runs out, the life does" },
          { w:"πάντα", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"nom. pl. neut.",
            gloss:"all", note:"with λίνα" },
          { w:"λελοίπει", lemma:"λείπω", pos:"verb", parse:"pluperfect active indicative, 3rd singular",
            gloss:"leave; (intr., perf./plupf.) have run out, be gone", note:"PLUPERFECT and INTRANSITIVE — 'had run out'. λείπω is transitive in the present ('leave behind') but its perfect stem can be intransitive, exactly as at Odyssey 14.213 νῦν δ᾽ ἤδη πάντα λέλοιπεν, 'but by now everything has run out'. Note the singular verb with the neuter plural subject" },
          { w:"ἐκ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"from, out of", note:"Dover: this ἐκ indicates the supernatural AUTHORITY by which something happens — 'from the Fates' means 'by the Fates' decree', not merely 'out of their hands'" },
          { w:"Μοιρᾶν", lemma:"Μοῖρα, -ας, ἡ", pos:"proper noun", parse:"gen. pl. fem.",
            gloss:"Fate, Destiny; (pl.) the Fates", note:"governed by ἐκ. The same noun as μοίρας 'destiny' at 93, now personified as the three spinners" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"χὠ", lemma:"καί + ὁ (crasis χὠ)", pos:"conjunction + article", parse:"crasis of καὶ ὁ",
            gloss:"and the", note:"crasis again, here with the following name: 'and Daphnis'" },
          { w:"Δάφνις", lemma:"Δάφνις, -ιδος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Daphnis", note:"subject of ἔβα" },
          { w:"ἔβα", lemma:"βαίνω (aor. ἔβην, Doric ἔβα)", pos:"verb", parse:"aorist active indicative, 3rd singular (Doric ἔβα = Attic ἔβη)",
            gloss:"go, walk, step", note:"a ROOT (athematic) aorist — ἔβην/ἔβα, with no σ and no thematic vowel, like ἔστην and ἔγνων. Doric ᾱ for η. The plainest possible words for the death itself" },
          { w:"ῥόον", lemma:"ῥόος, -ου, ὁ (= ῥοῦς)", pos:"noun", parse:"acc. sg. masc.",
            gloss:"stream, current, flow", note:"accusative of the goal reached, with no preposition — a poetic construction. 'The stream' is Acheron, which the souls of the dead must cross; the allusiveness is the point, and Theocritus never names it" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 140–141 ---- */
      {
        lines: "140–141",
        translation: "The eddy washed over the man dear to the Muses, the man not hated by the Nymphs.",
        greek: [
          { w:"ἔκλυσε", lemma:"κλύζω", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"wash over, wash, dash over", note:"Dover is firm: 'washed', not 'engulfed' — the souls of the dead were not submerged in Acheron but waited at the water's edge to be ferried across. The same verb sealed the rim of the goatherd's cup with wax at 28" },
          { w:"δίνα", lemma:"δίνη, -ης, ἡ (Doric δίνα)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"eddy, whirlpool, swirling water", note:"subject of ἔκλυσε. Doric ᾱ for η" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with ἄνδρα, and repeated before the second phrase — the article-plus-adjective frame that carries the whole epitaph" },
          { w:"Μοίσαις", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"dat. pl. fem.",
            gloss:"Muse", note:"dative with φίλον: adjectives of liking take the dative of the person" },
          { w:"φίλον", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"dear, beloved", note:"attributive with ἄνδρα, inside the article's bracket" },
          { w:"ἄνδρα", lemma:"ἀνήρ, ἀνδρός, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"man", note:"object of ἔκλυσε" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the (one)", note:"the article repeated with ἄνδρα understood — a second attributive phrase in apposition to the first" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negating ἀπεχθῆ. 'Not hated by' is litotes — understatement for 'much loved by'" },
          { w:"Νύμφαισιν", lemma:"νύμφη, -ης, ἡ", pos:"noun", parse:"dat. pl. fem. (epic -αισιν = -αις)",
            gloss:"nymph", note:"dative with ἀπεχθῆ, the same rule as Μοίσαις φίλον. Dover notes the pointed recall of 66 — Thyrsis had opened by asking the Nymphs where they were, and closes by insisting they had not abandoned him out of dislike" },
          { w:"ἀπεχθῆ", lemma:"ἀπεχθής, -ές", pos:"adjective", parse:"acc. sg. masc. (contracted -έα → -ῆ)",
            gloss:"hateful, odious", note:"attributive with the understood ἄνδρα. The same adjective Daphnis flung at Aphrodite at 101 — the poem gives him the opposite epitaph" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 142 ---- */
      {
        lines: "142",
        translation: "Cease, Muses, come, cease the pastoral song.",
        greek: [
          { w:"λήγετε", lemma:"λήγω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"cease, leave off (+ gen.)", note:"the final refrain of Thyrsis' song" },
          { w:"βουκολικᾶς", lemma:"βουκολικός, -ή, -όν (Doric -ᾶς)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"bucolic, pastoral", note:"with ἀοιδᾶς" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἴτε", lemma:"εἶμι (ibo)", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"go!, come!", note:"with λήγετ᾽" },
          { w:"λήγετ᾽", lemma:"λήγω", pos:"verb", parse:"present active imperative, 2nd plural (elided)",
            gloss:"cease", note:"repeated" },
          { w:"ἀοιδᾶς", lemma:"ἀοιδή, -ῆς, ἡ (Doric ἀοιδά)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"song, lay", note:"genitive with λήγετε — and now the song really does cease" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 143–144 ---- */
      {
        lines: "143–144",
        translation: "And you, give me the goat and the cup, so that I may milk her and pour a libation to the Muses.",
        greek: [
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"Thyrsis turns from the song to the payment he was promised at 25–26" },
          { w:"τὺ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"accented, so nominative subject of δίδου — 'now it's your turn'" },
          { w:"δίδου", lemma:"δίδωμι", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"give", note:"PRESENT imperative of the athematic δίδωμι (contracted from δίδοε). The present rather than aorist δός makes it 'hand them over now, as agreed', not a bare request" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with αἶγα" },
          { w:"αἶγα", lemma:"αἴξ, αἰγός, ὁ/ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"goat (here she-goat)", note:"the promised fee, first named at 5–6" },
          { w:"τό", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with σκύφος" },
          { w:"τε", lemma:"τε", pos:"particle (enclitic)", parse:"—",
            gloss:"and", note:"joining the second object; τε is postpositive, hence its place inside the article-noun pair" },
          { w:"σκύφος", lemma:"σκύφος, -εος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"cup, drinking-bowl", note:"the carved κισσύβιον described at length in 27–56 — the poem's frame closing" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὥς", lemma:"ὡς", pos:"conjunction", parse:"—",
            gloss:"so that, in order that", note:"final (purpose) conjunction. With κεν + subjunctive it is the epic form of a purpose clause" },
          { w:"κεν", lemma:"ἄν / κε(ν)", pos:"particle", parse:"—",
            gloss:"(modal particle)", note:"epic κε(ν) = ἄν. In a purpose clause after ὡς it adds a shade of contingency; the mood it requires here is the subjunctive σπείσω" },
          { w:"ἀμέλξας", lemma:"ἀμέλγω", pos:"verb (participle)", parse:"aorist active participle, nom. sg. masc.",
            gloss:"milk", note:"circumstantial participle, aorist and so prior to σπείσω: milk first, then pour. English needs two coordinate verbs where Greek subordinates one" },
          { w:"σπείσω", lemma:"σπένδω (aor. ἔσπεισα)", pos:"verb", parse:"aorist active subjunctive, 1st singular",
            gloss:"pour a libation", note:"SUBJUNCTIVE in the purpose clause, not a future indicative — the two are identical in shape for this verb, and only ὥς κεν tells you which. Dover: pouring a libation is one of the commonest ways a Greek symbolically shares what he has with his gods" },
          { w:"ταῖς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"dat. pl. fem.",
            gloss:"the", note:"with Μοίσαις" },
          { w:"Μοίσαις", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"dat. pl. fem.",
            gloss:"Muse", note:"indirect object of σπείσω — the libation goes to the Muses who lent him the song" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 144–145 ---- */
      {
        lines: "144–145",
        translation: "Hail many times over, Muses, hail! And I will sing you something sweeter hereafter.",
        greek: [
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"opening the hymn-like farewell" },
          { w:"χαίρετε", lemma:"χαίρω", pos:"verb", parse:"present active imperative, 2nd plural",
            gloss:"rejoice; (as greeting) hail, farewell", note:"Dover: this cry gives the song an ending like that of a traditional hymn — both the Homeric Hymns and Kallimachos' end by addressing the god with χαῖρε" },
          { w:"πολλάκι", lemma:"πολλάκις (poetic πολλάκι)", pos:"adverb", parse:"—",
            gloss:"often, many times", note:"the ν-less poetic form, used before a consonant" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Μοῖσαι", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"voc. pl. fem.",
            gloss:"Muse", note:"vocative — no longer commanded to begin or cease, simply saluted" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"χαίρετ᾽", lemma:"χαίρω", pos:"verb", parse:"present active imperative, 2nd plural (elided χαίρετε)",
            gloss:"hail!, farewell!", note:"the greeting repeated across the line-end, as in the hymns" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"ἐγὼ", lemma:"ἐγώ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"emphatic, opening the promise" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ὔμμιν", lemma:"ὑμεῖς (Aeolic/Doric ὕμμιν = ὑμῖν)", pos:"personal pronoun", parse:"dat. pl.",
            gloss:"to you, for you", note:"Aeolic/Doric ὕμμιν = ὑμῖν, as at 116. Dative of the person sung to" },
          { w:"καὶ", lemma:"καί", pos:"adverb", parse:"—",
            gloss:"also, even", note:"with ἐς ὕστερον, 'in future too'" },
          { w:"ἐς", lemma:"εἰς (Doric ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"to, for", note:"ἐς ὕστερον, 'for hereafter'" },
          { w:"ὕστερον", lemma:"ὕστερος, -α, -ον (adv. ὕστερον)", pos:"adjective (substantival)", parse:"acc. sg. neut.",
            gloss:"later, afterwards; (with ἐς) hereafter", note:"neuter adjective as a noun after the preposition" },
          { w:"ἅδιον", lemma:"ἡδύς, -εῖα, -ύ (Doric ἁδύς, comp. ἅδιον)", pos:"adjective (adverbial comparative)", parse:"acc. sg. neut. as adverb (Doric ἅδιον = Attic ἥδιον)",
            gloss:"more sweetly", note:"comparative adverb with ᾀσῶ. The neuter singular of a comparative adjective IS its adverb (ἥδιον, θᾶσσον, μᾶλλον) — so do not look for a noun for it to agree with. Doric ᾱ for η" },
          { w:"ᾀσῶ", lemma:"ἀείδω (= ᾄδω)", pos:"verb", parse:"future active indicative, 1st singular (Doric contracted ᾀσῶ = Attic ᾄσομαι)",
            gloss:"sing (of)", note:"Doric contracted-type future, like φυλαξεῖς (63) and δοκησεῖς (150). Dover: the promise implies a prayer, exactly as in Greek dedications — 'may you rejoice in this, and grant me another'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      {
        translation: "GOATHERD",
        greek: [
          { w:"Αἰπόλος", punct:true }
        ]
      },

      /* ---- 146–147 ---- */
      {
        lines: "146–147",
        translation: "May your lovely mouth be full of honey, Thyrsis, and full of honeycomb,",
        greek: [
          { w:"πλῆρές", lemma:"πλήρης, -ες", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"full (of, + gen.)", note:"predicate with γένοιτο. Adjectives of filling and emptying take the genitive of what fills — hence μέλιτος" },
          { w:"τοι", lemma:"σύ (Doric/epic τοι = σοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to you, your", note:"possessive dative — 'the mouth belonging to you' = 'your mouth'. Not the particle τοι; an enclitic pronoun in second position, as regularly" },
          { w:"μέλιτος", lemma:"μέλι, -ιτος, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"honey", note:"genitive governed by πλῆρες. Dover, drily: a mouth FULL of honey sounds rather sickening — the goatherd's compliments are as excessive as everything else about him" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with στόμα" },
          { w:"καλὸν", lemma:"καλός, -ή, -όν", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"beautiful, fine, lovely", note:"attributive with στόμα, inside the article's bracket — contrast the predicative πλῆρες standing outside it" },
          { w:"στόμα", lemma:"στόμα, -ατος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"mouth", note:"subject of γένοιτο" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Θύρσι", lemma:"Θύρσις, -ιδος, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Thyrsis", note:"vocative of an -ις stem, with no ending at all — like Δάφνι (77, 82, 97)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"γένοιτο", lemma:"γίγνομαι", pos:"verb", parse:"aorist middle optative, 3rd singular",
            gloss:"become, come to be", note:"OPTATIVE OF WISH — the same mood as the whole adynaton at 132–136, but now benevolent. The goatherd pays Thyrsis in blessings before he pays him in goods" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πλῆρες", lemma:"πλήρης, -ες", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"full (of, + gen.)", note:"repeated, with γένοιτο and στόμα understood — anaphora" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"σχαδόνων", lemma:"σχαδών, -όνος, ἡ", pos:"noun", parse:"gen. pl. fem.",
            gloss:"honeycomb (with the grubs in it)", note:"second genitive with πλῆρες" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 147–148 ---- */
      {
        lines: "147–148",
        translation: "and may you eat a sweet dried fig from Aigilos, since you sing better than the cicada.",
        greek: [
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"third blessing" },
          { w:"ἀπ᾽", lemma:"ἀπό", pos:"preposition", parse:"+ genitive (elided ἀπό)",
            gloss:"from", note:"Dover: the phrase ἀπ᾽ Αἰγίλω functions as an ADJECTIVE qualifying ἰσχάδα — 'an Aigilan fig'. A prepositional phrase doing an adjective's work is common in Greek and usually needs the article, but verse can dispense with it" },
          { w:"Αἰγίλω", lemma:"Αἴγιλος, -ου, ὁ", pos:"proper noun", parse:"gen. sg. masc. (Doric -ω = Attic -ου)",
            gloss:"Aigilos", note:"the eponymous hero of the Attic deme Aigilia, whose figs were famous; treated here virtually as a place-name" },
          { w:"ἰσχάδα", lemma:"ἰσχάς, -άδος, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"dried fig", note:"object of τρώγοις; its adjective ἁδεῖαν waits until the next line" },
          { w:"τρώγοις", lemma:"τρώγω", pos:"verb", parse:"present active optative, 2nd singular",
            gloss:"gnaw, munch, eat (of fruit and raw food)", note:"another optative of wish, now 2nd singular: 'may you eat'" },
          { w:"ἁδεῖαν", lemma:"ἡδύς, -εῖα, -ύ (Doric ἁδύς)", pos:"adjective", parse:"acc. sg. fem. (Doric ἁδεῖαν = Attic ἡδεῖαν)",
            gloss:"sweet, pleasant", note:"attributive with ἰσχάδα, held over to the head of the next line. Contrast 95, where the same word was neuter plural and adverbial — here the accusative singular feminine agreement is unambiguous" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τέττιγος", lemma:"τέττιξ, -ιγος, ὁ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"cicada", note:"GENITIVE OF COMPARISON with φέρτερον: 'better than the cicada'. Greek can use a bare genitive instead of ἤ + nominative. Dover: the cicada is the singer par excellence — Socrates in the Phaedrus tells how cicadas were once men who sang until they forgot to eat" },
          { w:"ἐπεὶ", lemma:"ἐπεί", pos:"conjunction", parse:"—",
            gloss:"since, seeing that", note:"causal, giving the reason for the blessings" },
          { w:"τύγα", lemma:"σύ (Doric τύ) + γα", pos:"personal pronoun + particle", parse:"nom. sg. + Doric γα (= γε)",
            gloss:"you at any rate", note:"τύ γα, with Doric γα for γε — here genuinely emphatic, unlike the τύγ᾽ of 124" },
          { w:"φέρτερον", lemma:"φέρτερος, -α, -ον (compar.)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"better, more excellently", note:"comparative neuter used adverbially with ᾄδεις — the same rule as ἅδιον at 145" },
          { w:"ᾄδεις", lemma:"ἀείδω (= ᾄδω)", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"sing", note:"the contracted Attic-type form beside the epic ἀείδω used elsewhere in the poem" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 149 ---- */
      {
        lines: "149",
        translation: "Look, here is the cup for you: see, my friend, how sweetly it smells;",
        greek: [
          { w:"ἠνίδε", lemma:"ἠνίδε (Doric)", pos:"interjection", parse:"—",
            gloss:"look!, see here!", note:"a deictic interjection (ἤν + ἰδέ), used as one word for handing something over — the goatherd is producing the cup as he speaks" },
          { w:"τοι", lemma:"σύ (Doric/epic τοι = σοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"for you", note:"dative of the person concerned — 'here's the cup for you'" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. neut.",
            gloss:"the", note:"with δέπας" },
          { w:"δέπας", lemma:"δέπας, -αος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"cup, goblet, drinking-bowl", note:"the promised prize, handed over at last. Note the shift of word: σκύφος at 143, δέπας here, κισσύβιον at 27 — Theocritus never settles on one name for it" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"θᾶσαι", lemma:"θηέομαι (θεάομαι)", pos:"verb", parse:"aorist middle imperative, 2nd singular (Doric θᾶσαι = θέασαι)",
            gloss:"gaze at, behold, look at", note:"Doric ᾱ for η with contraction. A deponent middle: middle in form, active in meaning. Do not confuse the imperative -σαι with the optative -σαι of κομάσαι (133)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"φίλος", lemma:"φίλος, -η, -ον", pos:"adjective (substantival)", parse:"nom. sg. masc. for voc.",
            gloss:"dear; (subst.) friend", note:"nominative standing in for the vocative, a common colloquialism — the same address the goatherd used at 61" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὡς", lemma:"ὡς", pos:"adverb", parse:"—",
            gloss:"how!", note:"exclamatory ὡς introducing an indirect exclamation after θᾶσαι — 'see HOW sweetly it smells'" },
          { w:"καλὸν", lemma:"καλός, -ή, -όν (adv. καλόν)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"beautifully, sweetly", note:"adverbial accusative with ὄσδει, exactly as at 107 and 129" },
          { w:"ὄσδει", lemma:"ὄζω (Doric ὄσδω)", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"smell, give off a scent", note:"Doric -σδ- for -ζ- once more (cf. ποτίσδων 121, φράσδη 102). The cup smells of the wax and cheese it has held — cf. ποτόσδει at 28" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 150 ---- */
      {
        lines: "150",
        translation: "you will think it has been washed at the spring of the Hours.",
        greek: [
          { w:"Ὡρᾶν", lemma:"Ὥρα, -ας, ἡ", pos:"proper noun", parse:"gen. pl. fem.",
            gloss:"Hour, Season; (pl.) the Hours", note:"possessive genitive with κράναισι. Dover: the Hours personify those stages in the life of creatures and plants that attract us by their beauty, so they are the powers that CONFER such beauty — and their 'spring' is probably Theocritus' own invention" },
          { w:"πεπλύσθαι", lemma:"πλύνω (perf. mid./pass. πέπλυμαι)", pos:"verb (infinitive)", parse:"perfect middle/passive infinitive",
            gloss:"wash, rinse; (pass.) have been washed", note:"infinitive of indirect statement after δοκησεῖς, with νιν as its subject accusative. The PERFECT gives the resulting state: 'that it stands washed', which is why it still smells so good" },
          { w:"νιν", lemma:"νιν (Doric enclitic pron. = αὐτόν)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"it, him, her", note:"the Doric all-purpose enclitic accusative pronoun, here neuter 'it' (the cup) and subject of the infinitive πεπλύσθαι" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ dative",
            gloss:"at, by", note:"of place where, with κράναισι" },
          { w:"κράναισι", lemma:"κρήνη, -ης, ἡ (Doric κράνα)", pos:"noun", parse:"dat. pl. fem. (epic -αισι = -αις)",
            gloss:"spring, fountain", note:"Doric ᾱ for η plus the fuller epic dative plural. The same springs the girl was searching at 83" },
          { w:"δοκησεῖς", lemma:"δοκέω", pos:"verb", parse:"future active indicative, 2nd singular (Doric δοκησεῖς = Attic δόξεις)",
            gloss:"think, suppose, imagine", note:"Doric contracted-type future in -ησεῖς where Attic has -ξεις — the same formation as φυλαξεῖς (63), λυγιξεῖν (97), ᾀσῶ (145). Governs the accusative-and-infinitive νιν πεπλύσθαι" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 151 ---- */
      {
        lines: "151",
        translation: "Come here, Kissaitha; and you, milk her. And you she-goats,",
        greek: [
          { w:"ὧδ᾽", lemma:"ὧδε", pos:"adverb", parse:"elided ὧδε",
            gloss:"here, this way, hither", note:"of motion towards the speaker, with the imperative" },
          { w:"ἴθι", lemma:"εἶμι (ibo)", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"go!, come!", note:"the singular of the ἴτε that filled out the λήγετε refrain" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Κισσαίθα", lemma:"Κίσσαιθα, -ας, ἡ", pos:"proper noun", parse:"voc. sg. fem.",
            gloss:"Kissaitha (a goat's name)", note:"Dover: a good name for a goat, since goats differ from other animals in their appetite for ivy (κισσός) — the same ivy that was carved round the cup at 30" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"τὺ", lemma:"σύ (Doric τύ)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"you", note:"accented, so nominative — the subject of ἄμελγε, addressed to Thyrsis, who asked for exactly this at 143" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"turning from the goat to the man" },
          { w:"ἄμελγέ", lemma:"ἀμέλγω", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"milk", note:"note the second accent on ἄμελγέ, thrown back on it by the following enclitic νιν" },
          { w:"νιν", lemma:"νιν (Doric enclitic pron. = αὐτόν)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"her", note:"the enclitic accusative again, now feminine — the goat" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"αἱ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. pl. fem. (for voc.)",
            gloss:"the", note:"Dover: the ARTICLE with a vocative is not uncommon in peremptory orders — 'you there, you she-goats!'. Compare Aristophanes' ὁ παῖς ἀκολούθει δεῦρο" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"turning to the herd" },
          { w:"χίμαιραι", lemma:"χίμαιρα, -ας, ἡ", pos:"noun", parse:"nom. pl. fem. (for voc.)",
            gloss:"she-goat, young she-goat", note:"addressed with the article, as above. The last thing in the poem is the ordinary business of goats" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 152 ---- */
      {
        lines: "152",
        translation: "don't you go frisking about, or the he-goat will be up at you.",
        greek: [
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"οὐ μή + future indicative is an EMPHATIC PROHIBITION — much stronger than μή + imperative: 'don't you dare'. The doubled negative is the tell, and it is the last construction in the poem" },
          { w:"μὴ", lemma:"μή", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"the second half of οὐ μή. Do not read it as introducing a purpose clause — that is the SEPARATE μή later in the line" },
          { w:"σκιρτασεῖτε", lemma:"σκιρτάω", pos:"verb", parse:"future active indicative, 2nd plural (Doric σκιρτασεῖτε = Attic σκιρτήσετε)",
            gloss:"leap, skip, frisk, gambol", note:"future indicative, as οὐ μή requires. Doric ᾱ for η and the contracted-type future once more" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"μὴ", lemma:"μή", pos:"conjunction", parse:"—",
            gloss:"lest, in case", note:"a DIFFERENT μή from the one above: this one introduces a negative purpose / fear clause, and it is why ἀναστῇ is subjunctive" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with τράγος" },
          { w:"τράγος", lemma:"τράγος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"he-goat, billy-goat", note:"subject of ἀναστῇ — the same τράγος the goatherd of 87–88 wished he had been born" },
          { w:"ὔμμιν", lemma:"ὑμεῖς (Aeolic/Doric ὕμμιν = ὑμῖν)", pos:"personal pronoun", parse:"dat. pl.",
            gloss:"to you, at you, on you", note:"Aeolic/Doric ὕμμιν = ὑμῖν, its third appearance in the poem (116, 145). Dative with the compound ἀν-ίσταμαι" },
          { w:"ἀναστῇ", lemma:"ἀνίστημι (intr. aor. ἀνέστην)", pos:"verb", parse:"aorist active subjunctive, 3rd singular",
            gloss:"stand up, rise up; (here) rear up at, mount", note:"SUBJUNCTIVE after the fear-clause μή. From the INTRANSITIVE root aorist ἀνέστην — ἵστημι is transitive in the sigmatic aorist (ἔστησα 'I set up') but intransitive in the root aorist and perfect (ἔστην, ἕστηκα). The poem ends on the same barnyard note as Priapos' speech at 87–88" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      }

    ]
  },

  {
    id: "theoc11-1-18",
    title: "Idyll 11.1–18",
    citation: "Theocritus, Idyll 11.1–18 — to Nikias: there is no cure for love but song, as Polyphemus found (Doric)",
    segments: [

      /* ---- 1–2 ---- */
      {
        lines: "1–2",
        translation: "No other remedy for love has ever grown, Nikias — neither ointment, it seems to me, nor powder —",
        greek: [
          { w:"οὐδὲν", lemma:"οὐδείς, οὐδεμία, οὐδέν", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"no, none", note:"with φάρμακον ἄλλο. The poem's first word is its thesis: NO remedy" },
          { w:"ποττὸν", lemma:"πρός (Doric ποτί) + ὁ, ἡ, τό", pos:"preposition + article", parse:"crasis/assimilation of ποτὶ τόν (+ acc.)",
            gloss:"against the", note:"Dover: ποττόν = ποτὶ τόν, i.e. πρὸς τόν. Doric assimilates the -τι of ποτί to the following τ- and writes it as one word. πρός + acc. of the ailment is the ordinary idiom for a medicine 'for/against' something" },
          { w:"ἔρωτα", lemma:"ἔρως, -ωτος, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"love, desire, passion", note:"governed by ποτί inside the crasis — love as the disease the φάρμακον must treat" },
          { w:"πεφύκει", lemma:"φύω (perf. πέφυκα)", pos:"verb", parse:"perfect active indicative, 3rd singular (Doric πεφύκει = Attic πέφυκε)",
            gloss:"grow; (perf.) have grown, exist by nature, be", note:"a PERFECT WITH PRESENT MEANING — πέφυκα is 'I stand grown', hence simply 'I am by nature'. And the metaphor is alive: φάρμακα are plants, so 'no other drug has GROWN' sets up the medical-botanical image the whole prologue runs on" },
          { w:"φάρμακον", lemma:"φάρμακον, -ου, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"drug, remedy, cure; charm", note:"subject of πεφύκει. The word means both 'medicine' and 'magic charm', and Theocritus wants both — song will turn out to be the φάρμακον" },
          { w:"ἄλλο", lemma:"ἄλλος, -η, -ο", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"other, another", note:"with φάρμακον, and looking ahead to the ἤ of line 3: 'no other … than'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Νικία", lemma:"Νικίας, -ου, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Nikias", note:"the addressee: a doctor and poet, Theocritus' friend, addressed again in Idyll 13. The vocative of an -ας noun ends in short -α" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οὔτ᾽", lemma:"οὔτε", pos:"conjunction (negative)", parse:"elided οὔτε",
            gloss:"neither, nor", note:"οὔτε … οὔτε picking up οὐδέν and specifying it" },
          { w:"ἔγχριστον", lemma:"ἔγχριστος, -ον", pos:"adjective (verbal, substantival)", parse:"nom. sg. neut.",
            gloss:"to be smeared on, for rubbing in; (subst.) ointment, salve", note:"a -τος verbal adjective from ἐγχρίω, expressing possibility: 'a smear-on kind'. Dover compares Euripides, Hippolytus 516, 'is the remedy one to be smeared on or drunk?' — the two are the standard alternatives, and Theocritus is quoting the medical commonplace to dismiss it" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐμὶν", lemma:"ἐγώ (Doric ἐμίν = ἐμοί)", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"to me", note:"Doric ἐμίν = ἐμοί. With δοκεῖ, parenthetically: 'it seems to me'" },
          { w:"δοκεῖ", lemma:"δοκέω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"seem, seem good", note:"impersonal, in a parenthesis dropped into the middle of the οὔτε … οὔτε pair — the conversational manner of a verse letter" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οὔτ᾽", lemma:"οὔτε", pos:"conjunction (negative)", parse:"elided οὔτε",
            gloss:"nor", note:"the second limb" },
          { w:"ἐπίπαστον", lemma:"ἐπίπαστος, -ον", pos:"adjective (verbal, substantival)", parse:"nom. sg. neut.",
            gloss:"to be sprinkled on; (subst.) powder, dusting-powder", note:"a second -τος verbal adjective, from ἐπιπάσσω 'sprinkle over'. Note how the pair ἔγχριστον/ἐπίπαστον stands in apposition to φάρμακον, both nominative neuter" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 3 ---- */
      {
        lines: "3",
        translation: "than the Pierian Muses. And this is a light and sweet thing",
        greek: [
          { w:"ἢ", lemma:"ἤ", pos:"conjunction", parse:"—",
            gloss:"than", note:"the ἤ of comparison, answering ἄλλο in line 1: 'no other remedy … THAN the Muses'. ἄλλος regularly takes ἤ, and the two can stand two lines apart" },
          { w:"ταὶ", lemma:"ὁ, ἡ, τό (Doric ταί = αἱ)", pos:"article", parse:"nom. pl. fem.",
            gloss:"the", note:"Doric ταί for αἱ (as τοί for οἱ). Nominative because it answers the nominative φάρμακον in the comparison" },
          { w:"Πιερίδες", lemma:"Πιερίς, -ίδος, ἡ", pos:"proper noun", parse:"nom. pl. fem.",
            gloss:"Pierian maid, Muse", note:"the Muses, named from Pieria below Olympus. The thesis in full: the only cure for love is poetry" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"κοῦφον", lemma:"κοῦφος, -η, -ον", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"light, gentle; bringing relief", note:"predicate with γίνεται. Dover weighs the two senses and prefers 'gentle': since medicines are so often unpleasant or painful, the point is that THIS remedy is not — Pindar uses the same idea of Chiron treating some patients with gentle spells" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, but", note:"connective, moving from what the remedy is to what it is like" },
          { w:"τι", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. neut. (enclitic)",
            gloss:"something, somewhat", note:"softening the adjectives — 'something light and sweet'. The same light touch as the poem's opening ἁδύ τι in Idyll 1" },
          { w:"τοῦτο", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative pronoun", parse:"nom. sg. neut.",
            gloss:"this", note:"subject of γίνεται, referring back to the remedy of song" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second predicate" },
          { w:"ἁδύ", lemma:"ἡδύς, -εῖα, -ύ (Doric ἁδύς)", pos:"adjective", parse:"nom. sg. neut. (Doric ἁδύ = Attic ἡδύ)",
            gloss:"sweet, pleasant", note:"second predicate with γίνεται. Doric ᾱ for η — the very word Idyll 1 opens with, and the signature of the dialect" }
        ]
      },

      /* ---- 4 ---- */
      {
        lines: "4",
        translation: "among men, but it is not easy to find.",
        greek: [
          { w:"γίνετ᾽", lemma:"γίγνομαι (Ionic/Hellenistic γίνομαι)", pos:"verb", parse:"present middle indicative, 3rd singular (elided γίνεται)",
            gloss:"become, come to be, prove to be", note:"the verb of the sentence begun in line 3, arriving at the head of this one. γίνομαι without the -γ- is the ordinary Hellenistic spelling" },
          { w:"ἐπ᾽", lemma:"ἐπί", pos:"preposition", parse:"+ dative (elided ἐπί)",
            gloss:"among, in the case of", note:"ἐπ᾽ ἀνθρώποις 'among men' — a Pindaric-sounding phrase; Dover compares Bacchylides" },
          { w:"ἀνθρώποις", lemma:"ἄνθρωπος, -ου, ὁ", pos:"noun", parse:"dat. pl. masc.",
            gloss:"man, human being", note:"governed by ἐπ᾽" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"εὑρεῖν", lemma:"εὑρίσκω (aor. ηὗρον/εὗρον)", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"find, discover", note:"EPEXEGETIC (explanatory) INFINITIVE with ῥᾴδιον: an adjective like ῥᾴδιος, χαλεπός, δεινός, ἄξιος regularly takes an infinitive telling you in what respect it is true — 'easy TO FIND'. Dover: line 17 (ἀλλὰ τὸ φάρμακον εὗρε) picks this up exactly" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"but", note:"the catch, answering the κοῦφον δέ of the line before" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negating ῥᾴδιον" },
          { w:"ῥᾴδιόν", lemma:"ῥᾴδιος, -α, -ον", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"easy", note:"predicate with ἐστι, impersonal: 'it is not easy'. The second accent is thrown back on it by the following enclitic ἐστι" },
          { w:"ἐστι", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 3rd singular (enclitic)",
            gloss:"is", note:"impersonal 'it is'. Dover's paraphrase of 3–4: although this is an agreeable remedy — unlike so many medicines, regimes and operations — it is hard to come by, like a rare medicinal plant" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 5–6 ---- */
      {
        lines: "5–6",
        translation: "And I think you know it well, being a doctor and, besides, especially beloved of the nine Muses.",
        greek: [
          { w:"γινώσκειν", lemma:"γιγνώσκω (Ionic/Hellenistic γινώσκω)", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"know, recognize, come to know", note:"infinitive of indirect statement after οἶμαι, with τυ as its subject accusative: 'I think that you know'. It is thrown to the head of the sentence, before its governing verb" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"οἶμαί", lemma:"οἴομαι (contr. οἶμαι)", pos:"verb", parse:"present middle indicative, 1st singular",
            gloss:"think, suppose", note:"a verb of thinking, hence the accusative-and-infinitive around it. The second accent comes from the following enclitic τυ" },
          { w:"τυ", lemma:"σύ (Doric enclitic τυ = σε)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"you", note:"SUBJECT ACCUSATIVE of γινώσκειν, not an object of οἶμαι. Doric τυ = σε, as throughout Idyll 1" },
          { w:"καλῶς", lemma:"καλός, -ή, -όν (adv. καλῶς)", pos:"adverb", parse:"—",
            gloss:"well, thoroughly", note:"with γινώσκειν. Note the regular -ως adverb here, beside the neuter-accusative adverbs (καλόν) that Idyll 1 prefers" },
          { w:"ἰατρὸν", lemma:"ἰατρός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"doctor, physician", note:"predicate accusative with ἐόντα, agreeing with τυ. Nikias really was a doctor, which is what makes the whole φάρμακον conceit a compliment" },
          { w:"ἐόντα", lemma:"εἰμί (epic/Doric ἐών, ἐόντος)", pos:"verb (participle)", parse:"present active participle, acc. sg. masc.",
            gloss:"being", note:"CAUSAL circumstantial participle agreeing with τυ — 'because you are a doctor'. Uncontracted ἐών for ὤν is epic/Ionic" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second participle" },
          { w:"ταῖς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"dat. pl. fem.",
            gloss:"the", note:"with Μοίσαις at the line-end" },
          { w:"ἐννέα", lemma:"ἐννέα", pos:"numeral", parse:"indeclinable",
            gloss:"nine", note:"with Μοίσαις. Dover: this does not mean Nikias excelled in all nine arts — the idea that nine was the number of the Muses is as old as Hesiod, but the strict apportionment of separate arts among them is later than Theocritus" },
          { w:"δὴ", lemma:"δή", pos:"particle", parse:"—",
            gloss:"indeed, in fact", note:"emphasizing the phrase, 'the Nine themselves'" },
          { w:"πεφιλημένον", lemma:"φιλέω (perf. mid./pass. πεφίλημαι)", pos:"verb (participle)", parse:"perfect middle/passive participle, acc. sg. masc.",
            gloss:"love; (perf. pass.) be beloved, be dear", note:"second participle with τυ. The PERFECT gives a settled state — 'a man who stands beloved'. Its dative Μοίσαις is the agent, which perfect passives regularly take in a dative rather than ὑπό + gen." },
          { w:"ἔξοχα", lemma:"ἔξοχος, -ον (adv. ἔξοχα)", pos:"adverb", parse:"acc. pl. neut. as adverb",
            gloss:"exceedingly, above all, pre-eminently", note:"neuter plural adjective used adverbially with πεφιλημένον — the same formation as ἁδεῖα at Idyll 1.95" },
          { w:"Μοίσαις", lemma:"Μοῦσα, -ης, ἡ (Doric Μοῖσα)", pos:"noun", parse:"dat. pl. fem.",
            gloss:"Muse", note:"dative of agent with the perfect passive participle. Doric Μοῖσα = Μοῦσα. The compliment closes the ring: the remedy is the Muses, and Nikias is their favourite" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 7–8 ---- */
      {
        lines: "7–8",
        translation: "At any rate it was thus that the Cyclops in our parts got through most easily — Polyphemus of old — when he was in love with Galateia,",
        greek: [
          { w:"οὕτω", lemma:"οὕτω(ς)", pos:"adverb", parse:"—",
            gloss:"thus, in this way", note:"forward-pointing: 'thus', i.e. by singing, as the story will show. Dover: the general opinion of 1–6 is now supported by the particular case of Polyphemus" },
          { w:"γοῦν", lemma:"γοῦν", pos:"particle", parse:"—",
            gloss:"at any rate, at all events", note:"γε + οὖν: introducing a piece of evidence that is at least true, whatever else may be — the standard particle for 'here is a case in point'" },
          { w:"ῥάιστα", lemma:"ῥᾴδιος, -α, -ον (superl. ῥᾷστος)", pos:"adjective (adverbial superlative)", parse:"acc. pl. neut. as adverb",
            gloss:"most easily, with least trouble", note:"neuter plural superlative used adverbially with διᾶγε. It answers the οὐ ῥᾴδιον of line 4: the remedy is hard to find, but once found it makes life easiest" },
          { w:"διᾶγ᾽", lemma:"διάγω", pos:"verb", parse:"imperfect active indicative, 3rd singular (Doric διᾶγε = Attic διῆγε; elided)",
            gloss:"pass one's time, get through life, live", note:"intransitive διάγω (with βίον understood). Doric ᾱ for η in the augment. The imperfect covers the whole stretch of his lovesickness" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the", note:"with Κύκλωψ" },
          { w:"Κύκλωψ", lemma:"Κύκλωψ, -ωπος, ὁ", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Cyclops", note:"subject of διᾶγε" },
          { w:"ὁ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"nom. sg. masc.",
            gloss:"the (one)", note:"a second article introducing an attributive prepositional phrase, ὁ παρ᾽ ἁμῖν — 'the one in our parts'" },
          { w:"παρ᾽", lemma:"παρά", pos:"preposition", parse:"+ dative (elided παρά)",
            gloss:"beside, among, at the home of", note:"παρά + dat. of the people among whom — 'our Cyclops', the local Sicilian one. Theocritus, a Syracusan, claims Polyphemus as a countryman" },
          { w:"ἁμῖν", lemma:"ἐγώ (Doric ἁμίν = ἡμῖν)", pos:"personal pronoun", parse:"dat. pl.",
            gloss:"us", note:"Doric ἁμίν = ἡμῖν, with ᾱ for η and the rough breathing. Compare the Aeolic ἄμμι at Idyll 1.102 — two different dialect forms of the same word in one quiz" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὡρχαῖος", lemma:"ὁ ἀρχαῖος (crasis ὡρχαῖος)", pos:"article + adjective", parse:"nom. sg. masc., crasis of ὁ ἀρχαῖος",
            gloss:"the ancient, the old-time, the famous old", note:"crasis of ὁ + ἀρχαῖος — the same fusion as ὡξ (Idyll 1.65) and ᾡπόλος (1.80, 87). 'That old Polyphemus' — the figure everyone knows from the Odyssey" },
          { w:"Πολύφαμος", lemma:"Πολύφημος, -ου, ὁ (Doric Πολύφαμος)", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Polyphemus", note:"in apposition to ὁ Κύκλωψ. Doric ᾱ for η, so the name looks unfamiliar at first — expect it in any Doric text" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὅκ᾽", lemma:"ὅτε (Doric ὅκα)", pos:"conjunction", parse:"elided ὅκα",
            gloss:"when", note:"Doric ὅκα = ὅτε, with a plain indicative for a definite past occasion — exactly as at Idyll 1.66, and to be distinguished from ὅκκα (= ὅταν) + subjunctive at 1.87" },
          { w:"ἤρατο", lemma:"ἔραμαι (aor. ἠράσθην/ἠράμην)", pos:"verb", parse:"aorist middle indicative, 3rd singular",
            gloss:"love, fall in love with, be in love with (+ gen.)", note:"governs the GENITIVE τᾶς Γαλατείας — the same rule as τίνος … ἔρασαι at Idyll 1.78. Ingressive aorist: 'fell in love'" },
          { w:"τᾶς", lemma:"ὁ, ἡ, τό (Doric τᾶς = τῆς)", pos:"article", parse:"gen. sg. fem.",
            gloss:"the", note:"with Γαλατείας. Doric ᾱ for η" },
          { w:"Γαλατείας", lemma:"Γαλάτεια, -ας, ἡ", pos:"proper noun", parse:"gen. sg. fem.",
            gloss:"Galateia", note:"genitive governed by ἤρατο. A sea-nymph, one of the Nereids — hence the Cyclops singing at the shore in 13–18" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 9 ---- */
      {
        lines: "9",
        translation: "with the beard just coming about his mouth and his temples.",
        greek: [
          { w:"ἄρτι", lemma:"ἄρτι", pos:"adverb", parse:"—",
            gloss:"just now, just lately", note:"with the participle: the beard has only just started. He is an adolescent, which is half the joke and half the pathos" },
          { w:"γενειάσδων", lemma:"γενειάω (Doric γενειάσδω)", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"grow a beard, get one's first beard", note:"circumstantial participle agreeing with the subject of ἤρατο. Doric -σδ- for -ζ- (γενειάζω), the same swap as ποτίσδων and ὄσδει in Idyll 1" },
          { w:"περὶ", lemma:"περί", pos:"preposition", parse:"+ accusative",
            gloss:"around, about", note:"governing both τὸ στόμα and τὼς κροτάφως — one preposition, two objects joined by τε" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with στόμα" },
          { w:"στόμα", lemma:"στόμα, -ατος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"mouth", note:"first object of περί" },
          { w:"τὼς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. masc. (Doric τώς = τούς)",
            gloss:"the", note:"the Doric accusative plural in -ώς again — and here article and noun both show it, so the pair is unmistakable" },
          { w:"κροτάφως", lemma:"κρόταφος, -ου, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ως = Attic -ους)",
            gloss:"temple (of the head), side of the forehead", note:"second object of περί" },
          { w:"τε", lemma:"τε", pos:"particle (enclitic)", parse:"—",
            gloss:"and", note:"postpositive, joining the two objects of περί; it stands after the noun-phrase it links, not before it" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 10–11 ---- */
      {
        lines: "10–11",
        translation: "And he loved not with apples nor with a rose nor with love-locks, but with sheer madness, and he counted everything else as by-work.",
        greek: [
          { w:"ἤρατο", lemma:"ἔραμαι (aor. ἠράσθην/ἠράμην)", pos:"verb", parse:"aorist middle indicative, 3rd singular",
            gloss:"love, be in love (+ gen.)", note:"the verb repeated from line 8 at the head of the line — anaphora. Here without an object, so absolute: 'he did his loving …'" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and, but", note:"connective" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negating the three datives that follow, not the verb" },
          { w:"μάλοις", lemma:"μῆλον, -ου, τό (Doric μᾶλον)", pos:"noun", parse:"dat. pl. neut.",
            gloss:"apple", note:"DATIVE OF MEANS: 'by means of apples'. Throwing or giving an apple is the standard courtship gesture of Greek love poetry — the point is that Polyphemus skipped all the conventions" },
          { w:"οὐδὲ", lemma:"οὐδέ", pos:"conjunction (negative)", parse:"—",
            gloss:"nor", note:"linking the second item" },
          { w:"ῥόδῳ", lemma:"ῥόδον, -ου, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"rose", note:"second dative of means — the second conventional love-token" },
          { w:"οὐδὲ", lemma:"οὐδέ", pos:"conjunction (negative)", parse:"—",
            gloss:"nor", note:"linking the third" },
          { w:"κικίννοις", lemma:"κίκιννος, -ου, ὁ", pos:"noun", parse:"dat. pl. masc.",
            gloss:"curl, ringlet, love-lock", note:"third dative of means. Dover: this passage shows a curl of hair could serve as a love-token — and since hair could be used in magic, lovers thereby put themselves in each other's power, so a prudent lover might present someone else's" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἀλλ᾽", lemma:"ἀλλά", pos:"conjunction", parse:"elided ἀλλά",
            gloss:"but", note:"the strong adversative after the run of negatives — this is what he DID love with" },
          { w:"ὀρθαῖς", lemma:"ὀρθός, -ή, -όν", pos:"adjective", parse:"dat. pl. fem.",
            gloss:"straight, upright; real, outright, downright", note:"with μανίαις, and the same dative of means. Dover notes the sense 'real, outright' is a fourth-century development from the earlier ὀρθῶς 'truly, correctly'" },
          { w:"μανίαις", lemma:"μανία, -ας, ἡ", pos:"noun", parse:"dat. pl. fem.",
            gloss:"madness, frenzy", note:"the fourth and decisive dative of means, capping the list: not apples, roses or curls, but outright madness" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἁγεῖτο", lemma:"ἡγέομαι (Doric ἁγέομαι)", pos:"verb", parse:"imperfect middle indicative, 3rd singular (Doric ἁγεῖτο = Attic ἡγεῖτο)",
            gloss:"lead; consider, count, reckon", note:"ἡγέομαι in the sense 'consider X (to be) Y' takes a double accusative — here πάντα as object and πάρεργα as predicate. Doric ᾱ for η, with the rough breathing kept" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"πάντα", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective (substantival)", parse:"acc. pl. neut.",
            gloss:"all things, everything", note:"object of ἁγεῖτο. Dover: supply 'else' — everything OTHER than his love" },
          { w:"πάρεργα", lemma:"πάρεργον, -ου, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"by-work, side-issue, secondary matter", note:"PREDICATE accusative with ἁγεῖτο — 'he counted everything else a sideline'. From παρά + ἔργον, 'beside the work'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 12–13 ---- */
      {
        lines: "12–13",
        translation: "Often the sheep came home to the fold by themselves from the green pasture;",
        greek: [
          { w:"πολλάκι", lemma:"πολλάκις (poetic πολλάκι)", pos:"adverb", parse:"—",
            gloss:"often, many times", note:"the ν-less poetic form before a consonant, as at Idyll 1.144" },
          { w:"ταὶ", lemma:"ὁ, ἡ, τό (Doric ταί = αἱ)", pos:"article", parse:"nom. pl. fem.",
            gloss:"the", note:"Doric ταί = αἱ, with ὄιες" },
          { w:"ὄιες", lemma:"ὄϊς, ὄϊος, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"sheep, ewe", note:"subject of ἀπῆνθον. Two syllables, ὄ-ιες, with the ι sounded" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"to, towards", note:"Doric ποτί = πρός, of motion towards" },
          { w:"τωὔλιον", lemma:"τὸ αὔλιον (crasis τωὔλιον)", pos:"article + noun", parse:"acc. sg. neut., crasis of τὸ αὔλιον",
            gloss:"the fold, the steading, the farmyard", note:"crasis of τό + αὔλιον, marked by the coronis over the υ. Add it to the collection: ὡξ, ᾡπόλος, χὠ, κἠν, ὡρχαῖος, τωὔλιον" },
          { w:"αὐταὶ", lemma:"αὐτός, -ή, -ό", pos:"intensive pronoun", parse:"nom. pl. fem.",
            gloss:"themselves, of their own accord", note:"intensive with ταὶ ὄιες — 'BY THEMSELVES', with no shepherd. That is the whole point: he has abandoned his flock. Dover compares the lovesick Boukaios neglecting his crops in Idyll 10" },
          { w:"ἀπῆνθον", lemma:"ἀπέρχομαι (Doric aor. ἀπῆνθον = ἀπῆλθον)", pos:"verb", parse:"aorist active indicative, 3rd plural",
            gloss:"go away, go back, depart", note:"Doric ν for λ in the aorist of ἔρχομαι — the same ἦνθον/ἦλθον swap as all through Idyll 1, now with ἀπο-" },
          { w:"χλωρᾶς", lemma:"χλωρός, -ά, -όν", pos:"adjective", parse:"gen. sg. fem.",
            gloss:"green, fresh, verdant", note:"with βοτάνας, its preposition standing between them" },
          { w:"ἐκ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"from, out of", note:"placed between adjective and noun (χλωρᾶς ἐκ βοτάνας), a verse liberty — look for the noun that agrees, not the nearest one" },
          { w:"βοτάνας", lemma:"βοτάνη, -ης, ἡ (Doric βοτάνα)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"pasture, fodder, grazing", note:"governed by ἐκ. Doric ᾱ for η" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 13–14 ---- */
      {
        lines: "13–14",
        translation: "but he, singing of Galateia, lay wasting away by himself on the seaweed-strewn shore",
        greek: [
          { w:"ὁ", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"article as pronoun", parse:"nom. sg. masc.",
            gloss:"he", note:"the article as a pronoun, contrasted with the sheep: ὁ δέ, 'but HE'" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"but", note:"the contrast: the sheep went home, he did not" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with Γαλάτειαν" },
          { w:"Γαλάτειαν", lemma:"Γαλάτεια, -ας, ἡ", pos:"proper noun", parse:"acc. sg. fem.",
            gloss:"Galateia", note:"ACCUSATIVE here, object of ἀείδων — ἀείδω takes an accusative of what one sings about. Contrast the genitive after ἤρατο in line 8: the case follows the verb, not the sense" },
          { w:"ἀείδων", lemma:"ἀείδω (= ᾄδω)", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"sing (of)", note:"circumstantial participle, present and so contemporaneous with κατετάκετο: he was wasting away AS he sang. This participle is the hinge of the poem — the singing is both the symptom and, in 17, the cure" },
          { w:"αὐτὸς", lemma:"αὐτός, -ή, -ό", pos:"intensive pronoun", parse:"nom. sg. masc.",
            gloss:"himself, by himself, alone", note:"Dover allows two readings: 'by himself', alone; or an antithesis between him and his flocks — the sheep went one way, he stayed the other. The αὐταί of line 12 makes the antithesis attractive" },
          { w:"ἐπ᾽", lemma:"ἐπί", pos:"preposition", parse:"+ genitive (elided ἐπί)",
            gloss:"on, upon", note:"of place where, with ἀϊόνος" },
          { w:"ἀϊόνος", lemma:"ἠϊών, -όνος, ἡ (Doric ἀϊών)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"shore, beach, sea-bank", note:"governed by ἐπ᾽. Doric ᾱ for η. Its adjective φυκιοέσσας waits until the end of the line" },
          { w:"κατετάκετο", lemma:"κατατήκω (Doric κατατάκομαι)", pos:"verb", parse:"imperfect middle/passive indicative, 3rd singular",
            gloss:"melt away, waste away, pine away utterly", note:"the τάκομαι of Idyll 1 (66, 82, 88, 91) with κατα- added for intensity — 'melted right away'. Doric τάκ- for τήκ-, and the imperfect of a drawn-out process" },
          { w:"φυκιοέσσας", lemma:"φυκιόεις, -εσσα, -εν", pos:"adjective", parse:"gen. sg. fem.",
            gloss:"full of seaweed, seaweed-strewn", note:"agreeing with ἀϊόνος across the verb — the adjectives in -όεις/-εσσα/-εν are an epic formation meaning 'full of, abounding in' (cf. ὑλήεις 'wooded', ἠχήεις 'echoing')" }
        ]
      },

      /* ---- 15–16 ---- */
      {
        lines: "15–16",
        translation: "from dawn, with a most hateful wound beneath his heart, which the shaft of mighty Cypris had fixed in his liver.",
        greek: [
          { w:"ἐξ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"from, ever since", note:"temporal ἐκ: 'starting from dawn', i.e. all day long" },
          { w:"ἀοῦς", lemma:"ἠώς, -οῦς, ἡ (Doric ἀώς)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"dawn, daybreak", note:"governed by ἐξ. Doric ᾱ for η — ἀώς = ἠώς = Attic ἕως" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἔχθιστον", lemma:"ἐχθρός, -ά, -όν (superl. ἔχθιστος)", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"most hateful, most hated, bitterest", note:"attributive with ἕλκος. An irregular superlative built on the stem ἐχθ- rather than on ἐχθρός" },
          { w:"ἔχων", lemma:"ἔχω", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"have, hold", note:"a third circumstantial participle with the subject of κατετάκετο, giving the cause of the wasting" },
          { w:"ὑποκάρδιον", lemma:"ὑποκάρδιος, -ον", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"under the heart, beneath the breast", note:"second attributive with ἕλκος. Dover: there is often no great anatomical precision in descriptions of love-sickness — the wound is 'under the heart' here and in the 'liver' one line later" },
          { w:"ἕλκος", lemma:"ἕλκος, -εος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"wound, sore, ulcer", note:"object of ἔχων, and the ANTECEDENT of the relative τό in the next line. Note the medical vocabulary answering the φάρμακον of line 1" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Κύπριδος", lemma:"Κύπρις, -ιδος, ἡ", pos:"proper noun", parse:"gen. sg. fem.",
            gloss:"Cypris, Aphrodite", note:"governed by ἐκ — the source of the wound. Dover: strictly it is Eros, not Aphrodite, who shoots the arrow, but he is her minister, so the wound can be said to come 'from' her" },
          { w:"ἐκ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"from, at the hands of", note:"ANASTROPHE — the preposition following its noun (Κύπριδος ἐκ), as ὑπ᾽ did at Idyll 1.98. And this is the same authority-marking ἐκ as ἐκ Μοιρᾶν at Idyll 1.140: 'by the agency of'" },
          { w:"μεγάλας", lemma:"μέγας, μεγάλη, μέγα", pos:"adjective", parse:"gen. sg. fem. (Doric -ας = Attic -ης)",
            gloss:"great, mighty", note:"agreeing with Κύπριδος across the intervening preposition" },
          { w:"τό", lemma:"ὅς, ἥ, ὅ (article as relative)", pos:"relative pronoun", parse:"acc. sg. neut.",
            gloss:"which", note:"Dover states it flatly: τό is the OBJECT of πᾶξε and its antecedent is ἕλκος. So the wound is what was driven in, and βέλεμνον is predicative — 'which she fixed in his liver AS a shaft'. The article-as-relative is standard in this poetry" },
          { w:"οἱ", lemma:"οὗ, οἷ, ἕ (epic 3rd person pronoun)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"for him, his", note:"epic enclitic dative = αὐτῷ; possessive with ἥπατι, 'in HIS liver'. The same word as at Idyll 1.74 — not the article" },
          { w:"ἥπατι", lemma:"ἧπαρ, -ατος, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"liver", note:"dative of place where, with πᾶξε. The liver is a standard Greek seat of the passions — no contradiction with ὑποκάρδιον, since such descriptions are not anatomical" },
          { w:"πᾶξε", lemma:"πήγνυμι (aor. ἔπηξα, Doric πᾶξε)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"fix, drive in, fasten", note:"Doric ᾱ for η, and unaugmented (πᾶξε for ἔπαξε) — an epic licence. Subject is Κύπρις, drawn out of the genitive phrase" },
          { w:"βέλεμνον", lemma:"βέλεμνον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"missile, dart, shaft, arrow", note:"PREDICATIVE accusative with τό: she fixed the wound in him 'as a shaft'. If you read it as the object instead, τό is left with nothing to do — which is exactly the trap here" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 17–18 ---- */
      {
        lines: "17–18",
        translation: "But he found the remedy, and sitting on a high rock, looking out to sea, he would sing songs like these:",
        greek: [
          { w:"ἀλλὰ", lemma:"ἀλλά", pos:"conjunction", parse:"—",
            gloss:"but, yet", note:"the turn of the whole prologue: after eight lines of hopeless suffering, the cure" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with φάρμακον — THE remedy, the one announced in line 1" },
          { w:"φάρμακον", lemma:"φάρμακον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"drug, remedy, cure", note:"object of εὗρε. The word returns from line 1 to close the ring" },
          { w:"εὗρε", lemma:"εὑρίσκω (aor. ηὗρον/εὗρον)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"find, discover", note:"Dover: line 17 clearly picks up εὑρεῖν δ᾽ οὐ ῥᾴδιόν ἐστι in line 4. The remedy is hard to find — but by persisting in song Polyphemus eventually found what he could have found no other way" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καθεζόμενος", lemma:"καθέζομαι", pos:"verb (participle)", parse:"present middle participle, nom. sg. masc.",
            gloss:"sit down, be seated", note:"circumstantial participle. A deponent middle — middle in form, active in meaning" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ genitive",
            gloss:"on, upon", note:"of place where, with πέτρας" },
          { w:"πέτρας", lemma:"πέτρα, -ας, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"rock, crag", note:"governed by ἐπί; its adjective ὑψηλᾶς waits for the next line" },
          { w:"ὑψηλᾶς", lemma:"ὑψηλός, -ή, -όν", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"high, lofty", note:"attributive with πέτρας, thrown over the line-end. Doric ᾱ for η" },
          { w:"ἐς", lemma:"εἰς (Doric ἐς)", pos:"preposition", parse:"+ accusative",
            gloss:"to, towards, out over", note:"of the direction of the gaze" },
          { w:"πόντον", lemma:"πόντος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"sea, open sea", note:"governed by ἐς — he looks out to where Galateia is" },
          { w:"ὁρῶν", lemma:"ὁράω", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"see, look", note:"a second circumstantial participle with ἄειδε: sitting and looking, he sang. Contracted ὁρῶν beside the uncontracted epic ἐσοράω of Idyll 1.87" },
          { w:"ἄειδε", lemma:"ἀείδω (= ᾄδω)", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"sing (of)", note:"IMPERFECT, and that is the point: not 'he sang' once but 'he used to sing, he would sing' — the repeated singing is the cure, and it introduces the song that fills the rest of the poem. Unaugmented, as often in this verse" },
          { w:"τοιαῦτα", lemma:"τοιοῦτος, τοιαύτη, τοιοῦτο", pos:"demonstrative pronoun", parse:"acc. pl. neut.",
            gloss:"such things, things like these", note:"internal object of ἄειδε, pointing forward to the quoted song: 'songs of this kind'" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      }

    ]
  },

  {
    id: "theoc11-19-81",
    title: "Idyll 11.19–81",
    citation: "Theocritus, Idyll 11.19–81 — the song of Polyphemus to Galateia, and the poet's close (Doric)",
    segments: [

      /* ---- 19 ---- */
      {
        lines: "19",
        translation: "O white Galateia, why do you throw off the one who loves you,",
        greek: [
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"opening the song proper — the τοιαῦτα promised at the end of 18" },
          { w:"λευκὰ", lemma:"λευκός, -ή, -όν", pos:"adjective", parse:"voc. sg. fem. (Doric -ά = Attic -ή)",
            gloss:"white, bright, fair-skinned", note:"with Γαλάτεια, and the first of the poem's obsessive whites: πακτᾶς 20, λευκᾶς χιόνος 48, κρίνα λευκά 56. Her name itself is built on γάλα 'milk'" },
          { w:"Γαλάτεια", lemma:"Γαλάτεια, -ας, ἡ", pos:"proper noun", parse:"voc. sg. fem.",
            gloss:"Galateia", note:"the sea-nymph addressed throughout the song, though she never appears" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τί", lemma:"τίς, τί", pos:"interrogative pronoun (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"why?", note:"adverbial accusative, as at Idyll 1.82" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the (one who)", note:"article + participle = a relative clause, 'the one who loves you'" },
          { w:"φιλέοντ᾽", lemma:"φιλέω", pos:"verb (participle)", parse:"present active participle, acc. sg. masc. (uncontracted; elided φιλέοντα)",
            gloss:"love, be fond of", note:"attributive with τόν. Dover: the point is not quite 'me, who love you' but 'one who loves you' — the article is halfway to the generalizing sense it certainly has at 75. Uncontracted -έο- for -οῦ- is epic/Doric" },
          { w:"ἀποβάλλῃ", lemma:"ἀποβάλλω", pos:"verb", parse:"present middle/passive indicative, 2nd singular",
            gloss:"throw away, throw off, reject", note:"middle 'throw off from yourself'. The 2nd sg. -ῃ is the contracted ending; four more 2nd singulars follow in 22–24, hammering the accusation" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 20–21 ---- */
      {
        lines: "20–21",
        translation: "whiter than curd to look at, softer than a lamb, friskier than a calf, sleeker than an unripe grape?",
        greek: [
          { w:"λευκοτέρα", lemma:"λευκός, -ή, -όν", pos:"adjective", parse:"voc. sg. fem. (comparative)",
            gloss:"whiter", note:"first of four comparatives in two lines, each with a genitive of comparison — a set-piece of rustic love-rhetoric. They agree with Γαλάτεια in the vocative" },
          { w:"πακτᾶς", lemma:"πακτά, -ᾶς, ἡ (Doric)", pos:"noun", parse:"gen. sg. fem.",
            gloss:"curdled milk, curd", note:"GENITIVE OF COMPARISON with λευκοτέρα — no ἤ needed. A dairy comparison for a nymph whose name means 'milky'" },
          { w:"ποτιδεῖν", lemma:"προσοράω (Doric ποτιδεῖν = προσιδεῖν)", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"look at, behold", note:"EPEXEGETIC infinitive limiting the adjective — 'whiter to look at', i.e. in appearance. The same construction as εὑρεῖν … ῥᾴδιον at line 4. Doric ποτι- for προσ-" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἁπαλωτέρα", lemma:"ἁπαλός, -ή, -όν (compar. ἁπαλώτερος)", pos:"adjective", parse:"voc. sg. fem. (comparative)",
            gloss:"softer, more tender", note:"second comparative" },
          { w:"ἀρνός", lemma:"ἀρήν, ἀρνός, ὁ/ἡ", pos:"noun", parse:"gen. sg.",
            gloss:"lamb", note:"genitive of comparison again. The noun has no nominative singular in use — learn it from the genitive" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"μόσχω", lemma:"μόσχος, -ου, ὁ", pos:"noun", parse:"gen. sg. masc. (Doric -ω = Attic -ου)",
            gloss:"calf, young bull", note:"genitive of comparison, placed BEFORE its adjective this time — the order alternates to keep the list from marching" },
          { w:"γαυροτέρα", lemma:"γαῦρος, -α, -ον (compar. γαυρότερος)", pos:"adjective", parse:"voc. sg. fem. (comparative)",
            gloss:"friskier, more skittish, prouder", note:"third comparative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"φιαρωτέρα", lemma:"φιαρός, -ά, -όν (compar. φιαρώτερος)", pos:"adjective", parse:"voc. sg. fem. (comparative)",
            gloss:"sleeker, glossier, plumper", note:"fourth comparative. Dover: it refers to smooth, sleek skin free from wrinkles or bagginess" },
          { w:"ὄμφακος", lemma:"ὄμφαξ, -ακος, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"unripe grape", note:"genitive of comparison" },
          { w:"ὠμᾶς", lemma:"ὠμός, -ή, -όν (Doric ὠμά)", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"raw, unripe", note:"with ὄμφακος — an unripe grape is already ὄμφαξ, so the adjective is doing emphasis, not information: the comparison is to something at its firmest" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 22 ---- */
      {
        lines: "22",
        translation: "And you come, just like that, the moment sweet sleep takes hold of me,",
        greek: [
          { w:"φοιτῇς", lemma:"φοιτάω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"go to and fro, visit, come and go", note:"of repeated visiting — she keeps turning up. Doric contraction of -άεις to -ῇς" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"αὖθ᾽", lemma:"αὖθι", pos:"adverb", parse:"elided αὖθι",
            gloss:"at once, on the spot", note:"Dover: αὖθι here = αὐτίκα, 'at once', as at Iliad 5.296 — not 'again' (αὖθις) and not 'here'. The whole complaint is about timing" },
          { w:"οὕτως", lemma:"οὕτω(ς)", pos:"adverb", parse:"—",
            gloss:"just like that, without more ado", note:"Dover: 'without more ado', the colloquial English 'just like that'. The same idiom in Plato" },
          { w:"ὅκκα", lemma:"ὅτε + ἄν (Doric ὅκκα = Attic ὅταν)", pos:"conjunction", parse:"—",
            gloss:"whenever", note:"Doric ὅκα (= ὅτε) fused with κα (= ἄν), so ὅταν — and that is why ἔχῃ is subjunctive. The same form at Idyll 1.87" },
          { w:"γλυκὺς", lemma:"γλυκύς, -εῖα, -ύ", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"sweet", note:"with ὕπνος. The phrase γλυκὺς ὕπνος is repeated verbatim in the next line — the symmetry is the joke" },
          { w:"ὕπνος", lemma:"ὕπνος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"sleep", note:"subject of ἔχῃ" },
          { w:"ἔχῃ", lemma:"ἔχω", pos:"verb", parse:"present active subjunctive, 3rd singular",
            gloss:"have, hold, grip", note:"subjunctive required by the κα inside ὅκκα. Dover notes Galateia comes ashore only when Polyphemus is asleep — which is the whole of his grievance" },
          { w:"με", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"me", note:"object of ἔχῃ" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 23 ---- */
      {
        lines: "23",
        translation: "and you are off and gone the moment sweet sleep releases me,",
        greek: [
          { w:"οἴχῃ", lemma:"οἴχομαι", pos:"verb", parse:"present middle indicative, 2nd singular",
            gloss:"be gone, have departed", note:"οἴχομαι is present in form but perfect in sense — 'I am gone', not 'I am going'. So the line means she is already away before he is properly awake" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"εὐθὺς", lemma:"εὐθύς", pos:"adverb", parse:"—",
            gloss:"straightway, at once", note:"answering αὖθ᾽ οὕτως in the line before — the two lines are built to mirror each other word for word" },
          { w:"ἰοῖσ᾽", lemma:"εἶμι (ibo)", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric ἰοῖσα = Attic ἰοῦσα; elided)",
            gloss:"go", note:"supplementary participle with οἴχῃ, the regular idiom: οἴχομαι + participle = 'I am off and away'. Doric -οισα for -ουσα, as γελάοισα, ἔχοισα in Idyll 1" },
          { w:"ὅκκα", lemma:"ὅτε + ἄν (Doric ὅκκα = Attic ὅταν)", pos:"conjunction", parse:"—",
            gloss:"whenever", note:"the same indefinite temporal clause as in 22, deliberately repeated" },
          { w:"γλυκὺς", lemma:"γλυκύς, -εῖα, -ύ", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"sweet", note:"with ὕπνος" },
          { w:"ὕπνος", lemma:"ὕπνος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"sleep", note:"subject of ἀνῇ" },
          { w:"ἀνῇ", lemma:"ἀνίημι", pos:"verb", parse:"aorist active subjunctive, 3rd singular",
            gloss:"let go, release, slacken", note:"subjunctive after ὅκκα. The athematic aorist subjunctive of ἵημι and its compounds is worth recognizing: ἀν-ῇ from ἀν-ῆκα" },
          { w:"με", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"me", note:"object of ἀνῇ" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 24 ---- */
      {
        lines: "24",
        translation: "and you run off like a ewe that has caught sight of a grey wolf?",
        greek: [
          { w:"φεύγεις", lemma:"φεύγω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"flee, run away, avoid", note:"the third and last of the accusing presents; the whole question begun at 19 with τί closes here" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ὥσπερ", lemma:"ὥσπερ", pos:"conjunction", parse:"—",
            gloss:"just as, like", note:"introducing a compressed simile with no verb of its own — supply φεύγει" },
          { w:"ὄϊς", lemma:"ὄϊς, ὄϊος, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"sheep, ewe", note:"subject of the simile. Two syllables, ὄ-ϊς, with the diaeresis showing the ι is sounded separately" },
          { w:"πολιὸν", lemma:"πολιός, -ά, -όν", pos:"adjective", parse:"acc. sg. masc.",
            gloss:"grey, grizzled, hoary", note:"with λύκον — the standard epithet of a wolf" },
          { w:"λύκον", lemma:"λύκος, -ου, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"wolf", note:"object of ἀθρήσασα. Polyphemus casts himself, without noticing, as the predator" },
          { w:"ἀθρήσασα", lemma:"ἀθρέω", pos:"verb (participle)", parse:"aorist active participle, nom. sg. fem.",
            gloss:"look at, catch sight of, spy", note:"aorist, so PRIOR to the fleeing: she runs once she has caught sight of it. Circumstantial, with causal force" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 25 ---- */
      {
        lines: "25",
        translation: "I fell in love with you, girl, on the day you first",
        greek: [
          { w:"ἠράσθην", lemma:"ἔραμαι (aor. ἠράσθην)", pos:"verb", parse:"aorist passive indicative (middle in sense), 1st singular",
            gloss:"love, fall in love with (+ gen.)", note:"INGRESSIVE aorist — not 'I loved' but 'I fell in love'. Passive in form, middle in meaning, and it governs the genitive τεοῦς, exactly as ἤρατο did at 8 and 10" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"looking ahead to the δ᾽ of 27 and beyond — the narrative of the first meeting" },
          { w:"ἔγωγε", lemma:"ἐγώ + γε (ἔγωγε)", pos:"personal pronoun + particle", parse:"nom. sg.",
            gloss:"I for my part", note:"emphatic — here genuinely so, contrasting his feelings with her indifference" },
          { w:"τεοῦς", lemma:"σύ (Doric gen. τεῦς = σοῦ)", pos:"personal pronoun", parse:"gen. sg.",
            gloss:"of you", note:"Doric genitive of σύ, governed by ἠράσθην. The shorter form τεῦς appears at 52 and 55 — collect the paradigm: nom. τύ, acc. τυ/τίν, gen. τεοῦς/τεῦς, dat. τίν" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"κόρα", lemma:"κόρη, -ης, ἡ (Doric κόρα)", pos:"noun", parse:"voc. sg. fem.",
            gloss:"girl, maiden", note:"Doric ᾱ for η. Note that Idyll 1.82 spells the same word κώρα — Theocritus is not perfectly consistent between poems" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἁνίκα", lemma:"ἡνίκα (Doric ἁνίκα)", pos:"conjunction", parse:"—",
            gloss:"when, at the time when", note:"Doric ἁ- for ἡ-. A definite temporal clause with the indicative ἦνθες" },
          { w:"πρᾶτον", lemma:"πρῶτος, -η, -ον (Doric πρᾶτος; adv. πρᾶτον)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"first, for the first time", note:"neuter adjective as adverb, and Doric ᾱ for ω — the same word as πράτιστος at Idyll 1.77" },
        ]
      },

      /* ---- 26–27 ---- */
      {
        lines: "26–27",
        translation: "came with my mother, wanting to pick hyacinth flowers from the mountain, and I was leading the way.",
        greek: [
          { w:"ἦνθες", lemma:"ἔρχομαι (Doric aor. ἦνθον = ἦλθον)", pos:"verb", parse:"aorist active indicative, 2nd singular",
            gloss:"come, go", note:"Doric ν for λ, so ἦνθες = ἦλθες. The form ran all through Idyll 1 (77, 80, 81, 95) and returns here as ἐξένθοις 63, ἀπενθεῖν 64, ἐνθών 73" },
          { w:"ἐμᾷ", lemma:"ἐμός, -ή, -όν (Doric ἐμά)", pos:"possessive adjective", parse:"dat. sg. fem.",
            gloss:"my", note:"with ματρί. Doric ᾱ for η" },
          { w:"σὺν", lemma:"σύν", pos:"preposition", parse:"+ dative",
            gloss:"with, in company with", note:"standing between the adjective and its noun (ἐμᾷ σὺν ματρί) — resolve the agreement first, then fit the preposition round it" },
          { w:"ματρὶ", lemma:"μήτηρ, μητρός, ἡ (Doric μάτηρ)", pos:"noun", parse:"dat. sg. fem.",
            gloss:"mother", note:"Doric ᾱ for η. Dover points forward to 67ff., where this same mother turns out to be the obstacle — the poem's one glimpse of a plot" },
          { w:"θέλοισ᾽", lemma:"ἐθέλω (Doric part. θέλοισα)", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric -οισα = Attic -ουσα; elided)",
            gloss:"wish, want", note:"agreeing with the subject of ἦνθες, i.e. Galateia — she is the one who wanted the flowers. Doric -οισα again" },
          { w:"ὑακίνθινα", lemma:"ὑακίνθινος, -η, -ον", pos:"adjective", parse:"acc. pl. neut.",
            gloss:"of hyacinth", note:"with φύλλα" },
          { w:"φύλλα", lemma:"φύλλον, -ου, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"leaf; (pl.) foliage, and by extension flowers", note:"object of δρέψασθαι. Dover: it was the FLOWERS Galateia wanted, not the leaves — φύλλα can cover stem, leaves and blossom together, as when the Spartan girls of Idyll 18 go to gather λειμώνια φύλλα for garlands" },
          { w:"ἐξ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"from, out of", note:"with ὄρεος" },
          { w:"ὄρεος", lemma:"ὄρος, -εος, τό", pos:"noun", parse:"gen. sg. neut. (uncontracted -εος = -ους)",
            gloss:"mountain", note:"governed by ἐξ. Uncontracted third-declension genitive, as at Idyll 1.77" },
          { w:"δρέψασθαι", lemma:"δρέπω", pos:"verb (infinitive)", parse:"aorist middle infinitive",
            gloss:"pluck, pick, cull", note:"complementary infinitive with θέλοισα. The MIDDLE is the normal voice for picking flowers for oneself" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐγὼ", lemma:"ἐγώ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"emphatic, marking the change of subject" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"answering μέν back at 25" },
          { w:"ὁδὸν", lemma:"ὁδός, -οῦ, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"way, road, journey", note:"internal accusative with ἁγεμόνευον — 'led the way'. Dover compares Odyssey 6.261, where Nausicaa says the same thing to Odysseus" },
          { w:"ἁγεμόνευον", lemma:"ἡγεμονεύω (Doric ἁγεμονεύω)", pos:"verb", parse:"imperfect active indicative, 1st singular",
            gloss:"lead the way, guide", note:"Doric ἁ- for ἡ-, as ἁγεῖτο at 11. Imperfect of the continuing walk — a small boy showing the girl the path, and the poem's only tender memory" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 28–29 ---- */
      {
        lines: "28–29",
        translation: "and from the moment I set eyes on you I have not been able to stop, not since then and not even now;",
        greek: [
          { w:"παύσασθαι", lemma:"παύω (mid. παύομαι)", pos:"verb (infinitive)", parse:"aorist middle infinitive",
            gloss:"stop, cease, leave off", note:"complementary infinitive with δύναμαι at the head of the next line, and thrown right to the front of its own sentence. Dover supplies the unspoken object: 'I cannot stop ⟨loving you⟩' — the same tactful suppression as at Idyll 1.105" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ἐσιδών", lemma:"ἐσοράω (= εἰσοράω, aor. εἰσεῖδον)", pos:"verb (participle)", parse:"aorist active participle, nom. sg. masc.",
            gloss:"look at, catch sight of", note:"aorist, so prior: 'having once set eyes on you'. Circumstantial with causal-temporal force" },
          { w:"τυ", lemma:"σύ (Doric enclitic τυ = σε)", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"you", note:"object of ἐσιδών. Doric τυ = σε, as throughout Idyll 1" },
          { w:"καὶ", lemma:"καί", pos:"adverb", parse:"—",
            gloss:"even, also", note:"with ὕστερον" },
          { w:"ὕστερον", lemma:"ὕστερος, -α, -ον (adv. ὕστερον)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"afterwards, since then", note:"neuter adjective as adverb again" },
          { w:"οὐδ᾽", lemma:"οὐδέ", pos:"conjunction (negative)", parse:"elided οὐδέ",
            gloss:"nor, and not even", note:"the second negative, piling up with οὐ … πα" },
          { w:"ἔτι", lemma:"ἔτι", pos:"adverb", parse:"—",
            gloss:"still, yet", note:"with πα νῦν" },
          { w:"πα", lemma:"πῃ / πως (Doric πα)", pos:"adverb (enclitic)", parse:"—",
            gloss:"in any way, at all", note:"Doric πα = πῃ/πως, reinforcing the negative — the same piling-up as οὔ τι πα at Idyll 1.63" },
          { w:"νῦν", lemma:"νῦν", pos:"adverb", parse:"—",
            gloss:"now", note:"'not even now', i.e. right up to the moment of speaking" },
          { w:"ἐκ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"from, ever since", note:"temporal ἐκ with τήνω — 'from that time on'" },
          { w:"τήνω", lemma:"τῆνος, -α, -ο (= ἐκεῖνος)", pos:"demonstrative pronoun", parse:"gen. sg. masc./neut. (Doric -ω = Attic -ου)",
            gloss:"that one, that time", note:"Doric τῆνος = ἐκεῖνος, in the Doric genitive -ω. ἐκ τήνω = ἐξ ἐκείνου, 'from then'" },
          { w:"δύναμαι", lemma:"δύναμαι", pos:"verb", parse:"present middle indicative, 1st singular",
            gloss:"be able, can", note:"the main verb, arriving at last and governing παύσασθαι eleven words back. Present tense: the inability is still going on" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 29 ---- */
      {
        lines: "29",
        translation: "but you do not care — no, by Zeus, not at all.",
        greek: [
          { w:"τὶν", lemma:"σύ (Doric τίν = σέ)", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"to you, for you", note:"DATIVE with the impersonal μέλει — 'it is not a care to you'. Dover notes that in this poem τίν usually stands for σέ (accusative, as at 39, 55, 68), so the case has to be got from the verb: μέλει demands a dative" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"but", note:"the turn from his feelings to her indifference" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negating μέλει" },
          { w:"μέλει", lemma:"μέλω (impers. μέλει)", pos:"verb", parse:"present active indicative, 3rd singular (impersonal)",
            gloss:"be a care, be an object of concern", note:"IMPERSONAL: 'it is a concern to X (dat.) about Y (gen.)'. English inverts it — 'you don't care'. The construction is worth having ready; it appeared in the cup-description at Idyll 1.53" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"the second negative, introducing the oath" },
          { w:"μὰ", lemma:"μά", pos:"particle", parse:"+ accusative",
            gloss:"by (in oaths)", note:"the particle of asseveration, taking the accusative of the god sworn by; with οὐ it makes a negative oath" },
          { w:"Δί᾽", lemma:"Ζεύς, Διός, ὁ", pos:"proper noun", parse:"acc. sg. masc. (elided Δία)",
            gloss:"Zeus", note:"governed by μά. The oblique stem Δι- looks nothing like the nominative Ζεύς and must be learnt" },
          { w:"οὐδέν", lemma:"οὐδείς, οὐδεμία, οὐδέν", pos:"pronoun (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"not at all, in no way", note:"adverbial accusative closing the line. Dover: a double negative reinforced by an oath has a flavour of Comedy — compare Aristophanes' ἀλλ᾽ οὐ μὰ Δί᾽ οὐ μάχαιραν, 'but not a knife, oh no!'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 30 ---- */
      {
        lines: "30",
        translation: "I know, graceful girl, why it is you run from me:",
        greek: [
          { w:"γινώσκω", lemma:"γιγνώσκω (Ionic/Hellenistic γινώσκω)", pos:"verb", parse:"present active indicative, 1st singular",
            gloss:"know, recognize, come to know", note:"the Hellenistic spelling without -γ-, as at line 5" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"χαρίεσσα", lemma:"χαρίεις, -εσσα, -εν", pos:"adjective", parse:"voc. sg. fem.",
            gloss:"graceful, charming, lovely", note:"with κόρα. The -εις/-εσσα/-εν type means 'full of' — here 'full of χάρις'; compare φυκιόεσσας at line 14" },
          { w:"κόρα", lemma:"κόρη, -ης, ἡ (Doric κόρα)", pos:"noun", parse:"voc. sg. fem.",
            gloss:"girl, maiden", note:"vocative, softening the accusation that follows" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τίνος", lemma:"τίς, τί", pos:"interrogative pronoun", parse:"gen. sg. neut.",
            gloss:"of what?", note:"with οὕνεκα — 'on account of what', i.e. why. Indirect question after γινώσκω" },
          { w:"οὕνεκα", lemma:"οὕνεκα (= οὗ ἕνεκα)", pos:"conjunction/preposition", parse:"+ genitive",
            gloss:"on account of, because of; because", note:"a fused form of οὗ ἕνεκα. Here it takes τίνος and means 'why'; at the head of the next line the same word means 'because', which is the hinge of the couplet" },
          { w:"φεύγεις", lemma:"φεύγω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"flee, run away from", note:"picking up φεύγεις from 24 and setting up the self-inventory of 31–33" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 31–32 ---- */
      {
        lines: "31–32",
        translation: "because a shaggy eyebrow stretches right across my forehead from one ear to the other, one long one,",
        greek: [
          { w:"οὕνεκά", lemma:"οὕνεκα (= οὗ ἕνεκα)", pos:"conjunction", parse:"—",
            gloss:"because", note:"the same word as in 30, now as a causal conjunction answering its own interrogative use — 'why do you run? because…'. It carries a second accent from the enclitic μοι" },
          { w:"μοι", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"my, for me", note:"POSSESSIVE dative with ὀφρύς — 'the eyebrow belonging to me'. Greek prefers this to a possessive adjective" },
          { w:"λασία", lemma:"λάσιος, -α, -ον", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"shaggy, hairy, thick with hair", note:"with ὀφρύς. It comes back as the comparative λασιώτερος at 50, where he half-admits the problem" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"first item in the catalogue of his own features, answered by δέ at 33" },
          { w:"ὀφρὺς", lemma:"ὀφρύς, -ύος, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"eyebrow, brow", note:"subject of τέταται — a single unbroken brow, one of the standard marks of the grotesque" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ dative",
            gloss:"on, over", note:"of place where, with μετώπῳ" },
          { w:"παντὶ", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"dat. sg. neut.",
            gloss:"all, the whole of", note:"with μετώπῳ — 'over the whole forehead'" },
          { w:"μετώπῳ", lemma:"μέτωπον, -ου, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"forehead, brow", note:"governed by ἐπί" },
          { w:"ἐξ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"from", note:"with ὠτός, marking the starting point of the stretch" },
          { w:"ὠτὸς", lemma:"οὖς, ὠτός, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"ear", note:"governed by ἐξ. Another noun whose oblique stem (ὠτ-) is unlike its nominative (οὖς)" },
          { w:"τέταται", lemma:"τείνω (perf. mid./pass. τέταμαι)", pos:"verb", parse:"perfect middle/passive indicative, 3rd singular",
            gloss:"stretch; (perf. pass.) be stretched, lie extended", note:"a PERFECT OF STATE, so present in force: 'it lies stretched'. Reduplicated τε- with the bare root τα-, the regular perfect of τείνω" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"to, as far as", note:"Doric ποτί = πρός, marking the end point to match the ἐξ of the start" },
          { w:"θώτερον", lemma:"τὸ ἕτερον (crasis θὥτερον/θώτερον)", pos:"article + adjective", parse:"acc. sg. neut., crasis of τὸ ἕτερον",
            gloss:"the other (ear)", note:"CRASIS of τό + ἕτερον, with the τ aspirated to θ by the rough breathing of ἕτερον. Supply οὖς: 'as far as the other ear'" },
          { w:"ὣς", lemma:"ὡς", pos:"adverb", parse:"—",
            gloss:"thus, so, in this way", note:"summing up the description: 'like that, as one long one'" },
          { w:"μία", lemma:"εἷς, μία, ἕν", pos:"numeral", parse:"nom. sg. fem.",
            gloss:"one, a single", note:"in apposition to ὀφρύς — the point of the whole line: one brow, not two" },
          { w:"μακρά", lemma:"μακρός, -ά, -όν", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"long", note:"with μία. Dover: the grotesque one-eyed, one-browed Cyclops is a fixed type; a broad nose too was thought ugly and appears on vases as an attribute of satyrs" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 33 ---- */
      {
        lines: "33",
        translation: "and a single eye sits underneath it, and a broad nose over my lip.",
        greek: [
          { w:"εἷς", lemma:"εἷς, μία, ἕν", pos:"numeral", parse:"nom. sg. masc.",
            gloss:"one, a single", note:"with ὀφθαλμός, and emphatic by position — the defining fact about a Cyclops, stated as if it were a minor blemish" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"answering the μέν of 31" },
          { w:"ὀφθαλμὸς", lemma:"ὀφθαλμός, -οῦ, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"eye", note:"subject of ὕπεστι" },
          { w:"ὕπεστι", lemma:"ὕπειμι (ὑπό + εἰμί)", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"be underneath, lie beneath", note:"Dover: supply τῇ ὀφρύϊ — the eye is underneath the eyebrow just described. The manuscripts also offer ἔπεστι 'is on top', but ὕπεστι is what the anatomy wants" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πλατεῖα", lemma:"πλατύς, -εῖα, -ύ", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"broad, flat, wide", note:"with ῥίς" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"adding the third feature" },
          { w:"ῥὶς", lemma:"ῥίς, ῥινός, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"nose, nostril", note:"with ἐστί understood — the copula is simply left out, as regularly" },
          { w:"ἐπὶ", lemma:"ἐπί", pos:"preposition", parse:"+ dative",
            gloss:"on, over", note:"of position, with χείλει" },
          { w:"χείλει", lemma:"χεῖλος, -εος, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"lip, rim, edge", note:"governed by ἐπί. The same noun that described the rim of the cup at Idyll 1.29 and the pipe's mouth-end at 1.129" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 34–35 ---- */
      {
        lines: "34–35",
        translation: "But, being the man I am, I graze a thousand head of cattle, and I milk and drink the best milk from them.",
        greek: [
          { w:"ἀλλ᾽", lemma:"ἀλλά", pos:"conjunction", parse:"elided ἀλλά",
            gloss:"but, yet", note:"the turn of the argument: ugly, granted — but rich. The whole self-recommendation of 34–41 hangs on this one word" },
          { w:"οὗτος", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"this one, this man here", note:"Dover analyses the phrase as 'being this person here, the sort of person that I am'. οὗτος of oneself is deictic and faintly comic" },
          { w:"τοιοῦτος", lemma:"τοιοῦτος, τοιαύτη, τοιοῦτο", pos:"demonstrative pronoun", parse:"nom. sg. masc.",
            gloss:"of such a kind, such as this", note:"predicate with ἐών: 'being such'. οὗτος τοιοῦτος together = 'I, such as you see me'" },
          { w:"ἐὼν", lemma:"εἰμί (epic/Doric ἐών, ἐόντος)", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"being", note:"CONCESSIVE circumstantial participle — 'though I am like this'. Uncontracted ἐών for ὤν, as at line 5" },
          { w:"βοτὰ", lemma:"βοτόν, -οῦ, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"grazing beast, head of cattle", note:"object of βόσκω. From βόσκω itself — 'a thing that grazes'" },
          { w:"χίλια", lemma:"χίλιοι, -αι, -α", pos:"numeral (adjective)", parse:"acc. pl. neut.",
            gloss:"a thousand", note:"with βοτά. Round-number boasting — the Cyclops of the Odyssey is likewise a large-scale stockman" },
          { w:"βόσκω", lemma:"βόσκω", pos:"verb", parse:"present active indicative, 1st singular",
            gloss:"feed, pasture, graze (transitive)", note:"transitive: the herdsman feeds the beasts. The middle βόσκομαι is what the beasts do" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"κἠκ", lemma:"καί + ἐκ (crasis κἠκ)", pos:"conjunction + preposition", parse:"crasis of καὶ ἐκ (+ gen.)",
            gloss:"and from", note:"crasis, exactly like κἠξ at Idyll 1.136 and κἠν at 1.103 — the ᾱ of καί and the ε of ἐκ fusing to η" },
          { w:"τούτων", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative pronoun", parse:"gen. pl. neut.",
            gloss:"these", note:"governed by the ἐκ inside the crasis, referring back to βοτά" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with κράτιστον" },
          { w:"κράτιστον", lemma:"κρείττων, -ον (superl. κράτιστος)", pos:"adjective", parse:"acc. sg. neut. (superlative)",
            gloss:"best, strongest, finest", note:"attributive with γάλα — 'the finest milk'. An irregular superlative built on the stem κρατ-" },
          { w:"ἀμελγόμενος", lemma:"ἀμέλγω", pos:"verb (participle)", parse:"present middle participle, nom. sg. masc.",
            gloss:"milk", note:"MIDDLE, 'milking for myself'. Circumstantial and contemporaneous with πίνω: he milks and drinks in the same breath" },
          { w:"γάλα", lemma:"γάλα, γάλακτος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"milk", note:"object of πίνω. The word behind Galateia's own name — she is being courted with what she is made of" },
          { w:"πίνω", lemma:"πίνω", pos:"verb", parse:"present active indicative, 1st singular",
            gloss:"drink", note:"main verb. Dover compares the Cyclops milking his ewes and she-goats at Odyssey 9.244ff." },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 36 ---- */
      {
        lines: "36",
        translation: "and cheese never fails me, not in summer nor in autumn,",
        greek: [
          { w:"τυρὸς", lemma:"τυρός, -οῦ, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"cheese", note:"subject of λείπει" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negating λείπει" },
          { w:"λείπει", lemma:"λείπω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"leave, leave behind; fail, run short", note:"TRANSITIVE here, with με as object — 'cheese does not leave me', i.e. never runs out on me. Contrast the intransitive perfect λελοίπει 'had run out' at Idyll 1.139: the same verb, opposite construction" },
          { w:"μ᾽", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg. (elided με)",
            gloss:"me", note:"object of λείπει" },
          { w:"οὔτ᾽", lemma:"οὔτε", pos:"conjunction (negative)", parse:"elided οὔτε",
            gloss:"neither, nor", note:"first of a three-part negative sequence οὔτε … οὔτε … οὐ, running over into 37" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"of time when" },
          { w:"θέρει", lemma:"θέρος, -εος, τό", pos:"noun", parse:"dat. sg. neut.",
            gloss:"summer, harvest-time", note:"governed by ἐν" },
          { w:"οὔτ᾽", lemma:"οὔτε", pos:"conjunction (negative)", parse:"elided οὔτε",
            gloss:"nor", note:"second limb" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"repeated with the second season" },
          { w:"ὀπώρᾳ", lemma:"ὀπώρα, -ας, ἡ", pos:"noun", parse:"dat. sg. fem.",
            gloss:"late summer, fruit-time, autumn", note:"governed by ἐν. Not quite 'autumn': the season of ripe fruit, roughly late July to September" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 37 ---- */
      {
        lines: "37",
        translation: "nor at the very end of winter: my cheese-racks are always overloaded.",
        greek: [
          { w:"οὐ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"nor, not", note:"the third limb of the sequence, and simple οὐ rather than οὔτε. Dover notes the pattern οὔτε/οὔτε/οὐ and compares Euripides' Hippolytus" },
          { w:"χειμῶνος", lemma:"χειμών, -ῶνος, ὁ", pos:"noun", parse:"gen. sg. masc.",
            gloss:"winter, storm", note:"possessive genitive with ἄκρω — 'at the tip of winter'" },
          { w:"ἄκρω", lemma:"ἄκρος, -α, -ον", pos:"adjective (substantival)", parse:"gen. sg. neut. (Doric -ω = Attic -ου)",
            gloss:"topmost, outermost, at the tip; (subst.) the end", note:"Dover insists on the sense: NOT 'in the depth of winter' but '(even) at the END of it'. That is the real boast — there should be plenty of cheese in midwinter, but one expects a shortage by winter's end. He compares Aratus, where ἀκρόθι νυκτός must mean 'just before dawn'" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"ταρσοὶ", lemma:"ταρσός, -οῦ, ὁ", pos:"noun", parse:"nom. pl. masc.",
            gloss:"crate, wicker frame; cheese-rack", note:"subject of an understood 'are'. The frames on which cheeses are set to drain and dry — the Cyclops of Odyssey 9 has them too" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ὑπεραχθέες", lemma:"ὑπεραχθής, -ές", pos:"adjective", parse:"nom. pl. masc. (uncontracted -έες = -εῖς)",
            gloss:"overloaded, weighed down", note:"predicate with the understood copula. Uncontracted -έες for -εῖς is epic. From ὑπέρ + ἄχθος 'burden'" },
          { w:"αἰεί", lemma:"ἀεί (epic αἰεί)", pos:"adverb", parse:"—",
            gloss:"always, ever", note:"epic αἰεί for ἀεί, closing the boast" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 38–39 ---- */
      {
        lines: "38–39",
        translation: "And I know how to pipe as no other Cyclops here can, singing of you, my sweet apple, and of myself together,",
        greek: [
          { w:"συρίσδεν", lemma:"συρίζω (Doric συρίσδω)", pos:"verb (infinitive)", parse:"present active infinitive (Doric -εν = Attic -ειν)",
            gloss:"play the pan-pipe, pipe", note:"TWO Doric features: -σδ- for -ζ-, and the infinitive ending -εν for -ειν (cf. συμπαίσδεν 77). Complementary infinitive with ἐπίσταμαι. The same verb opened Idyll 1 at line 3" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ὡς", lemma:"ὡς", pos:"conjunction", parse:"—",
            gloss:"as", note:"introducing a comparison with the verb understood from ἐπίσταμαι: 'as no one else (knows how)'" },
          { w:"οὔτις", lemma:"οὔτις, οὔτι", pos:"pronoun", parse:"nom. sg. masc.",
            gloss:"no one, nobody", note:"For the reader of the Odyssey this word is loaded — Οὖτις is the name Odysseus will give this same Cyclops. Theocritus lets it sit here without comment" },
          { w:"ἐπίσταμαι", lemma:"ἐπίσταμαι", pos:"verb", parse:"present middle indicative, 1st singular",
            gloss:"know how (to), understand, be skilled in", note:"takes a complementary infinitive — ἐπίσταμαι + inf. is 'know how to', against ἐπίσταμαι + participle 'know that'" },
          { w:"ὧδε", lemma:"ὧδε", pos:"adverb", parse:"—",
            gloss:"here, in these parts", note:"of place, as at Idyll 1.120 — 'no Cyclops around here'" },
          { w:"Κυκλώπων", lemma:"Κύκλωψ, -ωπος, ὁ", pos:"proper noun", parse:"gen. pl. masc.",
            gloss:"Cyclops", note:"PARTITIVE genitive with οὔτις — 'none of the Cyclopes'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τίν", lemma:"σύ (Doric τίν = σέ)", pos:"personal pronoun", parse:"acc. sg.",
            gloss:"you", note:"ACCUSATIVE here, object of ἀείδων — Dover notes that in this poem τίν stands for σέ (cf. 5, 68), so unlike the dative τίν of 29 the case must be read off the governing word" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with γλυκύμαλον" },
          { w:"φίλον", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"dear, beloved", note:"attributive with γλυκύμαλον" },
          { w:"γλυκύμαλον", lemma:"γλυκύμαλον, -ου, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"sweet-apple", note:"in apposition to τίν — 'you, my sweet apple'. Dover cites Sappho, where the γλυκύμαλον reddens on the topmost bough: the Cyclops is quoting love-poetry he could not have read" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἁμᾷ", lemma:"ἅμα (Doric ἁμᾷ)", pos:"adverb", parse:"—",
            gloss:"at the same time, together", note:"Doric ἁμᾷ = ἅμα, taken with the two objects of ἀείδων: he sings of her and himself at once" },
          { w:"κἠμαυτὸν", lemma:"καί + ἐμαυτόν (crasis κἠμαυτόν)", pos:"conjunction + reflexive pronoun", parse:"acc. sg. masc., crasis of καὶ ἐμαυτόν",
            gloss:"and myself", note:"crasis on the κἠν/κἠκ pattern. The reflexive as a second object of ἀείδων — and the honest admission that the song is mostly about him" },
          { w:"ἀείδων", lemma:"ἀείδω (= ᾄδω)", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"sing (of)", note:"circumstantial with ἐπίσταμαι, taking a double accusative of the things sung about. The same participle described him at line 13" },
        ]
      },

      /* ---- 40–41 ---- */
      {
        lines: "40–41",
        translation: "often at an untimely hour of the night. And I am rearing eleven fawns for you, all with collars, and four bear-cubs.",
        greek: [
          { w:"πολλάκι", lemma:"πολλάκις (poetic πολλάκι)", pos:"adverb", parse:"—",
            gloss:"often, many times", note:"the ν-less poetic form before a consonant, as at 12" },
          { w:"νυκτὸς", lemma:"νύξ, νυκτός, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"night", note:"GENITIVE OF TIME WITHIN WHICH — 'during the night', with no preposition. The case alone carries the sense; contrast τὰν νύκτα (acc., 'through the night') at 44 and 77" },
          { w:"ἀωρί", lemma:"ἀωρί", pos:"adverb", parse:"—",
            gloss:"at an untimely hour, unseasonably late", note:"from ἀ- + ὥρα. He keeps the neighbours awake, which is funnier than he knows" },
          { w:".", punct:true, nospaceBefore:true },
          { w:"τράφω", lemma:"τρέφω (Doric τράφω)", pos:"verb", parse:"present active indicative, 1st singular",
            gloss:"rear, nourish, bring up", note:"Doric ᾱ for ε in the stem. Present of an ongoing project — the gifts are being reared, not yet given" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"τοι", lemma:"σύ (Doric/epic τοι = σοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"for you", note:"dative of advantage — the whole menagerie is meant as a courting-gift" },
          { w:"ἕνδεκα", lemma:"ἕνδεκα", pos:"numeral", parse:"indeclinable",
            gloss:"eleven", note:"with νεβρώς. The oddly precise number is part of the comedy — he has counted them" },
          { w:"νεβρώς", lemma:"νεβρός, -οῦ, ὁ/ἡ", pos:"noun", parse:"acc. pl. (Doric -ώς = Attic -ούς)",
            gloss:"fawn, young deer", note:"object of τράφω, in the Doric accusative plural -ώς that ran through Idyll 1 (ὀφθαλμώς, τώς, δρυμώς)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πάσας", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"acc. pl. fem.",
            gloss:"all, every", note:"with μαννοφόρως. Feminine, so the fawns are does" },
          { w:"μαννοφόρως", lemma:"μαννοφόρος, -ον", pos:"adjective", parse:"acc. pl. fem. (Doric -ως = Attic -ους)",
            gloss:"wearing a collar, collar-bearing", note:"from μάννος, a necklace or collar. They are tame pets, already dressed for presentation. The manuscripts also offer ἀμνοφόρως, but Dover prints this" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second gift" },
          { w:"σκύμνως", lemma:"σκύμνος, -ου, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ως = Attic -ους)",
            gloss:"cub, whelp", note:"second object of τράφω" },
          { w:"τέσσαρας", lemma:"τέσσαρες, -α", pos:"numeral (adjective)", parse:"acc. pl. masc.",
            gloss:"four", note:"with σκύμνως" },
          { w:"ἄρκτων", lemma:"ἄρκτος, -ου, ἡ", pos:"noun", parse:"gen. pl. fem.",
            gloss:"bear", note:"possessive genitive with σκύμνως — 'cubs of bears'. Offering a girl four bear cubs is the sort of gift only a Cyclops would think romantic" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 42 ---- */
      {
        lines: "42",
        translation: "Come to me at last, and you will be none the worse off;",
        greek: [
          { w:"ἀλλ᾽", lemma:"ἀλλά", pos:"conjunction", parse:"elided ἀλλά",
            gloss:"but, come now", note:"ἀλλά with an imperative is 'come now!' rather than an adversative — it breaks off the inventory and makes the appeal" },
          { w:"ἀφίκευσο", lemma:"ἀφικνέομαι (Doric imper. ἀφίκευσο)", pos:"verb", parse:"aorist middle imperative, 2nd singular",
            gloss:"come to, arrive at, reach", note:"a thematic imperative in -σο, formed by analogy with athematic ones like μέμνησο. Dover: the ancient commentator regarded such forms as Syracusan, and they belong with the later spread of -ᾶσαι/-εῖσαι for -ᾷ/-εῖ in the second person middle" },
          { w:"ποθ᾽", lemma:"ποτέ", pos:"adverb (enclitic)", parse:"elided ποτέ (aspirated)",
            gloss:"at some time, at last", note:"'do come at last'. Note the aspiration ποτ(έ) + ἁμέ → ποθ᾽ ἁμέ, the τ turning to θ before the rough breathing" },
          { w:"ἁμέ", lemma:"ἐγώ (Doric ἁμέ = ἡμᾶς)", pos:"personal pronoun", parse:"acc. pl. (for sg.)",
            gloss:"us (i.e. me)", note:"Doric ἁμέ = ἡμᾶς, poetic plural for singular. Set it beside ἁμῖν (7) and the Aeolic ἄμμι of Idyll 1.102" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"linking the promised consequence" },
          { w:"ἑξεῖς", lemma:"ἔχω (Doric fut. ἑξεῖς)", pos:"verb", parse:"future active indicative, 2nd singular (Doric ἑξεῖς = Attic ἕξεις)",
            gloss:"have, hold; fare, be off (with an adverb)", note:"Doric contracted-type future — the family that runs through both poems: φυλαξεῖς, λυγιξεῖν, ᾀσῶ, δοκησεῖς, and here" },
          { w:"οὐδὲν", lemma:"οὐδείς, οὐδεμία, οὐδέν", pos:"pronoun (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"in no way, not at all", note:"adverbial accusative with ἔλασσον" },
          { w:"ἔλασσον", lemma:"ἐλάσσων, -ον (compar. of ἐλαχύς/μικρός)", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"less, worse", note:"Dover: 'you won't be worse off' — for the change, that is. The idiom is the negative of πλέον ἔχειν 'have an advantage'. Comparative neuter as adverb once again" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 43 ---- */
      {
        lines: "43",
        translation: "and let the grey-green sea go on roaring against the shore.",
        greek: [
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with θάλασσαν, fronted before its own clause" },
          { w:"γλαυκὰν", lemma:"γλαυκός, -ή, -όν", pos:"adjective", parse:"acc. sg. fem. (Doric -άν = Attic -ήν)",
            gloss:"grey-green, gleaming, blue-grey", note:"the standard colour-word of the sea, inside the article's bracket with θάλασσαν" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, but", note:"postpositive, dropped inside the article-adjective-noun group" },
          { w:"θάλασσαν", lemma:"θάλασσα, -ης, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"sea", note:"SUBJECT ACCUSATIVE of the infinitive ὀρεχθεῖν, not the object of ἔα — 'let the sea roar', with ἐάω taking acc. + inf." },
          { w:"ἔα", lemma:"ἐάω", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"let, allow, leave alone", note:"ἐάω takes an accusative and infinitive, so the whole 'the sea to roar' is its object. Contracted from ἔαε" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"against, towards", note:"Doric ποτί = πρός" },
          { w:"χέρσον", lemma:"χέρσος, -ου, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"dry land, shore", note:"governed by ποτί" },
          { w:"ὀρεχθεῖν", lemma:"ὀρεχθέω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"roar, rumble, thunder", note:"infinitive with ἔα. A rare Homeric verb of deep sound — he is telling her to let the sea get on with being the sea while she comes ashore" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 44 ---- */
      {
        lines: "44",
        translation: "You will pass the night more pleasantly in the cave at my side.",
        greek: [
          { w:"ἅδιον", lemma:"ἡδύς, -εῖα, -ύ (Doric ἁδύς, comp. ἅδιον)", pos:"adjective (adverbial comparative)", parse:"acc. sg. neut. as adverb (Doric ἅδιον = Attic ἥδιον)",
            gloss:"more pleasantly, more sweetly", note:"comparative neuter as adverb, exactly as at Idyll 1.145. The implied comparison is 'than out at sea'" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"of place where" },
          { w:"τὥντρῳ", lemma:"τὸ ἄντρον (crasis τὥντρῳ)", pos:"article + noun", parse:"dat. sg. neut., crasis of τῷ ἄντρῳ",
            gloss:"the cave", note:"CRASIS of τῷ + ἄντρῳ, marked by the coronis. Add it to the collection: τωὔλιον (12), θώτερον (32), κἠκ (35), κἠμαυτόν (39)" },
          { w:"παρ᾽", lemma:"παρά", pos:"preposition", parse:"+ dative (elided παρά)",
            gloss:"beside, at the side of", note:"παρά + dat. of the person beside whom" },
          { w:"ἐμὶν", lemma:"ἐγώ (Doric ἐμίν = ἐμοί)", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"me", note:"Doric ἐμίν = ἐμοί, as at line 2" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with νύκτα" },
          { w:"νύκτα", lemma:"νύξ, νυκτός, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"night", note:"ACCUSATIVE OF DURATION — 'through the night, for the night's length'. Contrast the genitive νυκτός at 40, 'at some point during the night': the two cases divide the job between them" },
          { w:"διαξεῖς", lemma:"διάγω", pos:"verb", parse:"future active indicative, 2nd singular (Doric διαξεῖς = Attic διάξεις)",
            gloss:"pass, spend (time), get through", note:"the same verb that described his own life at line 7 (διᾶγε) and will close the poem at 81. Doric contracted-type future again" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 45–46 ---- */
      {
        lines: "45–46",
        translation: "There are laurels there, there are slender cypresses, there is dark ivy, there is the vine with its sweet fruit,",
        greek: [
          { w:"ἐντὶ", lemma:"εἰμί (Doric ἐντί = εἰσί)", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"there are", note:"DORIC 3rd PLURAL of εἰμί = Attic εἰσί — one of the forms most likely to stop you, since it looks like the preposition-less ἐν τί. It recurs at 51. Note the -ντι ending, the same one as γελᾶντι, βομβεῦντι" },
          { w:"δάφναι", lemma:"δάφνη, -ης, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"laurel, bay tree", note:"subject. The catalogue of 45–48 is a locus amoenus, the standard 'pleasant place' of bucolic — and it is being used as an estate agent's inventory" },
          { w:"τηνεί", lemma:"ἐκεῖ (Doric τηνεί)", pos:"adverb", parse:"—",
            gloss:"there, in that place", note:"Doric τηνεί = ἐκεῖ, built on τῆνος (= ἐκεῖνος). The same adverb at Idyll 1.106" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐντὶ", lemma:"εἰμί (Doric ἐντί = εἰσί)", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"there are", note:"the verb repeated at the head of each item — anaphora, four times over in two lines" },
          { w:"ῥαδιναὶ", lemma:"ῥαδινός, -ή, -όν", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"slender, taper, waving", note:"with κυπάρισσοι" },
          { w:"κυπάρισσοι", lemma:"κυπάρισσος, -ου, ἡ", pos:"noun", parse:"nom. pl. fem.",
            gloss:"cypress", note:"second subject" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἔστι", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"there is", note:"now the SINGULAR, because the subjects that follow are singular — the anaphora shifts number without breaking stride" },
          { w:"μέλας", lemma:"μέλας, μέλαινα, μέλαν", pos:"adjective", parse:"nom. sg. masc.",
            gloss:"black, dark", note:"with κισσός — the dark green of ivy" },
          { w:"κισσός", lemma:"κισσός, -οῦ, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"ivy", note:"third subject. The same ivy that was carved round the goatherd's cup at Idyll 1.30 and named a goat at 1.151" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἔστ᾽", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 3rd singular (elided ἔστι)",
            gloss:"there is", note:"fourth repetition" },
          { w:"ἄμπελος", lemma:"ἄμπελος, -ου, ἡ", pos:"noun", parse:"nom. sg. fem.",
            gloss:"vine, grape-vine", note:"fourth subject" },
          { w:"ἁ", lemma:"ὁ, ἡ, τό (Doric ἁ = ἡ)", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"article + adjective following the noun, the regular attributive arrangement ἄμπελος ἁ γλυκύκαρπος, 'the vine, the sweet-fruited one'" },
          { w:"γλυκύκαρπος", lemma:"γλυκύκαρπος, -ον", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"with sweet fruit, sweet-fruited", note:"a two-termination compound, so the feminine looks masculine — γλυκύς + καρπός" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 47–48 ---- */
      {
        lines: "47–48",
        translation: "there is cold water, which many-treed Etna sends forth for me out of her white snow, a drink for the gods.",
        greek: [
          { w:"ἔστι", lemma:"εἰμί", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"there is", note:"the fifth and last ἐντί/ἔστι of the catalogue, and the one that gets a whole relative clause to itself" },
          { w:"ψυχρὸν", lemma:"ψυχρός, -ά, -όν", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"cold, chill", note:"with ὕδωρ. Cold water is the crowning luxury of a Sicilian summer" },
          { w:"ὕδωρ", lemma:"ὕδωρ, ὕδατος, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"water", note:"subject, and antecedent of τό" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τό", lemma:"ὅς, ἥ, ὅ (article as relative)", pos:"relative pronoun", parse:"acc. sg. neut.",
            gloss:"which", note:"the article doing duty as a relative, as at Idyll 1.126 and 11.16. Object of προΐητι" },
          { w:"μοι", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"for me", note:"dative of advantage — the mountain does it for his benefit" },
          { w:"ἁ", lemma:"ὁ, ἡ, τό (Doric ἁ = ἡ)", pos:"article", parse:"nom. sg. fem.",
            gloss:"the", note:"with Αἴτνα" },
          { w:"πολυδένδρεος", lemma:"πολυδένδρεος, -ον", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"many-treed, thick with trees", note:"a two-termination compound agreeing with the feminine Αἴτνα" },
          { w:"Αἴτνα", lemma:"Αἴτνα, -ας, ἡ (Doric = Αἴτνη)", pos:"proper noun", parse:"nom. sg. fem.",
            gloss:"Etna", note:"subject of προΐητι. The same mountain Thyrsis came from at Idyll 1.65 and the Nymphs abandoned at 1.69" },
          { w:"λευκᾶς", lemma:"λευκός, -ή, -όν", pos:"adjective", parse:"gen. sg. fem. (Doric -ᾶς = Attic -ῆς)",
            gloss:"white, bright", note:"with χιόνος, and one more of the poem's whites — the snow is being offered as a match for Galateia's own colour" },
          { w:"ἐκ", lemma:"ἐκ", pos:"preposition", parse:"+ genitive",
            gloss:"out of, from", note:"standing between adjective and noun (λευκᾶς ἐκ χιόνος) — resolve the agreement first" },
          { w:"χιόνος", lemma:"χιών, -όνος, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"snow", note:"governed by ἐκ. Snow on Etna in summer is a real Sicilian fact, not a fantasy" },
          { w:"ποτὸν", lemma:"ποτόν, -οῦ, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"drink, draught", note:"in APPOSITION to τό — 'which she sends forth … as a drink'. Predicative apposition of this kind is common and easy to miss" },
          { w:"ἀμβρόσιον", lemma:"ἀμβρόσιος, -α, -ον", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"immortal, divine, ambrosial", note:"with ποτόν — cold spring water rated as the drink of the gods" },
          { w:"προΐητι", lemma:"προΐημι (Doric προΐητι = προΐησι)", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"send forth, let go, send out", note:"Doric -τι for -σι, the athematic counterpart of the -ντι you meet in the plural (ἐντί, γελᾶντι). A compound of ἵημι, so the stem is just -ι-" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 49 ---- */
      {
        lines: "49",
        translation: "Who would choose to have the sea and its waves in preference to all this?",
        greek: [
          { w:"τίς", lemma:"τίς, τί", pos:"interrogative pronoun", parse:"nom. sg. masc.",
            gloss:"who?", note:"subject of ἕλοιτο. A rhetorical question expecting 'nobody'" },
          { w:"κα", lemma:"ἄν (Doric κα)", pos:"particle", parse:"—",
            gloss:"(modal particle)", note:"Doric κα = ἄν, and with the optative ἕλοιτο it makes a POTENTIAL optative — 'who would choose?'. Without the κα it would be a wish" },
          { w:"τῶνδε", lemma:"ὅδε, ἥδε, τόδε", pos:"demonstrative pronoun", parse:"gen. pl. neut.",
            gloss:"these things (here)", note:"Dover: 'in preference to this'. αἱρεῖσθαι does not normally take a genitive of the thing rejected, but it is assimilated here to the construction of προτιθέναι and προτιμᾶν 'prefer X to Y'. So it is a genitive of comparison in effect" },
          { w:"θάλασσαν", lemma:"θάλασσα, -ης, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"sea", note:"object of the infinitive ἔχειν" },
          { w:"ἔχειν", lemma:"ἔχω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"have, hold, occupy", note:"complementary infinitive with ἕλοιτο — 'choose to have'. ἔχω of a place is 'occupy, live in', as at Idyll 1.68" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second object" },
          { w:"κύμαθ᾽", lemma:"κῦμα, -ατος, τό", pos:"noun", parse:"acc. pl. neut. (elided κύματα, aspirated)",
            gloss:"wave, billow", note:"second object of ἔχειν. Note the aspiration κύματα + ἕλοιτο → κύμαθ᾽ ἕλοιτο" },
          { w:"ἕλοιτο", lemma:"αἱρέω (aor. εἷλον; mid. choose)", pos:"verb", parse:"aorist middle optative, 3rd singular",
            gloss:"take, seize; (mid.) choose, prefer", note:"potential optative with κα. The MIDDLE of αἱρέω means 'choose', the active 'take' — a difference of voice that changes the dictionary entry" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 50 ---- */
      {
        lines: "50",
        translation: "And if I myself seem to you too hairy,",
        greek: [
          { w:"αἰ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"Doric αἰ = εἰ. Here with the plain indicative δοκέω — a simple condition, not the αἴ κα + subjunctive of Idyll 1.4" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and, but", note:"connective" },
          { w:"τοι", lemma:"σύ (Doric/epic τοι = σοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to you", note:"dative with δοκέω — 'seem TO you'" },
          { w:"αὐτὸς", lemma:"αὐτός, -ή, -ό", pos:"intensive pronoun", parse:"nom. sg. masc.",
            gloss:"myself", note:"intensive with ἐγών: 'I for my own part'. Nominative and articleless, so intensive, not the pronoun 'him'" },
          { w:"ἐγὼν", lemma:"ἐγώ (Doric/epic ἐγών)", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"Doric/epic ἐγών before a vowel, as at Idyll 1.120, 130" },
          { w:"δοκέω", lemma:"δοκέω", pos:"verb", parse:"present active indicative, 1st singular",
            gloss:"seem, appear", note:"PERSONAL construction — 'I seem to be' — so the complement λασιώτερος is nominative, agreeing with the subject, and ἦμεν is its infinitive" },
          { w:"λασιώτερος", lemma:"λάσιος, -α, -ον", pos:"adjective", parse:"nom. sg. masc. (comparative)",
            gloss:"hairier, too hairy", note:"Dover: 'more hairy than is right', i.e. TOO hairy — the comparative used absolutely, with the standard of comparison left unexpressed. To judge from the sparse body-hair of gods and heroes on vases, a hairy chest was not admired" },
          { w:"ἦμεν", lemma:"εἰμί (Doric inf. ἦμεν = εἶναι)", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"to be", note:"DORIC INFINITIVE of εἰμί = Attic εἶναι. It looks exactly like a 1st plural imperfect, so let the construction decide: δοκέω needs an infinitive. It returns at 79" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 51 ---- */
      {
        lines: "51",
        translation: "I have oak logs, and under the ash an untiring fire;",
        greek: [
          { w:"ἐντὶ", lemma:"εἰμί (Doric ἐντί = εἰσί)", pos:"verb", parse:"present active indicative, 3rd plural",
            gloss:"there are", note:"Doric 3rd plural again, as in the catalogue at 45–46 — here in the sense 'I have', with the dative μοι" },
          { w:"δρυὸς", lemma:"δρῦς, δρυός, ἡ", pos:"noun", parse:"gen. sg. fem.",
            gloss:"oak (tree)", note:"genitive of material with ξύλα — 'logs of oak'" },
          { w:"ξύλα", lemma:"ξύλον, -ου, τό", pos:"noun", parse:"nom. pl. neut.",
            gloss:"wood, log, timber", note:"subject of ἐντί" },
          { w:"μοι", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"for me, I have", note:"DATIVE OF POSSESSION with the verb 'to be' — ἐντὶ … μοι = 'there are to me' = 'I have'. One of the commonest Greek ways of saying 'have'" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second thing he has" },
          { w:"ὑπὸ", lemma:"ὑπό", pos:"preposition", parse:"+ genitive",
            gloss:"under, beneath", note:"of place, with σποδῶ. Dover argues for the genitive here rather than the dative σποδῷ, comparing Odyssey 9.375 ὑπὸ σποδοῦ ἤλασα πολλῆς — the line where Odysseus heats the stake that will put out this very Cyclops' eye" },
          { w:"σποδῶ", lemma:"σποδός, -οῦ, ἡ", pos:"noun", parse:"gen. sg. fem. (Doric -ῶ = Attic -οῦ)",
            gloss:"ashes, embers", note:"governed by ὑπό. The fire banked under the ash — and, for a reader of the Odyssey, an unmistakable piece of dramatic irony" },
          { w:"ἀκάματον", lemma:"ἀκάματος, -ον", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"untiring, unwearied, unquenchable", note:"with πῦρ. A Homeric epithet of fire (ἀκάματον πῦρ), lifted straight in" },
          { w:"πῦρ", lemma:"πῦρ, πυρός, τό", pos:"noun", parse:"nom. sg. neut.",
            gloss:"fire", note:"second subject of ἐντί" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 52–53 ---- */
      {
        lines: "52–53",
        translation: "and I would endure being burnt by you even in my very soul, and in my one eye, than which nothing is sweeter to me.",
        greek: [
          { w:"καιόμενος", lemma:"καίω", pos:"verb (participle)", parse:"present middle/passive participle, nom. sg. masc.",
            gloss:"burn, kindle; (pass.) be burnt, be on fire", note:"PASSIVE, with ὑπὸ τεῦς as its agent — 'being burnt by you'. Supplementary participle with ἀνεχοίμαν: ἀνέχομαι regularly takes a participle for what one puts up with" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ὑπὸ", lemma:"ὑπό", pos:"preposition", parse:"+ genitive",
            gloss:"by (of the agent)", note:"ὑπό + genitive of the agent with the passive participle. Note the shift from the local ὑπό of 51 one line earlier — same preposition, same case, different job" },
          { w:"τεῦς", lemma:"σύ (Doric gen. τεῦς = σοῦ)", pos:"personal pronoun", parse:"gen. sg.",
            gloss:"of you, by you", note:"the shorter Doric genitive beside τεοῦς at 25 — the agent of καιόμενος" },
          { w:"καὶ", lemma:"καί", pos:"adverb", parse:"—",
            gloss:"even", note:"'even in my soul' — climactic, not merely connective" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with ψυχάν" },
          { w:"ψυχὰν", lemma:"ψυχή, -ῆς, ἡ (Doric ψυχά)", pos:"noun", parse:"acc. sg. fem.",
            gloss:"soul, life, breath of life", note:"ACCUSATIVE OF RESPECT with καιόμενος — 'burnt as to my soul'. The same construction as τάκεται ὀφθαλμώς at Idyll 1.88. Doric ᾱ for η" },
          { w:"ἀνεχοίμαν", lemma:"ἀνέχομαι", pos:"verb", parse:"present middle optative, 1st singular (Doric -μαν = Attic -μην)",
            gloss:"hold up; (mid.) endure, put up with, bear", note:"POTENTIAL optative — but where is its ἄν? Greek verse can drop the particle, and here the κα of 49 still colours the sentence. Doric -μαν for -μην, as ἀρεσαίμαν at Idyll 1.60. The active ἀνέχω 'hold up' was Aphrodite's verb at Idyll 1.96" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"adding the second thing he would sacrifice" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with ὀφθαλμόν" },
          { w:"ἕν᾽", lemma:"εἷς, μία, ἕν", pos:"numeral", parse:"acc. sg. masc. (elided ἕνα)",
            gloss:"one, single", note:"attributive with ὀφθαλμόν, inside the article's bracket: 'my one eye'. The line is a small tragedy waiting to happen" },
          { w:"ὀφθαλμόν", lemma:"ὀφθαλμός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"eye", note:"second accusative of respect with καιόμενος" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τῶ", lemma:"ὅς, ἥ, ὅ (article as relative, Doric gen. τῶ)", pos:"relative pronoun", parse:"gen. sg. masc.",
            gloss:"than which", note:"GENITIVE OF COMPARISON with the comparative γλυκερώτερον — 'than which nothing is sweeter'. Doric -ῶ for -οῦ, and the article again doing a relative's work" },
          { w:"μοι", lemma:"ἐγώ", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to me", note:"dative of the person judging — 'nothing sweeter in my eyes'" },
          { w:"γλυκερώτερον", lemma:"γλυκερός, -ά, -όν (compar. γλυκερώτερος)", pos:"adjective", parse:"nom. sg. neut. (comparative)",
            gloss:"sweeter, more delightful", note:"predicate with οὐδέν and an understood ἐστί" },
          { w:"οὐδέν", lemma:"οὐδείς, οὐδεμία, οὐδέν", pos:"pronoun", parse:"nom. sg. neut.",
            gloss:"nothing", note:"subject of the understood copula, closing the line" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 54 ---- */
      {
        lines: "54",
        translation: "Alas that my mother did not bear me with gills,",
        greek: [
          { w:"ὤμοι", lemma:"ὤμοι", pos:"interjection", parse:"—",
            gloss:"alas!, ah me!", note:"ὤ + μοι fused into a cry. It introduces the wild central fantasy of the song" },
          { w:"ὅτ᾽", lemma:"ὅτι", pos:"conjunction", parse:"elided ὅτι",
            gloss:"that, because", note:"Dover: this could be ὅτε 'when', giving 'because as it is', but the elision of ὅτι is certain at 79, so read it as ὅτι here too — 'alas THAT she did not bear me…'" },
          { w:"οὐκ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"negating ἔτεκεν" },
          { w:"ἔτεκέν", lemma:"τίκτω (aor. ἔτεκον)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"bear, bring forth, give birth to", note:"the strong aorist of τίκτω, formed on the bare stem τεκ- with no resemblance to the present. Second accent from the enclitic μ᾽" },
          { w:"μ᾽", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg. (elided με)",
            gloss:"me", note:"object of ἔτεκεν" },
          { w:"ἁ", lemma:"ὁ, ἡ, τό (Doric ἁ = ἡ)", pos:"article", parse:"nom. sg. fem.",
            gloss:"the, my", note:"with μάτηρ. The article alone often does duty for a possessive with words for kin" },
          { w:"μάτηρ", lemma:"μήτηρ, μητρός, ἡ (Doric μάτηρ)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"mother", note:"subject. She reappears as the villain at 67–69" },
          { w:"βράγχι᾽", lemma:"βράγχια, -ων, τά", pos:"noun", parse:"acc. pl. neut. (elided βράγχια)",
            gloss:"gills (of a fish)", note:"object of ἔχοντα. The word is plain zoological vocabulary, which is exactly what makes the wish funny" },
          { w:"ἔχοντα", lemma:"ἔχω", pos:"verb (participle)", parse:"present active participle, acc. sg. masc.",
            gloss:"having", note:"agreeing with με — 'bear me having gills'. A participle in agreement with the object does the work of an English 'with…' phrase" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 55 ---- */
      {
        lines: "55",
        translation: "so that I could have dived down to you and kissed your hand,",
        greek: [
          { w:"ὡς", lemma:"ὡς", pos:"conjunction", parse:"—",
            gloss:"so that, in order that", note:"a purpose clause — but with the INDICATIVE following, because the purpose is now unattainable: the mother did not give him gills, so the diving never happened. Greek uses a past indicative in a final clause whose purpose was never realized" },
          { w:"κατέδυν", lemma:"καταδύω (intr. aor. κατέδυν)", pos:"verb", parse:"aorist active indicative, 1st singular",
            gloss:"go down, sink, dive down", note:"a ROOT (athematic) aorist, and INTRANSITIVE — δύω is transitive in the sigmatic aorist ἔδυσα 'I made to sink' but intransitive in ἔδυν 'I sank', exactly as with ἵστημι. Compare δεδύκειν of the setting sun at Idyll 1.102" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"to, towards", note:"Doric ποτί = πρός, of the goal" },
          { w:"τὶν", lemma:"σύ (Doric τίν = σέ)", pos:"personal pronoun", parse:"acc. sg.",
            gloss:"you", note:"accusative after ποτί" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second unrealized act" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with χέρα" },
          { w:"χέρα", lemma:"χείρ, χειρός, ἡ (poetic χέρα)", pos:"noun", parse:"acc. sg. fem.",
            gloss:"hand", note:"object of ἐφίλησα. The shortened stem χερ- is a poetic alternative to χειρ-" },
          { w:"τεῦς", lemma:"σύ (Doric gen. τεῦς = σοῦ)", pos:"personal pronoun", parse:"gen. sg.",
            gloss:"of you, your", note:"possessive genitive with χέρα — 'your hand'" },
          { w:"ἐφίλησα", lemma:"φιλέω", pos:"verb", parse:"aorist active indicative, 1st singular",
            gloss:"love; kiss", note:"here 'kiss', the concrete sense of φιλέω. Second verb of the unfulfilled purpose clause. His whole erotic ambition turns out to be a kissed hand" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 56–57 ---- */
      {
        lines: "56–57",
        translation: "if you would not let me kiss your mouth. And I would have brought you either white lilies or a soft poppy with red petals;",
        greek: [
          { w:"αἰ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"Doric αἰ = εἰ" },
          { w:"μὴ", lemma:"μή", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"μή, not οὐ, because the clause is conditional — the choice of negative is itself the signal that you are in a protasis" },
          { w:"τὸ", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. neut.",
            gloss:"the", note:"with στόμα" },
          { w:"στόμα", lemma:"στόμα, -ατος, τό", pos:"noun", parse:"acc. sg. neut.",
            gloss:"mouth", note:"object of an understood 'kiss' — the verb is left to be supplied from ἐφίλησα in the line before" },
          { w:"λῇς", lemma:"λῶ (Doric, = ἐθέλω)", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"wish, be willing, want", note:"the Doric verb λῶ, which has no Attic equivalent in form — λῶ, λῇς, λῇ. It appeared in Idyll 1.12. Here 'if you are not willing (to let me kiss) your mouth'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἔφερον", lemma:"φέρω", pos:"verb", parse:"imperfect active indicative, 1st singular",
            gloss:"carry, bring, bear", note:"imperfect INDICATIVE continuing the unreal sequence of 55 — 'I would have kept bringing you'. Dover groups ὡς κατέδυν … ἐφίλησα … ἔφερον together as one construction" },
          { w:"δέ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"τοι", lemma:"σύ (Doric/epic τοι = σοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to you, for you", note:"indirect object of ἔφερον" },
          { w:"ἢ", lemma:"ἤ", pos:"conjunction", parse:"—",
            gloss:"either, or", note:"ἤ … ἤ, 'either … or'" },
          { w:"κρίνα", lemma:"κρίνον, -ου, τό", pos:"noun", parse:"acc. pl. neut.",
            gloss:"lily", note:"object of ἔφερον" },
          { w:"λευκά", lemma:"λευκός, -ή, -όν", pos:"adjective", parse:"acc. pl. neut. (Doric -ά = Attic -ή)",
            gloss:"white", note:"with κρίνα — white for the white nymph, one more of the poem's whites" },
          { w:"ἢ", lemma:"ἤ", pos:"conjunction", parse:"—",
            gloss:"or", note:"the second limb" },
          { w:"μάκων᾽", lemma:"μήκων, -ωνος, ἡ (Doric μάκων)", pos:"noun", parse:"acc. sg. fem. (elided μάκωνα)",
            gloss:"poppy", note:"second object. Doric ᾱ for η" },
          { w:"ἁπαλὰν", lemma:"ἁπαλός, -ή, -όν", pos:"adjective", parse:"acc. sg. fem. (Doric -άν = Attic -ήν)",
            gloss:"soft, tender, delicate", note:"with μάκωνα — the same adjective he used of Galateia herself at 20" },
          { w:"ἐρυθρὰ", lemma:"ἐρυθρός, -ά, -όν", pos:"adjective", parse:"acc. pl. neut.",
            gloss:"red", note:"with πλαταγώνια" },
          { w:"πλαταγώνι᾽", lemma:"πλαταγώνιον, -ου, τό", pos:"noun", parse:"acc. pl. neut. (elided πλαταγώνια)",
            gloss:"poppy-petal (used for love-divination)", note:"object of ἔχοισαν. Lovers slapped a poppy petal against the wrist and read the answer from the crack it made — so this is not just a flower but a fortune-telling device" },
          { w:"ἔχοισαν", lemma:"ἔχω (Doric part. ἔχοισα)", pos:"verb (participle)", parse:"present active participle, acc. sg. fem. (Doric -οισα = Attic -ουσα)",
            gloss:"have, hold", note:"agreeing with μάκωνα, 'a poppy having red petals'. Doric -οισα for -ουσα, as at Idyll 1.96" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 58 ---- */
      {
        lines: "58",
        translation: "but the one comes in summer, the other in winter,",
        greek: [
          { w:"ἀλλὰ", lemma:"ἀλλά", pos:"conjunction", parse:"—",
            gloss:"but", note:"Dover: he is not correcting himself — he never said he would bring both at once — but pedantically explaining to an imaginary objector, who may well be Galateia, better acquainted with the sea than with the land" },
          { w:"τὰ", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"article as pronoun", parse:"nom. pl. neut.",
            gloss:"the one lot", note:"τὰ μέν … τὰ δέ, 'the one … the other', the article in its old demonstrative use — no noun anywhere near it" },
          { w:"μὲν", lemma:"μέν", pos:"particle", parse:"—",
            gloss:"on the one hand", note:"first limb" },
          { w:"θέρεος", lemma:"θέρος, -εος, τό", pos:"noun", parse:"gen. sg. neut.",
            gloss:"summer", note:"GENITIVE OF TIME WITHIN WHICH — 'in summer'. Compare the parallel ἐν χειμῶνι at the end of the line: Greek can use either the bare genitive or ἐν + dative, and here Theocritus uses both in one breath" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τὰ", lemma:"ὁ, ἡ, τό (demonstrative)", pos:"article as pronoun", parse:"nom. pl. neut.",
            gloss:"the other lot", note:"second limb of the τὰ μέν … τὰ δέ pair" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"on the other hand", note:"answering μέν" },
          { w:"γίνεται", lemma:"γίγνομαι (Ionic/Hellenistic γίνομαι)", pos:"verb", parse:"present middle indicative, 3rd singular",
            gloss:"become, come to be, grow", note:"SINGULAR verb with the neuter plural subjects τὰ … τὰ — the standard Greek agreement, met already at Idyll 1.134 and 139" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in", note:"of time when, balancing the bare genitive θέρεος" },
          { w:"χειμῶνι", lemma:"χειμών, -ῶνος, ὁ", pos:"noun", parse:"dat. sg. masc.",
            gloss:"winter, storm", note:"governed by ἐν" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 59 ---- */
      {
        lines: "59",
        translation: "so that I could not have brought you all these together at once.",
        greek: [
          { w:"ὥστ᾽", lemma:"ὥστε", pos:"conjunction", parse:"elided ὥστε",
            gloss:"so that, with the result that", note:"ὥστε + INDICATIVE states an actual result, as against ὥστε + infinitive for a natural or intended one. Here the indicative ἐδυνάθην makes it a fact about the world, not a tendency" },
          { w:"οὔ", lemma:"οὐ", pos:"adverb (negative)", parse:"—",
            gloss:"not", note:"οὐ rather than μή, which confirms the indicative construction: a ὥστε clause with the infinitive would take μή" },
          { w:"κά", lemma:"ἄν (Doric κα)", pos:"particle", parse:"—",
            gloss:"(modal particle)", note:"Doric κα = ἄν, and with the past indicative ἐδυνάθην it makes the potential of the past — 'I could not have'" },
          { w:"τοι", lemma:"σύ (Doric/epic τοι = σοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"to you", note:"indirect object of φέρειν" },
          { w:"ταῦτα", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative pronoun", parse:"acc. pl. neut.",
            gloss:"these things", note:"object of φέρειν — the lilies and the poppy" },
          { w:"φέρειν", lemma:"φέρω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"carry, bring", note:"complementary infinitive with ἐδυνάθην" },
          { w:"ἅμα", lemma:"ἅμα", pos:"adverb", parse:"—",
            gloss:"at the same time, together", note:"the crux of his pedantry: he could have brought each in season, just not both at once" },
          { w:"πάντ᾽", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"acc. pl. neut. (elided πάντα)",
            gloss:"all", note:"with ταῦτα" },
          { w:"ἐδυνάθην", lemma:"δύναμαι", pos:"verb", parse:"aorist passive indicative (middle in sense), 1st singular",
            gloss:"be able, can", note:"Doric ᾱ for η. Passive in form, middle in meaning, like ἠράσθην at 25 — a large class of deponents forms its aorist this way" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 60 ---- */
      {
        lines: "60",
        translation: "Now, my little girl, now, this very moment, I shall learn to swim,",
        greek: [
          { w:"νῦν", lemma:"νῦν", pos:"adverb", parse:"—",
            gloss:"now", note:"repeated three words later — the excitement of a new idea. He has just realized he could solve the problem himself" },
          { w:"μάν", lemma:"μήν (Doric μάν)", pos:"particle", parse:"—",
            gloss:"indeed, truly", note:"Doric μάν = μήν, as at Idyll 1.71 and 95" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"with the vocative" },
          { w:"κόριον", lemma:"κόριον, -ου, τό (dimin. of κόρη)", pos:"noun", parse:"voc. sg. neut.",
            gloss:"little girl, dear girl", note:"a DIMINUTIVE in -ιον, neuter regardless of the sex of its referent — the affectionate register of everyday speech, and quite unlike the grand κόρα of 25 and 30" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"νῦν", lemma:"νῦν", pos:"adverb", parse:"—",
            gloss:"now", note:"the repetition" },
          { w:"αὐτίκα", lemma:"αὐτίκα", pos:"adverb", parse:"—",
            gloss:"at once, immediately", note:"the reading Dover prints; the manuscripts also offer αὐτό γα and τό γε" },
          { w:"νεῖν", lemma:"νέω (contr. νεῖν)", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"swim", note:"complementary infinitive with μαθεῦμαι. Dover: he will need rather more than ordinary swimming to reach Galateia, as he has just admitted at 54f. — the fantasy has not become any more practical" },
          { w:"γε", lemma:"γε", pos:"particle (enclitic)", parse:"—",
            gloss:"at least, at any rate", note:"limiting: swimming at least is something he can manage, even if gills are beyond him" },
          { w:"μαθεῦμαι", lemma:"μανθάνω (Doric fut. μαθεῦμαι)", pos:"verb", parse:"future middle indicative, 1st singular (Doric μαθεῦμαι = Attic μαθήσομαι)",
            gloss:"learn, come to know", note:"the Doric contracted future once more, now in the middle — μαθήσομαι squeezed to μαθεῦμαι. The -ευ- is the same contraction as ἐλέγευ, βατεῦνται, βομβεῦντι" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 61 ---- */
      {
        lines: "61",
        translation: "if some stranger sailing in a ship should arrive here,",
        greek: [
          { w:"αἴ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"Doric αἰ = εἰ, and with κα + subjunctive it is ἐάν — a prospective condition, 'if ever'" },
          { w:"κα", lemma:"ἄν (Doric κα)", pos:"particle", parse:"—",
            gloss:"(modal particle)", note:"αἴ κα = ἐάν, hence the subjunctive ἀφίκηται. The same construction as Idyll 1.4–6" },
          { w:"τις", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. masc. (enclitic)",
            gloss:"someone, some", note:"with ξένος" },
          { w:"σὺν", lemma:"σύν", pos:"preposition", parse:"+ dative",
            gloss:"with", note:"of accompaniment, with ναΐ" },
          { w:"ναΐ", lemma:"ναῦς, νεώς, ἡ (epic/Doric νᾶυς, dat. ναΐ)", pos:"noun", parse:"dat. sg. fem.",
            gloss:"ship", note:"governed by σύν. The declension of ναῦς is irregular throughout and simply has to be learnt" },
          { w:"πλέων", lemma:"πλέω", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"sail, go by sea", note:"circumstantial with ξένος. Do not confuse it with πλέων 'more', the comparative of πολύς — the accent and the context distinguish them" },
          { w:"ξένος", lemma:"ξένος, -ου, ὁ", pos:"noun", parse:"nom. sg. masc.",
            gloss:"stranger, foreigner, guest", note:"subject of ἀφίκηται. Dover: for a reader who remembers how Polyphemus fared at the hands of Odysseus there is grim irony in this line — the stranger who will arrive by ship is coming to blind him" },
          { w:"ὧδ᾽", lemma:"ὧδε", pos:"adverb", parse:"elided ὧδε",
            gloss:"here, hither", note:"Dover: ὧδε = δεῦρο, 'to this place', as elsewhere = ἐνθάδε" },
          { w:"ἀφίκηται", lemma:"ἀφικνέομαι", pos:"verb", parse:"aorist middle subjunctive, 3rd singular",
            gloss:"come to, arrive at, reach", note:"subjunctive in the αἴ κα protasis. The same verb as the imperative ἀφίκευσο at 42" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 62 ---- */
      {
        lines: "62",
        translation: "so that I may find out what pleasure you people find in living in the deep.",
        greek: [
          { w:"ὡς", lemma:"ὡς", pos:"conjunction", parse:"—",
            gloss:"so that, in order that", note:"a purpose clause, now with the SUBJUNCTIVE εἰδῶ — contrast the unreal purpose clause with the indicative at 55. The mood is the whole difference between a plan and a regret" },
          { w:"εἰδῶ", lemma:"οἶδα (subj. εἰδῶ)", pos:"verb", parse:"perfect active subjunctive (present in sense), 1st singular",
            gloss:"know, find out", note:"οἶδα is a perfect in form and a present in meaning, so its subjunctive εἰδῶ is an ordinary present subjunctive in force. Built on the stem εἰδ-, which is where ἰδεῖν 'see' also comes from" },
          { w:"τί", lemma:"τίς, τί", pos:"interrogative pronoun", parse:"nom. sg. neut.",
            gloss:"what?", note:"introducing an indirect question after εἰδῶ, with ἐστί understood: 'what (there is) sweet about…'" },
          { w:"ποχ᾽", lemma:"ποτέ (Doric ποκά)", pos:"adverb (enclitic)", parse:"elided ποκά (aspirated)",
            gloss:"ever", note:"Doric ποκά = ποτέ, with the κ aspirated to χ before the rough breathing of ἁδύ. τί ποχ᾽ = 'what on earth'" },
          { w:"ἁδὺ", lemma:"ἡδύς, -εῖα, -ύ (Doric ἁδύς)", pos:"adjective", parse:"nom. sg. neut. (Doric ἁδύ = Attic ἡδύ)",
            gloss:"sweet, pleasant", note:"predicate with the understood ἐστί, and the infinitive κατοικεῖν is its subject: 'what is sweet about living in the deep'" },
          { w:"κατοικεῖν", lemma:"κατοικέω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"dwell in, inhabit, settle in", note:"an ARTICLELESS infinitive used as the subject of the clause — 'the living in the deep is what?'. English needs a gerund" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with βυθόν" },
          { w:"βυθὸν", lemma:"βυθός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"the deep, the depths of the sea", note:"object of κατοικεῖν — κατοικέω can take a bare accusative of the place inhabited" },
          { w:"ὕμμιν", lemma:"ὑμεῖς (Aeolic/Doric ὕμμιν = ὑμῖν)", pos:"personal pronoun", parse:"dat. pl.",
            gloss:"to you, for you", note:"Dover: 'you ⟨Nereids⟩' — the plural widens the question from Galateia to her whole tribe. Dative of the person concerned. The same form at Idyll 1.116, 145, 152" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 63–64 ---- */
      {
        lines: "63–64",
        translation: "Come out, Galateia, and once out forget to go home again, as I do sitting here;",
        greek: [
          { w:"ἐξένθοις", lemma:"ἐξέρχομαι (Doric aor. ἐξένθον = ἐξῆλθον)", pos:"verb", parse:"aorist active optative, 2nd singular",
            gloss:"come out, go out", note:"OPTATIVE OF WISH — no ἄν, main clause, second person: 'may you come out'. Doric ν for λ once more. The wish-optative was all over Idyll 1.132–136" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"Γαλάτεια", lemma:"Γαλάτεια, -ας, ἡ", pos:"proper noun", parse:"voc. sg. fem.",
            gloss:"Galateia", note:"vocative" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining a second wish" },
          { w:"ἐξενθοῖσα", lemma:"ἐξέρχομαι (Doric part. ἐξενθοῖσα)", pos:"verb (participle)", parse:"aorist active participle, nom. sg. fem. (Doric -οισα = Attic -οῦσα)",
            gloss:"having come out", note:"aorist, so prior to λάθοιο: come out first, then forget. Two Doric features at once — ν for λ, and -οισα for -ουσα" },
          { w:"λάθοιο", lemma:"λανθάνω (mid. λανθάνομαι, aor. ἐλαθόμην)", pos:"verb", parse:"aorist middle optative, 2nd singular",
            gloss:"escape notice; (mid.) forget", note:"a second wish-optative. The MIDDLE of λανθάνω means 'forget' (the active is 'escape someone's notice'), and it takes an infinitive here: 'forget to go home'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὥσπερ", lemma:"ὥσπερ", pos:"conjunction", parse:"—",
            gloss:"just as", note:"introducing the comparison with himself" },
          { w:"ἐγὼ", lemma:"ἐγώ", pos:"personal pronoun", parse:"nom. sg.",
            gloss:"I", note:"with the participle, no finite verb — supply 'do'" },
          { w:"νῦν", lemma:"νῦν", pos:"adverb", parse:"—",
            gloss:"now", note:"of the dramatic present: he is on the rock as he sings, exactly as line 17 described" },
          { w:"ὧδε", lemma:"ὧδε", pos:"adverb", parse:"—",
            gloss:"here", note:"of place" },
          { w:"καθήμενος", lemma:"κάθημαι", pos:"verb (participle)", parse:"present middle participle, nom. sg. masc.",
            gloss:"sit, be seated", note:"agreeing with ἐγώ. κάθημαι is a deponent perfect-type verb with present meaning" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"οἴκαδ᾽", lemma:"οἴκαδε", pos:"adverb", parse:"elided οἴκαδε",
            gloss:"homewards, home", note:"the -δε suffix marks motion towards, as in Ἀθήναζε. It goes with ἀπενθεῖν" },
          { w:"ἀπενθεῖν", lemma:"ἀπέρχομαι (Doric aor. inf. ἀπενθεῖν = ἀπελθεῖν)", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"go away, go back, depart", note:"complementary infinitive with λάθοιο — 'forget to go home'. The ν-for-λ rule again, matching ἀπῆνθον at line 12" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 65–66 ---- */
      {
        lines: "65–66",
        translation: "and may you be willing to shepherd with me and to milk, and to set the cheese by putting in sharp rennet.",
        greek: [
          { w:"ποιμαίνειν", lemma:"ποιμαίνω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"tend a flock, shepherd, pasture", note:"first of three infinitives depending on ἐθέλοις — the marriage he is proposing, described entirely in terms of dairy work" },
          { w:"δ᾽", lemma:"δέ", pos:"particle", parse:"elided δέ",
            gloss:"and", note:"connective" },
          { w:"ἐθέλοις", lemma:"ἐθέλω", pos:"verb", parse:"present active optative, 2nd singular",
            gloss:"wish, be willing", note:"a third optative of wish, continuing from ἐξένθοις and λάθοιο" },
          { w:"σὺν", lemma:"σύν", pos:"preposition", parse:"+ dative",
            gloss:"with", note:"of accompaniment" },
          { w:"ἐμὶν", lemma:"ἐγώ (Doric ἐμίν = ἐμοί)", pos:"personal pronoun", parse:"dat. sg.",
            gloss:"me", note:"Doric ἐμίν = ἐμοί, governed by σύν" },
          { w:"ἅμα", lemma:"ἅμα", pos:"adverb", parse:"—",
            gloss:"together, at the same time", note:"reinforcing σὺν ἐμίν" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second infinitive" },
          { w:"γάλ᾽", lemma:"γάλα, γάλακτος, τό", pos:"noun", parse:"acc. sg. neut. (elided γάλα)",
            gloss:"milk", note:"object of ἀμέλγειν" },
          { w:"ἀμέλγειν", lemma:"ἀμέλγω", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"milk", note:"second infinitive with ἐθέλοις. The same verb the goatherd used at Idyll 1.143 and 151" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the third infinitive" },
          { w:"τυρὸν", lemma:"τυρός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"cheese", note:"object of πᾶξαι" },
          { w:"πᾶξαι", lemma:"πήγνυμι (aor. ἔπηξα, Doric πᾶξαι)", pos:"verb (infinitive)", parse:"aorist active infinitive",
            gloss:"fix, make firm, curdle, set", note:"third infinitive with ἐθέλοις. The same verb that fixed the arrow in his liver at line 16 — here it makes cheese set. Doric ᾱ for η" },
          { w:"τάμισον", lemma:"τάμισος, -ου, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"rennet (curdling agent from a calf's stomach)", note:"object of ἐνεῖσα" },
          { w:"δριμεῖαν", lemma:"δριμύς, -εῖα, -ύ", pos:"adjective", parse:"acc. sg. fem.",
            gloss:"sharp, pungent, biting", note:"with τάμισον — the same adjective the goatherd applied to bile at Idyll 1.18" },
          { w:"ἐνεῖσα", lemma:"ἐνίημι", pos:"verb (participle)", parse:"aorist active participle, nom. sg. fem.",
            gloss:"put in, send in, insert", note:"agreeing with the subject of ἐθέλοις, i.e. Galateia — a NOMINATIVE feminine participle where you might expect an accusative, because the subject of the infinitives is the same as the subject of the main verb. Aorist, so prior: put in the rennet, then the cheese sets" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 67 ---- */
      {
        lines: "67",
        translation: "It is my mother alone who wrongs me, and I blame her:",
        greek: [
          { w:"ἁ", lemma:"ὁ, ἡ, τό (Doric ἁ = ἡ)", pos:"article", parse:"nom. sg. fem.",
            gloss:"the, my", note:"with μάτηρ" },
          { w:"μάτηρ", lemma:"μήτηρ, μητρός, ἡ (Doric μάτηρ)", pos:"noun", parse:"nom. sg. fem.",
            gloss:"mother", note:"subject of ἀδικεῖ. She was the innocent chaperone of line 26; now she is the obstacle" },
          { w:"ἀδικεῖ", lemma:"ἀδικέω", pos:"verb", parse:"present active indicative, 3rd singular",
            gloss:"wrong, do wrong to, injure", note:"transitive with με" },
          { w:"με", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"me", note:"object of ἀδικεῖ" },
          { w:"μόνα", lemma:"μόνος, -η, -ον (Doric μόνα)", pos:"adjective", parse:"nom. sg. fem.",
            gloss:"alone, only", note:"predicative with μάτηρ — 'she alone', i.e. nobody else is to blame. Dover: in his infatuation he absolves GALATEIA from blame and pins it all on his mother" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"connective" },
          { w:"μέμφομαι", lemma:"μέμφομαι", pos:"verb", parse:"present middle indicative, 1st singular",
            gloss:"blame, find fault with, reproach", note:"a deponent, and it takes a DATIVE of the person blamed (though the accusative is also found). Verbs of blaming and being angry with regularly govern the dative" },
          { w:"αὐτᾷ", lemma:"αὐτός, -ή, -ό (Doric αὐτᾷ)", pos:"personal pronoun", parse:"dat. sg. fem.",
            gloss:"her", note:"dative with μέμφομαι. Doric ᾱ for η. Here αὐτός is the plain third-person pronoun, not the intensive of 50" },
          { w:"·", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 68 ---- */
      {
        lines: "68",
        translation: "she has never once said a kind word to you on my behalf,",
        greek: [
          { w:"οὐδὲν", lemma:"οὐδείς, οὐδεμία, οὐδέν", pos:"pronoun", parse:"acc. sg. neut.",
            gloss:"nothing", note:"internal object of εἶπεν, with φίλον agreeing: 'has said no kind thing'" },
          { w:"πήποχ᾽", lemma:"πώποτε (Doric πήποκα)", pos:"adverb", parse:"elided (aspirated)",
            gloss:"ever yet, at any time", note:"Doric ποκά for ποτέ inside the compound, and the κ aspirated to χ before the rough breathing of ὅλως. With the negative it means 'never once'" },
          { w:"ὅλως", lemma:"ὅλος, -η, -ον (adv. ὅλως)", pos:"adverb", parse:"—",
            gloss:"at all, altogether", note:"reinforcing the negative — 'not at all, never in the least'" },
          { w:"ποτὶ", lemma:"πρός (Doric ποτί)", pos:"preposition", parse:"+ accusative",
            gloss:"to, towards", note:"Doric ποτί = πρός, of the person spoken to" },
          { w:"τὶν", lemma:"σύ (Doric τίν = σέ)", pos:"personal pronoun", parse:"acc. sg.",
            gloss:"you", note:"accusative after ποτί — one of Dover's cited instances (5, 39, 68) of τίν standing for σέ" },
          { w:"φίλον", lemma:"φίλος, -η, -ον", pos:"adjective", parse:"acc. sg. neut.",
            gloss:"kind, friendly, affectionate", note:"agreeing with οὐδέν — 'no friendly word'" },
          { w:"εἶπεν", lemma:"λέγω (aor. εἶπον)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"say, speak", note:"Dover: a comic assimilation of the mythological situation to everyday life. Since the sexes were segregated in respectable society, a lover's mother had far more chance to speak to his girl than he had himself, and a well-disposed mother could act as go-between" },
          { w:"ὑπέρ", lemma:"ὑπέρ", pos:"preposition", parse:"+ genitive",
            gloss:"on behalf of, for the sake of", note:"ὑπέρ + gen. is 'on behalf of'; + acc. it would be 'over, beyond'. Another two-case preposition where the case decides the sense" },
          { w:"μευ", lemma:"ἐγώ (Doric/Ionic μευ = μου)", pos:"personal pronoun", parse:"gen. sg. (enclitic)",
            gloss:"of me, my", note:"governed by ὑπέρ. μευ for μου is Ionic-Doric; it recurs at 70" },
          { w:",", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 69 ---- */
      {
        lines: "69",
        translation: "and that although she sees me growing thinner day after day.",
        greek: [
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"introducing the aggravating circumstance" },
          { w:"ταῦτ᾽", lemma:"οὗτος, αὕτη, τοῦτο", pos:"demonstrative pronoun", parse:"acc. pl. neut. (elided ταῦτα)",
            gloss:"these things", note:"καὶ ταῦτα is a fixed idiom, 'and that too, and that although' — it introduces something that makes the previous statement worse. Learn the phrase whole" },
          { w:"ἆμαρ", lemma:"ἦμαρ, -ατος, τό (Doric ἆμαρ)", pos:"noun", parse:"acc. sg. neut.",
            gloss:"day", note:"Doric ᾱ for η. Dover: the expression ἆμαρ ἐπ᾽ ἆμαρ defies precise analysis, though the meaning is clear; Sophocles has the same idiom with ἔτος εἰς ἔτος" },
          { w:"ἐπ᾽", lemma:"ἐπί", pos:"preposition", parse:"+ accusative (elided ἐπί)",
            gloss:"upon, after", note:"in the fixed phrase 'day upon day'" },
          { w:"ἆμαρ", lemma:"ἦμαρ, -ατος, τό (Doric ἆμαρ)", pos:"noun", parse:"acc. sg. neut.",
            gloss:"day", note:"the noun repeated to make the idiom" },
          { w:"ὁρεῦσά", lemma:"ὁράω (Doric part. ὁρεῦσα)", pos:"verb (participle)", parse:"present active participle, nom. sg. fem. (Doric -εῦσα = Attic -ῶσα)",
            gloss:"see, look at", note:"CONCESSIVE circumstantial participle agreeing with the mother — 'although she sees'. The Doric contraction -εῦσα for -ῶσα belongs with ἐλέγευ, βατεῦνται, βομβεῦντι, μαθεῦμαι" },
          { w:"με", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"me", note:"object of ὁρεῦσα, and subject of the following participle" },
          { w:"λεπτύνοντα", lemma:"λεπτύνω", pos:"verb (participle)", parse:"present active participle, acc. sg. masc.",
            gloss:"make thin; (intr.) grow thin, waste away", note:"SUPPLEMENTARY participle with the verb of perceiving — ὁράω + participle is 'see that…', not 'see in order to'. So: 'seeing me growing thin'. From λεπτός 'fine, thin'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 70–71 ---- */
      {
        lines: "70–71",
        translation: "I shall tell her that my head and both my feet are throbbing, so that she may suffer, since I too am suffering.",
        greek: [
          { w:"φασῶ", lemma:"φημί (Doric fut. φασῶ)", pos:"verb", parse:"future active indicative, 1st singular (Doric φασῶ = Attic φήσω)",
            gloss:"say, declare, assert", note:"Doric ᾱ for η, and the contracted-type future again. It governs an accusative and infinitive: 'I shall say that my head … throbs'" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the, my", note:"with κεφαλάν" },
          { w:"κεφαλὰν", lemma:"κεφαλή, -ῆς, ἡ (Doric κεφαλά)", pos:"noun", parse:"acc. sg. fem.",
            gloss:"head", note:"SUBJECT ACCUSATIVE of the infinitive σφύσδειν. Doric ᾱ for η" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"joining the second subject" },
          { w:"τὼς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. masc. (Doric τώς = τούς)",
            gloss:"the, my", note:"the Doric accusative plural in -ώς, met all through Idyll 1 (ὀφθαλμώς, δρυμώς) and again at 9 and 41 here" },
          { w:"πόδας", lemma:"πούς, ποδός, ὁ", pos:"noun", parse:"acc. pl. masc.",
            gloss:"foot", note:"second subject accusative" },
          { w:"ἀμφοτέρως", lemma:"ἀμφότερος, -α, -ον", pos:"adjective", parse:"acc. pl. masc. (Doric -ως = Attic -ους)",
            gloss:"both", note:"with πόδας. The precision is comic: he is planning the details of his fake illness" },
          { w:"μευ", lemma:"ἐγώ (Doric/Ionic μευ = μου)", pos:"personal pronoun", parse:"gen. sg. (enclitic)",
            gloss:"of me, my", note:"possessive genitive with both κεφαλάν and πόδας" },
          { w:"σφύσδειν", lemma:"σφύζω (Doric σφύσδω)", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"throb, beat, pulse", note:"the infinitive of the indirect statement after φασῶ. Doric -σδ- for -ζ- once more (συρίσδεν 38, συμπαίσδεν 77, μουσίσδων 81)" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ὡς", lemma:"ὡς", pos:"conjunction", parse:"—",
            gloss:"so that, in order that", note:"purpose clause with the subjunctive ἀνιαθῇ — the third distinct ὡς-purpose construction in this poem (indicative at 55, subjunctive at 62 and here)" },
          { w:"ἀνιαθῇ", lemma:"ἀνιάω", pos:"verb", parse:"aorist passive subjunctive, 3rd singular",
            gloss:"grieve, distress; (pass.) be distressed, be vexed", note:"subjunctive in the purpose clause. The -θη- marks the aorist passive, and the subjunctive lengthens its vowel to -θῇ" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐπεὶ", lemma:"ἐπεί", pos:"conjunction", parse:"—",
            gloss:"since, seeing that", note:"causal ἐπεί, as at Idyll 1.135 and 148" },
          { w:"κἠγὼν", lemma:"καί + ἐγών (crasis κἠγών)", pos:"conjunction + personal pronoun", parse:"nom. sg., crasis of καὶ ἐγών",
            gloss:"I too", note:"crasis on the κἠν/κἠκ pattern, with καί meaning 'too'. It returns at 79" },
          { w:"ἀνιῶμαι", lemma:"ἀνιάω", pos:"verb", parse:"present middle/passive indicative, 1st singular",
            gloss:"be distressed, be vexed, suffer", note:"the same verb in the same voice as ἀνιαθῇ, put side by side to make the tit-for-tat exact: let her hurt because I hurt" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 72 ---- */
      {
        lines: "72",
        translation: "Cyclops, Cyclops, where have your wits flown off to?",
        greek: [
          { w:"ὦ", lemma:"ὦ", pos:"interjection", parse:"—",
            gloss:"O", note:"the turning-point of the song: he stops addressing Galateia and starts addressing himself" },
          { w:"Κύκλωψ", lemma:"Κύκλωψ, -ωπος, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Cyclops", note:"vocative, doubled for urgency. Dover compares Medea calling herself by name at Euripides, Medea 401f., and Demeas at Menander, Samia 349f. — self-address is the mark of a character pulling himself together" },
          { w:"Κύκλωψ", lemma:"Κύκλωψ, -ωπος, ὁ", pos:"proper noun", parse:"voc. sg. masc.",
            gloss:"Cyclops", note:"the name repeated" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"πᾷ", lemma:"πῇ (Doric πᾷ)", pos:"interrogative adverb", parse:"—",
            gloss:"where?, whither?", note:"Doric πᾷ = πῇ, the same word that opened Thyrsis' reproach at Idyll 1.66" },
          { w:"τὰς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. pl. fem.",
            gloss:"the, your", note:"with φρένας" },
          { w:"φρένας", lemma:"φρήν, φρενός, ἡ", pos:"noun", parse:"acc. pl. fem.",
            gloss:"midriff, heart, mind, wits", note:"ACCUSATIVE OF RESPECT with ἐκπεπότασαι — 'you have flown off as to your wits'. The same construction as τάκεται ὀφθαλμώς at Idyll 1.88 and καιόμενος … ψυχάν at 52 here" },
          { w:"ἐκπεπότασαι", lemma:"ἐκποτάομαι", pos:"verb", parse:"perfect middle/passive indicative, 2nd singular",
            gloss:"fly away, flutter off", note:"a PERFECT OF STATE: 'you have flown off and are still gone'. Reduplicated πε-ποτ-, from ποτάομαι 'flit'. It is the subject who has flown, with φρένας as accusative of respect — a very Greek way of saying 'you're out of your mind'" },
          { w:";", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 73 ---- */
      {
        lines: "73",
        translation: "If you were to go and plait cheese-baskets, and cut greenery",
        greek: [
          { w:"αἴ", lemma:"εἰ (Doric αἰ)", pos:"conjunction", parse:"—",
            gloss:"if", note:"Doric αἰ = εἰ, and with κ(α) + OPTATIVE it makes an unusual mixed condition — the κα belongs with the optatives πλέκοις, φέροις, ἔχοις, giving 'if you should …, you would …'" },
          { w:"κ᾽", lemma:"ἄν (Doric κα)", pos:"particle", parse:"elided κα",
            gloss:"(modal particle)", note:"Doric κα = ἄν. Note that it is doing double duty: the protasis with the optative, and the apodosis ἔχοις with τάχα κα in the next line" },
          { w:"ἐνθὼν", lemma:"ἔρχομαι (Doric aor. part. ἐνθών = ἐλθών)", pos:"verb (participle)", parse:"aorist active participle, nom. sg. masc.",
            gloss:"go, come", note:"Dover: 'go and …', i.e. from here. The idiom of a participle of motion plus a main verb — English says 'go and do', Greek subordinates the going. Doric ν for λ" },
          { w:"ταλάρως", lemma:"τάλαρος, -ου, ὁ", pos:"noun", parse:"acc. pl. masc. (Doric -ως = Attic -ους)",
            gloss:"basket; cheese-basket, crate", note:"object of πλέκοις. The wicker baskets in which curds are pressed — practical work, set against the fantasy of gills and swimming" },
          { w:"τε", lemma:"τε", pos:"particle (enclitic)", parse:"—",
            gloss:"and", note:"postpositive, joining this clause to the next: τε … καί" },
          { w:"πλέκοις", lemma:"πλέκω", pos:"verb", parse:"present active optative, 2nd singular",
            gloss:"plait, weave, twine", note:"optative in the protasis with κα. The same verb the goatherd of Idyll 1.52 used for the boy plaiting his cricket-cage" },
          { w:"καὶ", lemma:"καί", pos:"conjunction", parse:"—",
            gloss:"and", note:"answering τε" },
          { w:"θαλλὸν", lemma:"θαλλός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"young shoot, green branch, foliage", note:"object of ἀμάσας — leafy fodder cut for the lambs" },
          { w:"ἀμάσας", lemma:"ἀμάω", pos:"verb (participle)", parse:"aorist active participle, nom. sg. masc.",
            gloss:"reap, mow, cut", note:"aorist, so prior to φέροις: cut first, then carry. Not to be confused with ἀμάω 'gather' or the middle 'reap for oneself'" },
        ]
      },

      /* ---- 74 ---- */
      {
        lines: "74",
        translation: "and carry it to the lambs, you would very likely have a great deal more sense.",
        greek: [
          { w:"ταῖς", lemma:"ὁ, ἡ, τό", pos:"article", parse:"dat. pl. fem.",
            gloss:"the", note:"with ἄρνεσσι" },
          { w:"ἄρνεσσι", lemma:"ἀρήν, ἀρνός, ὁ/ἡ", pos:"noun", parse:"dat. pl. (epic -εσσι = -σι)",
            gloss:"lamb", note:"indirect object of φέροις. The epic dative plural in -εσσι, as σμάνεσσι at Idyll 1.107" },
          { w:"φέροις", lemma:"φέρω", pos:"verb", parse:"present active optative, 2nd singular",
            gloss:"carry, bring", note:"the third optative of the protasis, still governed by the κ᾽ of 73" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"τάχα", lemma:"τάχα", pos:"adverb", parse:"—",
            gloss:"quickly; probably, very likely", note:"with κα it is 'probably, I daresay' rather than 'quickly' — the sense the particle forces" },
          { w:"κα", lemma:"ἄν (Doric κα)", pos:"particle", parse:"—",
            gloss:"(modal particle)", note:"Doric κα = ἄν, now marking the APODOSIS: ἔχοις + κα is a potential optative, 'you would have'" },
          { w:"πολὺ", lemma:"πολύς, πολλή, πολύ", pos:"adjective (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"much, by far", note:"adverbial accusative intensifying the comparative μᾶλλον — 'far more'" },
          { w:"μᾶλλον", lemma:"μάλα (compar. μᾶλλον)", pos:"adverb", parse:"—",
            gloss:"more, rather", note:"the comparative adverb of μάλα; πολὺ μᾶλλον is a fixed intensifier" },
          { w:"ἔχοις", lemma:"ἔχω", pos:"verb", parse:"present active optative, 2nd singular",
            gloss:"have, hold", note:"POTENTIAL optative with κα, the apodosis of the condition begun at 73" },
          { w:"νῶν", lemma:"νόος, -ου, ὁ (= νοῦς, Doric νῶν)", pos:"noun", parse:"acc. sg. masc.",
            gloss:"mind, sense, understanding", note:"object of ἔχοις. Doric contracts νόον to νῶν where Attic gives νοῦν — the -οο- closing to -ω rather than -ου. 'Have more sense' is exactly the English idiom" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 75–76 ---- */
      {
        lines: "75–76",
        translation: "Milk the one that is there. Why chase the one that runs away? You will find another Galateia, perhaps a fairer one.",
        greek: [
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the (one who)", note:"article + participle, an attributive phrase with the noun left out" },
          { w:"παρεοῖσαν", lemma:"πάρειμι (Doric part. παρεοῖσα)", pos:"verb (participle)", parse:"present active participle, acc. sg. fem. (Doric -οισα = Attic -οῦσα)",
            gloss:"be present, be at hand; (part.) the one available", note:"Dover: supply ὄϊν or αἶγα — 'milk the ewe that is there'. The metaphor is delightfully down-to-earth, and παρών in this sense means 'available'. Uncontracted παρ-εο- with the Doric -οισα" },
          { w:"ἄμελγε", lemma:"ἀμέλγω", pos:"verb", parse:"present active imperative, 2nd singular",
            gloss:"milk", note:"imperative to himself. The same word the goatherd used to Thyrsis at Idyll 1.151, and there too of an actual goat" },
          { w:"·", punct:true, nospaceBefore:true },
          { w:"τί", lemma:"τίς, τί", pos:"interrogative pronoun (adverbial)", parse:"acc. sg. neut. as adverb",
            gloss:"why?", note:"adverbial accusative" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the (one who)", note:"article + participle again, balancing τὰν παρεοῖσαν" },
          { w:"φεύγοντα", lemma:"φεύγω", pos:"verb (participle)", parse:"present active participle, acc. sg. masc.",
            gloss:"flee, run away", note:"Dover: despite Galateia's sex the participle is MASCULINE, because the utterance is generalizing — 'the one who runs away', anybody. A proverb has no gender. The verb is the φεύγεις of 24 and 30, now turned into a maxim" },
          { w:"διώκεις", lemma:"διώκω", pos:"verb", parse:"present active indicative, 2nd singular",
            gloss:"pursue, chase, hunt", note:"the standard pairing φεύγω/διώκω, pursuer and pursued — a commonplace of erotic poetry from Sappho onwards" },
          { w:";", punct:true, nospaceBefore:true },
          { w:"εὑρησεῖς", lemma:"εὑρίσκω (Doric fut. εὑρησεῖς)", pos:"verb", parse:"future active indicative, 2nd singular (Doric εὑρησεῖς = Attic εὑρήσεις)",
            gloss:"find, discover", note:"Doric contracted-type future — the same verb whose aorist εὗρε closed the prologue at 17, and whose infinitive εὑρεῖν set the problem at 4" },
          { w:"Γαλάτειαν", lemma:"Γαλάτεια, -ας, ἡ", pos:"proper noun", parse:"acc. sg. fem.",
            gloss:"Galateia", note:"object of εὑρησεῖς — the name used as a common noun, 'a Galateia', which is why ἄλλαν can follow" },
          { w:"ἴσως", lemma:"ἴσος, -η, -ον (adv. ἴσως)", pos:"adverb", parse:"—",
            gloss:"perhaps, probably; equally", note:"'perhaps' — the sense in which the adverb of ἴσος 'equal' is normally used" },
          { w:"καὶ", lemma:"καί", pos:"adverb", parse:"—",
            gloss:"even", note:"'even a fairer one'" },
          { w:"καλλίον᾽", lemma:"καλός, -ή, -όν (compar. καλλίων)", pos:"adjective", parse:"acc. sg. fem. (comparative; elided καλλίονα)",
            gloss:"fairer, more beautiful", note:"with ἄλλαν. The comparative of καλός is irregular — καλλίων, κάλλιστος, on the stem καλλ-" },
          { w:"ἄλλαν", lemma:"ἄλλος, -η, -ο", pos:"adjective", parse:"acc. sg. fem. (Doric -αν = Attic -ην)",
            gloss:"other, another", note:"with Γαλάτειαν understood — 'another (Galateia), a fairer one'" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 77–78 ---- */
      {
        lines: "77–78",
        translation: "Many girls invite me to play with them through the night, and they all giggle whenever I answer them.",
        greek: [
          { w:"πολλαὶ", lemma:"πολύς, πολλή, πολύ", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"many", note:"with κόραι, emphatic by position at the head of the line" },
          { w:"συμπαίσδεν", lemma:"συμπαίζω (Doric συμπαίσδω)", pos:"verb (infinitive)", parse:"present active infinitive (Doric -εν = Attic -ειν)",
            gloss:"play with, sport with, join in play", note:"TWO Doric features, as with συρίσδεν at 38: -σδ- for -ζ-, and the infinitive in -εν. Complementary with κέλονται" },
          { w:"με", lemma:"ἐγώ", pos:"personal pronoun", parse:"acc. sg. (enclitic)",
            gloss:"me", note:"object of κέλονται and subject of the infinitive" },
          { w:"κόραι", lemma:"κόρη, -ης, ἡ (Doric κόρα)", pos:"noun", parse:"nom. pl. fem.",
            gloss:"girl, maiden", note:"subject of κέλονται" },
          { w:"τὰν", lemma:"ὁ, ἡ, τό (Doric τάν = τήν)", pos:"article", parse:"acc. sg. fem.",
            gloss:"the", note:"with νύκτα" },
          { w:"νύκτα", lemma:"νύξ, νυκτός, ἡ", pos:"noun", parse:"acc. sg. fem.",
            gloss:"night", note:"ACCUSATIVE OF DURATION, 'all night long' — the same case-usage as at 44, and to be contrasted with the genitive νυκτός at 40" },
          { w:"κέλονται", lemma:"κέλομαι", pos:"verb", parse:"present middle indicative, 3rd plural",
            gloss:"urge, bid, invite, call on", note:"an epic deponent taking an accusative of the person and an infinitive of the thing urged" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"κιχλίζοντι", lemma:"κιχλίζω", pos:"verb", parse:"present active indicative, 3rd plural (Doric -ντι = Attic -ουσι)",
            gloss:"giggle, titter, laugh", note:"the Doric 3rd plural -ντι, as γελᾶντι and βομβεῦντι in Idyll 1. Dover: the girls giggle, as well they might, when Polyphemus takes their teasing seriously — and he knows they are teasing, but tries at 79 to tell himself otherwise" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"πᾶσαι", lemma:"πᾶς, πᾶσα, πᾶν", pos:"adjective", parse:"nom. pl. fem.",
            gloss:"all", note:"with the subject of κιχλίζοντι — 'all of them'" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ἐπεί", lemma:"ἐπεί", pos:"conjunction", parse:"—",
            gloss:"when, whenever", note:"with κ᾽ + subjunctive = ἐπειδάν, an indefinite temporal clause — the same construction as at Idyll 1.90" },
          { w:"κ᾽", lemma:"ἄν (Doric κα)", pos:"particle", parse:"elided κα",
            gloss:"(modal particle)", note:"Doric κα = ἄν, and the reason ὑπακούσω is subjunctive" },
          { w:"αὐταῖς", lemma:"αὐτός, -ή, -ό", pos:"personal pronoun", parse:"dat. pl. fem.",
            gloss:"them", note:"DATIVE with ὑπακούσω — verbs of listening and obeying take the dative of the person heeded" },
          { w:"ὑπακούσω", lemma:"ὑπακούω", pos:"verb", parse:"aorist active subjunctive, 1st singular",
            gloss:"listen to, answer, heed, obey (+ dat.)", note:"subjunctive in the ἐπεί κα clause — identical in form to the future indicative, so the κα is your only evidence, exactly as with σπείσω at Idyll 1.144" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      /* ---- 79 ---- */
      {
        lines: "79",
        translation: "Clearly, on land at any rate, I too am somebody.",
        greek: [
          { w:"δῆλον", lemma:"δῆλος, -η, -ον", pos:"adjective", parse:"nom. sg. neut.",
            gloss:"clear, evident, plain", note:"impersonal with an understood ἐστί: 'it is clear that…'. δῆλον ὅτι hardened into a single adverb δηλονότι, 'obviously'" },
          { w:"ὅτ᾽", lemma:"ὅτι", pos:"conjunction", parse:"elided ὅτι",
            gloss:"that", note:"Dover: this is certainly ὅτι here, and the elision of ὅτι is exceedingly rare — which is what settles the same form at 54" },
          { w:"ἐν", lemma:"ἐν", pos:"preposition", parse:"+ dative",
            gloss:"in, on", note:"of place where" },
          { w:"τᾷ", lemma:"ὁ, ἡ, τό (Doric τᾷ = τῇ)", pos:"article", parse:"dat. sg. fem.",
            gloss:"the", note:"with γᾷ. Doric ᾱ for η" },
          { w:"γᾷ", lemma:"γῆ, γῆς, ἡ (Doric γᾶ)", pos:"noun", parse:"dat. sg. fem.",
            gloss:"earth, land, ground", note:"governed by ἐν. 'On land' — the implied contrast is with the sea, where Galateia lives and he counts for nothing" },
          { w:"κἠγών", lemma:"καί + ἐγών (crasis κἠγών)", pos:"conjunction + personal pronoun", parse:"nom. sg., crasis of καὶ ἐγών",
            gloss:"I too", note:"crasis, with καί meaning 'too' — 'I as well as anyone else'. The same form as at 71" },
          { w:"τις", lemma:"τις, τι", pos:"indefinite pronoun", parse:"nom. sg. masc. (enclitic)",
            gloss:"someone, somebody of consequence", note:"Dover: the usage is different from τις at Idyll 1.85, and is like the English 'I'm SOMEBODY' = 'I'm important'. The indefinite pronoun used absolutely to mean a person of consequence" },
          { w:"φαίνομαι", lemma:"φαίνω (mid./pass. φαίνομαι)", pos:"verb", parse:"present middle/passive indicative, 1st singular",
            gloss:"appear, seem, show oneself", note:"PERSONAL construction with the infinitive — φαίνομαι + inf. is 'I seem to be', against φαίνομαι + participle 'I am plainly'. The nominative τις agrees with the subject" },
          { w:"ἦμεν", lemma:"εἰμί (Doric inf. ἦμεν = εἶναι)", pos:"verb (infinitive)", parse:"present active infinitive",
            gloss:"to be", note:"the Doric infinitive again, as at 50. It closes the song on a note of wounded self-persuasion" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      },

      {
        translation: "[Polyphemus' song ends here; the poet speaks again, closing the frame he opened at 17–18.]",
        greek: [
          { w:"—", punct:true }
        ]
      },

      /* ---- 80–81 ---- */
      {
        lines: "80–81",
        translation: "So it was that Polyphemus shepherded his love by making music, and he got through it more easily than if he had paid gold.",
        greek: [
          { w:"οὕτω", lemma:"οὕτω(ς)", pos:"adverb", parse:"—",
            gloss:"thus, in this way", note:"picking up the οὕτω γοῦν of line 7 and closing the ring: the poem ends where its argument began" },
          { w:"τοι", lemma:"σύ (Doric/epic τοι = σοι)", pos:"personal pronoun", parse:"dat. sg. (enclitic)",
            gloss:"you see, I tell you", note:"here the ethic dative, addressed back to Nikias — 'so you see'. The poet turns from the story to his correspondent" },
          { w:"Πολύφαμος", lemma:"Πολύφημος, -ου, ὁ (Doric Πολύφαμος)", pos:"proper noun", parse:"nom. sg. masc.",
            gloss:"Polyphemus", note:"subject, named in full for the last time. Doric ᾱ for η" },
          { w:"ἐποίμαινεν", lemma:"ποιμαίνω", pos:"verb", parse:"imperfect active indicative, 3rd singular",
            gloss:"tend a flock, shepherd; (metaph.) tend, manage", note:"the poem's best joke, and it is a metaphor: he SHEPHERDED his love, treated it as livestock to be managed. The verb was literal at 65. Imperfect of the long process" },
          { w:"τὸν", lemma:"ὁ, ἡ, τό", pos:"article", parse:"acc. sg. masc.",
            gloss:"the", note:"with ἔρωτα" },
          { w:"ἔρωτα", lemma:"ἔρως, -ωτος, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"love, desire, passion", note:"object of ἐποίμαινεν, and the word the poem opened with at line 1" },
          { w:"μουσίσδων", lemma:"μουσίζω (Doric μουσίσδω)", pos:"verb (participle)", parse:"present active participle, nom. sg. masc.",
            gloss:"make music, sing, practise the Muses' art", note:"the instrumental participle giving the means — 'by making music'. Doric -σδ- for -ζ-, and the verb is built straight on Μοῦσα, so it answers the ταὶ Πιερίδες of line 3: the remedy was the Muses all along" },
          { w:",", punct:true, nospaceBefore:true },
          { w:"ῥᾷον", lemma:"ῥᾴδιος, -α, -ον (compar. ῥᾴων, adv. ῥᾷον)", pos:"adjective (adverbial comparative)", parse:"acc. sg. neut. as adverb",
            gloss:"more easily", note:"comparative neuter as adverb, answering the superlative ῥάιστα of line 7 and the οὐ ῥᾴδιον of line 4 — the three forms of one word map the whole argument" },
          { w:"δὲ", lemma:"δέ", pos:"particle", parse:"—",
            gloss:"and", note:"connective" },
          { w:"διᾶγ᾽", lemma:"διάγω", pos:"verb", parse:"imperfect active indicative, 3rd singular (Doric διᾶγε = Attic διῆγε; elided)",
            gloss:"pass one's time, get through life", note:"the verb of line 7 repeated verbatim to close the ring. Doric ᾱ for η in the augment" },
          { w:"ἢ", lemma:"ἤ", pos:"conjunction", parse:"—",
            gloss:"than", note:"the ἤ of comparison after ῥᾷον, here introducing a whole clause rather than a single word" },
          { w:"εἰ", lemma:"εἰ", pos:"conjunction", parse:"—",
            gloss:"if", note:"ἢ εἰ, 'than if' — an elliptical comparison: 'more easily than (he would have got through it) if…'" },
          { w:"χρυσὸν", lemma:"χρυσός, -οῦ, ὁ", pos:"noun", parse:"acc. sg. masc.",
            gloss:"gold", note:"object of ἔδωκεν — the doctors' fee. The last word of the argument turns back to Nikias the physician: song is the cheaper cure" },
          { w:"ἔδωκεν", lemma:"δίδωμι (aor. ἔδωκα)", pos:"verb", parse:"aorist active indicative, 3rd singular",
            gloss:"give, pay", note:"the κ-aorist of δίδωμι, one of the three verbs (δίδωμι, τίθημι, ἵημι) that form their aorist this way. Indicative in an unreal comparison, as often after ἢ εἰ" },
          { w:".", punct:true, nospaceBefore:true }
        ]
      }

    ]
  }

];

if (typeof module !== "undefined") module.exports = { READINGS };

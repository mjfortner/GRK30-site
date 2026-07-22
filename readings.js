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
    id: "theoc1-1-56",
    title: "Idyll 1.1–56",
    citation: "Theocritus, Idyll 1.1–56 — Thyrsis and the goatherd; the carved cup (Doric)",
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
      }

    ]
  }

];

if (typeof module !== "undefined") module.exports = { READINGS };

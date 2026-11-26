import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  id: 'lektion-01-personalpronomen',
  title: {
    fr: 'Les pronoms personnels',
    de: 'Personalpronomen',
    ar: 'الضمائر الشخصية',
    en: 'Personal pronouns',
  },
  subtitle: {
    fr: 'ich, du, er, sie, es, wir, ihr, sie et Sie',
    de: 'ich, du, er, sie, es, wir, ihr, sie und Sie',
    ar: 'ich و du و er و sie و es و wir و ihr و sie و Sie',
    en: 'ich, du, er, sie, es, wir, ihr, sie and Sie',
  },
  objective: {
    fr: 'Apprendre à remplacer une personne ou une chose par le pronom personnel correct.',
    de: 'Personen und Dinge mit dem passenden Personalpronomen ersetzen.',
    ar: 'تعلّم تعويض الأشخاص والأشياء بالضمير الشخصي المناسب.',
    en: 'Learn to replace a person or a thing with the correct personal pronoun.',
  },
  blocks: [
{
  "type": "paragraph",
  "id": "refonte-theorie",
  "title": {
    "fr": "Comprendre et appliquer la règle",
    "de": "Die Regel verstehen und anwenden",
    "ar": "فهم القاعدة وتطبيقها",
    "en": "Understand and apply the rule"
  },
  "text": {
    "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
    "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
    "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
    "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
  }
},
{
  "type": "examples",
  "id": "refonte-exemples",
  "title": {
    "fr": "Exemples traduits",
    "de": "Übersetzte Beispiele",
    "ar": "أمثلة مترجمة",
    "en": "Translated examples"
  },
  "items": [
    {
      "id": "refonte-1",
      "german": "Ich lerne Deutsch.",
      "context": {
        "fr": "J’apprends l’allemand.",
        "de": "Ich lerne Deutsch.",
        "ar": "أتعلم الألمانية.",
        "en": "I learn German."
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    },
    {
      "id": "refonte-2",
      "german": "Du wohnst hier.",
      "context": {
        "fr": "Tu habites ici.",
        "de": "Du wohnst hier.",
        "ar": "أنت تسكن هنا.",
        "en": "You live here."
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    },
    {
      "id": "refonte-3",
      "german": "Er arbeitet.",
      "context": {
        "fr": "Il travaille.",
        "de": "Er arbeitet.",
        "ar": "هو يعمل.",
        "en": "He works."
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    },
    {
      "id": "refonte-4",
      "german": "Sie arbeitet.",
      "context": {
        "fr": "Elle travaille.",
        "de": "Sie arbeitet.",
        "ar": "هي تعمل.",
        "en": "She works."
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    },
    {
      "id": "refonte-5",
      "german": "Es ist klein.",
      "context": {
        "fr": "Il est petit (objet neutre).",
        "de": "Es ist klein.",
        "ar": "إنه صغير (اسم محايد).",
        "en": "It is small."
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    },
    {
      "id": "refonte-6",
      "german": "Wir lernen.",
      "context": {
        "fr": "Nous apprenons.",
        "de": "Wir lernen.",
        "ar": "نحن نتعلم.",
        "en": "We learn."
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    },
    {
      "id": "refonte-7",
      "german": "Ihr lernt.",
      "context": {
        "fr": "Vous apprenez (familier).",
        "de": "Ihr lernt.",
        "ar": "أنتم تتعلمون.",
        "en": "You all learn."
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    },
    {
      "id": "refonte-8",
      "german": "Sie lernen.",
      "context": {
        "fr": "Ils apprennent.",
        "de": "Sie lernen.",
        "ar": "هم يتعلمون.",
        "en": "They learn."
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    },
    {
      "id": "refonte-9",
      "german": "Lernen Sie Deutsch?",
      "context": {
        "fr": "Apprenez-vous l’allemand ?",
        "de": "Lernen Sie Deutsch?",
        "ar": "هل تتعلم الألمانية؟ (رسمي)",
        "en": "Do you learn German?"
      },
      "explanation": {
        "fr": "Le pronom sujet remplace le nom et commande le verbe. Choisissez ich pour le locuteur, du pour un interlocuteur familier, ihr pour plusieurs, Sie pour la politesse. Pour un objet, reprenez le genre grammatical du nom : der Tisch → er, die Lampe → sie, das Buch → es.",
        "de": "Das Subjektpronomen ersetzt das Nomen und bestimmt das Verb. Ich bezeichnet den Sprecher, du eine vertraute Person, ihr mehrere, Sie die höfliche Anrede. Bei Sachen zählt das grammatische Geschlecht: der Tisch → er, die Lampe → sie, das Buch → es.",
        "ar": "ضمير الفاعل يحدد تصريف الفعل. ich للمتكلم وdu للمخاطب المفرد وihr للجمع وSie للاحترام. للأشياء نعتمد جنس الاسم النحوي: der Tisch → er، die Lampe → sie، das Buch → es.",
        "en": "The subject pronoun replaces a noun and controls agreement. Use ich for the speaker, du for one familiar addressee, ihr for several, Sie for formal address. For things use grammatical gender: der Tisch → er, die Lampe → sie, das Buch → es."
      }
    }
  ]
},

    {
      type: 'paragraph',
      id: 'intro',
      title: {
        fr: 'À quoi servent les pronoms personnels ?',
        de: 'Wozu braucht man Personalpronomen?',
        ar: 'ما فائدة الضمائر الشخصية؟',
        en: 'What are personal pronouns used for?',
      },
      text: {
        fr: 'Les pronoms personnels remplacent un nom ou désignent les personnes qui parlent, les personnes auxquelles on parle et les personnes ou les choses dont on parle.',
        de: 'Personalpronomen ersetzen ein Nomen oder bezeichnen die Personen, die sprechen, angesprochen werden oder von denen man spricht.',
        ar: 'الضمائر الشخصية تعوّض الاسم أو تشير إلى من يتكلم، ومن نوجّه إليه الكلام، ومن نتحدث عنه أو عنها.',
        en: 'Personal pronouns replace a noun or refer to the people speaking, being spoken to, or being spoken about.',
      },
    },
    {
      type: 'table',
      id: 'persons',
      title: {
        fr: 'Les trois personnes',
        de: 'Die drei Personen',
        ar: 'الأشخاص الثلاثة',
        en: 'The three grammatical persons',
      },
      headers: [
        { fr: 'Personne', de: 'Person', ar: 'الشخص', en: 'Person' },
        { fr: 'Singulier', de: 'Singular', ar: 'المفرد', en: 'Singular' },
        { fr: 'Pluriel', de: 'Plural', ar: 'الجمع', en: 'Plural' },
      ],
      rows: [
        {
          id: 'first',
          cells: [
            { fr: '1re personne : je / nous', de: '1. Person: Sprecher/in', ar: 'المتكلم', en: '1st person: speaker' },
            { fr: 'ich', de: 'ich', ar: 'ich', en: 'ich' },
            { fr: 'wir', de: 'wir', ar: 'wir', en: 'wir' },
          ],
        },
        {
          id: 'second',
          cells: [
            { fr: '2e personne : tu / vous', de: '2. Person: angesprochene Person', ar: 'المخاطَب', en: '2nd person: addressee' },
            { fr: 'du / Sie', de: 'du / Sie', ar: 'du / Sie', en: 'du / Sie' },
            { fr: 'ihr / Sie', de: 'ihr / Sie', ar: 'ihr / Sie', en: 'ihr / Sie' },
          ],
        },
        {
          id: 'third',
          cells: [
            { fr: '3e personne : il / elle / on / ils', de: '3. Person: besprochene Person oder Sache', ar: 'الغائب', en: '3rd person: person or thing spoken about' },
            { fr: 'er / sie / es', de: 'er / sie / es', ar: 'er / sie / es', en: 'er / sie / es' },
            { fr: 'sie', de: 'sie', ar: 'sie', en: 'sie' },
          ],
        },
      ],
    },
    {
      type: 'callout',
      id: 'formal-sie',
      tone: 'tip',
      title: {
        fr: 'Attention à Sie et sie',
        de: 'Achtung: Sie oder sie?',
        ar: 'انتبه إلى Sie و sie',
        en: 'Watch out: Sie or sie?',
      },
      text: {
        fr: 'Sie avec une majuscule est la forme de politesse (« vous »). sie avec une minuscule peut signifier « elle » ou « ils/elles ». Le contexte permet de comprendre le sens.',
        de: 'Sie mit großem S ist die Höflichkeitsform. sie mit kleinem s bedeutet „elle“ oder „ils/elles“. Der Kontext zeigt die Bedeutung.',
        ar: 'Sie بحرف كبير هي صيغة الاحترام. أما sie بحرف صغير فقد تعني «هي» أو «هم/هن». السياق يحدد المعنى.',
        en: 'Sie with a capital S is the formal form of address. Lowercase sie can mean “she” or “they”. Context tells you which meaning is intended.',
      },
    },
    {
      type: 'table',
      id: 'grammatical-gender',
      title: {
        fr: 'Les pronoms pour remplacer les choses',
        de: 'Personalpronomen für Dinge',
        ar: 'الضمائر التي تعوّض الأشياء',
        en: 'Pronouns used for things',
      },
      headers: [
        { fr: 'Article', de: 'Artikel', ar: 'أداة التعريف', en: 'Article' },
        { fr: 'Nom', de: 'Nomen', ar: 'الاسم', en: 'Noun' },
        { fr: 'Pronom', de: 'Pronomen', ar: 'الضمير', en: 'Pronoun' },
      ],
      rows: [
        { id: 'spoon', cells: [{ fr: 'der', de: 'der', ar: 'der', en: 'der' }, { fr: 'Löffel (cuillère)', de: 'Löffel', ar: 'Löffel (ملعقة)', en: 'Löffel (spoon)' }, { fr: 'er', de: 'er', ar: 'er', en: 'er' }] },
        { id: 'fork', cells: [{ fr: 'die', de: 'die', ar: 'die', en: 'die' }, { fr: 'Gabel (fourchette)', de: 'Gabel', ar: 'Gabel (شوكة)', en: 'Gabel (fork)' }, { fr: 'sie', de: 'sie', ar: 'sie', en: 'sie' }] },
        { id: 'knife', cells: [{ fr: 'das', de: 'das', ar: 'das', en: 'das' }, { fr: 'Messer (couteau)', de: 'Messer', ar: 'Messer (سكين)', en: 'Messer (knife)' }, { fr: 'es', de: 'es', ar: 'es', en: 'es' }] },
        { id: 'cups', cells: [{ fr: 'die (pluriel)', de: 'die (Plural)', ar: 'die (الجمع)', en: 'die (plural)' }, { fr: 'Tassen (tasses)', de: 'Tassen', ar: 'Tassen (أكواب)', en: 'Tassen (cups)' }, { fr: 'sie', de: 'sie', ar: 'sie', en: 'sie' }] },
      ],
    },
    {
      type: 'examples',
      id: 'examples',
      title: {
        fr: 'Exemples',
        de: 'Beispiele',
        ar: 'أمثلة',
        en: 'Examples',
      },
      items: [
        {
          id: 'example-1',
          context: { fr: 'Herr Gupta', de: 'Herr Gupta', ar: 'السيد Gupta', en: 'Mr Gupta' },
          german: 'Er kommt aus Indien.',
          explanation: { fr: 'Herr Gupta est un homme : on utilise er.', de: 'Herr Gupta ist ein Mann: Wir verwenden er.', ar: 'السيد Gupta رجل، لذلك نستعمل er.', en: 'Mr Gupta is a man, so we use er.' },
        },
        {
          id: 'example-2',
          context: { fr: 'Frau Kioka', de: 'Frau Kioka', ar: 'السيدة Kioka', en: 'Ms Kioka' },
          german: 'Sie kommt aus Japan.',
          explanation: { fr: 'Frau Kioka est une femme : on utilise sie.', de: 'Frau Kioka ist eine Frau: Wir verwenden sie.', ar: 'السيدة Kioka امرأة، لذلك نستعمل sie.', en: 'Ms Kioka is a woman, so we use sie.' },
        },
        {
          id: 'example-3',
          context: { fr: 'Herr Gupta et Frau Kioka', de: 'Herr Gupta und Frau Kioka', ar: 'السيد Gupta والسيدة Kioka', en: 'Mr Gupta and Ms Kioka' },
          german: 'Sie lernen Deutsch.',
          explanation: { fr: 'On parle de deux personnes : sie signifie « ils/elles ».', de: 'Wir sprechen über zwei Personen: sie ist die 3. Person Plural.', ar: 'نتحدث عن شخصين: sie تعني «هم/هن».', en: 'We are talking about two people: sie means “they”.' },
        },
        {
          id: 'example-4',
          context: { fr: 'Der Löffel', de: 'Der Löffel', ar: 'Der Löffel (الملعقة)', en: 'Der Löffel (the spoon)' },
          german: 'Er ist sauber.',
          explanation: { fr: 'Löffel est masculin avec der : on utilise er.', de: 'Löffel steht mit der: Wir verwenden er.', ar: 'كلمة Löffel تأتي مع der، لذلك نستعمل er.', en: 'Löffel takes der, so we use er.' },
        },
      ],
    },
    {
      type: 'image',
      id: 'lesson-visual',
      src: '/assets/slots/lesson.personalpronomen.jpg',
      alt: {
        fr: 'Support visuel sur les pronoms personnels allemands',
        de: 'Lernbild zu den deutschen Personalpronomen',
        ar: 'صورة تعليمية حول الضمائر الشخصية الألمانية',
        en: 'Learning visual about German personal pronouns',
      },
      caption: {
        fr: 'Repère visuel du chapitre',
        de: 'Visuelle Übersicht zum Kapitel',
        ar: 'ملخص بصري للدرس',
        en: 'Visual overview of the lesson',
      },
    },
  ],
}

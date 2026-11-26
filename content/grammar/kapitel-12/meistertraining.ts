import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-12-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Verbes modaux",
      "de": "Modalverben",
      "ar": "الأفعال الناقصة",
      "en": "Modal verbs"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-01-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Sie wollen eine Deutschlandreise machen."
      },
      {
        "id": "kapitel-12-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Müssen Sie Tickets kaufen und Hotels buchen.",
          "Sie müssen Tickets kaufen und Hotels buchen.",
          "Sie Tickets müssen kaufen und Hotels buchen.",
          "Sie Tickets kaufen und Hotels buchen müssen."
        ]
      },
      {
        "id": "kapitel-12-ubung-01-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la question grammaticalement correcte.",
          "de": "Wählen Sie die grammatisch richtige Frage.",
          "ar": "اختر السؤال الصحيح نحوياً.",
          "en": "Choose the grammatically correct question."
        },
        "selection": "single",
        "options": [
          "Wann sollen sie fahren?",
          "Wann sie sollen fahren?",
          "Sollen wann sie fahren?",
          "Wann sie fahren sollen?"
        ]
      },
      {
        "id": "kapitel-12-ubung-01-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Sie ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Sie“.",
          "ar": "رتّب المجموعات بدءاً بـ « Sie ».",
          "en": "Reorder the groups. Start with “Sie”."
        },
        "tokens": [
          "fahren.",
          "wollen",
          "Sie",
          "im Sommer"
        ]
      },
      {
        "id": "kapitel-12-ubung-01-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Sie ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Sie“.",
          "ar": "رتّب المجموعات بدءاً بـ « Sie ».",
          "en": "Reorder the groups. Start with “Sie”."
        },
        "tokens": [
          "können",
          "Wochen",
          "in Deutschland",
          "zwei",
          "Sie",
          "nur",
          "bleiben."
        ]
      },
      {
        "id": "kapitel-12-ubung-01-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Dann müssen sie schon wieder nach Hause fahren."
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Verbes séparables",
      "de": "Trennbare Verben",
      "ar": "الأفعال المنفصلة",
      "en": "Separable verbs"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-02-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "ziehen Wir nach Hamburg um."
      },
      {
        "id": "kapitel-12-ubung-02-q02",
        "position": 2,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque élément à sa forme correcte.",
          "de": "Ordnen Sie jedem Element die richtige Form zu.",
          "ar": "صل كل عنصر بصيغته الصحيحة.",
          "en": "Match each item to its correct form."
        },
        "items": [
          {
            "id": "kapitel-12-ubung-02-q02-m1",
            "label": "Wir müssen morgen"
          },
          {
            "id": "kapitel-12-ubung-02-q02-m2",
            "label": "Der Zug fährt um acht Uhr"
          },
          {
            "id": "kapitel-12-ubung-02-q02-m3",
            "label": "Ich habe gestern Brot"
          }
        ],
        "options": [
          "ab.",
          "gekauft.",
          "arbeiten."
        ]
      },
      {
        "id": "kapitel-12-ubung-02-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Werfen Wir viele Sachen weg.",
          "Wir viele Sachen weg werfen.",
          "Wir viele werfen Sachen weg.",
          "Wir werfen viele Sachen weg."
        ]
      },
      {
        "id": "kapitel-12-ubung-02-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Wer ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Wer“.",
          "ar": "رتّب المجموعات بدءاً بـ « Wer ».",
          "en": "Reorder the groups. Start with “Wer”."
        },
        "tokens": [
          "die Gläser",
          "ein?",
          "Wer",
          "das Geschirr",
          "packt",
          "und"
        ]
      },
      {
        "id": "kapitel-12-ubung-02-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Nächste Woche ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Nächste Woche“.",
          "ar": "رتّب المجموعات بدءاً بـ « Nächste Woche ».",
          "en": "Reorder the groups. Start with “Nächste Woche”."
        },
        "tokens": [
          "am Montag",
          "Nächste Woche",
          "wir",
          "aus.",
          "ziehen"
        ]
      },
      {
        "id": "kapitel-12-ubung-02-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Am Dienstag ziehen wir in die neue Wohnung ein."
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Être et deux verbes",
      "de": "Sein und Verb + Verb",
      "ar": "sein وفعلان",
      "en": "Sein and verb combinations"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-03-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Das Wetter ist heute wunderbar."
      },
      {
        "id": "kapitel-12-ubung-03-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Gestern der Himmel auch blau war.",
          "War gestern der Himmel auch blau.",
          "Gestern war der Himmel auch blau.",
          "Gestern der war Himmel auch blau."
        ]
      },
      {
        "id": "kapitel-12-ubung-03-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Ist hoffentlich es morgen auch genauso schön.",
          "Hoffentlich es ist morgen auch genauso schön.",
          "Hoffentlich ist es morgen auch genauso schön.",
          "Hoffentlich es morgen auch genauso schön ist."
        ]
      },
      {
        "id": "kapitel-12-ubung-03-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Am Samstagmorgen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Am Samstagmorgen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Am Samstagmorgen ».",
          "en": "Reorder the groups. Start with “Am Samstagmorgen”."
        },
        "tokens": [
          "Am Samstagmorgen",
          "sie",
          "der Stadt",
          "in",
          "gehen",
          "einkaufen."
        ]
      },
      {
        "id": "kapitel-12-ubung-03-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Nachmittags ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Nachmittags“.",
          "ar": "رتّب المجموعات بدءاً بـ « Nachmittags ».",
          "en": "Reorder the groups. Start with “Nachmittags”."
        },
        "tokens": [
          "spazieren.",
          "sie",
          "Nachmittags",
          "im Park",
          "gehen"
        ]
      },
      {
        "id": "kapitel-12-ubung-03-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Die Kinder gehen mit ihren Freunden schwimmen."
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Nom et verbe",
      "de": "Nomen und Verb",
      "ar": "اسم وفعل",
      "en": "Noun and verb"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-04-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "und Pamela Chris sprechen schon gut Deutsch."
      },
      {
        "id": "kapitel-12-ubung-04-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Chris am Abend gerne Gitarre spielt.",
          "Chris am spielt Abend gerne Gitarre.",
          "Spielt Chris am Abend gerne Gitarre.",
          "Chris spielt am Abend gerne Gitarre."
        ]
      },
      {
        "id": "kapitel-12-ubung-04-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Er oft stundenlang Musik hört.",
          "Er oft hört stundenlang Musik.",
          "Er hört oft stundenlang Musik.",
          "Hört Er oft stundenlang Musik."
        ]
      },
      {
        "id": "kapitel-12-ubung-04-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Im Sommer ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Im Sommer“.",
          "ar": "رتّب المجموعات بدءاً بـ « Im Sommer ».",
          "en": "Reorder the groups. Start with “Im Sommer”."
        },
        "tokens": [
          "möchte",
          "Chris",
          "Urlaub",
          "machen.",
          "Im Sommer"
        ]
      },
      {
        "id": "kapitel-12-ubung-04-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Pamela ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Pamela“.",
          "ar": "رتّب المجموعات بدءاً بـ « Pamela ».",
          "en": "Reorder the groups. Start with “Pamela”."
        },
        "tokens": [
          "möchte",
          "im Urlaub",
          "Spanisch",
          "lernen.",
          "Pamela"
        ]
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Passé composé",
      "de": "Perfekt",
      "ar": "الماضي التام",
      "en": "Perfect tense"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-05-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Am letzten Wochenende ist Anna nach Berlin gefahren."
      },
      {
        "id": "kapitel-12-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Sie ihre hat Freunde besucht.",
          "Sie hat ihre Freunde besucht.",
          "Sie ihre Freunde besucht hat.",
          "Hat Sie ihre Freunde besucht."
        ]
      },
      {
        "id": "kapitel-12-ubung-05-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Am sind Samstagabend sie ins Theater gegangen.",
          "Am Samstagabend sind sie ins Theater gegangen.",
          "Sind am Samstagabend sie ins Theater gegangen.",
          "Am Samstagabend sie ins Theater gegangen sind."
        ]
      },
      {
        "id": "kapitel-12-ubung-05-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Am Sonntag ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Am Sonntag“.",
          "ar": "رتّب المجموعات بدءاً بـ « Am Sonntag ».",
          "en": "Reorder the groups. Start with “Am Sonntag”."
        },
        "tokens": [
          "gegessen.",
          "Am Sonntag",
          "einem",
          "sie",
          "Restaurant",
          "haben",
          "am Wannsee",
          "in"
        ]
      },
      {
        "id": "kapitel-12-ubung-05-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Sie ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Sie“.",
          "ar": "رتّب المجموعات بدءاً بـ « Sie ».",
          "en": "Reorder the groups. Start with “Sie”."
        },
        "tokens": [
          "sehr",
          "nach Hause",
          "gekommen.",
          "spät",
          "erst",
          "ist",
          "Sie"
        ]
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Compléter les structures",
      "de": "Was passt",
      "ar": "إكمال التراكيب",
      "en": "Complete structures"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — Er hat heute ___. (arbeiten)",
          "de": "Wählen Sie die richtige Form. — Er hat heute ___. (arbeiten)",
          "ar": "اختر الصيغة الصحيحة. — Er hat heute ___. (arbeiten)",
          "en": "Choose the correct form. — Er hat heute ___. (arbeiten)"
        },
        "selection": "single",
        "options": [
          "arbeiten",
          "gearbeitet",
          "arbeitet",
          "arbeite"
        ]
      },
      {
        "id": "kapitel-12-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "Er muss heute ___. (aufräumen)",
        "blanks": 1
      },
      {
        "id": "kapitel-12-ubung-06-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — Er lernt heute ___. (Sprache)",
          "de": "Wählen Sie die richtige Form. — Er lernt heute ___. (Sprache)",
          "ar": "اختر الصيغة الصحيحة. — Er lernt heute ___. (Sprache)",
          "en": "Choose the correct form. — Er lernt heute ___. (Sprache)"
        },
        "selection": "single",
        "options": [
          "Deutsche",
          "Deutscher",
          "deutschen",
          "Deutsch"
        ]
      },
      {
        "id": "kapitel-12-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "Er kauft heute ___. (einkaufen)",
        "blanks": 1
      },
      {
        "id": "kapitel-12-ubung-06-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "Er geht heute ___. (essen)",
        "blanks": 1
      },
      {
        "id": "kapitel-12-ubung-06-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "Er ist heute ___. (kommen)",
        "blanks": 1
      },
      {
        "id": "kapitel-12-ubung-06-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — Er sieht heute ___. (fernsehen)",
          "de": "Wählen Sie die richtige Form. — Er sieht heute ___. (fernsehen)",
          "ar": "اختر الصيغة الصحيحة. — Er sieht heute ___. (fernsehen)",
          "en": "Choose the correct form. — Er sieht heute ___. (fernsehen)"
        },
        "selection": "single",
        "options": [
          "ferngesehen",
          "gesehen",
          "fern",
          "fernsehen"
        ]
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Varier les phrases",
      "de": "Variieren",
      "ar": "تنويع الجمل",
      "en": "Vary sentences"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-07-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Gestern habe ich meinem Bruder eine CD geschenkt."
      },
      {
        "id": "kapitel-12-ubung-07-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Gestern Abend eine Band auf dem Marktplatz gespielt hat.",
          "Gestern Abend hat eine Band auf dem Marktplatz gespielt.",
          "Hat gestern Abend eine Band auf dem Marktplatz gespielt.",
          "Gestern hat Abend eine Band auf dem Marktplatz gespielt."
        ]
      },
      {
        "id": "kapitel-12-ubung-07-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Heute wollen Schüler im Park ein Konzert geben.",
          "Heute Schüler wollen im Park ein Konzert geben.",
          "Wollen heute Schüler im Park ein Konzert geben.",
          "Heute Schüler im Park ein Konzert geben wollen."
        ]
      },
      {
        "id": "kapitel-12-ubung-07-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Heute ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Heute“.",
          "ar": "رتّب المجموعات بدءاً بـ « Heute ».",
          "en": "Reorder the groups. Start with “Heute”."
        },
        "tokens": [
          "einen Kuchen",
          "ich",
          "Heute",
          "mit.",
          "bringe",
          "zum Geburtstag"
        ]
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Lire les phrases",
      "de": "Sätze lesen",
      "ar": "قراءة الجمل",
      "en": "Read sentences"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-08-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "holt Er seine Kinder von der Schule ab."
      },
      {
        "id": "kapitel-12-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "selection": "multiple",
        "options": [
          "Mia morgen arbeiten muss.",
          "Morgen Mia muss arbeiten.",
          "Morgen muss Mia arbeiten.",
          "Mia muss morgen arbeiten."
        ]
      },
      {
        "id": "kapitel-12-ubung-08-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Sie einen Kartoffelsalat zur Party mit bringen.",
          "Bringen Sie einen Kartoffelsalat zur Party mit.",
          "Sie einen bringen Kartoffelsalat zur Party mit.",
          "Sie bringen einen Kartoffelsalat zur Party mit."
        ]
      },
      {
        "id": "kapitel-12-ubung-08-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Sie ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Sie“.",
          "ar": "رتّب المجموعات بدءاً بـ « Sie ».",
          "en": "Reorder the groups. Start with “Sie”."
        },
        "tokens": [
          "Sie",
          "Kartoffelsalat",
          "gemacht.",
          "heute Mittag",
          "haben",
          "den"
        ]
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Structure verbale",
      "de": "Satzklammer",
      "ar": "الإطار الفعلي",
      "en": "Verbal bracket"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-09-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — Ich muss morgen ___. (arbeiten)",
          "de": "Wählen Sie die richtige Form. — Ich muss morgen ___. (arbeiten)",
          "ar": "اختر الصيغة الصحيحة. — Ich muss morgen ___. (arbeiten)",
          "en": "Choose the correct form. — Ich muss morgen ___. (arbeiten)"
        },
        "selection": "single",
        "options": [
          "arbeitet",
          "arbeite",
          "arbeitest",
          "arbeiten"
        ]
      },
      {
        "id": "kapitel-12-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "Er hat gestern ___. (lernen)",
        "blanks": 1
      },
      {
        "id": "kapitel-12-ubung-09-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — Wir stehen früh ___. (aufstehen)",
          "de": "Wählen Sie die richtige Form. — Wir stehen früh ___. (aufstehen)",
          "ar": "اختر الصيغة الصحيحة. — Wir stehen früh ___. (aufstehen)",
          "en": "Choose the correct form. — Wir stehen früh ___. (aufstehen)"
        },
        "selection": "single",
        "options": [
          "aufgestanden",
          "steht auf",
          "auf",
          "aufstehen"
        ]
      }
    ]
  },
  {
    "id": "kapitel-12-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Test final",
      "de": "Abschlusstest",
      "ar": "اختبار نهائي",
      "en": "Final test"
    },
    "description": {
      "fr": "Ordre des mots 2",
      "de": "Wörter im Satz 2",
      "ar": "ترتيب الكلمات 2",
      "en": "Word order 2"
    },
    "questions": [
      {
        "id": "kapitel-12-ubung-10-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "möchte Heute ich Deutsch lernen."
      },
      {
        "id": "kapitel-12-ubung-10-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Gestern ich Brot gekauft habe.",
          "Gestern ich habe Brot gekauft.",
          "Habe gestern ich Brot gekauft.",
          "Gestern habe ich Brot gekauft."
        ]
      },
      {
        "id": "kapitel-12-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Morgen ich rufe dich an.",
          "Morgen ich dich an rufe.",
          "Morgen rufe ich dich an.",
          "Rufe morgen ich dich an."
        ]
      }
    ]
  }
]

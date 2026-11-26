import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-42-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "01 – Funktionen erkennen",
      "de": "01 – Funktionen erkennen",
      "ar": "01 – Funktionen erkennen",
      "en": "01 – Funktionen erkennen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-01-q01",
        "position": 1,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque élément à la bonne forme.",
          "de": "Ordnen Sie jedem Element die richtige Form zu.",
          "ar": "صل كل عنصر بالصيغة الصحيحة.",
          "en": "Match each item to the correct form."
        },
        "items": [
          {
            "id": "item-1",
            "label": "Grund"
          },
          {
            "id": "item-2",
            "label": "Inhalt einer Aussage"
          },
          {
            "id": "item-3",
            "label": "Bedingung"
          },
          {
            "id": "item-4",
            "label": "Frage nach einem Zeitpunkt"
          }
        ],
        "options": [
          "wenn",
          "dass",
          "wann",
          "weil"
        ]
      },
      {
        "id": "kapitel-42-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich bleibe zu Hause, ___ ich krank bin. (Grund)",
          "de": "Wählen Sie die richtige Antwort. Ich bleibe zu Hause, ___ ich krank bin. (Grund)",
          "ar": "اختر الإجابة الصحيحة. Ich bleibe zu Hause, ___ ich krank bin. (Grund)",
          "en": "Choose the correct answer. Ich bleibe zu Hause, ___ ich krank bin. (Grund)"
        },
        "selection": "single",
        "options": [
          "weil",
          "dass",
          "wenn",
          "wann"
        ]
      },
      {
        "id": "kapitel-42-ubung-01-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich hoffe, ___ du kommst. (Inhalt)",
          "de": "Wählen Sie die richtige Antwort. Ich hoffe, ___ du kommst. (Inhalt)",
          "ar": "اختر الإجابة الصحيحة. Ich hoffe, ___ du kommst. (Inhalt)",
          "en": "Choose the correct answer. Ich hoffe, ___ du kommst. (Inhalt)"
        },
        "selection": "single",
        "options": [
          "dass",
          "wenn",
          "wann",
          "weil"
        ]
      },
      {
        "id": "kapitel-42-ubung-01-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. ___ du Zeit hast, besuchen wir Oma. (Bedingung)",
          "de": "Wählen Sie die richtige Antwort. ___ du Zeit hast, besuchen wir Oma. (Bedingung)",
          "ar": "اختر الإجابة الصحيحة. ___ du Zeit hast, besuchen wir Oma. (Bedingung)",
          "en": "Choose the correct answer. ___ du Zeit hast, besuchen wir Oma. (Bedingung)"
        },
        "selection": "single",
        "options": [
          "Weil",
          "Wenn",
          "Dass",
          "Wann"
        ]
      },
      {
        "id": "kapitel-42-ubung-01-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Wann ist ein Fragewort."
      },
      {
        "id": "kapitel-42-ubung-01-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Dass drückt immer einen Grund aus."
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "02 – Verbstellung",
      "de": "02 – Verbstellung",
      "ar": "02 – Verbstellung",
      "en": "02 – Verbstellung"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-02-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich komme nicht, weil ___.",
          "de": "Wählen Sie die richtige Antwort. Ich komme nicht, weil ___.",
          "ar": "اختر الإجابة الصحيحة. Ich komme nicht, weil ___.",
          "en": "Choose the correct answer. Ich komme nicht, weil ___."
        },
        "selection": "single",
        "options": [
          "bin ich krank",
          "ich krank bin",
          "ich bin krank",
          "krank ich bin"
        ]
      },
      {
        "id": "kapitel-42-ubung-02-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich glaube, dass ___.",
          "de": "Wählen Sie die richtige Antwort. Ich glaube, dass ___.",
          "ar": "اختر الإجابة الصحيحة. Ich glaube, dass ___.",
          "en": "Choose the correct answer. Ich glaube, dass ___."
        },
        "selection": "single",
        "options": [
          "sie heute kommt",
          "heute sie kommt",
          "kommt sie heute",
          "sie kommt heute"
        ]
      },
      {
        "id": "kapitel-42-ubung-02-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er bleibt hier, wenn ___.",
          "de": "Wählen Sie die richtige Antwort. Er bleibt hier, wenn ___.",
          "ar": "اختر الإجابة الصحيحة. Er bleibt hier, wenn ___.",
          "en": "Choose the correct answer. Er bleibt hier, wenn ___."
        },
        "selection": "single",
        "options": [
          "hat er Zeit",
          "er hat Zeit",
          "er Zeit hat",
          "Zeit hat er"
        ]
      },
      {
        "id": "kapitel-42-ubung-02-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Sie sagt, dass ___.",
          "de": "Wählen Sie die richtige Antwort. Sie sagt, dass ___.",
          "ar": "اختر الإجابة الصحيحة. Sie sagt, dass ___.",
          "en": "Choose the correct answer. Sie sagt, dass ___."
        },
        "selection": "single",
        "options": [
          "sie arbeitet muss",
          "muss sie arbeiten",
          "sie muss arbeiten",
          "sie arbeiten muss"
        ]
      },
      {
        "id": "kapitel-42-ubung-02-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "In einem weil-Nebensatz steht das finite Verb standardsprachlich am Ende."
      },
      {
        "id": "kapitel-42-ubung-02-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Ich glaube, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Ich glaube, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Ich glaube, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Ich glaube, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "recht hast.",
          "du",
          "Ich glaube,",
          "dass"
        ]
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "03 – Disko und Arztbesuch",
      "de": "03 – Disko und Arztbesuch",
      "ar": "03 – Disko und Arztbesuch",
      "en": "03 – Disko und Arztbesuch"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-03-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Ich glaube, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Ich glaube, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Ich glaube, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Ich glaube, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "gerne in die Disko geht.",
          "er",
          "dass",
          "Ich glaube,"
        ]
      },
      {
        "id": "kapitel-42-ubung-03-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Er geht in die Disko, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Er geht in die Disko, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Er geht in die Disko, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Er geht in die Disko, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "er",
          "weil",
          "Er geht in die Disko,",
          "tanzen will."
        ]
      },
      {
        "id": "kapitel-42-ubung-03-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Es macht ihm besonders viel Spaß, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Es macht ihm besonders viel Spaß, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Es macht ihm besonders viel Spaß, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Es macht ihm besonders viel Spaß, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "wenn",
          "Es macht ihm besonders viel Spaß,",
          "mitkommen.",
          "seine Freunde"
        ]
      },
      {
        "id": "kapitel-42-ubung-03-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Er geht zum Arzt, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Er geht zum Arzt, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Er geht zum Arzt, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Er geht zum Arzt, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "Er geht zum Arzt,",
          "weil",
          "Rückenschmerzen hat.",
          "er"
        ]
      },
      {
        "id": "kapitel-42-ubung-03-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Der Arzt sagt, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Der Arzt sagt, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Der Arzt sagt, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Der Arzt sagt, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "Gymnastik machen soll.",
          "Der Arzt sagt,",
          "dass",
          "er"
        ]
      },
      {
        "id": "kapitel-42-ubung-03-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Er kann auch ein Medikament nehmen, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Er kann auch ein Medikament nehmen, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Er kann auch ein Medikament nehmen, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Er kann auch ein Medikament nehmen, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "wenn",
          "sehr stark sind.",
          "die Schmerzen",
          "Er kann auch ein Medikament nehmen,"
        ]
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "04 – Antworten auf Warum",
      "de": "04 – Antworten auf Warum",
      "ar": "04 – Antworten auf Warum",
      "en": "04 – Antworten auf Warum"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-04-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Weil … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Weil … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Weil … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Weil … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "von meinem Handy",
          "leer ist.",
          "der Akku",
          "Weil"
        ]
      },
      {
        "id": "kapitel-42-ubung-04-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Weil … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Weil … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Weil … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Weil … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "arbeiten musste.",
          "Weil",
          "ich",
          "so lange"
        ]
      },
      {
        "id": "kapitel-42-ubung-04-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Weil … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Weil … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Weil … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Weil … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "ist.",
          "Weil",
          "es",
          "so warm"
        ]
      },
      {
        "id": "kapitel-42-ubung-04-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Weil … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Weil … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Weil … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Weil … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "fernsieht.",
          "gerade",
          "sie",
          "Weil"
        ]
      },
      {
        "id": "kapitel-42-ubung-04-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Weil … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Weil … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Weil … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Weil … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "ich",
          "stören wollte.",
          "Weil",
          "nicht"
        ]
      },
      {
        "id": "kapitel-42-ubung-04-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Warum kommst du so spät? (lange arbeiten müssen)",
          "de": "Wählen Sie die richtige Antwort. Warum kommst du so spät? (lange arbeiten müssen)",
          "ar": "اختر الإجابة الصحيحة. Warum kommst du so spät? (lange arbeiten müssen)",
          "en": "Choose the correct answer. Warum kommst du so spät? (lange arbeiten müssen)"
        },
        "selection": "single",
        "options": [
          "Weil ich musste lange arbeiten.",
          "Weil ich lange gearbeitet muss.",
          "Weil ich lange arbeiten musste.",
          "Dass ich lange arbeiten musste."
        ]
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "05 – Vermutungen über Susi",
      "de": "05 – Vermutungen über Susi",
      "ar": "05 – Vermutungen über Susi",
      "en": "05 – Vermutungen über Susi"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-05-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich glaube, dass sie krank ___. (sein)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-05-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich denke, dass sie keine Lust ___. (haben)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich glaube, dass ihr Kind krank ___. (sein)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich denke, dass sie arbeiten ___. (müssen)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-05-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich glaube, dass sie lange schlafen ___. (wollen)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-05-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich denke, dass sie ___. (einkaufen)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-05-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich glaube, dass sie ihren Mann vom Flughafen ___. (abholen)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-05-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich denke, dass sie den Kurs ___ ___. (vergessen, Perfekt)",
        "blanks": 2
      },
      {
        "id": "kapitel-42-ubung-05-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich glaube, dass sie den Bus ___ ___. (verpassen, Perfekt)",
        "blanks": 2
      },
      {
        "id": "kapitel-42-ubung-05-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich denke, dass sie ___ ein bisschen ___. (sich ausruhen)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "06 – Marians Gewohnheiten",
      "de": "06 – Marians Gewohnheiten",
      "ar": "06 – Marians Gewohnheiten",
      "en": "06 – Marians Gewohnheiten"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-06-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Er geht joggen, wenn die Sonne ___. (scheinen)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Er schläft lange, wenn er Urlaub ___. (haben)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-06-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Er zieht sich schick an, wenn er sich mit seiner Freundin ___. (treffen)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Er ärgert sich, wenn er länger arbeiten ___. (müssen)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-06-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Man darf ihn nicht stören, wenn er gerade ___. (fernsehen)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-06-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Wenn die Sonne scheint beschreibt hier eine wiederkehrende Situation."
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "07 – Nebensatz zuerst",
      "de": "07 – Nebensatz zuerst",
      "ar": "07 – Nebensatz zuerst",
      "en": "07 – Nebensatz zuerst"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-07-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Wenn die Sonne scheint, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Wenn die Sonne scheint, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Wenn die Sonne scheint, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Wenn die Sonne scheint, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "Wenn die Sonne scheint,",
          "joggen.",
          "geht",
          "er"
        ]
      },
      {
        "id": "kapitel-42-ubung-07-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Wenn er Urlaub hat, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Wenn er Urlaub hat, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Wenn er Urlaub hat, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Wenn er Urlaub hat, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "schläft",
          "er",
          "lange.",
          "Wenn er Urlaub hat,"
        ]
      },
      {
        "id": "kapitel-42-ubung-07-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Wenn er sich mit seiner Freundin trifft, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Wenn er sich mit seiner Freundin trifft, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Wenn er sich mit seiner Freundin trifft, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Wenn er sich mit seiner Freundin trifft, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "er sich",
          "schick an.",
          "Wenn er sich mit seiner Freundin trifft,",
          "zieht"
        ]
      },
      {
        "id": "kapitel-42-ubung-07-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Wenn er länger arbeiten muss, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Wenn er länger arbeiten muss, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Wenn er länger arbeiten muss, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Wenn er länger arbeiten muss, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "ärgert",
          "er",
          "Wenn er länger arbeiten muss,",
          "sich."
        ]
      },
      {
        "id": "kapitel-42-ubung-07-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Wenn er gerade fernsieht, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Wenn er gerade fernsieht, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Wenn er gerade fernsieht, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Wenn er gerade fernsieht, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "Wenn er gerade fernsieht,",
          "darf",
          "nicht stören.",
          "man ihn"
        ]
      },
      {
        "id": "kapitel-42-ubung-07-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Wenn du Zeit hast, ___.",
          "de": "Wählen Sie die richtige Antwort. Wenn du Zeit hast, ___.",
          "ar": "اختر الإجابة الصحيحة. Wenn du Zeit hast, ___.",
          "en": "Choose the correct answer. Wenn du Zeit hast, ___."
        },
        "selection": "single",
        "options": [
          "komme ich vorbei",
          "ich komme vorbei",
          "ich vorbei komme",
          "komme vorbei ich"
        ]
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "08 – Wann oder wenn?",
      "de": "08 – Wann oder wenn?",
      "ar": "08 – Wann oder wenn?",
      "en": "08 – Wann oder wenn?"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-08-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "___ sind Sie geboren?",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-08-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "___ ich morgen fit bin, können wir schwimmen gehen. (Bedingung)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-08-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "___ kommst du?",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Vielleicht komme ich am Samstag, ___ ich Zeit habe. (Bedingung)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-08-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "___ beginnt die Diskussion?",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-08-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "___ alle da sind, können wir anfangen. (Zeitpunkt als Bedingung)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-08-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich weiß nicht, ___ er kommt. (indirekte Frage nach der Uhrzeit)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-08-q08",
        "position": 8,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases correctes.",
          "de": "Wählen Sie alle richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة.",
          "en": "Select all correct sentences."
        },
        "selection": "multiple",
        "options": [
          "Wenn kommt ihr?",
          "Wann kommt ihr?",
          "Wenn ihr kommt, kochen wir.",
          "Ich weiß nicht, wann ihr kommt.",
          "Ich weiß nicht, wenn ihr kommt. (Frage nach der Uhrzeit)"
        ]
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "09 – Brief an Lukas",
      "de": "09 – Brief an Lukas",
      "ar": "09 – Brief an Lukas",
      "en": "09 – Brief an Lukas"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-09-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich stehe erst dann auf, ___ ich Lust habe. (Zeit)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich hoffe, ___ du auch bald Urlaub bekommst. (Inhalt)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-09-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Denkst du, ___ das möglich ist? (Inhalt)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-09-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich möchte nach Spanien fahren, ___ ich dort Freunde habe. (Grund)",
        "blanks": 1
      },
      {
        "id": "kapitel-42-ubung-09-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Wenn du Zeit hast, … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Wenn du Zeit hast, … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Wenn du Zeit hast, … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Wenn du Zeit hast, … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "Wenn du Zeit hast,",
          "wir",
          "können",
          "zusammen reisen."
        ]
      },
      {
        "id": "kapitel-42-ubung-09-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Welche Antwort hat einen korrekten Nebensatz?",
          "de": "Wählen Sie die richtige Antwort. Welche Antwort hat einen korrekten Nebensatz?",
          "ar": "اختر الإجابة الصحيحة. Welche Antwort hat einen korrekten Nebensatz?",
          "en": "Choose the correct answer. Welche Antwort hat einen korrekten Nebensatz?"
        },
        "selection": "single",
        "options": [
          "Ich hoffe dass wir bald fahren können.",
          "Ich hoffe, dass wir bald fahren können.",
          "Ich hoffe, dass wir können bald fahren.",
          "Ich hoffe, weil wir bald können fahren."
        ]
      }
    ]
  },
  {
    "id": "kapitel-42-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "10 – Abschlusstest",
      "de": "10 – Abschlusstest",
      "ar": "10 – Abschlusstest",
      "en": "10 – Abschlusstest"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-42-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Ich frage mich, ___ der Kurs beginnt. Ich hoffe, ___ er um neun beginnt. (Zeitfrage / Inhalt)",
        "blanks": 2
      },
      {
        "id": "kapitel-42-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Sie bleibt zu Hause, weil sie morgen früh ___ ___. (aufstehen müssen, Präsens)",
        "blanks": 2
      },
      {
        "id": "kapitel-42-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Wenn die Schule geschlossen ist, ___. — Choisissez la forme ou la phrase correcte.",
          "de": "Wenn die Schule geschlossen ist, ___. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Wenn die Schule geschlossen ist, ___. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Wenn die Schule geschlossen ist, ___. — Choose the correct form or sentence."
        },
        "options": [
          "die Kinder zu Hause bleiben",
          "bleiben die Kinder zu Hause",
          "zu Hause die Kinder bleiben",
          "die Kinder bleiben zu Hause"
        ]
      },
      {
        "id": "kapitel-42-ubung-10-q04",
        "position": 4,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Er sagt, dass er hat den Schlüssel vergessen.",
          "Wenn ich Zeit habe, ich rufe dich an.",
          "Wenn ich Zeit habe, rufe ich dich an.",
          "Er sagt, dass er den Schlüssel vergessen hat."
        ]
      },
      {
        "id": "kapitel-42-ubung-10-q05",
        "position": 5,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque élément à la forme correspondante.",
          "de": "Ordnen Sie jedem Element die passende Form zu.",
          "ar": "اربط كل عنصر بالصيغة المناسبة.",
          "en": "Match each item to the corresponding form."
        },
        "items": [
          {
            "id": "0",
            "label": "Grund"
          },
          {
            "id": "1",
            "label": "Inhalt einer Aussage"
          },
          {
            "id": "2",
            "label": "Bedingung"
          },
          {
            "id": "3",
            "label": "Frage nach dem Zeitpunkt"
          }
        ],
        "options": [
          "wenn",
          "weil",
          "wann",
          "dass"
        ]
      },
      {
        "id": "kapitel-42-ubung-10-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Weil der Bus nicht kommt, … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Weil der Bus nicht kommt, … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Weil der Bus nicht kommt, … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Weil der Bus nicht kommt, … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "ein Taxi.",
          "wir",
          "Weil der Bus nicht kommt,",
          "nehmen"
        ]
      }
    ]
  }
]

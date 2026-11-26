import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-52-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "01 – Präfixe erkennen",
      "de": "01 – Präfixe erkennen",
      "ar": "01 – Präfixe erkennen",
      "en": "01 – Präfixe erkennen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-01-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases correctes.",
          "de": "Wählen Sie alle richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة.",
          "en": "Select all correct sentences."
        },
        "selection": "multiple",
        "options": [
          "aufräumen",
          "bezahlen",
          "empfehlen",
          "anrufen",
          "verbieten",
          "einladen",
          "ausmachen",
          "erzählen"
        ]
      },
      {
        "id": "kapitel-52-ubung-01-q02",
        "position": 2,
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
            "label": "anrufen"
          },
          {
            "id": "item-2",
            "label": "verbieten"
          },
          {
            "id": "item-3",
            "label": "empfehlen"
          },
          {
            "id": "item-4",
            "label": "aufräumen"
          },
          {
            "id": "item-5",
            "label": "erzählen"
          }
        ],
        "options": [
          "er-",
          "emp-",
          "ver-",
          "an-",
          "auf-"
        ]
      },
      {
        "id": "kapitel-52-ubung-01-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Einladen ist untrennbar."
      },
      {
        "id": "kapitel-52-ubung-01-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Bezahlen ist untrennbar."
      },
      {
        "id": "kapitel-52-ubung-01-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Welches Verb hat ein trennbares Präfix?  — Choisissez la forme ou la phrase correcte.",
          "de": "Welches Verb hat ein trennbares Präfix?  — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Welches Verb hat ein trennbares Präfix?  — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Welches Verb hat ein trennbares Präfix?  — Choose the correct form or sentence."
        },
        "options": [
          "ergeben",
          "vergeben",
          "begeben",
          "aufgeben"
        ]
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "02 – Alltagshandlungen",
      "de": "02 – Alltagshandlungen",
      "ar": "02 – Alltagshandlungen",
      "en": "02 – Alltagshandlungen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-02-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ die Rechnung. (bezahlen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ die Nachbarin zum Essen ___. (einladen)",
        "blanks": 2
      },
      {
        "id": "kapitel-52-ubung-02-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ die Firma ___. (anrufen)",
        "blanks": 2
      },
      {
        "id": "kapitel-52-ubung-02-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ das Zimmer ___. (aufräumen)",
        "blanks": 2
      },
      {
        "id": "kapitel-52-ubung-02-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ dem Kind das Fernsehen. (verbieten)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-02-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ der Kollegin ein Restaurant. (empfehlen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-02-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ die Geschichte. (erzählen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-02-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ die Lampe ___. (ausmachen)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "03 – Der schwierige Arbeitsweg",
      "de": "03 – Der schwierige Arbeitsweg",
      "ar": "03 – Der schwierige Arbeitsweg",
      "en": "03 – Der schwierige Arbeitsweg"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich bin ins Auto ___. (einsteigen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Das Auto ist nicht ___. (anspringen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich bin wieder ___. (aussteigen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe mich ___. (entscheiden)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe eine Fahrkarte ___. (bezahlen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Die Straßenbahn ist ___. (abfahren)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe bei der Arbeit ___. (anrufen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe meine Verspätung ___. (mitteilen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe es ___. (versuchen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Kein Taxi hat ___. (anhalten)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q11",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich bin zu spät ___. (ankommen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q12",
        "position": 12,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe alles ___. (erklären)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q13",
        "position": 13,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Mein Chef hat mich ___. (verstehen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-03-q14",
        "position": 14,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe mich ___. (entspannen)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "04 – Nebensätze mit wenn",
      "de": "04 – Nebensätze mit wenn",
      "ar": "04 – Nebensätze mit wenn",
      "en": "04 – Nebensätze mit wenn"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-04-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe Spaß, wenn ich ___. (fernsehen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Es ist gut, wenn du die Schuhe ___. (ausziehen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-04-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich finde es toll, wenn ihr Essen ___. (mitbringen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Man ist glücklich, wenn man im Lotto ___. (gewinnen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich hasse es, wenn ich im Büro ___. (einschlafen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-04-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Man hat Stress, wenn man sich um einen Job ___. (bewerben)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "05 – Keine Lust",
      "de": "05 – Keine Lust",
      "ar": "05 – Keine Lust",
      "en": "05 – Keine Lust"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-05-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe keine Lust, die Wohnung ___. (aufräumen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-05-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe keine Lust, die Arbeit ___. (beginnen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe keine Lust, die Waschmaschine ___. (anmachen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe keine Lust, die Kleidung ___. (abholen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-05-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe keine Lust, das Essen ___. (vorbereiten)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-05-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe keine Lust, die Kinder ___. (erziehen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-05-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe keine Lust, ___. (aufstehen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-05-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe keine Lust, die Situation ___. (erklären)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "06 – Urlaubsplanung",
      "de": "06 – Urlaubsplanung",
      "ar": "06 – Urlaubsplanung",
      "en": "06 – Urlaubsplanung"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-06-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe Lust, ___. (verreisen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Nach dem Preisvergleich habe ich mich für den Nachtzug ___. (entscheiden)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-06-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich plane, bald ___. (wegfahren)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Meine Nachbarin hat mir die Türkei ___. (empfehlen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-06-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe sofort ___. (anfangen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-06-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Dort ___ ich ___. (ausschlafen, Präsens)",
        "blanks": 2
      },
      {
        "id": "kapitel-52-ubung-06-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ mich. (erholen, Präsens)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-06-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich ___ Sehenswürdigkeiten. (besichtigen, Präsens)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "07 – Die verpasste Reise",
      "de": "07 – Die verpasste Reise",
      "ar": "07 – Die verpasste Reise",
      "en": "07 – Die verpasste Reise"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Als ich ___ bin, war es früh. (abfahren)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-07-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe die Wohnung ___. (verlassen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-07-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich dachte, dass ich mein Geld ___ hatte. (vergessen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-07-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Wir sind ___. (zurückfahren)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Dann habe ich mich ___. (erinnern)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-07-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich hatte das Geld doch ___. (mitnehmen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-07-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Wir sind wieder ___. (losfahren)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-07-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich hatte den Flug ___. (verpassen)",
        "blanks": 1
      },
      {
        "id": "kapitel-52-ubung-07-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Wenn ich das nächste Mal ___, passe ich auf. (wegfahren)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "08 – Formen im Vergleich",
      "de": "08 – Formen im Vergleich",
      "ar": "08 – Formen im Vergleich",
      "en": "08 – Formen im Vergleich"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-08-q01",
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
            "label": "einkaufen"
          },
          {
            "id": "item-2",
            "label": "bestellen"
          },
          {
            "id": "item-3",
            "label": "anrufen"
          },
          {
            "id": "item-4",
            "label": "verstehen"
          }
        ],
        "options": [
          "anzurufen",
          "zu verstehen",
          "zu bestellen",
          "einzukaufen"
        ]
      },
      {
        "id": "kapitel-52-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases correctes.",
          "de": "Wählen Sie alle richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة.",
          "en": "Select all correct sentences."
        },
        "selection": "multiple",
        "options": [
          "Ich versuche, einzukaufen.",
          "Ich muss einkaufen.",
          "Ich habe eingekauft.",
          "Ich muss einzukaufen.",
          "Ich habe geeinkauft."
        ]
      },
      {
        "id": "kapitel-52-ubung-08-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Er hat empfohlen ist richtig."
      },
      {
        "id": "kapitel-52-ubung-08-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Sie hat geerzählt ist richtig."
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "09 – Satzbau",
      "de": "09 – Satzbau",
      "ar": "09 – Satzbau",
      "en": "09 – Satzbau"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-52-ubung-09-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Heute … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Heute … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Heute … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Heute … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "kaufe",
          "ein.",
          "Heute",
          "ich"
        ]
      },
      {
        "id": "kapitel-52-ubung-09-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Ich … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "habe",
          "Ich",
          "bezahlt.",
          "die Rechnung"
        ]
      },
      {
        "id": "kapitel-52-ubung-09-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Ich bleibe zu Hause, … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich bleibe zu Hause, … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich bleibe zu Hause, … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich bleibe zu Hause, … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "weil ich",
          "Ich bleibe zu Hause,",
          "mich",
          "erholen muss."
        ]
      },
      {
        "id": "kapitel-52-ubung-09-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Ich … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "versuche,",
          "dich anzurufen.",
          "Ich"
        ]
      },
      {
        "id": "kapitel-52-ubung-09-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Wir … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Wir … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Wir … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Wir … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "morgen früh",
          "wollen",
          "Wir",
          "abfahren."
        ]
      }
    ]
  },
  {
    "id": "kapitel-52-ubung-10",
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
        "id": "kapitel-52-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Heute ___ er die Ware ___. (abholen, Präsens) Ich weiß, dass er sie morgen ___. (abholen, Präsens)",
        "blanks": 3
      },
      {
        "id": "kapitel-52-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Wir haben die Lieferung ___ (annehmen), aber den Preis noch nicht ___. (überprüfen)",
        "blanks": 2
      },
      {
        "id": "kapitel-52-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Ich hoffe, dich anzutreffen.",
          "Ich hoffe, dich zu antreffen.",
          "Er versucht, den Fehler erklärzuen.",
          "Er versucht, den Fehler zu erklären."
        ]
      },
      {
        "id": "kapitel-52-ubung-10-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "„Sie hat die Bestellung geerhalten.“"
      },
      {
        "id": "kapitel-52-ubung-10-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Ich weiß, … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich weiß, … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich weiß, … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich weiß, … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "um acht aufmacht.",
          "dass die Filiale",
          "Ich weiß,"
        ]
      }
    ]
  }
]

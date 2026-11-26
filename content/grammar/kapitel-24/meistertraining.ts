import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-24-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Satzklammer",
      "de": "Satzklammer",
      "ar": "Satzklammer",
      "en": "Satzklammer"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-01-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Er … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Er … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Er … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Er … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "am letzten Wochenende gearbeitet.",
          "Er",
          "hat"
        ]
      },
      {
        "id": "kapitel-24-ubung-01-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Ich … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "meine Freunde lange nicht gesehen.",
          "habe",
          "Ich"
        ]
      },
      {
        "id": "kapitel-24-ubung-01-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Was … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Was … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Was … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Was … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "du getrunken?",
          "hast",
          "Was"
        ]
      },
      {
        "id": "kapitel-24-ubung-01-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Habt … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Habt … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Habt … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Habt … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "schon die Zeitung gelesen?",
          "ihr",
          "Habt"
        ]
      },
      {
        "id": "kapitel-24-ubung-01-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Haben … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Haben … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Haben … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Haben … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "die Grammatik verstanden?",
          "Haben",
          "Sie"
        ]
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Infinitiv und Partizip",
      "de": "Infinitiv und Partizip",
      "ar": "Infinitiv und Partizip",
      "en": "Infinitiv und Partizip"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-02-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Wir … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Wir … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Wir … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Wir … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "haben",
          "ihn noch nicht gefragt.",
          "Wir"
        ]
      },
      {
        "id": "kapitel-24-ubung-02-q02",
        "position": 2,
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
            "label": "getrunken"
          },
          {
            "id": "1",
            "label": "gelernt"
          },
          {
            "id": "2",
            "label": "gelesen"
          },
          {
            "id": "3",
            "label": "gesehen"
          },
          {
            "id": "4",
            "label": "gegessen"
          }
        ],
        "options": [
          "lernen",
          "essen",
          "trinken",
          "sehen",
          "lesen"
        ]
      },
      {
        "id": "kapitel-24-ubung-02-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Er ___ gestern mit Freunden Deutsch gelernt. — Choisissez la forme ou la phrase correcte.",
          "de": "Er ___ gestern mit Freunden Deutsch gelernt. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Er ___ gestern mit Freunden Deutsch gelernt. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Er ___ gestern mit Freunden Deutsch gelernt. — Choose the correct form or sentence."
        },
        "options": [
          "haben",
          "hat",
          "habt",
          "hast"
        ]
      },
      {
        "id": "kapitel-24-ubung-02-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Sie (Singular) ___ die Zeitung ___. (lesen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-02-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Wir hat zusammen einen Film gesehen."
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Gestern und heute",
      "de": "Gestern und heute",
      "ar": "Gestern und heute",
      "en": "Gestern und heute"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-03-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Heute trinkt er Wasser. Gestern hat er Wasser ___. (trinken) — Choisissez la forme ou la phrase correcte.",
          "de": "Heute trinkt er Wasser. Gestern hat er Wasser ___. (trinken) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Heute trinkt er Wasser. Gestern hat er Wasser ___. (trinken) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Heute trinkt er Wasser. Gestern hat er Wasser ___. (trinken) — Choose the correct form or sentence."
        },
        "options": [
          "getrunken",
          "getrunkt",
          "getrinkt",
          "getrinken"
        ]
      },
      {
        "id": "kapitel-24-ubung-03-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Heute lernt sie Deutsch. Gestern ___ sie Deutsch ___. (lernen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-03-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Heute lesen wir Bücher. Gestern ___ wir die Zeitung ___. (lesen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-03-q04",
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
          "Gestern habe ich einen Film geseht.",
          "Heute gesehen ich einen Film.",
          "Gestern habe ich einen Film gesehen.",
          "Heute sehe ich einen Film."
        ]
      },
      {
        "id": "kapitel-24-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Heute esst ihr zu Hause. Gestern ___ ihr im Restaurant ___. (essen)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Fragen und Antworten",
      "de": "Fragen und Antworten",
      "ar": "Fragen und Antworten",
      "en": "Fragen und Antworten"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-04-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Was haben Sie gegessen? – Ich ___ eine Pizza ___. (essen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Was habt ihr getrunken? – Wir ___ Kaffee ___. (trinken)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-04-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Was hast du gelesen? – Ich habe die Zeitung ___. — Choisissez la forme ou la phrase correcte.",
          "de": "Was hast du gelesen? – Ich habe die Zeitung ___. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Was hast du gelesen? – Ich habe die Zeitung ___. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Was hast du gelesen? – Ich habe die Zeitung ___. — Choose the correct form or sentence."
        },
        "options": [
          "gelest",
          "geleset",
          "gelesen",
          "gelosen"
        ]
      },
      {
        "id": "kapitel-24-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Was hat Paul gesehen? – Er ___ einen Film ___. (sehen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Was haben Sie nicht verstanden? – Ich ___ das Wort nicht ___. (verstehen)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Eine Begegnung",
      "de": "Eine Begegnung",
      "ar": "Eine Begegnung",
      "en": "Eine Begegnung"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-05-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Er ___ eine Anzeige in der Zeitung ___. (lesen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-05-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Dann ___ er mit der Frau ___. (telefonieren)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Am Samstag ___ er die Frau ___. (treffen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Sie (beide) ___ in einem Café einen Cocktail ___. (trinken)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-05-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Sie (beide) haben viel ___. (essen) — Choisissez la forme ou la phrase correcte.",
          "de": "Sie (beide) haben viel ___. (essen) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Sie (beide) haben viel ___. (essen) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Sie (beide) haben viel ___. (essen) — Choose the correct form or sentence."
        },
        "options": [
          "geessen",
          "gegesset",
          "gegesst",
          "gegessen"
        ]
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Die Geschichte geht weiter",
      "de": "Die Geschichte geht weiter",
      "ar": "Die Geschichte geht weiter",
      "en": "Die Geschichte geht weiter"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-06-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Er ___ alles ___. (bezahlen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Sie (die Frau) ___ „Danke schön“ ___. (sagen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-06-q03",
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
          "Er hat mit ihr getelefoniert.",
          "Sie hat ihm gedankt.",
          "Sie haben ihm gedankt. (sie = die Frau)",
          "Er hat mit ihr telefoniert."
        ]
      },
      {
        "id": "kapitel-24-ubung-06-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Danach … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Danach … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Danach … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Danach … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "sie lange miteinander gesprochen.",
          "haben",
          "Danach"
        ]
      },
      {
        "id": "kapitel-24-ubung-06-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Ihr habt die Geschichte ___. (erzählen) — Choisissez la forme ou la phrase correcte.",
          "de": "Ihr habt die Geschichte ___. (erzählen) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ihr habt die Geschichte ___. (erzählen) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ihr habt die Geschichte ___. (erzählen) — Choose the correct form or sentence."
        },
        "options": [
          "erzählt",
          "erzählen",
          "geerzählt",
          "erzählen gehabt"
        ]
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Partizipformen",
      "de": "Partizipformen",
      "ar": "Partizipformen",
      "en": "Partizipformen"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Ich ___ gestern lange ___ und später ___. (arbeiten/einkaufen)",
        "blanks": 3
      },
      {
        "id": "kapitel-24-ubung-07-q02",
        "position": 2,
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
            "label": "aufmachen"
          },
          {
            "id": "1",
            "label": "besuchen"
          },
          {
            "id": "2",
            "label": "reparieren"
          },
          {
            "id": "3",
            "label": "schreiben"
          }
        ],
        "options": [
          "geschrieben",
          "besucht",
          "aufgemacht",
          "repariert"
        ]
      },
      {
        "id": "kapitel-24-ubung-07-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Die Kinder haben das Fenster geaufmacht."
      },
      {
        "id": "kapitel-24-ubung-07-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Du ___ die Frage ___, aber nicht ___. (lesen/verstehen)",
        "blanks": 3
      },
      {
        "id": "kapitel-24-ubung-07-q05",
        "position": 5,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Ihr habt auf den Bus gewartt.",
          "Wir haben den Bus verpasst.",
          "Ihr habt auf den Bus gewartet.",
          "Wir haben den Bus geverpasst."
        ]
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Alltag",
      "de": "Alltag",
      "ar": "Alltag",
      "en": "Alltag"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-08-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Gestern ___ ihr Oma ___ und ihr Blumen ___. (besuchen/schenken)",
        "blanks": 3
      },
      {
        "id": "kapitel-24-ubung-08-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Die Nachbarin ___ Brot ___ und Suppe ___. (kaufen/kochen)",
        "blanks": 3
      },
      {
        "id": "kapitel-24-ubung-08-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Wann … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Wann … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Wann … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Wann … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "Wann",
          "ihr den Tisch reserviert?",
          "habt"
        ]
      },
      {
        "id": "kapitel-24-ubung-08-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Ich habe gestern zwei E-Mails ___. (schreiben) — Choisissez la forme ou la phrase correcte.",
          "de": "Ich habe gestern zwei E-Mails ___. (schreiben) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ich habe gestern zwei E-Mails ___. (schreiben) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ich habe gestern zwei E-Mails ___. (schreiben) — Choose the correct form or sentence."
        },
        "options": [
          "geschriben",
          "geschreibt",
          "geschriebt",
          "geschrieben"
        ]
      },
      {
        "id": "kapitel-24-ubung-08-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Hast du die Nachricht verstanden?"
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Dialoge",
      "de": "Dialoge",
      "ar": "Dialoge",
      "en": "Dialoge"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-09-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "A: ___ du heute schon ___? B: Ja, ich habe Brot gegessen. (frühstücken)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "A: ___ ihr die Aufgabe ___? B: Ja, wir haben sie verstanden. (verstehen)",
        "blanks": 2
      },
      {
        "id": "kapitel-24-ubung-09-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Warum … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Warum … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Warum … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Warum … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "hat",
          "er den Termin vergessen?",
          "Warum"
        ]
      },
      {
        "id": "kapitel-24-ubung-09-q04",
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
          "Wir haben die Tür gezumacht.",
          "Sie hat den Brief geöffnet.",
          "Sie hat den Brief geöffnen.",
          "Wir haben die Tür zugemacht."
        ]
      },
      {
        "id": "kapitel-24-ubung-09-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "A: Was ___ Sie gestern ___? B: Ich habe einen Kuchen gebacken. (machen, höflich)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-24-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Abschlusstest",
      "de": "Abschlusstest",
      "ar": "Abschlusstest",
      "en": "Abschlusstest"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-24-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Meine Eltern ___ gestern Gäste ___ und viel ___. (einladen/kochen)",
        "blanks": 3
      },
      {
        "id": "kapitel-24-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Perfekt avec haben selon les indications.",
          "de": "Ergänzen Sie das Perfekt mit haben nach den Angaben.",
          "ar": "أكمل في البيرفكت باستخدام haben وفق التعليمات.",
          "en": "Complete the perfect with haben using the cues."
        },
        "sentence": "Du ___ das Buch ___, aber das Ende nicht ___. (lesen/verstehen)",
        "blanks": 3
      },
      {
        "id": "kapitel-24-ubung-10-q03",
        "position": 3,
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
            "label": "nehmen"
          },
          {
            "id": "1",
            "label": "denken"
          },
          {
            "id": "2",
            "label": "bringen"
          },
          {
            "id": "3",
            "label": "finden"
          }
        ],
        "options": [
          "gefunden",
          "gedacht",
          "gebracht",
          "genommen"
        ]
      },
      {
        "id": "kapitel-24-ubung-10-q04",
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
          "Was habt ihr bestellt?",
          "Was haben ihr bestellt?",
          "Hat er den Schlüssel gefunden?",
          "Hat er den Schlüssel gefindet?"
        ]
      },
      {
        "id": "kapitel-24-ubung-10-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Am Abend … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Am Abend … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Am Abend … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Am Abend … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "habe",
          "Am Abend",
          "ich meiner Schwester geschrieben."
        ]
      }
    ]
  }
]

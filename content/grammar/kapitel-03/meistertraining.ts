import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-03-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Dialogue : être",
      "de": "Sein – Dialog",
      "ar": "حوار sein",
      "en": "Being – dialogue"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-01-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Wie ___ Ihr Name?",
          "de": "Ergänzen Sie sein. — Wie ___ Ihr Name?",
          "ar": "أكمل باستعمال sein. — Wie ___ Ihr Name?",
          "en": "Complete with sein. — Wie ___ Ihr Name?"
        },
        "selection": "single",
        "options": [
          "haben",
          "sind",
          "bist",
          "ist"
        ]
      },
      {
        "id": "kapitel-03-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Mein Name ___ Misterek.",
          "de": "Ergänzen Sie sein. — Mein Name ___ Misterek.",
          "ar": "أكمل باستعمال sein. — Mein Name ___ Misterek.",
          "en": "Complete with sein. — Mein Name ___ Misterek."
        },
        "selection": "single",
        "options": [
          "ist",
          "bin",
          "tue",
          "weiß"
        ]
      },
      {
        "id": "kapitel-03-ubung-01-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "statement": "sind Sie neu hier?"
      },
      {
        "id": "kapitel-03-ubung-01-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Ich ___ schon ein Jahr in Hamburg.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-01-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "___ Sie Studentin?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-01-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ich ___ Schülerin.",
          "de": "Ergänzen Sie sein. — Ich ___ Schülerin.",
          "ar": "أكمل باستعمال sein. — Ich ___ Schülerin.",
          "en": "Complete with sein. — Ich ___ Schülerin."
        },
        "selection": "single",
        "options": [
          "bin",
          "magst",
          "bist",
          "möchtest"
        ]
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Construire des phrases",
      "de": "Sätze mit sein",
      "ar": "جمل مع sein",
      "en": "Sentences with sein"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-02-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ich ___ 15 Jahre alt.",
          "de": "Ergänzen Sie sein. — Ich ___ 15 Jahre alt.",
          "ar": "أكمل باستعمال sein. — Ich ___ 15 Jahre alt.",
          "en": "Complete with sein. — Ich ___ 15 Jahre alt."
        },
        "selection": "single",
        "options": [
          "bin",
          "habe",
          "tut",
          "seid"
        ]
      },
      {
        "id": "kapitel-03-ubung-02-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Du ___ in München.",
          "de": "Ergänzen Sie sein. — Du ___ in München.",
          "ar": "أكمل باستعمال sein. — Du ___ in München.",
          "en": "Complete with sein. — Du ___ in München."
        },
        "selection": "single",
        "options": [
          "tut",
          "möchtet",
          "möchten",
          "bist"
        ]
      },
      {
        "id": "kapitel-03-ubung-02-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "statement": "Er ist Herr Wang."
      },
      {
        "id": "kapitel-03-ubung-02-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Mein Name ___ Kolakowski.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-02-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Das ___ ein Wörterbuch.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-02-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Wir ___ Lehrer.",
          "de": "Ergänzen Sie sein. — Wir ___ Lehrer.",
          "ar": "أكمل باستعمال sein. — Wir ___ Lehrer.",
          "en": "Complete with sein. — Wir ___ Lehrer."
        },
        "selection": "single",
        "options": [
          "tut",
          "wissen",
          "sind",
          "mögen"
        ]
      },
      {
        "id": "kapitel-03-ubung-02-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ihr ___ glücklich.",
          "de": "Ergänzen Sie sein. — Ihr ___ glücklich.",
          "ar": "أكمل باستعمال sein. — Ihr ___ glücklich.",
          "en": "Complete with sein. — Ihr ___ glücklich."
        },
        "selection": "single",
        "options": [
          "seid",
          "mögt",
          "möchtest",
          "weißt"
        ]
      },
      {
        "id": "kapitel-03-ubung-02-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "statement": "Frau Tannberg tue im Büro."
      },
      {
        "id": "kapitel-03-ubung-02-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Sie (Plural) ___ aus Japan.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-02-association",
        "position": 10,
        "type": "matching",
        "prompt": {
          "fr": "Associez les formes.",
          "de": "Ordnen Sie zu.",
          "ar": "صل بين الصيغ.",
          "en": "Match the forms."
        },
        "items": [
          {
            "id": "i0",
            "label": "ich sein"
          },
          {
            "id": "i1",
            "label": "du sein"
          },
          {
            "id": "i2",
            "label": "wir sein"
          }
        ],
        "options": [
          "bin",
          "sind",
          "bist"
        ]
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Avoir",
      "de": "Haben",
      "ar": "فعل haben",
      "en": "Having"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-03-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — ___ du Geld?",
          "de": "Ergänzen Sie haben. — ___ du Geld?",
          "ar": "أكمل باستعمال haben. — ___ du Geld?",
          "en": "Complete with haben. — ___ du Geld?"
        },
        "selection": "single",
        "options": [
          "tun",
          "bist",
          "magst",
          "hast"
        ]
      },
      {
        "id": "kapitel-03-ubung-03-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — Nein, aber ich ___ Zeit.",
          "de": "Ergänzen Sie haben. — Nein, aber ich ___ Zeit.",
          "ar": "أكمل باستعمال haben. — Nein, aber ich ___ Zeit.",
          "en": "Complete with haben. — Nein, aber ich ___ Zeit."
        },
        "selection": "single",
        "options": [
          "möchten",
          "tun",
          "hast",
          "habe"
        ]
      },
      {
        "id": "kapitel-03-ubung-03-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "statement": "Du hast Glück."
      },
      {
        "id": "kapitel-03-ubung-03-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "Ich ___ kein Geld und keine Zeit.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "___ ihr schon eine Wohnung hier in Mainz?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-03-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — Wir ___ noch keine Wohnung.",
          "de": "Ergänzen Sie haben. — Wir ___ noch keine Wohnung.",
          "ar": "أكمل باستعمال haben. — Wir ___ noch keine Wohnung.",
          "en": "Complete with haben. — Wir ___ noch keine Wohnung."
        },
        "selection": "single",
        "options": [
          "haben",
          "möchten",
          "magst",
          "tun"
        ]
      },
      {
        "id": "kapitel-03-ubung-03-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — Herr Kim ___ viel Arbeit.",
          "de": "Ergänzen Sie haben. — Herr Kim ___ viel Arbeit.",
          "ar": "أكمل باستعمال haben. — Herr Kim ___ viel Arbeit.",
          "en": "Complete with haben. — Herr Kim ___ viel Arbeit."
        },
        "selection": "single",
        "options": [
          "habt",
          "hat",
          "mögen",
          "magst"
        ]
      },
      {
        "id": "kapitel-03-ubung-03-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "statement": "Er mögt auch am Wochenende keine Freizeit."
      },
      {
        "id": "kapitel-03-ubung-03-multi",
        "position": 9,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich sein → bin",
          "du sein → bist",
          "du sein → sind",
          "wir sein → sind",
          "ich sein → bist"
        ],
        "prompt": {
          "fr": "Sélectionnez toutes les associations correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر كل المطابقات الصحيحة.",
          "en": "Select all correct pairs."
        }
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Être ou avoir",
      "de": "Sein oder haben",
      "ar": "sein أو haben",
      "en": "Be or have"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-04-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Das ___ Angela und Pascal.",
          "de": "Ergänzen Sie sein. — Das ___ Angela und Pascal.",
          "ar": "أكمل باستعمال sein. — Das ___ Angela und Pascal.",
          "en": "Complete with sein. — Das ___ Angela und Pascal."
        },
        "selection": "single",
        "options": [
          "sind",
          "ist",
          "tust",
          "möchten"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Sie (Angela und Pascal) ___ Schüler.",
          "de": "Ergänzen Sie sein. — Sie (Angela und Pascal) ___ Schüler.",
          "ar": "أكمل باستعمال sein. — Sie (Angela und Pascal) ___ Schüler.",
          "en": "Complete with sein. — Sie (Angela und Pascal) ___ Schüler."
        },
        "selection": "single",
        "options": [
          "sind",
          "mögen",
          "hast",
          "wissen"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "statement": "Sie (Angela und Pascal) haben einen Hund."
      },
      {
        "id": "kapitel-03-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Snoopy ___ fünf Monate alt.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Was ___ Sie von Beruf?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ich ___ Lehrer.",
          "de": "Ergänzen Sie sein. — Ich ___ Lehrer.",
          "ar": "أكمل باستعمال sein. — Ich ___ Lehrer.",
          "en": "Complete with sein. — Ich ___ Lehrer."
        },
        "selection": "single",
        "options": [
          "haben",
          "tun",
          "bin",
          "weiß"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — ___ Sie verheiratet?",
          "de": "Ergänzen Sie sein. — ___ Sie verheiratet?",
          "ar": "أكمل باستعمال sein. — ___ Sie verheiratet?",
          "en": "Complete with sein. — ___ Sie verheiratet?"
        },
        "selection": "single",
        "options": [
          "sind",
          "bin",
          "möchte",
          "tust"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "statement": "Ich tut verheiratet."
      },
      {
        "id": "kapitel-03-ubung-04-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "Ich ___ vier Kinder.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "___ Sie ein Auto?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q11",
        "position": 11,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — Wir ___ ein Auto.",
          "de": "Ergänzen Sie haben. — Wir ___ ein Auto.",
          "ar": "أكمل باستعمال haben. — Wir ___ ein Auto.",
          "en": "Complete with haben. — Wir ___ ein Auto."
        },
        "selection": "single",
        "options": [
          "weiß",
          "seid",
          "haben",
          "mögt"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q12",
        "position": 12,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — ___ du ein Handy?",
          "de": "Ergänzen Sie haben. — ___ du ein Handy?",
          "ar": "أكمل باستعمال haben. — ___ du ein Handy?",
          "en": "Complete with haben. — ___ du ein Handy?"
        },
        "selection": "single",
        "options": [
          "bist",
          "mögen",
          "mögt",
          "hast"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q13",
        "position": 13,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "statement": "Meine Nummer ist 0171/1234987."
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Le chat Mikunda",
      "de": "Mikunda",
      "ar": "القطة ميكوندا",
      "en": "Mikunda the cat"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-05-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Das ___ Mikunda.",
          "de": "Ergänzen Sie sein. — Das ___ Mikunda.",
          "ar": "أكمل باستعمال sein. — Das ___ Mikunda.",
          "en": "Complete with sein. — Das ___ Mikunda."
        },
        "selection": "single",
        "options": [
          "möchte",
          "ist",
          "weißt",
          "tun"
        ]
      },
      {
        "id": "kapitel-03-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Sie ___ meine Katze.",
          "de": "Ergänzen Sie sein. — Sie ___ meine Katze.",
          "ar": "أكمل باستعمال sein. — Sie ___ meine Katze.",
          "en": "Complete with sein. — Sie ___ meine Katze."
        },
        "selection": "single",
        "options": [
          "ist",
          "tut",
          "möchte",
          "wissen"
        ]
      },
      {
        "id": "kapitel-03-ubung-05-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "statement": "Sie ist drei Jahre alt."
      },
      {
        "id": "kapitel-03-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "Sie ___ grüne Augen.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Jetzt ___ sie Mutter.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — Sie ___ drei Katzenbabys.",
          "de": "Ergänzen Sie haben. — Sie ___ drei Katzenbabys.",
          "ar": "أكمل باستعمال haben. — Sie ___ drei Katzenbabys.",
          "en": "Complete with haben. — Sie ___ drei Katzenbabys."
        },
        "selection": "single",
        "options": [
          "habt",
          "tust",
          "hat",
          "bin"
        ]
      },
      {
        "id": "kapitel-03-ubung-05-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Die Katzenbabys ___ alle süß.",
          "de": "Ergänzen Sie sein. — Die Katzenbabys ___ alle süß.",
          "ar": "أكمل باستعمال sein. — Die Katzenbabys ___ alle süß.",
          "en": "Complete with sein. — Die Katzenbabys ___ alle süß."
        },
        "selection": "single",
        "options": [
          "mögen",
          "tun",
          "sind",
          "habe"
        ]
      },
      {
        "id": "kapitel-03-ubung-05-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "statement": "Sie (die Katzenbabys) möchten grüne Augen."
      },
      {
        "id": "kapitel-03-ubung-05-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Mikunda ___ sehr glücklich.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Ich ___ auch glücklich.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-association",
        "position": 11,
        "type": "matching",
        "prompt": {
          "fr": "Associez les formes.",
          "de": "Ordnen Sie zu.",
          "ar": "صل بين الصيغ.",
          "en": "Match the forms."
        },
        "items": [
          {
            "id": "i0",
            "label": "ich sein"
          },
          {
            "id": "i1",
            "label": "du sein"
          },
          {
            "id": "i2",
            "label": "wir sein"
          }
        ],
        "options": [
          "bist",
          "sind",
          "bin"
        ]
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Au café",
      "de": "Möchten – im Café",
      "ar": "في المقهى",
      "en": "At the café"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec möchten. — Wir ___ etwas trinken.",
          "de": "Ergänzen Sie möchten. — Wir ___ etwas trinken.",
          "ar": "أكمل باستعمال möchten. — Wir ___ etwas trinken.",
          "en": "Complete with möchten. — Wir ___ etwas trinken."
        },
        "selection": "single",
        "options": [
          "weiß",
          "mag",
          "möchten",
          "mögt"
        ]
      },
      {
        "id": "kapitel-03-ubung-06-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec möchten. — Frau Taylor ___ einen Kaffee.",
          "de": "Ergänzen Sie möchten. — Frau Taylor ___ einen Kaffee.",
          "ar": "أكمل باستعمال möchten. — Frau Taylor ___ einen Kaffee.",
          "en": "Complete with möchten. — Frau Taylor ___ einen Kaffee."
        },
        "selection": "single",
        "options": [
          "weißt",
          "möchte",
          "möchtet",
          "bin"
        ]
      },
      {
        "id": "kapitel-03-ubung-06-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec möchten.",
          "de": "Ergänzen Sie möchten.",
          "ar": "أكمل باستعمال möchten.",
          "en": "Complete with möchten."
        },
        "statement": "Was möchtest du, Ben?"
      },
      {
        "id": "kapitel-03-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec möchten.",
          "de": "Ergänzen Sie möchten.",
          "ar": "أكمل باستعمال möchten.",
          "en": "Complete with möchten."
        },
        "sentence": "Ich ___ eine Cola.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-06-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec möchten.",
          "de": "Ergänzen Sie möchten.",
          "ar": "أكمل باستعمال möchten.",
          "en": "Complete with möchten."
        },
        "sentence": "Ben ___ eine Cola.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-06-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec möchten. — Was ___ Sie trinken?",
          "de": "Ergänzen Sie möchten. — Was ___ Sie trinken?",
          "ar": "أكمل باستعمال möchten. — Was ___ Sie trinken?",
          "en": "Complete with möchten. — Was ___ Sie trinken?"
        },
        "selection": "single",
        "options": [
          "tut",
          "möchten",
          "mögen",
          "ist"
        ]
      },
      {
        "id": "kapitel-03-ubung-06-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec möchten. — ___ ihr etwas essen?",
          "de": "Ergänzen Sie möchten. — ___ ihr etwas essen?",
          "ar": "أكمل باستعمال möchten. — ___ ihr etwas essen?",
          "en": "Complete with möchten. — ___ ihr etwas essen?"
        },
        "selection": "single",
        "options": [
          "möchtet",
          "bin",
          "möchte",
          "mögen"
        ]
      },
      {
        "id": "kapitel-03-ubung-06-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec möchten.",
          "de": "Ergänzen Sie möchten.",
          "ar": "أكمل باستعمال möchten.",
          "en": "Complete with möchten."
        },
        "statement": "Wir mögen bezahlen."
      },
      {
        "id": "kapitel-03-ubung-06-multi",
        "position": 9,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "wir sein → sind",
          "du sein → bist",
          "du sein → sind",
          "ich sein → bin",
          "ich sein → bist"
        ],
        "prompt": {
          "fr": "Sélectionnez toutes les associations correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر كل المطابقات الصحيحة.",
          "en": "Select all correct pairs."
        }
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Les goûts",
      "de": "Mögen",
      "ar": "التفضيلات",
      "en": "Likes"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-07-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec mögen. — Ich ___ Kaffee.",
          "de": "Ergänzen Sie mögen. — Ich ___ Kaffee.",
          "ar": "أكمل باستعمال mögen. — Ich ___ Kaffee.",
          "en": "Complete with mögen. — Ich ___ Kaffee."
        },
        "selection": "single",
        "options": [
          "hat",
          "weiß",
          "mag",
          "möchte"
        ]
      },
      {
        "id": "kapitel-03-ubung-07-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec mögen. — Meine Freundin ___ keine Kartoffeln.",
          "de": "Ergänzen Sie mögen. — Meine Freundin ___ keine Kartoffeln.",
          "ar": "أكمل باستعمال mögen. — Meine Freundin ___ keine Kartoffeln.",
          "en": "Complete with mögen. — Meine Freundin ___ keine Kartoffeln."
        },
        "selection": "single",
        "options": [
          "weiß",
          "haben",
          "ist",
          "mag"
        ]
      },
      {
        "id": "kapitel-03-ubung-07-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "statement": "Mein Freund mag keinen Käse."
      },
      {
        "id": "kapitel-03-ubung-07-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "sentence": "Meine Eltern ___ Fisch.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "sentence": "Wir ___ keinen Kaffee.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-07-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec mögen. — Du ___ Tee.",
          "de": "Ergänzen Sie mögen. — Du ___ Tee.",
          "ar": "أكمل باستعمال mögen. — Du ___ Tee.",
          "en": "Complete with mögen. — Du ___ Tee."
        },
        "selection": "single",
        "options": [
          "tut",
          "magst",
          "haben",
          "weißt"
        ]
      },
      {
        "id": "kapitel-03-ubung-07-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec mögen. — Ihr ___ Schokolade.",
          "de": "Ergänzen Sie mögen. — Ihr ___ Schokolade.",
          "ar": "أكمل باستعمال mögen. — Ihr ___ Schokolade.",
          "en": "Complete with mögen. — Ihr ___ Schokolade."
        },
        "selection": "single",
        "options": [
          "sind",
          "wisst",
          "mögt",
          "hat"
        ]
      },
      {
        "id": "kapitel-03-ubung-07-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "statement": "Sie (Plural) bin keinen Fisch."
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Savoir",
      "de": "Wissen",
      "ar": "المعرفة",
      "en": "Knowing"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-08-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec wissen. — ___ Sie, wo der Bahnhof ist?",
          "de": "Ergänzen Sie wissen. — ___ Sie, wo der Bahnhof ist?",
          "ar": "أكمل باستعمال wissen. — ___ Sie, wo der Bahnhof ist?",
          "en": "Complete with wissen. — ___ Sie, wo der Bahnhof ist?"
        },
        "selection": "single",
        "options": [
          "wissen",
          "hast",
          "seid",
          "habe"
        ]
      },
      {
        "id": "kapitel-03-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec wissen. — Das ___ ich nicht.",
          "de": "Ergänzen Sie wissen. — Das ___ ich nicht.",
          "ar": "أكمل باستعمال wissen. — Das ___ ich nicht.",
          "en": "Complete with wissen. — Das ___ ich nicht."
        },
        "selection": "single",
        "options": [
          "weiß",
          "hast",
          "mögen",
          "haben"
        ]
      },
      {
        "id": "kapitel-03-ubung-08-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "statement": "Der Polizist weiß es bestimmt."
      },
      {
        "id": "kapitel-03-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "sentence": "Niemand ___, ob Herr Sorodin heute kommt.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-08-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "sentence": "___ du, warum Anne heute so spät kommt?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-08-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec wissen. — Die Kinder ___ heute viel mehr als wir früher.",
          "de": "Ergänzen Sie wissen. — Die Kinder ___ heute viel mehr als wir früher.",
          "ar": "أكمل باستعمال wissen. — Die Kinder ___ heute viel mehr als wir früher.",
          "en": "Complete with wissen. — Die Kinder ___ heute viel mehr als wir früher."
        },
        "selection": "single",
        "options": [
          "möchte",
          "mögt",
          "wissen",
          "bin"
        ]
      },
      {
        "id": "kapitel-03-ubung-08-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec wissen. — ___ ihr die Antwort?",
          "de": "Ergänzen Sie wissen. — ___ ihr die Antwort?",
          "ar": "أكمل باستعمال wissen. — ___ ihr die Antwort?",
          "en": "Complete with wissen. — ___ ihr die Antwort?"
        },
        "selection": "single",
        "options": [
          "wisst",
          "mögt",
          "mag",
          "bist"
        ]
      },
      {
        "id": "kapitel-03-ubung-08-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "statement": "Wir weiß es nicht."
      },
      {
        "id": "kapitel-03-ubung-08-association",
        "position": 9,
        "type": "matching",
        "prompt": {
          "fr": "Associez les formes.",
          "de": "Ordnen Sie zu.",
          "ar": "صل بين الصيغ.",
          "en": "Match the forms."
        },
        "items": [
          {
            "id": "i0",
            "label": "ich sein"
          },
          {
            "id": "i1",
            "label": "du sein"
          },
          {
            "id": "i2",
            "label": "wir sein"
          }
        ],
        "options": [
          "sind",
          "bin",
          "bist"
        ]
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Faire et avoir mal",
      "de": "Tun",
      "ar": "الفعل tun",
      "en": "Doing and pain"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-09-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec tun. — Was ___ denn weh?",
          "de": "Ergänzen Sie tun. — Was ___ denn weh?",
          "ar": "أكمل باستعمال tun. — Was ___ denn weh?",
          "en": "Complete with tun. — Was ___ denn weh?"
        },
        "selection": "single",
        "options": [
          "möchten",
          "tut",
          "mögt",
          "weiß"
        ]
      },
      {
        "id": "kapitel-03-ubung-09-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec tun. — Meine Ohren ___ weh.",
          "de": "Ergänzen Sie tun. — Meine Ohren ___ weh.",
          "ar": "أكمل باستعمال tun. — Meine Ohren ___ weh.",
          "en": "Complete with tun. — Meine Ohren ___ weh."
        },
        "selection": "single",
        "options": [
          "tun",
          "weißt",
          "tut",
          "mag"
        ]
      },
      {
        "id": "kapitel-03-ubung-09-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "statement": "Was tust du?"
      },
      {
        "id": "kapitel-03-ubung-09-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "sentence": "Frag nicht, was ich ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "sentence": "___ Sie ganz wenig!",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec tun. — Mein Rücken ___ weh.",
          "de": "Ergänzen Sie tun. — Mein Rücken ___ weh.",
          "ar": "أكمل باستعمال tun. — Mein Rücken ___ weh.",
          "en": "Complete with tun. — Mein Rücken ___ weh."
        },
        "selection": "single",
        "options": [
          "tut",
          "habt",
          "mögt",
          "bist"
        ]
      },
      {
        "id": "kapitel-03-ubung-09-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec tun. — Wir ___ unser Bestes.",
          "de": "Ergänzen Sie tun. — Wir ___ unser Bestes.",
          "ar": "أكمل باستعمال tun. — Wir ___ unser Bestes.",
          "en": "Complete with tun. — Wir ___ unser Bestes."
        },
        "selection": "single",
        "options": [
          "möchte",
          "tun",
          "wisst",
          "tust"
        ]
      },
      {
        "id": "kapitel-03-ubung-09-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "statement": "Was möchtet ihr heute?"
      },
      {
        "id": "kapitel-03-ubung-09-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "sentence": "Was kann ich ___?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "sentence": "Ich will einfach mal nichts ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-multi",
        "position": 11,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich sein → bist",
          "du sein → bist",
          "du sein → sind",
          "ich sein → bin",
          "wir sein → sind"
        ],
        "prompt": {
          "fr": "Sélectionnez toutes les associations correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر كل المطابقات الصحيحة.",
          "en": "Select all correct pairs."
        }
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Synthèse",
      "de": "Abschlusstest",
      "ar": "اختبار شامل",
      "en": "Final review"
    },
    "description": {
      "fr": "Complétez les phrases.",
      "de": "Ergänzen Sie die Sätze.",
      "ar": "أكمل الجمل.",
      "en": "Complete the sentences."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-10-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Heute ___ ich krank.",
          "de": "Ergänzen Sie sein. — Heute ___ ich krank.",
          "ar": "أكمل باستعمال sein. — Heute ___ ich krank.",
          "en": "Complete with sein. — Heute ___ ich krank."
        },
        "selection": "single",
        "options": [
          "haben",
          "habt",
          "bin",
          "mögen"
        ]
      },
      {
        "id": "kapitel-03-ubung-10-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — ___ du einen Termin?",
          "de": "Ergänzen Sie haben. — ___ du einen Termin?",
          "ar": "أكمل باستعمال haben. — ___ du einen Termin?",
          "en": "Complete with haben. — ___ du einen Termin?"
        },
        "selection": "single",
        "options": [
          "möchtest",
          "wisst",
          "wissen",
          "hast"
        ]
      },
      {
        "id": "kapitel-03-ubung-10-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec möchten.",
          "de": "Ergänzen Sie möchten.",
          "ar": "أكمل باستعمال möchten.",
          "en": "Complete with möchten."
        },
        "statement": "Er möchte einen Tee bestellen."
      },
      {
        "id": "kapitel-03-ubung-10-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "sentence": "Wir ___ Musik.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "sentence": "___ ihr die Adresse?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec tun. — Meine Füße ___ weh.",
          "de": "Ergänzen Sie tun. — Meine Füße ___ weh.",
          "ar": "أكمل باستعمال tun. — Meine Füße ___ weh.",
          "en": "Complete with tun. — Meine Füße ___ weh."
        },
        "selection": "single",
        "options": [
          "weiß",
          "ist",
          "weißt",
          "tun"
        ]
      },
      {
        "id": "kapitel-03-ubung-10-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ihr ___ sehr nett.",
          "de": "Ergänzen Sie sein. — Ihr ___ sehr nett.",
          "ar": "أكمل باستعمال sein. — Ihr ___ sehr nett.",
          "en": "Complete with sein. — Ihr ___ sehr nett."
        },
        "selection": "single",
        "options": [
          "hast",
          "habt",
          "weiß",
          "seid"
        ]
      },
      {
        "id": "kapitel-03-ubung-10-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "statement": "Sie (Plural) weiß keine Zeit."
      },
      {
        "id": "kapitel-03-ubung-10-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "sentence": "Ich ___ die Antwort.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "sentence": "Du ___ keinen Fisch.",
        "blanks": 1
      }
    ]
  }
]

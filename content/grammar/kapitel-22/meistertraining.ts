import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-22-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Antworten und helfen",
      "de": "Antworten und helfen",
      "ar": "Antworten und helfen",
      "en": "Antworten und helfen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-01-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "die",
          "den",
          "dem",
          "der"
        ],
        "prompt": {
          "fr": "Der Mann antwortet ___ Frau. (die) — Choisissez la forme ou la phrase correcte.",
          "de": "Der Mann antwortet ___ Frau. (die) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Der Mann antwortet ___ Frau. (die) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Der Mann antwortet ___ Frau. (die) — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dem",
          "der",
          "die",
          "den"
        ],
        "prompt": {
          "fr": "Das Kind hilft ___ Mann. (der) — Choisissez la forme ou la phrase correcte.",
          "de": "Das Kind hilft ___ Mann. (der) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Das Kind hilft ___ Mann. (der) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Das Kind hilft ___ Mann. (der) — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-01-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Er gratuliert ___ Frau. (die)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        }
      },
      {
        "id": "kapitel-22-ubung-01-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Die Kinder hören dem Oma zu. (die)",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        }
      },
      {
        "id": "kapitel-22-ubung-01-extra",
        "position": 5,
        "type": "matching",
        "prompt": {
          "fr": "Associez les verbes au type de complément qu’ils régissent dans leur emploi de base.",
          "de": "Ordnen Sie die Verben dem Kasusobjekt ihrer Grundverwendung zu.",
          "ar": "اربط كل فعل بنوع المفعول الذي يقتضيه في استعماله الأساسي.",
          "en": "Match the verbs to the object case in their basic use."
        },
        "items": [
          {
            "id": "0",
            "label": "helfen"
          },
          {
            "id": "1",
            "label": "fragen"
          },
          {
            "id": "2",
            "label": "lachen"
          }
        ],
        "options": [
          "kein Objekt nötig",
          "Akkusativobjekt",
          "Dativobjekt"
        ]
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Geschmack",
      "de": "Geschmack",
      "ar": "Geschmack",
      "en": "Geschmack"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-02-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Das Haus ___ den Leuten, aber die Zimmer ___ ihnen nicht. (gefallen)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Der Wein schmeckt ___ Mann nicht. (der)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        }
      },
      {
        "id": "kapitel-22-ubung-02-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Die Schuhe passen der Frau. (die)",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        }
      },
      {
        "id": "kapitel-22-ubung-02-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "der",
          "dem",
          "die",
          "den"
        ],
        "prompt": {
          "fr": "Das Auto gehört ___ Chef. (der) — Choisissez la forme ou la phrase correcte.",
          "de": "Das Auto gehört ___ Chef. (der) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Das Auto gehört ___ Chef. (der) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Das Auto gehört ___ Chef. (der) — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-02-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "der",
          "die",
          "dem",
          "den"
        ],
        "prompt": {
          "fr": "Die Jacke steht ___ Mädchen. (das) — Choisissez la forme ou la phrase correcte.",
          "de": "Die Jacke steht ___ Mädchen. (das) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Die Jacke steht ___ Mädchen. (das) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Die Jacke steht ___ Mädchen. (das) — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-02-q06",
        "position": 6,
        "type": "fill_blank",
        "sentence": "Der Film gefällt ___ Freunden. (die)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        }
      },
      {
        "id": "kapitel-22-ubung-02-q07",
        "position": 7,
        "type": "true_false",
        "statement": "Der Kopf tut der Frau weh. (die)",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        }
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Reaktionen",
      "de": "Reaktionen",
      "ar": "Reaktionen",
      "en": "Reaktionen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Ich frage den Mann. Er antwortet ___. Danach frage ich ___ noch einmal. (ich/der Mann)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-03-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "ihn",
          "ihm",
          "ihr"
        ],
        "prompt": {
          "fr": "Anastasia hat Geburtstag. Wir gratulieren ___. — Choisissez la forme ou la phrase correcte.",
          "de": "Anastasia hat Geburtstag. Wir gratulieren ___. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Anastasia hat Geburtstag. Wir gratulieren ___. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Anastasia hat Geburtstag. Wir gratulieren ___. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-03-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dir",
          "ich",
          "mir",
          "mich"
        ],
        "prompt": {
          "fr": "Du hast Probleme. Ich helfe ___. — Choisissez la forme ou la phrase correcte.",
          "de": "Du hast Probleme. Ich helfe ___. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Du hast Probleme. Ich helfe ___. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Du hast Probleme. Ich helfe ___. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-03-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihn",
          "er",
          "ihr",
          "ihm"
        ],
        "prompt": {
          "fr": "Der Vater erzählt. Die Kinder hören ___ zu. — Choisissez la forme ou la phrase correcte.",
          "de": "Der Vater erzählt. Die Kinder hören ___ zu. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Der Vater erzählt. Die Kinder hören ___ zu. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Der Vater erzählt. Die Kinder hören ___ zu. — Choose the correct form or sentence."
        }
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Entschuldigung",
      "de": "Entschuldigung",
      "ar": "Entschuldigung",
      "en": "Entschuldigung"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-04-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "mich",
          "mir",
          "dir"
        ],
        "prompt": {
          "fr": "Ich habe einen Fehler gemacht. Es tut ___ leid. — Choisissez la forme ou la phrase correcte.",
          "de": "Ich habe einen Fehler gemacht. Es tut ___ leid. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ich habe einen Fehler gemacht. Es tut ___ leid. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ich habe einen Fehler gemacht. Es tut ___ leid. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Mein Sohn sagt: Es tut ___ leid. Seine Schwester sagt: Mir tut es auch leid. (ich)",
        "blanks": 1
      },
      {
        "id": "kapitel-22-ubung-04-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihm",
          "sie",
          "ihnen",
          "ihr"
        ],
        "prompt": {
          "fr": "Meine Eltern bedauern ihren Fehler. Es tut ___ leid. — Choisissez la forme ou la phrase correcte.",
          "de": "Meine Eltern bedauern ihren Fehler. Es tut ___ leid. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Meine Eltern bedauern ihren Fehler. Es tut ___ leid. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Meine Eltern bedauern ihren Fehler. Es tut ___ leid. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-04-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "mich",
          "ich",
          "dir",
          "mir"
        ],
        "prompt": {
          "fr": "Du bedauerst deinen Fehler. Es tut ___ leid. — Choisissez la forme ou la phrase correcte.",
          "de": "Du bedauerst deinen Fehler. Es tut ___ leid. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Du bedauerst deinen Fehler. Es tut ___ leid. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Du bedauerst deinen Fehler. Es tut ___ leid. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-04-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "euch",
          "uns",
          "ihnen",
          "wir"
        ],
        "prompt": {
          "fr": "Wir bedauern unseren Fehler. Es tut ___ leid. — Choisissez la forme ou la phrase correcte.",
          "de": "Wir bedauern unseren Fehler. Es tut ___ leid. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Wir bedauern unseren Fehler. Es tut ___ leid. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Wir bedauern unseren Fehler. Es tut ___ leid. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-04-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "euch",
          "uns",
          "ihnen",
          "wir"
        ],
        "prompt": {
          "fr": "Ihr bedauert euren Fehler. Es tut ___ leid. — Choisissez la forme ou la phrase correcte.",
          "de": "Ihr bedauert euren Fehler. Es tut ___ leid. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ihr bedauert euren Fehler. Es tut ___ leid. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ihr bedauert euren Fehler. Es tut ___ leid. — Choose the correct form or sentence."
        }
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Umformulieren",
      "de": "Umformulieren",
      "ar": "Umformulieren",
      "en": "Umformulieren"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-05-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "mir",
          "dir",
          "mich",
          "ich"
        ],
        "prompt": {
          "fr": "Ich habe morgen keine Zeit. Morgen passt es ___ nicht. — Choisissez la forme ou la phrase correcte.",
          "de": "Ich habe morgen keine Zeit. Morgen passt es ___ nicht. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ich habe morgen keine Zeit. Morgen passt es ___ nicht. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ich habe morgen keine Zeit. Morgen passt es ___ nicht. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "uns",
          "ihnen",
          "euch"
        ],
        "prompt": {
          "fr": "Wir finden Frankfurt schön. Frankfurt gefällt ___. — Choisissez la forme ou la phrase correcte.",
          "de": "Wir finden Frankfurt schön. Frankfurt gefällt ___. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Wir finden Frankfurt schön. Frankfurt gefällt ___. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Wir finden Frankfurt schön. Frankfurt gefällt ___. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-05-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "ihr",
          "ihn",
          "ihm"
        ],
        "prompt": {
          "fr": "Ulrike ist krank. Es geht ___ schlecht. — Choisissez la forme ou la phrase correcte.",
          "de": "Ulrike ist krank. Es geht ___ schlecht. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ulrike ist krank. Es geht ___ schlecht. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ulrike ist krank. Es geht ___ schlecht. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-05-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "dir",
          "mich",
          "mir"
        ],
        "prompt": {
          "fr": "Ich finde die Suppe lecker. Sie schmeckt ___. — Choisissez la forme ou la phrase correcte.",
          "de": "Ich finde die Suppe lecker. Sie schmeckt ___. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ich finde die Suppe lecker. Sie schmeckt ___. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ich finde die Suppe lecker. Sie schmeckt ___. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-05-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "mich",
          "dir",
          "mir",
          "ich"
        ],
        "prompt": {
          "fr": "Das ist nicht meine Uhr. Sie gehört ___ nicht. — Choisissez la forme ou la phrase correcte.",
          "de": "Das ist nicht meine Uhr. Sie gehört ___ nicht. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Das ist nicht meine Uhr. Sie gehört ___ nicht. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Das ist nicht meine Uhr. Sie gehört ___ nicht. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-05-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dir",
          "mir",
          "mich",
          "ich"
        ],
        "prompt": {
          "fr": "Meine Hose ist zu klein. Sie passt ___ nicht. — Choisissez la forme ou la phrase correcte.",
          "de": "Meine Hose ist zu klein. Sie passt ___ nicht. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Meine Hose ist zu klein. Sie passt ___ nicht. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Meine Hose ist zu klein. Sie passt ___ nicht. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-05-q07",
        "position": 7,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "dir",
          "mich",
          "mir"
        ],
        "prompt": {
          "fr": "Ich habe Halsschmerzen. Der Hals tut ___ weh. — Choisissez la forme ou la phrase correcte.",
          "de": "Ich habe Halsschmerzen. Der Hals tut ___ weh. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ich habe Halsschmerzen. Der Hals tut ___ weh. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ich habe Halsschmerzen. Der Hals tut ___ weh. — Choose the correct form or sentence."
        }
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Clemens",
      "de": "Clemens",
      "ar": "Clemens",
      "en": "Clemens"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihn",
          "er",
          "ihr",
          "ihm"
        ],
        "prompt": {
          "fr": "Das ist Clemens. Ich finde ___ wunderbar. — Choisissez la forme ou la phrase correcte.",
          "de": "Das ist Clemens. Ich finde ___ wunderbar. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Das ist Clemens. Ich finde ___ wunderbar. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Das ist Clemens. Ich finde ___ wunderbar. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Clemens gefällt ___ sehr. (ich)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        }
      },
      {
        "id": "kapitel-22-ubung-06-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Jede Farbe steht ihm. (Clemens)",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        }
      },
      {
        "id": "kapitel-22-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Ich rufe Clemens an und frage ___ etwas. Er antwortet ___ sofort. (Clemens/ich)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-06-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Clemens erzählt eine Geschichte. Ich höre ___ zu und glaube ___. (Clemens)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-06-q06",
        "position": 6,
        "type": "fill_blank",
        "sentence": "Ich antworte ___. (Clemens)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        }
      },
      {
        "id": "kapitel-22-ubung-06-q07",
        "position": 7,
        "type": "true_false",
        "statement": "Ich liebe ihn. (Clemens)",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        }
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Kontraste",
      "de": "Kontraste",
      "ar": "Kontraste",
      "en": "Kontraste"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Der Mann schenkt ___ Frau Blumen. Die Blumen gefallen ___ Frau. (bestimmt)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-07-q02",
        "position": 2,
        "type": "true_false",
        "statement": "Die Blumen gefallen dem Frau. (die)",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        }
      },
      {
        "id": "kapitel-22-ubung-07-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Der Chef fragt ___ Sekretärin. Sie antwortet ___ Chef. (bestimmt)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-07-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "die",
          "dem",
          "der",
          "den"
        ],
        "prompt": {
          "fr": "Die Sekretärin antwortet ___ Chef. (der) — Choisissez la forme ou la phrase correcte.",
          "de": "Die Sekretärin antwortet ___ Chef. (der) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Die Sekretärin antwortet ___ Chef. (der) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Die Sekretärin antwortet ___ Chef. (der) — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Der Freund liest ___ Brief und antwortet ___ Mädchen. (bestimmt)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-07-q06",
        "position": 6,
        "type": "true_false",
        "statement": "Die Jacke passt der Kind. (das)",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        }
      },
      {
        "id": "kapitel-22-ubung-07-q07",
        "position": 7,
        "type": "qcm",
        "selection": "single",
        "options": [
          "den",
          "die",
          "der",
          "dem"
        ],
        "prompt": {
          "fr": "Der Arzt hilft ___ Mann. (der) — Choisissez la forme ou la phrase correcte.",
          "de": "Der Arzt hilft ___ Mann. (der) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Der Arzt hilft ___ Mann. (der) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Der Arzt hilft ___ Mann. (der) — Choose the correct form or sentence."
        }
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Subjekt und Verb",
      "de": "Subjekt und Verb",
      "ar": "Subjekt und Verb",
      "en": "Subjekt und Verb"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-08-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Schuhe ___ mir, aber die Jacke ___ mir nicht. (gefallen)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-08-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Suppe schmeckt ___, aber der Salat schmeckt ___ nicht. (wir/ich)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-08-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Das Buch gehört Paul. Die Bücher gehören Anna. Das Buch gehört ___, die Bücher gehören ___.",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Termine passen ___, aber der Montag passt ___ nicht. (du/ich)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-09",
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
        "id": "kapitel-22-ubung-09-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Frau Klein, ich danke ___ für Ihre Hilfe. Ich rufe ___ morgen an. (höflich)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Paul, ich glaube ___, aber ich muss ___ noch etwas fragen. (du)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-09-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "ihn",
          "ihm",
          "er"
        ],
        "prompt": {
          "fr": "Anna wartet. Ich antworte ___. — Choisissez la forme ou la phrase correcte.",
          "de": "Anna wartet. Ich antworte ___. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Anna wartet. Ich antworte ___. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Anna wartet. Ich antworte ___. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-09-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "ihm",
          "sie",
          "ihnen"
        ],
        "prompt": {
          "fr": "Die Gäste sprechen. Ich höre ___ zu. — Choisissez la forme ou la phrase correcte.",
          "de": "Die Gäste sprechen. Ich höre ___ zu. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Die Gäste sprechen. Ich höre ___ zu. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Die Gäste sprechen. Ich höre ___ zu. — Choose the correct form or sentence."
        }
      },
      {
        "id": "kapitel-22-ubung-09-extra",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Ich … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "Ich",
          "dir aufmerksam zu.",
          "höre"
        ]
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-10",
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
        "id": "kapitel-22-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Mann hilft das Kind. ___ Kind dankt dem Mann. (bestimmt; erste Lücke = Objekt)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "___ Mann sieht das Kind. (der, Objekt)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        }
      },
      {
        "id": "kapitel-22-ubung-10-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Der Frau gehört das Auto. (die)",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        }
      },
      {
        "id": "kapitel-22-ubung-10-q04",
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
          "Ich besuche meinem Bruder.",
          "Ich helfe meinem Bruder.",
          "Ich besuche meinen Bruder.",
          "Ich helfe meinen Bruder."
        ]
      },
      {
        "id": "kapitel-22-ubung-10-extra",
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
          "Ich frage ihm.",
          "Ich helfe ihm.",
          "Ich frage ihn.",
          "Ich helfe ihn."
        ]
      }
    ]
  }
]

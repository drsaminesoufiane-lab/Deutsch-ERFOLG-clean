import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-41-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "01 – Bedeutungen",
      "de": "01 – Bedeutungen",
      "ar": "01 – Bedeutungen",
      "en": "01 – Bedeutungen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-01-q01",
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
            "label": "Folge"
          },
          {
            "id": "item-2",
            "label": "andernfalls"
          },
          {
            "id": "item-3",
            "label": "nach diesem Ereignis"
          },
          {
            "id": "item-4",
            "label": "bedingte Folge"
          }
        ],
        "options": [
          "danach",
          "deshalb",
          "sonst",
          "dann"
        ]
      },
      {
        "id": "kapitel-41-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich bin krank, ___ bleibe ich zu Hause. (Folge)",
          "de": "Wählen Sie die richtige Antwort. Ich bin krank, ___ bleibe ich zu Hause. (Folge)",
          "ar": "اختر الإجابة الصحيحة. Ich bin krank, ___ bleibe ich zu Hause. (Folge)",
          "en": "Choose the correct answer. Ich bin krank, ___ bleibe ich zu Hause. (Folge)"
        },
        "selection": "single",
        "options": [
          "denn",
          "aber",
          "sonst",
          "deshalb"
        ]
      },
      {
        "id": "kapitel-41-ubung-01-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Beeil dich, ___ kommst du zu spät. (Warnung) — Choisissez la forme ou la phrase correcte.",
          "de": "Beeil dich, ___ kommst du zu spät. (Warnung) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Beeil dich, ___ kommst du zu spät. (Warnung) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Beeil dich, ___ kommst du zu spät. (Warnung) — Choose the correct form or sentence."
        },
        "options": [
          "denn",
          "sonst",
          "deshalb",
          "danach"
        ]
      },
      {
        "id": "kapitel-41-ubung-01-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Zuerst dusche ich, ___ frühstücke ich. (zeitliche Abfolge) — Choisissez la forme ou la phrase correcte.",
          "de": "Zuerst dusche ich, ___ frühstücke ich. (zeitliche Abfolge) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Zuerst dusche ich, ___ frühstücke ich. (zeitliche Abfolge) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Zuerst dusche ich, ___ frühstücke ich. (zeitliche Abfolge) — Choose the correct form or sentence."
        },
        "options": [
          "deshalb",
          "sonst",
          "weil",
          "dann"
        ]
      },
      {
        "id": "kapitel-41-ubung-01-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Sonst bedeutet hier andernfalls."
      },
      {
        "id": "kapitel-41-ubung-01-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Deshalb leitet einen Nebensatz ein."
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "02 – Verbzweitstellung",
      "de": "02 – Verbzweitstellung",
      "ar": "02 – Verbzweitstellung",
      "en": "02 – Verbzweitstellung"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-02-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Deshalb ___.",
          "de": "Wählen Sie die richtige Antwort. Deshalb ___.",
          "ar": "اختر الإجابة الصحيحة. Deshalb ___.",
          "en": "Choose the correct answer. Deshalb ___."
        },
        "selection": "single",
        "options": [
          "haben ich Zeit",
          "habe ich Zeit",
          "ich Zeit habe",
          "ich habe Zeit"
        ]
      },
      {
        "id": "kapitel-41-ubung-02-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Sonst ___.",
          "de": "Wählen Sie die richtige Antwort. Sonst ___.",
          "ar": "اختر الإجابة الصحيحة. Sonst ___.",
          "en": "Choose the correct answer. Sonst ___."
        },
        "selection": "single",
        "options": [
          "du zu spät kommst",
          "kommst du zu spät",
          "kommen du zu spät",
          "du kommst zu spät"
        ]
      },
      {
        "id": "kapitel-41-ubung-02-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Danach ___.",
          "de": "Wählen Sie die richtige Antwort. Danach ___.",
          "ar": "اختر الإجابة الصحيحة. Danach ___.",
          "en": "Choose the correct answer. Danach ___."
        },
        "selection": "single",
        "options": [
          "sie ruft an",
          "ruft an sie",
          "ruft sie an",
          "sie anruft"
        ]
      },
      {
        "id": "kapitel-41-ubung-02-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Nach deshalb am Satzanfang folgt das finite Verb."
      },
      {
        "id": "kapitel-41-ubung-02-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Dann ich gehe nach Hause ist korrekt."
      },
      {
        "id": "kapitel-41-ubung-02-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Deshalb … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Deshalb … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Deshalb … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Deshalb … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "er",
          "bleibt",
          "Deshalb",
          "heute zu Hause."
        ]
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "03 – Satzklammer",
      "de": "03 – Satzklammer",
      "ar": "03 – Satzklammer",
      "en": "03 – Satzklammer"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Deshalb ___ ich morgen arbeiten. (müssen)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-03-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Danach ___ wir den Film gesehen. (haben)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-03-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Sonst ___ du den Zug verpassen. (können)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-03-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Dann ___ sie ihre Mutter ___. (anrufen)",
        "blanks": 2
      },
      {
        "id": "kapitel-41-ubung-03-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Danach … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Danach … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Danach … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Danach … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "noch etwas essen.",
          "Danach",
          "wir",
          "möchten"
        ]
      },
      {
        "id": "kapitel-41-ubung-03-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Deshalb ... (aufstehen)",
          "de": "Wählen Sie die richtige Antwort. Deshalb ... (aufstehen)",
          "ar": "اختر الإجابة الصحيحة. Deshalb ... (aufstehen)",
          "en": "Choose the correct answer. Deshalb ... (aufstehen)"
        },
        "selection": "single",
        "options": [
          "Deshalb steht wir früher auf.",
          "Deshalb wir stehen früher auf.",
          "Deshalb stehen wir früher auf.",
          "Deshalb aufstehen wir früher."
        ]
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "04 – Geburtstag",
      "de": "04 – Geburtstag",
      "ar": "04 – Geburtstag",
      "en": "04 – Geburtstag"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-04-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Deshalb … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Deshalb … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Deshalb … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Deshalb … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "ich",
          "Deshalb",
          "meine Freunde eingeladen.",
          "habe"
        ]
      },
      {
        "id": "kapitel-41-ubung-04-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Dann … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Dann … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Dann … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Dann … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "wir",
          "wollen",
          "Dann",
          "in die Disko gehen."
        ]
      },
      {
        "id": "kapitel-41-ubung-04-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Sonst … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Sonst … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Sonst … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Sonst … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "nicht tanzen.",
          "kann",
          "Sonst",
          "ich"
        ]
      },
      {
        "id": "kapitel-41-ubung-04-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Dann … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Dann … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Dann … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Dann … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "wir",
          "viel Spaß.",
          "haben",
          "Dann"
        ]
      },
      {
        "id": "kapitel-41-ubung-04-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Deshalb … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Deshalb … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Deshalb … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Deshalb … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "ich",
          "morgen lange schlafen.",
          "Deshalb",
          "möchte"
        ]
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "05 – Folge oder Warnung",
      "de": "05 – Folge oder Warnung",
      "ar": "05 – Folge oder Warnung",
      "en": "05 – Folge oder Warnung"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-05-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Mein Kühlschrank ist leer. ___ muss ich einkaufen gehen. (Folge)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-05-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich muss mich beeilen, ___ komme ich zu spät. (andernfalls)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Kannst du mir dein Handy ausleihen? ___ kann ich meinem Mann nicht Bescheid sagen. (andernfalls)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Lazaro muss heute lange arbeiten. ___ kann er nicht kommen. (Folge)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-05-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Wir müssen einen Schirm mitnehmen, ___ werden wir nass. (andernfalls)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-05-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Meine Tochter ist krank. ___ kann sie heute nicht zur Schule kommen. (Folge)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "06 – Zeitliche Abfolge",
      "de": "06 – Zeitliche Abfolge",
      "ar": "06 – Zeitliche Abfolge",
      "en": "06 – Zeitliche Abfolge"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-06-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Wir besichtigen die Stadt. Dann ___ wir essen. (gehen)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Ich schreibe die E-Mail. Dann ___ ich sie ___. (abschicken)",
        "blanks": 2
      },
      {
        "id": "kapitel-41-ubung-06-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Wir kochen. Danach ___ wir ___. (aufräumen)",
        "blanks": 2
      },
      {
        "id": "kapitel-41-ubung-06-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Danach … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Danach … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Danach … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Danach … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "gehen",
          "ins Bett.",
          "Danach",
          "die Kinder"
        ]
      },
      {
        "id": "kapitel-41-ubung-06-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Dann und danach können oft beide eine zeitliche Reihenfolge ausdrücken."
      },
      {
        "id": "kapitel-41-ubung-06-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Welche Fortsetzung beschreibt die nächste Handlung? Ich habe den Brief geschrieben.",
          "de": "Wählen Sie die richtige Antwort. Welche Fortsetzung beschreibt die nächste Handlung? Ich habe den Brief geschrieben.",
          "ar": "اختر الإجابة الصحيحة. Welche Fortsetzung beschreibt die nächste Handlung? Ich habe den Brief geschrieben.",
          "en": "Choose the correct answer. Welche Fortsetzung beschreibt die nächste Handlung? Ich habe den Brief geschrieben."
        },
        "selection": "single",
        "options": [
          "Denn ich habe ihn geschrieben.",
          "Danach bringe ich ihn zur Post.",
          "Sonst bringe ich ihn zur Post.",
          "Aber ich habe keinen Brief geschrieben."
        ]
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "07 – Thomas' E-Mail",
      "de": "07 – Thomas' E-Mail",
      "ar": "07 – Thomas' E-Mail",
      "en": "07 – Thomas' E-Mail"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich habe nächste Woche meine Prüfung, ___ muss ich sehr viel lernen. (Folge)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-07-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Bitte hilf mir, ___ schaffe ich die Prüfung vielleicht nicht. (andernfalls)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-07-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Wir können nachmittags lernen und danach ___ ich dich zum Essen ___. (einladen)",
        "blanks": 2
      },
      {
        "id": "kapitel-41-ubung-07-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Du hast die Prüfung schon geschafft, ___ kannst du mir bestimmt helfen. (Folge)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-07-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Welche Fortsetzung ist korrekt? Ich bin nervös.",
          "de": "Wählen Sie die richtige Antwort. Welche Fortsetzung ist korrekt? Ich bin nervös.",
          "ar": "اختر الإجابة الصحيحة. Welche Fortsetzung ist korrekt? Ich bin nervös.",
          "en": "Choose the correct answer. Welche Fortsetzung ist korrekt? Ich bin nervös."
        },
        "selection": "single",
        "options": [
          "Deshalb ich lerne viel.",
          "Deshalb lerne ich viel.",
          "Deshalb ich viel lerne.",
          "Deshalb lernen ich viel."
        ]
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "08 – Deshalb, weil und denn",
      "de": "08 – Deshalb, weil und denn",
      "ar": "08 – Deshalb, weil und denn",
      "en": "08 – Deshalb, weil und denn"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-08-q01",
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
          "Ich bin müde, deshalb ich gehe ins Bett.",
          "Ich gehe ins Bett, denn ich bin müde.",
          "Ich bin müde, deshalb gehe ich ins Bett.",
          "Ich gehe ins Bett, weil ich bin müde.",
          "Ich gehe ins Bett, weil ich müde bin."
        ]
      },
      {
        "id": "kapitel-41-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich bleibe zu Hause, weil ___.",
          "de": "Wählen Sie die richtige Antwort. Ich bleibe zu Hause, weil ___.",
          "ar": "اختر الإجابة الصحيحة. Ich bleibe zu Hause, weil ___.",
          "en": "Choose the correct answer. Ich bleibe zu Hause, weil ___."
        },
        "selection": "single",
        "options": [
          "krank bin ich",
          "ich krank bin",
          "ich bin krank",
          "bin ich krank"
        ]
      },
      {
        "id": "kapitel-41-ubung-08-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich bleibe zu Hause, denn ___.",
          "de": "Wählen Sie die richtige Antwort. Ich bleibe zu Hause, denn ___.",
          "ar": "اختر الإجابة الصحيحة. Ich bleibe zu Hause, denn ___.",
          "en": "Choose the correct answer. Ich bleibe zu Hause, denn ___."
        },
        "selection": "single",
        "options": [
          "ich bin krank",
          "bin ich krank",
          "ich krank sein",
          "ich krank bin"
        ]
      },
      {
        "id": "kapitel-41-ubung-08-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Denn besetzt Position null."
      },
      {
        "id": "kapitel-41-ubung-08-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Weil und deshalb haben in der Standardsprache dieselbe Wortstellung."
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "09 – Dialoge",
      "de": "09 – Dialoge",
      "ar": "09 – Dialoge",
      "en": "09 – Dialoge"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-41-ubung-09-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. A: Warum nimmst du den Bus? B: Mein Auto ist kaputt.",
          "de": "Wählen Sie die richtige Antwort. A: Warum nimmst du den Bus? B: Mein Auto ist kaputt.",
          "ar": "اختر الإجابة الصحيحة. A: Warum nimmst du den Bus? B: Mein Auto ist kaputt.",
          "en": "Choose the correct answer. A: Warum nimmst du den Bus? B: Mein Auto ist kaputt."
        },
        "selection": "single",
        "options": [
          "Deshalb nehme ich den Bus.",
          "Denn deshalb nehme ich.",
          "Deshalb ich den Bus nehme.",
          "Sonst ich nehme den Bus."
        ]
      },
      {
        "id": "kapitel-41-ubung-09-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. A: Darf ich später kommen? B: Bitte komm pünktlich, ___.",
          "de": "Wählen Sie die richtige Antwort. A: Darf ich später kommen? B: Bitte komm pünktlich, ___.",
          "ar": "اختر الإجابة الصحيحة. A: Darf ich später kommen? B: Bitte komm pünktlich, ___.",
          "en": "Choose the correct answer. A: Darf ich später kommen? B: Bitte komm pünktlich, ___."
        },
        "selection": "single",
        "options": [
          "sonst verpassen wir den Film",
          "deshalb wir den Film verpassen",
          "sonst wir verpassen den Film",
          "sonst verpasst wir den Film"
        ]
      },
      {
        "id": "kapitel-41-ubung-09-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Dann … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Dann … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Dann … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Dann … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "Dann",
          "zusammen lernen.",
          "können",
          "wir"
        ]
      },
      {
        "id": "kapitel-41-ubung-09-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "A: Was machen wir nach dem Essen? B: Danach ___ wir spazieren. (gehen)",
        "blanks": 1
      },
      {
        "id": "kapitel-41-ubung-09-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. A: Hast du Hunger? B: Ja. ___ koche ich etwas. (Folge)",
          "de": "Wählen Sie die richtige Antwort. A: Hast du Hunger? B: Ja. ___ koche ich etwas. (Folge)",
          "ar": "اختر الإجابة الصحيحة. A: Hast du Hunger? B: Ja. ___ koche ich etwas. (Folge)",
          "en": "Choose the correct answer. A: Hast du Hunger? B: Ja. ___ koche ich etwas. (Folge)"
        },
        "selection": "single",
        "options": [
          "Deshalb",
          "Weil",
          "Sonst",
          "Denn"
        ]
      }
    ]
  },
  {
    "id": "kapitel-41-ubung-10",
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
        "id": "kapitel-41-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Der Termin fällt aus; ___ ___ wir nicht hinfahren. (Folge; müssen)",
        "blanks": 2
      },
      {
        "id": "kapitel-41-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Notiere die Adresse, ___ ___ du sie vielleicht. (Warnung; vergessen, Präsens)",
        "blanks": 2
      },
      {
        "id": "kapitel-41-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Der Tank ist leer, ___. — Choisissez la forme ou la phrase correcte.",
          "de": "Der Tank ist leer, ___. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Der Tank ist leer, ___. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Der Tank ist leer, ___. — Choose the correct form or sentence."
        },
        "options": [
          "deshalb wir bleiben stehen",
          "deshalb bleiben wir stehen",
          "denn bleiben wir stehen",
          "weil bleiben wir stehen"
        ]
      },
      {
        "id": "kapitel-41-ubung-10-q04",
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
          "Ich lege mich hin, weil bin ich müde.",
          "Ich bin müde, deshalb ich lege mich hin.",
          "Ich bin müde, deshalb lege ich mich hin.",
          "Ich lege mich hin, weil ich müde bin."
        ]
      },
      {
        "id": "kapitel-41-ubung-10-q05",
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
            "label": "Folge"
          },
          {
            "id": "1",
            "label": "Warnung"
          },
          {
            "id": "2",
            "label": "zeitliche Abfolge (nach dieser Handlung)"
          }
        ],
        "options": [
          "danach",
          "deshalb",
          "sonst"
        ]
      },
      {
        "id": "kapitel-41-ubung-10-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Danach … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Danach … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Danach … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Danach … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "den Laden abgeschlossen.",
          "Danach",
          "die Verkäuferin",
          "hat"
        ]
      }
    ]
  }
]

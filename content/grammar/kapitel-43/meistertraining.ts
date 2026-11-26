import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-43-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "01 – Ort oder Richtung",
      "de": "01 – Ort oder Richtung",
      "ar": "01 – Ort oder Richtung",
      "en": "01 – Ort oder Richtung"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-01-q01",
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
            "label": "Wo?"
          },
          {
            "id": "item-2",
            "label": "Wohin?"
          }
        ],
        "options": [
          "nach oben",
          "oben"
        ]
      },
      {
        "id": "kapitel-43-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Wo ist die Küche? (←)",
          "de": "Wählen Sie die richtige Antwort. Wo ist die Küche? (←)",
          "ar": "اختر الإجابة الصحيحة. Wo ist die Küche? (←)",
          "en": "Choose the correct answer. Wo ist die Küche? (←)"
        },
        "selection": "single",
        "options": [
          "nach rechts",
          "rechts",
          "links",
          "nach links"
        ]
      },
      {
        "id": "kapitel-43-ubung-01-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Wohin soll ich gehen? (↑, Richtung mit nach)",
          "de": "Wählen Sie die richtige Antwort. Wohin soll ich gehen? (↑, Richtung mit nach)",
          "ar": "اختر الإجابة الصحيحة. Wohin soll ich gehen? (↑, Richtung mit nach)",
          "en": "Choose the correct answer. Wohin soll ich gehen? (↑, Richtung mit nach)"
        },
        "selection": "single",
        "options": [
          "oben",
          "unten",
          "nach oben",
          "nach unten"
        ]
      },
      {
        "id": "kapitel-43-ubung-01-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Hinten bezeichnet eine Position."
      },
      {
        "id": "kapitel-43-ubung-01-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Nach rechts beantwortet die Frage Wo?"
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "02 – Positionsadverbien",
      "de": "02 – Positionsadverbien",
      "ar": "02 – Positionsadverbien",
      "en": "02 – Positionsadverbien"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-02-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Der Keller ist ___. (unten oder oben?)",
        "blanks": 1
      },
      {
        "id": "kapitel-43-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Die Fahrer sitzen ___. (vorne oder hinten?)",
        "blanks": 1
      },
      {
        "id": "kapitel-43-ubung-02-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Das Dach liegt ___.",
          "de": "Wählen Sie die richtige Antwort. Das Dach liegt ___.",
          "ar": "اختر الإجابة الصحيحة. Das Dach liegt ___.",
          "en": "Choose the correct answer. Das Dach liegt ___."
        },
        "selection": "single",
        "options": [
          "nach unten",
          "nach oben",
          "unten",
          "oben"
        ]
      },
      {
        "id": "kapitel-43-ubung-02-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Die Rücksitze sind ___.",
          "de": "Wählen Sie die richtige Antwort. Die Rücksitze sind ___.",
          "ar": "اختر الإجابة الصحيحة. Die Rücksitze sind ___.",
          "en": "Choose the correct answer. Die Rücksitze sind ___."
        },
        "selection": "single",
        "options": [
          "nach hinten",
          "hinten",
          "vorne",
          "nach vorne"
        ]
      },
      {
        "id": "kapitel-43-ubung-02-q05",
        "position": 5,
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
            "label": "← Position"
          },
          {
            "id": "item-2",
            "label": "→ Position"
          },
          {
            "id": "item-3",
            "label": "↑ Position"
          },
          {
            "id": "item-4",
            "label": "↓ Position"
          }
        ],
        "options": [
          "links",
          "rechts",
          "unten",
          "oben"
        ]
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "03 – Verben und Position",
      "de": "03 – Verben und Position",
      "ar": "03 – Verben und Position",
      "en": "03 – Verben und Position"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-03-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Die Kinder ___ oben im Zimmer. (Aktivität)",
          "de": "Wählen Sie die richtige Antwort. Die Kinder ___ oben im Zimmer. (Aktivität)",
          "ar": "اختر الإجابة الصحيحة. Die Kinder ___ oben im Zimmer. (Aktivität)",
          "en": "Choose the correct answer. Die Kinder ___ oben im Zimmer. (Aktivität)"
        },
        "selection": "single",
        "options": [
          "spiele",
          "spielen",
          "spielt",
          "spielst"
        ]
      },
      {
        "id": "kapitel-43-ubung-03-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. ___ Sie nach oben! (Imperativ: gehen)",
          "de": "Wählen Sie die richtige Antwort. ___ Sie nach oben! (Imperativ: gehen)",
          "ar": "اختر الإجابة الصحيحة. ___ Sie nach oben! (Imperativ: gehen)",
          "en": "Choose the correct answer. ___ Sie nach oben! (Imperativ: gehen)"
        },
        "selection": "single",
        "options": [
          "Geh",
          "Geht",
          "Gehen",
          "Gegangen"
        ]
      },
      {
        "id": "kapitel-43-ubung-03-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Der Ballon fliegt ___ am Himmel. (Position: hoch)",
        "blanks": 1
      },
      {
        "id": "kapitel-43-ubung-03-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Der Aufzug fährt ___ ___. (Richtung: ↑ mit nach)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-03-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases correctes.",
          "de": "Wählen Sie alle richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة.",
          "en": "Select all correct sentences."
        },
        "selection": "multiple",
        "options": [
          "Er wohnt nach unten.",
          "Die Kinder sind nach oben.",
          "Die Kinder spielen oben.",
          "Er bleibt unten."
        ]
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "04 – Richtungsangaben",
      "de": "04 – Richtungsangaben",
      "ar": "04 – Richtungsangaben",
      "en": "04 – Richtungsangaben"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-04-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Er steht oben. Er geht ___ ___. (↓ mit nach)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Sie ist hinten. Sie geht ___ ___. (Richtung: vorne)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-04-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Er steht links. Er geht ___ ___. (Richtung: rechts)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Sie ist rechts. Sie geht ___ ___. (Richtung: links)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-04-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Er … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Er … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Er … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Er … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "nach hinten.",
          "geht",
          "Er"
        ]
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "05 – Mit oder ohne nach",
      "de": "05 – Mit oder ohne nach",
      "ar": "05 – Mit oder ohne nach",
      "en": "05 – Mit oder ohne nach"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-05-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich bin ___ auf dem Turm.",
          "de": "Wählen Sie die richtige Antwort. Ich bin ___ auf dem Turm.",
          "ar": "اختر الإجابة الصحيحة. Ich bin ___ auf dem Turm.",
          "en": "Choose the correct answer. Ich bin ___ auf dem Turm."
        },
        "selection": "single",
        "options": [
          "nach unten",
          "oben",
          "dahin",
          "nach oben"
        ]
      },
      {
        "id": "kapitel-43-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Komm doch auch ___! (Richtung mit nach)",
          "de": "Wählen Sie die richtige Antwort. Komm doch auch ___! (Richtung mit nach)",
          "ar": "اختر الإجابة الصحيحة. Komm doch auch ___! (Richtung mit nach)",
          "en": "Choose the correct answer. Komm doch auch ___! (Richtung mit nach)"
        },
        "selection": "single",
        "options": [
          "oben",
          "nach oben",
          "hinten",
          "dort"
        ]
      },
      {
        "id": "kapitel-43-ubung-05-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Bitte kommen Sie ___, dann sehen Sie besser. (Richtung nach vorne)",
          "de": "Wählen Sie die richtige Antwort. Bitte kommen Sie ___, dann sehen Sie besser. (Richtung nach vorne)",
          "ar": "اختر الإجابة الصحيحة. Bitte kommen Sie ___, dann sehen Sie besser. (Richtung nach vorne)",
          "en": "Choose the correct answer. Bitte kommen Sie ___, dann sehen Sie besser. (Richtung nach vorne)"
        },
        "selection": "single",
        "options": [
          "hinten",
          "nach vorne",
          "vorne",
          "nach hinten"
        ]
      },
      {
        "id": "kapitel-43-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "___ ist ein Supermarkt. (unten, Position)",
        "blanks": 1
      },
      {
        "id": "kapitel-43-ubung-05-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Meine Freundin wohnt ___. (oben, Position)",
        "blanks": 1
      },
      {
        "id": "kapitel-43-ubung-05-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les blancs.",
          "de": "Ergänzen Sie die Lücken.",
          "ar": "أكمل الفراغات.",
          "en": "Fill in the blanks."
        },
        "sentence": "Ich gehe oft ___ ___. (↑ mit nach)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-05-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Sie kommt zu uns ___. (Zielrichtung mit nach)",
          "de": "Wählen Sie die richtige Antwort. Sie kommt zu uns ___. (Zielrichtung mit nach)",
          "ar": "اختر الإجابة الصحيحة. Sie kommt zu uns ___. (Zielrichtung mit nach)",
          "en": "Choose the correct answer. Sie kommt zu uns ___. (Zielrichtung mit nach)"
        },
        "selection": "single",
        "options": [
          "unten",
          "oben",
          "dort",
          "nach unten"
        ]
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "06 – Da und dort",
      "de": "06 – Da und dort",
      "ar": "06 – Da und dort",
      "en": "06 – Da und dort"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich war noch nicht ___ (Ort).",
          "de": "Wählen Sie die richtige Antwort. Ich war noch nicht ___ (Ort).",
          "ar": "اختر الإجابة الصحيحة. Ich war noch nicht ___ (Ort).",
          "en": "Choose the correct answer. Ich war noch nicht ___ (Ort)."
        },
        "selection": "single",
        "options": [
          "dorthin",
          "nach dort",
          "dort",
          "dahin"
        ]
      },
      {
        "id": "kapitel-43-ubung-06-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Siehst du das alte Haus? ___ habe ich gewohnt.",
          "de": "Wählen Sie die richtige Antwort. Siehst du das alte Haus? ___ habe ich gewohnt.",
          "ar": "اختر الإجابة الصحيحة. Siehst du das alte Haus? ___ habe ich gewohnt.",
          "en": "Choose the correct answer. Siehst du das alte Haus? ___ habe ich gewohnt."
        },
        "selection": "single",
        "options": [
          "Dorthin",
          "Da",
          "Nach da",
          "Dahin"
        ]
      },
      {
        "id": "kapitel-43-ubung-06-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases correctes.",
          "de": "Wählen Sie alle richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة.",
          "en": "Select all correct sentences."
        },
        "selection": "multiple",
        "options": [
          "Da wohnt Anna.",
          "Dorthin ist ein Café.",
          "Dahin wohnt Anna.",
          "Dort ist ein Café."
        ]
      },
      {
        "id": "kapitel-43-ubung-06-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Dort kann einen bekannten Ort bezeichnen."
      },
      {
        "id": "kapitel-43-ubung-06-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Dort … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Dort … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Dort … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Dort … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "mein Fahrrad.",
          "steht",
          "Dort"
        ]
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "07 – Bekannte Ziele",
      "de": "07 – Bekannte Ziele",
      "ar": "07 – Bekannte Ziele",
      "en": "07 – Bekannte Ziele"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-07-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Wir fliegen nach Stockholm. Ich möchte auch ___ fliegen.",
          "de": "Wählen Sie die richtige Antwort. Wir fliegen nach Stockholm. Ich möchte auch ___ fliegen.",
          "ar": "اختر الإجابة الصحيحة. Wir fliegen nach Stockholm. Ich möchte auch ___ fliegen.",
          "en": "Choose the correct answer. Wir fliegen nach Stockholm. Ich möchte auch ___ fliegen."
        },
        "selection": "single",
        "options": [
          "da",
          "hier",
          "dorthin",
          "dort"
        ]
      },
      {
        "id": "kapitel-43-ubung-07-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Morgen ist Flohmarkt. Gehst du auch ___? (Ziel)",
          "de": "Wählen Sie die richtige Antwort. Morgen ist Flohmarkt. Gehst du auch ___? (Ziel)",
          "ar": "اختر الإجابة الصحيحة. Morgen ist Flohmarkt. Gehst du auch ___? (Ziel)",
          "en": "Choose the correct answer. Morgen ist Flohmarkt. Gehst du auch ___? (Ziel)"
        },
        "selection": "single",
        "options": [
          "dahin",
          "dort",
          "hier",
          "da"
        ]
      },
      {
        "id": "kapitel-43-ubung-07-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Warst du schon in Peru? Nein, aber ich möchte ___ fahren.",
          "de": "Wählen Sie die richtige Antwort. Warst du schon in Peru? Nein, aber ich möchte ___ fahren.",
          "ar": "اختر الإجابة الصحيحة. Warst du schon in Peru? Nein, aber ich möchte ___ fahren.",
          "en": "Choose the correct answer. Warst du schon in Peru? Nein, aber ich möchte ___ fahren."
        },
        "selection": "single",
        "options": [
          "dort",
          "hier",
          "da",
          "dorthin"
        ]
      },
      {
        "id": "kapitel-43-ubung-07-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases correctes.",
          "de": "Wählen Sie alle richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة.",
          "en": "Select all correct sentences."
        },
        "selection": "multiple",
        "options": [
          "Wir gehen dorthin.",
          "Ich wohne dahin.",
          "Wir bleiben dorthin.",
          "Ich fahre dahin."
        ]
      },
      {
        "id": "kapitel-43-ubung-07-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Dahin verweist auf ein Ziel."
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "08 – Temporales da",
      "de": "08 – Temporales da",
      "ar": "08 – Temporales da",
      "en": "08 – Temporales da"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-08-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Arbeitest du nächste Woche? Nein, da habe ich frei. Da = ___.",
          "de": "Wählen Sie die richtige Antwort. Arbeitest du nächste Woche? Nein, da habe ich frei. Da = ___.",
          "ar": "اختر الإجابة الصحيحة. Arbeitest du nächste Woche? Nein, da habe ich frei. Da = ___.",
          "en": "Choose the correct answer. Arbeitest du nächste Woche? Nein, da habe ich frei. Da = ___."
        },
        "selection": "single",
        "options": [
          "am Montag",
          "im August",
          "nächste Woche",
          "heute Abend"
        ]
      },
      {
        "id": "kapitel-43-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Ich habe im August Geburtstag. Da feiere ich. Da = ___.",
          "de": "Wählen Sie die richtige Antwort. Ich habe im August Geburtstag. Da feiere ich. Da = ___.",
          "ar": "اختر الإجابة الصحيحة. Ich habe im August Geburtstag. Da feiere ich. Da = ___.",
          "en": "Choose the correct answer. Ich habe im August Geburtstag. Da feiere ich. Da = ___."
        },
        "selection": "single",
        "options": [
          "heute Abend",
          "am Montag",
          "nächste Woche",
          "im August"
        ]
      },
      {
        "id": "kapitel-43-ubung-08-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Heute Abend kommt Anna. Da habe ich keine Zeit. Da = ___.",
          "de": "Wählen Sie die richtige Antwort. Heute Abend kommt Anna. Da habe ich keine Zeit. Da = ___.",
          "ar": "اختر الإجابة الصحيحة. Heute Abend kommt Anna. Da habe ich keine Zeit. Da = ___.",
          "en": "Choose the correct answer. Heute Abend kommt Anna. Da habe ich keine Zeit. Da = ___."
        },
        "selection": "single",
        "options": [
          "heute Abend",
          "im August",
          "nächste Woche",
          "am Montag"
        ]
      },
      {
        "id": "kapitel-43-ubung-08-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Fährst du im Mai mit? Leider kann ich da nicht. Da = ___.",
          "de": "Wählen Sie die richtige Antwort. Fährst du im Mai mit? Leider kann ich da nicht. Da = ___.",
          "ar": "اختر الإجابة الصحيحة. Fährst du im Mai mit? Leider kann ich da nicht. Da = ___.",
          "en": "Choose the correct answer. Fährst du im Mai mit? Leider kann ich da nicht. Da = ___."
        },
        "selection": "single",
        "options": [
          "nach Peru",
          "in Peru",
          "im Juli",
          "im Mai"
        ]
      },
      {
        "id": "kapitel-43-ubung-08-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Da bezeichnet immer nur einen Ort."
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-09",
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
        "id": "kapitel-43-ubung-09-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Kommst du ins Kino? Nein, ich war gestern schon ___. (Position; Wortfamilie da) — Choisissez la forme ou la phrase correcte.",
          "de": "Kommst du ins Kino? Nein, ich war gestern schon ___. (Position; Wortfamilie da) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Kommst du ins Kino? Nein, ich war gestern schon ___. (Position; Wortfamilie da) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Kommst du ins Kino? Nein, ich war gestern schon ___. (Position; Wortfamilie da) — Choose the correct form or sentence."
        },
        "options": [
          "dahin",
          "dorthin",
          "nach da",
          "da"
        ]
      },
      {
        "id": "kapitel-43-ubung-09-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Was ist am 23. März? ___ ist unsere Feier.",
          "de": "Wählen Sie die richtige Antwort. Was ist am 23. März? ___ ist unsere Feier.",
          "ar": "اختر الإجابة الصحيحة. Was ist am 23. März? ___ ist unsere Feier.",
          "en": "Choose the correct answer. Was ist am 23. März? ___ ist unsere Feier."
        },
        "selection": "single",
        "options": [
          "Da",
          "Dorthin",
          "Nach oben",
          "Dahin"
        ]
      },
      {
        "id": "kapitel-43-ubung-09-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Da … — Commencez par ce bloc et reconstituez la phrase dans l’ordre neutre.",
          "de": "Da … — Beginnen Sie mit diesem Block und bilden Sie den Satz in neutraler Wortstellung.",
          "ar": "Da … — ابدأ بهذه المجموعة ورتب الجملة ترتيباً محايداً.",
          "en": "Da … — Start with this chunk and reconstruct the sentence in neutral word order."
        },
        "tokens": [
          "Da",
          "keinen Urlaub.",
          "habe",
          "ich"
        ]
      },
      {
        "id": "kapitel-43-ubung-09-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Warst du in Peru? Nein, ich war noch nie ___.",
          "de": "Wählen Sie die richtige Antwort. Warst du in Peru? Nein, ich war noch nie ___.",
          "ar": "اختر الإجابة الصحيحة. Warst du in Peru? Nein, ich war noch nie ___.",
          "en": "Choose the correct answer. Warst du in Peru? Nein, ich war noch nie ___."
        },
        "selection": "single",
        "options": [
          "dorthin",
          "nach dort",
          "dahin",
          "dort"
        ]
      },
      {
        "id": "kapitel-43-ubung-09-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Da in „Da ist Ostern“ kann zeitlich gemeint sein."
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-10",
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
        "id": "kapitel-43-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Wo ist die Dachterrasse? Ganz ___. Wohin fährt der Lift? ___ ___. (↑)",
        "blanks": 3
      },
      {
        "id": "kapitel-43-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Der Eingang ist links. Gehen Sie ___ ___, dann sind Sie links. (←)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Kennst du den neuen Park? Ich bin noch nie ___. (Ziel; verwenden Sie dorthin) — Choisissez la forme ou la phrase correcte.",
          "de": "Kennst du den neuen Park? Ich bin noch nie ___. (Ziel; verwenden Sie dorthin) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Kennst du den neuen Park? Ich bin noch nie ___. (Ziel; verwenden Sie dorthin) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Kennst du den neuen Park? Ich bin noch nie ___. (Ziel; verwenden Sie dorthin) — Choose the correct form or sentence."
        },
        "options": [
          "dort gefahren",
          "dorthin gefahren",
          "nach dort gefahren",
          "dorthin gewesen"
        ]
      },
      {
        "id": "kapitel-43-ubung-10-q04",
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
          "Die Kinder wohnen dorthin.",
          "Die Kinder sind nach unten. (Position)",
          "Die Kinder spielen unten.",
          "Die Kinder laufen nach unten."
        ]
      },
      {
        "id": "kapitel-43-ubung-10-q05",
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
            "label": "Position: ↑"
          },
          {
            "id": "1",
            "label": "Ziel: ↑"
          },
          {
            "id": "2",
            "label": "Position: ←"
          },
          {
            "id": "3",
            "label": "Ziel: ←"
          }
        ],
        "options": [
          "oben",
          "nach links",
          "nach oben",
          "links"
        ]
      },
      {
        "id": "kapitel-43-ubung-10-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Nach rechts … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Nach rechts … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Nach rechts … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Nach rechts … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "Nach rechts",
          "an der Ampel ab.",
          "biegt",
          "der Bus"
        ]
      }
    ]
  }
]

import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-09-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Associer",
      "de": "Was passt zusammen?",
      "ar": "المطابقة",
      "en": "Match"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-01-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ heißt du? – Anna.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-01-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ ist das? – Mein Mann.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-01-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ ist Ihr Name? – Müller.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-01-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ sind Sie von Beruf? – Lehrer.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-01-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ ist das? – Mein Handy.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-01-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kommen Sie? – Aus Hangzhou.",
        "blanks": 1
      },
      {
        "type": "matching",
        "prompt": {
          "fr": "Associez.",
          "de": "Ordnen Sie zu.",
          "ar": "صل بين العناصر.",
          "en": "Match the items."
        },
        "items": [
          {
            "id": "i0",
            "label": "… wohnst du? — In Bonn."
          },
          {
            "id": "i1",
            "label": "… kommst du? — Aus Bonn."
          },
          {
            "id": "i2",
            "label": "… fährst du? — Nach Bonn."
          }
        ],
        "options": [
          "Wohin",
          "Woher",
          "Wo"
        ],
        "id": "kapitel-09-ubung-01-div-7",
        "position": 7
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Former des questions",
      "de": "Fragen schreiben",
      "ar": "تكوين الأسئلة",
      "en": "Form questions"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-02-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Sie",
          "?",
          "Wie",
          "heißen"
        ]
      },
      {
        "id": "kapitel-09-ubung-02-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Ihr",
          "Vorname",
          "?",
          "Wie",
          "ist"
        ]
      },
      {
        "id": "kapitel-09-ubung-02-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Sie",
          "?",
          "Woher",
          "kommen"
        ]
      },
      {
        "id": "kapitel-09-ubung-02-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Sie",
          "?",
          "Wo",
          "wohnen"
        ]
      },
      {
        "id": "kapitel-09-ubung-02-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Sie",
          "von",
          "Beruf",
          "?",
          "Was",
          "sind"
        ]
      },
      {
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les correspondances correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر كل المطابقات الصحيحة.",
          "en": "Select all correct matches."
        },
        "options": [
          "… besuchst du? — Anna. → Wen",
          "… gehört das Buch? — Anna. → Wo",
          "… gehört das Buch? — Anna. → Wem",
          "… besuchst du? — Anna. → Wo",
          "… kommt? — Anna. → Wer",
          "… kommt? — Anna. → Wo"
        ],
        "id": "kapitel-09-ubung-02-div-6",
        "position": 6
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Mots interrogatifs",
      "de": "Fragewörter",
      "ar": "أدوات الاستفهام",
      "en": "Question words"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kommt heute? – Dennis.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-03-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kostet das? – 3,50 Euro.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-03-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ Kinder haben Sie? – Fünf.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-03-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kommt er? – Um halb acht. (genaue Uhrzeit)",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ beginnt der Film? – Heute Abend.",
        "blanks": 1
      },
      {
        "type": "true_false",
        "prompt": {
          "fr": "Cette association est-elle correcte ?",
          "de": "Ist diese Zuordnung richtig?",
          "ar": "هل هذه المطابقة صحيحة؟",
          "en": "Is this match correct?"
        },
        "statement": "… fährst du? — Nach Bonn. → Wo",
        "id": "kapitel-09-ubung-03-div-6",
        "position": 6
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Dialogue",
      "de": "Dialog",
      "ar": "حوار",
      "en": "Dialogue"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-04-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Und ___ heißen Sie? – Gisela Baumann.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kommen Sie? – Aus Ulm.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-04-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ wohnen Sie? – In München.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ ist das? – Mein Sohn.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ ist er? – Fünf Jahre.",
        "blanks": 1
      },
      {
        "type": "matching",
        "prompt": {
          "fr": "Associez.",
          "de": "Ordnen Sie zu.",
          "ar": "صل بين العناصر.",
          "en": "Match the items."
        },
        "items": [
          {
            "id": "i0",
            "label": "… kommt? — Anna."
          },
          {
            "id": "i1",
            "label": "… besuchst du? — Anna."
          },
          {
            "id": "i2",
            "label": "… gehört das Buch? — Anna."
          }
        ],
        "options": [
          "Wen",
          "Wem",
          "Wer"
        ],
        "id": "kapitel-09-ubung-04-div-6",
        "position": 6
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Lieu et direction",
      "de": "Wo – woher – wohin",
      "ar": "المكان والاتجاه",
      "en": "Place and direction"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-05-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ ist mein Handy? – Im Wohnzimmer.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-05-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ warst du gerade? – Im Wohnzimmer.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kommst du? – Aus der Stadt.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ willst du gehen? – Ins Kino.",
        "blanks": 1
      },
      {
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les correspondances correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر كل المطابقات الصحيحة.",
          "en": "Select all correct matches."
        },
        "options": [
          "… kommst du? — Aus Bonn. → Woher",
          "… fährst du? — Nach Bonn. → Wohin",
          "… fährst du? — Nach Bonn. → Wo",
          "… wohnst du? — In Bonn. → Woher",
          "… wohnst du? — In Bonn. → Wo",
          "… kommst du? — Aus Bonn. → Wo"
        ],
        "id": "kapitel-09-ubung-05-div-5",
        "position": 5
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Les cas",
      "de": "Wer – wen – wem",
      "ar": "الحالات الإعرابية",
      "en": "Cases"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-06-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kommt heute? – Der Lehrer.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ gehst du ins Theater? – Mit dem Lehrer.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-06-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ hast du besucht? – Den Lehrer.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ gehört die Tasche? – Dem Lehrer.",
        "blanks": 1
      },
      {
        "type": "true_false",
        "prompt": {
          "fr": "Cette association est-elle correcte ?",
          "de": "Ist diese Zuordnung richtig?",
          "ar": "هل هذه المطابقة صحيحة؟",
          "en": "Is this match correct?"
        },
        "statement": "… gehört das Buch? — Anna. → Wem",
        "id": "kapitel-09-ubung-06-div-5",
        "position": 5
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Questions et réponses",
      "de": "Fragen und Antworten",
      "ar": "أسئلة وأجوبة",
      "en": "Questions and answers"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ gehört die Brille? – Mir.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-07-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ hast du gesehen? – Den Nachbarn.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-07-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ fahren Sie in Urlaub? – In die Alpen.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-07-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ hast du das Geschenk? – Von meinen Eltern.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ bist du gefahren? – Allein.",
        "blanks": 1
      },
      {
        "type": "matching",
        "prompt": {
          "fr": "Associez.",
          "de": "Ordnen Sie zu.",
          "ar": "صل بين العناصر.",
          "en": "Match the items."
        },
        "items": [
          {
            "id": "i0",
            "label": "… wohnst du? — In Bonn."
          },
          {
            "id": "i1",
            "label": "… kommst du? — Aus Bonn."
          },
          {
            "id": "i2",
            "label": "… fährst du? — Nach Bonn."
          }
        ],
        "options": [
          "Wo",
          "Wohin",
          "Woher"
        ],
        "id": "kapitel-09-ubung-07-div-6",
        "position": 6
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Questions A2",
      "de": "Fragen A2",
      "ar": "أسئلة A2",
      "en": "A2 questions"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-08-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ ist der Herr dort? – Ein Freund.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-08-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ suchen Sie? – Den Lehrer.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-08-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kommt sie später? – Weil der Zug Verspätung hat.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ fahrt ihr nach Berlin? – Mit Freunden.",
        "blanks": 1
      },
      {
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les correspondances correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر كل المطابقات الصحيحة.",
          "en": "Select all correct matches."
        },
        "options": [
          "… besuchst du? — Anna. → Wo",
          "… besuchst du? — Anna. → Wen",
          "… kommt? — Anna. → Wer",
          "… gehört das Buch? — Anna. → Wo",
          "… gehört das Buch? — Anna. → Wem",
          "… kommt? — Anna. → Wo"
        ],
        "id": "kapitel-09-ubung-08-div-5",
        "position": 5
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Zeit und Menge",
      "de": "Zeit und Menge",
      "ar": "Zeit und Menge",
      "en": "Zeit und Menge"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-09-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ dauert der Kurs? – Drei Monate.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ kostet das Brot? – Zwei Euro.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-09-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ Bücher hast du? – Drei.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-09-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ beginnt der Kurs? – Morgen.",
        "blanks": 1
      },
      {
        "type": "true_false",
        "prompt": {
          "fr": "Cette association est-elle correcte ?",
          "de": "Ist diese Zuordnung richtig?",
          "ar": "هل هذه المطابقة صحيحة؟",
          "en": "Is this match correct?"
        },
        "statement": "… fährst du? — Nach Bonn. → Wo",
        "id": "kapitel-09-ubung-09-div-5",
        "position": 5
      }
    ]
  },
  {
    "id": "kapitel-09-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Abschlusstest",
      "de": "Abschlusstest",
      "ar": "Abschlusstest",
      "en": "Abschlusstest"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-09-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ gehört das Auto? – Meiner Schwester.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ fährt der Bus? – Zum Bahnhof.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-10-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ lernst du Deutsch? – Weil ich in Deutschland arbeiten möchte.",
        "blanks": 1
      },
      {
        "id": "kapitel-09-ubung-10-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "___ ist deine Mutter? – Zu Hause.",
        "blanks": 1
      },
      {
        "type": "matching",
        "prompt": {
          "fr": "Associez.",
          "de": "Ordnen Sie zu.",
          "ar": "صل بين العناصر.",
          "en": "Match the items."
        },
        "items": [
          {
            "id": "i0",
            "label": "… kommt? — Anna."
          },
          {
            "id": "i1",
            "label": "… besuchst du? — Anna."
          },
          {
            "id": "i2",
            "label": "… gehört das Buch? — Anna."
          }
        ],
        "options": [
          "Wen",
          "Wem",
          "Wer"
        ],
        "id": "kapitel-09-ubung-10-div-5",
        "position": 5
      }
    ]
  }
]

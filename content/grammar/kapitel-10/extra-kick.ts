import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-10-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Im Café",
      "de": "Im Café",
      "ar": "Im Café",
      "en": "Im Café"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-11-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Möchten Sie Kaffee? – ___, bitte.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-11-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Möchten Sie keinen Kuchen? – ___, ich möchte ein Stück.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-11-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Trinken Sie Tee? – ___, ich trinke nur Wasser.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-11-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Ist der Tisch frei? – ___, er ist frei.",
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
          "Kommst du nicht? — Ich komme. → Doch",
          "Kommst du? — Ich komme nicht. → Ja",
          "Kommst du? — Ich komme. → Ja",
          "Kommst du? — Ich komme. → Doch",
          "Kommst du? — Ich komme nicht. → Nein",
          "Kommst du nicht? — Ich komme. → Ja"
        ],
        "id": "kapitel-10-ubung-11-div-5",
        "position": 5
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "Beim Amt",
      "de": "Beim Amt",
      "ar": "Beim Amt",
      "en": "Beim Amt"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-12-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "mir",
          "bitte",
          "helfen",
          "?",
          "Könnten",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-12-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "bitte",
          "hier",
          "unterschreiben",
          "?",
          "Würden",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-12-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "mir",
          "das",
          "Formular",
          "geben",
          "?",
          "Könnten",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-12-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "bitte",
          "die",
          "Tür",
          "öffnen",
          "?",
          "Würden",
          "Sie"
        ]
      },
      {
        "type": "true_false",
        "prompt": {
          "fr": "Cette association est-elle correcte ?",
          "de": "Ist diese Zuordnung richtig?",
          "ar": "هل هذه المطابقة صحيحة؟",
          "en": "Is this match correct?"
        },
        "statement": "Hast du Zeit? — Ich habe keine Zeit. → Nein",
        "id": "kapitel-10-ubung-12-div-5",
        "position": 5
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Antwort-Challenge",
      "de": "Antwort-Challenge",
      "ar": "Antwort-Challenge",
      "en": "Antwort-Challenge"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Haben Sie keinen Termin? – ___, ich habe einen.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-13-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Sind Sie nicht Herr Klein? – ___, ich bin Herr Klein.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-13-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Ist das nicht Ihr Pass? – ___, das ist nicht meiner.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-13-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez selon le contexte.",
          "de": "Ergänzen Sie passend zum Kontext.",
          "ar": "أكمل حسب السياق.",
          "en": "Complete according to context."
        },
        "sentence": "Kommen Sie morgen? – ___, um neun.",
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
            "label": "Kommst du? — Ich komme."
          },
          {
            "id": "i1",
            "label": "Kommst du nicht? — Ich komme."
          },
          {
            "id": "i2",
            "label": "Kommst du? — Ich komme nicht."
          }
        ],
        "options": [
          "Doch",
          "Ja",
          "Nein"
        ],
        "id": "kapitel-10-ubung-13-div-5",
        "position": 5
      }
    ]
  }
]

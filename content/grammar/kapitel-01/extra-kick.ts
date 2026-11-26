import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-01-extra-kick",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Anrede",
      "de": "Anrede",
      "ar": "Anrede",
      "en": "Anrede"
    },
    "description": {
      "fr": "Choisissez le pronom.",
      "de": "Wählen Sie das Pronomen.",
      "ar": "اختر الضمير.",
      "en": "Choose the pronoun."
    },
    "questions": [
      {
        "id": "kapitel-01-extra-kick-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "es",
          "wir",
          "du"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Anna (direkte Anrede)",
          "de": "Welches Pronomen passt: Anna (direkte Anrede)",
          "ar": "ما الضمير المناسب: Anna (direkte Anrede)",
          "en": "Which pronoun fits: Anna (direkte Anrede)"
        }
      },
      {
        "id": "kapitel-01-extra-kick-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "du",
          "Sie",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Frau Schmidt (höfliche Anrede)",
          "de": "Welches Pronomen passt: Frau Schmidt (höfliche Anrede)",
          "ar": "ما الضمير المناسب: Frau Schmidt (höfliche Anrede)",
          "en": "Which pronoun fits: Frau Schmidt (höfliche Anrede)"
        }
      },
      {
        "id": "kapitel-01-extra-kick-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Quel pronom remplace : Daniel und Anna (direkte Anrede)",
          "de": "Welches Pronomen passt: Daniel und Anna (direkte Anrede)",
          "ar": "ما الضمير المناسب: Daniel und Anna (direkte Anrede)",
          "en": "Which pronoun fits: Daniel und Anna (direkte Anrede)"
        },
        "statement": "Welches Pronomen passt: Daniel und Anna (direkte Anrede) → ihr"
      },
      {
        "id": "kapitel-01-extra-kick-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "es",
          "wir",
          "Sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Herr Meyer und Frau Schmidt (höfliche Anrede)",
          "de": "Welches Pronomen passt: Herr Meyer und Frau Schmidt (höfliche Anrede)",
          "ar": "ما الضمير المناسب: Herr Meyer und Frau Schmidt (höfliche Anrede)",
          "en": "Which pronoun fits: Herr Meyer und Frau Schmidt (höfliche Anrede)"
        }
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "Dialoge",
      "de": "Dialoge",
      "ar": "Dialoge",
      "en": "Dialoge"
    },
    "description": {
      "fr": "Choisissez le pronom.",
      "de": "Wählen Sie das Pronomen.",
      "ar": "اختر الضمير.",
      "en": "Choose the pronoun."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-12-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "du",
          "wir",
          "ich"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Mario und ich",
          "de": "Welches Pronomen passt: Mario und ich",
          "ar": "ما الضمير المناسب: Mario und ich",
          "en": "Which pronoun fits: Mario und ich"
        }
      },
      {
        "id": "kapitel-01-ubung-12-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "er",
          "ihr",
          "wir"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Peter",
          "de": "Welches Pronomen passt: Peter",
          "ar": "ما الضمير المناسب: Peter",
          "en": "Which pronoun fits: Peter"
        }
      },
      {
        "id": "kapitel-01-ubung-12-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Quel pronom remplace : Marie",
          "de": "Welches Pronomen passt: Marie",
          "ar": "ما الضمير المناسب: Marie",
          "en": "Which pronoun fits: Marie"
        },
        "statement": "Welches Pronomen passt: Marie → sie"
      },
      {
        "id": "kapitel-01-ubung-12-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "er",
          "sie",
          "ihr"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Kuchen",
          "de": "Welches Pronomen passt: der Kuchen",
          "ar": "ما الضمير المناسب: der Kuchen",
          "en": "Which pronoun fits: der Kuchen"
        }
      },
      {
        "id": "kapitel-01-ubung-12-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "ich",
          "sie",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Elena und Mario",
          "de": "Welches Pronomen passt: Elena und Mario",
          "ar": "ما الضمير المناسب: Elena und Mario",
          "en": "Which pronoun fits: Elena und Mario"
        }
      },
      {
        "id": "kapitel-01-ubung-12-association",
        "position": 6,
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
            "label": "der Löffel"
          },
          {
            "id": "i1",
            "label": "das Messer"
          },
          {
            "id": "i2",
            "label": "die Gabel"
          }
        ],
        "options": [
          "es",
          "sie",
          "er"
        ]
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Personen",
      "de": "Personen",
      "ar": "Personen",
      "en": "Personen"
    },
    "description": {
      "fr": "Choisissez le pronom.",
      "de": "Wählen Sie das Pronomen.",
      "ar": "اختر الضمير.",
      "en": "Choose the pronoun."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-13-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "ihr",
          "es",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Herr Gupta",
          "de": "Welches Pronomen passt: Herr Gupta",
          "ar": "ما الضمير المناسب: Herr Gupta",
          "en": "Which pronoun fits: Herr Gupta"
        }
      },
      {
        "id": "kapitel-01-ubung-13-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "wir",
          "ihr",
          "sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Frau Kioka",
          "de": "Welches Pronomen passt: Frau Kioka",
          "ar": "ما الضمير المناسب: Frau Kioka",
          "en": "Which pronoun fits: Frau Kioka"
        }
      },
      {
        "id": "kapitel-01-ubung-13-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Quel pronom remplace : Herr Gupta und Frau Kioka",
          "de": "Welches Pronomen passt: Herr Gupta und Frau Kioka",
          "ar": "ما الضمير المناسب: Herr Gupta und Frau Kioka",
          "en": "Which pronoun fits: Herr Gupta und Frau Kioka"
        },
        "statement": "Welches Pronomen passt: Herr Gupta und Frau Kioka → sie"
      },
      {
        "id": "kapitel-01-ubung-13-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "du",
          "er",
          "wir"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Anna und ich",
          "de": "Welches Pronomen passt: Anna und ich",
          "ar": "ما الضمير المناسب: Anna und ich",
          "en": "Which pronoun fits: Anna und ich"
        }
      },
      {
        "id": "kapitel-01-ubung-13-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "wir",
          "ihr",
          "es"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Marc und Dominic (direkte Anrede)",
          "de": "Welches Pronomen passt: Marc und Dominic (direkte Anrede)",
          "ar": "ما الضمير المناسب: Marc und Dominic (direkte Anrede)",
          "en": "Which pronoun fits: Marc und Dominic (direkte Anrede)"
        }
      },
      {
        "id": "kapitel-01-ubung-13-multi",
        "position": 6,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "der Löffel → er",
          "die Gabel → sie",
          "das Messer → sie",
          "der Löffel → es",
          "das Messer → es"
        ],
        "prompt": {
          "fr": "Sélectionnez toutes les associations correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر كل المطابقات الصحيحة.",
          "en": "Select all correct pairs."
        }
      }
    ]
  }
]

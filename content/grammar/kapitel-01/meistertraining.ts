import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-01-meistertraining",
    "category": "meistertraining",
    "position": 1,
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
        "id": "kapitel-01-meistertraining-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "Sie",
          "er",
          "ich"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Herr Gupta",
          "de": "Welches Pronomen passt: Herr Gupta",
          "ar": "ما الضمير المناسب: Herr Gupta",
          "en": "Which pronoun fits: Herr Gupta"
        }
      },
      {
        "id": "kapitel-01-meistertraining-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "du",
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
        "id": "kapitel-01-meistertraining-rev-q03",
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
        "id": "kapitel-01-meistertraining-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "es",
          "wir",
          "Sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Anna und ich",
          "de": "Welches Pronomen passt: Anna und ich",
          "ar": "ما الضمير المناسب: Anna und ich",
          "en": "Which pronoun fits: Anna und ich"
        }
      },
      {
        "id": "kapitel-01-meistertraining-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "ich",
          "er",
          "es"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Marc und Dominic (direkte Anrede)",
          "de": "Welches Pronomen passt: Marc und Dominic (direkte Anrede)",
          "ar": "ما الضمير المناسب: Marc und Dominic (direkte Anrede)",
          "en": "Which pronoun fits: Marc und Dominic (direkte Anrede)"
        }
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Sachen",
      "de": "Sachen",
      "ar": "Sachen",
      "en": "Sachen"
    },
    "description": {
      "fr": "Choisissez le pronom.",
      "de": "Wählen Sie das Pronomen.",
      "ar": "اختر الضمير.",
      "en": "Choose the pronoun."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-02-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Sie",
          "er",
          "du",
          "sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Schrank",
          "de": "Welches Pronomen passt: der Schrank",
          "ar": "ما الضمير المناسب: der Schrank",
          "en": "Which pronoun fits: der Schrank"
        }
      },
      {
        "id": "kapitel-01-ubung-02-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "Sie",
          "ich",
          "sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : das Regal",
          "de": "Welches Pronomen passt: das Regal",
          "ar": "ما الضمير المناسب: das Regal",
          "en": "Which pronoun fits: das Regal"
        }
      },
      {
        "id": "kapitel-01-ubung-02-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Quel pronom remplace : die Lampe",
          "de": "Welches Pronomen passt: die Lampe",
          "ar": "ما الضمير المناسب: die Lampe",
          "en": "Which pronoun fits: die Lampe"
        },
        "statement": "Welches Pronomen passt: die Lampe → sie"
      },
      {
        "id": "kapitel-01-ubung-02-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "sie",
          "Sie",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : die Stühle",
          "de": "Welches Pronomen passt: die Stühle",
          "ar": "ما الضمير المناسب: die Stühle",
          "en": "Which pronoun fits: die Stühle"
        }
      },
      {
        "id": "kapitel-01-ubung-02-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "er",
          "Sie",
          "ihr"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Tisch",
          "de": "Welches Pronomen passt: der Tisch",
          "ar": "ما الضمير المناسب: der Tisch",
          "en": "Which pronoun fits: der Tisch"
        }
      },
      {
        "id": "kapitel-01-ubung-02-rev-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "du",
          "Sie",
          "ich"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : das Messer",
          "de": "Welches Pronomen passt: das Messer",
          "ar": "ما الضمير المناسب: das Messer",
          "en": "Which pronoun fits: das Messer"
        }
      },
      {
        "id": "kapitel-01-ubung-02-rev-q07",
        "position": 7,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "sie",
          "ihr",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : die Gabel",
          "de": "Welches Pronomen passt: die Gabel",
          "ar": "ما الضمير المناسب: die Gabel",
          "en": "Which pronoun fits: die Gabel"
        }
      },
      {
        "id": "kapitel-01-ubung-02-association",
        "position": 8,
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
          "sie",
          "er",
          "es"
        ]
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-03",
    "category": "meistertraining",
    "position": 3,
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
        "id": "kapitel-01-ubung-03-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "du",
          "sie",
          "ihr"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Anna (direkte Anrede)",
          "de": "Welches Pronomen passt: Anna (direkte Anrede)",
          "ar": "ما الضمير المناسب: Anna (direkte Anrede)",
          "en": "Which pronoun fits: Anna (direkte Anrede)"
        }
      },
      {
        "id": "kapitel-01-ubung-03-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "Sie",
          "wir",
          "sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Frau Schmidt (höfliche Anrede)",
          "de": "Welches Pronomen passt: Frau Schmidt (höfliche Anrede)",
          "ar": "ما الضمير المناسب: Frau Schmidt (höfliche Anrede)",
          "en": "Which pronoun fits: Frau Schmidt (höfliche Anrede)"
        }
      },
      {
        "id": "kapitel-01-ubung-03-rev-q03",
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
        "id": "kapitel-01-ubung-03-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Sie",
          "ich",
          "er",
          "sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Herr Meyer und Frau Schmidt (höfliche Anrede)",
          "de": "Welches Pronomen passt: Herr Meyer und Frau Schmidt (höfliche Anrede)",
          "ar": "ما الضمير المناسب: Herr Meyer und Frau Schmidt (höfliche Anrede)",
          "en": "Which pronoun fits: Herr Meyer und Frau Schmidt (höfliche Anrede)"
        }
      },
      {
        "id": "kapitel-01-ubung-03-multi",
        "position": 5,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "der Löffel → es",
          "der Löffel → er",
          "das Messer → sie",
          "die Gabel → sie",
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
  },
  {
    "id": "kapitel-01-ubung-04",
    "category": "meistertraining",
    "position": 4,
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
        "id": "kapitel-01-ubung-04-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "du",
          "ihr",
          "sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Mario und ich",
          "de": "Welches Pronomen passt: Mario und ich",
          "ar": "ما الضمير المناسب: Mario und ich",
          "en": "Which pronoun fits: Mario und ich"
        }
      },
      {
        "id": "kapitel-01-ubung-04-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "Sie",
          "sie",
          "du"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Peter",
          "de": "Welches Pronomen passt: Peter",
          "ar": "ما الضمير المناسب: Peter",
          "en": "Which pronoun fits: Peter"
        }
      },
      {
        "id": "kapitel-01-ubung-04-rev-q03",
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
        "id": "kapitel-01-ubung-04-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "wir",
          "es",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Kuchen",
          "de": "Welches Pronomen passt: der Kuchen",
          "ar": "ما الضمير المناسب: der Kuchen",
          "en": "Which pronoun fits: der Kuchen"
        }
      },
      {
        "id": "kapitel-01-ubung-04-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "sie",
          "ihr",
          "Sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Elena und Mario",
          "de": "Welches Pronomen passt: Elena und Mario",
          "ar": "ما الضمير المناسب: Elena und Mario",
          "en": "Which pronoun fits: Elena und Mario"
        }
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-05",
    "category": "meistertraining",
    "position": 5,
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
        "id": "kapitel-01-ubung-05-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "es",
          "Sie",
          "wir"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Herr Gupta",
          "de": "Welches Pronomen passt: Herr Gupta",
          "ar": "ما الضمير المناسب: Herr Gupta",
          "en": "Which pronoun fits: Herr Gupta"
        }
      },
      {
        "id": "kapitel-01-ubung-05-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "sie",
          "wir",
          "ihr",
          "ich"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Frau Kioka",
          "de": "Welches Pronomen passt: Frau Kioka",
          "ar": "ما الضمير المناسب: Frau Kioka",
          "en": "Which pronoun fits: Frau Kioka"
        }
      },
      {
        "id": "kapitel-01-ubung-05-rev-q03",
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
        "id": "kapitel-01-ubung-05-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "wir",
          "Sie",
          "ihr"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Anna und ich",
          "de": "Welches Pronomen passt: Anna und ich",
          "ar": "ما الضمير المناسب: Anna und ich",
          "en": "Which pronoun fits: Anna und ich"
        }
      },
      {
        "id": "kapitel-01-ubung-05-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "er",
          "ihr",
          "Sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Marc und Dominic (direkte Anrede)",
          "de": "Welches Pronomen passt: Marc und Dominic (direkte Anrede)",
          "ar": "ما الضمير المناسب: Marc und Dominic (direkte Anrede)",
          "en": "Which pronoun fits: Marc und Dominic (direkte Anrede)"
        }
      },
      {
        "id": "kapitel-01-ubung-05-association",
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
          "sie",
          "er",
          "es"
        ]
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Sachen",
      "de": "Sachen",
      "ar": "Sachen",
      "en": "Sachen"
    },
    "description": {
      "fr": "Choisissez le pronom.",
      "de": "Wählen Sie das Pronomen.",
      "ar": "اختر الضمير.",
      "en": "Choose the pronoun."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-06-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "Sie",
          "du",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Schrank",
          "de": "Welches Pronomen passt: der Schrank",
          "ar": "ما الضمير المناسب: der Schrank",
          "en": "Which pronoun fits: der Schrank"
        }
      },
      {
        "id": "kapitel-01-ubung-06-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "es",
          "sie",
          "ich"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : das Regal",
          "de": "Welches Pronomen passt: das Regal",
          "ar": "ما الضمير المناسب: das Regal",
          "en": "Which pronoun fits: das Regal"
        }
      },
      {
        "id": "kapitel-01-ubung-06-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Quel pronom remplace : die Lampe",
          "de": "Welches Pronomen passt: die Lampe",
          "ar": "ما الضمير المناسب: die Lampe",
          "en": "Which pronoun fits: die Lampe"
        },
        "statement": "Welches Pronomen passt: die Lampe → sie"
      },
      {
        "id": "kapitel-01-ubung-06-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "wir",
          "sie",
          "Sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : die Stühle",
          "de": "Welches Pronomen passt: die Stühle",
          "ar": "ما الضمير المناسب: die Stühle",
          "en": "Which pronoun fits: die Stühle"
        }
      },
      {
        "id": "kapitel-01-ubung-06-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "du",
          "er",
          "sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Tisch",
          "de": "Welches Pronomen passt: der Tisch",
          "ar": "ما الضمير المناسب: der Tisch",
          "en": "Which pronoun fits: der Tisch"
        }
      },
      {
        "id": "kapitel-01-ubung-06-rev-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "sie",
          "ihr",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : das Messer",
          "de": "Welches Pronomen passt: das Messer",
          "ar": "ما الضمير المناسب: das Messer",
          "en": "Which pronoun fits: das Messer"
        }
      },
      {
        "id": "kapitel-01-ubung-06-rev-q07",
        "position": 7,
        "type": "qcm",
        "selection": "single",
        "options": [
          "du",
          "ihr",
          "ich",
          "sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : die Gabel",
          "de": "Welches Pronomen passt: die Gabel",
          "ar": "ما الضمير المناسب: die Gabel",
          "en": "Which pronoun fits: die Gabel"
        }
      },
      {
        "id": "kapitel-01-ubung-06-multi",
        "position": 8,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "die Gabel → sie",
          "das Messer → es",
          "das Messer → sie",
          "der Löffel → es",
          "der Löffel → er"
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
    "id": "kapitel-01-ubung-07",
    "category": "meistertraining",
    "position": 7,
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
        "id": "kapitel-01-ubung-07-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "Sie",
          "du",
          "wir"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Anna (direkte Anrede)",
          "de": "Welches Pronomen passt: Anna (direkte Anrede)",
          "ar": "ما الضمير المناسب: Anna (direkte Anrede)",
          "en": "Which pronoun fits: Anna (direkte Anrede)"
        }
      },
      {
        "id": "kapitel-01-ubung-07-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "ihr",
          "Sie",
          "wir"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Frau Schmidt (höfliche Anrede)",
          "de": "Welches Pronomen passt: Frau Schmidt (höfliche Anrede)",
          "ar": "ما الضمير المناسب: Frau Schmidt (höfliche Anrede)",
          "en": "Which pronoun fits: Frau Schmidt (höfliche Anrede)"
        }
      },
      {
        "id": "kapitel-01-ubung-07-rev-q03",
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
        "id": "kapitel-01-ubung-07-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "du",
          "Sie",
          "ihr"
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
    "id": "kapitel-01-ubung-08",
    "category": "meistertraining",
    "position": 8,
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
        "id": "kapitel-01-ubung-08-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "sie",
          "Sie",
          "du",
          "wir"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Mario und ich",
          "de": "Welches Pronomen passt: Mario und ich",
          "ar": "ما الضمير المناسب: Mario und ich",
          "en": "Which pronoun fits: Mario und ich"
        }
      },
      {
        "id": "kapitel-01-ubung-08-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "sie",
          "er",
          "es",
          "ihr"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Peter",
          "de": "Welches Pronomen passt: Peter",
          "ar": "ما الضمير المناسب: Peter",
          "en": "Which pronoun fits: Peter"
        }
      },
      {
        "id": "kapitel-01-ubung-08-rev-q03",
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
        "id": "kapitel-01-ubung-08-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "du",
          "er",
          "Sie"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Kuchen",
          "de": "Welches Pronomen passt: der Kuchen",
          "ar": "ما الضمير المناسب: der Kuchen",
          "en": "Which pronoun fits: der Kuchen"
        }
      },
      {
        "id": "kapitel-01-ubung-08-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Sie",
          "sie",
          "du",
          "es"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Elena und Mario",
          "de": "Welches Pronomen passt: Elena und Mario",
          "ar": "ما الضمير المناسب: Elena und Mario",
          "en": "Which pronoun fits: Elena und Mario"
        }
      },
      {
        "id": "kapitel-01-ubung-08-association",
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
    "id": "kapitel-01-ubung-09",
    "category": "meistertraining",
    "position": 9,
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
        "id": "kapitel-01-ubung-09-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Sie",
          "ich",
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
        "id": "kapitel-01-ubung-09-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "sie",
          "du",
          "ich",
          "ihr"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Frau Kioka",
          "de": "Welches Pronomen passt: Frau Kioka",
          "ar": "ما الضمير المناسب: Frau Kioka",
          "en": "Which pronoun fits: Frau Kioka"
        }
      },
      {
        "id": "kapitel-01-ubung-09-rev-q03",
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
        "id": "kapitel-01-ubung-09-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "Sie",
          "sie",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Anna und ich",
          "de": "Welches Pronomen passt: Anna und ich",
          "ar": "ما الضمير المناسب: Anna und ich",
          "en": "Which pronoun fits: Anna und ich"
        }
      },
      {
        "id": "kapitel-01-ubung-09-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "Sie",
          "ihr",
          "du"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : Marc und Dominic (direkte Anrede)",
          "de": "Welches Pronomen passt: Marc und Dominic (direkte Anrede)",
          "ar": "ما الضمير المناسب: Marc und Dominic (direkte Anrede)",
          "en": "Which pronoun fits: Marc und Dominic (direkte Anrede)"
        }
      },
      {
        "id": "kapitel-01-ubung-09-multi",
        "position": 6,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "das Messer → sie",
          "der Löffel → er",
          "das Messer → es",
          "die Gabel → sie",
          "der Löffel → es"
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
    "id": "kapitel-01-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Sachen",
      "de": "Sachen",
      "ar": "Sachen",
      "en": "Sachen"
    },
    "description": {
      "fr": "Choisissez le pronom.",
      "de": "Wählen Sie das Pronomen.",
      "ar": "اختر الضمير.",
      "en": "Choose the pronoun."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-10-rev-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "ihr",
          "sie",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Schrank",
          "de": "Welches Pronomen passt: der Schrank",
          "ar": "ما الضمير المناسب: der Schrank",
          "en": "Which pronoun fits: der Schrank"
        }
      },
      {
        "id": "kapitel-01-ubung-10-rev-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "du",
          "Sie",
          "es"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : das Regal",
          "de": "Welches Pronomen passt: das Regal",
          "ar": "ما الضمير المناسب: das Regal",
          "en": "Which pronoun fits: das Regal"
        }
      },
      {
        "id": "kapitel-01-ubung-10-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Quel pronom remplace : die Lampe",
          "de": "Welches Pronomen passt: die Lampe",
          "ar": "ما الضمير المناسب: die Lampe",
          "en": "Which pronoun fits: die Lampe"
        },
        "statement": "Welches Pronomen passt: die Lampe → sie"
      },
      {
        "id": "kapitel-01-ubung-10-rev-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "wir",
          "sie",
          "ich",
          "es"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : die Stühle",
          "de": "Welches Pronomen passt: die Stühle",
          "ar": "ما الضمير المناسب: die Stühle",
          "en": "Which pronoun fits: die Stühle"
        }
      },
      {
        "id": "kapitel-01-ubung-10-rev-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "er",
          "wir",
          "ich"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : der Tisch",
          "de": "Welches Pronomen passt: der Tisch",
          "ar": "ما الضمير المناسب: der Tisch",
          "en": "Which pronoun fits: der Tisch"
        }
      },
      {
        "id": "kapitel-01-ubung-10-rev-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "Sie",
          "er",
          "ihr"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : das Messer",
          "de": "Welches Pronomen passt: das Messer",
          "ar": "ما الضمير المناسب: das Messer",
          "en": "Which pronoun fits: das Messer"
        }
      },
      {
        "id": "kapitel-01-ubung-10-rev-q07",
        "position": 7,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "sie",
          "du",
          "er"
        ],
        "prompt": {
          "fr": "Quel pronom remplace : die Gabel",
          "de": "Welches Pronomen passt: die Gabel",
          "ar": "ما الضمير المناسب: die Gabel",
          "en": "Which pronoun fits: die Gabel"
        }
      }
    ]
  }
]

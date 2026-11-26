import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-19-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Associations",
      "de": "Zuordnung",
      "ar": "المطابقة",
      "en": "Matching"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-01-q01",
        "position": 1,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque phrase à la forme qui convient.",
          "de": "Ordnen Sie jedem Satz die passende Form zu.",
          "ar": "اربط كل جملة بالصيغة المناسبة.",
          "en": "Match each sentence with the appropriate form."
        },
        "items": [
          {
            "id": "0",
            "label": "___ Mantel ist teuer? (welcher)"
          },
          {
            "id": "1",
            "label": "___ Buch kaufst du? (welcher)"
          },
          {
            "id": "2",
            "label": "Mit ___ Kind gehst du ins Kino? (welcher)"
          },
          {
            "id": "3",
            "label": "___ Arzt rufst du an? (welcher)"
          }
        ],
        "options": [
          "Welcher",
          "welchem",
          "Welchen",
          "Welches"
        ]
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Vêtements",
      "de": "Kleidung",
      "ar": "الملابس",
      "en": "Clothes"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-02-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Dieses",
          "Diesem",
          "Dieser",
          "Diesen",
          "Diese"
        ],
        "prompt": {
          "fr": "Welcher Mantel? ___ Mantel. — Choisissez la forme de dieser.",
          "de": "Welcher Mantel? ___ Mantel. — Wählen Sie die passende Form von dieser.",
          "ar": "Welcher Mantel? ___ Mantel. — اختر صيغة dieser المناسبة.",
          "en": "Welcher Mantel? ___ Mantel. — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Welche Hose? ___ Hose.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de dieser.",
          "de": "Ergänzen Sie die passende Form von dieser.",
          "ar": "أكمل باستخدام صيغة dieser المناسبة.",
          "en": "Complete with the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-02-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Welche Schuhe? Diese Schuhe.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-02-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Dieses",
          "Dieser",
          "Diese",
          "Diesen",
          "Diesem"
        ],
        "prompt": {
          "fr": "Welches Kleid? ___ Kleid. — Choisissez la forme de dieser.",
          "de": "Welches Kleid? ___ Kleid. — Wählen Sie die passende Form von dieser.",
          "ar": "Welches Kleid? ___ Kleid. — اختر صيغة dieser المناسبة.",
          "en": "Welches Kleid? ___ Kleid. — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-02-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Diesen",
          "Dieses",
          "Diese",
          "Diesem",
          "Dieser"
        ],
        "prompt": {
          "fr": "Welche Jacke? ___ Jacke. — Choisissez la forme de dieser.",
          "de": "Welche Jacke? ___ Jacke. — Wählen Sie die passende Form von dieser.",
          "ar": "Welche Jacke? ___ Jacke. — اختر صيغة dieser المناسبة.",
          "en": "Welche Jacke? ___ Jacke. — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-02-q06",
        "position": 6,
        "type": "fill_blank",
        "sentence": "Welches Halstuch? ___ Halstuch.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de dieser.",
          "de": "Ergänzen Sie die passende Form von dieser.",
          "ar": "أكمل باستخدام صيغة dieser المناسبة.",
          "en": "Complete with the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-02-q07",
        "position": 7,
        "type": "true_false",
        "statement": "Welcher Schal? Dieser Schal.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-02-q08",
        "position": 8,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Diesen",
          "Diese",
          "Diesem",
          "Dieses",
          "Dieser"
        ],
        "prompt": {
          "fr": "Welche Stiefel? ___ Stiefel. — Choisissez la forme de dieser.",
          "de": "Welche Stiefel? ___ Stiefel. — Wählen Sie die passende Form von dieser.",
          "ar": "Welche Stiefel? ___ Stiefel. — اختر صيغة dieser المناسبة.",
          "en": "Welche Stiefel? ___ Stiefel. — Choose the correct form of dieser."
        }
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Jardin d’enfants",
      "de": "Kindergarten",
      "ar": "الروضة",
      "en": "Kindergarten"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "sentence": "___ Kinder sind Ihre Kinder?",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de welcher.",
          "de": "Ergänzen Sie die passende Form von welcher.",
          "ar": "أكمل باستخدام صيغة welcher المناسبة.",
          "en": "Complete with the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-03-q02",
        "position": 2,
        "type": "true_false",
        "statement": "Ist diesem Mädchen Ihre Tochter?",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-03-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "welches",
          "welche",
          "welchem",
          "welchen",
          "welcher"
        ],
        "prompt": {
          "fr": "Und ___ Junge ist Ihr Sohn? — Choisissez la forme de welcher.",
          "de": "Und ___ Junge ist Ihr Sohn? — Wählen Sie die passende Form von welcher.",
          "ar": "Und ___ Junge ist Ihr Sohn? — اختر صيغة welcher المناسبة.",
          "en": "Und ___ Junge ist Ihr Sohn? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-03-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Diese",
          "Dieses",
          "Diesem",
          "Dieser",
          "Diesen"
        ],
        "prompt": {
          "fr": "___ blonde Junge ist mein Sohn. — Choisissez la forme de dieser.",
          "de": "___ blonde Junge ist mein Sohn. — Wählen Sie die passende Form von dieser.",
          "ar": "___ blonde Junge ist mein Sohn. — اختر صيغة dieser المناسبة.",
          "en": "___ blonde Junge ist mein Sohn. — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "sentence": "___ Kind war heute müde.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de dieser.",
          "de": "Ergänzen Sie die passende Form von dieser.",
          "ar": "أكمل باستخدام صيغة dieser المناسبة.",
          "en": "Complete with the correct form of dieser."
        }
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Shopping",
      "de": "Einkaufen",
      "ar": "التسوق",
      "en": "Shopping"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-04-q01",
        "position": 1,
        "type": "true_false",
        "statement": "Welche Tasche findest du schöner?",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-04-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "diesem",
          "diesen",
          "dieser",
          "dieses",
          "diese"
        ],
        "prompt": {
          "fr": "Ich finde ___ Tasche schöner. — Choisissez la forme de dieser.",
          "de": "Ich finde ___ Tasche schöner. — Wählen Sie die passende Form von dieser.",
          "ar": "Ich finde ___ Tasche schöner. — اختر صيغة dieser المناسبة.",
          "en": "Ich finde ___ Tasche schöner. — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-04-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Welche",
          "Welcher",
          "Welches",
          "Welchen",
          "Welchem"
        ],
        "prompt": {
          "fr": "___ Tasche ist praktisch? — Choisissez la forme de welcher.",
          "de": "___ Tasche ist praktisch? — Wählen Sie die passende Form von welcher.",
          "ar": "___ Tasche ist praktisch? — اختر صيغة welcher المناسبة.",
          "en": "___ Tasche ist praktisch? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "sentence": "Ich nehme ___ Tasche.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de dieser.",
          "de": "Ergänzen Sie die passende Form von dieser.",
          "ar": "أكمل باستخدام صيغة dieser المناسبة.",
          "en": "Complete with the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-04-q05",
        "position": 5,
        "type": "true_false",
        "statement": "Welchen Mantel kaufst du?",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Datif",
      "de": "Dativ",
      "ar": "الداتيف",
      "en": "Dative"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-05-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "welche",
          "welchem",
          "welchen",
          "welches",
          "welcher"
        ],
        "prompt": {
          "fr": "Mit ___ Freundin gehst du ins Kino? — Choisissez la forme de welcher.",
          "de": "Mit ___ Freundin gehst du ins Kino? — Wählen Sie die passende Form von welcher.",
          "ar": "Mit ___ Freundin gehst du ins Kino? — اختر صيغة welcher المناسبة.",
          "en": "Mit ___ Freundin gehst du ins Kino? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "welchen",
          "welchem",
          "welcher",
          "welches",
          "welche"
        ],
        "prompt": {
          "fr": "Bei ___ Lehrerin habt ihr Unterricht? — Choisissez la forme de welcher.",
          "de": "Bei ___ Lehrerin habt ihr Unterricht? — Wählen Sie die passende Form von welcher.",
          "ar": "Bei ___ Lehrerin habt ihr Unterricht? — اختر صيغة welcher المناسبة.",
          "en": "Bei ___ Lehrerin habt ihr Unterricht? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Von ___ Freund hast du das Geschenk?",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de welcher.",
          "de": "Ergänzen Sie die passende Form von welcher.",
          "ar": "أكمل باستخدام صيغة welcher المناسبة.",
          "en": "Complete with the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-05-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Welches Kind hast du geholfen?",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-05-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dieses",
          "dieser",
          "diesem",
          "diese",
          "diesen"
        ],
        "prompt": {
          "fr": "Ich fahre mit ___ Freunden. — Choisissez la forme de dieser.",
          "de": "Ich fahre mit ___ Freunden. — Wählen Sie die passende Form von dieser.",
          "ar": "Ich fahre mit ___ Freunden. — اختر صيغة dieser المناسبة.",
          "en": "Ich fahre mit ___ Freunden. — Choose the correct form of dieser."
        }
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "En classe",
      "de": "Im Unterricht",
      "ar": "في الفصل",
      "en": "In class"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Welchem",
          "Welches",
          "Welchen",
          "Welcher",
          "Welche"
        ],
        "prompt": {
          "fr": "___ Lehrer haben wir heute? (Singular) — Choisissez la forme de welcher.",
          "de": "___ Lehrer haben wir heute? (Singular) — Wählen Sie die passende Form von welcher.",
          "ar": "___ Lehrer haben wir heute? (Singular) — اختر صيغة welcher المناسبة.",
          "en": "___ Lehrer haben wir heute? (Singular) — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Wir haben ___ Lehrer heute.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de dieser.",
          "de": "Ergänzen Sie die passende Form von dieser.",
          "ar": "أكمل باستخدام صيغة dieser المناسبة.",
          "en": "Complete with the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-06-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Welche Übungen waren die Hausaufgabe?",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-06-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "welche",
          "welchem",
          "welches",
          "welcher",
          "welchen"
        ],
        "prompt": {
          "fr": "Mit ___ Buch hast du gelernt? — Choisissez la forme de welcher.",
          "de": "Mit ___ Buch hast du gelernt? — Wählen Sie die passende Form von welcher.",
          "ar": "Mit ___ Buch hast du gelernt? — اختر صيغة welcher المناسبة.",
          "en": "Mit ___ Buch hast du gelernt? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-06-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Welchen",
          "Welchem",
          "Welches",
          "Welcher",
          "Welche"
        ],
        "prompt": {
          "fr": "___ Buch findest du besser? — Choisissez la forme de welcher.",
          "de": "___ Buch findest du besser? — Wählen Sie die passende Form von welcher.",
          "ar": "___ Buch findest du besser? — اختر صيغة welcher المناسبة.",
          "en": "___ Buch findest du besser? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-06-q06",
        "position": 6,
        "type": "fill_blank",
        "sentence": "Ich hatte ___ Buch früher.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de dieser.",
          "de": "Ergänzen Sie die passende Form von dieser.",
          "ar": "أكمل باستخدام صيغة dieser المناسبة.",
          "en": "Complete with the correct form of dieser."
        }
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "La salle",
      "de": "Der Raum",
      "ar": "الغرفة",
      "en": "The room"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "sentence": "In ___ Raum lernen wir heute?",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de welcher.",
          "de": "Ergänzen Sie die passende Form von welcher.",
          "ar": "أكمل باستخدام صيغة welcher المناسبة.",
          "en": "Complete with the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-07-q02",
        "position": 2,
        "type": "true_false",
        "statement": "Wir bleiben in dieser Raum.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-07-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "diesen",
          "diesem",
          "dieser",
          "dieses",
          "diese"
        ],
        "prompt": {
          "fr": "Ich mag ___ Raum nicht. — Choisissez la forme de dieser.",
          "de": "Ich mag ___ Raum nicht. — Wählen Sie die passende Form von dieser.",
          "ar": "Ich mag ___ Raum nicht. — اختر صيغة dieser المناسبة.",
          "en": "Ich mag ___ Raum nicht. — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-07-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dieser",
          "diesen",
          "dieses",
          "diese",
          "diesem"
        ],
        "prompt": {
          "fr": "Ich bin gerne in ___ Raum. — Choisissez la forme de dieser.",
          "de": "Ich bin gerne in ___ Raum. — Wählen Sie die passende Form von dieser.",
          "ar": "Ich bin gerne in ___ Raum. — اختر صيغة dieser المناسبة.",
          "en": "Ich bin gerne in ___ Raum. — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "sentence": "___ Raum findest du gut?",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de welcher.",
          "de": "Ergänzen Sie die passende Form von welcher.",
          "ar": "أكمل باستخدام صيغة welcher المناسبة.",
          "en": "Complete with the correct form of welcher."
        }
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Contrastes",
      "de": "Kasuskontraste",
      "ar": "مقارنة الحالات",
      "en": "Case contrasts"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-08-q01",
        "position": 1,
        "type": "true_false",
        "statement": "Welcher Arzt hilft dir?",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Welcher",
          "Welche",
          "Welchem",
          "Welches",
          "Welchen"
        ],
        "prompt": {
          "fr": "___ Arzt besuchst du? — Choisissez la forme de welcher.",
          "de": "___ Arzt besuchst du? — Wählen Sie die passende Form von welcher.",
          "ar": "___ Arzt besuchst du? — اختر صيغة welcher المناسبة.",
          "en": "___ Arzt besuchst du? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-08-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Welche",
          "Welchen",
          "Welchem",
          "Welcher",
          "Welches"
        ],
        "prompt": {
          "fr": "___ Arzt vertraust du? — Choisissez la forme de welcher.",
          "de": "___ Arzt vertraust du? — Wählen Sie die passende Form von welcher.",
          "ar": "___ Arzt vertraust du? — اختر صيغة welcher المناسبة.",
          "en": "___ Arzt vertraust du? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "sentence": "___ Arzt vertraue ich.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de dieser.",
          "de": "Ergänzen Sie die passende Form von dieser.",
          "ar": "أكمل باستخدام صيغة dieser المناسبة.",
          "en": "Complete with the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-08-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Arzt kenne ich, aber ___ Arzt vertraue ich nicht. (dieser; gleicher Arzt)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Dialogue",
      "de": "Dialog",
      "ar": "حوار",
      "en": "Dialogue"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-09-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "welche",
          "welchen",
          "welches",
          "welchem",
          "welcher"
        ],
        "prompt": {
          "fr": "Mit ___ Bus fahren wir? — Choisissez la forme de welcher.",
          "de": "Mit ___ Bus fahren wir? — Wählen Sie die passende Form von welcher.",
          "ar": "Mit ___ Bus fahren wir? — اختر صيغة welcher المناسبة.",
          "en": "Mit ___ Bus fahren wir? — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-09-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dieser",
          "diesem",
          "diesen",
          "dieses",
          "diese"
        ],
        "prompt": {
          "fr": "Wir nehmen ___ Bus. — Choisissez la forme de dieser.",
          "de": "Wir nehmen ___ Bus. — Wählen Sie die passende Form von dieser.",
          "ar": "Wir nehmen ___ Bus. — اختر صيغة dieser المناسبة.",
          "en": "Wir nehmen ___ Bus. — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-09-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "___ Bus fährt zum Bahnhof?",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de welcher.",
          "de": "Ergänzen Sie die passende Form von welcher.",
          "ar": "أكمل باستخدام صيغة welcher المناسبة.",
          "en": "Complete with the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-09-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Ich warte auf diese Bus.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-09-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Bus fährt zum Zentrum? Mit ___ Bus fahren wir zur Arbeit. (welcher/dieser)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Bilan",
      "de": "Abschlusstest",
      "ar": "اختبار شامل",
      "en": "Review"
    },
    "description": {
      "fr": "Articles interrogatifs et démonstratifs",
      "de": "Interrogativ- und Demonstrativartikel",
      "ar": "أدوات الاستفهام والإشارة",
      "en": "Interrogative and demonstrative determiners"
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-10-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Welchen",
          "Welche",
          "Welchem",
          "Welches",
          "Welcher"
        ],
        "prompt": {
          "fr": "___ Kunden helfen Sie? (Plural) — Choisissez la forme de welcher.",
          "de": "___ Kunden helfen Sie? (Plural) — Wählen Sie die passende Form von welcher.",
          "ar": "___ Kunden helfen Sie? (Plural) — اختر صيغة welcher المناسبة.",
          "en": "___ Kunden helfen Sie? (Plural) — Choose the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "___ Kunde wartet draußen?",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec la forme de welcher.",
          "de": "Ergänzen Sie die passende Form von welcher.",
          "ar": "أكمل باستخدام صيغة welcher المناسبة.",
          "en": "Complete with the correct form of welcher."
        }
      },
      {
        "id": "kapitel-19-ubung-10-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Welchen Kunden beraten Sie? (Singular)",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-19-ubung-10-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dieser",
          "dieses",
          "diesem",
          "diesen",
          "diese"
        ],
        "prompt": {
          "fr": "Ich helfe ___ Kunden. (Plural) — Choisissez la forme de dieser.",
          "de": "Ich helfe ___ Kunden. (Plural) — Wählen Sie die passende Form von dieser.",
          "ar": "Ich helfe ___ Kunden. (Plural) — اختر صيغة dieser المناسبة.",
          "en": "Ich helfe ___ Kunden. (Plural) — Choose the correct form of dieser."
        }
      },
      {
        "id": "kapitel-19-ubung-10-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Kunden beraten Sie? ___ Kunden geben Sie die Information? (welcher; jeweils Singular)",
        "blanks": 2
      }
    ]
  }
]

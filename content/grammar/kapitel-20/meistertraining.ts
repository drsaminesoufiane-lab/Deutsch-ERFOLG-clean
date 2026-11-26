import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-20-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Accusatif",
      "de": "Akkusativ",
      "ar": "الأكوزاتيف",
      "en": "Accusative"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-01-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihnen",
          "sie",
          "Sie",
          "ihr"
        ],
        "prompt": {
          "fr": "Magst du die Kollegin? Ja, ich mag ___.",
          "de": "Magst du die Kollegin? Ja, ich mag ___.",
          "ar": "Magst du die Kollegin? Ja, ich mag ___.",
          "en": "Magst du die Kollegin? Ja, ich mag ___."
        }
      },
      {
        "id": "kapitel-20-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "ihn",
          "ihr",
          "ihm"
        ],
        "prompt": {
          "fr": "Liebst du den Mann? Ja, ich liebe ___.",
          "de": "Liebst du den Mann? Ja, ich liebe ___.",
          "ar": "Liebst du den Mann? Ja, ich liebe ___.",
          "en": "Liebst du den Mann? Ja, ich liebe ___."
        }
      },
      {
        "id": "kapitel-20-ubung-01-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Isst du die Spaghetti? Ja, ich esse ___.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-01-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Liebst du mich? Ja, ich liebe du.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-01-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "ihr",
          "ihm",
          "ihn"
        ],
        "prompt": {
          "fr": "Kaufst du das Auto? Nein, ich kaufe ___ nicht.",
          "de": "Kaufst du das Auto? Nein, ich kaufe ___ nicht.",
          "ar": "Kaufst du das Auto? Nein, ich kaufe ___ nicht.",
          "en": "Kaufst du das Auto? Nein, ich kaufe ___ nicht."
        }
      },
      {
        "id": "kapitel-20-ubung-01-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihr",
          "ihn",
          "euch",
          "ihm"
        ],
        "prompt": {
          "fr": "Mögt ihr uns? Ja, wir mögen ___.",
          "de": "Mögt ihr uns? Ja, wir mögen ___.",
          "ar": "Mögt ihr uns? Ja, wir mögen ___.",
          "en": "Mögt ihr uns? Ja, wir mögen ___."
        }
      },
      {
        "id": "kapitel-20-ubung-01-extra",
        "position": 7,
        "type": "matching",
        "prompt": {
          "fr": "Associez.",
          "de": "Ordnen Sie zu.",
          "ar": "طابق.",
          "en": "Match."
        },
        "items": [
          {
            "id": "0",
            "label": "ich"
          },
          {
            "id": "1",
            "label": "du"
          },
          {
            "id": "2",
            "label": "er"
          },
          {
            "id": "3",
            "label": "wir"
          }
        ],
        "options": [
          "ihn",
          "uns",
          "mich",
          "dich"
        ]
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Famille",
      "de": "Familie",
      "ar": "العائلة",
      "en": "Family"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-02-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "ihm",
          "ihr",
          "ihn"
        ],
        "prompt": {
          "fr": "Wir bekommen ein Mädchen. Wir lieben ___.",
          "de": "Wir bekommen ein Mädchen. Wir lieben ___.",
          "ar": "Wir bekommen ein Mädchen. Wir lieben ___.",
          "en": "Wir bekommen ein Mädchen. Wir lieben ___."
        }
      },
      {
        "id": "kapitel-20-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Unsere Wohnung ist klein. Wir mögen ___.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-02-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Mein Bruder kommt. Ich besuche ihn.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-02-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Sie",
          "sie",
          "ihnen",
          "ihr"
        ],
        "prompt": {
          "fr": "Meine Eltern wohnen hier. Ich sehe ___ oft.",
          "de": "Meine Eltern wohnen hier. Ich sehe ___ oft.",
          "ar": "Meine Eltern wohnen hier. Ich sehe ___ oft.",
          "en": "Meine Eltern wohnen hier. Ich sehe ___ oft."
        }
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Destinataires",
      "de": "Empfänger",
      "ar": "المتلقي",
      "en": "Recipients"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "sentence": "Der Vater kauft den Kindern Eis. Er kauft ___ auch Schokolade.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-03-q02",
        "position": 2,
        "type": "true_false",
        "statement": "Der Kellner bringt der Dame Tee. Er bringt euch auch Torte.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-03-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "uns",
          "ihm",
          "wir",
          "ihn"
        ],
        "prompt": {
          "fr": "Ich bestelle dir und mir Pizza. Ich bestelle ___ auch Cola.",
          "de": "Ich bestelle dir und mir Pizza. Ich bestelle ___ auch Cola.",
          "ar": "Ich bestelle dir und mir Pizza. Ich bestelle ___ auch Cola.",
          "en": "Ich bestelle dir und mir Pizza. Ich bestelle ___ auch Cola."
        }
      },
      {
        "id": "kapitel-20-ubung-03-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihn",
          "ihr",
          "euch",
          "sie"
        ],
        "prompt": {
          "fr": "Er schenkt seiner Freundin Blumen. Er schenkt ___ einen Ring.",
          "de": "Er schenkt seiner Freundin Blumen. Er schenkt ___ einen Ring.",
          "ar": "Er schenkt seiner Freundin Blumen. Er schenkt ___ einen Ring.",
          "en": "Er schenkt seiner Freundin Blumen. Er schenkt ___ einen Ring."
        }
      },
      {
        "id": "kapitel-20-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "sentence": "Er bezahlt dir und deiner Schwester die Cola. Er bezahlt ___ auch das Essen.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-03-q06",
        "position": 6,
        "type": "true_false",
        "statement": "Der Lehrer gibt den Studenten Aufgaben. Er gibt Ihnen einen Test.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Comment ça va ?",
      "de": "Wie geht es?",
      "ar": "كيف الحال؟",
      "en": "How are you?"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-04-q01",
        "position": 1,
        "type": "true_false",
        "statement": "Wie geht es Ihnen? – Es geht mir gut.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-04-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "es",
          "er",
          "ihm",
          "ihn"
        ],
        "prompt": {
          "fr": "Wie geht es Ihrem Vater? – Es geht ___ gut.",
          "de": "Wie geht es Ihrem Vater? – Es geht ___ gut.",
          "ar": "Wie geht es Ihrem Vater? – Es geht ___ gut.",
          "en": "Wie geht es Ihrem Vater? – Es geht ___ gut."
        }
      },
      {
        "id": "kapitel-20-ubung-04-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "euch",
          "sie",
          "ihr",
          "ihn"
        ],
        "prompt": {
          "fr": "Wie geht es Ihrer Mutter? – Es geht ___ gut.",
          "de": "Wie geht es Ihrer Mutter? – Es geht ___ gut.",
          "ar": "Wie geht es Ihrer Mutter? – Es geht ___ gut.",
          "en": "Wie geht es Ihrer Mutter? – Es geht ___ gut."
        }
      },
      {
        "id": "kapitel-20-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "sentence": "Wie geht es Ihren Eltern? – Es geht ___ gut.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-04-q05",
        "position": 5,
        "type": "true_false",
        "statement": "Wie geht es dir? – Es geht mir gut.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-04-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "uns",
          "ihm",
          "ihn",
          "wir"
        ],
        "prompt": {
          "fr": "Wie geht es Ihnen und Ihrer Frau? – Es geht ___ gut.",
          "de": "Wie geht es Ihnen und Ihrer Frau? – Es geht ___ gut.",
          "ar": "Wie geht es Ihnen und Ihrer Frau? – Es geht ___ gut.",
          "en": "Wie geht es Ihnen und Ihrer Frau? – Es geht ___ gut."
        }
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Bureau",
      "de": "Büro",
      "ar": "المكتب",
      "en": "Office"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-05-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "es",
          "ihm",
          "ihn"
        ],
        "prompt": {
          "fr": "Herr Bauer, der Chef möchte mit Herrn Schütz sprechen. Er möchte mit ___ sprechen.",
          "de": "Herr Bauer, der Chef möchte mit Herrn Schütz sprechen. Er möchte mit ___ sprechen.",
          "ar": "Herr Bauer, der Chef möchte mit Herrn Schütz sprechen. Er möchte mit ___ sprechen.",
          "en": "Herr Bauer, der Chef möchte mit Herrn Schütz sprechen. Er möchte mit ___ sprechen."
        }
      },
      {
        "id": "kapitel-20-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "sie",
          "Sie",
          "ihnen",
          "Ihnen"
        ],
        "prompt": {
          "fr": "Herr Bauer, ich möchte mit ___ sprechen. (formell)",
          "de": "Herr Bauer, ich möchte mit ___ sprechen. (formell)",
          "ar": "Herr Bauer, ich möchte mit ___ sprechen. (formell)",
          "en": "Herr Bauer, ich möchte mit ___ sprechen. (formell)"
        }
      },
      {
        "id": "kapitel-20-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Herr Schütz, der Chef möchte mit ___ sprechen. (formell)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-05-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Meine Frau wartet. Bitte sagen Sie euch Bescheid.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-05-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihm",
          "wir",
          "ihn",
          "uns"
        ],
        "prompt": {
          "fr": "Wir gehen ins Theater. Unsere Freunde kommen mit ___.",
          "de": "Wir gehen ins Theater. Unsere Freunde kommen mit ___.",
          "ar": "Wir gehen ins Theater. Unsere Freunde kommen mit ___.",
          "en": "Wir gehen ins Theater. Unsere Freunde kommen mit ___."
        }
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Mit et ohne",
      "de": "Mit und ohne",
      "ar": "مع وبدون",
      "en": "With and without"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dich",
          "dir",
          "du",
          "ihn"
        ],
        "prompt": {
          "fr": "Gehst du mit mir? Ja, nur mit ___.",
          "de": "Gehst du mit mir? Ja, nur mit ___.",
          "ar": "Gehst du mit mir? Ja, nur mit ___.",
          "en": "Gehst du mit mir? Ja, nur mit ___."
        }
      },
      {
        "id": "kapitel-20-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Gehst du mit mir? Ja, nie ohne ___.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-06-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Fährst du mit deiner Freundin? Ja, nur mit ihr.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-06-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihnen",
          "ihr",
          "Sie",
          "sie"
        ],
        "prompt": {
          "fr": "Fährst du mit deiner Freundin? Ja, nie ohne ___.",
          "de": "Fährst du mit deiner Freundin? Ja, nie ohne ___.",
          "ar": "Fährst du mit deiner Freundin? Ja, nie ohne ___.",
          "en": "Fährst du mit deiner Freundin? Ja, nie ohne ___."
        }
      },
      {
        "id": "kapitel-20-ubung-06-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "ihm",
          "es",
          "ihn"
        ],
        "prompt": {
          "fr": "Tanzt du mit dem Mädchen? Ja, nur mit ___.",
          "de": "Tanzt du mit dem Mädchen? Ja, nur mit ___.",
          "ar": "Tanzt du mit dem Mädchen? Ja, nur mit ___.",
          "en": "Tanzt du mit dem Mädchen? Ja, nur mit ___."
        }
      },
      {
        "id": "kapitel-20-ubung-06-q06",
        "position": 6,
        "type": "fill_blank",
        "sentence": "Tanzt du mit dem Mädchen? Ja, nie ohne ___.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-06-q07",
        "position": 7,
        "type": "true_false",
        "statement": "Gehen Sie mit Ihren Kindern? Ja, nie ohne sie.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-06-extra",
        "position": 8,
        "type": "reorder",
        "prompt": {
          "fr": "Commencez par Ich.",
          "de": "Beginnen Sie mit Ich.",
          "ar": "ابدأ بـ Ich.",
          "en": "Start with Ich."
        },
        "tokens": [
          "dir.",
          "Ich",
          "mit",
          "komme"
        ]
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Lettre de Julia",
      "de": "Julias Brief",
      "ar": "رسالة جوليا",
      "en": "Julia’s letter"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "sentence": "Ich habe meinen Traummann getroffen. ___ ist so nett.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-07-q02",
        "position": 2,
        "type": "true_false",
        "statement": "Ich habe ihm gestern kennengelernt. (den Mann)",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-07-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihn",
          "ihm",
          "er",
          "es"
        ],
        "prompt": {
          "fr": "Ich habe mit ___ getanzt. (dem Mann)",
          "de": "Ich habe mit ___ getanzt. (dem Mann)",
          "ar": "Ich habe mit ___ getanzt. (dem Mann)",
          "en": "Ich habe mit ___ getanzt. (dem Mann)"
        }
      },
      {
        "id": "kapitel-20-ubung-07-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "mich",
          "mir",
          "ihn"
        ],
        "prompt": {
          "fr": "Er gefällt ___. (ich)",
          "de": "Er gefällt ___. (ich)",
          "ar": "Er gefällt ___. (ich)",
          "en": "Er gefällt ___. (ich)"
        }
      },
      {
        "id": "kapitel-20-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "sentence": "Er hat ___ nach Hause gebracht. (ich)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-07-q06",
        "position": 6,
        "type": "true_false",
        "statement": "Ich liebe ihn und er liebt mir. (ich)",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-07-q07",
        "position": 7,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ich",
          "mir",
          "mich",
          "ihn"
        ],
        "prompt": {
          "fr": "Liebe Ulrike, ruf ___ an! (ich)",
          "de": "Liebe Ulrike, ruf ___ an! (ich)",
          "ar": "Liebe Ulrike, ruf ___ an! (ich)",
          "en": "Liebe Ulrike, ruf ___ an! (ich)"
        }
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Verbes proches",
      "de": "Ähnliche Verben",
      "ar": "أفعال متقاربة",
      "en": "Similar verbs"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-08-q01",
        "position": 1,
        "type": "true_false",
        "statement": "Du fragst mich. (ich)",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dich",
          "ihn",
          "dir",
          "du"
        ],
        "prompt": {
          "fr": "Ich antworte ___. (du)",
          "de": "Ich antworte ___. (du)",
          "ar": "Ich antworte ___. (du)",
          "en": "Ich antworte ___. (du)"
        }
      },
      {
        "id": "kapitel-20-ubung-08-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "dir",
          "du",
          "dich",
          "ihn"
        ],
        "prompt": {
          "fr": "Ich mag ___. (du)",
          "de": "Ich mag ___. (du)",
          "ar": "Ich mag ___. (du)",
          "en": "Ich mag ___. (du)"
        }
      },
      {
        "id": "kapitel-20-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "sentence": "Du gefällst ___. (ich)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-08-q05",
        "position": 5,
        "type": "true_false",
        "statement": "Ich helfe dir. (du)",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-08-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "mir",
          "ihn",
          "ich",
          "mich"
        ],
        "prompt": {
          "fr": "Du brauchst ___. (ich)",
          "de": "Du brauchst ___. (ich)",
          "ar": "Du brauchst ___. (ich)",
          "en": "Du brauchst ___. (ich)"
        }
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Deux objets",
      "de": "Zwei Objekte",
      "ar": "مفعولان",
      "en": "Two objects"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-09-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihm",
          "ihn",
          "er",
          "es"
        ],
        "prompt": {
          "fr": "Der Schlüssel gehört Paul. Ich gebe ___ den Schlüssel.",
          "de": "Der Schlüssel gehört Paul. Ich gebe ___ den Schlüssel.",
          "ar": "Der Schlüssel gehört Paul. Ich gebe ___ den Schlüssel.",
          "en": "Der Schlüssel gehört Paul. Ich gebe ___ den Schlüssel."
        }
      },
      {
        "id": "kapitel-20-ubung-09-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihm",
          "ihn",
          "er",
          "ihr"
        ],
        "prompt": {
          "fr": "Der Schlüssel liegt hier. Ich gebe ___ Paul.",
          "de": "Der Schlüssel liegt hier. Ich gebe ___ Paul.",
          "ar": "Der Schlüssel liegt hier. Ich gebe ___ Paul.",
          "en": "Der Schlüssel liegt hier. Ich gebe ___ Paul."
        }
      },
      {
        "id": "kapitel-20-ubung-09-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Anna braucht das Buch. Ich gebe ___ das Buch.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-09-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Das Buch liegt hier. Ich gebe ihr Anna.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Bilan",
      "de": "Abschlusstest",
      "ar": "اختبار شامل",
      "en": "Review"
    },
    "description": {
      "fr": "Pronoms personnels",
      "de": "Personalpronomen",
      "ar": "الضمائر الشخصية",
      "en": "Personal pronouns"
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-10-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "sie",
          "ihnen",
          "Ihnen",
          "Sie"
        ],
        "prompt": {
          "fr": "Meine Kollegen warten. Ich gehe zu ___.",
          "de": "Meine Kollegen warten. Ich gehe zu ___.",
          "ar": "Meine Kollegen warten. Ich gehe zu ___.",
          "en": "Meine Kollegen warten. Ich gehe zu ___."
        }
      },
      {
        "id": "kapitel-20-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Meine Kollegen warten. Ich rufe ___ an.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        }
      },
      {
        "id": "kapitel-20-ubung-10-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Frau Klein, ich danke Ihnen.",
        "prompt": {
          "fr": "Le pronom est-il correct ?",
          "de": "Ist das Pronomen richtig?",
          "ar": "هل الضمير صحيح؟",
          "en": "Is the pronoun correct?"
        }
      },
      {
        "id": "kapitel-20-ubung-10-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihnen",
          "Sie",
          "ihr",
          "sie"
        ],
        "prompt": {
          "fr": "Frau Klein, ich verstehe ___.",
          "de": "Frau Klein, ich verstehe ___.",
          "ar": "Frau Klein, ich verstehe ___.",
          "en": "Frau Klein, ich verstehe ___."
        }
      },
      {
        "id": "kapitel-20-ubung-10-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "er",
          "ihm",
          "ihn",
          "es"
        ],
        "prompt": {
          "fr": "Das Kind ist müde. Ich helfe ___.",
          "de": "Das Kind ist müde. Ich helfe ___.",
          "ar": "Das Kind ist müde. Ich helfe ___.",
          "en": "Das Kind ist müde. Ich helfe ___."
        }
      },
      {
        "id": "kapitel-20-ubung-10-extra",
        "position": 6,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Choisissez les deux phrases correctes.",
          "de": "Wählen Sie die zwei richtigen Sätze.",
          "ar": "اختر الجملتين الصحيحتين.",
          "en": "Choose the two correct sentences."
        },
        "options": [
          "Ich helfe dir.",
          "Ich helfe dich.",
          "Ich sehe dich.",
          "Ich sehe dir."
        ]
      }
    ]
  }
]

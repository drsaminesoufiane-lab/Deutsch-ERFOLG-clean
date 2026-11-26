import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-51-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "01 – Formen",
      "de": "01 – Formen",
      "ar": "01 – Formen",
      "en": "01 – Formen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-01-q01",
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
            "label": "ich – Akk."
          },
          {
            "id": "item-2",
            "label": "ich – Dat."
          },
          {
            "id": "item-3",
            "label": "du – Akk."
          },
          {
            "id": "item-4",
            "label": "du – Dat."
          },
          {
            "id": "item-5",
            "label": "wir"
          },
          {
            "id": "item-6",
            "label": "ihr"
          },
          {
            "id": "item-7",
            "label": "er"
          }
        ],
        "options": [
          "mich",
          "mir",
          "uns",
          "dich",
          "dir",
          "euch",
          "sich"
        ]
      },
      {
        "id": "kapitel-51-ubung-01-q02",
        "position": 2,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Uns kann Akkusativ oder Dativ sein."
      },
      {
        "id": "kapitel-51-ubung-01-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Sich ist immer Dativ."
      },
      {
        "id": "kapitel-51-ubung-01-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. ich (Dativ)",
          "de": "Wählen Sie die richtige Antwort. ich (Dativ)",
          "ar": "اختر الإجابة الصحيحة. ich (Dativ)",
          "en": "Choose the correct answer. ich (Dativ)"
        },
        "selection": "single",
        "options": [
          "dir",
          "mich",
          "mir"
        ]
      },
      {
        "id": "kapitel-51-ubung-01-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. du (Akkusativ)",
          "de": "Wählen Sie die richtige Antwort. du (Akkusativ)",
          "ar": "اختر الإجابة الصحيحة. du (Akkusativ)",
          "en": "Choose the correct answer. du (Akkusativ)"
        },
        "selection": "single",
        "options": [
          "dich",
          "mich",
          "dir"
        ]
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "02 – Körperpflege",
      "de": "02 – Körperpflege",
      "ar": "02 – Körperpflege",
      "en": "02 – Körperpflege"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-02-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich kämme ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich kämme ___ die Haare.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-02-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Zieh ___ doch an!",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-02-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Zieh ___ einen Mantel an!",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-02-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Er wäscht ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-02-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Er wäscht ___ das Gesicht.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-02-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Katzen putzen ___ häufig.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-02-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Katzen putzen ___ die Ohren.",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "03 – Kleidung und Verletzungen",
      "de": "03 – Kleidung und Verletzungen",
      "ar": "03 – Kleidung und Verletzungen",
      "en": "03 – Kleidung und Verletzungen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Wasch ___!",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-03-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Wasch ___ die Hände!",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-03-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Wir ziehen ___ aus.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-03-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Wir ziehen ___ die Jacke aus.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Schneidet ___ nicht!",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-03-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Schneidet ___ die Fingernägel vorsichtig!",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-03-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Beim Sport habe ich ___ verletzt.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-03-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Beim Sport habe ich ___ die Hand verletzt.",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "04 – Satzhälften",
      "de": "04 – Satzhälften",
      "ar": "04 – Satzhälften",
      "en": "04 – Satzhälften"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-04-q01",
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
            "label": "Ich kaufe"
          },
          {
            "id": "item-2",
            "label": "Warum wünschst du"
          },
          {
            "id": "item-3",
            "label": "Letztes Jahr habe ich"
          },
          {
            "id": "item-4",
            "label": "Such"
          },
          {
            "id": "item-5",
            "label": "Ich kann"
          },
          {
            "id": "item-6",
            "label": "Du nimmst"
          }
        ],
        "options": [
          "mir die Hand verletzt.",
          "mir das nicht vorstellen.",
          "dir schon wieder ein Handy?",
          "dir zu viel vor.",
          "mir bald ein neues Auto.",
          "dir aus, was du haben willst."
        ]
      },
      {
        "id": "kapitel-51-ubung-04-q02",
        "position": 2,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte ?",
          "de": "Ist dieser Satz korrekt?",
          "ar": "هل هذه الجملة صحيحة؟",
          "en": "Is this sentence correct?"
        },
        "statement": "Was wünschst du dich?"
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "05 – Kasus erkennen",
      "de": "05 – Kasus erkennen",
      "ar": "05 – Kasus erkennen",
      "en": "05 – Kasus erkennen"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-05-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er wünscht sich ein Pferd.",
          "de": "Wählen Sie die richtige Antwort. Er wünscht sich ein Pferd.",
          "ar": "اختر الإجابة الصحيحة. Er wünscht sich ein Pferd.",
          "en": "Choose the correct answer. Er wünscht sich ein Pferd."
        },
        "selection": "single",
        "options": [
          "Akkusativ",
          "Dativ"
        ]
      },
      {
        "id": "kapitel-51-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er hat sich geschnitten.",
          "de": "Wählen Sie die richtige Antwort. Er hat sich geschnitten.",
          "ar": "اختر الإجابة الصحيحة. Er hat sich geschnitten.",
          "en": "Choose the correct answer. Er hat sich geschnitten."
        },
        "selection": "single",
        "options": [
          "Akkusativ",
          "Dativ"
        ]
      },
      {
        "id": "kapitel-51-ubung-05-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er kauft sich einen BMW.",
          "de": "Wählen Sie die richtige Antwort. Er kauft sich einen BMW.",
          "ar": "اختر الإجابة الصحيحة. Er kauft sich einen BMW.",
          "en": "Choose the correct answer. Er kauft sich einen BMW."
        },
        "selection": "single",
        "options": [
          "Dativ",
          "Akkusativ"
        ]
      },
      {
        "id": "kapitel-51-ubung-05-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er macht sich keine Sorgen.",
          "de": "Wählen Sie die richtige Antwort. Er macht sich keine Sorgen.",
          "ar": "اختر الإجابة الصحيحة. Er macht sich keine Sorgen.",
          "en": "Choose the correct answer. Er macht sich keine Sorgen."
        },
        "selection": "single",
        "options": [
          "Akkusativ",
          "Dativ"
        ]
      },
      {
        "id": "kapitel-51-ubung-05-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er unterhält sich gut.",
          "de": "Wählen Sie die richtige Antwort. Er unterhält sich gut.",
          "ar": "اختر الإجابة الصحيحة. Er unterhält sich gut.",
          "en": "Choose the correct answer. Er unterhält sich gut."
        },
        "selection": "single",
        "options": [
          "Dativ",
          "Akkusativ"
        ]
      },
      {
        "id": "kapitel-51-ubung-05-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er lässt sich krankschreiben.",
          "de": "Wählen Sie die richtige Antwort. Er lässt sich krankschreiben.",
          "ar": "اختر الإجابة الصحيحة. Er lässt sich krankschreiben.",
          "en": "Choose the correct answer. Er lässt sich krankschreiben."
        },
        "selection": "single",
        "options": [
          "Akkusativ",
          "Dativ"
        ]
      },
      {
        "id": "kapitel-51-ubung-05-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er nimmt sich viel vor.",
          "de": "Wählen Sie die richtige Antwort. Er nimmt sich viel vor.",
          "ar": "اختر الإجابة الصحيحة. Er nimmt sich viel vor.",
          "en": "Choose the correct answer. Er nimmt sich viel vor."
        },
        "selection": "single",
        "options": [
          "Akkusativ",
          "Dativ"
        ]
      },
      {
        "id": "kapitel-51-ubung-05-q08",
        "position": 8,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er kann sich nicht vorstellen, dass es schneit.",
          "de": "Wählen Sie die richtige Antwort. Er kann sich nicht vorstellen, dass es schneit.",
          "ar": "اختر الإجابة الصحيحة. Er kann sich nicht vorstellen, dass es schneit.",
          "en": "Choose the correct answer. Er kann sich nicht vorstellen, dass es schneit."
        },
        "selection": "single",
        "options": [
          "Akkusativ",
          "Dativ"
        ]
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "06 – Akkusativobjekt",
      "de": "06 – Akkusativobjekt",
      "ar": "06 – Akkusativobjekt",
      "en": "06 – Akkusativobjekt"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Hast du dir eine Zeitung gekauft? (Akkusativobjekt)",
          "de": "Wählen Sie die richtige Antwort. Hast du dir eine Zeitung gekauft? (Akkusativobjekt)",
          "ar": "اختر الإجابة الصحيحة. Hast du dir eine Zeitung gekauft? (Akkusativobjekt)",
          "en": "Choose the correct answer. Hast du dir eine Zeitung gekauft? (Akkusativobjekt)"
        },
        "selection": "single",
        "options": [
          "dir",
          "du",
          "eine Zeitung"
        ]
      },
      {
        "id": "kapitel-51-ubung-06-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er hat sich den Finger gebrochen. (Akkusativobjekt)",
          "de": "Wählen Sie die richtige Antwort. Er hat sich den Finger gebrochen. (Akkusativobjekt)",
          "ar": "اختر الإجابة الصحيحة. Er hat sich den Finger gebrochen. (Akkusativobjekt)",
          "en": "Choose the correct answer. Er hat sich den Finger gebrochen. (Akkusativobjekt)"
        },
        "selection": "single",
        "options": [
          "er",
          "sich",
          "den Finger"
        ]
      },
      {
        "id": "kapitel-51-ubung-06-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Warum machst du dir Sorgen? (Akkusativobjekt)",
          "de": "Wählen Sie die richtige Antwort. Warum machst du dir Sorgen? (Akkusativobjekt)",
          "ar": "اختر الإجابة الصحيحة. Warum machst du dir Sorgen? (Akkusativobjekt)",
          "en": "Choose the correct answer. Warum machst du dir Sorgen? (Akkusativobjekt)"
        },
        "selection": "single",
        "options": [
          "dir",
          "du",
          "Sorgen"
        ]
      },
      {
        "id": "kapitel-51-ubung-06-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Wir ziehen uns die Schuhe aus. (Akkusativobjekt)",
          "de": "Wählen Sie die richtige Antwort. Wir ziehen uns die Schuhe aus. (Akkusativobjekt)",
          "ar": "اختر الإجابة الصحيحة. Wir ziehen uns die Schuhe aus. (Akkusativobjekt)",
          "en": "Choose the correct answer. Wir ziehen uns die Schuhe aus. (Akkusativobjekt)"
        },
        "selection": "single",
        "options": [
          "die Schuhe",
          "wir",
          "uns"
        ]
      },
      {
        "id": "kapitel-51-ubung-06-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Er wünscht sich ein Fahrrad. (Akkusativobjekt)",
          "de": "Wählen Sie die richtige Antwort. Er wünscht sich ein Fahrrad. (Akkusativobjekt)",
          "ar": "اختر الإجابة الصحيحة. Er wünscht sich ein Fahrrad. (Akkusativobjekt)",
          "en": "Choose the correct answer. Er wünscht sich ein Fahrrad. (Akkusativobjekt)"
        },
        "selection": "single",
        "options": [
          "sich",
          "er",
          "ein Fahrrad"
        ]
      },
      {
        "id": "kapitel-51-ubung-06-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la bonne réponse. Was wünscht er sich? (Akkusativobjekt)",
          "de": "Wählen Sie die richtige Antwort. Was wünscht er sich? (Akkusativobjekt)",
          "ar": "اختر الإجابة الصحيحة. Was wünscht er sich? (Akkusativobjekt)",
          "en": "Choose the correct answer. Was wünscht er sich? (Akkusativobjekt)"
        },
        "selection": "single",
        "options": [
          "er",
          "Was",
          "sich"
        ]
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "07 – Sich vorstellen",
      "de": "07 – Sich vorstellen",
      "ar": "07 – Sich vorstellen",
      "en": "07 – Sich vorstellen"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich möchte ___ vorstellen: Mein Name ist Meier.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-07-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich kann ___ nicht vorstellen, wie die Leute dort leben.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-07-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Stell ___ vor, gestern war Chaos!",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-07-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Soll ich ___ vorstellen? Ich heiße Jana.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-07-q05",
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
          "Ich stelle mir vor: Ich heiße Ali. (Selbstvorstellung)",
          "Ich stelle mir eine Reise vor.",
          "Ich stelle mich eine Reise vor.",
          "Ich stelle mich vor."
        ]
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "08 – Lassen und feste Verbindungen",
      "de": "08 – Lassen und feste Verbindungen",
      "ar": "08 – Lassen und feste Verbindungen",
      "en": "08 – Lassen und feste Verbindungen"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-08-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Wir … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Wir … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Wir … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Wir … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "Wir",
          "uns Sorgen um unsere Tochter.",
          "machen"
        ]
      },
      {
        "id": "kapitel-51-ubung-08-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Sie … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Sie … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Sie … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Sie … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "lässt",
          "sich eine neue Frisur machen.",
          "Sie"
        ]
      },
      {
        "id": "kapitel-51-ubung-08-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Ich … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "lasse",
          "mir den Termin bestätigen.",
          "Ich"
        ]
      },
      {
        "id": "kapitel-51-ubung-08-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Ich … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "mir einen Führerschein ausstellen.",
          "lasse",
          "Ich"
        ]
      },
      {
        "id": "kapitel-51-ubung-08-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Man … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Man … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Man … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Man … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "Man",
          "sich einen Vertrag genau durchlesen.",
          "sollte"
        ]
      },
      {
        "id": "kapitel-51-ubung-08-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Man … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Man … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Man … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Man … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "sich am ersten Tag krankmelden.",
          "muss",
          "Man"
        ]
      },
      {
        "id": "kapitel-51-ubung-08-q07",
        "position": 7,
        "type": "reorder",
        "prompt": {
          "fr": "Krankenschwestern … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Krankenschwestern … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Krankenschwestern … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Krankenschwestern … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "müssen",
          "Krankenschwestern",
          "sich häufig die Hände waschen."
        ]
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "09 – Auf der Party",
      "de": "09 – Auf der Party",
      "ar": "09 – Auf der Party",
      "en": "09 – Auf der Party"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-51-ubung-09-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Erinnert ihr ___ an die Party?",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich hatte ___ vorbereitet.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich hatte ___ schick gemacht.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich hatte ___ die Fingernägel lackiert.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich hatte ___ eine Frisur gemacht.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Dann habe ich ___ verlaufen.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Du hast ___ mit Laura unterhalten.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Inka und Tamara haben ___ gestritten.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich habe ___ Sorgen gemacht.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Sie haben ___ entschuldigt.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q11",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Benno hat ___ verliebt.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q12",
        "position": 12,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Er hat ___ nicht von ihr getrennt.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q13",
        "position": 13,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich kann ___ vorstellen, wie glücklich sie waren.",
        "blanks": 1
      },
      {
        "id": "kapitel-51-ubung-09-q14",
        "position": 14,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Wir haben ___ gut amüsiert.",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-51-ubung-10",
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
        "id": "kapitel-51-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Ich kaufe ___ einen Helm; danach ziehe ich ___ um.",
        "blanks": 2
      },
      {
        "id": "kapitel-51-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les pronoms réfléchis appropriés.",
          "de": "Ergänzen Sie die passenden Reflexivpronomen.",
          "ar": "أكمل بالضمائر الانعكاسية المناسبة.",
          "en": "Complete with the appropriate reflexive pronouns."
        },
        "sentence": "Vor dem Gespräch stelle ich ___ den Ablauf vor; dann stelle ich ___ den Kollegen vor.",
        "blanks": 2
      },
      {
        "id": "kapitel-51-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Du erinnerst dich an den Termin.",
          "Ich mache mir Sorgen.",
          "Du erinnerst dir an den Termin.",
          "Ich mache mich Sorgen."
        ]
      },
      {
        "id": "kapitel-51-ubung-10-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Du hast ___ den Fuß verletzt. — Choisissez le pronom réfléchi correct.",
          "de": "Du hast ___ den Fuß verletzt. — Wählen Sie das richtige Reflexivpronomen.",
          "ar": "Du hast ___ den Fuß verletzt. — اختر الضمير الانعكاسي الصحيح.",
          "en": "Du hast ___ den Fuß verletzt. — Choose the correct reflexive pronoun."
        },
        "options": [
          "dich",
          "dir",
          "mir",
          "mich"
        ]
      },
      {
        "id": "kapitel-51-ubung-10-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "„Ich entschuldige mir bei der Kollegin.“"
      },
      {
        "id": "kapitel-51-ubung-10-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Ich … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Ich … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Ich … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ich … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "Ich",
          "lasse",
          "die Brille anpassen.",
          "mir"
        ]
      }
    ]
  }
]

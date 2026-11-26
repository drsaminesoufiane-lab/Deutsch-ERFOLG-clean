import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-27-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Entraînement 1",
      "de": "Übung 1",
      "ar": "تمرين 1",
      "en": "Practice 1"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-01-q01",
        "position": 1,
        "prompt": {
          "fr": "Choisissez : Ich ___ nie kochen.",
          "de": "Wählen Sie: Ich ___ nie kochen.",
          "ar": "اختر: Ich ___ nie kochen.",
          "en": "Choose: Ich ___ nie kochen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "müssen",
          "mussten",
          "musstest",
          "musste"
        ]
      },
      {
        "id": "kapitel-27-ubung-01-q02",
        "position": 2,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Ich konntest jeden Tag ins Kino gehen."
      },
      {
        "id": "kapitel-27-ubung-01-q03",
        "position": 3,
        "prompt": {
          "fr": "Associez les formes de dürfen",
          "de": "Ordnen Sie die Formen von dürfen zu",
          "ar": "طابق صيغ dürfen",
          "en": "Match the forms of dürfen"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "durfte",
          "durftest",
          "durftet"
        ]
      },
      {
        "id": "kapitel-27-ubung-01-q04",
        "position": 4,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich wollte",
          "du wolltest",
          "ihr wollte",
          "wir wolltest"
        ]
      },
      {
        "id": "kapitel-27-ubung-01-q05",
        "position": 5,
        "prompt": {
          "fr": "Reconstituez : Je devais beaucoup étudier selon les consignes reçues.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كان مطلوبا مني أن أدرس كثيرا.",
          "en": "Reconstruct: I was supposed to study a lot."
        },
        "type": "reorder",
        "tokens": [
          "lernen.",
          "viel",
          "sollte",
          "Ich"
        ]
      },
      {
        "id": "kapitel-27-ubung-01-q06",
        "position": 6,
        "prompt": {
          "fr": "Complétez au prétérit : müssen",
          "de": "Ergänzen Sie im Präteritum: müssen",
          "ar": "أكمل في الماضي: müssen",
          "en": "Complete in the simple past: müssen"
        },
        "type": "fill_blank",
        "sentence": "Musstest du im Haushalt helfen?",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Entraînement 2",
      "de": "Übung 2",
      "ar": "تمرين 2",
      "en": "Practice 2"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-02-q01",
        "position": 1,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Wir wollten ins Schwimmbad gehen."
      },
      {
        "id": "kapitel-27-ubung-02-q02",
        "position": 2,
        "prompt": {
          "fr": "Associez les formes de dürfen",
          "de": "Ordnen Sie die Formen von dürfen zu",
          "ar": "طابق صيغ dürfen",
          "en": "Match the forms of dürfen"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "durfte",
          "durftest",
          "durftet"
        ]
      },
      {
        "id": "kapitel-27-ubung-02-q03",
        "position": 3,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich konnte",
          "du konntest",
          "ihr konnte",
          "wir konntest"
        ]
      },
      {
        "id": "kapitel-27-ubung-02-q04",
        "position": 4,
        "prompt": {
          "fr": "Reconstituez : Je devais apprendre le français.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كان عليّ تعلم الفرنسية.",
          "en": "Reconstruct: I had to learn French."
        },
        "type": "reorder",
        "tokens": [
          "lernen.",
          "Französisch",
          "musste",
          "Ich"
        ]
      },
      {
        "id": "kapitel-27-ubung-02-q05",
        "position": 5,
        "prompt": {
          "fr": "Complétez au prétérit : wollen",
          "de": "Ergänzen Sie im Präteritum: wollen",
          "ar": "أكمل في الماضي: wollen",
          "en": "Complete in the simple past: wollen"
        },
        "type": "fill_blank",
        "sentence": "Ich ___ in der Exportabteilung arbeiten.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-02-q06",
        "position": 6,
        "prompt": {
          "fr": "Choisissez : Ich ___ nach Paris fahren.",
          "de": "Wählen Sie: Ich ___ nach Paris fahren.",
          "ar": "اختر: Ich ___ nach Paris fahren.",
          "en": "Choose: Ich ___ nach Paris fahren."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "konntest",
          "konnten",
          "konnte",
          "können"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Entraînement 3",
      "de": "Übung 3",
      "ar": "تمرين 3",
      "en": "Practice 3"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-03-q01",
        "position": 1,
        "prompt": {
          "fr": "Associez les formes de können",
          "de": "Ordnen Sie die Formen von können zu",
          "ar": "طابق صيغ können",
          "en": "Match the forms of können"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "konnte",
          "konntest",
          "konntet"
        ]
      },
      {
        "id": "kapitel-27-ubung-03-q02",
        "position": 2,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich durfte",
          "du durftest",
          "ihr durfte",
          "wir durftest"
        ]
      },
      {
        "id": "kapitel-27-ubung-03-q03",
        "position": 3,
        "prompt": {
          "fr": "Reconstituez : Avant, je voulais fumer.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كنت أريد التدخين سابقا.",
          "en": "Reconstruct: I used to want to smoke."
        },
        "type": "reorder",
        "tokens": [
          "rauchen.",
          "früher",
          "wollte",
          "Ich"
        ]
      },
      {
        "id": "kapitel-27-ubung-03-q04",
        "position": 4,
        "prompt": {
          "fr": "Complétez au prétérit : dürfen",
          "de": "Ergänzen Sie im Präteritum: dürfen",
          "ar": "أكمل في الماضي: dürfen",
          "en": "Complete in the simple past: dürfen"
        },
        "type": "fill_blank",
        "sentence": "Die Gäste ___ rauchen.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-03-q05",
        "position": 5,
        "prompt": {
          "fr": "Choisissez : Ihr ___ pünktlich kommen.",
          "de": "Wählen Sie: Ihr ___ pünktlich kommen.",
          "ar": "اختر: Ihr ___ pünktlich kommen.",
          "en": "Choose: Ihr ___ pünktlich kommen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "sollten",
          "solltet",
          "sollen",
          "solltest"
        ]
      },
      {
        "id": "kapitel-27-ubung-03-q06",
        "position": 6,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Wir musstet nicht bezahlen."
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Entraînement 4",
      "de": "Übung 4",
      "ar": "تمرين 4",
      "en": "Practice 4"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-04-q01",
        "position": 1,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich durfte",
          "du durftest",
          "ihr durfte",
          "wir durftest"
        ]
      },
      {
        "id": "kapitel-27-ubung-04-q02",
        "position": 2,
        "prompt": {
          "fr": "Reconstituez : Tu voulais devenir médecin.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كنت تريد أن تصبح طبيبا.",
          "en": "Reconstruct: You wanted to become a doctor."
        },
        "type": "reorder",
        "tokens": [
          "werden.",
          "Arzt",
          "wolltest",
          "Du"
        ]
      },
      {
        "id": "kapitel-27-ubung-04-q03",
        "position": 3,
        "prompt": {
          "fr": "Complétez au prétérit : sollen",
          "de": "Ergänzen Sie im Präteritum: sollen",
          "ar": "أكمل في الماضي: sollen",
          "en": "Complete in the simple past: sollen"
        },
        "type": "fill_blank",
        "sentence": "Er ___ den Chef anrufen.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-04-q04",
        "position": 4,
        "prompt": {
          "fr": "Choisissez : Wir ___ den Zug nehmen.",
          "de": "Wählen Sie: Wir ___ den Zug nehmen.",
          "ar": "اختر: Wir ___ den Zug nehmen.",
          "en": "Choose: Wir ___ den Zug nehmen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "konnte",
          "können",
          "konntet",
          "konnten"
        ]
      },
      {
        "id": "kapitel-27-ubung-04-q05",
        "position": 5,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Ihr musstet früh aufstehen."
      },
      {
        "id": "kapitel-27-ubung-04-q06",
        "position": 6,
        "prompt": {
          "fr": "Associez les formes de wollen",
          "de": "Ordnen Sie die Formen von wollen zu",
          "ar": "طابق صيغ wollen",
          "en": "Match the forms of wollen"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "wollte",
          "wolltest",
          "wolltet"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Entraînement 5",
      "de": "Übung 5",
      "ar": "تمرين 5",
      "en": "Practice 5"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-05-q01",
        "position": 1,
        "prompt": {
          "fr": "Reconstituez : On te conseillait de boire plus d’eau.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كان ينصحك أحد بشرب المزيد من الماء.",
          "en": "Reconstruct: You were advised to drink more water."
        },
        "type": "reorder",
        "tokens": [
          "trinken.",
          "Wasser",
          "mehr",
          "solltest",
          "Du"
        ]
      },
      {
        "id": "kapitel-27-ubung-05-q02",
        "position": 2,
        "prompt": {
          "fr": "Complétez au prétérit : müssen",
          "de": "Ergänzen Sie im Präteritum: müssen",
          "ar": "أكمل في الماضي: müssen",
          "en": "Complete in the simple past: müssen"
        },
        "type": "fill_blank",
        "sentence": "Ich ___ nie kochen.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-05-q03",
        "position": 3,
        "prompt": {
          "fr": "Choisissez : Ich ___ jeden Tag ins Kino gehen.",
          "de": "Wählen Sie: Ich ___ jeden Tag ins Kino gehen.",
          "ar": "اختر: Ich ___ jeden Tag ins Kino gehen.",
          "en": "Choose: Ich ___ jeden Tag ins Kino gehen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "können",
          "konntest",
          "konnte",
          "konnten"
        ]
      },
      {
        "id": "kapitel-27-ubung-05-q04",
        "position": 4,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Ich durftest keinen Alkohol trinken."
      },
      {
        "id": "kapitel-27-ubung-05-q05",
        "position": 5,
        "prompt": {
          "fr": "Associez les formes de wollen",
          "de": "Ordnen Sie die Formen von wollen zu",
          "ar": "طابق صيغ wollen",
          "en": "Match the forms of wollen"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "wollte",
          "wolltest",
          "wolltet"
        ]
      },
      {
        "id": "kapitel-27-ubung-05-q06",
        "position": 6,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich sollte",
          "du solltest",
          "ihr sollte",
          "wir solltest"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Entraînement 6",
      "de": "Übung 6",
      "ar": "تمرين 6",
      "en": "Practice 6"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-06-q01",
        "position": 1,
        "prompt": {
          "fr": "Complétez au prétérit : müssen",
          "de": "Ergänzen Sie im Präteritum: müssen",
          "ar": "أكمل في الماضي: müssen",
          "en": "Complete in the simple past: müssen"
        },
        "type": "fill_blank",
        "sentence": "Musstest du im Haushalt helfen?",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-06-q02",
        "position": 2,
        "prompt": {
          "fr": "Choisissez : Wir ___ ins Schwimmbad gehen.",
          "de": "Wählen Sie: Wir ___ ins Schwimmbad gehen.",
          "ar": "اختر: Wir ___ ins Schwimmbad gehen.",
          "en": "Choose: Wir ___ ins Schwimmbad gehen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "wolltet",
          "wollte",
          "wollten",
          "wollen"
        ]
      },
      {
        "id": "kapitel-27-ubung-06-q03",
        "position": 3,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Wir durften nur einmal pro Woche gehen."
      },
      {
        "id": "kapitel-27-ubung-06-q04",
        "position": 4,
        "prompt": {
          "fr": "Associez les formes de können",
          "de": "Ordnen Sie die Formen von können zu",
          "ar": "طابق صيغ können",
          "en": "Match the forms of können"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "konnte",
          "konntest",
          "konntet"
        ]
      },
      {
        "id": "kapitel-27-ubung-06-q05",
        "position": 5,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich musste",
          "du musstest",
          "ihr musste",
          "wir musstest"
        ]
      },
      {
        "id": "kapitel-27-ubung-06-q06",
        "position": 6,
        "prompt": {
          "fr": "Reconstituez : Je voulais travailler au service export.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كنت أريد العمل في قسم التصدير.",
          "en": "Reconstruct: I wanted to work in the export department."
        },
        "type": "reorder",
        "tokens": [
          "arbeiten.",
          "Exportabteilung",
          "der",
          "in",
          "wollte",
          "Ich"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Entraînement 7",
      "de": "Übung 7",
      "ar": "تمرين 7",
      "en": "Practice 7"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-07-q01",
        "position": 1,
        "prompt": {
          "fr": "Choisissez : Ich ___ nach Paris fahren.",
          "de": "Wählen Sie: Ich ___ nach Paris fahren.",
          "ar": "اختر: Ich ___ nach Paris fahren.",
          "en": "Choose: Ich ___ nach Paris fahren."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "können",
          "konnten",
          "konntest",
          "konnte"
        ]
      },
      {
        "id": "kapitel-27-ubung-07-q02",
        "position": 2,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Du konnte früher nicht lange schlafen."
      },
      {
        "id": "kapitel-27-ubung-07-q03",
        "position": 3,
        "prompt": {
          "fr": "Associez les formes de dürfen",
          "de": "Ordnen Sie die Formen von dürfen zu",
          "ar": "طابق صيغ dürfen",
          "en": "Match the forms of dürfen"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "durfte",
          "durftest",
          "durftet"
        ]
      },
      {
        "id": "kapitel-27-ubung-07-q04",
        "position": 4,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich wollte",
          "du wolltest",
          "ihr wollte",
          "wir wolltest"
        ]
      },
      {
        "id": "kapitel-27-ubung-07-q05",
        "position": 5,
        "prompt": {
          "fr": "Reconstituez : Les clients avaient le droit de fumer.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كان مسموحا للزبائن بالتدخين.",
          "en": "Reconstruct: The guests were allowed to smoke."
        },
        "type": "reorder",
        "tokens": [
          "rauchen.",
          "durften",
          "Gäste",
          "Die"
        ]
      },
      {
        "id": "kapitel-27-ubung-07-q06",
        "position": 6,
        "prompt": {
          "fr": "Complétez au prétérit : sollen",
          "de": "Ergänzen Sie im Präteritum: sollen",
          "ar": "أكمل في الماضي: sollen",
          "en": "Complete in the simple past: sollen"
        },
        "type": "fill_blank",
        "sentence": "Ihr ___ pünktlich kommen.",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Entraînement 8",
      "de": "Übung 8",
      "ar": "تمرين 8",
      "en": "Practice 8"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-08-q01",
        "position": 1,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Wir mussten nicht bezahlen."
      },
      {
        "id": "kapitel-27-ubung-08-q02",
        "position": 2,
        "prompt": {
          "fr": "Associez les formes de dürfen",
          "de": "Ordnen Sie die Formen von dürfen zu",
          "ar": "طابق صيغ dürfen",
          "en": "Match the forms of dürfen"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "durfte",
          "durftest",
          "durftet"
        ]
      },
      {
        "id": "kapitel-27-ubung-08-q03",
        "position": 3,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich wollte",
          "du wolltest",
          "ihr wollte",
          "wir wolltest"
        ]
      },
      {
        "id": "kapitel-27-ubung-08-q04",
        "position": 4,
        "prompt": {
          "fr": "Reconstituez : Il devait appeler le chef sur instruction.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كان مطلوبا منه الاتصال بالمدير.",
          "en": "Reconstruct: He was supposed to call the boss."
        },
        "type": "reorder",
        "tokens": [
          "anrufen.",
          "Chef",
          "den",
          "sollte",
          "Er"
        ]
      },
      {
        "id": "kapitel-27-ubung-08-q05",
        "position": 5,
        "prompt": {
          "fr": "Complétez au prétérit : können",
          "de": "Ergänzen Sie im Präteritum: können",
          "ar": "أكمل في الماضي: können",
          "en": "Complete in the simple past: können"
        },
        "type": "fill_blank",
        "sentence": "Wir ___ den Zug nehmen.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-08-q06",
        "position": 6,
        "prompt": {
          "fr": "Choisissez : Ihr ___ früh aufstehen.",
          "de": "Wählen Sie: Ihr ___ früh aufstehen.",
          "ar": "اختر: Ihr ___ früh aufstehen.",
          "en": "Choose: Ihr ___ früh aufstehen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "müssen",
          "musstet",
          "musstest",
          "mussten"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Entraînement 9",
      "de": "Übung 9",
      "ar": "تمرين 9",
      "en": "Practice 9"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-09-q01",
        "position": 1,
        "prompt": {
          "fr": "Associez les formes de wollen",
          "de": "Ordnen Sie die Formen von wollen zu",
          "ar": "طابق صيغ wollen",
          "en": "Match the forms of wollen"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "wollte",
          "wolltest",
          "wolltet"
        ]
      },
      {
        "id": "kapitel-27-ubung-09-q02",
        "position": 2,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich sollte",
          "du solltest",
          "ihr sollte",
          "wir solltest"
        ]
      },
      {
        "id": "kapitel-27-ubung-09-q03",
        "position": 3,
        "prompt": {
          "fr": "Reconstituez : Je ne devais jamais cuisiner.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: لم يكن عليّ الطبخ أبدا.",
          "en": "Reconstruct: I never had to cook."
        },
        "type": "reorder",
        "tokens": [
          "kochen.",
          "nie",
          "musste",
          "Ich"
        ]
      },
      {
        "id": "kapitel-27-ubung-09-q04",
        "position": 4,
        "prompt": {
          "fr": "Complétez au prétérit : können",
          "de": "Ergänzen Sie im Präteritum: können",
          "ar": "أكمل في الماضي: können",
          "en": "Complete in the simple past: können"
        },
        "type": "fill_blank",
        "sentence": "Ich ___ jeden Tag ins Kino gehen.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-09-q05",
        "position": 5,
        "prompt": {
          "fr": "Choisissez : Ich ___ keinen Alkohol trinken.",
          "de": "Wählen Sie: Ich ___ keinen Alkohol trinken.",
          "ar": "اختر: Ich ___ keinen Alkohol trinken.",
          "en": "Choose: Ich ___ keinen Alkohol trinken."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "durften",
          "dürfen",
          "durfte",
          "durftest"
        ]
      },
      {
        "id": "kapitel-27-ubung-09-q06",
        "position": 6,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Ich wolltest keine Kinder."
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Entraînement 10",
      "de": "Übung 10",
      "ar": "تمرين 10",
      "en": "Practice 10"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-10-q01",
        "position": 1,
        "prompt": {
          "fr": "Choisissez les deux formes correctes.",
          "de": "Wählen Sie zwei richtige Formen.",
          "ar": "اختر الصيغتين الصحيحتين.",
          "en": "Choose two correct forms."
        },
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich sollte",
          "du solltest",
          "ihr sollte",
          "wir solltest"
        ]
      },
      {
        "id": "kapitel-27-ubung-10-q02",
        "position": 2,
        "prompt": {
          "fr": "Reconstituez : Devais-tu aider à la maison ?",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: هل كان عليك المساعدة في المنزل؟",
          "en": "Reconstruct: Did you have to help at home?"
        },
        "type": "reorder",
        "tokens": [
          "helfen?",
          "Haushalt",
          "im",
          "du",
          "Musstest"
        ]
      },
      {
        "id": "kapitel-27-ubung-10-q03",
        "position": 3,
        "prompt": {
          "fr": "Complétez au prétérit : wollen",
          "de": "Ergänzen Sie im Präteritum: wollen",
          "ar": "أكمل في الماضي: wollen",
          "en": "Complete in the simple past: wollen"
        },
        "type": "fill_blank",
        "sentence": "Wir ___ ins Schwimmbad gehen.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-10-q04",
        "position": 4,
        "prompt": {
          "fr": "Choisissez : Wir ___ nur einmal pro Woche gehen.",
          "de": "Wählen Sie: Wir ___ nur einmal pro Woche gehen.",
          "ar": "اختر: Wir ___ nur einmal pro Woche gehen.",
          "en": "Choose: Wir ___ nur einmal pro Woche gehen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "durftet",
          "durften",
          "durfte",
          "dürfen"
        ]
      },
      {
        "id": "kapitel-27-ubung-10-q05",
        "position": 5,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Sie konnte mit drei Jahren schwimmen."
      },
      {
        "id": "kapitel-27-ubung-10-q06",
        "position": 6,
        "prompt": {
          "fr": "Associez les formes de müssen",
          "de": "Ordnen Sie die Formen von müssen zu",
          "ar": "طابق صيغ müssen",
          "en": "Match the forms of müssen"
        },
        "type": "matching",
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
            "id": "4",
            "label": "ihr"
          }
        ],
        "options": [
          "musste",
          "musstest",
          "musstet"
        ]
      }
    ]
  }
]

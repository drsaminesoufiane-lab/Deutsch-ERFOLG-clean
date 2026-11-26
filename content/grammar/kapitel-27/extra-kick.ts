import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-27-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Entraînement 11",
      "de": "Übung 11",
      "ar": "تمرين 11",
      "en": "Practice 11"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-11-q01",
        "position": 1,
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
      },
      {
        "id": "kapitel-27-ubung-11-q02",
        "position": 2,
        "prompt": {
          "fr": "Complétez au prétérit : können",
          "de": "Ergänzen Sie im Präteritum: können",
          "ar": "أكمل في الماضي: können",
          "en": "Complete in the simple past: können"
        },
        "type": "fill_blank",
        "sentence": "Ich ___ nach Paris fahren.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-11-q03",
        "position": 3,
        "prompt": {
          "fr": "Choisissez : Du ___ früher nicht lange schlafen.",
          "de": "Wählen Sie: Du ___ früher nicht lange schlafen.",
          "ar": "اختر: Du ___ früher nicht lange schlafen.",
          "en": "Choose: Du ___ früher nicht lange schlafen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "konntest",
          "konnte",
          "konntet",
          "können"
        ]
      },
      {
        "id": "kapitel-27-ubung-11-q04",
        "position": 4,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Er durften noch nicht heiraten."
      },
      {
        "id": "kapitel-27-ubung-11-q05",
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
        "id": "kapitel-27-ubung-11-q06",
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
          "ich durfte",
          "du durftest",
          "ihr durfte",
          "wir durftest"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "Entraînement 12",
      "de": "Übung 12",
      "ar": "تمرين 12",
      "en": "Practice 12"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-12-q01",
        "position": 1,
        "prompt": {
          "fr": "Complétez au prétérit : sollen",
          "de": "Ergänzen Sie im Präteritum: sollen",
          "ar": "أكمل في الماضي: sollen",
          "en": "Complete in the simple past: sollen"
        },
        "type": "fill_blank",
        "sentence": "Ihr ___ pünktlich kommen.",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-12-q02",
        "position": 2,
        "prompt": {
          "fr": "Choisissez : Wir ___ nicht bezahlen.",
          "de": "Wählen Sie: Wir ___ nicht bezahlen.",
          "ar": "اختر: Wir ___ nicht bezahlen.",
          "en": "Choose: Wir ___ nicht bezahlen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "musste",
          "musstet",
          "müssen",
          "mussten"
        ]
      },
      {
        "id": "kapitel-27-ubung-12-q03",
        "position": 3,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Ihr durftet hier nicht parken."
      },
      {
        "id": "kapitel-27-ubung-12-q04",
        "position": 4,
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
        "id": "kapitel-27-ubung-12-q05",
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
          "ich sollte",
          "du solltest",
          "ihr sollte",
          "wir solltest"
        ]
      },
      {
        "id": "kapitel-27-ubung-12-q06",
        "position": 6,
        "prompt": {
          "fr": "Reconstituez : Nous pouvions prendre le train.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كنا نستطيع ركوب القطار.",
          "en": "Reconstruct: We could take the train."
        },
        "type": "reorder",
        "tokens": [
          "nehmen.",
          "Zug",
          "den",
          "konnten",
          "Wir"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Entraînement 13",
      "de": "Übung 13",
      "ar": "تمرين 13",
      "en": "Practice 13"
    },
    "description": {
      "fr": "Les modaux au prétérit",
      "de": "Präteritum der Modalverben",
      "ar": "الأفعال الناقصة في الماضي",
      "en": "Modal verbs in the simple past"
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-13-q01",
        "position": 1,
        "prompt": {
          "fr": "Choisissez : Ihr ___ früh aufstehen.",
          "de": "Wählen Sie: Ihr ___ früh aufstehen.",
          "ar": "اختر: Ihr ___ früh aufstehen.",
          "en": "Choose: Ihr ___ früh aufstehen."
        },
        "type": "qcm",
        "selection": "single",
        "options": [
          "musstet",
          "musstest",
          "mussten",
          "müssen"
        ]
      },
      {
        "id": "kapitel-27-ubung-13-q02",
        "position": 2,
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحويا؟",
          "en": "Is the sentence grammatically correct?"
        },
        "type": "true_false",
        "statement": "Sie wollte ein Zimmer buchen."
      },
      {
        "id": "kapitel-27-ubung-13-q03",
        "position": 3,
        "prompt": {
          "fr": "Associez les formes de sollen",
          "de": "Ordnen Sie die Formen von sollen zu",
          "ar": "طابق صيغ sollen",
          "en": "Match the forms of sollen"
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
          "sollte",
          "solltest",
          "solltet"
        ]
      },
      {
        "id": "kapitel-27-ubung-13-q04",
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
          "ich musste",
          "du musstest",
          "ihr musste",
          "wir musstest"
        ]
      },
      {
        "id": "kapitel-27-ubung-13-q05",
        "position": 5,
        "prompt": {
          "fr": "Reconstituez : Je pouvais aller au cinéma chaque jour.",
          "de": "Bilden Sie den Satz.",
          "ar": "رتب: كنت أستطيع الذهاب إلى السينما كل يوم.",
          "en": "Reconstruct: I could go to the cinema every day."
        },
        "type": "reorder",
        "tokens": [
          "gehen.",
          "Kino",
          "ins",
          "Tag",
          "jeden",
          "konnte",
          "Ich"
        ]
      },
      {
        "id": "kapitel-27-ubung-13-q06",
        "position": 6,
        "prompt": {
          "fr": "Complétez au prétérit : dürfen",
          "de": "Ergänzen Sie im Präteritum: dürfen",
          "ar": "أكمل في الماضي: dürfen",
          "en": "Complete in the simple past: dürfen"
        },
        "type": "fill_blank",
        "sentence": "Ich ___ keinen Alkohol trinken.",
        "blanks": 1
      }
    ]
  }
]

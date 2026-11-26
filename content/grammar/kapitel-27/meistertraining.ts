import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-27-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Grundformen",
      "de": "Grundformen",
      "ar": "Grundformen",
      "en": "Grundformen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-01-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Als Kind ___ ich nie kochen. (müssen) — Choisissez la forme ou la phrase correcte.",
          "de": "Als Kind ___ ich nie kochen. (müssen) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Als Kind ___ ich nie kochen. (müssen) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Als Kind ___ ich nie kochen. (müssen) — Choose the correct form or sentence."
        },
        "options": [
          "musste",
          "musstest",
          "muss",
          "mussten"
        ]
      },
      {
        "id": "kapitel-27-ubung-01-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Mit sechs Jahren ___ du schon lesen. (können)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-01-q03",
        "position": 3,
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
            "label": "ich (dürfen)"
          },
          {
            "id": "1",
            "label": "ihr (dürfen)"
          },
          {
            "id": "2",
            "label": "wir (dürfen)"
          }
        ],
        "options": [
          "durfte",
          "durften",
          "durftet"
        ]
      },
      {
        "id": "kapitel-27-ubung-01-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Er solltet gestern zum Arzt gehen."
      },
      {
        "id": "kapitel-27-ubung-01-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Damals ___ wir in die Stadt ziehen. (wollen) — Choisissez la forme ou la phrase correcte.",
          "de": "Damals ___ wir in die Stadt ziehen. (wollen) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Damals ___ wir in die Stadt ziehen. (wollen) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Damals ___ wir in die Stadt ziehen. (wollen) — Choose the correct form or sentence."
        },
        "options": [
          "wollen",
          "wolltet",
          "wollten",
          "wollte"
        ]
      },
      {
        "id": "kapitel-27-ubung-01-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Früher … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Früher … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Früher … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Früher … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "ich",
          "musste",
          "Früher",
          "früh aufstehen."
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Personalendungen",
      "de": "Personalendungen",
      "ar": "Personalendungen",
      "en": "Personalendungen"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-02-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Ihr ___ gestern die Küche putzen. (sollen)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Meine Eltern ___ früher nicht verreisen. (können)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-02-q03",
        "position": 3,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez les formes correctes au Präteritum.",
          "de": "Wählen Sie die richtigen Präteritumformen.",
          "ar": "اختر الصيغ الصحيحة في الماضي البسيط.",
          "en": "Select the correct preterite forms."
        },
        "options": [
          "ihr wolltest",
          "ihr wolltet",
          "du müsstest (Präteritum)",
          "du musstest"
        ]
      },
      {
        "id": "kapitel-27-ubung-02-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Frau Kern, ___ Sie damals allein reisen? (dürfen) — Choisissez la forme ou la phrase correcte.",
          "de": "Frau Kern, ___ Sie damals allein reisen? (dürfen) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Frau Kern, ___ Sie damals allein reisen? (dürfen) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Frau Kern, ___ Sie damals allein reisen? (dürfen) — Choose the correct form or sentence."
        },
        "options": [
          "dürfen",
          "durfte",
          "durftet",
          "durften"
        ]
      },
      {
        "id": "kapitel-27-ubung-02-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Die Kinder konntet nicht schwimmen."
      },
      {
        "id": "kapitel-27-ubung-02-q06",
        "position": 6,
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
            "label": "du (wollen)"
          },
          {
            "id": "1",
            "label": "er (sollen)"
          },
          {
            "id": "2",
            "label": "wir (müssen)"
          }
        ],
        "options": [
          "wolltest",
          "sollte",
          "mussten"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Heute und früher",
      "de": "Heute und früher",
      "ar": "Heute und früher",
      "en": "Heute und früher"
    },
    "description": {
      "fr": "Appliquez les formes fondamentales.",
      "de": "Wenden Sie die Grundformen an.",
      "ar": "طبّق الصيغ الأساسية.",
      "en": "Apply the basic forms."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Heute kann ich fahren. Früher ___ ich nicht fahren. (können)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-03-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Damals ___ du früh ins Bett. Heute ___ du länger wach bleiben. (müssen/dürfen, Präsens im zweiten Satz)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-03-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Heute möchte ich Tee. Gestern ___ ich Kaffee. (Wunsch) — Choisissez la forme ou la phrase correcte.",
          "de": "Heute möchte ich Tee. Gestern ___ ich Kaffee. (Wunsch) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Heute möchte ich Tee. Gestern ___ ich Kaffee. (Wunsch) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Heute möchte ich Tee. Gestern ___ ich Kaffee. (Wunsch) — Choose the correct form or sentence."
        },
        "options": [
          "wolltest",
          "will",
          "möchtete",
          "wollte"
        ]
      },
      {
        "id": "kapitel-27-ubung-03-q04",
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
          "Früher musste er arbeiten.",
          "Heute muss er arbeiten.",
          "Heute musst er arbeiten.",
          "Früher mussete er arbeiten."
        ]
      },
      {
        "id": "kapitel-27-ubung-03-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Gestern durftest du hier parken."
      },
      {
        "id": "kapitel-27-ubung-03-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Heute … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Heute … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Heute … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Heute … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "darf",
          "länger bleiben.",
          "sie",
          "Heute"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Meine Kindheit I",
      "de": "Meine Kindheit I",
      "ar": "Meine Kindheit I",
      "en": "Meine Kindheit I"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-04-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Ilse: Ich ___ nie im Haushalt helfen und ___ so viel Eis essen, wie ich ___. (müssen/dürfen/wollen)",
        "blanks": 3
      },
      {
        "id": "kapitel-27-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Gerda, ___ du viel im Haushalt helfen? (müssen)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-04-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Ich ___ oft machen, was ich ___. (dürfen/wollen)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "___ du viel für die Schule lernen? (müssen)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Ich ___ studieren, also ___ ich viel lernen. (sollen)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-04-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Mein Vater ___ studieren, aber er ___ nicht. (wollen/dürfen)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Meine Kindheit II",
      "de": "Meine Kindheit II",
      "ar": "Meine Kindheit II",
      "en": "Meine Kindheit II"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-05-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Er ___, dass ich studiere, aber ich ___ lieber spielen. (wollen)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-05-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Wann ___ du schwimmen? (können)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Ich ___ erst mit sechs schwimmen, meine Schwester ___ schon mit drei schwimmen. (können)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Wir ___ jeden Tag ins Schwimmbad gehen, aber wir ___ nur einmal pro Woche gehen. (wollen/dürfen)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-05-q05",
        "position": 5,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Meine Schwester konnte schwimmen.",
          "Meine Schwester konnten schwimmen.",
          "Ich dürfte spielen. (Präteritum)",
          "Ich durfte spielen."
        ]
      },
      {
        "id": "kapitel-27-ubung-05-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Als Kind … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Als Kind … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Als Kind … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Als Kind … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "Als Kind",
          "Tierärztin werden.",
          "wollte",
          "ich"
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Sprachenlernen für den Job",
      "de": "Sprachenlernen für den Job",
      "ar": "Sprachenlernen für den Job",
      "en": "Sprachenlernen für den Job"
    },
    "description": {
      "fr": "Complétez les situations et distinguez les formes.",
      "de": "Ergänzen Sie die Situationen und unterscheiden Sie die Formen.",
      "ar": "أكمل المواقف وميّز الصيغ.",
      "en": "Complete the situations and distinguish the forms."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-06-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Letztes Jahr ___ ich in der Exportabteilung arbeiten, aber ich ___ nicht, weil ich kein Französisch ___. (wollen/dürfen/können)",
        "blanks": 3
      },
      {
        "id": "kapitel-27-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Deshalb ___ ich Französisch lernen. Nach zwei Monaten ___ ich noch nicht viel Französisch. (müssen/können)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-06-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Also ___ ich einen Sprachkurs in Frankreich machen. Dann ___ ich nach Paris fahren. (müssen/können)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Im Kurs ___ ich täglich Hausaufgaben machen. Ich ___ gern alle Sehenswürdigkeiten besuchen. (müssen/wollen)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-06-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Das ___ ich nicht, weil ich keine Zeit hatte. Nach zwei Wochen ___ ich viel verstehen. (können)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-06-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Dann ___ ich in der Exportabteilung arbeiten. (Erlaubnis: dürfen)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Pflicht oder Verbot?",
      "de": "Pflicht oder Verbot?",
      "ar": "Pflicht oder Verbot?",
      "en": "Pflicht oder Verbot?"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Der Eintritt war kostenlos. Wir ___ nicht bezahlen. (müssen: keine Pflicht)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-07-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Das Schild verbot das Betreten. Ihr ___ nicht hineingehen. (dürfen: Verbot)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-07-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Die Aufgabe war freiwillig: Welche Form bedeutet „keine Pflicht“? Du ___ sie nicht machen. — Choisissez la forme ou la phrase correcte.",
          "de": "Die Aufgabe war freiwillig: Welche Form bedeutet „keine Pflicht“? Du ___ sie nicht machen. — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Die Aufgabe war freiwillig: Welche Form bedeutet „keine Pflicht“? Du ___ sie nicht machen. — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Die Aufgabe war freiwillig: Welche Form bedeutet „keine Pflicht“? Du ___ sie nicht machen. — Choose the correct form or sentence."
        },
        "options": [
          "wolltest",
          "durftest",
          "solltest",
          "musstest"
        ]
      },
      {
        "id": "kapitel-27-ubung-07-q04",
        "position": 4,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez les phrases dont le modal correspond au sens indiqué.",
          "de": "Wählen Sie die Sätze, deren Modalverb zur angegebenen Bedeutung passt.",
          "ar": "اختر الجمل التي يطابق فعلها الناقص المعنى المحدد.",
          "en": "Select sentences whose modal matches the stated meaning."
        },
        "options": [
          "Es war freiwillig: Wir mussten nicht mitkommen.",
          "Es war Pflicht: Er durfte nicht arbeiten.",
          "Der Arzt erlaubte es: Sie durfte spazieren gehen.",
          "Der Eintritt war verboten: Wir mussten nicht hineingehen."
        ]
      },
      {
        "id": "kapitel-27-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Es gab keinen Zwang, aber ich ___ mitmachen. (eigener Wunsch: wollen)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-07-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Wegen des Verbots … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Wegen des Verbots … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Wegen des Verbots … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Wegen des Verbots … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "durften",
          "Wegen des Verbots",
          "wir",
          "nicht fotografieren."
        ]
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Heinrich und sein Freund",
      "de": "Heinrich und sein Freund",
      "ar": "Heinrich und sein Freund",
      "en": "Heinrich und sein Freund"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-08-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Heute musst du nicht mehr arbeiten. Früher ___ du jeden Tag arbeiten. (müssen)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-08-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Jetzt kannst du lange schlafen. Früher ___ du nicht lange schlafen. (können)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-08-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Meine Enkelin kann jetzt lesen. Vor zwei Jahren ___ sie noch nicht lesen. (können)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Jetzt darf mein Enkel heiraten. Als Minderjähriger ___ er in dieser Situation noch nicht heiraten. (dürfen)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-08-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Heute möchte ich nicht mehr rauchen. Früher ___ ich rauchen. (wollen)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-08-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Heute dürfen die Gäste hier nicht rauchen. Damals ___ sie hier rauchen. (dürfen)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Nebensätze",
      "de": "Nebensätze",
      "ar": "Nebensätze",
      "en": "Nebensätze"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-09-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Er blieb zu Hause, … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Er blieb zu Hause, … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Er blieb zu Hause, … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Er blieb zu Hause, … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "er",
          "arbeiten musste.",
          "weil",
          "Er blieb zu Hause,"
        ]
      },
      {
        "id": "kapitel-27-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Sie sagte, dass sie früher nicht Auto fahren ___. (können)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-09-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Ich ging früher, weil ich ___. (müssen) — Choisissez la forme ou la phrase correcte.",
          "de": "Ich ging früher, weil ich ___. (müssen) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Ich ging früher, weil ich ___. (müssen) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Ich ging früher, weil ich ___. (müssen) — Choose the correct form or sentence."
        },
        "options": [
          "den Bus musste nehmen",
          "den Bus nehmen musste",
          "den Bus nehmen mussten",
          "musste den Bus nehmen"
        ]
      },
      {
        "id": "kapitel-27-ubung-09-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Wir waren enttäuscht, weil wir nicht mitkommen ___. (dürfen)",
        "blanks": 1
      },
      {
        "id": "kapitel-27-ubung-09-q05",
        "position": 5,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Ich wusste, dass du lernen musstest.",
          "Er blieb, weil er wollte helfen.",
          "Ich wusste, dass du musstest lernen.",
          "Er blieb, weil er helfen wollte."
        ]
      },
      {
        "id": "kapitel-27-ubung-09-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Sie kam später, weil sie noch einkaufen musste."
      }
    ]
  },
  {
    "id": "kapitel-27-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Abschlusstest",
      "de": "Abschlusstest",
      "ar": "Abschlusstest",
      "en": "Abschlusstest"
    },
    "description": {
      "fr": "Combinez plusieurs règles et repérez les erreurs.",
      "de": "Kombinieren Sie mehrere Regeln und erkennen Sie Fehler.",
      "ar": "اجمع عدة قواعد واكتشف الأخطاء.",
      "en": "Combine several rules and identify errors."
    },
    "questions": [
      {
        "id": "kapitel-27-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Die Ärztin sagte, ich ___ mehr schlafen. Ich ___ aber noch arbeiten. (sollen/müssen)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Wir ___ gestern nicht kommen, weil wir keinen Wagen hatten. Heute ___ wir kommen. (können)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Die Bibliothek war geschlossen, deshalb ___ wir keine Bücher ausleihen. (können) — Choisissez la forme ou la phrase correcte.",
          "de": "Die Bibliothek war geschlossen, deshalb ___ wir keine Bücher ausleihen. (können) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Die Bibliothek war geschlossen, deshalb ___ wir keine Bücher ausleihen. (können) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Die Bibliothek war geschlossen, deshalb ___ wir keine Bücher ausleihen. (können) — Choose the correct form or sentence."
        },
        "options": [
          "konntet",
          "konnte",
          "konnten",
          "könnten"
        ]
      },
      {
        "id": "kapitel-27-ubung-10-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez au Präteritum, sauf indication contraire.",
          "de": "Ergänzen Sie im Präteritum, sofern nicht anders angegeben.",
          "ar": "أكمل في الماضي البسيط ما لم يُذكر غير ذلك.",
          "en": "Complete in the preterite unless otherwise specified."
        },
        "sentence": "Ihr ___ das Zimmer nicht putzen, aber ihr ___ es nicht verlassen. (keine Pflicht / Verbot)",
        "blanks": 2
      },
      {
        "id": "kapitel-27-ubung-10-q05",
        "position": 5,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Sie möchtete früher Tänzerin werden.",
          "Sie wollte früher Tänzerin werden.",
          "Wir solltet den Bericht abgeben.",
          "Wir sollten den Bericht abgeben."
        ]
      },
      {
        "id": "kapitel-27-ubung-10-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Die Mutter fragte, … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Die Mutter fragte, … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Die Mutter fragte, … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Die Mutter fragte, … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "Die Mutter fragte,",
          "ob",
          "mitkommen wollten.",
          "wir"
        ]
      }
    ]
  }
]

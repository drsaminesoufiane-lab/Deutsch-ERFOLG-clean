import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-03-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Dialogue avec sein",
      "de": "Sein – Dialog",
      "ar": "حوار مع sein",
      "en": "Sein dialogue"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-01-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Wie ___ Ihr Name?",
          "de": "Ergänzen Sie sein. — Wie ___ Ihr Name?",
          "ar": "أكمل باستعمال sein. — Wie ___ Ihr Name?",
          "en": "Complete with sein. — Wie ___ Ihr Name?"
        },
        "selection": "single",
        "options": [
          "sind",
          "bin",
          "bist",
          "ist"
        ]
      },
      {
        "id": "kapitel-03-ubung-01-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez sein au présent.",
          "de": "Konjugieren Sie sein im Präsens.",
          "ar": "صرّف sein في المضارع.",
          "en": "Conjugate sein in the present tense."
        },
        "sentence": "Mein Name ___ Misterek.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-01-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Sind Sie neu hier?"
      },
      {
        "id": "kapitel-03-ubung-01-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Ich ___ schon ein Jahr in Hamburg.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-01-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "___ Sie Studentin?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-01-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ich ___ Schülerin.",
          "de": "Ergänzen Sie sein. — Ich ___ Schülerin.",
          "ar": "أكمل باستعمال sein. — Ich ___ Schülerin.",
          "en": "Complete with sein. — Ich ___ Schülerin."
        },
        "selection": "single",
        "options": [
          "bin",
          "sind",
          "ist",
          "bist"
        ]
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Phrases avec sein",
      "de": "Sätze mit sein",
      "ar": "جمل مع sein",
      "en": "Sentences with sein"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-02-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ich ___ 15 Jahre alt.",
          "de": "Ergänzen Sie sein. — Ich ___ 15 Jahre alt.",
          "ar": "أكمل باستعمال sein. — Ich ___ 15 Jahre alt.",
          "en": "Complete with sein. — Ich ___ 15 Jahre alt."
        },
        "selection": "single",
        "options": [
          "bin",
          "bist",
          "ist",
          "sind"
        ]
      },
      {
        "id": "kapitel-03-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez sein au présent.",
          "de": "Konjugieren Sie sein im Präsens.",
          "ar": "صرّف sein في المضارع.",
          "en": "Conjugate sein in the present tense."
        },
        "sentence": "Du ___ in München.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-02-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Er ist Herr Wang."
      },
      {
        "id": "kapitel-03-ubung-02-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Mein Name ___ Kolakowski.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-02-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Das ___ ein Wörterbuch.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-02-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Wir ___ Lehrer.",
          "de": "Ergänzen Sie sein. — Wir ___ Lehrer.",
          "ar": "أكمل باستعمال sein. — Wir ___ Lehrer.",
          "en": "Complete with sein. — Wir ___ Lehrer."
        },
        "selection": "single",
        "options": [
          "bin",
          "bist",
          "sind",
          "ist"
        ]
      },
      {
        "id": "kapitel-03-ubung-02-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ihr ___ glücklich.",
          "de": "Ergänzen Sie sein. — Ihr ___ glücklich.",
          "ar": "أكمل باستعمال sein. — Ihr ___ glücklich.",
          "en": "Complete with sein. — Ihr ___ glücklich."
        },
        "selection": "single",
        "options": [
          "bist",
          "ist",
          "seid",
          "bin"
        ]
      },
      {
        "id": "kapitel-03-ubung-02-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Frau Tannberg bin im Büro."
      },
      {
        "id": "kapitel-03-ubung-02-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Sie (Plural) ___ aus Japan.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-02-association",
        "position": 10,
        "type": "matching",
        "prompt": {
          "fr": "Associez les formes aux sujets.",
          "de": "Ordnen Sie die Formen den Subjekten zu.",
          "ar": "صل الصيغ بالفاعلين.",
          "en": "Match the forms to the subjects."
        },
        "items": [
          {
            "id": "i0",
            "label": "ich – sein"
          },
          {
            "id": "i1",
            "label": "du – sein"
          },
          {
            "id": "i2",
            "label": "wir – sein"
          }
        ],
        "options": [
          "bist",
          "sind",
          "bin"
        ]
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Avoir",
      "de": "Haben",
      "ar": "فعل الملكية haben",
      "en": "Having"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-03-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — ___ du Geld?",
          "de": "Ergänzen Sie haben. — ___ du Geld?",
          "ar": "أكمل باستعمال haben. — ___ du Geld?",
          "en": "Complete with haben. — ___ du Geld?"
        },
        "selection": "single",
        "options": [
          "Habe",
          "Hat",
          "Hast",
          "Haben"
        ]
      },
      {
        "id": "kapitel-03-ubung-03-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez haben au présent.",
          "de": "Konjugieren Sie haben im Präsens.",
          "ar": "صرّف haben في المضارع.",
          "en": "Conjugate haben in the present tense."
        },
        "sentence": "Nein, aber ich ___ Zeit.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-03-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Du hast Glück."
      },
      {
        "id": "kapitel-03-ubung-03-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "Ich ___ kein Geld und keine Zeit.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "___ ihr schon eine Wohnung hier in Mainz?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-03-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — Wir ___ noch keine Wohnung.",
          "de": "Ergänzen Sie haben. — Wir ___ noch keine Wohnung.",
          "ar": "أكمل باستعمال haben. — Wir ___ noch keine Wohnung.",
          "en": "Complete with haben. — Wir ___ noch keine Wohnung."
        },
        "selection": "single",
        "options": [
          "hat",
          "hast",
          "habe",
          "haben"
        ]
      },
      {
        "id": "kapitel-03-ubung-03-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — Herr Kim ___ viel Arbeit.",
          "de": "Ergänzen Sie haben. — Herr Kim ___ viel Arbeit.",
          "ar": "أكمل باستعمال haben. — Herr Kim ___ viel Arbeit.",
          "en": "Complete with haben. — Herr Kim ___ viel Arbeit."
        },
        "selection": "single",
        "options": [
          "hast",
          "haben",
          "hat",
          "habe"
        ]
      },
      {
        "id": "kapitel-03-ubung-03-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Er habe auch am Wochenende keine Freizeit."
      },
      {
        "id": "kapitel-03-ubung-03-multi",
        "position": 9,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich sein → bin",
          "du sein → bist",
          "du sein → sind",
          "wir sein → sind",
          "ich sein → bist"
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
    "id": "kapitel-03-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Être ou avoir",
      "de": "Sein oder haben",
      "ar": "sein أم haben",
      "en": "Being or having"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-04-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Das ___ Angela und Pascal.",
          "de": "Ergänzen Sie sein. — Das ___ Angela und Pascal.",
          "ar": "أكمل باستعمال sein. — Das ___ Angela und Pascal.",
          "en": "Complete with sein. — Das ___ Angela und Pascal."
        },
        "selection": "single",
        "options": [
          "sind",
          "bist",
          "bin",
          "ist"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez sein au présent.",
          "de": "Konjugieren Sie sein im Präsens.",
          "ar": "صرّف sein في المضارع.",
          "en": "Conjugate sein in the present tense."
        },
        "sentence": "Sie (Angela und Pascal) ___ Schüler.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Sie (Angela und Pascal) haben einen Hund."
      },
      {
        "id": "kapitel-03-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Snoopy ___ fünf Monate alt.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Was ___ Sie von Beruf?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Ich ___ Lehrer.",
          "de": "Ergänzen Sie sein. — Ich ___ Lehrer.",
          "ar": "أكمل باستعمال sein. — Ich ___ Lehrer.",
          "en": "Complete with sein. — Ich ___ Lehrer."
        },
        "selection": "single",
        "options": [
          "sind",
          "ist",
          "bist",
          "bin"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — ___ Sie verheiratet?",
          "de": "Ergänzen Sie sein. — ___ Sie verheiratet?",
          "ar": "أكمل باستعمال sein. — ___ Sie verheiratet?",
          "en": "Complete with sein. — ___ Sie verheiratet?"
        },
        "selection": "single",
        "options": [
          "Bist",
          "Ist",
          "Bin",
          "Sind"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Ich bist verheiratet."
      },
      {
        "id": "kapitel-03-ubung-04-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "Ich ___ vier Kinder.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "___ Sie ein Auto?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q11",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez haben au présent.",
          "de": "Konjugieren Sie haben im Präsens.",
          "ar": "صرّف haben في المضارع.",
          "en": "Conjugate haben in the present tense."
        },
        "sentence": "Wir ___ ein Auto.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-04-q12",
        "position": 12,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — ___ du ein Handy?",
          "de": "Ergänzen Sie haben. — ___ du ein Handy?",
          "ar": "أكمل باستعمال haben. — ___ du ein Handy?",
          "en": "Complete with haben. — ___ du ein Handy?"
        },
        "selection": "single",
        "options": [
          "Hat",
          "Hast",
          "Habe",
          "Haben"
        ]
      },
      {
        "id": "kapitel-03-ubung-04-q13",
        "position": 13,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Meine Nummer ist 0171/1234987."
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Mikunda",
      "de": "Mikunda",
      "ar": "ميكوندا",
      "en": "Mikunda"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-05-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Das ___ Mikunda.",
          "de": "Ergänzen Sie sein. — Das ___ Mikunda.",
          "ar": "أكمل باستعمال sein. — Das ___ Mikunda.",
          "en": "Complete with sein. — Das ___ Mikunda."
        },
        "selection": "single",
        "options": [
          "bin",
          "bist",
          "ist",
          "sind"
        ]
      },
      {
        "id": "kapitel-03-ubung-05-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez sein au présent.",
          "de": "Konjugieren Sie sein im Präsens.",
          "ar": "صرّف sein في المضارع.",
          "en": "Conjugate sein in the present tense."
        },
        "sentence": "Sie ___ meine Katze.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Sie ist drei Jahre alt."
      },
      {
        "id": "kapitel-03-ubung-05-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec haben.",
          "de": "Ergänzen Sie haben.",
          "ar": "أكمل باستعمال haben.",
          "en": "Complete with haben."
        },
        "sentence": "Sie ___ grüne Augen.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Jetzt ___ sie Mutter.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec haben. — Sie ___ drei Katzenbabys.",
          "de": "Ergänzen Sie haben. — Sie ___ drei Katzenbabys.",
          "ar": "أكمل باستعمال haben. — Sie ___ drei Katzenbabys.",
          "en": "Complete with haben. — Sie ___ drei Katzenbabys."
        },
        "selection": "single",
        "options": [
          "hat",
          "hast",
          "haben",
          "habe"
        ]
      },
      {
        "id": "kapitel-03-ubung-05-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec sein. — Die Katzenbabys ___ alle süß.",
          "de": "Ergänzen Sie sein. — Die Katzenbabys ___ alle süß.",
          "ar": "أكمل باستعمال sein. — Die Katzenbabys ___ alle süß.",
          "en": "Complete with sein. — Die Katzenbabys ___ alle süß."
        },
        "selection": "single",
        "options": [
          "ist",
          "bist",
          "sind",
          "bin"
        ]
      },
      {
        "id": "kapitel-03-ubung-05-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Sie (die Katzenbabys) habe grüne Augen."
      },
      {
        "id": "kapitel-03-ubung-05-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Mikunda ___ sehr glücklich.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec sein.",
          "de": "Ergänzen Sie sein.",
          "ar": "أكمل باستعمال sein.",
          "en": "Complete with sein."
        },
        "sentence": "Ich ___ auch glücklich.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-05-association",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez mögen au présent.",
          "de": "Konjugieren Sie mögen im Präsens.",
          "ar": "صرّف mögen في المضارع.",
          "en": "Conjugate mögen in the present tense."
        },
        "sentence": "Ich ___ Jazz. (mögen)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Souhaits au café",
      "de": "Möchten – im Café",
      "ar": "الرغبات في المقهى",
      "en": "Wishes at the café"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec möchten. — Wir ___ etwas trinken.",
          "de": "Ergänzen Sie möchten. — Wir ___ etwas trinken.",
          "ar": "أكمل باستعمال möchten. — Wir ___ etwas trinken.",
          "en": "Complete with möchten. — Wir ___ etwas trinken."
        },
        "selection": "single",
        "options": [
          "möchtest",
          "möchte",
          "möchtet",
          "möchten"
        ]
      },
      {
        "id": "kapitel-03-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez möchten au présent.",
          "de": "Konjugieren Sie möchten im Präsens.",
          "ar": "صرّف möchten في المضارع.",
          "en": "Conjugate möchten in the present tense."
        },
        "sentence": "Frau Taylor ___ einen Kaffee.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-06-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Was möchtest du, Ben?"
      },
      {
        "id": "kapitel-03-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec möchten.",
          "de": "Ergänzen Sie möchten.",
          "ar": "أكمل باستعمال möchten.",
          "en": "Complete with möchten."
        },
        "sentence": "Ich ___ eine Cola.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-06-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec möchten.",
          "de": "Ergänzen Sie möchten.",
          "ar": "أكمل باستعمال möchten.",
          "en": "Complete with möchten."
        },
        "sentence": "Ben ___ eine Cola.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-06-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec möchten. — Was ___ Sie trinken?",
          "de": "Ergänzen Sie möchten. — Was ___ Sie trinken?",
          "ar": "أكمل باستعمال möchten. — Was ___ Sie trinken?",
          "en": "Complete with möchten. — Was ___ Sie trinken?"
        },
        "selection": "single",
        "options": [
          "möchten",
          "möchte",
          "möchtet",
          "möchtest"
        ]
      },
      {
        "id": "kapitel-03-ubung-06-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec möchten. — ___ ihr etwas essen?",
          "de": "Ergänzen Sie möchten. — ___ ihr etwas essen?",
          "ar": "أكمل باستعمال möchten. — ___ ihr etwas essen?",
          "en": "Complete with möchten. — ___ ihr etwas essen?"
        },
        "selection": "single",
        "options": [
          "Möchtet",
          "Möchte",
          "Möchten",
          "Möchtest"
        ]
      },
      {
        "id": "kapitel-03-ubung-06-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Wir möchte bezahlen."
      },
      {
        "id": "kapitel-03-ubung-06-multi",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez wissen au présent.",
          "de": "Konjugieren Sie wissen im Präsens.",
          "ar": "صرّف wissen في المضارع.",
          "en": "Conjugate wissen in the present tense."
        },
        "sentence": "___ ihr schon die Adresse? (wissen)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Goûts et préférences",
      "de": "Mögen",
      "ar": "الأذواق والتفضيلات",
      "en": "Likes and preferences"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez mögen au présent.",
          "de": "Konjugieren Sie mögen im Präsens.",
          "ar": "صرّف mögen في المضارع.",
          "en": "Conjugate mögen in the present tense."
        },
        "sentence": "Ich ___ Kaffee.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-07-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez mögen au présent.",
          "de": "Konjugieren Sie mögen im Präsens.",
          "ar": "صرّف mögen في المضارع.",
          "en": "Conjugate mögen in the present tense."
        },
        "sentence": "Meine Freundin ___ keine Kartoffeln.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-07-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Mein Freund mag keinen Käse."
      },
      {
        "id": "kapitel-03-ubung-07-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "sentence": "Meine Eltern ___ Fisch.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "sentence": "Wir ___ keinen Kaffee.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-07-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez mögen au présent.",
          "de": "Konjugieren Sie mögen im Präsens.",
          "ar": "صرّف mögen في المضارع.",
          "en": "Conjugate mögen in the present tense."
        },
        "sentence": "Du ___ Tee.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-07-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez mögen au présent.",
          "de": "Konjugieren Sie mögen im Präsens.",
          "ar": "صرّف mögen في المضارع.",
          "en": "Conjugate mögen in the present tense."
        },
        "sentence": "Ihr ___ Schokolade.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-07-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Sie (Plural) mag keinen Fisch."
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Savoir",
      "de": "Wissen",
      "ar": "المعرفة",
      "en": "Knowing"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-08-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez wissen au présent.",
          "de": "Konjugieren Sie wissen im Präsens.",
          "ar": "صرّف wissen في المضارع.",
          "en": "Conjugate wissen in the present tense."
        },
        "sentence": "___ Sie, wo der Bahnhof ist?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-08-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez wissen au présent.",
          "de": "Konjugieren Sie wissen im Präsens.",
          "ar": "صرّف wissen في المضارع.",
          "en": "Conjugate wissen in the present tense."
        },
        "sentence": "Das ___ ich nicht.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-08-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Der Polizist weiß es bestimmt."
      },
      {
        "id": "kapitel-03-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "sentence": "Niemand ___, ob Herr Sorodin heute kommt.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-08-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "sentence": "___ du, warum Anne heute so spät kommt?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-08-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez wissen au présent.",
          "de": "Konjugieren Sie wissen im Präsens.",
          "ar": "صرّف wissen في المضارع.",
          "en": "Conjugate wissen in the present tense."
        },
        "sentence": "Die Kinder ___ heute viel mehr als wir früher.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-08-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez wissen au présent.",
          "de": "Konjugieren Sie wissen im Präsens.",
          "ar": "صرّف wissen في المضارع.",
          "en": "Conjugate wissen in the present tense."
        },
        "sentence": "___ ihr die Antwort?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-08-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Wir weiß es nicht."
      },
      {
        "id": "kapitel-03-ubung-08-association",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez möchten au présent.",
          "de": "Konjugieren Sie möchten im Präsens.",
          "ar": "صرّف möchten في المضارع.",
          "en": "Conjugate möchten in the present tense."
        },
        "sentence": "Was ___ du bestellen? (möchten)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Faire et avoir mal",
      "de": "Tun",
      "ar": "الفعل tun والألم",
      "en": "Doing and hurting"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-09-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez tun au présent.",
          "de": "Konjugieren Sie tun im Präsens.",
          "ar": "صرّف tun في المضارع.",
          "en": "Conjugate tun in the present tense."
        },
        "sentence": "Was ___ denn weh?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez tun au présent.",
          "de": "Konjugieren Sie tun im Präsens.",
          "ar": "صرّف tun في المضارع.",
          "en": "Conjugate tun in the present tense."
        },
        "sentence": "Meine Ohren ___ weh.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Was tust du?"
      },
      {
        "id": "kapitel-03-ubung-09-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "sentence": "Frag nicht, was ich ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "sentence": "___ Sie ganz wenig!",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez tun au présent.",
          "de": "Konjugieren Sie tun im Präsens.",
          "ar": "صرّف tun في المضارع.",
          "en": "Conjugate tun in the present tense."
        },
        "sentence": "Mein Rücken ___ weh.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez tun au présent.",
          "de": "Konjugieren Sie tun im Präsens.",
          "ar": "صرّف tun في المضارع.",
          "en": "Conjugate tun in the present tense."
        },
        "sentence": "Wir ___ unser Bestes.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Was tue ihr heute?"
      },
      {
        "id": "kapitel-03-ubung-09-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "sentence": "Was kann ich ___?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec tun.",
          "de": "Ergänzen Sie tun.",
          "ar": "أكمل باستعمال tun.",
          "en": "Complete with tun."
        },
        "sentence": "Ich will einfach mal nichts ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-09-multi",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez möchten au présent.",
          "de": "Konjugieren Sie möchten im Präsens.",
          "ar": "صرّف möchten في المضارع.",
          "en": "Conjugate möchten in the present tense."
        },
        "sentence": "Wir ___ einen neuen Termin vereinbaren. (möchten)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-03-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Test de maîtrise",
      "de": "Abschlusstest",
      "ar": "اختبار الإتقان",
      "en": "Mastery test"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-03-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez sein au présent.",
          "de": "Konjugieren Sie sein im Präsens.",
          "ar": "صرّف sein في المضارع.",
          "en": "Conjugate sein in the present tense."
        },
        "sentence": "Heute ___ ich krank.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez haben au présent.",
          "de": "Konjugieren Sie haben im Präsens.",
          "ar": "صرّف haben في المضارع.",
          "en": "Conjugate haben in the present tense."
        },
        "sentence": "___ du einen Termin?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Er möchte einen Tee bestellen."
      },
      {
        "id": "kapitel-03-ubung-10-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "sentence": "Wir ___ Musik.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "sentence": "___ ihr die Adresse?",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez tun au présent.",
          "de": "Konjugieren Sie tun im Präsens.",
          "ar": "صرّف tun في المضارع.",
          "en": "Conjugate tun in the present tense."
        },
        "sentence": "Meine Füße ___ weh.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez sein au présent.",
          "de": "Konjugieren Sie sein im Präsens.",
          "ar": "صرّف sein في المضارع.",
          "en": "Conjugate sein in the present tense."
        },
        "sentence": "Ihr ___ sehr nett.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Sie (Plural) habe keine Zeit."
      },
      {
        "id": "kapitel-03-ubung-10-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec wissen.",
          "de": "Ergänzen Sie wissen.",
          "ar": "أكمل باستعمال wissen.",
          "en": "Complete with wissen."
        },
        "sentence": "Ich ___ die Antwort.",
        "blanks": 1
      },
      {
        "id": "kapitel-03-ubung-10-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec mögen.",
          "de": "Ergänzen Sie mögen.",
          "ar": "أكمل باستعمال mögen.",
          "en": "Complete with mögen."
        },
        "sentence": "Du ___ keinen Fisch.",
        "blanks": 1
      }
    ]
  }
]

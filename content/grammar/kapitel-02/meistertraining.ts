import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-02-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Petits dialogues",
      "de": "Kleine Dialoge",
      "ar": "حوارات قصيرة",
      "en": "Short dialogues"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "k02-u1-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Woher komm___ du?",
          "de": "Ergänzen Sie die Endungen. — Woher komm___ du?",
          "ar": "أكمل نهايات الأفعال. — Woher komm___ du?",
          "en": "Complete the endings. — Woher komm___ du?"
        },
        "selection": "single",
        "options": [
          "t",
          "st",
          "e",
          "en"
        ]
      },
      {
        "id": "k02-u1-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Ich komm___ aus Brasilien.",
        "blanks": 1
      },
      {
        "id": "k02-u1-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Er kommt aus Russland."
      },
      {
        "id": "k02-u1-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Wo wohn___ ihr?",
        "blanks": 1
      },
      {
        "id": "k02-u1-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Wir wohn___ ganz in der Nähe.",
        "blanks": 1
      },
      {
        "id": "k02-u1-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Wo arbeit___ du?",
          "de": "Ergänzen Sie die Endungen. — Wo arbeit___ du?",
          "ar": "أكمل نهايات الأفعال. — Wo arbeit___ du?",
          "en": "Complete the endings. — Wo arbeit___ du?"
        },
        "selection": "single",
        "options": [
          "est",
          "t",
          "e",
          "st"
        ]
      },
      {
        "id": "k02-u1-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Ich arbeit___ bei der Post.",
          "de": "Ergänzen Sie die Endungen. — Ich arbeit___ bei der Post.",
          "ar": "أكمل نهايات الأفعال. — Ich arbeit___ bei der Post.",
          "en": "Complete the endings. — Ich arbeit___ bei der Post."
        },
        "selection": "single",
        "options": [
          "st",
          "e",
          "en",
          "t"
        ]
      },
      {
        "id": "k02-u1-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Wie heißt Sie?"
      },
      {
        "id": "k02-u1-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Ich heiß___ Sato.",
        "blanks": 1
      },
      {
        "id": "k02-u1-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Woher komm___ Sie?",
        "blanks": 1
      },
      {
        "id": "k02-u1-q11",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Ich komm___ aus Japan.",
        "blanks": 1
      },
      {
        "id": "k02-u1-q12",
        "position": 12,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Meine Frau komm___ aus den USA.",
          "de": "Ergänzen Sie die Endungen. — Meine Frau komm___ aus den USA.",
          "ar": "أكمل نهايات الأفعال. — Meine Frau komm___ aus den USA.",
          "en": "Complete the endings. — Meine Frau komm___ aus den USA."
        },
        "selection": "single",
        "options": [
          "en",
          "e",
          "t",
          "st"
        ]
      },
      {
        "id": "k02-u1-q13",
        "position": 13,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Wir wohnen jetzt in Berlin."
      }
    ]
  },
  {
    "id": "kapitel-02-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Associer les formes",
      "de": "Was passt zusammen?",
      "ar": "مطابقة الصيغ",
      "en": "Matching forms"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "k02-u2-q01",
        "position": 1,
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
            "label": "Ich (Deutschland)"
          },
          {
            "id": "i1",
            "label": "Du (Hotel)"
          },
          {
            "id": "i2",
            "label": "Er (Frankfurt)"
          },
          {
            "id": "i3",
            "label": "Wir (Italien)"
          },
          {
            "id": "i4",
            "label": "Sie (Frau Schmidt, formell)"
          },
          {
            "id": "i5",
            "label": "Ihr (Berlin)"
          }
        ],
        "options": [
          "arbeitet in Frankfurt.",
          "wohnst im Hotel.",
          "kommen aus Italien.",
          "heißen Schmidt.",
          "wohnt in Berlin.",
          "arbeite in Deutschland."
        ]
      },
      {
        "id": "kapitel-02-ubung-02-association",
        "position": 2,
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
            "label": "ich kommen"
          },
          {
            "id": "i1",
            "label": "du kommen"
          },
          {
            "id": "i2",
            "label": "wir kommen"
          }
        ],
        "options": [
          "komme",
          "kommen",
          "kommst"
        ]
      }
    ]
  },
  {
    "id": "kapitel-02-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Terminaisons en contexte",
      "de": "Ergänzen und kombinieren",
      "ar": "النهايات في السياق",
      "en": "Endings in context"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "k02-u3-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Wie heiß___ du?",
          "de": "Ergänzen Sie die Endungen. — Wie heiß___ du?",
          "ar": "أكمل نهايات الأفعال. — Wie heiß___ du?",
          "en": "Complete the endings. — Wie heiß___ du?"
        },
        "selection": "single",
        "options": [
          "st",
          "t",
          "en",
          "e"
        ]
      },
      {
        "id": "k02-u3-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Komm___ ihr mit ins Kino?",
        "blanks": 1
      },
      {
        "id": "k02-u3-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Frau Tan kommt heute."
      },
      {
        "id": "k02-u3-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Warum antwort___ du nicht?",
        "blanks": 1
      },
      {
        "id": "k02-u3-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Tanz___ du gerne?",
        "blanks": 1
      },
      {
        "id": "k02-u3-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Mein Freund tanz___ leider nicht.",
          "de": "Ergänzen Sie die Endungen. — Mein Freund tanz___ leider nicht.",
          "ar": "أكمل نهايات الأفعال. — Mein Freund tanz___ leider nicht.",
          "en": "Complete the endings. — Mein Freund tanz___ leider nicht."
        },
        "selection": "single",
        "options": [
          "e",
          "t",
          "en",
          "st"
        ]
      },
      {
        "id": "k02-u3-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Ich heiß___ Alexander.",
          "de": "Ergänzen Sie die Endungen. — Ich heiß___ Alexander.",
          "ar": "أكمل نهايات الأفعال. — Ich heiß___ Alexander.",
          "en": "Complete the endings. — Ich heiß___ Alexander."
        },
        "selection": "single",
        "options": [
          "st",
          "en",
          "t",
          "e"
        ]
      },
      {
        "id": "k02-u3-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Ich verstehest dich nicht."
      },
      {
        "id": "k02-u3-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Ich arbeit___ heute bis acht.",
        "blanks": 1
      },
      {
        "id": "k02-u3-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Jana besuch___ ihre Eltern.",
        "blanks": 1
      },
      {
        "id": "k02-u3-q11",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Sie komm___ um 19 Uhr an.",
        "blanks": 1
      },
      {
        "id": "k02-u3-match",
        "position": 12,
        "type": "matching",
        "prompt": {
          "fr": "Associez les dialogues.",
          "de": "Kombinieren Sie die Dialoge.",
          "ar": "صل أجزاء الحوار.",
          "en": "Match the dialogues."
        },
        "items": [
          {
            "id": "i0",
            "label": "Wie heißt du?"
          },
          {
            "id": "i1",
            "label": "Kommt ihr mit ins Kino?"
          },
          {
            "id": "i2",
            "label": "Frau Tan kommt heute."
          },
          {
            "id": "i3",
            "label": "Warum antwortest du nicht?"
          },
          {
            "id": "i4",
            "label": "Tanzt du gerne?"
          }
        ],
        "options": [
          "Ja, aber mein Freund tanzt leider nicht.",
          "Ich verstehe dich nicht.",
          "Ja, sie kommt um 19 Uhr an.",
          "Nein, leider nicht. Ich arbeite heute bis acht.",
          "Ich heiße Alexander."
        ]
      },
      {
        "id": "kapitel-02-ubung-03-multi",
        "position": 13,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "ich kommen → komme",
          "ich kommen → kommst",
          "du kommen → kommen",
          "wir kommen → kommen",
          "du kommen → kommst"
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
    "id": "kapitel-02-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Au cours d’allemand",
      "de": "Im Deutschkurs",
      "ar": "في درس الألمانية",
      "en": "In German class"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "k02-u4-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Maria komm___ aus Spanien.",
          "de": "Ergänzen Sie die Endungen. — Maria komm___ aus Spanien.",
          "ar": "أكمل نهايات الأفعال. — Maria komm___ aus Spanien.",
          "en": "Complete the endings. — Maria komm___ aus Spanien."
        },
        "selection": "single",
        "options": [
          "st",
          "e",
          "en",
          "t"
        ]
      },
      {
        "id": "k02-u4-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Pedro und Angelo komm___ aus Südamerika.",
        "blanks": 1
      },
      {
        "id": "k02-u4-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Maria, Pedro und Angelo lernen zusammen Deutsch."
      },
      {
        "id": "k02-u4-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Pedro schreib___ gerne.",
        "blanks": 1
      },
      {
        "id": "k02-u4-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Maria hör___ gerne CDs.",
        "blanks": 1
      },
      {
        "id": "k02-u4-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Angelo lern___ gerne Grammatik.",
          "de": "Ergänzen Sie die Endungen. — Angelo lern___ gerne Grammatik.",
          "ar": "أكمل نهايات الأفعال. — Angelo lern___ gerne Grammatik.",
          "en": "Complete the endings. — Angelo lern___ gerne Grammatik."
        },
        "selection": "single",
        "options": [
          "st",
          "en",
          "t",
          "e"
        ]
      },
      {
        "id": "k02-u4-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Dann geh___ sie in die Disko.",
          "de": "Ergänzen Sie die Endungen. — Dann geh___ sie in die Disko.",
          "ar": "أكمل نهايات الأفعال. — Dann geh___ sie in die Disko.",
          "en": "Complete the endings. — Dann geh___ sie in die Disko."
        },
        "selection": "single",
        "options": [
          "en",
          "st",
          "e",
          "t"
        ]
      },
      {
        "id": "k02-u4-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Maria tanze."
      },
      {
        "id": "k02-u4-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Angelo und Pedro red___ und trink___ eine Cola.",
        "blanks": 2
      },
      {
        "id": "k02-u4-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Sie tanz___ leider nicht gerne. (Angelo und Pedro)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-02-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Un e-mail",
      "de": "Eine E-Mail",
      "ar": "بريد إلكتروني",
      "en": "An email"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "k02-u5-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Ich komm___ gerne.",
          "de": "Ergänzen Sie die Endungen. — Ich komm___ gerne.",
          "ar": "أكمل نهايات الأفعال. — Ich komm___ gerne.",
          "en": "Complete the endings. — Ich komm___ gerne."
        },
        "selection": "single",
        "options": [
          "st",
          "en",
          "e",
          "t"
        ]
      },
      {
        "id": "k02-u5-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Woher kenn___ du ihn?",
        "blanks": 1
      },
      {
        "id": "k02-u5-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Woher kommt er?"
      },
      {
        "id": "k02-u5-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Arbeit___ er schon oder studier___ er noch?",
        "blanks": 2
      },
      {
        "id": "k02-u5-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Stefan lern___ Deutsch.",
        "blanks": 1
      },
      {
        "id": "k02-u5-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Ich kenn___ ihn jetzt seit vier Wochen.",
          "de": "Ergänzen Sie die Endungen. — Ich kenn___ ihn jetzt seit vier Wochen.",
          "ar": "أكمل نهايات الأفعال. — Ich kenn___ ihn jetzt seit vier Wochen.",
          "en": "Complete the endings. — Ich kenn___ ihn jetzt seit vier Wochen."
        },
        "selection": "single",
        "options": [
          "en",
          "st",
          "t",
          "e"
        ]
      },
      {
        "id": "k02-u5-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Wir mach___ fast alles zusammen.",
          "de": "Ergänzen Sie die Endungen. — Wir mach___ fast alles zusammen.",
          "ar": "أكمل نهايات الأفعال. — Wir mach___ fast alles zusammen.",
          "en": "Complete the endings. — Wir mach___ fast alles zusammen."
        },
        "selection": "single",
        "options": [
          "t",
          "en",
          "e",
          "st"
        ]
      },
      {
        "id": "k02-u5-q08",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Wir tanz___ gerne und geh___ gerne aus.",
        "blanks": 2
      },
      {
        "id": "k02-u5-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Ihr tanz___ doch bestimmt auch gerne.",
        "blanks": 1
      },
      {
        "id": "k02-u5-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Ich kenn___ dich doch.",
        "blanks": 1
      },
      {
        "id": "k02-u5-q11",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Ich freu___ mich schon.",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-05-association",
        "position": 12,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez hören au présent.",
          "de": "Konjugieren Sie hören im Präsens.",
          "ar": "صرّف hören في المضارع.",
          "en": "Conjugate hören in the present tense."
        },
        "sentence": "Die Kinder ___ eine Geschichte. (hören)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-02-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Ma journée de travail",
      "de": "Mein Arbeitstag",
      "ar": "يوم عملي",
      "en": "My working day"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "k02-u6-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Ich komm___ meistens gegen acht Uhr ins Büro.",
          "de": "Ergänzen Sie die Endungen. — Ich komm___ meistens gegen acht Uhr ins Büro.",
          "ar": "أكمل نهايات الأفعال. — Ich komm___ meistens gegen acht Uhr ins Büro.",
          "en": "Complete the endings. — Ich komm___ meistens gegen acht Uhr ins Büro."
        },
        "selection": "single",
        "options": [
          "t",
          "e",
          "st",
          "en"
        ]
      },
      {
        "id": "k02-u6-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Ich schalt___ erst einmal den Computer ein.",
        "blanks": 1
      },
      {
        "id": "k02-u6-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Ich öffn___ meine Mailbox und beantwort___ meine E-Mails.",
        "blanks": 2
      },
      {
        "id": "k02-u6-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Frau Richter komm___ eine halbe Stunde später.",
        "blanks": 1
      },
      {
        "id": "k02-u6-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Sie bring___ erst ihre Kinder in den Kindergarten.",
        "blanks": 1
      },
      {
        "id": "k02-u6-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Wir red___ ein bisschen, telefonier___ mit Kunden und schreib___ E-Mails.",
        "blanks": 3
      },
      {
        "id": "k02-u6-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez les terminaisons. — Mittags geh___ wir zusammen essen.",
          "de": "Ergänzen Sie die Endungen. — Mittags geh___ wir zusammen essen.",
          "ar": "أكمل نهايات الأفعال. — Mittags geh___ wir zusammen essen.",
          "en": "Complete the endings. — Mittags geh___ wir zusammen essen."
        },
        "selection": "single",
        "options": [
          "e",
          "en",
          "st",
          "t"
        ]
      },
      {
        "id": "k02-u6-q08",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Meistens trinkest wir auch noch einen Kaffee zusammen."
      },
      {
        "id": "k02-u6-q09",
        "position": 9,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Das mach___ immer Spaß.",
        "blanks": 1
      },
      {
        "id": "k02-u6-q10",
        "position": 10,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Die Kollegen erzähl___ lustige Geschichten.",
        "blanks": 1
      },
      {
        "id": "k02-u6-q11",
        "position": 11,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Manchmal frag___ ich sie: Arbeit___ ihr eigentlich auch?",
        "blanks": 2
      },
      {
        "id": "kapitel-02-ubung-06-multi",
        "position": 12,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez schreiben au présent.",
          "de": "Konjugieren Sie schreiben im Präsens.",
          "ar": "صرّف schreiben في المضارع.",
          "en": "Conjugate schreiben in the present tense."
        },
        "sentence": "Der Schüler ___ eine Frage. (schreiben)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-02-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Sujets et terminaisons",
      "de": "Subjekt und Endung",
      "ar": "الفاعل والنهاية",
      "en": "Subjects and endings"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-02-ubung-07-rev-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez verpassen au présent.",
          "de": "Konjugieren Sie verpassen im Präsens.",
          "ar": "صرّف verpassen في المضارع.",
          "en": "Conjugate verpassen in the present tense."
        },
        "sentence": "Die Studentin ___ den Bus. (verpassen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-07-rev-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez joggen au présent.",
          "de": "Konjugieren Sie joggen im Präsens.",
          "ar": "صرّف joggen في المضارع.",
          "en": "Conjugate joggen in the present tense."
        },
        "sentence": "Ich ___ jeden Montag im Park. (joggen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-07-rev-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez heißen au présent.",
          "de": "Konjugieren Sie heißen im Präsens.",
          "ar": "صرّف heißen في المضارع.",
          "en": "Conjugate heißen in the present tense."
        },
        "sentence": "Wie ___ die neue Kollegin? (heißen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-07-rev-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez antworten au présent.",
          "de": "Konjugieren Sie antworten im Präsens.",
          "ar": "صرّف antworten في المضارع.",
          "en": "Conjugate antworten in the present tense."
        },
        "sentence": "Ich ___ dir später. (antworten)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-07-rev-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez fragen au présent.",
          "de": "Konjugieren Sie fragen im Präsens.",
          "ar": "صرّف fragen في المضارع.",
          "en": "Conjugate fragen in the present tense."
        },
        "sentence": "Du ___ nach dem Preis. (fragen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-07-rev-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez kommen au présent.",
          "de": "Konjugieren Sie kommen im Präsens.",
          "ar": "صرّف kommen في المضارع.",
          "en": "Conjugate kommen in the present tense."
        },
        "sentence": "Der Bus ___ gleich. (kommen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-07-rev-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez bezahlen au présent.",
          "de": "Konjugieren Sie bezahlen im Präsens.",
          "ar": "صرّف bezahlen في المضارع.",
          "en": "Conjugate bezahlen in the present tense."
        },
        "sentence": "Du ___ die Rechnung online. (bezahlen)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-02-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Dialogues et exceptions",
      "de": "Dialoge und Ausnahmen",
      "ar": "حوارات واستثناءات",
      "en": "Dialogues and exceptions"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-02-ubung-08-rev-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez schneiden au présent.",
          "de": "Konjugieren Sie schneiden im Präsens.",
          "ar": "صرّف schneiden في المضارع.",
          "en": "Conjugate schneiden in the present tense."
        },
        "sentence": "Der Koch ___ das Gemüse. (schneiden)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-08-rev-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez putzen au présent.",
          "de": "Konjugieren Sie putzen im Präsens.",
          "ar": "صرّف putzen في المضارع.",
          "en": "Conjugate putzen in the present tense."
        },
        "sentence": "Wir ___ am Sonntag die Wohnung. (putzen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-08-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Mittags gehen wir zusammen essen."
      },
      {
        "id": "kapitel-02-ubung-08-rev-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez lernen au présent.",
          "de": "Konjugieren Sie lernen im Präsens.",
          "ar": "صرّف lernen في المضارع.",
          "en": "Conjugate lernen in the present tense."
        },
        "sentence": "Ich ___ die Aussprache. (lernen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-08-rev-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les terminaisons.",
          "de": "Ergänzen Sie die Endungen.",
          "ar": "أكمل نهايات الأفعال.",
          "en": "Complete the endings."
        },
        "sentence": "Ich versteh___ dich nicht.",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-08-rev-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez warten au présent.",
          "de": "Konjugieren Sie warten im Präsens.",
          "ar": "صرّف warten في المضارع.",
          "en": "Conjugate warten in the present tense."
        },
        "sentence": "Die Gruppe ___ auf den Lehrer. (warten)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-08-rev-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Wie heiß___ Sie?",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-08-association",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez hören au présent.",
          "de": "Konjugieren Sie hören im Präsens.",
          "ar": "صرّف hören في المضارع.",
          "en": "Conjugate hören in the present tense."
        },
        "sentence": "Ihr ___ gut zu. (hören)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-02-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Formes proches",
      "de": "Ähnliche Formen",
      "ar": "صيغ متشابهة",
      "en": "Similar forms"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-02-ubung-09-rev-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez sammeln au présent.",
          "de": "Konjugieren Sie sammeln im Präsens.",
          "ar": "صرّف sammeln في المضارع.",
          "en": "Conjugate sammeln in the present tense."
        },
        "sentence": "Ihr ___ die Bilder. (sammeln)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-09-rev-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Frau Tan komm___ heute.",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-09-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Meine Frau kommt aus den USA."
      },
      {
        "id": "kapitel-02-ubung-09-rev-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez sitzen au présent.",
          "de": "Konjugieren Sie sitzen im Präsens.",
          "ar": "صرّف sitzen في المضارع.",
          "en": "Conjugate sitzen in the present tense."
        },
        "sentence": "Die Eltern ___ auf dem Balkon. (sitzen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-09-rev-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez telefonieren au présent.",
          "de": "Konjugieren Sie telefonieren im Präsens.",
          "ar": "صرّف telefonieren في المضارع.",
          "en": "Conjugate telefonieren in the present tense."
        },
        "sentence": "Frau Jung, ___ Sie in der Pause? (telefonieren)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-09-rev-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Er komm___ aus Russland.",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-09-rev-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez üben au présent.",
          "de": "Konjugieren Sie üben im Präsens.",
          "ar": "صرّف üben في المضارع.",
          "en": "Conjugate üben in the present tense."
        },
        "sentence": "Der Student ___ jeden Tag. (üben)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-09-multi",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez hören au présent.",
          "de": "Konjugieren Sie hören im Präsens.",
          "ar": "صرّف hören في المضارع.",
          "en": "Conjugate hören in the present tense."
        },
        "sentence": "Du ___ die Musik zu laut. (hören)",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-02-ubung-10",
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
        "id": "kapitel-02-ubung-10-rev-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Écrivez uniquement la terminaison.",
          "de": "Schreiben Sie nur die Endung.",
          "ar": "اكتب النهاية فقط.",
          "en": "Write only the ending."
        },
        "sentence": "Woher komm___ er?",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-10-rev-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez suchen au présent.",
          "de": "Konjugieren Sie suchen im Präsens.",
          "ar": "صرّف suchen في المضارع.",
          "en": "Conjugate suchen in the present tense."
        },
        "sentence": "Wir ___ eine neue Wohnung. (suchen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-10-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Ich arbeite heute bis acht."
      },
      {
        "id": "kapitel-02-ubung-10-rev-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez bestellen au présent.",
          "de": "Konjugieren Sie bestellen im Präsens.",
          "ar": "صرّف bestellen في المضارع.",
          "en": "Conjugate bestellen in the present tense."
        },
        "sentence": "Ihr ___ die Getränke. (bestellen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-10-rev-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez tanzen au présent.",
          "de": "Konjugieren Sie tanzen im Präsens.",
          "ar": "صرّف tanzen في المضارع.",
          "en": "Conjugate tanzen in the present tense."
        },
        "sentence": "Die Nachbarn ___ zusammen. (tanzen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-10-rev-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez packen au présent.",
          "de": "Konjugieren Sie packen im Präsens.",
          "ar": "صرّف packen في المضارع.",
          "en": "Conjugate packen in the present tense."
        },
        "sentence": "Die Verkäuferin ___ die Ware. (packen)",
        "blanks": 1
      },
      {
        "id": "kapitel-02-ubung-10-rev-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Conjuguez arbeiten au présent.",
          "de": "Konjugieren Sie arbeiten im Präsens.",
          "ar": "صرّف arbeiten في المضارع.",
          "en": "Conjugate arbeiten in the present tense."
        },
        "sentence": "Du ___ am Samstag. (arbeiten)",
        "blanks": 1
      }
    ]
  }
]

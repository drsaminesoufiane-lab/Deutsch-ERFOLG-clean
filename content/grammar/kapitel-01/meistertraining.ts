import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-01-meistertraining",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Personnes et groupes",
      "de": "Personen und Gruppen",
      "ar": "الأشخاص والمجموعات",
      "en": "People and groups"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-meistertraining-rev-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Das ist Herr Gupta. ___ kommt aus Indien.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-meistertraining-rev-q02",
        "position": 2,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Das ist Frau Kioka. Sie kommt aus Japan."
      },
      {
        "id": "kapitel-01-meistertraining-rev-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Herr Gupta und Frau Kioka lernen Deutsch. ___ wohnen in Berlin.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-meistertraining-rev-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Anna und ich sind im Kurs. ___ lernen zusammen.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Anna und ich sind im Kurs. ___ lernen zusammen.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Anna und ich sind im Kurs. ___ lernen zusammen.",
          "en": "Complete with the subject personal pronoun. — Anna und ich sind im Kurs. ___ lernen zusammen."
        },
        "selection": "single",
        "options": [
          "Du",
          "Wir",
          "Ich",
          "Ihr"
        ]
      },
      {
        "id": "kapitel-01-meistertraining-rev-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Marc und Dominic, wo wohnt ___?",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Marc und Dominic, wo wohnt ___?",
          "ar": "أكمل بضمير الفاعل الشخصي. — Marc und Dominic, wo wohnt ___?",
          "en": "Complete with the subject personal pronoun. — Marc und Dominic, wo wohnt ___?"
        },
        "selection": "single",
        "options": [
          "Sie",
          "du",
          "ich",
          "ihr"
        ]
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Objets et genre",
      "de": "Sachen und Genus",
      "ar": "الأشياء والجنس النحوي",
      "en": "Objects and gender"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-02-rev-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Der Schrank ist teuer. ___ kommt aus Italien.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-02-rev-q02",
        "position": 2,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Das Regal ist praktisch. Er kostet 49 Euro."
      },
      {
        "id": "kapitel-01-ubung-02-rev-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Die Lampe ist neu. ___ ist modern.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-02-rev-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Das sind vier Stühle. ___ kosten 100 Euro.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Das sind vier Stühle. ___ kosten 100 Euro.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Das sind vier Stühle. ___ kosten 100 Euro.",
          "en": "Complete with the subject personal pronoun. — Das sind vier Stühle. ___ kosten 100 Euro."
        },
        "selection": "single",
        "options": [
          "Sie",
          "Wir",
          "Es",
          "Er"
        ]
      },
      {
        "id": "kapitel-01-ubung-02-rev-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Die Sessel sind bequem. ___ sind günstig.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Die Sessel sind bequem. ___ sind günstig.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Die Sessel sind bequem. ___ sind günstig.",
          "en": "Complete with the subject personal pronoun. — Die Sessel sind bequem. ___ sind günstig."
        },
        "selection": "single",
        "options": [
          "Wir",
          "Es",
          "Er",
          "Sie"
        ]
      },
      {
        "id": "kapitel-01-ubung-02-rev-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Der Tisch ist schön, aber ___ ist klein.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-02-rev-q07",
        "position": 7,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Das Messer liegt hier. Es ist sauber."
      },
      {
        "id": "kapitel-01-ubung-02-association",
        "position": 8,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Der Löffel fehlt. Wo ist ___?",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Tutoiement et vouvoiement",
      "de": "Du, ihr oder Sie?",
      "ar": "المخاطبة الرسمية وغير الرسمية",
      "en": "Informal and formal address"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-03-rev-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Anna, woher kommst ___?",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Anna, woher kommst ___?",
          "ar": "أكمل بضمير الفاعل الشخصي. — Anna, woher kommst ___?",
          "en": "Complete with the subject personal pronoun. — Anna, woher kommst ___?"
        },
        "selection": "single",
        "options": [
          "Sie",
          "du",
          "ihr",
          "ich"
        ]
      },
      {
        "id": "kapitel-01-ubung-03-rev-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Guten Tag, Frau Schmidt. Wie heißen ___?",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Guten Tag, Frau Schmidt. Wie heißen ___?",
          "ar": "أكمل بضمير الفاعل الشخصي. — Guten Tag, Frau Schmidt. Wie heißen ___?",
          "en": "Complete with the subject personal pronoun. — Guten Tag, Frau Schmidt. Wie heißen ___?"
        },
        "selection": "single",
        "options": [
          "Sie",
          "du",
          "ich",
          "ihr"
        ]
      },
      {
        "id": "kapitel-01-ubung-03-rev-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Marc und Dominic, kommt ___ aus Frankfurt?",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-03-rev-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Guten Tag! Du heiße Berger."
      },
      {
        "id": "kapitel-01-ubung-03-multi",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Marie, hilfst ___ mir bitte?",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Dialogues du quotidien",
      "de": "Alltagsdialoge",
      "ar": "حوارات يومية",
      "en": "Everyday dialogues"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-04-rev-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Frau Meier geht einkaufen. ___ kauft Gemüse.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Frau Meier geht einkaufen. ___ kauft Gemüse.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Frau Meier geht einkaufen. ___ kauft Gemüse.",
          "en": "Complete with the subject personal pronoun. — Frau Meier geht einkaufen. ___ kauft Gemüse."
        },
        "selection": "single",
        "options": [
          "Wir",
          "Er",
          "Sie",
          "Es"
        ]
      },
      {
        "id": "kapitel-01-ubung-04-rev-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Peter und Paul haben Ferien. ___ gehen heute nicht zur Schule.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Peter und Paul haben Ferien. ___ gehen heute nicht zur Schule.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Peter und Paul haben Ferien. ___ gehen heute nicht zur Schule.",
          "en": "Complete with the subject personal pronoun. — Peter und Paul haben Ferien. ___ gehen heute nicht zur Schule."
        },
        "selection": "single",
        "options": [
          "Er",
          "Wir",
          "Es",
          "Sie"
        ]
      },
      {
        "id": "kapitel-01-ubung-04-rev-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Frau Meier, wo arbeiten ___?",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-04-rev-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Ich bin Frau Meier. Ich arbeite in einer Bank."
      },
      {
        "id": "kapitel-01-ubung-04-rev-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Marie, kommst ___ bitte?",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Référents et contexte",
      "de": "Bezüge im Kontext",
      "ar": "المرجع في السياق",
      "en": "References in context"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-05-rev-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Elena: Wo ist Marie? Mario: ___ kommt später.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Elena: Wo ist Marie? Mario: ___ kommt später.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Elena: Wo ist Marie? Mario: ___ kommt später.",
          "en": "Complete with the subject personal pronoun. — Elena: Wo ist Marie? Mario: ___ kommt später."
        },
        "selection": "single",
        "options": [
          "Wir",
          "Es",
          "Er",
          "Sie"
        ]
      },
      {
        "id": "kapitel-01-ubung-05-rev-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Mario: Wann kommt Peter? Elena: ___ kommt heute nicht.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Mario: Wann kommt Peter? Elena: ___ kommt heute nicht.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Mario: Wann kommt Peter? Elena: ___ kommt heute nicht.",
          "en": "Complete with the subject personal pronoun. — Mario: Wann kommt Peter? Elena: ___ kommt heute nicht."
        },
        "selection": "single",
        "options": [
          "Er",
          "Sie",
          "Wir",
          "Es"
        ]
      },
      {
        "id": "kapitel-01-ubung-05-rev-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Elena und Mario sprechen: Dann gehen ___ allein ins Café.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-05-rev-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Kellner: Guten Tag, was möchten ich?"
      },
      {
        "id": "kapitel-01-ubung-05-rev-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Das ist die Gabel. ___ ist aus Silber.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-05-association",
        "position": 6,
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
            "label": "der Koffer"
          },
          {
            "id": "i1",
            "label": "die Tasche"
          },
          {
            "id": "i2",
            "label": "das Ticket"
          },
          {
            "id": "i3",
            "label": "du und ich"
          }
        ],
        "options": [
          "wir",
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
      "fr": "Objets en contexte",
      "de": "Sachen im Kontext",
      "ar": "الأشياء في السياق",
      "en": "Objects in context"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-06-rev-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Das Kind heißt Leo. ___ ist fünf Jahre alt.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Das Kind heißt Leo. ___ ist fünf Jahre alt.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Das Kind heißt Leo. ___ ist fünf Jahre alt.",
          "en": "Complete with the subject personal pronoun. — Das Kind heißt Leo. ___ ist fünf Jahre alt."
        },
        "selection": "single",
        "options": [
          "Er",
          "Wir",
          "Es",
          "Sie"
        ]
      },
      {
        "id": "kapitel-01-ubung-06-rev-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Die Lehrerin kommt heute nicht. ___ ist krank.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-06-rev-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Der Lehrer und die Schülerin sprechen. Sie sind im Kurs."
      },
      {
        "id": "kapitel-01-ubung-06-rev-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Meine Schwester und ich wohnen hier. ___ sind Nachbarn.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-06-rev-q05",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Das Buch kostet zehn Euro. ___ ist günstig.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Das Buch kostet zehn Euro. ___ ist günstig.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Das Buch kostet zehn Euro. ___ ist günstig.",
          "en": "Complete with the subject personal pronoun. — Das Buch kostet zehn Euro. ___ ist günstig."
        },
        "selection": "single",
        "options": [
          "Sie",
          "Es",
          "Er",
          "Wir"
        ]
      },
      {
        "id": "kapitel-01-ubung-06-rev-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Die Uhr hängt dort. ___ ist alt.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Die Uhr hängt dort. ___ ist alt.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Die Uhr hängt dort. ___ ist alt.",
          "en": "Complete with the subject personal pronoun. — Die Uhr hängt dort. ___ ist alt."
        },
        "selection": "single",
        "options": [
          "Wir",
          "Es",
          "Sie",
          "Er"
        ]
      },
      {
        "id": "kapitel-01-ubung-06-rev-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Der Schlüssel liegt auf dem Tisch. ___ ist klein.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-06-multi",
        "position": 8,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Die Fenster sind offen. Er sind groß."
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "S’adresser à quelqu’un",
      "de": "Die richtige Anrede",
      "ar": "المخاطبة المناسبة",
      "en": "Addressing people"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-07-rev-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Die Brille ist kaputt. ___ ist sehr alt.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-07-rev-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Das Handy klingelt. ___ liegt in der Tasche.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Das Handy klingelt. ___ liegt in der Tasche.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Das Handy klingelt. ___ liegt in der Tasche.",
          "en": "Complete with the subject personal pronoun. — Das Handy klingelt. ___ liegt in der Tasche."
        },
        "selection": "single",
        "options": [
          "Es",
          "Wir",
          "Er",
          "Sie"
        ]
      },
      {
        "id": "kapitel-01-ubung-07-rev-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Der Bus kommt um acht Uhr. ___ fährt zum Bahnhof.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Der Bus kommt um acht Uhr. ___ fährt zum Bahnhof.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Der Bus kommt um acht Uhr. ___ fährt zum Bahnhof.",
          "en": "Complete with the subject personal pronoun. — Der Bus kommt um acht Uhr. ___ fährt zum Bahnhof."
        },
        "selection": "single",
        "options": [
          "Er",
          "Sie",
          "Es",
          "Wir"
        ]
      },
      {
        "id": "kapitel-01-ubung-07-rev-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Herr Weber, haben ___ einen Termin?",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Comprendre le locuteur",
      "de": "Wer spricht?",
      "ar": "من يتكلم؟",
      "en": "Who is speaking?"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-08-rev-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Lisa, hast du heute Zeit?"
      },
      {
        "id": "kapitel-01-ubung-08-rev-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Tom und Max, seid ___ müde?",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-08-rev-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Frau Roth, sind ___ die neue Lehrerin?",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Frau Roth, sind ___ die neue Lehrerin?",
          "ar": "أكمل بضمير الفاعل الشخصي. — Frau Roth, sind ___ die neue Lehrerin?",
          "en": "Complete with the subject personal pronoun. — Frau Roth, sind ___ die neue Lehrerin?"
        },
        "selection": "single",
        "options": [
          "du",
          "ich",
          "Sie",
          "ihr"
        ]
      },
      {
        "id": "kapitel-01-ubung-08-rev-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Paul: ___ bin heute zu Hause.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Paul: ___ bin heute zu Hause.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Paul: ___ bin heute zu Hause.",
          "en": "Complete with the subject personal pronoun. — Paul: ___ bin heute zu Hause."
        },
        "selection": "single",
        "options": [
          "Ihr",
          "Sie",
          "Du",
          "Ich"
        ]
      },
      {
        "id": "kapitel-01-ubung-08-rev-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Lea: Wo ist dein Bruder? Mia: ___ ist im Büro.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-08-association",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Reconstituez la phrase. Commencez par « Wo ».",
          "de": "Bilden Sie den Satz. Beginnen Sie mit „Wo“.",
          "ar": "رتّب الجملة. ابدأ بـ « Wo ».",
          "en": "Rebuild the sentence. Start with “Wo”."
        },
        "tokens": [
          "wohnst",
          "Wo",
          "du?"
        ]
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Personnes ou choses",
      "de": "Personen oder Sachen",
      "ar": "أشخاص أم أشياء",
      "en": "People or things"
    },
    "description": {
      "fr": "Appliquez les règles dans des phrases allemandes. Vérifiez le contexte et la forme.",
      "de": "Wenden Sie die Regeln in deutschen Sätzen an. Achten Sie auf Kontext und Form.",
      "ar": "طبّق القواعد في جمل ألمانية وانتبه إلى السياق والصيغة.",
      "en": "Apply the rules in German sentences. Pay attention to context and form."
    },
    "questions": [
      {
        "id": "kapitel-01-ubung-09-rev-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Ben: Kommst du mit? Anna: Ja, ___ komme mit.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-09-rev-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Ben und Anna: ___ gehen jetzt los.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Ben und Anna: ___ gehen jetzt los.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Ben und Anna: ___ gehen jetzt los.",
          "en": "Complete with the subject personal pronoun. — Ben und Anna: ___ gehen jetzt los."
        },
        "selection": "single",
        "options": [
          "Ihr",
          "Wir",
          "Du",
          "Ich"
        ]
      },
      {
        "id": "kapitel-01-ubung-09-rev-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Lena und Mia, wann kommt ___ zurück?",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Lena und Mia, wann kommt ___ zurück?",
          "ar": "أكمل بضمير الفاعل الشخصي. — Lena und Mia, wann kommt ___ zurück?",
          "en": "Complete with the subject personal pronoun. — Lena und Mia, wann kommt ___ zurück?"
        },
        "selection": "single",
        "options": [
          "ihr",
          "ich",
          "du",
          "Sie"
        ]
      },
      {
        "id": "kapitel-01-ubung-09-rev-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Der Kaffee ist kalt. ___ steht schon lange hier.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-09-rev-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Die Milch ist frisch. Sie steht im Kühlschrank."
      },
      {
        "id": "kapitel-01-ubung-09-multi",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Das Brot ist noch warm. ___ kommt vom Bäcker.",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-01-ubung-10",
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
        "id": "kapitel-01-ubung-10-rev-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Die Eier sind günstig. ___ kosten zwei Euro.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Die Eier sind günstig. ___ kosten zwei Euro.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Die Eier sind günstig. ___ kosten zwei Euro.",
          "en": "Complete with the subject personal pronoun. — Die Eier sind günstig. ___ kosten zwei Euro."
        },
        "selection": "single",
        "options": [
          "Es",
          "Er",
          "Sie",
          "Wir"
        ]
      },
      {
        "id": "kapitel-01-ubung-10-rev-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Frau Klein und Herr Wolf sind Kollegen. ___ arbeiten zusammen.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Frau Klein und Herr Wolf sind Kollegen. ___ arbeiten zusammen.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Frau Klein und Herr Wolf sind Kollegen. ___ arbeiten zusammen.",
          "en": "Complete with the subject personal pronoun. — Frau Klein und Herr Wolf sind Kollegen. ___ arbeiten zusammen."
        },
        "selection": "single",
        "options": [
          "Sie",
          "Er",
          "Es",
          "Wir"
        ]
      },
      {
        "id": "kapitel-01-ubung-10-rev-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Der Mann mit der Tasche wartet. ___ sucht den Bus.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-10-rev-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase est-elle grammaticalement correcte ?",
          "de": "Ist der Satz grammatisch richtig?",
          "ar": "هل الجملة صحيحة نحوياً؟",
          "en": "Is the sentence grammatically correct?"
        },
        "statement": "Das Mädchen sitzt am Fenster. Er liest ein Buch."
      },
      {
        "id": "kapitel-01-ubung-10-rev-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ.",
          "ar": "أكمل بضمير الفاعل الشخصي.",
          "en": "Complete with the subject personal pronoun."
        },
        "sentence": "Die Frau am Eingang heißt Eva. ___ sucht den Kursraum.",
        "blanks": 1
      },
      {
        "id": "kapitel-01-ubung-10-rev-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec le pronom personnel sujet. — Der Computer funktioniert nicht. ___ ist alt.",
          "de": "Ergänzen Sie das Personalpronomen im Nominativ. — Der Computer funktioniert nicht. ___ ist alt.",
          "ar": "أكمل بضمير الفاعل الشخصي. — Der Computer funktioniert nicht. ___ ist alt.",
          "en": "Complete with the subject personal pronoun. — Der Computer funktioniert nicht. ___ ist alt."
        },
        "selection": "single",
        "options": [
          "Sie",
          "Er",
          "Es",
          "Wir"
        ]
      },
      {
        "id": "kapitel-01-ubung-10-rev-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "selection": "multiple",
        "options": [
          "Der Hund ist klein. Er spielt.",
          "Die Kinder kommen. Es spielen.",
          "Die Katze schläft. Sie ist müde.",
          "Das Auto ist neu. Er ist teuer."
        ]
      }
    ]
  }
]

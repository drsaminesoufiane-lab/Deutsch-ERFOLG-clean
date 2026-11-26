import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-11-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Phrases déclaratives",
      "de": "Sätze",
      "ar": "جمل خبرية",
      "en": "Statements"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-01-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Er heißt Peter Schmidt."
      },
      {
        "id": "kapitel-11-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Wohnen Peter und seine Frau jetzt in Heidelberg.",
          "Peter und seine Frau wohnen jetzt in Heidelberg.",
          "Peter wohnen und seine Frau jetzt in Heidelberg.",
          "Peter und seine Frau jetzt in Heidelberg wohnen."
        ]
      },
      {
        "id": "kapitel-11-ubung-01-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Seine ist Adresse Auerstraße 12.",
          "Seine Adresse Auerstraße 12 ist.",
          "Ist Seine Adresse Auerstraße 12.",
          "Seine Adresse ist Auerstraße 12."
        ]
      },
      {
        "id": "kapitel-11-ubung-01-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Peter ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Peter“.",
          "ar": "رتّب المجموعات بدءاً بـ « Peter ».",
          "en": "Reorder the groups. Start with “Peter”."
        },
        "tokens": [
          "von Beruf",
          "ist",
          "Peter",
          "Ingenieur."
        ]
      },
      {
        "id": "kapitel-11-ubung-01-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Seine Frau ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Seine Frau“.",
          "ar": "رتّب المجموعات بدءاً بـ « Seine Frau ».",
          "en": "Reorder the groups. Start with “Seine Frau”."
        },
        "tokens": [
          "arbeitet",
          "Seine Frau",
          "im Krankenhaus."
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Questions ouvertes",
      "de": "W-Fragen",
      "ar": "أسئلة مفتوحة",
      "en": "W-questions"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-02-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "kommen Woher Luis und Paloma?"
      },
      {
        "id": "kapitel-11-ubung-02-q02",
        "position": 2,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque élément à sa forme correcte.",
          "de": "Ordnen Sie jedem Element die richtige Form zu.",
          "ar": "صل كل عنصر بصيغته الصحيحة.",
          "en": "Match each item to its correct form."
        },
        "items": [
          {
            "id": "kapitel-11-ubung-02-q02-m1",
            "label": "Woher kommen Sie?"
          },
          {
            "id": "kapitel-11-ubung-02-q02-m2",
            "label": "Wo wohnen Sie?"
          },
          {
            "id": "kapitel-11-ubung-02-q02-m3",
            "label": "Wann beginnt der Kurs?"
          }
        ],
        "options": [
          "Herkunft",
          "Zeitpunkt",
          "Wohnort"
        ]
      },
      {
        "id": "kapitel-11-ubung-02-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la question grammaticalement correcte.",
          "de": "Wählen Sie die grammatisch richtige Frage.",
          "ar": "اختر السؤال الصحيح نحوياً.",
          "en": "Choose the grammatically correct question."
        },
        "selection": "single",
        "options": [
          "Wo sie wohnen jetzt?",
          "Wohnen wo sie jetzt?",
          "Wo wohnen sie jetzt?",
          "Wo sie jetzt wohnen?"
        ]
      },
      {
        "id": "kapitel-11-ubung-02-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Was ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Was“.",
          "ar": "رتّب المجموعات بدءاً بـ « Was ».",
          "en": "Reorder the groups. Start with “Was”."
        },
        "tokens": [
          "heute Abend?",
          "sie",
          "machen",
          "Was"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Questions fermées",
      "de": "Ja/Nein-Fragen",
      "ar": "أسئلة نعم أو لا",
      "en": "Yes/no questions"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-03-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Ist das Paloma?"
      },
      {
        "id": "kapitel-11-ubung-03-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la question grammaticalement correcte.",
          "de": "Wählen Sie die grammatisch richtige Frage.",
          "ar": "اختر السؤال الصحيح نحوياً.",
          "en": "Choose the grammatically correct question."
        },
        "selection": "single",
        "options": [
          "Sie kommt aus Peru Kommt?",
          "Kommt sie Kommt aus Peru?",
          "Kommt sie aus Peru?",
          "Sie aus Peru kommt?"
        ]
      },
      {
        "id": "kapitel-11-ubung-03-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la question grammaticalement correcte.",
          "de": "Wählen Sie die grammatisch richtige Frage.",
          "ar": "اختر السؤال الصحيح نحوياً.",
          "en": "Choose the grammatically correct question."
        },
        "selection": "single",
        "options": [
          "Lernt Paloma Lernt Deutsch?",
          "Lernt Paloma Deutsch?",
          "Paloma Deutsch lernt?",
          "Paloma lernt Deutsch Lernt?"
        ]
      },
      {
        "id": "kapitel-11-ubung-03-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Ist ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Ist“.",
          "ar": "رتّب المجموعات بدءاً بـ « Ist ».",
          "en": "Reorder the groups. Start with “Ist”."
        },
        "tokens": [
          "sie",
          "Mechanikerin?",
          "Ist"
        ]
      },
      {
        "id": "kapitel-11-ubung-03-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Heißt ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Heißt“.",
          "ar": "رتّب المجموعات بدءاً بـ « Heißt ».",
          "en": "Reorder the groups. Start with “Heißt”."
        },
        "tokens": [
          "ihr Mann",
          "Heißt",
          "Luis?"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Mot interrogatif ou verbe",
      "de": "Fragewort oder Verb",
      "ar": "أداة استفهام أم فعل",
      "en": "Question word or verb"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-04-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — ___ kommt Paloma? – Aus Peru.",
          "de": "Wählen Sie die richtige Form. — ___ kommt Paloma? – Aus Peru.",
          "ar": "اختر الصيغة الصحيحة. — ___ kommt Paloma? – Aus Peru.",
          "en": "Choose the correct form. — ___ kommt Paloma? – Aus Peru."
        },
        "selection": "single",
        "options": [
          "Ist",
          "Was",
          "Woher",
          "Kommt"
        ]
      },
      {
        "id": "kapitel-11-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "___ Paloma aus Chile? – Nein.",
        "blanks": 1
      },
      {
        "id": "kapitel-11-ubung-04-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — ___ ist sie von Beruf?",
          "de": "Wählen Sie die richtige Form. — ___ ist sie von Beruf?",
          "ar": "اختر الصيغة الصحيحة. — ___ ist sie von Beruf?",
          "en": "Choose the correct form. — ___ ist sie von Beruf?"
        },
        "selection": "single",
        "options": [
          "Wie",
          "Woher",
          "Ist",
          "Was"
        ]
      },
      {
        "id": "kapitel-11-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "___ sie Mechanikerin?",
        "blanks": 1
      },
      {
        "id": "kapitel-11-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "___ ihr Mann Carlos?",
        "blanks": 1
      },
      {
        "id": "kapitel-11-ubung-04-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "___ heißt ihr Mann?",
        "blanks": 1
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Questions",
      "de": "Fragen",
      "ar": "أسئلة",
      "en": "Questions"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-05-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Sind Sie heute müde?"
      },
      {
        "id": "kapitel-11-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la question grammaticalement correcte.",
          "de": "Wählen Sie die grammatisch richtige Frage.",
          "ar": "اختر السؤال الصحيح نحوياً.",
          "en": "Choose the grammatically correct question."
        },
        "selection": "single",
        "options": [
          "Wie lange schlafen Sie immer?",
          "Schlafen wie lange Sie immer?",
          "Wie lange Sie immer schlafen?",
          "Wie lange Sie schlafen immer?"
        ]
      },
      {
        "id": "kapitel-11-ubung-05-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la question grammaticalement correcte.",
          "de": "Wählen Sie die grammatisch richtige Frage.",
          "ar": "اختر السؤال الصحيح نحوياً.",
          "en": "Choose the grammatically correct question."
        },
        "selection": "single",
        "options": [
          "Was Sie am Morgen trinken?",
          "Was trinken Sie am Morgen?",
          "Trinken was Sie am Morgen?",
          "Was Sie trinken am Morgen?"
        ]
      },
      {
        "id": "kapitel-11-ubung-05-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Trinken ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Trinken“.",
          "ar": "رتّب المجموعات بدءاً بـ « Trinken ».",
          "en": "Reorder the groups. Start with “Trinken”."
        },
        "tokens": [
          "Sie",
          "Trinken",
          "am Morgen",
          "Kaffee?"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Impératif",
      "de": "Imperativ",
      "ar": "الأمر",
      "en": "Imperative"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-06-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Kommen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Kommen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Kommen ».",
          "en": "Reorder the groups. Start with “Kommen”."
        },
        "tokens": [
          "Sie!",
          "Kommen"
        ]
      },
      {
        "id": "kapitel-11-ubung-06-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez l’ordre correct pour l’impératif de politesse avec Sie.",
          "de": "Wählen Sie die richtige Wortstellung im höflichen Sie-Imperativ.",
          "ar": "اختر الترتيب الصحيح للأمر المهذب مع Sie.",
          "en": "Choose the correct word order for the formal Sie imperative."
        },
        "selection": "single",
        "options": [
          "Hören Sie die Geschichte!",
          "Sie hören die Geschichte Hören!",
          "Hören Sie Hören die Geschichte!",
          "Sie die Geschichte hören!"
        ]
      },
      {
        "id": "kapitel-11-ubung-06-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez l’ordre correct pour l’impératif de politesse avec Sie.",
          "de": "Wählen Sie die richtige Wortstellung im höflichen Sie-Imperativ.",
          "ar": "اختر الترتيب الصحيح للأمر المهذب مع Sie.",
          "en": "Choose the correct word order for the formal Sie imperative."
        },
        "selection": "single",
        "options": [
          "Sie sagen jetzt nichts Sagen!",
          "Sie jetzt nichts sagen!",
          "Sagen Sie jetzt nichts!",
          "Sagen Sie Sagen jetzt nichts!"
        ]
      },
      {
        "id": "kapitel-11-ubung-06-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Erzählen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Erzählen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Erzählen ».",
          "en": "Reorder the groups. Start with “Erzählen”."
        },
        "tokens": [
          "Erzählen",
          "die Geschichte!",
          "Ihren Freunden",
          "Sie"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Temps et lieu",
      "de": "Zeit und Ort",
      "ar": "الزمان والمكان",
      "en": "Time and place"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-07-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Ich wohne schon drei Jahre in Heidelberg."
      },
      {
        "id": "kapitel-11-ubung-07-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Ich seit zwei Jahren in Frankfurt arbeite.",
          "Ich seit arbeite zwei Jahren in Frankfurt.",
          "Arbeite Ich seit zwei Jahren in Frankfurt.",
          "Ich arbeite seit zwei Jahren in Frankfurt."
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Ich fahre jeden Montag von Heidelberg nach Frankfurt.",
          "Fahre Ich jeden Montag von Heidelberg nach Frankfurt.",
          "Ich jeden Montag von Heidelberg nach Frankfurt fahre.",
          "Ich jeden fahre Montag von Heidelberg nach Frankfurt."
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Ich ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Ich“.",
          "ar": "رتّب المجموعات بدءاً بـ « Ich ».",
          "en": "Reorder the groups. Start with “Ich”."
        },
        "tokens": [
          "wohne",
          "von Montag",
          "meiner Cousine.",
          "bis Freitag",
          "bei",
          "Ich"
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Ich ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Ich“.",
          "ar": "رتّب المجموعات بدءاً بـ « Ich ».",
          "en": "Reorder the groups. Start with “Ich”."
        },
        "tokens": [
          "im Büro.",
          "arbeite",
          "von 9",
          "bis 18",
          "Ich",
          "Uhr"
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Ich esse in der Mittagspause in der Kantine."
      },
      {
        "id": "kapitel-11-ubung-07-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Ich gehe zweimal pro Woche ins Fitnessstudio.",
          "Gehe Ich zweimal pro Woche ins Fitnessstudio.",
          "Ich zweimal pro Woche ins Fitnessstudio gehe.",
          "Ich zweimal gehe pro Woche ins Fitnessstudio."
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q08",
        "position": 8,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Ich freitags fahre um 17 Uhr nach Heidelberg.",
          "Fahre Ich freitags um 17 Uhr nach Heidelberg.",
          "Ich freitags um 17 Uhr nach Heidelberg fahre.",
          "Ich fahre freitags um 17 Uhr nach Heidelberg."
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q09",
        "position": 9,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Ich ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Ich“.",
          "ar": "رتّب المجموعات بدءاً بـ « Ich ».",
          "en": "Reorder the groups. Start with “Ich”."
        },
        "tokens": [
          "bis Montagmorgen",
          "Hause.",
          "Ich",
          "von Freitagabend",
          "bin",
          "zu"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Temps en première position",
      "de": "Zeit zuerst",
      "ar": "الزمن في الموقع الأول",
      "en": "Time first"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-08-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "arbeite Heute ich zu Hause."
      },
      {
        "id": "kapitel-11-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر جميع الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "selection": "multiple",
        "options": [
          "Am Montag Mia arbeitet im Büro.",
          "Am Montag arbeitet Mia im Büro.",
          "Mia am Montag arbeitet im Büro.",
          "Mia arbeitet am Montag im Büro."
        ]
      },
      {
        "id": "kapitel-11-ubung-08-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase affirmative correcte (pas une question).",
          "de": "Wählen Sie den grammatisch richtigen Aussagesatz (keine Frage).",
          "ar": "اختر الجملة الخبرية الصحيحة نحوياً (وليست سؤالاً).",
          "en": "Choose the grammatical declarative sentence (not a question)."
        },
        "selection": "single",
        "options": [
          "Am Abend essen wir Pizza.",
          "Am essen Abend wir Pizza.",
          "Essen am Abend wir Pizza.",
          "Am Abend wir Pizza essen."
        ]
      },
      {
        "id": "kapitel-11-ubung-08-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Seit Mai ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Seit Mai“.",
          "ar": "رتّب المجموعات بدءاً بـ « Seit Mai ».",
          "en": "Reorder the groups. Start with “Seit Mai”."
        },
        "tokens": [
          "Seit Mai",
          "sie",
          "wohnt",
          "hier."
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Position du verbe",
      "de": "Verbposition",
      "ar": "موقع الفعل",
      "en": "Verb position"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-09-q01",
        "position": 1,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — Heute ___ ich Deutsch. (lernen)",
          "de": "Wählen Sie die richtige Form. — Heute ___ ich Deutsch. (lernen)",
          "ar": "اختر الصيغة الصحيحة. — Heute ___ ich Deutsch. (lernen)",
          "en": "Choose the correct form. — Heute ___ ich Deutsch. (lernen)"
        },
        "selection": "single",
        "options": [
          "lernt",
          "lernen",
          "lerne",
          "lernst"
        ]
      },
      {
        "id": "kapitel-11-ubung-09-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec la forme correcte.",
          "de": "Ergänzen Sie die richtige Form.",
          "ar": "أكمل بالصيغة الصحيحة.",
          "en": "Complete with the correct form."
        },
        "sentence": "Am Montag ___ wir im Büro. (arbeiten)",
        "blanks": 1
      },
      {
        "id": "kapitel-11-ubung-09-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la forme correcte. — Morgen ___ sie nach Berlin. (fahren, Singular)",
          "de": "Wählen Sie die richtige Form. — Morgen ___ sie nach Berlin. (fahren, Singular)",
          "ar": "اختر الصيغة الصحيحة. — Morgen ___ sie nach Berlin. (fahren, Singular)",
          "en": "Choose the correct form. — Morgen ___ sie nach Berlin. (fahren, Singular)"
        },
        "selection": "single",
        "options": [
          "fährt",
          "fahre",
          "fährst",
          "fahren"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Test final",
      "de": "Abschlusstest",
      "ar": "اختبار نهائي",
      "en": "Final test"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-10-q01",
        "position": 1,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Sonntag Am schlafen wir lange."
      },
      {
        "id": "kapitel-11-ubung-10-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la question grammaticalement correcte.",
          "de": "Wählen Sie die grammatisch richtige Frage.",
          "ar": "اختر السؤال الصحيح نحوياً.",
          "en": "Choose the grammatically correct question."
        },
        "selection": "single",
        "options": [
          "Wo dein arbeitet Bruder?",
          "Wo dein Bruder arbeitet?",
          "Wo arbeitet dein Bruder?",
          "Arbeitet wo dein Bruder?"
        ]
      },
      {
        "id": "kapitel-11-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la question grammaticalement correcte.",
          "de": "Wählen Sie die grammatisch richtige Frage.",
          "ar": "اختر السؤال الصحيح نحوياً.",
          "en": "Choose the grammatically correct question."
        },
        "selection": "single",
        "options": [
          "Kommen Sie morgen?",
          "Kommen Sie Kommen morgen?",
          "Sie kommen morgen Kommen?",
          "Sie morgen kommen?"
        ]
      },
      {
        "id": "kapitel-11-ubung-10-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Trinken ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Trinken“.",
          "ar": "رتّب المجموعات بدءاً بـ « Trinken ».",
          "en": "Reorder the groups. Start with “Trinken”."
        },
        "tokens": [
          "Sie",
          "bitte",
          "Trinken",
          "Wasser!"
        ]
      }
    ]
  }
]

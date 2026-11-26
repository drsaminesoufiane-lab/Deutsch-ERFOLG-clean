import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-11-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Sätze",
      "de": "Sätze",
      "ar": "Sätze",
      "en": "Sätze"
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
          "fr": "Cette phrase respecte-t-elle l’ordre attendu ?",
          "de": "Ist die Wortstellung richtig?",
          "ar": "هل ترتيب الكلمات صحيح؟",
          "en": "Is the word order correct?"
        },
        "statement": "heißt Er Peter Schmidt ."
      },
      {
        "id": "kapitel-11-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "und Peter seine Frau wohnen jetzt in Heidelberg .",
          "Peter und seine Frau wohnen jetzt in Heidelberg ."
        ]
      },
      {
        "id": "kapitel-11-ubung-01-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Adresse Seine ist Auerstraße 12 .",
          "Seine Adresse ist Auerstraße 12 ."
        ]
      },
      {
        "id": "kapitel-11-ubung-01-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Peter",
          "Ingenieur",
          "ist",
          "von",
          ".",
          "Beruf"
        ]
      },
      {
        "id": "kapitel-11-ubung-01-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Krankenhaus",
          "Frau",
          ".",
          "Seine",
          "arbeitet",
          "im"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "W-Fragen",
      "de": "W-Fragen",
      "ar": "W-Fragen",
      "en": "W-Fragen"
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
          "fr": "Cette phrase respecte-t-elle l’ordre attendu ?",
          "de": "Ist die Wortstellung richtig?",
          "ar": "هل ترتيب الكلمات صحيح؟",
          "en": "Is the word order correct?"
        },
        "statement": "kommen Woher Luis und Paloma ?"
      },
      {
        "id": "kapitel-11-ubung-02-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "sind Was sie von Beruf ?",
          "Was sind sie von Beruf ?"
        ]
      },
      {
        "id": "kapitel-11-ubung-02-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "wohnen Wo sie jetzt ?",
          "Wo wohnen sie jetzt ?"
        ]
      },
      {
        "id": "kapitel-11-ubung-02-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "machen",
          "Was",
          "heute",
          "Abend",
          "?",
          "sie"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Ja/Nein-Fragen",
      "de": "Ja/Nein-Fragen",
      "ar": "Ja/Nein-Fragen",
      "en": "Ja/Nein-Fragen"
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
          "fr": "Cette phrase respecte-t-elle l’ordre attendu ?",
          "de": "Ist die Wortstellung richtig?",
          "ar": "هل ترتيب الكلمات صحيح؟",
          "en": "Is the word order correct?"
        },
        "statement": "das Ist Paloma ?"
      },
      {
        "id": "kapitel-11-ubung-03-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "sie Kommt aus Peru ?",
          "Kommt sie aus Peru ?"
        ]
      },
      {
        "id": "kapitel-11-ubung-03-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Paloma Lernt Deutsch ?",
          "Lernt Paloma Deutsch ?"
        ]
      },
      {
        "id": "kapitel-11-ubung-03-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "sie",
          "Ist",
          "?",
          "Mechanikerin"
        ]
      },
      {
        "id": "kapitel-11-ubung-03-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Heißt",
          "Luis",
          "?",
          "ihr",
          "Mann"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Fragewort oder Verb",
      "de": "Fragewort oder Verb",
      "ar": "Fragewort oder Verb",
      "en": "Fragewort oder Verb"
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
          "fr": "Complétez. — ___ kommt Paloma? – Aus Peru.",
          "de": "Ergänzen Sie. — ___ kommt Paloma? – Aus Peru.",
          "ar": "أكمل. — ___ kommt Paloma? – Aus Peru.",
          "en": "Complete. — ___ kommt Paloma? – Aus Peru."
        },
        "selection": "single",
        "options": [
          "Kommt",
          "Ist",
          "Woher",
          "Was"
        ]
      },
      {
        "id": "kapitel-11-ubung-04-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez. — ___ Paloma aus Chile? – Nein.",
          "de": "Ergänzen Sie. — ___ Paloma aus Chile? – Nein.",
          "ar": "أكمل. — ___ Paloma aus Chile? – Nein.",
          "en": "Complete. — ___ Paloma aus Chile? – Nein."
        },
        "selection": "single",
        "options": [
          "Kommt",
          "Wie",
          "Ist",
          "Heißt"
        ]
      },
      {
        "id": "kapitel-11-ubung-04-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez. — ___ ist sie von Beruf?",
          "de": "Ergänzen Sie. — ___ ist sie von Beruf?",
          "ar": "أكمل. — ___ ist sie von Beruf?",
          "en": "Complete. — ___ ist sie von Beruf?"
        },
        "selection": "single",
        "options": [
          "Was",
          "Wie",
          "Woher",
          "Ist"
        ]
      },
      {
        "id": "kapitel-11-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        },
        "sentence": "___ sie Mechanikerin?",
        "blanks": 1
      },
      {
        "id": "kapitel-11-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez.",
          "de": "Ergänzen Sie.",
          "ar": "أكمل.",
          "en": "Complete."
        },
        "sentence": "___ ihr Mann Carlos?",
        "blanks": 1
      },
      {
        "id": "kapitel-11-ubung-04-q06",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez. — ___ heißt ihr Mann?",
          "de": "Ergänzen Sie. — ___ heißt ihr Mann?",
          "ar": "أكمل. — ___ heißt ihr Mann?",
          "en": "Complete. — ___ heißt ihr Mann?"
        },
        "selection": "single",
        "options": [
          "Was",
          "Kommt",
          "Wie",
          "Ist"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Fragen",
      "de": "Fragen",
      "ar": "Fragen",
      "en": "Fragen"
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
          "fr": "Cette phrase respecte-t-elle l’ordre attendu ?",
          "de": "Ist die Wortstellung richtig?",
          "ar": "هل ترتيب الكلمات صحيح؟",
          "en": "Is the word order correct?"
        },
        "statement": "Sie Sind heute müde ?"
      },
      {
        "id": "kapitel-11-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Wie lange schlafen Sie immer ?",
          "lange Wie schlafen Sie immer ?"
        ]
      },
      {
        "id": "kapitel-11-ubung-05-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Was trinken Sie am Morgen ?",
          "trinken Was Sie am Morgen ?"
        ]
      },
      {
        "id": "kapitel-11-ubung-05-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "?",
          "Kaffee",
          "Morgen",
          "am",
          "Trinken",
          "Sie"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Imperativ",
      "de": "Imperativ",
      "ar": "Imperativ",
      "en": "Imperativ"
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
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Kommen",
          "Sie",
          "!"
        ]
      },
      {
        "id": "kapitel-11-ubung-06-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Sie Hören die Geschichte !",
          "Hören Sie die Geschichte !"
        ]
      },
      {
        "id": "kapitel-11-ubung-06-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Sagen Sie jetzt nichts !",
          "Sie Sagen jetzt nichts !"
        ]
      },
      {
        "id": "kapitel-11-ubung-06-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "die",
          "Geschichte",
          "Sie",
          "Ihren",
          "Erzählen",
          "!",
          "Freunden"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Zeit und Ort",
      "de": "Zeit und Ort",
      "ar": "Zeit und Ort",
      "en": "Zeit und Ort"
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
          "fr": "Cette phrase respecte-t-elle l’ordre attendu ?",
          "de": "Ist die Wortstellung richtig?",
          "ar": "هل ترتيب الكلمات صحيح؟",
          "en": "Is the word order correct?"
        },
        "statement": "wohne Ich schon drei Jahre in Heidelberg ."
      },
      {
        "id": "kapitel-11-ubung-07-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Ich arbeite seit zwei Jahren in Frankfurt .",
          "arbeite Ich seit zwei Jahren in Frankfurt ."
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Ich fahre jeden Montag von Heidelberg nach Frankfurt .",
          "fahre Ich jeden Montag von Heidelberg nach Frankfurt ."
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "wohne",
          ".",
          "Cousine",
          "Ich",
          "Montag",
          "von",
          "Freitag",
          "bis",
          "bei",
          "meiner"
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "Uhr",
          "Ich",
          "arbeite",
          "Büro",
          "9",
          "18",
          ".",
          "von",
          "bis",
          "im"
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q06",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase respecte-t-elle l’ordre attendu ?",
          "de": "Ist die Wortstellung richtig?",
          "ar": "هل ترتيب الكلمات صحيح؟",
          "en": "Is the word order correct?"
        },
        "statement": "Ich esse in der Mittagspause in der Kantine ."
      },
      {
        "id": "kapitel-11-ubung-07-q07",
        "position": 7,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Ich gehe zweimal pro Woche ins Fitnessstudio .",
          "gehe Ich zweimal pro Woche ins Fitnessstudio ."
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q08",
        "position": 8,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Ich fahre freitags um 17 Uhr nach Heidelberg .",
          "fahre Ich freitags um 17 Uhr nach Heidelberg ."
        ]
      },
      {
        "id": "kapitel-11-ubung-07-q09",
        "position": 9,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "bin",
          "Ich",
          "bis",
          "zu",
          "Hause",
          "Freitagabend",
          "Montagmorgen",
          "von",
          "."
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Zeit zuerst",
      "de": "Zeit zuerst",
      "ar": "Zeit zuerst",
      "en": "Zeit zuerst"
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
          "fr": "Cette phrase respecte-t-elle l’ordre attendu ?",
          "de": "Ist die Wortstellung richtig?",
          "ar": "هل ترتيب الكلمات صحيح؟",
          "en": "Is the word order correct?"
        },
        "statement": "arbeite Heute ich zu Hause ."
      },
      {
        "id": "kapitel-11-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Morgen fährt er nach Bonn .",
          "fährt Morgen er nach Bonn ."
        ]
      },
      {
        "id": "kapitel-11-ubung-08-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Abend Am essen wir Pizza .",
          "Am Abend essen wir Pizza ."
        ]
      },
      {
        "id": "kapitel-11-ubung-08-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          ".",
          "Mai",
          "wohnt",
          "sie",
          "hier",
          "Seit"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Verbposition",
      "de": "Verbposition",
      "ar": "Verbposition",
      "en": "Verbposition"
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
          "fr": "Complétez. — Heute ___ ich Deutsch. (lernen)",
          "de": "Ergänzen Sie. — Heute ___ ich Deutsch. (lernen)",
          "ar": "أكمل. — Heute ___ ich Deutsch. (lernen)",
          "en": "Complete. — Heute ___ ich Deutsch. (lernen)"
        },
        "selection": "single",
        "options": [
          "fährt",
          "arbeiten",
          "lerne"
        ]
      },
      {
        "id": "kapitel-11-ubung-09-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez. — Am Montag ___ wir im Büro. (arbeiten)",
          "de": "Ergänzen Sie. — Am Montag ___ wir im Büro. (arbeiten)",
          "ar": "أكمل. — Am Montag ___ wir im Büro. (arbeiten)",
          "en": "Complete. — Am Montag ___ wir im Büro. (arbeiten)"
        },
        "selection": "single",
        "options": [
          "arbeiten",
          "fährt",
          "lerne"
        ]
      },
      {
        "id": "kapitel-11-ubung-09-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez. — Morgen ___ sie nach Berlin. (fahren, Singular)",
          "de": "Ergänzen Sie. — Morgen ___ sie nach Berlin. (fahren, Singular)",
          "ar": "أكمل. — Morgen ___ sie nach Berlin. (fahren, Singular)",
          "en": "Complete. — Morgen ___ sie nach Berlin. (fahren, Singular)"
        },
        "selection": "single",
        "options": [
          "arbeiten",
          "lerne",
          "fährt"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Abschlusstest",
      "de": "Abschlusstest",
      "ar": "Abschlusstest",
      "en": "Abschlusstest"
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
          "fr": "Cette phrase respecte-t-elle l’ordre attendu ?",
          "de": "Ist die Wortstellung richtig?",
          "ar": "هل ترتيب الكلمات صحيح؟",
          "en": "Is the word order correct?"
        },
        "statement": "Sonntag Am schlafen wir lange ."
      },
      {
        "id": "kapitel-11-ubung-10-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "arbeitet Wo dein Bruder ?",
          "Wo arbeitet dein Bruder ?"
        ]
      },
      {
        "id": "kapitel-11-ubung-10-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la phrase attendue.",
          "de": "Wählen Sie den richtigen Satz.",
          "ar": "اختر الجملة الصحيحة.",
          "en": "Choose the correct sentence."
        },
        "selection": "single",
        "options": [
          "Sie Kommen morgen ?",
          "Kommen Sie morgen ?"
        ]
      },
      {
        "id": "kapitel-11-ubung-10-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les mots dans l’ordre.",
          "de": "Ordnen Sie die Wörter.",
          "ar": "رتب الكلمات.",
          "en": "Put the words in order."
        },
        "tokens": [
          "bitte",
          "Wasser",
          "Trinken",
          "!",
          "Sie"
        ]
      }
    ]
  }
]

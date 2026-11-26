import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-28-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "À la pharmacie",
      "de": "In der Apotheke",
      "ar": "في الصيدلية",
      "en": "At the pharmacy"
    },
    "description": {
      "fr": "Emploi des temps",
      "de": "Zeitengebrauch",
      "ar": "استعمال الأزمنة",
      "en": "Use of tenses"
    },
    "questions": [
      {
        "id": "kapitel-28-ubung-11-q01",
        "position": 1,
        "type": "reorder",
        "tokens": [
          "Apotheke.",
          "die",
          "ich",
          "öffne",
          "Morgen"
        ],
        "prompt": {
          "fr": "Reconstituez en commençant par « Morgen » : Demain j’ouvrirai la pharmacie.",
          "de": "Beginnen Sie mit „Morgen“ und bilden Sie den Satz.",
          "ar": "رتب الجملة بدءا بـ Morgen: غدا سأفتح الصيدلية.",
          "en": "Reconstruct starting with Morgen: Tomorrow I will open the pharmacy."
        }
      },
      {
        "id": "kapitel-28-ubung-11-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Präsens",
          "Perfekt",
          "Präteritum"
        ],
        "prompt": {
          "fr": "Identifiez le temps : Gestern habe ich Medikamente bestellt.",
          "de": "Bestimmen Sie die Zeitform: Gestern habe ich Medikamente bestellt.",
          "ar": "حدد الزمن: Gestern habe ich Medikamente bestellt.",
          "en": "Identify the tense: Gestern habe ich Medikamente bestellt."
        }
      },
      {
        "id": "kapitel-28-ubung-11-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Der Kunde ___ Fieber.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez au Präteritum : Le client avait de la fièvre.",
          "de": "Ergänzen Sie im Präteritum.",
          "ar": "أكمل في زمن Präteritum: كان الزبون يعاني من الحمى.",
          "en": "Complete in the Präteritum: The customer had a fever."
        }
      },
      {
        "id": "kapitel-28-ubung-11-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Heute beraten wir die Kunden. — Perfekt",
        "prompt": {
          "fr": "Le temps indiqué est-il correct ?",
          "de": "Stimmt die angegebene Zeitform?",
          "ar": "هل الزمن المحدد صحيح؟",
          "en": "Is the indicated tense correct?"
        }
      }
    ]
  },
  {
    "id": "kapitel-28-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "Voyage en Allemagne",
      "de": "Reise nach Deutschland",
      "ar": "رحلة إلى ألمانيا",
      "en": "Trip to Germany"
    },
    "description": {
      "fr": "Emploi des temps",
      "de": "Zeitengebrauch",
      "ar": "استعمال الأزمنة",
      "en": "Use of tenses"
    },
    "questions": [
      {
        "id": "kapitel-28-ubung-12-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Präsens",
          "Perfekt",
          "Präteritum"
        ],
        "prompt": {
          "fr": "Identifiez le temps : Der Zug ist zu spät angekommen.",
          "de": "Bestimmen Sie die Zeitform: Der Zug ist zu spät angekommen.",
          "ar": "حدد الزمن: Der Zug ist zu spät angekommen.",
          "en": "Identify the tense: Der Zug ist zu spät angekommen."
        }
      },
      {
        "id": "kapitel-28-ubung-12-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Wir ___ am Bahnhof warten.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez au Präteritum : Nous devions attendre à la gare.",
          "de": "Ergänzen Sie im Präteritum.",
          "ar": "أكمل في زمن Präteritum: كان علينا الانتظار في المحطة.",
          "en": "Complete in the Präteritum: We had to wait at the station."
        }
      },
      {
        "id": "kapitel-28-ubung-12-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Nächste Woche fahren wir nach Berlin. — Präsens",
        "prompt": {
          "fr": "Le temps indiqué est-il correct ?",
          "de": "Stimmt die angegebene Zeitform?",
          "ar": "هل الزمن المحدد صحيح؟",
          "en": "Is the indicated tense correct?"
        }
      },
      {
        "id": "kapitel-28-ubung-12-q04",
        "position": 4,
        "type": "matching",
        "items": [
          {
            "id": "1",
            "label": "Ich arbeite."
          },
          {
            "id": "2",
            "label": "Ich war müde."
          },
          {
            "id": "3",
            "label": "Ich habe gearbeitet."
          }
        ],
        "options": [
          "Perfekt",
          "Präsens",
          "Präteritum"
        ],
        "prompt": {
          "fr": "Associez chaque phrase à son temps.",
          "de": "Ordnen Sie die Zeitformen zu.",
          "ar": "طابق كل جملة مع زمنها.",
          "en": "Match each sentence to its tense."
        }
      }
    ]
  },
  {
    "id": "kapitel-28-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Hier, aujourd’hui, demain",
      "de": "Gestern, heute, morgen",
      "ar": "أمس واليوم وغدا",
      "en": "Yesterday, today, tomorrow"
    },
    "description": {
      "fr": "Emploi des temps",
      "de": "Zeitengebrauch",
      "ar": "استعمال الأزمنة",
      "en": "Use of tenses"
    },
    "questions": [
      {
        "id": "kapitel-28-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "sentence": "Heute ___ es.",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez au Präsens : Aujourd’hui il pleut.",
          "de": "Ergänzen Sie im Präsens.",
          "ar": "أكمل في زمن Präsens: اليوم تمطر.",
          "en": "Complete in the Präsens: It is raining today."
        }
      },
      {
        "id": "kapitel-28-ubung-13-q02",
        "position": 2,
        "type": "true_false",
        "statement": "Gestern war das Wetter schön. — Perfekt",
        "prompt": {
          "fr": "Le temps indiqué est-il correct ?",
          "de": "Stimmt die angegebene Zeitform?",
          "ar": "هل الزمن المحدد صحيح؟",
          "en": "Is the indicated tense correct?"
        }
      },
      {
        "id": "kapitel-28-ubung-13-q03",
        "position": 3,
        "type": "matching",
        "items": [
          {
            "id": "1",
            "label": "Ich arbeite."
          },
          {
            "id": "2",
            "label": "Ich war müde."
          },
          {
            "id": "3",
            "label": "Ich habe gearbeitet."
          }
        ],
        "options": [
          "Perfekt",
          "Präsens",
          "Präteritum"
        ],
        "prompt": {
          "fr": "Associez chaque phrase à son temps.",
          "de": "Ordnen Sie die Zeitformen zu.",
          "ar": "طابق كل جملة مع زمنها.",
          "en": "Match each sentence to its tense."
        }
      },
      {
        "id": "kapitel-28-ubung-13-q04",
        "position": 4,
        "type": "qcm",
        "selection": "multiple",
        "options": [
          "Ich habe den Schlüssel verloren.",
          "Ich war nie im Kindergarten.",
          "Ich bin gerne in die Schule gegangen.",
          "Ich habe zwei Geschwister."
        ],
        "prompt": {
          "fr": "Sélectionnez deux phrases au Perfekt",
          "de": "Wählen Sie zwei Sätze im Perfekt",
          "ar": "اختر جملتين في زمن Perfekt",
          "en": "Select two sentences in the Perfekt"
        }
      }
    ]
  }
]

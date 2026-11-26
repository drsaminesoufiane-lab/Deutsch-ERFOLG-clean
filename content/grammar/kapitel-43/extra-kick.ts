import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-43-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "01 – Im Krankenhaus",
      "de": "01 – Im Krankenhaus",
      "ar": "01 – Im Krankenhaus",
      "en": "01 – Im Krankenhaus"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-11-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Anmeldung ist im Erdgeschoss, also ___. Das Labor ist im dritten Stock; fahren Sie ___ ___. (Position ↓ / Ziel ↑)",
        "blanks": 3
      },
      {
        "id": "kapitel-43-ubung-11-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Der Aufzug ist dort. Gehen Sie bitte ___; warten Sie dann ___. (Ziel und Position mit dort)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-11-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Der Röntgenraum ist rechts. Wo wartet der Patient? — Choisissez la forme ou la phrase correcte.",
          "de": "Der Röntgenraum ist rechts. Wo wartet der Patient? — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Der Röntgenraum ist rechts. Wo wartet der Patient? — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Der Röntgenraum ist rechts. Wo wartet der Patient? — Choose the correct form or sentence."
        },
        "options": [
          "nach links",
          "nach rechts",
          "dorthin",
          "rechts"
        ]
      },
      {
        "id": "kapitel-43-ubung-11-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Die Patientin wartet nach unten. (Position)"
      },
      {
        "id": "kapitel-43-ubung-11-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Dort … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Dort … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Dort … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Dort … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "steht",
          "Dort",
          "der Rollstuhl",
          "neben der Tür."
        ]
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "02 – Am Bahnhof",
      "de": "02 – Am Bahnhof",
      "ar": "02 – Am Bahnhof",
      "en": "02 – Am Bahnhof"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-12-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Information ist links, der Ausgang rechts. Gehen Sie zuerst ___ ___ zur Information und danach ___ ___ zum Ausgang.",
        "blanks": 4
      },
      {
        "id": "kapitel-43-ubung-12-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Gleise sind unten. Die Reisenden laufen ___ ___ und warten ___. (↓ Ziel / Position)",
        "blanks": 3
      },
      {
        "id": "kapitel-43-ubung-12-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "Wo steht der Koffer? Vor dem Eingang. Ich stelle ihn ___. (Ziel; Wortfamilie da) — Choisissez la forme ou la phrase correcte.",
          "de": "Wo steht der Koffer? Vor dem Eingang. Ich stelle ihn ___. (Ziel; Wortfamilie da) — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "Wo steht der Koffer? Vor dem Eingang. Ich stelle ihn ___. (Ziel; Wortfamilie da) — اختر الصيغة أو الجملة الصحيحة.",
          "en": "Wo steht der Koffer? Vor dem Eingang. Ich stelle ihn ___. (Ziel; Wortfamilie da) — Choose the correct form or sentence."
        },
        "options": [
          "dort",
          "nach da",
          "dahin",
          "da"
        ]
      },
      {
        "id": "kapitel-43-ubung-12-q04",
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
          "Der Schalter ist dort.",
          "Der Zug fährt nach dort.",
          "Der Zug fährt dorthin.",
          "Der Schalter ist dorthin."
        ]
      },
      {
        "id": "kapitel-43-ubung-12-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Oben … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Oben … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Oben … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Oben … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "das Café",
          "Oben",
          "neben dem Fahrstuhl.",
          "befindet sich"
        ]
      }
    ]
  },
  {
    "id": "kapitel-43-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "03 – Besuch organisieren",
      "de": "03 – Besuch organisieren",
      "ar": "03 – Besuch organisieren",
      "en": "03 – Besuch organisieren"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-43-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Am Donnerstag habe ich frei. ___ können wir uns treffen. (Zeit mit da)",
        "blanks": 1
      },
      {
        "id": "kapitel-43-ubung-13-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Das Restaurant ist hinten im Gebäude. Gehen wir ___ ___? (Ziel: hinten)",
        "blanks": 2
      },
      {
        "id": "kapitel-43-ubung-13-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "prompt": {
          "fr": "A: Im Mai fahre ich weg. B: Schade, da habe ich Urlaub. Was bedeutet da in B? — Choisissez la forme ou la phrase correcte.",
          "de": "A: Im Mai fahre ich weg. B: Schade, da habe ich Urlaub. Was bedeutet da in B? — Wählen Sie die richtige Form oder den richtigen Satz.",
          "ar": "A: Im Mai fahre ich weg. B: Schade, da habe ich Urlaub. Was bedeutet da in B? — اختر الصيغة أو الجملة الصحيحة.",
          "en": "A: Im Mai fahre ich weg. B: Schade, da habe ich Urlaub. Was bedeutet da in B? — Choose the correct form or sentence."
        },
        "options": [
          "in der Wohnung",
          "nach Hause",
          "am Bahnhof",
          "im Mai"
        ]
      },
      {
        "id": "kapitel-43-ubung-13-q04",
        "position": 4,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Dahin bezeichnet in „Ich möchte dahin fahren“ eine Richtung zu einem bekannten Ziel."
      },
      {
        "id": "kapitel-43-ubung-13-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Da … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Da … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Da … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Da … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "leider einen anderen Termin.",
          "ich",
          "Da",
          "habe"
        ]
      }
    ]
  }
]

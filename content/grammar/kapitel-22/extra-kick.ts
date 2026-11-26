import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-22-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Beim Optiker",
      "de": "Beim Optiker",
      "ar": "Beim Optiker",
      "en": "Beim Optiker"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-11-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Beim Optiker: Die Brille ___ der Kundin, aber die beiden Ersatzbrillen ___ ihr nicht. (passen)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-11-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Der Optiker fragt die Kundin. Sie antwortet ___. Er hilft ___. (der Optiker/die Kundin)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-11-q03",
        "position": 3,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Die Farbe gefallen ihr.",
          "Die Brille steht ihr.",
          "Die Farbe gefällt ihr.",
          "Die Brille steht sie."
        ]
      },
      {
        "id": "kapitel-22-ubung-11-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Die neuen Gläser … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Die neuen Gläser … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Die neuen Gläser … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Die neuen Gläser … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "gefallen",
          "der Kundin besonders gut.",
          "Die neuen Gläser"
        ]
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "Im Restaurant",
      "de": "Im Restaurant",
      "ar": "Im Restaurant",
      "en": "Im Restaurant"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-12-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Im Restaurant: Die Suppe ___ uns, aber die Nudeln ___ den Kindern nicht. (schmecken)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-12-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Kellnerin fragt die Gäste. Die Gäste antworten ___. Sie dankt ___. (die Kellnerin/die Gäste)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-12-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Die Rechnung gehört den Gästen am Nebentisch."
      },
      {
        "id": "kapitel-22-ubung-12-q04",
        "position": 4,
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
            "label": "___ Frau gehört die Tasche."
          },
          {
            "id": "1",
            "label": "___ Kindern schmeckt die Pizza."
          },
          {
            "id": "2",
            "label": "___ Mann passt der Termin."
          }
        ],
        "options": [
          "Der",
          "Dem",
          "Den"
        ]
      }
    ]
  },
  {
    "id": "kapitel-22-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Beim Sport",
      "de": "Beim Sport",
      "ar": "Beim Sport",
      "en": "Beim Sport"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-22-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Beim Sport: Der Trainer hilft ___ neuen Mitglied. Das Mitglied dankt ___ Trainer. (bestimmt)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-13-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Knie tun Lara weh. Der Trainer fragt ___ nach den Schmerzen und hilft ___. (Lara)",
        "blanks": 2
      },
      {
        "id": "kapitel-22-ubung-13-q03",
        "position": 3,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Die Übungen gefallen mir.",
          "Die Schuhe passt mir nicht.",
          "Die Übungen gefällt mir.",
          "Die Schuhe passen mir nicht."
        ]
      },
      {
        "id": "kapitel-22-ubung-13-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Frau Roth, ich gratuliere ___ zum Erfolg und besuche ___ am Samstag. (höflich)",
        "blanks": 2
      }
    ]
  }
]

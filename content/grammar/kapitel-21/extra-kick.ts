import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-21-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Reisebüro",
      "de": "Reisebüro",
      "ar": "Reisebüro",
      "en": "Reisebüro"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-21-ubung-11-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Im Reisebüro zeigt die Beraterin ___ Paar ___ Angebote. (bestimmt)",
        "blanks": 2
      },
      {
        "id": "kapitel-21-ubung-11-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Das Paar wählt ein Hotel. Die Beraterin empfiehlt ___ ___ Hotel am Meer. (dem Paar/ein)",
        "blanks": 2
      },
      {
        "id": "kapitel-21-ubung-11-q03",
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
          "Sie schickt sie dem Paar.",
          "Sie schickt sie den Paar.",
          "Sie schickt dem Paar die Bestätigung.",
          "Sie schickt ihnen der Bestätigung."
        ]
      },
      {
        "id": "kapitel-21-ubung-11-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Am Nachmittag … — Commencez par ce bloc et reconstituez la phrase.",
          "de": "Am Nachmittag … — Beginnen Sie mit diesem Block und bilden Sie den Satz.",
          "ar": "Am Nachmittag … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Am Nachmittag … — Start with this chunk and reconstruct the sentence."
        },
        "tokens": [
          "schickt",
          "Am Nachmittag",
          "sie ihnen die Tickets."
        ]
      }
    ]
  },
  {
    "id": "kapitel-21-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "In der Schule",
      "de": "In der Schule",
      "ar": "In der Schule",
      "en": "In der Schule"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-21-ubung-12-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "In der Schule leiht die Lehrerin ___ Schülern ___ Bücher. (bestimmt)",
        "blanks": 2
      },
      {
        "id": "kapitel-21-ubung-12-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Ein Schüler braucht einen Stift. Sein Nachbar leiht ___ ___ . (den Stift/dem Schüler; Akk. vor Dat.)",
        "blanks": 2
      },
      {
        "id": "kapitel-21-ubung-12-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle correcte selon la règle étudiée ?",
          "de": "Ist der Satz nach der behandelten Regel richtig?",
          "ar": "هل الجملة صحيحة وفق القاعدة المدروسة؟",
          "en": "Is the sentence correct according to the rule being studied?"
        },
        "statement": "Die Schülerin zeigt dem Lehrer ihre Lösung."
      },
      {
        "id": "kapitel-21-ubung-12-q04",
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
            "label": "___ Klasse erklärt der Lehrer die Regel."
          },
          {
            "id": "1",
            "label": "___ Kindern gibt er ein Blatt."
          },
          {
            "id": "2",
            "label": "___ Schüler zeigt er den Weg. (Singular)"
          }
        ],
        "options": [
          "Den",
          "Dem",
          "Der"
        ]
      }
    ]
  },
  {
    "id": "kapitel-21-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Im Verein",
      "de": "Im Verein",
      "ar": "Im Verein",
      "en": "Im Verein"
    },
    "description": {
      "fr": "Défi inédit en contexte : résolvez plusieurs difficultés dans une même situation.",
      "de": "Neue Kontext-Challenge: Lösen Sie mehrere Schwierigkeiten in einer Situation.",
      "ar": "تحدّ جديد في السياق: حلّ عدة صعوبات في موقف واحد.",
      "en": "New context challenge: solve several difficulties in one situation."
    },
    "questions": [
      {
        "id": "kapitel-21-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Im Verein überreicht die Vorsitzende ___ Gewinnerin ___ Pokal. (bestimmt)",
        "blanks": 2
      },
      {
        "id": "kapitel-21-ubung-13-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Der Fotograf macht ein Foto. Er schickt ___ ___ später. (das Foto/der Gewinnerin; Akk. vor Dat.)",
        "blanks": 2
      },
      {
        "id": "kapitel-21-ubung-13-q03",
        "position": 3,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez les phrases correctes avec l’ordre neutre des compléments.",
          "de": "Wählen Sie die richtigen Sätze mit neutraler Objektstellung.",
          "ar": "اختر الجمل الصحيحة ذات الترتيب المحايد للمفعولين.",
          "en": "Select the correct sentences with neutral object order."
        },
        "options": [
          "Er zeigt ihr das Bild.",
          "Er zeigt es ihr.",
          "Er zeigt sie das Bild.",
          "Er zeigt ihr es."
        ]
      },
      {
        "id": "kapitel-21-ubung-13-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec les formes indiquées par le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ وفق التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Trainer gratuliert die Vorsitzende. ___ Gewinnerin erhält eine Urkunde. (bestimmt; Trainer = Objekt)",
        "blanks": 2
      }
    ]
  }
]

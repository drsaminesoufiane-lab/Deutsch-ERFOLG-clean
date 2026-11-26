import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-19-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Pharmacie",
      "de": "Apotheke",
      "ar": "الصيدلية",
      "en": "Pharmacy"
    },
    "description": {
      "fr": "Défi en contexte : combinez les règles, en justifiant mentalement chaque choix.",
      "de": "Kontext-Challenge: Kombinieren Sie die Regeln und begründen Sie jede Form für sich.",
      "ar": "تحدٍّ في السياق: اجمع القواعد وبرر كل اختيار ذهنياً.",
      "en": "Context challenge: combine the rules and mentally justify each choice."
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-11-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Apotheker arbeitet heute? Ich spreche mit ___ Apotheker dort. (welcher/dieser)",
        "blanks": 2
      },
      {
        "id": "kapitel-19-ubung-11-q02",
        "position": 2,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Welchen Patienten helfen Sie?",
          "Welchen Patienten beraten Sie?",
          "Welchem Patienten beraten Sie?",
          "Welchem Patienten helfen Sie?"
        ]
      },
      {
        "id": "kapitel-19-ubung-11-q03",
        "position": 3,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque phrase à la forme qui convient.",
          "de": "Ordnen Sie jedem Satz die passende Form zu.",
          "ar": "اربط كل جملة بالصيغة المناسبة.",
          "en": "Match each sentence with the appropriate form."
        },
        "items": [
          {
            "id": "0",
            "label": "___ Rezept ist gültig? (welcher)"
          },
          {
            "id": "1",
            "label": "Mit ___ Ärztin sprechen Sie? (dieser)"
          },
          {
            "id": "2",
            "label": "___ Kollegen rufen Sie an? (welcher; Singular)"
          }
        ],
        "options": [
          "dieser",
          "Welchen",
          "Welches"
        ]
      },
      {
        "id": "kapitel-19-ubung-11-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Packung brauchen Sie? Ich nehme ___ hier. (welcher/dieser)",
        "blanks": 2
      },
      {
        "id": "kapitel-19-ubung-11-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        },
        "statement": "Mit diesen Medikamenten bin ich zufrieden."
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "Voyage",
      "de": "Reise",
      "ar": "السفر",
      "en": "Travel"
    },
    "description": {
      "fr": "Défi en contexte : combinez les règles, en justifiant mentalement chaque choix.",
      "de": "Kontext-Challenge: Kombinieren Sie die Regeln und begründen Sie jede Form für sich.",
      "ar": "تحدٍّ في السياق: اجمع القواعد وبرر كل اختيار ذهنياً.",
      "en": "Context challenge: combine the rules and mentally justify each choice."
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-12-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Zug fährt nach Köln? In ___ Zug möchte ich sitzen. (welcher/dieser)",
        "blanks": 2
      },
      {
        "id": "kapitel-19-ubung-12-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Welches Hotel … — Commencez par ce groupe et reconstituez la phrase.",
          "de": "Welches Hotel … — Beginnen Sie mit dieser Gruppe und bilden Sie den Satz.",
          "ar": "Welches Hotel … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Welches Hotel … — Start with this phrase and reconstruct the sentence."
        },
        "tokens": [
          "wir für morgen?",
          "Welches Hotel",
          "buchen"
        ]
      },
      {
        "id": "kapitel-19-ubung-12-q03",
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
          "Welche Busse fahren zum Bahnhof?",
          "Mit welche Bussen fahren wir?",
          "Mit welchen Bussen fahren wir?",
          "Welchen Busse fahren zum Bahnhof?"
        ]
      },
      {
        "id": "kapitel-19-ubung-12-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Koffer gehört dir? Ich nehme ___ Koffer hier. (welcher/dieser)",
        "blanks": 2
      },
      {
        "id": "kapitel-19-ubung-12-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        },
        "statement": "Mit welchem Ticket darf ich fahren?"
      }
    ]
  },
  {
    "id": "kapitel-19-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Au bureau",
      "de": "Im Büro",
      "ar": "في المكتب",
      "en": "At the office"
    },
    "description": {
      "fr": "Défi en contexte : combinez les règles, en justifiant mentalement chaque choix.",
      "de": "Kontext-Challenge: Kombinieren Sie die Regeln und begründen Sie jede Form für sich.",
      "ar": "تحدٍّ في السياق: اجمع القواعد وبرر كل اختيار ذهنياً.",
      "en": "Context challenge: combine the rules and mentally justify each choice."
    },
    "questions": [
      {
        "id": "kapitel-19-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Kollegin schreibst du? ___ Kollegen rufst du an? (welcher; Singular)",
        "blanks": 2
      },
      {
        "id": "kapitel-19-ubung-13-q02",
        "position": 2,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Diesem Ordner brauche ich.",
          "Diesen Ordner brauche ich.",
          "In diesen Ordner sind die Verträge.",
          "In diesem Ordner sind die Verträge."
        ]
      },
      {
        "id": "kapitel-19-ubung-13-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        },
        "statement": "Welches Dokument fehlt noch?"
      },
      {
        "id": "kapitel-19-ubung-13-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "___ Kollegen erklären wir das Programm. ___ Kollegin besucht uns morgen. (dieser; Plural/Singular)",
        "blanks": 2
      },
      {
        "id": "kapitel-19-ubung-13-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Mit ___ Computer arbeitest du? Ich benutze ___ Computer da. (welcher/dieser)",
        "blanks": 2
      }
    ]
  }
]

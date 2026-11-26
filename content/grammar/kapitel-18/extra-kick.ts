import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-18-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Au cabinet",
      "de": "In der Praxis",
      "ar": "في العيادة",
      "en": "At the clinic"
    },
    "description": {
      "fr": "Défi en contexte : combinez les règles, en justifiant mentalement chaque choix.",
      "de": "Kontext-Challenge: Kombinieren Sie die Regeln und begründen Sie jede Form für sich.",
      "ar": "تحدٍّ في السياق: اجمع القواعد وبرر كل اختيار ذهنياً.",
      "en": "Context challenge: combine the rules and mentally justify each choice."
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-11-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Herr Braun, ich habe ___ Schlüssel gefunden. Er liegt neben ___ Tasche. (beides gehört Herrn Braun)",
        "blanks": 2
      },
      {
        "id": "kapitel-18-ubung-11-q02",
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
          "Frau Lang, ich bringe Ihnen Ihre Tasche.",
          "Frau Lang, hier ist Ihr Rezept.",
          "Frau Lang, hier ist Ihren Rezept.",
          "Frau Lang, ich bringe Ihnen Ihren Tasche."
        ]
      },
      {
        "id": "kapitel-18-ubung-11-q03",
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
            "label": "Das Fahrrad gehört mir: Ich fahre mit ___ Fahrrad."
          },
          {
            "id": "1",
            "label": "Die Tasche gehört dir: Ich sehe ___ Tasche."
          },
          {
            "id": "2",
            "label": "Der Wagen gehört uns: Wir verkaufen ___ Wagen."
          }
        ],
        "options": [
          "unseren",
          "meinem",
          "deine"
        ]
      },
      {
        "id": "kapitel-18-ubung-11-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Ärztin hat zwei Kinder und zwei Jacken für sich. Sie zeigt ___ Kindern ___ neuen Jacken. (Kinder und Jacken der Ärztin)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "Déménagement",
      "de": "Umzug",
      "ar": "الانتقال",
      "en": "Moving house"
    },
    "description": {
      "fr": "Défi en contexte : combinez les règles, en justifiant mentalement chaque choix.",
      "de": "Kontext-Challenge: Kombinieren Sie die Regeln und begründen Sie jede Form für sich.",
      "ar": "تحدٍّ في السياق: اجمع القواعد وبرر كل اختيار ذهنياً.",
      "en": "Context challenge: combine the rules and mentally justify each choice."
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-12-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Kinder, wo ist ___ Ball? Habt ihr mit ___ Ball gespielt? (Ball der Kinder)",
        "blanks": 2
      },
      {
        "id": "kapitel-18-ubung-12-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Euren neuen Tisch … — Commencez par ce groupe et reconstituez la phrase.",
          "de": "Euren neuen Tisch … — Beginnen Sie mit dieser Gruppe und bilden Sie den Satz.",
          "ar": "Euren neuen Tisch … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Euren neuen Tisch … — Start with this phrase and reconstruct the sentence."
        },
        "tokens": [
          "Euren neuen Tisch",
          "wir hierhin.",
          "stellen"
        ]
      },
      {
        "id": "kapitel-18-ubung-12-q03",
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
          "Kinder, nehmt euren Bücher mit!",
          "Kinder, ich helfe eurer Mutter.",
          "Kinder, nehmt eure Bücher mit!",
          "Kinder, ich helfe euren Mutter."
        ]
      },
      {
        "id": "kapitel-18-ubung-12-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Tom und Mia ziehen um. Sie verkaufen ___ Sofa und fahren mit ___ Wagen zum Möbelhaus. (beides gehört Tom und Mia)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Au travail",
      "de": "Bei der Arbeit",
      "ar": "في العمل",
      "en": "At work"
    },
    "description": {
      "fr": "Défi en contexte : combinez les règles, en justifiant mentalement chaque choix.",
      "de": "Kontext-Challenge: Kombinieren Sie die Regeln und begründen Sie jede Form für sich.",
      "ar": "تحدٍّ في السياق: اجمع القواعد وبرر كل اختيار ذهنياً.",
      "en": "Context challenge: combine the rules and mentally justify each choice."
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Lea sucht ___ Bruder (Leas Bruder). Paul telefoniert mit ___ Bruder (Pauls Bruder).",
        "blanks": 2
      },
      {
        "id": "kapitel-18-ubung-13-q02",
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
          "Herr Beck, ich brauche Ihrem Ausweis.",
          "Herr Beck, wir sprechen mit Ihrer Kollegin.",
          "Herr Beck, ich brauche Ihren Ausweis.",
          "Herr Beck, wir sprechen mit Ihre Kollegin."
        ]
      },
      {
        "id": "kapitel-18-ubung-13-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        },
        "statement": "Anna spricht mit ihrem Vater. (Annas Vater)"
      },
      {
        "id": "kapitel-18-ubung-13-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Wir besuchen ___ Eltern und helfen ___ Nachbarn (Plural). (beides: unser)",
        "blanks": 2
      }
    ]
  }
]

import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-20-ubung-11",
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
        "id": "kapitel-20-ubung-11-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Kundin wartet. Ich begrüße ___ und erkläre ___ die Anwendung. (beide: die Kundin)",
        "blanks": 2
      },
      {
        "id": "kapitel-20-ubung-11-q02",
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
          "Der Arzt hilft mir. Ich danke ihn.",
          "Der Arzt wartet. Ich frage ihm.",
          "Der Arzt hilft mir. Ich danke ihm.",
          "Der Arzt wartet. Ich frage ihn."
        ]
      },
      {
        "id": "kapitel-20-ubung-11-q03",
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
            "label": "Ich sehe den Kollegen. → Ich sehe ___."
          },
          {
            "id": "1",
            "label": "Ich helfe der Nachbarin. → Ich helfe ___."
          },
          {
            "id": "2",
            "label": "Ich antworte den Kunden. → Ich antworte ___."
          }
        ],
        "options": [
          "ihnen",
          "ihn",
          "ihr"
        ]
      },
      {
        "id": "kapitel-20-ubung-11-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Frau Stein, ich habe eine Frage an ___. Darf ich ___ das Formular zeigen?",
        "blanks": 2
      },
      {
        "id": "kapitel-20-ubung-11-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        },
        "statement": "Die Kinder kommen. Ich gebe ihnen die Hefte."
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-12",
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
        "id": "kapitel-20-ubung-12-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Paul reist mit Lena. Er fährt nicht ohne ___. Er übernachtet mit ___ in Köln. (Lena)",
        "blanks": 2
      },
      {
        "id": "kapitel-20-ubung-12-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Ohne dich … — Commencez par ce groupe et reconstituez la phrase.",
          "de": "Ohne dich … — Beginnen Sie mit dieser Gruppe und bilden Sie den Satz.",
          "ar": "Ohne dich … — ابدأ بهذه المجموعة ورتب الجملة.",
          "en": "Ohne dich … — Start with this phrase and reconstruct the sentence."
        },
        "tokens": [
          "fahre",
          "ich nicht nach Berlin.",
          "Ohne dich"
        ]
      },
      {
        "id": "kapitel-20-ubung-12-q03",
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
          "Kommt ihr mit uns?",
          "Wir kommen ohne ihr.",
          "Kommt ihr mit wir?",
          "Wir kommen ohne euch."
        ]
      },
      {
        "id": "kapitel-20-ubung-12-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Das Ticket ist für Max. Ich gebe ___ das Ticket. Er zeigt ___ am Eingang. (Max/das Ticket)",
        "blanks": 2
      },
      {
        "id": "kapitel-20-ubung-12-q05",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        },
        "statement": "Wir danken euch für die Hilfe. (ihr)"
      }
    ]
  },
  {
    "id": "kapitel-20-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Dialogue avancé",
      "de": "Fortgeschrittener Dialog",
      "ar": "حوار متقدم",
      "en": "Advanced dialogue"
    },
    "description": {
      "fr": "Défi en contexte : combinez les règles, en justifiant mentalement chaque choix.",
      "de": "Kontext-Challenge: Kombinieren Sie die Regeln und begründen Sie jede Form für sich.",
      "ar": "تحدٍّ في السياق: اجمع القواعد وبرر كل اختيار ذهنياً.",
      "en": "Context challenge: combine the rules and mentally justify each choice."
    },
    "questions": [
      {
        "id": "kapitel-20-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Lehrerin erklärt den Schülern die Aufgabe. Sie erklärt ___ die Aufgabe. Die Schüler verstehen ___ jetzt. (den Schülern/die Aufgabe)",
        "blanks": 2
      },
      {
        "id": "kapitel-20-ubung-13-q02",
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
          "Ich besuche dich morgen.",
          "Ich besuche dir morgen.",
          "Ich antworte dich heute.",
          "Ich antworte dir heute."
        ]
      },
      {
        "id": "kapitel-20-ubung-13-q03",
        "position": 3,
        "type": "true_false",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        },
        "statement": "Die Frau hilft dem Kind. Sie hilft ihm."
      },
      {
        "id": "kapitel-20-ubung-13-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Herr Wolf, darf ich ___ anrufen? Ich möchte ___ den Termin bestätigen.",
        "blanks": 2
      },
      {
        "id": "kapitel-20-ubung-13-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Freunde warten auf uns. Wir fahren zu ___ und nehmen ___ mit. (die Freunde)",
        "blanks": 2
      }
    ]
  }
]

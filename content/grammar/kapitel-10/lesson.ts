import type { LessonDefinition } from '@/lib/grammar/types'
export const lesson: LessonDefinition = {
  "id": "kapitel-10-lesson",
  "title": {
    "fr": "Apprenez-vous l’allemand ?",
    "de": "Lernen Sie Deutsch?",
    "ar": "هل تتعلم الألمانية؟",
    "en": "Are you learning German?"
  },
  "subtitle": {
    "fr": "Questions fermées",
    "de": "Ja/Nein-Fragen",
    "ar": "أسئلة نعم أو لا",
    "en": "Yes/no questions"
  },
  "objective": {
    "fr": "Construire des questions et comprendre les réponses.",
    "de": "Fragen bilden und Antworten verstehen.",
    "ar": "تكوين الأسئلة وفهم الأجوبة.",
    "en": "Form questions and understand answers."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "rule-0",
      "title": {
        "fr": "order",
        "de": "order",
        "ar": "order",
        "en": "order"
      },
      "text": {
        "fr": "Dans une question fermée, le verbe conjugué précède le sujet.",
        "de": "In einer Ja/Nein-Frage steht das finite Verb vor dem Subjekt.",
        "ar": "في سؤال نعم أو لا يأتي الفعل المصرف قبل الفاعل.",
        "en": "In a yes/no question, the finite verb precedes the subject."
      }
    },
    {
      "type": "paragraph",
      "id": "rule-1",
      "title": {
        "fr": "Ja",
        "de": "Ja",
        "ar": "Ja",
        "en": "Ja"
      },
      "text": {
        "fr": "Ja confirme une question affirmative.",
        "de": "Ja bestätigt eine positive Frage.",
        "ar": "نعم تؤكد السؤال المثبت.",
        "en": "Ja confirms a positive question."
      }
    },
    {
      "type": "paragraph",
      "id": "rule-2",
      "title": {
        "fr": "Nein",
        "de": "Nein",
        "ar": "Nein",
        "en": "Nein"
      },
      "text": {
        "fr": "Nein indique une réponse négative, même après une question négative.",
        "de": "Nein steht für eine negative Antwort, auch bei einer negativen Frage.",
        "ar": "Nein تدل على جواب منفي حتى بعد سؤال منفي.",
        "en": "Nein gives a negative answer, including after a negative question."
      }
    },
    {
      "type": "paragraph",
      "id": "rule-3",
      "title": {
        "fr": "Doch",
        "de": "Doch",
        "ar": "Doch",
        "en": "Doch"
      },
      "text": {
        "fr": "Doch contredit la négation de la question.",
        "de": "Doch widerspricht der Verneinung in der Frage.",
        "ar": "Doch تنفي النفي الوارد في السؤال.",
        "en": "Doch contradicts the negation in the question."
      }
    },
    {
      "type": "paragraph",
      "id": "rule-4",
      "title": {
        "fr": "polite",
        "de": "polite",
        "ar": "polite",
        "en": "polite"
      },
      "text": {
        "fr": "Könnten Sie / Würden Sie + complément + infinitif final exprime une demande polie.",
        "de": "Könnten Sie / Würden Sie + Ergänzung + Infinitiv am Ende ist eine höfliche Bitte.",
        "ar": "تستعمل Könnten Sie أو Würden Sie للطلب بأدب ويأتي المصدر في النهاية.",
        "en": "Könnten Sie / Würden Sie + complement + final infinitive expresses a polite request."
      }
    },
    {
      "type": "table",
      "id": "answers",
      "title": {
        "fr": "Réponses",
        "de": "Antworten",
        "ar": "الأجوبة",
        "en": "Answers"
      },
      "headers": [
        {
          "fr": "Question",
          "de": "Frage",
          "ar": "السؤال",
          "en": "Question"
        },
        {
          "fr": "Réponse",
          "de": "Antwort",
          "ar": "الجواب",
          "en": "Answer"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": [
            {
              "fr": "Kommst du?",
              "de": "Kommst du?",
              "ar": "Kommst du?",
              "en": "Kommst du?"
            },
            {
              "fr": "Ja, ich komme.",
              "de": "Ja, ich komme.",
              "ar": "Ja, ich komme.",
              "en": "Ja, ich komme."
            }
          ]
        },
        {
          "id": "1",
          "cells": [
            {
              "fr": "Kommst du?",
              "de": "Kommst du?",
              "ar": "Kommst du?",
              "en": "Kommst du?"
            },
            {
              "fr": "Nein, ich komme nicht.",
              "de": "Nein, ich komme nicht.",
              "ar": "Nein, ich komme nicht.",
              "en": "Nein, ich komme nicht."
            }
          ]
        },
        {
          "id": "2",
          "cells": [
            {
              "fr": "Kommst du nicht?",
              "de": "Kommst du nicht?",
              "ar": "Kommst du nicht?",
              "en": "Kommst du nicht?"
            },
            {
              "fr": "Doch, ich komme.",
              "de": "Doch, ich komme.",
              "ar": "Doch, ich komme.",
              "en": "Doch, ich komme."
            }
          ]
        },
        {
          "id": "3",
          "cells": [
            {
              "fr": "Kommst du nicht?",
              "de": "Kommst du nicht?",
              "ar": "Kommst du nicht?",
              "en": "Kommst du nicht?"
            },
            {
              "fr": "Nein, ich komme nicht.",
              "de": "Nein, ich komme nicht.",
              "ar": "Nein, ich komme nicht.",
              "en": "Nein, ich komme nicht."
            }
          ]
        }
      ]
    }
  ]
}

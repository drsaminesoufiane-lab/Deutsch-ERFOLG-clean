import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-11-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Au cours",
      "de": "Im Kurs",
      "ar": "في الدرس",
      "en": "In class"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-11-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Um acht Uhr ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Um acht Uhr“.",
          "ar": "رتّب المجموعات بدءاً بـ « Um acht Uhr ».",
          "en": "Reorder the groups. Start with “Um acht Uhr”."
        },
        "tokens": [
          "der Sprachkurs.",
          "Um acht Uhr",
          "beginnt"
        ]
      },
      {
        "id": "kapitel-11-ubung-11-q02",
        "position": 2,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "öffnet Wann die Bibliothek?"
      },
      {
        "id": "kapitel-11-ubung-11-q03",
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
          "Sie bitte Ihren Ausweis mit bringen!",
          "Bringen Sie bitte Ihren Ausweis mit!",
          "Bringen Sie Bringen bitte Ihren Ausweis mit!",
          "Sie bringen bitte Ihren Ausweis mit Bringen!"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "En déplacement",
      "de": "Unterwegs",
      "ar": "في الطريق",
      "en": "On the move"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-12-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Am Samstag ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Am Samstag“.",
          "ar": "رتّب المجموعات بدءاً بـ « Am Samstag ».",
          "en": "Reorder the groups. Start with “Am Samstag”."
        },
        "tokens": [
          "der Bus nach Bonn.",
          "fährt",
          "Am Samstag"
        ]
      },
      {
        "id": "kapitel-11-ubung-12-q02",
        "position": 2,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "Wo kauft Mila ihre Fahrkarte?"
      },
      {
        "id": "kapitel-11-ubung-12-q03",
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
          "Der letzte Zug um zehn Uhr fährt?",
          "Fährt der Fährt letzte Zug um zehn Uhr?",
          "Der fährt letzte Zug um zehn Uhr Fährt?",
          "Fährt der letzte Zug um zehn Uhr?"
        ]
      }
    ]
  },
  {
    "id": "kapitel-11-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Défi",
      "de": "Challenge",
      "ar": "تحدٍ",
      "en": "Challenge"
    },
    "description": {
      "fr": "Ordre des mots 1",
      "de": "Wörter im Satz 1",
      "ar": "ترتيب الكلمات 1",
      "en": "Word order 1"
    },
    "questions": [
      {
        "id": "kapitel-11-ubung-13-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Seit einer Woche ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Seit einer Woche“.",
          "ar": "رتّب المجموعات بدءاً بـ « Seit einer Woche ».",
          "en": "Reorder the groups. Start with “Seit einer Woche”."
        },
        "tokens": [
          "Nora in der Stadt.",
          "Seit einer Woche",
          "arbeitet"
        ]
      },
      {
        "id": "kapitel-11-ubung-13-q02",
        "position": 2,
        "type": "true_false",
        "prompt": {
          "fr": "Cette phrase est-elle grammaticalement correcte ?",
          "de": "Ist dieser Satz grammatisch richtig?",
          "ar": "هل هذه الجملة صحيحة نحوياً؟",
          "en": "Is this sentence grammatically correct?"
        },
        "statement": "bespricht Im Büro der Chef den Plan."
      },
      {
        "id": "kapitel-11-ubung-13-q03",
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
          "Wie lange dauert die Pause?",
          "Dauert wie lange die Pause?",
          "Wie lange die dauert Pause?",
          "Wie lange die Pause dauert?"
        ]
      }
    ]
  }
]

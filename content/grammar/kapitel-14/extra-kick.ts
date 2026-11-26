import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const extraKick: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-14-ubung-11",
    "category": "extra_kick",
    "position": 1,
    "title": {
      "fr": "Au café",
      "de": "Im Café",
      "ar": "في المقهى",
      "en": "At the café"
    },
    "description": {
      "fr": "Articles",
      "de": "Artikel: definit, indefinit, kein Artikel",
      "ar": "أدوات الأسماء",
      "en": "Articles"
    },
    "questions": [
      {
        "id": "kapitel-14-ubung-11-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec l’article indéfini.",
          "de": "Ergänzen Sie den unbestimmten Artikel.",
          "ar": "أكمل بأداة النكرة المناسبة.",
          "en": "Complete with the indefinite article."
        },
        "sentence": "Im Café bestellt Lea ___ Tee.",
        "blanks": 1
      },
      {
        "id": "kapitel-14-ubung-11-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec l’article défini. — Der Kellner bringt ___ Tee, den Lea bestellt hat.",
          "de": "Ergänzen Sie den bestimmten Artikel. — Der Kellner bringt ___ Tee, den Lea bestellt hat.",
          "ar": "أكمل بأداة التعريف المناسبة. — Der Kellner bringt ___ Tee, den Lea bestellt hat.",
          "en": "Complete with the definite article. — Der Kellner bringt ___ Tee, den Lea bestellt hat."
        },
        "selection": "single",
        "options": [
          "den",
          "der",
          "die",
          "dem"
        ]
      },
      {
        "id": "kapitel-14-ubung-11-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec l’article indéfini. — Auf dem Tisch steht ___ Tasse.",
          "de": "Ergänzen Sie den unbestimmten Artikel. — Auf dem Tisch steht ___ Tasse.",
          "ar": "أكمل بأداة النكرة المناسبة. — Auf dem Tisch steht ___ Tasse.",
          "en": "Complete with the indefinite article. — Auf dem Tisch steht ___ Tasse."
        },
        "selection": "single",
        "options": [
          "eine",
          "ein",
          "einen",
          "einer"
        ]
      }
    ]
  },
  {
    "id": "kapitel-14-ubung-12",
    "category": "extra_kick",
    "position": 2,
    "title": {
      "fr": "Au magasin",
      "de": "Im Geschäft",
      "ar": "في المتجر",
      "en": "At the shop"
    },
    "description": {
      "fr": "Articles",
      "de": "Artikel: definit, indefinit, kein Artikel",
      "ar": "أدوات الأسماء",
      "en": "Articles"
    },
    "questions": [
      {
        "id": "kapitel-14-ubung-12-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec l’article indéfini.",
          "de": "Ergänzen Sie den unbestimmten Artikel.",
          "ar": "أكمل بأداة النكرة المناسبة.",
          "en": "Complete with the indefinite article."
        },
        "sentence": "Im Kaufhaus probiert Niko ___ Jacke an.",
        "blanks": 1
      },
      {
        "id": "kapitel-14-ubung-12-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec l’article défini. — An der Kasse bezahlt er ___ Jacke.",
          "de": "Ergänzen Sie den bestimmten Artikel. — An der Kasse bezahlt er ___ Jacke.",
          "ar": "أكمل بأداة التعريف المناسبة. — An der Kasse bezahlt er ___ Jacke.",
          "en": "Complete with the definite article. — An der Kasse bezahlt er ___ Jacke."
        },
        "selection": "single",
        "options": [
          "der",
          "das",
          "die",
          "dem"
        ]
      },
      {
        "id": "kapitel-14-ubung-12-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Neben der Kasse ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Neben der Kasse“.",
          "ar": "رتّب المجموعات بدءاً بـ « Neben der Kasse ».",
          "en": "Reorder the groups. Start with “Neben der Kasse”."
        },
        "tokens": [
          "steht",
          "ein Spiegel.",
          "Neben der Kasse"
        ]
      }
    ]
  },
  {
    "id": "kapitel-14-ubung-13",
    "category": "extra_kick",
    "position": 3,
    "title": {
      "fr": "Défi",
      "de": "Challenge",
      "ar": "تحدٍ",
      "en": "Challenge"
    },
    "description": {
      "fr": "Articles",
      "de": "Artikel: definit, indefinit, kein Artikel",
      "ar": "أدوات الأسماء",
      "en": "Articles"
    },
    "questions": [
      {
        "id": "kapitel-14-ubung-13-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez avec l’article indéfini.",
          "de": "Ergänzen Sie den unbestimmten Artikel.",
          "ar": "أكمل بأداة النكرة المناسبة.",
          "en": "Complete with the indefinite article."
        },
        "sentence": "Die Lehrerin gibt ___ neuen Schüler ein Heft.",
        "blanks": 1
      },
      {
        "id": "kapitel-14-ubung-13-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec l’article défini. — Ich fahre mit ___ Bus, der vor dem Haus hält.",
          "de": "Ergänzen Sie den bestimmten Artikel. — Ich fahre mit ___ Bus, der vor dem Haus hält.",
          "ar": "أكمل بأداة التعريف المناسبة. — Ich fahre mit ___ Bus, der vor dem Haus hält.",
          "en": "Complete with the definite article. — Ich fahre mit ___ Bus, der vor dem Haus hält."
        },
        "selection": "single",
        "options": [
          "das",
          "der",
          "dem",
          "die"
        ]
      },
      {
        "id": "kapitel-14-ubung-13-q03",
        "position": 3,
        "type": "qcm",
        "prompt": {
          "fr": "Complétez avec l’article indéfini. — Im Park sehe ich ___ Kind mit einem Ball.",
          "de": "Ergänzen Sie den unbestimmten Artikel. — Im Park sehe ich ___ Kind mit einem Ball.",
          "ar": "أكمل بأداة النكرة المناسبة. — Im Park sehe ich ___ Kind mit einem Ball.",
          "en": "Complete with the indefinite article. — Im Park sehe ich ___ Kind mit einem Ball."
        },
        "selection": "single",
        "options": [
          "einer",
          "eine",
          "einen",
          "ein"
        ]
      }
    ]
  }
]

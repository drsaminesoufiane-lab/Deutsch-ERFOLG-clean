import type { LessonDefinition } from '@/lib/grammar/types'
export const lesson: LessonDefinition = {
  "id": "kapitel-16-lesson",
  "title": {
    "fr": "J’aime mon mari",
    "de": "Ich liebe meinen Mann",
    "ar": "أحب زوجي",
    "en": "I love my husband"
  },
  "subtitle": {
    "fr": "accusatif",
    "de": "Akkusativ",
    "ar": "النصب",
    "en": "accusative"
  },
  "objective": {
    "fr": "accusatif",
    "de": "Akkusativ",
    "ar": "النصب",
    "en": "accusative"
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "N",
      "title": {
        "fr": "nominatif",
        "de": "Nominativ",
        "ar": "الرفع",
        "en": "nominative"
      },
      "text": {
        "fr": "Le sujet est au nominatif, même après le verbe.",
        "de": "Das Subjekt steht im Nominativ, auch nach dem Verb.",
        "ar": "الفاعل في حالة الرفع حتى بعد الفعل.",
        "en": "The subject takes nominative, even after the verb."
      }
    },
    {
      "type": "paragraph",
      "id": "A",
      "title": {
        "fr": "accusatif",
        "de": "Akkusativ",
        "ar": "النصب",
        "en": "accusative"
      },
      "text": {
        "fr": "Le complément direct de ce verbe est à l’accusatif.",
        "de": "Das direkte Objekt dieses Verbs steht im Akkusativ.",
        "ar": "المفعول المباشر لهذا الفعل في حالة النصب.",
        "en": "The direct object of this verb takes the accusative."
      }
    },
    {
      "type": "table",
      "id": "forms",
      "title": {
        "fr": "Déclinaisons",
        "de": "Deklination",
        "ar": "التصريف",
        "en": "Declension"
      },
      "headers": [
        {
          "fr": "Cas / article",
          "de": "Kasus / Artikel",
          "ar": "الحالة / الأداة",
          "en": "Case / article"
        },
        {
          "fr": "masculin",
          "de": "maskulin",
          "ar": "مذكر",
          "en": "masculine"
        },
        {
          "fr": "neutre",
          "de": "neutral",
          "ar": "محايد",
          "en": "neuter"
        },
        {
          "fr": "féminin",
          "de": "feminin",
          "ar": "مؤنث",
          "en": "feminine"
        },
        {
          "fr": "pluriel",
          "de": "Plural",
          "ar": "جمع",
          "en": "plural"
        }
      ],
      "rows": [
        {
          "id": "N0",
          "cells": [
            {
              "fr": "nominatif – défini",
              "de": "Nominativ – definit",
              "ar": "الرفع – معرف",
              "en": "nominative – definite"
            },
            {
              "fr": "der",
              "de": "der",
              "ar": "der",
              "en": "der"
            },
            {
              "fr": "das",
              "de": "das",
              "ar": "das",
              "en": "das"
            },
            {
              "fr": "die",
              "de": "die",
              "ar": "die",
              "en": "die"
            },
            {
              "fr": "die",
              "de": "die",
              "ar": "die",
              "en": "die"
            }
          ]
        },
        {
          "id": "N1",
          "cells": [
            {
              "fr": "nominatif – indéfini",
              "de": "Nominativ – indefinit",
              "ar": "الرفع – نكرة",
              "en": "nominative – indefinite"
            },
            {
              "fr": "ein",
              "de": "ein",
              "ar": "ein",
              "en": "ein"
            },
            {
              "fr": "ein",
              "de": "ein",
              "ar": "ein",
              "en": "ein"
            },
            {
              "fr": "eine",
              "de": "eine",
              "ar": "eine",
              "en": "eine"
            },
            {
              "fr": "∅",
              "de": "∅",
              "ar": "∅",
              "en": "∅"
            }
          ]
        },
        {
          "id": "N2",
          "cells": [
            {
              "fr": "nominatif – négatif",
              "de": "Nominativ – Negativartikel",
              "ar": "الرفع – نفي",
              "en": "nominative – negative"
            },
            {
              "fr": "kein",
              "de": "kein",
              "ar": "kein",
              "en": "kein"
            },
            {
              "fr": "kein",
              "de": "kein",
              "ar": "kein",
              "en": "kein"
            },
            {
              "fr": "keine",
              "de": "keine",
              "ar": "keine",
              "en": "keine"
            },
            {
              "fr": "keine",
              "de": "keine",
              "ar": "keine",
              "en": "keine"
            }
          ]
        },
        {
          "id": "N3",
          "cells": [
            {
              "fr": "nominatif – possessif mein",
              "de": "Nominativ – Possessivartikel mein",
              "ar": "الرفع – ملكية mein",
              "en": "nominative – possessive mein"
            },
            {
              "fr": "mein",
              "de": "mein",
              "ar": "mein",
              "en": "mein"
            },
            {
              "fr": "mein",
              "de": "mein",
              "ar": "mein",
              "en": "mein"
            },
            {
              "fr": "meine",
              "de": "meine",
              "ar": "meine",
              "en": "meine"
            },
            {
              "fr": "meine",
              "de": "meine",
              "ar": "meine",
              "en": "meine"
            }
          ]
        },
        {
          "id": "A0",
          "cells": [
            {
              "fr": "accusatif – défini",
              "de": "Akkusativ – definit",
              "ar": "النصب – معرف",
              "en": "accusative – definite"
            },
            {
              "fr": "den",
              "de": "den",
              "ar": "den",
              "en": "den"
            },
            {
              "fr": "das",
              "de": "das",
              "ar": "das",
              "en": "das"
            },
            {
              "fr": "die",
              "de": "die",
              "ar": "die",
              "en": "die"
            },
            {
              "fr": "die",
              "de": "die",
              "ar": "die",
              "en": "die"
            }
          ]
        },
        {
          "id": "A1",
          "cells": [
            {
              "fr": "accusatif – indéfini",
              "de": "Akkusativ – indefinit",
              "ar": "النصب – نكرة",
              "en": "accusative – indefinite"
            },
            {
              "fr": "einen",
              "de": "einen",
              "ar": "einen",
              "en": "einen"
            },
            {
              "fr": "ein",
              "de": "ein",
              "ar": "ein",
              "en": "ein"
            },
            {
              "fr": "eine",
              "de": "eine",
              "ar": "eine",
              "en": "eine"
            },
            {
              "fr": "∅",
              "de": "∅",
              "ar": "∅",
              "en": "∅"
            }
          ]
        },
        {
          "id": "A2",
          "cells": [
            {
              "fr": "accusatif – négatif",
              "de": "Akkusativ – Negativartikel",
              "ar": "النصب – نفي",
              "en": "accusative – negative"
            },
            {
              "fr": "keinen",
              "de": "keinen",
              "ar": "keinen",
              "en": "keinen"
            },
            {
              "fr": "kein",
              "de": "kein",
              "ar": "kein",
              "en": "kein"
            },
            {
              "fr": "keine",
              "de": "keine",
              "ar": "keine",
              "en": "keine"
            },
            {
              "fr": "keine",
              "de": "keine",
              "ar": "keine",
              "en": "keine"
            }
          ]
        },
        {
          "id": "A3",
          "cells": [
            {
              "fr": "accusatif – possessif mein",
              "de": "Akkusativ – Possessivartikel mein",
              "ar": "النصب – ملكية mein",
              "en": "accusative – possessive mein"
            },
            {
              "fr": "meinen",
              "de": "meinen",
              "ar": "meinen",
              "en": "meinen"
            },
            {
              "fr": "mein",
              "de": "mein",
              "ar": "mein",
              "en": "mein"
            },
            {
              "fr": "meine",
              "de": "meine",
              "ar": "meine",
              "en": "meine"
            },
            {
              "fr": "meine",
              "de": "meine",
              "ar": "meine",
              "en": "meine"
            }
          ]
        }
      ]
    }
  ]
}

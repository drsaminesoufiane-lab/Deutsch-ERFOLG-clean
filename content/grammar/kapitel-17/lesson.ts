import type { LessonDefinition } from '@/lib/grammar/types'
export const lesson: LessonDefinition = {
  "id": "kapitel-17-lesson",
  "title": {
    "fr": "Je vais en voiture",
    "de": "Ich fahre mit dem Auto",
    "ar": "أذهب بالسيارة",
    "en": "I travel by car"
  },
  "subtitle": {
    "fr": "datif",
    "de": "Dativ",
    "ar": "الجر",
    "en": "dative"
  },
  "objective": {
    "fr": "datif",
    "de": "Dativ",
    "ar": "الجر",
    "en": "dative"
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
      "type": "paragraph",
      "id": "D",
      "title": {
        "fr": "datif",
        "de": "Dativ",
        "ar": "الجر",
        "en": "dative"
      },
      "text": {
        "fr": "La préposition ou le verbe impose le datif au complément indiqué.",
        "de": "Die Präposition oder das Verb verlangt hier den Dativ.",
        "ar": "حرف الجر أو الفعل يفرض حالة الجر هنا.",
        "en": "The preposition or verb requires dative here."
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
        },
        {
          "id": "D0",
          "cells": [
            {
              "fr": "datif – défini",
              "de": "Dativ – definit",
              "ar": "الجر – معرف",
              "en": "dative – definite"
            },
            {
              "fr": "dem",
              "de": "dem",
              "ar": "dem",
              "en": "dem"
            },
            {
              "fr": "dem",
              "de": "dem",
              "ar": "dem",
              "en": "dem"
            },
            {
              "fr": "der",
              "de": "der",
              "ar": "der",
              "en": "der"
            },
            {
              "fr": "den",
              "de": "den",
              "ar": "den",
              "en": "den"
            }
          ]
        },
        {
          "id": "D1",
          "cells": [
            {
              "fr": "datif – indéfini",
              "de": "Dativ – indefinit",
              "ar": "الجر – نكرة",
              "en": "dative – indefinite"
            },
            {
              "fr": "einem",
              "de": "einem",
              "ar": "einem",
              "en": "einem"
            },
            {
              "fr": "einem",
              "de": "einem",
              "ar": "einem",
              "en": "einem"
            },
            {
              "fr": "einer",
              "de": "einer",
              "ar": "einer",
              "en": "einer"
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
          "id": "D2",
          "cells": [
            {
              "fr": "datif – négatif",
              "de": "Dativ – Negativartikel",
              "ar": "الجر – نفي",
              "en": "dative – negative"
            },
            {
              "fr": "keinem",
              "de": "keinem",
              "ar": "keinem",
              "en": "keinem"
            },
            {
              "fr": "keinem",
              "de": "keinem",
              "ar": "keinem",
              "en": "keinem"
            },
            {
              "fr": "keiner",
              "de": "keiner",
              "ar": "keiner",
              "en": "keiner"
            },
            {
              "fr": "keinen",
              "de": "keinen",
              "ar": "keinen",
              "en": "keinen"
            }
          ]
        },
        {
          "id": "D3",
          "cells": [
            {
              "fr": "datif – possessif mein",
              "de": "Dativ – Possessivartikel mein",
              "ar": "الجر – ملكية mein",
              "en": "dative – possessive mein"
            },
            {
              "fr": "meinem",
              "de": "meinem",
              "ar": "meinem",
              "en": "meinem"
            },
            {
              "fr": "meinem",
              "de": "meinem",
              "ar": "meinem",
              "en": "meinem"
            },
            {
              "fr": "meiner",
              "de": "meiner",
              "ar": "meiner",
              "en": "meiner"
            },
            {
              "fr": "meinen",
              "de": "meinen",
              "ar": "meinen",
              "en": "meinen"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "plural",
      "text": {
        "fr": "Au datif pluriel, ajoutez -n au nom si possible, sauf s’il finit déjà par -n ou -s.",
        "de": "Im Dativ Plural erhält das Nomen ein -n, sofern es nicht bereits auf -n oder -s endet.",
        "ar": "يضاف n إلى جمع الداتيف إذا لم ينته أصلا بـ n أو s.",
        "en": "Dative plural nouns add -n where possible unless already ending in -n or -s."
      }
    }
  ]
}

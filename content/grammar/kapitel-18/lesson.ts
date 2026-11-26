import type { LessonDefinition } from '@/lib/grammar/types'
export const lesson: LessonDefinition = {
  "id": "kapitel-18-lesson",
  "title": {
    "fr": "Mon, ton, notre",
    "de": "Mein, dein, unser",
    "ar": "ملكي، ملكك، ملكنا",
    "en": "My, your, our"
  },
  "subtitle": {
    "fr": "Articles possessifs",
    "de": "Possessivartikel",
    "ar": "أدوات الملكية",
    "en": "Possessive determiners"
  },
  "objective": {
    "fr": "Le propriétaire détermine le radical ; le genre, le nombre et le cas du nom possédé déterminent la terminaison.",
    "de": "Der Besitzer bestimmt den Stamm; Genus, Numerus und Kasus des Nomens bestimmen die Endung.",
    "ar": "يحدد المالك أصل الأداة ويحدد جنس الاسم وعدده وحالته النهاية.",
    "en": "The owner determines the stem; the possessed noun’s gender, number and case determine the ending."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "rule",
      "text": {
        "fr": "Le propriétaire détermine le radical ; le genre, le nombre et le cas du nom possédé déterminent la terminaison.",
        "de": "Der Besitzer bestimmt den Stamm; Genus, Numerus und Kasus des Nomens bestimmen die Endung.",
        "ar": "يحدد المالك أصل الأداة ويحدد جنس الاسم وعدده وحالته النهاية.",
        "en": "The owner determines the stem; the possessed noun’s gender, number and case determine the ending."
      }
    },
    {
      "type": "paragraph",
      "id": "owners",
      "text": {
        "fr": "ich → mein, du → dein, er/es → sein, sie → ihr, wir → unser, ihr → euer, sie → ihr, Sie → Ihr.",
        "de": "ich → mein, du → dein, er/es → sein, sie → ihr, wir → unser, ihr → euer, sie → ihr, Sie → Ihr.",
        "ar": "ich → mein، du → dein، er/es → sein، sie → ihr، wir → unser، ihr → euer، sie → ihr، Sie → Ihr.",
        "en": "ich → mein, du → dein, er/es → sein, sie → ihr, wir → unser, ihr → euer, sie → ihr, Sie → Ihr."
      }
    },
    {
      "type": "table",
      "id": "table",
      "title": {
        "fr": "Articles possessifs",
        "de": "Possessivartikel",
        "ar": "أدوات الملكية",
        "en": "Possessive determiners"
      },
      "headers": [
        {
          "fr": "Kasus",
          "de": "Kasus",
          "ar": "Kasus",
          "en": "Kasus"
        },
        {
          "fr": "Maskulin",
          "de": "Maskulin",
          "ar": "Maskulin",
          "en": "Maskulin"
        },
        {
          "fr": "Neutral",
          "de": "Neutral",
          "ar": "Neutral",
          "en": "Neutral"
        },
        {
          "fr": "Feminin",
          "de": "Feminin",
          "ar": "Feminin",
          "en": "Feminin"
        },
        {
          "fr": "Plural",
          "de": "Plural",
          "ar": "Plural",
          "en": "Plural"
        }
      ],
      "rows": [
        {
          "id": "Nmein",
          "cells": [
            {
              "fr": "N",
              "de": "N",
              "ar": "N",
              "en": "N"
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
          "id": "Amein",
          "cells": [
            {
              "fr": "A",
              "de": "A",
              "ar": "A",
              "en": "A"
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
          "id": "Dmein",
          "cells": [
            {
              "fr": "D",
              "de": "D",
              "ar": "D",
              "en": "D"
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
        },
        {
          "id": "Neuer",
          "cells": [
            {
              "fr": "N",
              "de": "N",
              "ar": "N",
              "en": "N"
            },
            {
              "fr": "euer",
              "de": "euer",
              "ar": "euer",
              "en": "euer"
            },
            {
              "fr": "euer",
              "de": "euer",
              "ar": "euer",
              "en": "euer"
            },
            {
              "fr": "eure",
              "de": "eure",
              "ar": "eure",
              "en": "eure"
            },
            {
              "fr": "eure",
              "de": "eure",
              "ar": "eure",
              "en": "eure"
            }
          ]
        },
        {
          "id": "Aeuer",
          "cells": [
            {
              "fr": "A",
              "de": "A",
              "ar": "A",
              "en": "A"
            },
            {
              "fr": "euren",
              "de": "euren",
              "ar": "euren",
              "en": "euren"
            },
            {
              "fr": "euer",
              "de": "euer",
              "ar": "euer",
              "en": "euer"
            },
            {
              "fr": "eure",
              "de": "eure",
              "ar": "eure",
              "en": "eure"
            },
            {
              "fr": "eure",
              "de": "eure",
              "ar": "eure",
              "en": "eure"
            }
          ]
        },
        {
          "id": "Deuer",
          "cells": [
            {
              "fr": "D",
              "de": "D",
              "ar": "D",
              "en": "D"
            },
            {
              "fr": "eurem",
              "de": "eurem",
              "ar": "eurem",
              "en": "eurem"
            },
            {
              "fr": "eurem",
              "de": "eurem",
              "ar": "eurem",
              "en": "eurem"
            },
            {
              "fr": "eurer",
              "de": "eurer",
              "ar": "eurer",
              "en": "eurer"
            },
            {
              "fr": "euren",
              "de": "euren",
              "ar": "euren",
              "en": "euren"
            }
          ]
        },
        {
          "id": "NIhr",
          "cells": [
            {
              "fr": "N",
              "de": "N",
              "ar": "N",
              "en": "N"
            },
            {
              "fr": "Ihr",
              "de": "Ihr",
              "ar": "Ihr",
              "en": "Ihr"
            },
            {
              "fr": "Ihr",
              "de": "Ihr",
              "ar": "Ihr",
              "en": "Ihr"
            },
            {
              "fr": "Ihre",
              "de": "Ihre",
              "ar": "Ihre",
              "en": "Ihre"
            },
            {
              "fr": "Ihre",
              "de": "Ihre",
              "ar": "Ihre",
              "en": "Ihre"
            }
          ]
        },
        {
          "id": "AIhr",
          "cells": [
            {
              "fr": "A",
              "de": "A",
              "ar": "A",
              "en": "A"
            },
            {
              "fr": "Ihren",
              "de": "Ihren",
              "ar": "Ihren",
              "en": "Ihren"
            },
            {
              "fr": "Ihr",
              "de": "Ihr",
              "ar": "Ihr",
              "en": "Ihr"
            },
            {
              "fr": "Ihre",
              "de": "Ihre",
              "ar": "Ihre",
              "en": "Ihre"
            },
            {
              "fr": "Ihre",
              "de": "Ihre",
              "ar": "Ihre",
              "en": "Ihre"
            }
          ]
        },
        {
          "id": "DIhr",
          "cells": [
            {
              "fr": "D",
              "de": "D",
              "ar": "D",
              "en": "D"
            },
            {
              "fr": "Ihrem",
              "de": "Ihrem",
              "ar": "Ihrem",
              "en": "Ihrem"
            },
            {
              "fr": "Ihrem",
              "de": "Ihrem",
              "ar": "Ihrem",
              "en": "Ihrem"
            },
            {
              "fr": "Ihrer",
              "de": "Ihrer",
              "ar": "Ihrer",
              "en": "Ihrer"
            },
            {
              "fr": "Ihren",
              "de": "Ihren",
              "ar": "Ihren",
              "en": "Ihren"
            }
          ]
        }
      ]
    },
    {
      "type": "callout",
      "id": "euer",
      "tone": "warning",
      "title": {
        "fr": "Attention",
        "de": "Achtung",
        "ar": "انتبه",
        "en": "Watch out"
      },
      "text": {
        "fr": "euer perd le deuxième e devant une terminaison : eure, euren, eurem. Ihr avec majuscule marque la politesse ; en début de phrase la majuscule seule ne suffit pas.",
        "de": "euer verliert vor einer Endung das zweite e: eure, euren, eurem. Ihr ist die Höflichkeitsform; am Satzanfang reicht die Großschreibung allein nicht.",
        "ar": "تحذف e الثانية من euer قبل النهاية. صيغة الاحترام Ihr ولا تكفي الكتابة الكبيرة في بداية الجملة للتمييز.",
        "en": "euer drops its second e before an ending: eure, euren, eurem. Ihr marks formal address; capitalization alone is not decisive at sentence start."
      }
    }
  ]
}

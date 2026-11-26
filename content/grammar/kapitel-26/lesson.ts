import type { LessonDefinition } from '@/lib/grammar/types'
export const lesson: LessonDefinition = {
  "id": "kapitel-26-lesson",
  "title": {
    "fr": "Vu – acheté – payé",
    "de": "Gesehen – eingekauft – bezahlt",
    "ar": "رأى – تسوق – دفع",
    "en": "Seen – shopped – paid"
  },
  "subtitle": {
    "fr": "Le participe passé",
    "de": "Partizip II",
    "ar": "اسم المفعول الثاني",
    "en": "Past participle"
  },
  "objective": {
    "fr": "Le Perfekt associe un auxiliaire conjugué et un participe invariable. Dans Ich habe gestern gearbeitet, habe indique la personne et gearbeitet porte le sens de l’action. Le participe ne change ni avec le sujet ni avec le nombre.",
    "de": "Das Perfekt verbindet ein konjugiertes Hilfsverb mit einem unveränderlichen Partizip. In Ich habe gestern gearbeitet zeigt habe die Person, gearbeitet die Handlung.",
    "ar": "يتكون الماضي المركب من فعل مساعد مصرف واسم مفعول ثابت. في Ich habe gestern gearbeitet يدل habe على الشخص وgearbeitet على الحدث.",
    "en": "The perfect combines a finite auxiliary and an invariant participle. In Ich habe gestern gearbeitet, habe marks person and gearbeitet expresses the action."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "intro",
      "title": {
        "fr": "Pourquoi le participe ?",
        "de": "Warum das Partizip?",
        "ar": "لماذا اسم المفعول؟",
        "en": "Why the participle?"
      },
      "text": {
        "fr": "Le Perfekt associe un auxiliaire conjugué et un participe invariable. Dans Ich habe gestern gearbeitet, habe indique la personne et gearbeitet porte le sens de l’action. Le participe ne change ni avec le sujet ni avec le nombre.",
        "de": "Das Perfekt verbindet ein konjugiertes Hilfsverb mit einem unveränderlichen Partizip. In Ich habe gestern gearbeitet zeigt habe die Person, gearbeitet die Handlung.",
        "ar": "يتكون الماضي المركب من فعل مساعد مصرف واسم مفعول ثابت. في Ich habe gestern gearbeitet يدل habe على الشخص وgearbeitet على الحدث.",
        "en": "The perfect combines a finite auxiliary and an invariant participle. In Ich habe gestern gearbeitet, habe marks person and gearbeitet expresses the action."
      }
    },
    {
      "type": "paragraph",
      "id": "rule0",
      "title": {
        "fr": "Réguliers",
        "de": "Schwache Verben",
        "ar": "المنتظمة",
        "en": "Weak verbs"
      },
      "text": {
        "fr": "Verbe régulier : ge- + radical + -t. Après certains radicaux, notamment en -t ou -d, on ajoute -et pour faciliter la prononciation.",
        "de": "Schwache Verben: ge- + Stamm + -t. Nach bestimmten Stämmen, etwa auf -t oder -d, steht -et.",
        "ar": "الفعل المنتظم: ge- ثم الجذر ثم -t. بعد بعض الجذور مثل -t و-d نضيف -et.",
        "en": "Weak verbs: ge- + stem + -t. Certain stems, including those ending in -t or -d, take -et."
      }
    },
    {
      "type": "paragraph",
      "id": "rule1",
      "title": {
        "fr": "Forts",
        "de": "Starke Verben",
        "ar": "القوية",
        "en": "Strong verbs"
      },
      "text": {
        "fr": "Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
        "de": "Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
        "ar": "الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
        "en": "Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
      }
    },
    {
      "type": "paragraph",
      "id": "rule2",
      "title": {
        "fr": "Séparables",
        "de": "Trennbare Verben",
        "ar": "المنفصلة",
        "en": "Separable verbs"
      },
      "text": {
        "fr": "Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
        "de": "Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
        "ar": "مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
        "en": "With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
      }
    },
    {
      "type": "paragraph",
      "id": "rule3",
      "title": {
        "fr": "Inséparables",
        "de": "Untrennbare Verben",
        "ar": "غير المنفصلة",
        "en": "Inseparable verbs"
      },
      "text": {
        "fr": "Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
        "de": "Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
        "ar": "البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
        "en": "Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
      }
    },
    {
      "type": "paragraph",
      "id": "rule4",
      "title": {
        "fr": "Verbes en -ieren",
        "de": "Verben auf -ieren",
        "ar": "أفعال -ieren",
        "en": "-ieren verbs"
      },
      "text": {
        "fr": "Les verbes en -ieren forment leur participe en -iert sans ge-, même si le verbe est long.",
        "de": "Verben auf -ieren bilden das Partizip auf -iert ohne ge-.",
        "ar": "الأفعال المنتهية بـ -ieren تأخذ -iert دون ge-.",
        "en": "Verbs ending in -ieren form their participle with -iert and no ge-."
      }
    },
    {
      "type": "paragraph",
      "id": "rule5",
      "title": {
        "fr": "Mixtes",
        "de": "Gemischte Verben",
        "ar": "المختلطة",
        "en": "Mixed verbs"
      },
      "text": {
        "fr": "Les verbes mixtes changent de radical mais prennent -t comme les réguliers. Il faut mémoriser ces formes.",
        "de": "Gemischte Verben ändern den Stamm, haben aber -t wie schwache Verben. Diese Formen muss man lernen.",
        "ar": "الأفعال المختلطة تغير الجذر وتأخذ -t مثل المنتظمة. يجب حفظها.",
        "en": "Mixed verbs change their stem but take -t like weak verbs. Memorize these forms."
      }
    },
    {
      "type": "table",
      "id": "table",
      "title": {
        "fr": "Le participe passé",
        "de": "Partizip II",
        "ar": "اسم المفعول الثاني",
        "en": "Past participle"
      },
      "headers": [
        {
          "fr": "Infinitif",
          "de": "Infinitiv",
          "ar": "المصدر",
          "en": "Infinitive"
        },
        {
          "fr": "Le participe passé",
          "de": "Partizip II",
          "ar": "اسم المفعول الثاني",
          "en": "Past participle"
        },
        {
          "fr": "Type",
          "de": "Typ",
          "ar": "النوع",
          "en": "Type"
        }
      ],
      "rows": [
        {
          "id": "0",
          "cells": [
            {
              "fr": "kaufen",
              "de": "kaufen",
              "ar": "kaufen",
              "en": "kaufen"
            },
            {
              "fr": "gekauft",
              "de": "gekauft",
              "ar": "gekauft",
              "en": "gekauft"
            },
            {
              "fr": "Réguliers",
              "de": "Schwache Verben",
              "ar": "المنتظمة",
              "en": "Weak verbs"
            }
          ]
        },
        {
          "id": "1",
          "cells": [
            {
              "fr": "arbeiten",
              "de": "arbeiten",
              "ar": "arbeiten",
              "en": "arbeiten"
            },
            {
              "fr": "gearbeitet",
              "de": "gearbeitet",
              "ar": "gearbeitet",
              "en": "gearbeitet"
            },
            {
              "fr": "Réguliers",
              "de": "Schwache Verben",
              "ar": "المنتظمة",
              "en": "Weak verbs"
            }
          ]
        },
        {
          "id": "2",
          "cells": [
            {
              "fr": "fragen",
              "de": "fragen",
              "ar": "fragen",
              "en": "fragen"
            },
            {
              "fr": "gefragt",
              "de": "gefragt",
              "ar": "gefragt",
              "en": "gefragt"
            },
            {
              "fr": "Réguliers",
              "de": "Schwache Verben",
              "ar": "المنتظمة",
              "en": "Weak verbs"
            }
          ]
        },
        {
          "id": "3",
          "cells": [
            {
              "fr": "antworten",
              "de": "antworten",
              "ar": "antworten",
              "en": "antworten"
            },
            {
              "fr": "geantwortet",
              "de": "geantwortet",
              "ar": "geantwortet",
              "en": "geantwortet"
            },
            {
              "fr": "Réguliers",
              "de": "Schwache Verben",
              "ar": "المنتظمة",
              "en": "Weak verbs"
            }
          ]
        },
        {
          "id": "4",
          "cells": [
            {
              "fr": "machen",
              "de": "machen",
              "ar": "machen",
              "en": "machen"
            },
            {
              "fr": "gemacht",
              "de": "gemacht",
              "ar": "gemacht",
              "en": "gemacht"
            },
            {
              "fr": "Réguliers",
              "de": "Schwache Verben",
              "ar": "المنتظمة",
              "en": "Weak verbs"
            }
          ]
        },
        {
          "id": "5",
          "cells": [
            {
              "fr": "warten",
              "de": "warten",
              "ar": "warten",
              "en": "warten"
            },
            {
              "fr": "gewartet",
              "de": "gewartet",
              "ar": "gewartet",
              "en": "gewartet"
            },
            {
              "fr": "Réguliers",
              "de": "Schwache Verben",
              "ar": "المنتظمة",
              "en": "Weak verbs"
            }
          ]
        },
        {
          "id": "6",
          "cells": [
            {
              "fr": "sehen",
              "de": "sehen",
              "ar": "sehen",
              "en": "sehen"
            },
            {
              "fr": "gesehen",
              "de": "gesehen",
              "ar": "gesehen",
              "en": "gesehen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "7",
          "cells": [
            {
              "fr": "essen",
              "de": "essen",
              "ar": "essen",
              "en": "essen"
            },
            {
              "fr": "gegessen",
              "de": "gegessen",
              "ar": "gegessen",
              "en": "gegessen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "8",
          "cells": [
            {
              "fr": "trinken",
              "de": "trinken",
              "ar": "trinken",
              "en": "trinken"
            },
            {
              "fr": "getrunken",
              "de": "getrunken",
              "ar": "getrunken",
              "en": "getrunken"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "9",
          "cells": [
            {
              "fr": "schlafen",
              "de": "schlafen",
              "ar": "schlafen",
              "en": "schlafen"
            },
            {
              "fr": "geschlafen",
              "de": "geschlafen",
              "ar": "geschlafen",
              "en": "geschlafen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "10",
          "cells": [
            {
              "fr": "nehmen",
              "de": "nehmen",
              "ar": "nehmen",
              "en": "nehmen"
            },
            {
              "fr": "genommen",
              "de": "genommen",
              "ar": "genommen",
              "en": "genommen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "11",
          "cells": [
            {
              "fr": "geben",
              "de": "geben",
              "ar": "geben",
              "en": "geben"
            },
            {
              "fr": "gegeben",
              "de": "gegeben",
              "ar": "gegeben",
              "en": "gegeben"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "12",
          "cells": [
            {
              "fr": "fliegen",
              "de": "fliegen",
              "ar": "fliegen",
              "en": "fliegen"
            },
            {
              "fr": "geflogen",
              "de": "geflogen",
              "ar": "geflogen",
              "en": "geflogen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "13",
          "cells": [
            {
              "fr": "fallen",
              "de": "fallen",
              "ar": "fallen",
              "en": "fallen"
            },
            {
              "fr": "gefallen",
              "de": "gefallen",
              "ar": "gefallen",
              "en": "gefallen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "14",
          "cells": [
            {
              "fr": "gewinnen",
              "de": "gewinnen",
              "ar": "gewinnen",
              "en": "gewinnen"
            },
            {
              "fr": "gewonnen",
              "de": "gewonnen",
              "ar": "gewonnen",
              "en": "gewonnen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "15",
          "cells": [
            {
              "fr": "laufen",
              "de": "laufen",
              "ar": "laufen",
              "en": "laufen"
            },
            {
              "fr": "gelaufen",
              "de": "gelaufen",
              "ar": "gelaufen",
              "en": "gelaufen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "16",
          "cells": [
            {
              "fr": "schwimmen",
              "de": "schwimmen",
              "ar": "schwimmen",
              "en": "schwimmen"
            },
            {
              "fr": "geschwommen",
              "de": "geschwommen",
              "ar": "geschwommen",
              "en": "geschwommen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "17",
          "cells": [
            {
              "fr": "waschen",
              "de": "waschen",
              "ar": "waschen",
              "en": "waschen"
            },
            {
              "fr": "gewaschen",
              "de": "gewaschen",
              "ar": "gewaschen",
              "en": "gewaschen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "18",
          "cells": [
            {
              "fr": "kommen",
              "de": "kommen",
              "ar": "kommen",
              "en": "kommen"
            },
            {
              "fr": "gekommen",
              "de": "gekommen",
              "ar": "gekommen",
              "en": "gekommen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "19",
          "cells": [
            {
              "fr": "fahren",
              "de": "fahren",
              "ar": "fahren",
              "en": "fahren"
            },
            {
              "fr": "gefahren",
              "de": "gefahren",
              "ar": "gefahren",
              "en": "gefahren"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "20",
          "cells": [
            {
              "fr": "gehen",
              "de": "gehen",
              "ar": "gehen",
              "en": "gehen"
            },
            {
              "fr": "gegangen",
              "de": "gegangen",
              "ar": "gegangen",
              "en": "gegangen"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "21",
          "cells": [
            {
              "fr": "schreiben",
              "de": "schreiben",
              "ar": "schreiben",
              "en": "schreiben"
            },
            {
              "fr": "geschrieben",
              "de": "geschrieben",
              "ar": "geschrieben",
              "en": "geschrieben"
            },
            {
              "fr": "Forts",
              "de": "Starke Verben",
              "ar": "القوية",
              "en": "Strong verbs"
            }
          ]
        },
        {
          "id": "22",
          "cells": [
            {
              "fr": "abholen",
              "de": "abholen",
              "ar": "abholen",
              "en": "abholen"
            },
            {
              "fr": "abgeholt",
              "de": "abgeholt",
              "ar": "abgeholt",
              "en": "abgeholt"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "23",
          "cells": [
            {
              "fr": "ankommen",
              "de": "ankommen",
              "ar": "ankommen",
              "en": "ankommen"
            },
            {
              "fr": "angekommen",
              "de": "angekommen",
              "ar": "angekommen",
              "en": "angekommen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "24",
          "cells": [
            {
              "fr": "anfangen",
              "de": "anfangen",
              "ar": "anfangen",
              "en": "anfangen"
            },
            {
              "fr": "angefangen",
              "de": "angefangen",
              "ar": "angefangen",
              "en": "angefangen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "25",
          "cells": [
            {
              "fr": "aussteigen",
              "de": "aussteigen",
              "ar": "aussteigen",
              "en": "aussteigen"
            },
            {
              "fr": "ausgestiegen",
              "de": "ausgestiegen",
              "ar": "ausgestiegen",
              "en": "ausgestiegen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "26",
          "cells": [
            {
              "fr": "einladen",
              "de": "einladen",
              "ar": "einladen",
              "en": "einladen"
            },
            {
              "fr": "eingeladen",
              "de": "eingeladen",
              "ar": "eingeladen",
              "en": "eingeladen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "27",
          "cells": [
            {
              "fr": "mitbringen",
              "de": "mitbringen",
              "ar": "mitbringen",
              "en": "mitbringen"
            },
            {
              "fr": "mitgebracht",
              "de": "mitgebracht",
              "ar": "mitgebracht",
              "en": "mitgebracht"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "28",
          "cells": [
            {
              "fr": "einsteigen",
              "de": "einsteigen",
              "ar": "einsteigen",
              "en": "einsteigen"
            },
            {
              "fr": "eingestiegen",
              "de": "eingestiegen",
              "ar": "eingestiegen",
              "en": "eingestiegen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "29",
          "cells": [
            {
              "fr": "aufmachen",
              "de": "aufmachen",
              "ar": "aufmachen",
              "en": "aufmachen"
            },
            {
              "fr": "aufgemacht",
              "de": "aufgemacht",
              "ar": "aufgemacht",
              "en": "aufgemacht"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "30",
          "cells": [
            {
              "fr": "umziehen",
              "de": "umziehen",
              "ar": "umziehen",
              "en": "umziehen"
            },
            {
              "fr": "umgezogen",
              "de": "umgezogen",
              "ar": "umgezogen",
              "en": "umgezogen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "31",
          "cells": [
            {
              "fr": "abfliegen",
              "de": "abfliegen",
              "ar": "abfliegen",
              "en": "abfliegen"
            },
            {
              "fr": "abgeflogen",
              "de": "abgeflogen",
              "ar": "abgeflogen",
              "en": "abgeflogen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "32",
          "cells": [
            {
              "fr": "fernsehen",
              "de": "fernsehen",
              "ar": "fernsehen",
              "en": "fernsehen"
            },
            {
              "fr": "ferngesehen",
              "de": "ferngesehen",
              "ar": "ferngesehen",
              "en": "ferngesehen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "33",
          "cells": [
            {
              "fr": "ausmachen",
              "de": "ausmachen",
              "ar": "ausmachen",
              "en": "ausmachen"
            },
            {
              "fr": "ausgemacht",
              "de": "ausgemacht",
              "ar": "ausgemacht",
              "en": "ausgemacht"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "34",
          "cells": [
            {
              "fr": "anklicken",
              "de": "anklicken",
              "ar": "anklicken",
              "en": "anklicken"
            },
            {
              "fr": "angeklickt",
              "de": "angeklickt",
              "ar": "angeklickt",
              "en": "angeklickt"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "35",
          "cells": [
            {
              "fr": "teilnehmen",
              "de": "teilnehmen",
              "ar": "teilnehmen",
              "en": "teilnehmen"
            },
            {
              "fr": "teilgenommen",
              "de": "teilgenommen",
              "ar": "teilgenommen",
              "en": "teilgenommen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "36",
          "cells": [
            {
              "fr": "auspacken",
              "de": "auspacken",
              "ar": "auspacken",
              "en": "auspacken"
            },
            {
              "fr": "ausgepackt",
              "de": "ausgepackt",
              "ar": "ausgepackt",
              "en": "ausgepackt"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "37",
          "cells": [
            {
              "fr": "losfahren",
              "de": "losfahren",
              "ar": "losfahren",
              "en": "losfahren"
            },
            {
              "fr": "losgefahren",
              "de": "losgefahren",
              "ar": "losgefahren",
              "en": "losgefahren"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "38",
          "cells": [
            {
              "fr": "ansehen",
              "de": "ansehen",
              "ar": "ansehen",
              "en": "ansehen"
            },
            {
              "fr": "angesehen",
              "de": "angesehen",
              "ar": "angesehen",
              "en": "angesehen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "39",
          "cells": [
            {
              "fr": "einkaufen",
              "de": "einkaufen",
              "ar": "einkaufen",
              "en": "einkaufen"
            },
            {
              "fr": "eingekauft",
              "de": "eingekauft",
              "ar": "eingekauft",
              "en": "eingekauft"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "40",
          "cells": [
            {
              "fr": "einschlafen",
              "de": "einschlafen",
              "ar": "einschlafen",
              "en": "einschlafen"
            },
            {
              "fr": "eingeschlafen",
              "de": "eingeschlafen",
              "ar": "eingeschlafen",
              "en": "eingeschlafen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "41",
          "cells": [
            {
              "fr": "zurückkommen",
              "de": "zurückkommen",
              "ar": "zurückkommen",
              "en": "zurückkommen"
            },
            {
              "fr": "zurückgekommen",
              "de": "zurückgekommen",
              "ar": "zurückgekommen",
              "en": "zurückgekommen"
            },
            {
              "fr": "Séparables",
              "de": "Trennbare Verben",
              "ar": "المنفصلة",
              "en": "Separable verbs"
            }
          ]
        },
        {
          "id": "42",
          "cells": [
            {
              "fr": "bekommen",
              "de": "bekommen",
              "ar": "bekommen",
              "en": "bekommen"
            },
            {
              "fr": "bekommen",
              "de": "bekommen",
              "ar": "bekommen",
              "en": "bekommen"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "43",
          "cells": [
            {
              "fr": "empfehlen",
              "de": "empfehlen",
              "ar": "empfehlen",
              "en": "empfehlen"
            },
            {
              "fr": "empfohlen",
              "de": "empfohlen",
              "ar": "empfohlen",
              "en": "empfohlen"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "44",
          "cells": [
            {
              "fr": "verlieren",
              "de": "verlieren",
              "ar": "verlieren",
              "en": "verlieren"
            },
            {
              "fr": "verloren",
              "de": "verloren",
              "ar": "verloren",
              "en": "verloren"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "45",
          "cells": [
            {
              "fr": "versuchen",
              "de": "versuchen",
              "ar": "versuchen",
              "en": "versuchen"
            },
            {
              "fr": "versucht",
              "de": "versucht",
              "ar": "versucht",
              "en": "versucht"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "46",
          "cells": [
            {
              "fr": "bestellen",
              "de": "bestellen",
              "ar": "bestellen",
              "en": "bestellen"
            },
            {
              "fr": "bestellt",
              "de": "bestellt",
              "ar": "bestellt",
              "en": "bestellt"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "47",
          "cells": [
            {
              "fr": "erzählen",
              "de": "erzählen",
              "ar": "erzählen",
              "en": "erzählen"
            },
            {
              "fr": "erzählt",
              "de": "erzählt",
              "ar": "erzählt",
              "en": "erzählt"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "48",
          "cells": [
            {
              "fr": "entschuldigen",
              "de": "entschuldigen",
              "ar": "entschuldigen",
              "en": "entschuldigen"
            },
            {
              "fr": "entschuldigt",
              "de": "entschuldigt",
              "ar": "entschuldigt",
              "en": "entschuldigt"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "49",
          "cells": [
            {
              "fr": "besuchen",
              "de": "besuchen",
              "ar": "besuchen",
              "en": "besuchen"
            },
            {
              "fr": "besucht",
              "de": "besucht",
              "ar": "besucht",
              "en": "besucht"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "50",
          "cells": [
            {
              "fr": "beginnen",
              "de": "beginnen",
              "ar": "beginnen",
              "en": "beginnen"
            },
            {
              "fr": "begonnen",
              "de": "begonnen",
              "ar": "begonnen",
              "en": "begonnen"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "51",
          "cells": [
            {
              "fr": "vergessen",
              "de": "vergessen",
              "ar": "vergessen",
              "en": "vergessen"
            },
            {
              "fr": "vergessen",
              "de": "vergessen",
              "ar": "vergessen",
              "en": "vergessen"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "52",
          "cells": [
            {
              "fr": "besichtigen",
              "de": "besichtigen",
              "ar": "besichtigen",
              "en": "besichtigen"
            },
            {
              "fr": "besichtigt",
              "de": "besichtigt",
              "ar": "besichtigt",
              "en": "besichtigt"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "53",
          "cells": [
            {
              "fr": "bezahlen",
              "de": "bezahlen",
              "ar": "bezahlen",
              "en": "bezahlen"
            },
            {
              "fr": "bezahlt",
              "de": "bezahlt",
              "ar": "bezahlt",
              "en": "bezahlt"
            },
            {
              "fr": "Inséparables",
              "de": "Untrennbare Verben",
              "ar": "غير المنفصلة",
              "en": "Inseparable verbs"
            }
          ]
        },
        {
          "id": "54",
          "cells": [
            {
              "fr": "studieren",
              "de": "studieren",
              "ar": "studieren",
              "en": "studieren"
            },
            {
              "fr": "studiert",
              "de": "studiert",
              "ar": "studiert",
              "en": "studiert"
            },
            {
              "fr": "Verbes en -ieren",
              "de": "Verben auf -ieren",
              "ar": "أفعال -ieren",
              "en": "-ieren verbs"
            }
          ]
        },
        {
          "id": "55",
          "cells": [
            {
              "fr": "explodieren",
              "de": "explodieren",
              "ar": "explodieren",
              "en": "explodieren"
            },
            {
              "fr": "explodiert",
              "de": "explodiert",
              "ar": "explodiert",
              "en": "explodiert"
            },
            {
              "fr": "Verbes en -ieren",
              "de": "Verben auf -ieren",
              "ar": "أفعال -ieren",
              "en": "-ieren verbs"
            }
          ]
        },
        {
          "id": "56",
          "cells": [
            {
              "fr": "diskutieren",
              "de": "diskutieren",
              "ar": "diskutieren",
              "en": "diskutieren"
            },
            {
              "fr": "diskutiert",
              "de": "diskutiert",
              "ar": "diskutiert",
              "en": "diskutiert"
            },
            {
              "fr": "Verbes en -ieren",
              "de": "Verben auf -ieren",
              "ar": "أفعال -ieren",
              "en": "-ieren verbs"
            }
          ]
        },
        {
          "id": "57",
          "cells": [
            {
              "fr": "probieren",
              "de": "probieren",
              "ar": "probieren",
              "en": "probieren"
            },
            {
              "fr": "probiert",
              "de": "probiert",
              "ar": "probiert",
              "en": "probiert"
            },
            {
              "fr": "Verbes en -ieren",
              "de": "Verben auf -ieren",
              "ar": "أفعال -ieren",
              "en": "-ieren verbs"
            }
          ]
        },
        {
          "id": "58",
          "cells": [
            {
              "fr": "reparieren",
              "de": "reparieren",
              "ar": "reparieren",
              "en": "reparieren"
            },
            {
              "fr": "repariert",
              "de": "repariert",
              "ar": "repariert",
              "en": "repariert"
            },
            {
              "fr": "Verbes en -ieren",
              "de": "Verben auf -ieren",
              "ar": "أفعال -ieren",
              "en": "-ieren verbs"
            }
          ]
        },
        {
          "id": "59",
          "cells": [
            {
              "fr": "gratulieren",
              "de": "gratulieren",
              "ar": "gratulieren",
              "en": "gratulieren"
            },
            {
              "fr": "gratuliert",
              "de": "gratuliert",
              "ar": "gratuliert",
              "en": "gratuliert"
            },
            {
              "fr": "Verbes en -ieren",
              "de": "Verben auf -ieren",
              "ar": "أفعال -ieren",
              "en": "-ieren verbs"
            }
          ]
        },
        {
          "id": "60",
          "cells": [
            {
              "fr": "telefonieren",
              "de": "telefonieren",
              "ar": "telefonieren",
              "en": "telefonieren"
            },
            {
              "fr": "telefoniert",
              "de": "telefoniert",
              "ar": "telefoniert",
              "en": "telefoniert"
            },
            {
              "fr": "Verbes en -ieren",
              "de": "Verben auf -ieren",
              "ar": "أفعال -ieren",
              "en": "-ieren verbs"
            }
          ]
        },
        {
          "id": "61",
          "cells": [
            {
              "fr": "denken",
              "de": "denken",
              "ar": "denken",
              "en": "denken"
            },
            {
              "fr": "gedacht",
              "de": "gedacht",
              "ar": "gedacht",
              "en": "gedacht"
            },
            {
              "fr": "Mixtes",
              "de": "Gemischte Verben",
              "ar": "المختلطة",
              "en": "Mixed verbs"
            }
          ]
        },
        {
          "id": "62",
          "cells": [
            {
              "fr": "bringen",
              "de": "bringen",
              "ar": "bringen",
              "en": "bringen"
            },
            {
              "fr": "gebracht",
              "de": "gebracht",
              "ar": "gebracht",
              "en": "gebracht"
            },
            {
              "fr": "Mixtes",
              "de": "Gemischte Verben",
              "ar": "المختلطة",
              "en": "Mixed verbs"
            }
          ]
        },
        {
          "id": "63",
          "cells": [
            {
              "fr": "kennen",
              "de": "kennen",
              "ar": "kennen",
              "en": "kennen"
            },
            {
              "fr": "gekannt",
              "de": "gekannt",
              "ar": "gekannt",
              "en": "gekannt"
            },
            {
              "fr": "Mixtes",
              "de": "Gemischte Verben",
              "ar": "المختلطة",
              "en": "Mixed verbs"
            }
          ]
        },
        {
          "id": "64",
          "cells": [
            {
              "fr": "wissen",
              "de": "wissen",
              "ar": "wissen",
              "en": "wissen"
            },
            {
              "fr": "gewusst",
              "de": "gewusst",
              "ar": "gewusst",
              "en": "gewusst"
            },
            {
              "fr": "Mixtes",
              "de": "Gemischte Verben",
              "ar": "المختلطة",
              "en": "Mixed verbs"
            }
          ]
        }
      ]
    },
    {
      "type": "examples",
      "id": "examples",
      "title": {
        "fr": "Formes commentées",
        "de": "Kommentierte Formen",
        "ar": "صيغ مشروحة",
        "en": "Annotated forms"
      },
      "items": [
        {
          "id": "0",
          "context": {
            "fr": "Formation de kaufen",
            "de": "Bildung von kaufen",
            "ar": "تكوين kaufen",
            "en": "Formation of kaufen"
          },
          "german": "kaufen → gekauft",
          "explanation": {
            "fr": "kaufen → gekauft. Verbe régulier : ge- + radical + -t. Après certains radicaux, notamment en -t ou -d, on ajoute -et pour faciliter la prononciation.",
            "de": "kaufen → gekauft. Schwache Verben: ge- + Stamm + -t. Nach bestimmten Stämmen, etwa auf -t oder -d, steht -et.",
            "ar": "kaufen → gekauft. الفعل المنتظم: ge- ثم الجذر ثم -t. بعد بعض الجذور مثل -t و-d نضيف -et.",
            "en": "kaufen → gekauft. Weak verbs: ge- + stem + -t. Certain stems, including those ending in -t or -d, take -et."
          }
        },
        {
          "id": "1",
          "context": {
            "fr": "Formation de arbeiten",
            "de": "Bildung von arbeiten",
            "ar": "تكوين arbeiten",
            "en": "Formation of arbeiten"
          },
          "german": "arbeiten → gearbeitet",
          "explanation": {
            "fr": "arbeiten → gearbeitet. Verbe régulier : ge- + radical + -t. Après certains radicaux, notamment en -t ou -d, on ajoute -et pour faciliter la prononciation.",
            "de": "arbeiten → gearbeitet. Schwache Verben: ge- + Stamm + -t. Nach bestimmten Stämmen, etwa auf -t oder -d, steht -et.",
            "ar": "arbeiten → gearbeitet. الفعل المنتظم: ge- ثم الجذر ثم -t. بعد بعض الجذور مثل -t و-d نضيف -et.",
            "en": "arbeiten → gearbeitet. Weak verbs: ge- + stem + -t. Certain stems, including those ending in -t or -d, take -et."
          }
        },
        {
          "id": "2",
          "context": {
            "fr": "Formation de fragen",
            "de": "Bildung von fragen",
            "ar": "تكوين fragen",
            "en": "Formation of fragen"
          },
          "german": "fragen → gefragt",
          "explanation": {
            "fr": "fragen → gefragt. Verbe régulier : ge- + radical + -t. Après certains radicaux, notamment en -t ou -d, on ajoute -et pour faciliter la prononciation.",
            "de": "fragen → gefragt. Schwache Verben: ge- + Stamm + -t. Nach bestimmten Stämmen, etwa auf -t oder -d, steht -et.",
            "ar": "fragen → gefragt. الفعل المنتظم: ge- ثم الجذر ثم -t. بعد بعض الجذور مثل -t و-d نضيف -et.",
            "en": "fragen → gefragt. Weak verbs: ge- + stem + -t. Certain stems, including those ending in -t or -d, take -et."
          }
        },
        {
          "id": "3",
          "context": {
            "fr": "Formation de antworten",
            "de": "Bildung von antworten",
            "ar": "تكوين antworten",
            "en": "Formation of antworten"
          },
          "german": "antworten → geantwortet",
          "explanation": {
            "fr": "antworten → geantwortet. Verbe régulier : ge- + radical + -t. Après certains radicaux, notamment en -t ou -d, on ajoute -et pour faciliter la prononciation.",
            "de": "antworten → geantwortet. Schwache Verben: ge- + Stamm + -t. Nach bestimmten Stämmen, etwa auf -t oder -d, steht -et.",
            "ar": "antworten → geantwortet. الفعل المنتظم: ge- ثم الجذر ثم -t. بعد بعض الجذور مثل -t و-d نضيف -et.",
            "en": "antworten → geantwortet. Weak verbs: ge- + stem + -t. Certain stems, including those ending in -t or -d, take -et."
          }
        },
        {
          "id": "4",
          "context": {
            "fr": "Formation de machen",
            "de": "Bildung von machen",
            "ar": "تكوين machen",
            "en": "Formation of machen"
          },
          "german": "machen → gemacht",
          "explanation": {
            "fr": "machen → gemacht. Verbe régulier : ge- + radical + -t. Après certains radicaux, notamment en -t ou -d, on ajoute -et pour faciliter la prononciation.",
            "de": "machen → gemacht. Schwache Verben: ge- + Stamm + -t. Nach bestimmten Stämmen, etwa auf -t oder -d, steht -et.",
            "ar": "machen → gemacht. الفعل المنتظم: ge- ثم الجذر ثم -t. بعد بعض الجذور مثل -t و-d نضيف -et.",
            "en": "machen → gemacht. Weak verbs: ge- + stem + -t. Certain stems, including those ending in -t or -d, take -et."
          }
        },
        {
          "id": "5",
          "context": {
            "fr": "Formation de warten",
            "de": "Bildung von warten",
            "ar": "تكوين warten",
            "en": "Formation of warten"
          },
          "german": "warten → gewartet",
          "explanation": {
            "fr": "warten → gewartet. Verbe régulier : ge- + radical + -t. Après certains radicaux, notamment en -t ou -d, on ajoute -et pour faciliter la prononciation.",
            "de": "warten → gewartet. Schwache Verben: ge- + Stamm + -t. Nach bestimmten Stämmen, etwa auf -t oder -d, steht -et.",
            "ar": "warten → gewartet. الفعل المنتظم: ge- ثم الجذر ثم -t. بعد بعض الجذور مثل -t و-d نضيف -et.",
            "en": "warten → gewartet. Weak verbs: ge- + stem + -t. Certain stems, including those ending in -t or -d, take -et."
          }
        },
        {
          "id": "6",
          "context": {
            "fr": "Formation de sehen",
            "de": "Bildung von sehen",
            "ar": "تكوين sehen",
            "en": "Formation of sehen"
          },
          "german": "sehen → gesehen",
          "explanation": {
            "fr": "sehen → gesehen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "sehen → gesehen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "sehen → gesehen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "sehen → gesehen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "7",
          "context": {
            "fr": "Formation de essen",
            "de": "Bildung von essen",
            "ar": "تكوين essen",
            "en": "Formation of essen"
          },
          "german": "essen → gegessen",
          "explanation": {
            "fr": "essen → gegessen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "essen → gegessen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "essen → gegessen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "essen → gegessen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "8",
          "context": {
            "fr": "Formation de trinken",
            "de": "Bildung von trinken",
            "ar": "تكوين trinken",
            "en": "Formation of trinken"
          },
          "german": "trinken → getrunken",
          "explanation": {
            "fr": "trinken → getrunken. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "trinken → getrunken. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "trinken → getrunken. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "trinken → getrunken. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "9",
          "context": {
            "fr": "Formation de schlafen",
            "de": "Bildung von schlafen",
            "ar": "تكوين schlafen",
            "en": "Formation of schlafen"
          },
          "german": "schlafen → geschlafen",
          "explanation": {
            "fr": "schlafen → geschlafen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "schlafen → geschlafen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "schlafen → geschlafen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "schlafen → geschlafen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "10",
          "context": {
            "fr": "Formation de nehmen",
            "de": "Bildung von nehmen",
            "ar": "تكوين nehmen",
            "en": "Formation of nehmen"
          },
          "german": "nehmen → genommen",
          "explanation": {
            "fr": "nehmen → genommen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "nehmen → genommen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "nehmen → genommen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "nehmen → genommen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "11",
          "context": {
            "fr": "Formation de geben",
            "de": "Bildung von geben",
            "ar": "تكوين geben",
            "en": "Formation of geben"
          },
          "german": "geben → gegeben",
          "explanation": {
            "fr": "geben → gegeben. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "geben → gegeben. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "geben → gegeben. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "geben → gegeben. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "12",
          "context": {
            "fr": "Formation de fliegen",
            "de": "Bildung von fliegen",
            "ar": "تكوين fliegen",
            "en": "Formation of fliegen"
          },
          "german": "fliegen → geflogen",
          "explanation": {
            "fr": "fliegen → geflogen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "fliegen → geflogen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "fliegen → geflogen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "fliegen → geflogen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "13",
          "context": {
            "fr": "Formation de fallen",
            "de": "Bildung von fallen",
            "ar": "تكوين fallen",
            "en": "Formation of fallen"
          },
          "german": "fallen → gefallen",
          "explanation": {
            "fr": "fallen → gefallen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "fallen → gefallen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "fallen → gefallen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "fallen → gefallen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "14",
          "context": {
            "fr": "Formation de gewinnen",
            "de": "Bildung von gewinnen",
            "ar": "تكوين gewinnen",
            "en": "Formation of gewinnen"
          },
          "german": "gewinnen → gewonnen",
          "explanation": {
            "fr": "gewinnen → gewonnen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "gewinnen → gewonnen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "gewinnen → gewonnen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "gewinnen → gewonnen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "15",
          "context": {
            "fr": "Formation de laufen",
            "de": "Bildung von laufen",
            "ar": "تكوين laufen",
            "en": "Formation of laufen"
          },
          "german": "laufen → gelaufen",
          "explanation": {
            "fr": "laufen → gelaufen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "laufen → gelaufen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "laufen → gelaufen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "laufen → gelaufen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "16",
          "context": {
            "fr": "Formation de schwimmen",
            "de": "Bildung von schwimmen",
            "ar": "تكوين schwimmen",
            "en": "Formation of schwimmen"
          },
          "german": "schwimmen → geschwommen",
          "explanation": {
            "fr": "schwimmen → geschwommen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "schwimmen → geschwommen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "schwimmen → geschwommen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "schwimmen → geschwommen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "17",
          "context": {
            "fr": "Formation de waschen",
            "de": "Bildung von waschen",
            "ar": "تكوين waschen",
            "en": "Formation of waschen"
          },
          "german": "waschen → gewaschen",
          "explanation": {
            "fr": "waschen → gewaschen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "waschen → gewaschen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "waschen → gewaschen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "waschen → gewaschen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "18",
          "context": {
            "fr": "Formation de kommen",
            "de": "Bildung von kommen",
            "ar": "تكوين kommen",
            "en": "Formation of kommen"
          },
          "german": "kommen → gekommen",
          "explanation": {
            "fr": "kommen → gekommen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "kommen → gekommen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "kommen → gekommen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "kommen → gekommen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "19",
          "context": {
            "fr": "Formation de fahren",
            "de": "Bildung von fahren",
            "ar": "تكوين fahren",
            "en": "Formation of fahren"
          },
          "german": "fahren → gefahren",
          "explanation": {
            "fr": "fahren → gefahren. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "fahren → gefahren. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "fahren → gefahren. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "fahren → gefahren. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "20",
          "context": {
            "fr": "Formation de gehen",
            "de": "Bildung von gehen",
            "ar": "تكوين gehen",
            "en": "Formation of gehen"
          },
          "german": "gehen → gegangen",
          "explanation": {
            "fr": "gehen → gegangen. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "gehen → gegangen. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "gehen → gegangen. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "gehen → gegangen. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "21",
          "context": {
            "fr": "Formation de schreiben",
            "de": "Bildung von schreiben",
            "ar": "تكوين schreiben",
            "en": "Formation of schreiben"
          },
          "german": "schreiben → geschrieben",
          "explanation": {
            "fr": "schreiben → geschrieben. Les verbes forts prennent généralement ge- et -en ; le radical peut changer. Il faut apprendre la forme avec l’infinitif.",
            "de": "schreiben → geschrieben. Starke Verben haben meist ge- und -en; der Stamm kann sich ändern. Lernen Sie beide Formen zusammen.",
            "ar": "schreiben → geschrieben. الأفعال القوية غالبا تأخذ ge- و-en وقد يتغير الجذر. احفظ الصيغتين معا.",
            "en": "schreiben → geschrieben. Strong verbs usually take ge- and -en; the stem may change. Learn both forms together."
          }
        },
        {
          "id": "22",
          "context": {
            "fr": "Formation de abholen",
            "de": "Bildung von abholen",
            "ar": "تكوين abholen",
            "en": "Formation of abholen"
          },
          "german": "abholen → abgeholt",
          "explanation": {
            "fr": "abholen → abgeholt. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "abholen → abgeholt. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "abholen → abgeholt. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "abholen → abgeholt. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "23",
          "context": {
            "fr": "Formation de ankommen",
            "de": "Bildung von ankommen",
            "ar": "تكوين ankommen",
            "en": "Formation of ankommen"
          },
          "german": "ankommen → angekommen",
          "explanation": {
            "fr": "ankommen → angekommen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "ankommen → angekommen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "ankommen → angekommen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "ankommen → angekommen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "24",
          "context": {
            "fr": "Formation de anfangen",
            "de": "Bildung von anfangen",
            "ar": "تكوين anfangen",
            "en": "Formation of anfangen"
          },
          "german": "anfangen → angefangen",
          "explanation": {
            "fr": "anfangen → angefangen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "anfangen → angefangen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "anfangen → angefangen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "anfangen → angefangen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "25",
          "context": {
            "fr": "Formation de aussteigen",
            "de": "Bildung von aussteigen",
            "ar": "تكوين aussteigen",
            "en": "Formation of aussteigen"
          },
          "german": "aussteigen → ausgestiegen",
          "explanation": {
            "fr": "aussteigen → ausgestiegen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "aussteigen → ausgestiegen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "aussteigen → ausgestiegen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "aussteigen → ausgestiegen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "26",
          "context": {
            "fr": "Formation de einladen",
            "de": "Bildung von einladen",
            "ar": "تكوين einladen",
            "en": "Formation of einladen"
          },
          "german": "einladen → eingeladen",
          "explanation": {
            "fr": "einladen → eingeladen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "einladen → eingeladen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "einladen → eingeladen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "einladen → eingeladen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "27",
          "context": {
            "fr": "Formation de mitbringen",
            "de": "Bildung von mitbringen",
            "ar": "تكوين mitbringen",
            "en": "Formation of mitbringen"
          },
          "german": "mitbringen → mitgebracht",
          "explanation": {
            "fr": "mitbringen → mitgebracht. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "mitbringen → mitgebracht. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "mitbringen → mitgebracht. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "mitbringen → mitgebracht. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "28",
          "context": {
            "fr": "Formation de einsteigen",
            "de": "Bildung von einsteigen",
            "ar": "تكوين einsteigen",
            "en": "Formation of einsteigen"
          },
          "german": "einsteigen → eingestiegen",
          "explanation": {
            "fr": "einsteigen → eingestiegen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "einsteigen → eingestiegen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "einsteigen → eingestiegen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "einsteigen → eingestiegen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "29",
          "context": {
            "fr": "Formation de aufmachen",
            "de": "Bildung von aufmachen",
            "ar": "تكوين aufmachen",
            "en": "Formation of aufmachen"
          },
          "german": "aufmachen → aufgemacht",
          "explanation": {
            "fr": "aufmachen → aufgemacht. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "aufmachen → aufgemacht. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "aufmachen → aufgemacht. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "aufmachen → aufgemacht. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "30",
          "context": {
            "fr": "Formation de umziehen",
            "de": "Bildung von umziehen",
            "ar": "تكوين umziehen",
            "en": "Formation of umziehen"
          },
          "german": "umziehen → umgezogen",
          "explanation": {
            "fr": "umziehen → umgezogen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "umziehen → umgezogen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "umziehen → umgezogen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "umziehen → umgezogen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "31",
          "context": {
            "fr": "Formation de abfliegen",
            "de": "Bildung von abfliegen",
            "ar": "تكوين abfliegen",
            "en": "Formation of abfliegen"
          },
          "german": "abfliegen → abgeflogen",
          "explanation": {
            "fr": "abfliegen → abgeflogen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "abfliegen → abgeflogen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "abfliegen → abgeflogen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "abfliegen → abgeflogen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "32",
          "context": {
            "fr": "Formation de fernsehen",
            "de": "Bildung von fernsehen",
            "ar": "تكوين fernsehen",
            "en": "Formation of fernsehen"
          },
          "german": "fernsehen → ferngesehen",
          "explanation": {
            "fr": "fernsehen → ferngesehen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "fernsehen → ferngesehen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "fernsehen → ferngesehen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "fernsehen → ferngesehen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "33",
          "context": {
            "fr": "Formation de ausmachen",
            "de": "Bildung von ausmachen",
            "ar": "تكوين ausmachen",
            "en": "Formation of ausmachen"
          },
          "german": "ausmachen → ausgemacht",
          "explanation": {
            "fr": "ausmachen → ausgemacht. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "ausmachen → ausgemacht. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "ausmachen → ausgemacht. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "ausmachen → ausgemacht. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "34",
          "context": {
            "fr": "Formation de anklicken",
            "de": "Bildung von anklicken",
            "ar": "تكوين anklicken",
            "en": "Formation of anklicken"
          },
          "german": "anklicken → angeklickt",
          "explanation": {
            "fr": "anklicken → angeklickt. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "anklicken → angeklickt. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "anklicken → angeklickt. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "anklicken → angeklickt. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "35",
          "context": {
            "fr": "Formation de teilnehmen",
            "de": "Bildung von teilnehmen",
            "ar": "تكوين teilnehmen",
            "en": "Formation of teilnehmen"
          },
          "german": "teilnehmen → teilgenommen",
          "explanation": {
            "fr": "teilnehmen → teilgenommen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "teilnehmen → teilgenommen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "teilnehmen → teilgenommen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "teilnehmen → teilgenommen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "36",
          "context": {
            "fr": "Formation de auspacken",
            "de": "Bildung von auspacken",
            "ar": "تكوين auspacken",
            "en": "Formation of auspacken"
          },
          "german": "auspacken → ausgepackt",
          "explanation": {
            "fr": "auspacken → ausgepackt. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "auspacken → ausgepackt. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "auspacken → ausgepackt. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "auspacken → ausgepackt. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "37",
          "context": {
            "fr": "Formation de losfahren",
            "de": "Bildung von losfahren",
            "ar": "تكوين losfahren",
            "en": "Formation of losfahren"
          },
          "german": "losfahren → losgefahren",
          "explanation": {
            "fr": "losfahren → losgefahren. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "losfahren → losgefahren. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "losfahren → losgefahren. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "losfahren → losgefahren. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "38",
          "context": {
            "fr": "Formation de ansehen",
            "de": "Bildung von ansehen",
            "ar": "تكوين ansehen",
            "en": "Formation of ansehen"
          },
          "german": "ansehen → angesehen",
          "explanation": {
            "fr": "ansehen → angesehen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "ansehen → angesehen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "ansehen → angesehen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "ansehen → angesehen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "39",
          "context": {
            "fr": "Formation de einkaufen",
            "de": "Bildung von einkaufen",
            "ar": "تكوين einkaufen",
            "en": "Formation of einkaufen"
          },
          "german": "einkaufen → eingekauft",
          "explanation": {
            "fr": "einkaufen → eingekauft. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "einkaufen → eingekauft. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "einkaufen → eingekauft. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "einkaufen → eingekauft. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "40",
          "context": {
            "fr": "Formation de einschlafen",
            "de": "Bildung von einschlafen",
            "ar": "تكوين einschlafen",
            "en": "Formation of einschlafen"
          },
          "german": "einschlafen → eingeschlafen",
          "explanation": {
            "fr": "einschlafen → eingeschlafen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "einschlafen → eingeschlafen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "einschlafen → eingeschlafen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "einschlafen → eingeschlafen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "41",
          "context": {
            "fr": "Formation de zurückkommen",
            "de": "Bildung von zurückkommen",
            "ar": "تكوين zurückkommen",
            "en": "Formation of zurückkommen"
          },
          "german": "zurückkommen → zurückgekommen",
          "explanation": {
            "fr": "zurückkommen → zurückgekommen. Avec un préfixe séparable, ge- se place entre le préfixe et le radical. La terminaison dépend du verbe de base.",
            "de": "zurückkommen → zurückgekommen. Bei trennbaren Verben steht ge- zwischen Präfix und Stamm. Die Endung hängt vom Grundverb ab.",
            "ar": "zurückkommen → zurückgekommen. مع البادئة المنفصلة تأتي ge- بين البادئة والجذر. النهاية حسب الفعل الأصلي.",
            "en": "zurückkommen → zurückgekommen. With separable prefixes, ge- goes between prefix and stem. The ending depends on the base verb."
          }
        },
        {
          "id": "42",
          "context": {
            "fr": "Formation de bekommen",
            "de": "Bildung von bekommen",
            "ar": "تكوين bekommen",
            "en": "Formation of bekommen"
          },
          "german": "bekommen → bekommen",
          "explanation": {
            "fr": "bekommen → bekommen. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "bekommen → bekommen. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "bekommen → bekommen. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "bekommen → bekommen. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "43",
          "context": {
            "fr": "Formation de empfehlen",
            "de": "Bildung von empfehlen",
            "ar": "تكوين empfehlen",
            "en": "Formation of empfehlen"
          },
          "german": "empfehlen → empfohlen",
          "explanation": {
            "fr": "empfehlen → empfohlen. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "empfehlen → empfohlen. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "empfehlen → empfohlen. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "empfehlen → empfohlen. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "44",
          "context": {
            "fr": "Formation de verlieren",
            "de": "Bildung von verlieren",
            "ar": "تكوين verlieren",
            "en": "Formation of verlieren"
          },
          "german": "verlieren → verloren",
          "explanation": {
            "fr": "verlieren → verloren. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "verlieren → verloren. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "verlieren → verloren. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "verlieren → verloren. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "45",
          "context": {
            "fr": "Formation de versuchen",
            "de": "Bildung von versuchen",
            "ar": "تكوين versuchen",
            "en": "Formation of versuchen"
          },
          "german": "versuchen → versucht",
          "explanation": {
            "fr": "versuchen → versucht. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "versuchen → versucht. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "versuchen → versucht. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "versuchen → versucht. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "46",
          "context": {
            "fr": "Formation de bestellen",
            "de": "Bildung von bestellen",
            "ar": "تكوين bestellen",
            "en": "Formation of bestellen"
          },
          "german": "bestellen → bestellt",
          "explanation": {
            "fr": "bestellen → bestellt. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "bestellen → bestellt. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "bestellen → bestellt. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "bestellen → bestellt. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "47",
          "context": {
            "fr": "Formation de erzählen",
            "de": "Bildung von erzählen",
            "ar": "تكوين erzählen",
            "en": "Formation of erzählen"
          },
          "german": "erzählen → erzählt",
          "explanation": {
            "fr": "erzählen → erzählt. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "erzählen → erzählt. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "erzählen → erzählt. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "erzählen → erzählt. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "48",
          "context": {
            "fr": "Formation de entschuldigen",
            "de": "Bildung von entschuldigen",
            "ar": "تكوين entschuldigen",
            "en": "Formation of entschuldigen"
          },
          "german": "entschuldigen → entschuldigt",
          "explanation": {
            "fr": "entschuldigen → entschuldigt. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "entschuldigen → entschuldigt. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "entschuldigen → entschuldigt. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "entschuldigen → entschuldigt. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "49",
          "context": {
            "fr": "Formation de besuchen",
            "de": "Bildung von besuchen",
            "ar": "تكوين besuchen",
            "en": "Formation of besuchen"
          },
          "german": "besuchen → besucht",
          "explanation": {
            "fr": "besuchen → besucht. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "besuchen → besucht. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "besuchen → besucht. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "besuchen → besucht. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "50",
          "context": {
            "fr": "Formation de beginnen",
            "de": "Bildung von beginnen",
            "ar": "تكوين beginnen",
            "en": "Formation of beginnen"
          },
          "german": "beginnen → begonnen",
          "explanation": {
            "fr": "beginnen → begonnen. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "beginnen → begonnen. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "beginnen → begonnen. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "beginnen → begonnen. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "51",
          "context": {
            "fr": "Formation de vergessen",
            "de": "Bildung von vergessen",
            "ar": "تكوين vergessen",
            "en": "Formation of vergessen"
          },
          "german": "vergessen → vergessen",
          "explanation": {
            "fr": "vergessen → vergessen. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "vergessen → vergessen. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "vergessen → vergessen. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "vergessen → vergessen. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "52",
          "context": {
            "fr": "Formation de besichtigen",
            "de": "Bildung von besichtigen",
            "ar": "تكوين besichtigen",
            "en": "Formation of besichtigen"
          },
          "german": "besichtigen → besichtigt",
          "explanation": {
            "fr": "besichtigen → besichtigt. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "besichtigen → besichtigt. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "besichtigen → besichtigt. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "besichtigen → besichtigt. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "53",
          "context": {
            "fr": "Formation de bezahlen",
            "de": "Bildung von bezahlen",
            "ar": "تكوين bezahlen",
            "en": "Formation of bezahlen"
          },
          "german": "bezahlen → bezahlt",
          "explanation": {
            "fr": "bezahlen → bezahlt. Les préfixes inséparables be-, emp-, ent-, er-, ge-, ver-, zer- empêchent l’ajout de ge-. La terminaison reste celle du type de verbe.",
            "de": "bezahlen → bezahlt. Untrennbare Präfixe be-, emp-, ent-, er-, ge-, ver-, zer- verhindern zusätzliches ge-. Die Endung richtet sich nach dem Verbtyp.",
            "ar": "bezahlen → bezahlt. البادئات غير المنفصلة تمنع إضافة ge-. النهاية حسب نوع الفعل.",
            "en": "bezahlen → bezahlt. Inseparable prefixes be-, emp-, ent-, er-, ge-, ver-, zer- block additional ge-. The ending depends on verb type."
          }
        },
        {
          "id": "54",
          "context": {
            "fr": "Formation de studieren",
            "de": "Bildung von studieren",
            "ar": "تكوين studieren",
            "en": "Formation of studieren"
          },
          "german": "studieren → studiert",
          "explanation": {
            "fr": "studieren → studiert. Les verbes en -ieren forment leur participe en -iert sans ge-, même si le verbe est long.",
            "de": "studieren → studiert. Verben auf -ieren bilden das Partizip auf -iert ohne ge-.",
            "ar": "studieren → studiert. الأفعال المنتهية بـ -ieren تأخذ -iert دون ge-.",
            "en": "studieren → studiert. Verbs ending in -ieren form their participle with -iert and no ge-."
          }
        },
        {
          "id": "55",
          "context": {
            "fr": "Formation de explodieren",
            "de": "Bildung von explodieren",
            "ar": "تكوين explodieren",
            "en": "Formation of explodieren"
          },
          "german": "explodieren → explodiert",
          "explanation": {
            "fr": "explodieren → explodiert. Les verbes en -ieren forment leur participe en -iert sans ge-, même si le verbe est long.",
            "de": "explodieren → explodiert. Verben auf -ieren bilden das Partizip auf -iert ohne ge-.",
            "ar": "explodieren → explodiert. الأفعال المنتهية بـ -ieren تأخذ -iert دون ge-.",
            "en": "explodieren → explodiert. Verbs ending in -ieren form their participle with -iert and no ge-."
          }
        },
        {
          "id": "56",
          "context": {
            "fr": "Formation de diskutieren",
            "de": "Bildung von diskutieren",
            "ar": "تكوين diskutieren",
            "en": "Formation of diskutieren"
          },
          "german": "diskutieren → diskutiert",
          "explanation": {
            "fr": "diskutieren → diskutiert. Les verbes en -ieren forment leur participe en -iert sans ge-, même si le verbe est long.",
            "de": "diskutieren → diskutiert. Verben auf -ieren bilden das Partizip auf -iert ohne ge-.",
            "ar": "diskutieren → diskutiert. الأفعال المنتهية بـ -ieren تأخذ -iert دون ge-.",
            "en": "diskutieren → diskutiert. Verbs ending in -ieren form their participle with -iert and no ge-."
          }
        },
        {
          "id": "57",
          "context": {
            "fr": "Formation de probieren",
            "de": "Bildung von probieren",
            "ar": "تكوين probieren",
            "en": "Formation of probieren"
          },
          "german": "probieren → probiert",
          "explanation": {
            "fr": "probieren → probiert. Les verbes en -ieren forment leur participe en -iert sans ge-, même si le verbe est long.",
            "de": "probieren → probiert. Verben auf -ieren bilden das Partizip auf -iert ohne ge-.",
            "ar": "probieren → probiert. الأفعال المنتهية بـ -ieren تأخذ -iert دون ge-.",
            "en": "probieren → probiert. Verbs ending in -ieren form their participle with -iert and no ge-."
          }
        },
        {
          "id": "58",
          "context": {
            "fr": "Formation de reparieren",
            "de": "Bildung von reparieren",
            "ar": "تكوين reparieren",
            "en": "Formation of reparieren"
          },
          "german": "reparieren → repariert",
          "explanation": {
            "fr": "reparieren → repariert. Les verbes en -ieren forment leur participe en -iert sans ge-, même si le verbe est long.",
            "de": "reparieren → repariert. Verben auf -ieren bilden das Partizip auf -iert ohne ge-.",
            "ar": "reparieren → repariert. الأفعال المنتهية بـ -ieren تأخذ -iert دون ge-.",
            "en": "reparieren → repariert. Verbs ending in -ieren form their participle with -iert and no ge-."
          }
        },
        {
          "id": "59",
          "context": {
            "fr": "Formation de gratulieren",
            "de": "Bildung von gratulieren",
            "ar": "تكوين gratulieren",
            "en": "Formation of gratulieren"
          },
          "german": "gratulieren → gratuliert",
          "explanation": {
            "fr": "gratulieren → gratuliert. Les verbes en -ieren forment leur participe en -iert sans ge-, même si le verbe est long.",
            "de": "gratulieren → gratuliert. Verben auf -ieren bilden das Partizip auf -iert ohne ge-.",
            "ar": "gratulieren → gratuliert. الأفعال المنتهية بـ -ieren تأخذ -iert دون ge-.",
            "en": "gratulieren → gratuliert. Verbs ending in -ieren form their participle with -iert and no ge-."
          }
        },
        {
          "id": "60",
          "context": {
            "fr": "Formation de telefonieren",
            "de": "Bildung von telefonieren",
            "ar": "تكوين telefonieren",
            "en": "Formation of telefonieren"
          },
          "german": "telefonieren → telefoniert",
          "explanation": {
            "fr": "telefonieren → telefoniert. Les verbes en -ieren forment leur participe en -iert sans ge-, même si le verbe est long.",
            "de": "telefonieren → telefoniert. Verben auf -ieren bilden das Partizip auf -iert ohne ge-.",
            "ar": "telefonieren → telefoniert. الأفعال المنتهية بـ -ieren تأخذ -iert دون ge-.",
            "en": "telefonieren → telefoniert. Verbs ending in -ieren form their participle with -iert and no ge-."
          }
        },
        {
          "id": "61",
          "context": {
            "fr": "Formation de denken",
            "de": "Bildung von denken",
            "ar": "تكوين denken",
            "en": "Formation of denken"
          },
          "german": "denken → gedacht",
          "explanation": {
            "fr": "denken → gedacht. Les verbes mixtes changent de radical mais prennent -t comme les réguliers. Il faut mémoriser ces formes.",
            "de": "denken → gedacht. Gemischte Verben ändern den Stamm, haben aber -t wie schwache Verben. Diese Formen muss man lernen.",
            "ar": "denken → gedacht. الأفعال المختلطة تغير الجذر وتأخذ -t مثل المنتظمة. يجب حفظها.",
            "en": "denken → gedacht. Mixed verbs change their stem but take -t like weak verbs. Memorize these forms."
          }
        },
        {
          "id": "62",
          "context": {
            "fr": "Formation de bringen",
            "de": "Bildung von bringen",
            "ar": "تكوين bringen",
            "en": "Formation of bringen"
          },
          "german": "bringen → gebracht",
          "explanation": {
            "fr": "bringen → gebracht. Les verbes mixtes changent de radical mais prennent -t comme les réguliers. Il faut mémoriser ces formes.",
            "de": "bringen → gebracht. Gemischte Verben ändern den Stamm, haben aber -t wie schwache Verben. Diese Formen muss man lernen.",
            "ar": "bringen → gebracht. الأفعال المختلطة تغير الجذر وتأخذ -t مثل المنتظمة. يجب حفظها.",
            "en": "bringen → gebracht. Mixed verbs change their stem but take -t like weak verbs. Memorize these forms."
          }
        },
        {
          "id": "63",
          "context": {
            "fr": "Formation de kennen",
            "de": "Bildung von kennen",
            "ar": "تكوين kennen",
            "en": "Formation of kennen"
          },
          "german": "kennen → gekannt",
          "explanation": {
            "fr": "kennen → gekannt. Les verbes mixtes changent de radical mais prennent -t comme les réguliers. Il faut mémoriser ces formes.",
            "de": "kennen → gekannt. Gemischte Verben ändern den Stamm, haben aber -t wie schwache Verben. Diese Formen muss man lernen.",
            "ar": "kennen → gekannt. الأفعال المختلطة تغير الجذر وتأخذ -t مثل المنتظمة. يجب حفظها.",
            "en": "kennen → gekannt. Mixed verbs change their stem but take -t like weak verbs. Memorize these forms."
          }
        },
        {
          "id": "64",
          "context": {
            "fr": "Formation de wissen",
            "de": "Bildung von wissen",
            "ar": "تكوين wissen",
            "en": "Formation of wissen"
          },
          "german": "wissen → gewusst",
          "explanation": {
            "fr": "wissen → gewusst. Les verbes mixtes changent de radical mais prennent -t comme les réguliers. Il faut mémoriser ces formes.",
            "de": "wissen → gewusst. Gemischte Verben ändern den Stamm, haben aber -t wie schwache Verben. Diese Formen muss man lernen.",
            "ar": "wissen → gewusst. الأفعال المختلطة تغير الجذر وتأخذ -t مثل المنتظمة. يجب حفظها.",
            "en": "wissen → gewusst. Mixed verbs change their stem but take -t like weak verbs. Memorize these forms."
          }
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "errors",
      "title": {
        "fr": "Pièges",
        "de": "Fehler",
        "ar": "أخطاء",
        "en": "Mistakes"
      },
      "text": {
        "fr": "✗ geverkauft → verkauft : ver- est inséparable. ✗ getelefoniert → telefoniert : -ieren exclut ge-. ✗ geaufstanden → aufgestanden : ge- suit auf-. ✗ gebringt → gebracht : verbe mixte.",
        "de": "✗ geverkauft → verkauft: ver- ist untrennbar. ✗ getelefoniert → telefoniert: -ieren ohne ge-. ✗ geaufstanden → aufgestanden: ge- nach auf-. ✗ gebringt → gebracht: gemischtes Verb.",
        "ar": "geverkauft خطأ والصحيح verkauft. getelefoniert خطأ والصحيح telefoniert. geaufstanden خطأ والصحيح aufgestanden. gebringt خطأ والصحيح gebracht.",
        "en": "✗ geverkauft → verkauft: inseparable ver-. ✗ getelefoniert → telefoniert: no ge- with -ieren. ✗ geaufstanden → aufgestanden: ge- follows auf-. ✗ gebringt → gebracht: mixed verb."
      }
    }
  ]
}

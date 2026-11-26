import type { LessonDefinition } from '@/lib/grammar/types'
export const lesson: LessonDefinition = {
  "id": "kapitel-21-lesson",
  "title": {
    "fr": "J’achète un ballon à mon fils",
    "de": "Ich kaufe meinem Sohn einen Ball",
    "ar": "أشتري كرة لابني",
    "en": "I buy my son a ball"
  },
  "subtitle": {
    "fr": "Verbes à deux compléments",
    "de": "Verben mit Akkusativ und Dativ",
    "ar": "أفعال بمفعولين",
    "en": "Verbs with two objects"
  },
  "objective": {
    "fr": "Le sujet au nominatif commande la conjugaison. Avec geben, schenken, zeigen ou bringen, le destinataire est au datif (wem?) et la chose transférée à l’accusatif (was?). Le destinataire peut aussi être une institution. Certains verbes comme lachen n’exigent aucun objet.",
    "de": "Das Subjekt im Nominativ bestimmt die Verbform. Bei geben, schenken, zeigen oder bringen steht der Empfänger im Dativ (wem?) und die Sache im Akkusativ (was?). Auch Institutionen können Empfänger sein. Lachen braucht kein Objekt.",
    "ar": "الفاعل في النوميناتيف يحدد تصريف الفعل. مع geben وschenken وzeigen وbringen يكون المتلقي في الداتيف والشيء في الأكوزاتيف. قد يكون المتلقي مؤسسة. lachen لا يحتاج مفعولا.",
    "en": "The nominative subject controls agreement. With geben, schenken, zeigen or bringen, the recipient is dative (wem?) and the transferred thing accusative (was?). Institutions can be recipients too. Lachen needs no object."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "intro",
      "title": {
        "fr": "Comprendre les trois cas",
        "de": "Die drei Kasus verstehen",
        "ar": "فهم الحالات الثلاث",
        "en": "Understanding the three cases"
      },
      "text": {
        "fr": "Le sujet au nominatif commande la conjugaison. Avec geben, schenken, zeigen ou bringen, le destinataire est au datif (wem?) et la chose transférée à l’accusatif (was?). Le destinataire peut aussi être une institution. Certains verbes comme lachen n’exigent aucun objet.",
        "de": "Das Subjekt im Nominativ bestimmt die Verbform. Bei geben, schenken, zeigen oder bringen steht der Empfänger im Dativ (wem?) und die Sache im Akkusativ (was?). Auch Institutionen können Empfänger sein. Lachen braucht kein Objekt.",
        "ar": "الفاعل في النوميناتيف يحدد تصريف الفعل. مع geben وschenken وzeigen وbringen يكون المتلقي في الداتيف والشيء في الأكوزاتيف. قد يكون المتلقي مؤسسة. lachen لا يحتاج مفعولا.",
        "en": "The nominative subject controls agreement. With geben, schenken, zeigen or bringen, the recipient is dative (wem?) and the transferred thing accusative (was?). Institutions can be recipients too. Lachen needs no object."
      }
    },
    {
      "type": "table",
      "id": "cases",
      "title": {
        "fr": "Verbes à deux compléments",
        "de": "Verben mit Akkusativ und Dativ",
        "ar": "أفعال بمفعولين",
        "en": "Verbs with two objects"
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
          "fr": "Neutrum",
          "de": "Neutrum",
          "ar": "Neutrum",
          "en": "Neutrum"
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
          "id": "0",
          "cells": [
            {
              "fr": "Nominativ",
              "de": "Nominativ",
              "ar": "Nominativ",
              "en": "Nominativ"
            },
            {
              "fr": "der/ein",
              "de": "der/ein",
              "ar": "der/ein",
              "en": "der/ein"
            },
            {
              "fr": "das/ein",
              "de": "das/ein",
              "ar": "das/ein",
              "en": "das/ein"
            },
            {
              "fr": "die/eine",
              "de": "die/eine",
              "ar": "die/eine",
              "en": "die/eine"
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
          "id": "1",
          "cells": [
            {
              "fr": "Akkusativ",
              "de": "Akkusativ",
              "ar": "Akkusativ",
              "en": "Akkusativ"
            },
            {
              "fr": "den/einen",
              "de": "den/einen",
              "ar": "den/einen",
              "en": "den/einen"
            },
            {
              "fr": "das/ein",
              "de": "das/ein",
              "ar": "das/ein",
              "en": "das/ein"
            },
            {
              "fr": "die/eine",
              "de": "die/eine",
              "ar": "die/eine",
              "en": "die/eine"
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
          "id": "2",
          "cells": [
            {
              "fr": "Dativ",
              "de": "Dativ",
              "ar": "Dativ",
              "en": "Dativ"
            },
            {
              "fr": "dem/einem",
              "de": "dem/einem",
              "ar": "dem/einem",
              "en": "dem/einem"
            },
            {
              "fr": "dem/einem",
              "de": "dem/einem",
              "ar": "dem/einem",
              "en": "dem/einem"
            },
            {
              "fr": "der/einer",
              "de": "der/einer",
              "ar": "der/einer",
              "en": "der/einer"
            },
            {
              "fr": "den (+n)",
              "de": "den (+n)",
              "ar": "den (+n)",
              "en": "den (+n)"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "order",
      "title": {
        "fr": "Ordre neutre",
        "de": "Neutrale Wortstellung",
        "ar": "الترتيب المحايد",
        "en": "Neutral word order"
      },
      "text": {
        "fr": "Deux noms : datif avant accusatif (Ich gebe dem Kind das Buch). Un pronom non accentué précède généralement le nom (Ich gebe es dem Kind / Ich gebe ihm das Buch). Deux pronoms non accentués : accusatif avant datif (Ich gebe es ihm). Le verbe conjugué reste en deuxième position dans une principale déclarative.",
        "de": "Zwei Nomen: Dativ vor Akkusativ. Ein unbetontes Pronomen steht meist vor dem Nomen. Zwei unbetonte Pronomen: Akkusativ vor Dativ. Das finite Verb steht im Aussagesatz an zweiter Stelle.",
        "ar": "اسمان: الداتيف قبل الأكوزاتيف. الضمير غير المؤكد يسبق الاسم غالبا. ضميران: الأكوزاتيف قبل الداتيف. الفعل المصرف في المرتبة الثانية في الجملة الخبرية.",
        "en": "Two nouns: dative before accusative. One unstressed pronoun usually precedes the noun. Two unstressed pronouns: accusative before dative. The finite verb is second in a declarative main clause."
      }
    },
    {
      "type": "examples",
      "id": "examples",
      "title": {
        "fr": "20 exemples commentés",
        "de": "20 Beispiele",
        "ar": "٢٠ مثالا",
        "en": "20 annotated examples"
      },
      "items": [
        {
          "id": "0",
          "german": "Ich gebe dem Kind das Buch.",
          "context": {
            "fr": "Je donne le livre à l’enfant.",
            "de": "Ich gebe dem Kind das Buch.",
            "ar": "أعطي الطفل الكتاب.",
            "en": "I give the child the book."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "1",
          "german": "Ich schenke meiner Mutter Blumen.",
          "context": {
            "fr": "J’offre des fleurs à ma mère.",
            "de": "Ich schenke meiner Mutter Blumen.",
            "ar": "أهدي أمي زهورا.",
            "en": "I give my mother flowers."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "2",
          "german": "Er schreibt seiner Freundin eine E-Mail.",
          "context": {
            "fr": "Il écrit un courriel à son amie.",
            "de": "Er schreibt seiner Freundin eine E-Mail.",
            "ar": "يكتب لصديقته رسالة.",
            "en": "He writes his girlfriend an email."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "3",
          "german": "Wir zeigen den Gästen das Haus.",
          "context": {
            "fr": "Nous montrons la maison aux invités.",
            "de": "Wir zeigen den Gästen das Haus.",
            "ar": "نري الضيوف المنزل.",
            "en": "We show the guests the house."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "4",
          "german": "Sie kauft ihrem Sohn einen Ball.",
          "context": {
            "fr": "Elle achète un ballon à son fils.",
            "de": "Sie kauft ihrem Sohn einen Ball.",
            "ar": "تشتري كرة لابنها.",
            "en": "She buys her son a ball."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "5",
          "german": "Ich verkaufe meinem Freund das Auto.",
          "context": {
            "fr": "Je vends la voiture à mon ami.",
            "de": "Ich verkaufe meinem Freund das Auto.",
            "ar": "أبيع سيارتي لصديقي.",
            "en": "I sell my friend the car."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "6",
          "german": "Er serviert den Gästen Kaffee.",
          "context": {
            "fr": "Il sert du café aux invités.",
            "de": "Er serviert den Gästen Kaffee.",
            "ar": "يقدم القهوة للضيوف.",
            "en": "He serves the guests coffee."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "7",
          "german": "Sie kocht dem Kind Suppe.",
          "context": {
            "fr": "Elle prépare une soupe à l’enfant.",
            "de": "Sie kocht dem Kind Suppe.",
            "ar": "تطبخ الحساء للطفل.",
            "en": "She cooks soup for the child."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "8",
          "german": "Ich bringe dir Wasser.",
          "context": {
            "fr": "Je t’apporte de l’eau.",
            "de": "Ich bringe dir Wasser.",
            "ar": "أحضر لك الماء.",
            "en": "I bring you water."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "9",
          "german": "Ich erkläre Ihnen die Regel.",
          "context": {
            "fr": "Je vous explique la règle.",
            "de": "Ich erkläre Ihnen die Regel.",
            "ar": "أشرح لحضرتك القاعدة.",
            "en": "I explain the rule to you."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "10",
          "german": "Ich gebe es ihm.",
          "context": {
            "fr": "Je le lui donne.",
            "de": "Ich gebe es ihm.",
            "ar": "أعطيه إياه.",
            "en": "I give it to him."
          },
          "explanation": {
            "fr": "es (accusatif) précède ihm (datif).",
            "de": "es (Akkusativ) vor ihm (Dativ).",
            "ar": "es أكوزاتيف قبل ihm داتيف.",
            "en": "es (accusative) precedes ihm (dative)."
          }
        },
        {
          "id": "11",
          "german": "Ich gebe ihm das Buch.",
          "context": {
            "fr": "Je lui donne le livre.",
            "de": "Ich gebe ihm das Buch.",
            "ar": "أعطيه الكتاب.",
            "en": "I give him the book."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "12",
          "german": "Ich gebe es dem Kind.",
          "context": {
            "fr": "Je le donne à l’enfant.",
            "de": "Ich gebe es dem Kind.",
            "ar": "أعطيه للطفل.",
            "en": "I give it to the child."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "13",
          "german": "Heute bringt der Chef den Gästen das Frühstück.",
          "context": {
            "fr": "Aujourd’hui le chef apporte le petit déjeuner aux invités.",
            "de": "Heute bringt der Chef den Gästen das Frühstück.",
            "ar": "اليوم يقدم المدير الفطور للضيوف.",
            "en": "Today the boss brings the guests breakfast."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "14",
          "german": "Den Gästen bringt er Tee.",
          "context": {
            "fr": "Aux invités, il apporte du thé.",
            "de": "Den Gästen bringt er Tee.",
            "ar": "للضيوف يحضر الشاي.",
            "en": "He brings tea to the guests."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
          }
        },
        {
          "id": "15",
          "german": "Ich trinke einen Saft.",
          "context": {
            "fr": "Je bois un jus.",
            "de": "Ich trinke einen Saft.",
            "ar": "أشرب عصيرا.",
            "en": "I drink juice."
          },
          "explanation": {
            "fr": "Le verbe prend un objet à l’accusatif, sans destinataire.",
            "de": "Das Verb hat ein Akkusativobjekt ohne Empfänger.",
            "ar": "الفعل يأخذ مفعولا في الأكوزاتيف دون متلق.",
            "en": "The verb takes an accusative object without a recipient."
          }
        },
        {
          "id": "16",
          "german": "Ich besuche meinen Vater.",
          "context": {
            "fr": "Je rends visite à mon père.",
            "de": "Ich besuche meinen Vater.",
            "ar": "أزور أبي.",
            "en": "I visit my father."
          },
          "explanation": {
            "fr": "Le verbe prend un objet à l’accusatif, sans destinataire.",
            "de": "Das Verb hat ein Akkusativobjekt ohne Empfänger.",
            "ar": "الفعل يأخذ مفعولا في الأكوزاتيف دون متلق.",
            "en": "The verb takes an accusative object without a recipient."
          }
        },
        {
          "id": "17",
          "german": "Das Kind schläft.",
          "context": {
            "fr": "L’enfant dort.",
            "de": "Das Kind schläft.",
            "ar": "الطفل ينام.",
            "en": "The child sleeps."
          },
          "explanation": {
            "fr": "Sujet seul au nominatif ; aucun objet requis.",
            "de": "Nur Subjekt im Nominativ; kein Objekt nötig.",
            "ar": "فاعل في النوميناتيف دون مفعول.",
            "en": "Nominative subject only; no object required."
          }
        },
        {
          "id": "18",
          "german": "Die Sonne scheint.",
          "context": {
            "fr": "Le soleil brille.",
            "de": "Die Sonne scheint.",
            "ar": "الشمس تشرق.",
            "en": "The sun shines."
          },
          "explanation": {
            "fr": "Sujet seul au nominatif ; aucun objet requis.",
            "de": "Nur Subjekt im Nominativ; kein Objekt nötig.",
            "ar": "فاعل في النوميناتيف دون مفعول.",
            "en": "Nominative subject only; no object required."
          }
        },
        {
          "id": "19",
          "german": "Ich spende dem Verein Geld.",
          "context": {
            "fr": "Je donne de l’argent à l’association.",
            "de": "Ich spende dem Verein Geld.",
            "ar": "أتبرع بالمال للجمعية.",
            "en": "I donate money to the association."
          },
          "explanation": {
            "fr": "Identifiez le destinataire au datif et la chose à l’accusatif.",
            "de": "Empfänger im Dativ, Sache im Akkusativ.",
            "ar": "المتلقي في الداتيف والشيء في الأكوزاتيف.",
            "en": "Identify the dative recipient and accusative thing."
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
        "en": "Common errors"
      },
      "text": {
        "fr": "✗ Ich gebe den Kind das Buch. → Ich gebe dem Kind das Buch. Kind est neutre, datif dem. ✗ Ich kaufe meinem Sohn ein Ball. → einen Ball (masculin accusatif). ✗ Ich besuche meinem Vater. → meinen Vater : besuchen exige l’accusatif.",
        "de": "Kind ist neutral: dem Kind. Ball ist maskulin: einen Ball. Besuchen verlangt Akkusativ: meinen Vater.",
        "ar": "Kind محايد: dem Kind. Ball مذكر في الأكوزاتيف: einen Ball. besuchen يتطلب الأكوزاتيف: meinen Vater.",
        "en": "Kind is neuter: dem Kind. Ball is masculine accusative: einen Ball. Besuchen takes accusative: meinen Vater."
      }
    },
    {
      "type": "paragraph",
      "id": "dialog",
      "title": {
        "fr": "Dialogue et résumé",
        "de": "Dialog und Merksatz",
        "ar": "حوار وملخص",
        "en": "Dialogue and summary"
      },
      "text": {
        "fr": "A: Wem gibst du das Buch? B: Meinem Bruder. A: Was gibst du ihm? B: Das Buch. A: Gibst du es ihm heute? B: Ja. Retenez wem = datif, wen/was = accusatif, wer/was = nominatif selon la fonction.",
        "de": "A: Wem gibst du das Buch? B: Meinem Bruder. A: Was gibst du ihm? B: Das Buch. A: Gibst du es ihm heute? B: Ja. Merke: wem = Dativ, wen/was = Akkusativ, wer/was = Nominativ je nach Funktion.",
        "ar": "A: Wem gibst du das Buch? B: Meinem Bruder. A: Was gibst du ihm? B: Das Buch. A: Gibst du es ihm heute? B: Ja. wem للداتيف وwen/was للأكوزاتيف وwer/was للفاعل حسب الوظيفة.",
        "en": "A: Wem gibst du das Buch? B: Meinem Bruder. A: Was gibst du ihm? B: Das Buch. A: Gibst du es ihm heute? B: Ja. Remember wem = dative, wen/was = accusative, wer/was = nominative depending on function."
      }
    }
  ]
}

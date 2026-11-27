import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  "id": "kapitel-13-lesson",
  "title": {
    "fr": "Les hommes, les femmes, les bébés",
    "de": "Die Männer, die Frauen, die Babys",
    "ar": "الرجال والنساء والأطفال الرضّع",
    "en": "The men, the women, the babies"
  },
  "subtitle": {
    "fr": "Pluriel des noms",
    "de": "Nomen: Plural",
    "ar": "جمع الأسماء",
    "en": "Noun plurals"
  },
  "objective": {
    "fr": "Reconnaître et mémoriser les formes plurielles et les utiliser dans des phrases.",
    "de": "Pluralformen erkennen, lernen und in Sätzen verwenden.",
    "ar": "التعرف على صيغ الجمع وحفظها واستعمالها في الجمل.",
    "en": "Recognize and learn plural forms and use them in sentences."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "premium-theorie-1",
      "title": {
        "fr": "Formation du pluriel",
        "de": "Pluralbildung",
        "ar": "تكوين الجمع",
        "en": "Plural formation"
      },
      "text": {
        "fr": "Apprends chaque nom avec son article au singulier et sa forme plurielle : der Mann – die Männer. Tous les noms au pluriel ont die au nominatif et à l’accusatif. Les terminaisons -(e)n, -er, -e, -s ou l’absence de terminaison sont des familles, pas une méthode infaillible pour deviner.",
        "de": "Lerne jedes Nomen mit Singularartikel und Plural: der Mann – die Männer. Im Nominativ und Akkusativ lautet der bestimmte Pluralartikel immer die. Die Endungen -(e)n, -er, -e, -s und die Nullendung sind Gruppen, keine unfehlbare Vorhersage.",
        "ar": "احفظ كل اسم مع أداة المفرد وصيغة الجمع: der Mann – die Männer. أداة التعريف في جمع الرفع والنصب هي die. لواحق الجمع مجموعات تساعد على التعلم وليست قواعد تخمين مضمونة.",
        "en": "Learn every noun with its singular article and plural: der Mann – die Männer. The definite plural article is die in nominative and accusative. The endings are families rather than infallible prediction rules."
      }
    },
    {
      "type": "table",
      "id": "premium-tabelle-2",
      "title": {
        "fr": "Groupes de pluriels",
        "de": "Pluralgruppen",
        "ar": "أنماط الجمع",
        "en": "Plural groups"
      },
      "headers": [
        {
          "fr": "Terminaison",
          "de": "Endung",
          "ar": "اللاحقة",
          "en": "Ending"
        },
        {
          "fr": "Singulier",
          "de": "Singular",
          "ar": "المفرد",
          "en": "Singular"
        },
        {
          "fr": "Pluriel",
          "de": "Plural",
          "ar": "الجمع",
          "en": "Plural"
        }
      ],
      "rows": [
        {
          "id": "premium-tabelle-2-1",
          "cells": [
            {
              "fr": "-(e)n",
              "de": "-(e)n",
              "ar": "-(e)n",
              "en": "-(e)n"
            },
            {
              "fr": "die Frau / die Übung",
              "de": "die Frau / die Übung",
              "ar": "die Frau / die Übung",
              "en": "die Frau / die Übung"
            },
            {
              "fr": "die Frauen / die Übungen",
              "de": "die Frauen / die Übungen",
              "ar": "die Frauen / die Übungen",
              "en": "die Frauen / die Übungen"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-2",
          "cells": [
            {
              "fr": "-innen",
              "de": "-innen",
              "ar": "-innen",
              "en": "-innen"
            },
            {
              "fr": "die Kundin",
              "de": "die Kundin",
              "ar": "die Kundin",
              "en": "die Kundin"
            },
            {
              "fr": "die Kundinnen",
              "de": "die Kundinnen",
              "ar": "die Kundinnen",
              "en": "die Kundinnen"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-3",
          "cells": [
            {
              "fr": "-er",
              "de": "-er",
              "ar": "-er",
              "en": "-er"
            },
            {
              "fr": "das Kind / das Buch",
              "de": "das Kind / das Buch",
              "ar": "das Kind / das Buch",
              "en": "das Kind / das Buch"
            },
            {
              "fr": "die Kinder / die Bücher",
              "de": "die Kinder / die Bücher",
              "ar": "die Kinder / die Bücher",
              "en": "die Kinder / die Bücher"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-4",
          "cells": [
            {
              "fr": "-e",
              "de": "-e",
              "ar": "-e",
              "en": "-e"
            },
            {
              "fr": "das Brot / der Stuhl",
              "de": "das Brot / der Stuhl",
              "ar": "das Brot / der Stuhl",
              "en": "das Brot / der Stuhl"
            },
            {
              "fr": "die Brote / die Stühle",
              "de": "die Brote / die Stühle",
              "ar": "die Brote / die Stühle",
              "en": "die Brote / die Stühle"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-5",
          "cells": [
            {
              "fr": "–",
              "de": "–",
              "ar": "–",
              "en": "–"
            },
            {
              "fr": "der Sessel / der Vater",
              "de": "der Sessel / der Vater",
              "ar": "der Sessel / der Vater",
              "en": "der Sessel / der Vater"
            },
            {
              "fr": "die Sessel / die Väter",
              "de": "die Sessel / die Väter",
              "ar": "die Sessel / die Väter",
              "en": "die Sessel / die Väter"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-6",
          "cells": [
            {
              "fr": "-s",
              "de": "-s",
              "ar": "-s",
              "en": "-s"
            },
            {
              "fr": "das Taxi",
              "de": "das Taxi",
              "ar": "das Taxi",
              "en": "das Taxi"
            },
            {
              "fr": "die Taxis",
              "de": "die Taxis",
              "ar": "die Taxis",
              "en": "die Taxis"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-7",
          "cells": [
            {
              "fr": "Forme particulière",
              "de": "Sonderform",
              "ar": "صيغة خاصة",
              "en": "Special form"
            },
            {
              "fr": "das Museum",
              "de": "das Museum",
              "ar": "das Museum",
              "en": "das Museum"
            },
            {
              "fr": "die Museen",
              "de": "die Museen",
              "ar": "die Museen",
              "en": "die Museen"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-theorie-3",
      "title": {
        "fr": "Tréma et terminaisons",
        "de": "Umlaut und Endungen",
        "ar": "تغيّر حرف العلة (Umlaut) والنهايات",
        "en": "Umlaut and endings"
      },
      "text": {
        "fr": "a, o, u et au peuvent devenir ä, ö, ü et äu au pluriel : Mann–Männer, Buch–Bücher, Haus–Häuser. Les noms en -chen gardent leur forme : Brötchen–Brötchen. Les noms en -ung, -heit, -keit ou -ion prennent normalement -en.",
        "de": "a, o, u und au können im Plural zu ä, ö, ü und äu werden: Mann–Männer, Buch–Bücher, Haus–Häuser. Nomen auf -chen bleiben unverändert. Nomen auf -ung, -heit, -keit oder -ion erhalten normalerweise -en.",
        "ar": "قد تصبح a وo وu وau في الجمع ä وö وü وäu. الأسماء المنتهية بـ -chen لا تتغير. وتأخذ الأسماء المنتهية بـ -ung و-heit و-keit و-ion عادة -en.",
        "en": "a, o, u and au can change to ä, ö, ü and äu. Nouns ending in -chen remain unchanged. Nouns ending in -ung, -heit, -keit or -ion normally take -en."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-theorie-4",
      "title": {
        "fr": "Noms indénombrables",
        "de": "Nicht zählbare Nomen",
        "ar": "الأسماء غير المعدودة",
        "en": "Uncountable nouns"
      },
      "text": {
        "fr": "Wasser, Milch et Obst s’emploient normalement sans pluriel quand on désigne une quantité de matière ou un ensemble. Certaines formes pluriel existent pour des types ou des sens spéciaux. Eltern, Leute et Ferien s’emploient couramment au pluriel.",
        "de": "Wasser, Milch und Obst stehen bei Stoff- oder Sammelbedeutung normalerweise ohne Plural. Besondere Sorten oder Bedeutungen können andere Formen erlauben. Eltern, Leute und Ferien werden gewöhnlich im Plural gebraucht.",
        "ar": "تستعمل Wasser وMilch وObst عادة دون جمع عندما تدل على مادة أو مجموعة. وقد توجد صيغ جمع لمعانٍ أو أنواع خاصة. وتستعمل Eltern وLeute وFerien عادة في الجمع.",
        "en": "Wasser, Milch and Obst normally have no plural in mass or collective usage. Special meanings or varieties may permit other forms. Eltern, Leute and Ferien are ordinarily plural."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-theorie-5",
      "title": {
        "fr": "Le pluriel dans la phrase",
        "de": "Plural im Satz",
        "ar": "الجمع في الجملة",
        "en": "Plural in sentences"
      },
      "text": {
        "fr": "Le pluriel change souvent aussi le verbe : Das Kind spielt → Die Kinder spielen. Avec un nombre, il n’y a pas d’article indéfini pluriel : zwei Kinder. Au datif, on ajoute souvent -n au nom pluriel s’il ne se termine pas déjà en -n ou -s : mit den Kindern, mais mit den Autos.",
        "de": "Mit dem Plural ändert sich oft auch das Verb: Das Kind spielt → Die Kinder spielen. Es gibt keinen unbestimmten Pluralartikel: zwei Kinder. Im Dativ kommt oft -n hinzu, wenn der Plural nicht auf -n oder -s endet: mit den Kindern, aber mit den Autos.",
        "ar": "يتغير الفعل غالباً مع الجمع: Das Kind spielt → Die Kinder spielen. لا توجد أداة تنكير للجمع: zwei Kinder. وفي الداتيف تضاف غالباً -n إذا لم ينته الجمع بـ -n أو -s: mit den Kindern، ولكن mit den Autos.",
        "en": "Plural often changes the verb too: Das Kind spielt → Die Kinder spielen. There is no indefinite plural article: zwei Kinder. Dative plural often adds -n unless the form already ends in -n or -s: mit den Kindern, but mit den Autos."
      }
    },
    {
      "type": "examples",
      "id": "premium-beispiele-1",
      "title": {
        "fr": "Terminaisons -(e)n, -innen et -er",
        "de": "-(e)n, -innen und -er",
        "ar": "النهايات -(e)n و -innen و -er",
        "en": "Endings -(e)n, -innen and -er"
      },
      "items": [
        {
          "id": "premium-ex-01",
          "german": "Die Frauen warten vor der Tür.",
          "context": {
            "fr": "Les femmes attendent devant la porte.",
            "de": "Die Frauen warten vor der Tür.",
            "ar": "تنتظر النساء أمام الباب.",
            "en": "The women are waiting outside the door."
          },
          "explanation": {
            "fr": "die Frau → die Frauen — Le pluriel se forme avec -(e)n. Cette terminaison est particulièrement fréquente pour les noms féminins ; le nom entier doit être appris.",
            "de": "die Frau → die Frauen — Der Plural wird mit -(e)n gebildet. Diese Endung ist besonders bei femininen Nomen häufig; lerne die ganze Form.",
            "ar": "die Frau → die Frauen — يتشكل الجمع بإضافة -(e)n، وهي لاحقة شائعة جداً في الأسماء المؤنثة. احفظ صيغة الجمع كاملة.",
            "en": "die Frau → die Frauen — The plural uses -(e)n, especially common with feminine nouns. Learn the complete plural form."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Die Übungen sind leicht.",
          "context": {
            "fr": "Les exercices sont faciles.",
            "de": "Die Übungen sind leicht.",
            "ar": "التمارين سهلة.",
            "en": "The exercises are easy."
          },
          "explanation": {
            "fr": "die Übung → die Übungen — Le pluriel se forme avec -(e)n. Cette terminaison est particulièrement fréquente pour les noms féminins ; le nom entier doit être appris.",
            "de": "die Übung → die Übungen — Der Plural wird mit -(e)n gebildet. Diese Endung ist besonders bei femininen Nomen häufig; lerne die ganze Form.",
            "ar": "die Übung → die Übungen — يتشكل الجمع بإضافة -(e)n، وهي لاحقة شائعة جداً في الأسماء المؤنثة. احفظ صيغة الجمع كاملة.",
            "en": "die Übung → die Übungen — The plural uses -(e)n, especially common with feminine nouns. Learn the complete plural form."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Ich kaufe zwei Taschen.",
          "context": {
            "fr": "J’achète deux sacs.",
            "de": "Ich kaufe zwei Taschen.",
            "ar": "أشتري حقيبتين.",
            "en": "I buy two bags."
          },
          "explanation": {
            "fr": "die Tasche → die Taschen — Le pluriel se forme avec -(e)n. Cette terminaison est particulièrement fréquente pour les noms féminins ; le nom entier doit être appris.",
            "de": "die Tasche → die Taschen — Der Plural wird mit -(e)n gebildet. Diese Endung ist besonders bei femininen Nomen häufig; lerne die ganze Form.",
            "ar": "die Tasche → die Taschen — يتشكل الجمع بإضافة -(e)n، وهي لاحقة شائعة جداً في الأسماء المؤنثة. احفظ صيغة الجمع كاملة.",
            "en": "die Tasche → die Taschen — The plural uses -(e)n, especially common with feminine nouns. Learn the complete plural form."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Die Zeitungen liegen auf dem Tisch.",
          "context": {
            "fr": "Les journaux sont sur la table.",
            "de": "Die Zeitungen liegen auf dem Tisch.",
            "ar": "الصحف على الطاولة.",
            "en": "The newspapers are on the table."
          },
          "explanation": {
            "fr": "die Zeitung → die Zeitungen — Le pluriel se forme avec -(e)n. Cette terminaison est particulièrement fréquente pour les noms féminins ; le nom entier doit être appris.",
            "de": "die Zeitung → die Zeitungen — Der Plural wird mit -(e)n gebildet. Diese Endung ist besonders bei femininen Nomen häufig; lerne die ganze Form.",
            "ar": "die Zeitung → die Zeitungen — يتشكل الجمع بإضافة -(e)n، وهي لاحقة شائعة جداً في الأسماء المؤنثة. احفظ صيغة الجمع كاملة.",
            "en": "die Zeitung → die Zeitungen — The plural uses -(e)n, especially common with feminine nouns. Learn the complete plural form."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Wir brauchen mehr Informationen.",
          "context": {
            "fr": "Nous avons besoin de plus d’informations.",
            "de": "Wir brauchen mehr Informationen.",
            "ar": "نحتاج إلى مزيد من المعلومات.",
            "en": "We need more information."
          },
          "explanation": {
            "fr": "die Information → die Informationen — Le pluriel se forme avec -(e)n. Cette terminaison est particulièrement fréquente pour les noms féminins ; le nom entier doit être appris.",
            "de": "die Information → die Informationen — Der Plural wird mit -(e)n gebildet. Diese Endung ist besonders bei femininen Nomen häufig; lerne die ganze Form.",
            "ar": "die Information → die Informationen — يتشكل الجمع بإضافة -(e)n، وهي لاحقة شائعة جداً في الأسماء المؤنثة. احفظ صيغة الجمع كاملة.",
            "en": "die Information → die Informationen — The plural uses -(e)n, especially common with feminine nouns. Learn the complete plural form."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Die Kundinnen bezahlen an der Kasse.",
          "context": {
            "fr": "Les clientes paient à la caisse.",
            "de": "Die Kundinnen bezahlen an der Kasse.",
            "ar": "تدفع الزبونات عند الصندوق.",
            "en": "The female customers pay at the till."
          },
          "explanation": {
            "fr": "die Kundin → die Kundinnen — Les noms féminins de personnes en -in prennent -innen au pluriel, avec deux n.",
            "de": "die Kundin → die Kundinnen — Feminine Personenbezeichnungen auf -in erhalten im Plural -innen mit zwei n.",
            "ar": "die Kundin → die Kundinnen — تأخذ أسماء الأشخاص المؤنثة المنتهية بـ -in اللاحقة -innen بحرفي n.",
            "en": "die Kundin → die Kundinnen — Feminine person nouns ending in -in take -innen in the plural, with double n."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Die Lehrerinnen sprechen Deutsch.",
          "context": {
            "fr": "Les enseignantes parlent allemand.",
            "de": "Die Lehrerinnen sprechen Deutsch.",
            "ar": "تتحدث المعلمات الألمانية.",
            "en": "The female teachers speak German."
          },
          "explanation": {
            "fr": "die Lehrerin → die Lehrerinnen — Les noms féminins de personnes en -in prennent -innen au pluriel, avec deux n.",
            "de": "die Lehrerin → die Lehrerinnen — Feminine Personenbezeichnungen auf -in erhalten im Plural -innen mit zwei n.",
            "ar": "die Lehrerin → die Lehrerinnen — تأخذ أسماء الأشخاص المؤنثة المنتهية بـ -in اللاحقة -innen بحرفي n.",
            "en": "die Lehrerin → die Lehrerinnen — Feminine person nouns ending in -in take -innen in the plural, with double n."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "Die Kinder spielen im Garten.",
          "context": {
            "fr": "Les enfants jouent dans le jardin.",
            "de": "Die Kinder spielen im Garten.",
            "ar": "يلعب الأطفال في الحديقة.",
            "en": "The children play in the garden."
          },
          "explanation": {
            "fr": "das Kind → die Kinder — Le pluriel prend -er ; certains noms prennent aussi un Umlaut. Il faut mémoriser les deux changements lorsqu’ils existent.",
            "de": "das Kind → die Kinder — Der Plural erhält -er; manche Nomen bekommen außerdem einen Umlaut. Lerne beide Änderungen, wenn sie auftreten.",
            "ar": "das Kind → die Kinder — يأخذ الجمع -er، وقد يتغير حرف العلة أيضاً. احفظ التغييرين عند وجودهما.",
            "en": "das Kind → die Kinder — The plural takes -er; some nouns also undergo umlaut. Learn both changes where applicable."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Ich lese zwei Bücher.",
          "context": {
            "fr": "Je lis deux livres.",
            "de": "Ich lese zwei Bücher.",
            "ar": "أقرأ كتابين.",
            "en": "I read two books."
          },
          "explanation": {
            "fr": "das Buch → die Bücher — Le pluriel prend -er ; certains noms prennent aussi un Umlaut. Il faut mémoriser les deux changements lorsqu’ils existent.",
            "de": "das Buch → die Bücher — Der Plural erhält -er; manche Nomen bekommen außerdem einen Umlaut. Lerne beide Änderungen, wenn sie auftreten.",
            "ar": "das Buch → die Bücher — يأخذ الجمع -er، وقد يتغير حرف العلة أيضاً. احفظ التغييرين عند وجودهما.",
            "en": "das Buch → die Bücher — The plural takes -er; some nouns also undergo umlaut. Learn both changes where applicable."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Die Männer arbeiten zusammen.",
          "context": {
            "fr": "Les hommes travaillent ensemble.",
            "de": "Die Männer arbeiten zusammen.",
            "ar": "يعمل الرجال معاً.",
            "en": "The men work together."
          },
          "explanation": {
            "fr": "der Mann → die Männer — Le pluriel prend -er ; certains noms prennent aussi un Umlaut. Il faut mémoriser les deux changements lorsqu’ils existent.",
            "de": "der Mann → die Männer — Der Plural erhält -er; manche Nomen bekommen außerdem einen Umlaut. Lerne beide Änderungen, wenn sie auftreten.",
            "ar": "der Mann → die Männer — يأخذ الجمع -er، وقد يتغير حرف العلة أيضاً. احفظ التغييرين عند وجودهما.",
            "en": "der Mann → die Männer — The plural takes -er; some nouns also undergo umlaut. Learn both changes where applicable."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-2",
      "title": {
        "fr": "Terminaisons -er, -e et absence de terminaison",
        "de": "-er, -e und Nullendung",
        "ar": "النهايات -er و -e وغياب النهاية",
        "en": "Endings -er, -e and zero ending"
      },
      "items": [
        {
          "id": "premium-ex-11",
          "german": "Die Häuser sind alt.",
          "context": {
            "fr": "Les maisons sont anciennes.",
            "de": "Die Häuser sind alt.",
            "ar": "المنازل قديمة.",
            "en": "The houses are old."
          },
          "explanation": {
            "fr": "das Haus → die Häuser — Le pluriel prend -er ; certains noms prennent aussi un Umlaut. Il faut mémoriser les deux changements lorsqu’ils existent.",
            "de": "das Haus → die Häuser — Der Plural erhält -er; manche Nomen bekommen außerdem einen Umlaut. Lerne beide Änderungen, wenn sie auftreten.",
            "ar": "das Haus → die Häuser — يأخذ الجمع -er، وقد يتغير حرف العلة أيضاً. احفظ التغييرين عند وجودهما.",
            "en": "das Haus → die Häuser — The plural takes -er; some nouns also undergo umlaut. Learn both changes where applicable."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Die Bilder hängen an der Wand.",
          "context": {
            "fr": "Les tableaux sont accrochés au mur.",
            "de": "Die Bilder hängen an der Wand.",
            "ar": "اللوحات معلقة على الحائط.",
            "en": "The pictures hang on the wall."
          },
          "explanation": {
            "fr": "das Bild → die Bilder — Le pluriel prend -er ; certains noms prennent aussi un Umlaut. Il faut mémoriser les deux changements lorsqu’ils existent.",
            "de": "das Bild → die Bilder — Der Plural erhält -er; manche Nomen bekommen außerdem einen Umlaut. Lerne beide Änderungen, wenn sie auftreten.",
            "ar": "das Bild → die Bilder — يأخذ الجمع -er، وقد يتغير حرف العلة أيضاً. احفظ التغييرين عند وجودهما.",
            "en": "das Bild → die Bilder — The plural takes -er; some nouns also undergo umlaut. Learn both changes where applicable."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Wir kaufen drei Brote.",
          "context": {
            "fr": "Nous achetons trois pains.",
            "de": "Wir kaufen drei Brote.",
            "ar": "نشتري ثلاثة أرغفة.",
            "en": "We buy three loaves."
          },
          "explanation": {
            "fr": "das Brot → die Brote — Le pluriel prend -e, parfois avec un Umlaut. Le genre ne suffit pas à prédire ce changement.",
            "de": "das Brot → die Brote — Der Plural erhält -e, manchmal mit Umlaut. Das Genus allein bestimmt den Wechsel nicht.",
            "ar": "das Brot → die Brote — يأخذ الجمع -e وأحياناً يتغير حرف العلة. لا يكفي الجنس النحوي لتحديد ذلك.",
            "en": "das Brot → die Brote — The plural takes -e, sometimes with umlaut. Gender alone cannot predict the change."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Die Stühle sind bequem.",
          "context": {
            "fr": "Les chaises sont confortables.",
            "de": "Die Stühle sind bequem.",
            "ar": "الكراسي مريحة.",
            "en": "The chairs are comfortable."
          },
          "explanation": {
            "fr": "der Stuhl → die Stühle — Le pluriel prend -e, parfois avec un Umlaut. Le genre ne suffit pas à prédire ce changement.",
            "de": "der Stuhl → die Stühle — Der Plural erhält -e, manchmal mit Umlaut. Das Genus allein bestimmt den Wechsel nicht.",
            "ar": "der Stuhl → die Stühle — يأخذ الجمع -e وأحياناً يتغير حرف العلة. لا يكفي الجنس النحوي لتحديد ذلك.",
            "en": "der Stuhl → die Stühle — The plural takes -e, sometimes with umlaut. Gender alone cannot predict the change."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Meine Hände sind kalt.",
          "context": {
            "fr": "Mes mains sont froides.",
            "de": "Meine Hände sind kalt.",
            "ar": "يداي باردتان.",
            "en": "My hands are cold."
          },
          "explanation": {
            "fr": "die Hand → die Hände — Le pluriel prend -e, parfois avec un Umlaut. Le genre ne suffit pas à prédire ce changement.",
            "de": "die Hand → die Hände — Der Plural erhält -e, manchmal mit Umlaut. Das Genus allein bestimmt den Wechsel nicht.",
            "ar": "die Hand → die Hände — يأخذ الجمع -e وأحياناً يتغير حرف العلة. لا يكفي الجنس النحوي لتحديد ذلك.",
            "en": "die Hand → die Hände — The plural takes -e, sometimes with umlaut. Gender alone cannot predict the change."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Die Tiere schlafen.",
          "context": {
            "fr": "Les animaux dorment.",
            "de": "Die Tiere schlafen.",
            "ar": "تنام الحيوانات.",
            "en": "The animals are sleeping."
          },
          "explanation": {
            "fr": "das Tier → die Tiere — Le pluriel prend -e, parfois avec un Umlaut. Le genre ne suffit pas à prédire ce changement.",
            "de": "das Tier → die Tiere — Der Plural erhält -e, manchmal mit Umlaut. Das Genus allein bestimmt den Wechsel nicht.",
            "ar": "das Tier → die Tiere — يأخذ الجمع -e وأحياناً يتغير حرف العلة. لا يكفي الجنس النحوي لتحديد ذلك.",
            "en": "das Tier → die Tiere — The plural takes -e, sometimes with umlaut. Gender alone cannot predict the change."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Die Sessel sind neu.",
          "context": {
            "fr": "Les fauteuils sont neufs.",
            "de": "Die Sessel sind neu.",
            "ar": "المقاعد جديدة.",
            "en": "The armchairs are new."
          },
          "explanation": {
            "fr": "der Sessel → die Sessel — Aucune terminaison ne s’ajoute. Un Umlaut peut néanmoins distinguer le pluriel du singulier.",
            "de": "der Sessel → die Sessel — Es kommt keine Endung hinzu. Ein Umlaut kann trotzdem Singular und Plural unterscheiden.",
            "ar": "der Sessel → die Sessel — لا تضاف لاحقة، لكن قد يتغير حرف العلة لتمييز الجمع عن المفرد.",
            "en": "der Sessel → die Sessel — No ending is added, although umlaut can still distinguish plural from singular."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Die Väter holen ihre Kinder ab.",
          "context": {
            "fr": "Les pères viennent chercher leurs enfants.",
            "de": "Die Väter holen ihre Kinder ab.",
            "ar": "يأتي الآباء لأخذ أطفالهم.",
            "en": "The fathers pick up their children."
          },
          "explanation": {
            "fr": "der Vater → die Väter — Aucune terminaison ne s’ajoute. Un Umlaut peut néanmoins distinguer le pluriel du singulier.",
            "de": "der Vater → die Väter — Es kommt keine Endung hinzu. Ein Umlaut kann trotzdem Singular und Plural unterscheiden.",
            "ar": "der Vater → die Väter — لا تضاف لاحقة، لكن قد يتغير حرف العلة لتمييز الجمع عن المفرد.",
            "en": "der Vater → die Väter — No ending is added, although umlaut can still distinguish plural from singular."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Die Brötchen sind frisch.",
          "context": {
            "fr": "Les petits pains sont frais.",
            "de": "Die Brötchen sind frisch.",
            "ar": "خبزات صغيرة طازجة.",
            "en": "The bread rolls are fresh."
          },
          "explanation": {
            "fr": "das Brötchen → die Brötchen — Aucune terminaison ne s’ajoute. Un Umlaut peut néanmoins distinguer le pluriel du singulier.",
            "de": "das Brötchen → die Brötchen — Es kommt keine Endung hinzu. Ein Umlaut kann trotzdem Singular und Plural unterscheiden.",
            "ar": "das Brötchen → die Brötchen — لا تضاف لاحقة، لكن قد يتغير حرف العلة لتمييز الجمع عن المفرد.",
            "en": "das Brötchen → die Brötchen — No ending is added, although umlaut can still distinguish plural from singular."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Die Gärten sind groß.",
          "context": {
            "fr": "Les jardins sont grands.",
            "de": "Die Gärten sind groß.",
            "ar": "الحدائق كبيرة.",
            "en": "The gardens are large."
          },
          "explanation": {
            "fr": "der Garten → die Gärten — Aucune terminaison ne s’ajoute. Un Umlaut peut néanmoins distinguer le pluriel du singulier.",
            "de": "der Garten → die Gärten — Es kommt keine Endung hinzu. Ein Umlaut kann trotzdem Singular und Plural unterscheiden.",
            "ar": "der Garten → die Gärten — لا تضاف لاحقة، لكن قد يتغير حرف العلة لتمييز الجمع عن المفرد.",
            "en": "der Garten → die Gärten — No ending is added, although umlaut can still distinguish plural from singular."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-3",
      "title": {
        "fr": "Terminaison -s, formes particulières et noms spéciaux",
        "de": "-s, Sonderformen und besondere Nomen",
        "ar": "النهاية -s والصيغ الخاصة والأسماء الخاصة",
        "en": "Ending -s, special forms and special nouns"
      },
      "items": [
        {
          "id": "premium-ex-21",
          "german": "Zwei Taxis warten am Bahnhof.",
          "context": {
            "fr": "Deux taxis attendent à la gare.",
            "de": "Zwei Taxis warten am Bahnhof.",
            "ar": "تنتظر سيارتا أجرة في المحطة.",
            "en": "Two taxis are waiting at the station."
          },
          "explanation": {
            "fr": "das Taxi → die Taxis — Ce pluriel prend -s, fréquent avec les emprunts, les abréviations et certains noms finissant en voyelle.",
            "de": "das Taxi → die Taxis — Dieser Plural erhält -s, häufig bei Fremdwörtern, Abkürzungen und manchen Nomen mit Vokal am Ende.",
            "ar": "das Taxi → die Taxis — يأخذ هذا الجمع -s، وهي شائعة في الكلمات الدخيلة والاختصارات وبعض الأسماء المنتهية بحرف علة.",
            "en": "das Taxi → die Taxis — This plural takes -s, common with loanwords, abbreviations and some vowel-final nouns."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Die Babys schlafen ruhig.",
          "context": {
            "fr": "Les bébés dorment paisiblement.",
            "de": "Die Babys schlafen ruhig.",
            "ar": "ينام الرضع بهدوء.",
            "en": "The babies sleep peacefully."
          },
          "explanation": {
            "fr": "das Baby → die Babys — Ce pluriel prend -s, fréquent avec les emprunts, les abréviations et certains noms finissant en voyelle.",
            "de": "das Baby → die Babys — Dieser Plural erhält -s, häufig bei Fremdwörtern, Abkürzungen und manchen Nomen mit Vokal am Ende.",
            "ar": "das Baby → die Babys — يأخذ هذا الجمع -s، وهي شائعة في الكلمات الدخيلة والاختصارات وبعض الأسماء المنتهية بحرف علة.",
            "en": "das Baby → die Babys — This plural takes -s, common with loanwords, abbreviations and some vowel-final nouns."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Wir haben viele Fotos gemacht.",
          "context": {
            "fr": "Nous avons pris beaucoup de photos.",
            "de": "Wir haben viele Fotos gemacht.",
            "ar": "التقطنا صوراً كثيرة.",
            "en": "We took many photos."
          },
          "explanation": {
            "fr": "das Foto → die Fotos — Ce pluriel prend -s, fréquent avec les emprunts, les abréviations et certains noms finissant en voyelle.",
            "de": "das Foto → die Fotos — Dieser Plural erhält -s, häufig bei Fremdwörtern, Abkürzungen und manchen Nomen mit Vokal am Ende.",
            "ar": "das Foto → die Fotos — يأخذ هذا الجمع -s، وهي شائعة في الكلمات الدخيلة والاختصارات وبعض الأسماء المنتهية بحرف علة.",
            "en": "das Foto → die Fotos — This plural takes -s, common with loanwords, abbreviations and some vowel-final nouns."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Die Hotels sind ausgebucht.",
          "context": {
            "fr": "Les hôtels sont complets.",
            "de": "Die Hotels sind ausgebucht.",
            "ar": "الفنادق محجوزة بالكامل.",
            "en": "The hotels are fully booked."
          },
          "explanation": {
            "fr": "das Hotel → die Hotels — Ce pluriel prend -s, fréquent avec les emprunts, les abréviations et certains noms finissant en voyelle.",
            "de": "das Hotel → die Hotels — Dieser Plural erhält -s, häufig bei Fremdwörtern, Abkürzungen und manchen Nomen mit Vokal am Ende.",
            "ar": "das Hotel → die Hotels — يأخذ هذا الجمع -s، وهي شائعة في الكلمات الدخيلة والاختصارات وبعض الأسماء المنتهية بحرف علة.",
            "en": "das Hotel → die Hotels — This plural takes -s, common with loanwords, abbreviations and some vowel-final nouns."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Die Museen sind montags geschlossen.",
          "context": {
            "fr": "Les musées sont fermés le lundi.",
            "de": "Die Museen sind montags geschlossen.",
            "ar": "المتاحف مغلقة أيام الاثنين.",
            "en": "The museums are closed on Mondays."
          },
          "explanation": {
            "fr": "das Museum → die Museen — C’est une forme de pluriel particulière à mémoriser avec le singulier.",
            "de": "das Museum → die Museen — Das ist eine besondere Pluralform, die zusammen mit dem Singular gelernt werden sollte.",
            "ar": "das Museum → die Museen — هذه صيغة جمع خاصة يجب حفظها مع المفرد.",
            "en": "das Museum → die Museen — This is a special plural form to learn together with its singular."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Die Firmen suchen Mitarbeiter.",
          "context": {
            "fr": "Les entreprises cherchent des employés.",
            "de": "Die Firmen suchen Mitarbeiter.",
            "ar": "تبحث الشركات عن موظفين.",
            "en": "The companies are looking for employees."
          },
          "explanation": {
            "fr": "die Firma → die Firmen — C’est une forme de pluriel particulière à mémoriser avec le singulier.",
            "de": "die Firma → die Firmen — Das ist eine besondere Pluralform, die zusammen mit dem Singular gelernt werden sollte.",
            "ar": "die Firma → die Firmen — هذه صيغة جمع خاصة يجب حفظها مع المفرد.",
            "en": "die Firma → die Firmen — This is a special plural form to learn together with its singular."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Bitte prüfen Sie die Daten.",
          "context": {
            "fr": "Veuillez vérifier les dates ou les données.",
            "de": "Bitte prüfen Sie die Daten.",
            "ar": "يرجى التحقق من التواريخ أو البيانات.",
            "en": "Please check the dates or data."
          },
          "explanation": {
            "fr": "das Datum → die Daten — C’est une forme de pluriel particulière à mémoriser avec le singulier.",
            "de": "das Datum → die Daten — Das ist eine besondere Pluralform, die zusammen mit dem Singular gelernt werden sollte.",
            "ar": "das Datum → die Daten — هذه صيغة جمع خاصة يجب حفظها مع المفرد.",
            "en": "das Datum → die Daten — This is a special plural form to learn together with its singular."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Ich trinke gern Wasser.",
          "context": {
            "fr": "J’aime boire de l’eau.",
            "de": "Ich trinke gern Wasser.",
            "ar": "أحب شرب الماء.",
            "en": "I like drinking water."
          },
          "explanation": {
            "fr": "das Wasser → Wasser — Le nom désigne ici une matière ou une quantité non comptée ; il est employé au singulier sans article indéfini.",
            "de": "das Wasser → Wasser — Das Nomen bezeichnet hier einen Stoff oder eine nicht gezählte Menge; es steht im Singular ohne unbestimmten Artikel.",
            "ar": "das Wasser → Wasser — يدل الاسم هنا على مادة أو كمية غير معدودة ويستعمل مفرداً دون أداة تنكير.",
            "en": "das Wasser → Wasser — The noun here denotes a substance or uncounted quantity; it is singular without an indefinite article."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Meine Eltern wohnen in Fès.",
          "context": {
            "fr": "Mes parents habitent à Fès.",
            "de": "Meine Eltern wohnen in Fès.",
            "ar": "يسكن والداي في فاس.",
            "en": "My parents live in Fez."
          },
          "explanation": {
            "fr": "die Eltern — Dans ce sens courant, le nom est employé au pluriel. Le verbe s’accorde avec ce pluriel.",
            "de": "die Eltern — In dieser geläufigen Bedeutung wird das Nomen im Plural gebraucht. Das Verb richtet sich nach dem Plural.",
            "ar": "die Eltern — يستعمل الاسم بهذا المعنى الشائع في الجمع ويتوافق الفعل مع الجمع.",
            "en": "die Eltern — In this common meaning the noun is used in the plural and the verb agrees with it."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Die Ferien beginnen morgen.",
          "context": {
            "fr": "Les vacances commencent demain.",
            "de": "Die Ferien beginnen morgen.",
            "ar": "تبدأ العطلة غداً.",
            "en": "The holidays start tomorrow."
          },
          "explanation": {
            "fr": "die Ferien — Dans ce sens courant, le nom est employé au pluriel. Le verbe s’accorde avec ce pluriel.",
            "de": "die Ferien — In dieser geläufigen Bedeutung wird das Nomen im Plural gebraucht. Das Verb richtet sich nach dem Plural.",
            "ar": "die Ferien — يستعمل الاسم بهذا المعنى الشائع في الجمع ويتوافق الفعل مع الجمع.",
            "en": "die Ferien — In this common meaning the noun is used in the plural and the verb agrees with it."
          }
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-dialog",
      "title": {
        "fr": "Mini-dialogue",
        "de": "Mini-Dialog",
        "ar": "حوار قصير",
        "en": "Mini-dialogue"
      },
      "text": {
        "fr": "A: Was brauchst du? (De quoi as-tu besoin ?)\nB: Zwei Stühle und drei Bücher. (Deux chaises et trois livres.)\nA: Die Stühle stehen dort. (Les chaises sont là-bas.)",
        "de": "A: Was brauchst du?\nB: Zwei Stühle und drei Bücher.\nA: Die Stühle stehen dort.",
        "ar": "أ: Was brauchst du? (ماذا تحتاج؟)\nب: Zwei Stühle und drei Bücher. (كرسيين وثلاثة كتب.)\nأ: Die Stühle stehen dort. (الكراسي هناك.)",
        "en": "A: What do you need?\nB: Two chairs and three books.\nA: The chairs are over there."
      }
    },
    {
      "type": "callout",
      "id": "premium-errors",
      "title": {
        "fr": "Erreurs fréquentes",
        "de": "Typische Fehler",
        "ar": "أخطاء شائعة",
        "en": "Common mistakes"
      },
      "tone": "warning",
      "text": {
        "fr": "❌ die Bucher → ✓ die Bücher.\n❌ die Lehrerin (pour plusieurs) → ✓ die Lehrerinnen.\n❌ ein Kinder → ✓ Kinder / ein Kind.",
        "de": "❌ die Bucher → ✓ die Bücher.\n❌ die Lehrerin (Mehrzahl) → ✓ die Lehrerinnen.\n❌ ein Kinder → ✓ Kinder / ein Kind.",
        "ar": "❌ die Bucher → ✓ die Bücher.\n❌ die Lehrerin للجمع → ✓ die Lehrerinnen.\n❌ ein Kinder → ✓ Kinder / ein Kind.",
        "en": "❌ die Bucher → ✓ die Bücher.\n❌ die Lehrerin (plural) → ✓ die Lehrerinnen.\n❌ ein Kinder → ✓ Kinder / ein Kind."
      }
    },
    {
      "type": "callout",
      "id": "premium-merke",
      "title": {
        "fr": "À retenir !",
        "de": "Merke dir!",
        "ar": "تذكّر!",
        "en": "Remember!"
      },
      "tone": "tip",
      "text": {
        "fr": "Apprends article + singulier + pluriel. Vérifie la terminaison, l’Umlaut et l’accord du verbe.",
        "de": "Lerne Artikel + Singular + Plural. Prüfe Endung, Umlaut und Verbkongruenz.",
        "ar": "احفظ الأداة والمفرد والجمع. تحقق من اللاحقة وتغير حرف العلة وتوافق الفعل.",
        "en": "Learn article + singular + plural. Check ending, umlaut and verb agreement."
      }
    }
  ]
}

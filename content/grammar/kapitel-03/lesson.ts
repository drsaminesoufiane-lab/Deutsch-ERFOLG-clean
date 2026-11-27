import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  "id": "kapitel-03",
  "title": {
    "fr": "Je suis, tu as, il voudrait",
    "de": "Ich bin, du hast, er möchte",
    "ar": "أنا أكون، أنت تملك، هو يودّ",
    "en": "I am, you have, he would like"
  },
  "subtitle": {
    "fr": "Être, avoir et verbes particuliers",
    "de": "Sein, haben und besondere Verben",
    "ar": "أفعال خاصة",
    "en": "Be, have and special verbs"
  },
  "objective": {
    "fr": "Maîtriser six verbes particuliers au présent et les employer en contexte.",
    "de": "Sechs besondere Verben im Präsens richtig verwenden.",
    "ar": "إتقان ستة أفعال خاصة في المضارع واستعمالها في السياق.",
    "en": "Master six special verbs in the present tense."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "premium-intro",
      "title": {
        "fr": "Être et avoir",
        "de": "Sein und haben",
        "ar": "فعلا الكينونة والملكية (sein و haben)",
        "en": "To be and to have"
      },
      "text": {
        "fr": "sein exprime une identité, une caractéristique, un état, un lieu ou l’âge (ich bin 30 Jahre alt). haben exprime notamment la possession et des expressions comme Hunger haben ou Zeit haben. Ces deux verbes ont des formes irrégulières très fréquentes.",
        "de": "sein bezeichnet Identität, Eigenschaften, Zustände oder Orte. haben bezeichnet Besitz und Ausdrücke wie Hunger haben oder Zeit haben; das Alter steht mit sein: ich bin 30 Jahre alt. Beide Verben sind sehr häufig und unregelmäßig.",
        "ar": "يدل sein على الهوية أو الصفة أو الحالة أو المكان. ويدل haben على الملكية وتعبيرات مثل الجوع أو توفر الوقت. أما العمر فيستعمل معه sein: ich bin 30 Jahre alt. الفعلان شائعان وغير منتظمين.",
        "en": "sein expresses identity, characteristics, states or location. haben expresses possession and phrases such as Hunger haben or Zeit haben; age uses sein: ich bin 30 Jahre alt. Both verbs are common and irregular."
      }
    },
    {
      "type": "table",
      "id": "premium-sein-haben",
      "title": {
        "fr": "Être et avoir",
        "de": "Sein und haben",
        "ar": "فعلا الكينونة والملكية (sein و haben)",
        "en": "To be and to have"
      },
      "headers": [
        {
          "fr": "Pronom sujet",
          "de": "Subjektpronomen",
          "ar": "ضمير الفاعل",
          "en": "Subject pronoun"
        },
        {
          "fr": "sein",
          "de": "sein",
          "ar": "sein",
          "en": "sein"
        },
        {
          "fr": "haben",
          "de": "haben",
          "ar": "haben",
          "en": "haben"
        }
      ],
      "rows": [
        {
          "id": "premium-sein-haben-1",
          "cells": [
            {
              "fr": "ich",
              "de": "ich",
              "ar": "ich",
              "en": "ich"
            },
            {
              "fr": "bin",
              "de": "bin",
              "ar": "bin",
              "en": "bin"
            },
            {
              "fr": "habe",
              "de": "habe",
              "ar": "habe",
              "en": "habe"
            }
          ]
        },
        {
          "id": "premium-sein-haben-2",
          "cells": [
            {
              "fr": "du",
              "de": "du",
              "ar": "du",
              "en": "du"
            },
            {
              "fr": "bist",
              "de": "bist",
              "ar": "bist",
              "en": "bist"
            },
            {
              "fr": "hast",
              "de": "hast",
              "ar": "hast",
              "en": "hast"
            }
          ]
        },
        {
          "id": "premium-sein-haben-3",
          "cells": [
            {
              "fr": "er / sie / es",
              "de": "er / sie / es",
              "ar": "er / sie / es",
              "en": "er / sie / es"
            },
            {
              "fr": "ist",
              "de": "ist",
              "ar": "ist",
              "en": "ist"
            },
            {
              "fr": "hat",
              "de": "hat",
              "ar": "hat",
              "en": "hat"
            }
          ]
        },
        {
          "id": "premium-sein-haben-4",
          "cells": [
            {
              "fr": "wir",
              "de": "wir",
              "ar": "wir",
              "en": "wir"
            },
            {
              "fr": "sind",
              "de": "sind",
              "ar": "sind",
              "en": "sind"
            },
            {
              "fr": "haben",
              "de": "haben",
              "ar": "haben",
              "en": "haben"
            }
          ]
        },
        {
          "id": "premium-sein-haben-5",
          "cells": [
            {
              "fr": "ihr",
              "de": "ihr",
              "ar": "ihr",
              "en": "ihr"
            },
            {
              "fr": "seid",
              "de": "seid",
              "ar": "seid",
              "en": "seid"
            },
            {
              "fr": "habt",
              "de": "habt",
              "ar": "habt",
              "en": "habt"
            }
          ]
        },
        {
          "id": "premium-sein-haben-6",
          "cells": [
            {
              "fr": "sie / Sie",
              "de": "sie / Sie",
              "ar": "sie / Sie",
              "en": "sie / Sie"
            },
            {
              "fr": "sind",
              "de": "sind",
              "ar": "sind",
              "en": "sind"
            },
            {
              "fr": "haben",
              "de": "haben",
              "ar": "haben",
              "en": "haben"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-wunsch",
      "title": {
        "fr": "Aimer et souhaiter",
        "de": "Mögen und möchten",
        "ar": "الرغبة والإعجاب (mögen و möchten)",
        "en": "To like and would like"
      },
      "text": {
        "fr": "mögen indique un goût ou une affection : Ich mag Tee. möchten exprime un souhait ou une demande polie : Ich möchte Tee trinken. Il s’agit historiquement du Konjunktiv II de mögen, mais on l’apprend ici comme expression du souhait actuel. Avec un second verbe, celui-ci reste à l’infinitif en fin de proposition principale.",
        "de": "mögen bezeichnet Vorlieben: Ich mag Tee. möchten bezeichnet einen Wunsch oder eine höfliche Bitte: Ich möchte Tee trinken. Die Form ist der Konjunktiv II von mögen, wird hier aber für aktuelle Wünsche gelernt. Ein zweites Verb steht im Hauptsatz als Infinitiv am Ende.",
        "ar": "يدل mögen على التفضيل: Ich mag Tee. ويدل möchten على الرغبة أو الطلب المهذب: Ich möchte Tee trinken. وهو صيغة Konjunktiv II من mögen، ونتعلمه هنا للتعبير عن رغبة حالية. إذا وجد فعل ثانٍ يبقى في المصدر في نهاية الجملة الرئيسية.",
        "en": "mögen expresses liking: Ich mag Tee. möchten expresses a wish or polite request: Ich möchte Tee trinken. It is the subjunctive II form of mögen, learned here for present wishes. A second verb stays in the infinitive at the end of the main clause."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-wissen",
      "title": {
        "fr": "Savoir et faire",
        "de": "Wissen und tun",
        "ar": "المعرفة والفعل (wissen و tun)",
        "en": "To know and to do"
      },
      "text": {
        "fr": "wissen signifie savoir un fait ; ses formes du singulier sont weiß, weißt, weiß. tun signifie faire et a les formes tue, tust, tut, tun, tut, tun. Dans Was tust du? le verbe est juste après le mot interrogatif.",
        "de": "wissen bezeichnet Faktenwissen; im Singular: weiß, weißt, weiß. tun bedeutet handeln oder etwas machen: tue, tust, tut, tun, tut, tun. In Was tust du? folgt das Verb dem Fragewort.",
        "ar": "يعني wissen معرفة معلومة، وصيغه في المفرد weiß وweißt وweiß. ويعني tun فعل شيء، وصيغه tue وtust وtut وtun وtut وtun. في Was tust du? يأتي الفعل بعد أداة الاستفهام.",
        "en": "wissen means knowing a fact; singular forms are weiß, weißt, weiß. tun means doing something: tue, tust, tut, tun, tut, tun. In Was tust du? the verb follows the question word."
      }
    },
    {
      "type": "table",
      "id": "premium-besondere",
      "title": {
        "fr": "Verbes particuliers",
        "de": "Besondere Verben",
        "ar": "أفعال خاصة",
        "en": "Special verbs"
      },
      "headers": [
        {
          "fr": "Pronom sujet",
          "de": "Subjektpronomen",
          "ar": "ضمير الفاعل",
          "en": "Subject pronoun"
        },
        {
          "fr": "mögen",
          "de": "mögen",
          "ar": "mögen",
          "en": "mögen"
        },
        {
          "fr": "möchten",
          "de": "möchten",
          "ar": "möchten",
          "en": "möchten"
        },
        {
          "fr": "wissen",
          "de": "wissen",
          "ar": "wissen",
          "en": "wissen"
        },
        {
          "fr": "tun",
          "de": "tun",
          "ar": "tun",
          "en": "tun"
        }
      ],
      "rows": [
        {
          "id": "premium-besondere-1",
          "cells": [
            {
              "fr": "ich",
              "de": "ich",
              "ar": "ich",
              "en": "ich"
            },
            {
              "fr": "mag",
              "de": "mag",
              "ar": "mag",
              "en": "mag"
            },
            {
              "fr": "möchte",
              "de": "möchte",
              "ar": "möchte",
              "en": "möchte"
            },
            {
              "fr": "weiß",
              "de": "weiß",
              "ar": "weiß",
              "en": "weiß"
            },
            {
              "fr": "tue",
              "de": "tue",
              "ar": "tue",
              "en": "tue"
            }
          ]
        },
        {
          "id": "premium-besondere-2",
          "cells": [
            {
              "fr": "du",
              "de": "du",
              "ar": "du",
              "en": "du"
            },
            {
              "fr": "magst",
              "de": "magst",
              "ar": "magst",
              "en": "magst"
            },
            {
              "fr": "möchtest",
              "de": "möchtest",
              "ar": "möchtest",
              "en": "möchtest"
            },
            {
              "fr": "weißt",
              "de": "weißt",
              "ar": "weißt",
              "en": "weißt"
            },
            {
              "fr": "tust",
              "de": "tust",
              "ar": "tust",
              "en": "tust"
            }
          ]
        },
        {
          "id": "premium-besondere-3",
          "cells": [
            {
              "fr": "er / sie / es",
              "de": "er / sie / es",
              "ar": "er / sie / es",
              "en": "er / sie / es"
            },
            {
              "fr": "mag",
              "de": "mag",
              "ar": "mag",
              "en": "mag"
            },
            {
              "fr": "möchte",
              "de": "möchte",
              "ar": "möchte",
              "en": "möchte"
            },
            {
              "fr": "weiß",
              "de": "weiß",
              "ar": "weiß",
              "en": "weiß"
            },
            {
              "fr": "tut",
              "de": "tut",
              "ar": "tut",
              "en": "tut"
            }
          ]
        },
        {
          "id": "premium-besondere-4",
          "cells": [
            {
              "fr": "wir",
              "de": "wir",
              "ar": "wir",
              "en": "wir"
            },
            {
              "fr": "mögen",
              "de": "mögen",
              "ar": "mögen",
              "en": "mögen"
            },
            {
              "fr": "möchten",
              "de": "möchten",
              "ar": "möchten",
              "en": "möchten"
            },
            {
              "fr": "wissen",
              "de": "wissen",
              "ar": "wissen",
              "en": "wissen"
            },
            {
              "fr": "tun",
              "de": "tun",
              "ar": "tun",
              "en": "tun"
            }
          ]
        },
        {
          "id": "premium-besondere-5",
          "cells": [
            {
              "fr": "ihr",
              "de": "ihr",
              "ar": "ihr",
              "en": "ihr"
            },
            {
              "fr": "mögt",
              "de": "mögt",
              "ar": "mögt",
              "en": "mögt"
            },
            {
              "fr": "möchtet",
              "de": "möchtet",
              "ar": "möchtet",
              "en": "möchtet"
            },
            {
              "fr": "wisst",
              "de": "wisst",
              "ar": "wisst",
              "en": "wisst"
            },
            {
              "fr": "tut",
              "de": "tut",
              "ar": "tut",
              "en": "tut"
            }
          ]
        },
        {
          "id": "premium-besondere-6",
          "cells": [
            {
              "fr": "sie / Sie",
              "de": "sie / Sie",
              "ar": "sie / Sie",
              "en": "sie / Sie"
            },
            {
              "fr": "mögen",
              "de": "mögen",
              "ar": "mögen",
              "en": "mögen"
            },
            {
              "fr": "möchten",
              "de": "möchten",
              "ar": "möchten",
              "en": "möchten"
            },
            {
              "fr": "wissen",
              "de": "wissen",
              "ar": "wissen",
              "en": "wissen"
            },
            {
              "fr": "tun",
              "de": "tun",
              "ar": "tun",
              "en": "tun"
            }
          ]
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-1",
      "title": {
        "fr": "Exemples 1–10",
        "de": "Beispiele 1–10",
        "ar": "أمثلة 1–10",
        "en": "Examples 1–10"
      },
      "items": [
        {
          "id": "premium-ex-01",
          "german": "Ich bin Student.",
          "context": {
            "fr": "Je suis étudiant.",
            "de": "Ich bin Student.",
            "ar": "أنا طالب.",
            "en": "I am a student."
          },
          "explanation": {
            "fr": "« bin » est la forme de sein pour la première personne du singulier. sein s’apprend comme un ensemble de formes irrégulières.",
            "de": "„bin“ ist die Form von sein für die erste Person Singular. sein hat unregelmäßige Formen, die man einzeln lernt.",
            "ar": "الصيغة «bin» من الفعل sein توافق المتكلم المفرد. للفعل sein صيغ غير منتظمة تحفظ كما هي.",
            "en": "“bin” is the form of sein for first-person singular. sein has irregular forms learned individually."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Du bist heute müde.",
          "context": {
            "fr": "Tu es fatigué(e) aujourd’hui.",
            "de": "Du bist heute müde.",
            "ar": "أنت متعب اليوم.",
            "en": "You are tired today."
          },
          "explanation": {
            "fr": "« bist » est la forme de sein pour la deuxième personne du singulier. sein s’apprend comme un ensemble de formes irrégulières.",
            "de": "„bist“ ist die Form von sein für die zweite Person Singular. sein hat unregelmäßige Formen, die man einzeln lernt.",
            "ar": "الصيغة «bist» من الفعل sein توافق المخاطب المفرد. للفعل sein صيغ غير منتظمة تحفظ كما هي.",
            "en": "“bist” is the form of sein for second-person singular. sein has irregular forms learned individually."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Sie ist 25 Jahre alt.",
          "context": {
            "fr": "Elle a 25 ans.",
            "de": "Sie ist 25 Jahre alt.",
            "ar": "عمرها 25 سنة.",
            "en": "She is 25 years old."
          },
          "explanation": {
            "fr": "« ist » est la forme de sein pour la troisième personne du singulier. sein s’apprend comme un ensemble de formes irrégulières.",
            "de": "„ist“ ist die Form von sein für die dritte Person Singular. sein hat unregelmäßige Formen, die man einzeln lernt.",
            "ar": "الصيغة «ist» من الفعل sein توافق الغائب المفرد. للفعل sein صيغ غير منتظمة تحفظ كما هي.",
            "en": "“ist” is the form of sein for third-person singular. sein has irregular forms learned individually."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Wir sind zu Hause.",
          "context": {
            "fr": "Nous sommes à la maison.",
            "de": "Wir sind zu Hause.",
            "ar": "نحن في المنزل.",
            "en": "We are at home."
          },
          "explanation": {
            "fr": "« sind » est la forme de sein pour la première personne du pluriel. sein s’apprend comme un ensemble de formes irrégulières.",
            "de": "„sind“ ist die Form von sein für die erste Person Plural. sein hat unregelmäßige Formen, die man einzeln lernt.",
            "ar": "الصيغة «sind» من الفعل sein توافق المتكلم الجمع. للفعل sein صيغ غير منتظمة تحفظ كما هي.",
            "en": "“sind” is the form of sein for first-person plural. sein has irregular forms learned individually."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Ihr seid sehr nett.",
          "context": {
            "fr": "Vous êtes très gentils.",
            "de": "Ihr seid sehr nett.",
            "ar": "أنتم لطفاء جداً.",
            "en": "You are very nice."
          },
          "explanation": {
            "fr": "« seid » est la forme de sein pour la deuxième personne du pluriel. sein s’apprend comme un ensemble de formes irrégulières.",
            "de": "„seid“ ist die Form von sein für die zweite Person Plural. sein hat unregelmäßige Formen, die man einzeln lernt.",
            "ar": "الصيغة «seid» من الفعل sein توافق المخاطب الجمع. للفعل sein صيغ غير منتظمة تحفظ كما هي.",
            "en": "“seid” is the form of sein for second-person plural. sein has irregular forms learned individually."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Ich habe Hunger.",
          "context": {
            "fr": "J’ai faim.",
            "de": "Ich habe Hunger.",
            "ar": "أنا جائع.",
            "en": "I am hungry."
          },
          "explanation": {
            "fr": "« habe » est la forme de haben pour la première personne du singulier. Avec du et er/sie/es, le b de haben disparaît.",
            "de": "„habe“ ist die Form von haben für die erste Person Singular. Bei du und er/sie/es entfällt das b von haben.",
            "ar": "الصيغة «habe» من الفعل haben توافق المتكلم المفرد. يحذف الحرف b من haben مع du وer/sie/es.",
            "en": "“habe” is the form of haben for first-person singular. With du and er/sie/es, the b of haben disappears."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Hast du einen Hund?",
          "context": {
            "fr": "As-tu un chien ?",
            "de": "Hast du einen Hund?",
            "ar": "هل لديك كلب؟",
            "en": "Do you have a dog?"
          },
          "explanation": {
            "fr": "« hast » est la forme de haben pour la deuxième personne du singulier. Avec du et er/sie/es, le b de haben disparaît.",
            "de": "„hast“ ist die Form von haben für die zweite Person Singular. Bei du und er/sie/es entfällt das b von haben.",
            "ar": "الصيغة «hast» من الفعل haben توافق المخاطب المفرد. يحذف الحرف b من haben مع du وer/sie/es.",
            "en": "“hast” is the form of haben for second-person singular. With du and er/sie/es, the b of haben disappears."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "Er hat heute Zeit.",
          "context": {
            "fr": "Il a du temps aujourd’hui.",
            "de": "Er hat heute Zeit.",
            "ar": "لديه وقت اليوم.",
            "en": "He has time today."
          },
          "explanation": {
            "fr": "« hat » est la forme de haben pour la troisième personne du singulier. Avec du et er/sie/es, le b de haben disparaît.",
            "de": "„hat“ ist die Form von haben für die dritte Person Singular. Bei du und er/sie/es entfällt das b von haben.",
            "ar": "الصيغة «hat» من الفعل haben توافق الغائب المفرد. يحذف الحرف b من haben مع du وer/sie/es.",
            "en": "“hat” is the form of haben for third-person singular. With du and er/sie/es, the b of haben disappears."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Wir haben zwei Kinder.",
          "context": {
            "fr": "Nous avons deux enfants.",
            "de": "Wir haben zwei Kinder.",
            "ar": "لدينا طفلان.",
            "en": "We have two children."
          },
          "explanation": {
            "fr": "« haben » est la forme de haben pour la première personne du pluriel. Avec du et er/sie/es, le b de haben disparaît.",
            "de": "„haben“ ist die Form von haben für die erste Person Plural. Bei du und er/sie/es entfällt das b von haben.",
            "ar": "الصيغة «haben» من الفعل haben توافق المتكلم الجمع. يحذف الحرف b من haben مع du وer/sie/es.",
            "en": "“haben” is the form of haben for first-person plural. With du and er/sie/es, the b of haben disappears."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Haben Sie einen Termin?",
          "context": {
            "fr": "Avez-vous rendez-vous ?",
            "de": "Haben Sie einen Termin?",
            "ar": "هل لديك موعد؟",
            "en": "Do you have an appointment?"
          },
          "explanation": {
            "fr": "« haben » est la forme de haben pour la forme de la troisième personne du pluriel ou du Sie de politesse. Avec du et er/sie/es, le b de haben disparaît.",
            "de": "„haben“ ist die Form von haben für die Form der dritten Person Plural oder der Höflichkeitsform Sie. Bei du und er/sie/es entfällt das b von haben.",
            "ar": "الصيغة «haben» من الفعل haben توافق صيغة الغائب الجمع أو المخاطب للاحترام Sie. يحذف الحرف b من haben مع du وer/sie/es.",
            "en": "“haben” is the form of haben for third-person plural or formal Sie agreement. With du and er/sie/es, the b of haben disappears."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-2",
      "title": {
        "fr": "Exemples 11–20",
        "de": "Beispiele 11–20",
        "ar": "أمثلة 11–20",
        "en": "Examples 11–20"
      },
      "items": [
        {
          "id": "premium-ex-11",
          "german": "Ich möchte einen Kaffee.",
          "context": {
            "fr": "Je voudrais un café.",
            "de": "Ich möchte einen Kaffee.",
            "ar": "أود قهوة.",
            "en": "I would like a coffee."
          },
          "explanation": {
            "fr": "« möchte » est la forme de möchten pour la première personne du singulier. Cette forme exprime un souhait ; avec un autre verbe, celui-ci reste à l’infinitif.",
            "de": "„möchte“ ist die Form von möchten für die erste Person Singular. Die Form drückt einen Wunsch aus; ein zweites Verb bleibt im Infinitiv.",
            "ar": "الصيغة «möchte» من الفعل möchten توافق المتكلم المفرد. تعبر الصيغة عن رغبة، ويبقى الفعل الثاني في المصدر إن وجد.",
            "en": "“möchte” is the form of möchten for first-person singular. This form expresses a wish; a second verb stays in the infinitive."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Möchtest du mitkommen?",
          "context": {
            "fr": "Voudrais-tu venir avec nous ?",
            "de": "Möchtest du mitkommen?",
            "ar": "هل ترغب في المجيء معنا؟",
            "en": "Would you like to come along?"
          },
          "explanation": {
            "fr": "« möchtest » est la forme de möchten pour la deuxième personne du singulier. Cette forme exprime un souhait ; avec un autre verbe, celui-ci reste à l’infinitif.",
            "de": "„möchtest“ ist die Form von möchten für die zweite Person Singular. Die Form drückt einen Wunsch aus; ein zweites Verb bleibt im Infinitiv.",
            "ar": "الصيغة «möchtest» من الفعل möchten توافق المخاطب المفرد. تعبر الصيغة عن رغبة، ويبقى الفعل الثاني في المصدر إن وجد.",
            "en": "“möchtest” is the form of möchten for second-person singular. This form expresses a wish; a second verb stays in the infinitive."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Er möchte Urlaub machen.",
          "context": {
            "fr": "Il voudrait prendre des vacances.",
            "de": "Er möchte Urlaub machen.",
            "ar": "يرغب في أخذ عطلة.",
            "en": "He would like to take a vacation."
          },
          "explanation": {
            "fr": "« möchte » est la forme de möchten pour la troisième personne du singulier. Cette forme exprime un souhait ; avec un autre verbe, celui-ci reste à l’infinitif.",
            "de": "„möchte“ ist die Form von möchten für die dritte Person Singular. Die Form drückt einen Wunsch aus; ein zweites Verb bleibt im Infinitiv.",
            "ar": "الصيغة «möchte» من الفعل möchten توافق الغائب المفرد. تعبر الصيغة عن رغبة، ويبقى الفعل الثاني في المصدر إن وجد.",
            "en": "“möchte” is the form of möchten for third-person singular. This form expresses a wish; a second verb stays in the infinitive."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Wir möchten etwas essen.",
          "context": {
            "fr": "Nous voudrions manger quelque chose.",
            "de": "Wir möchten etwas essen.",
            "ar": "نود أن نأكل شيئاً.",
            "en": "We would like to eat something."
          },
          "explanation": {
            "fr": "« möchten » est la forme de möchten pour la première personne du pluriel. Cette forme exprime un souhait ; avec un autre verbe, celui-ci reste à l’infinitif.",
            "de": "„möchten“ ist die Form von möchten für die erste Person Plural. Die Form drückt einen Wunsch aus; ein zweites Verb bleibt im Infinitiv.",
            "ar": "الصيغة «möchten» من الفعل möchten توافق المتكلم الجمع. تعبر الصيغة عن رغبة، ويبقى الفعل الثاني في المصدر إن وجد.",
            "en": "“möchten” is the form of möchten for first-person plural. This form expresses a wish; a second verb stays in the infinitive."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Was möchtet ihr trinken?",
          "context": {
            "fr": "Que voudriez-vous boire ?",
            "de": "Was möchtet ihr trinken?",
            "ar": "ماذا ترغبون في أن تشربوا؟",
            "en": "What would you like to drink?"
          },
          "explanation": {
            "fr": "« möchtet » est la forme de möchten pour la deuxième personne du pluriel. Cette forme exprime un souhait ; avec un autre verbe, celui-ci reste à l’infinitif.",
            "de": "„möchtet“ ist die Form von möchten für die zweite Person Plural. Die Form drückt einen Wunsch aus; ein zweites Verb bleibt im Infinitiv.",
            "ar": "الصيغة «möchtet» من الفعل möchten توافق المخاطب الجمع. تعبر الصيغة عن رغبة، ويبقى الفعل الثاني في المصدر إن وجد.",
            "en": "“möchtet” is the form of möchten for second-person plural. This form expresses a wish; a second verb stays in the infinitive."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Ich mag Tee.",
          "context": {
            "fr": "J’aime le thé.",
            "de": "Ich mag Tee.",
            "ar": "أحب الشاي.",
            "en": "I like tea."
          },
          "explanation": {
            "fr": "« mag » est la forme de mögen pour la première personne du singulier. mögen exprime une préférence ; au singulier on utilise mag ou magst.",
            "de": "„mag“ ist die Form von mögen für die erste Person Singular. mögen drückt eine Vorliebe aus; im Singular stehen mag oder magst.",
            "ar": "الصيغة «mag» من الفعل mögen توافق المتكلم المفرد. يدل mögen على التفضيل، وفي المفرد نستعمل mag أو magst.",
            "en": "“mag” is the form of mögen for first-person singular. mögen expresses liking; singular forms are mag or magst."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Magst du Musik?",
          "context": {
            "fr": "Aimes-tu la musique ?",
            "de": "Magst du Musik?",
            "ar": "هل تحب الموسيقى؟",
            "en": "Do you like music?"
          },
          "explanation": {
            "fr": "« magst » est la forme de mögen pour la deuxième personne du singulier. mögen exprime une préférence ; au singulier on utilise mag ou magst.",
            "de": "„magst“ ist die Form von mögen für die zweite Person Singular. mögen drückt eine Vorliebe aus; im Singular stehen mag oder magst.",
            "ar": "الصيغة «magst» من الفعل mögen توافق المخاطب المفرد. يدل mögen على التفضيل، وفي المفرد نستعمل mag أو magst.",
            "en": "“magst” is the form of mögen for second-person singular. mögen expresses liking; singular forms are mag or magst."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Sie mag Italien.",
          "context": {
            "fr": "Elle aime l’Italie.",
            "de": "Sie mag Italien.",
            "ar": "تحب إيطاليا.",
            "en": "She likes Italy."
          },
          "explanation": {
            "fr": "« mag » est la forme de mögen pour la troisième personne du singulier. mögen exprime une préférence ; au singulier on utilise mag ou magst.",
            "de": "„mag“ ist die Form von mögen für die dritte Person Singular. mögen drückt eine Vorliebe aus; im Singular stehen mag oder magst.",
            "ar": "الصيغة «mag» من الفعل mögen توافق الغائب المفرد. يدل mögen على التفضيل، وفي المفرد نستعمل mag أو magst.",
            "en": "“mag” is the form of mögen for third-person singular. mögen expresses liking; singular forms are mag or magst."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Wir mögen Katzen.",
          "context": {
            "fr": "Nous aimons les chats.",
            "de": "Wir mögen Katzen.",
            "ar": "نحب القطط.",
            "en": "We like cats."
          },
          "explanation": {
            "fr": "« mögen » est la forme de mögen pour la première personne du pluriel. mögen exprime une préférence ; au singulier on utilise mag ou magst.",
            "de": "„mögen“ ist die Form von mögen für die erste Person Plural. mögen drückt eine Vorliebe aus; im Singular stehen mag oder magst.",
            "ar": "الصيغة «mögen» من الفعل mögen توافق المتكلم الجمع. يدل mögen على التفضيل، وفي المفرد نستعمل mag أو magst.",
            "en": "“mögen” is the form of mögen for first-person plural. mögen expresses liking; singular forms are mag or magst."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Ihr mögt Schokolade.",
          "context": {
            "fr": "Vous aimez le chocolat.",
            "de": "Ihr mögt Schokolade.",
            "ar": "أنتم تحبون الشوكولاتة.",
            "en": "You like chocolate."
          },
          "explanation": {
            "fr": "« mögt » est la forme de mögen pour la deuxième personne du pluriel. mögen exprime une préférence ; au singulier on utilise mag ou magst.",
            "de": "„mögt“ ist die Form von mögen für die zweite Person Plural. mögen drückt eine Vorliebe aus; im Singular stehen mag oder magst.",
            "ar": "الصيغة «mögt» من الفعل mögen توافق المخاطب الجمع. يدل mögen على التفضيل، وفي المفرد نستعمل mag أو magst.",
            "en": "“mögt” is the form of mögen for second-person plural. mögen expresses liking; singular forms are mag or magst."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-3",
      "title": {
        "fr": "Exemples 21–30",
        "de": "Beispiele 21–30",
        "ar": "أمثلة 21–30",
        "en": "Examples 21–30"
      },
      "items": [
        {
          "id": "premium-ex-21",
          "german": "Ich weiß die Antwort.",
          "context": {
            "fr": "Je connais la réponse.",
            "de": "Ich weiß die Antwort.",
            "ar": "أعرف الإجابة.",
            "en": "I know the answer."
          },
          "explanation": {
            "fr": "« weiß » est la forme de wissen pour la première personne du singulier. Au singulier, le radical est weiß-, au pluriel wiss-.",
            "de": "„weiß“ ist die Form von wissen für die erste Person Singular. Im Singular lautet der Stamm weiß-, im Plural wiss-.",
            "ar": "الصيغة «weiß» من الفعل wissen توافق المتكلم المفرد. الجذر في المفرد weiß- وفي الجمع wiss-.",
            "en": "“weiß” is the form of wissen for first-person singular. The stem is weiß- in the singular and wiss- in the plural."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Weißt du das?",
          "context": {
            "fr": "Le sais-tu ?",
            "de": "Weißt du das?",
            "ar": "هل تعرف ذلك؟",
            "en": "Do you know that?"
          },
          "explanation": {
            "fr": "« weißt » est la forme de wissen pour la deuxième personne du singulier. Au singulier, le radical est weiß-, au pluriel wiss-.",
            "de": "„weißt“ ist die Form von wissen für die zweite Person Singular. Im Singular lautet der Stamm weiß-, im Plural wiss-.",
            "ar": "الصيغة «weißt» من الفعل wissen توافق المخاطب المفرد. الجذر في المفرد weiß- وفي الجمع wiss-.",
            "en": "“weißt” is the form of wissen for second-person singular. The stem is weiß- in the singular and wiss- in the plural."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Er weiß es nicht.",
          "context": {
            "fr": "Il ne le sait pas.",
            "de": "Er weiß es nicht.",
            "ar": "هو لا يعرف ذلك.",
            "en": "He does not know it."
          },
          "explanation": {
            "fr": "« weiß » est la forme de wissen pour la troisième personne du singulier. Au singulier, le radical est weiß-, au pluriel wiss-.",
            "de": "„weiß“ ist die Form von wissen für die dritte Person Singular. Im Singular lautet der Stamm weiß-, im Plural wiss-.",
            "ar": "الصيغة «weiß» من الفعل wissen توافق الغائب المفرد. الجذر في المفرد weiß- وفي الجمع wiss-.",
            "en": "“weiß” is the form of wissen for third-person singular. The stem is weiß- in the singular and wiss- in the plural."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Wir wissen, wo du wohnst.",
          "context": {
            "fr": "Nous savons où tu habites.",
            "de": "Wir wissen, wo du wohnst.",
            "ar": "نعرف أين تسكن.",
            "en": "We know where you live."
          },
          "explanation": {
            "fr": "« wissen » est la forme de wissen pour la première personne du pluriel. Au singulier, le radical est weiß-, au pluriel wiss-.",
            "de": "„wissen“ ist die Form von wissen für die erste Person Plural. Im Singular lautet der Stamm weiß-, im Plural wiss-.",
            "ar": "الصيغة «wissen» من الفعل wissen توافق المتكلم الجمع. الجذر في المفرد weiß- وفي الجمع wiss-.",
            "en": "“wissen” is the form of wissen for first-person plural. The stem is weiß- in the singular and wiss- in the plural."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Wisst ihr das schon?",
          "context": {
            "fr": "Le savez-vous déjà ?",
            "de": "Wisst ihr das schon?",
            "ar": "هل تعرفون ذلك بالفعل؟",
            "en": "Do you already know that?"
          },
          "explanation": {
            "fr": "« wisst » est la forme de wissen pour la deuxième personne du pluriel. Au singulier, le radical est weiß-, au pluriel wiss-.",
            "de": "„wisst“ ist die Form von wissen für die zweite Person Plural. Im Singular lautet der Stamm weiß-, im Plural wiss-.",
            "ar": "الصيغة «wisst» من الفعل wissen توافق المخاطب الجمع. الجذر في المفرد weiß- وفي الجمع wiss-.",
            "en": "“wisst” is the form of wissen for second-person plural. The stem is weiß- in the singular and wiss- in the plural."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Ich tue mein Bestes.",
          "context": {
            "fr": "Je fais de mon mieux.",
            "de": "Ich tue mein Bestes.",
            "ar": "أبذل قصارى جهدي.",
            "en": "I do my best."
          },
          "explanation": {
            "fr": "« tue » est la forme de tun pour la première personne du singulier. tun a un infinitif en -n et des formes tue, tust, tut, tun.",
            "de": "„tue“ ist die Form von tun für die erste Person Singular. tun hat einen Infinitiv auf -n und die Formen tue, tust, tut, tun.",
            "ar": "الصيغة «tue» من الفعل tun توافق المتكلم المفرد. ينتهي مصدر tun بـ -n وله الصيغ tue وtust وtut وtun.",
            "en": "“tue” is the form of tun for first-person singular. tun has an infinitive ending in -n and the forms tue, tust, tut, tun."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Was tust du gerade?",
          "context": {
            "fr": "Que fais-tu en ce moment ?",
            "de": "Was tust du gerade?",
            "ar": "ماذا تفعل الآن؟",
            "en": "What are you doing right now?"
          },
          "explanation": {
            "fr": "« tust » est la forme de tun pour la deuxième personne du singulier. tun a un infinitif en -n et des formes tue, tust, tut, tun.",
            "de": "„tust“ ist die Form von tun für die zweite Person Singular. tun hat einen Infinitiv auf -n und die Formen tue, tust, tut, tun.",
            "ar": "الصيغة «tust» من الفعل tun توافق المخاطب المفرد. ينتهي مصدر tun بـ -n وله الصيغ tue وtust وtut وtun.",
            "en": "“tust” is the form of tun for second-person singular. tun has an infinitive ending in -n and the forms tue, tust, tut, tun."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Er tut nichts.",
          "context": {
            "fr": "Il ne fait rien.",
            "de": "Er tut nichts.",
            "ar": "لا يفعل شيئاً.",
            "en": "He does nothing."
          },
          "explanation": {
            "fr": "« tut » est la forme de tun pour la troisième personne du singulier. tun a un infinitif en -n et des formes tue, tust, tut, tun.",
            "de": "„tut“ ist die Form von tun für die dritte Person Singular. tun hat einen Infinitiv auf -n und die Formen tue, tust, tut, tun.",
            "ar": "الصيغة «tut» من الفعل tun توافق الغائب المفرد. ينتهي مصدر tun بـ -n وله الصيغ tue وtust وtut وtun.",
            "en": "“tut” is the form of tun for third-person singular. tun has an infinitive ending in -n and the forms tue, tust, tut, tun."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Wir tun etwas für die Umwelt.",
          "context": {
            "fr": "Nous faisons quelque chose pour l’environnement.",
            "de": "Wir tun etwas für die Umwelt.",
            "ar": "نفعل شيئاً من أجل البيئة.",
            "en": "We do something for the environment."
          },
          "explanation": {
            "fr": "« tun » est la forme de tun pour la première personne du pluriel. tun a un infinitif en -n et des formes tue, tust, tut, tun.",
            "de": "„tun“ ist die Form von tun für die erste Person Plural. tun hat einen Infinitiv auf -n und die Formen tue, tust, tut, tun.",
            "ar": "الصيغة «tun» من الفعل tun توافق المتكلم الجمع. ينتهي مصدر tun بـ -n وله الصيغ tue وtust وtut وtun.",
            "en": "“tun” is the form of tun for first-person plural. tun has an infinitive ending in -n and the forms tue, tust, tut, tun."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Was tun Sie beruflich?",
          "context": {
            "fr": "Que faites-vous comme métier ?",
            "de": "Was tun Sie beruflich?",
            "ar": "ماذا تعمل؟",
            "en": "What do you do for a living?"
          },
          "explanation": {
            "fr": "« tun » est la forme de tun pour la forme de la troisième personne du pluriel ou du Sie de politesse. tun a un infinitif en -n et des formes tue, tust, tut, tun.",
            "de": "„tun“ ist die Form von tun für die Form der dritten Person Plural oder der Höflichkeitsform Sie. tun hat einen Infinitiv auf -n und die Formen tue, tust, tut, tun.",
            "ar": "الصيغة «tun» من الفعل tun توافق صيغة الغائب الجمع أو المخاطب للاحترام Sie. ينتهي مصدر tun بـ -n وله الصيغ tue وtust وtut وtun.",
            "en": "“tun” is the form of tun for third-person plural or formal Sie agreement. tun has an infinitive ending in -n and the forms tue, tust, tut, tun."
          }
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-dialog",
      "title": {
        "fr": "Mini-dialogue : au café",
        "de": "Mini-Dialog: Im Café",
        "ar": "حوار قصير: في المقهى",
        "en": "Mini-dialogue: at the café"
      },
      "text": {
        "fr": "A: Was möchten Sie trinken? (Que souhaitez-vous boire ?)\nB: Ich möchte einen Tee. Haben Sie auch Kuchen? (Je voudrais un thé. Avez-vous aussi du gâteau ?)\nA: Ja. Mögen Sie Schokoladenkuchen? (Oui. Aimez-vous le gâteau au chocolat ?)\nB: Ja, sehr gern. (Oui, beaucoup.)",
        "de": "A: Was möchten Sie trinken?\nB: Ich möchte einen Tee. Haben Sie auch Kuchen?\nA: Ja. Mögen Sie Schokoladenkuchen?\nB: Ja, sehr gern.",
        "ar": "أ: Was möchten Sie trinken? (ماذا تريد أن تشرب؟)\nب: Ich möchte einen Tee. Haben Sie auch Kuchen? (أود شاياً. هل لديكم كعك أيضاً؟)\nأ: Ja. Mögen Sie Schokoladenkuchen? (نعم. هل تحب كعكة الشوكولاتة؟)\nب: Ja, sehr gern. (نعم، كثيراً.)",
        "en": "A: Was möchten Sie trinken? (What would you like to drink?)\nB: Ich möchte einen Tee. Haben Sie auch Kuchen? (I would like tea. Do you also have cake?)\nA: Ja. Mögen Sie Schokoladenkuchen? (Yes. Do you like chocolate cake?)\nB: Ja, sehr gern. (Yes, very much.)"
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
        "fr": "❌ Ich habe 25 Jahre. → ✓ Ich bin 25 Jahre alt. (âge : sein)\n❌ Du habst Zeit. → ✓ Du hast Zeit.\n❌ Er möchte trinkt. → ✓ Er möchte trinken.\n❌ Ich wisse das. → ✓ Ich weiß das.",
        "de": "❌ Ich habe 25 Jahre. → ✓ Ich bin 25 Jahre alt. (Alter: sein)\n❌ Du habst Zeit. → ✓ Du hast Zeit.\n❌ Er möchte trinkt. → ✓ Er möchte trinken.\n❌ Ich wisse das. → ✓ Ich weiß das.",
        "ar": "❌ Ich habe 25 Jahre. → ✓ Ich bin 25 Jahre alt. (العمر مع sein)\n❌ Du habst Zeit. → ✓ Du hast Zeit.\n❌ Er möchte trinkt. → ✓ Er möchte trinken.\n❌ Ich wisse das. → ✓ Ich weiß das.",
        "en": "❌ Ich habe 25 Jahre. → ✓ Ich bin 25 Jahre alt. (age: sein)\n❌ Du habst Zeit. → ✓ Du hast Zeit.\n❌ Er möchte trinkt. → ✓ Er möchte trinken.\n❌ Ich wisse das. → ✓ Ich weiß das."
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
        "fr": "Choisis sein pour l’identité, l’âge et l’état, haben pour la possession et certaines expressions, mögen pour un goût, möchten pour un souhait, wissen pour un fait et tun pour une action. Apprends leurs formes par cœur.",
        "de": "Wähle sein für Identität, Alter und Zustand, haben für Besitz und bestimmte Ausdrücke, mögen für Vorlieben, möchten für Wünsche, wissen für Fakten und tun für Handlungen. Lerne die Formen auswendig.",
        "ar": "اختر sein للهوية والعمر والحالة، وhaben للملكية وبعض التعبيرات، وmögen للتفضيل، وmöchten للرغبة، وwissen للمعرفة، وtun للفعل. احفظ الصيغ.",
        "en": "Use sein for identity, age and states, haben for possession and certain expressions, mögen for liking, möchten for wishes, wissen for facts and tun for actions. Memorize their forms."
      }
    }
  ]
}

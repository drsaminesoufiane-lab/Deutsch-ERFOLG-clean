import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  "id": "kapitel-05",
  "title": {
    "fr": "Je dois, je peux, je veux",
    "de": "Ich muss, ich kann, ich will",
    "ar": "يجب عليّ، أستطيع، أريد",
    "en": "I must, I can, I want"
  },
  "subtitle": {
    "fr": "Verbes modaux : conjugaison et position",
    "de": "Modalverben: Konjugation und Position im Satz",
    "ar": "الأفعال الناقصة: التصريف والموقع",
    "en": "Modal verbs: conjugation and sentence position"
  },
  "objective": {
    "fr": "Conjuguer les six formes et construire des phrases avec un infinitif.",
    "de": "Die sechs Formen konjugieren und Sätze mit Infinitiv bilden.",
    "ar": "تصريف الصيغ الست وبناء جمل مع المصدر.",
    "en": "Conjugate the six forms and build sentences with an infinitive."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "premium-intro",
      "title": {
        "fr": "Verbes modaux et leur sens",
        "de": "Modalverben und ihre Bedeutung",
        "ar": "الأفعال الناقصة ومعانيها",
        "en": "Modal verbs and their meanings"
      },
      "text": {
        "fr": "Un verbe modal précise le rapport à l’action : obligation, capacité, permission, volonté, consigne ou souhait. Le verbe principal exprime l’action elle-même. Compare : Ich arbeite. → Ich muss arbeiten.",
        "de": "Ein Modalverb verändert die Bedeutung einer Handlung: Notwendigkeit, Fähigkeit, Erlaubnis, Wille, Auftrag oder Wunsch. Das Vollverb nennt die Handlung selbst. Vergleiche: Ich arbeite. → Ich muss arbeiten.",
        "ar": "يحدد الفعل الناقص العلاقة بالفعل: ضرورة أو قدرة أو إذن أو إرادة أو تكليف أو رغبة. ويعبر الفعل الأساسي عن الحدث نفسه. قارن: Ich arbeite. → Ich muss arbeiten.",
        "en": "A modal verb expresses necessity, ability, permission, intention, instruction or a wish. The main verb names the action. Compare: Ich arbeite. → Ich muss arbeiten."
      }
    },
    {
      "type": "table",
      "id": "premium-modal",
      "title": {
        "fr": "Significations",
        "de": "Bedeutungen",
        "ar": "المعاني",
        "en": "Meanings"
      },
      "headers": [
        {
          "fr": "Modalverb",
          "de": "Modalverb",
          "ar": "Modalverb",
          "en": "Modalverb"
        },
        {
          "fr": "Sens",
          "de": "Bedeutung",
          "ar": "المعنى",
          "en": "Meaning"
        }
      ],
      "rows": [
        {
          "id": "premium-modal-1",
          "cells": [
            {
              "fr": "müssen",
              "de": "müssen",
              "ar": "müssen",
              "en": "müssen"
            },
            {
              "fr": "Obligation / nécessité",
              "de": "Notwendigkeit",
              "ar": "ضرورة أو إلزام",
              "en": "Necessity"
            }
          ]
        },
        {
          "id": "premium-modal-2",
          "cells": [
            {
              "fr": "können",
              "de": "können",
              "ar": "können",
              "en": "können"
            },
            {
              "fr": "Capacité / possibilité",
              "de": "Fähigkeit / Möglichkeit",
              "ar": "قدرة أو إمكانية",
              "en": "Ability / possibility"
            }
          ]
        },
        {
          "id": "premium-modal-3",
          "cells": [
            {
              "fr": "dürfen",
              "de": "dürfen",
              "ar": "dürfen",
              "en": "dürfen"
            },
            {
              "fr": "Permission",
              "de": "Erlaubnis",
              "ar": "إذن",
              "en": "Permission"
            }
          ]
        },
        {
          "id": "premium-modal-4",
          "cells": [
            {
              "fr": "wollen",
              "de": "wollen",
              "ar": "wollen",
              "en": "wollen"
            },
            {
              "fr": "Volonté / intention",
              "de": "Wille / Absicht",
              "ar": "إرادة أو نية",
              "en": "Intention"
            }
          ]
        },
        {
          "id": "premium-modal-5",
          "cells": [
            {
              "fr": "sollen",
              "de": "sollen",
              "ar": "sollen",
              "en": "sollen"
            },
            {
              "fr": "Consigne / obligation rapportée",
              "de": "Auftrag / Erwartung",
              "ar": "تكليف أو طلب من الغير",
              "en": "Instruction / expectation"
            }
          ]
        },
        {
          "id": "premium-modal-6",
          "cells": [
            {
              "fr": "möchten",
              "de": "möchten",
              "ar": "möchten",
              "en": "möchten"
            },
            {
              "fr": "Souhait poli",
              "de": "Höflicher Wunsch",
              "ar": "رغبة مهذبة",
              "en": "Polite wish"
            }
          ]
        }
      ]
    },
    {
      "type": "table",
      "id": "premium-konjugation",
      "title": {
        "fr": "Conjugaison",
        "de": "Konjugation",
        "ar": "التصريف",
        "en": "Conjugation"
      },
      "headers": [
        {
          "fr": "Pronom sujet",
          "de": "Subjektpronomen",
          "ar": "ضمير الفاعل",
          "en": "Subject pronoun"
        },
        {
          "fr": "müssen",
          "de": "müssen",
          "ar": "müssen",
          "en": "müssen"
        },
        {
          "fr": "können",
          "de": "können",
          "ar": "können",
          "en": "können"
        },
        {
          "fr": "dürfen",
          "de": "dürfen",
          "ar": "dürfen",
          "en": "dürfen"
        },
        {
          "fr": "wollen",
          "de": "wollen",
          "ar": "wollen",
          "en": "wollen"
        },
        {
          "fr": "sollen",
          "de": "sollen",
          "ar": "sollen",
          "en": "sollen"
        },
        {
          "fr": "möchten",
          "de": "möchten",
          "ar": "möchten",
          "en": "möchten"
        }
      ],
      "rows": [
        {
          "id": "premium-konjugation-1",
          "cells": [
            {
              "fr": "ich",
              "de": "ich",
              "ar": "ich",
              "en": "ich"
            },
            {
              "fr": "muss",
              "de": "muss",
              "ar": "muss",
              "en": "muss"
            },
            {
              "fr": "kann",
              "de": "kann",
              "ar": "kann",
              "en": "kann"
            },
            {
              "fr": "darf",
              "de": "darf",
              "ar": "darf",
              "en": "darf"
            },
            {
              "fr": "will",
              "de": "will",
              "ar": "will",
              "en": "will"
            },
            {
              "fr": "soll",
              "de": "soll",
              "ar": "soll",
              "en": "soll"
            },
            {
              "fr": "möchte",
              "de": "möchte",
              "ar": "möchte",
              "en": "möchte"
            }
          ]
        },
        {
          "id": "premium-konjugation-2",
          "cells": [
            {
              "fr": "du",
              "de": "du",
              "ar": "du",
              "en": "du"
            },
            {
              "fr": "musst",
              "de": "musst",
              "ar": "musst",
              "en": "musst"
            },
            {
              "fr": "kannst",
              "de": "kannst",
              "ar": "kannst",
              "en": "kannst"
            },
            {
              "fr": "darfst",
              "de": "darfst",
              "ar": "darfst",
              "en": "darfst"
            },
            {
              "fr": "willst",
              "de": "willst",
              "ar": "willst",
              "en": "willst"
            },
            {
              "fr": "sollst",
              "de": "sollst",
              "ar": "sollst",
              "en": "sollst"
            },
            {
              "fr": "möchtest",
              "de": "möchtest",
              "ar": "möchtest",
              "en": "möchtest"
            }
          ]
        },
        {
          "id": "premium-konjugation-3",
          "cells": [
            {
              "fr": "er / sie / es",
              "de": "er / sie / es",
              "ar": "er / sie / es",
              "en": "er / sie / es"
            },
            {
              "fr": "muss",
              "de": "muss",
              "ar": "muss",
              "en": "muss"
            },
            {
              "fr": "kann",
              "de": "kann",
              "ar": "kann",
              "en": "kann"
            },
            {
              "fr": "darf",
              "de": "darf",
              "ar": "darf",
              "en": "darf"
            },
            {
              "fr": "will",
              "de": "will",
              "ar": "will",
              "en": "will"
            },
            {
              "fr": "soll",
              "de": "soll",
              "ar": "soll",
              "en": "soll"
            },
            {
              "fr": "möchte",
              "de": "möchte",
              "ar": "möchte",
              "en": "möchte"
            }
          ]
        },
        {
          "id": "premium-konjugation-4",
          "cells": [
            {
              "fr": "wir",
              "de": "wir",
              "ar": "wir",
              "en": "wir"
            },
            {
              "fr": "müssen",
              "de": "müssen",
              "ar": "müssen",
              "en": "müssen"
            },
            {
              "fr": "können",
              "de": "können",
              "ar": "können",
              "en": "können"
            },
            {
              "fr": "dürfen",
              "de": "dürfen",
              "ar": "dürfen",
              "en": "dürfen"
            },
            {
              "fr": "wollen",
              "de": "wollen",
              "ar": "wollen",
              "en": "wollen"
            },
            {
              "fr": "sollen",
              "de": "sollen",
              "ar": "sollen",
              "en": "sollen"
            },
            {
              "fr": "möchten",
              "de": "möchten",
              "ar": "möchten",
              "en": "möchten"
            }
          ]
        },
        {
          "id": "premium-konjugation-5",
          "cells": [
            {
              "fr": "ihr",
              "de": "ihr",
              "ar": "ihr",
              "en": "ihr"
            },
            {
              "fr": "müsst",
              "de": "müsst",
              "ar": "müsst",
              "en": "müsst"
            },
            {
              "fr": "könnt",
              "de": "könnt",
              "ar": "könnt",
              "en": "könnt"
            },
            {
              "fr": "dürft",
              "de": "dürft",
              "ar": "dürft",
              "en": "dürft"
            },
            {
              "fr": "wollt",
              "de": "wollt",
              "ar": "wollt",
              "en": "wollt"
            },
            {
              "fr": "sollt",
              "de": "sollt",
              "ar": "sollt",
              "en": "sollt"
            },
            {
              "fr": "möchtet",
              "de": "möchtet",
              "ar": "möchtet",
              "en": "möchtet"
            }
          ]
        },
        {
          "id": "premium-konjugation-6",
          "cells": [
            {
              "fr": "sie / Sie",
              "de": "sie / Sie",
              "ar": "sie / Sie",
              "en": "sie / Sie"
            },
            {
              "fr": "müssen",
              "de": "müssen",
              "ar": "müssen",
              "en": "müssen"
            },
            {
              "fr": "können",
              "de": "können",
              "ar": "können",
              "en": "können"
            },
            {
              "fr": "dürfen",
              "de": "dürfen",
              "ar": "dürfen",
              "en": "dürfen"
            },
            {
              "fr": "wollen",
              "de": "wollen",
              "ar": "wollen",
              "en": "wollen"
            },
            {
              "fr": "sollen",
              "de": "sollen",
              "ar": "sollen",
              "en": "sollen"
            },
            {
              "fr": "möchten",
              "de": "möchten",
              "ar": "möchten",
              "en": "möchten"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-klammer",
      "title": {
        "fr": "Le cadre verbal",
        "de": "Die Satzklammer",
        "ar": "الإطار الفعلي",
        "en": "The verb bracket"
      },
      "text": {
        "fr": "Dans une proposition principale, le modal conjugué est en deuxième position et le verbe principal à l’infinitif (sans zu) en fin de phrase. Même un verbe séparable reste entier : Morgen muss ich früh aufstehen. Dans une question oui/non, le modal est en première position : Kannst du kommen? Si l’action est évidente dans le contexte, l’infinitif peut être omis : Ich möchte Wasser.",
        "de": "Im Hauptsatz steht das finite Modalverb an Position zwei; das Vollverb steht als Infinitiv ohne zu am Ende. Trennbare Verben bleiben dabei zusammen: Morgen muss ich früh aufstehen. In Ja/Nein-Fragen steht das Modalverb zuerst: Kannst du kommen? Ist die Handlung klar, kann der Infinitiv fehlen: Ich möchte Wasser.",
        "ar": "في الجملة الرئيسية يأتي الفعل الناقص المصرف في الموقع الثاني والفعل الأساسي في المصدر دون zu في النهاية. يبقى الفعل القابل للانفصال متصلاً: Morgen muss ich früh aufstehen. وفي سؤال نعم أو لا يأتي الفعل الناقص أولاً: Kannst du kommen? ويمكن حذف المصدر إذا كان مفهوماً من السياق: Ich möchte Wasser.",
        "en": "In a main clause the finite modal occupies position two; the main verb is a bare infinitive at the end. Separable verbs stay intact: Morgen muss ich früh aufstehen. In yes/no questions the modal comes first: Kannst du kommen? The infinitive can be omitted when context makes it clear: Ich möchte Wasser."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-negation",
      "title": {
        "fr": "Ne pas être obligé ou ne pas avoir le droit ?",
        "de": "Nicht müssen oder nicht dürfen?",
        "ar": "عدم الإلزام أم المنع؟",
        "en": "Not having to or not being allowed to?"
      },
      "text": {
        "fr": "nicht müssen = ne pas être obligé (on peut quand même le faire). nicht dürfen = ne pas avoir le droit (interdiction). Ich muss nicht arbeiten : je peux me reposer. Ich darf hier nicht parken : stationner est interdit.",
        "de": "nicht müssen = keine Pflicht (es bleibt erlaubt). nicht dürfen = Verbot. Ich muss nicht arbeiten: Ich kann mich ausruhen. Ich darf hier nicht parken: Parken ist verboten.",
        "ar": "nicht müssen تعني عدم الإلزام مع بقاء الفعل مسموحاً. nicht dürfen تعني المنع. Ich muss nicht arbeiten: لست مضطراً للعمل. Ich darf hier nicht parken: لا يسمح لي بالركن هنا.",
        "en": "nicht müssen means no obligation (the action is still allowed). nicht dürfen means prohibition. Ich muss nicht arbeiten: I can rest. Ich darf hier nicht parken: parking is forbidden."
      }
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
          "german": "Ich muss heute arbeiten.",
          "context": {
            "fr": "Je dois travailler aujourd’hui.",
            "de": "Ich muss heute arbeiten.",
            "ar": "يجب أن أعمل اليوم.",
            "en": "I have to work today."
          },
          "explanation": {
            "fr": "« muss » est la forme de müssen pour la première personne du singulier. Ici le modal exprime une nécessité ; arbeiten reste à l’infinitif en fin de phrase.",
            "de": "„muss“ ist die Form von müssen für die erste Person Singular. Hier drückt das Modalverb eine Notwendigkeit aus; arbeiten bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «muss» من الفعل müssen توافق المتكلم المفرد. يعبر الفعل الناقص هنا عن ضرورة، ويبقى arbeiten في المصدر في نهاية الجملة.",
            "en": "“muss” is the form of müssen for first-person singular. Here the modal expresses necessity; arbeiten remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Du musst früh aufstehen.",
          "context": {
            "fr": "Tu dois te lever tôt.",
            "de": "Du musst früh aufstehen.",
            "ar": "يجب أن تستيقظ مبكراً.",
            "en": "You have to get up early."
          },
          "explanation": {
            "fr": "« musst » est la forme de müssen pour la deuxième personne du singulier. Ici le modal exprime une nécessité ; aufstehen reste à l’infinitif en fin de phrase.",
            "de": "„musst“ ist die Form von müssen für die zweite Person Singular. Hier drückt das Modalverb eine Notwendigkeit aus; aufstehen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «musst» من الفعل müssen توافق المخاطب المفرد. يعبر الفعل الناقص هنا عن ضرورة، ويبقى aufstehen في المصدر في نهاية الجملة.",
            "en": "“musst” is the form of müssen for second-person singular. Here the modal expresses necessity; aufstehen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Er muss zum Arzt gehen.",
          "context": {
            "fr": "Il doit aller chez le médecin.",
            "de": "Er muss zum Arzt gehen.",
            "ar": "يجب أن يذهب إلى الطبيب.",
            "en": "He has to go to the doctor."
          },
          "explanation": {
            "fr": "« muss » est la forme de müssen pour la troisième personne du singulier. Ici le modal exprime une nécessité ; gehen reste à l’infinitif en fin de phrase.",
            "de": "„muss“ ist die Form von müssen für die dritte Person Singular. Hier drückt das Modalverb eine Notwendigkeit aus; gehen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «muss» من الفعل müssen توافق الغائب المفرد. يعبر الفعل الناقص هنا عن ضرورة، ويبقى gehen في المصدر في نهاية الجملة.",
            "en": "“muss” is the form of müssen for third-person singular. Here the modal expresses necessity; gehen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Wir müssen jetzt gehen.",
          "context": {
            "fr": "Nous devons partir maintenant.",
            "de": "Wir müssen jetzt gehen.",
            "ar": "يجب أن نذهب الآن.",
            "en": "We have to leave now."
          },
          "explanation": {
            "fr": "« müssen » est la forme de müssen pour la première personne du pluriel. Ici le modal exprime une nécessité ; gehen reste à l’infinitif en fin de phrase.",
            "de": "„müssen“ ist die Form von müssen für die erste Person Plural. Hier drückt das Modalverb eine Notwendigkeit aus; gehen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «müssen» من الفعل müssen توافق المتكلم الجمع. يعبر الفعل الناقص هنا عن ضرورة، ويبقى gehen في المصدر في نهاية الجملة.",
            "en": "“müssen” is the form of müssen for first-person plural. Here the modal expresses necessity; gehen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Ihr müsst nicht warten.",
          "context": {
            "fr": "Vous n’êtes pas obligés d’attendre.",
            "de": "Ihr müsst nicht warten.",
            "ar": "لستم مضطرين إلى الانتظار.",
            "en": "You do not have to wait."
          },
          "explanation": {
            "fr": "« müsst » est la forme de müssen pour la deuxième personne du pluriel. Ici le modal exprime une absence d’obligation ; warten reste à l’infinitif en fin de phrase.",
            "de": "„müsst“ ist die Form von müssen für die zweite Person Plural. Hier drückt das Modalverb das Fehlen einer Pflicht aus; warten bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «müsst» من الفعل müssen توافق المخاطب الجمع. يعبر الفعل الناقص هنا عن عدم الإلزام، ويبقى warten في المصدر في نهاية الجملة.",
            "en": "“müsst” is the form of müssen for second-person plural. Here the modal expresses lack of obligation; warten remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Ich kann schwimmen.",
          "context": {
            "fr": "Je sais nager.",
            "de": "Ich kann schwimmen.",
            "ar": "أستطيع السباحة.",
            "en": "I can swim."
          },
          "explanation": {
            "fr": "« kann » est la forme de können pour la première personne du singulier. Ici le modal exprime une capacité ou une possibilité ; schwimmen reste à l’infinitif en fin de phrase.",
            "de": "„kann“ ist die Form von können für die erste Person Singular. Hier drückt das Modalverb eine Fähigkeit oder Möglichkeit aus; schwimmen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «kann» من الفعل können توافق المتكلم المفرد. يعبر الفعل الناقص هنا عن قدرة أو إمكانية، ويبقى schwimmen في المصدر في نهاية الجملة.",
            "en": "“kann” is the form of können for first-person singular. Here the modal expresses ability or possibility; schwimmen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Kannst du morgen kommen?",
          "context": {
            "fr": "Peux-tu venir demain ?",
            "de": "Kannst du morgen kommen?",
            "ar": "هل تستطيع المجيء غداً؟",
            "en": "Can you come tomorrow?"
          },
          "explanation": {
            "fr": "« kannst » est la forme de können pour la deuxième personne du singulier. Ici le modal exprime une capacité ou une possibilité ; kommen reste à l’infinitif en fin de phrase.",
            "de": "„kannst“ ist die Form von können für die zweite Person Singular. Hier drückt das Modalverb eine Fähigkeit oder Möglichkeit aus; kommen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «kannst» من الفعل können توافق المخاطب المفرد. يعبر الفعل الناقص هنا عن قدرة أو إمكانية، ويبقى kommen في المصدر في نهاية الجملة.",
            "en": "“kannst” is the form of können for second-person singular. Here the modal expresses ability or possibility; kommen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "Sie kann gut kochen.",
          "context": {
            "fr": "Elle sait bien cuisiner.",
            "de": "Sie kann gut kochen.",
            "ar": "تجيد الطبخ.",
            "en": "She can cook well."
          },
          "explanation": {
            "fr": "« kann » est la forme de können pour la troisième personne du singulier. Ici le modal exprime une capacité ou une possibilité ; kochen reste à l’infinitif en fin de phrase.",
            "de": "„kann“ ist die Form von können für die dritte Person Singular. Hier drückt das Modalverb eine Fähigkeit oder Möglichkeit aus; kochen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «kann» من الفعل können توافق الغائب المفرد. يعبر الفعل الناقص هنا عن قدرة أو إمكانية، ويبقى kochen في المصدر في نهاية الجملة.",
            "en": "“kann” is the form of können for third-person singular. Here the modal expresses ability or possibility; kochen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Heute können wir lernen.",
          "context": {
            "fr": "Aujourd’hui, nous pouvons étudier.",
            "de": "Heute können wir lernen.",
            "ar": "اليوم يمكننا الدراسة.",
            "en": "Today we can study."
          },
          "explanation": {
            "fr": "« können » est la forme de können pour la première personne du pluriel. Ici le modal exprime une capacité ou une possibilité ; lernen reste à l’infinitif en fin de phrase.",
            "de": "„können“ ist die Form von können für die erste Person Plural. Hier drückt das Modalverb eine Fähigkeit oder Möglichkeit aus; lernen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «können» من الفعل können توافق المتكلم الجمع. يعبر الفعل الناقص هنا عن قدرة أو إمكانية، ويبقى lernen في المصدر في نهاية الجملة.",
            "en": "“können” is the form of können for first-person plural. Here the modal expresses ability or possibility; lernen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Können Sie mir helfen?",
          "context": {
            "fr": "Pouvez-vous m’aider ?",
            "de": "Können Sie mir helfen?",
            "ar": "هل يمكنك مساعدتي؟",
            "en": "Can you help me?"
          },
          "explanation": {
            "fr": "« können » est la forme de können pour la forme de la troisième personne du pluriel ou du Sie de politesse. Ici le modal exprime une capacité ou une possibilité ; helfen reste à l’infinitif en fin de phrase.",
            "de": "„können“ ist die Form von können für die Form der dritten Person Plural oder der Höflichkeitsform Sie. Hier drückt das Modalverb eine Fähigkeit oder Möglichkeit aus; helfen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «können» من الفعل können توافق صيغة الغائب الجمع أو المخاطب للاحترام Sie. يعبر الفعل الناقص هنا عن قدرة أو إمكانية، ويبقى helfen في المصدر في نهاية الجملة.",
            "en": "“können” is the form of können for third-person plural or formal Sie agreement. Here the modal expresses ability or possibility; helfen remains an infinitive at the end."
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
          "german": "Ich darf hier sitzen.",
          "context": {
            "fr": "J’ai le droit de m’asseoir ici.",
            "de": "Ich darf hier sitzen.",
            "ar": "يسمح لي بالجلوس هنا.",
            "en": "I may sit here."
          },
          "explanation": {
            "fr": "« darf » est la forme de dürfen pour la première personne du singulier. Ici le modal exprime une permission ; sitzen reste à l’infinitif en fin de phrase.",
            "de": "„darf“ ist die Form von dürfen für die erste Person Singular. Hier drückt das Modalverb eine Erlaubnis aus; sitzen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «darf» من الفعل dürfen توافق المتكلم المفرد. يعبر الفعل الناقص هنا عن إذناً، ويبقى sitzen في المصدر في نهاية الجملة.",
            "en": "“darf” is the form of dürfen for first-person singular. Here the modal expresses permission; sitzen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Du darfst hier nicht rauchen.",
          "context": {
            "fr": "Tu n’as pas le droit de fumer ici.",
            "de": "Du darfst hier nicht rauchen.",
            "ar": "لا يسمح لك بالتدخين هنا.",
            "en": "You must not smoke here."
          },
          "explanation": {
            "fr": "« darfst » est la forme de dürfen pour la deuxième personne du singulier. Ici le modal exprime une interdiction ; rauchen reste à l’infinitif en fin de phrase.",
            "de": "„darfst“ ist die Form von dürfen für die zweite Person Singular. Hier drückt das Modalverb ein Verbot aus; rauchen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «darfst» من الفعل dürfen توافق المخاطب المفرد. يعبر الفعل الناقص هنا عن منعاً، ويبقى rauchen في المصدر في نهاية الجملة.",
            "en": "“darfst” is the form of dürfen for second-person singular. Here the modal expresses prohibition; rauchen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Das Kind darf draußen spielen.",
          "context": {
            "fr": "L’enfant a le droit de jouer dehors.",
            "de": "Das Kind darf draußen spielen.",
            "ar": "يسمح للطفل باللعب في الخارج.",
            "en": "The child is allowed to play outside."
          },
          "explanation": {
            "fr": "« darf » est la forme de dürfen pour la troisième personne du singulier. Ici le modal exprime une permission ; spielen reste à l’infinitif en fin de phrase.",
            "de": "„darf“ ist die Form von dürfen für die dritte Person Singular. Hier drückt das Modalverb eine Erlaubnis aus; spielen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «darf» من الفعل dürfen توافق الغائب المفرد. يعبر الفعل الناقص هنا عن إذناً، ويبقى spielen في المصدر في نهاية الجملة.",
            "en": "“darf” is the form of dürfen for third-person singular. Here the modal expresses permission; spielen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Wir dürfen früher gehen.",
          "context": {
            "fr": "Nous avons le droit de partir plus tôt.",
            "de": "Wir dürfen früher gehen.",
            "ar": "يسمح لنا بالمغادرة مبكراً.",
            "en": "We may leave earlier."
          },
          "explanation": {
            "fr": "« dürfen » est la forme de dürfen pour la première personne du pluriel. Ici le modal exprime une permission ; gehen reste à l’infinitif en fin de phrase.",
            "de": "„dürfen“ ist die Form von dürfen für die erste Person Plural. Hier drückt das Modalverb eine Erlaubnis aus; gehen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «dürfen» من الفعل dürfen توافق المتكلم الجمع. يعبر الفعل الناقص هنا عن إذناً، ويبقى gehen في المصدر في نهاية الجملة.",
            "en": "“dürfen” is the form of dürfen for first-person plural. Here the modal expresses permission; gehen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Dürft ihr hier parken?",
          "context": {
            "fr": "Avez-vous le droit de stationner ici ?",
            "de": "Dürft ihr hier parken?",
            "ar": "هل يسمح لكم بالركن هنا؟",
            "en": "Are you allowed to park here?"
          },
          "explanation": {
            "fr": "« dürft » est la forme de dürfen pour la deuxième personne du pluriel. Ici le modal exprime une permission ; parken reste à l’infinitif en fin de phrase.",
            "de": "„dürft“ ist die Form von dürfen für die zweite Person Plural. Hier drückt das Modalverb eine Erlaubnis aus; parken bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «dürft» من الفعل dürfen توافق المخاطب الجمع. يعبر الفعل الناقص هنا عن إذناً، ويبقى parken في المصدر في نهاية الجملة.",
            "en": "“dürft” is the form of dürfen for second-person plural. Here the modal expresses permission; parken remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Ich will Deutsch lernen.",
          "context": {
            "fr": "Je veux apprendre l’allemand.",
            "de": "Ich will Deutsch lernen.",
            "ar": "أريد تعلم الألمانية.",
            "en": "I want to learn German."
          },
          "explanation": {
            "fr": "« will » est la forme de wollen pour la première personne du singulier. Ici le modal exprime une intention ; lernen reste à l’infinitif en fin de phrase.",
            "de": "„will“ ist die Form von wollen für die erste Person Singular. Hier drückt das Modalverb eine Absicht aus; lernen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «will» من الفعل wollen توافق المتكلم المفرد. يعبر الفعل الناقص هنا عن نية، ويبقى lernen في المصدر في نهاية الجملة.",
            "en": "“will” is the form of wollen for first-person singular. Here the modal expresses intention; lernen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Willst du mitkommen?",
          "context": {
            "fr": "Veux-tu venir avec nous ?",
            "de": "Willst du mitkommen?",
            "ar": "هل تريد المجيء معنا؟",
            "en": "Do you want to come along?"
          },
          "explanation": {
            "fr": "« willst » est la forme de wollen pour la deuxième personne du singulier. Ici le modal exprime une intention ; mitkommen reste à l’infinitif en fin de phrase.",
            "de": "„willst“ ist die Form von wollen für die zweite Person Singular. Hier drückt das Modalverb eine Absicht aus; mitkommen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «willst» من الفعل wollen توافق المخاطب المفرد. يعبر الفعل الناقص هنا عن نية، ويبقى mitkommen في المصدر في نهاية الجملة.",
            "en": "“willst” is the form of wollen for second-person singular. Here the modal expresses intention; mitkommen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Sie will Ärztin werden.",
          "context": {
            "fr": "Elle veut devenir médecin.",
            "de": "Sie will Ärztin werden.",
            "ar": "تريد أن تصبح طبيبة.",
            "en": "She wants to become a doctor."
          },
          "explanation": {
            "fr": "« will » est la forme de wollen pour la troisième personne du singulier. Ici le modal exprime une intention ; werden reste à l’infinitif en fin de phrase.",
            "de": "„will“ ist die Form von wollen für die dritte Person Singular. Hier drückt das Modalverb eine Absicht aus; werden bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «will» من الفعل wollen توافق الغائب المفرد. يعبر الفعل الناقص هنا عن نية، ويبقى werden في المصدر في نهاية الجملة.",
            "en": "“will” is the form of wollen for third-person singular. Here the modal expresses intention; werden remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Wir wollen morgen einkaufen.",
          "context": {
            "fr": "Nous voulons faire les courses demain.",
            "de": "Wir wollen morgen einkaufen.",
            "ar": "نريد التسوق غداً.",
            "en": "We want to go shopping tomorrow."
          },
          "explanation": {
            "fr": "« wollen » est la forme de wollen pour la première personne du pluriel. Ici le modal exprime une intention ; einkaufen reste à l’infinitif en fin de phrase.",
            "de": "„wollen“ ist die Form von wollen für die erste Person Plural. Hier drückt das Modalverb eine Absicht aus; einkaufen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «wollen» من الفعل wollen توافق المتكلم الجمع. يعبر الفعل الناقص هنا عن نية، ويبقى einkaufen في المصدر في نهاية الجملة.",
            "en": "“wollen” is the form of wollen for first-person plural. Here the modal expresses intention; einkaufen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Ihr wollt Fußball spielen.",
          "context": {
            "fr": "Vous voulez jouer au football.",
            "de": "Ihr wollt Fußball spielen.",
            "ar": "تريدون لعب كرة القدم.",
            "en": "You want to play football."
          },
          "explanation": {
            "fr": "« wollt » est la forme de wollen pour la deuxième personne du pluriel. Ici le modal exprime une intention ; spielen reste à l’infinitif en fin de phrase.",
            "de": "„wollt“ ist die Form von wollen für die zweite Person Plural. Hier drückt das Modalverb eine Absicht aus; spielen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «wollt» من الفعل wollen توافق المخاطب الجمع. يعبر الفعل الناقص هنا عن نية، ويبقى spielen في المصدر في نهاية الجملة.",
            "en": "“wollt” is the form of wollen for second-person plural. Here the modal expresses intention; spielen remains an infinitive at the end."
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
          "german": "Ich soll mehr Wasser trinken.",
          "context": {
            "fr": "Je dois boire plus d’eau (sur conseil).",
            "de": "Ich soll mehr Wasser trinken.",
            "ar": "طُلب مني أن أشرب ماء أكثر.",
            "en": "I am supposed to drink more water."
          },
          "explanation": {
            "fr": "« soll » est la forme de sollen pour la première personne du singulier. Ici le modal exprime une consigne ; trinken reste à l’infinitif en fin de phrase.",
            "de": "„soll“ ist die Form von sollen für die erste Person Singular. Hier drückt das Modalverb einen Auftrag aus; trinken bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «soll» من الفعل sollen توافق المتكلم المفرد. يعبر الفعل الناقص هنا عن تكليفاً، ويبقى trinken في المصدر في نهاية الجملة.",
            "en": "“soll” is the form of sollen for first-person singular. Here the modal expresses an instruction; trinken remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Du sollst deine Mutter anrufen.",
          "context": {
            "fr": "Tu dois appeler ta mère (consigne).",
            "de": "Du sollst deine Mutter anrufen.",
            "ar": "طُلب منك الاتصال بأمك.",
            "en": "You are supposed to call your mother."
          },
          "explanation": {
            "fr": "« sollst » est la forme de sollen pour la deuxième personne du singulier. Ici le modal exprime une consigne ; anrufen reste à l’infinitif en fin de phrase.",
            "de": "„sollst“ ist die Form von sollen für die zweite Person Singular. Hier drückt das Modalverb einen Auftrag aus; anrufen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «sollst» من الفعل sollen توافق المخاطب المفرد. يعبر الفعل الناقص هنا عن تكليفاً، ويبقى anrufen في المصدر في نهاية الجملة.",
            "en": "“sollst” is the form of sollen for second-person singular. Here the modal expresses an instruction; anrufen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Er soll die Hausaufgaben machen.",
          "context": {
            "fr": "Il est censé faire ses devoirs.",
            "de": "Er soll die Hausaufgaben machen.",
            "ar": "عليه أن يقوم بواجباته المدرسية.",
            "en": "He is supposed to do his homework."
          },
          "explanation": {
            "fr": "« soll » est la forme de sollen pour la troisième personne du singulier. Ici le modal exprime une consigne ; machen reste à l’infinitif en fin de phrase.",
            "de": "„soll“ ist die Form von sollen für die dritte Person Singular. Hier drückt das Modalverb einen Auftrag aus; machen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «soll» من الفعل sollen توافق الغائب المفرد. يعبر الفعل الناقص هنا عن تكليفاً، ويبقى machen في المصدر في نهاية الجملة.",
            "en": "“soll” is the form of sollen for third-person singular. Here the modal expresses an instruction; machen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Wir sollen hier warten.",
          "context": {
            "fr": "On nous demande d’attendre ici.",
            "de": "Wir sollen hier warten.",
            "ar": "طُلب منا الانتظار هنا.",
            "en": "We are supposed to wait here."
          },
          "explanation": {
            "fr": "« sollen » est la forme de sollen pour la première personne du pluriel. Ici le modal exprime une consigne ; warten reste à l’infinitif en fin de phrase.",
            "de": "„sollen“ ist die Form von sollen für die erste Person Plural. Hier drückt das Modalverb einen Auftrag aus; warten bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «sollen» من الفعل sollen توافق المتكلم الجمع. يعبر الفعل الناقص هنا عن تكليفاً، ويبقى warten في المصدر في نهاية الجملة.",
            "en": "“sollen” is the form of sollen for first-person plural. Here the modal expresses an instruction; warten remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Was sollt ihr lesen?",
          "context": {
            "fr": "Que vous demande-t-on de lire ?",
            "de": "Was sollt ihr lesen?",
            "ar": "ماذا طُلب منكم أن تقرؤوا؟",
            "en": "What are you supposed to read?"
          },
          "explanation": {
            "fr": "« sollt » est la forme de sollen pour la deuxième personne du pluriel. Ici le modal exprime une consigne ; lesen reste à l’infinitif en fin de phrase.",
            "de": "„sollt“ ist die Form von sollen für die zweite Person Plural. Hier drückt das Modalverb einen Auftrag aus; lesen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «sollt» من الفعل sollen توافق المخاطب الجمع. يعبر الفعل الناقص هنا عن تكليفاً، ويبقى lesen في المصدر في نهاية الجملة.",
            "en": "“sollt” is the form of sollen for second-person plural. Here the modal expresses an instruction; lesen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Ich möchte Tee trinken.",
          "context": {
            "fr": "Je voudrais boire du thé.",
            "de": "Ich möchte Tee trinken.",
            "ar": "أود شرب الشاي.",
            "en": "I would like to drink tea."
          },
          "explanation": {
            "fr": "« möchte » est la forme de möchten pour la première personne du singulier. Ici le modal exprime un souhait poli ; trinken reste à l’infinitif en fin de phrase.",
            "de": "„möchte“ ist die Form von möchten für die erste Person Singular. Hier drückt das Modalverb einen höflichen Wunsch aus; trinken bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «möchte» من الفعل möchten توافق المتكلم المفرد. يعبر الفعل الناقص هنا عن رغبة مهذبة، ويبقى trinken في المصدر في نهاية الجملة.",
            "en": "“möchte” is the form of möchten for first-person singular. Here the modal expresses a polite wish; trinken remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Möchtest du etwas essen?",
          "context": {
            "fr": "Voudrais-tu manger quelque chose ?",
            "de": "Möchtest du etwas essen?",
            "ar": "هل ترغب في أكل شيء؟",
            "en": "Would you like to eat something?"
          },
          "explanation": {
            "fr": "« möchtest » est la forme de möchten pour la deuxième personne du singulier. Ici le modal exprime un souhait poli ; essen reste à l’infinitif en fin de phrase.",
            "de": "„möchtest“ ist die Form von möchten für die zweite Person Singular. Hier drückt das Modalverb einen höflichen Wunsch aus; essen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «möchtest» من الفعل möchten توافق المخاطب المفرد. يعبر الفعل الناقص هنا عن رغبة مهذبة، ويبقى essen في المصدر في نهاية الجملة.",
            "en": "“möchtest” is the form of möchten for second-person singular. Here the modal expresses a polite wish; essen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Sie möchte nach Hause fahren.",
          "context": {
            "fr": "Elle voudrait rentrer chez elle.",
            "de": "Sie möchte nach Hause fahren.",
            "ar": "ترغب في العودة إلى المنزل.",
            "en": "She would like to go home."
          },
          "explanation": {
            "fr": "« möchte » est la forme de möchten pour la troisième personne du singulier. Ici le modal exprime un souhait poli ; fahren reste à l’infinitif en fin de phrase.",
            "de": "„möchte“ ist die Form von möchten für die dritte Person Singular. Hier drückt das Modalverb einen höflichen Wunsch aus; fahren bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «möchte» من الفعل möchten توافق الغائب المفرد. يعبر الفعل الناقص هنا عن رغبة مهذبة، ويبقى fahren في المصدر في نهاية الجملة.",
            "en": "“möchte” is the form of möchten for third-person singular. Here the modal expresses a polite wish; fahren remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Wir möchten ein Zimmer buchen.",
          "context": {
            "fr": "Nous voudrions réserver une chambre.",
            "de": "Wir möchten ein Zimmer buchen.",
            "ar": "نود حجز غرفة.",
            "en": "We would like to book a room."
          },
          "explanation": {
            "fr": "« möchten » est la forme de möchten pour la première personne du pluriel. Ici le modal exprime un souhait poli ; buchen reste à l’infinitif en fin de phrase.",
            "de": "„möchten“ ist die Form von möchten für die erste Person Plural. Hier drückt das Modalverb einen höflichen Wunsch aus; buchen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «möchten» من الفعل möchten توافق المتكلم الجمع. يعبر الفعل الناقص هنا عن رغبة مهذبة، ويبقى buchen في المصدر في نهاية الجملة.",
            "en": "“möchten” is the form of möchten for first-person plural. Here the modal expresses a polite wish; buchen remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Was möchten Sie bestellen?",
          "context": {
            "fr": "Que souhaitez-vous commander ?",
            "de": "Was möchten Sie bestellen?",
            "ar": "ماذا ترغب في طلبه؟",
            "en": "What would you like to order?"
          },
          "explanation": {
            "fr": "« möchten » est la forme de möchten pour la forme de la troisième personne du pluriel ou du Sie de politesse. Ici le modal exprime un souhait poli ; bestellen reste à l’infinitif en fin de phrase.",
            "de": "„möchten“ ist die Form von möchten für die Form der dritten Person Plural oder der Höflichkeitsform Sie. Hier drückt das Modalverb einen höflichen Wunsch aus; bestellen bleibt als Infinitiv am Satzende.",
            "ar": "الصيغة «möchten» من الفعل möchten توافق صيغة الغائب الجمع أو المخاطب للاحترام Sie. يعبر الفعل الناقص هنا عن رغبة مهذبة، ويبقى bestellen في المصدر في نهاية الجملة.",
            "en": "“möchten” is the form of möchten for third-person plural or formal Sie agreement. Here the modal expresses a polite wish; bestellen remains an infinitive at the end."
          }
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-dialog",
      "title": {
        "fr": "Mini-dialogue : le week-end",
        "de": "Mini-Dialog: Am Wochenende",
        "ar": "حوار قصير: في عطلة نهاية الأسبوع",
        "en": "Mini-dialogue: at the weekend"
      },
      "text": {
        "fr": "A: Kannst du am Samstag kommen? (Peux-tu venir samedi ?)\nB: Nein, ich muss arbeiten. (Non, je dois travailler.)\nA: Und am Sonntag? (Et dimanche ?)\nB: Da kann ich kommen. Ich möchte mit euch frühstücken. (Là, je peux venir. Je voudrais prendre le petit déjeuner avec vous.)",
        "de": "A: Kannst du am Samstag kommen?\nB: Nein, ich muss arbeiten.\nA: Und am Sonntag?\nB: Da kann ich kommen. Ich möchte mit euch frühstücken.",
        "ar": "أ: Kannst du am Samstag kommen? (هل تستطيع المجيء السبت؟)\nب: Nein, ich muss arbeiten. (لا، يجب أن أعمل.)\nأ: Und am Sonntag? (والأحد؟)\nب: Da kann ich kommen. Ich möchte mit euch frühstücken. (يمكنني المجيء حينها. أود تناول الإفطار معكم.)",
        "en": "A: Kannst du am Samstag kommen? (Can you come on Saturday?)\nB: Nein, ich muss arbeiten. (No, I have to work.)\nA: Und am Sonntag? (And Sunday?)\nB: Da kann ich kommen. Ich möchte mit euch frühstücken. (I can come then. I would like to have breakfast with you.)"
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
        "fr": "❌ Ich kanne schwimmen. → ✓ Ich kann schwimmen. (pas de -e)\n❌ Du musst zu arbeiten. → ✓ Du musst arbeiten. (sans zu)\n❌ Wir wollen kaufen ein. → ✓ Wir wollen einkaufen. (infinitif entier)\n❌ Ihr müst warten. → ✓ Ihr müsst warten. (orthographe)",
        "de": "❌ Ich kanne schwimmen. → ✓ Ich kann schwimmen. (kein -e)\n❌ Du musst zu arbeiten. → ✓ Du musst arbeiten. (ohne zu)\n❌ Wir wollen kaufen ein. → ✓ Wir wollen einkaufen. (ganzer Infinitiv)\n❌ Ihr müst warten. → ✓ Ihr müsst warten. (Schreibung)",
        "ar": "❌ Ich kanne schwimmen. → ✓ Ich kann schwimmen. (دون -e)\n❌ Du musst zu arbeiten. → ✓ Du musst arbeiten. (دون zu)\n❌ Wir wollen kaufen ein. → ✓ Wir wollen einkaufen. (المصدر كامل)\n❌ Ihr müst warten. → ✓ Ihr müsst warten. (الإملاء الصحيح)",
        "en": "❌ Ich kanne schwimmen. → ✓ Ich kann schwimmen. (no -e)\n❌ Du musst zu arbeiten. → ✓ Du musst arbeiten. (no zu)\n❌ Wir wollen kaufen ein. → ✓ Wir wollen einkaufen. (whole infinitive)\n❌ Ihr müst warten. → ✓ Ihr müsst warten. (spelling)"
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
        "fr": "Choisis le modal selon le sens, conjugue-le selon le sujet, puis place l’action à l’infinitif sans zu en fin de phrase. Vérifie la négation : absence d’obligation ou interdiction ?",
        "de": "Wähle das Modalverb nach der Bedeutung, konjugiere es und setze die Handlung als Infinitiv ohne zu ans Ende. Prüfe die Negation: keine Pflicht oder Verbot?",
        "ar": "اختر الفعل الناقص وفق المعنى وصرفه ثم ضع الفعل الأساسي في المصدر دون zu في النهاية. انتبه للنفي: عدم إلزام أم منع؟",
        "en": "Choose the modal by meaning, conjugate it, then put the bare infinitive at the end. Check negation: lack of obligation or prohibition?"
      }
    }
  ]
}

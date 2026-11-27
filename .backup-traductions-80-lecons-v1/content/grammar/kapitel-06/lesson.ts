import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  "id": "kapitel-06",
  "title": {
    "fr": "Kann ich oder muss ich?",
    "de": "Kann ich oder muss ich?",
    "ar": "Kann ich oder muss ich?",
    "en": "Kann ich oder muss ich?"
  },
  "subtitle": {
    "fr": "Verbes modaux : emploi",
    "de": "Modalverben: Gebrauch",
    "ar": "الأفعال الناقصة: الاستعمال",
    "en": "Modal verbs: usage"
  },
  "objective": {
    "fr": "Choisir le modal selon le contexte.",
    "de": "Modalverben nach Kontext auswählen.",
    "ar": "اختيار الفعل الناقص حسب السياق.",
    "en": "Choose modals according to context."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "premium-1",
      "title": {
        "fr": "Bedeutung statt Übersetzung",
        "de": "Bedeutung statt Übersetzung",
        "ar": "Bedeutung statt Übersetzung",
        "en": "Bedeutung statt Übersetzung"
      },
      "text": {
        "fr": "Les modaux ne décrivent pas l’action elle-même, mais la relation du sujet à cette action : capacité, possibilité, permission, obligation, consigne ou souhait. En français, « pouvoir » peut correspondre à können ou dürfen ; il faut lire le contexte.",
        "de": "Modalverben beschreiben nicht die Handlung selbst, sondern die Beziehung des Subjekts zur Handlung: Fähigkeit, Möglichkeit, Erlaubnis, Pflicht, Auftrag oder Wunsch. Achte auf die Situation, nicht nur auf die Übersetzung.",
        "ar": "لا تصف الأفعال الناقصة الفعل نفسه بل علاقة الفاعل به: قدرة أو إمكانية أو إذن أو ضرورة أو توجيه أو رغبة. اختر حسب السياق لا حسب الترجمة وحدها.",
        "en": "Modal verbs describe the subject’s relationship to an action: ability, possibility, permission, obligation, instruction or wish. Choose by context rather than a single translation."
      }
    },
    {
      "type": "table",
      "id": "premium-2",
      "title": {
        "fr": "Modalverben im Vergleich",
        "de": "Modalverben im Vergleich",
        "ar": "Modalverben im Vergleich",
        "en": "Modalverben im Vergleich"
      },
      "headers": [
        {
          "fr": "Modalverb",
          "de": "Modalverb",
          "ar": "Modalverb",
          "en": "Modalverb"
        },
        {
          "fr": "Fonction",
          "de": "Funktion",
          "ar": "الوظيفة",
          "en": "Function"
        },
        {
          "fr": "Beispiel",
          "de": "Beispiel",
          "ar": "Beispiel",
          "en": "Beispiel"
        }
      ],
      "rows": [
        {
          "id": "premium-2-1",
          "cells": [
            {
              "fr": "müssen",
              "de": "müssen",
              "ar": "müssen",
              "en": "müssen"
            },
            {
              "fr": "müssen exprime une obligation ou une nécessité : il n’y a pas d’alternative pratique.",
              "de": "müssen drückt eine Pflicht oder Notwendigkeit aus.",
              "ar": "يدل müssen على ضرورة أو واجب لا بد منه.",
              "en": "müssen expresses an obligation or necessity."
            },
            {
              "fr": "Ich muss lernen.",
              "de": "Ich muss lernen.",
              "ar": "Ich muss lernen.",
              "en": "Ich muss lernen."
            }
          ]
        },
        {
          "id": "premium-2-2",
          "cells": [
            {
              "fr": "können",
              "de": "können",
              "ar": "können",
              "en": "können"
            },
            {
              "fr": "können indique ici une capacité acquise ou physique.",
              "de": "können bezeichnet hier eine erlernte oder körperliche Fähigkeit.",
              "ar": "يدل können هنا على قدرة مكتسبة أو جسدية.",
              "en": "können here expresses an acquired or physical ability."
            },
            {
              "fr": "Ich kann schwimmen.",
              "de": "Ich kann schwimmen.",
              "ar": "Ich kann schwimmen.",
              "en": "Ich kann schwimmen."
            }
          ]
        },
        {
          "id": "premium-2-3",
          "cells": [
            {
              "fr": "dürfen",
              "de": "dürfen",
              "ar": "dürfen",
              "en": "dürfen"
            },
            {
              "fr": "dürfen exprime une permission accordée par une personne ou une règle.",
              "de": "dürfen drückt eine Erlaubnis durch eine Person oder Regel aus.",
              "ar": "يدل dürfen على إذن من شخص أو قاعدة.",
              "en": "dürfen expresses permission granted by a person or rule."
            },
            {
              "fr": "Du darfst gehen.",
              "de": "Du darfst gehen.",
              "ar": "Du darfst gehen.",
              "en": "Du darfst gehen."
            }
          ]
        },
        {
          "id": "premium-2-4",
          "cells": [
            {
              "fr": "möchten",
              "de": "möchten",
              "ar": "möchten",
              "en": "möchten"
            },
            {
              "fr": "möchte exprime un souhait de manière polie ; il convient aux commandes et demandes.",
              "de": "möchte formuliert einen Wunsch höflich, etwa bei Bestellungen.",
              "ar": "تعبر möchte عن رغبة بأسلوب مهذب، مثل الطلب في المقهى.",
              "en": "möchte expresses a polite wish, suitable for orders and requests."
            },
            {
              "fr": "Ich möchte Tee.",
              "de": "Ich möchte Tee.",
              "ar": "Ich möchte Tee.",
              "en": "Ich möchte Tee."
            }
          ]
        },
        {
          "id": "premium-2-5",
          "cells": [
            {
              "fr": "wollen",
              "de": "wollen",
              "ar": "wollen",
              "en": "wollen"
            },
            {
              "fr": "wollen exprime une intention ou une volonté directe ; une demande avec möchte est généralement plus douce.",
              "de": "wollen drückt eine direkte Absicht aus; eine Bitte mit möchte klingt meist sanfter.",
              "ar": "يدل wollen على نية أو إرادة مباشرة؛ ويكون الطلب مع möchte ألطف عادة.",
              "en": "wollen expresses direct intention; a request with möchte usually sounds gentler."
            },
            {
              "fr": "Wir wollen reisen.",
              "de": "Wir wollen reisen.",
              "ar": "Wir wollen reisen.",
              "en": "Wir wollen reisen."
            }
          ]
        },
        {
          "id": "premium-2-6",
          "cells": [
            {
              "fr": "sollen",
              "de": "sollen",
              "ar": "sollen",
              "en": "sollen"
            },
            {
              "fr": "sollen rapporte une consigne, un conseil ou une attente venant d’autrui.",
              "de": "sollen gibt einen Auftrag, Rat oder eine Erwartung einer anderen Person wieder.",
              "ar": "ينقل sollen توجيهاً أو نصيحة أو توقعاً من شخص آخر.",
              "en": "sollen reports an instruction, advice or expectation from someone else."
            },
            {
              "fr": "Du sollst warten.",
              "de": "Du sollst warten.",
              "ar": "Du sollst warten.",
              "en": "Du sollst warten."
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-3",
      "title": {
        "fr": "Pflicht oder Verbot?",
        "de": "Pflicht oder Verbot?",
        "ar": "Pflicht oder Verbot?",
        "en": "Pflicht oder Verbot?"
      },
      "text": {
        "fr": "Compare : Du musst nicht kommen (tu peux rester chez toi) et Du darfst nicht kommen (tu n’as pas le droit de venir). Du musst kommen impose au contraire la présence. Le choix de la négation change le sens, pas seulement la forme.",
        "de": "Vergleiche: Du musst nicht kommen (es ist freiwillig) und Du darfst nicht kommen (es ist verboten). Du musst kommen drückt dagegen eine Pflicht aus. Die Negation ändert die Bedeutung.",
        "ar": "قارن Du musst nicht kommen (الحضور اختياري) وDu darfst nicht kommen (الحضور ممنوع). أما Du musst kommen فيعني أن الحضور واجب. النفي يغير المعنى.",
        "en": "Compare Du musst nicht kommen (coming is optional) with Du darfst nicht kommen (coming is forbidden). Du musst kommen, by contrast, makes attendance obligatory. Negation changes the meaning."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-4",
      "title": {
        "fr": "Satzklammer und Fragen",
        "de": "Satzklammer und Fragen",
        "ar": "Satzklammer und Fragen",
        "en": "Satzklammer und Fragen"
      },
      "text": {
        "fr": "Dans une principale, le modal conjugué occupe la deuxième position ; l’action à l’infinitif sans zu est à la fin. Dans une question fermée, le modal vient en tête : Darf ich hier sitzen? Sans infinitif exprimé, le contexte peut suffire : Ich möchte einen Tee.",
        "de": "Im Hauptsatz steht das finite Modalverb auf Position zwei; der Infinitiv ohne zu steht am Ende. In einer Ja/Nein-Frage steht das Modalverb vorn: Darf ich hier sitzen? Der Kontext kann den Infinitiv ersetzen: Ich möchte einen Tee.",
        "ar": "في الجملة الرئيسية يأتي الفعل الناقص المصرف في الموقع الثاني والمصدر دون zu في النهاية. في سؤال نعم أو لا يبدأ السؤال بالفعل الناقص. قد يُحذف المصدر إذا كان المعنى واضحاً: Ich möchte einen Tee.",
        "en": "In a main clause the finite modal occupies position two; the bare infinitive goes at the end. In a yes/no question the modal comes first: Darf ich hier sitzen? An obvious infinitive may be omitted: Ich möchte einen Tee."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-5",
      "title": {
        "fr": "Wunsch, Rat und Auftrag",
        "de": "Wunsch, Rat und Auftrag",
        "ar": "Wunsch, Rat und Auftrag",
        "en": "Wunsch, Rat und Auftrag"
      },
      "text": {
        "fr": "Möchte est adapté aux demandes polies. Wollen exprime un projet direct, sans être forcément impoli quand on parle de soi. Sollen rapporte souvent une consigne externe : Der Arzt sagt, ich soll mehr schlafen. Une question Soll ich…? propose une action.",
        "de": "Möchte eignet sich für höfliche Wünsche. Wollen bezeichnet eine direkte Absicht und ist bei eigenen Plänen nicht automatisch unhöflich. Sollen gibt oft einen fremden Auftrag wieder: Der Arzt sagt, ich soll mehr schlafen. Soll ich…? bietet eine Handlung an.",
        "ar": "تصلح möchte للرغبات المهذبة، وwollen للنية المباشرة دون أن تكون دائماً غير مهذبة عند الحديث عن الخطط الشخصية. ينقل sollen غالباً توجيهاً من الآخرين. ويعرض سؤال Soll ich…? القيام بفعل.",
        "en": "Möchte suits polite wishes. Wollen states a direct intention and is not automatically rude when describing your own plans. Sollen often reports someone else’s instruction: Der Arzt sagt, ich soll mehr schlafen. Soll ich…? offers an action."
      }
    },
    {
      "type": "examples",
      "id": "premium-beispiele-1",
      "title": {
        "fr": "Pflicht, Fähigkeit und Möglichkeit",
        "de": "Pflicht, Fähigkeit und Möglichkeit",
        "ar": "Pflicht, Fähigkeit und Möglichkeit",
        "en": "Pflicht, Fähigkeit und Möglichkeit"
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
            "fr": "muss … arbeiten — müssen exprime une obligation ou une nécessité : il n’y a pas d’alternative pratique.",
            "de": "muss … arbeiten — müssen drückt eine Pflicht oder Notwendigkeit aus.",
            "ar": "muss … arbeiten — يدل müssen على ضرورة أو واجب لا بد منه.",
            "en": "muss … arbeiten — müssen expresses an obligation or necessity."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Die Kinder müssen zur Schule gehen.",
          "context": {
            "fr": "Les enfants doivent aller à l’école.",
            "de": "Die Kinder müssen zur Schule gehen.",
            "ar": "يجب أن يذهب الأطفال إلى المدرسة.",
            "en": "The children have to go to school."
          },
          "explanation": {
            "fr": "müssen … gehen — müssen exprime une obligation ou une nécessité : il n’y a pas d’alternative pratique.",
            "de": "müssen … gehen — müssen drückt eine Pflicht oder Notwendigkeit aus.",
            "ar": "müssen … gehen — يدل müssen على ضرورة أو واجب لا بد منه.",
            "en": "müssen … gehen — müssen expresses an obligation or necessity."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Du musst morgen nicht früh aufstehen.",
          "context": {
            "fr": "Tu n’es pas obligé de te lever tôt demain.",
            "de": "Du musst morgen nicht früh aufstehen.",
            "ar": "لست مضطراً للاستيقاظ مبكراً غداً.",
            "en": "You do not have to get up early tomorrow."
          },
          "explanation": {
            "fr": "musst nicht … aufstehen — nicht müssen signifie que l’action est facultative, et non interdite.",
            "de": "musst nicht … aufstehen — nicht müssen bedeutet: Die Handlung ist freiwillig, nicht verboten.",
            "ar": "musst nicht … aufstehen — يعني nicht müssen أن الفعل اختياري وليس ممنوعاً.",
            "en": "musst nicht … aufstehen — nicht müssen means the action is optional, not prohibited."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Wir müssen keine Eintrittskarte kaufen.",
          "context": {
            "fr": "Nous ne sommes pas obligés d’acheter un billet d’entrée.",
            "de": "Wir müssen keine Eintrittskarte kaufen.",
            "ar": "لسنا مضطرين لشراء تذكرة دخول.",
            "en": "We do not have to buy an admission ticket."
          },
          "explanation": {
            "fr": "müssen keine … kaufen — nicht müssen signifie que l’action est facultative, et non interdite.",
            "de": "müssen keine … kaufen — nicht müssen bedeutet: Die Handlung ist freiwillig, nicht verboten.",
            "ar": "müssen keine … kaufen — يعني nicht müssen أن الفعل اختياري وليس ممنوعاً.",
            "en": "müssen keine … kaufen — nicht müssen means the action is optional, not prohibited."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Ich kann gut schwimmen.",
          "context": {
            "fr": "Je sais bien nager.",
            "de": "Ich kann gut schwimmen.",
            "ar": "أستطيع السباحة جيداً.",
            "en": "I can swim well."
          },
          "explanation": {
            "fr": "kann … schwimmen — können indique ici une capacité acquise ou physique.",
            "de": "kann … schwimmen — können bezeichnet hier eine erlernte oder körperliche Fähigkeit.",
            "ar": "kann … schwimmen — يدل können هنا على قدرة مكتسبة أو جسدية.",
            "en": "kann … schwimmen — können here expresses an acquired or physical ability."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Meine Schwester kann Auto fahren.",
          "context": {
            "fr": "Ma sœur sait conduire.",
            "de": "Meine Schwester kann Auto fahren.",
            "ar": "أختي تستطيع قيادة السيارة.",
            "en": "My sister can drive."
          },
          "explanation": {
            "fr": "kann … fahren — können indique ici une capacité acquise ou physique.",
            "de": "kann … fahren — können bezeichnet hier eine erlernte oder körperliche Fähigkeit.",
            "ar": "kann … fahren — يدل können هنا على قدرة مكتسبة أو جسدية.",
            "en": "kann … fahren — können here expresses an acquired or physical ability."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Er kann noch nicht lesen.",
          "context": {
            "fr": "Il ne sait pas encore lire.",
            "de": "Er kann noch nicht lesen.",
            "ar": "لا يستطيع القراءة بعد.",
            "en": "He cannot read yet."
          },
          "explanation": {
            "fr": "kann noch nicht lesen — können indique ici une capacité acquise ou physique.",
            "de": "kann noch nicht lesen — können bezeichnet hier eine erlernte oder körperliche Fähigkeit.",
            "ar": "kann noch nicht lesen — يدل können هنا على قدرة مكتسبة أو جسدية.",
            "en": "kann noch nicht lesen — können here expresses an acquired or physical ability."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "Heute können wir ins Kino gehen.",
          "context": {
            "fr": "Aujourd’hui, nous pouvons aller au cinéma.",
            "de": "Heute können wir ins Kino gehen.",
            "ar": "يمكننا الذهاب إلى السينما اليوم.",
            "en": "We can go to the cinema today."
          },
          "explanation": {
            "fr": "können … gehen — können indique que les circonstances rendent l’action possible.",
            "de": "können … gehen — können bezeichnet eine Möglichkeit durch die Umstände.",
            "ar": "können … gehen — يدل können على إمكانية الفعل بسبب الظروف.",
            "en": "können … gehen — können indicates an opportunity made possible by circumstances."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Hier kann man etwas essen.",
          "context": {
            "fr": "On peut manger quelque chose ici.",
            "de": "Hier kann man etwas essen.",
            "ar": "يمكن تناول شيء من الطعام هنا.",
            "en": "You can get something to eat here."
          },
          "explanation": {
            "fr": "kann man … essen — können indique que les circonstances rendent l’action possible.",
            "de": "kann man … essen — können bezeichnet eine Möglichkeit durch die Umstände.",
            "ar": "kann man … essen — يدل können على إمكانية الفعل بسبب الظروف.",
            "en": "kann man … essen — können indicates an opportunity made possible by circumstances."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Am Samstag kannst du mich besuchen.",
          "context": {
            "fr": "Samedi, tu peux me rendre visite.",
            "de": "Am Samstag kannst du mich besuchen.",
            "ar": "يمكنك زيارتي يوم السبت.",
            "en": "You can visit me on Saturday."
          },
          "explanation": {
            "fr": "kannst … besuchen — können indique que les circonstances rendent l’action possible.",
            "de": "kannst … besuchen — können bezeichnet eine Möglichkeit durch die Umstände.",
            "ar": "kannst … besuchen — يدل können على إمكانية الفعل بسبب الظروف.",
            "en": "kannst … besuchen — können indicates an opportunity made possible by circumstances."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-2",
      "title": {
        "fr": "Erlaubnis, Verbot und Wunsch",
        "de": "Erlaubnis, Verbot und Wunsch",
        "ar": "Erlaubnis, Verbot und Wunsch",
        "en": "Erlaubnis, Verbot und Wunsch"
      },
      "items": [
        {
          "id": "premium-ex-11",
          "german": "Darf ich hier sitzen?",
          "context": {
            "fr": "Puis-je m’asseoir ici ?",
            "de": "Darf ich hier sitzen?",
            "ar": "هل يُسمح لي بالجلوس هنا؟",
            "en": "May I sit here?"
          },
          "explanation": {
            "fr": "Darf ich … sitzen? — dürfen exprime une permission accordée par une personne ou une règle.",
            "de": "Darf ich … sitzen? — dürfen drückt eine Erlaubnis durch eine Person oder Regel aus.",
            "ar": "Darf ich … sitzen? — يدل dürfen على إذن من شخص أو قاعدة.",
            "en": "Darf ich … sitzen? — dürfen expresses permission granted by a person or rule."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Ihr dürft heute länger spielen.",
          "context": {
            "fr": "Vous avez le droit de jouer plus longtemps aujourd’hui.",
            "de": "Ihr dürft heute länger spielen.",
            "ar": "يُسمح لكم باللعب مدة أطول اليوم.",
            "en": "You may play longer today."
          },
          "explanation": {
            "fr": "dürft … spielen — dürfen exprime une permission accordée par une personne ou une règle.",
            "de": "dürft … spielen — dürfen drückt eine Erlaubnis durch eine Person oder Regel aus.",
            "ar": "dürft … spielen — يدل dürfen على إذن من شخص أو قاعدة.",
            "en": "dürft … spielen — dürfen expresses permission granted by a person or rule."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Im Museum darf man diese Bilder fotografieren.",
          "context": {
            "fr": "Au musée, on a le droit de photographier ces tableaux.",
            "de": "Im Museum darf man diese Bilder fotografieren.",
            "ar": "يُسمح بتصوير هذه اللوحات في المتحف.",
            "en": "Visitors may photograph these pictures in the museum."
          },
          "explanation": {
            "fr": "darf man … fotografieren — dürfen exprime une permission accordée par une personne ou une règle.",
            "de": "darf man … fotografieren — dürfen drückt eine Erlaubnis durch eine Person oder Regel aus.",
            "ar": "darf man … fotografieren — يدل dürfen على إذن من شخص أو قاعدة.",
            "en": "darf man … fotografieren — dürfen expresses permission granted by a person or rule."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Hier dürfen Sie nicht rauchen.",
          "context": {
            "fr": "Vous n’avez pas le droit de fumer ici.",
            "de": "Hier dürfen Sie nicht rauchen.",
            "ar": "لا يُسمح لكم بالتدخين هنا.",
            "en": "You must not smoke here."
          },
          "explanation": {
            "fr": "dürfen … nicht rauchen — nicht dürfen indique une interdiction, même si l’action est physiquement possible.",
            "de": "dürfen … nicht rauchen — nicht dürfen drückt ein Verbot aus, auch wenn die Handlung möglich wäre.",
            "ar": "dürfen … nicht rauchen — يدل nicht dürfen على منع حتى لو كان الفعل ممكناً.",
            "en": "dürfen … nicht rauchen — nicht dürfen expresses a prohibition even if the action is physically possible."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Du darfst das Glas nicht anfassen.",
          "context": {
            "fr": "Tu n’as pas le droit de toucher le verre.",
            "de": "Du darfst das Glas nicht anfassen.",
            "ar": "لا يُسمح لك بلمس الكأس.",
            "en": "You must not touch the glass."
          },
          "explanation": {
            "fr": "darfst … nicht anfassen — nicht dürfen indique une interdiction, même si l’action est physiquement possible.",
            "de": "darfst … nicht anfassen — nicht dürfen drückt ein Verbot aus, auch wenn die Handlung möglich wäre.",
            "ar": "darfst … nicht anfassen — يدل nicht dürfen على منع حتى لو كان الفعل ممكناً.",
            "en": "darfst … nicht anfassen — nicht dürfen expresses a prohibition even if the action is physically possible."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Die Kinder dürfen nicht auf der Straße spielen.",
          "context": {
            "fr": "Les enfants n’ont pas le droit de jouer dans la rue.",
            "de": "Die Kinder dürfen nicht auf der Straße spielen.",
            "ar": "لا يُسمح للأطفال باللعب في الشارع.",
            "en": "The children must not play in the street."
          },
          "explanation": {
            "fr": "dürfen nicht … spielen — nicht dürfen indique une interdiction, même si l’action est physiquement possible.",
            "de": "dürfen nicht … spielen — nicht dürfen drückt ein Verbot aus, auch wenn die Handlung möglich wäre.",
            "ar": "dürfen nicht … spielen — يدل nicht dürfen على منع حتى لو كان الفعل ممكناً.",
            "en": "dürfen nicht … spielen — nicht dürfen expresses a prohibition even if the action is physically possible."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Ich möchte einen Kaffee, bitte.",
          "context": {
            "fr": "Je voudrais un café, s’il vous plaît.",
            "de": "Ich möchte einen Kaffee, bitte.",
            "ar": "أود قهوة من فضلك.",
            "en": "I would like a coffee, please."
          },
          "explanation": {
            "fr": "möchte einen Kaffee — möchte exprime un souhait de manière polie ; il convient aux commandes et demandes.",
            "de": "möchte einen Kaffee — möchte formuliert einen Wunsch höflich, etwa bei Bestellungen.",
            "ar": "möchte einen Kaffee — تعبر möchte عن رغبة بأسلوب مهذب، مثل الطلب في المقهى.",
            "en": "möchte einen Kaffee — möchte expresses a polite wish, suitable for orders and requests."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Möchten Sie noch etwas trinken?",
          "context": {
            "fr": "Souhaitez-vous boire autre chose ?",
            "de": "Möchten Sie noch etwas trinken?",
            "ar": "هل تودون شرب شيء آخر؟",
            "en": "Would you like another drink?"
          },
          "explanation": {
            "fr": "Möchten Sie … trinken? — möchte exprime un souhait de manière polie ; il convient aux commandes et demandes.",
            "de": "Möchten Sie … trinken? — möchte formuliert einen Wunsch höflich, etwa bei Bestellungen.",
            "ar": "Möchten Sie … trinken? — تعبر möchte عن رغبة بأسلوب مهذب، مثل الطلب في المقهى.",
            "en": "Möchten Sie … trinken? — möchte expresses a polite wish, suitable for orders and requests."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Wir möchten am Meer Urlaub machen.",
          "context": {
            "fr": "Nous aimerions passer des vacances à la mer.",
            "de": "Wir möchten am Meer Urlaub machen.",
            "ar": "نود قضاء عطلة على البحر.",
            "en": "We would like to spend our holiday by the sea."
          },
          "explanation": {
            "fr": "möchten … machen — möchte exprime un souhait de manière polie ; il convient aux commandes et demandes.",
            "de": "möchten … machen — möchte formuliert einen Wunsch höflich, etwa bei Bestellungen.",
            "ar": "möchten … machen — تعبر möchte عن رغبة بأسلوب مهذب، مثل الطلب في المقهى.",
            "en": "möchten … machen — möchte expresses a polite wish, suitable for orders and requests."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Ich will nächstes Jahr Deutsch lernen.",
          "context": {
            "fr": "Je veux apprendre l’allemand l’année prochaine.",
            "de": "Ich will nächstes Jahr Deutsch lernen.",
            "ar": "أريد تعلم الألمانية السنة المقبلة.",
            "en": "I want to learn German next year."
          },
          "explanation": {
            "fr": "will … lernen — wollen exprime une intention ou une volonté directe ; une demande avec möchte est généralement plus douce.",
            "de": "will … lernen — wollen drückt eine direkte Absicht aus; eine Bitte mit möchte klingt meist sanfter.",
            "ar": "will … lernen — يدل wollen على نية أو إرادة مباشرة؛ ويكون الطلب مع möchte ألطف عادة.",
            "en": "will … lernen — wollen expresses direct intention; a request with möchte usually sounds gentler."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-3",
      "title": {
        "fr": "Absicht, Auftrag und Angebot",
        "de": "Absicht, Auftrag und Angebot",
        "ar": "Absicht, Auftrag und Angebot",
        "en": "Absicht, Auftrag und Angebot"
      },
      "items": [
        {
          "id": "premium-ex-21",
          "german": "Was wollt ihr am Wochenende machen?",
          "context": {
            "fr": "Que voulez-vous faire le week-end ?",
            "de": "Was wollt ihr am Wochenende machen?",
            "ar": "ماذا تريدون أن تفعلوا في نهاية الأسبوع؟",
            "en": "What do you want to do at the weekend?"
          },
          "explanation": {
            "fr": "wollt ihr … machen — wollen exprime une intention ou une volonté directe ; une demande avec möchte est généralement plus douce.",
            "de": "wollt ihr … machen — wollen drückt eine direkte Absicht aus; eine Bitte mit möchte klingt meist sanfter.",
            "ar": "wollt ihr … machen — يدل wollen على نية أو إرادة مباشرة؛ ويكون الطلب مع möchte ألطف عادة.",
            "en": "wollt ihr … machen — wollen expresses direct intention; a request with möchte usually sounds gentler."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Sie will später Ärztin werden.",
          "context": {
            "fr": "Elle veut devenir médecin plus tard.",
            "de": "Sie will später Ärztin werden.",
            "ar": "تريد أن تصبح طبيبة في المستقبل.",
            "en": "She wants to become a doctor later."
          },
          "explanation": {
            "fr": "will … werden — wollen exprime une intention ou une volonté directe ; une demande avec möchte est généralement plus douce.",
            "de": "will … werden — wollen drückt eine direkte Absicht aus; eine Bitte mit möchte klingt meist sanfter.",
            "ar": "will … werden — يدل wollen على نية أو إرادة مباشرة؛ ويكون الطلب مع möchte ألطف عادة.",
            "en": "will … werden — wollen expresses direct intention; a request with möchte usually sounds gentler."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Der Lehrer sagt, wir sollen leise lesen.",
          "context": {
            "fr": "Le professeur dit que nous devons lire en silence.",
            "de": "Der Lehrer sagt, wir sollen leise lesen.",
            "ar": "يقول المعلم إن علينا القراءة بصمت.",
            "en": "The teacher says we should read quietly."
          },
          "explanation": {
            "fr": "sollen … lesen — sollen rapporte une consigne, un conseil ou une attente venant d’autrui.",
            "de": "sollen … lesen — sollen gibt einen Auftrag, Rat oder eine Erwartung einer anderen Person wieder.",
            "ar": "sollen … lesen — ينقل sollen توجيهاً أو نصيحة أو توقعاً من شخص آخر.",
            "en": "sollen … lesen — sollen reports an instruction, advice or expectation from someone else."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Du sollst deine Mutter anrufen.",
          "context": {
            "fr": "Tu dois appeler ta mère, comme on te l’a demandé.",
            "de": "Du sollst deine Mutter anrufen.",
            "ar": "عليك الاتصال بأمك كما طُلب منك.",
            "en": "You are supposed to call your mother."
          },
          "explanation": {
            "fr": "sollst … anrufen — sollen rapporte une consigne, un conseil ou une attente venant d’autrui.",
            "de": "sollst … anrufen — sollen gibt einen Auftrag, Rat oder eine Erwartung einer anderen Person wieder.",
            "ar": "sollst … anrufen — ينقل sollen توجيهاً أو نصيحة أو توقعاً من شخص آخر.",
            "en": "sollst … anrufen — sollen reports an instruction, advice or expectation from someone else."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Der Arzt sagt, ich soll mehr Wasser trinken.",
          "context": {
            "fr": "Le médecin dit que je dois boire plus d’eau.",
            "de": "Der Arzt sagt, ich soll mehr Wasser trinken.",
            "ar": "يقول الطبيب إن عليّ شرب المزيد من الماء.",
            "en": "The doctor says I should drink more water."
          },
          "explanation": {
            "fr": "soll … trinken — sollen rapporte une consigne, un conseil ou une attente venant d’autrui.",
            "de": "soll … trinken — sollen gibt einen Auftrag, Rat oder eine Erwartung einer anderen Person wieder.",
            "ar": "soll … trinken — ينقل sollen توجيهاً أو نصيحة أو توقعاً من شخص آخر.",
            "en": "soll … trinken — sollen reports an instruction, advice or expectation from someone else."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Soll ich die Tür öffnen?",
          "context": {
            "fr": "Veux-tu que j’ouvre la porte ?",
            "de": "Soll ich die Tür öffnen?",
            "ar": "هل أفتح الباب؟",
            "en": "Shall I open the door?"
          },
          "explanation": {
            "fr": "Soll ich … öffnen? — Soll ich…? ou Sollen wir…? demande ce que l’interlocuteur souhaite que l’on fasse.",
            "de": "Soll ich … öffnen? — Soll ich…? oder Sollen wir…? fragt, was der Gesprächspartner wünscht.",
            "ar": "Soll ich … öffnen? — يُستخدم Soll ich…? أو Sollen wir…? للسؤال عما يريد المخاطب أن نفعله.",
            "en": "Soll ich … öffnen? — Soll ich…? or Sollen wir…? asks what the other person wants us to do."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Sollen wir zusammen einkaufen?",
          "context": {
            "fr": "Veux-tu que nous fassions les courses ensemble ?",
            "de": "Sollen wir zusammen einkaufen?",
            "ar": "هل نتسوق معاً؟",
            "en": "Shall we go shopping together?"
          },
          "explanation": {
            "fr": "Sollen wir … einkaufen? — Soll ich…? ou Sollen wir…? demande ce que l’interlocuteur souhaite que l’on fasse.",
            "de": "Sollen wir … einkaufen? — Soll ich…? oder Sollen wir…? fragt, was der Gesprächspartner wünscht.",
            "ar": "Sollen wir … einkaufen? — يُستخدم Soll ich…? أو Sollen wir…? للسؤال عما يريد المخاطب أن نفعله.",
            "en": "Sollen wir … einkaufen? — Soll ich…? or Sollen wir…? asks what the other person wants us to do."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Ihr müsst nicht bezahlen.",
          "context": {
            "fr": "Vous n’êtes pas obligés de payer.",
            "de": "Ihr müsst nicht bezahlen.",
            "ar": "لستم مضطرين إلى الدفع.",
            "en": "You do not have to pay."
          },
          "explanation": {
            "fr": "müsst nicht bezahlen — nicht müssen signifie que l’action est facultative, et non interdite.",
            "de": "müsst nicht bezahlen — nicht müssen bedeutet: Die Handlung ist freiwillig, nicht verboten.",
            "ar": "müsst nicht bezahlen — يعني nicht müssen أن الفعل اختياري وليس ممنوعاً.",
            "en": "müsst nicht bezahlen — nicht müssen means the action is optional, not prohibited."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Sie dürfen hier nicht parken.",
          "context": {
            "fr": "Vous n’avez pas le droit de stationner ici.",
            "de": "Sie dürfen hier nicht parken.",
            "ar": "لا يُسمح لكم بالوقوف هنا.",
            "en": "You must not park here."
          },
          "explanation": {
            "fr": "dürfen … nicht parken — nicht dürfen indique une interdiction, même si l’action est physiquement possible.",
            "de": "dürfen … nicht parken — nicht dürfen drückt ein Verbot aus, auch wenn die Handlung möglich wäre.",
            "ar": "dürfen … nicht parken — يدل nicht dürfen على منع حتى لو كان الفعل ممكناً.",
            "en": "dürfen … nicht parken — nicht dürfen expresses a prohibition even if the action is physically possible."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Kannst du mir helfen?",
          "context": {
            "fr": "Peux-tu m’aider ?",
            "de": "Kannst du mir helfen?",
            "ar": "هل يمكنك مساعدتي؟",
            "en": "Can you help me?"
          },
          "explanation": {
            "fr": "Kannst du … helfen? — können indique que les circonstances rendent l’action possible.",
            "de": "Kannst du … helfen? — können bezeichnet eine Möglichkeit durch die Umstände.",
            "ar": "Kannst du … helfen? — يدل können على إمكانية الفعل بسبب الظروف.",
            "en": "Kannst du … helfen? — können indicates an opportunity made possible by circumstances."
          }
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-dialog",
      "title": {
        "fr": "Mini-Dialog",
        "de": "Mini-Dialog",
        "ar": "Mini-Dialog",
        "en": "Mini-Dialog"
      },
      "text": {
        "fr": "A: Darf ich hier parken? (Puis-je stationner ici ?)\nB: Nein, hier dürfen Sie nicht parken. (Non, c’est interdit.)\nA: Wo kann ich parken? (Où puis-je stationner ?)\nB: Hinter dem Haus. Sie müssen dort nicht bezahlen. (Derrière la maison. Vous n’avez pas à payer.)",
        "de": "A: Darf ich hier parken?\nB: Nein, hier dürfen Sie nicht parken.\nA: Wo kann ich parken?\nB: Hinter dem Haus. Sie müssen dort nicht bezahlen.",
        "ar": "أ: Darf ich hier parken? (هل يُسمح لي بالوقوف هنا؟)\nب: Nein, hier dürfen Sie nicht parken. (لا، الوقوف ممنوع.)\nأ: Wo kann ich parken? (أين يمكنني الوقوف؟)\nب: Hinter dem Haus. Sie müssen dort nicht bezahlen. (خلف المنزل، لا يلزم الدفع.)",
        "en": "A: Darf ich hier parken? (May I park here?)\nB: Nein, hier dürfen Sie nicht parken. (No, it is forbidden.)\nA: Wo kann ich parken? (Where can I park?)\nB: Hinter dem Haus. Sie müssen dort nicht bezahlen. (Behind the house. You do not have to pay.)"
      }
    },
    {
      "type": "callout",
      "id": "premium-errors",
      "title": {
        "fr": "Typische Fehler",
        "de": "Typische Fehler",
        "ar": "Typische Fehler",
        "en": "Typische Fehler"
      },
      "tone": "warning",
      "text": {
        "fr": "❌ Tu veux dire « interdit » : Du musst nicht rauchen. → ✓ Du darfst nicht rauchen.\n❌ Ich muss zu gehen. → ✓ Ich muss gehen.\n❌ Er kann schwimmt. → ✓ Er kann schwimmen.",
        "de": "❌ Verbot: Du musst nicht rauchen. → ✓ Du darfst nicht rauchen.\n❌ Ich muss zu gehen. → ✓ Ich muss gehen.\n❌ Er kann schwimmt. → ✓ Er kann schwimmen.",
        "ar": "❌ للتعبير عن المنع: Du musst nicht rauchen. → ✓ Du darfst nicht rauchen.\n❌ Ich muss zu gehen. → ✓ Ich muss gehen.\n❌ Er kann schwimmt. → ✓ Er kann schwimmen.",
        "en": "❌ Intended prohibition: Du musst nicht rauchen. → ✓ Du darfst nicht rauchen.\n❌ Ich muss zu gehen. → ✓ Ich muss gehen.\n❌ Er kann schwimmt. → ✓ Er kann schwimmen."
      }
    },
    {
      "type": "callout",
      "id": "premium-merke",
      "title": {
        "fr": "Merke dir!",
        "de": "Merke dir!",
        "ar": "Merke dir!",
        "en": "Merke dir!"
      },
      "tone": "tip",
      "text": {
        "fr": "Identifie l’intention, choisis le modal, conjugue-le et garde l’infinitif sans zu. Compare toujours les deux négations.",
        "de": "Bestimme die Absicht, wähle das Modalverb, konjugiere es und verwende den Infinitiv ohne zu. Vergleiche die beiden Negationen.",
        "ar": "حدد القصد واختر الفعل الناقص وصرفه ثم استعمل المصدر دون zu. قارن دائماً نوعي النفي.",
        "en": "Identify the intention, choose and conjugate the modal, then use the bare infinitive. Always distinguish the two negatives."
      }
    }
  ]
}

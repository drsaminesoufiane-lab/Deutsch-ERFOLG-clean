import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  "id": "kapitel-09-lesson",
  "title": {
    "fr": "Wer? Wie? Wo? Was?",
    "de": "Wer? Wie? Wo? Was?",
    "ar": "Wer? Wie? Wo? Was?",
    "en": "Wer? Wie? Wo? Was?"
  },
  "subtitle": {
    "fr": "Questions ouvertes",
    "de": "Fragen mit Fragewort",
    "ar": "أسئلة بأداة استفهام",
    "en": "Wh-questions"
  },
  "objective": {
    "fr": "Construire des questions et comprendre les réponses.",
    "de": "Fragen bilden und Antworten verstehen.",
    "ar": "تكوين الأسئلة وفهم الأجوبة.",
    "en": "Form questions and understand answers."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "premium-1",
      "title": {
        "fr": "W-Fragen und ihre Funktion",
        "de": "W-Fragen und ihre Funktion",
        "ar": "W-Fragen und ihre Funktion",
        "en": "W-Fragen und ihre Funktion"
      },
      "text": {
        "fr": "Une question ouverte cherche une information précise, pas simplement oui ou non. Le mot interrogatif commence généralement par w. Dans la question Wie heißen Sie?, Wie occupe la position 1, heißen la position 2 et Sie la position 3. Une expression comme Um wie viel Uhr occupe une seule position grammaticale.",
        "de": "Eine W-Frage sucht eine bestimmte Information statt einer Ja/Nein-Antwort. In Wie heißen Sie? steht Wie auf Position eins, heißen auf zwei und Sie auf drei. Eine Gruppe wie Um wie viel Uhr besetzt gemeinsam Position eins.",
        "ar": "يطلب السؤال المفتوح معلومة محددة لا مجرد نعم أو لا. في Wie heißen Sie? تأتي Wie أولاً وheißen ثانياً وSie ثالثاً. تشغل مجموعة مثل Um wie viel Uhr موقعاً واحداً.",
        "en": "A wh-question seeks specific information rather than yes or no. In Wie heißen Sie?, Wie is in position one, heißen in position two and Sie in position three. A phrase such as Um wie viel Uhr occupies one grammatical position."
      }
    },
    {
      "type": "table",
      "id": "premium-2",
      "title": {
        "fr": "Die wichtigsten Fragewörter",
        "de": "Die wichtigsten Fragewörter",
        "ar": "Die wichtigsten Fragewörter",
        "en": "Die wichtigsten Fragewörter"
      },
      "headers": [
        {
          "fr": "Fragewort",
          "de": "Fragewort",
          "ar": "Fragewort",
          "en": "Fragewort"
        },
        {
          "fr": "Information recherchée",
          "de": "Gesuchte Information",
          "ar": "المعلومة المطلوبة",
          "en": "Information sought"
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
              "fr": "Wer?",
              "de": "Wer?",
              "ar": "Wer?",
              "en": "Wer?"
            },
            {
              "fr": "Wer demande l’identité du sujet (nominatif). Il est lui-même le sujet, donc on n’ajoute pas un autre pronom sujet.",
              "de": "Wer fragt nach dem Subjekt im Nominativ. Es ist selbst das Subjekt.",
              "ar": "تسأل Wer عن هوية الفاعل في حالة الرفع وهي نفسها الفاعل.",
              "en": "Wer asks for the subject in the nominative. It is itself the subject."
            },
            {
              "fr": "Wer kommt?",
              "de": "Wer kommt?",
              "ar": "Wer kommt?",
              "en": "Wer kommt?"
            }
          ]
        },
        {
          "id": "premium-2-2",
          "cells": [
            {
              "fr": "Wen?",
              "de": "Wen?",
              "ar": "Wen?",
              "en": "Wen?"
            },
            {
              "fr": "Wen interroge sur une personne complément à l’accusatif ; le sujet reste exprimé après le verbe.",
              "de": "Wen fragt nach einer Person im Akkusativ; das Subjekt steht nach dem Verb.",
              "ar": "تسأل Wen عن شخص في حالة النصب ويبقى الفاعل بعد الفعل.",
              "en": "Wen asks about a person in the accusative; the subject follows the verb."
            },
            {
              "fr": "Wen besuchst du?",
              "de": "Wen besuchst du?",
              "ar": "Wen besuchst du?",
              "en": "Wen besuchst du?"
            }
          ]
        },
        {
          "id": "premium-2-3",
          "cells": [
            {
              "fr": "Wem?",
              "de": "Wem?",
              "ar": "Wem?",
              "en": "Wem?"
            },
            {
              "fr": "Wem demande le destinataire ou la personne au datif, notamment avec helfen et gehören.",
              "de": "Wem fragt nach dem Dativ, etwa bei helfen und gehören.",
              "ar": "تسأل Wem عن شخص في حالة الداتيف، مثل مع helfen وgehören.",
              "en": "Wem asks for a person in the dative, for example with helfen or gehören."
            },
            {
              "fr": "Wem hilfst du?",
              "de": "Wem hilfst du?",
              "ar": "Wem hilfst du?",
              "en": "Wem hilfst du?"
            }
          ]
        },
        {
          "id": "premium-2-4",
          "cells": [
            {
              "fr": "Was?",
              "de": "Was?",
              "ar": "Was?",
              "en": "Was?"
            },
            {
              "fr": "Was demande une chose, une action ou une information, et non l’identité d’une personne.",
              "de": "Was fragt nach einer Sache, Handlung oder Information, nicht nach der Identität einer Person.",
              "ar": "تسأل Was عن شيء أو فعل أو معلومة لا عن هوية شخص.",
              "en": "Was asks about a thing, action or information rather than a person’s identity."
            },
            {
              "fr": "Was machst du?",
              "de": "Was machst du?",
              "ar": "Was machst du?",
              "en": "Was machst du?"
            }
          ]
        },
        {
          "id": "premium-2-5",
          "cells": [
            {
              "fr": "Wo?",
              "de": "Wo?",
              "ar": "Wo?",
              "en": "Wo?"
            },
            {
              "fr": "Wo demande le lieu où une personne ou une action se trouve.",
              "de": "Wo fragt nach dem Ort, an dem sich jemand oder etwas befindet.",
              "ar": "تسأل Wo عن مكان وجود شخص أو شيء أو حدوث فعل.",
              "en": "Wo asks for the location where someone or something is."
            },
            {
              "fr": "Wo wohnst du?",
              "de": "Wo wohnst du?",
              "ar": "Wo wohnst du?",
              "en": "Wo wohnst du?"
            }
          ]
        },
        {
          "id": "premium-2-6",
          "cells": [
            {
              "fr": "Wohin?",
              "de": "Wohin?",
              "ar": "Wohin?",
              "en": "Wohin?"
            },
            {
              "fr": "Wohin demande la destination d’un déplacement.",
              "de": "Wohin fragt nach dem Ziel einer Bewegung.",
              "ar": "تسأل Wohin عن وجهة الحركة.",
              "en": "Wohin asks for the destination of movement."
            },
            {
              "fr": "Wohin fährst du?",
              "de": "Wohin fährst du?",
              "ar": "Wohin fährst du?",
              "en": "Wohin fährst du?"
            }
          ]
        },
        {
          "id": "premium-2-7",
          "cells": [
            {
              "fr": "Woher?",
              "de": "Woher?",
              "ar": "Woher?",
              "en": "Woher?"
            },
            {
              "fr": "Woher demande l’origine ou le point de départ.",
              "de": "Woher fragt nach Herkunft oder Ausgangspunkt.",
              "ar": "تسأل Woher عن الأصل أو نقطة الانطلاق.",
              "en": "Woher asks for origin or starting point."
            },
            {
              "fr": "Woher kommst du?",
              "de": "Woher kommst du?",
              "ar": "Woher kommst du?",
              "en": "Woher kommst du?"
            }
          ]
        },
        {
          "id": "premium-2-8",
          "cells": [
            {
              "fr": "Wann?",
              "de": "Wann?",
              "ar": "Wann?",
              "en": "Wann?"
            },
            {
              "fr": "Wann demande quand un événement se produit.",
              "de": "Wann fragt nach dem Zeitpunkt eines Ereignisses.",
              "ar": "تسأل Wann عن وقت وقوع الحدث.",
              "en": "Wann asks when an event occurs."
            },
            {
              "fr": "Wann kommst du?",
              "de": "Wann kommst du?",
              "ar": "Wann kommst du?",
              "en": "Wann kommst du?"
            }
          ]
        },
        {
          "id": "premium-2-9",
          "cells": [
            {
              "fr": "Wie?",
              "de": "Wie?",
              "ar": "Wie?",
              "en": "Wie?"
            },
            {
              "fr": "Wie demande la manière, l’état ou une caractéristique.",
              "de": "Wie fragt nach Art und Weise, Befinden oder einer Eigenschaft.",
              "ar": "تسأل Wie عن الكيفية أو الحالة أو صفة.",
              "en": "Wie asks about manner, condition or a characteristic."
            },
            {
              "fr": "Wie geht es dir?",
              "de": "Wie geht es dir?",
              "ar": "Wie geht es dir?",
              "en": "Wie geht es dir?"
            }
          ]
        },
        {
          "id": "premium-2-10",
          "cells": [
            {
              "fr": "Warum?",
              "de": "Warum?",
              "ar": "Warum?",
              "en": "Warum?"
            },
            {
              "fr": "Warum demande la cause ; une réponse peut commencer par weil.",
              "de": "Warum fragt nach dem Grund; eine Antwort kann mit weil beginnen.",
              "ar": "تسأل Warum عن السبب ويمكن أن تبدأ الإجابة بـweil.",
              "en": "Warum asks for the reason; a reply may begin with weil."
            },
            {
              "fr": "Warum lernst du?",
              "de": "Warum lernst du?",
              "ar": "Warum lernst du?",
              "en": "Warum lernst du?"
            }
          ]
        },
        {
          "id": "premium-2-11",
          "cells": [
            {
              "fr": "Wie viel?",
              "de": "Wie viel?",
              "ar": "Wie viel?",
              "en": "Wie viel?"
            },
            {
              "fr": "Wie viel demande une quantité non dénombrée ou un montant.",
              "de": "Wie viel fragt nach einer nicht einzeln gezählten Menge oder einem Betrag.",
              "ar": "تسأل Wie viel عن كمية غير معدودة أو مبلغ.",
              "en": "Wie viel asks about an uncounted quantity or an amount."
            },
            {
              "fr": "Wie viel kostet das?",
              "de": "Wie viel kostet das?",
              "ar": "Wie viel kostet das?",
              "en": "Wie viel kostet das?"
            }
          ]
        },
        {
          "id": "premium-2-12",
          "cells": [
            {
              "fr": "Mit wem?",
              "de": "Mit wem?",
              "ar": "Mit wem?",
              "en": "Mit wem?"
            },
            {
              "fr": "La préposition mit impose le datif : mit wem interroge sur l’accompagnateur ou l’interlocuteur.",
              "de": "Mit verlangt den Dativ: mit wem fragt nach Begleitung oder Gesprächspartner.",
              "ar": "يأتي بعد mit الداتيف، وتسأل mit wem عن المرافق أو المحاور.",
              "en": "Mit takes the dative: mit wem asks about a companion or conversation partner."
            },
            {
              "fr": "Mit wem sprichst du?",
              "de": "Mit wem sprichst du?",
              "ar": "Mit wem sprichst du?",
              "en": "Mit wem sprichst du?"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-3",
      "title": {
        "fr": "Wer, wen oder wem?",
        "de": "Wer, wen oder wem?",
        "ar": "Wer, wen oder wem?",
        "en": "Wer, wen oder wem?"
      },
      "text": {
        "fr": "Repère le rôle de la personne recherchée. Wer kommt? : la personne est le sujet. Wen siehst du? : la personne est complément accusatif du verbe sehen. Wem hilfst du? : helfen exige un complément datif. Mit wem? : mit exige aussi le datif.",
        "de": "Bestimme die Rolle der gesuchten Person. Wer kommt? fragt nach dem Subjekt. Wen siehst du? nach dem Akkusativobjekt von sehen. Wem hilfst du? nach dem Dativobjekt von helfen. Mit wem? steht ebenfalls im Dativ.",
        "ar": "حدد دور الشخص المطلوب: Wer kommt? للفاعل، Wen siehst du? لمفعول sehen في النصب، Wem hilfst du? لمفعول helfen في الداتيف. وكذلك Mit wem? في الداتيف.",
        "en": "Identify the role of the person sought. Wer kommt? asks for the subject. Wen siehst du? asks for the accusative object of sehen. Wem hilfst du? asks for the dative object of helfen. Mit wem? also takes the dative."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-4",
      "title": {
        "fr": "Wo, wohin und woher",
        "de": "Wo, wohin und woher",
        "ar": "Wo, wohin und woher",
        "en": "Wo, wohin und woher"
      },
      "text": {
        "fr": "Ces trois questions ne sont pas interchangeables. Wo bist du? — In Berlin. Wohin fährst du? — Nach Berlin. Woher kommst du? — Aus Berlin. Même lorsqu’un verbe de mouvement est présent, Wo? peut demander le lieu de l’action : Wo gehst du spazieren?",
        "de": "Die drei Fragen sind nicht austauschbar. Wo bist du? — In Berlin. Wohin fährst du? — Nach Berlin. Woher kommst du? — Aus Berlin. Auch bei einem Bewegungsverb kann Wo? nach dem Ort der Handlung fragen: Wo gehst du spazieren?",
        "ar": "هذه الأسئلة ليست مترادفة: Wo bist du? — In Berlin للمكان؛ Wohin fährst du? — Nach Berlin للوجهة؛ Woher kommst du? — Aus Berlin للأصل. وقد تسأل Wo عن مكان حدوث الحركة: Wo gehst du spazieren?",
        "en": "These questions are not interchangeable. Wo bist du? — In Berlin. Wohin fährst du? — Nach Berlin. Woher kommst du? — Aus Berlin. Even with a movement verb, Wo? can ask where the action takes place: Wo gehst du spazieren?"
      }
    },
    {
      "type": "paragraph",
      "id": "premium-5",
      "title": {
        "fr": "Satzklammer und Antworten",
        "de": "Satzklammer und Antworten",
        "ar": "Satzklammer und Antworten",
        "en": "Satzklammer und Antworten"
      },
      "text": {
        "fr": "Si la question contient un modal, l’infinitif est final : Was möchtest du essen? Si le verbe est séparable, la particule est finale : Wann stehst du auf? Au Perfekt, l’auxiliaire est en deuxième position et le participe à la fin : Was hast du gemacht? Réponds avec l’information demandée.",
        "de": "Mit Modalverb steht der Infinitiv am Ende: Was möchtest du essen? Bei trennbaren Verben steht das Präfix am Ende: Wann stehst du auf? Im Perfekt steht das Hilfsverb an zweiter Stelle und das Partizip am Ende: Was hast du gemacht? Gib die gesuchte Information an.",
        "ar": "مع الفعل الناقص يأتي المصدر في النهاية: Was möchtest du essen? ومع الفعل المنفصل تأتي السابقة في النهاية. وفي Perfekt يأتي الفعل المساعد ثانياً واسم المفعول في النهاية. أجب بالمعلومة المطلوبة.",
        "en": "With a modal, the infinitive is final: Was möchtest du essen? With a separable verb the prefix is final: Wann stehst du auf? In the perfect the auxiliary is second and the participle is final: Was hast du gemacht? Supply the requested information."
      }
    },
    {
      "type": "examples",
      "id": "premium-beispiele-1",
      "title": {
        "fr": "Personen, Sachen und Orte",
        "de": "Personen, Sachen und Orte",
        "ar": "Personen, Sachen und Orte",
        "en": "Personen, Sachen und Orte"
      },
      "items": [
        {
          "id": "premium-ex-01",
          "german": "Wer kommt heute?",
          "context": {
            "fr": "Qui vient aujourd’hui ?",
            "de": "Wer kommt heute?",
            "ar": "من يأتي اليوم؟",
            "en": "Who is coming today?"
          },
          "explanation": {
            "fr": "Wer kommt? — Wer demande l’identité du sujet (nominatif). Il est lui-même le sujet, donc on n’ajoute pas un autre pronom sujet.",
            "de": "Wer kommt? — Wer fragt nach dem Subjekt im Nominativ. Es ist selbst das Subjekt.",
            "ar": "Wer kommt? — تسأل Wer عن هوية الفاعل في حالة الرفع وهي نفسها الفاعل.",
            "en": "Wer kommt? — Wer asks for the subject in the nominative. It is itself the subject."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Wer ist deine Lehrerin?",
          "context": {
            "fr": "Qui est ta professeure ?",
            "de": "Wer ist deine Lehrerin?",
            "ar": "من هي معلمتك؟",
            "en": "Who is your teacher?"
          },
          "explanation": {
            "fr": "Wer ist? — Wer demande l’identité du sujet (nominatif). Il est lui-même le sujet, donc on n’ajoute pas un autre pronom sujet.",
            "de": "Wer ist? — Wer fragt nach dem Subjekt im Nominativ. Es ist selbst das Subjekt.",
            "ar": "Wer ist? — تسأل Wer عن هوية الفاعل في حالة الرفع وهي نفسها الفاعل.",
            "en": "Wer ist? — Wer asks for the subject in the nominative. It is itself the subject."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Wen besuchst du morgen?",
          "context": {
            "fr": "À qui rends-tu visite demain ?",
            "de": "Wen besuchst du morgen?",
            "ar": "من ستزور غداً؟",
            "en": "Who are you visiting tomorrow?"
          },
          "explanation": {
            "fr": "Wen besuchst du? — Wen interroge sur une personne complément à l’accusatif ; le sujet reste exprimé après le verbe.",
            "de": "Wen besuchst du? — Wen fragt nach einer Person im Akkusativ; das Subjekt steht nach dem Verb.",
            "ar": "Wen besuchst du? — تسأل Wen عن شخص في حالة النصب ويبقى الفاعل بعد الفعل.",
            "en": "Wen besuchst du? — Wen asks about a person in the accusative; the subject follows the verb."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Wen sucht ihr?",
          "context": {
            "fr": "Qui cherchez-vous ?",
            "de": "Wen sucht ihr?",
            "ar": "عن من تبحثون؟",
            "en": "Who are you looking for?"
          },
          "explanation": {
            "fr": "Wen sucht ihr? — Wen interroge sur une personne complément à l’accusatif ; le sujet reste exprimé après le verbe.",
            "de": "Wen sucht ihr? — Wen fragt nach einer Person im Akkusativ; das Subjekt steht nach dem Verb.",
            "ar": "Wen sucht ihr? — تسأل Wen عن شخص في حالة النصب ويبقى الفاعل بعد الفعل.",
            "en": "Wen sucht ihr? — Wen asks about a person in the accusative; the subject follows the verb."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Wem gehört das Fahrrad?",
          "context": {
            "fr": "À qui appartient le vélo ?",
            "de": "Wem gehört das Fahrrad?",
            "ar": "لمن تعود الدراجة؟",
            "en": "Who owns the bicycle?"
          },
          "explanation": {
            "fr": "Wem gehört? — Wem demande le destinataire ou la personne au datif, notamment avec helfen et gehören.",
            "de": "Wem gehört? — Wem fragt nach dem Dativ, etwa bei helfen und gehören.",
            "ar": "Wem gehört? — تسأل Wem عن شخص في حالة الداتيف، مثل مع helfen وgehören.",
            "en": "Wem gehört? — Wem asks for a person in the dative, for example with helfen or gehören."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Wem hilfst du heute?",
          "context": {
            "fr": "Qui aides-tu aujourd’hui ?",
            "de": "Wem hilfst du heute?",
            "ar": "من تساعد اليوم؟",
            "en": "Who are you helping today?"
          },
          "explanation": {
            "fr": "Wem hilfst du? — Wem demande le destinataire ou la personne au datif, notamment avec helfen et gehören.",
            "de": "Wem hilfst du? — Wem fragt nach dem Dativ, etwa bei helfen und gehören.",
            "ar": "Wem hilfst du? — تسأل Wem عن شخص في حالة الداتيف، مثل مع helfen وgehören.",
            "en": "Wem hilfst du? — Wem asks for a person in the dative, for example with helfen or gehören."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Was machst du heute Abend?",
          "context": {
            "fr": "Que fais-tu ce soir ?",
            "de": "Was machst du heute Abend?",
            "ar": "ماذا تفعل هذا المساء؟",
            "en": "What are you doing this evening?"
          },
          "explanation": {
            "fr": "Was machst du? — Was demande une chose, une action ou une information, et non l’identité d’une personne.",
            "de": "Was machst du? — Was fragt nach einer Sache, Handlung oder Information, nicht nach der Identität einer Person.",
            "ar": "Was machst du? — تسأل Was عن شيء أو فعل أو معلومة لا عن هوية شخص.",
            "en": "Was machst du? — Was asks about a thing, action or information rather than a person’s identity."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "Was möchtest du essen?",
          "context": {
            "fr": "Que voudrais-tu manger ?",
            "de": "Was möchtest du essen?",
            "ar": "ماذا تود أن تأكل؟",
            "en": "What would you like to eat?"
          },
          "explanation": {
            "fr": "Was möchtest … essen? — Was demande une chose, une action ou une information, et non l’identité d’une personne.",
            "de": "Was möchtest … essen? — Was fragt nach einer Sache, Handlung oder Information, nicht nach der Identität einer Person.",
            "ar": "Was möchtest … essen? — تسأل Was عن شيء أو فعل أو معلومة لا عن هوية شخص.",
            "en": "Was möchtest … essen? — Was asks about a thing, action or information rather than a person’s identity."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Was hast du gestern gekauft?",
          "context": {
            "fr": "Qu’as-tu acheté hier ?",
            "de": "Was hast du gestern gekauft?",
            "ar": "ماذا اشتريت أمس؟",
            "en": "What did you buy yesterday?"
          },
          "explanation": {
            "fr": "Was hast … gekauft? — Was demande une chose, une action ou une information, et non l’identité d’une personne.",
            "de": "Was hast … gekauft? — Was fragt nach einer Sache, Handlung oder Information, nicht nach der Identität einer Person.",
            "ar": "Was hast … gekauft? — تسأل Was عن شيء أو فعل أو معلومة لا عن هوية شخص.",
            "en": "Was hast … gekauft? — Was asks about a thing, action or information rather than a person’s identity."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Wo wohnst du?",
          "context": {
            "fr": "Où habites-tu ?",
            "de": "Wo wohnst du?",
            "ar": "أين تسكن؟",
            "en": "Where do you live?"
          },
          "explanation": {
            "fr": "Wo wohnst du? — Wo demande le lieu où une personne ou une action se trouve.",
            "de": "Wo wohnst du? — Wo fragt nach dem Ort, an dem sich jemand oder etwas befindet.",
            "ar": "Wo wohnst du? — تسأل Wo عن مكان وجود شخص أو شيء أو حدوث فعل.",
            "en": "Wo wohnst du? — Wo asks for the location where someone or something is."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-2",
      "title": {
        "fr": "Orte, Herkunft und Zeit",
        "de": "Orte, Herkunft und Zeit",
        "ar": "Orte, Herkunft und Zeit",
        "en": "Orte, Herkunft und Zeit"
      },
      "items": [
        {
          "id": "premium-ex-11",
          "german": "Wo liegt der Bahnhof?",
          "context": {
            "fr": "Où se trouve la gare ?",
            "de": "Wo liegt der Bahnhof?",
            "ar": "أين تقع محطة القطار؟",
            "en": "Where is the station?"
          },
          "explanation": {
            "fr": "Wo liegt …? — Wo demande le lieu où une personne ou une action se trouve.",
            "de": "Wo liegt …? — Wo fragt nach dem Ort, an dem sich jemand oder etwas befindet.",
            "ar": "Wo liegt …? — تسأل Wo عن مكان وجود شخص أو شيء أو حدوث فعل.",
            "en": "Wo liegt …? — Wo asks for the location where someone or something is."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Wo gehst du spazieren?",
          "context": {
            "fr": "Où te promènes-tu ?",
            "de": "Wo gehst du spazieren?",
            "ar": "أين تتنزه؟",
            "en": "Where do you go for walks?"
          },
          "explanation": {
            "fr": "Wo gehst … spazieren? — Wo demande le lieu où une personne ou une action se trouve.",
            "de": "Wo gehst … spazieren? — Wo fragt nach dem Ort, an dem sich jemand oder etwas befindet.",
            "ar": "Wo gehst … spazieren? — تسأل Wo عن مكان وجود شخص أو شيء أو حدوث فعل.",
            "en": "Wo gehst … spazieren? — Wo asks for the location where someone or something is."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Wohin fährst du am Wochenende?",
          "context": {
            "fr": "Où vas-tu ce week-end ?",
            "de": "Wohin fährst du am Wochenende?",
            "ar": "إلى أين تذهب في عطلة نهاية الأسبوع؟",
            "en": "Where are you going at the weekend?"
          },
          "explanation": {
            "fr": "Wohin fährst du? — Wohin demande la destination d’un déplacement.",
            "de": "Wohin fährst du? — Wohin fragt nach dem Ziel einer Bewegung.",
            "ar": "Wohin fährst du? — تسأل Wohin عن وجهة الحركة.",
            "en": "Wohin fährst du? — Wohin asks for the destination of movement."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Wohin möchte sie reisen?",
          "context": {
            "fr": "Où souhaite-t-elle voyager ?",
            "de": "Wohin möchte sie reisen?",
            "ar": "إلى أين تود السفر؟",
            "en": "Where would she like to travel?"
          },
          "explanation": {
            "fr": "Wohin möchte … reisen? — Wohin demande la destination d’un déplacement.",
            "de": "Wohin möchte … reisen? — Wohin fragt nach dem Ziel einer Bewegung.",
            "ar": "Wohin möchte … reisen? — تسأل Wohin عن وجهة الحركة.",
            "en": "Wohin möchte … reisen? — Wohin asks for the destination of movement."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Woher kommen Sie?",
          "context": {
            "fr": "D’où venez-vous ?",
            "de": "Woher kommen Sie?",
            "ar": "من أين أتيتم؟",
            "en": "Where are you from?"
          },
          "explanation": {
            "fr": "Woher kommen Sie? — Woher demande l’origine ou le point de départ.",
            "de": "Woher kommen Sie? — Woher fragt nach Herkunft oder Ausgangspunkt.",
            "ar": "Woher kommen Sie? — تسأل Woher عن الأصل أو نقطة الانطلاق.",
            "en": "Woher kommen Sie? — Woher asks for origin or starting point."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Woher kommt der Zug?",
          "context": {
            "fr": "D’où vient le train ?",
            "de": "Woher kommt der Zug?",
            "ar": "من أين يأتي القطار؟",
            "en": "Where is the train coming from?"
          },
          "explanation": {
            "fr": "Woher kommt …? — Woher demande l’origine ou le point de départ.",
            "de": "Woher kommt …? — Woher fragt nach Herkunft oder Ausgangspunkt.",
            "ar": "Woher kommt …? — تسأل Woher عن الأصل أو نقطة الانطلاق.",
            "en": "Woher kommt …? — Woher asks for origin or starting point."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Wann beginnt der Kurs?",
          "context": {
            "fr": "Quand commence le cours ?",
            "de": "Wann beginnt der Kurs?",
            "ar": "متى يبدأ الدرس؟",
            "en": "When does the class start?"
          },
          "explanation": {
            "fr": "Wann beginnt …? — Wann demande quand un événement se produit.",
            "de": "Wann beginnt …? — Wann fragt nach dem Zeitpunkt eines Ereignisses.",
            "ar": "Wann beginnt …? — تسأل Wann عن وقت وقوع الحدث.",
            "en": "Wann beginnt …? — Wann asks when an event occurs."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Wann stehst du normalerweise auf?",
          "context": {
            "fr": "Quand te lèves-tu habituellement ?",
            "de": "Wann stehst du normalerweise auf?",
            "ar": "متى تستيقظ عادة؟",
            "en": "When do you usually get up?"
          },
          "explanation": {
            "fr": "Wann stehst … auf? — Wann demande quand un événement se produit.",
            "de": "Wann stehst … auf? — Wann fragt nach dem Zeitpunkt eines Ereignisses.",
            "ar": "Wann stehst … auf? — تسأل Wann عن وقت وقوع الحدث.",
            "en": "Wann stehst … auf? — Wann asks when an event occurs."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Um wie viel Uhr öffnet die Bibliothek?",
          "context": {
            "fr": "À quelle heure ouvre la bibliothèque ?",
            "de": "Um wie viel Uhr öffnet die Bibliothek?",
            "ar": "في أي ساعة تفتح المكتبة؟",
            "en": "What time does the library open?"
          },
          "explanation": {
            "fr": "Um wie viel Uhr öffnet …? — Um wie viel Uhr demande l’heure précise ; tout le groupe interrogatif occupe la première position.",
            "de": "Um wie viel Uhr öffnet …? — Um wie viel Uhr fragt nach der genauen Uhrzeit; die ganze Fragegruppe steht auf Position eins.",
            "ar": "Um wie viel Uhr öffnet …? — تسأل Um wie viel Uhr عن الساعة الدقيقة وتشغل المجموعة كلها الموقع الأول.",
            "en": "Um wie viel Uhr öffnet …? — Um wie viel Uhr asks for the exact clock time; the entire phrase occupies position one."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Wie heißen Sie?",
          "context": {
            "fr": "Comment vous appelez-vous ?",
            "de": "Wie heißen Sie?",
            "ar": "ما اسمكم؟",
            "en": "What is your name?"
          },
          "explanation": {
            "fr": "Wie heißen Sie? — Wie demande la manière, l’état ou une caractéristique.",
            "de": "Wie heißen Sie? — Wie fragt nach Art und Weise, Befinden oder einer Eigenschaft.",
            "ar": "Wie heißen Sie? — تسأل Wie عن الكيفية أو الحالة أو صفة.",
            "en": "Wie heißen Sie? — Wie asks about manner, condition or a characteristic."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-3",
      "title": {
        "fr": "Befinden, Menge und weitere Fragen",
        "de": "Befinden, Menge und weitere Fragen",
        "ar": "Befinden, Menge und weitere Fragen",
        "en": "Befinden, Menge und weitere Fragen"
      },
      "items": [
        {
          "id": "premium-ex-21",
          "german": "Wie geht es dir?",
          "context": {
            "fr": "Comment vas-tu ?",
            "de": "Wie geht es dir?",
            "ar": "كيف حالك؟",
            "en": "How are you?"
          },
          "explanation": {
            "fr": "Wie geht es dir? — Wie demande la manière, l’état ou une caractéristique.",
            "de": "Wie geht es dir? — Wie fragt nach Art und Weise, Befinden oder einer Eigenschaft.",
            "ar": "Wie geht es dir? — تسأل Wie عن الكيفية أو الحالة أو صفة.",
            "en": "Wie geht es dir? — Wie asks about manner, condition or a characteristic."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Wie kommst du zur Arbeit?",
          "context": {
            "fr": "Comment vas-tu au travail ?",
            "de": "Wie kommst du zur Arbeit?",
            "ar": "كيف تذهب إلى العمل؟",
            "en": "How do you get to work?"
          },
          "explanation": {
            "fr": "Wie kommst du? — Wie demande la manière, l’état ou une caractéristique.",
            "de": "Wie kommst du? — Wie fragt nach Art und Weise, Befinden oder einer Eigenschaft.",
            "ar": "Wie kommst du? — تسأل Wie عن الكيفية أو الحالة أو صفة.",
            "en": "Wie kommst du? — Wie asks about manner, condition or a characteristic."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Wie lange dauert der Film?",
          "context": {
            "fr": "Combien de temps dure le film ?",
            "de": "Wie lange dauert der Film?",
            "ar": "كم يستغرق الفيلم؟",
            "en": "How long is the film?"
          },
          "explanation": {
            "fr": "Wie lange dauert …? — Wie lange demande une durée, et non un moment précis.",
            "de": "Wie lange dauert …? — Wie lange fragt nach der Dauer, nicht nach einem Zeitpunkt.",
            "ar": "Wie lange dauert …? — تسأل Wie lange عن المدة لا عن لحظة محددة.",
            "en": "Wie lange dauert …? — Wie lange asks for duration rather than a specific time."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Wie oft trainierst du?",
          "context": {
            "fr": "À quelle fréquence t’entraînes-tu ?",
            "de": "Wie oft trainierst du?",
            "ar": "كم مرة تتدرب؟",
            "en": "How often do you train?"
          },
          "explanation": {
            "fr": "Wie oft trainierst du? — Wie oft demande la fréquence d’une action.",
            "de": "Wie oft trainierst du? — Wie oft fragt nach der Häufigkeit.",
            "ar": "Wie oft trainierst du? — تسأل Wie oft عن تكرار الفعل.",
            "en": "Wie oft trainierst du? — Wie oft asks about frequency."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Wie viel kostet das Buch?",
          "context": {
            "fr": "Combien coûte le livre ?",
            "de": "Wie viel kostet das Buch?",
            "ar": "كم ثمن الكتاب؟",
            "en": "How much does the book cost?"
          },
          "explanation": {
            "fr": "Wie viel kostet …? — Wie viel demande une quantité non dénombrée ou un montant.",
            "de": "Wie viel kostet …? — Wie viel fragt nach einer nicht einzeln gezählten Menge oder einem Betrag.",
            "ar": "Wie viel kostet …? — تسأل Wie viel عن كمية غير معدودة أو مبلغ.",
            "en": "Wie viel kostet …? — Wie viel asks about an uncounted quantity or an amount."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Wie viele Geschwister hast du?",
          "context": {
            "fr": "Combien de frères et sœurs as-tu ?",
            "de": "Wie viele Geschwister hast du?",
            "ar": "كم أخاً وأختاً لديك؟",
            "en": "How many siblings do you have?"
          },
          "explanation": {
            "fr": "Wie viele Geschwister hast du? — Wie viele demande un nombre d’éléments dénombrables au pluriel.",
            "de": "Wie viele Geschwister hast du? — Wie viele fragt nach der Anzahl zählbarer Dinge im Plural.",
            "ar": "Wie viele Geschwister hast du? — تسأل Wie viele عن عدد الأشياء المعدودة في الجمع.",
            "en": "Wie viele Geschwister hast du? — Wie viele asks for the number of countable things in the plural."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Warum lernst du Deutsch?",
          "context": {
            "fr": "Pourquoi apprends-tu l’allemand ?",
            "de": "Warum lernst du Deutsch?",
            "ar": "لماذا تتعلم الألمانية؟",
            "en": "Why are you learning German?"
          },
          "explanation": {
            "fr": "Warum lernst du? — Warum demande la cause ; une réponse peut commencer par weil.",
            "de": "Warum lernst du? — Warum fragt nach dem Grund; eine Antwort kann mit weil beginnen.",
            "ar": "Warum lernst du? — تسأل Warum عن السبب ويمكن أن تبدأ الإجابة بـweil.",
            "en": "Warum lernst du? — Warum asks for the reason; a reply may begin with weil."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Mit wem gehst du ins Kino?",
          "context": {
            "fr": "Avec qui vas-tu au cinéma ?",
            "de": "Mit wem gehst du ins Kino?",
            "ar": "مع من تذهب إلى السينما؟",
            "en": "Who are you going to the cinema with?"
          },
          "explanation": {
            "fr": "Mit wem gehst du? — La préposition mit impose le datif : mit wem interroge sur l’accompagnateur ou l’interlocuteur.",
            "de": "Mit wem gehst du? — Mit verlangt den Dativ: mit wem fragt nach Begleitung oder Gesprächspartner.",
            "ar": "Mit wem gehst du? — يأتي بعد mit الداتيف، وتسأل mit wem عن المرافق أو المحاور.",
            "en": "Mit wem gehst du? — Mit takes the dative: mit wem asks about a companion or conversation partner."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Von wem ist das Geschenk?",
          "context": {
            "fr": "De qui vient le cadeau ?",
            "de": "Von wem ist das Geschenk?",
            "ar": "ممن جاءت الهدية؟",
            "en": "Who is the gift from?"
          },
          "explanation": {
            "fr": "Von wem ist …? — Von impose le datif ; von wem demande de quelle personne vient quelque chose.",
            "de": "Von wem ist …? — Von verlangt den Dativ; von wem fragt nach der Person als Quelle.",
            "ar": "Von wem ist …? — يأتي بعد von الداتيف، وتسأل von wem عن الشخص الذي جاء منه الشيء.",
            "en": "Von wem ist …? — Von takes the dative; von wem asks which person something comes from."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Welchen Bus nimmst du?",
          "context": {
            "fr": "Quel bus prends-tu ?",
            "de": "Welchen Bus nimmst du?",
            "ar": "أي حافلة تستقل؟",
            "en": "Which bus are you taking?"
          },
          "explanation": {
            "fr": "Welchen Bus (Akk.) nimmst du? — Welch- permet de choisir parmi des éléments identifiables ; sa terminaison s’accorde avec le nom.",
            "de": "Welchen Bus (Akk.) nimmst du? — Welch- fragt nach einer Auswahl; die Endung richtet sich nach dem Nomen.",
            "ar": "Welchen Bus (Akk.) nimmst du? — تسأل Welch- عن اختيار من عناصر محددة وتتوافق نهايتها مع الاسم.",
            "en": "Welchen Bus (Akk.) nimmst du? — Welch- asks for a choice among identifiable items; its ending agrees with the noun."
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
        "fr": "A: Woher kommen Sie? (D’où venez-vous ?)\nB: Aus Marokko. (Du Maroc.)\nA: Warum lernen Sie Deutsch? (Pourquoi apprenez-vous l’allemand ?)\nB: Ich möchte in Deutschland arbeiten. (Je voudrais travailler en Allemagne.)",
        "de": "A: Woher kommen Sie?\nB: Aus Marokko.\nA: Warum lernen Sie Deutsch?\nB: Ich möchte in Deutschland arbeiten.",
        "ar": "أ: Woher kommen Sie? (من أين أتيتم؟)\nب: Aus Marokko. (من المغرب.)\nأ: Warum lernen Sie Deutsch? (لماذا تتعلمون الألمانية؟)\nب: Ich möchte in Deutschland arbeiten. (أود العمل في ألمانيا.)",
        "en": "A: Woher kommen Sie? (Where are you from?)\nB: Aus Marokko. (From Morocco.)\nA: Warum lernen Sie Deutsch? (Why are you learning German?)\nB: Ich möchte in Deutschland arbeiten. (I would like to work in Germany.)"
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
        "fr": "❌ Wo du wohnst? → ✓ Wo wohnst du? (verbe en deuxième position)\n❌ Wer besuchst du? → ✓ Wen besuchst du? (accusatif)\n❌ Mit wen sprichst du? → ✓ Mit wem sprichst du? (datif)\n❌ Woher fährst du? pour la destination → ✓ Wohin fährst du?",
        "de": "❌ Wo du wohnst? → ✓ Wo wohnst du? (Verb auf Position zwei)\n❌ Wer besuchst du? → ✓ Wen besuchst du? (Akkusativ)\n❌ Mit wen sprichst du? → ✓ Mit wem sprichst du? (Dativ)\n❌ Woher fährst du? für das Ziel → ✓ Wohin fährst du?",
        "ar": "❌ Wo du wohnst? → ✓ Wo wohnst du? (الفعل ثانياً)\n❌ Wer besuchst du? → ✓ Wen besuchst du? (نصب)\n❌ Mit wen sprichst du? → ✓ Mit wem sprichst du? (داتيف)\n❌ Woher fährst du? للسؤال عن الوجهة → ✓ Wohin fährst du?",
        "en": "❌ Wo du wohnst? → ✓ Wo wohnst du? (verb second)\n❌ Wer besuchst du? → ✓ Wen besuchst du? (accusative)\n❌ Mit wen sprichst du? → ✓ Mit wem sprichst du? (dative)\n❌ Woher fährst du? for destination → ✓ Wohin fährst du?"
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
        "fr": "Détermine l’information recherchée. Choisis le mot interrogatif et son cas. Place le verbe conjugué juste après le groupe interrogatif ; garde l’infinitif, le participe ou la particule à la fin.",
        "de": "Bestimme die gesuchte Information. Wähle Fragewort und Kasus. Setze das finite Verb direkt nach der Fragegruppe; Infinitiv, Partizip oder Präfix bleiben am Ende.",
        "ar": "حدد المعلومة واختر أداة السؤال وحالتها. ضع الفعل المصرف بعد مجموعة السؤال مباشرة، والمصدر أو اسم المفعول أو السابقة في النهاية.",
        "en": "Identify the information sought. Choose the question word and case. Place the finite verb immediately after the question phrase; keep the infinitive, participle or prefix at the end."
      }
    }
  ]
}

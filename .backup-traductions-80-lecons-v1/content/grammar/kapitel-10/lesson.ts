import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  "id": "kapitel-10-lesson",
  "title": {
    "fr": "Lernen Sie Deutsch?",
    "de": "Lernen Sie Deutsch?",
    "ar": "Lernen Sie Deutsch?",
    "en": "Lernen Sie Deutsch?"
  },
  "subtitle": {
    "fr": "Questions fermées",
    "de": "Ja/Nein-Fragen",
    "ar": "أسئلة نعم أو لا",
    "en": "Yes/no questions"
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
        "fr": "Aussage oder Entscheidungsfrage?",
        "de": "Aussage oder Entscheidungsfrage?",
        "ar": "Aussage oder Entscheidungsfrage?",
        "en": "Aussage oder Entscheidungsfrage?"
      },
      "text": {
        "fr": "Une phrase déclarative a normalement le verbe conjugué en deuxième position : Er kommt aus Berlin. Une question fermée place ce verbe en première position : Kommt er aus Berlin? Le sujet suit ; la conjugaison ne change pas. Contrairement à une W-Frage, aucun mot interrogatif ne précède le verbe.",
        "de": "Im Aussagesatz steht das finite Verb normalerweise auf Position zwei: Er kommt aus Berlin. In einer Entscheidungsfrage steht es auf Position eins: Kommt er aus Berlin? Das Subjekt folgt; die Konjugation bleibt gleich. Anders als bei einer W-Frage steht kein Fragewort davor.",
        "ar": "في الجملة الخبرية يأتي الفعل المصرف عادة في الموقع الثاني: Er kommt aus Berlin. وفي السؤال المغلق يأتي أولاً: Kommt er aus Berlin? ثم الفاعل دون تغيير التصريف. وعلى خلاف السؤال المفتوح لا توجد أداة استفهام قبله.",
        "en": "In a statement the finite verb is normally second: Er kommt aus Berlin. In a yes/no question it comes first: Kommt er aus Berlin? The subject follows; conjugation is unchanged. Unlike a wh-question, no question word precedes the verb."
      }
    },
    {
      "type": "table",
      "id": "premium-2",
      "title": {
        "fr": "Satzbau",
        "de": "Satzbau",
        "ar": "Satzbau",
        "en": "Satzbau"
      },
      "headers": [
        {
          "fr": "Aussage",
          "de": "Aussage",
          "ar": "Aussage",
          "en": "Aussage"
        },
        {
          "fr": "Ja/Nein-Frage",
          "de": "Ja/Nein-Frage",
          "ar": "Ja/Nein-Frage",
          "en": "Ja/Nein-Frage"
        },
        {
          "fr": "W-Frage",
          "de": "W-Frage",
          "ar": "W-Frage",
          "en": "W-Frage"
        }
      ],
      "rows": [
        {
          "id": "premium-2-1",
          "cells": [
            {
              "fr": "Du wohnst in Berlin.",
              "de": "Du wohnst in Berlin.",
              "ar": "Du wohnst in Berlin.",
              "en": "Du wohnst in Berlin."
            },
            {
              "fr": "Wohnst du in Berlin?",
              "de": "Wohnst du in Berlin?",
              "ar": "Wohnst du in Berlin?",
              "en": "Wohnst du in Berlin?"
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
          "id": "premium-2-2",
          "cells": [
            {
              "fr": "Er kann schwimmen.",
              "de": "Er kann schwimmen.",
              "ar": "Er kann schwimmen.",
              "en": "Er kann schwimmen."
            },
            {
              "fr": "Kann er schwimmen?",
              "de": "Kann er schwimmen?",
              "ar": "Kann er schwimmen?",
              "en": "Kann er schwimmen?"
            },
            {
              "fr": "Was kann er?",
              "de": "Was kann er?",
              "ar": "Was kann er?",
              "en": "Was kann er?"
            }
          ]
        },
        {
          "id": "premium-2-3",
          "cells": [
            {
              "fr": "Ihr kauft heute ein.",
              "de": "Ihr kauft heute ein.",
              "ar": "Ihr kauft heute ein.",
              "en": "Ihr kauft heute ein."
            },
            {
              "fr": "Kauft ihr heute ein?",
              "de": "Kauft ihr heute ein?",
              "ar": "Kauft ihr heute ein?",
              "en": "Kauft ihr heute ein?"
            },
            {
              "fr": "Wann kauft ihr ein?",
              "de": "Wann kauft ihr ein?",
              "ar": "Wann kauft ihr ein?",
              "en": "Wann kauft ihr ein?"
            }
          ]
        },
        {
          "id": "premium-2-4",
          "cells": [
            {
              "fr": "Sie hat Tee gekauft.",
              "de": "Sie hat Tee gekauft.",
              "ar": "Sie hat Tee gekauft.",
              "en": "Sie hat Tee gekauft."
            },
            {
              "fr": "Hat sie Tee gekauft?",
              "de": "Hat sie Tee gekauft?",
              "ar": "Hat sie Tee gekauft?",
              "en": "Hat sie Tee gekauft?"
            },
            {
              "fr": "Was hat sie gekauft?",
              "de": "Was hat sie gekauft?",
              "ar": "Was hat sie gekauft?",
              "en": "Was hat sie gekauft?"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-3",
      "title": {
        "fr": "Ja, nein und doch",
        "de": "Ja, nein und doch",
        "ar": "Ja, nein und doch",
        "en": "Ja, nein und doch"
      },
      "text": {
        "fr": "À une question affirmative, ja confirme et nein nie : Kommst du? — Ja, ich komme. / Nein, ich komme nicht. À une question négative, doch contredit la négation : Kommst du nicht? — Doch, ich komme. Nein confirme que tu ne viens pas : Nein, ich komme nicht. Évite un simple ja face à une question négative, car il peut être ambigu.",
        "de": "Auf eine positive Frage bestätigt ja und verneint nein: Kommst du? — Ja, ich komme. / Nein, ich komme nicht. Bei einer negativen Frage widerspricht doch der Negation: Kommst du nicht? — Doch, ich komme. Nein bestätigt: Nein, ich komme nicht. Ein bloßes ja kann bei negativen Fragen missverständlich sein.",
        "ar": "مع السؤال المثبت تؤكد ja وتنفي nein. أما مع السؤال المنفي فتخالف doch النفي: Kommst du nicht? — Doch, ich komme. وتؤكد nein عدم المجيء: Nein, ich komme nicht. وقد تكون ja وحدها ملتبسة مع السؤال المنفي.",
        "en": "For a positive question, ja confirms and nein denies: Kommst du? — Ja, ich komme. / Nein, ich komme nicht. For a negative question, doch contradicts the negative: Kommst du nicht? — Doch, ich komme. Nein confirms the negative: Nein, ich komme nicht. A bare ja can be ambiguous with a negative question."
      }
    },
    {
      "type": "table",
      "id": "premium-4",
      "title": {
        "fr": "Antworten im Vergleich",
        "de": "Antworten im Vergleich",
        "ar": "Antworten im Vergleich",
        "en": "Antworten im Vergleich"
      },
      "headers": [
        {
          "fr": "Frage",
          "de": "Frage",
          "ar": "Frage",
          "en": "Frage"
        },
        {
          "fr": "Positive Antwort",
          "de": "Positive Antwort",
          "ar": "Positive Antwort",
          "en": "Positive Antwort"
        },
        {
          "fr": "Negative Antwort",
          "de": "Negative Antwort",
          "ar": "Negative Antwort",
          "en": "Negative Antwort"
        }
      ],
      "rows": [
        {
          "id": "premium-4-1",
          "cells": [
            {
              "fr": "Hast du Zeit?",
              "de": "Hast du Zeit?",
              "ar": "Hast du Zeit?",
              "en": "Hast du Zeit?"
            },
            {
              "fr": "Ja, ich habe Zeit.",
              "de": "Ja, ich habe Zeit.",
              "ar": "Ja, ich habe Zeit.",
              "en": "Ja, ich habe Zeit."
            },
            {
              "fr": "Nein, ich habe keine Zeit.",
              "de": "Nein, ich habe keine Zeit.",
              "ar": "Nein, ich habe keine Zeit.",
              "en": "Nein, ich habe keine Zeit."
            }
          ]
        },
        {
          "id": "premium-4-2",
          "cells": [
            {
              "fr": "Hast du keine Zeit?",
              "de": "Hast du keine Zeit?",
              "ar": "Hast du keine Zeit?",
              "en": "Hast du keine Zeit?"
            },
            {
              "fr": "Doch, ich habe Zeit.",
              "de": "Doch, ich habe Zeit.",
              "ar": "Doch, ich habe Zeit.",
              "en": "Doch, ich habe Zeit."
            },
            {
              "fr": "Nein, ich habe keine Zeit.",
              "de": "Nein, ich habe keine Zeit.",
              "ar": "Nein, ich habe keine Zeit.",
              "en": "Nein, ich habe keine Zeit."
            }
          ]
        },
        {
          "id": "premium-4-3",
          "cells": [
            {
              "fr": "Kommst du heute?",
              "de": "Kommst du heute?",
              "ar": "Kommst du heute?",
              "en": "Kommst du heute?"
            },
            {
              "fr": "Ja, ich komme.",
              "de": "Ja, ich komme.",
              "ar": "Ja, ich komme.",
              "en": "Ja, ich komme."
            },
            {
              "fr": "Nein, ich komme nicht.",
              "de": "Nein, ich komme nicht.",
              "ar": "Nein, ich komme nicht.",
              "en": "Nein, ich komme nicht."
            }
          ]
        },
        {
          "id": "premium-4-4",
          "cells": [
            {
              "fr": "Kommst du heute nicht?",
              "de": "Kommst du heute nicht?",
              "ar": "Kommst du heute nicht?",
              "en": "Kommst du heute nicht?"
            },
            {
              "fr": "Doch, ich komme.",
              "de": "Doch, ich komme.",
              "ar": "Doch, ich komme.",
              "en": "Doch, ich komme."
            },
            {
              "fr": "Nein, ich komme nicht.",
              "de": "Nein, ich komme nicht.",
              "ar": "Nein, ich komme nicht.",
              "en": "Nein, ich komme nicht."
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-5",
      "title": {
        "fr": "Verben in der Satzklammer",
        "de": "Verben in der Satzklammer",
        "ar": "Verben in der Satzklammer",
        "en": "Verben in der Satzklammer"
      },
      "text": {
        "fr": "Avec un modal, seul le modal conjugué passe en tête : Kannst du morgen kommen? Avec un verbe séparable, la particule reste finale : Rufst du mich an? Avec le Perfekt, l’auxiliaire ouvre la question : Hast du gegessen? On ne déplace pas l’ensemble du groupe verbal.",
        "de": "Mit Modalverb steht nur das finite Modalverb vorn: Kannst du morgen kommen? Bei trennbaren Verben bleibt das Präfix am Ende: Rufst du mich an? Im Perfekt beginnt die Frage mit dem Hilfsverb: Hast du gegessen? Nicht die ganze Verbgruppe wird verschoben.",
        "ar": "مع الفعل الناقص يتقدم الفعل الناقص المصرف فقط: Kannst du morgen kommen? ومع الفعل المنفصل تبقى السابقة في النهاية. وفي Perfekt يبدأ السؤال بالفعل المساعد: Hast du gegessen? لا تُنقل المجموعة الفعلية كلها.",
        "en": "With a modal, only the finite modal moves first: Kannst du morgen kommen? With a separable verb, the prefix remains final: Rufst du mich an? In the perfect, the auxiliary comes first: Hast du gegessen? Do not move the entire verb phrase."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-6",
      "title": {
        "fr": "Höfliche Bitten",
        "de": "Höfliche Bitten",
        "ar": "Höfliche Bitten",
        "en": "Höfliche Bitten"
      },
      "text": {
        "fr": "Könnten Sie mir bitte helfen? et Würden Sie bitte das Fenster öffnen? ont la forme d’une question fermée mais servent à faire une demande. Könnten est une forme de können au Konjunktiv II ; würden accompagne un infinitif. Avec une personne familière, on peut dire Könntest du…? ou Würdest du…?",
        "de": "Könnten Sie mir bitte helfen? und Würden Sie bitte das Fenster öffnen? sind formal Entscheidungsfragen, dienen aber als Bitten. Könnten ist der Konjunktiv II von können; würden steht mit Infinitiv. Informell: Könntest du…? oder Würdest du…?",
        "ar": "Könnten Sie mir bitte helfen? وWürden Sie bitte das Fenster öffnen? سؤالان مغلقان في الشكل لكنهما طلبان. Könnten صيغة Konjunktiv II من können وwürden تأتي مع المصدر. مع شخص مألوف نقول Könntest du…? أو Würdest du…?",
        "en": "Könnten Sie mir bitte helfen? and Würden Sie bitte das Fenster öffnen? are yes/no questions in form but function as requests. Könnten is the subjunctive II of können; würden takes an infinitive. Informally use Könntest du…? or Würdest du…?"
      }
    },
    {
      "type": "examples",
      "id": "premium-beispiele-1",
      "title": {
        "fr": "Entscheidungsfragen und Modalverben",
        "de": "Entscheidungsfragen und Modalverben",
        "ar": "Entscheidungsfragen und Modalverben",
        "en": "Entscheidungsfragen und Modalverben"
      },
      "items": [
        {
          "id": "premium-ex-01",
          "german": "Lernen Sie Deutsch?",
          "context": {
            "fr": "Apprenez-vous l’allemand ?",
            "de": "Lernen Sie Deutsch?",
            "ar": "هل تتعلمون الألمانية؟",
            "en": "Are you learning German?"
          },
          "explanation": {
            "fr": "Lernen Sie …? — La question fermée commence par le verbe conjugué, suivi du sujet. Elle peut recevoir une réponse ja ou nein.",
            "de": "Lernen Sie …? — Die Entscheidungsfrage beginnt mit dem finiten Verb, dann folgt das Subjekt. Eine Antwort mit ja oder nein ist möglich.",
            "ar": "Lernen Sie …? — يبدأ السؤال المغلق بالفعل المصرف ثم الفاعل ويمكن الإجابة بنعم أو لا.",
            "en": "Lernen Sie …? — The yes/no question begins with the finite verb followed by the subject. It can be answered with ja or nein."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Wohnst du in Berlin?",
          "context": {
            "fr": "Habites-tu à Berlin ?",
            "de": "Wohnst du in Berlin?",
            "ar": "هل تسكن في برلين؟",
            "en": "Do you live in Berlin?"
          },
          "explanation": {
            "fr": "Wohnst du …? — La question fermée commence par le verbe conjugué, suivi du sujet. Elle peut recevoir une réponse ja ou nein.",
            "de": "Wohnst du …? — Die Entscheidungsfrage beginnt mit dem finiten Verb, dann folgt das Subjekt. Eine Antwort mit ja oder nein ist möglich.",
            "ar": "Wohnst du …? — يبدأ السؤال المغلق بالفعل المصرف ثم الفاعل ويمكن الإجابة بنعم أو لا.",
            "en": "Wohnst du …? — The yes/no question begins with the finite verb followed by the subject. It can be answered with ja or nein."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Ist das dein Fahrrad?",
          "context": {
            "fr": "Est-ce ton vélo ?",
            "de": "Ist das dein Fahrrad?",
            "ar": "هل هذه دراجتك؟",
            "en": "Is that your bicycle?"
          },
          "explanation": {
            "fr": "Ist das …? — La question fermée commence par le verbe conjugué, suivi du sujet. Elle peut recevoir une réponse ja ou nein.",
            "de": "Ist das …? — Die Entscheidungsfrage beginnt mit dem finiten Verb, dann folgt das Subjekt. Eine Antwort mit ja oder nein ist möglich.",
            "ar": "Ist das …? — يبدأ السؤال المغلق بالفعل المصرف ثم الفاعل ويمكن الإجابة بنعم أو لا.",
            "en": "Ist das …? — The yes/no question begins with the finite verb followed by the subject. It can be answered with ja or nein."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Habt ihr heute Zeit?",
          "context": {
            "fr": "Avez-vous du temps aujourd’hui ?",
            "de": "Habt ihr heute Zeit?",
            "ar": "هل لديكم وقت اليوم؟",
            "en": "Do you have time today?"
          },
          "explanation": {
            "fr": "Habt ihr …? — La question fermée commence par le verbe conjugué, suivi du sujet. Elle peut recevoir une réponse ja ou nein.",
            "de": "Habt ihr …? — Die Entscheidungsfrage beginnt mit dem finiten Verb, dann folgt das Subjekt. Eine Antwort mit ja oder nein ist möglich.",
            "ar": "Habt ihr …? — يبدأ السؤال المغلق بالفعل المصرف ثم الفاعل ويمكن الإجابة بنعم أو لا.",
            "en": "Habt ihr …? — The yes/no question begins with the finite verb followed by the subject. It can be answered with ja or nein."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Arbeitet deine Schwester hier?",
          "context": {
            "fr": "Ta sœur travaille-t-elle ici ?",
            "de": "Arbeitet deine Schwester hier?",
            "ar": "هل تعمل أختك هنا؟",
            "en": "Does your sister work here?"
          },
          "explanation": {
            "fr": "Arbeitet deine Schwester …? — La question fermée commence par le verbe conjugué, suivi du sujet. Elle peut recevoir une réponse ja ou nein.",
            "de": "Arbeitet deine Schwester …? — Die Entscheidungsfrage beginnt mit dem finiten Verb, dann folgt das Subjekt. Eine Antwort mit ja oder nein ist möglich.",
            "ar": "Arbeitet deine Schwester …? — يبدأ السؤال المغلق بالفعل المصرف ثم الفاعل ويمكن الإجابة بنعم أو لا.",
            "en": "Arbeitet deine Schwester …? — The yes/no question begins with the finite verb followed by the subject. It can be answered with ja or nein."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Kannst du gut schwimmen?",
          "context": {
            "fr": "Sais-tu bien nager ?",
            "de": "Kannst du gut schwimmen?",
            "ar": "هل تستطيع السباحة جيداً؟",
            "en": "Can you swim well?"
          },
          "explanation": {
            "fr": "Kannst du … schwimmen? — Le modal conjugué est en tête de la question ; l’action à l’infinitif est finale.",
            "de": "Kannst du … schwimmen? — Das finite Modalverb steht am Anfang; der Infinitiv steht am Ende.",
            "ar": "Kannst du … schwimmen? — يأتي الفعل الناقص المصرف أولاً والمصدر في النهاية.",
            "en": "Kannst du … schwimmen? — The finite modal comes first; the infinitive is final."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Müssen wir warten?",
          "context": {
            "fr": "Devons-nous attendre ?",
            "de": "Müssen wir warten?",
            "ar": "هل يجب علينا الانتظار؟",
            "en": "Do we have to wait?"
          },
          "explanation": {
            "fr": "Müssen wir warten? — Le modal conjugué est en tête de la question ; l’action à l’infinitif est finale.",
            "de": "Müssen wir warten? — Das finite Modalverb steht am Anfang; der Infinitiv steht am Ende.",
            "ar": "Müssen wir warten? — يأتي الفعل الناقص المصرف أولاً والمصدر في النهاية.",
            "en": "Müssen wir warten? — The finite modal comes first; the infinitive is final."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "Darf ich das Fenster öffnen?",
          "context": {
            "fr": "Puis-je ouvrir la fenêtre ?",
            "de": "Darf ich das Fenster öffnen?",
            "ar": "هل يسمح لي بفتح النافذة؟",
            "en": "May I open the window?"
          },
          "explanation": {
            "fr": "Darf ich … öffnen? — Le modal conjugué est en tête de la question ; l’action à l’infinitif est finale.",
            "de": "Darf ich … öffnen? — Das finite Modalverb steht am Anfang; der Infinitiv steht am Ende.",
            "ar": "Darf ich … öffnen? — يأتي الفعل الناقص المصرف أولاً والمصدر في النهاية.",
            "en": "Darf ich … öffnen? — The finite modal comes first; the infinitive is final."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Möchtet ihr etwas essen?",
          "context": {
            "fr": "Voudriez-vous manger quelque chose ?",
            "de": "Möchtet ihr etwas essen?",
            "ar": "هل تودون تناول شيء؟",
            "en": "Would you like something to eat?"
          },
          "explanation": {
            "fr": "Möchtet ihr … essen? — Le modal conjugué est en tête de la question ; l’action à l’infinitif est finale.",
            "de": "Möchtet ihr … essen? — Das finite Modalverb steht am Anfang; der Infinitiv steht am Ende.",
            "ar": "Möchtet ihr … essen? — يأتي الفعل الناقص المصرف أولاً والمصدر في النهاية.",
            "en": "Möchtet ihr … essen? — The finite modal comes first; the infinitive is final."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Kaufst du heute ein?",
          "context": {
            "fr": "Fais-tu les courses aujourd’hui ?",
            "de": "Kaufst du heute ein?",
            "ar": "هل تتسوق اليوم؟",
            "en": "Are you shopping today?"
          },
          "explanation": {
            "fr": "Kaufst … ein? — Le radical conjugué vient en tête, le sujet le suit et la particule séparable reste à la fin.",
            "de": "Kaufst … ein? — Der finite Verbstamm steht am Anfang, danach das Subjekt; das trennbare Präfix bleibt am Ende.",
            "ar": "Kaufst … ein? — يأتي الجذر المصرف أولاً ثم الفاعل وتبقى السابقة المنفصلة في النهاية.",
            "en": "Kaufst … ein? — The finite stem comes first, then the subject; the separable prefix remains final."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-2",
      "title": {
        "fr": "Satzklammer und ja/nein/doch",
        "de": "Satzklammer und ja/nein/doch",
        "ar": "Satzklammer und ja/nein/doch",
        "en": "Satzklammer und ja/nein/doch"
      },
      "items": [
        {
          "id": "premium-ex-11",
          "german": "Ruft er dich später an?",
          "context": {
            "fr": "T’appelle-t-il plus tard ?",
            "de": "Ruft er dich später an?",
            "ar": "هل سيتصل بك لاحقاً؟",
            "en": "Will he call you later?"
          },
          "explanation": {
            "fr": "Ruft … an? — Le radical conjugué vient en tête, le sujet le suit et la particule séparable reste à la fin.",
            "de": "Ruft … an? — Der finite Verbstamm steht am Anfang, danach das Subjekt; das trennbare Präfix bleibt am Ende.",
            "ar": "Ruft … an? — يأتي الجذر المصرف أولاً ثم الفاعل وتبقى السابقة المنفصلة في النهاية.",
            "en": "Ruft … an? — The finite stem comes first, then the subject; the separable prefix remains final."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Kommt ihr morgen mit?",
          "context": {
            "fr": "Venez-vous avec nous demain ?",
            "de": "Kommt ihr morgen mit?",
            "ar": "هل ستأتون معنا غداً؟",
            "en": "Are you coming along tomorrow?"
          },
          "explanation": {
            "fr": "Kommt … mit? — Le radical conjugué vient en tête, le sujet le suit et la particule séparable reste à la fin.",
            "de": "Kommt … mit? — Der finite Verbstamm steht am Anfang, danach das Subjekt; das trennbare Präfix bleibt am Ende.",
            "ar": "Kommt … mit? — يأتي الجذر المصرف أولاً ثم الفاعل وتبقى السابقة المنفصلة في النهاية.",
            "en": "Kommt … mit? — The finite stem comes first, then the subject; the separable prefix remains final."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Hast du die E-Mail gelesen?",
          "context": {
            "fr": "As-tu lu le courriel ?",
            "de": "Hast du die E-Mail gelesen?",
            "ar": "هل قرأت البريد الإلكتروني؟",
            "en": "Have you read the email?"
          },
          "explanation": {
            "fr": "Hast … gelesen? — L’auxiliaire conjugué ouvre la question ; le Partizip II reste à la fin.",
            "de": "Hast … gelesen? — Das finite Hilfsverb eröffnet die Frage; das Partizip II steht am Ende.",
            "ar": "Hast … gelesen? — يبدأ السؤال بالفعل المساعد المصرف ويبقى اسم المفعول في النهاية.",
            "en": "Hast … gelesen? — The finite auxiliary opens the question; the past participle is final."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Ist der Zug angekommen?",
          "context": {
            "fr": "Le train est-il arrivé ?",
            "de": "Ist der Zug angekommen?",
            "ar": "هل وصل القطار؟",
            "en": "Has the train arrived?"
          },
          "explanation": {
            "fr": "Ist … angekommen? — L’auxiliaire conjugué ouvre la question ; le Partizip II reste à la fin.",
            "de": "Ist … angekommen? — Das finite Hilfsverb eröffnet die Frage; das Partizip II steht am Ende.",
            "ar": "Ist … angekommen? — يبدأ السؤال بالفعل المساعد المصرف ويبقى اسم المفعول في النهاية.",
            "en": "Ist … angekommen? — The finite auxiliary opens the question; the past participle is final."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Kommst du heute? – Ja, ich komme.",
          "context": {
            "fr": "Viens-tu aujourd’hui ? – Oui, je viens.",
            "de": "Kommst du heute? – Ja, ich komme.",
            "ar": "هل ستأتي اليوم؟ – نعم، سآتي.",
            "en": "Are you coming today? – Yes, I am."
          },
          "explanation": {
            "fr": "Ja, ich komme — Ja confirme la proposition affirmative de la question.",
            "de": "Ja, ich komme — Ja bestätigt den positiven Inhalt der Frage.",
            "ar": "Ja, ich komme — تؤكد Ja مضمون السؤال المثبت.",
            "en": "Ja, ich komme — Ja confirms the affirmative proposition in the question."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Hast du Hunger? – Nein, ich habe keinen Hunger.",
          "context": {
            "fr": "As-tu faim ? – Non, je n’ai pas faim.",
            "de": "Hast du Hunger? – Nein, ich habe keinen Hunger.",
            "ar": "هل أنت جائع؟ – لا، لست جائعاً.",
            "en": "Are you hungry? – No, I am not."
          },
          "explanation": {
            "fr": "Nein, ich habe keinen Hunger — Nein rejette la proposition affirmative ; la réponse complète peut contenir nicht ou kein.",
            "de": "Nein, ich habe keinen Hunger — Nein verneint den positiven Inhalt; die vollständige Antwort kann nicht oder kein enthalten.",
            "ar": "Nein, ich habe keinen Hunger — تنفي Nein مضمون السؤال المثبت وقد تحتوي الإجابة على nicht أو kein.",
            "en": "Nein, ich habe keinen Hunger — Nein rejects the affirmative proposition; the complete reply may contain nicht or kein."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Bist du müde? – Ja, ich bin müde.",
          "context": {
            "fr": "Es-tu fatigué ? – Oui, je suis fatigué.",
            "de": "Bist du müde? – Ja, ich bin müde.",
            "ar": "هل أنت متعب؟ – نعم، أنا متعب.",
            "en": "Are you tired? – Yes, I am."
          },
          "explanation": {
            "fr": "Ja, ich bin müde — Ja confirme la proposition affirmative de la question.",
            "de": "Ja, ich bin müde — Ja bestätigt den positiven Inhalt der Frage.",
            "ar": "Ja, ich bin müde — تؤكد Ja مضمون السؤال المثبت.",
            "en": "Ja, ich bin müde — Ja confirms the affirmative proposition in the question."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Sprichst du Französisch? – Nein, ich spreche kein Französisch.",
          "context": {
            "fr": "Parles-tu français ? – Non, je ne parle pas français.",
            "de": "Sprichst du Französisch? – Nein, ich spreche kein Französisch.",
            "ar": "هل تتحدث الفرنسية؟ – لا، لا أتحدث الفرنسية.",
            "en": "Do you speak French? – No, I do not."
          },
          "explanation": {
            "fr": "Nein, ich spreche kein Französisch — Nein rejette la proposition affirmative ; la réponse complète peut contenir nicht ou kein.",
            "de": "Nein, ich spreche kein Französisch — Nein verneint den positiven Inhalt; die vollständige Antwort kann nicht oder kein enthalten.",
            "ar": "Nein, ich spreche kein Französisch — تنفي Nein مضمون السؤال المثبت وقد تحتوي الإجابة على nicht أو kein.",
            "en": "Nein, ich spreche kein Französisch — Nein rejects the affirmative proposition; the complete reply may contain nicht or kein."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Kommst du heute nicht? – Doch, ich komme.",
          "context": {
            "fr": "Tu ne viens pas aujourd’hui ? – Si, je viens.",
            "de": "Kommst du heute nicht? – Doch, ich komme.",
            "ar": "ألن تأتي اليوم؟ – بلى، سآتي.",
            "en": "Aren’t you coming today? – Yes, I am."
          },
          "explanation": {
            "fr": "Doch, ich komme — Doch contredit une question négative : la réponse affirme ce que la question nie.",
            "de": "Doch, ich komme — Doch widerspricht einer negativen Frage: Die Antwort bejaht, was die Frage verneint.",
            "ar": "Doch, ich komme — تخالف Doch السؤال المنفي وتثبت ما ينفيه السؤال.",
            "en": "Doch, ich komme — Doch contradicts a negative question: the reply affirms what the question negates."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Hast du keine Zeit? – Doch, ich habe Zeit.",
          "context": {
            "fr": "Tu n’as pas de temps ? – Si, j’en ai.",
            "de": "Hast du keine Zeit? – Doch, ich habe Zeit.",
            "ar": "أليس لديك وقت؟ – بلى، لدي وقت.",
            "en": "Don’t you have time? – Yes, I do."
          },
          "explanation": {
            "fr": "Doch, ich habe Zeit — Doch contredit une question négative : la réponse affirme ce que la question nie.",
            "de": "Doch, ich habe Zeit — Doch widerspricht einer negativen Frage: Die Antwort bejaht, was die Frage verneint.",
            "ar": "Doch, ich habe Zeit — تخالف Doch السؤال المنفي وتثبت ما ينفيه السؤال.",
            "en": "Doch, ich habe Zeit — Doch contradicts a negative question: the reply affirms what the question negates."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-3",
      "title": {
        "fr": "Doch, nein und höfliche Bitten",
        "de": "Doch, nein und höfliche Bitten",
        "ar": "Doch, nein und höfliche Bitten",
        "en": "Doch, nein und höfliche Bitten"
      },
      "items": [
        {
          "id": "premium-ex-21",
          "german": "Ist sie nicht zu Hause? – Doch, sie ist zu Hause.",
          "context": {
            "fr": "Elle n’est pas chez elle ? – Si, elle y est.",
            "de": "Ist sie nicht zu Hause? – Doch, sie ist zu Hause.",
            "ar": "أليست في المنزل؟ – بلى، هي في المنزل.",
            "en": "Isn’t she home? – Yes, she is."
          },
          "explanation": {
            "fr": "Doch, sie ist zu Hause — Doch contredit une question négative : la réponse affirme ce que la question nie.",
            "de": "Doch, sie ist zu Hause — Doch widerspricht einer negativen Frage: Die Antwort bejaht, was die Frage verneint.",
            "ar": "Doch, sie ist zu Hause — تخالف Doch السؤال المنفي وتثبت ما ينفيه السؤال.",
            "en": "Doch, sie ist zu Hause — Doch contradicts a negative question: the reply affirms what the question negates."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Möchtest du keinen Tee? – Nein, ich möchte keinen Tee.",
          "context": {
            "fr": "Tu ne veux pas de thé ? – Non, je n’en veux pas.",
            "de": "Möchtest du keinen Tee? – Nein, ich möchte keinen Tee.",
            "ar": "ألا تريد الشاي؟ – لا، لا أريد الشاي.",
            "en": "Don’t you want tea? – No, I don’t."
          },
          "explanation": {
            "fr": "Nein, ich möchte keinen Tee — Nein confirme ici le contenu négatif de la question : l’action ou l’état n’a pas lieu.",
            "de": "Nein, ich möchte keinen Tee — Nein bestätigt hier den negativen Inhalt der Frage: Die Handlung oder der Zustand trifft nicht zu.",
            "ar": "Nein, ich möchte keinen Tee — تؤكد Nein هنا مضمون السؤال المنفي، أي أن الفعل لا يحدث أو الحالة غير قائمة.",
            "en": "Nein, ich möchte keinen Tee — Nein here confirms the negative content: the action or state does not hold."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Arbeitet er heute nicht? – Nein, er arbeitet heute nicht.",
          "context": {
            "fr": "Il ne travaille pas aujourd’hui ? – Non, il ne travaille pas.",
            "de": "Arbeitet er heute nicht? – Nein, er arbeitet heute nicht.",
            "ar": "ألا يعمل اليوم؟ – لا، لا يعمل اليوم.",
            "en": "Isn’t he working today? – No, he isn’t."
          },
          "explanation": {
            "fr": "Nein, er arbeitet heute nicht — Nein confirme ici le contenu négatif de la question : l’action ou l’état n’a pas lieu.",
            "de": "Nein, er arbeitet heute nicht — Nein bestätigt hier den negativen Inhalt der Frage: Die Handlung oder der Zustand trifft nicht zu.",
            "ar": "Nein, er arbeitet heute nicht — تؤكد Nein هنا مضمون السؤال المنفي، أي أن الفعل لا يحدث أو الحالة غير قائمة.",
            "en": "Nein, er arbeitet heute nicht — Nein here confirms the negative content: the action or state does not hold."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Kannst du nicht kommen? – Doch, ich kann kommen.",
          "context": {
            "fr": "Tu ne peux pas venir ? – Si, je peux venir.",
            "de": "Kannst du nicht kommen? – Doch, ich kann kommen.",
            "ar": "ألا تستطيع المجيء؟ – بلى، أستطيع.",
            "en": "Can’t you come? – Yes, I can."
          },
          "explanation": {
            "fr": "Doch, ich kann kommen — Doch contredit une question négative : la réponse affirme ce que la question nie.",
            "de": "Doch, ich kann kommen — Doch widerspricht einer negativen Frage: Die Antwort bejaht, was die Frage verneint.",
            "ar": "Doch, ich kann kommen — تخالف Doch السؤال المنفي وتثبت ما ينفيه السؤال.",
            "en": "Doch, ich kann kommen — Doch contradicts a negative question: the reply affirms what the question negates."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Könnten Sie mir bitte helfen?",
          "context": {
            "fr": "Pourriez-vous m’aider, s’il vous plaît ?",
            "de": "Könnten Sie mir bitte helfen?",
            "ar": "هل يمكنكم مساعدتي من فضلكم؟",
            "en": "Could you help me, please?"
          },
          "explanation": {
            "fr": "Könnten Sie … helfen? — Könnten Sie…? est une demande polie au Konjunktiv II, avec l’infinitif final.",
            "de": "Könnten Sie … helfen? — Könnten Sie…? ist eine höfliche Bitte im Konjunktiv II mit Infinitiv am Ende.",
            "ar": "Könnten Sie … helfen? — Könnten Sie…? طلب مهذب بصيغة Konjunktiv II والمصدر في النهاية.",
            "en": "Könnten Sie … helfen? — Könnten Sie…? is a polite request in the subjunctive II with the infinitive at the end."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Könntest du mir den Stift geben?",
          "context": {
            "fr": "Pourrais-tu me donner le stylo ?",
            "de": "Könntest du mir den Stift geben?",
            "ar": "هل يمكنك إعطائي القلم؟",
            "en": "Could you give me the pen?"
          },
          "explanation": {
            "fr": "Könntest du … geben? — Könnten Sie…? est une demande polie au Konjunktiv II, avec l’infinitif final.",
            "de": "Könntest du … geben? — Könnten Sie…? ist eine höfliche Bitte im Konjunktiv II mit Infinitiv am Ende.",
            "ar": "Könntest du … geben? — Könnten Sie…? طلب مهذب بصيغة Konjunktiv II والمصدر في النهاية.",
            "en": "Könntest du … geben? — Könnten Sie…? is a polite request in the subjunctive II with the infinitive at the end."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Könnten Sie das bitte wiederholen?",
          "context": {
            "fr": "Pourriez-vous répéter cela, s’il vous plaît ?",
            "de": "Könnten Sie das bitte wiederholen?",
            "ar": "هل يمكنكم تكرار ذلك من فضلكم؟",
            "en": "Could you repeat that, please?"
          },
          "explanation": {
            "fr": "Könnten Sie … wiederholen? — Könnten Sie…? est une demande polie au Konjunktiv II, avec l’infinitif final.",
            "de": "Könnten Sie … wiederholen? — Könnten Sie…? ist eine höfliche Bitte im Konjunktiv II mit Infinitiv am Ende.",
            "ar": "Könnten Sie … wiederholen? — Könnten Sie…? طلب مهذب بصيغة Konjunktiv II والمصدر في النهاية.",
            "en": "Könnten Sie … wiederholen? — Könnten Sie…? is a polite request in the subjunctive II with the infinitive at the end."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Würden Sie bitte die Tür schließen?",
          "context": {
            "fr": "Voudriez-vous fermer la porte, s’il vous plaît ?",
            "de": "Würden Sie bitte die Tür schließen?",
            "ar": "هل تتفضلون بإغلاق الباب؟",
            "en": "Would you close the door, please?"
          },
          "explanation": {
            "fr": "Würden Sie … schließen? — Würden Sie…? formule une demande polie ; le verbe principal reste à l’infinitif à la fin.",
            "de": "Würden Sie … schließen? — Würden Sie…? formuliert eine höfliche Bitte; das Vollverb bleibt als Infinitiv am Ende.",
            "ar": "Würden Sie … schließen? — Würden Sie…? صيغة طلب مهذب والفعل الرئيسي في المصدر في النهاية.",
            "en": "Würden Sie … schließen? — Würden Sie…? makes a polite request; the main verb remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Würdest du das Radio leiser machen?",
          "context": {
            "fr": "Pourrais-tu baisser le volume de la radio ?",
            "de": "Würdest du das Radio leiser machen?",
            "ar": "هل يمكنك خفض صوت المذياع؟",
            "en": "Would you turn the radio down?"
          },
          "explanation": {
            "fr": "Würdest du … machen? — Würden Sie…? formule une demande polie ; le verbe principal reste à l’infinitif à la fin.",
            "de": "Würdest du … machen? — Würden Sie…? formuliert eine höfliche Bitte; das Vollverb bleibt als Infinitiv am Ende.",
            "ar": "Würdest du … machen? — Würden Sie…? صيغة طلب مهذب والفعل الرئيسي في المصدر في النهاية.",
            "en": "Würdest du … machen? — Würden Sie…? makes a polite request; the main verb remains an infinitive at the end."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Würden Sie mir die Rechnung erklären?",
          "context": {
            "fr": "Voudriez-vous m’expliquer la facture ?",
            "de": "Würden Sie mir die Rechnung erklären?",
            "ar": "هل تتفضلون بشرح الفاتورة لي؟",
            "en": "Would you explain the bill to me?"
          },
          "explanation": {
            "fr": "Würden Sie … erklären? — Würden Sie…? formule une demande polie ; le verbe principal reste à l’infinitif à la fin.",
            "de": "Würden Sie … erklären? — Würden Sie…? formuliert eine höfliche Bitte; das Vollverb bleibt als Infinitiv am Ende.",
            "ar": "Würden Sie … erklären? — Würden Sie…? صيغة طلب مهذب والفعل الرئيسي في المصدر في النهاية.",
            "en": "Würden Sie … erklären? — Würden Sie…? makes a polite request; the main verb remains an infinitive at the end."
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
        "fr": "A: Haben Sie einen Termin? (Avez-vous rendez-vous ?)\nB: Nein, ich habe keinen Termin. (Non, je n’ai pas rendez-vous.)\nA: Können Sie kurz warten? (Pouvez-vous attendre un instant ?)\nB: Ja, natürlich. Könnten Sie mir bitte sagen, wie lange? (Oui, bien sûr. Pourriez-vous me dire combien de temps ?)",
        "de": "A: Haben Sie einen Termin?\nB: Nein, ich habe keinen Termin.\nA: Können Sie kurz warten?\nB: Ja, natürlich. Könnten Sie mir bitte sagen, wie lange?",
        "ar": "أ: Haben Sie einen Termin? (هل لديكم موعد؟)\nب: Nein, ich habe keinen Termin. (لا، ليس لدي موعد.)\nأ: Können Sie kurz warten? (هل يمكنكم الانتظار قليلاً؟)\nب: Ja, natürlich. Könnten Sie mir bitte sagen, wie lange? (نعم، بالطبع. هل يمكنكم إخباري كم من الوقت؟)",
        "en": "A: Haben Sie einen Termin? (Do you have an appointment?)\nB: Nein, ich habe keinen Termin. (No, I don’t.)\nA: Können Sie kurz warten? (Can you wait a moment?)\nB: Ja, natürlich. Könnten Sie mir bitte sagen, wie lange? (Yes, of course. Could you tell me how long?)"
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
        "fr": "❌ Du lernst Deutsch? comme structure neutre → ✓ Lernst du Deutsch?\n❌ Kannst schwimmen du? → ✓ Kannst du schwimmen?\n❌ Rufst an du mich? → ✓ Rufst du mich an?\nPour contredire Kommst du nicht?, préfère Doch, ich komme.",
        "de": "❌ Du lernst Deutsch? als neutrale Frage → ✓ Lernst du Deutsch?\n❌ Kannst schwimmen du? → ✓ Kannst du schwimmen?\n❌ Rufst an du mich? → ✓ Rufst du mich an?\nWiderspruch zu Kommst du nicht?: Doch, ich komme.",
        "ar": "❌ Du lernst Deutsch? في السؤال المحايد → ✓ Lernst du Deutsch?\n❌ Kannst schwimmen du? → ✓ Kannst du schwimmen?\n❌ Rufst an du mich? → ✓ Rufst du mich an?\nلمخالفة Kommst du nicht? قل Doch, ich komme.",
        "en": "❌ Du lernst Deutsch? as a neutral question → ✓ Lernst du Deutsch?\n❌ Kannst schwimmen du? → ✓ Kannst du schwimmen?\n❌ Rufst an du mich? → ✓ Rufst du mich an?\nTo contradict Kommst du nicht?, use Doch, ich komme."
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
        "fr": "Place le verbe conjugué en tête. Garde le reste verbal en fin. Pour répondre, vérifie si la question est affirmative ou négative ; utilise doch pour contredire une négation.",
        "de": "Stelle das finite Verb an den Anfang. Lass den restlichen Verbteil am Ende. Prüfe für die Antwort, ob die Frage positiv oder negativ ist; widersprich einer Negation mit doch.",
        "ar": "ضع الفعل المصرف أولاً وبقية الفعل في النهاية. تحقق هل السؤال مثبت أم منفي واستعمل doch لمخالفة النفي.",
        "en": "Put the finite verb first. Keep the remaining verb part at the end. Check whether the question is positive or negative; use doch to contradict a negative."
      }
    }
  ]
}

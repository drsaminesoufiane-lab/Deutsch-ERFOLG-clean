import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  "id": "kapitel-11-lesson",
  "title": {
    "fr": "Wo steht was?",
    "de": "Wo steht was?",
    "ar": "Wo steht was?",
    "en": "Wo steht was?"
  },
  "subtitle": {
    "fr": "Ordre des mots 1",
    "de": "Wörter im Satz 1",
    "ar": "ترتيب الكلمات 1",
    "en": "Word order 1"
  },
  "objective": {
    "fr": "Construire des phrases principales et des questions en plaçant correctement le verbe, le sujet, le temps et le lieu.",
    "de": "Aussagen und Fragen bilden und Verb, Subjekt, Zeit und Ort richtig anordnen.",
    "ar": "بناء الجمل الرئيسية والأسئلة ووضع الفعل والفاعل والزمان والمكان بشكل صحيح.",
    "en": "Build statements and questions with correct placement of verb, subject, time and place."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "premium-theorie-1",
      "title": {
        "fr": "Position zwei",
        "de": "Position zwei",
        "ar": "Position zwei",
        "en": "Position zwei"
      },
      "text": {
        "fr": "Compte les groupes syntaxiques et non les mots. Am Montag est un groupe : Am Montag | arbeitet | Sara. Quand le sujet commence la phrase, il précède le verbe. Si un autre groupe commence, le sujet suit généralement le verbe.",
        "de": "Zähle Satzglieder, nicht Wörter. Am Montag ist ein Satzglied: Am Montag | arbeitet | Sara. Steht das Subjekt zuerst, folgt das Verb. Beginnt ein anderes Satzglied, folgt das Subjekt meist dem Verb.",
        "ar": "عدّ عناصر الجملة لا الكلمات. Am Montag عنصر واحد: Am Montag | arbeitet | Sara. إذا بدأنا بالفاعل جاء الفعل بعده، وإذا بدأنا بعنصر آخر جاء الفاعل غالباً بعد الفعل.",
        "en": "Count constituents, not words. Am Montag is one constituent: Am Montag | arbeitet | Sara. If the subject comes first, the verb follows; if another constituent comes first, the subject generally follows the verb."
      }
    },
    {
      "type": "table",
      "id": "premium-tabelle-2",
      "title": {
        "fr": "Satztypen",
        "de": "Satztypen",
        "ar": "Satztypen",
        "en": "Satztypen"
      },
      "headers": [
        {
          "fr": "Type de phrase",
          "de": "Satztyp",
          "ar": "نوع الجملة",
          "en": "Clause type"
        },
        {
          "fr": "Position 1",
          "de": "Position 1",
          "ar": "الموقع الأول",
          "en": "Position 1"
        },
        {
          "fr": "Position 2",
          "de": "Position 2",
          "ar": "الموقع الثاني",
          "en": "Position 2"
        },
        {
          "fr": "Reste",
          "de": "Rest",
          "ar": "الباقي",
          "en": "Rest"
        }
      ],
      "rows": [
        {
          "id": "premium-tabelle-2-1",
          "cells": [
            {
              "fr": "Déclaration",
              "de": "Aussage",
              "ar": "خبر",
              "en": "Statement"
            },
            {
              "fr": "Wir",
              "de": "Wir",
              "ar": "Wir",
              "en": "Wir"
            },
            {
              "fr": "essen",
              "de": "essen",
              "ar": "essen",
              "en": "essen"
            },
            {
              "fr": "Pizza.",
              "de": "Pizza.",
              "ar": "Pizza.",
              "en": "Pizza."
            }
          ]
        },
        {
          "id": "premium-tabelle-2-2",
          "cells": [
            {
              "fr": "Déclaration",
              "de": "Aussage",
              "ar": "خبر",
              "en": "Statement"
            },
            {
              "fr": "Am Abend",
              "de": "Am Abend",
              "ar": "Am Abend",
              "en": "Am Abend"
            },
            {
              "fr": "essen",
              "de": "essen",
              "ar": "essen",
              "en": "essen"
            },
            {
              "fr": "wir Pizza.",
              "de": "wir Pizza.",
              "ar": "wir Pizza.",
              "en": "wir Pizza."
            }
          ]
        },
        {
          "id": "premium-tabelle-2-3",
          "cells": [
            {
              "fr": "Question ouverte",
              "de": "W-Frage",
              "ar": "سؤال بأداة استفهام",
              "en": "W-question"
            },
            {
              "fr": "Wann",
              "de": "Wann",
              "ar": "Wann",
              "en": "Wann"
            },
            {
              "fr": "essen",
              "de": "essen",
              "ar": "essen",
              "en": "essen"
            },
            {
              "fr": "wir Pizza?",
              "de": "wir Pizza?",
              "ar": "wir Pizza?",
              "en": "wir Pizza?"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-4",
          "cells": [
            {
              "fr": "Question fermée",
              "de": "Ja/Nein-Frage",
              "ar": "سؤال نعم أو لا",
              "en": "Yes/no question"
            },
            {
              "fr": "Essen",
              "de": "Essen",
              "ar": "Essen",
              "en": "Essen"
            },
            {
              "fr": "wir",
              "de": "wir",
              "ar": "wir",
              "en": "wir"
            },
            {
              "fr": "Pizza?",
              "de": "Pizza?",
              "ar": "Pizza?",
              "en": "Pizza?"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-5",
          "cells": [
            {
              "fr": "Impératif",
              "de": "Imperativ",
              "ar": "أمر",
              "en": "Imperative"
            },
            {
              "fr": "Essen",
              "de": "Essen",
              "ar": "Essen",
              "en": "Essen"
            },
            {
              "fr": "Sie",
              "de": "Sie",
              "ar": "Sie",
              "en": "Sie"
            },
            {
              "fr": "bitte etwas!",
              "de": "bitte etwas!",
              "ar": "bitte etwas!",
              "en": "bitte etwas!"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-theorie-3",
      "title": {
        "fr": "Zeit und Ort",
        "de": "Zeit und Ort",
        "ar": "Zeit und Ort",
        "en": "Zeit und Ort"
      },
      "text": {
        "fr": "Pour un ordre neutre A1, place souvent le temps avant le lieu : Ich arbeite heute in Rabat. Le lieu peut aussi ouvrir la phrase pour être mis en relief : In Rabat arbeite ich heute. Dans ce cas, le verbe reste deuxième.",
        "de": "In neutralen A1-Sätzen steht Zeit oft vor Ort: Ich arbeite heute in Rabat. Der Ort kann zur Betonung auch ins Vorfeld: In Rabat arbeite ich heute. Das Verb bleibt auf Position zwei.",
        "ar": "في الترتيب المحايد غالباً يسبق الزمان المكان: Ich arbeite heute in Rabat. ويمكن تقديم المكان للتأكيد: In Rabat arbeite ich heute. ويبقى الفعل في الموقع الثاني.",
        "en": "In neutral A1 sentences, time often precedes place: Ich arbeite heute in Rabat. Place can also be fronted for emphasis: In Rabat arbeite ich heute. The verb stays second."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-theorie-4",
      "title": {
        "fr": "Fragen und Aufforderungen",
        "de": "Fragen und Aufforderungen",
        "ar": "Fragen und Aufforderungen",
        "en": "Fragen und Aufforderungen"
      },
      "text": {
        "fr": "Une W-Frage demande une information précise. Dans Wer kommt?, wer est le sujet. Une question fermée demande généralement oui ou non et commence par le verbe. L’impératif commence aussi par le verbe, mais demande une action.",
        "de": "Eine W-Frage erfragt eine bestimmte Information. In Wer kommt? ist wer das Subjekt. Eine Entscheidungsfrage beginnt mit dem Verb und erwartet meist ja oder nein. Der Imperativ beginnt ebenfalls mit dem Verb, fordert aber zu einer Handlung auf.",
        "ar": "يطلب سؤال W معلومة محددة. في Wer kommt? تكون wer هي الفاعل. يبدأ السؤال المغلق بالفعل وينتظر غالباً نعم أو لا. ويبدأ الأمر بالفعل أيضاً لكنه يطلب القيام بفعل.",
        "en": "A W-question asks for specific information. In Wer kommt? wer is the subject. A yes/no question starts with the verb. The imperative also begins with the verb but requests an action."
      }
    },
    {
      "type": "examples",
      "id": "premium-beispiele-1",
      "title": {
        "fr": "Aussagesätze",
        "de": "Aussagesätze",
        "ar": "Aussagesätze",
        "en": "Aussagesätze"
      },
      "items": [
        {
          "id": "premium-ex-01",
          "german": "Ich wohne in Agadir.",
          "context": {
            "fr": "J’habite à Agadir.",
            "de": "Ich wohne in Agadir.",
            "ar": "أسكن في أكادير.",
            "en": "I live in Agadir."
          },
          "explanation": {
            "fr": "Ich → wohne — Dans une principale déclarative, le verbe conjugué occupe la deuxième position syntaxique, après le sujet ou un autre groupe.",
            "de": "Ich → wohne — Im Aussagesatz steht das finite Verb auf Position zwei, nach dem Subjekt oder einem anderen Satzglied.",
            "ar": "Ich → wohne — في الجملة الخبرية يأتي الفعل المصرف في الموقع الثاني بعد الفاعل أو عنصر آخر.",
            "en": "Ich → wohne — In a declarative main clause the finite verb takes second position, after the subject or another constituent."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Meine Eltern arbeiten in Rabat.",
          "context": {
            "fr": "Mes parents travaillent à Rabat.",
            "de": "Meine Eltern arbeiten in Rabat.",
            "ar": "يعمل والداي في الرباط.",
            "en": "My parents work in Rabat."
          },
          "explanation": {
            "fr": "Meine Eltern → arbeiten — Dans une principale déclarative, le verbe conjugué occupe la deuxième position syntaxique, après le sujet ou un autre groupe.",
            "de": "Meine Eltern → arbeiten — Im Aussagesatz steht das finite Verb auf Position zwei, nach dem Subjekt oder einem anderen Satzglied.",
            "ar": "Meine Eltern → arbeiten — في الجملة الخبرية يأتي الفعل المصرف في الموقع الثاني بعد الفاعل أو عنصر آخر.",
            "en": "Meine Eltern → arbeiten — In a declarative main clause the finite verb takes second position, after the subject or another constituent."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Peter und Anna lernen Deutsch.",
          "context": {
            "fr": "Peter et Anna apprennent l’allemand.",
            "de": "Peter und Anna lernen Deutsch.",
            "ar": "يتعلم بيتر وآنا الألمانية.",
            "en": "Peter and Anna are learning German."
          },
          "explanation": {
            "fr": "Peter und Anna → lernen — Dans une principale déclarative, le verbe conjugué occupe la deuxième position syntaxique, après le sujet ou un autre groupe.",
            "de": "Peter und Anna → lernen — Im Aussagesatz steht das finite Verb auf Position zwei, nach dem Subjekt oder einem anderen Satzglied.",
            "ar": "Peter und Anna → lernen — في الجملة الخبرية يأتي الفعل المصرف في الموقع الثاني بعد الفاعل أو عنصر آخر.",
            "en": "Peter und Anna → lernen — In a declarative main clause the finite verb takes second position, after the subject or another constituent."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Das kleine Kind spielt im Garten.",
          "context": {
            "fr": "Le petit enfant joue dans le jardin.",
            "de": "Das kleine Kind spielt im Garten.",
            "ar": "يلعب الطفل الصغير في الحديقة.",
            "en": "The little child plays in the garden."
          },
          "explanation": {
            "fr": "Das kleine Kind → spielt — Dans une principale déclarative, le verbe conjugué occupe la deuxième position syntaxique, après le sujet ou un autre groupe.",
            "de": "Das kleine Kind → spielt — Im Aussagesatz steht das finite Verb auf Position zwei, nach dem Subjekt oder einem anderen Satzglied.",
            "ar": "Das kleine Kind → spielt — في الجملة الخبرية يأتي الفعل المصرف في الموقع الثاني بعد الفاعل أو عنصر آخر.",
            "en": "Das kleine Kind → spielt — In a declarative main clause the finite verb takes second position, after the subject or another constituent."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Heute arbeitet Sara zu Hause.",
          "context": {
            "fr": "Aujourd’hui Sara travaille chez elle.",
            "de": "Heute arbeitet Sara zu Hause.",
            "ar": "تعمل سارة اليوم في المنزل.",
            "en": "Today Sara works from home."
          },
          "explanation": {
            "fr": "Heute → arbeitet → Sara — Le groupe placé en tête occupe une seule position, même s’il contient plusieurs mots. Le sujet vient ici après le verbe.",
            "de": "Heute → arbeitet → Sara — Das vorangestellte Satzglied besetzt nur eine Position, auch wenn es mehrere Wörter enthält. Das Subjekt folgt hier dem Verb.",
            "ar": "Heute → arbeitet → Sara — يشغل العنصر المتقدم موقعاً واحداً ولو احتوى عدة كلمات، ويأتي الفاعل هنا بعد الفعل.",
            "en": "Heute → arbeitet → Sara — The initial constituent occupies one slot even when it contains several words. The subject follows the verb here."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Am Montag beginnt der Kurs.",
          "context": {
            "fr": "Le cours commence lundi.",
            "de": "Am Montag beginnt der Kurs.",
            "ar": "تبدأ الدورة يوم الاثنين.",
            "en": "The course starts on Monday."
          },
          "explanation": {
            "fr": "Am Montag → beginnt → der Kurs — Le groupe placé en tête occupe une seule position, même s’il contient plusieurs mots. Le sujet vient ici après le verbe.",
            "de": "Am Montag → beginnt → der Kurs — Das vorangestellte Satzglied besetzt nur eine Position, auch wenn es mehrere Wörter enthält. Das Subjekt folgt hier dem Verb.",
            "ar": "Am Montag → beginnt → der Kurs — يشغل العنصر المتقدم موقعاً واحداً ولو احتوى عدة كلمات، ويأتي الفاعل هنا بعد الفعل.",
            "en": "Am Montag → beginnt → der Kurs — The initial constituent occupies one slot even when it contains several words. The subject follows the verb here."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Nach der Pause lesen wir.",
          "context": {
            "fr": "Après la pause, nous lisons.",
            "de": "Nach der Pause lesen wir.",
            "ar": "نقرأ بعد الاستراحة.",
            "en": "After the break we read."
          },
          "explanation": {
            "fr": "Nach der Pause → lesen → wir — Le groupe placé en tête occupe une seule position, même s’il contient plusieurs mots. Le sujet vient ici après le verbe.",
            "de": "Nach der Pause → lesen → wir — Das vorangestellte Satzglied besetzt nur eine Position, auch wenn es mehrere Wörter enthält. Das Subjekt folgt hier dem Verb.",
            "ar": "Nach der Pause → lesen → wir — يشغل العنصر المتقدم موقعاً واحداً ولو احتوى عدة كلمات، ويأتي الفاعل هنا بعد الفعل.",
            "en": "Nach der Pause → lesen → wir — The initial constituent occupies one slot even when it contains several words. The subject follows the verb here."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "In diesem Haus wohnt meine Tante.",
          "context": {
            "fr": "Ma tante habite dans cette maison.",
            "de": "In diesem Haus wohnt meine Tante.",
            "ar": "تسكن عمتي في هذا المنزل.",
            "en": "My aunt lives in this house."
          },
          "explanation": {
            "fr": "In diesem Haus → wohnt → meine Tante — Le groupe placé en tête occupe une seule position, même s’il contient plusieurs mots. Le sujet vient ici après le verbe.",
            "de": "In diesem Haus → wohnt → meine Tante — Das vorangestellte Satzglied besetzt nur eine Position, auch wenn es mehrere Wörter enthält. Das Subjekt folgt hier dem Verb.",
            "ar": "In diesem Haus → wohnt → meine Tante — يشغل العنصر المتقدم موقعاً واحداً ولو احتوى عدة كلمات، ويأتي الفاعل هنا بعد الفعل.",
            "en": "In diesem Haus → wohnt → meine Tante — The initial constituent occupies one slot even when it contains several words. The subject follows the verb here."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Seit zwei Monaten lerne ich Deutsch.",
          "context": {
            "fr": "J’apprends l’allemand depuis deux mois.",
            "de": "Seit zwei Monaten lerne ich Deutsch.",
            "ar": "أتعلم الألمانية منذ شهرين.",
            "en": "I have been learning German for two months."
          },
          "explanation": {
            "fr": "Seit zwei Monaten → lerne → ich — Le groupe placé en tête occupe une seule position, même s’il contient plusieurs mots. Le sujet vient ici après le verbe.",
            "de": "Seit zwei Monaten → lerne → ich — Das vorangestellte Satzglied besetzt nur eine Position, auch wenn es mehrere Wörter enthält. Das Subjekt folgt hier dem Verb.",
            "ar": "Seit zwei Monaten → lerne → ich — يشغل العنصر المتقدم موقعاً واحداً ولو احتوى عدة كلمات، ويأتي الفاعل هنا بعد الفعل.",
            "en": "Seit zwei Monaten → lerne → ich — The initial constituent occupies one slot even when it contains several words. The subject follows the verb here."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Um acht Uhr frühstückt er.",
          "context": {
            "fr": "Il prend son petit-déjeuner à huit heures.",
            "de": "Um acht Uhr frühstückt er.",
            "ar": "يتناول فطوره في الثامنة.",
            "en": "He has breakfast at eight."
          },
          "explanation": {
            "fr": "Um acht Uhr → frühstückt → er — Le groupe placé en tête occupe une seule position, même s’il contient plusieurs mots. Le sujet vient ici après le verbe.",
            "de": "Um acht Uhr → frühstückt → er — Das vorangestellte Satzglied besetzt nur eine Position, auch wenn es mehrere Wörter enthält. Das Subjekt folgt hier dem Verb.",
            "ar": "Um acht Uhr → frühstückt → er — يشغل العنصر المتقدم موقعاً واحداً ولو احتوى عدة كلمات، ويأتي الفاعل هنا بعد الفعل.",
            "en": "Um acht Uhr → frühstückt → er — The initial constituent occupies one slot even when it contains several words. The subject follows the verb here."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-2",
      "title": {
        "fr": "Fragesätze",
        "de": "Fragesätze",
        "ar": "Fragesätze",
        "en": "Fragesätze"
      },
      "items": [
        {
          "id": "premium-ex-11",
          "german": "Wo wohnst du?",
          "context": {
            "fr": "Où habites-tu ?",
            "de": "Wo wohnst du?",
            "ar": "أين تسكن؟",
            "en": "Where do you live?"
          },
          "explanation": {
            "fr": "Wo → wohnst → du — Le mot interrogatif ouvre la question ; le verbe conjugué le suit.",
            "de": "Wo → wohnst → du — Das Fragewort eröffnet die Frage; das finite Verb folgt.",
            "ar": "Wo → wohnst → du — تبدأ الجملة بأداة الاستفهام ثم يأتي الفعل المصرف.",
            "en": "Wo → wohnst → du — The question word opens the question and the finite verb follows."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Woher kommen Sie?",
          "context": {
            "fr": "D’où venez-vous ?",
            "de": "Woher kommen Sie?",
            "ar": "من أين أتيتم؟",
            "en": "Where are you from?"
          },
          "explanation": {
            "fr": "Woher → kommen → Sie — Le mot interrogatif ouvre la question ; le verbe conjugué le suit.",
            "de": "Woher → kommen → Sie — Das Fragewort eröffnet die Frage; das finite Verb folgt.",
            "ar": "Woher → kommen → Sie — تبدأ الجملة بأداة الاستفهام ثم يأتي الفعل المصرف.",
            "en": "Woher → kommen → Sie — The question word opens the question and the finite verb follows."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Wann beginnt der Film?",
          "context": {
            "fr": "Quand commence le film ?",
            "de": "Wann beginnt der Film?",
            "ar": "متى يبدأ الفيلم؟",
            "en": "When does the film start?"
          },
          "explanation": {
            "fr": "Wann → beginnt → der Film — Le mot interrogatif ouvre la question ; le verbe conjugué le suit.",
            "de": "Wann → beginnt → der Film — Das Fragewort eröffnet die Frage; das finite Verb folgt.",
            "ar": "Wann → beginnt → der Film — تبدأ الجملة بأداة الاستفهام ثم يأتي الفعل المصرف.",
            "en": "Wann → beginnt → der Film — The question word opens the question and the finite verb follows."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Was liest deine Schwester?",
          "context": {
            "fr": "Que lit ta sœur ?",
            "de": "Was liest deine Schwester?",
            "ar": "ماذا تقرأ أختك؟",
            "en": "What is your sister reading?"
          },
          "explanation": {
            "fr": "Was → liest → deine Schwester — Le mot interrogatif ouvre la question ; le verbe conjugué le suit.",
            "de": "Was → liest → deine Schwester — Das Fragewort eröffnet die Frage; das finite Verb folgt.",
            "ar": "Was → liest → deine Schwester — تبدأ الجملة بأداة الاستفهام ثم يأتي الفعل المصرف.",
            "en": "Was → liest → deine Schwester — The question word opens the question and the finite verb follows."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Wie heißt dein Bruder?",
          "context": {
            "fr": "Comment s’appelle ton frère ?",
            "de": "Wie heißt dein Bruder?",
            "ar": "ما اسم أخيك؟",
            "en": "What is your brother’s name?"
          },
          "explanation": {
            "fr": "Wie → heißt → dein Bruder — Le mot interrogatif ouvre la question ; le verbe conjugué le suit.",
            "de": "Wie → heißt → dein Bruder — Das Fragewort eröffnet die Frage; das finite Verb folgt.",
            "ar": "Wie → heißt → dein Bruder — تبدأ الجملة بأداة الاستفهام ثم يأتي الفعل المصرف.",
            "en": "Wie → heißt → dein Bruder — The question word opens the question and the finite verb follows."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Wer arbeitet heute?",
          "context": {
            "fr": "Qui travaille aujourd’hui ?",
            "de": "Wer arbeitet heute?",
            "ar": "من يعمل اليوم؟",
            "en": "Who is working today?"
          },
          "explanation": {
            "fr": "Wer → arbeitet — Wer est lui-même le sujet interrogatif ; il ne faut pas ajouter un deuxième sujet.",
            "de": "Wer → arbeitet — Wer ist selbst das erfragte Subjekt; ein zweites Subjekt ist nicht nötig.",
            "ar": "Wer → arbeitet — تقوم Wer مقام الفاعل المطلوب فلا نضيف فاعلاً آخر.",
            "en": "Wer → arbeitet — Wer is itself the subject being asked about; no additional subject is needed."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Lernst du Deutsch?",
          "context": {
            "fr": "Apprends-tu l’allemand ?",
            "de": "Lernst du Deutsch?",
            "ar": "هل تتعلم الألمانية؟",
            "en": "Are you learning German?"
          },
          "explanation": {
            "fr": "Lernst → du — Dans une question fermée neutre, le verbe conjugué est en première position, suivi du sujet.",
            "de": "Lernst → du — In einer neutralen Ja/Nein-Frage steht das finite Verb zuerst, gefolgt vom Subjekt.",
            "ar": "Lernst → du — في سؤال نعم أو لا المحايد يأتي الفعل المصرف أولاً ثم الفاعل.",
            "en": "Lernst → du — In a neutral yes/no question the finite verb comes first, followed by the subject."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Arbeiten Sie morgen?",
          "context": {
            "fr": "Travaillez-vous demain ?",
            "de": "Arbeiten Sie morgen?",
            "ar": "هل تعملون غداً؟",
            "en": "Are you working tomorrow?"
          },
          "explanation": {
            "fr": "Arbeiten → Sie — Dans une question fermée neutre, le verbe conjugué est en première position, suivi du sujet.",
            "de": "Arbeiten → Sie — In einer neutralen Ja/Nein-Frage steht das finite Verb zuerst, gefolgt vom Subjekt.",
            "ar": "Arbeiten → Sie — في سؤال نعم أو لا المحايد يأتي الفعل المصرف أولاً ثم الفاعل.",
            "en": "Arbeiten → Sie — In a neutral yes/no question the finite verb comes first, followed by the subject."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Kommt deine Freundin heute?",
          "context": {
            "fr": "Ton amie vient-elle aujourd’hui ?",
            "de": "Kommt deine Freundin heute?",
            "ar": "هل تأتي صديقتك اليوم؟",
            "en": "Is your friend coming today?"
          },
          "explanation": {
            "fr": "Kommt → deine Freundin — Dans une question fermée neutre, le verbe conjugué est en première position, suivi du sujet.",
            "de": "Kommt → deine Freundin — In einer neutralen Ja/Nein-Frage steht das finite Verb zuerst, gefolgt vom Subjekt.",
            "ar": "Kommt → deine Freundin — في سؤال نعم أو لا المحايد يأتي الفعل المصرف أولاً ثم الفاعل.",
            "en": "Kommt → deine Freundin — In a neutral yes/no question the finite verb comes first, followed by the subject."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Haben die Kinder Hunger?",
          "context": {
            "fr": "Les enfants ont-ils faim ?",
            "de": "Haben die Kinder Hunger?",
            "ar": "هل الأطفال جائعون؟",
            "en": "Are the children hungry?"
          },
          "explanation": {
            "fr": "Haben → die Kinder — Dans une question fermée neutre, le verbe conjugué est en première position, suivi du sujet.",
            "de": "Haben → die Kinder — In einer neutralen Ja/Nein-Frage steht das finite Verb zuerst, gefolgt vom Subjekt.",
            "ar": "Haben → die Kinder — في سؤال نعم أو لا المحايد يأتي الفعل المصرف أولاً ثم الفاعل.",
            "en": "Haben → die Kinder — In a neutral yes/no question the finite verb comes first, followed by the subject."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-3",
      "title": {
        "fr": "Fragen, Imperativ, Zeit und Ort",
        "de": "Fragen, Imperativ, Zeit und Ort",
        "ar": "Fragen, Imperativ, Zeit und Ort",
        "en": "Fragen, Imperativ, Zeit und Ort"
      },
      "items": [
        {
          "id": "premium-ex-21",
          "german": "Trink bitte Wasser!",
          "context": {
            "fr": "Bois de l’eau, s’il te plaît !",
            "de": "Trink bitte Wasser!",
            "ar": "اشرب الماء من فضلك!",
            "en": "Please drink some water!"
          },
          "explanation": {
            "fr": "Trink — L’impératif commence normalement par le verbe. Avec Sie, le pronom de politesse est maintenu.",
            "de": "Trink — Der Imperativ beginnt normalerweise mit dem Verb. Bei der Sie-Form bleibt das Anredepronomen erhalten.",
            "ar": "Trink — تبدأ صيغة الأمر عادة بالفعل، ومع Sie يبقى ضمير المخاطبة الرسمية.",
            "en": "Trink — The imperative normally starts with the verb. In the Sie form the polite pronoun is retained."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Kommt bitte pünktlich!",
          "context": {
            "fr": "Venez à l’heure, s’il vous plaît !",
            "de": "Kommt bitte pünktlich!",
            "ar": "تعالوا في الوقت المحدد من فضلكم!",
            "en": "Please come on time!"
          },
          "explanation": {
            "fr": "Kommt — L’impératif commence normalement par le verbe. Avec Sie, le pronom de politesse est maintenu.",
            "de": "Kommt — Der Imperativ beginnt normalerweise mit dem Verb. Bei der Sie-Form bleibt das Anredepronomen erhalten.",
            "ar": "Kommt — تبدأ صيغة الأمر عادة بالفعل، ومع Sie يبقى ضمير المخاطبة الرسمية.",
            "en": "Kommt — The imperative normally starts with the verb. In the Sie form the polite pronoun is retained."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Lesen Sie bitte den Text!",
          "context": {
            "fr": "Lisez le texte, s’il vous plaît !",
            "de": "Lesen Sie bitte den Text!",
            "ar": "اقرؤوا النص من فضلكم!",
            "en": "Please read the text!"
          },
          "explanation": {
            "fr": "Lesen → Sie — L’impératif commence normalement par le verbe. Avec Sie, le pronom de politesse est maintenu.",
            "de": "Lesen → Sie — Der Imperativ beginnt normalerweise mit dem Verb. Bei der Sie-Form bleibt das Anredepronomen erhalten.",
            "ar": "Lesen → Sie — تبدأ صيغة الأمر عادة بالفعل، ومع Sie يبقى ضمير المخاطبة الرسمية.",
            "en": "Lesen → Sie — The imperative normally starts with the verb. In the Sie form the polite pronoun is retained."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Warten Sie hier!",
          "context": {
            "fr": "Attendez ici !",
            "de": "Warten Sie hier!",
            "ar": "انتظروا هنا!",
            "en": "Wait here!"
          },
          "explanation": {
            "fr": "Warten → Sie — L’impératif commence normalement par le verbe. Avec Sie, le pronom de politesse est maintenu.",
            "de": "Warten → Sie — Der Imperativ beginnt normalerweise mit dem Verb. Bei der Sie-Form bleibt das Anredepronomen erhalten.",
            "ar": "Warten → Sie — تبدأ صيغة الأمر عادة بالفعل، ومع Sie يبقى ضمير المخاطبة الرسمية.",
            "en": "Warten → Sie — The imperative normally starts with the verb. In the Sie form the polite pronoun is retained."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Wir essen abends in der Küche.",
          "context": {
            "fr": "Nous mangeons le soir dans la cuisine.",
            "de": "Wir essen abends in der Küche.",
            "ar": "نأكل مساءً في المطبخ.",
            "en": "We eat in the kitchen in the evenings."
          },
          "explanation": {
            "fr": "abends → in der Küche — Dans cet ordre neutre, l’indication temporelle précède l’indication de lieu. D’autres ordres sont possibles selon l’accent voulu.",
            "de": "abends → in der Küche — In dieser neutralen Reihenfolge steht die Zeitangabe vor der Ortsangabe. Andere Reihenfolgen sind je nach Betonung möglich.",
            "ar": "abends → in der Küche — في هذا الترتيب المحايد يسبق ظرف الزمان ظرف المكان. ويمكن تغيير الترتيب حسب التركيز.",
            "en": "abends → in der Küche — In this neutral order, time precedes place. Other orders are possible depending on emphasis."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Sie arbeitet heute im Krankenhaus.",
          "context": {
            "fr": "Elle travaille aujourd’hui à l’hôpital.",
            "de": "Sie arbeitet heute im Krankenhaus.",
            "ar": "تعمل اليوم في المستشفى.",
            "en": "She works at the hospital today."
          },
          "explanation": {
            "fr": "heute → im Krankenhaus — Dans cet ordre neutre, l’indication temporelle précède l’indication de lieu. D’autres ordres sont possibles selon l’accent voulu.",
            "de": "heute → im Krankenhaus — In dieser neutralen Reihenfolge steht die Zeitangabe vor der Ortsangabe. Andere Reihenfolgen sind je nach Betonung möglich.",
            "ar": "heute → im Krankenhaus — في هذا الترتيب المحايد يسبق ظرف الزمان ظرف المكان. ويمكن تغيير الترتيب حسب التركيز.",
            "en": "heute → im Krankenhaus — In this neutral order, time precedes place. Other orders are possible depending on emphasis."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Ich spiele jeden Sonntag im Park.",
          "context": {
            "fr": "Je joue chaque dimanche au parc.",
            "de": "Ich spiele jeden Sonntag im Park.",
            "ar": "ألعب كل أحد في الحديقة.",
            "en": "I play in the park every Sunday."
          },
          "explanation": {
            "fr": "jeden Sonntag → im Park — Dans cet ordre neutre, l’indication temporelle précède l’indication de lieu. D’autres ordres sont possibles selon l’accent voulu.",
            "de": "jeden Sonntag → im Park — In dieser neutralen Reihenfolge steht die Zeitangabe vor der Ortsangabe. Andere Reihenfolgen sind je nach Betonung möglich.",
            "ar": "jeden Sonntag → im Park — في هذا الترتيب المحايد يسبق ظرف الزمان ظرف المكان. ويمكن تغيير الترتيب حسب التركيز.",
            "en": "jeden Sonntag → im Park — In this neutral order, time precedes place. Other orders are possible depending on emphasis."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Er fährt morgen nach Köln.",
          "context": {
            "fr": "Il va à Cologne demain.",
            "de": "Er fährt morgen nach Köln.",
            "ar": "يسافر غداً إلى كولونيا.",
            "en": "He is going to Cologne tomorrow."
          },
          "explanation": {
            "fr": "morgen → nach Köln — Dans cet ordre neutre, l’indication temporelle précède l’indication de lieu. D’autres ordres sont possibles selon l’accent voulu.",
            "de": "morgen → nach Köln — In dieser neutralen Reihenfolge steht die Zeitangabe vor der Ortsangabe. Andere Reihenfolgen sind je nach Betonung möglich.",
            "ar": "morgen → nach Köln — في هذا الترتيب المحايد يسبق ظرف الزمان ظرف المكان. ويمكن تغيير الترتيب حسب التركيز.",
            "en": "morgen → nach Köln — In this neutral order, time precedes place. Other orders are possible depending on emphasis."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Wir wohnen seit drei Jahren in Berlin.",
          "context": {
            "fr": "Nous habitons à Berlin depuis trois ans.",
            "de": "Wir wohnen seit drei Jahren in Berlin.",
            "ar": "نسكن في برلين منذ ثلاث سنوات.",
            "en": "We have lived in Berlin for three years."
          },
          "explanation": {
            "fr": "seit drei Jahren → in Berlin — Dans cet ordre neutre, l’indication temporelle précède l’indication de lieu. D’autres ordres sont possibles selon l’accent voulu.",
            "de": "seit drei Jahren → in Berlin — In dieser neutralen Reihenfolge steht die Zeitangabe vor der Ortsangabe. Andere Reihenfolgen sind je nach Betonung möglich.",
            "ar": "seit drei Jahren → in Berlin — في هذا الترتيب المحايد يسبق ظرف الزمان ظرف المكان. ويمكن تغيير الترتيب حسب التركيز.",
            "en": "seit drei Jahren → in Berlin — In this neutral order, time precedes place. Other orders are possible depending on emphasis."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Meine Schwester lernt morgens in der Bibliothek.",
          "context": {
            "fr": "Ma sœur étudie le matin à la bibliothèque.",
            "de": "Meine Schwester lernt morgens in der Bibliothek.",
            "ar": "تدرس أختي صباحاً في المكتبة.",
            "en": "My sister studies in the library in the mornings."
          },
          "explanation": {
            "fr": "morgens → in der Bibliothek — Dans cet ordre neutre, l’indication temporelle précède l’indication de lieu. D’autres ordres sont possibles selon l’accent voulu.",
            "de": "morgens → in der Bibliothek — In dieser neutralen Reihenfolge steht die Zeitangabe vor der Ortsangabe. Andere Reihenfolgen sind je nach Betonung möglich.",
            "ar": "morgens → in der Bibliothek — في هذا الترتيب المحايد يسبق ظرف الزمان ظرف المكان. ويمكن تغيير الترتيب حسب التركيز.",
            "en": "morgens → in der Bibliothek — In this neutral order, time precedes place. Other orders are possible depending on emphasis."
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
        "fr": "A: Wann beginnt der Kurs? (Quand commence le cours ?)\nB: Um neun Uhr beginnt er. (Il commence à neuf heures.)",
        "de": "A: Wann beginnt der Kurs?\nB: Um neun Uhr beginnt er.",
        "ar": "أ: Wann beginnt der Kurs? (متى تبدأ الدورة؟)\nب: Um neun Uhr beginnt er. (تبدأ في التاسعة.)",
        "en": "A: Wann beginnt der Kurs? (When does the course start?)\nB: Um neun Uhr beginnt er. (It starts at nine.)"
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
        "fr": "❌ Heute ich arbeite. → ✓ Heute arbeite ich.\n❌ Wo du wohnst? → ✓ Wo wohnst du?\nLe verbe conjugué reste à sa place.",
        "de": "❌ Heute ich arbeite. → ✓ Heute arbeite ich.\n❌ Wo du wohnst? → ✓ Wo wohnst du?\nAchte auf die Position des finiten Verbs.",
        "ar": "❌ Heute ich arbeite. → ✓ Heute arbeite ich.\n❌ Wo du wohnst? → ✓ Wo wohnst du?\nانتبه لموقع الفعل المصرف.",
        "en": "❌ Heute ich arbeite. → ✓ Heute arbeite ich.\n❌ Wo du wohnst? → ✓ Wo wohnst du?\nKeep the finite verb in the correct slot."
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
        "fr": "Principale : verbe en deuxième position. Question fermée et ordre : verbe en tête. Temps avant lieu est un ordre neutre fréquent.",
        "de": "Aussage: Verb auf Position zwei. Entscheidungsfrage und Imperativ: Verb vorn. Zeit vor Ort ist häufig neutral.",
        "ar": "الخبر: الفعل ثانياً. السؤال المغلق والأمر: الفعل أولاً. الزمان قبل المكان ترتيب محايد شائع.",
        "en": "Statement: verb second. Yes/no question and command: verb first. Time before place is a common neutral order."
      }
    }
  ]
}

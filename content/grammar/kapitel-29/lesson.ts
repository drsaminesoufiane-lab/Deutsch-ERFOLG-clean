import type { LessonDefinition } from '@/lib/grammar/types'
export const lesson: LessonDefinition = {
  "id": "kapitel-29-lesson",
  "title": {
    "fr": "Elle se lave",
    "de": "Sie wäscht sich",
    "ar": "هي تغتسل",
    "en": "She washes herself"
  },
  "subtitle": {
    "fr": "Verbes réfléchis et réciproques",
    "de": "Reflexive und reziproke Verben",
    "ar": "الأفعال الانعكاسية والمتبادلة",
    "en": "Reflexive and reciprocal verbs"
  },
  "objective": {
    "fr": "Choisir le bon pronom, distinguer réfléchi et réciproque, et construire les phrases au présent et au Perfekt.",
    "de": "Das richtige Pronomen wählen, Reflexivität und Gegenseitigkeit unterscheiden und Sätze im Präsens und Perfekt bilden.",
    "ar": "اختر الضمير الصحيح وميز الانعكاس والتبادل وكون الجمل في الحاضر والماضي المركب.",
    "en": "Choose the right pronoun, distinguish reflexive and reciprocal meanings, and build present and perfect sentences."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "kapitel-29-b1",
      "title": {
        "fr": "1. Le sens du réfléchi",
        "de": "1. Bedeutung der Reflexivität",
        "ar": "1. معنى الانعكاس",
        "en": "1. Meaning of reflexivity"
      },
      "text": {
        "fr": "Un verbe est réfléchi quand son complément renvoie au sujet : Sie wäscht sich signifie qu’elle se lave elle-même. Dans Sie wäscht das Baby, le sujet et l’objet sont différents. On peut remplacer das Baby par es, mais pas par sich sans changer le sens. Certains verbes sont obligatoirement réfléchis dans un sens particulier, par exemple sich beeilen.",
        "de": "Ein Verb ist reflexiv, wenn sein Objekt auf das Subjekt zurückverweist: Sie wäscht sich bedeutet, dass sie sich selbst wäscht. In Sie wäscht das Baby sind Subjekt und Objekt verschieden. Das Baby kann man durch es ersetzen, aber nicht durch sich, ohne die Bedeutung zu ändern. Manche Verben sind in einer bestimmten Bedeutung obligatorisch reflexiv, zum Beispiel sich beeilen.",
        "ar": "يكون الفعل انعكاسيا عندما يعود المفعول على الفاعل: Sie wäscht sich تعني أنها تغتسل بنفسها. في Sie wäscht das Baby الفاعل والمفعول مختلفان. يمكن تعويض das Baby بضمير es لا بضمير sich دون تغيير المعنى. بعض الأفعال انعكاسية وجوبا في معنى معين مثل sich beeilen.",
        "en": "A verb is reflexive when its object refers back to its subject: Sie wäscht sich means she washes herself. In Sie wäscht das Baby, subject and object differ. Das Baby can be replaced by es, but not by sich without changing the meaning. Some verbs are obligatorily reflexive in a particular sense, such as sich beeilen."
      }
    },
    {
      "type": "table",
      "id": "kapitel-29-table-pron",
      "title": {
        "fr": "2. Tableau des pronoms",
        "de": "2. Pronomenübersicht",
        "ar": "2. جدول الضمائر",
        "en": "2. Pronoun table"
      },
      "headers": [
        {
          "fr": "Sujet",
          "de": "Subjekt",
          "ar": "الفاعل",
          "en": "Subject"
        },
        {
          "fr": "Accusatif",
          "de": "Akkusativ",
          "ar": "النصب",
          "en": "Accusative"
        },
        {
          "fr": "Datif",
          "de": "Dativ",
          "ar": "الداتيف",
          "en": "Dative"
        },
        {
          "fr": "Exemple : accusatif",
          "de": "Beispiel: Akkusativ",
          "ar": "مثال في النصب",
          "en": "Accusative example"
        }
      ],
      "rows": [
        {
          "id": "pron-0",
          "cells": [
            {
              "fr": "ich",
              "de": "ich",
              "ar": "ich",
              "en": "ich"
            },
            {
              "fr": "mich",
              "de": "mich",
              "ar": "mich",
              "en": "mich"
            },
            {
              "fr": "mir",
              "de": "mir",
              "ar": "mir",
              "en": "mir"
            },
            {
              "fr": "ich wasche mich",
              "de": "ich wasche mich",
              "ar": "ich wasche mich",
              "en": "ich wasche mich"
            }
          ]
        },
        {
          "id": "pron-1",
          "cells": [
            {
              "fr": "du",
              "de": "du",
              "ar": "du",
              "en": "du"
            },
            {
              "fr": "dich",
              "de": "dich",
              "ar": "dich",
              "en": "dich"
            },
            {
              "fr": "dir",
              "de": "dir",
              "ar": "dir",
              "en": "dir"
            },
            {
              "fr": "du wäschst dich",
              "de": "du wäschst dich",
              "ar": "du wäschst dich",
              "en": "du wäschst dich"
            }
          ]
        },
        {
          "id": "pron-2",
          "cells": [
            {
              "fr": "er / sie / es",
              "de": "er / sie / es",
              "ar": "er / sie / es",
              "en": "er / sie / es"
            },
            {
              "fr": "sich",
              "de": "sich",
              "ar": "sich",
              "en": "sich"
            },
            {
              "fr": "sich",
              "de": "sich",
              "ar": "sich",
              "en": "sich"
            },
            {
              "fr": "sie wäscht sich",
              "de": "sie wäscht sich",
              "ar": "sie wäscht sich",
              "en": "sie wäscht sich"
            }
          ]
        },
        {
          "id": "pron-3",
          "cells": [
            {
              "fr": "wir",
              "de": "wir",
              "ar": "wir",
              "en": "wir"
            },
            {
              "fr": "uns",
              "de": "uns",
              "ar": "uns",
              "en": "uns"
            },
            {
              "fr": "uns",
              "de": "uns",
              "ar": "uns",
              "en": "uns"
            },
            {
              "fr": "wir waschen uns",
              "de": "wir waschen uns",
              "ar": "wir waschen uns",
              "en": "wir waschen uns"
            }
          ]
        },
        {
          "id": "pron-4",
          "cells": [
            {
              "fr": "ihr",
              "de": "ihr",
              "ar": "ihr",
              "en": "ihr"
            },
            {
              "fr": "euch",
              "de": "euch",
              "ar": "euch",
              "en": "euch"
            },
            {
              "fr": "euch",
              "de": "euch",
              "ar": "euch",
              "en": "euch"
            },
            {
              "fr": "ihr wascht euch",
              "de": "ihr wascht euch",
              "ar": "ihr wascht euch",
              "en": "ihr wascht euch"
            }
          ]
        },
        {
          "id": "pron-5",
          "cells": [
            {
              "fr": "sie / Sie",
              "de": "sie / Sie",
              "ar": "sie / Sie",
              "en": "sie / Sie"
            },
            {
              "fr": "sich",
              "de": "sich",
              "ar": "sich",
              "en": "sich"
            },
            {
              "fr": "sich",
              "de": "sich",
              "ar": "sich",
              "en": "sich"
            },
            {
              "fr": "Sie waschen sich",
              "de": "Sie waschen sich",
              "ar": "Sie waschen sich",
              "en": "Sie waschen sich"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "kapitel-29-b3",
      "title": {
        "fr": "3. Accusatif ou datif ?",
        "de": "3. Akkusativ oder Dativ?",
        "ar": "3. النصب أم الداتيف؟",
        "en": "3. Accusative or dative?"
      },
      "text": {
        "fr": "Dans Ich wasche mich, mich est l’objet direct. Dans Ich wasche mir die Hände, die Hände est l’objet direct et mir désigne la personne concernée. La différence est visible seulement avec ich et du : mich/mir, dich/dir. Cette règle complète le cours source, qui présente surtout l’accusatif.",
        "de": "In Ich wasche mich ist mich das Akkusativobjekt. In Ich wasche mir die Hände ist die Hände das Akkusativobjekt und mir bezeichnet die betroffene Person. Der Formunterschied ist nur bei ich und du sichtbar: mich/mir, dich/dir. Diese Ergänzung erweitert den Schwerpunkt Akkusativ der Vorlage.",
        "ar": "في Ich wasche mich يكون mich المفعول المباشر. في Ich wasche mir die Hände تكون die Hände المفعول المباشر و mir للشخص المعني. يظهر اختلاف الصيغة فقط مع ich و du: mich/mir و dich/dir. هذه إضافة للدرس الأصلي الذي يركز على النصب.",
        "en": "In Ich wasche mich, mich is the direct object. In Ich wasche mir die Hände, die Hände is the direct object and mir identifies the person affected. The form differs only with ich and du: mich/mir, dich/dir. This extends the source lesson’s focus on the accusative."
      }
    },
    {
      "type": "paragraph",
      "id": "kapitel-29-b4",
      "title": {
        "fr": "4. Verbes obligatoires et prépositions",
        "de": "4. Obligatorische Verben und Präpositionen",
        "ar": "4. الأفعال الإلزامية وحروف الجر",
        "en": "4. Obligatory verbs and prepositions"
      },
      "text": {
        "fr": "Mémorise le verbe avec son pronom et sa préposition : sich beeilen, sich ausruhen, sich interessieren für + accusatif, sich erinnern an + accusatif, sich kümmern um + accusatif. Sich freuen auf indique une attente agréable, sich freuen über une réaction positive. Les prépositions ne se traduisent pas mot à mot.",
        "de": "Lerne das Verb mit Pronomen und Präposition: sich beeilen, sich ausruhen, sich interessieren für + Akkusativ, sich erinnern an + Akkusativ, sich kümmern um + Akkusativ. Sich freuen auf bezeichnet Vorfreude, sich freuen über eine positive Reaktion. Präpositionen werden nicht Wort für Wort übersetzt.",
        "ar": "احفظ الفعل مع الضمير وحرف الجر: sich beeilen و sich ausruhen و sich interessieren für مع النصب و sich erinnern an و sich kümmern um مع النصب. يدل sich freuen auf على التطلع و sich freuen über على رد فعل إيجابي. لا تترجم حروف الجر حرفيا.",
        "en": "Learn each verb with its pronoun and preposition: sich beeilen, sich ausruhen, sich interessieren für + accusative, sich erinnern an + accusative, sich kümmern um + accusative. Sich freuen auf expresses anticipation, sich freuen über a positive reaction. Do not translate prepositions word for word."
      }
    },
    {
      "type": "paragraph",
      "id": "kapitel-29-b5",
      "title": {
        "fr": "5. Sens réciproque",
        "de": "5. Reziproke Bedeutung",
        "ar": "5. المعنى المتبادل",
        "en": "5. Reciprocal meaning"
      },
      "text": {
        "fr": "Wir treffen uns peut signifier que nous nous rencontrons mutuellement. Sie küssen sich peut signifier qu’ils s’embrassent. Le contexte permet de distinguer l’action mutuelle de l’action sur soi-même : Wir waschen uns signifie généralement que chacun se lave. Einander clarifie la réciprocité : Wir helfen einander.",
        "de": "Wir treffen uns kann bedeuten, dass wir einander treffen. Sie küssen sich kann bedeuten, dass sie einander küssen. Der Kontext unterscheidet die gegenseitige Handlung von der Handlung an sich selbst: Wir waschen uns bedeutet meist, dass sich jeder selbst wäscht. Einander macht die Gegenseitigkeit deutlich: Wir helfen einander.",
        "ar": "قد تعني Wir treffen uns أننا نلتقي بعضنا ببعض. وقد تعني Sie küssen sich أنهما يقبلان بعضهما. يميز السياق بين الفعل المتبادل والفعل على الذات: Wir waschen uns تعني غالبا أن كل واحد يغتسل. توضح einander التبادل: Wir helfen einander.",
        "en": "Wir treffen uns can mean we meet each other. Sie küssen sich can mean they kiss each other. Context distinguishes a mutual action from an action on oneself: Wir waschen uns normally means each person washes themselves. Einander clarifies reciprocity: Wir helfen einander."
      }
    },
    {
      "type": "paragraph",
      "id": "kapitel-29-b6",
      "title": {
        "fr": "6. Position dans la phrase",
        "de": "6. Satzstellung",
        "ar": "6. ترتيب الجملة",
        "en": "6. Word order"
      },
      "text": {
        "fr": "Au présent : Ich ziehe mich an. Avec un complément initial : Heute ziehe ich mich an. Avec un modal : Ich muss mich anziehen. Dans une subordonnée : weil ich mich anziehe ; avec un modal : weil ich mich anziehen muss. Le verbe conjugué se place à la fin après weil, dass et wenn. Avec des sujets nominaux, d’autres positions du pronom sont possibles ; les exercices utilisent l’ordre neutre.",
        "de": "Im Präsens: Ich ziehe mich an. Mit einer Angabe am Anfang: Heute ziehe ich mich an. Mit Modalverb: Ich muss mich anziehen. Im Nebensatz: weil ich mich anziehe; mit Modalverb: weil ich mich anziehen muss. Nach weil, dass und wenn steht das finite Verb am Ende. Bei nominalen Subjekten sind weitere Pronomenstellungen möglich; die Übungen verwenden die neutrale Reihenfolge.",
        "ar": "في الحاضر: Ich ziehe mich an. مع ظرف في البداية: Heute ziehe ich mich an. مع فعل ناقص: Ich muss mich anziehen. في جملة فرعية: weil ich mich anziehe؛ ومع فعل ناقص: weil ich mich anziehen muss. يأتي الفعل المصرف في النهاية بعد weil و dass و wenn. مع فاعل اسمي يمكن ترتيب الضمير بطرق أخرى؛ تستخدم التمارين الترتيب المحايد.",
        "en": "In the present: Ich ziehe mich an. With an initial adverbial: Heute ziehe ich mich an. With a modal: Ich muss mich anziehen. In a subordinate clause: weil ich mich anziehe; with a modal: weil ich mich anziehen muss. The finite verb comes last after weil, dass and wenn. Other pronoun positions are possible with noun subjects; exercises use neutral order."
      }
    },
    {
      "type": "paragraph",
      "id": "kapitel-29-b7",
      "title": {
        "fr": "7. Le Perfekt",
        "de": "7. Das Perfekt",
        "ar": "7. الماضي المركب Perfekt",
        "en": "7. The perfect"
      },
      "text": {
        "fr": "On conjugue haben et on conserve le pronom réfléchi : Ich habe mich gewaschen. Les verbes séparables prennent ge entre préfixe et radical : angezogen, angemeldet. Les verbes à préfixe inséparable ne prennent pas ge : erinnert, entschuldigt, beschwert. Dans la subordonnée, le participe précède haben : weil ich mich gewaschen habe.",
        "de": "Man konjugiert haben und behält das Reflexivpronomen: Ich habe mich gewaschen. Bei trennbaren Verben steht ge zwischen Präfix und Stamm: angezogen, angemeldet. Untrennbare Präfixe stehen ohne ge: erinnert, entschuldigt, beschwert. Im Nebensatz steht das Partizip vor haben: weil ich mich gewaschen habe.",
        "ar": "نصرف haben ونحتفظ بالضمير الانعكاسي: Ich habe mich gewaschen. في الأفعال القابلة للفصل يدخل ge بين البادئة والجذر: angezogen و angemeldet. البادئات غير القابلة للفصل لا تأخذ ge: erinnert و entschuldigt و beschwert. في الجملة الفرعية يسبق اسم المفعول haben: weil ich mich gewaschen habe.",
        "en": "Conjugate haben and keep the reflexive pronoun: Ich habe mich gewaschen. Separable verbs insert ge between prefix and stem: angezogen, angemeldet. Inseparable prefixes take no ge: erinnert, entschuldigt, beschwert. In subordinate clauses the participle precedes haben: weil ich mich gewaschen habe."
      }
    },
    {
      "type": "callout",
      "id": "kapitel-29-b8",
      "tone": "warning",
      "title": {
        "fr": "8. Erreurs fréquentes",
        "de": "8. Häufige Fehler",
        "ar": "8. أخطاء شائعة",
        "en": "8. Common errors"
      },
      "text": {
        "fr": "Incorrect : du wächst dich ; correct : du wäschst dich (wachsen signifie grandir). Incorrect : ich freue sich ; correct : ich freue mich. Incorrect : ich wasche mich die Hände ; correct : ich wasche mir die Hände. Incorrect : ich bin mich geärgert ; correct : ich habe mich geärgert. Incorrect : weil ich freue mich ; correct : weil ich mich freue.",
        "de": "Falsch: du wächst dich; richtig: du wäschst dich (wachsen bedeutet größer werden). Falsch: ich freue sich; richtig: ich freue mich. Falsch: ich wasche mich die Hände; richtig: ich wasche mir die Hände. Falsch: ich bin mich geärgert; richtig: ich habe mich geärgert. Falsch: weil ich freue mich; richtig: weil ich mich freue.",
        "ar": "خطأ: du wächst dich؛ الصواب: du wäschst dich لأن wachsen يعني النمو. خطأ: ich freue sich؛ الصواب: ich freue mich. خطأ: ich wasche mich die Hände؛ الصواب: ich wasche mir die Hände. خطأ: ich bin mich geärgert؛ الصواب: ich habe mich geärgert. خطأ: weil ich freue mich؛ الصواب: weil ich mich freue.",
        "en": "Wrong: du wächst dich; correct: du wäschst dich (wachsen means grow). Wrong: ich freue sich; correct: ich freue mich. Wrong: ich wasche mich die Hände; correct: ich wasche mir die Hände. Wrong: ich bin mich geärgert; correct: ich habe mich geärgert. Wrong: weil ich freue mich; correct: weil ich mich freue."
      }
    },
    {
      "type": "examples",
      "id": "kapitel-29-examples",
      "title": {
        "fr": "32 exemples traduits et expliqués",
        "de": "32 übersetzte und erklärte Beispiele",
        "ar": "32 مثالا مترجما ومشروحا",
        "en": "32 translated and explained examples"
      },
      "items": [
        {
          "id": "kapitel-29-ex01",
          "german": "Ich wasche mich jeden Morgen.",
          "context": {
            "fr": "Je me lave chaque matin.",
            "de": "Ich wasche mich jeden Morgen.",
            "ar": "أغتسل كل صباح.",
            "en": "I wash myself every morning."
          },
          "explanation": {
            "fr": "Avec ich, le pronom réfléchi accusatif est mich.",
            "de": "Zu ich gehört im Akkusativ mich.",
            "ar": "مع ich يكون الضمير الانعكاسي في حالة النصب mich.",
            "en": "With ich, the accusative reflexive pronoun is mich."
          }
        },
        {
          "id": "kapitel-29-ex02",
          "german": "Du wäschst dich am Abend.",
          "context": {
            "fr": "Tu te laves le soir.",
            "de": "Du wäschst dich am Abend.",
            "ar": "تغتسل مساء.",
            "en": "You wash yourself in the evening."
          },
          "explanation": {
            "fr": "Waschen change a en ä à la deuxième et troisième personne du singulier : du wäschst, er wäscht.",
            "de": "Waschen hat bei du und er/sie/es den Umlaut: du wäschst, er wäscht.",
            "ar": "يتغير a إلى ä مع du و er/sie/es: du wäschst و er wäscht.",
            "en": "Waschen changes a to ä with du and er/sie/es: du wäschst, er wäscht."
          }
        },
        {
          "id": "kapitel-29-ex03",
          "german": "Sie wäscht sich.",
          "context": {
            "fr": "Elle se lave.",
            "de": "Sie wäscht sich.",
            "ar": "هي تغتسل.",
            "en": "She washes herself."
          },
          "explanation": {
            "fr": "À la troisième personne et avec Sie de politesse, on emploie sich.",
            "de": "In der dritten Person und bei der Höflichkeitsform Sie steht sich.",
            "ar": "مع الغائب ومع Sie للاحترام نستعمل sich.",
            "en": "Third person and formal Sie take sich."
          }
        },
        {
          "id": "kapitel-29-ex04",
          "german": "Sie wäscht es (das Baby).",
          "context": {
            "fr": "Elle le lave (le bébé).",
            "de": "Sie wäscht es (das Baby).",
            "ar": "هي تغسل الرضيع.",
            "en": "She washes it (the baby)."
          },
          "explanation": {
            "fr": "Le pronom personnel remplace un objet distinct du sujet ; le pronom réfléchi renvoie au sujet lui-même.",
            "de": "Das Personalpronomen ersetzt ein anderes Objekt; das Reflexivpronomen verweist auf das Subjekt selbst.",
            "ar": "الضمير الشخصي يعوض مفعولا مختلفا عن الفاعل، أما الانعكاسي فيعود على الفاعل نفسه.",
            "en": "A personal pronoun replaces a separate object; a reflexive pronoun refers back to the subject."
          }
        },
        {
          "id": "kapitel-29-ex05",
          "german": "Wir ziehen uns an.",
          "context": {
            "fr": "Nous nous habillons.",
            "de": "Wir ziehen uns an.",
            "ar": "نرتدي ملابسنا.",
            "en": "We get dressed."
          },
          "explanation": {
            "fr": "Avec wir, le pronom réfléchi ou réciproque est uns.",
            "de": "Zu wir gehört uns, reflexiv oder reziprok.",
            "ar": "مع wir نستعمل uns سواء للانعكاس أو التبادل.",
            "en": "With wir, the reflexive or reciprocal pronoun is uns."
          }
        },
        {
          "id": "kapitel-29-ex06",
          "german": "Ihr rasiert euch.",
          "context": {
            "fr": "Vous vous rasez.",
            "de": "Ihr rasiert euch.",
            "ar": "تحلقون ذقونكم.",
            "en": "You shave yourselves."
          },
          "explanation": {
            "fr": "Avec ihr, on emploie euch.",
            "de": "Zu ihr gehört euch.",
            "ar": "مع ihr نستعمل euch.",
            "en": "With ihr, use euch."
          }
        },
        {
          "id": "kapitel-29-ex07",
          "german": "Die Kinder kämmen sich.",
          "context": {
            "fr": "Les enfants se coiffent.",
            "de": "Die Kinder kämmen sich.",
            "ar": "يمشط الأطفال شعرهم.",
            "en": "The children comb their hair."
          },
          "explanation": {
            "fr": "À la troisième personne et avec Sie de politesse, on emploie sich.",
            "de": "In der dritten Person und bei der Höflichkeitsform Sie steht sich.",
            "ar": "مع الغائب ومع Sie للاحترام نستعمل sich.",
            "en": "Third person and formal Sie take sich."
          }
        },
        {
          "id": "kapitel-29-ex08",
          "german": "Ich wasche mir die Hände.",
          "context": {
            "fr": "Je me lave les mains.",
            "de": "Ich wasche mir die Hände.",
            "ar": "أغسل يديّ.",
            "en": "I wash my hands."
          },
          "explanation": {
            "fr": "Avec un objet direct à l’accusatif, le pronom réfléchi est au datif : mir, dir, sich, uns, euch, sich.",
            "de": "Bei einem zusätzlichen Akkusativobjekt steht das Reflexivpronomen im Dativ: mir, dir, sich, uns, euch, sich.",
            "ar": "عند وجود مفعول به مباشر في النصب يأتي الضمير الانعكاسي في الداتيف: mir, dir, sich, uns, euch, sich.",
            "en": "With an additional direct object, the reflexive pronoun is dative: mir, dir, sich, uns, euch, sich."
          }
        },
        {
          "id": "kapitel-29-ex09",
          "german": "Du putzt dir die Zähne.",
          "context": {
            "fr": "Tu te brosses les dents.",
            "de": "Du putzt dir die Zähne.",
            "ar": "تنظف أسنانك.",
            "en": "You brush your teeth."
          },
          "explanation": {
            "fr": "Avec un objet direct à l’accusatif, le pronom réfléchi est au datif : mir, dir, sich, uns, euch, sich.",
            "de": "Bei einem zusätzlichen Akkusativobjekt steht das Reflexivpronomen im Dativ: mir, dir, sich, uns, euch, sich.",
            "ar": "عند وجود مفعول به مباشر في النصب يأتي الضمير الانعكاسي في الداتيف: mir, dir, sich, uns, euch, sich.",
            "en": "With an additional direct object, the reflexive pronoun is dative: mir, dir, sich, uns, euch, sich."
          }
        },
        {
          "id": "kapitel-29-ex10",
          "german": "Sie kämmt ihre Tochter.",
          "context": {
            "fr": "Elle coiffe sa fille.",
            "de": "Sie kämmt ihre Tochter.",
            "ar": "تمشط شعر ابنتها.",
            "en": "She combs her daughter's hair."
          },
          "explanation": {
            "fr": "Le pronom personnel remplace un objet distinct du sujet ; le pronom réfléchi renvoie au sujet lui-même.",
            "de": "Das Personalpronomen ersetzt ein anderes Objekt; das Reflexivpronomen verweist auf das Subjekt selbst.",
            "ar": "الضمير الشخصي يعوض مفعولا مختلفا عن الفاعل، أما الانعكاسي فيعود على الفاعل نفسه.",
            "en": "A personal pronoun replaces a separate object; a reflexive pronoun refers back to the subject."
          }
        },
        {
          "id": "kapitel-29-ex11",
          "german": "Er stellt sich vor.",
          "context": {
            "fr": "Il se présente.",
            "de": "Er stellt sich vor.",
            "ar": "يقدم نفسه.",
            "en": "He introduces himself."
          },
          "explanation": {
            "fr": "À la troisième personne et avec Sie de politesse, on emploie sich.",
            "de": "In der dritten Person und bei der Höflichkeitsform Sie steht sich.",
            "ar": "مع الغائب ومع Sie للاحترام نستعمل sich.",
            "en": "Third person and formal Sie take sich."
          }
        },
        {
          "id": "kapitel-29-ex12",
          "german": "Er stellt sie vor.",
          "context": {
            "fr": "Il la présente.",
            "de": "Er stellt sie vor.",
            "ar": "يقدمها.",
            "en": "He introduces her."
          },
          "explanation": {
            "fr": "Le pronom personnel remplace un objet distinct du sujet ; le pronom réfléchi renvoie au sujet lui-même.",
            "de": "Das Personalpronomen ersetzt ein anderes Objekt; das Reflexivpronomen verweist auf das Subjekt selbst.",
            "ar": "الضمير الشخصي يعوض مفعولا مختلفا عن الفاعل، أما الانعكاسي فيعود على الفاعل نفسه.",
            "en": "A personal pronoun replaces a separate object; a reflexive pronoun refers back to the subject."
          }
        },
        {
          "id": "kapitel-29-ex13",
          "german": "Wir treffen uns am Bahnhof.",
          "context": {
            "fr": "Nous nous retrouvons à la gare.",
            "de": "Wir treffen uns am Bahnhof.",
            "ar": "نلتقي في محطة القطار.",
            "en": "We meet at the station."
          },
          "explanation": {
            "fr": "Le sujet pluriel et le contexte indiquent ici une action mutuelle ; einander peut expliciter ce sens.",
            "de": "Das Pluralsubjekt und der Kontext zeigen hier eine gegenseitige Handlung; einander kann sie verdeutlichen.",
            "ar": "يدل الفاعل الجمع والسياق هنا على فعل متبادل ويمكن توضيحه بكلمة einander.",
            "en": "The plural subject and context indicate a mutual action; einander can clarify that meaning."
          }
        },
        {
          "id": "kapitel-29-ex14",
          "german": "Die beiden küssen sich.",
          "context": {
            "fr": "Les deux s’embrassent.",
            "de": "Die beiden küssen sich.",
            "ar": "يقبل الاثنان بعضهما.",
            "en": "The two kiss each other."
          },
          "explanation": {
            "fr": "Le sujet pluriel et le contexte indiquent ici une action mutuelle ; einander peut expliciter ce sens.",
            "de": "Das Pluralsubjekt und der Kontext zeigen hier eine gegenseitige Handlung; einander kann sie verdeutlichen.",
            "ar": "يدل الفاعل الجمع والسياق هنا على فعل متبادل ويمكن توضيحه بكلمة einander.",
            "en": "The plural subject and context indicate a mutual action; einander can clarify that meaning."
          }
        },
        {
          "id": "kapitel-29-ex15",
          "german": "Wir schreiben uns regelmäßig E-Mails.",
          "context": {
            "fr": "Nous nous écrivons régulièrement des courriels.",
            "de": "Wir schreiben uns regelmäßig E-Mails.",
            "ar": "نتبادل الرسائل الإلكترونية بانتظام.",
            "en": "We email each other regularly."
          },
          "explanation": {
            "fr": "Le sujet pluriel et le contexte indiquent ici une action mutuelle ; einander peut expliciter ce sens.",
            "de": "Das Pluralsubjekt und der Kontext zeigen hier eine gegenseitige Handlung; einander kann sie verdeutlichen.",
            "ar": "يدل الفاعل الجمع والسياق هنا على فعل متبادل ويمكن توضيحه بكلمة einander.",
            "en": "The plural subject and context indicate a mutual action; einander can clarify that meaning."
          }
        },
        {
          "id": "kapitel-29-ex16",
          "german": "Sie haben sich gestern kennengelernt.",
          "context": {
            "fr": "Ils ont fait connaissance hier.",
            "de": "Sie haben sich gestern kennengelernt.",
            "ar": "تعارفوا بالأمس.",
            "en": "They met yesterday."
          },
          "explanation": {
            "fr": "Au Perfekt, les verbes réfléchis utilisent haben ; le pronom réfléchi reste présent et le participe clôt la proposition principale.",
            "de": "Reflexive Verben bilden das Perfekt mit haben; das Reflexivpronomen bleibt erhalten, das Partizip schließt den Hauptsatz ab.",
            "ar": "تستعمل الأفعال الانعكاسية haben في Perfekt ويبقى الضمير الانعكاسي ويأتي اسم المفعول في نهاية الجملة الرئيسية.",
            "en": "Reflexive verbs form the perfect with haben; the reflexive pronoun remains and the participle closes the main clause."
          }
        },
        {
          "id": "kapitel-29-ex17",
          "german": "Ich interessiere mich für Musik.",
          "context": {
            "fr": "Je m’intéresse à la musique.",
            "de": "Ich interessiere mich für Musik.",
            "ar": "أهتم بالموسيقى.",
            "en": "I am interested in music."
          },
          "explanation": {
            "fr": "Ce verbe s’emploie avec un pronom réfléchi dans ce sens ; le supprimer change le sens ou rend la phrase incorrecte.",
            "de": "In dieser Bedeutung braucht das Verb ein Reflexivpronomen; ohne es ändert sich die Bedeutung oder der Satz ist falsch.",
            "ar": "في هذا المعنى يحتاج الفعل إلى ضمير انعكاسي؛ حذفه يغير المعنى أو يجعل الجملة خاطئة.",
            "en": "In this sense the verb requires a reflexive pronoun; omitting it changes the meaning or makes the sentence incorrect."
          }
        },
        {
          "id": "kapitel-29-ex18",
          "german": "Du erinnerst dich an den Kurs.",
          "context": {
            "fr": "Tu te souviens du cours.",
            "de": "Du erinnerst dich an den Kurs.",
            "ar": "تتذكر الدورة.",
            "en": "You remember the course."
          },
          "explanation": {
            "fr": "La préposition fait partie de la construction du verbe : sich freuen auf (attente), über (réaction), sich interessieren für, sich erinnern an, sich kümmern um.",
            "de": "Die Präposition gehört zur Verbkonstruktion: sich freuen auf (Erwartung), über (Reaktion), sich interessieren für, sich erinnern an, sich kümmern um.",
            "ar": "حرف الجر جزء من تركيب الفعل: sich freuen auf للتطلع و über لرد الفعل و sich interessieren für و sich erinnern an و sich kümmern um.",
            "en": "The preposition is part of the construction: sich freuen auf (anticipation), über (reaction), sich interessieren für, sich erinnern an, sich kümmern um."
          }
        },
        {
          "id": "kapitel-29-ex19",
          "german": "Er kümmert sich um seine Kinder.",
          "context": {
            "fr": "Il s’occupe de ses enfants.",
            "de": "Er kümmert sich um seine Kinder.",
            "ar": "يعتني بأطفاله.",
            "en": "He takes care of his children."
          },
          "explanation": {
            "fr": "La préposition fait partie de la construction du verbe : sich freuen auf (attente), über (réaction), sich interessieren für, sich erinnern an, sich kümmern um.",
            "de": "Die Präposition gehört zur Verbkonstruktion: sich freuen auf (Erwartung), über (Reaktion), sich interessieren für, sich erinnern an, sich kümmern um.",
            "ar": "حرف الجر جزء من تركيب الفعل: sich freuen auf للتطلع و über لرد الفعل و sich interessieren für و sich erinnern an و sich kümmern um.",
            "en": "The preposition is part of the construction: sich freuen auf (anticipation), über (reaction), sich interessieren für, sich erinnern an, sich kümmern um."
          }
        },
        {
          "id": "kapitel-29-ex20",
          "german": "Wir freuen uns auf die Ferien.",
          "context": {
            "fr": "Nous nous réjouissons des vacances à venir.",
            "de": "Wir freuen uns auf die Ferien.",
            "ar": "نتطلع إلى العطلة.",
            "en": "We look forward to the holidays."
          },
          "explanation": {
            "fr": "La préposition fait partie de la construction du verbe : sich freuen auf (attente), über (réaction), sich interessieren für, sich erinnern an, sich kümmern um.",
            "de": "Die Präposition gehört zur Verbkonstruktion: sich freuen auf (Erwartung), über (Reaktion), sich interessieren für, sich erinnern an, sich kümmern um.",
            "ar": "حرف الجر جزء من تركيب الفعل: sich freuen auf للتطلع و über لرد الفعل و sich interessieren für و sich erinnern an و sich kümmern um.",
            "en": "The preposition is part of the construction: sich freuen auf (anticipation), über (reaction), sich interessieren für, sich erinnern an, sich kümmern um."
          }
        },
        {
          "id": "kapitel-29-ex21",
          "german": "Ich freue mich über das Geschenk.",
          "context": {
            "fr": "Je suis content du cadeau.",
            "de": "Ich freue mich über das Geschenk.",
            "ar": "أنا سعيد بالهدية.",
            "en": "I am happy about the gift."
          },
          "explanation": {
            "fr": "La préposition fait partie de la construction du verbe : sich freuen auf (attente), über (réaction), sich interessieren für, sich erinnern an, sich kümmern um.",
            "de": "Die Präposition gehört zur Verbkonstruktion: sich freuen auf (Erwartung), über (Reaktion), sich interessieren für, sich erinnern an, sich kümmern um.",
            "ar": "حرف الجر جزء من تركيب الفعل: sich freuen auf للتطلع و über لرد الفعل و sich interessieren für و sich erinnern an و sich kümmern um.",
            "en": "The preposition is part of the construction: sich freuen auf (anticipation), über (reaction), sich interessieren für, sich erinnern an, sich kümmern um."
          }
        },
        {
          "id": "kapitel-29-ex22",
          "german": "Heute ruhe ich mich aus.",
          "context": {
            "fr": "Aujourd’hui je me repose.",
            "de": "Heute ruhe ich mich aus.",
            "ar": "أستريح اليوم.",
            "en": "Today I rest."
          },
          "explanation": {
            "fr": "Dans une principale neutre, le verbe conjugué occupe la deuxième position ; le pronom réfléchi suit normalement le sujet pronominal et le verbe.",
            "de": "Im neutralen Hauptsatz steht das finite Verb an zweiter Stelle; das Reflexivpronomen folgt normalerweise dem pronominalen Subjekt und dem Verb.",
            "ar": "في الجملة الرئيسية المحايدة يحتل الفعل المصرف المرتبة الثانية ويأتي الضمير الانعكاسي عادة بعد الفاعل الضمير والفعل.",
            "en": "In a neutral main clause the finite verb is second; the reflexive pronoun normally follows the pronominal subject and verb."
          }
        },
        {
          "id": "kapitel-29-ex23",
          "german": "Du musst dich anmelden.",
          "context": {
            "fr": "Tu dois t’inscrire.",
            "de": "Du musst dich anmelden.",
            "ar": "عليك التسجيل.",
            "en": "You have to register."
          },
          "explanation": {
            "fr": "Le modal est conjugué ; l’infinitif se place en fin de principale. Le pronom correspond au sujet.",
            "de": "Das Modalverb wird konjugiert; der Infinitiv steht am Ende des Hauptsatzes. Das Pronomen richtet sich nach dem Subjekt.",
            "ar": "يصرف الفعل الناقص ويأتي المصدر في نهاية الجملة الرئيسية ويطابق الضمير الفاعل.",
            "en": "The modal is conjugated; the infinitive goes at the end of the main clause. The pronoun agrees with the subject."
          }
        },
        {
          "id": "kapitel-29-ex24",
          "german": "Beeil dich bitte!",
          "context": {
            "fr": "Dépêche-toi, s’il te plaît !",
            "de": "Beeil dich bitte!",
            "ar": "أسرع من فضلك!",
            "en": "Please hurry up!"
          },
          "explanation": {
            "fr": "À l’impératif singulier familier, le pronom réfléchi est dich ; au pluriel euch.",
            "de": "Im vertrauten Imperativ Singular steht dich, im Plural euch.",
            "ar": "في الأمر للمفرد غير الرسمي نستعمل dich وللجمع euch.",
            "en": "The familiar singular imperative uses dich; the plural uses euch."
          }
        },
        {
          "id": "kapitel-29-ex25",
          "german": "Ich bleibe zu Hause, weil ich mich ausruhen muss.",
          "context": {
            "fr": "Je reste à la maison parce que je dois me reposer.",
            "de": "Ich bleibe zu Hause, weil ich mich ausruhen muss.",
            "ar": "أبقى في المنزل لأن علي الاستراحة.",
            "en": "I stay home because I need to rest."
          },
          "explanation": {
            "fr": "Dans une subordonnée avec weil, dass ou wenn, le verbe conjugué est à la fin ; le réfléchi se place normalement près du sujet.",
            "de": "Im Nebensatz mit weil, dass oder wenn steht das finite Verb am Ende; das Reflexivpronomen steht normalerweise nahe beim Subjekt.",
            "ar": "في الجملة الفرعية مع weil أو dass أو wenn يأتي الفعل المصرف في النهاية ويكون الضمير الانعكاسي عادة قرب الفاعل.",
            "en": "In a subordinate clause with weil, dass or wenn, the finite verb goes last; the reflexive pronoun normally stays near the subject."
          }
        },
        {
          "id": "kapitel-29-ex26",
          "german": "Ich glaube, dass er sich freut.",
          "context": {
            "fr": "Je crois qu’il est content.",
            "de": "Ich glaube, dass er sich freut.",
            "ar": "أعتقد أنه سعيد.",
            "en": "I think he is happy."
          },
          "explanation": {
            "fr": "Dans une subordonnée avec weil, dass ou wenn, le verbe conjugué est à la fin ; le réfléchi se place normalement près du sujet.",
            "de": "Im Nebensatz mit weil, dass oder wenn steht das finite Verb am Ende; das Reflexivpronomen steht normalerweise nahe beim Subjekt.",
            "ar": "في الجملة الفرعية مع weil أو dass أو wenn يأتي الفعل المصرف في النهاية ويكون الضمير الانعكاسي عادة قرب الفاعل.",
            "en": "In a subordinate clause with weil, dass or wenn, the finite verb goes last; the reflexive pronoun normally stays near the subject."
          }
        },
        {
          "id": "kapitel-29-ex27",
          "german": "Sie hat sich schick angezogen.",
          "context": {
            "fr": "Elle s’est habillée élégamment.",
            "de": "Sie hat sich schick angezogen.",
            "ar": "ارتدت ملابس أنيقة.",
            "en": "She dressed elegantly."
          },
          "explanation": {
            "fr": "Anziehen et anmelden sont séparables : an se place en fin de principale au présent, mais dans angezogen et angemeldet au Perfekt.",
            "de": "Anziehen und anmelden sind trennbar: an steht im Präsens am Hauptsatzende, im Perfekt in angezogen und angemeldet.",
            "ar": "الفعلان anziehen و anmelden قابلان للفصل: يأتي an في نهاية الجملة الرئيسية في الحاضر ويدمج في angezogen و angemeldet في Perfekt.",
            "en": "Anziehen and anmelden are separable: an goes last in a present main clause, but is part of angezogen and angemeldet in the perfect."
          }
        },
        {
          "id": "kapitel-29-ex28",
          "german": "Ich habe mich geärgert.",
          "context": {
            "fr": "Je me suis énervé.",
            "de": "Ich habe mich geärgert.",
            "ar": "انزعجت.",
            "en": "I got annoyed."
          },
          "explanation": {
            "fr": "Au Perfekt, les verbes réfléchis utilisent haben ; le pronom réfléchi reste présent et le participe clôt la proposition principale.",
            "de": "Reflexive Verben bilden das Perfekt mit haben; das Reflexivpronomen bleibt erhalten, das Partizip schließt den Hauptsatz ab.",
            "ar": "تستعمل الأفعال الانعكاسية haben في Perfekt ويبقى الضمير الانعكاسي ويأتي اسم المفعول في نهاية الجملة الرئيسية.",
            "en": "Reflexive verbs form the perfect with haben; the reflexive pronoun remains and the participle closes the main clause."
          }
        },
        {
          "id": "kapitel-29-ex29",
          "german": "Wir haben uns beim Kellner beschwert.",
          "context": {
            "fr": "Nous nous sommes plaints auprès du serveur.",
            "de": "Wir haben uns beim Kellner beschwert.",
            "ar": "قدمنا شكوى للنادل.",
            "en": "We complained to the waiter."
          },
          "explanation": {
            "fr": "Au Perfekt, les verbes réfléchis utilisent haben ; le pronom réfléchi reste présent et le participe clôt la proposition principale.",
            "de": "Reflexive Verben bilden das Perfekt mit haben; das Reflexivpronomen bleibt erhalten, das Partizip schließt den Hauptsatz ab.",
            "ar": "تستعمل الأفعال الانعكاسية haben في Perfekt ويبقى الضمير الانعكاسي ويأتي اسم المفعول في نهاية الجملة الرئيسية.",
            "en": "Reflexive verbs form the perfect with haben; the reflexive pronoun remains and the participle closes the main clause."
          }
        },
        {
          "id": "kapitel-29-ex30",
          "german": "Der Kellner hat sich entschuldigt.",
          "context": {
            "fr": "Le serveur s’est excusé.",
            "de": "Der Kellner hat sich entschuldigt.",
            "ar": "اعتذر النادل.",
            "en": "The waiter apologized."
          },
          "explanation": {
            "fr": "Au Perfekt, les verbes réfléchis utilisent haben ; le pronom réfléchi reste présent et le participe clôt la proposition principale.",
            "de": "Reflexive Verben bilden das Perfekt mit haben; das Reflexivpronomen bleibt erhalten, das Partizip schließt den Hauptsatz ab.",
            "ar": "تستعمل الأفعال الانعكاسية haben في Perfekt ويبقى الضمير الانعكاسي ويأتي اسم المفعول في نهاية الجملة الرئيسية.",
            "en": "Reflexive verbs form the perfect with haben; the reflexive pronoun remains and the participle closes the main clause."
          }
        },
        {
          "id": "kapitel-29-ex31",
          "german": "Till und Mathilde haben geheiratet.",
          "context": {
            "fr": "Till et Mathilde se sont mariés.",
            "de": "Till und Mathilde haben geheiratet.",
            "ar": "تزوج تيل وماتيلده.",
            "en": "Till and Mathilde got married."
          },
          "explanation": {
            "fr": "Dans ce sens, le verbe ne demande pas de pronom réfléchi ; son complément éventuel suffit.",
            "de": "In dieser Bedeutung braucht das Verb kein Reflexivpronomen; ein vorhandenes Objekt genügt.",
            "ar": "في هذا المعنى لا يحتاج الفعل إلى ضمير انعكاسي ويكفي مفعوله إن وجد.",
            "en": "In this sense the verb does not require a reflexive pronoun; any existing object is sufficient."
          }
        },
        {
          "id": "kapitel-29-ex32",
          "german": "Ich möchte Ärztin werden.",
          "context": {
            "fr": "Je voudrais devenir médecin.",
            "de": "Ich möchte Ärztin werden.",
            "ar": "أرغب في أن أصبح طبيبة.",
            "en": "I would like to become a doctor."
          },
          "explanation": {
            "fr": "Dans ce sens, le verbe ne demande pas de pronom réfléchi ; son complément éventuel suffit.",
            "de": "In dieser Bedeutung braucht das Verb kein Reflexivpronomen; ein vorhandenes Objekt genügt.",
            "ar": "في هذا المعنى لا يحتاج الفعل إلى ضمير انعكاسي ويكفي مفعوله إن وجد.",
            "en": "In this sense the verb does not require a reflexive pronoun; any existing object is sufficient."
          }
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "kapitel-29-b10",
      "title": {
        "fr": "9. Dialogue : avant une fête",
        "de": "9. Dialog: vor einer Party",
        "ar": "9. حوار قبل الحفلة",
        "en": "9. Dialogue: before a party"
      },
      "text": {
        "fr": "A : Quand nous retrouvons-nous ? B : Je dois encore me changer. A : Dépêche-toi ! Je me réjouis de la fête. B : D’accord, je me prépare vite. Les pronoms uns, mich, dich, mich renvoient aux sujets respectifs.",
        "de": "A: Wann treffen wir uns? B: Ich muss mich noch umziehen. A: Beeil dich! Ich freue mich auf die Party. B: Gut, ich mache mich schnell fertig. Die Pronomen uns, mich, dich, mich beziehen sich auf die jeweiligen Subjekte.",
        "ar": "أ: متى نلتقي؟ ب: علي أن أغير ملابسي أولا. أ: أسرع! أتطلع إلى الحفلة. ب: حسنا سأستعد بسرعة. تعود الضمائر uns و mich و dich و mich على الفاعلين المعنيين.",
        "en": "A: When shall we meet? B: I still need to change. A: Hurry up! I am looking forward to the party. B: OK, I will get ready quickly. The pronouns uns, mich, dich, mich refer to their respective subjects."
      }
    },
    {
      "type": "callout",
      "id": "kapitel-29-b11",
      "tone": "tip",
      "title": {
        "fr": "À retenir",
        "de": "Merke",
        "ar": "خلاصة",
        "en": "Remember"
      },
      "text": {
        "fr": "1. Identifie le sujet. 2. Détermine si le complément renvoie au sujet. 3. Choisis accusatif ou datif. 4. Vérifie la position du verbe. 5. Au Perfekt utilise haben. Apprends les verbes avec leur préposition.",
        "de": "1. Bestimme das Subjekt. 2. Prüfe den Bezug des Objekts. 3. Wähle Akkusativ oder Dativ. 4. Prüfe die Verbstellung. 5. Verwende im Perfekt haben. Lerne Verben mit ihrer Präposition.",
        "ar": "1. حدد الفاعل. 2. تحقق من علاقة المفعول بالفاعل. 3. اختر النصب أو الداتيف. 4. تحقق من موضع الفعل. 5. استعمل haben في Perfekt. احفظ الأفعال مع حروف الجر.",
        "en": "1. Identify the subject. 2. Check whether the object refers back to it. 3. Choose accusative or dative. 4. Check verb position. 5. Use haben in the perfect. Learn verbs together with their prepositions."
      }
    }
  ]
}

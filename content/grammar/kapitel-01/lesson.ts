import type { LessonDefinition } from '@/lib/grammar/types'

export const lesson: LessonDefinition = {
  "id": "lektion-01-personalpronomen",
  "title": {
    "fr": "Personalpronomen",
    "de": "Personalpronomen",
    "ar": "Personalpronomen",
    "en": "Personalpronomen"
  },
  "subtitle": {
    "fr": "ich, du, er, sie, es, wir, ihr, sie et Sie",
    "de": "ich, du, er, sie, es, wir, ihr, sie und Sie",
    "ar": "ich و du و er و sie و es و wir و ihr و sie و Sie",
    "en": "ich, du, er, sie, es, wir, ihr, sie and Sie"
  },
  "objective": {
    "fr": "Apprendre à remplacer une personne ou une chose par le pronom personnel correct.",
    "de": "Personen und Dinge mit dem passenden Personalpronomen ersetzen.",
    "ar": "تعلّم تعويض الأشخاص والأشياء بالضمير الشخصي المناسب.",
    "en": "Learn to replace a person or a thing with the correct personal pronoun."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "premium-intro",
      "title": {
        "fr": "Was ist ein Personalpronomen?",
        "de": "Was ist ein Personalpronomen?",
        "ar": "Was ist ein Personalpronomen?",
        "en": "Was ist ein Personalpronomen?"
      },
      "text": {
        "fr": "Le pronom sujet remplace un nom ou désigne directement la personne qui parle, celle à qui on parle ou celle dont on parle. Il est au nominatif et détermine la conjugaison : Anna lernt → sie lernt. Il ne faut pas confondre le pronom sujet avec un complément comme mich ou mir.",
        "de": "Ein Subjektpronomen ersetzt ein Nomen oder bezeichnet den Sprecher, den Gesprächspartner oder eine andere Person. Es steht im Nominativ und bestimmt die Verbform: Anna lernt → sie lernt. Verwechsle es nicht mit Objektformen wie mich oder mir.",
        "ar": "يحل ضمير الفاعل محل الاسم أو يشير إلى المتكلم أو المخاطب أو الغائب. يكون في حالة الرفع ويحدد تصريف الفعل: Anna lernt → sie lernt. لا تخلطه بضمائر المفعول مثل mich وmir.",
        "en": "A subject pronoun replaces a noun or refers to the speaker, addressee or someone else. It is nominative and determines verb agreement: Anna lernt → sie lernt. Do not confuse it with object forms such as mich or mir."
      }
    },
    {
      "type": "table",
      "id": "premium-personen",
      "title": {
        "fr": "Personalpronomen im Nominativ",
        "de": "Personalpronomen im Nominativ",
        "ar": "Personalpronomen im Nominativ",
        "en": "Personalpronomen im Nominativ"
      },
      "headers": [
        {
          "fr": "Pronom sujet",
          "de": "Subjektpronomen",
          "ar": "ضمير الفاعل",
          "en": "Subject pronoun"
        },
        {
          "fr": "Emploi",
          "de": "Gebrauch",
          "ar": "الاستعمال",
          "en": "Use"
        }
      ],
      "rows": [
        {
          "id": "premium-personen-1",
          "cells": [
            {
              "fr": "ich",
              "de": "ich",
              "ar": "ich",
              "en": "ich"
            },
            {
              "fr": "Je : le locuteur",
              "de": "Sprecher",
              "ar": "أنا: المتكلم",
              "en": "I: speaker"
            }
          ]
        },
        {
          "id": "premium-personen-2",
          "cells": [
            {
              "fr": "du",
              "de": "du",
              "ar": "du",
              "en": "du"
            },
            {
              "fr": "Tu : une personne familière",
              "de": "Eine vertraute Person",
              "ar": "أنت: مخاطب مفرد غير رسمي",
              "en": "You: one familiar person"
            }
          ]
        },
        {
          "id": "premium-personen-3",
          "cells": [
            {
              "fr": "er / sie / es",
              "de": "er / sie / es",
              "ar": "er / sie / es",
              "en": "er / sie / es"
            },
            {
              "fr": "Il / elle : singulier, selon le genre",
              "de": "Singular, nach Genus",
              "ar": "هو أو هي بحسب الجنس النحوي",
              "en": "He / she / it: singular, by gender"
            }
          ]
        },
        {
          "id": "premium-personen-4",
          "cells": [
            {
              "fr": "wir",
              "de": "wir",
              "ar": "wir",
              "en": "wir"
            },
            {
              "fr": "Nous : le locuteur et d’autres",
              "de": "Sprecher und weitere Personen",
              "ar": "نحن: المتكلم وآخرون",
              "en": "We: speaker and others"
            }
          ]
        },
        {
          "id": "premium-personen-5",
          "cells": [
            {
              "fr": "ihr",
              "de": "ihr",
              "ar": "ihr",
              "en": "ihr"
            },
            {
              "fr": "Vous : plusieurs personnes familières",
              "de": "Mehrere vertraute Personen",
              "ar": "أنتم: مخاطبون بصيغة غير رسمية",
              "en": "You: several familiar people"
            }
          ]
        },
        {
          "id": "premium-personen-6",
          "cells": [
            {
              "fr": "sie",
              "de": "sie",
              "ar": "sie",
              "en": "sie"
            },
            {
              "fr": "Ils / elles : pluriel",
              "de": "Dritte Person Plural",
              "ar": "هم أو هن: جمع الغائب",
              "en": "They: third-person plural"
            }
          ]
        },
        {
          "id": "premium-personen-7",
          "cells": [
            {
              "fr": "Sie",
              "de": "Sie",
              "ar": "Sie",
              "en": "Sie"
            },
            {
              "fr": "Vous : politesse, une ou plusieurs personnes",
              "de": "Höfliche Anrede, Singular oder Plural",
              "ar": "مخاطب بصيغة الاحترام مفرداً أو جمعاً",
              "en": "You: formal, one or more people"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-genus",
      "title": {
        "fr": "Pronomen für Sachen",
        "de": "Pronomen für Sachen",
        "ar": "Pronomen für Sachen",
        "en": "Pronomen für Sachen"
      },
      "text": {
        "fr": "Pour un objet, l’article du nom donne le pronom : der → er, die → sie, das → es. Au pluriel, tous les genres donnent sie. Le genre allemand ne suit pas nécessairement le genre français ou arabe.",
        "de": "Bei Sachen entscheidet das Genus: der → er, die → sie, das → es. Im Plural steht immer sie. Das deutsche Genus entspricht nicht unbedingt dem in anderen Sprachen.",
        "ar": "عند الحديث عن الأشياء نختار الضمير بحسب أداة الاسم: der → er وdie → sie وdas → es. وفي الجمع نستعمل sie لجميع الأجناس. قد يختلف جنس الاسم في الألمانية عن اللغات الأخرى.",
        "en": "For objects, use the noun’s grammatical gender: der → er, die → sie, das → es. All plurals take sie. German gender need not match gender in other languages."
      }
    },
    {
      "type": "table",
      "id": "premium-sachen",
      "title": {
        "fr": "Der, die, das → er, sie, es",
        "de": "Der, die, das → er, sie, es",
        "ar": "Der, die, das → er, sie, es",
        "en": "Der, die, das → er, sie, es"
      },
      "headers": [
        {
          "fr": "Nomen",
          "de": "Nomen",
          "ar": "Nomen",
          "en": "Nomen"
        },
        {
          "fr": "Pronomen",
          "de": "Pronomen",
          "ar": "Pronomen",
          "en": "Pronomen"
        }
      ],
      "rows": [
        {
          "id": "premium-sachen-1",
          "cells": [
            {
              "fr": "der Löffel",
              "de": "der Löffel",
              "ar": "der Löffel",
              "en": "der Löffel"
            },
            {
              "fr": "er",
              "de": "er",
              "ar": "er",
              "en": "er"
            }
          ]
        },
        {
          "id": "premium-sachen-2",
          "cells": [
            {
              "fr": "die Gabel",
              "de": "die Gabel",
              "ar": "die Gabel",
              "en": "die Gabel"
            },
            {
              "fr": "sie",
              "de": "sie",
              "ar": "sie",
              "en": "sie"
            }
          ]
        },
        {
          "id": "premium-sachen-3",
          "cells": [
            {
              "fr": "das Messer",
              "de": "das Messer",
              "ar": "das Messer",
              "en": "das Messer"
            },
            {
              "fr": "es",
              "de": "es",
              "ar": "es",
              "en": "es"
            }
          ]
        },
        {
          "id": "premium-sachen-4",
          "cells": [
            {
              "fr": "die Tassen",
              "de": "die Tassen",
              "ar": "die Tassen",
              "en": "die Tassen"
            },
            {
              "fr": "sie",
              "de": "sie",
              "ar": "sie",
              "en": "sie"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-sie",
      "title": {
        "fr": "sie oder Sie?",
        "de": "sie oder Sie?",
        "ar": "sie oder Sie?",
        "en": "sie oder Sie?"
      },
      "text": {
        "fr": "Sie (politesse) prend toujours une majuscule, même au milieu d’une phrase, et le verbe a la forme du pluriel. sie ist signifie elle est ; sie sind signifie elles/ils sont. En début de phrase, Sie sind peut aussi désigner plusieurs personnes absentes : le contexte décide.",
        "de": "Das höfliche Sie wird immer großgeschrieben und hat die Verbform der dritten Person Plural. sie ist = eine weibliche Person; sie sind = mehrere Personen. Am Satzanfang kann Sie sind auch die dritte Person Plural sein; der Kontext entscheidet.",
        "ar": "يكتب Sie للاحترام بحرف كبير دائماً ويأخذ تصريف جمع الغائب. sie ist تعني هي، وsie sind تعني هم أو هن. في بداية الجملة قد تكون Sie sind أيضاً جمع الغائب؛ يحدد السياق المعنى.",
        "en": "Formal Sie is always capitalized and takes third-person plural agreement. sie ist means she is; sie sind means they are. At the beginning of a sentence, Sie sind can also refer to third-person plural; context decides."
      }
    },
    {
      "type": "examples",
      "id": "premium-beispiele-1",
      "title": {
        "fr": "Beispiele: Personen",
        "de": "Beispiele: Personen",
        "ar": "Beispiele: Personen",
        "en": "Beispiele: Personen"
      },
      "items": [
        {
          "id": "premium-ex-01",
          "german": "Ich wohne in Köln.",
          "context": {
            "fr": "J’habite à Cologne.",
            "de": "Ich wohne in Köln.",
            "ar": "أسكن في كولونيا.",
            "en": "I live in Cologne."
          },
          "explanation": {
            "fr": "ich désigne la personne qui parle.",
            "de": "ich bezeichnet die sprechende Person.",
            "ar": "يشير ich إلى المتكلم.",
            "en": "ich refers to the speaker."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Ich bin müde.",
          "context": {
            "fr": "Je suis fatigué(e).",
            "de": "Ich bin müde.",
            "ar": "أنا متعب أو متعبة.",
            "en": "I am tired."
          },
          "explanation": {
            "fr": "ich désigne la personne qui parle.",
            "de": "ich bezeichnet die sprechende Person.",
            "ar": "يشير ich إلى المتكلم.",
            "en": "ich refers to the speaker."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Ich lerne Deutsch.",
          "context": {
            "fr": "J’apprends l’allemand.",
            "de": "Ich lerne Deutsch.",
            "ar": "أتعلم الألمانية.",
            "en": "I learn German."
          },
          "explanation": {
            "fr": "ich désigne la personne qui parle.",
            "de": "ich bezeichnet die sprechende Person.",
            "ar": "يشير ich إلى المتكلم.",
            "en": "ich refers to the speaker."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Du kommst aus Rabat.",
          "context": {
            "fr": "Tu viens de Rabat.",
            "de": "Du kommst aus Rabat.",
            "ar": "أنت من الرباط.",
            "en": "You come from Rabat."
          },
          "explanation": {
            "fr": "du désigne un seul interlocuteur familier.",
            "de": "du bezeichnet eine vertraute Person, die angesprochen wird.",
            "ar": "يشير du إلى مخاطب مفرد بصيغة غير رسمية.",
            "en": "du addresses one familiar person."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Du hast Zeit.",
          "context": {
            "fr": "Tu as du temps.",
            "de": "Du hast Zeit.",
            "ar": "لديك وقت.",
            "en": "You have time."
          },
          "explanation": {
            "fr": "du désigne un seul interlocuteur familier.",
            "de": "du bezeichnet eine vertraute Person, die angesprochen wird.",
            "ar": "يشير du إلى مخاطب مفرد بصيغة غير رسمية.",
            "en": "du addresses one familiar person."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Wo wohnst du?",
          "context": {
            "fr": "Où habites-tu ?",
            "de": "Wo wohnst du?",
            "ar": "أين تسكن؟",
            "en": "Where do you live?"
          },
          "explanation": {
            "fr": "du désigne un seul interlocuteur familier.",
            "de": "du bezeichnet eine vertraute Person, die angesprochen wird.",
            "ar": "يشير du إلى مخاطب مفرد بصيغة غير رسمية.",
            "en": "du addresses one familiar person."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Das ist Paul. Er ist Koch.",
          "context": {
            "fr": "Voici Paul. Il est cuisinier.",
            "de": "Das ist Paul. Er ist Koch.",
            "ar": "هذا بول. هو طباخ.",
            "en": "This is Paul. He is a cook."
          },
          "explanation": {
            "fr": "er reprend Paul ; le verbe est au singulier.",
            "de": "er bezieht sich auf Paul; das Verb steht im Singular.",
            "ar": "يعود الضمير er على Paul، ويصرف الفعل في المفرد.",
            "en": "er refers back to Paul; the verb is singular."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "Das ist Adam. Er spielt Fußball.",
          "context": {
            "fr": "Voici Adam. Il joue au football.",
            "de": "Das ist Adam. Er spielt Fußball.",
            "ar": "هذا آدم. هو يلعب كرة القدم.",
            "en": "This is Adam. He plays football."
          },
          "explanation": {
            "fr": "er reprend Adam ; le verbe est au singulier.",
            "de": "er bezieht sich auf Adam; das Verb steht im Singular.",
            "ar": "يعود الضمير er على Adam، ويصرف الفعل في المفرد.",
            "en": "er refers back to Adam; the verb is singular."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Das ist Lea. Sie studiert.",
          "context": {
            "fr": "Voici Léa. Elle fait des études.",
            "de": "Das ist Lea. Sie studiert.",
            "ar": "هذه ليا. هي تدرس في الجامعة.",
            "en": "This is Lea. She studies."
          },
          "explanation": {
            "fr": "sie reprend Lea ; le verbe est au singulier.",
            "de": "sie bezieht sich auf Lea; das Verb steht im Singular.",
            "ar": "يعود الضمير sie على Lea، ويصرف الفعل في المفرد.",
            "en": "sie refers back to Lea; the verb is singular."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Das ist Maria. Sie arbeitet hier.",
          "context": {
            "fr": "Voici Maria. Elle travaille ici.",
            "de": "Das ist Maria. Sie arbeitet hier.",
            "ar": "هذه ماريا. هي تعمل هنا.",
            "en": "This is Maria. She works here."
          },
          "explanation": {
            "fr": "sie reprend Maria ; le verbe est au singulier.",
            "de": "sie bezieht sich auf Maria; das Verb steht im Singular.",
            "ar": "يعود الضمير sie على Maria، ويصرف الفعل في المفرد.",
            "en": "sie refers back to Maria; the verb is singular."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-2",
      "title": {
        "fr": "Beispiele: Anrede und Plural",
        "de": "Beispiele: Anrede und Plural",
        "ar": "Beispiele: Anrede und Plural",
        "en": "Beispiele: Anrede und Plural"
      },
      "items": [
        {
          "id": "premium-ex-11",
          "german": "Das Kind schläft. Es ist müde.",
          "context": {
            "fr": "L’enfant dort. Il est fatigué.",
            "de": "Das Kind schläft. Es ist müde.",
            "ar": "الطفل نائم. إنه متعب.",
            "en": "The child is asleep. The child is tired."
          },
          "explanation": {
            "fr": "« das Kind » est neutre en allemand ; le pronom sujet correspondant est es.",
            "de": "„das Kind“: neutral. Deshalb steht das Subjektpronomen es.",
            "ar": "الاسم «das Kind» محايد في الألمانية، لذلك نستخدم ضمير الفاعل es.",
            "en": "“das Kind” is neuter in German, so the matching subject pronoun is es."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Wir sind Freunde.",
          "context": {
            "fr": "Nous sommes amis.",
            "de": "Wir sind Freunde.",
            "ar": "نحن أصدقاء.",
            "en": "We are friends."
          },
          "explanation": {
            "fr": "wir inclut la personne qui parle et au moins une autre.",
            "de": "wir schließt die sprechende Person und mindestens eine weitere Person ein.",
            "ar": "يشمل wir المتكلم وشخصاً آخر على الأقل.",
            "en": "wir includes the speaker and at least one other person."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Wir fahren nach Bonn.",
          "context": {
            "fr": "Nous allons à Bonn.",
            "de": "Wir fahren nach Bonn.",
            "ar": "نذهب إلى بون.",
            "en": "We are going to Bonn."
          },
          "explanation": {
            "fr": "wir inclut la personne qui parle et au moins une autre.",
            "de": "wir schließt die sprechende Person und mindestens eine weitere Person ein.",
            "ar": "يشمل wir المتكلم وشخصاً آخر على الأقل.",
            "en": "wir includes the speaker and at least one other person."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Heute lernen wir zusammen.",
          "context": {
            "fr": "Aujourd’hui, nous étudions ensemble.",
            "de": "Heute lernen wir zusammen.",
            "ar": "اليوم ندرس معاً.",
            "en": "Today we study together."
          },
          "explanation": {
            "fr": "wir inclut la personne qui parle et au moins une autre.",
            "de": "wir schließt die sprechende Person und mindestens eine weitere Person ein.",
            "ar": "يشمل wir المتكلم وشخصاً آخر على الأقل.",
            "en": "wir includes the speaker and at least one other person."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Ihr seid pünktlich.",
          "context": {
            "fr": "Vous êtes à l’heure.",
            "de": "Ihr seid pünktlich.",
            "ar": "أنتم في الموعد.",
            "en": "You are on time."
          },
          "explanation": {
            "fr": "ihr désigne plusieurs interlocuteurs familiers.",
            "de": "ihr bezeichnet mehrere vertraute Gesprächspartner.",
            "ar": "يشير ihr إلى عدة مخاطبين بصيغة غير رسمية.",
            "en": "ihr addresses several familiar people."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Ihr sprecht Deutsch.",
          "context": {
            "fr": "Vous parlez allemand.",
            "de": "Ihr sprecht Deutsch.",
            "ar": "أنتم تتحدثون الألمانية.",
            "en": "You speak German."
          },
          "explanation": {
            "fr": "ihr désigne plusieurs interlocuteurs familiers.",
            "de": "ihr bezeichnet mehrere vertraute Gesprächspartner.",
            "ar": "يشير ihr إلى عدة مخاطبين بصيغة غير رسمية.",
            "en": "ihr addresses several familiar people."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Woher kommt ihr?",
          "context": {
            "fr": "D’où venez-vous ?",
            "de": "Woher kommt ihr?",
            "ar": "من أين أنتم؟",
            "en": "Where do you come from?"
          },
          "explanation": {
            "fr": "ihr désigne plusieurs interlocuteurs familiers.",
            "de": "ihr bezeichnet mehrere vertraute Gesprächspartner.",
            "ar": "يشير ihr إلى عدة مخاطبين بصيغة غير رسمية.",
            "en": "ihr addresses several familiar people."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Die Kinder spielen. Sie sind laut.",
          "context": {
            "fr": "Les enfants jouent. Ils font du bruit.",
            "de": "Die Kinder spielen. Sie sind laut.",
            "ar": "الأطفال يلعبون. إنهم صاخبون.",
            "en": "The children are playing. They are loud."
          },
          "explanation": {
            "fr": "« die Kinder » est pluriel en allemand ; le pronom sujet correspondant est sie.",
            "de": "„die Kinder“: Plural. Deshalb steht das Subjektpronomen sie.",
            "ar": "الاسم «die Kinder» جمع في الألمانية، لذلك نستخدم ضمير الفاعل sie.",
            "en": "“die Kinder” is plural in German, so the matching subject pronoun is sie."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Die Frauen arbeiten. Sie haben viel zu tun.",
          "context": {
            "fr": "Les femmes travaillent. Elles ont beaucoup à faire.",
            "de": "Die Frauen arbeiten. Sie haben viel zu tun.",
            "ar": "النساء يعملن. لديهن الكثير من العمل.",
            "en": "The women work. They have a lot to do."
          },
          "explanation": {
            "fr": "« die Frauen » est pluriel en allemand ; le pronom sujet correspondant est sie.",
            "de": "„die Frauen“: Plural. Deshalb steht das Subjektpronomen sie.",
            "ar": "الاسم «die Frauen» جمع في الألمانية، لذلك نستخدم ضمير الفاعل sie.",
            "en": "“die Frauen” is plural in German, so the matching subject pronoun is sie."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Herr Weber, haben Sie Zeit?",
          "context": {
            "fr": "Monsieur Weber, avez-vous du temps ?",
            "de": "Herr Weber, haben Sie Zeit?",
            "ar": "سيد فيبر، هل لديك وقت؟",
            "en": "Mr Weber, do you have time?"
          },
          "explanation": {
            "fr": "Sie est le vous de politesse ; majuscule et conjugaison au pluriel.",
            "de": "Sie ist die höfliche Anrede; Großschreibung und Pluralform des Verbs.",
            "ar": "Sie ضمير المخاطب للاحترام، يكتب بحرف كبير ويأخذ تصريف الجمع.",
            "en": "Sie is formal address; capitalize it and use plural verb agreement."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-3",
      "title": {
        "fr": "Beispiele: Sachen",
        "de": "Beispiele: Sachen",
        "ar": "Beispiele: Sachen",
        "en": "Beispiele: Sachen"
      },
      "items": [
        {
          "id": "premium-ex-21",
          "german": "Frau Klein, wo wohnen Sie?",
          "context": {
            "fr": "Madame Klein, où habitez-vous ?",
            "de": "Frau Klein, wo wohnen Sie?",
            "ar": "سيدة كلاين، أين تسكنين؟",
            "en": "Ms Klein, where do you live?"
          },
          "explanation": {
            "fr": "Sie est le vous de politesse ; majuscule et conjugaison au pluriel.",
            "de": "Sie ist die höfliche Anrede; Großschreibung und Pluralform des Verbs.",
            "ar": "Sie ضمير المخاطب للاحترام، يكتب بحرف كبير ويأخذ تصريف الجمع.",
            "en": "Sie is formal address; capitalize it and use plural verb agreement."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Guten Tag, sind Sie Herr Wolf?",
          "context": {
            "fr": "Bonjour, êtes-vous Monsieur Wolf ?",
            "de": "Guten Tag, sind Sie Herr Wolf?",
            "ar": "مرحباً، هل أنت السيد فولف؟",
            "en": "Hello, are you Mr Wolf?"
          },
          "explanation": {
            "fr": "Sie est le vous de politesse ; majuscule et conjugaison au pluriel.",
            "de": "Sie ist die höfliche Anrede; Großschreibung und Pluralform des Verbs.",
            "ar": "Sie ضمير المخاطب للاحترام، يكتب بحرف كبير ويأخذ تصريف الجمع.",
            "en": "Sie is formal address; capitalize it and use plural verb agreement."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Der Löffel ist sauber. Er liegt hier.",
          "context": {
            "fr": "La cuillère est propre. Elle est ici.",
            "de": "Der Löffel ist sauber. Er liegt hier.",
            "ar": "الملعقة نظيفة. إنها هنا.",
            "en": "The spoon is clean. It is here."
          },
          "explanation": {
            "fr": "« der Löffel » est masculin en allemand ; le pronom sujet correspondant est er.",
            "de": "„der Löffel“: maskulin. Deshalb steht das Subjektpronomen er.",
            "ar": "الاسم «der Löffel» مذكر في الألمانية، لذلك نستخدم ضمير الفاعل er.",
            "en": "“der Löffel” is masculine in German, so the matching subject pronoun is er."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Der Tisch ist groß. Er ist neu.",
          "context": {
            "fr": "La table est grande. Elle est neuve.",
            "de": "Der Tisch ist groß. Er ist neu.",
            "ar": "الطاولة كبيرة. إنها جديدة.",
            "en": "The table is large. It is new."
          },
          "explanation": {
            "fr": "« der Tisch » est masculin en allemand ; le pronom sujet correspondant est er.",
            "de": "„der Tisch“: maskulin. Deshalb steht das Subjektpronomen er.",
            "ar": "الاسم «der Tisch» مذكر في الألمانية، لذلك نستخدم ضمير الفاعل er.",
            "en": "“der Tisch” is masculine in German, so the matching subject pronoun is er."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Die Gabel ist klein. Sie ist sauber.",
          "context": {
            "fr": "La fourchette est petite. Elle est propre.",
            "de": "Die Gabel ist klein. Sie ist sauber.",
            "ar": "الشوكة صغيرة. إنها نظيفة.",
            "en": "The fork is small. It is clean."
          },
          "explanation": {
            "fr": "« die Gabel » est féminin en allemand ; le pronom sujet correspondant est sie.",
            "de": "„die Gabel“: feminin. Deshalb steht das Subjektpronomen sie.",
            "ar": "الاسم «die Gabel» مؤنث في الألمانية، لذلك نستخدم ضمير الفاعل sie.",
            "en": "“die Gabel” is feminine in German, so the matching subject pronoun is sie."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Die Lampe ist alt. Sie funktioniert.",
          "context": {
            "fr": "La lampe est ancienne. Elle fonctionne.",
            "de": "Die Lampe ist alt. Sie funktioniert.",
            "ar": "المصباح قديم. إنه يعمل.",
            "en": "The lamp is old. It works."
          },
          "explanation": {
            "fr": "« die Lampe » est féminin en allemand ; le pronom sujet correspondant est sie.",
            "de": "„die Lampe“: feminin. Deshalb steht das Subjektpronomen sie.",
            "ar": "الاسم «die Lampe» مؤنث في الألمانية، لذلك نستخدم ضمير الفاعل sie.",
            "en": "“die Lampe” is feminine in German, so the matching subject pronoun is sie."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Das Messer ist scharf. Es ist neu.",
          "context": {
            "fr": "Le couteau est aiguisé. Il est neuf.",
            "de": "Das Messer ist scharf. Es ist neu.",
            "ar": "السكين حادة. إنها جديدة.",
            "en": "The knife is sharp. It is new."
          },
          "explanation": {
            "fr": "« das Messer » est neutre en allemand ; le pronom sujet correspondant est es.",
            "de": "„das Messer“: neutral. Deshalb steht das Subjektpronomen es.",
            "ar": "الاسم «das Messer» محايد في الألمانية، لذلك نستخدم ضمير الفاعل es.",
            "en": "“das Messer” is neuter in German, so the matching subject pronoun is es."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Das Buch ist interessant. Es ist teuer.",
          "context": {
            "fr": "Le livre est intéressant. Il est cher.",
            "de": "Das Buch ist interessant. Es ist teuer.",
            "ar": "الكتاب ممتع. إنه غالٍ.",
            "en": "The book is interesting. It is expensive."
          },
          "explanation": {
            "fr": "« das Buch » est neutre en allemand ; le pronom sujet correspondant est es.",
            "de": "„das Buch“: neutral. Deshalb steht das Subjektpronomen es.",
            "ar": "الاسم «das Buch» محايد في الألمانية، لذلك نستخدم ضمير الفاعل es.",
            "en": "“das Buch” is neuter in German, so the matching subject pronoun is es."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Die Tassen sind weiß. Sie sind sauber.",
          "context": {
            "fr": "Les tasses sont blanches. Elles sont propres.",
            "de": "Die Tassen sind weiß. Sie sind sauber.",
            "ar": "الأكواب بيضاء. إنها نظيفة.",
            "en": "The cups are white. They are clean."
          },
          "explanation": {
            "fr": "« die Tassen » est pluriel en allemand ; le pronom sujet correspondant est sie.",
            "de": "„die Tassen“: Plural. Deshalb steht das Subjektpronomen sie.",
            "ar": "الاسم «die Tassen» جمع في الألمانية، لذلك نستخدم ضمير الفاعل sie.",
            "en": "“die Tassen” is plural in German, so the matching subject pronoun is sie."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Die Bücher sind schwer. Sie liegen im Regal.",
          "context": {
            "fr": "Les livres sont lourds. Ils sont sur l’étagère.",
            "de": "Die Bücher sind schwer. Sie liegen im Regal.",
            "ar": "الكتب ثقيلة. إنها على الرف.",
            "en": "The books are heavy. They are on the shelf."
          },
          "explanation": {
            "fr": "« die Bücher » est pluriel en allemand ; le pronom sujet correspondant est sie.",
            "de": "„die Bücher“: Plural. Deshalb steht das Subjektpronomen sie.",
            "ar": "الاسم «die Bücher» جمع في الألمانية، لذلك نستخدم ضمير الفاعل sie.",
            "en": "“die Bücher” is plural in German, so the matching subject pronoun is sie."
          }
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-dialog",
      "title": {
        "fr": "Mini-Dialog: Im Deutschkurs",
        "de": "Mini-Dialog: Im Deutschkurs",
        "ar": "Mini-Dialog: Im Deutschkurs",
        "en": "Mini-Dialog: Im Deutschkurs"
      },
      "text": {
        "fr": "A : Hallo, ich bin Lina. Und du? (Salut, je suis Lina. Et toi ?)\nB : Ich bin Samir. Wir sind im selben Kurs. (Je suis Samir. Nous sommes dans le même cours.)\nA à la professeure : Frau Berg, sind Sie unsere Lehrerin? (Madame Berg, êtes-vous notre professeure ?)\nOn passe de du entre élèves à Sie dans une situation formelle.",
        "de": "A: Hallo, ich bin Lina. Und du?\nB: Ich bin Samir. Wir sind im selben Kurs.\nA zur Lehrerin: Frau Berg, sind Sie unsere Lehrerin?\nUnter Lernenden steht hier du, gegenüber der Lehrerin die höfliche Form Sie.",
        "ar": "أ: Hallo, ich bin Lina. Und du? (مرحباً، أنا لينا. وأنت؟)\nب: Ich bin Samir. Wir sind im selben Kurs. (أنا سمير. نحن في نفس الدورة.)\nأ للمدرسة: Frau Berg, sind Sie unsere Lehrerin? (سيدة بيرغ، هل أنت معلمتنا؟)\nنستعمل du بين الطلاب وSie في المخاطبة الرسمية.",
        "en": "A: Hallo, ich bin Lina. Und du? (Hi, I’m Lina. And you?)\nB: Ich bin Samir. Wir sind im selben Kurs. (I’m Samir. We are in the same course.)\nA to the teacher: Frau Berg, sind Sie unsere Lehrerin? (Ms Berg, are you our teacher?)\nUse du between classmates here and formal Sie with the teacher."
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
        "fr": "❌ Der Tisch ist neu. Sie ist groß. → ✓ Er ist groß. (der → er)\n❌ Frau Weber, hast Sie Zeit? → ✓ Frau Weber, haben Sie Zeit? (Sie + forme du pluriel)\n❌ Ihr sind müde. → ✓ Ihr seid müde. (ihr ≠ sie)",
        "de": "❌ Der Tisch ist neu. Sie ist groß. → ✓ Er ist groß. (der → er)\n❌ Frau Weber, hast Sie Zeit? → ✓ Frau Weber, haben Sie Zeit? (Sie + Pluralform)\n❌ Ihr sind müde. → ✓ Ihr seid müde. (ihr ≠ sie)",
        "ar": "❌ Der Tisch ist neu. Sie ist groß. → ✓ Er ist groß. (الاسم مذكر)\n❌ Frau Weber, hast Sie Zeit? → ✓ Frau Weber, haben Sie Zeit? (تصريف الجمع مع Sie)\n❌ Ihr sind müde. → ✓ Ihr seid müde. (يختلف ihr عن sie)",
        "en": "❌ Der Tisch ist neu. Sie ist groß. → ✓ Er ist groß. (der → er)\n❌ Frau Weber, hast Sie Zeit? → ✓ Frau Weber, haben Sie Zeit? (Sie takes plural agreement)\n❌ Ihr sind müde. → ✓ Ihr seid müde. (ihr ≠ sie)"
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
        "fr": "1. Identifie la personne ou le nom remplacé. 2. Vérifie le singulier/pluriel et le genre allemand. 3. Choisis le pronom et accorde le verbe.",
        "de": "1. Bestimme Person oder Bezugsnomen. 2. Prüfe Numerus und Genus. 3. Wähle Pronomen und Verbform.",
        "ar": "١. حدد الشخص أو الاسم. ٢. تحقق من العدد والجنس النحوي. ٣. اختر الضمير وصرف الفعل.",
        "en": "1. Identify the person or noun. 2. Check number and German gender. 3. Choose the pronoun and matching verb."
      }
    }
  ]
}

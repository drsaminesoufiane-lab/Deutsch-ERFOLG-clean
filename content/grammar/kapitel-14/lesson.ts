import type { LessonDefinition } from '@/lib/grammar/types'
export const lesson: LessonDefinition = {
  "id": "kapitel-14-lesson",
  "title": {
    "fr": "Der, das, die – ein, ein, eine",
    "de": "Der, das, die – ein, ein, eine",
    "ar": "Der, das, die – ein, ein, eine",
    "en": "Der, das, die – ein, ein, eine"
  },
  "subtitle": {
    "fr": "Articles",
    "de": "Artikel: definit, indefinit, kein Artikel",
    "ar": "أدوات الأسماء",
    "en": "Articles"
  },
  "objective": {
    "fr": "Choisir les articles selon le genre, le nombre, le cas et le contexte.",
    "de": "Artikel nach Genus, Numerus, Kasus und Kontext wählen.",
    "ar": "اختيار الأدوات وفق الجنس والعدد والحالة والسياق.",
    "en": "Choose articles by gender, number, case and context."
  },
  "blocks": [
    {
      "type": "paragraph",
      "id": "premium-theorie-1",
      "title": {
        "fr": "Bestimmt, unbestimmt oder ohne Artikel?",
        "de": "Bestimmt, unbestimmt oder ohne Artikel?",
        "ar": "Bestimmt, unbestimmt oder ohne Artikel?",
        "en": "Bestimmt, unbestimmt oder ohne Artikel?"
      },
      "text": {
        "fr": "Un nom allemand a un genre grammatical qu’il faut apprendre : der Stuhl, das Bild, die Vase. Ein/eine introduit souvent un objet non encore identifié ; der/das/die désigne un objet identifiable. Le genre appartient au nom, le cas dépend de sa fonction ou de la préposition.",
        "de": "Deutsche Nomen haben ein Genus, das man lernen muss: der Stuhl, das Bild, die Vase. Ein/eine führt oft etwas noch nicht Identifiziertes ein; der/das/die bezeichnet etwas Identifizierbares. Genus gehört zum Nomen, der Kasus zur Funktion oder Präposition.",
        "ar": "لكل اسم ألماني جنس نحوي يجب حفظه: der Stuhl وdas Bild وdie Vase. غالباً تقدم ein/eine شيئاً غير محدد، وتشير der/das/die إلى شيء معروف. الجنس تابع للاسم والحالة تابعة لوظيفته أو حرف الجر.",
        "en": "German nouns have gender to learn: der Stuhl, das Bild, die Vase. Ein/eine often introduces something unidentified; der/das/die refers to something identifiable. Gender belongs to the noun; case depends on function or preposition."
      }
    },
    {
      "type": "table",
      "id": "premium-tabelle-2",
      "title": {
        "fr": "Unbestimmter Artikel",
        "de": "Unbestimmter Artikel",
        "ar": "Unbestimmter Artikel",
        "en": "Unbestimmter Artikel"
      },
      "headers": [
        {
          "fr": "Cas",
          "de": "Kasus",
          "ar": "الحالة",
          "en": "Case"
        },
        {
          "fr": "Masculin",
          "de": "Maskulin",
          "ar": "المذكر",
          "en": "Masculine"
        },
        {
          "fr": "Neutre",
          "de": "Neutrum",
          "ar": "المحايد",
          "en": "Neuter"
        },
        {
          "fr": "Féminin",
          "de": "Feminin",
          "ar": "المؤنث",
          "en": "Feminine"
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
              "fr": "Nominativ",
              "de": "Nominativ",
              "ar": "Nominativ",
              "en": "Nominativ"
            },
            {
              "fr": "ein",
              "de": "ein",
              "ar": "ein",
              "en": "ein"
            },
            {
              "fr": "ein",
              "de": "ein",
              "ar": "ein",
              "en": "ein"
            },
            {
              "fr": "eine",
              "de": "eine",
              "ar": "eine",
              "en": "eine"
            },
            {
              "fr": "—",
              "de": "—",
              "ar": "—",
              "en": "—"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-2",
          "cells": [
            {
              "fr": "Akkusativ",
              "de": "Akkusativ",
              "ar": "Akkusativ",
              "en": "Akkusativ"
            },
            {
              "fr": "einen",
              "de": "einen",
              "ar": "einen",
              "en": "einen"
            },
            {
              "fr": "ein",
              "de": "ein",
              "ar": "ein",
              "en": "ein"
            },
            {
              "fr": "eine",
              "de": "eine",
              "ar": "eine",
              "en": "eine"
            },
            {
              "fr": "—",
              "de": "—",
              "ar": "—",
              "en": "—"
            }
          ]
        },
        {
          "id": "premium-tabelle-2-3",
          "cells": [
            {
              "fr": "Dativ",
              "de": "Dativ",
              "ar": "Dativ",
              "en": "Dativ"
            },
            {
              "fr": "einem",
              "de": "einem",
              "ar": "einem",
              "en": "einem"
            },
            {
              "fr": "einem",
              "de": "einem",
              "ar": "einem",
              "en": "einem"
            },
            {
              "fr": "einer",
              "de": "einer",
              "ar": "einer",
              "en": "einer"
            },
            {
              "fr": "—",
              "de": "—",
              "ar": "—",
              "en": "—"
            }
          ]
        }
      ]
    },
    {
      "type": "table",
      "id": "premium-tabelle-3",
      "title": {
        "fr": "Bestimmter Artikel",
        "de": "Bestimmter Artikel",
        "ar": "Bestimmter Artikel",
        "en": "Bestimmter Artikel"
      },
      "headers": [
        {
          "fr": "Cas",
          "de": "Kasus",
          "ar": "الحالة",
          "en": "Case"
        },
        {
          "fr": "Masculin",
          "de": "Maskulin",
          "ar": "المذكر",
          "en": "Masculine"
        },
        {
          "fr": "Neutre",
          "de": "Neutrum",
          "ar": "المحايد",
          "en": "Neuter"
        },
        {
          "fr": "Féminin",
          "de": "Feminin",
          "ar": "المؤنث",
          "en": "Feminine"
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
          "id": "premium-tabelle-3-1",
          "cells": [
            {
              "fr": "Nominativ",
              "de": "Nominativ",
              "ar": "Nominativ",
              "en": "Nominativ"
            },
            {
              "fr": "der",
              "de": "der",
              "ar": "der",
              "en": "der"
            },
            {
              "fr": "das",
              "de": "das",
              "ar": "das",
              "en": "das"
            },
            {
              "fr": "die",
              "de": "die",
              "ar": "die",
              "en": "die"
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
          "id": "premium-tabelle-3-2",
          "cells": [
            {
              "fr": "Akkusativ",
              "de": "Akkusativ",
              "ar": "Akkusativ",
              "en": "Akkusativ"
            },
            {
              "fr": "den",
              "de": "den",
              "ar": "den",
              "en": "den"
            },
            {
              "fr": "das",
              "de": "das",
              "ar": "das",
              "en": "das"
            },
            {
              "fr": "die",
              "de": "die",
              "ar": "die",
              "en": "die"
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
          "id": "premium-tabelle-3-3",
          "cells": [
            {
              "fr": "Dativ",
              "de": "Dativ",
              "ar": "Dativ",
              "en": "Dativ"
            },
            {
              "fr": "dem",
              "de": "dem",
              "ar": "dem",
              "en": "dem"
            },
            {
              "fr": "dem",
              "de": "dem",
              "ar": "dem",
              "en": "dem"
            },
            {
              "fr": "der",
              "de": "der",
              "ar": "der",
              "en": "der"
            },
            {
              "fr": "den",
              "de": "den",
              "ar": "den",
              "en": "den"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "id": "premium-theorie-4",
      "title": {
        "fr": "Drei Schritte",
        "de": "Drei Schritte",
        "ar": "Drei Schritte",
        "en": "Drei Schritte"
      },
      "text": {
        "fr": "1. Identifie le nom et son genre. 2. Choisis défini ou indéfini selon le contexte. 3. Détermine le cas : sujet au nominatif, objet direct généralement à l’accusatif, datif exigé par certains verbes (helfen) et prépositions (mit). Le datif pluriel ajoute souvent -n au nom : den Kindern.",
        "de": "1. Bestimme das Nomen und sein Genus. 2. Wähle bestimmt oder unbestimmt nach Kontext. 3. Bestimme den Kasus: Subjekt im Nominativ, direktes Objekt meist im Akkusativ, Dativ bei bestimmten Verben (helfen) und Präpositionen (mit). Im Dativ Plural kommt oft -n ans Nomen: den Kindern.",
        "ar": "1. حدد الاسم وجنسه. 2. اختر التعريف أو التنكير حسب السياق. 3. حدد الحالة: الفاعل في الرفع والمفعول المباشر غالباً في النصب، والداتيف مع بعض الأفعال مثل helfen وحروف الجر مثل mit. في جمع الداتيف تضاف غالباً -n: den Kindern.",
        "en": "1. Identify the noun and gender. 2. Choose definite or indefinite by context. 3. Determine case: subject nominative, direct object usually accusative, dative after certain verbs (helfen) and prepositions (mit). Dative plural often adds -n: den Kindern."
      }
    },
    {
      "type": "paragraph",
      "id": "premium-theorie-5",
      "title": {
        "fr": "Nullartikel",
        "de": "Nullartikel",
        "ar": "Nullartikel",
        "en": "Nullartikel"
      },
      "text": {
        "fr": "Le pluriel indéfini, les matières ou abstractions prises au sens général, et les métiers non qualifiés après sein n’ont souvent pas d’article : Ich kaufe Äpfel. Ich habe Zeit. Ich bin Apotheker. Compare : Das Wasser im Glas ist kalt ; ici l’eau est identifiée.",
        "de": "Unbestimmter Plural, Stoffe oder Abstrakta in allgemeiner Bedeutung und unmodifizierte Berufe nach sein stehen oft ohne Artikel: Ich kaufe Äpfel. Ich habe Zeit. Ich bin Apotheker. Vergleiche: Das Wasser im Glas ist kalt; hier ist das Wasser identifiziert.",
        "ar": "غالباً يأتي الجمع غير المحدد وأسماء المواد والمعاني المجردة العامة والمهن غير الموصوفة بعد sein دون أداة. قارن Das Wasser im Glas ist kalt، فالماء هنا محدد.",
        "en": "Indefinite plurals, substances or abstractions in general usage, and unmodified occupations after sein often take no article. Compare Das Wasser im Glas ist kalt: this water is identifiable."
      }
    },
    {
      "type": "examples",
      "id": "premium-beispiele-1",
      "title": {
        "fr": "Nominativ und Einführung des Akkusativs",
        "de": "Nominativ und Einführung des Akkusativs",
        "ar": "Nominativ und Einführung des Akkusativs",
        "en": "Nominativ und Einführung des Akkusativs"
      },
      "items": [
        {
          "id": "premium-ex-01",
          "german": "Das ist ein Stuhl.",
          "context": {
            "fr": "C’est une chaise.",
            "de": "Das ist ein Stuhl.",
            "ar": "هذا كرسي.",
            "en": "This is a chair."
          },
          "explanation": {
            "fr": "ein Stuhl — Le référent est introduit ou non identifié : article indéfini au nominatif, accordé au genre. Après sein, le groupe nominal attribut est aussi au nominatif.",
            "de": "ein Stuhl — Der Referent wird eingeführt oder ist nicht identifiziert: unbestimmter Artikel im Nominativ nach Genus. Auch das Prädikatsnomen nach sein steht im Nominativ.",
            "ar": "ein Stuhl — يُقدَّم المرجع أو يكون غير محدد: أداة تنكير في الرفع توافق الجنس. والخبر الاسمي بعد sein في الرفع أيضاً.",
            "en": "ein Stuhl — The referent is introduced or unidentified: nominative indefinite article matching gender. A predicate noun after sein is also nominative."
          }
        },
        {
          "id": "premium-ex-02",
          "german": "Das ist ein Wörterbuch.",
          "context": {
            "fr": "C’est un dictionnaire.",
            "de": "Das ist ein Wörterbuch.",
            "ar": "هذا قاموس.",
            "en": "This is a dictionary."
          },
          "explanation": {
            "fr": "ein Wörterbuch — Le référent est introduit ou non identifié : article indéfini au nominatif, accordé au genre. Après sein, le groupe nominal attribut est aussi au nominatif.",
            "de": "ein Wörterbuch — Der Referent wird eingeführt oder ist nicht identifiziert: unbestimmter Artikel im Nominativ nach Genus. Auch das Prädikatsnomen nach sein steht im Nominativ.",
            "ar": "ein Wörterbuch — يُقدَّم المرجع أو يكون غير محدد: أداة تنكير في الرفع توافق الجنس. والخبر الاسمي بعد sein في الرفع أيضاً.",
            "en": "ein Wörterbuch — The referent is introduced or unidentified: nominative indefinite article matching gender. A predicate noun after sein is also nominative."
          }
        },
        {
          "id": "premium-ex-03",
          "german": "Das ist eine Vase.",
          "context": {
            "fr": "C’est un vase.",
            "de": "Das ist eine Vase.",
            "ar": "هذه مزهرية.",
            "en": "This is a vase."
          },
          "explanation": {
            "fr": "eine Vase — Le référent est introduit ou non identifié : article indéfini au nominatif, accordé au genre. Après sein, le groupe nominal attribut est aussi au nominatif.",
            "de": "eine Vase — Der Referent wird eingeführt oder ist nicht identifiziert: unbestimmter Artikel im Nominativ nach Genus. Auch das Prädikatsnomen nach sein steht im Nominativ.",
            "ar": "eine Vase — يُقدَّم المرجع أو يكون غير محدد: أداة تنكير في الرفع توافق الجنس. والخبر الاسمي بعد sein في الرفع أيضاً.",
            "en": "eine Vase — The referent is introduced or unidentified: nominative indefinite article matching gender. A predicate noun after sein is also nominative."
          }
        },
        {
          "id": "premium-ex-04",
          "german": "Ein Mann wartet draußen.",
          "context": {
            "fr": "Un homme attend dehors.",
            "de": "Ein Mann wartet draußen.",
            "ar": "ينتظر رجل في الخارج.",
            "en": "A man is waiting outside."
          },
          "explanation": {
            "fr": "ein Mann — Le référent est introduit ou non identifié : article indéfini au nominatif, accordé au genre. Après sein, le groupe nominal attribut est aussi au nominatif.",
            "de": "ein Mann — Der Referent wird eingeführt oder ist nicht identifiziert: unbestimmter Artikel im Nominativ nach Genus. Auch das Prädikatsnomen nach sein steht im Nominativ.",
            "ar": "ein Mann — يُقدَّم المرجع أو يكون غير محدد: أداة تنكير في الرفع توافق الجنس. والخبر الاسمي بعد sein في الرفع أيضاً.",
            "en": "ein Mann — The referent is introduced or unidentified: nominative indefinite article matching gender. A predicate noun after sein is also nominative."
          }
        },
        {
          "id": "premium-ex-05",
          "german": "Eine Frau sucht ihre Tasche.",
          "context": {
            "fr": "Une femme cherche son sac.",
            "de": "Eine Frau sucht ihre Tasche.",
            "ar": "تبحث امرأة عن حقيبتها.",
            "en": "A woman is looking for her bag."
          },
          "explanation": {
            "fr": "eine Frau — Le référent est introduit ou non identifié : article indéfini au nominatif, accordé au genre. Après sein, le groupe nominal attribut est aussi au nominatif.",
            "de": "eine Frau — Der Referent wird eingeführt oder ist nicht identifiziert: unbestimmter Artikel im Nominativ nach Genus. Auch das Prädikatsnomen nach sein steht im Nominativ.",
            "ar": "eine Frau — يُقدَّم المرجع أو يكون غير محدد: أداة تنكير في الرفع توافق الجنس. والخبر الاسمي بعد sein في الرفع أيضاً.",
            "en": "eine Frau — The referent is introduced or unidentified: nominative indefinite article matching gender. A predicate noun after sein is also nominative."
          }
        },
        {
          "id": "premium-ex-06",
          "german": "Der Stuhl ist bequem.",
          "context": {
            "fr": "La chaise est confortable.",
            "de": "Der Stuhl ist bequem.",
            "ar": "الكرسي مريح.",
            "en": "The chair is comfortable."
          },
          "explanation": {
            "fr": "der Stuhl — Le nom désigne un référent identifiable dans la situation ; le sujet est au nominatif.",
            "de": "der Stuhl — Das Nomen bezeichnet einen in der Situation identifizierbaren Referenten; das Subjekt steht im Nominativ.",
            "ar": "der Stuhl — يدل الاسم على مرجع معروف في السياق؛ والفاعل في حالة الرفع.",
            "en": "der Stuhl — The noun refers to something identifiable in context; the subject is nominative."
          }
        },
        {
          "id": "premium-ex-07",
          "german": "Das Wörterbuch ist neu.",
          "context": {
            "fr": "Le dictionnaire est neuf.",
            "de": "Das Wörterbuch ist neu.",
            "ar": "القاموس جديد.",
            "en": "The dictionary is new."
          },
          "explanation": {
            "fr": "das Wörterbuch — Le nom désigne un référent identifiable dans la situation ; le sujet est au nominatif.",
            "de": "das Wörterbuch — Das Nomen bezeichnet einen in der Situation identifizierbaren Referenten; das Subjekt steht im Nominativ.",
            "ar": "das Wörterbuch — يدل الاسم على مرجع معروف في السياق؛ والفاعل في حالة الرفع.",
            "en": "das Wörterbuch — The noun refers to something identifiable in context; the subject is nominative."
          }
        },
        {
          "id": "premium-ex-08",
          "german": "Die Vase ist schön.",
          "context": {
            "fr": "Le vase est beau.",
            "de": "Die Vase ist schön.",
            "ar": "المزهرية جميلة.",
            "en": "The vase is beautiful."
          },
          "explanation": {
            "fr": "die Vase — Le nom désigne un référent identifiable dans la situation ; le sujet est au nominatif.",
            "de": "die Vase — Das Nomen bezeichnet einen in der Situation identifizierbaren Referenten; das Subjekt steht im Nominativ.",
            "ar": "die Vase — يدل الاسم على مرجع معروف في السياق؛ والفاعل في حالة الرفع.",
            "en": "die Vase — The noun refers to something identifiable in context; the subject is nominative."
          }
        },
        {
          "id": "premium-ex-09",
          "german": "Die Blumen sind frisch.",
          "context": {
            "fr": "Les fleurs sont fraîches.",
            "de": "Die Blumen sind frisch.",
            "ar": "الزهور طازجة.",
            "en": "The flowers are fresh."
          },
          "explanation": {
            "fr": "die Blumen — Le nom désigne un référent identifiable dans la situation ; le sujet est au nominatif.",
            "de": "die Blumen — Das Nomen bezeichnet einen in der Situation identifizierbaren Referenten; das Subjekt steht im Nominativ.",
            "ar": "die Blumen — يدل الاسم على مرجع معروف في السياق؛ والفاعل في حالة الرفع.",
            "en": "die Blumen — The noun refers to something identifiable in context; the subject is nominative."
          }
        },
        {
          "id": "premium-ex-10",
          "german": "Ich möchte einen Kaffee.",
          "context": {
            "fr": "Je voudrais un café.",
            "de": "Ich möchte einen Kaffee.",
            "ar": "أود قهوة.",
            "en": "I would like a coffee."
          },
          "explanation": {
            "fr": "einen Kaffee — L’objet direct est à l’accusatif. Seul le masculin change de ein à einen par rapport au nominatif.",
            "de": "einen Kaffee — Das direkte Objekt steht im Akkusativ. Nur Maskulinum ändert sich gegenüber dem Nominativ von ein zu einen.",
            "ar": "einen Kaffee — المفعول المباشر في حالة النصب. تتغير ein إلى einen في المذكر فقط مقارنة بالرفع.",
            "en": "einen Kaffee — The direct object is accusative. Only masculine changes from ein to einen compared with nominative."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-2",
      "title": {
        "fr": "Akkusativ und Dativ",
        "de": "Akkusativ und Dativ",
        "ar": "Akkusativ und Dativ",
        "en": "Akkusativ und Dativ"
      },
      "items": [
        {
          "id": "premium-ex-11",
          "german": "Ich kaufe ein Brötchen.",
          "context": {
            "fr": "J’achète un petit pain.",
            "de": "Ich kaufe ein Brötchen.",
            "ar": "أشتري خبزة صغيرة.",
            "en": "I buy a bread roll."
          },
          "explanation": {
            "fr": "ein Brötchen — L’objet direct est à l’accusatif. Seul le masculin change de ein à einen par rapport au nominatif.",
            "de": "ein Brötchen — Das direkte Objekt steht im Akkusativ. Nur Maskulinum ändert sich gegenüber dem Nominativ von ein zu einen.",
            "ar": "ein Brötchen — المفعول المباشر في حالة النصب. تتغير ein إلى einen في المذكر فقط مقارنة بالرفع.",
            "en": "ein Brötchen — The direct object is accusative. Only masculine changes from ein to einen compared with nominative."
          }
        },
        {
          "id": "premium-ex-12",
          "german": "Sie isst eine Banane.",
          "context": {
            "fr": "Elle mange une banane.",
            "de": "Sie isst eine Banane.",
            "ar": "تأكل موزة.",
            "en": "She eats a banana."
          },
          "explanation": {
            "fr": "eine Banane — L’objet direct est à l’accusatif. Seul le masculin change de ein à einen par rapport au nominatif.",
            "de": "eine Banane — Das direkte Objekt steht im Akkusativ. Nur Maskulinum ändert sich gegenüber dem Nominativ von ein zu einen.",
            "ar": "eine Banane — المفعول المباشر في حالة النصب. تتغير ein إلى einen في المذكر فقط مقارنة بالرفع.",
            "en": "eine Banane — The direct object is accusative. Only masculine changes from ein to einen compared with nominative."
          }
        },
        {
          "id": "premium-ex-13",
          "german": "Er braucht einen Laptop.",
          "context": {
            "fr": "Il a besoin d’un ordinateur portable.",
            "de": "Er braucht einen Laptop.",
            "ar": "يحتاج إلى حاسوب محمول.",
            "en": "He needs a laptop."
          },
          "explanation": {
            "fr": "einen Laptop — L’objet direct est à l’accusatif. Seul le masculin change de ein à einen par rapport au nominatif.",
            "de": "einen Laptop — Das direkte Objekt steht im Akkusativ. Nur Maskulinum ändert sich gegenüber dem Nominativ von ein zu einen.",
            "ar": "einen Laptop — المفعول المباشر في حالة النصب. تتغير ein إلى einen في المذكر فقط مقارنة بالرفع.",
            "en": "einen Laptop — The direct object is accusative. Only masculine changes from ein to einen compared with nominative."
          }
        },
        {
          "id": "premium-ex-14",
          "german": "Ich öffne den Schrank.",
          "context": {
            "fr": "J’ouvre l’armoire.",
            "de": "Ich öffne den Schrank.",
            "ar": "أفتح الخزانة.",
            "en": "I open the cupboard."
          },
          "explanation": {
            "fr": "den Schrank — L’objet défini est à l’accusatif. Au masculin der devient den ; les autres formes restent das, die, die.",
            "de": "den Schrank — Das bestimmte Objekt steht im Akkusativ. Maskulin der wird den; sonst bleiben das, die, die.",
            "ar": "den Schrank — المفعول المعرف في النصب. تتحول der المذكرة إلى den وتبقى das وdie وdie.",
            "en": "den Schrank — The definite object is accusative. Masculine der becomes den; das and die stay unchanged."
          }
        },
        {
          "id": "premium-ex-15",
          "german": "Wir lesen das Buch.",
          "context": {
            "fr": "Nous lisons le livre.",
            "de": "Wir lesen das Buch.",
            "ar": "نقرأ الكتاب.",
            "en": "We read the book."
          },
          "explanation": {
            "fr": "das Buch — L’objet défini est à l’accusatif. Au masculin der devient den ; les autres formes restent das, die, die.",
            "de": "das Buch — Das bestimmte Objekt steht im Akkusativ. Maskulin der wird den; sonst bleiben das, die, die.",
            "ar": "das Buch — المفعول المعرف في النصب. تتحول der المذكرة إلى den وتبقى das وdie وdie.",
            "en": "das Buch — The definite object is accusative. Masculine der becomes den; das and die stay unchanged."
          }
        },
        {
          "id": "premium-ex-16",
          "german": "Sie schließt die Tür.",
          "context": {
            "fr": "Elle ferme la porte.",
            "de": "Sie schließt die Tür.",
            "ar": "تغلق الباب.",
            "en": "She closes the door."
          },
          "explanation": {
            "fr": "die Tür — L’objet défini est à l’accusatif. Au masculin der devient den ; les autres formes restent das, die, die.",
            "de": "die Tür — Das bestimmte Objekt steht im Akkusativ. Maskulin der wird den; sonst bleiben das, die, die.",
            "ar": "die Tür — المفعول المعرف في النصب. تتحول der المذكرة إلى den وتبقى das وdie وdie.",
            "en": "die Tür — The definite object is accusative. Masculine der becomes den; das and die stay unchanged."
          }
        },
        {
          "id": "premium-ex-17",
          "german": "Er kauft die Tickets.",
          "context": {
            "fr": "Il achète les billets.",
            "de": "Er kauft die Tickets.",
            "ar": "يشتري التذاكر.",
            "en": "He buys the tickets."
          },
          "explanation": {
            "fr": "die Tickets — L’objet défini est à l’accusatif. Au masculin der devient den ; les autres formes restent das, die, die.",
            "de": "die Tickets — Das bestimmte Objekt steht im Akkusativ. Maskulin der wird den; sonst bleiben das, die, die.",
            "ar": "die Tickets — المفعول المعرف في النصب. تتحول der المذكرة إلى den وتبقى das وdie وdie.",
            "en": "die Tickets — The definite object is accusative. Masculine der becomes den; das and die stay unchanged."
          }
        },
        {
          "id": "premium-ex-18",
          "german": "Ich helfe einem Freund.",
          "context": {
            "fr": "J’aide un ami.",
            "de": "Ich helfe einem Freund.",
            "ar": "أساعد صديقاً.",
            "en": "I help a friend."
          },
          "explanation": {
            "fr": "einem Freund — Le verbe ou la préposition exige le datif ici. Les formes de l’article dépendent du genre et du nombre.",
            "de": "einem Freund — Das Verb oder die Präposition verlangt hier den Dativ. Die Artikelform richtet sich nach Genus und Numerus.",
            "ar": "einem Freund — يتطلب الفعل أو حرف الجر هنا الداتيف. تعتمد صيغة الأداة على الجنس والعدد.",
            "en": "einem Freund — The verb or preposition requires dative here. The article form depends on gender and number."
          }
        },
        {
          "id": "premium-ex-19",
          "german": "Sie fährt mit einem Auto.",
          "context": {
            "fr": "Elle se déplace en voiture.",
            "de": "Sie fährt mit einem Auto.",
            "ar": "تتنقل بسيارة.",
            "en": "She travels by car."
          },
          "explanation": {
            "fr": "mit einem Auto — Le verbe ou la préposition exige le datif ici. Les formes de l’article dépendent du genre et du nombre.",
            "de": "mit einem Auto — Das Verb oder die Präposition verlangt hier den Dativ. Die Artikelform richtet sich nach Genus und Numerus.",
            "ar": "mit einem Auto — يتطلب الفعل أو حرف الجر هنا الداتيف. تعتمد صيغة الأداة على الجنس والعدد.",
            "en": "mit einem Auto — The verb or preposition requires dative here. The article form depends on gender and number."
          }
        },
        {
          "id": "premium-ex-20",
          "german": "Ich spreche mit einer Kollegin.",
          "context": {
            "fr": "Je parle avec une collègue.",
            "de": "Ich spreche mit einer Kollegin.",
            "ar": "أتحدث مع زميلة.",
            "en": "I talk to a female colleague."
          },
          "explanation": {
            "fr": "mit einer Kollegin — Le verbe ou la préposition exige le datif ici. Les formes de l’article dépendent du genre et du nombre.",
            "de": "mit einer Kollegin — Das Verb oder die Präposition verlangt hier den Dativ. Die Artikelform richtet sich nach Genus und Numerus.",
            "ar": "mit einer Kollegin — يتطلب الفعل أو حرف الجر هنا الداتيف. تعتمد صيغة الأداة على الجنس والعدد.",
            "en": "mit einer Kollegin — The verb or preposition requires dative here. The article form depends on gender and number."
          }
        }
      ]
    },
    {
      "type": "examples",
      "id": "premium-beispiele-3",
      "title": {
        "fr": "Dativ und Nullartikel",
        "de": "Dativ und Nullartikel",
        "ar": "Dativ und Nullartikel",
        "en": "Dativ und Nullartikel"
      },
      "items": [
        {
          "id": "premium-ex-21",
          "german": "Wir fahren mit dem Bus.",
          "context": {
            "fr": "Nous prenons le bus.",
            "de": "Wir fahren mit dem Bus.",
            "ar": "نركب الحافلة.",
            "en": "We take the bus."
          },
          "explanation": {
            "fr": "mit dem Bus — Le verbe ou la préposition exige le datif ici. Les formes de l’article dépendent du genre et du nombre.",
            "de": "mit dem Bus — Das Verb oder die Präposition verlangt hier den Dativ. Die Artikelform richtet sich nach Genus und Numerus.",
            "ar": "mit dem Bus — يتطلب الفعل أو حرف الجر هنا الداتيف. تعتمد صيغة الأداة على الجنس والعدد.",
            "en": "mit dem Bus — The verb or preposition requires dative here. The article form depends on gender and number."
          }
        },
        {
          "id": "premium-ex-22",
          "german": "Er hilft der Nachbarin.",
          "context": {
            "fr": "Il aide la voisine.",
            "de": "Er hilft der Nachbarin.",
            "ar": "يساعد الجارة.",
            "en": "He helps the neighbour."
          },
          "explanation": {
            "fr": "der Nachbarin — Le verbe ou la préposition exige le datif ici. Les formes de l’article dépendent du genre et du nombre.",
            "de": "der Nachbarin — Das Verb oder die Präposition verlangt hier den Dativ. Die Artikelform richtet sich nach Genus und Numerus.",
            "ar": "der Nachbarin — يتطلب الفعل أو حرف الجر هنا الداتيف. تعتمد صيغة الأداة على الجنس والعدد.",
            "en": "der Nachbarin — The verb or preposition requires dative here. The article form depends on gender and number."
          }
        },
        {
          "id": "premium-ex-23",
          "german": "Die Lehrerin hilft den Kindern.",
          "context": {
            "fr": "L’enseignante aide les enfants.",
            "de": "Die Lehrerin hilft den Kindern.",
            "ar": "تساعد المعلمة الأطفال.",
            "en": "The teacher helps the children."
          },
          "explanation": {
            "fr": "den Kindern — Le verbe ou la préposition exige le datif ici. Les formes de l’article dépendent du genre et du nombre.",
            "de": "den Kindern — Das Verb oder die Präposition verlangt hier den Dativ. Die Artikelform richtet sich nach Genus und Numerus.",
            "ar": "den Kindern — يتطلب الفعل أو حرف الجر هنا الداتيف. تعتمد صيغة الأداة على الجنس والعدد.",
            "en": "den Kindern — The verb or preposition requires dative here. The article form depends on gender and number."
          }
        },
        {
          "id": "premium-ex-24",
          "german": "Ich kaufe Äpfel.",
          "context": {
            "fr": "J’achète des pommes.",
            "de": "Ich kaufe Äpfel.",
            "ar": "أشتري تفاحاً.",
            "en": "I buy apples."
          },
          "explanation": {
            "fr": "Äpfel — Il n’existe pas de pluriel de ein : un pluriel non défini se présente ici sans article.",
            "de": "Äpfel — Ein hat keinen Plural: Ein unbestimmter Plural steht hier ohne Artikel.",
            "ar": "Äpfel — لا جمع لأداة ein، لذلك يأتي الجمع غير المحدد هنا دون أداة.",
            "en": "Äpfel — Ein has no plural: an indefinite plural is used here without an article."
          }
        },
        {
          "id": "premium-ex-25",
          "german": "Wir brauchen Stifte.",
          "context": {
            "fr": "Nous avons besoin de stylos.",
            "de": "Wir brauchen Stifte.",
            "ar": "نحتاج إلى أقلام.",
            "en": "We need pens."
          },
          "explanation": {
            "fr": "Stifte — Il n’existe pas de pluriel de ein : un pluriel non défini se présente ici sans article.",
            "de": "Stifte — Ein hat keinen Plural: Ein unbestimmter Plural steht hier ohne Artikel.",
            "ar": "Stifte — لا جمع لأداة ein، لذلك يأتي الجمع غير المحدد هنا دون أداة.",
            "en": "Stifte — Ein has no plural: an indefinite plural is used here without an article."
          }
        },
        {
          "id": "premium-ex-26",
          "german": "Ich habe Zeit.",
          "context": {
            "fr": "J’ai du temps.",
            "de": "Ich habe Zeit.",
            "ar": "لدي وقت.",
            "en": "I have time."
          },
          "explanation": {
            "fr": "Zeit — Le nom non comptable est employé dans un sens général sans article. Un référent défini peut toutefois avoir un article.",
            "de": "Zeit — Das nicht zählbare Nomen wird allgemein ohne Artikel gebraucht. Bei einem bestimmten Referenten ist ein Artikel möglich.",
            "ar": "Zeit — يستعمل الاسم غير المعدود بمعنى عام دون أداة، لكن يمكن تعريفه إذا كان المرجع محدداً.",
            "en": "Zeit — The uncountable noun is used generally without an article. A specific referent can take an article."
          }
        },
        {
          "id": "premium-ex-27",
          "german": "Sie trinkt Milch.",
          "context": {
            "fr": "Elle boit du lait.",
            "de": "Sie trinkt Milch.",
            "ar": "تشرب الحليب.",
            "en": "She drinks milk."
          },
          "explanation": {
            "fr": "Milch — Le nom non comptable est employé dans un sens général sans article. Un référent défini peut toutefois avoir un article.",
            "de": "Milch — Das nicht zählbare Nomen wird allgemein ohne Artikel gebraucht. Bei einem bestimmten Referenten ist ein Artikel möglich.",
            "ar": "Milch — يستعمل الاسم غير المعدود بمعنى عام دون أداة، لكن يمكن تعريفه إذا كان المرجع محدداً.",
            "en": "Milch — The uncountable noun is used generally without an article. A specific referent can take an article."
          }
        },
        {
          "id": "premium-ex-28",
          "german": "Wir haben Hunger.",
          "context": {
            "fr": "Nous avons faim.",
            "de": "Wir haben Hunger.",
            "ar": "نحن جائعون.",
            "en": "We are hungry."
          },
          "explanation": {
            "fr": "Hunger — Le nom non comptable est employé dans un sens général sans article. Un référent défini peut toutefois avoir un article.",
            "de": "Hunger — Das nicht zählbare Nomen wird allgemein ohne Artikel gebraucht. Bei einem bestimmten Referenten ist ein Artikel möglich.",
            "ar": "Hunger — يستعمل الاسم غير المعدود بمعنى عام دون أداة، لكن يمكن تعريفه إذا كان المرجع محدداً.",
            "en": "Hunger — The uncountable noun is used generally without an article. A specific referent can take an article."
          }
        },
        {
          "id": "premium-ex-29",
          "german": "Ich bin Apotheker.",
          "context": {
            "fr": "Je suis pharmacien.",
            "de": "Ich bin Apotheker.",
            "ar": "أنا صيدلي.",
            "en": "I am a pharmacist."
          },
          "explanation": {
            "fr": "Apotheker — Après sein, une profession non qualifiée s’emploie normalement sans article. Avec un adjectif qualificatif, un article est souvent nécessaire.",
            "de": "Apotheker — Nach sein steht eine unmodifizierte Berufsbezeichnung gewöhnlich ohne Artikel. Mit attributivem Adjektiv ist häufig ein Artikel nötig.",
            "ar": "Apotheker — بعد sein يأتي اسم المهنة غير الموصوف عادة دون أداة، وقد تلزم أداة مع صفة نعتية.",
            "en": "Apotheker — After sein an unmodified occupation normally takes no article. With an attributive adjective an article is often needed."
          }
        },
        {
          "id": "premium-ex-30",
          "german": "Sie ist Pilotin von Beruf.",
          "context": {
            "fr": "Elle est pilote de profession.",
            "de": "Sie ist Pilotin von Beruf.",
            "ar": "هي طيارة من حيث المهنة.",
            "en": "She is a pilot by profession."
          },
          "explanation": {
            "fr": "Pilotin — Après sein, une profession non qualifiée s’emploie normalement sans article. Avec un adjectif qualificatif, un article est souvent nécessaire.",
            "de": "Pilotin — Nach sein steht eine unmodifizierte Berufsbezeichnung gewöhnlich ohne Artikel. Mit attributivem Adjektiv ist häufig ein Artikel nötig.",
            "ar": "Pilotin — بعد sein يأتي اسم المهنة غير الموصوف عادة دون أداة، وقد تلزم أداة مع صفة نعتية.",
            "en": "Pilotin — After sein an unmodified occupation normally takes no article. With an attributive adjective an article is often needed."
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
        "fr": "A: Was ist das? (Qu’est-ce que c’est ?)\nB: Das ist ein Wörterbuch. (C’est un dictionnaire.)\nA: Das Wörterbuch ist sehr praktisch. (Le dictionnaire est très pratique.)",
        "de": "A: Was ist das?\nB: Das ist ein Wörterbuch.\nA: Das Wörterbuch ist sehr praktisch.",
        "ar": "أ: Was ist das? (ما هذا؟)\nب: Das ist ein Wörterbuch. (هذا قاموس.)\nأ: Das Wörterbuch ist sehr praktisch. (القاموس عملي جداً.)",
        "en": "A: Was ist das? (What is this?)\nB: Das ist ein Wörterbuch. (This is a dictionary.)\nA: Das Wörterbuch ist sehr praktisch. (The dictionary is very useful.)"
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
        "fr": "❌ Ich kaufe ein Kaffee. → ✓ Ich kaufe einen Kaffee. (accusatif masculin)\n❌ mit eine Freundin → ✓ mit einer Freundin. (mit + datif)\n❌ ein Äpfel → ✓ Äpfel. (pas de ein au pluriel)",
        "de": "❌ Ich kaufe ein Kaffee. → ✓ Ich kaufe einen Kaffee. (Akkusativ Maskulinum)\n❌ mit eine Freundin → ✓ mit einer Freundin. (mit + Dativ)\n❌ ein Äpfel → ✓ Äpfel. (kein ein im Plural)",
        "ar": "❌ Ich kaufe ein Kaffee. → ✓ Ich kaufe einen Kaffee. (مذكر في النصب)\n❌ mit eine Freundin → ✓ mit einer Freundin. (mit مع الداتيف)\n❌ ein Äpfel → ✓ Äpfel. (لا تستعمل ein في الجمع)",
        "en": "❌ Ich kaufe ein Kaffee. → ✓ Ich kaufe einen Kaffee. (masculine accusative)\n❌ mit eine Freundin → ✓ mit einer Freundin. (mit + dative)\n❌ ein Äpfel → ✓ Äpfel. (no ein in the plural)"
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
        "fr": "Identifie le genre, le nombre et le cas. Puis choisis l’article selon que le référent est identifié ou non.",
        "de": "Bestimme Genus, Numerus und Kasus. Wähle den Artikel nach der Identifizierbarkeit des Referenten.",
        "ar": "حدد الجنس والعدد والحالة، ثم اختر الأداة حسب تحديد المرجع.",
        "en": "Identify gender, number and case. Then choose the article according to whether the referent is identifiable."
      }
    }
  ]
}

import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-18-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Le propriétaire",
      "de": "Der Besitzer",
      "ar": "المالك",
      "en": "The owner"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-01-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "meine",
          "mein",
          "meinem",
          "dein"
        ],
        "prompt": {
          "fr": "Hier bin ich. Das ist ___ Kind. (ich) — Choisissez le possessif approprié.",
          "de": "Hier bin ich. Das ist ___ Kind. (ich) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Hier bin ich. Das ist ___ Kind. (ich) — اختر أداة الملكية المناسبة.",
          "en": "Hier bin ich. Das ist ___ Kind. (ich) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-01-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "unseren",
          "unsere",
          "meine",
          "unser"
        ],
        "prompt": {
          "fr": "Das sind wir und ___ Kinder. (wir) — Choisissez le possessif approprié.",
          "de": "Das sind wir und ___ Kinder. (wir) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Das sind wir und ___ Kinder. (wir) — اختر أداة الملكية المناسبة.",
          "en": "Das sind wir und ___ Kinder. (wir) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-01-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Da ist Thomas und ___ Mutter. (er)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-01-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Hier ist Judy und meine Tochter. (Judys Tochter)",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-01-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "deinem",
          "deinen",
          "dein",
          "mein"
        ],
        "prompt": {
          "fr": "Du bist hier. Das ist ___ Vater. (du) — Choisissez le possessif approprié.",
          "de": "Du bist hier. Das ist ___ Vater. (du) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Du bist hier. Das ist ___ Vater. (du) — اختر أداة الملكية المناسبة.",
          "en": "Du bist hier. Das ist ___ Vater. (du) — Choose the appropriate possessive determiner."
        }
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "La famille",
      "de": "Familie",
      "ar": "العائلة",
      "en": "Family"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-02-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "deine",
          "seiner",
          "meine",
          "seine"
        ],
        "prompt": {
          "fr": "Jörg hat eine Frau. Das ist ___ Frau Martina. (er) — Choisissez le possessif approprié.",
          "de": "Jörg hat eine Frau. Das ist ___ Frau Martina. (er) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Jörg hat eine Frau. Das ist ___ Frau Martina. (er) — اختر أداة الملكية المناسبة.",
          "en": "Jörg hat eine Frau. Das ist ___ Frau Martina. (er) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-02-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Martina hat einen Mann. Das ist ___ Mann Jörg. (sie (Singular))",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-02-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Jörg hat ein Fahrrad. Das ist sein Fahrrad.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-02-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihrer",
          "meine",
          "deine",
          "ihre"
        ],
        "prompt": {
          "fr": "Martina hat eine Tasche. Das ist ___ Tasche. (sie (Singular)) — Choisissez le possessif approprié.",
          "de": "Martina hat eine Tasche. Das ist ___ Tasche. (sie (Singular)) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Martina hat eine Tasche. Das ist ___ Tasche. (sie (Singular)) — اختر أداة الملكية المناسبة.",
          "en": "Martina hat eine Tasche. Das ist ___ Tasche. (sie (Singular)) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-02-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihre",
          "meine",
          "ihren",
          "ihr"
        ],
        "prompt": {
          "fr": "Jörg und Martina haben Kinder. Das sind ___ Kinder. (sie (Plural)) — Choisissez le possessif approprié.",
          "de": "Jörg und Martina haben Kinder. Das sind ___ Kinder. (sie (Plural)) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Jörg und Martina haben Kinder. Das sind ___ Kinder. (sie (Plural)) — اختر أداة الملكية المناسبة.",
          "en": "Jörg und Martina haben Kinder. Das sind ___ Kinder. (sie (Plural)) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-02-q06",
        "position": 6,
        "type": "fill_blank",
        "sentence": "Jörg hat Bücher. Das sind ___ Bücher. (er)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Notre et votre",
      "de": "Unser und euer",
      "ar": "ملكنا وملككم",
      "en": "Our and your"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "sentence": "Thomas und Susi, wo ist ___ Papa? (ihr)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-03-q02",
        "position": 2,
        "type": "true_false",
        "statement": "Wir antworten: unserem Papa ist in der Küche.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-03-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "eure",
          "meine",
          "deine",
          "eurer"
        ],
        "prompt": {
          "fr": "Kinder, wo ist ___ Mama? (ihr) — Choisissez le possessif approprié.",
          "de": "Kinder, wo ist ___ Mama? (ihr) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Kinder, wo ist ___ Mama? (ihr) — اختر أداة الملكية المناسبة.",
          "en": "Kinder, wo ist ___ Mama? (ihr) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-03-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "unserer",
          "meine",
          "deine",
          "unsere"
        ],
        "prompt": {
          "fr": "Wir antworten: ___ Mama arbeitet. (wir) — Choisissez le possessif approprié.",
          "de": "Wir antworten: ___ Mama arbeitet. (wir) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Wir antworten: ___ Mama arbeitet. (wir) — اختر أداة الملكية المناسبة.",
          "en": "Wir antworten: ___ Mama arbeitet. (wir) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "sentence": "Kinder, wie heißen ___ Freunde? (ihr)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-03-q06",
        "position": 6,
        "type": "true_false",
        "statement": "Wir antworten: unseren Freunde heißen Philip und Sabina.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Politesse",
      "de": "Höflichkeit",
      "ar": "صيغة الاحترام",
      "en": "Formal address"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-04-q01",
        "position": 1,
        "type": "true_false",
        "statement": "Frau Dorn, wie geht es Ihrer Tochter Lisa?",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-04-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihrem",
          "meinen",
          "ihren",
          "ihre"
        ],
        "prompt": {
          "fr": "Lisa ist bei ___ Großeltern. (sie (Singular)) — Choisissez le possessif approprié.",
          "de": "Lisa ist bei ___ Großeltern. (sie (Singular)) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Lisa ist bei ___ Großeltern. (sie (Singular)) — اختر أداة الملكية المناسبة.",
          "en": "Lisa ist bei ___ Großeltern. (sie (Singular)) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-04-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "meinen",
          "ihr",
          "ihrem",
          "ihren"
        ],
        "prompt": {
          "fr": "Lisa liebt ___ Opa. (sie (Singular)) — Choisissez le possessif approprié.",
          "de": "Lisa liebt ___ Opa. (sie (Singular)) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Lisa liebt ___ Opa. (sie (Singular)) — اختر أداة الملكية المناسبة.",
          "en": "Lisa liebt ___ Opa. (sie (Singular)) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "sentence": "Frau Mall, wie geht es ___ Familie? (Sie)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-04-q05",
        "position": 5,
        "type": "true_false",
        "statement": "Frau Mall, wo sind Ihre Kinder?",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-04-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "meinen",
          "ihrem",
          "ihre",
          "ihren"
        ],
        "prompt": {
          "fr": "Tim und Tom sind bei ___ Freunden. (sie (Plural)) — Choisissez le possessif approprié.",
          "de": "Tim und Tom sind bei ___ Freunden. (sie (Plural)) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Tim und Tom sind bei ___ Freunden. (sie (Plural)) — اختر أداة الملكية المناسبة.",
          "en": "Tim und Tom sind bei ___ Freunden. (sie (Plural)) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-04-q07",
        "position": 7,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Ihr",
          "mein",
          "Ihrem",
          "Ihren"
        ],
        "prompt": {
          "fr": "Frau Dorn, ___ Mann hat angerufen. (Sie) — Choisissez le possessif approprié.",
          "de": "Frau Dorn, ___ Mann hat angerufen. (Sie) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Frau Dorn, ___ Mann hat angerufen. (Sie) — اختر أداة الملكية المناسبة.",
          "en": "Frau Dorn, ___ Mann hat angerufen. (Sie) — Choose the appropriate possessive determiner."
        }
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Anniversaire",
      "de": "Geburtstag",
      "ar": "عيد الميلاد",
      "en": "Birthday"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-05-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "deiner",
          "meinen",
          "meiner",
          "meine"
        ],
        "prompt": {
          "fr": "Ich fahre zu ___ Familie. (ich) — Choisissez le possessif approprié.",
          "de": "Ich fahre zu ___ Familie. (ich) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Ich fahre zu ___ Familie. (ich) — اختر أداة الملكية المناسبة.",
          "en": "Ich fahre zu ___ Familie. (ich) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-05-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "meiner",
          "seine",
          "seinen",
          "seiner"
        ],
        "prompt": {
          "fr": "Mein Bruder Heinrich wohnt mit ___ Frau Doris. (er) — Choisissez le possessif approprié.",
          "de": "Mein Bruder Heinrich wohnt mit ___ Frau Doris. (er) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Mein Bruder Heinrich wohnt mit ___ Frau Doris. (er) — اختر أداة الملكية المناسبة.",
          "en": "Mein Bruder Heinrich wohnt mit ___ Frau Doris. (er) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-05-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Doris wohnt im Haus von ___ Eltern. (sie (Singular))",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-05-q04",
        "position": 4,
        "type": "true_false",
        "statement": "Leonie liebt ihrem Bruder Ralf.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-05-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "deine",
          "meine",
          "seine",
          "seiner"
        ],
        "prompt": {
          "fr": "Ralf mag ___ Schwester Leonie. (er) — Choisissez le possessif approprié.",
          "de": "Ralf mag ___ Schwester Leonie. (er) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Ralf mag ___ Schwester Leonie. (er) — اختر أداة الملكية المناسبة.",
          "en": "Ralf mag ___ Schwester Leonie. (er) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-05-q06",
        "position": 6,
        "type": "qcm",
        "selection": "single",
        "options": [
          "meinem",
          "meinen",
          "deinen",
          "mein"
        ],
        "prompt": {
          "fr": "Ich feiere ___ Geburtstag bei meinen Eltern. (ich) — Choisissez le possessif approprié.",
          "de": "Ich feiere ___ Geburtstag bei meinen Eltern. (ich) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Ich feiere ___ Geburtstag bei meinen Eltern. (ich) — اختر أداة الملكية المناسبة.",
          "en": "Ich feiere ___ Geburtstag bei meinen Eltern. (ich) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-05-q07",
        "position": 7,
        "type": "fill_blank",
        "sentence": "Monika kommt mit ___ Freund Joachim. (sie (Singular))",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-05-q08",
        "position": 8,
        "type": "true_false",
        "statement": "Joachim kommt mit seinen Tochter Ana.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-05-q09",
        "position": 9,
        "type": "qcm",
        "selection": "single",
        "options": [
          "meinen",
          "meinem",
          "meine",
          "deinen"
        ],
        "prompt": {
          "fr": "Ich bekomme Geschenke von ___ Geschwistern. (ich) — Choisissez le possessif approprié.",
          "de": "Ich bekomme Geschenke von ___ Geschwistern. (ich) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Ich bekomme Geschenke von ___ Geschwistern. (ich) — اختر أداة الملكية المناسبة.",
          "en": "Ich bekomme Geschenke von ___ Geschwistern. (ich) — Choose the appropriate possessive determiner."
        }
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Accusatif",
      "de": "Akkusativ",
      "ar": "النصب",
      "en": "Accusative"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-06-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "meinem",
          "deinen",
          "meinen",
          "mein"
        ],
        "prompt": {
          "fr": "Ich suche ___ Schlüssel. (ich) — Choisissez le possessif approprié.",
          "de": "Ich suche ___ Schlüssel. (ich) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Ich suche ___ Schlüssel. (ich) — اختر أداة الملكية المناسبة.",
          "en": "Ich suche ___ Schlüssel. (ich) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Du besuchst ___ Mutter. (du)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-06-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Paul verkauft sein Auto.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-06-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "unsere",
          "meine",
          "unseren",
          "deine"
        ],
        "prompt": {
          "fr": "Wir holen ___ Kinder ab. (wir) — Choisissez le possessif approprié.",
          "de": "Wir holen ___ Kinder ab. (wir) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Wir holen ___ Kinder ab. (wir) — اختر أداة الملكية المناسبة.",
          "en": "Wir holen ___ Kinder ab. (wir) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-06-q05",
        "position": 5,
        "type": "qcm",
        "selection": "single",
        "options": [
          "euren",
          "eurem",
          "meinen",
          "euer"
        ],
        "prompt": {
          "fr": "Kinder, nehmt ___ Rucksack mit! (ihr) — Choisissez le possessif approprié.",
          "de": "Kinder, nehmt ___ Rucksack mit! (ihr) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Kinder, nehmt ___ Rucksack mit! (ihr) — اختر أداة الملكية المناسبة.",
          "en": "Kinder, nehmt ___ Rucksack mit! (ihr) — Choose the appropriate possessive determiner."
        }
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Datif",
      "de": "Dativ",
      "ar": "الجر",
      "en": "Dative"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "sentence": "Ich helfe ___ Vater. (ich)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-07-q02",
        "position": 2,
        "type": "true_false",
        "statement": "Du fährst mit dein Auto.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-07-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "ihre",
          "ihren",
          "ihrer",
          "meiner"
        ],
        "prompt": {
          "fr": "Anna telefoniert mit ___ Schwester. (sie (Singular)) — Choisissez le possessif approprié.",
          "de": "Anna telefoniert mit ___ Schwester. (sie (Singular)) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Anna telefoniert mit ___ Schwester. (sie (Singular)) — اختر أداة الملكية المناسبة.",
          "en": "Anna telefoniert mit ___ Schwester. (sie (Singular)) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-07-q04",
        "position": 4,
        "type": "qcm",
        "selection": "single",
        "options": [
          "unseren",
          "meinen",
          "unsere",
          "unserem"
        ],
        "prompt": {
          "fr": "Wir sprechen mit ___ Lehrern. (wir) — Choisissez le possessif approprié.",
          "de": "Wir sprechen mit ___ Lehrern. (wir) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Wir sprechen mit ___ Lehrern. (wir) — اختر أداة الملكية المناسبة.",
          "en": "Wir sprechen mit ___ Lehrern. (wir) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-07-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Kinder, helft ___ Mutter und bringt ___ Vater den Einkauf. (die Eltern der Kinder)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Les trois cas",
      "de": "Drei Fälle",
      "ar": "الحالات الثلاث",
      "en": "Three cases"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-08-q01",
        "position": 1,
        "type": "true_false",
        "statement": "Mein Bruder hilft mir. (ich)",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-08-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Deinen",
          "Meinem",
          "Meinen",
          "Mein"
        ],
        "prompt": {
          "fr": "___ Bruder besuche ich. (ich) — Choisissez le possessif approprié.",
          "de": "___ Bruder besuche ich. (ich) — Wählen Sie den passenden Possessivartikel.",
          "ar": "___ Bruder besuche ich. (ich) — اختر أداة الملكية المناسبة.",
          "en": "___ Bruder besuche ich. (ich) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-08-q03",
        "position": 3,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Meinem",
          "Meinen",
          "Deinem",
          "Mein"
        ],
        "prompt": {
          "fr": "___ Bruder helfe ich. (ich) — Choisissez le possessif approprié.",
          "de": "___ Bruder helfe ich. (ich) — Wählen Sie den passenden Possessivartikel.",
          "ar": "___ Bruder helfe ich. (ich) — اختر أداة الملكية المناسبة.",
          "en": "___ Bruder helfe ich. (ich) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-08-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Die Mutter besucht ___ Kinder und schenkt ___ Kindern Bücher. (Kinder der Mutter)",
        "blanks": 2
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Dialogue",
      "de": "Dialog",
      "ar": "حوار",
      "en": "Dialogue"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-09-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "Ihren",
          "Ihrem",
          "Ihr",
          "meinen"
        ],
        "prompt": {
          "fr": "Herr Klein, ich habe ___ Ausweis gefunden. (Sie) — Choisissez le possessif approprié.",
          "de": "Herr Klein, ich habe ___ Ausweis gefunden. (Sie) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Herr Klein, ich habe ___ Ausweis gefunden. (Sie) — اختر أداة الملكية المناسبة.",
          "en": "Herr Klein, ich habe ___ Ausweis gefunden. (Sie) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-09-q02",
        "position": 2,
        "type": "qcm",
        "selection": "single",
        "options": [
          "deine",
          "eure",
          "euren",
          "meine"
        ],
        "prompt": {
          "fr": "Kinder, ich habe ___ Ausweise gefunden. (ihr) — Choisissez le possessif approprié.",
          "de": "Kinder, ich habe ___ Ausweise gefunden. (ihr) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Kinder, ich habe ___ Ausweise gefunden. (ihr) — اختر أداة الملكية المناسبة.",
          "en": "Kinder, ich habe ___ Ausweise gefunden. (ihr) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-09-q03",
        "position": 3,
        "type": "fill_blank",
        "sentence": "Anna sagt: Ich habe ___ Ausweis verloren. (ich)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-09-q04",
        "position": 4,
        "type": "qcm",
        "selection": "multiple",
        "prompt": {
          "fr": "Sélectionnez toutes les phrases grammaticalement correctes.",
          "de": "Wählen Sie alle grammatisch richtigen Sätze.",
          "ar": "اختر كل الجمل الصحيحة نحوياً.",
          "en": "Select all grammatically correct sentences."
        },
        "options": [
          "Kinder, hier sind euren Pässe.",
          "Kinder, hier sind eure Pässe.",
          "Frau Weber, hier ist Ihren Pass.",
          "Frau Weber, hier ist Ihr Pass."
        ]
      }
    ]
  },
  {
    "id": "kapitel-18-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Bilan",
      "de": "Abschlusstest",
      "ar": "اختبار شامل",
      "en": "Review"
    },
    "description": {
      "fr": "Articles possessifs",
      "de": "Possessivartikel",
      "ar": "أدوات الملكية",
      "en": "Possessive determiners"
    },
    "questions": [
      {
        "id": "kapitel-18-ubung-10-q01",
        "position": 1,
        "type": "qcm",
        "selection": "single",
        "options": [
          "meinem",
          "ihrem",
          "ihren",
          "ihr"
        ],
        "prompt": {
          "fr": "Lena besucht Paul mit ___ Bruder. (Lenas Bruder) — Choisissez le possessif approprié.",
          "de": "Lena besucht Paul mit ___ Bruder. (Lenas Bruder) — Wählen Sie den passenden Possessivartikel.",
          "ar": "Lena besucht Paul mit ___ Bruder. (Lenas Bruder) — اختر أداة الملكية المناسبة.",
          "en": "Lena besucht Paul mit ___ Bruder. (Lenas Bruder) — Choose the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-10-q02",
        "position": 2,
        "type": "fill_blank",
        "sentence": "Paul besucht Lena mit ___ Bruder. (Pauls Bruder)",
        "blanks": 1,
        "prompt": {
          "fr": "Complétez avec le possessif approprié.",
          "de": "Ergänzen Sie den passenden Possessivartikel.",
          "ar": "أكمل باستخدام أداة الملكية المناسبة.",
          "en": "Complete with the appropriate possessive determiner."
        }
      },
      {
        "id": "kapitel-18-ubung-10-q03",
        "position": 3,
        "type": "true_false",
        "statement": "Kinder, ich gebe eurem Vater das Paket.",
        "prompt": {
          "fr": "La forme soulignée par le contexte est-elle correcte (grammaire et référent) ?",
          "de": "Ist die Form im gegebenen Kontext grammatisch und inhaltlich richtig?",
          "ar": "هل الصيغة صحيحة نحوياً ومناسبة للمرجع في السياق؟",
          "en": "Is the form grammatically correct and appropriate for its referent in context?"
        }
      },
      {
        "id": "kapitel-18-ubung-10-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez les formes selon les indications et le contexte.",
          "de": "Ergänzen Sie die Formen nach den Angaben und dem Kontext.",
          "ar": "أكمل الصيغ حسب التعليمات والسياق.",
          "en": "Complete the forms using the cues and context."
        },
        "sentence": "Frau Klein, ich habe ___ Vater gesehen. Ich habe mit ___ Vater gesprochen. (Vater von Frau Klein)",
        "blanks": 2
      }
    ]
  }
]

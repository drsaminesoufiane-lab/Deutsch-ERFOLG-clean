import type { ExerciseSetDefinition } from '@/lib/grammar/types'
export const meistertraining: ExerciseSetDefinition[] = [
  {
    "id": "kapitel-10-ubung-01",
    "category": "meistertraining",
    "position": 1,
    "title": {
      "fr": "Former des questions",
      "de": "Fragen schreiben",
      "ar": "تكوين الأسئلة",
      "en": "Form questions"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-01-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Heißen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Heißen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Heißen ».",
          "en": "Reorder the groups. Start with “Heißen”."
        },
        "tokens": [
          "Heißen",
          "Schmidt",
          "Sie",
          "?"
        ]
      },
      {
        "id": "kapitel-10-ubung-01-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Kommen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Kommen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Kommen ».",
          "en": "Reorder the groups. Start with “Kommen”."
        },
        "tokens": [
          "Südafrika",
          "?",
          "Kommen",
          "aus",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-01-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Sprechen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Sprechen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Sprechen ».",
          "en": "Reorder the groups. Start with “Sprechen”."
        },
        "tokens": [
          "?",
          "Englisch",
          "Sprechen",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-01-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Sind ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Sind“.",
          "ar": "رتّب المجموعات بدءاً بـ « Sind ».",
          "en": "Reorder the groups. Start with “Sind”."
        },
        "tokens": [
          "Sie",
          "Sind",
          "?",
          "verheiratet"
        ]
      },
      {
        "id": "kapitel-10-ubung-01-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Haben ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Haben“.",
          "ar": "رتّب المجموعات بدءاً بـ « Haben ».",
          "en": "Reorder the groups. Start with “Haben”."
        },
        "tokens": [
          "Sie",
          "?",
          "Haben",
          "Kinder"
        ]
      },
      {
        "id": "kapitel-10-ubung-01-div-6",
        "position": 6,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque contexte à la réponse appropriée.",
          "de": "Ordnen Sie jedem Kontext die passende Antwort zu.",
          "ar": "صل كل سياق بالإجابة المناسبة.",
          "en": "Match each context to the appropriate answer."
        },
        "items": [
          {
            "id": "i0",
            "label": "Ist der Drucker kaputt? – ___, er funktioniert nicht."
          },
          {
            "id": "i1",
            "label": "Hast du keinen Schlüssel? – ___, hier ist er."
          },
          {
            "id": "i2",
            "label": "Kannst du heute kommen? – ___, ich habe keine Zeit."
          }
        ],
        "options": [
          "Nein",
          "Ja",
          "Doch"
        ]
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-02",
    "category": "meistertraining",
    "position": 2,
    "title": {
      "fr": "Retrouver la question",
      "de": "Fragen zu Antworten",
      "ar": "السؤال المناسب",
      "en": "Questions for answers"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-02-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Sprechen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Sprechen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Sprechen ».",
          "en": "Reorder the groups. Start with “Sprechen”."
        },
        "tokens": [
          "?",
          "Sprechen",
          "Sie",
          "Französisch"
        ]
      },
      {
        "id": "kapitel-10-ubung-02-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Sind ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Sind“.",
          "ar": "رتّب المجموعات بدءاً بـ « Sind ».",
          "en": "Reorder the groups. Start with “Sind”."
        },
        "tokens": [
          "Sind",
          "Deutsche",
          "?",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-02-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Ist ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Ist“.",
          "ar": "رتّب المجموعات بدءاً بـ « Ist ».",
          "en": "Reorder the groups. Start with “Ist”."
        },
        "tokens": [
          "Ist",
          "von",
          "Beruf",
          "Lehrer",
          "?",
          "er"
        ]
      },
      {
        "id": "kapitel-10-ubung-02-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Wohnen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Wohnen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Wohnen ».",
          "en": "Reorder the groups. Start with “Wohnen”."
        },
        "tokens": [
          "lange",
          "hier",
          "Wohnen",
          "Sie",
          "schon",
          "?",
          "im",
          "Haus"
        ]
      },
      {
        "id": "kapitel-10-ubung-02-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Haben ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Haben“.",
          "ar": "رتّب المجموعات بدءاً بـ « Haben ».",
          "en": "Reorder the groups. Start with “Haben”."
        },
        "tokens": [
          "?",
          "sie",
          "Kinder",
          "Haben"
        ]
      },
      {
        "id": "kapitel-10-ubung-02-div-6",
        "position": 6,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les associations correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر جميع المطابقات الصحيحة.",
          "en": "Select all correct matches."
        },
        "selection": "multiple",
        "options": [
          "Ist die Rechnung schon bezahlt? – ___, das Geld fehlt noch. → Nein",
          "Fährt der Bus nicht mehr? – ___, er fährt noch. → Nein",
          "Fährt der Bus nicht mehr? – ___, er fährt noch. → Doch",
          "Sind die Fenster offen? – ___, beide sind offen. → Doch",
          "Ist die Rechnung schon bezahlt? – ___, das Geld fehlt noch. → Doch",
          "Sind die Fenster offen? – ___, beide sind offen. → Ja"
        ]
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-03",
    "category": "meistertraining",
    "position": 3,
    "title": {
      "fr": "Oui non si",
      "de": "Ja – nein – doch",
      "ar": "نعم لا بلى",
      "en": "Yes no actually yes"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-03-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Lernen Sie Deutsch? – ___, schon seit zwei Monaten.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-03-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Spielen Sie ein Musikinstrument? – ___, leider nicht.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-03-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Wohnen Sie nicht in Köln? – ___, schon seit drei Jahren.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-03-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Sind Sie Herr Maier? – ___, mein Name ist Westermann.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-03-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Kommen Sie nicht zur Party? – ___, aber später.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-03-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Gehen Sie gerne ins Kino? – ___, ich gehe lieber ins Theater.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-03-div-7",
        "position": 7,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase proposée respecte-t-elle la consigne ?",
          "de": "Entspricht der Vorschlag der Angabe?",
          "ar": "هل الجملة المقترحة توافق المطلوب؟",
          "en": "Does the proposed sentence satisfy the instruction?"
        },
        "statement": "Hat die Kollegin keinen Urlaub? – ___, sie hat nächste Woche frei. → Doch"
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-04",
    "category": "meistertraining",
    "position": 4,
    "title": {
      "fr": "Monsieur Waltermann",
      "de": "Herr Waltermann",
      "ar": "السيد فالترمان",
      "en": "Mr Waltermann"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-04-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Er hat Spanisch gelernt. Kann er kein Spanisch? – ___, er kann Spanisch.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-04-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Er wohnt in Frankfurt. Wohnt er in der Stadt? – ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-04-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Seine Verwandten wohnen bei München. Hat er keine Verwandten in Frankfurt? – ___, er hat dort keine.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-04-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Er arbeitet als Programmierer. Hat er keine Arbeit? – ___, er arbeitet.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-04-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Er kennt niemanden in Frankfurt. Kennt er viele Leute dort? – ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-04-q06",
        "position": 6,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Er kommt aus München. Kommt er aus München? – ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-04-q07",
        "position": 7,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Er ist seit zwei Monaten in Frankfurt. Ist er schon seit Jahren dort? – ___.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-04-div-8",
        "position": 8,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque contexte à la réponse appropriée.",
          "de": "Ordnen Sie jedem Kontext die passende Antwort zu.",
          "ar": "صل كل سياق بالإجابة المناسبة.",
          "en": "Match each context to the appropriate answer."
        },
        "items": [
          {
            "id": "i0",
            "label": "Müssen wir morgen arbeiten? – ___, morgen ist frei."
          },
          {
            "id": "i1",
            "label": "Ist das Zimmer frei? – ___, niemand wohnt dort."
          },
          {
            "id": "i2",
            "label": "Hast du die E-Mail nicht gelesen? – ___, ich habe sie gelesen."
          }
        ],
        "options": [
          "Nein",
          "Doch",
          "Ja"
        ]
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-05",
    "category": "meistertraining",
    "position": 5,
    "title": {
      "fr": "Demandes polies",
      "de": "Höfliche Bitten",
      "ar": "طلبات مهذبة",
      "en": "Polite requests"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-05-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Könnten ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Könnten“.",
          "ar": "رتّب المجموعات بدءاً بـ « Könnten ».",
          "en": "Reorder the groups. Start with “Könnten”."
        },
        "tokens": [
          "Sie",
          "geben",
          "bitte",
          "mir",
          "den",
          "?",
          "Könnten",
          "Zucker"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Würden ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Würden“.",
          "ar": "رتّب المجموعات بدءاً بـ « Würden ».",
          "en": "Reorder the groups. Start with “Würden”."
        },
        "tokens": [
          "Zucker",
          "geben",
          "mir",
          "Würden",
          "den",
          "Sie",
          "bitte",
          "?"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Könnten ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Könnten“.",
          "ar": "رتّب المجموعات بدءاً بـ « Könnten ».",
          "en": "Reorder the groups. Start with “Könnten”."
        },
        "tokens": [
          "bitte",
          "mir",
          "Bahnhof",
          "?",
          "Könnten",
          "zum",
          "Weg",
          "Sie",
          "sagen",
          "den"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Würden ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Würden“.",
          "ar": "رتّب المجموعات بدءاً بـ « Würden ».",
          "en": "Reorder the groups. Start with “Würden”."
        },
        "tokens": [
          "sagen",
          "bitte",
          "Weg",
          "Sie",
          "mir",
          "Würden",
          "zum",
          "Bahnhof",
          "?",
          "den"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q05",
        "position": 5,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Könnten ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Könnten“.",
          "ar": "رتّب المجموعات بدءاً بـ « Könnten ».",
          "en": "Reorder the groups. Start with “Könnten”."
        },
        "tokens": [
          "geben",
          "?",
          "Sie",
          "mir",
          "Stift",
          "bitte",
          "Könnten",
          "den"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q06",
        "position": 6,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Würden ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Würden“.",
          "ar": "رتّب المجموعات بدءاً بـ « Würden ».",
          "en": "Reorder the groups. Start with “Würden”."
        },
        "tokens": [
          "geben",
          "den",
          "Stift",
          "bitte",
          "?",
          "Sie",
          "mir",
          "Würden"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q07",
        "position": 7,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Könnten ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Könnten“.",
          "ar": "رتّب المجموعات بدءاً بـ « Könnten ».",
          "en": "Reorder the groups. Start with “Könnten”."
        },
        "tokens": [
          "bitte",
          "das",
          "leiser",
          "Radio",
          "machen",
          "?",
          "Könnten",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q08",
        "position": 8,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Würden ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Würden“.",
          "ar": "رتّب المجموعات بدءاً بـ « Würden ».",
          "en": "Reorder the groups. Start with “Würden”."
        },
        "tokens": [
          "das",
          "?",
          "leiser",
          "bitte",
          "Sie",
          "Radio",
          "Würden",
          "machen"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q09",
        "position": 9,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Könnten ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Könnten“.",
          "ar": "رتّب المجموعات بدءاً بـ « Könnten ».",
          "en": "Reorder the groups. Start with “Könnten”."
        },
        "tokens": [
          "?",
          "das",
          "geben",
          "mir",
          "Könnten",
          "bitte",
          "Sie",
          "Wörterbuch"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q10",
        "position": 10,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Würden ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Würden“.",
          "ar": "رتّب المجموعات بدءاً بـ « Würden ».",
          "en": "Reorder the groups. Start with “Würden”."
        },
        "tokens": [
          "?",
          "Würden",
          "bitte",
          "mir",
          "geben",
          "Wörterbuch",
          "das",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q11",
        "position": 11,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Könnten ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Könnten“.",
          "ar": "رتّب المجموعات بدءاً بـ « Könnten ».",
          "en": "Reorder the groups. Start with “Könnten”."
        },
        "tokens": [
          "bitte",
          "die",
          "Sie",
          "?",
          "Rechnung",
          "Könnten",
          "erklären",
          "mir"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-q12",
        "position": 12,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Würden ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Würden“.",
          "ar": "رتّب المجموعات بدءاً بـ « Würden ».",
          "en": "Reorder the groups. Start with “Würden”."
        },
        "tokens": [
          "Würden",
          "?",
          "Rechnung",
          "die",
          "bitte",
          "mir",
          "erklären",
          "Sie"
        ]
      },
      {
        "id": "kapitel-10-ubung-05-div-13",
        "position": 13,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les associations correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر جميع المطابقات الصحيحة.",
          "en": "Select all correct matches."
        },
        "selection": "multiple",
        "options": [
          "Wohnt ihr im Zentrum? – ___, wir wohnen außerhalb. → Ja",
          "Ist das Formular nicht fertig? – ___, es ist noch nicht fertig. → Doch",
          "Wohnt ihr im Zentrum? – ___, wir wohnen außerhalb. → Nein",
          "Sprechen Sie Italienisch? – ___, ich spreche fließend Italienisch. → Ja",
          "Ist das Formular nicht fertig? – ___, es ist noch nicht fertig. → Nein",
          "Sprechen Sie Italienisch? – ___, ich spreche fließend Italienisch. → Doch"
        ]
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-06",
    "category": "meistertraining",
    "position": 6,
    "title": {
      "fr": "Logement",
      "de": "Wohnung",
      "ar": "السكن",
      "en": "Housing"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-06-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Liegt Ihre Wohnung zentral? – ___, direkt in der Innenstadt.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-06-q02",
        "position": 2,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Suchen Sie eine neue Wohnung? – ___, unsere ist zu klein.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-06-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Ist Ihre Miete 650 Euro? – ___, sie beträgt 650 Euro.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-06-q04",
        "position": 4,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Wohnen Sie erst seit einem Monat hier? – ___, schon drei Jahre.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-06-q05",
        "position": 5,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Möchten Sie nicht auf dem Land wohnen? – ___, sehr gerne.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-06-div-6",
        "position": 6,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase proposée respecte-t-elle la consigne ?",
          "de": "Entspricht der Vorschlag der Angabe?",
          "ar": "هل الجملة المقترحة توافق المطلوب؟",
          "en": "Does the proposed sentence satisfy the instruction?"
        },
        "statement": "Kennt ihr den Weg nicht? – ___, wir kennen ihn sehr gut. → Ja"
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-07",
    "category": "meistertraining",
    "position": 7,
    "title": {
      "fr": "Negative Fragen",
      "de": "Negative Fragen",
      "ar": "Negative Fragen",
      "en": "Negative Fragen"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-07-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Hast du kein Auto? – ___, ich habe eins.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-07-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la réponse correcte selon le contexte. — Bist du nicht müde? – ___, ich bin nicht müde.",
          "de": "Wählen Sie die passende Antwort im Kontext. — Bist du nicht müde? – ___, ich bin nicht müde.",
          "ar": "اختر الإجابة المناسبة للسياق. — Bist du nicht müde? – ___, ich bin nicht müde.",
          "en": "Choose the correct answer in context. — Bist du nicht müde? – ___, ich bin nicht müde."
        },
        "selection": "single",
        "options": [
          "Nein",
          "Ja",
          "Doch"
        ]
      },
      {
        "id": "kapitel-10-ubung-07-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Kannst du nicht schwimmen? – ___, ich kann schwimmen.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-07-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la réponse correcte selon le contexte. — Arbeitest du nicht? – ___, ich arbeite heute nicht.",
          "de": "Wählen Sie die passende Antwort im Kontext. — Arbeitest du nicht? – ___, ich arbeite heute nicht.",
          "ar": "اختر الإجابة المناسبة للسياق. — Arbeitest du nicht? – ___, ich arbeite heute nicht.",
          "en": "Choose the correct answer in context. — Arbeitest du nicht? – ___, ich arbeite heute nicht."
        },
        "selection": "single",
        "options": [
          "Nein",
          "Ja",
          "Doch"
        ]
      },
      {
        "id": "kapitel-10-ubung-07-div-5",
        "position": 5,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque contexte à la réponse appropriée.",
          "de": "Ordnen Sie jedem Kontext die passende Antwort zu.",
          "ar": "صل كل سياق بالإجابة المناسبة.",
          "en": "Match each context to the appropriate answer."
        },
        "items": [
          {
            "id": "i0",
            "label": "Hat er eine Fahrkarte? – ___, er hat eine Monatskarte."
          },
          {
            "id": "i1",
            "label": "Ist das Paket für mich? – ___, es ist für deinen Bruder."
          },
          {
            "id": "i2",
            "label": "Kommt der Techniker nicht? – ___, er ist schon unterwegs."
          }
        ],
        "options": [
          "Nein",
          "Doch",
          "Ja"
        ]
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-08",
    "category": "meistertraining",
    "position": 8,
    "title": {
      "fr": "Mit Modalverben",
      "de": "Mit Modalverben",
      "ar": "Mit Modalverben",
      "en": "Mit Modalverben"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-08-q01",
        "position": 1,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Kannst ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Kannst“.",
          "ar": "رتّب المجموعات بدءاً بـ « Kannst ».",
          "en": "Reorder the groups. Start with “Kannst”."
        },
        "tokens": [
          "du",
          "Kannst",
          "morgen",
          "?",
          "kommen"
        ]
      },
      {
        "id": "kapitel-10-ubung-08-q02",
        "position": 2,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Müssen ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Müssen“.",
          "ar": "رتّب المجموعات بدءاً بـ « Müssen ».",
          "en": "Reorder the groups. Start with “Müssen”."
        },
        "tokens": [
          "arbeiten",
          "Müssen",
          "wir",
          "heute",
          "?"
        ]
      },
      {
        "id": "kapitel-10-ubung-08-q03",
        "position": 3,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Darf ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Darf“.",
          "ar": "رتّب المجموعات بدءاً بـ « Darf ».",
          "en": "Reorder the groups. Start with “Darf”."
        },
        "tokens": [
          "hier",
          "Darf",
          "parken",
          "ich",
          "?"
        ]
      },
      {
        "id": "kapitel-10-ubung-08-q04",
        "position": 4,
        "type": "reorder",
        "prompt": {
          "fr": "Remettez les groupes dans l’ordre. Commencez par « Willst ».",
          "de": "Ordnen Sie die Gruppen. Beginnen Sie mit „Willst“.",
          "ar": "رتّب المجموعات بدءاً بـ « Willst ».",
          "en": "Reorder the groups. Start with “Willst”."
        },
        "tokens": [
          "mitkommen",
          "?",
          "Willst",
          "du"
        ]
      },
      {
        "id": "kapitel-10-ubung-08-div-5",
        "position": 5,
        "type": "qcm",
        "prompt": {
          "fr": "Sélectionnez toutes les associations correctes.",
          "de": "Wählen Sie alle richtigen Zuordnungen.",
          "ar": "اختر جميع المطابقات الصحيحة.",
          "en": "Select all correct matches."
        },
        "selection": "multiple",
        "options": [
          "Hat sie kein Fahrrad? – ___, sie hat sogar zwei. → Ja",
          "Möchtest du keinen Tee? – ___, ich möchte keinen. → Doch",
          "Möchtest du keinen Tee? – ___, ich möchte keinen. → Nein",
          "Sind die Plätze reserviert? – ___, sie sind alle reserviert. → Ja",
          "Sind die Plätze reserviert? – ___, sie sind alle reserviert. → Doch",
          "Hat sie kein Fahrrad? – ___, sie hat sogar zwei. → Doch"
        ]
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-09",
    "category": "meistertraining",
    "position": 9,
    "title": {
      "fr": "Kurze Antworten",
      "de": "Kurze Antworten",
      "ar": "Kurze Antworten",
      "en": "Kurze Antworten"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-09-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Ist das dein Buch? – ___, das ist mein Buch.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-09-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la réponse correcte selon le contexte. — Hast du Zeit? – ___, leider nicht.",
          "de": "Wählen Sie die passende Antwort im Kontext. — Hast du Zeit? – ___, leider nicht.",
          "ar": "اختر الإجابة المناسبة للسياق. — Hast du Zeit? – ___, leider nicht.",
          "en": "Choose the correct answer in context. — Hast du Zeit? – ___, leider nicht."
        },
        "selection": "single",
        "options": [
          "Doch",
          "Ja",
          "Nein"
        ]
      },
      {
        "id": "kapitel-10-ubung-09-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Kommt er nicht? – ___, er kommt.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-09-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la réponse correcte selon le contexte. — Ist sie Ärztin? – ___, sie ist Lehrerin.",
          "de": "Wählen Sie die passende Antwort im Kontext. — Ist sie Ärztin? – ___, sie ist Lehrerin.",
          "ar": "اختر الإجابة المناسبة للسياق. — Ist sie Ärztin? – ___, sie ist Lehrerin.",
          "en": "Choose the correct answer in context. — Ist sie Ärztin? – ___, sie ist Lehrerin."
        },
        "selection": "single",
        "options": [
          "Ja",
          "Doch",
          "Nein"
        ]
      },
      {
        "id": "kapitel-10-ubung-09-div-5",
        "position": 5,
        "type": "true_false",
        "prompt": {
          "fr": "La phrase proposée respecte-t-elle la consigne ?",
          "de": "Entspricht der Vorschlag der Angabe?",
          "ar": "هل الجملة المقترحة توافق المطلوب؟",
          "en": "Does the proposed sentence satisfy the instruction?"
        },
        "statement": "Ist das Wasser warm? – ___, es ist kalt. → Nein"
      }
    ]
  },
  {
    "id": "kapitel-10-ubung-10",
    "category": "meistertraining",
    "position": 10,
    "title": {
      "fr": "Abschlusstest",
      "de": "Abschlusstest",
      "ar": "Abschlusstest",
      "en": "Abschlusstest"
    },
    "description": {
      "fr": "Entraînez les questions et réponses.",
      "de": "Üben Sie Fragen und Antworten.",
      "ar": "تدرب على الأسئلة والأجوبة.",
      "en": "Practise questions and answers."
    },
    "questions": [
      {
        "id": "kapitel-10-ubung-10-q01",
        "position": 1,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Kannst du Deutsch? – ___, ich kann Deutsch.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-10-q02",
        "position": 2,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la réponse correcte selon le contexte. — Hast du keine Kinder? – ___, ich habe zwei.",
          "de": "Wählen Sie die passende Antwort im Kontext. — Hast du keine Kinder? – ___, ich habe zwei.",
          "ar": "اختر الإجابة المناسبة للسياق. — Hast du keine Kinder? – ___, ich habe zwei.",
          "en": "Choose the correct answer in context. — Hast du keine Kinder? – ___, ich habe zwei."
        },
        "selection": "single",
        "options": [
          "Ja",
          "Doch",
          "Nein"
        ]
      },
      {
        "id": "kapitel-10-ubung-10-q03",
        "position": 3,
        "type": "fill_blank",
        "prompt": {
          "fr": "Complétez par Ja, Nein ou Doch.",
          "de": "Ergänzen Sie Ja, Nein oder Doch.",
          "ar": "أكمل بـ Ja أو Nein أو Doch.",
          "en": "Complete with Ja, Nein or Doch."
        },
        "sentence": "Wohnst du in Berlin? – ___, in Bonn.",
        "blanks": 1
      },
      {
        "id": "kapitel-10-ubung-10-q04",
        "position": 4,
        "type": "qcm",
        "prompt": {
          "fr": "Choisissez la réponse correcte selon le contexte. — Ist der Laden nicht offen? – ___, er ist offen.",
          "de": "Wählen Sie die passende Antwort im Kontext. — Ist der Laden nicht offen? – ___, er ist offen.",
          "ar": "اختر الإجابة المناسبة للسياق. — Ist der Laden nicht offen? – ___, er ist offen.",
          "en": "Choose the correct answer in context. — Ist der Laden nicht offen? – ___, er ist offen."
        },
        "selection": "single",
        "options": [
          "Ja",
          "Nein",
          "Doch"
        ]
      },
      {
        "id": "kapitel-10-ubung-10-div-5",
        "position": 5,
        "type": "matching",
        "prompt": {
          "fr": "Associez chaque contexte à la réponse appropriée.",
          "de": "Ordnen Sie jedem Kontext die passende Antwort zu.",
          "ar": "صل كل سياق بالإجابة المناسبة.",
          "en": "Match each context to the appropriate answer."
        },
        "items": [
          {
            "id": "i0",
            "label": "Haben Sie einen Ausweis? – ___, hier ist er."
          },
          {
            "id": "i1",
            "label": "Kann der Schüler nicht lesen? – ___, er liest sehr gut."
          },
          {
            "id": "i2",
            "label": "Ist der Laden geschlossen? – ___, er ist geöffnet."
          }
        ],
        "options": [
          "Nein",
          "Ja",
          "Doch"
        ]
      }
    ]
  }
]

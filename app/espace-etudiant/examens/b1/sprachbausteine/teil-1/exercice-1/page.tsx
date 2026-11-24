
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Languages,
  Eye,
  Trophy,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'

type Lang = 'fr' | 'ar' | 'en'

type Question = {
  id: number
  options: string[]
  correct: string
  explanation: Record<Lang, string>
}

const questions: Question[] = [
  {
    id: 1,
    options: ['arbeite', 'arbeiten', 'arbeiteten'],
    correct: 'arbeite',
    explanation: {
      fr: 'Avec ich, le verbe arbeiten au présent prend la terminaison -e : ich arbeite. La phrase parle d’une situation actuelle qui dure depuis deux mois.',
      ar: 'مع الضمير ich نصرّف الفعل arbeiten في المضارع هكذا: ich arbeite. الجملة تتحدث عن عمل حالي بدأ منذ شهرين.',
      en: 'With ich, the present tense of arbeiten takes the ending -e: ich arbeite. The sentence describes a current situation.',
    },
  },
  {
    id: 2,
    options: ['auf', 'bei', 'in'],
    correct: 'in',
    explanation: {
      fr: 'L’expression fixe est in der Nähe von = près de / à proximité de.',
      ar: 'التعبير الثابت هو in der Nähe von ويعني بالقرب من.',
      en: 'The fixed expression is in der Nähe von, meaning near or close to.',
    },
  },
  {
    id: 3,
    options: ['diesem', 'diesen', 'dieses'],
    correct: 'diesem',
    explanation: {
      fr: 'In indique ici un lieu où l’on se trouve. Il est donc suivi du datif. Haus est neutre : in diesem Haus.',
      ar: 'حرف الجر in هنا يدل على مكان ثابت، لذلك نستعمل Dativ. كلمة Haus محايدة: in diesem Haus.',
      en: 'Here, in describes a fixed location, so it takes the dative: in diesem Haus.',
    },
  },
  {
    id: 4,
    options: ['Kontakt', 'Kontakte', 'Kontakten'],
    correct: 'Kontakt',
    explanation: {
      fr: 'L’expression est enger Kontakt zu jemandem : un contact étroit avec quelqu’un. Kontakt est au singulier.',
      ar: 'التعبير هو enger Kontakt zu jemandem، أي تواصل وثيق مع شخص ما.',
      en: 'The expression is enger Kontakt zu jemandem, meaning close contact with someone.',
    },
  },
  {
    id: 5,
    options: ['besondere', 'besonderes', 'besonders'],
    correct: 'besonders',
    explanation: {
      fr: 'Besonders gern signifie particulièrement / très volontiers. Besonders est un adverbe.',
      ar: 'besonders gern تعني أحب ذلك بشكل خاص. كلمة besonders ظرف.',
      en: 'Besonders gern means particularly fond of something. Besonders is an adverb.',
    },
  },
  {
    id: 6,
    options: ['ihr', 'ihre', 'ihres'],
    correct: 'ihr',
    explanation: {
      fr: 'On dit ihr ganzes Leben. Leben est neutre et se trouve ici à l’accusatif. Le possessif est donc ihr.',
      ar: 'نقول ihr ganzes Leben. كلمة Leben محايدة وفي Akkusativ، لذلك نستعمل ihr.',
      en: 'The correct expression is ihr ganzes Leben. Leben is neuter and in the accusative here.',
    },
  },
  {
    id: 7,
    options: ['hart', 'harte', 'härter'],
    correct: 'hart',
    explanation: {
      fr: 'Hart arbeiten signifie travailler dur. Hart est ici un adverbe et ne prend pas de terminaison.',
      ar: 'التعبير hart arbeiten يعني العمل بجد. كلمة hart هنا ظرف.',
      en: 'Hart arbeiten means to work hard. Hart is used as an adverb.',
    },
  },
  {
    id: 8,
    options: ['daher', 'deshalb', 'weil'],
    correct: 'weil',
    explanation: {
      fr: 'Weil introduit une proposition subordonnée de cause. Le verbe conjugué se place à la fin.',
      ar: 'weil تستعمل للتعبير عن السبب وتُدخل جملة فرعية. الفعل المصرف يأتي في النهاية.',
      en: 'Weil introduces a subordinate clause expressing a reason. The conjugated verb goes to the end.',
    },
  },
  {
    id: 9,
    options: ['aber', 'als', 'wie'],
    correct: 'aber',
    explanation: {
      fr: 'Aber signifie mais. Il exprime ici une opposition.',
      ar: 'aber تعني لكن، وتستعمل هنا للتعبير عن التعارض.',
      en: 'Aber means but. It expresses a contrast.',
    },
  },
  {
    id: 10,
    options: ['bist', 'hast', 'wirst'],
    correct: 'hast',
    explanation: {
      fr: 'Le verbe erleben forme son Perfekt avec haben : du hast erlebt.',
      ar: 'الفعل erleben يُكوّن Perfekt باستعمال haben: du hast erlebt.',
      en: 'The verb erleben forms the perfect tense with haben: du hast erlebt.',
    },
  },
]

const translations = {
  fr: {
    back: 'Retour aux exercices',
    subtitle: 'B1 · Compréhension grammaticale',
    title: 'Alex und Cora',
    part: 'SPRACHBAUSTEINE · PARTIE 1',
    instruction: 'Complétez le texte en choisissant la bonne réponse pour chaque espace.',
    showTranslation: 'Afficher la traduction',
    hideTranslation: 'Masquer la traduction',
    questions: 'Questions',
    selected: 'réponses sélectionnées',
    validate: 'Valider mes réponses',
    result: 'Votre résultat',
    correct: 'Bonnes réponses',
    restart: 'Recommencer',
    explanation: 'Explication',
    correctAnswer: 'Bonne réponse',
    yourAnswer: 'Votre réponse',
    notAnswered: 'Non répondu',
    showExplanation: 'Voir l’explication',
    hideExplanation: 'Masquer l’explication',
    choose: 'Choisissez une réponse',
    progress: 'Progression',
    congratulations: 'Excellent travail !',
    keepGoing: 'Continuez vos efforts !',
    translatedText: 'Traduction française',
    correction: 'Correction et explications',
  },
  ar: {
    back: 'العودة إلى التمارين',
    subtitle: 'B1 · القواعد والفهم',
    title: 'Alex und Cora',
    part: 'القواعد · الجزء الأول',
    instruction: 'أكمل النص باختيار الإجابة الصحيحة لكل فراغ.',
    showTranslation: 'إظهار الترجمة',
    hideTranslation: 'إخفاء الترجمة',
    questions: 'الأسئلة',
    selected: 'إجابات مختارة',
    validate: 'تصحيح إجاباتي',
    result: 'نتيجتك',
    correct: 'الإجابات الصحيحة',
    restart: 'إعادة التمرين',
    explanation: 'الشرح',
    correctAnswer: 'الإجابة الصحيحة',
    yourAnswer: 'إجابتك',
    notAnswered: 'لم تتم الإجابة',
    showExplanation: 'إظهار الشرح',
    hideExplanation: 'إخفاء الشرح',
    choose: 'اختر إجابة',
    progress: 'التقدم',
    congratulations: 'عمل ممتاز!',
    keepGoing: 'واصل المحاولة!',
    translatedText: 'الترجمة العربية',
    correction: 'التصحيح والشرح',
  },
  en: {
    back: 'Back to exercises',
    subtitle: 'B1 · Grammar practice',
    title: 'Alex und Cora',
    part: 'SPRACHBAUSTEINE · PART 1',
    instruction: 'Complete the text by choosing the correct answer for each gap.',
    showTranslation: 'Show translation',
    hideTranslation: 'Hide translation',
    questions: 'Questions',
    selected: 'answers selected',
    validate: 'Check my answers',
    result: 'Your result',
    correct: 'Correct answers',
    restart: 'Try again',
    explanation: 'Explanation',
    correctAnswer: 'Correct answer',
    yourAnswer: 'Your answer',
    notAnswered: 'Not answered',
    showExplanation: 'Show explanation',
    hideExplanation: 'Hide explanation',
    choose: 'Choose an answer',
    progress: 'Progress',
    congratulations: 'Excellent work!',
    keepGoing: 'Keep practising!',
    translatedText: 'English translation',
    correction: 'Answers and explanations',
  },
}

const textTranslation: Record<Lang, string> = {
  fr: `Bonjour Isabelle,

Comment vas-tu ? As-tu réussi tes examens ?

Comme tu le sais, je travaille depuis deux mois dans une maison de retraite près de Schaffhouse. Le travail dans cette maison me plaît beaucoup, même s'il est parfois très stressant. Ce que j'apprécie particulièrement, c'est le lien étroit avec certaines personnes âgées.

J'aime particulièrement une femme, Anna Ringier. Elle a déjà 96 ans et est en fauteuil roulant, mais elle est toujours joyeuse. Hier, elle m'a raconté toute sa vie. Elle a travaillé dur jusqu'à l'âge de 84 ans. Dès l'âge de huit ans, elle devait travailler chez un agriculteur, parce que ses parents ne pouvaient pas nourrir leur famille de neuf personnes. Plus tard, Anna a travaillé comme couturière.

À côté de son travail, Anna n'a jamais renoncé à une chose : l'alpinisme ! Cela a toujours été sa grande passion. Cette femme est vraiment impressionnante !

Mais toi aussi, tu as certainement vécu beaucoup de choses. Je serais très heureuse si tu m'écrivais bientôt !

Affectueusement,
ta Julie`,

  ar: `مرحباً Isabelle،

كيف حالك؟ هل نجحت في امتحاناتك؟

كما تعلمين، أعمل منذ شهرين في دار لرعاية المسنين بالقرب من Schaffhausen. يعجبني العمل في هذه المؤسسة كثيراً، رغم أنه يكون مرهقاً أحياناً. وأكثر ما يعجبني هو العلاقة القوية التي تربطني ببعض المسنين.

أحب بشكل خاص امرأة اسمها Anna Ringier. عمرها 96 سنة وهي تستعمل كرسياً متحركاً، لكنها دائماً سعيدة. بالأمس حكت لي قصة حياتها كاملة. لقد عملت بجد حتى بلغت 84 سنة. ومنذ أن كانت في الثامنة من عمرها، كان عليها أن تعمل لدى أحد المزارعين، لأن والديها لم يكونا قادرين على إعالة أسرة مكونة من تسعة أفراد. وفيما بعد عملت Anna خياطة.

إلى جانب عملها، لم تتخل Anna أبداً عن شيء واحد: تسلق الجبال! فقد كان دائماً شغفها الكبير. إنها امرأة مثيرة للإعجاب حقاً!

أما أنتِ، فمن المؤكد أنك عشتِ أيضاً تجارب كثيرة. سأكون سعيدة جداً إذا كتبتِ لي قريباً!

مع أطيب التحيات،
Julie`,

  en: `Hello Isabelle,

How are you? Did you pass your exams?

As you know, I have been working in a retirement home near Schaffhausen for two months. I really enjoy working there, although it can sometimes be very stressful. What I particularly like is the close relationship with some of the elderly residents.

I especially like one woman, Anna Ringier. She is already 96 years old and uses a wheelchair, but she is always cheerful. Yesterday, she told me her entire life story. She worked hard until the age of 84. When she was only eight years old, she had to work for a farmer because her parents could not feed their family of nine. Later, Anna worked as a seamstress.

Besides her work, Anna never gave up one thing: mountaineering! It was always her great passion. This woman is truly impressive!

But you have surely experienced a lot too. I would be very happy if you wrote to me again soon!

Best wishes,
your Julie`,
}

export default function AlexUndCoraSprachbausteineTeil1() {
  const [language, setLanguage] = useState<Lang>('fr')
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [corrected, setCorrected] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({})

  const t = translations[language]
  const isRTL = language === 'ar'
  const answeredCount = Object.keys(answers).length
  const score = questions.filter(q => answers[q.id] === q.correct).length
  const allAnswered = answeredCount === questions.length

  const chooseAnswer = (id: number, answer: string) => {
    if (corrected) return
    setAnswers(prev => ({ ...prev, [id]: answer }))
  }

  const validate = () => {
    if (allAnswered) {
      setCorrected(true)
      setShowExplanations({})
    }
  }

  const resetExercise = () => {
    setAnswers({})
    setCorrected(false)
    setShowTranslation(false)
    setShowExplanations({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleExplanation = (id: number) => {
    setShowExplanations(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <main className="exercise-page" dir={isRTL ? 'rtl' : 'ltr'}>
      <style jsx global>{`
        * { box-sizing: border-box; }

        .exercise-page {
          min-height: 100vh;
          background: #f5f7fb;
          color: #17243b;
          padding: 28px 22px 60px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .exercise-container { max-width: 1180px; margin: 0 auto; }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .back-link:hover { color: #bd913e; }

        .hero {
          background: linear-gradient(120deg, #14243e, #243c5d);
          color: white;
          border-radius: 18px;
          padding: 28px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 22px;
          box-shadow: 0 10px 28px rgba(20,36,62,.12);
        }

        .hero-kicker {
          color: #e7c47d;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
        }

        .hero h1 {
          font-size: 27px;
          margin: 0 0 8px;
          font-weight: 800;
          color: #ffffff;
        }

        .hero p {
          margin: 0;
          color: #d3ddec;
          font-size: 13px;
        }

        .language-switch {
          display: flex;
          gap: 5px;
          padding: 5px;
          background: rgba(255,255,255,.12);
          border-radius: 10px;
          flex-shrink: 0;
        }

        .language-switch button {
          border: 0;
          border-radius: 7px;
          padding: 9px 12px;
          background: transparent;
          color: #e4eaf3;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
        }

        .language-switch button.active {
          background: #e6c17a;
          color: #17243b;
        }

        .instruction {
          background: white;
          border: 1px solid #e6eaf0;
          border-radius: 12px;
          padding: 17px 20px;
          margin-bottom: 20px;
          color: #526178;
          font-size: 14px;
          line-height: 1.7;
        }

        .layout {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(340px, .9fr);
          gap: 20px;
          align-items: start;
        }

        .panel {
          background: white;
          border: 1px solid #e6eaf0;
          border-radius: 15px;
          padding: 22px;
          box-shadow: 0 4px 16px rgba(20,36,62,.035);
          min-width: 0;
        }

        .panel-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .panel-heading h2 {
          font-size: 16px;
          margin: 0;
          font-weight: 800;
          color: #1c2b43;
        }

        .panel-tag {
          color: #a77b2d;
          background: #fbf5e9;
          border-radius: 20px;
          padding: 6px 10px;
          font-size: 10px;
          font-weight: 800;
        }

        .letter-text {
          color: #35445a;
          font-size: 14px;
          line-height: 2.15;
          white-space: normal;
          text-align: left;
        }

        .letter-text p { margin: 0 0 15px; }

        .letter-date {
          text-align: right;
          color: #77849a;
        }

        .letter-ending { padding-top: 4px; }

        .blank {
          display: inline-flex;
          vertical-align: middle;
          min-width: 86px;
          justify-content: center;
          align-items: center;
          margin: 2px 3px;
          border-bottom: 2px solid #d6a94f;
          padding: 0 5px;
          color: #9b742d;
          font-weight: 800;
          line-height: 1.5;
        }

        .blank.filled { color: #1d5d9c; border-color: #4d91ce; }

        .blank.right {
          color: #16804b;
          border-color: #22a06b;
          background: #effaf4;
          border-radius: 4px 4px 0 0;
        }

        .blank.wrong {
          color: #c03939;
          border-color: #d9534f;
          background: #fff3f2;
          border-radius: 4px 4px 0 0;
        }

        .translation-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #e6eaf0;
          background: #fafbfd;
          color: #43536b;
          border-radius: 9px;
          padding: 12px 14px;
          margin-top: 20px;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
        }

        .translation-content {
          margin-top: 18px;
          padding: 20px;
          background: #f8f9fc;
          border-radius: 10px;
          border-left: 3px solid #d6ad62;
          white-space: pre-line;
          color: #56647a;
          line-height: 1.9;
          font-size: 13px;
        }

        .translation-content p { margin: 0; }

        /* Zone des questions avec défilement indépendant */
        .question-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
          max-height: 680px;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 4px 8px 4px 2px;
          scrollbar-width: thin;
          scrollbar-color: #c5a66b #edf0f5;
        }

        .question-list::-webkit-scrollbar { width: 6px; }
        .question-list::-webkit-scrollbar-track {
          background: #edf0f5;
          border-radius: 10px;
        }
        .question-list::-webkit-scrollbar-thumb {
          background: #c5a66b;
          border-radius: 10px;
        }

        .question-card {
          border: 1px solid #e8ecf2;
          border-radius: 11px;
          padding: 14px;
          background: #fff;
          flex-shrink: 0;
        }

        .question-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 11px;
        }

        .question-number {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #293951;
          font-size: 13px;
          font-weight: 800;
        }

        .number-circle {
          width: 25px;
          height: 25px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background: #edf2f8;
          color: #304765;
          font-size: 11px;
        }

        .status-icon { color: #16965b; }

        .options {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 7px;
        }

        .option {
          border: 1px solid #e2e7ef;
          background: #fff;
          border-radius: 8px;
          min-height: 39px;
          padding: 8px 5px;
          color: #56647a;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          transition: .15s;
        }

        .option:hover:not(:disabled) {
          border-color: #c9a052;
          background: #fffcf6;
        }

        .option.selected {
          border: 1.5px solid #bd913e;
          background: #fbf5e9;
          color: #78561e;
        }

        .option.correct-option {
          border-color: #20a064;
          background: #effaf4;
          color: #167849;
        }

        .option.wrong-option {
          border-color: #d9534f;
          background: #fff2f1;
          color: #b83232;
        }

        .option:disabled { cursor: default; opacity: 1; }

        .question-feedback {
          margin-top: 10px;
          font-size: 12px;
          line-height: 1.6;
        }

        .feedback-correct {
          color: #16804b;
          font-weight: 700;
        }

        .feedback-wrong {
          color: #c03939;
          font-weight: 700;
        }

        .explanation-toggle {
          border: 0;
          background: transparent;
          color: #8b692e;
          padding: 10px 0 0;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .explanation-box {
          background: #f8f9fc;
          border-left: 3px solid #d6ad62;
          padding: 11px 13px;
          border-radius: 5px;
          margin-top: 9px;
          color: #536177;
          font-size: 12px;
          line-height: 1.8;
        }

        .progress-wrap { margin-bottom: 17px; }

        .progress-label {
          display: flex;
          justify-content: space-between;
          color: #718096;
          font-size: 11px;
          margin-bottom: 7px;
        }

        .progress-track {
          height: 6px;
          background: #edf0f5;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #c39a4e;
          border-radius: 10px;
          transition: width .2s;
        }

        .primary-button {
          width: 100%;
          border: 0;
          border-radius: 9px;
          padding: 14px;
          background: #1d3453;
          color: white;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          transition: .15s;
        }

        .primary-button:hover:not(:disabled) { background: #29496f; }
        .primary-button:disabled { opacity: .45; cursor: not-allowed; }

        .result-panel {
          margin: 20px 0;
          padding: 20px;
          border-radius: 13px;
          background: #f8f5ed;
          border: 1px solid #eadfc7;
          text-align: center;
        }

        .result-panel h3 {
          margin: 8px 0;
          font-size: 18px;
          color: #293951;
        }

        .result-score {
          font-size: 34px;
          color: #a47a32;
          font-weight: 900;
          margin: 8px 0;
        }

        .result-panel p {
          color: #6a7587;
          font-size: 12px;
          margin: 5px 0;
        }

        .restart-button {
          border: 1px solid #d7c69f;
          color: #795d2c;
          background: white;
          padding: 10px 15px;
          border-radius: 8px;
          margin-top: 12px;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          display: inline-flex;
          gap: 7px;
          align-items: center;
        }

        .section-label {
          color: #8b98aa;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          margin: 22px 0 12px;
        }

        @media (max-width: 850px) {
          .layout { grid-template-columns: 1fr; }
          .question-list { max-height: 620px; }
        }

        @media (max-width: 600px) {
          .exercise-page { padding: 17px 12px 40px; }
          .hero {
            padding: 22px 18px;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero h1 { font-size: 23px; }
          .panel { padding: 16px; }
          .options { grid-template-columns: 1fr; }
          .option { text-align: left; padding: 10px 12px; }
          .question-list { max-height: 600px; }
        }
      `}</style>

      <div className="exercise-container">
        <Link
          href="/espace-etudiant/examens/b1/sprachbausteine"
          className="back-link"
        >
          <ArrowLeft size={16} />
          {t.back}
        </Link>

        <header className="hero">
          <div>
            <div className="hero-kicker">B1 · SPRACHBAUSTEINE TEIL 1</div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </div>

          <div className="language-switch" dir="ltr">
            {(['fr', 'ar', 'en'] as Lang[]).map(lang => (
              <button
                key={lang}
                type="button"
                className={language === lang ? 'active' : ''}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="instruction">
          <strong>{t.part}</strong>
          <br />
          {t.instruction}
        </div>

        <div className="layout">
          <section className="panel">
            <div className="panel-heading">
              <h2>Alex und Cora</h2>
              <span className="panel-tag">B1</span>
            </div>

            <div className="letter-text" dir="ltr">
              <p className="letter-date">Schaffhausen, den...</p>
              <p>Hallo Isabelle,</p>
              <p>wie geht es dir? Hast du deine Prüfungen geschafft?</p>

              <p>
                Wie du ja weißt, <Blank answer={answers[1]} corrected={corrected} correct={questions[0].correct} /> ich seit zwei Monaten in einem Altersheim <Blank answer={answers[2]} corrected={corrected} correct={questions[1].correct} /> der Nähe von Schaffhausen. Die Arbeit in <Blank answer={answers[3]} corrected={corrected} correct={questions[2].correct} /> Haus gefällt mir gut, obwohl es manchmal auch sehr stressig ist. Besonders schön ist der enge <Blank answer={answers[4]} corrected={corrected} correct={questions[3].correct} /> zu einigen der alten Menschen. Eine Frau, Anna Ringier, mag ich <Blank answer={answers[5]} corrected={corrected} correct={questions[4].correct} /> gern. Sie ist schon 96 Jahre alt und sitzt im Rollstuhl, aber sie ist immer fröhlich. Gestern hat sie mir <Blank answer={answers[6]} corrected={corrected} correct={questions[5].correct} /> ganzes Leben erzählt. Sie hat bis zum 84. Lebensjahr <Blank answer={answers[7]} corrected={corrected} correct={questions[6].correct} /> gearbeitet. Schon als achtjähriges Mädchen musste sie bei einem Bauern arbeiten, <Blank answer={answers[8]} corrected={corrected} correct={questions[7].correct} /> ihre Eltern die neunköpfige Familie nicht ernähren konnten. Später arbeitete Anna als Schneiderin.
              </p>

              <p>
                Neben ihrer Arbeit hat Anna <Blank answer={answers[9]} corrected={corrected} correct={questions[8].correct} /> auf eine Sache nie verzichtet: das Bergsteigen! Das war immer ihre große Leidenschaft. Diese Frau ist wirklich sehr beeindruckend!
              </p>

              <p>
                Aber du <Blank answer={answers[10]} corrected={corrected} correct={questions[9].correct} /> bestimmt auch viel erlebt. Ich würde mich sehr freuen, wenn du mir bald wieder einmal schreibst!
              </p>

              <p className="letter-ending">
                Herzliche Grüße
                <br />
                deine Julie
              </p>
            </div>

            <button
              type="button"
              className="translation-toggle"
              onClick={() => setShowTranslation(!showTranslation)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Languages size={15} />
                {showTranslation ? t.hideTranslation : t.showTranslation}
              </span>

              {showTranslation
                ? <ChevronUp size={16} />
                : <ChevronDown size={16} />}
            </button>

            {showTranslation && (
              <div className="translation-content" dir={isRTL ? 'rtl' : 'ltr'}>
                <p>{textTranslation[language]}</p>
              </div>
            )}
          </section>

          <section className="panel">
            <div className="panel-heading">
              <h2>{t.questions}</h2>
              <span className="panel-tag">10 FRAGEN</span>
            </div>

            <div className="progress-wrap">
              <div className="progress-label">
                <span>{t.progress}</span>
                <strong>{answeredCount}/10</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${answeredCount * 10}%` }}
                />
              </div>
            </div>

            <div className="question-list">
              {questions.map(question => {
                const selected = answers[question.id]
                const isCorrect = selected === question.correct

                return (
                  <div className="question-card" key={question.id}>
                    <div className="question-top">
                      <div className="question-number">
                        <span className="number-circle">{question.id}</span>
                        {t.choose}
                      </div>

                      {corrected && (
                        <span className="status-icon">
                          {isCorrect
                            ? <CheckCircle2 size={17} />
                            : <span style={{ color: '#cf4c4c' }}>✕</span>}
                        </span>
                      )}
                    </div>

                    <div className="options">
                      {question.options.map(option => {
                        const isSelected = selected === option
                        const isCorrectOption = option === question.correct

                        let optionClass = 'option'

                        if (isSelected) optionClass += ' selected'
                        if (corrected && isCorrectOption) optionClass += ' correct-option'
                        if (corrected && isSelected && !isCorrectOption) optionClass += ' wrong-option'

                        return (
                          <button
                            type="button"
                            key={option}
                            className={optionClass}
                            disabled={corrected}
                            onClick={() => chooseAnswer(question.id, option)}
                          >
                            {option}
                          </button>
                        )
                      })}
                    </div>

                    {corrected && (
                      <>
                        <div className="question-feedback">
                          {isCorrect ? (
                            <span className="feedback-correct">
                              ✓ {t.correctAnswer} : {question.correct}
                            </span>
                          ) : (
                            <span className="feedback-wrong">
                              ✕ {t.yourAnswer} : {selected || t.notAnswered}
                              <br />
                              {t.correctAnswer} : {question.correct}
                            </span>
                          )}
                        </div>

                        <button
                          type="button"
                          className="explanation-toggle"
                          onClick={() => toggleExplanation(question.id)}
                        >
                          <BookOpen size={13} />
                          {showExplanations[question.id]
                            ? t.hideExplanation
                            : t.showExplanation}
                        </button>

                        {showExplanations[question.id] && (
                          <div className="explanation-box">
                            <strong>{t.explanation} :</strong>
                            <br />
                            {question.explanation[language]}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>

            {!corrected && (
              <button
                type="button"
                className="primary-button"
                disabled={!allAnswered}
                onClick={validate}
              >
                <CheckCircle2 size={17} />
                {t.validate}
              </button>
            )}

            {!corrected && (
              <p style={{
                fontSize: 11,
                color: '#8a96a8',
                textAlign: 'center',
                marginTop: 10,
              }}>
                {answeredCount}/10 · {t.selected}
              </p>
            )}

            {corrected && (
              <>
                <div className="result-panel">
                  <Trophy size={27} color="#b48b43" />
                  <h3>{t.result}</h3>
                  <div className="result-score">{score}/10</div>
                  <p>{t.correct} : {score} / 10</p>
                  <p>{score >= 8 ? t.congratulations : t.keepGoing}</p>

                  <button
                    type="button"
                    className="restart-button"
                    onClick={resetExercise}
                  >
                    <RotateCcw size={14} />
                    {t.restart}
                  </button>
                </div>

                <div className="section-label">
                  {t.correction.toUpperCase()}
                </div>

                <button
                  type="button"
                  className="primary-button"
                  onClick={() => {
                    const allVisible = questions.every(q => showExplanations[q.id])
                    const next: Record<number, boolean> = {}

                    questions.forEach(q => {
                      next[q.id] = !allVisible
                    })

                    setShowExplanations(next)
                  }}
                >
                  <Eye size={16} />
                  {questions.every(q => showExplanations[q.id])
                    ? t.hideExplanation
                    : t.showExplanation}
                </button>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

function Blank({
  answer,
  corrected,
  correct,
}: {
  answer?: string
  corrected: boolean
  correct: string
}) {
  let className = 'blank'

  if (answer) className += ' filled'
  if (corrected && answer === correct) className += ' right'
  if (corrected && answer !== correct) className += ' wrong'

  return (
    <span className={className}>
      {answer || '.............'}
    </span>
  )
}

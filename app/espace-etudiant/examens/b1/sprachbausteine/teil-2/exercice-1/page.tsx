
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
  MousePointerClick,
  X,
} from 'lucide-react'

type Lang = 'fr' | 'ar' | 'en'

type Word = {
  letter: string
  value: string
}

type Question = {
  id: number
  correct: string
  explanation: Record<Lang, string>
}

const words: Word[] = [
  { letter: 'A', value: 'an' },
  { letter: 'B', value: 'Bekannte' },
  { letter: 'C', value: 'bereits' },
  { letter: 'D', value: 'dafür' },
  { letter: 'E', value: 'darüber' },
  { letter: 'F', value: 'dass' },
  { letter: 'G', value: 'Familie' },
  { letter: 'H', value: 'kann' },
  { letter: 'I', value: 'mich' },
  { letter: 'J', value: 'mit' },
  { letter: 'K', value: 'muss' },
  { letter: 'L', value: 'ob' },
  { letter: 'M', value: 'sehr' },
  { letter: 'N', value: 'was' },
  { letter: 'O', value: 'welche' },
]

const questions: Question[] = [
  {
    id: 1,
    correct: 'mich',
    explanation: {
      fr: 'Le verbe sich informieren est un verbe pronominal. Avec ich, on utilise mich : ich informiere mich. La construction est sich über etwas informieren : se renseigner sur quelque chose.',
      ar: 'الفعل sich informieren فعل انعكاسي. مع ich نستعمل mich. نقول: ich informiere mich über etwas، أي أستفسر عن شيء ما.',
      en: 'Sich informieren is a reflexive verb. With ich, we use mich. The expression sich über etwas informieren means to get information about something.',
    },
  },
  {
    id: 2,
    correct: 'Bekannte',
    explanation: {
      fr: 'L’expression Freunde und Bekannte signifie « des amis et des connaissances ». Bekannte est ici un nom pluriel.',
      ar: 'التعبير Freunde und Bekannte يعني الأصدقاء والمعارف. كلمة Bekannte هنا اسم جمع.',
      en: 'Freunde und Bekannte means friends and acquaintances. Bekannte is used here as a plural noun.',
    },
  },
  {
    id: 3,
    correct: 'dafür',
    explanation: {
      fr: 'Dafür signifie ici « pour cela ». Il reprend l’idée précédente : organiser une fête avec beaucoup d’invités. On dit : Dafür wäre Ihr Hotel gut geeignet.',
      ar: 'Dafür تعني هنا «من أجل ذلك»، وهي تشير إلى تنظيم حفلة عيد الميلاد.',
      en: 'Dafür means «for that» here. It refers to the previously mentioned birthday celebration.',
    },
  },
  {
    id: 4,
    correct: 'an',
    explanation: {
      fr: 'On utilise an dans l’expression Fragen an jemanden : des questions adressées à quelqu’un. Ici : Fragen an Sie.',
      ar: 'نستعمل an في التعبير Fragen an jemanden، أي أسئلة موجهة إلى شخص ما.',
      en: 'The preposition an is used in Fragen an jemanden, meaning questions addressed to someone.',
    },
  },
  {
    id: 5,
    correct: 'welche',
    explanation: {
      fr: 'Welche signifie « quels / quelles ». Il accompagne le nom pluriel Gerichte : Welche Gerichte können Sie mir empfehlen?',
      ar: 'welche تعني «أيّ» أو «ما هي»، وتتعلق بالاسم الجمع Gerichte.',
      en: 'Welche means «which». It refers to the plural noun Gerichte.',
    },
  },
  {
    id: 6,
    correct: 'ob',
    explanation: {
      fr: 'Ob introduit une question indirecte qui exprime une interrogation avec « si ». La personne veut savoir s’il existe suffisamment de places de parking.',
      ar: 'ob تستعمل في السؤال غير المباشر بمعنى «هل». يريد الشخص معرفة ما إذا كانت هناك أماكن كافية لركن السيارات.',
      en: 'Ob introduces an indirect yes/no question, meaning «whether». The writer wants to know whether enough parking spaces are available.',
    },
  },
  {
    id: 7,
    correct: 'sehr',
    explanation: {
      fr: 'L’expression Es wäre sehr freundlich von Ihnen signifie « Ce serait très aimable de votre part ». Sehr renforce l’adjectif freundlich.',
      ar: 'التعبير Es wäre sehr freundlich von Ihnen يعني «سيكون ذلك لطيفاً جداً من جانبكم».',
      en: 'Es wäre sehr freundlich von Ihnen means «It would be very kind of you». Sehr modifies freundlich.',
    },
  },
  {
    id: 8,
    correct: 'kann',
    explanation: {
      fr: 'Können signifie pouvoir. Dans la proposition introduite par damit, le verbe conjugué se place à la fin : damit ich die Einladungen verschicken kann.',
      ar: 'können تعني يستطيع. في الجملة الفرعية التي تبدأ بـ damit يأتي الفعل المصرف في النهاية.',
      en: 'Können means can or be able to. In a subordinate clause introduced by damit, the conjugated verb goes at the end.',
    },
  },
  {
    id: 9,
    correct: 'mit',
    explanation: {
      fr: 'Mit signifie « avec ». La personne demande un prospectus accompagné d’un itinéraire détaillé : mit genauer Wegbeschreibung.',
      ar: 'mit تعني «مع». تطلب صاحبة الرسالة كتيباً للفندق مع وصف دقيق للطريق.',
      en: 'Mit means «with». The writer requests a hotel brochure with detailed directions.',
    },
  },
  {
    id: 10,
    correct: 'bereits',
    explanation: {
      fr: 'Bereits signifie « déjà ». Bereits ausgebucht signifie « déjà complet ». La personne demande si les salles sont déjà réservées pour le mois de mai.',
      ar: 'bereits تعني «بالفعل». bereits ausgebucht تعني محجوز بالكامل بالفعل.',
      en: 'Bereits means «already». Bereits ausgebucht means «already fully booked».',
    },
  },
]

const translations = {
  fr: {
    back: 'Retour aux exercices',
    subtitle: 'B1 · Compréhension grammaticale',
    part: 'SPRACHBAUSTEINE · PARTIE 2',
    instruction: 'Complétez le texte en choisissant 10 mots parmi les 15 propositions.',
    wordBank: 'WÖRTER · BANQUE DE MOTS',
    wordInstruction: 'Cliquez d’abord sur un espace dans le texte, puis choisissez un mot dans cette liste.',
    questions: 'Votre progression',
    selected: 'mots sélectionnés',
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
    progress: 'Progression',
    congratulations: 'Excellent travail !',
    keepGoing: 'Continuez vos efforts !',
    showTranslation: 'Afficher la traduction',
    hideTranslation: 'Masquer la traduction',
    correction: 'Correction et explications',
    chooseBlank: 'Choisissez un espace dans le texte',
    activeBlank: 'Espace sélectionné',
    used: 'Utilisé',
    available: 'Disponible',
    remaining: 'mots restants',
    remove: 'Retirer',
    chooseWord: 'Choisissez maintenant un mot dans la liste.',
  },
  ar: {
    back: 'العودة إلى التمارين',
    subtitle: 'B1 · القواعد والفهم',
    part: 'القواعد · الجزء الثاني',
    instruction: 'أكمل النص باختيار 10 كلمات من بين 15 اقتراحاً.',
    wordBank: 'الكلمات المقترحة',
    wordInstruction: 'اضغط أولاً على الفراغ في النص، ثم اختر كلمة من القائمة.',
    questions: 'تقدمك',
    selected: 'كلمات مختارة',
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
    progress: 'التقدم',
    congratulations: 'عمل ممتاز!',
    keepGoing: 'واصل المحاولة!',
    showTranslation: 'إظهار الترجمة',
    hideTranslation: 'إخفاء الترجمة',
    correction: 'التصحيح والشرح',
    chooseBlank: 'اختر فراغاً في النص',
    activeBlank: 'الفراغ المحدد',
    used: 'مستعملة',
    available: 'متاحة',
    remaining: 'كلمات متبقية',
    remove: 'حذف',
    chooseWord: 'اختر الآن كلمة من القائمة.',
  },
  en: {
    back: 'Back to exercises',
    subtitle: 'B1 · Grammar practice',
    part: 'SPRACHBAUSTEINE · PART 2',
    instruction: 'Complete the text by choosing 10 words from the 15 options.',
    wordBank: 'WÖRTER · WORD BANK',
    wordInstruction: 'First click on a gap in the text, then choose a word from this list.',
    questions: 'Your progress',
    selected: 'words selected',
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
    progress: 'Progress',
    congratulations: 'Excellent work!',
    keepGoing: 'Keep practising!',
    showTranslation: 'Show translation',
    hideTranslation: 'Hide translation',
    correction: 'Answers and explanations',
    chooseBlank: 'Choose a gap in the text',
    activeBlank: 'Selected gap',
    used: 'Used',
    available: 'Available',
    remaining: 'words remaining',
    remove: 'Remove',
    chooseWord: 'Now choose a word from the list.',
  },
}

const textTranslation: Record<Lang, string> = {
  fr: `Madame, Monsieur,

Après avoir lu votre annonce, je souhaiterais me renseigner plus précisément sur votre restaurant.

Dans un mois, je fête mes 30 ans et j'aimerais inviter à cette occasion beaucoup d'amis et de connaissances. Votre hôtel conviendrait certainement très bien pour cela.

J'aurais donc encore quelques questions à vous poser : je compte inviter environ 25 personnes. Quel est le prix de location de la salle adaptée et quels plats pouvez-vous me recommander ?

Comme presque tous les invités viendront en voiture, il serait également important de savoir s'il y a suffisamment de places de parking.

Ce serait très aimable de votre part si vous pouviez me répondre le plus rapidement possible afin que je puisse envoyer les invitations.

Veuillez m'envoyer une brochure de votre hôtel avec un itinéraire détaillé. Si vos salles sont déjà complètes pour le mois de mai, veuillez m'en informer immédiatement.

Cordialement,

Barbara Heuberger`,

  ar: `السيدات والسادة المحترمون،

بعد أن قرأت إعلانكم، أود الحصول على معلومات أكثر تفصيلاً حول مطعمكم.

بعد شهر سأحتفل بعيد ميلادي الثلاثين، وأرغب بهذه المناسبة في دعوة العديد من الأصدقاء والمعارف. ومن المؤكد أن فندقكم سيكون مناسباً جداً لهذا الغرض.

لذلك لدي بعض الأسئلة الإضافية لكم: أتوقع حضور حوالي 25 شخصاً. ما تكلفة استئجار القاعة المناسبة، وما الأطباق التي يمكنكم اقتراحها عليّ؟

وبما أن معظم الضيوف سيأتون بالسيارة، فمن المهم أيضاً معرفة ما إذا كانت هناك أماكن كافية لركن السيارات.

سيكون من اللطيف جداً من جانبكم أن تخبروني في أقرب وقت ممكن، حتى أتمكن من إرسال الدعوات.

يرجى إرسال كتيب عن فندقكم مع وصف دقيق للطريق. وإذا كانت قاعاتكم محجوزة بالكامل بالفعل خلال شهر مايو، فيرجى إبلاغي بذلك فوراً.

مع أطيب التحيات،

Barbara Heuberger`,

  en: `Dear Sir or Madam,

After reading your advertisement, I would like to find out more about your restaurant.

In one month, I will celebrate my 30th birthday and would like to invite many friends and acquaintances. Your hotel would certainly be very suitable for this occasion.

I therefore have a few more questions for you: I expect approximately 25 people. How much is the rent for the appropriate room, and which dishes can you recommend?

Since almost all the guests will arrive by car, it would also be important to know whether there are enough parking spaces.

It would be very kind of you if you could let me know as soon as possible so that I can send out the invitations.

Please send me a brochure of your hotel with detailed directions. If your rooms are already fully booked for the month of May, please let me know immediately.

Yours sincerely,

Barbara Heuberger`,
}

export default function AlexUndCoraSprachbausteineTeil2() {
  const [language, setLanguage] = useState<Lang>('fr')
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [activeBlank, setActiveBlank] = useState<number | null>(null)
  const [corrected, setCorrected] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({})
  const [showAllExplanations, setShowAllExplanations] = useState(false)

  const t = translations[language]
  const isRTL = language === 'ar'

  const answeredCount = Object.keys(answers).length
  const score = questions.filter(q => answers[q.id] === q.correct).length
  const allAnswered = answeredCount === 10

  const usedWords = Object.values(answers)

  const assignWord = (word: string) => {
    if (corrected || activeBlank === null) return

    setAnswers(prev => {
      const next = { ...prev }

      // Libérer l'ancien mot de cet espace
      delete next[activeBlank]

      // Empêcher de réutiliser un mot déjà utilisé ailleurs
      const alreadyUsed = Object.entries(next).some(
        ([, value]) => value === word
      )

      if (!alreadyUsed) {
        next[activeBlank] = word
      }

      return next
    })

    setActiveBlank(null)
  }

  const selectBlank = (id: number) => {
    if (corrected) return

    // Si l'espace contient déjà une réponse, on la retire pour permettre
    // de la remplacer par un autre mot.
    setAnswers(prev => {
      const next = { ...prev }
      delete next[id]
      return next
    })

    setActiveBlank(id)
  }

  const removeAnswer = (id: number) => {
    if (corrected) return

    setAnswers(prev => {
      const next = { ...prev }
      delete next[id]
      return next
    })

    setActiveBlank(id)
  }

  const validate = () => {
    if (allAnswered) {
      setCorrected(true)
      setActiveBlank(null)
    }
  }

  const resetExercise = () => {
    setAnswers({})
    setActiveBlank(null)
    setCorrected(false)
    setShowTranslation(false)
    setShowExplanations({})
    setShowAllExplanations(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleExplanation = (id: number) => {
    setShowExplanations(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const renderBlank = (id: number) => {
    const answer = answers[id]
    const question = questions[id - 1]
    const isCorrect = answer === question.correct

    let className = 'blank'

    if (answer) className += ' filled'
    if (activeBlank === id) className += ' active'
    if (corrected && isCorrect) className += ' right'
    if (corrected && !isCorrect) className += ' wrong'

    return (
      <button
        type="button"
        key={id}
        className={className}
        onClick={() => selectBlank(id)}
        disabled={corrected}
        aria-label={`Espace ${id}`}
      >
        <span className="blank-number">{id}</span>
        <span>{answer || '................'}</span>
        {corrected && (
          <span className="blank-status">
            {isCorrect ? '✓' : '✕'}
          </span>
        )}
      </button>
    )
  }

  return (
    <main className="exercise-page" dir={isRTL ? 'rtl' : 'ltr'}>
      <style jsx global>{`
        * { box-sizing: border-box; }

        .exercise-page {
          min-height: 100vh;
          background: #f7f5f0;
          color: #192b43;
          padding: 28px 22px 60px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .exercise-container {
          max-width: 1180px;
          margin: 0 auto;
        }

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
          background: #192b43;
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
          color: #e3cb96;
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
          color: #192b43;
        }

        .instruction {
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 12px;
          padding: 17px 20px;
          margin-bottom: 20px;
          color: #526178;
          font-size: 14px;
          line-height: 1.7;
        }

        .layout {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(310px, .8fr);
          gap: 20px;
          align-items: start;
        }

        .panel {
          background: white;
          border: 1px solid #e3ded3;
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
          background: #f1ece2;
          border-radius: 20px;
          padding: 6px 10px;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .letter-text {
          color: #35445a;
          font-size: 14px;
          line-height: 2.2;
          white-space: normal;
          text-align: left;
        }

        .letter-text p { margin: 0 0 17px; }

        .letter-ending { padding-top: 4px; }

        .blank {
          display: inline-flex;
          vertical-align: middle;
          align-items: center;
          justify-content: center;
          gap: 5px;
          min-width: 125px;
          min-height: 34px;
          margin: 3px 3px;
          border: 1px solid #dfc58f;
          border-bottom: 2px solid #c49b4d;
          border-radius: 6px;
          padding: 3px 7px;
          color: #9b742d;
          background: #fffdf8;
          font-family: inherit;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: .15s;
        }

        .blank:hover:not(:disabled) {
          background: #f1ece2;
          border-color: #bd913e;
        }

        .blank.active {
          background: #fff4d8;
          border: 2px solid #bd913e;
          box-shadow: 0 0 0 3px rgba(189,145,62,.12);
        }

        .blank.filled {
          color: #1d5d9c;
          border-color: #4d91ce;
          background: #f3f8fd;
        }

        .blank.right {
          color: #16804b;
          border-color: #22a06b;
          background: #effaf4;
        }

        .blank.wrong {
          color: #c03939;
          border-color: #d9534f;
          background: #fff3f2;
        }

        .blank:disabled { cursor: default; opacity: 1; }

        .blank-number {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 19px;
          height: 19px;
          border-radius: 5px;
          background: #e3ded3;
          color: #607087;
          font-size: 10px;
          flex-shrink: 0;
        }

        .blank-status { font-size: 14px; }

        .translation-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #e3ded3;
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
          background: #f7f5f0;
          border-radius: 10px;
          border-left: 3px solid #b49760;
          white-space: pre-line;
          color: #56647a;
          line-height: 1.9;
          font-size: 13px;
        }

        .translation-content p { margin: 0; }

        .word-instruction {
          color: #748197;
          font-size: 12px;
          line-height: 1.7;
          margin: -5px 0 16px;
        }

        .active-instruction {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff8e9;
          border: 1px solid #efdfbb;
          color: #896725;
          border-radius: 9px;
          padding: 11px 12px;
          margin-bottom: 15px;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.5;
        }

        .word-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .word-option {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 43px;
          padding: 8px 10px;
          border: 1px solid #e3ded3;
          border-radius: 9px;
          background: white;
          color: #43536b;
          font-size: 13px;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          transition: .15s;
        }

        .word-option:hover:not(:disabled) {
          border-color: #c9a052;
          background: #fffcf6;
        }

        .word-letter {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          border-radius: 7px;
          background: #edf2f8;
          color: #304765;
          font-size: 11px;
          font-weight: 900;
        }

        .word-option.used {
          background: #f0f2f5;
          color: #a0a8b5;
          border-color: #e5e8ed;
          cursor: not-allowed;
        }

        .word-option.used .word-letter {
          background: #dfe4eb;
          color: #7c8797;
        }

        .word-option:disabled { opacity: 1; }

        .word-used-label {
          margin-left: auto;
          font-size: 9px;
          color: #626a75;
          font-weight: 700;
        }

        .word-count {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 17px;
          padding-top: 14px;
          border-top: 1px solid #e3ded3;
          color: #7b8798;
          font-size: 11px;
        }

        .progress-wrap { margin: 18px 0; }

        .progress-label {
          display: flex;
          justify-content: space-between;
          color: #718096;
          font-size: 11px;
          margin-bottom: 7px;
        }

        .progress-track {
          height: 6px;
          background: #e3ded3;
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

        .explanation-card {
          border: 1px solid #e3ded3;
          border-radius: 10px;
          padding: 13px;
          margin-top: 11px;
          background: #fff;
        }

        .explanation-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 800;
          color: #30415a;
        }

        .explanation-result {
          margin-top: 8px;
          font-size: 11px;
          line-height: 1.7;
          color: #64748b;
        }

        .explanation-result.good { color: #16804b; }
        .explanation-result.bad { color: #c03939; }

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
          background: #f7f5f0;
          border-left: 3px solid #b49760;
          padding: 11px 13px;
          border-radius: 5px;
          margin-top: 9px;
          color: #536177;
          font-size: 12px;
          line-height: 1.8;
        }

        @media (max-width: 850px) {
          .layout { grid-template-columns: 1fr; }
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

          .word-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .blank {
            min-width: 110px;
            font-size: 12px;
          }
        }
      
        /* Deutsch Erfolg — Premium exams */
        .exercise-page { background: #f7f5f0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
        [dir="rtl"] .exercise-page, .exercise-page[dir="rtl"] { font-family: 'Tajawal', Arial, sans-serif; }
        .exercise-page .hero { background: #192b43; border: 1px solid #314359; border-radius: 12px; box-shadow: none; text-align: start; }
        .exercise-page .hero h1 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.025em; line-height: 1.24; overflow-wrap: anywhere; }
        [dir="rtl"] .exercise-page .hero h1, .exercise-page[dir="rtl"] .hero h1 { font-family: 'Tajawal', Arial, sans-serif; }
        .exercise-page a:focus-visible, .exercise-page button:focus-visible, .exercise-page select:focus-visible { outline: 2px solid #b49760; outline-offset: 3px; }
        .exercise-page .panel { border-radius: 10px; box-shadow: none; }
        @media (prefers-reduced-motion: reduce) {
          .exercise-page *, .exercise-page *::before, .exercise-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
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
            <div className="hero-kicker">B1 · SPRACHBAUSTEINE TEIL 2</div>
            <h1>Alex und Cora</h1>
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
              <span className="panel-tag">B1 · TEIL 2</span>
            </div>

            <div className="letter-text" dir="ltr">
              <p>Sehr geehrte Damen und Herren,</p>

              <p>
                nachdem ich Ihr Inserat gelesen habe, möchte ich{' '}
                {renderBlank(1)} gern genauer über Ihr Restaurant informieren.
              </p>

              <p>
                In einem Monat feiere ich meinen 30. Geburtstag und möchte dazu viele Freunde und{' '}
                {renderBlank(2)} einladen.{' '}
                {renderBlank(3)} wäre Ihr Hotel sicher sehr gut geeignet.
              </p>

              <p>
                Deshalb noch einige Fragen{' '}
                {renderBlank(4)} Sie: Ich rechne ungefähr mit 25 Personen. Wie hoch ist die Miete für den passenden Raum und{' '}
                {renderBlank(5)} Gerichte können Sie mir empfehlen?
              </p>

              <p>
                Da fast alle Gäste mit dem Auto kommen werden, wäre es auch wichtig,{' '}
                {renderBlank(6)} genügend Parkplätze vorhanden sind.
              </p>

              <p>
                Es wäre{' '}
                {renderBlank(7)} freundlich von Ihnen, wenn Sie mir möglichst bald Bescheid geben könnten, damit ich die Einladungen verschicken{' '}
                {renderBlank(8)}.
              </p>

              <p>
                Bitte senden Sie mir einen Prospekt Ihres Hotels{' '}
                {renderBlank(9)} genauer Wegbeschreibung.
              </p>

              <p>
                Sollten Ihre Räume für den Monat Mai{' '}
                {renderBlank(10)} ausgebucht sein, geben Sie mir bitte umgehend Bescheid.
              </p>

              <p className="letter-ending">
                Mit freundlichen Grüßen
                <br />
                Barbara Heuberger
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
              <h2>{t.wordBank}</h2>
              <span className="panel-tag">15 WÖRTER</span>
            </div>

            <p className="word-instruction">{t.wordInstruction}</p>

            {!corrected && (
              <div className="active-instruction">
                <MousePointerClick size={17} />
                {activeBlank !== null
                  ? `${t.activeBlank} : ${activeBlank} — ${t.chooseWord}`
                  : t.chooseBlank}
              </div>
            )}

            <div className="word-grid">
              {words.map(word => {
                const isUsed = usedWords.includes(word.value)

                return (
                  <button
                    key={word.letter}
                    type="button"
                    className={`word-option ${isUsed ? 'used' : ''}`}
                    disabled={corrected || isUsed || activeBlank === null}
                    onClick={() => assignWord(word.value)}
                    title={isUsed ? t.used : t.available}
                  >
                    <span className="word-letter">{word.letter}</span>
                    <span>{word.value}</span>
                    {isUsed && (
                      <span className="word-used-label">✓</span>
                    )}
                  </button>
                )
              })}
            </div>

            <div className="word-count">
              <span>{usedWords.length}/10 {t.selected}</span>
              <span>{15 - usedWords.length} {t.remaining}</span>
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

                {questions.map(question => {
                  const selected = answers[question.id]
                  const isCorrect = selected === question.correct
                  const showExplanation =
                    showAllExplanations || showExplanations[question.id]

                  return (
                    <div className="explanation-card" key={question.id}>
                      <div className="explanation-card-top">
                        <span>{t.questions} {question.id}</span>
                        <span style={{ color: isCorrect ? '#16804b' : '#c03939' }}>
                          {isCorrect ? '✓' : '✕'}
                        </span>
                      </div>

                      <div className={`explanation-result ${isCorrect ? 'good' : 'bad'}`}>
                        {t.yourAnswer} : {selected || t.notAnswered}
                        <br />
                        {t.correctAnswer} : {question.correct}
                      </div>

                      <button
                        type="button"
                        className="explanation-toggle"
                        onClick={() => toggleExplanation(question.id)}
                      >
                        <BookOpen size={13} />
                        {showExplanation ? t.hideExplanation : t.showExplanation}
                      </button>

                      {showExplanation && (
                        <div className="explanation-box">
                          {question.explanation[language]}
                        </div>
                      )}
                    </div>
                  )
                })}

                <button
                  type="button"
                  className="primary-button"
                  onClick={() => {
                    const next = !showAllExplanations
                    setShowAllExplanations(next)

                    const newState: Record<number, boolean> = {}
                    questions.forEach(q => {
                      newState[q.id] = next
                    })
                    setShowExplanations(newState)
                  }}
                >
                  <Eye size={16} />
                  {showAllExplanations
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

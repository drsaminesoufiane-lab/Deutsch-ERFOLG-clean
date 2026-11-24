
'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Languages,
  Eye,
  EyeOff
} from 'lucide-react'

type Lang = 'fr' | 'ar' | 'en'
type Translation = Record<Lang, string>

const languages: { id: Lang; flag: string; label: string }[] = [
  { id: 'fr', flag: '🇫🇷', label: 'Français' },
  { id: 'ar', flag: '🇲🇦', label: 'العربية' },
  { id: 'en', flag: '🇬🇧', label: 'English' }
]


const paragraphs: {
  de: string
  translation: Translation
  explanation: Translation
}[] = [
  {
    de: 'Caroline. Anne und Melanie (beide sechs Jahre alt) stehen den Erzieherinnen mit Vorschlägen hilfreich zur Seite. Von Christiane Altenberger. Sie sind die Problemlöser im Kindergarten an der Munckerstraße. Wenn das Malprogramm spinnt oder plötzlich ein Spiel auftaucht, das keiner kennt, dann rufen die Erzieherinnen nach Anne und Melanie. Die beiden sind zwar erst sechs Jahre alt, aber mit Computerspielen kennen sie sich aus. „Die Kinder wissen manchmal mehr als wir“, sagt Eva Schilling, Leiterin des Kindergartens. Gelernt haben die beiden ihr Know-how bei „Multimedia-Landschaften für Kinder“, einem Projekt, das das Schulamt zusammen mit dem Studio im Netz gestartet hat.',
    translation: {
      fr: 'Anne et Melanie, qui ont toutes les deux six ans, aident les éducatrices en leur proposant des solutions. Elles sont les spécialistes qui résolvent les problèmes informatiques dans le jardin d’enfants de la rue Muncker. Lorsque le logiciel de dessin ne fonctionne pas ou qu’un jeu inconnu apparaît, les éducatrices appellent Anne et Melanie. Elles n’ont que six ans, mais elles s’y connaissent en jeux informatiques. « Les enfants en savent parfois plus que nous », explique Eva Schilling, directrice du jardin d’enfants. Les deux filles ont acquis leurs connaissances grâce au projet « Paysages multimédias pour les enfants », lancé par le service scolaire avec le Studio im Netz.',
      ar: 'تساعد آنّ وميلاني، وكلتاهما في السادسة من العمر، المربيات من خلال تقديم اقتراحات مفيدة. إنهما تحلان المشكلات في روضة الأطفال بشارع مونكر. فعندما يتعطل برنامج الرسم أو تظهر لعبة لا يعرفها أحد، تنادي المربيات آنّ وميلاني. ورغم أن عمرهما ست سنوات فقط، فإنهما تعرفان الكثير عن ألعاب الكمبيوتر. وتقول إيفا شيلينغ، مديرة الروضة: «الأطفال يعرفون أحيانًا أكثر منا». وقد اكتسبت الطفلتان خبرتهما من مشروع «عوالم الوسائط المتعددة للأطفال»، الذي أطلقه مكتب التعليم بالتعاون مع استوديو الشبكة.',
      en: 'Anne and Melanie, both six years old, help the kindergarten teachers with useful suggestions. They are the problem-solvers at the kindergarten on Munckerstraße. When the drawing program does not work or an unfamiliar game appears, the teachers call Anne and Melanie. Although they are only six, they know a lot about computer games. “Children sometimes know more than we do,” says kindergarten director Eva Schilling. The girls learned their skills through “Multimedia Landscapes for Children,” a project launched by the school authority together with Studio im Netz.'
    },
    explanation: {
      fr: 'Le texte présente deux fillettes de six ans qui aident les éducatrices lorsqu’elles rencontrent des problèmes avec les ordinateurs. Elles ont acquis leurs compétences grâce à un projet multimédia destiné aux enfants.',
      ar: 'يعرض النص طفلتين تبلغان ست سنوات وتساعدان المربيات عند مواجهة مشكلات الكمبيوتر. وقد اكتسبتا مهاراتهما من خلال مشروع متعدد الوسائط مخصص للأطفال.',
      en: 'The text introduces two six-year-old girls who help the teachers when they have computer problems. They gained their skills through a multimedia project for children.'
    }
  },
  {
    de: 'Im Rahmen dieses Projekts werden in städtischen Kindergärten zwei Wanderstationen mit je drei Multimedia-Computern und einem Farbdrucker installiert. Die Stationen wandern durch 14 Kindergärten, wo sie jeweils für vier Wochen installiert werden. Mit dabei in den Kindergärten: ein ganzer Satz von Spiel-Software. Vierjährige am Computer? In Pädagogenkreisen sind viele Berührungsängste da, weiß Edith Ilg, Fachberaterin für Kindergärten beim Schulamt. „Aber wir können uns aus dieser Entwicklung nicht ausklinken. Die Kinder wollen sich mit ihrer Umwelt auseinandersetzen.“ Angefangen hat diese Auseinandersetzung im Studio im Netz – 193 Kinder waren eingeladen, um erste Erfahrungen am Computer zu sammeln. „Die Kinder waren absolut begeistert, haben immer wieder gefragt: Wann gehen wir da wieder hin?“, so Frau Ilg.',
    translation: {
      fr: 'Dans le cadre de ce projet, deux stations mobiles équipées chacune de trois ordinateurs multimédias et d’une imprimante couleur sont installées dans les jardins d’enfants municipaux. Elles passent dans 14 établissements et restent quatre semaines dans chacun. Les jardins d’enfants disposent également de nombreux logiciels de jeux. Des enfants de quatre ans devant un ordinateur ? Dans les milieux pédagogiques, beaucoup de personnes ont des réserves, explique Edith Ilg, conseillère spécialisée du service scolaire. « Mais nous ne pouvons pas nous tenir à l’écart de cette évolution. Les enfants veulent découvrir leur environnement. » Cette découverte a commencé au Studio im Netz, où 193 enfants ont été invités à faire leurs premières expériences avec un ordinateur. Selon Mme Ilg, les enfants étaient très enthousiastes et demandaient sans cesse quand ils pourraient y retourner.',
      ar: 'في إطار هذا المشروع، يتم تركيب محطتين متنقلتين في رياض الأطفال البلدية، وتضم كل محطة ثلاثة أجهزة كمبيوتر متعددة الوسائط وطابعة ملونة. وتتنقل المحطتان بين 14 روضة، حيث تبقى كل واحدة منهما أربعة أسابيع. كما تتوفر في رياض الأطفال مجموعة كاملة من برامج الألعاب. ويرى بعض العاملين في التربية أن استخدام أطفال في الرابعة للكمبيوتر أمر يثير القلق. لكن إديث إيلغ، المستشارة المتخصصة في رياض الأطفال لدى مكتب التعليم، تقول إنه لا يمكننا الابتعاد عن هذا التطور، لأن الأطفال يريدون التعرف على العالم المحيط بهم. وقد بدأت التجربة في استوديو الشبكة، حيث دُعي 193 طفلًا لاكتساب خبراتهم الأولى مع الكمبيوتر. وكان الأطفال متحمسين جدًا ويسألون باستمرار متى سيعودون إلى هناك.',
      en: 'As part of the project, two mobile stations, each with three multimedia computers and a colour printer, are installed in municipal kindergartens. They travel to 14 kindergartens and stay for four weeks at each one. The kindergartens also receive a collection of game software. Some educators have reservations about four-year-olds using computers, explains Edith Ilg, a kindergarten adviser at the school authority. But she says they cannot ignore this development because children want to engage with their environment. The experience began at Studio im Netz, where 193 children were invited to try computers for the first time. The children were very enthusiastic and kept asking when they could go back.'
    },
    explanation: {
      fr: 'Le projet installe des ordinateurs dans les jardins d’enfants. Les stations mobiles passent dans 14 établissements. Une première expérience menée avec 193 enfants a rencontré un grand succès : les enfants étaient très enthousiastes.',
      ar: 'يهدف المشروع إلى وضع أجهزة كمبيوتر في رياض الأطفال. وتتنقل المحطات بين 14 روضة. وقد حققت التجربة الأولى مع 193 طفلًا نجاحًا كبيرًا، إذ كان الأطفال متحمسين للغاية.',
      en: 'The project places computers in kindergartens. The mobile stations visit 14 establishments. An initial trial with 193 children was very successful: the children were enthusiastic.'
    }
  },
  {
    de: 'Bevor jedoch die Computer in die Kindergärten kamen, waren die Eltern aufzuklären. Bei manchen Eltern löste das Stichwort Computer akute Ängste aus, nach dem Motto: „Mein fröhliches, gesundes Kind setzt sich vor den Computer und steht sechs Stunden später krank, sprachlos und einsam wieder auf.“',
    translation: {
      fr: 'Cependant, avant l’arrivée des ordinateurs dans les jardins d’enfants, il a fallu informer les parents. Chez certains parents, le simple mot « ordinateur » provoquait de fortes inquiétudes. Ils imaginaient que leur enfant joyeux et en bonne santé s’asseyait devant l’ordinateur et se relevait six heures plus tard malade, sans parler et isolé.',
      ar: 'لكن قبل إدخال أجهزة الكمبيوتر إلى رياض الأطفال، كان من الضروري توعية الآباء. فقد أثارت كلمة «كمبيوتر» مخاوف شديدة لدى بعضهم، إذ كانوا يتخيلون أن طفلهم السعيد والسليم سيجلس أمام الكمبيوتر ثم ينهض بعد ست ساعات مريضًا، لا يتكلم ووحيدًا.',
      en: 'Before the computers were brought into the kindergartens, parents had to be informed. The word “computer” caused serious fears among some parents. They imagined their happy, healthy child sitting in front of a computer and getting up six hours later sick, silent and lonely.'
    },
    explanation: {
      fr: 'Certains parents craignaient que l’ordinateur ait des conséquences négatives sur la santé et le comportement de leurs enfants, notamment s’ils y passaient trop de temps.',
      ar: 'كان بعض الآباء يخشون أن يؤثر الكمبيوتر سلبًا في صحة أطفالهم وسلوكهم، خاصة إذا قضوا وقتًا طويلًا أمامه.',
      en: 'Some parents feared that computers would negatively affect their children’s health and behaviour, especially if they spent too much time in front of them.'
    }
  },
  {
    de: 'Diese Ängste haben sich inzwischen gelegt und die Erfahrung vor Ort zeigt, dass sie weitgehend überflüssig sind. Die Erzieherinnen achten auch darauf, dass die Kinder nie länger als 15 bis 20 Minuten vor den Computern sitzen, und holen vor allem kreative Software auf den Bildschirm.',
    translation: {
      fr: 'Entre-temps, ces craintes se sont apaisées et l’expérience sur place montre qu’elles étaient en grande partie inutiles. Les éducatrices veillent également à ce que les enfants ne restent jamais plus de 15 à 20 minutes devant les ordinateurs et privilégient surtout les logiciels créatifs.',
      ar: 'لقد تلاشت هذه المخاوف مع مرور الوقت، وأظهرت التجربة الميدانية أنها كانت في معظمها غير مبررة. كما تحرص المربيات على ألا يجلس الأطفال أمام الكمبيوتر أكثر من 15 إلى 20 دقيقة، ويستخدمن خصوصًا البرامج الإبداعية.',
      en: 'These fears have since subsided, and practical experience shows that they were largely unnecessary. The teachers also make sure that children never sit at the computers for more than 15 to 20 minutes, and they mainly use creative software.'
    },
    explanation: {
      fr: 'Les éducatrices encadrent l’utilisation des ordinateurs : les enfants ne restent pas plus de 15 à 20 minutes devant l’écran. Elles choisissent également des logiciels créatifs adaptés.',
      ar: 'تنظم المربيات استخدام الكمبيوتر؛ فلا يجلس الأطفال أمام الشاشة أكثر من 15 إلى 20 دقيقة. كما يخترن برامج إبداعية مناسبة لهم.',
      en: 'The teachers supervise computer use: children spend no more than 15 to 20 minutes in front of the screen. They also choose suitable creative software.'
    }
  },
  {
    de: 'Das einsame Dämmern vor dem Computer ist wohl ohnehin eher Sache der Erwachsenen – die Kinder spielen immer zu zweit oder zu dritt an der Maschine. Eva Schilling hat beobachtet, dass die Kinder am Computer sehr friedlich miteinander umgehen. Sie helfen sich gegenseitig, es gibt wenig Konflikte. Dabei entwickeln gerade Kinder, die sich sonst nur schwer auf etwas konzentrieren können, plötzlich ungeahnte Konzentrationszeiten. Eva Schilling kann sich deshalb die Computer als Dauereinrichtung im Kindergarten vorstellen.',
    translation: {
      fr: 'Rester seul devant un ordinateur semble plutôt être une habitude d’adultes : les enfants, eux, jouent toujours à deux ou à trois devant la machine. Eva Schilling a observé qu’ils se comportent très calmement les uns avec les autres. Ils s’entraident et il y a peu de conflits. Même les enfants qui ont habituellement du mal à se concentrer parviennent soudain à rester concentrés beaucoup plus longtemps. C’est pourquoi Eva Schilling peut imaginer que les ordinateurs deviennent une installation permanente dans le jardin d’enfants.',
      ar: 'إن الجلوس وحيدًا أمام الكمبيوتر يبدو سلوكًا خاصًا بالكبار؛ أما الأطفال فيلعبون دائمًا اثنين أو ثلاثة أمام الجهاز. وقد لاحظت إيفا شيلينغ أنهم يتعاملون مع بعضهم بهدوء شديد أثناء استخدام الكمبيوتر، ويساعد بعضهم بعضًا، كما أن الخلافات قليلة. وحتى الأطفال الذين يجدون صعوبة عادة في التركيز يستطيعون فجأة التركيز لفترات أطول مما كان متوقعًا. لذلك ترى إيفا شيلينغ أن أجهزة الكمبيوتر يمكن أن تصبح جزءًا دائمًا من الروضة.',
      en: 'Sitting alone in front of a computer seems to be more typical of adults; children always use the machine in pairs or groups of three. Eva Schilling has observed that they interact peacefully. They help one another and there are few conflicts. Even children who usually find it difficult to concentrate suddenly manage to focus for unexpectedly long periods. Eva Schilling can therefore imagine computers becoming a permanent feature of the kindergarten.'
    },
    explanation: {
      fr: 'Les enfants utilisent les ordinateurs ensemble, s’entraident et se disputent rarement. Cette activité favorise même la concentration de certains enfants. La directrice envisage donc de garder les ordinateurs durablement dans le jardin d’enfants.',
      ar: 'يستخدم الأطفال الكمبيوتر معًا، ويساعد بعضهم بعضًا، ونادرًا ما يتشاجرون. كما يساعدهم هذا النشاط على تحسين التركيز. لذلك تفكر مديرة الروضة في الإبقاء على أجهزة الكمبيوتر بشكل دائم.',
      en: 'Children use computers together, help each other and rarely argue. The activity can even improve concentration. The kindergarten director is therefore considering keeping the computers permanently.'
    }
  }
]

const questions = [
  {
    de: 'Das Schulamt hat ein Projekt gestartet, bei dem …',
    fr: 'Le service scolaire a lancé un projet dans le cadre duquel …',
    ar: 'أطلق مكتب التعليم مشروعًا يتم فيه ...',
    en: 'The school authority has launched a project in which …',
    options: [
      { de: 'Computer in Kindergärten aufgestellt werden.', fr: 'des ordinateurs sont installés dans les jardins d’enfants.', ar: 'يتم وضع أجهزة كمبيوتر في رياض الأطفال.', en: 'computers are installed in kindergartens.' },
      { de: 'Computerspiele für Vierjährige entwickelt werden sollen.', fr: 'des jeux informatiques doivent être développés pour les enfants de quatre ans.', ar: 'يتم تطوير ألعاب كمبيوتر للأطفال في سن الرابعة.', en: 'computer games are to be developed for four-year-olds.' },
      { de: 'Kinder neue Farbdrucker ausprobieren sollen.', fr: 'les enfants doivent essayer de nouvelles imprimantes couleur.', ar: 'يُطلب من الأطفال تجربة طابعات ملونة جديدة.', en: 'children are supposed to try new colour printers.' }
    ],
    answer: 0,
    explanation: 'Le projet prévoit l’installation de stations mobiles équipées d’ordinateurs dans 14 jardins d’enfants. Il ne s’agit pas principalement de développer des jeux ni de faire tester des imprimantes aux enfants.',
    evidence: 'In städtischen Kindergärten [werden] zwei Wanderstationen mit je drei Multimedia-Computern und einem Farbdrucker installiert.',
    evidenceFr: 'Dans les jardins d’enfants municipaux, deux stations mobiles équipées chacune de trois ordinateurs multimédias et d’une imprimante couleur sont installées.'
  },
  {
    de: 'Die Kinder …',
    fr: 'Les enfants …',
    ar: 'الأطفال ...',
    en: 'The children …',
    options: [
      { de: 'hatten großen Spaß bei dem Projekt.', fr: 'ont beaucoup apprécié le projet.', ar: 'استمتعوا كثيرًا بالمشروع.', en: 'had a lot of fun with the project.' },
      { de: 'wollten lieber draußen im Freien spielen.', fr: 'préféraient jouer dehors.', ar: 'فضلوا اللعب في الخارج.', en: 'preferred to play outside.' },
      { de: 'wussten nicht, wann sie ins Studio im Netz gehen sollten.', fr: 'ne savaient pas quand ils devaient aller au Studio im Netz.', ar: 'لم يعرفوا متى ينبغي لهم الذهاب إلى استوديو الشبكة.', en: 'did not know when they should go to Studio im Netz.' }
    ],
    answer: 0,
    explanation: 'Les enfants étaient très enthousiastes et demandaient régulièrement quand ils pourraient retourner au Studio im Netz. Cela montre qu’ils ont beaucoup apprécié le projet.',
    evidence: 'Die Kinder waren absolut begeistert, haben immer wieder gefragt: Wann gehen wir da wieder hin?',
    evidenceFr: 'Les enfants étaient absolument enthousiastes et demandaient sans cesse : quand est-ce qu’on y retourne ?'
  },
  {
    de: 'Eltern fürchten, dass …',
    fr: 'Les parents craignent que …',
    ar: 'يخشى الآباء أن ...',
    en: 'Parents fear that …',
    options: [
      { de: 'der Computer ihren Kindern schadet.', fr: 'l’ordinateur nuise à leurs enfants.', ar: 'الكمبيوتر يضر بأطفالهم.', en: 'the computer harms their children.' },
      { de: 'ihre Kinder nicht so früh aufstehen können.', fr: 'leurs enfants ne puissent pas se lever aussi tôt.', ar: 'أطفالهم لن يستطيعوا الاستيقاظ مبكرًا.', en: 'their children will not be able to get up so early.' },
      { de: 'ihre Kinder vor dem Computer Angst haben.', fr: 'leurs enfants aient peur de l’ordinateur.', ar: 'أطفالهم يخافون من الكمبيوتر.', en: 'their children are afraid of the computer.' }
    ],
    answer: 0,
    explanation: 'Certains parents imaginaient que leur enfant deviendrait malade, silencieux et isolé après avoir passé plusieurs heures devant l’ordinateur. Ils craignaient donc que l’ordinateur soit mauvais pour leurs enfants.',
    evidence: '... steht sechs Stunden später krank, sprachlos und einsam wieder auf.',
    evidenceFr: '... se relève six heures plus tard malade, sans parler et isolé.'
  },
  {
    de: 'Die Erzieherinnen …',
    fr: 'Les éducatrices …',
    ar: 'المربيات ...',
    en: 'The kindergarten teachers …',
    options: [
      { de: 'arbeiten jeden Tag 15 bis 20 Minuten am Computer.', fr: 'travaillent chaque jour 15 à 20 minutes sur l’ordinateur.', ar: 'يعملن كل يوم من 15 إلى 20 دقيقة على الكمبيوتر.', en: 'work on the computer for 15 to 20 minutes every day.' },
      { de: 'spielen immer mit zwei oder drei Kindern am Computer.', fr: 'jouent toujours à l’ordinateur avec deux ou trois enfants.', ar: 'يلعبن دائمًا مع طفلين أو ثلاثة على الكمبيوتر.', en: 'always play at the computer with two or three children.' },
      { de: 'wählen für die Kinder die Software aus.', fr: 'choisissent les logiciels pour les enfants.', ar: 'يخترن البرامج للأطفال.', en: 'choose the software for the children.' }
    ],
    answer: 2,
    explanation: 'Le texte précise que les éducatrices mettent surtout à disposition des logiciels créatifs. La limite de 15 à 20 minutes concerne la durée pendant laquelle les enfants restent devant les ordinateurs, pas le temps de travail des éducatrices.',
    evidence: '... und holen vor allem kreative Software auf den Bildschirm.',
    evidenceFr: '... et mettent surtout des logiciels créatifs à l’écran.'
  },
  {
    de: 'Wenn die Kinder am Computer sitzen, dann …',
    fr: 'Lorsque les enfants sont devant l’ordinateur, …',
    ar: 'عندما يجلس الأطفال أمام الكمبيوتر، فإنهم ...',
    en: 'When the children sit at the computer, …',
    options: [
      { de: 'gibt es häufig Streit.', fr: 'il y a souvent des disputes.', ar: 'تحدث مشاجرات كثيرًا.', en: 'there are frequent arguments.' },
      { de: 'hilft ein Kind dem anderen.', fr: 'les enfants s’entraident.', ar: 'يساعد بعضهم بعضًا.', en: 'one child helps another.' },
      { de: 'können sich die meisten nicht lange konzentrieren.', fr: 'la plupart ne peuvent pas se concentrer longtemps.', ar: 'لا يستطيع معظمهم التركيز طويلًا.', en: 'most of them cannot concentrate for long.' }
    ],
    answer: 1,
    explanation: 'La directrice observe que les enfants jouent ensemble calmement et s’aident mutuellement. Il y a peu de conflits et certains enfants arrivent même à mieux se concentrer.',
    evidence: 'Sie helfen sich gegenseitig, es gibt wenig Konflikte.',
    evidenceFr: 'Ils s’entraident et il y a peu de conflits.'
  }
]

function LanguageButtons({
  active,
  onSelect
}: {
  active: Lang | null
  onSelect: (language: Lang | null) => void
}) {
  return (
    <div className="language-buttons">
      {languages.map((language) => (
        <button
          key={language.id}
          type="button"
          className={`language-button ${active === language.id ? 'active' : ''}`}
          onClick={() => onSelect(active === language.id ? null : language.id)}
          title={language.label}
        >
          <span>{language.flag}</span>
          <span>{language.label}</span>
        </button>
      ))}
    </div>
  )
}

export default function CarolinePage() {
  const [paragraphLanguages, setParagraphLanguages] = useState<Record<number, Lang | null>>({})
  const [paragraphExplanationOpen, setParagraphExplanationOpen] = useState<Record<number, boolean>>({})
  const [paragraphExplanationLanguages, setParagraphExplanationLanguages] = useState<Record<number, Lang>>({})
  const [questionLanguages, setQuestionLanguages] = useState<Record<number, Lang | null>>({})
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showCorrections, setShowCorrections] = useState(false)
  const [explanationsOpen, setExplanationsOpen] = useState<Record<number, boolean>>({})

  const score = questions.reduce(
    (total, question, index) =>
      total + (selectedAnswers[index] === question.answer ? 1 : 0),
    0
  )

  function resetExercise() {
    setParagraphLanguages({})
    setParagraphExplanationOpen({})
    setParagraphExplanationLanguages({})
    setQuestionLanguages({})
    setSelectedAnswers({})
    setShowCorrections(false)
    setExplanationsOpen({})
  }

  return (
    <main className="exercise-page">
      <header className="exercise-header">
        <Link href="/espace-etudiant" className="header-brand">
          <GraduationCap size={30} />
          <span>Deutsch <strong>Erfolg</strong></span>
        </Link>

        <Link
          href="/espace-etudiant/examens/b1/lesen"
          className="back-link"
        >
          <ArrowLeft size={18} />
          <span>Zurück zu Lesen B1</span>
        </Link>
      </header>

      <section className="hero">
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-label">
              <span className="level-badge">B1</span>
              <span>LESEVERSTEHEN · TEIL 2</span>
            </div>

            <h1>Caroline</h1>

            <p className="hero-description">
              Lies den Text und beantworte die Fragen.
            </p>
          </div>

          <div className="hero-info">
            <span><BookOpen size={16} /> 1 texte · 5 paragraphes</span>
            <span><Languages size={16} /> 3 langues</span>
            <span><CheckCircle2 size={16} /> 5 questions</span>
          </div>
        </div>
      </section>

      <div className="workspace">
        <section className="text-card">
          <div className="section-heading">
            <div className="section-icon">
              <BookOpen size={21} />
            </div>
            <div>
              <span className="section-eyebrow">LESEVERSTEHEN</span>
              <h2>Lesetext</h2>
              <p>Lis le texte complet dans l’ordre.</p>
            </div>
          </div>

          <div className="reading-tip">
            <Lightbulb size={18} />
            <p>
              Les 5 paragraphes appartiennent au même texte.
              Clique sur les drapeaux pour afficher une traduction.
              Utilise « Comprendre » pour découvrir l’explication de chaque paragraphe.
            </p>
          </div>

          <div className="paragraphs-document">
            {paragraphs.map((paragraph, index) => {
              const language = paragraphLanguages[index]
              const explanationOpen = paragraphExplanationOpen[index]
              const explanationLanguage = paragraphExplanationLanguages[index] || 'fr'

              return (
                <article className="paragraph-unit" key={index}>
                  <p className="german-text">{paragraph.de}</p>

                  <div className="paragraph-actions">
                    <span className="action-label">
                      <Languages size={15} /> Traduction
                    </span>
                    <LanguageButtons
                      active={language || null}
                      onSelect={(lang) =>
                        setParagraphLanguages((previous) => ({
                          ...previous,
                          [index]: lang
                        }))
                      }
                    />
                  </div>

                  {language && (
                    <div className={`translation-box ${language === 'ar' ? 'arabic' : ''}`}>
                      <div className="translation-title">
                        {languages.find((item) => item.id === language)?.flag}
                        {languages.find((item) => item.id === language)?.label}
                      </div>
                      <p dir={language === 'ar' ? 'rtl' : 'ltr'}>
                        {paragraph.translation[language]}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    className={`understand-button ${explanationOpen ? 'opened' : ''}`}
                    onClick={() => {
                      setParagraphExplanationOpen((previous) => ({
                        ...previous,
                        [index]: !previous[index]
                      }))
                      setParagraphExplanationLanguages((previous) => ({
                        ...previous,
                        [index]: previous[index] || 'fr'
                      }))
                    }}
                  >
                    <span className="understand-label">
                      <Lightbulb size={16} />
                      {explanationOpen ? 'Masquer l’explication' : 'Comprendre ce passage'}
                    </span>
                    {explanationOpen ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>

                  {explanationOpen && (
                    <div className="explanation-box paragraph-explanation">
                      <h4>Comprendre ce passage</h4>
                      <LanguageButtons
                        active={explanationLanguage}
                        onSelect={(lang) => {
                          if (lang) {
                            setParagraphExplanationLanguages((previous) => ({
                              ...previous,
                              [index]: lang
                            }))
                          }
                        }}
                      />
                      <p
                        dir={explanationLanguage === 'ar' ? 'rtl' : 'ltr'}
                        className={explanationLanguage === 'ar' ? 'arabic-text' : ''}
                      >
                        {paragraph.explanation[explanationLanguage]}
                      </p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="questions-section">
          <div className="section-heading">
            <div className="section-icon question-icon">
              <CheckCircle2 size={21} />
            </div>
            <div>
              <span className="section-eyebrow">AUFGABEN</span>
              <h2>Fragen zum Text</h2>
              <p>Wähle für jede Frage nur eine Antwort aus.</p>
            </div>
          </div>

          <div className="question-progress">
            <div className="progress-info">
              <span>Réponses sélectionnées</span>
              <strong>{Object.keys(selectedAnswers).length} / 5</strong>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${Object.keys(selectedAnswers).length * 20}%` }}
              />
            </div>
          </div>

          {questions.map((question, index) => {
            const selected = selectedAnswers[index]
            const language = questionLanguages[index]
            const explanationOpen = explanationsOpen[index]

            return (
              <article className="question-card" key={index}>
                <div className="question-top">
                  <span className="question-number">Frage {index + 1}</span>
                  {showCorrections && (
                    <span className={`result-label ${selected === question.answer ? 'correct' : 'incorrect'}`}>
                      {selected === question.answer ? 'Richtig' : 'Falsch'}
                    </span>
                  )}
                </div>

                <h3>{question.de}</h3>

                <div className="question-translation-actions">
                  <span className="action-label">
                    <Languages size={15} /> Traduction
                  </span>
                  <LanguageButtons
                    active={language || null}
                    onSelect={(lang) =>
                      setQuestionLanguages((previous) => ({
                        ...previous,
                        [index]: lang
                      }))
                    }
                  />
                </div>

                {/* TRADUCTION DES QUESTIONS : MÊME STRUCTURE QUE LESETEXT */}
                {language && (
                  <div className={`translation-box question-translation ${language === 'ar' ? 'arabic' : ''}`}>
                    <div className="translation-title">
                      {languages.find((item) => item.id === language)?.flag}
                      {languages.find((item) => item.id === language)?.label}
                    </div>
                    <p dir={language === 'ar' ? 'rtl' : 'ltr'}>
                      {question[language]}
                    </p>
                  </div>
                )}

                <div className="options-list">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected === optionIndex
                    const isCorrect = question.answer === optionIndex

                    let optionClass = ''
                    if (showCorrections && isCorrect) optionClass = 'option-correct'
                    else if (showCorrections && isSelected && !isCorrect) optionClass = 'option-incorrect'
                    else if (isSelected) optionClass = 'option-selected'

                    return (
                      <button
                        type="button"
                        key={optionIndex}
                        disabled={showCorrections}
                        className={`option-button ${optionClass}`}
                        onClick={() =>
                          setSelectedAnswers((previous) => ({
                            ...previous,
                            [index]: optionIndex
                          }))
                        }
                      >
                        <span className="option-letter">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>

                        <span className="option-content">
                          <span>{option.de}</span>
                          {language && (
                            <span
                              className={`option-translation ${language === 'ar' ? 'arabic-text' : ''}`}
                              dir={language === 'ar' ? 'rtl' : 'ltr'}
                            >
                              {option[language]}
                            </span>
                          )}
                        </span>

                        {showCorrections && isCorrect && (
                          <CheckCircle2 className="option-check" size={19} />
                        )}
                      </button>
                    )
                  })}
                </div>

                <button
                  type="button"
                  className={`explain-button ${explanationOpen ? 'opened' : ''}`}
                  onClick={() =>
                    setExplanationsOpen((previous) => ({
                      ...previous,
                      [index]: !previous[index]
                    }))
                  }
                >
                  <span className="understand-label">
                    <Lightbulb size={16} />
                    {explanationOpen ? 'Masquer l’explication' : 'Expliquer la réponse'}
                  </span>
                  {explanationOpen ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>

                {explanationOpen && (
                  <div className="explanation-box">
                    <h4>Pourquoi cette réponse ?</h4>
                    <p>{question.explanation}</p>

                    <div className="evidence-box">
                      <span>Beleg im Text · Preuve dans le texte</span>
                      <p className="evidence-german">{question.evidence}</p>
                      <p className="evidence-french">{question.evidenceFr}</p>
                    </div>
                  </div>
                )}
              </article>
            )
          })}

          <div className="correction-actions">
            {!showCorrections ? (
              <button
                type="button"
                className="correct-button"
                onClick={() => setShowCorrections(true)}
                disabled={Object.keys(selectedAnswers).length !== 5}
              >
                <CheckCircle2 size={18} />
                Corriger mes réponses
              </button>
            ) : (
              <div className="score-result">
                <div className="score-circle">
                  <strong>{score}</strong>
                  <span>/ 5</span>
                </div>
                <div className="score-text">
                  <strong>
                    {score >= 4 ? 'Sehr gut !' : score >= 3 ? 'Gut gemacht !' : 'Weiter üben !'}
                  </strong>
                  <span>Ton résultat : {score} bonne(s) réponse(s) sur 5.</span>
                </div>
              </div>
            )}

            <button
              type="button"
              className="reset-button"
              onClick={resetExercise}
            >
              <RotateCcw size={17} />
              Recommencer
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .exercise-page {
          min-height: 100vh;
          padding: 0 32px 40px;
          background: #F5F6F8;
          color: #172B4D;
          font-family: Arial, Helvetica, sans-serif;
        }

        .exercise-header {
          height: 68px;
          background: #172B4D;
          padding: 0 7%;
          margin: 0 -32px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
        }

        .header-brand :global(svg) {
          color: #D6B56D;
        }

        .header-brand strong {
          color: #D6B56D;
        }

        .back-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
        }

        .back-link :global(svg) {
          color: #D6B56D;
        }

        .back-link:hover {
          color: #D6B56D;
        }

        .hero {
          max-width: 1450px;
          margin: 0 auto 24px;
          padding: 22px 28px;
          border-radius: 12px;
          background: linear-gradient(110deg, #172B4D, #294B78);
          color: #FFFFFF;
        }

        .hero-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .hero-content {
          min-width: 0;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #D6B56D;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        .level-badge {
          padding: 4px 8px;
          border-radius: 4px;
          background: #D6B56D;
          color: #172B4D;
          font-size: 11px;
          font-weight: 900;
        }

        .hero h1 {
          margin: 9px 0 4px;
          color: #FFFFFF;
          font-size: 25px;
          font-weight: 750;
          letter-spacing: -.4px;
        }

        .hero-description {
          margin: 0;
          color: #DCE5F1;
          font-size: 12px;
          line-height: 1.5;
        }

        .hero-info {
          display: flex;
          flex-direction: column;
          gap: 11px;
          flex-shrink: 0;
          padding-left: 25px;
          border-left: 1px solid rgba(255,255,255,.2);
        }

        .hero-info span {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #F0F3F8;
          font-size: 12px;
          white-space: nowrap;
        }

        .hero-info :global(svg) {
          color: #D6B56D;
          flex-shrink: 0;
        }

        .workspace {
          max-width: 1450px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
          gap: 22px;
          align-items: start;
        }

        .text-card,
        .questions-section {
          height: min(78vh, 900px);
          min-height: 650px;
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: #C7CDD6 transparent;
          scrollbar-gutter: stable;
          padding: 25px;
          border: 1px solid #E8E9EC;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 3px 14px rgba(23, 43, 77, .035);
        }

        .text-card::-webkit-scrollbar,
        .questions-section::-webkit-scrollbar {
          width: 6px;
        }

        .text-card::-webkit-scrollbar-thumb,
        .questions-section::-webkit-scrollbar-thumb {
          background: #C7CDD6;
          border-radius: 10px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .section-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #EEF2F8;
          color: #294B78;
        }

        .question-icon {
          background: #F7F1E5;
          color: #A47A35;
        }

        .section-eyebrow {
          display: block;
          margin-bottom: 5px;
          color: #B08A4A;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .section-heading h2 {
          margin: 0;
          color: #172B4D;
          font-size: 20px;
          font-weight: 800;
        }

        .section-heading p {
          margin: 5px 0 0;
          color: #8993A2;
          font-size: 11px;
        }

        .reading-tip {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 20px;
          padding: 13px 14px;
          border: 1px solid #EEE6D7;
          border-radius: 9px;
          background: #FCFAF5;
          color: #80663C;
        }

        .reading-tip :global(svg) {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .reading-tip p {
          margin: 0;
          font-size: 11px;
          line-height: 1.7;
        }

        .paragraphs-document {
          padding: 22px 24px;
          border: 1px solid #E5E9EF;
          border-radius: 12px;
          background: #FFFFFF;
          box-shadow: 0 3px 14px rgba(23, 43, 77, .035);
        }

        .paragraph-unit {
          position: relative;
          padding: 0 0 24px;
          margin-bottom: 23px;
          border-bottom: 1px solid #E8EBF0;
        }

        .paragraph-unit:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: none;
        }

        .paragraph-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 12px;
        }

        .paragraph-number {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #F5F0E5;
          color: #9A7438;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .paragraph-label {
          color: #A17B3D;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .german-text {
          margin: 0 0 15px;
          color: #303B4C;
          font-size: 13px;
          line-height: 1.9;
        }

        .paragraph-actions,
        .question-translation-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;
          padding-top: 12px;
          border-top: 1px solid #EEF0F3;
        }

        .action-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #8993A2;
          font-size: 10px;
          font-weight: 700;
        }

        .language-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .language-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 11px;
          border: 1px solid #E2E7EF;
          border-radius: 20px;
          background: #FFFFFF;
          color: #66758B;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: all .2s ease;
        }

        .language-button:hover {
          border-color: #C4A66A;
          background: #FBF8F1;
          transform: translateY(-1px);
        }

        .language-button.active {
          border-color: #B99758;
          background: #172B4D;
          color: #FFFFFF;
          box-shadow: 0 3px 8px rgba(23, 43, 77, .16);
        }

        .paragraphs-document :global(.language-buttons) {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .paragraphs-document :global(.language-button) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 11px;
          border: 1px solid #E2E7EF;
          border-radius: 20px;
          background: #FFFFFF;
          color: #66758B;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: all .2s ease;
        }

        .paragraphs-document :global(.language-button:hover) {
          border-color: #C4A66A;
          background: #FBF8F1;
          transform: translateY(-1px);
        }

        .paragraphs-document :global(.language-button.active) {
          border-color: #B99758;
          background: #172B4D;
          color: #FFFFFF;
          box-shadow: 0 3px 8px rgba(23, 43, 77, .16);
        }

        /* Les mêmes boutons de langue dans la colonne Fragen */
        .questions-section :global(.language-buttons) {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
        }

        .questions-section :global(.language-button) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 11px;
          border: 1px solid #E2E7EF;
          border-radius: 20px;
          background: #FFFFFF;
          color: #66758B;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          white-space: nowrap;
          transition: all .2s ease;
        }

        .questions-section :global(.language-button:hover) {
          border-color: #C4A66A;
          background: #FBF8F1;
          transform: translateY(-1px);
        }

        .questions-section :global(.language-button.active) {
          border-color: #B99758;
          background: #172B4D;
          color: #FFFFFF;
          box-shadow: 0 3px 8px rgba(23, 43, 77, .16);
        }

        .translation-box {
          position: relative;
          margin-top: 13px;
          padding: 17px 18px;
          border: 1px solid #E4E9F1;
          border-left: 4px solid #B99758;
          border-radius: 10px;
          background: linear-gradient(135deg, #F8FAFD 0%, #F1F4F9 100%);
          color: #34445B;
          box-shadow: 0 4px 12px rgba(23, 43, 77, .045);
          animation: translationAppear .22s ease-out;
        }

        .translation-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 11px;
          padding-bottom: 9px;
          border-bottom: 1px solid #E1E6EE;
          color: #172B4D;
          font-size: 11px;
          font-weight: 800;
        }

        .translation-box p {
          margin: 0;
          color: #40516A;
          font-size: 13px;
          line-height: 1.9;
        }

        /* Même présentation pour la traduction des questions */
        .translation-box.question-translation {
          margin-top: 13px;
          margin-bottom: 14px;
        }

        .translation-box.arabic {
          border-left: 1px solid #E4E9F1;
          border-right: 4px solid #B99758;
        }

        .arabic-text,
        .arabic p {
          direction: rtl;
          text-align: right;
          font-size: 16px !important;
          line-height: 2.1 !important;
        }

        @keyframes translationAppear {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .understand-button,
        .explain-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: 11px;
          padding: 10px 12px;
          border: 1px solid #E9DFC9;
          border-radius: 7px;
          background: #FCFAF5;
          color: #88672F;
          cursor: pointer;
          font-size: 11px;
          font-weight: 700;
          text-align: left;
          transition: all .18s ease;
        }

        .understand-button:hover,
        .explain-button:hover,
        .understand-button.opened,
        .explain-button.opened {
          border-color: #D6B56D;
          background: #F8F1E3;
        }

        .understand-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .paragraph-explanation {
          margin-top: 11px;
        }

        .explanation-box {
          margin-top: 12px;
          padding: 14px;
          border: 1px solid #E9DFC9;
          border-radius: 9px;
          background: #FCFAF5;
          color: #5F513A;
        }

        .explanation-box h4 {
          margin: 0 0 10px;
          color: #80602D;
          font-size: 12px;
        }

        .explanation-box > p {
          margin: 0;
          font-size: 12px;
          line-height: 1.8;
        }

        .paragraph-explanation :global(.language-buttons) {
          margin-bottom: 11px;
        }

        .question-progress {
          margin-bottom: 20px;
          padding: 13px;
          border: 1px solid #EAECF0;
          border-radius: 9px;
          background: #FAFAFB;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 9px;
          color: #778295;
          font-size: 11px;
        }

        .progress-info strong {
          color: #9A7438;
        }

        .progress-track {
          height: 5px;
          overflow: hidden;
          border-radius: 10px;
          background: #E9EBEF;
        }

        .progress-fill {
          height: 100%;
          border-radius: 10px;
          background: #B99758;
          transition: width .2s ease;
        }

        .question-card {
          margin-bottom: 16px;
          padding: 17px;
          border: 1px solid #EAECF0;
          border-radius: 10px;
          background: #fff;
        }

        .question-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 11px;
        }

        .question-number {
          color: #A17B3D;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .7px;
          text-transform: uppercase;
        }

        .result-label {
          padding: 5px 8px;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 800;
        }

        .result-label.correct {
          background: #EAF5ED;
          color: #34764C;
        }

        .result-label.incorrect {
          background: #FBEDED;
          color: #B34B4B;
        }

        .question-card h3 {
          margin: 0 0 14px;
          color: #26364D;
          font-size: 14px;
          line-height: 1.65;
        }

        .question-translation-actions {
          margin-bottom: 12px;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .option-button {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px;
          border: 1px solid #E7E9ED;
          border-radius: 8px;
          background: #fff;
          color: #3B485B;
          cursor: pointer;
          text-align: left;
          font-size: 11px;
          line-height: 1.65;
          transition: all .18s ease;
        }

        .option-button:not(:disabled):hover {
          border-color: #C7B17F;
          background: #FCFAF5;
        }

        .option-button:disabled {
          cursor: default;
        }

        .option-letter {
          width: 23px;
          height: 23px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: 1px solid #E0E3E8;
          border-radius: 6px;
          color: #788396;
          font-size: 10px;
          font-weight: 800;
        }

        .option-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .option-translation {
          display: block;
          margin-top: 5px;
          padding: 6px 9px;
          border-radius: 6px;
          background: #F4F6F9;
          color: #66758B;
          font-size: 11px;
          line-height: 1.8;
        }

        .option-translation.arabic-text {
          background: #F4F6F9;
          color: #52627A;
        }

        .option-selected {
          border-color: #B99758;
          background: #FCF8EF;
        }

        .option-selected .option-letter {
          border-color: #A98546;
          background: #A98546;
          color: white;
        }

        .option-correct {
          border-color: #75B48A;
          background: #F1F8F2;
        }

        .option-correct .option-letter {
          border-color: #43865A;
          background: #43865A;
          color: white;
        }

        .option-incorrect {
          border-color: #D99393;
          background: #FFF5F5;
        }

        .option-check {
          flex-shrink: 0;
          color: #43865A;
        }

        .explain-button {
          margin-top: 12px;
        }

        .evidence-box {
          margin-top: 12px;
          padding: 11px;
          border-left: 3px solid #B99758;
          border-radius: 5px;
          background: #F7F5EF;
        }

        .evidence-box span {
          display: block;
          margin-bottom: 7px;
          color: #8A7043;
          font-size: 9px;
          font-weight: 800;
        }

        .evidence-box p {
          margin: 0;
          font-size: 11px;
          line-height: 1.7;
        }

        .evidence-german {
          color: #34445B;
          font-weight: 700;
        }

        .evidence-french {
          margin-top: 7px !important;
          color: #788396;
          font-style: italic;
        }

        .correction-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .correct-button,
        .reset-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          transition: all .18s ease;
        }

        .correct-button {
          border: 1px solid #172B4D;
          background: #172B4D;
          color: white;
        }

        .correct-button:hover:not(:disabled) {
          border-color: #294B78;
          background: #294B78;
        }

        .correct-button:disabled {
          border-color: #D2D5DA;
          background: #D2D5DA;
          cursor: not-allowed;
        }

        .reset-button {
          border: 1px solid #E3E5E9;
          background: #fff;
          color: #778295;
        }

        .reset-button:hover {
          border-color: #CBB98F;
          background: #FCFAF5;
          color: #80602D;
        }

        .score-result {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px;
          border: 1px solid #D9E8DD;
          border-radius: 9px;
          background: #F5FAF6;
        }

        .score-circle {
          width: 55px;
          height: 55px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #65A77C;
          border-radius: 50%;
          color: #34764C;
        }

        .score-circle strong {
          font-size: 21px;
        }

        .score-circle span {
          margin-top: 6px;
          font-size: 10px;
        }

        .score-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .score-text strong {
          color: #34764C;
          font-size: 14px;
        }

        .score-text span {
          color: #6D8273;
          font-size: 11px;
        }

        @media (max-width: 900px) {
          .exercise-page {
            padding: 0 16px 30px;
          }

          .exercise-header {
            margin-left: -16px;
            margin-right: -16px;
          }

          .workspace {
            grid-template-columns: 1fr;
          }

          .text-card,
          .questions-section {
            height: auto;
            min-height: 0;
            max-height: none;
            overflow: visible;
            scrollbar-gutter: auto;
          }
        }

        @media (max-width: 600px) {
          .exercise-page {
            padding: 0 11px 25px;
          }

          .exercise-header {
            height: 62px;
            margin: 0 -11px 19px;
            padding: 0 14px;
          }

          .header-brand {
            gap: 7px;
            font-size: 16px;
          }

          .header-brand :global(svg) {
            width: 23px;
            height: 23px;
          }

          .back-link {
            gap: 5px;
            font-size: 10px;
          }

          .back-link :global(svg) {
            width: 15px;
            height: 15px;
          }

          .hero {
            padding: 20px;
            margin-bottom: 17px;
          }

          .hero-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }

          .hero h1 {
            font-size: 24px;
          }

          .hero-info {
            width: 100%;
            padding: 14px 0 0;
            border-left: none;
            border-top: 1px solid rgba(255,255,255,.2);
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px 18px;
          }

          .text-card,
          .questions-section {
            padding: 17px 13px;
            border-radius: 11px;
          }

          .section-heading h2 {
            font-size: 19px;
          }

          .paragraphs-document {
            padding: 17px 13px;
          }

          .paragraph-unit {
            padding-bottom: 19px;
            margin-bottom: 19px;
          }

          .german-text {
            font-size: 12px;
            line-height: 1.85;
          }

          .paragraphs-document :global(.language-button) {
            padding: 6px 8px;
          }

          .paragraphs-document :global(.language-button span:last-child) {
            font-size: 9px;
          }

          .question-card {
            padding: 13px 10px;
          }

          .language-button {
            padding: 6px 8px;
          }

          .language-button span:last-child {
            font-size: 9px;
          }

          .questions-section :global(.language-button) {
            padding: 6px 8px;
          }

          .questions-section :global(.language-button span:last-child) {
            font-size: 9px;
          }
        }
      `}</style>
    </main>
  )
}

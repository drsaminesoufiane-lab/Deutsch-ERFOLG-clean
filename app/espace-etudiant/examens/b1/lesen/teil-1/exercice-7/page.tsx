
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Languages,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  GraduationCap,
} from 'lucide-react'

type Langue = 'fr' | 'ar' | 'en'

type Texte = {
  id: number
  contenu: string
  traduction: Record<Langue, string>
  explication: Record<Langue, string>
}

type Titre = {
  id: string
  contenu: string
  traduction: Record<Langue, string>
  explication: Record<Langue, string>
}

const textes: Texte[] = [
  {
    id: 1,
    contenu:
      'Frauen lachen auf viele Arten. Sie kichern, glucksen und manchmal singen sie fast. Bei Männern dagegen kommt das viel seltener vor. Aber gemeinsam ist Männern und Frauen, dass sie in Vokalen lachen, die im Mundzentrum gebildet werden. Und das ist entscheidend: Nur wenn die Vokale im Mundzentrum gebildet werden, ist das Lachen für uns fröhlich und positiv. Damit ist bewiesen, dass das Lachen vom Weihnachtsmann, das wie ein tiefes Ho, ho klingt, kaum als fröhlich empfunden wird. Denn dieser Laut wird im hinteren Teil des Mundraums gebildet.',
    traduction: {
      fr: 'Les femmes rient de nombreuses façons. Elles gloussent, pouffent de rire et parfois chantent presque en riant. Chez les hommes, cela arrive beaucoup plus rarement. Cependant, les hommes et les femmes ont un point commun : ils rient en utilisant des voyelles produites au centre de la bouche. C’est essentiel : lorsque les voyelles sont produites au centre de la bouche, le rire est perçu comme joyeux et positif. Cela explique pourquoi le rire du Père Noël, qui ressemble à un profond « Ho, ho », est rarement perçu comme joyeux. En effet, ce son est produit dans la partie arrière de la bouche.',
      ar: 'تضحك النساء بطرق عديدة، فهن يضحكن بخفة ويقهقهن وأحياناً يكاد ضحكهن يشبه الغناء. أما الرجال فيحدث ذلك لديهم بشكل أقل بكثير. لكن الرجال والنساء يشتركون في أنهم يضحكون باستخدام حروف صوتية تُنتَج في وسط الفم. وهذا أمر حاسم: فعندما تُنتَج هذه الأصوات في وسط الفم، يُنظر إلى الضحك على أنه مبهج وإيجابي. وهذا يفسر لماذا لا يُعتبر ضحك بابا نويل العميق «Ho, ho» ضحكاً مرحاً، لأن هذا الصوت يُنتَج في الجزء الخلفي من الفم.',
      en: 'Women laugh in many different ways. They giggle, chuckle and sometimes almost sing when they laugh. Men do this much less often. However, men and women have something in common: they laugh using vowels produced in the centre of the mouth. This is important: only when vowels are produced in the centre of the mouth is laughter perceived as cheerful and positive. This explains why Santa Claus’s deep “Ho, ho” laugh is hardly perceived as cheerful, because the sound is produced at the back of the mouth.',
    },
    explication: {
      fr: 'Le texte compare les façons de rire des femmes et des hommes. Il explique également comment les sons produits dans la bouche influencent la perception du rire. Le titre D résume le sujet principal : la manière dont les hommes et les femmes rient.',
      ar: 'يقارن النص بين طريقة ضحك النساء والرجال، ويشرح كيف تؤثر الأصوات التي تُنتج داخل الفم على إحساسنا بالضحك. العنوان D يلخص الموضوع الرئيسي: كيف يضحك الرجال والنساء.',
      en: 'The text compares how women and men laugh. It also explains how sounds produced inside the mouth influence how we perceive laughter. Heading D summarises the main topic: how men and women laugh.',
    },
  },
  {
    id: 2,
    contenu:
      'Viel Arbeit, viel Stress. Wer viel arbeitet, muss nicht unbedingt gestresst sein. Frauen in medizinischen Berufen zum Beispiel klagen trotz teilweise hoher Belastung deutlich weniger über stressbedingte Krankheiten als Raumpflegerinnen, Kindergärtnerinnen oder Berufsschullehrerinnen. Dies zeigt eine Untersuchung des Hamburger IPO-Instituts, das für eine Studie 1000 Frauen und Männer befragt hat. Vor Stress schützen laut Studie ein angenehmes Betriebsklima, ein gutes Verhältnis zur Chefin oder zum Chef und die Möglichkeit, die eigene Arbeit selbstständig zu planen.',
    traduction: {
      fr: 'Beaucoup de travail, beaucoup de stress ? Pas nécessairement. Les femmes qui exercent des professions médicales, par exemple, se plaignent nettement moins de maladies liées au stress que les femmes de ménage, les éducatrices de maternelle ou les enseignantes des écoles professionnelles, malgré une charge de travail parfois importante. C’est ce que montre une étude de l’Institut IPO de Hambourg, qui a interrogé 1 000 femmes et hommes. Selon cette étude, une bonne ambiance au travail, de bonnes relations avec son supérieur ou sa supérieure et la possibilité d’organiser soi-même son travail protègent du stress.',
      ar: 'عمل كثير يعني ضغطاً كثيراً؟ ليس بالضرورة. فالنساء العاملات في المهن الطبية، رغم ضغط العمل المرتفع أحياناً، يشتكين بدرجة أقل من الأمراض المرتبطة بالتوتر مقارنة بعاملات النظافة ومربيات الأطفال ومدرسات المدارس المهنية. هذا ما أظهرته دراسة أجراها معهد IPO في هامبورغ وشملت 1000 رجل وامرأة. ووفقاً للدراسة، فإن جو العمل الجيد، والعلاقة الجيدة مع المسؤول، وإمكانية تنظيم العمل بشكل مستقل، كلها عوامل تحمي من التوتر.',
      en: 'A lot of work does not necessarily mean a lot of stress. For example, women in medical professions report significantly fewer stress-related illnesses than cleaners, kindergarten teachers or vocational-school teachers, despite sometimes having a heavy workload. This is shown by a study conducted by the Hamburg IPO Institute, which interviewed 1,000 men and women. According to the study, a pleasant working environment, a good relationship with the manager and the ability to plan one’s own work help protect against stress.',
    },
    explication: {
      fr: 'Le texte explique que le stress ne dépend pas uniquement de la quantité de travail. Une bonne ambiance professionnelle, de bonnes relations avec la hiérarchie et l’autonomie dans l’organisation du travail permettent de mieux résister au stress. Le titre A correspond à cette idée.',
      ar: 'يوضح النص أن التوتر لا يعتمد فقط على كمية العمل. فجو العمل الجيد والعلاقة الجيدة مع المسؤول والاستقلالية في تنظيم العمل تساعد على الحماية من التوتر. العنوان A يعبر عن هذه الفكرة.',
      en: 'The text explains that stress does not depend only on the amount of work. A pleasant work environment, good relationships with managers and independence in organising work help protect people from stress. Heading A matches this idea.',
    },
  },
  {
    id: 3,
    contenu:
      'Ein neues Buch zeigt, wie Männer Fähigkeiten aus dem Arbeitsleben auf die Erziehung übertragen können und so zu erfolgreichen Vätern werden. Da wird die gemeinsame Kindererziehung zur Partnerarbeit (oder sogar zum Joint Venture). Geschicktes Verhandeln heißt, das Kind davon zu überzeugen, dass es sich die Zähne putzen muss. Und der Familienurlaub hat alle Qualitäten einer Tagung oder eines Seminars: Man erhält die Gelegenheit, die Kinder intensiv zu studieren.',
    traduction: {
      fr: 'Un nouveau livre montre comment les hommes peuvent transférer les compétences acquises dans leur vie professionnelle à l’éducation des enfants et devenir ainsi de bons pères. L’éducation des enfants devient alors un travail en partenariat, voire une coentreprise. Savoir négocier consiste par exemple à convaincre l’enfant qu’il doit se brosser les dents. Et les vacances en famille possèdent toutes les caractéristiques d’une réunion ou d’un séminaire : elles offrent l’occasion d’observer attentivement les enfants.',
      ar: 'يُظهر كتاب جديد كيف يمكن للرجال نقل المهارات التي اكتسبوها في العمل إلى تربية الأطفال، ليصبحوا آباء ناجحين. تصبح تربية الأطفال عملاً مشتركاً بين الشريكين، بل تشبه أحياناً مشروعاً مشتركاً. فالتفاوض الجيد يعني مثلاً إقناع الطفل بضرورة تنظيف أسنانه. كما أن العطلة العائلية تشبه اجتماعاً أو ندوة، إذ تتيح فرصة لملاحظة الأطفال ودراستهم عن قرب.',
      en: 'A new book shows how men can transfer skills from their working lives to raising children and become successful fathers. Raising children together becomes a partnership or even a joint venture. Skilled negotiation means convincing a child that they need to brush their teeth. A family holiday also has all the qualities of a conference or seminar, offering an opportunity to study the children closely.',
    },
    explication: {
      fr: 'Le texte présente un livre qui explique comment les hommes peuvent utiliser leurs compétences professionnelles dans l’éducation des enfants. Il insiste sur le rôle du père dans l’éducation partagée. Le titre B correspond aux hommes qui peuvent aussi être de bons pères.',
      ar: 'يتحدث النص عن كتاب يشرح كيف يمكن للرجال استخدام مهاراتهم المهنية في تربية الأطفال. ويركز على دور الأب في التربية المشتركة. العنوان B يتحدث عن الرجال الذين يمكنهم أن يكونوا آباء ناجحين.',
      en: 'The text presents a book explaining how men can use their professional skills in raising children. It emphasises the father’s role in shared parenting. Heading B refers to men who can also be successful fathers.',
    },
  },
  {
    id: 4,
    contenu:
      'Eine Studie der Universität Essex hat ergeben, dass wir mit siebzig Jahren am glücklichsten sind. Zwar haben die meisten Menschen in diesem Alter gesundheitliche Probleme, aber dafür genießen sie viel Freizeit und haben keinen Stress mehr. Deshalb macht ihnen das Leben so viel Spaß wie nie zuvor. Die Studie besagt auch, dass wir einen ersten Höhepunkt der Lebensfreude mit fünfzehn Jahren erreichen. Danach geht es bergab. Zwischen dreißig und fünfzig Jahren tragen wir am meisten Verantwortung; das Leben ist geprägt von Sachzwängen.',
    traduction: {
      fr: 'Une étude de l’Université d’Essex a révélé que nous sommes les plus heureux à l’âge de 70 ans. Certes, la plupart des personnes de cet âge ont des problèmes de santé, mais elles profitent de beaucoup de temps libre et n’ont plus autant de stress. C’est pourquoi la vie leur plaît autant, voire davantage, qu’auparavant. L’étude indique également que nous connaissons un premier sommet de joie de vivre à 15 ans. Ensuite, le bonheur diminue. Entre 30 et 50 ans, nous avons le plus de responsabilités et notre vie est davantage marquée par les contraintes.',
      ar: 'أظهرت دراسة لجامعة إسيكس أننا نكون في قمة سعادتنا عندما نبلغ السبعين من العمر. صحيح أن معظم الناس في هذا السن يعانون من مشاكل صحية، لكنهم يستمتعون بوقت فراغ كبير ولا يعانون من التوتر كما في السابق. لذلك تصبح الحياة ممتعة بالنسبة إليهم أكثر من أي وقت مضى. وتشير الدراسة أيضاً إلى أننا نصل إلى أول قمة للسعادة في سن الخامسة عشرة، ثم تنخفض السعادة. وبين الثلاثين والخمسين نتحمل أكبر قدر من المسؤوليات وتكون حياتنا مليئة بالالتزامات.',
      en: 'A study by the University of Essex has found that people are happiest at the age of seventy. Although most people at this age have health problems, they enjoy plenty of free time and no longer have as much stress. As a result, life is more enjoyable for them than ever before. The study also says that we experience our first peak of happiness at fifteen. After that, happiness declines. Between thirty and fifty, we have the most responsibilities and our lives are shaped by constraints.',
    },
    explication: {
      fr: 'Le texte compare le bonheur à différents âges de la vie. Il affirme que les personnes de 70 ans sont les plus heureuses, notamment grâce à leur temps libre et à l’absence de stress professionnel. Le titre J correspond exactement à cette conclusion.',
      ar: 'يقارن النص السعادة في مراحل عمرية مختلفة، ويؤكد أن الأشخاص في سن السبعين هم الأكثر سعادة، خاصة بسبب وقت الفراغ وقلة التوتر. العنوان J يعبر عن هذه النتيجة.',
      en: 'The text compares happiness at different stages of life. It says that people aged seventy are the happiest, especially because they have more free time and less stress. Heading J expresses this conclusion.',
    },
  },
  {
    id: 5,
    contenu:
      'Warum bleiben manche Managerinnen erfolgreich, obwohl sie Nachrichten mitteilen, die ihr Publikum lieber nicht hören möchte? Ganz einfach: Sie verkaufen die schlechte Nachricht mit Humor. Ein Londoner Soziologe hat während einer Studie beobachtet, dass gerade bei Reden unangenehmen Inhalts oft heiter gelacht wird. Das Lachen wird bewusst provoziert, etwa durch bestimmte Wörter oder durch ein eigenes breites Lächeln. Die fröhliche Stimmung soll dafür sorgen, dass die Zuhörenden das Gefühl haben, mehr zu wissen als alle anderen.',
    traduction: {
      fr: 'Pourquoi certaines femmes dirigeantes restent-elles performantes alors qu’elles annoncent des nouvelles que leur public préférerait ne pas entendre ? C’est simple : elles présentent les mauvaises nouvelles avec humour. Un sociologue londonien a observé, au cours d’une étude, que les gens rient souvent de manière joyeuse pendant des discours au contenu désagréable. Le rire est volontairement provoqué, par exemple à l’aide de certains mots ou d’un large sourire. Cette ambiance joyeuse doit donner aux auditeurs l’impression qu’ils en savent davantage que les autres.',
      ar: 'لماذا تظل بعض المديرات ناجحات رغم أنهن يعلنّ أخباراً لا يرغب الجمهور في سماعها؟ الأمر بسيط: يقدمن الأخبار السيئة بروح الدعابة. لاحظ عالم اجتماع من لندن خلال دراسة أن الناس يضحكون غالباً أثناء الخطب التي تتضمن محتوى غير سار. ويتم إثارة الضحك عمداً، مثلاً باستخدام كلمات معينة أو من خلال ابتسامة عريضة. وتهدف الأجواء المرحة إلى جعل المستمعين يشعرون بأنهم يعرفون أكثر من الآخرين.',
      en: 'Why do some female managers remain successful even when they deliver news that their audience would rather not hear? Quite simply, they present bad news with humour. A London sociologist observed during a study that people often laugh cheerfully during speeches containing unpleasant information. The laughter is deliberately encouraged, for example through certain words or a broad smile. The cheerful atmosphere is intended to make listeners feel that they know more than everyone else.',
    },
    explication: {
      fr: 'Le texte explique que certaines femmes dirigeantes utilisent l’humour et le sourire pour annoncer des nouvelles désagréables. Le titre F reprend exactement cette stratégie : annoncer les mauvaises nouvelles avec le sourire.',
      ar: 'يوضح النص أن بعض المديرات يستخدمن الدعابة والابتسامة لإعلان الأخبار غير السارة. العنوان F يلخص هذه الطريقة: قل الأخبار السيئة بابتسامة.',
      en: 'The text explains that some female managers use humour and smiles to communicate unpleasant news. Heading F describes exactly this strategy: delivering bad news with a smile.',
    },
  },
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Zufriedenheit im Job schützt vor Stress',
    traduction: {
      fr: 'La satisfaction au travail protège contre le stress',
      ar: 'الرضا في العمل يحمي من التوتر',
      en: 'Job satisfaction protects against stress',
    },
    explication: {
      fr: 'Le texte 2 explique que l’ambiance au travail, les relations avec la hiérarchie et l’autonomie permettent de réduire le stress.',
      ar: 'يوضح النص 2 أن أجواء العمل والعلاقة مع المسؤول والاستقلالية تساعد على تقليل التوتر.',
      en: 'Text 2 explains that the work environment, relationships with managers and independence help reduce stress.',
    },
  },
  {
    id: 'B',
    contenu: 'Erfolgreiche Männer können auch gute Väter sein',
    traduction: {
      fr: 'Les hommes qui réussissent peuvent aussi être de bons pères',
      ar: 'يمكن للرجال الناجحين أن يكونوا آباء جيدين أيضاً',
      en: 'Successful men can also be good fathers',
    },
    explication: {
      fr: 'Le texte 3 parle d’un livre qui montre comment les hommes peuvent utiliser leurs compétences professionnelles pour devenir de bons pères.',
      ar: 'يتحدث النص 3 عن كتاب يوضح كيف يمكن للرجال استعمال مهاراتهم المهنية ليصبحوا آباء جيدين.',
      en: 'Text 3 discusses a book showing how men can use their professional skills to become good fathers.',
    },
  },
  {
    id: 'C',
    contenu: 'Keiner lacht so fröhlich wie der Weihnachtsmann',
    traduction: {
      fr: 'Personne ne rit aussi joyeusement que le Père Noël',
      ar: 'لا أحد يضحك بمرح مثل بابا نويل',
      en: 'Nobody laughs as cheerfully as Santa Claus',
    },
    explication: {
      fr: 'Le texte 1 mentionne le rire du Père Noël, mais explique justement qu’il n’est pas perçu comme particulièrement joyeux.',
      ar: 'يذكر النص 1 ضحكة بابا نويل، لكنه يوضح أنها لا تُعتبر ضحكة مرحة بشكل خاص.',
      en: 'Text 1 mentions Santa Claus’s laugh, but explains that it is not perceived as particularly cheerful.',
    },
  },
  {
    id: 'D',
    contenu: 'Wie Männer und Frauen lachen',
    traduction: {
      fr: 'Comment les hommes et les femmes rient',
      ar: 'كيف يضحك الرجال والنساء',
      en: 'How men and women laugh',
    },
    explication: {
      fr: 'Le texte 1 compare les façons de rire des hommes et des femmes et explique les sons qui rendent le rire joyeux.',
      ar: 'يقارن النص 1 بين طرق ضحك الرجال والنساء ويشرح الأصوات التي تجعل الضحك يبدو مرحاً.',
      en: 'Text 1 compares how men and women laugh and explains which sounds make laughter seem cheerful.',
    },
  },
  {
    id: 'E',
    contenu: 'Weniger Arbeit – weniger Stress',
    traduction: {
      fr: 'Moins de travail – moins de stress',
      ar: 'عمل أقل – توتر أقل',
      en: 'Less work – less stress',
    },
    explication: {
      fr: 'Le texte 2 ne dit pas que moins de travail signifie moins de stress. Il explique que les conditions de travail sont plus importantes.',
      ar: 'لا يقول النص 2 إن العمل الأقل يعني توتراً أقل، بل يوضح أن ظروف العمل هي الأهم.',
      en: 'Text 2 does not say that less work means less stress. It explains that working conditions are more important.',
    },
  },
  {
    id: 'F',
    contenu: 'Schlechte Nachrichten? Sagen Sie es mit einem Lächeln',
    traduction: {
      fr: 'De mauvaises nouvelles ? Annoncez-les avec le sourire',
      ar: 'أخبار سيئة؟ قلها بابتسامة',
      en: 'Bad news? Say it with a smile',
    },
    explication: {
      fr: 'Le texte 5 explique que certaines dirigeantes utilisent l’humour et le sourire pour annoncer des informations désagréables.',
      ar: 'يوضح النص 5 أن بعض المديرات يستعملن الدعابة والابتسامة لإعلان الأخبار غير السارة.',
      en: 'Text 5 explains that some female managers use humour and smiles to deliver unpleasant information.',
    },
  },
  {
    id: 'G',
    contenu: 'Der Beruf ist für Männer wichtiger als die Familie',
    traduction: {
      fr: 'Le métier est plus important que la famille pour les hommes',
      ar: 'العمل أهم من العائلة بالنسبة للرجال',
      en: 'Career is more important than family for men',
    },
    explication: {
      fr: 'Le texte 3 parle de l’implication des hommes dans l’éducation des enfants, et non d’une priorité donnée au travail.',
      ar: 'يتحدث النص 3 عن مشاركة الرجال في تربية الأطفال، وليس عن إعطاء الأولوية للعمل.',
      en: 'Text 3 discusses men’s involvement in raising children, not prioritising work over family.',
    },
  },
  {
    id: 'H',
    contenu: 'Auch ältere Menschen leiden unter Stress',
    traduction: {
      fr: 'Les personnes âgées souffrent elles aussi du stress',
      ar: 'كبار السن يعانون أيضاً من التوتر',
      en: 'Older people also suffer from stress',
    },
    explication: {
      fr: 'Le texte 4 indique au contraire que les personnes de 70 ans ont moins de stress et profitent de leur temps libre.',
      ar: 'على العكس، يشير النص 4 إلى أن الأشخاص في سن السبعين يعانون من توتر أقل ويستمتعون بوقت فراغهم.',
      en: 'On the contrary, text 4 says that people aged seventy have less stress and enjoy their free time.',
    },
  },
  {
    id: 'I',
    contenu: 'Frauen reagieren besser auf schlechte Nachrichten als Männer',
    traduction: {
      fr: 'Les femmes réagissent mieux aux mauvaises nouvelles que les hommes',
      ar: 'النساء يتفاعلن بشكل أفضل مع الأخبار السيئة مقارنة بالرجال',
      en: 'Women react better to bad news than men',
    },
    explication: {
      fr: 'Le texte 5 parle de femmes dirigeantes qui annoncent de mauvaises nouvelles avec humour. Il ne compare pas la réaction des femmes et des hommes face à ces nouvelles.',
      ar: 'يتحدث النص 5 عن مديرات يقدمن الأخبار السيئة بروح الدعابة، ولا يقارن رد فعل النساء والرجال تجاه هذه الأخبار.',
      en: 'Text 5 describes female managers delivering bad news with humour. It does not compare how women and men react to bad news.',
    },
  },
  {
    id: 'J',
    contenu: 'Mit 70 Jahren macht das Leben am meisten Spaß',
    traduction: {
      fr: 'À 70 ans, la vie est la plus agréable',
      ar: 'في سن السبعين تكون الحياة أكثر متعة',
      en: 'Life is most enjoyable at the age of 70',
    },
    explication: {
      fr: 'Le texte 4 affirme que les personnes sont les plus heureuses à 70 ans, notamment grâce à leur temps libre et à une vie moins stressante.',
      ar: 'يؤكد النص 4 أن الناس يكونون أكثر سعادة في سن السبعين، خصوصاً بفضل وقت الفراغ وقلة التوتر.',
      en: 'Text 4 states that people are happiest at seventy, especially because they have more free time and less stress.',
    },
  },
]

const solutions: Record<number, string> = {
  1: 'D',
  2: 'A',
  3: 'B',
  4: 'J',
  5: 'F',
}

const nomsLangues: Record<Langue, string> = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English',
}

export default function IrisPage() {
  const [reponses, setReponses] = useState<Record<number, string>>({})
  const [selection, setSelection] = useState<string | null>(null)
  const [corrige, setCorrige] = useState(false)
  const [einzelPruefung, setEinzelPruefung] = useState<Record<number, boolean>>({})
  const [langue, setLangue] = useState<Langue>('fr')
  const [traductionsTextes, setTraductionsTextes] = useState<Record<number, boolean>>({})
  const [explicationsTextes, setExplicationsTextes] = useState<Record<number, boolean>>({})
  const [detailsTitres, setDetailsTitres] = useState<Record<string, boolean>>({})
  const [draggedTitre, setDraggedTitre] = useState<string | null>(null)

  const nombreReponses = Object.keys(reponses).length
  const score = textes.filter(
    (texte) => reponses[texte.id] === solutions[texte.id]
  ).length

  const choisir = (id: string) => {
    if (corrige) return
    setSelection((ancienne) => (ancienne === id ? null : id))
  }

  const assigner = (texteId: number, titreId: string) => {
    if (corrige) return

    setReponses((anciennes) => {
      const nouvelles = { ...anciennes }

      Object.keys(nouvelles).forEach((key) => {
        if (nouvelles[Number(key)] === titreId) {
          delete nouvelles[Number(key)]
        }
      })

      nouvelles[texteId] = titreId
      return nouvelles
    })

    setEinzelPruefung((anciennes) => {
      const nouvelles = { ...anciennes }
      delete nouvelles[texteId]
      return nouvelles
    })

    setSelection(null)
  }

  const retirer = (texteId: number) => {
    if (corrige) return

    setReponses((anciennes) => {
      const nouvelles = { ...anciennes }
      delete nouvelles[texteId]
      return nouvelles
    })

    setEinzelPruefung((anciennes) => {
      const nouvelles = { ...anciennes }
      delete nouvelles[texteId]
      return nouvelles
    })
  }

  const verifier = () => {
    if (nombreReponses !== textes.length) return
    setCorrige(true)
    setSelection(null)
  }

  const pruefenEinzeln = (texteId: number) => {
    if (!reponses[texteId]) return

    setEinzelPruefung((anciennes) => ({
      ...anciennes,
      [texteId]: true,
    }))
  }

  const recommencer = () => {
    setReponses({})
    setSelection(null)
    setCorrige(false)
    setEinzelPruefung({})
    setTraductionsTextes({})
    setExplicationsTextes({})
    setDetailsTitres({})
    setDraggedTitre(null)
  }

  const basculer = (
    setter: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
    id: number
  ) => {
    setter((anciennes) => ({
      ...anciennes,
      [id]: !anciennes[id],
    }))
  }

  const titreUtilise = (id: string) =>
    Object.values(reponses).includes(id)

  return (
    <div className="iris-page">
      <header className="iris-header">
        <div className="iris-header-inner">
          <Link href="/espace-etudiant/examens/b1/lesen" className="iris-brand">
            <span className="iris-brand-icon">
              <GraduationCap size={23} />
            </span>
            <span>Deutsch Erfolg</span>
          </Link>

          <Link
            href="/espace-etudiant/examens/b1/lesen"
            className="iris-back"
          >
            <ArrowLeft size={17} />
            <span>Zurück zu Lesen B1</span>
          </Link>
        </div>
      </header>

      <main className="iris-content">
        <div className="iris-breadcrumb">
          <span>TELC B1</span>
          <span>/</span>
          <span>LESEN</span>
          <span>/</span>
          <strong>TEIL 1</strong>
        </div>

        <section className="iris-hero">
          <div className="iris-hero-top">
            <span className="iris-eyebrow">LESEVERSTEHEN · TEIL 1</span>
            <span className="iris-level">B1</span>
          </div>

          <h1>Iris</h1>

          <p>
            Lesen Sie die Texte und ordnen Sie die passenden Überschriften zu.
          </p>

          <div className="iris-progress-area">
            <div className="iris-progress-labels">
              <span>Fortschritt</span>
              <strong>{nombreReponses}/5</strong>
            </div>
            <div className="iris-progress-track">
              <div
                className="iris-progress-fill"
                style={{ width: `${(nombreReponses / 5) * 100}%` }}
              />
            </div>
          </div>
        </section>

        <div className="iris-language-bar">
          <div className="iris-language-title">
            <Languages size={17} />
            <span>Traduction et explications</span>
          </div>

          <div className="iris-language-options">
            {(['fr', 'ar', 'en'] as Langue[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLangue(lang)}
                className={`iris-language-button ${langue === lang ? 'active' : ''}`}
              >
                {nomsLangues[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="iris-instructions">
          <span className="iris-instruction-icon">💡</span>
          <span>
            Cliquez sur un titre à droite, puis sur le texte correspondant.
            Vous pouvez aussi glisser-déposer un titre sur un texte.
          </span>
        </div>

        <div className="iris-layout">
          <section className="iris-texts-column">
            <div className="iris-section-heading">
              <div>
                <span className="iris-section-eyebrow">LESEAUFGABEN</span>
                <h2>Die Texte</h2>
              </div>
              <span className="iris-count">{textes.length} Texte</span>
            </div>

            <div className="iris-text-list">
              {textes.map((texte) => {
                const assigned = reponses[texte.id]
                const isChecked = einzelPruefung[texte.id]
                const isCorrect = assigned === solutions[texte.id]

                return (
                  <article
                    key={texte.id}
                    className={`iris-text-card ${
                      assigned ? 'has-answer' : ''
                    } ${
                      corrige
                        ? isCorrect
                          ? 'is-correct'
                          : 'is-wrong'
                        : ''
                    }`}
                    onDragOver={(event) => {
                      event.preventDefault()
                    }}
                    onDrop={(event) => {
                      event.preventDefault()
                      const dropped =
                        event.dataTransfer.getData('text/plain') ||
                        draggedTitre
                      if (dropped) assigner(texte.id, dropped)
                      setDraggedTitre(null)
                    }}
                  >
                    <div className="iris-text-card-header">
                      <span className="iris-text-number">{texte.id}</span>
                      <span className="iris-text-label">TEXT {texte.id}</span>

                      {corrige && (
                        <span
                          className={`iris-result-icon ${
                            isCorrect ? 'correct' : 'wrong'
                          }`}
                        >
                          {isCorrect ? <CheckCircle2 size={19} /> : '✕'}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      className={`iris-answer-slot ${
                        assigned ? 'filled' : ''
                      }`}
                      onClick={() => {
                        if (assigned) {
                          retirer(texte.id)
                        } else if (selection) {
                          assigner(texte.id, selection)
                        }
                      }}
                    >
                      {assigned ? (
                        <>
                          <strong>{assigned}</strong>
                          <span>
                            {titel.find((item) => item.id === assigned)?.contenu}
                          </span>
                          {!corrige && <span className="iris-remove">×</span>}
                        </>
                      ) : (
                        <span>
                          {selection
                            ? 'Hier klicken, um den Titel zuzuordnen'
                            : 'Klicken Sie hier und wählen Sie rechts eine Antwort'}
                        </span>
                      )}
                    </button>

                    <p className="iris-text-content">{texte.contenu}</p>

                    {traductionsTextes[texte.id] && (
                      <div className="iris-info-panel translation-panel">
                        <div className="iris-info-title">
                          <Languages size={16} />
                          Traduction – {nomsLangues[langue]}
                        </div>
                        <p dir={langue === 'ar' ? 'rtl' : 'ltr'}>
                          {texte.traduction[langue]}
                        </p>
                      </div>
                    )}

                    {explicationsTextes[texte.id] && (
                      <div className="iris-info-panel explanation-panel">
                        <div className="iris-info-title">
                          <Lightbulb size={16} />
                          Explication
                        </div>
                        <p dir={langue === 'ar' ? 'rtl' : 'ltr'}>
                          {texte.explication[langue]}
                        </p>
                      </div>
                    )}

                    <div className="iris-text-actions">
                      <button
                        type="button"
                        className={`iris-small-action ${
                          traductionsTextes[texte.id] ? 'active' : ''
                        }`}
                        onClick={() =>
                          basculer(setTraductionsTextes, texte.id)
                        }
                      >
                        <Languages size={15} />
                        Traduction
                        {traductionsTextes[texte.id] ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </button>

                      <button
                        type="button"
                        className={`iris-small-action ${
                          explicationsTextes[texte.id] ? 'active' : ''
                        }`}
                        onClick={() =>
                          basculer(setExplicationsTextes, texte.id)
                        }
                      >
                        <Lightbulb size={15} />
                        Explication
                        {explicationsTextes[texte.id] ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </button>

                      {!corrige && (
                        <button
                          type="button"
                          className="iris-check-one"
                          disabled={!assigned}
                          onClick={() => pruefenEinzeln(texte.id)}
                        >
                          <CheckCircle2 size={15} />
                          Prüfen
                        </button>
                      )}
                    </div>

                    {isChecked && !corrige && (
                      <div
                        className={`iris-individual-feedback ${
                          isCorrect ? 'correct' : 'wrong'
                        }`}
                      >
                        {isCorrect
                          ? '✓ Richtig! Sehr gut!'
                          : '✕ Nicht ganz richtig. Sie können Ihre Antwort noch ändern.'}
                      </div>
                    )}

                    {corrige && (
                      <div
                        className={`iris-correction ${
                          isCorrect ? 'correct' : 'wrong'
                        }`}
                      >
                        <strong>
                          {isCorrect ? 'Richtige Antwort' : 'Korrekte Antwort'}
                        </strong>
                        <span>
                          {solutions[texte.id]} –{' '}
                          {
                            titel.find(
                              (item) => item.id === solutions[texte.id]
                            )?.contenu
                          }
                        </span>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </section>

          <aside className="iris-titles-column">
            <div className="iris-titles-sticky">
              <div className="iris-section-heading">
                <div>
                  <span className="iris-section-eyebrow">ANTWORTEN</span>
                  <h2>Überschriften</h2>
                </div>
                <span className="iris-count">{titel.length} Titel</span>
              </div>

              <div className="iris-title-list">
                {titel.map((item) => {
                  const used = titreUtilise(item.id)
                  const selected = selection === item.id

                  return (
                    <div
                      key={item.id}
                      className={`iris-title-wrapper ${
                        selected ? 'selected' : ''
                      } ${used ? 'used' : ''}`}
                    >
                      <button
                        type="button"
                        className="iris-title-button"
                        disabled={corrige || (used && !selected)}
                        onClick={() => choisir(item.id)}
                        draggable={!corrige && !used}
                        onDragStart={(event) => {
                          setDraggedTitre(item.id)
                          event.dataTransfer.setData('text/plain', item.id)
                          event.dataTransfer.effectAllowed = 'move'
                        }}
                        onDragEnd={() => setDraggedTitre(null)}
                      >
                        <span className="iris-title-letter">{item.id}</span>
                        <span className="iris-title-text">
                          {item.contenu}
                        </span>
                        {used && (
                          <CheckCircle2
                            size={16}
                            className="iris-title-used-icon"
                          />
                        )}
                      </button>

                      {detailsTitres[item.id] && (
                        <div className="iris-title-detail">
                          <div>
                            <strong>Traduction</strong>
                            <p dir={langue === 'ar' ? 'rtl' : 'ltr'}>
                              {item.traduction[langue]}
                            </p>
                          </div>
                          <div>
                            <strong>Explication</strong>
                            <p dir={langue === 'ar' ? 'rtl' : 'ltr'}>
                              {item.explication[langue]}
                            </p>
                          </div>
                        </div>
                      )}

                      <button
                        type="button"
                        className="iris-title-info"
                        onClick={() =>
                          setDetailsTitres((anciennes) => ({
                            ...anciennes,
                            [item.id]: !anciennes[item.id],
                          }))
                        }
                      >
                        <Languages size={13} />
                        Traduction / explication
                        {detailsTitres[item.id] ? (
                          <ChevronUp size={13} />
                        ) : (
                          <ChevronDown size={13} />
                        )}
                      </button>
                    </div>
                  )
                })}
              </div>

              <div className="iris-title-legend">
                <span className="legend-dot available" />
                Disponible
                <span className="legend-dot selected-dot" />
                Sélectionné
                <span className="legend-dot used-dot" />
                Utilisé
              </div>
            </div>
          </aside>
        </div>

        <section className="iris-final-area">
          {!corrige ? (
            <>
              <div className="iris-final-info">
                <span className="iris-final-icon">✍️</span>
                <div>
                  <strong>Haben Sie alle Antworten?</strong>
                  <p>
                    Associez les cinq textes à leurs titres pour vérifier vos
                    réponses.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="iris-final-button"
                disabled={nombreReponses !== 5}
                onClick={verifier}
              >
                <CheckCircle2 size={19} />
                Antworten überprüfen
              </button>

              {nombreReponses !== 5 && (
                <p className="iris-final-hint">
                  Encore {5 - nombreReponses} réponse
                  {5 - nombreReponses > 1 ? 's' : ''} à compléter.
                </p>
              )}
            </>
          ) : (
            <div className="iris-results">
              <div className="iris-results-top">
                <div>
                  <span className="iris-section-eyebrow">ERGEBNIS</span>
                  <h2>Ihre Ergebnisse</h2>
                </div>
                <div className="iris-score">
                  <strong>{score}/5</strong>
                  <span>Richtige Antworten</span>
                </div>
              </div>

              <div className="iris-score-track">
                <div
                  className="iris-score-fill"
                  style={{ width: `${(score / 5) * 100}%` }}
                />
              </div>

              <p className="iris-result-message">
                {score === 5
                  ? 'Ausgezeichnet! Alle Antworten sind richtig! 🎉'
                  : score >= 3
                    ? 'Sehr gut! Sie haben eine gute Leistung erbracht. Weiter so!'
                    : 'Gute Übung! Schauen Sie sich die Erklärungen an und versuchen Sie es noch einmal.'}
              </p>

              <div className="iris-result-list">
                {textes.map((texte) => {
                  const correct =
                    reponses[texte.id] === solutions[texte.id]

                  return (
                    <div
                      key={texte.id}
                      className={`iris-result-row ${
                        correct ? 'correct' : 'wrong'
                      }`}
                    >
                      <span className="iris-result-number">{texte.id}</span>
                      <span className="iris-result-status">
                        {correct ? '✓' : '✕'}
                      </span>
                      <div className="iris-result-answer">
                        <strong>
                          {reponses[texte.id]} → {solutions[texte.id]}
                        </strong>
                        <span>
                          {
                            titel.find(
                              (item) => item.id === solutions[texte.id]
                            )?.contenu
                          }
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button
                type="button"
                className="iris-restart-button"
                onClick={recommencer}
              >
                <RotateCcw size={18} />
                Noch einmal versuchen
              </button>
            </div>
          )}
        </section>

        <footer className="iris-footer">
          <span>Deutsch Erfolg</span>
          <span>·</span>
          <span>TELC B1 – Lesen Teil 1</span>
        </footer>
      </main>

      <style jsx global>{`
        .iris-page {
          min-height: 100vh;
          background: #f7f5f0;
          color: #192b43;
          font-family: inherit;
          padding-bottom: 50px;
        }

        .iris-header {
          background: #192b43;
          color: white;
          height: 68px;
          display: flex;
          align-items: center;
        }

        .iris-header-inner {
          max-width: 1320px;
          width: 100%;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .iris-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: white;
          text-decoration: none;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.4px;
        }

        .iris-brand-icon {
          color: #b49760;
          display: flex;
          align-items: center;
        }

        .iris-back {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #e1e7f0;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
        }

        .iris-back:hover {
          color: #b49760;
        }

        .iris-content {
          max-width: 1320px;
          margin: 0 auto;
          padding: 28px;
        }

        .iris-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 1px;
          color: #8a96a9;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .iris-breadcrumb strong {
          color: #192b43;
        }

        .iris-hero {
          position: relative;
          overflow: hidden;
          border-radius: 19px;
          padding: 30px 34px 27px;
          color: white;
          background: #192b43;
          box-shadow: 0 8px 24px rgba(23, 43, 77, 0.12);
        }

        .iris-hero::after {
          content: '';
          position: absolute;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(214, 181, 109, 0.17);
          border-radius: 50%;
          right: -60px;
          top: -140px;
          box-shadow: 0 0 0 30px rgba(214, 181, 109, 0.035),
            0 0 0 60px rgba(214, 181, 109, 0.025);
          pointer-events: none;
        }

        .iris-hero-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .iris-eyebrow,
        .iris-section-eyebrow {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .iris-eyebrow {
          color: #b49760;
        }

        .iris-level {
          background: rgba(214, 181, 109, 0.16);
          border: 1px solid rgba(214, 181, 109, 0.45);
          color: #e3cb96;
          padding: 6px 13px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 800;
        }

        .iris-hero h1 {
          font-size: 34px;
          line-height: 1.15;
          margin: 15px 0 8px;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        .iris-hero > p {
          color: #dce4ef;
          font-size: 14px;
          margin: 0;
        }

        .iris-progress-area {
          max-width: 380px;
          margin-top: 25px;
        }

        .iris-progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #dce4ef;
          margin-bottom: 8px;
        }

        .iris-progress-labels strong {
          color: #e3cb96;
        }

        .iris-progress-track,
        .iris-score-track {
          width: 100%;
          height: 7px;
          background: rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          overflow: hidden;
        }

        .iris-progress-fill {
          height: 100%;
          background: #b49760;
          border-radius: 20px;
          transition: width 0.3s ease;
        }

        .iris-language-bar {
          margin: 20px 0 14px;
          padding: 12px 16px;
          background: white;
          border: 1px solid #e8edf4;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .iris-language-title {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 700;
          color: #53647d;
        }

        .iris-language-title svg {
          color: #c09b4e;
        }

        .iris-language-options {
          display: flex;
          gap: 5px;
          background: #f1f4f8;
          padding: 4px;
          border-radius: 9px;
        }

        .iris-language-button {
          border: 0;
          background: transparent;
          color: #68768a;
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          border-radius: 7px;
          padding: 7px 12px;
          cursor: pointer;
        }

        .iris-language-button.active {
          background: #192b43;
          color: white;
          box-shadow: 0 2px 5px rgba(23, 43, 77, 0.16);
        }

        .iris-instructions {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff9eb;
          border: 1px solid #f0e2bd;
          color: #76613a;
          padding: 12px 16px;
          border-radius: 11px;
          font-size: 12px;
          line-height: 1.5;
          margin-bottom: 25px;
        }

        .iris-instruction-icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        .iris-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(330px, 0.85fr);
          align-items: start;
          gap: 25px;
        }

        .iris-section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }

        .iris-section-eyebrow {
          color: #b18b40;
          display: block;
          margin-bottom: 5px;
        }

        .iris-section-heading h2,
        .iris-results-top h2 {
          font-size: 19px;
          color: #192b43;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .iris-count {
          border-radius: 30px;
          background: #e9eef5;
          color: #52647d;
          padding: 6px 10px;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .iris-text-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .iris-text-card {
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 14px;
          padding: 19px;
          box-shadow: 0 3px 10px rgba(23, 43, 77, 0.035);
          transition: border-color 0.2s, box-shadow 0.2s;
          min-width: 0;
        }

        .iris-text-card.has-answer {
          border-color: #b8c7da;
        }

        .iris-text-card.is-correct {
          border-color: #6ab68a;
          background: #fbfffc;
        }

        .iris-text-card.is-wrong {
          border-color: #e2a0a0;
          background: #fffdfd;
        }

        .iris-text-card-header {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 13px;
        }

        .iris-text-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 29px;
          height: 29px;
          border-radius: 8px;
          background: #192b43;
          color: white;
          font-weight: 800;
          font-size: 13px;
        }

        .iris-text-label {
          font-size: 10px;
          font-weight: 800;
          color: #626a75;
          letter-spacing: 1.1px;
        }

        .iris-result-icon {
          margin-left: auto;
          display: flex;
          align-items: center;
        }

        .iris-result-icon.correct {
          color: #26965a;
        }

        .iris-result-icon.wrong {
          color: #d34c4c;
          font-weight: 900;
        }

        .iris-answer-slot {
          width: 100%;
          min-height: 42px;
          border: 1px dashed #cbd4e0;
          border-radius: 8px;
          background: #f7f5f0;
          color: #626a75;
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
          padding: 9px 12px;
          margin-bottom: 14px;
          font-family: inherit;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .iris-answer-slot:hover {
          border-color: #c09b4e;
          background: #fffcf4;
        }

        .iris-answer-slot.filled {
          border: 1px solid #d9c28e;
          background: #fffaf0;
          color: #6b5529;
        }

        .iris-answer-slot.filled strong {
          background: #b49760;
          color: #192b43;
          width: 23px;
          height: 23px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 11px;
        }

        .iris-answer-slot.filled > span:nth-child(2) {
          font-weight: 700;
          flex: 1;
        }

        .iris-remove {
          font-size: 19px;
          color: #a18b62;
          line-height: 1;
        }

        .iris-text-content {
          color: #34445a;
          font-size: 13px;
          line-height: 1.85;
          margin: 0;
          text-align: left;
          overflow-wrap: anywhere;
        }

        .iris-info-panel {
          margin-top: 14px;
          border-radius: 9px;
          padding: 13px 14px;
          font-size: 12px;
          line-height: 1.75;
        }

        .translation-panel {
          background: #f0f5fc;
          border: 1px solid #dce7f5;
          color: #354f70;
        }

        .explanation-panel {
          background: #fff9ec;
          border: 1px solid #f0e4c6;
          color: #705b35;
        }

        .iris-info-title {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 7px;
        }

        .iris-info-panel p {
          margin: 0;
        }

        .iris-text-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 15px;
          padding-top: 12px;
          border-top: 1px solid #e3ded3;
        }

        .iris-small-action,
        .iris-check-one {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 9px;
          border-radius: 7px;
          border: 1px solid #e3e8ef;
          background: white;
          color: #66768c;
          font-family: inherit;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .iris-small-action:hover,
        .iris-small-action.active {
          background: #f1f5fb;
          color: #192b43;
          border-color: #cbd7e6;
        }

        .iris-check-one {
          margin-left: auto;
          background: #192b43;
          border-color: #192b43;
          color: white;
        }

        .iris-check-one:hover:not(:disabled) {
          background: #263f67;
        }

        .iris-check-one:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .iris-individual-feedback {
          padding: 10px 12px;
          border-radius: 8px;
          margin-top: 12px;
          font-size: 11px;
          font-weight: 700;
        }

        .iris-individual-feedback.correct {
          background: #eaf8ef;
          color: #267a48;
        }

        .iris-individual-feedback.wrong {
          background: #fff0f0;
          color: #b84d4d;
        }

        .iris-correction {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 11px 12px;
          border-radius: 8px;
          margin-top: 12px;
          font-size: 11px;
        }

        .iris-correction.correct {
          background: #eaf8ef;
          color: #267a48;
        }

        .iris-correction.wrong {
          background: #fff0f0;
          color: #a94343;
        }

        .iris-titles-sticky {
          position: sticky;
          top: 20px;
        }

        .iris-title-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .iris-title-wrapper {
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.2s;
        }

        .iris-title-wrapper.selected {
          border-color: #c09b4e;
          background: #fffbf1;
          box-shadow: 0 0 0 2px rgba(214, 181, 109, 0.13);
        }

        .iris-title-wrapper.used {
          background: #f2f5f8;
          border-color: #e3ded3;
        }

        .iris-title-button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 12px;
          text-align: left;
          border: 0;
          background: transparent;
          color: #34445a;
          font-family: inherit;
          font-size: 12px;
          line-height: 1.5;
          cursor: grab;
          min-height: 49px;
        }

        .iris-title-button:disabled {
          cursor: default;
        }

        .iris-title-letter {
          flex-shrink: 0;
          width: 25px;
          height: 25px;
          border-radius: 7px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #edf1f6;
          color: #52647d;
          font-weight: 800;
          font-size: 11px;
        }

        .iris-title-wrapper.selected .iris-title-letter {
          background: #b49760;
          color: #192b43;
        }

        .iris-title-wrapper.used .iris-title-letter {
          background: #dfe6ed;
          color: #778598;
        }

        .iris-title-text {
          flex: 1;
          font-weight: 650;
        }

        .iris-title-used-icon {
          color: #7c9b86;
          flex-shrink: 0;
        }

        .iris-title-info {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
          border: 0;
          border-top: 1px solid #e3ded3;
          background: rgba(245, 247, 250, 0.7);
          padding: 7px 12px;
          color: #8290a2;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
        }

        .iris-title-info:hover {
          color: #192b43;
          background: #f0f4f9;
        }

        .iris-title-detail {
          padding: 11px 13px;
          border-top: 1px solid #e3ded3;
          background: #fafbfd;
          color: #52647d;
          font-size: 11px;
          line-height: 1.65;
        }

        .iris-title-detail > div + div {
          margin-top: 10px;
          padding-top: 9px;
          border-top: 1px solid #e9edf2;
        }

        .iris-title-detail strong {
          color: #192b43;
          font-size: 10px;
        }

        .iris-title-detail p {
          margin: 4px 0 0;
        }

        .iris-title-legend {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 14px;
          padding: 11px;
          background: #edf1f6;
          border-radius: 9px;
          color: #728096;
          font-size: 9px;
          font-weight: 650;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          margin-left: 4px;
        }

        .legend-dot.available {
          background: #b8c4d2;
        }

        .legend-dot.selected-dot {
          background: #b49760;
        }

        .legend-dot.used-dot {
          background: #7c9b86;
        }

        .iris-final-area {
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 15px;
          padding: 22px;
          margin-top: 27px;
          box-shadow: 0 3px 10px rgba(23, 43, 77, 0.035);
        }

        .iris-final-info {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 17px;
        }

        .iris-final-icon {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #fff6e4;
          font-size: 20px;
          flex-shrink: 0;
        }

        .iris-final-info strong {
          font-size: 13px;
          color: #192b43;
        }

        .iris-final-info p {
          font-size: 11px;
          color: #7b8798;
          margin: 4px 0 0;
        }

        .iris-final-button,
        .iris-restart-button {
          width: 100%;
          min-height: 46px;
          border: 0;
          border-radius: 9px;
          background: #192b43;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }

        .iris-final-button:hover:not(:disabled),
        .iris-restart-button:hover {
          background: #263f67;
          transform: translateY(-1px);
        }

        .iris-final-button:disabled {
          background: #aeb9c8;
          cursor: not-allowed;
        }

        .iris-final-hint {
          margin: 10px 0 0;
          text-align: center;
          font-size: 10px;
          color: #929eae;
        }

        .iris-results-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 18px;
        }

        .iris-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff8e9;
          border: 1px solid #f0e1bc;
          border-radius: 11px;
          padding: 10px 17px;
        }

        .iris-score strong {
          font-size: 25px;
          color: #9a7736;
          line-height: 1.1;
        }

        .iris-score span {
          font-size: 9px;
          color: #8d7956;
          margin-top: 4px;
        }

        .iris-score-track {
          background: #e3ded3;
          height: 9px;
        }

        .iris-score-fill {
          height: 100%;
          background: #b49760;
          border-radius: 20px;
          transition: width 0.5s ease;
        }

        .iris-result-message {
          color: #596b82;
          font-size: 12px;
          line-height: 1.6;
          margin: 15px 0;
        }

        .iris-result-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .iris-result-row {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 12px;
          border-radius: 8px;
          background: #f7f5f0;
        }

        .iris-result-row.correct {
          background: #eff9f2;
        }

        .iris-result-row.wrong {
          background: #fff2f2;
        }

        .iris-result-number {
          font-size: 11px;
          font-weight: 800;
          color: #7d899a;
          width: 15px;
        }

        .iris-result-status {
          font-size: 14px;
          font-weight: 900;
          color: #26965a;
        }

        .iris-result-row.wrong .iris-result-status {
          color: #d34c4c;
        }

        .iris-result-answer {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .iris-result-answer strong {
          font-size: 11px;
          color: #263b58;
        }

        .iris-result-answer span {
          font-size: 10px;
          color: #748196;
        }

        .iris-restart-button {
          background: #f1f4f8;
          color: #192b43;
          border: 1px solid #dfe5ed;
        }

        .iris-restart-button:hover {
          background: #e7edf5;
        }

        .iris-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          color: #9aa5b4;
          font-size: 10px;
        }

        .iris-footer span:first-child {
          color: #687991;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .iris-layout {
            grid-template-columns: minmax(0, 1fr);
          }

          .iris-titles-sticky {
            position: static;
          }

          .iris-titles-column {
            order: -1;
          }

          .iris-title-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .iris-header {
            height: 60px;
          }

          .iris-header-inner {
            padding: 0 16px;
          }

          .iris-brand {
            font-size: 16px;
          }

          .iris-back {
            font-size: 11px;
            gap: 5px;
          }

          .iris-content {
            padding: 18px 13px;
          }

          .iris-hero {
            padding: 23px 20px;
            border-radius: 14px;
          }

          .iris-hero h1 {
            font-size: 29px;
          }

          .iris-hero > p {
            font-size: 12px;
            line-height: 1.6;
          }

          .iris-language-bar {
            align-items: flex-start;
            flex-direction: column;
          }

          .iris-language-options {
            width: 100%;
          }

          .iris-language-button {
            flex: 1;
          }

          .iris-instructions {
            font-size: 11px;
            align-items: flex-start;
          }

          .iris-title-list {
            grid-template-columns: 1fr;
          }

          .iris-text-card {
            padding: 14px;
          }

          .iris-text-content {
            font-size: 12px;
            line-height: 1.8;
          }

          .iris-text-actions {
            gap: 6px;
          }

          .iris-small-action,
          .iris-check-one {
            font-size: 9px;
            padding: 7px;
          }

          .iris-final-area {
            padding: 16px;
          }

          .iris-results-top {
            align-items: flex-start;
          }

          .iris-score {
            padding: 8px 12px;
          }
        }

        @media (max-width: 380px) {
          .iris-back span {
            display: none;
          }

          .iris-text-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .iris-check-one {
            margin-left: 0;
            justify-content: center;
          }
        }
      
        /* Deutsch Erfolg — Premium exams */
        .iris-page { background: #f7f5f0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
        [dir="rtl"] .iris-page, .iris-page[dir="rtl"] { font-family: 'Tajawal', Arial, sans-serif; }
        .iris-page .iris-hero { background: #192b43; border: 1px solid #314359; border-radius: 12px; box-shadow: none; text-align: start; }
        .iris-page .iris-hero h1 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.025em; line-height: 1.24; overflow-wrap: anywhere; }
        [dir="rtl"] .iris-page .iris-hero h1, .iris-page[dir="rtl"] .iris-hero h1 { font-family: 'Tajawal', Arial, sans-serif; }
        .iris-page a:focus-visible, .iris-page button:focus-visible, .iris-page select:focus-visible { outline: 2px solid #b49760; outline-offset: 3px; }
        .iris-page .iris-text-card { border-radius: 10px; box-shadow: none; }
        @media (prefers-reduced-motion: reduce) {
          .iris-page *, .iris-page *::before, .iris-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
        }
      `}</style>
    </div>
  )
}

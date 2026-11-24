
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

type Lang = 'fr' | 'ar' | 'en'

const langues = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English',
}

const textes = [
  {
    id: 1,
    contenu:
      'Frauen lachen auf viele Arten. Sie kichern, glucksen und manchmal singen sie fast. Bei Männern dagegen kommt das viel seltener vor. Aber gemeinsam ist Männern und Frauen, dass sie in Vokalen lachen, die im Mundzentrum gebildet werden. Und das ist entscheidend: Nur wenn die Vokale im Mundzentrum gebildet werden, ist das Lachen für uns fröhlich und positiv. Damit ist bewiesen, dass das Lachen vom Weihnachtsmann, das wie ein tiefes „Ho, ho, ho“ klingt, kaum als fröhlich empfunden wird. Denn dieser Laut wird im hinteren Teil des Mundraums gebildet.',
    traduction: {
      fr: 'Les femmes rient de nombreuses façons. Elles gloussent, ricanent et parfois, elles chantent presque en riant. Chez les hommes, en revanche, cela arrive beaucoup plus rarement. Mais les hommes et les femmes ont un point commun : ils rient en produisant des voyelles qui se forment au centre de la bouche. Et c’est essentiel : ce n’est que lorsque les voyelles sont produites au centre de la bouche que le rire nous paraît joyeux et positif. Cela explique pourquoi le rire du Père Noël, qui ressemble à un profond « Ho, ho, ho », est rarement perçu comme joyeux. En effet, ce son est produit dans la partie arrière de la bouche.',
      ar: 'تضحك النساء بطرق مختلفة. فهن يضحكن ضحكات خفيفة أو متقطعة، وأحياناً يبدو وكأنهن يغنين أثناء الضحك. أما الرجال، فيحدث ذلك لديهم بشكل أقل بكثير. لكن الرجال والنساء يشتركون في أمر واحد: فهم يضحكون باستعمال أصوات تُنتج في وسط الفم. وهذا أمر مهم، لأن الضحك يبدو لنا سعيداً وإيجابياً فقط عندما تُنتج هذه الأصوات في وسط الفم. وهذا يفسر لماذا لا نعتبر ضحكة بابا نويل، التي تشبه صوت «هو هو هو» العميق، ضحكة سعيدة في الغالب، لأن هذا الصوت يصدر من الجزء الخلفي من الفم.',
      en: 'Women laugh in many different ways. They giggle, chuckle and sometimes almost sing when they laugh. Men, on the other hand, do this much less often. However, men and women have one thing in common: they laugh using vowel sounds produced in the centre of the mouth. This is important because laughter sounds cheerful and positive to us only when these vowels are produced in the centre of the mouth. This explains why Santa Claus’s deep “Ho, ho, ho” laugh is rarely perceived as cheerful. This sound is produced at the back of the mouth.',
    },
    explication: {
      fr: 'Le texte compare la manière dont les hommes et les femmes rient. Il explique aussi pourquoi certains sons sont perçus comme joyeux et d’autres moins. L’idée principale est donc la différence entre les façons de rire des hommes et des femmes.',
      ar: 'يقارن النص بين طريقة ضحك النساء والرجال، كما يشرح لماذا تبدو بعض الأصوات مضحكة وسعيدة أكثر من غيرها. الفكرة الأساسية هي اختلاف طرق الضحك بين الرجال والنساء.',
      en: 'The text compares the ways men and women laugh. It also explains why some sounds are perceived as more cheerful than others. The main idea is therefore the difference between how men and women laugh.',
    },
  },
  {
    id: 2,
    contenu:
      'Viel Arbeit, viel Stress. Wer viel arbeitet, muss nicht unbedingt gestresst sein. Frauen in medizinischen Berufen zum Beispiel klagen trotz teilweise hoher Belastung deutlich weniger über stressbedingte Krankheiten als Raumpflegerinnen, Kindergärtnerinnen oder Berufsschullehrerinnen. Dies zeigt eine Untersuchung des Hamburger IPO-Instituts, das für eine Studie 1000 Frauen und Männer befragt hat. Vor Stress schützen laut Studie ein angenehmes Betriebsklima, ein gutes Verhältnis zur Chefin oder zum Chef und die Möglichkeit, die eigene Arbeit selbstständig zu planen.',
    traduction: {
      fr: 'Beaucoup de travail, beaucoup de stress ? Pas nécessairement. Une personne qui travaille beaucoup n’est pas forcément stressée. Par exemple, les femmes qui travaillent dans les professions médicales se plaignent nettement moins de maladies liées au stress que les femmes de ménage, les éducatrices de jeunes enfants ou les enseignantes dans les écoles professionnelles, même si leur charge de travail est parfois importante. C’est ce que montre une étude de l’Institut IPO de Hambourg, qui a interrogé 1 000 femmes et hommes. Selon cette étude, une bonne ambiance au travail, de bonnes relations avec son supérieur ou sa supérieure et la possibilité d’organiser soi-même son travail protègent contre le stress.',
      ar: 'عمل كثير، ضغط نفسي كثير؟ ليس بالضرورة. فالشخص الذي يعمل كثيراً لا يعاني بالضرورة من التوتر. فعلى سبيل المثال، تشتكي النساء العاملات في المهن الطبية من الأمراض المرتبطة بالتوتر بدرجة أقل بكثير من عاملات النظافة ومربيات الأطفال ومعلمات المدارس المهنية، رغم أن ضغط العمل قد يكون مرتفعاً أحياناً. وقد أظهرت ذلك دراسة أجراها معهد IPO في هامبورغ وشملت ألف امرأة ورجل. ووفقاً للدراسة، فإن جو العمل الجيد، والعلاقة الجيدة مع المدير أو المديرة، وإمكانية تنظيم العمل بشكل مستقل، كلها عوامل تحمي من التوتر.',
      en: 'A lot of work, a lot of stress? Not necessarily. People who work a lot do not automatically have to feel stressed. For example, women working in medical professions complain about stress-related illnesses much less often than cleaners, kindergarten teachers or vocational school teachers, even though their workload can sometimes be high. This is shown by a study conducted by the IPO Institute in Hamburg, which surveyed 1,000 women and men. According to the study, a pleasant working atmosphere, a good relationship with the boss and the ability to plan one’s own work independently protect people from stress.',
    },
    explication: {
      fr: 'Le texte montre que le stress ne dépend pas uniquement de la quantité de travail. Une bonne ambiance professionnelle, une bonne relation avec le supérieur et l’autonomie dans l’organisation du travail permettent de mieux résister au stress. C’est la satisfaction dans le travail qui protège du stress.',
      ar: 'يوضح النص أن التوتر لا يعتمد فقط على كمية العمل. فجو العمل الجيد، والعلاقة الجيدة مع المسؤول، والاستقلالية في تنظيم العمل، تساعد على الحماية من التوتر. لذلك فإن الرضا في العمل يحمي من الضغط النفسي.',
      en: 'The text shows that stress does not depend only on the amount of work. A pleasant working atmosphere, a good relationship with the boss and independence in organizing work help protect people from stress. Job satisfaction can therefore protect against stress.',
    },
  },
  {
    id: 3,
    contenu:
      'Ein neues Buch zeigt, wie Männer Fähigkeiten aus dem Arbeitsleben auf die Erziehung übertragen können und so zu erfolgreichen Vätern werden. Da wird die gemeinsame Kindererziehung zur Partnerarbeit (oder sogar zum Joint Venture): Geschicktes Verhandeln heißt, das Kind zu überzeugen, dass ihm die Zähne geputzt werden müssen, und der Familienurlaub hat alle Qualitäten einer Tagung oder eines Seminars: Man erhält die Gelegenheit, die Kinder intensiv zu studieren.',
    traduction: {
      fr: 'Un nouveau livre montre comment les hommes peuvent transférer à l’éducation des enfants les compétences qu’ils ont acquises dans leur vie professionnelle et devenir ainsi des pères qui réussissent. L’éducation des enfants devient alors un travail en partenariat, voire une véritable entreprise commune. Savoir négocier signifie convaincre l’enfant qu’il doit se brosser les dents. Quant aux vacances en famille, elles possèdent toutes les caractéristiques d’une réunion ou d’un séminaire : elles permettent d’étudier les enfants de manière approfondie.',
      ar: 'يُظهر كتاب جديد كيف يمكن للرجال نقل المهارات التي اكتسبوها في حياتهم المهنية إلى تربية الأطفال، وبالتالي يصبحون آباء ناجحين. فتربية الأطفال بشكل مشترك تصبح عملاً جماعياً بين الشريكين، بل تشبه أحياناً مشروعاً مشتركاً. فالتفاوض بمهارة يعني إقناع الطفل بضرورة تنظيف أسنانه، أما العطلة العائلية فتشبه اجتماعاً أو ندوة، لأنها تمنح الآباء فرصة لدراسة أطفالهم بشكل مكثف.',
      en: 'A new book shows how men can transfer skills from their professional lives to raising children and thus become successful fathers. Raising children together becomes teamwork or even a joint venture. Skillful negotiation means convincing a child that their teeth need to be brushed. Family holidays have all the qualities of a conference or seminar: they provide an opportunity to study the children closely.',
    },
    explication: {
      fr: 'Le livre explique comment les hommes peuvent utiliser leurs compétences professionnelles dans l’éducation des enfants. Il compare avec humour la vie familiale au travail en équipe et à la négociation. Le thème principal est celui des hommes qui deviennent de bons pères.',
      ar: 'يشرح الكتاب كيف يمكن للرجال استعمال مهاراتهم المهنية في تربية الأطفال. ويقارن النص بطريقة فكاهية بين الحياة العائلية والعمل الجماعي والتفاوض. الموضوع الأساسي هو نجاح الرجال في دور الأبوة.',
      en: 'The book explains how men can use their professional skills when raising children. The text humorously compares family life with teamwork and negotiation. The main topic is men becoming successful fathers.',
    },
  },
  {
    id: 4,
    contenu:
      'Eine Studie der Universität Essex hat ergeben, dass wir mit siebzig Jahren am glücklichsten sind. Zwar haben die meisten Menschen in diesem Alter gesundheitliche Probleme, aber dafür genießen sie viel Freizeit und haben keinen Stress mehr. Deshalb macht ihnen das Leben so viel Spaß wie nie zuvor. Die Studie besagt auch, dass wir einen ersten Höhepunkt der Lebensfreude mit fünfzehn Jahren erreichen. Danach geht es bergab. Zwischen dreißig und fünfzig Jahren tragen wir am meisten Verantwortung. Das Leben ist geprägt von Sachzwängen.',
    traduction: {
      fr: 'Une étude de l’Université d’Essex a montré que nous sommes les plus heureux à l’âge de soixante-dix ans. Certes, la plupart des personnes de cet âge ont des problèmes de santé, mais elles profitent en contrepartie de beaucoup de temps libre et ne subissent plus autant de stress. C’est pourquoi elles apprécient la vie comme jamais auparavant. L’étude indique également que nous connaissons un premier sommet de joie de vivre à quinze ans. Ensuite, le bonheur diminue. Entre trente et cinquante ans, nous avons le plus de responsabilités. La vie est alors marquée par de nombreuses contraintes.',
      ar: 'أظهرت دراسة أجرتها جامعة إسيكس أننا نكون في أسعد حالاتنا عندما نبلغ سبعين سنة. صحيح أن معظم الناس في هذا العمر يعانون من مشاكل صحية، لكنهم يستمتعون بوقت فراغ كبير ولا يعانون من التوتر كما في السابق. لذلك تصبح الحياة ممتعة بالنسبة إليهم أكثر من أي وقت مضى. كما تشير الدراسة إلى أننا نصل إلى أول قمة للسعادة في سن الخامسة عشرة، ثم تبدأ السعادة في الانخفاض. وبين سن الثلاثين والخمسين نتحمل أكبر قدر من المسؤوليات، وتصبح حياتنا مليئة بالالتزامات والقيود.',
      en: 'A study by the University of Essex has found that we are happiest at the age of seventy. Although most people at this age have health problems, they enjoy plenty of free time and no longer have as much stress. As a result, they enjoy life more than ever before. The study also says that we reach our first peak of happiness at the age of fifteen. After that, happiness declines. Between the ages of thirty and fifty, we have the most responsibilities. Life is shaped by practical constraints.',
    },
    explication: {
      fr: 'Le texte présente les résultats d’une étude sur le bonheur selon l’âge. Il explique que les personnes de 70 ans sont les plus heureuses, notamment grâce à leur temps libre et à l’absence de stress professionnel. Le titre correspondant concerne donc le bonheur à 70 ans.',
      ar: 'يعرض النص نتائج دراسة حول السعادة حسب العمر. ويشرح أن الأشخاص في سن السبعين هم الأكثر سعادة، خاصة بسبب توفر وقت الفراغ وغياب ضغط العمل. لذلك فإن العنوان المناسب يتعلق بمتعة الحياة في سن السبعين.',
      en: 'The text presents a study about happiness at different ages. It explains that people are happiest at seventy, mainly because they have more free time and less work-related stress. The correct heading therefore concerns enjoying life at the age of seventy.',
    },
  },
  {
    id: 5,
    contenu:
      'Warum bleiben manche Managerinnen erfolgreich, obwohl sie Nachrichten mitteilen, die ihr Publikum lieber nicht hören möchte? Ganz einfach: Sie verkaufen die schlechte Nachricht mit Humor. Ein Londoner Soziologe hat während einer Studie beobachtet, dass gerade bei Reden unangenehmen Inhalts oft heiter gelacht wird. Das Lachen wird bewusst provoziert, etwa durch bestimmte Wörter oder durch ein eigenes breites Lächeln. Die fröhliche Stimmung soll dafür sorgen, dass die Zuhörenden das Gefühl haben, mehr zu wissen als alle anderen.',
    traduction: {
      fr: 'Pourquoi certaines femmes managers restent-elles performantes alors qu’elles annoncent des informations que leur public préférerait ne pas entendre ? C’est simple : elles présentent les mauvaises nouvelles avec humour. Au cours d’une étude, un sociologue londonien a observé que les gens rient souvent de bon cœur pendant des discours dont le contenu est désagréable. Le rire est volontairement provoqué, par exemple à l’aide de certains mots ou d’un grand sourire de l’oratrice. Cette ambiance joyeuse doit donner aux personnes qui écoutent le sentiment d’en savoir davantage que les autres.',
      ar: 'لماذا تظل بعض المديرات ناجحات رغم أنهن يقدمن أخباراً لا يرغب الجمهور في سماعها؟ الأمر بسيط: إنهن يقدمن الأخبار السيئة بطريقة فكاهية. فقد لاحظ عالم اجتماع من لندن خلال دراسة أن الناس يضحكون كثيراً أثناء الخطب التي تتضمن محتوى غير مريح. ويتم إثارة الضحك عمداً، مثلاً باستعمال كلمات معينة أو من خلال ابتسامة واسعة من المتحدثة. والهدف من الأجواء المرحة هو جعل المستمعين يشعرون بأنهم يعرفون أكثر من الآخرين.',
      en: 'Why do some female managers remain successful even when they deliver news that their audience would rather not hear? Quite simply, they present bad news with humour. A London sociologist observed in a study that people often laugh cheerfully during speeches containing unpleasant information. The laughter is deliberately encouraged, for example through certain words or by the speaker’s own broad smile. The cheerful atmosphere is intended to make listeners feel that they know more than everyone else.',
    },
    explication: {
      fr: 'Le texte explique une technique de communication : annoncer une mauvaise nouvelle avec humour et sourire afin de rendre le message plus facile à accepter. Le titre doit donc évoquer les mauvaises nouvelles présentées avec le sourire.',
      ar: 'يشرح النص طريقة في التواصل تقوم على تقديم الأخبار السيئة باستعمال الفكاهة والابتسامة حتى يصبح تقبل الرسالة أسهل. لذلك يجب أن يشير العنوان إلى تقديم الأخبار السيئة بابتسامة.',
      en: 'The text explains a communication technique: delivering bad news with humour and a smile to make the message easier to accept. The heading should therefore refer to presenting bad news with a smile.',
    },
  },
]

const ueberschriften = [
  {
    id: 'A',
    text: 'Zufriedenheit im Job schützt vor Stress',
    traduction: {
      fr: 'La satisfaction au travail protège du stress',
      ar: 'الرضا في العمل يحمي من التوتر',
      en: 'Job satisfaction protects against stress',
    },
    explication: {
      fr: 'Ce titre correspond au texte qui explique que les bonnes conditions de travail et les bonnes relations professionnelles protègent du stress.',
      ar: 'يناسب هذا العنوان النص الذي يوضح أن ظروف العمل الجيدة والعلاقات المهنية الجيدة تحمي من التوتر.',
      en: 'This heading matches the text explaining that good working conditions and professional relationships protect against stress.',
    },
  },
  {
    id: 'B',
    text: 'Erfolgreiche Männer können auch gute Väter sein',
    traduction: {
      fr: 'Les hommes qui réussissent peuvent aussi être de bons pères',
      ar: 'يمكن للرجال الناجحين أن يكونوا آباء جيدين أيضاً',
      en: 'Successful men can also be good fathers',
    },
    explication: {
      fr: 'Ce titre parle des hommes qui utilisent leurs compétences professionnelles pour mieux participer à l’éducation de leurs enfants.',
      ar: 'يتحدث هذا العنوان عن الرجال الذين يستعملون مهاراتهم المهنية للمشاركة بشكل أفضل في تربية أطفالهم.',
      en: 'This heading refers to men using their professional skills to become more involved in raising their children.',
    },
  },
  {
    id: 'C',
    text: 'Keiner lacht so fröhlich wie der Weihnachtsmann',
    traduction: {
      fr: 'Personne ne rit aussi joyeusement que le Père Noël',
      ar: 'لا أحد يضحك بمرح مثل بابا نويل',
      en: 'Nobody laughs as cheerfully as Santa Claus',
    },
    explication: {
      fr: 'Le Père Noël est mentionné dans le texte, mais uniquement comme exemple d’un rire qui n’est pas forcément perçu comme joyeux. Ce titre est donc trompeur.',
      ar: 'ذُكر بابا نويل في النص، ولكن فقط كمثال على ضحكة لا يُنظر إليها بالضرورة على أنها سعيدة. لذلك فهذا العنوان مضلل.',
      en: 'Santa Claus is mentioned in the text, but only as an example of laughter that is not necessarily perceived as cheerful. This heading is misleading.',
    },
  },
  {
    id: 'D',
    text: 'Wie Männer und Frauen lachen',
    traduction: {
      fr: 'Comment les hommes et les femmes rient',
      ar: 'كيف يضحك الرجال والنساء',
      en: 'How men and women laugh',
    },
    explication: {
      fr: 'Le texte compare les façons de rire des hommes et des femmes et explique les sons produits pendant le rire.',
      ar: 'يقارن النص بين طرق ضحك الرجال والنساء ويشرح الأصوات التي تصدر أثناء الضحك.',
      en: 'The text compares how men and women laugh and explains the sounds produced during laughter.',
    },
  },
  {
    id: 'E',
    text: 'Weniger Arbeit – weniger Stress',
    traduction: {
      fr: 'Moins de travail – moins de stress',
      ar: 'عمل أقل – توتر أقل',
      en: 'Less work – less stress',
    },
    explication: {
      fr: 'Ce titre laisse penser que la diminution de la quantité de travail réduit le stress. Mais le texte explique surtout que les conditions de travail sont importantes.',
      ar: 'يوحي هذا العنوان بأن تقليل العمل يؤدي إلى تقليل التوتر، لكن النص يركز أساساً على أهمية ظروف العمل.',
      en: 'This heading suggests that less work means less stress. However, the text mainly emphasizes the importance of working conditions.',
    },
  },
  {
    id: 'F',
    text: 'Schlechte Nachrichten? Sagen Sie es mit einem Lächeln',
    traduction: {
      fr: 'De mauvaises nouvelles ? Annoncez-les avec le sourire',
      ar: 'أخبار سيئة؟ قدمها بابتسامة',
      en: 'Bad news? Deliver it with a smile',
    },
    explication: {
      fr: 'Ce titre correspond au texte qui explique comment certaines managers utilisent l’humour et le sourire pour annoncer de mauvaises nouvelles.',
      ar: 'يناسب هذا العنوان النص الذي يشرح كيف تستعمل بعض المديرات الفكاهة والابتسامة عند تقديم الأخبار السيئة.',
      en: 'This heading matches the text explaining how some managers use humour and smiles when delivering bad news.',
    },
  },
  {
    id: 'G',
    text: 'Der Beruf ist für Männer wichtiger als die Familie',
    traduction: {
      fr: 'La profession est plus importante que la famille pour les hommes',
      ar: 'المهنة أهم من الأسرة بالنسبة للرجال',
      en: 'For men, work is more important than family',
    },
    explication: {
      fr: 'Le texte ne dit pas que le travail est plus important que la famille. Il explique au contraire comment les hommes peuvent utiliser leurs compétences professionnelles pour élever leurs enfants.',
      ar: 'لا يقول النص إن العمل أهم من الأسرة، بل يشرح كيف يمكن للرجال استعمال مهاراتهم المهنية في تربية أطفالهم.',
      en: 'The text does not say that work is more important than family. Instead, it explains how men can use their professional skills when raising children.',
    },
  },
  {
    id: 'H',
    text: 'Auch ältere Menschen leiden unter Stress',
    traduction: {
      fr: 'Les personnes âgées souffrent également du stress',
      ar: 'كبار السن يعانون أيضاً من التوتر',
      en: 'Older people also suffer from stress',
    },
    explication: {
      fr: 'Le texte parle du bonheur à différents âges, et non principalement du stress chez les personnes âgées.',
      ar: 'يتحدث النص عن السعادة في مختلف الأعمار، وليس أساساً عن التوتر لدى كبار السن.',
      en: 'The text discusses happiness at different ages, not primarily stress among older people.',
    },
  },
  {
    id: 'I',
    text: 'Frauen reagieren besser auf schlechte Nachrichten als Männer',
    traduction: {
      fr: 'Les femmes réagissent mieux aux mauvaises nouvelles que les hommes',
      ar: 'النساء يتفاعلن مع الأخبار السيئة بشكل أفضل من الرجال',
      en: 'Women react better to bad news than men',
    },
    explication: {
      fr: 'Le texte ne compare pas les réactions des femmes et des hommes face aux mauvaises nouvelles. Il explique plutôt comment les managers peuvent les annoncer avec humour.',
      ar: 'لا يقارن النص بين ردود فعل النساء والرجال تجاه الأخبار السيئة، بل يشرح كيف يمكن للمديرين تقديمها بطريقة فكاهية.',
      en: 'The text does not compare how women and men react to bad news. It explains how managers can deliver such news with humour.',
    },
  },
  {
    id: 'J',
    text: 'Mit 70 Jahren macht das Leben am meisten Spaß',
    traduction: {
      fr: 'À 70 ans, la vie est la plus agréable',
      ar: 'في سن السبعين تكون الحياة أكثر متعة',
      en: 'Life is most enjoyable at the age of 70',
    },
    explication: {
      fr: 'Ce titre correspond à l’étude qui montre que les personnes sont les plus heureuses à l’âge de 70 ans.',
      ar: 'يناسب هذا العنوان الدراسة التي توضح أن الناس يكونون أكثر سعادة في سن السبعين.',
      en: 'This heading matches the study showing that people are happiest at the age of seventy.',
    },
  },
]

const korrekt: Record<number, string> = {
  1: 'D',
  2: 'A',
  3: 'B',
  4: 'J',
  5: 'F',
}

export default function Exercice1() {
  const [reponses, setReponses] = useState<Record<number, string>>({})
  const [selection, setSelection] = useState<string | null>(null)
  const [corrige, setCorrige] = useState(false)
  const [einzelPruefung, setEinzelPruefung] = useState<Record<number, boolean>>({})
  const [langue, setLangue] = useState<Lang>('fr')
  const [traductionsTextes, setTraductionsTextes] = useState<number[]>([])
  const [explicationsTextes, setExplicationsTextes] = useState<number[]>([])
  const [detailsTitres, setDetailsTitres] = useState<string[]>([])

  const t = (id: number) => textes.find(texte => texte.id === id)

  const choisir = (texteId: number, titreId: string) => {
    setReponses(prev => ({ ...prev, [texteId]: titreId }))
    setEinzelPruefung(prev => ({ ...prev, [texteId]: false }))
    setSelection(null)
    setCorrige(false)
  }

  const retirer = (texteId: number) => {
    setReponses(prev => {
      const nouvelle = { ...prev }
      delete nouvelle[texteId]
      return nouvelle
    })

    setEinzelPruefung(prev => ({ ...prev, [texteId]: false }))
    setCorrige(false)
  }

  const verifier = () => {
    setCorrige(true)
    setSelection(null)
  }

  const pruefenEinzeln = (texteId: number) => {
    if (!reponses[texteId]) return

    setEinzelPruefung(prev => ({
      ...prev,
      [texteId]: true,
    }))

    setSelection(null)
  }

  const recommencer = () => {
    setReponses({})
    setSelection(null)
    setCorrige(false)
    setEinzelPruefung({})
  }

  const basculer = (
    id: number,
    liste: number[],
    setListe: (v: number[]) => void
  ) => {
    setListe(
      liste.includes(id)
        ? liste.filter(x => x !== id)
        : [...liste, id]
    )
  }

  const score = Object.entries(reponses).filter(
    ([id, reponse]) => korrekt[Number(id)] === reponse
  ).length

  return (
    <main className="exercise-page">
      <header
        className="exercise-header"
        style={{
          backgroundColor: '#172B4D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/espace-etudiant"
          className="header-brand"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          <GraduationCap
            size={27}
            color="#D6B56D"
            style={{ transform: 'translateY(-3px)' }}
          />

          <span style={{ display: 'inline-flex', gap: '5px' }}>
            <span style={{ color: '#FFFFFF' }}>Deutsch</span>
            <span style={{ color: '#D6B56D' }}>Erfolg</span>
          </span>
        </Link>

        <Link
          href="/espace-etudiant/examens/b1/lesen"
          className="back-link"
          style={{
            color: '#FFFFFF',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            fontSize: '13px',
          }}
        >
          <ArrowLeft size={18} color="#D6B56D" />
          Zurück zu Lesen B1
        </Link>
      </header>

      <div className="exercise-content">
        <div className="breadcrumb">
          TELC B1 <span>/</span> LESEN <span>/</span> TEIL 1
        </div>

        <section className="exercise-hero">
          <span className="hero-label">LESEVERSTEHEN · TEIL 1</span>
          <h1>Eva</h1>
          <p>
            Lesen Sie die Texte und ordnen Sie die passenden Überschriften zu.
          </p>

          <div className="progress-area">
            <div className="progress-label">
              <span>Fortschritt</span>
              <strong>{Object.keys(reponses).length}/5</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${Object.keys(reponses).length * 20}%`,
                }}
              />
            </div>
          </div>
        </section>

        <div className="language-bar">
          <div className="language-label">
            <Languages size={19} />
            <span>Traduction et explication</span>
          </div>

          <select
            value={langue}
            onChange={e => setLangue(e.target.value as Lang)}
          >
            <option value="fr">🇫🇷 Français</option>
            <option value="ar">🇲🇦 العربية</option>
            <option value="en">🇬🇧 English</option>
          </select>

          <span className="language-hint">
            Choisissez une langue pour les traductions
          </span>
        </div>

        <div className="exercise-layout">
          <section className="texts-column">
            <h2>Die Texte</h2>

            <p className="section-hint">
              Wählen Sie einen Text aus und ordnen Sie ihm eine Überschrift zu.
              Vous pouvez afficher la traduction et l'explication à tout moment.
            </p>

            {textes.map(texte => {
              const reponse = reponses[texte.id]
              const istRichtig = korrekt[texte.id] === reponse
              const dejaVerifie = einzelPruefung[texte.id] || corrige
              const traductionOuverte = traductionsTextes.includes(texte.id)
              const explicationOuverte = explicationsTextes.includes(texte.id)

              return (
                <article
                  key={texte.id}
                  className={`text-card ${
                    selection && !corrige ? 'selectable' : ''
                  } ${
                    dejaVerifie && reponse
                      ? istRichtig
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  } ${selection && !corrige ? 'target' : ''}`}
                  onClick={() => {
                    if (selection && !corrige) {
                      choisir(texte.id, selection)
                    }
                  }}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => {
                    e.preventDefault()
                    const id = e.dataTransfer.getData('text/plain')
                    if (id && !corrige) choisir(texte.id, id)
                  }}
                >
                  <div className="text-card-top">
                    <span className="text-number">{texte.id}</span>

                    {reponse ? (
                      <button
                        className="assigned-title"
                        onClick={e => {
                          e.stopPropagation()
                          if (!corrige) retirer(texte.id)
                        }}
                      >
                        {reponse} ·{' '}
                        {ueberschriften.find(titre => titre.id === reponse)?.text}
                        {!corrige && <span className="remove"> ×</span>}
                      </button>
                    ) : (
                      <span className="empty-slot">
                        {selection
                          ? 'Cliquez ici pour déposer le titre'
                          : 'Déposez votre titre ici'}
                      </span>
                    )}

                    {corrige && reponse && (
                      <span className="result-icon">
                        {istRichtig ? <CheckCircle2 /> : '✕'}
                      </span>
                    )}
                  </div>

                  <p className="german-text">{texte.contenu}</p>

                  {reponse && (
                    <div className="individual-check">
                      {!dejaVerifie ? (
                        <button
                          className="individual-check-button"
                          onClick={e => {
                            e.stopPropagation()
                            pruefenEinzeln(texte.id)
                          }}
                        >
                          <CheckCircle2 size={16} />
                          Prüfen
                        </button>
                      ) : (
                        <div
                          className={`instant-feedback ${
                            istRichtig ? 'right' : 'wrong'
                          }`}
                        >
                          {istRichtig ? (
                            <>
                              <CheckCircle2 size={18} />
                              Richtig! Sehr gut!
                            </>
                          ) : (
                            <>
                              <span>✕</span>
                              Leider falsch! Versuchen Sie es noch einmal.
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div
                    className="help-actions"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className={`help-button ${
                        traductionOuverte ? 'active' : ''
                      }`}
                      onClick={() =>
                        basculer(
                          texte.id,
                          traductionsTextes,
                          setTraductionsTextes
                        )
                      }
                    >
                      <Languages size={15} />
                      Traduction
                      {traductionOuverte ? (
                        <ChevronUp size={15} />
                      ) : (
                        <ChevronDown size={15} />
                      )}
                    </button>

                    <button
                      className={`help-button ${
                        explicationOuverte ? 'active' : ''
                      }`}
                      onClick={() =>
                        basculer(
                          texte.id,
                          explicationsTextes,
                          setExplicationsTextes
                        )
                      }
                    >
                      <Lightbulb size={15} />
                      Explication
                      {explicationOuverte ? (
                        <ChevronUp size={15} />
                      ) : (
                        <ChevronDown size={15} />
                      )}
                    </button>
                  </div>

                  {traductionOuverte && (
                    <div
                      className={`translation-panel ${
                        langue === 'ar' ? 'arabic' : ''
                      }`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <strong>{langues[langue]}</strong>
                      <p>{texte.traduction[langue]}</p>
                    </div>
                  )}

                  {explicationOuverte && (
                    <div
                      className={`explanation-panel ${
                        langue === 'ar' ? 'arabic' : ''
                      }`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <strong>
                        <Lightbulb size={15} />
                        Comprendre le contexte
                      </strong>
                      <p>{texte.explication[langue]}</p>
                    </div>
                  )}

                  {corrige && !istRichtig && (
                    <div className="correct-answer">
                      Richtige Antwort: {korrekt[texte.id]}
                    </div>
                  )}
                </article>
              )
            })}
          </section>

          <aside className="titles-column">
            <div className="titles-heading">
              <h2>Überschriften</h2>
              <span>10 Titel</span>
            </div>

            <p className="section-hint">
              Ziehen Sie einen Titel zum passenden Text oder klicken Sie darauf.
              Appuyez sur « Traduire » pour comprendre chaque titre.
            </p>

            <div className="titles-list">
              {ueberschriften.map(titel => {
                const benutzt = Object.values(reponses).includes(titel.id)
                const detailOuvert = detailsTitres.includes(titel.id)

                return (
                  <div
                    key={titel.id}
                    className={`title-item ${
                      selection === titel.id ? 'chosen' : ''
                    } ${benutzt ? 'used' : ''}`}
                  >
                    <button
                      className={`title-option ${
                        selection === titel.id ? 'selected' : ''
                      } ${benutzt ? 'used' : ''}`}
                      draggable={!benutzt && !corrige}
                      onDragStart={e =>
                        e.dataTransfer.setData('text/plain', titel.id)
                      }
                      onClick={() => {
                        if (benutzt || corrige) return
                        setSelection(
                          selection === titel.id ? null : titel.id
                        )
                      }}
                      disabled={benutzt || corrige}
                    >
                      <strong>{titel.id}</strong>
                      <span>{titel.text}</span>
                      {benutzt && <CheckCircle2 size={17} />}
                    </button>

                    <button
                      className="title-help"
                      onClick={() =>
                        setDetailsTitres(prev =>
                          prev.includes(titel.id)
                            ? prev.filter(id => id !== titel.id)
                            : [...prev, titel.id]
                        )
                      }
                    >
                      <Languages size={14} />
                      {detailOuvert
                        ? 'Masquer'
                        : 'Traduire / expliquer'}
                      {detailOuvert ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </button>

                    {detailOuvert && (
                      <div
                        className={`title-detail ${
                          langue === 'ar' ? 'arabic' : ''
                        }`}
                        dir={langue === 'ar' ? 'rtl' : 'ltr'}
                      >
                        <div className="title-translation">
                          <strong>{langues[langue]}</strong>
                          <p>{titel.traduction[langue]}</p>
                        </div>

                        <div className="title-explanation">
                          <strong>
                            <Lightbulb size={14} />
                            Explication
                          </strong>
                          <p>{titel.explication[langue]}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </aside>
        </div>

        <section className="exercise-actions">
          {!corrige ? (
            <button
              className="check-button"
              onClick={verifier}
              disabled={Object.keys(reponses).length !== 5}
            >
              Antworten überprüfen
            </button>
          ) : (
            <>
              <div className="score-result">
                Ergebnis: <strong>{score}/5</strong>
                <span>
                  {score === 5
                    ? 'Sehr gut!'
                    : score >= 3
                      ? 'Gut gemacht!'
                      : 'Weiter üben!'}
                </span>
              </div>

              <button
                className="restart-button"
                onClick={recommencer}
              >
                <RotateCcw size={17} />
                Noch einmal versuchen
              </button>
            </>
          )}
        </section>
      </div>

      <style jsx global>{`
        .exercise-page {
          min-height: 100vh;
          background: #F5F6F8;
          color: #172B4D;
          font-family: Arial, sans-serif;
        }

        .exercise-header {
          height: 68px;
          background: #172B4D;
          padding: 0 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .back-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
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

        .header-brand svg {
          color: #D6B56D;
          transform: translateY(-3px);
        }

        .header-brand strong {
          color: #D6B56D;
        }

        .exercise-content {
          max-width: 1400px;
          margin: auto;
          padding: 30px 24px 60px;
        }

        .breadcrumb {
          font-size: 12px;
          color: #8B96A6;
          margin-bottom: 22px;
        }

        .breadcrumb span {
          margin: 0 8px;
          color: #D6B56D;
        }

        .exercise-hero {
          background: linear-gradient(120deg, #172B4D, #294B78);
          border-radius: 17px;
          color: white;
          padding: 30px 34px;
          margin-bottom: 22px;
        }

        .hero-label {
          color: #D6B56D;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .exercise-hero h1 {
          font-size: 29px;
          margin: 12px 0 8px;
        }

        .exercise-hero p {
          color: #D2DAE5;
          font-size: 14px;
          line-height: 1.6;
        }

        .progress-area {
          max-width: 400px;
          margin-top: 24px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 9px;
        }

        .progress-label strong {
          color: #D6B56D;
        }

        .progress-track {
          height: 7px;
          background: #ffffff30;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #D6B56D;
          border-radius: 10px;
          transition: width .2s;
        }

        .language-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          background: white;
          border: 1px solid #E5E9EF;
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 24px;
        }

        .language-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #172B4D;
          font-size: 13px;
          font-weight: 700;
        }

        .language-label svg {
          color: #A18142;
        }

        .language-bar select {
          border: 1px solid #D9DFE8;
          border-radius: 8px;
          padding: 9px 13px;
          background: #F9FAFC;
          color: #172B4D;
          font-size: 13px;
          cursor: pointer;
        }

        .language-hint {
          font-size: 11px;
          color: #8792A2;
        }

        .exercise-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.65fr) minmax(340px, 1fr);
          gap: 25px;
          align-items: start;
        }

        .texts-column h2,
        .titles-column h2 {
          font-size: 19px;
          margin: 0 0 8px;
          color: #172B4D;
        }

        .section-hint {
          color: #7C8797;
          font-size: 12px;
          line-height: 1.7;
          margin: 0 0 17px;
        }

        .text-card {
          background: white;
          border: 1px solid #E5E9EF;
          border-radius: 13px;
          padding: 22px;
          margin-bottom: 18px;
          transition: .2s;
        }

        .text-card.target {
          border: 2px dashed #D6B56D;
          background: #FFFCF5;
          cursor: pointer;
        }

        .text-card.selectable {
          cursor: pointer;
        }

        .text-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 17px;
          min-height: 64px;
        }

        .text-number {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          background: #172B4D;
          color: #D6B56D;
          border-radius: 9px;
          font-weight: 700;
        }

        .empty-slot {
          display: flex;
          align-items: center;
          min-height: 58px;
          flex: 1;
          font-size: 13px;
          color: #8B96A6;
          background: #F5F6F8;
          border: 2px dashed #D5DCE6;
          padding: 12px 16px;
          border-radius: 9px;
        }

        .text-card.target .empty-slot {
          border-color: #D6B56D;
          background: #FFF8E9;
          color: #92733A;
        }

        .assigned-title {
          flex: 1;
          min-height: 54px;
          border: 1px solid #C9D9EA;
          background: #EAF2FA;
          color: #244D78;
          border-radius: 9px;
          padding: 12px 15px;
          text-align: left;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .remove {
          color: #A83245;
          font-size: 18px;
        }

        .german-text {
          font-size: 14px;
          line-height: 1.95;
          color: #39475A;
          margin: 0 0 17px;
        }

        .individual-check {
          margin: 12px 0 17px;
        }

        .individual-check-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 20px;
          border: 0;
          border-radius: 8px;
          background: #172B4D;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: .2s;
        }

        .individual-check-button:hover {
          background: #294B78;
        }

        .instant-feedback {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 15px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 700;
        }

        .instant-feedback.right {
          color: #21804E;
          background: #EAF7EF;
          border: 1px solid #BDE5CA;
        }

        .instant-feedback.wrong {
          color: #B43B3B;
          background: #FFF0F0;
          border: 1px solid #F1CACA;
        }

        .correct {
          border-color: #45A477;
          background: #F4FBF7;
        }

        .incorrect {
          border-color: #D66B6B;
          background: #FFF7F7;
        }

        .result-icon {
          margin-left: auto;
          color: #25945C;
        }

        .correct-answer {
          margin-top: 12px;
          color: #258052;
          font-size: 12px;
          font-weight: 700;
        }

        .help-actions {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          margin-top: 14px;
        }

        .help-button {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border: 1px solid #E0E5ED;
          border-radius: 8px;
          background: #F8FAFC;
          color: #53647A;
          font-size: 12px;
          cursor: pointer;
        }

        .help-button:hover,
        .help-button.active {
          border-color: #D6B56D;
          background: #FFFCF5;
          color: #8B6C31;
        }

        .translation-panel,
        .explanation-panel {
          margin-top: 12px;
          padding: 15px 17px;
          border-radius: 9px;
          font-size: 13px;
          line-height: 1.85;
        }

        .translation-panel {
          background: #EEF5FC;
          border-left: 3px solid #628DB9;
          color: #294B70;
        }

        .explanation-panel {
          background: #FFF8EA;
          border-left: 3px solid #D6B56D;
          color: #6D572D;
        }

        .translation-panel strong,
        .explanation-panel strong {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
        }

        .translation-panel p,
        .explanation-panel p {
          margin: 7px 0 0;
        }

        .arabic {
          text-align: right;
          font-size: 15px;
          line-height: 2.1;
        }

        .arabic strong {
          justify-content: flex-start;
        }

        .titles-column {
          background: white;
          border: 1px solid #E5E9EF;
          border-radius: 13px;
          padding: 20px;
          position: sticky;
          top: 15px;
        }

        .titles-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .titles-heading span {
          font-size: 11px;
          color: #A18142;
          background: #F8F1E3;
          padding: 6px 9px;
          border-radius: 20px;
        }

        .titles-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .title-item {
          border: 1px solid #E5E9EF;
          border-radius: 10px;
          padding: 9px;
          background: #fff;
        }

        .title-item.chosen {
          border-color: #D6B56D;
          background: #FFFCF5;
        }

        .title-option {
          width: 100%;
          min-height: 62px;
          display: flex;
          align-items: center;
          gap: 11px;
          text-align: left;
          padding: 10px;
          border: 1px solid transparent;
          border-radius: 8px;
          background: white;
          color: #344258;
          cursor: grab;
          font-size: 13px;
          line-height: 1.6;
        }

        .title-option strong {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          background: #F2EBDD;
          color: #92733A;
          border-radius: 7px;
          font-size: 14px;
        }

        .title-option:hover:not(:disabled) {
          border-color: #D6B56D;
          background: #FFFCF5;
        }

        .title-option.selected {
          border: 2px solid #D6B56D;
          background: #FFFCF5;
        }

        .title-option.used {
          opacity: .55;
          cursor: default;
          background: #F5F6F8;
        }

        .title-option:disabled {
          cursor: default;
        }

        .title-option svg {
          flex-shrink: 0;
          color: #25945C;
          margin-left: auto;
        }

        .title-help {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 6px 0 2px 5px;
          border: 0;
          background: transparent;
          color: #8B713D;
          font-size: 11px;
          cursor: pointer;
          padding: 6px;
        }

        .title-help:hover {
          color: #172B4D;
        }

        .title-detail {
          margin-top: 7px;
          padding: 12px;
          background: #F8FAFC;
          border-radius: 8px;
          color: #45556B;
          font-size: 12px;
          line-height: 1.7;
        }

        .title-detail p {
          margin: 5px 0 0;
        }

        .title-translation {
          padding-bottom: 10px;
          border-bottom: 1px solid #E1E6ED;
        }

        .title-explanation {
          padding-top: 10px;
        }

        .title-translation strong,
        .title-explanation strong {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #8B713D;
        }

        .exercise-actions {
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .check-button,
        .restart-button {
          border: 0;
          border-radius: 9px;
          padding: 15px 27px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
        }

        .check-button {
          background: #172B4D;
          color: white;
        }

        .check-button:disabled {
          opacity: .4;
          cursor: not-allowed;
        }

        .restart-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #F2EBDD;
          color: #765C2B;
        }

        .score-result {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }

        .score-result strong {
          color: #A18142;
          font-size: 22px;
        }

        .score-result span {
          color: #64748B;
          font-size: 13px;
        }

        @media(max-width: 900px) {
          .exercise-layout {
            grid-template-columns: 1fr;
          }

          .titles-column {
            position: static;
            grid-row: 1;
          }
        }

        @media(max-width: 600px) {
          .exercise-content {
            padding: 20px 12px 40px;
          }

          .exercise-hero {
            padding: 24px 18px;
          }

          .exercise-hero h1 {
            font-size: 24px;
          }

          .exercise-header {
            padding: 0 14px;
          }

          .text-card {
            padding: 15px;
          }

          .german-text {
            font-size: 13px;
            line-height: 1.9;
          }

          .language-bar {
            gap: 10px;
            padding: 13px;
          }

          .language-hint {
            width: 100%;
          }

          .titles-column {
            padding: 14px;
          }

          .title-option {
            min-height: 58px;
            font-size: 12px;
          }

          .empty-slot {
            min-height: 62px;
          }

          .assigned-title {
            min-height: 58px;
          }
        }
      `}</style>
    </main>
  )
}

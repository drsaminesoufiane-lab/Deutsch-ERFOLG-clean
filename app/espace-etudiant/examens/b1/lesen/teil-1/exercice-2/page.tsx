
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
GraduationCap,
  Languages,
  Lightbulb,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

type Lang = 'fr' | 'ar' | 'en'

const langues = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English'
}

const textes = [
  {
    id: 1,
    contenu: "Der Schokolade-Boom zeigt sich hierzulande nicht nur im hohen Verbrauch (jeder Schweizer isst fast 12 Kilo Schokolade im Jahr!), nein, er hat nun auch die Schönheitsindustrie erreicht. Vom 16. Januar bis zum 24. Februar bietet das Grand Hotel Bad Ragaz unter dem Namen Choco Therapy zahlreiche kosmetische Behandlungsmethoden mit Schokolade an. Die Bäder, Massagen und Hautcremes mit Kakao sind durchaus ernst gemeint, denn Kakao soll eine belebende Eigenschaft haben, die den Menschen jung und gesund aussehen lässt.",
    traduction: {
      fr: "Le boom du chocolat ne se manifeste pas seulement par sa forte consommation en Suisse (chaque Suisse mange presque 12 kilos de chocolat par an !). Il a également atteint l'industrie de la beauté. Du 16 janvier au 24 février, le Grand Hotel Bad Ragaz propose, sous le nom de Choco Therapy, de nombreux soins cosmétiques à base de chocolat. Les bains, les massages et les crèmes pour la peau contenant du cacao sont pris très au sérieux, car le cacao aurait des propriétés revitalisantes permettant aux personnes de paraître jeunes et en bonne santé.",
      ar: "لا تظهر طفرة الشوكولاتة في سويسرا فقط من خلال الاستهلاك المرتفع، حيث يتناول كل سويسري حوالي 12 كيلوغراماً من الشوكولاتة سنوياً، بل وصلت أيضاً إلى مجال التجميل. من 16 يناير إلى 24 فبراير، يقدم فندق Grand Hotel Bad Ragaz علاجات تجميلية عديدة بالشوكولاتة تحت اسم Choco Therapy. وتشمل هذه العلاجات الحمامات والتدليك وكريمات البشرة بالكاكاو، لأن الكاكاو يُعتقد أنه ينشط الجسم ويساعد الإنسان على الظهور بمظهر شاب وصحي.",
      en: "The chocolate boom is not only visible in the high level of consumption in Switzerland (every Swiss person eats almost 12 kilos of chocolate per year). It has also reached the beauty industry. From January 16 to February 24, the Grand Hotel Bad Ragaz offers numerous cosmetic treatments with chocolate under the name Choco Therapy. Baths, massages and skin creams containing cocoa are taken seriously because cocoa is believed to have revitalizing properties that make people look young and healthy."
    },
    explication: {
      fr: "Le texte présente une nouvelle tendance dans le domaine de la beauté : utiliser le chocolat et le cacao dans des soins cosmétiques. Le but annoncé est de donner une apparence plus jeune et plus saine.",
      ar: "يعرض النص اتجاهاً جديداً في مجال التجميل، وهو استعمال الشوكولاتة والكاكاو في العلاجات التجميلية بهدف منح الإنسان مظهراً أكثر شباباً وصحة.",
      en: "The text presents a new beauty trend: using chocolate and cocoa in cosmetic treatments. The advertised aim is to help people look younger and healthier."
    }
  },
  {
    id: 2,
    contenu: "Frisch verheiratete Paare nehmen oft schon in den Flitterwochen einige Kilos zu, weil sie ihre Essgewohnheiten ändern. Das belegt eine neue Studie. In Deutschland sind fast die Hälfte der verheirateten Frauen und circa zwei Drittel der Ehemänner übergewichtig. Alleinstehende sind vermutlich schlanker, weil sie besonderen Wert auf ihr Äußeres legen, mehr Sport treiben und sich selten Zeit für gemütliche Mahlzeiten nehmen.",
    traduction: {
      fr: "Les couples qui viennent de se marier prennent souvent quelques kilos dès leur lune de miel, car ils changent leurs habitudes alimentaires. C'est ce que démontre une nouvelle étude. En Allemagne, presque la moitié des femmes mariées et environ deux tiers des hommes mariés sont en surpoids. Les personnes célibataires sont probablement plus minces parce qu'elles accordent une importance particulière à leur apparence, font davantage de sport et prennent rarement le temps de faire des repas tranquilles.",
      ar: "غالباً ما يكتسب الأزواج حديثو الزواج بعض الكيلوغرامات خلال شهر العسل، لأنهم يغيرون عاداتهم الغذائية. وهذا ما تثبته دراسة جديدة. في ألمانيا، تعاني حوالي نصف النساء المتزوجات وثلثا الرجال المتزوجين تقريباً من زيادة الوزن. أما الأشخاص غير المتزوجين فمن المحتمل أن يكونوا أكثر نحافة لأنهم يهتمون بمظهرهم، ويمارسون الرياضة أكثر، ولا يخصصون وقتاً كثيراً للوجبات الطويلة.",
      en: "Newly married couples often gain a few kilos during their honeymoon because they change their eating habits. A new study confirms this. In Germany, almost half of married women and around two thirds of married men are overweight. Single people are probably slimmer because they pay more attention to their appearance, do more sport and rarely take time for leisurely meals."
    },
    explication: {
      fr: "Le sujet central est la prise de poids après le mariage. L'étude explique que les personnes mariées ont plus souvent tendance à être en surpoids que les personnes célibataires.",
      ar: "الموضوع الأساسي هو زيادة الوزن بعد الزواج. تشير الدراسة إلى أن الأشخاص المتزوجين يعانون من زيادة الوزن بشكل أكثر شيوعاً مقارنة بغير المتزوجين.",
      en: "The main topic is weight gain after marriage. The study suggests that married people are more likely to be overweight than single people."
    }
  },
  {
    id: 3,
    contenu: "Wer acht Stunden und länger schläft, hat eine deutlich kürzere Lebenserwartung. Das berichtete das Apothekenmagazin Gesundheit am Mittwoch und bezog sich dabei auf eine neue japanische Studie. Schlecht für die Männer, denn laut dieser Studie schlafen Männer im Durchschnitt eine halbe Stunde länger pro Nacht als Frauen. Aber es gibt auch eine gute Nachricht für die Viel- und Langschläfer: Wer lange schläft, hat weniger Gewichtsprobleme und fühlt sich gesünder.",
    traduction: {
      fr: "Les personnes qui dorment huit heures ou davantage ont une espérance de vie nettement plus courte. C'est ce qu'a rapporté mercredi le magazine Gesundheit, en se référant à une nouvelle étude japonaise. Ce n'est pas une bonne nouvelle pour les hommes, car selon cette étude, ils dorment en moyenne une demi-heure de plus par nuit que les femmes. Mais il y a aussi une bonne nouvelle pour ceux qui dorment beaucoup : ils ont moins de problèmes de poids et se sentent en meilleure santé.",
      ar: "الأشخاص الذين ينامون ثماني ساعات أو أكثر لديهم متوسط عمر متوقع أقصر بشكل واضح. هذا ما ذكرته مجلة Gesundheit يوم الأربعاء استناداً إلى دراسة يابانية جديدة. وهذا خبر غير جيد للرجال، لأن الدراسة تشير إلى أنهم ينامون في المتوسط نصف ساعة أكثر من النساء كل ليلة. لكن هناك خبراً جيداً أيضاً لمن ينامون كثيراً: فهم يعانون من مشاكل أقل في الوزن ويشعرون بأنهم أكثر صحة.",
      en: "People who sleep eight hours or more have a significantly shorter life expectancy. This was reported by the health magazine Gesundheit, referring to a new Japanese study. This is bad news for men because, according to the study, they sleep on average half an hour longer per night than women. However, there is also good news for long sleepers: they have fewer weight problems and feel healthier."
    },
    explication: {
      fr: "Le texte rapporte les résultats d'une étude japonaise sur la durée du sommeil. L'idée principale est que dormir huit heures ou davantage serait associé à une espérance de vie plus courte. Attention : le texte mentionne aussi certains avantages du sommeil prolongé.",
      ar: "يعرض النص نتائج دراسة يابانية حول مدة النوم. الفكرة الأساسية هي أن النوم لمدة ثماني ساعات أو أكثر يرتبط بانخفاض متوسط العمر المتوقع. وينبغي الانتباه إلى أن النص يذكر أيضاً بعض فوائد النوم الطويل.",
      en: "The text reports the results of a Japanese study on sleep duration. Its main point is that sleeping eight hours or more is associated with a shorter life expectancy. The text also mentions some benefits of longer sleep."
    }
  },
  {
    id: 4,
    contenu: "Nach dem Motto beschwingt und bewegt starten die Schweizer Gesundheitsbehörden eine landesweite Bewegungskampagne. Dabei soll die Schweizer Bevölkerung aufgerufen werden, ausgewogen zu essen und sich täglich zu bewegen. Fast zwei Drittel der Bevölkerung in der Schweiz sind wenig aktiv und essen zu viel. Die Kampagne soll den Leuten zeigen, wie Sport und gesunde Ernährung ohne großen Aufwand in den Alltag integriert werden können, z. B. mit einem Spaziergang am Mittag oder mit einem Apfel zum Znüni statt Schokolade.",
    traduction: {
      fr: "Avec la devise « Pleins d'énergie et en mouvement », les autorités sanitaires suisses lancent une campagne nationale pour encourager l'activité physique. La population suisse est invitée à manger de manière équilibrée et à bouger chaque jour. Presque deux tiers de la population suisse sont peu actifs et mangent trop. La campagne doit montrer aux gens comment intégrer facilement le sport et une alimentation saine dans leur quotidien, par exemple en faisant une promenade à midi ou en mangeant une pomme au goûter du matin plutôt que du chocolat.",
      ar: "تطلق السلطات الصحية السويسرية حملة وطنية للنشاط البدني تحت شعار النشاط والحركة. وتهدف الحملة إلى تشجيع السكان على تناول غذاء متوازن وممارسة الحركة يومياً. حوالي ثلثي السكان في سويسرا لا يمارسون نشاطاً بدنياً كافياً ويأكلون كثيراً. وتسعى الحملة إلى توضيح كيفية إدماج الرياضة والتغذية الصحية في الحياة اليومية بسهولة، مثل المشي وقت الظهيرة أو تناول تفاحة بدل الشوكولاتة.",
      en: "Under the motto Active and on the move, the Swiss health authorities are launching a nationwide physical activity campaign. The population is encouraged to eat a balanced diet and exercise every day. Almost two thirds of the Swiss population are not very active and eat too much. The campaign aims to show people how to include sport and healthy eating in everyday life without much effort, for example by taking a walk at lunchtime or eating an apple instead of chocolate."
    },
    explication: {
      fr: "Le texte parle d'une campagne nationale lancée par les autorités suisses. Son objectif est d'encourager la population à faire plus d'activité physique et à adopter une alimentation équilibrée.",
      ar: "يتحدث النص عن حملة وطنية أطلقتها السلطات السويسرية. وهدفها تشجيع السكان على ممارسة النشاط البدني وتناول غذاء متوازن.",
      en: "The text describes a nationwide campaign launched by the Swiss authorities. Its aim is to encourage people to be more physically active and eat a balanced diet."
    }
  },
  {
    id: 5,
    contenu: "Du bist, was du isst hat als Slogan ausgedient. Heute muss es heißen: Gut aussehen mit dem richtigen Essen. Der Trend kommt aus den USA: Dort kaufen bereits viele Leute neue teure Lebensmittel mit wissenschaftlichen Inhaltsstoffen, die dem Kunden jüngeres und schöneres Aussehen versprechen. So bietet z. B. ein New Yorker Nobelhotel das Menü Gegen-Graue-Haare an, das gegen das Älterwerden wirken soll. Aber wer wird schon eine solche Mahlzeit bestellen? Millionen von Leuten, so die Trendforscher. Und zwar aus dem einfachen Grund, weil jeder jung und gut aussehen will, und das mit möglichst wenig Aufwand.",
    traduction: {
      fr: "Le slogan « Tu es ce que tu manges » appartient désormais au passé. Aujourd'hui, il faudrait plutôt dire : « Avoir une belle apparence grâce à une alimentation adaptée ». Cette tendance vient des États-Unis : beaucoup de personnes y achètent déjà de nouveaux aliments coûteux contenant des ingrédients scientifiques qui promettent une apparence plus jeune et plus belle. Ainsi, un hôtel de luxe new-yorkais propose par exemple un menu contre les cheveux gris, censé lutter contre le vieillissement. Selon les chercheurs en tendances, des millions de personnes pourraient commander ce type de repas, car tout le monde veut paraître jeune et beau avec le moins d'efforts possible.",
      ar: "لم يعد الشعار القديم «أنت ما تأكله» مناسباً. واليوم أصبح الشعار هو: «الظهور بمظهر جميل من خلال الطعام المناسب». جاء هذا الاتجاه من الولايات المتحدة، حيث يشتري الكثير من الناس أطعمة جديدة باهظة الثمن تحتوي على مكونات علمية يُقال إنها تمنحهم مظهراً أكثر شباباً وجمالاً. فمثلاً، يقدم فندق فاخر في نيويورك وجبة لمقاومة الشعر الأبيض، ويُفترض أنها تساعد على مقاومة الشيخوخة. ووفقاً للخبراء، قد يطلب ملايين الأشخاص مثل هذه الوجبات لأن الجميع يريد أن يبدو شاباً وجميلاً بأقل مجهود ممكن.",
      en: "The slogan You are what you eat is outdated. Today, it should be: Look good with the right food. The trend comes from the USA, where many people already buy expensive new foods containing scientifically developed ingredients that promise customers a younger and more beautiful appearance. For example, a luxury hotel in New York offers a menu designed to fight grey hair and ageing. According to trend researchers, millions of people may order such meals because everyone wants to look young and beautiful with as little effort as possible."
    },
    explication: {
      fr: "Le texte présente une tendance alimentaire coûteuse : acheter des aliments spéciaux qui promettent de ralentir le vieillissement et d'améliorer l'apparence physique. L'idée centrale est de rester jeune et beau grâce à la nourriture.",
      ar: "يعرض النص اتجاهاً غذائياً مكلفاً يتمثل في شراء أطعمة خاصة تعد بمقاومة الشيخوخة وتحسين المظهر. الفكرة الأساسية هي الحفاظ على الشباب والجمال من خلال الطعام.",
      en: "The text describes an expensive food trend: buying special foods that promise to slow ageing and improve appearance. The central idea is staying young and beautiful through food."
    }
  }
]

const ueberschriften = [
  {
    id: 'A',
    text: 'Schweizer sollen gesünder leben',
    traduction: {
      fr: 'Les Suisses devraient vivre plus sainement',
      ar: 'ينبغي أن يعيش السويسريون بطريقة أكثر صحة',
      en: 'Swiss people should live more healthily'
    },
    explication: {
      fr: "Le titre invite les habitants de Suisse à adopter de meilleures habitudes alimentaires et à bouger davantage.",
      ar: "يدعو العنوان سكان سويسرا إلى تحسين عاداتهم الغذائية وممارسة المزيد من الحركة.",
      en: "The heading encourages people in Switzerland to improve their eating habits and be more active."
    }
  },
  {
    id: 'B',
    text: 'Neu im Trend: Jung und gesund – mit der Schokolade',
    traduction: {
      fr: 'Nouvelle tendance : rester jeune et en bonne santé grâce au chocolat',
      ar: 'اتجاه جديد: الشباب والصحة بفضل الشوكولاتة',
      en: 'New trend: young and healthy with chocolate'
    },
    explication: {
      fr: "Le titre fait référence à l'utilisation du chocolat dans les soins de beauté pour paraître jeune et en bonne santé.",
      ar: "يشير العنوان إلى استعمال الشوكولاتة في علاجات التجميل للظهور بمظهر شاب وصحي.",
      en: "The heading refers to using chocolate in beauty treatments to look young and healthy."
    }
  },
  {
    id: 'C',
    text: 'Studie zeigt: Heiraten macht dick',
    traduction: {
      fr: 'Une étude montre que le mariage fait grossir',
      ar: 'دراسة تكشف أن الزواج يؤدي إلى زيادة الوزن',
      en: 'Study shows: marriage makes people gain weight'
    },
    explication: {
      fr: "Le titre résume l'étude selon laquelle les personnes mariées prennent plus facilement du poids.",
      ar: "يلخص العنوان الدراسة التي تشير إلى أن المتزوجين يكتسبون الوزن بسهولة أكبر.",
      en: "The heading summarizes the study suggesting that married people tend to gain more weight."
    }
  },
  {
    id: 'D',
    text: 'Japanische Studie: Vielschläfer leben länger',
    traduction: {
      fr: 'Étude japonaise : les gros dormeurs vivent plus longtemps',
      ar: 'دراسة يابانية: الأشخاص الذين ينامون كثيراً يعيشون مدة أطول',
      en: 'Japanese study: long sleepers live longer'
    },
    explication: {
      fr: "Ce titre affirme que les personnes qui dorment longtemps vivent plus longtemps. Il ne correspond pas au résultat principal présenté dans le texte.",
      ar: "يؤكد هذا العنوان أن الأشخاص الذين ينامون طويلاً يعيشون مدة أطول، لكنه لا يطابق النتيجة الأساسية الواردة في النص.",
      en: "This heading claims that people who sleep for a long time live longer. It does not match the main finding in the text."
    }
  },
  {
    id: 'E',
    text: 'Die Mehrheit der Schweizer treibt aktiv Sport',
    traduction: {
      fr: 'La majorité des Suisses pratique activement du sport',
      ar: 'أغلبية السويسريين يمارسون الرياضة بنشاط',
      en: 'The majority of Swiss people actively do sports'
    },
    explication: {
      fr: "Le titre affirme que la majorité des Suisses font du sport. Or, le texte dit au contraire que presque deux tiers sont peu actifs.",
      ar: "يقول العنوان إن أغلبية السويسريين يمارسون الرياضة، لكن النص يذكر العكس: حوالي الثلثين لا يمارسون نشاطاً كافياً.",
      en: "The heading says most Swiss people exercise actively. However, the text says that almost two thirds are not very active."
    }
  },
  {
    id: 'F',
    text: 'Statistik: Unverheiratete haben oft ein paar Kilos zu viel',
    traduction: {
      fr: 'Statistiques : les célibataires ont souvent quelques kilos en trop',
      ar: 'إحصائيات: غير المتزوجين لديهم غالباً بعض الكيلوغرامات الزائدة',
      en: 'Statistics: unmarried people often have a few extra kilos'
    },
    explication: {
      fr: "Ce titre parle des personnes célibataires en surpoids. Mais le texte explique plutôt que les personnes mariées sont plus souvent en surpoids.",
      ar: "يتحدث العنوان عن زيادة الوزن لدى غير المتزوجين. لكن النص يوضح أن زيادة الوزن أكثر شيوعاً بين المتزوجين.",
      en: "This heading concerns overweight single people. The text actually says that overweight is more common among married people."
    }
  },
  {
    id: 'G',
    text: 'Teures Essen für mehr Jugend und Schönheit',
    traduction: {
      fr: 'Une alimentation coûteuse pour plus de jeunesse et de beauté',
      ar: 'طعام باهظ الثمن من أجل المزيد من الشباب والجمال',
      en: 'Expensive food for more youth and beauty'
    },
    explication: {
      fr: "Le titre correspond aux aliments coûteux qui promettent de donner une apparence plus jeune et plus belle.",
      ar: "يتناسب العنوان مع الأطعمة الباهظة التي تعد بمنح مظهر أكثر شباباً وجمالاً.",
      en: "The heading matches the expensive foods that promise a younger and more beautiful appearance."
    }
  },
  {
    id: 'H',
    text: 'USA: Nachfrage nach neuen Lebensmitteln geht zurück',
    traduction: {
      fr: 'États-Unis : la demande de nouveaux aliments diminue',
      ar: 'الولايات المتحدة: الطلب على الأطعمة الجديدة يتراجع',
      en: 'USA: demand for new foods is declining'
    },
    explication: {
      fr: "Ce titre annonce une baisse de la demande. Le texte parle au contraire d'une tendance qui attire de nombreux consommateurs.",
      ar: "يشير العنوان إلى انخفاض الطلب، بينما يتحدث النص عن اتجاه يجذب عدداً كبيراً من المستهلكين.",
      en: "This heading suggests that demand is falling. The text instead describes a trend attracting many consumers."
    }
  },
  {
    id: 'I',
    text: 'Schokolade essen – jung bleiben',
    traduction: {
      fr: 'Manger du chocolat pour rester jeune',
      ar: 'تناول الشوكولاتة للبقاء شاباً',
      en: 'Eat chocolate – stay young'
    },
    explication: {
      fr: "Ce titre évoque le fait de manger du chocolat pour rester jeune. Le texte 1 parle plutôt de soins cosmétiques à base de chocolat.",
      ar: "يتحدث العنوان عن تناول الشوكولاتة للبقاء شاباً، بينما يتناول النص الأول علاجات تجميلية تعتمد على الشوكولاتة.",
      en: "This heading refers to eating chocolate to stay young. Text 1 is actually about cosmetic treatments using chocolate."
    }
  },
  {
    id: 'J',
    text: 'Weniger schlafen – länger leben',
    traduction: {
      fr: 'Dormir moins pour vivre plus longtemps',
      ar: 'النوم أقل من أجل العيش مدة أطول',
      en: 'Sleep less – live longer'
    },
    explication: {
      fr: "Le titre résume l'idée principale de l'étude japonaise : dormir huit heures ou davantage serait associé à une espérance de vie plus courte.",
      ar: "يلخص العنوان الفكرة الأساسية للدراسة اليابانية: النوم لمدة ثماني ساعات أو أكثر يرتبط بمتوسط عمر متوقع أقصر.",
      en: "The heading summarizes the main point of the Japanese study: sleeping eight hours or more is associated with a shorter life expectancy."
    }
  }
]

const korrekt: Record<number, string> = {
  1: 'B',
  2: 'C',
  3: 'J',
  4: 'A',
  5: 'G'
}

export default function Exercice2() {
  const [reponses, setReponses] = useState<Record<number, string>>({})
  const [selection, setSelection] = useState<string | null>(null)
  const [corrige, setCorrige] = useState(false)
  const [einzelPruefung, setEinzelPruefung] = useState<Record<number, boolean>>({})
  const [langue, setLangue] = useState<Lang>('fr')
  const [traductionsTextes, setTraductionsTextes] = useState<number[]>([])
  const [explicationsTextes, setExplicationsTextes] = useState<number[]>([])
  const [detailsTitres, setDetailsTitres] = useState<string[]>([])

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

  const pruefenEinzeln = (texteId: number) => {
    if (!reponses[texteId]) return
    setEinzelPruefung(prev => ({ ...prev, [texteId]: true }))
    setSelection(null)
  }

  const verifier = () => {
    setCorrige(true)
    setSelection(null)
  }

  const recommencer = () => {
    setReponses({})
    setSelection(null)
    setCorrige(false)
    setEinzelPruefung({})
  }

  const basculer = (id: number, liste: number[], setListe: (v: number[]) => void) => {
    setListe(liste.includes(id) ? liste.filter(x => x !== id) : [...liste, id])
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
    justifyContent: 'space-between'
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
      fontWeight: 700
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
      fontSize: '13px'
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
          <h1>Rita</h1>
          <p>Lesen Sie die Texte und ordnen Sie die passenden Überschriften zu.</p>
          <div className="progress-area">
            <div className="progress-label">
              <span>Fortschritt</span>
              <strong>{Object.keys(reponses).length}/5</strong>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${Object.keys(reponses).length * 20}%` }}
              />
            </div>
          </div>
        </section>

        <div className="language-bar">
          <div className="language-label">
            <Languages size={19} />
            <span>Traduction et explication</span>
          </div>
          <select value={langue} onChange={e => setLangue(e.target.value as Lang)}>
            <option value="fr">🇫🇷 Français</option>
            <option value="ar">🇲🇦 العربية</option>
            <option value="en">🇬🇧 English</option>
          </select>
          <span className="language-hint">Choisissez une langue pour les traductions</span>
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
                  className={`text-card ${selection && !corrige ? 'selectable' : ''} ${
                    dejaVerifie && reponse ? (istRichtig ? 'correct' : 'incorrect') : ''
                  } ${selection && !corrige ? 'target' : ''}`}
                  onClick={() => {
                    if (selection && !corrige) choisir(texte.id, selection)
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
                        {reponse} · {ueberschriften.find(t => t.id === reponse)?.text}
                        {!corrige && <span className="remove"> ×</span>}
                      </button>
                    ) : (
                      <span className="empty-slot">
                        {selection ? 'Cliquez ici pour déposer le titre' : 'Déposez votre titre ici'}
                      </span>
                    )}
                    {dejaVerifie && reponse && (
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
                        <div className={`instant-feedback ${istRichtig ? 'right' : 'wrong'}`}>
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

                  <div className="help-actions" onClick={e => e.stopPropagation()}>
                    <button
                      className={`help-button ${traductionOuverte ? 'active' : ''}`}
                      onClick={() => basculer(texte.id, traductionsTextes, setTraductionsTextes)}
                    >
                      <Languages size={15} />
                      Traduction
                      {traductionOuverte ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                    <button
                      className={`help-button ${explicationOuverte ? 'active' : ''}`}
                      onClick={() => basculer(texte.id, explicationsTextes, setExplicationsTextes)}
                    >
                      <Lightbulb size={15} />
                      Explication
                      {explicationOuverte ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                  </div>

                  {traductionOuverte && (
                    <div
                      className={`translation-panel ${langue === 'ar' ? 'arabic' : ''}`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                      onClick={e => e.stopPropagation()}
                    >
                      <strong>{langues[langue]}</strong>
                      <p>{texte.traduction[langue]}</p>
                    </div>
                  )}

                  {explicationOuverte && (
                    <div
                      className={`explanation-panel ${langue === 'ar' ? 'arabic' : ''}`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                      onClick={e => e.stopPropagation()}
                    >
                      <strong><Lightbulb size={15} /> Comprendre le contexte</strong>
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
                    className={`title-item ${selection === titel.id ? 'chosen' : ''} ${benutzt ? 'used' : ''}`}
                  >
                    <button
                      className={`title-option ${selection === titel.id ? 'selected' : ''} ${benutzt ? 'used' : ''}`}
                      draggable={!benutzt && !corrige}
                      onDragStart={e => e.dataTransfer.setData('text/plain', titel.id)}
                      onClick={() => {
                        if (benutzt || corrige) return
                        setSelection(selection === titel.id ? null : titel.id)
                      }}
                      disabled={benutzt || corrige}
                    >
                      <strong>{titel.id}</strong>
                      <span>{titel.text}</span>
                      {benutzt && <CheckCircle2 size={17} />}
                    </button>

                    <button
                      className="title-help"
                      onClick={() => setDetailsTitres(prev =>
                        prev.includes(titel.id)
                          ? prev.filter(id => id !== titel.id)
                          : [...prev, titel.id]
                      )}
                    >
                      <Languages size={14} />
                      {detailOuvert ? 'Masquer' : 'Traduire / expliquer'}
                      {detailOuvert ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {detailOuvert && (
                      <div
                        className={`title-detail ${langue === 'ar' ? 'arabic' : ''}`}
                        dir={langue === 'ar' ? 'rtl' : 'ltr'}
                      >
                        <div className="title-translation">
                          <strong>{langues[langue]}</strong>
                          <p>{titel.traduction[langue]}</p>
                        </div>
                        <div className="title-explanation">
                          <strong><Lightbulb size={14} /> Explication</strong>
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
                <span>{score === 5 ? 'Sehr gut!' : score >= 3 ? 'Gut gemacht!' : 'Weiter üben!'}</span>
              </div>
              <button className="restart-button" onClick={recommencer}>
                <RotateCcw size={17} /> Noch einmal versuchen
              </button>
            </>
          )}
        </section>
      </div>

      <style jsx global>{`
        .exercise-page {
          min-height:100vh;
          background:#f7f5f0;
          color:#192b43;
          font-family:Arial,sans-serif;
        }
        .exercise-header {
          height:68px;
          background:#192b43;
          padding:0 7%;
          display:flex;
          justify-content:space-between;
          align-items:center;
        }
        .back-link {
          color:white;
          text-decoration:none;
          display:flex;
          align-items:center;
          gap:9px;
          font-size:13px;
        }
        .header-brand {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #FFFFFF !important;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
}

.header-brand svg {
  color: #b49760 !important;
  transform: translateY(-3px);
  flex-shrink: 0;
}

.header-brand > span {
  display: inline-flex;
  gap: 5px;
}

.header-brand > span > span:first-child {
  color: #FFFFFF !important;
}

.header-brand > span > span:last-child {
  color: #b49760 !important;
}

.back-link {
  color: #FFFFFF !important;
}
        .exercise-content { max-width:1400px;margin:auto;padding:30px 24px 60px; }
        .breadcrumb { font-size:12px;color:#626a75;margin-bottom:22px; }
        .breadcrumb span { margin:0 8px;color:#b49760; }
        .exercise-hero {
          background:#192b43;
          border-radius:17px;
          color:white;
          padding:30px 34px;
          margin-bottom:22px;
        }
        .hero-label { color:#b49760;font-size:11px;font-weight:700;letter-spacing:1.5px; }
        .exercise-hero h1 { font-size:29px;margin:12px 0 8px; }
        .exercise-hero p { color:#D2DAE5;font-size:14px;line-height:1.6; }
        .progress-area { max-width:400px;margin-top:24px; }
        .progress-label { display:flex;justify-content:space-between;font-size:12px;margin-bottom:9px; }
        .progress-label strong { color:#b49760; }
        .progress-track { height:7px;background:#ffffff30;border-radius:10px;overflow:hidden; }
        .progress-fill { height:100%;background:#b49760;border-radius:10px;transition:width .2s; }

        .language-bar {
          display:flex;align-items:center;gap:16px;flex-wrap:wrap;
          background:white;border:1px solid #e3ded3;border-radius:12px;
          padding:14px 18px;margin-bottom:24px;
        }
        .language-label { display:flex;align-items:center;gap:9px;color:#192b43;font-size:13px;font-weight:700; }
        .language-label svg { color:#806337; }
        .language-bar select {
          border:1px solid #D9DFE8;border-radius:8px;padding:9px 13px;
          background:#F9FAFC;color:#192b43;font-size:13px;cursor:pointer;
        }
        .language-hint { font-size:11px;color:#626a75; }

        .exercise-layout { display:grid;grid-template-columns:minmax(0,1.65fr) minmax(340px,1fr);gap:25px;align-items:start; }
        .texts-column h2,.titles-column h2 { font-size:19px;margin:0 0 8px;color:#192b43; }
        .section-hint { color:#7C8797;font-size:12px;line-height:1.7;margin:0 0 17px; }

        .text-card {
          background:white;border:1px solid #e3ded3;border-radius:13px;
          padding:22px;margin-bottom:18px;transition:.2s;
        }
        .text-card.target { border:2px dashed #b49760;background:#FFFCF5;cursor:pointer; }
        .text-card.selectable { cursor:pointer; }
        .text-card-top {
          display:flex;align-items:center;gap:12px;flex-wrap:wrap;
          margin-bottom:17px;min-height:64px;
        }
        .text-number {
          width:36px;height:36px;flex-shrink:0;display:grid;place-items:center;
          background:#192b43;color:#b49760;border-radius:9px;font-weight:700;
        }
        .empty-slot {
          display:flex;align-items:center;min-height:58px;flex:1;
          font-size:13px;color:#626a75;background:#f7f5f0;
          border:2px dashed #D5DCE6;padding:12px 16px;border-radius:9px;
        }
        .text-card.target .empty-slot { border-color:#b49760;background:#FFF8E9;color:#92733A; }
        .assigned-title {
          flex:1;min-height:54px;border:1px solid #C9D9EA;background:#EAF2FA;
          color:#244D78;border-radius:9px;padding:12px 15px;text-align:left;
          font-size:13px;font-weight:700;cursor:pointer;
        }
        .remove { color:#A83245;font-size:18px; }
        .german-text { font-size:14px;line-height:1.95;color:#39475A;margin:0 0 17px; }

        .individual-check { margin:12px 0 17px; }
        .individual-check-button {
          display:inline-flex;align-items:center;justify-content:center;gap:8px;
          padding:11px 20px;border:0;border-radius:8px;background:#192b43;
          color:white;font-size:13px;font-weight:700;cursor:pointer;transition:.2s;
        }
        .individual-check-button:hover { background:#294B78; }
        .instant-feedback {
          display:flex;align-items:center;gap:9px;padding:12px 15px;
          border-radius:9px;font-size:13px;font-weight:700;
        }
        .instant-feedback.right { color:#21804E;background:#EAF7EF;border:1px solid #BDE5CA; }
        .instant-feedback.wrong { color:#B43B3B;background:#FFF0F0;border:1px solid #F1CACA; }

        .correct { border-color:#45A477;background:#F4FBF7; }
        .incorrect { border-color:#D66B6B;background:#FFF7F7; }
        .result-icon { margin-left:auto;color:#25945C; }
        .correct-answer { margin-top:12px;color:#258052;font-size:12px;font-weight:700; }

        .help-actions { display:flex;gap:9px;flex-wrap:wrap;margin-top:14px; }
        .help-button {
          display:flex;align-items:center;gap:7px;padding:9px 12px;
          border:1px solid #E0E5ED;border-radius:8px;background:#f7f5f0;
          color:#53647A;font-size:12px;cursor:pointer;
        }
        .help-button:hover,.help-button.active { border-color:#b49760;background:#FFFCF5;color:#8B6C31; }
        .translation-panel,.explanation-panel {
          margin-top:12px;padding:15px 17px;border-radius:9px;
          font-size:13px;line-height:1.85;
        }
        .translation-panel { background:#EEF5FC;border-left:3px solid #628DB9;color:#294B70; }
        .explanation-panel { background:#FFF8EA;border-left:3px solid #b49760;color:#6D572D; }
        .translation-panel strong,.explanation-panel strong {
          display:flex;align-items:center;gap:7px;font-size:12px;
        }
        .translation-panel p,.explanation-panel p { margin:7px 0 0; }
        .arabic { text-align:right;font-size:15px;line-height:2.1; }
        .arabic strong { justify-content:flex-start; }

        .titles-column {
          background:white;border:1px solid #e3ded3;border-radius:13px;
          padding:20px;position:sticky;top:15px;
        }
        .titles-heading { display:flex;align-items:center;justify-content:space-between; }
        .titles-heading span { font-size:11px;color:#806337;background:#F8F1E3;padding:6px 9px;border-radius:20px; }
        .titles-list { display:flex;flex-direction:column;gap:12px; }
        .title-item { border:1px solid #e3ded3;border-radius:10px;padding:9px;background:#fff; }
        .title-item.chosen { border-color:#b49760;background:#FFFCF5; }
        .title-option {
          width:100%;min-height:62px;display:flex;align-items:center;gap:11px;
          text-align:left;padding:10px;border:1px solid transparent;border-radius:8px;
          background:white;color:#344258;cursor:grab;font-size:13px;line-height:1.6;
        }
        .title-option strong {
          flex-shrink:0;width:32px;height:32px;display:grid;place-items:center;
          background:#F2EBDD;color:#92733A;border-radius:7px;font-size:14px;
        }
        .title-option:hover:not(:disabled) { border-color:#b49760;background:#FFFCF5; }
        .title-option.selected { border:2px solid #b49760;background:#FFFCF5; }
        .title-option.used { opacity:.55;cursor:default;background:#f7f5f0; }
        .title-option:disabled { cursor:default; }
        .title-option svg { flex-shrink:0;color:#25945C;margin-left:auto; }
        .title-help {
          display:flex;align-items:center;gap:7px;margin:6px 0 2px 5px;
          border:0;background:transparent;color:#8B713D;font-size:11px;
          cursor:pointer;padding:6px;
        }
        .title-help:hover { color:#192b43; }
        .title-detail {
          margin-top:7px;padding:12px;background:#f7f5f0;border-radius:8px;
          color:#45556B;font-size:12px;line-height:1.7;
        }
        .title-detail p { margin:5px 0 0; }
        .title-translation { padding-bottom:10px;border-bottom:1px solid #e3ded3; }
        .title-explanation { padding-top:10px; }
        .title-translation strong,.title-explanation strong {
          display:flex;align-items:center;gap:6px;color:#8B713D;
        }

        .exercise-actions {
          margin-top:28px;display:flex;align-items:center;
          justify-content:center;gap:20px;flex-wrap:wrap;
        }
        .check-button,.restart-button {
          border:0;border-radius:9px;padding:15px 27px;
          font-weight:700;font-size:13px;cursor:pointer;
        }
        .check-button { background:#192b43;color:white; }
        .check-button:disabled { opacity:.4;cursor:not-allowed; }
        .restart-button { display:flex;align-items:center;gap:8px;background:#F2EBDD;color:#765C2B; }
        .score-result { display:flex;align-items:center;gap:10px;font-size:16px; }
        .score-result strong { color:#806337;font-size:22px; }
        .score-result span { color:#64748B;font-size:13px; }

        @media(max-width:900px) {
          .exercise-layout { grid-template-columns:1fr; }
          .titles-column { position:static;grid-row:1; }
        }
        @media(max-width:600px) {
          .exercise-content { padding:20px 12px 40px; }
          .exercise-hero { padding:24px 18px; }
          .exercise-hero h1 { font-size:24px; }
          .exercise-header { padding:0 14px; }
          .text-card { padding:15px; }
          .german-text { font-size:13px;line-height:1.9; }
          .language-bar { gap:10px;padding:13px; }
          .language-hint { width:100%; }
          .titles-column { padding:14px; }
          .title-option { min-height:58px;font-size:12px; }
          .empty-slot { min-height:62px; }
          .assigned-title { min-height:58px; }
        }

      
        /* Deutsch Erfolg — Premium exams */
        .exercise-page { background: #f7f5f0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
        [dir="rtl"] .exercise-page, .exercise-page[dir="rtl"] { font-family: 'Tajawal', Arial, sans-serif; }
        .exercise-page .exercise-hero { background: #192b43; border: 1px solid #314359; border-radius: 12px; box-shadow: none; text-align: start; }
        .exercise-page .exercise-hero h1 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.025em; line-height: 1.24; overflow-wrap: anywhere; }
        [dir="rtl"] .exercise-page .exercise-hero h1, .exercise-page[dir="rtl"] .exercise-hero h1 { font-family: 'Tajawal', Arial, sans-serif; }
        .exercise-page a:focus-visible, .exercise-page button:focus-visible, .exercise-page select:focus-visible { outline: 2px solid #b49760; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .exercise-page *, .exercise-page *::before, .exercise-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
        }
      `}</style>
    </main>
  )
}

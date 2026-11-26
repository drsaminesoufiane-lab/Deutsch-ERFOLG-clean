
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
  GraduationCap
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

const langues: Record<Langue, string> = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English'
}

const textes: Texte[] = [
  {
    id: 1,
    contenu: "In Deutschland lernen nur ganz wenige Schüler Griechisch. Es sind insgesamt nur 0,14 aller Schüler. Vor 30 Jahren waren es noch 0,48. So berichtet die griechische Botschaft in Berlin in ihrem Europabericht. Griechisch wird meistens von Zwölftklässlern als dritte Fremdsprache neben Französisch und Englisch gewählt. Die wenigen Schüler, die Griechisch wählen, haben Verwandte in Griechenland.",
    traduction: {
      fr: "En Allemagne, très peu d'élèves apprennent le grec. Ils représentent seulement 0,14 % de l'ensemble des élèves. Il y a 30 ans, cette proportion était encore de 0,48 %. C'est ce que rapporte l'ambassade grecque à Berlin dans son rapport européen. Le grec est généralement choisi par les élèves de terminale comme troisième langue étrangère, après le français et l'anglais. Les rares élèves qui choisissent le grec ont souvent des membres de leur famille en Grèce.",
      ar: "في ألمانيا، يتعلم عدد قليل جداً من التلاميذ اللغة اليونانية. فهم يمثلون فقط 0.14% من مجموع التلاميذ، بينما كانت النسبة قبل 30 سنة تبلغ 0.48%. هذا ما ذكرته السفارة اليونانية في برلين في تقريرها الأوروبي. غالباً ما يختار تلاميذ السنة النهائية اللغة اليونانية كلغة أجنبية ثالثة إلى جانب الفرنسية والإنجليزية. أما التلاميذ القلائل الذين يختارون اليونانية، فلديهم أقارب في اليونان.",
      en: "Very few students in Germany learn Greek. They represent only 0.14% of all students, compared with 0.48% thirty years ago. This is reported by the Greek Embassy in Berlin in its European report. Greek is usually chosen by final-year students as a third foreign language alongside French and English. The few students who choose Greek often have relatives in Greece."
    },
    explication: {
      fr: "Le texte insiste sur le très faible nombre d'élèves qui apprennent le grec dans les écoles allemandes. La proportion a même diminué au cours des trente dernières années. Le titre correspondant est donc celui qui indique que le grec est très peu enseigné.",
      ar: "يركز النص على العدد القليل جداً من التلاميذ الذين يتعلمون اللغة اليونانية في المدارس الألمانية. وقد انخفضت هذه النسبة خلال الثلاثين سنة الماضية. لذلك فالعنوان المناسب هو الذي يشير إلى أن تدريس اليونانية في المدارس الألمانية محدود جداً.",
      en: "The text emphasizes that very few students in German schools learn Greek. The percentage has even decreased over the last thirty years. The correct heading is therefore the one stating that Greek is rarely taught in German schools."
    }
  },
  {
    id: 2,
    contenu: "Dem Meer verdankt die Hansestadt Bremen ihre Bedeutung. Bremer Kaufleute und Seefahrer nutzten die günstige geografische Lage, um in aller Welt heimisch zu werden. Seit Generationen haben sie Handel getrieben, so dass Geld in die Stadt kam. Dies sieht man der Stadt heute noch an: das Alte Rathaus, das Kaufmannshaus, die historische Innenstadt. Außerdem war Bremen auch immer eine Heimat für Märchen, natürlich das Märchen der Bremer Stadtmusikanten.",
    traduction: {
      fr: "La ville hanséatique de Brême doit son importance à la mer. Les commerçants et les marins de Brême ont profité de sa situation géographique favorable pour développer leurs activités dans le monde entier. Depuis des générations, ils ont fait du commerce, ce qui a apporté de la richesse à la ville. On peut encore le constater aujourd'hui à travers l'ancien hôtel de ville, les maisons des commerçants et le centre historique. Brême est également connue pour ses contes, notamment celui des Musiciens de Brême.",
      ar: "تدين مدينة بريمن الهانزية بأهميتها للبحر. فقد استغل التجار والبحارة في بريمن موقعها الجغرافي المناسب لتوسيع أنشطتهم التجارية في جميع أنحاء العالم. وعلى مدى أجيال، مارسوا التجارة، مما جلب الثروة إلى المدينة. ولا تزال آثار هذه الثروة واضحة اليوم في مبنى البلدية القديم وبيوت التجار والمدينة التاريخية. كما ارتبطت بريمن بالقصص الخيالية، وخاصة قصة موسيقيي مدينة بريمن.",
      en: "The Hanseatic city of Bremen owes its importance to the sea. Merchants and sailors from Bremen used its favorable geographical location to establish business connections around the world. For generations, they traded and brought wealth to the city. This wealth can still be seen today in the old town hall, merchants' houses and historic city center. Bremen is also associated with fairy tales, especially the story of the Bremen Town Musicians."
    },
    explication: {
      fr: "Le texte explique que le commerce maritime a permis à Brême de devenir une ville riche et importante. Les bâtiments historiques témoignent encore aujourd'hui de cette richesse. Le titre correct met donc l'accent sur la richesse obtenue grâce au commerce.",
      ar: "يوضح النص أن التجارة البحرية جعلت مدينة بريمن غنية ومهمة. ولا تزال المباني التاريخية شاهدة على هذه الثروة حتى اليوم. لذلك فإن العنوان المناسب هو الذي يربط ثروة المدينة بالتجارة.",
      en: "The text explains that maritime trade made Bremen a wealthy and important city. Historic buildings still bear witness to this wealth. The correct heading therefore refers to becoming rich through trade."
    }
  },
  {
    id: 3,
    contenu: "Freiburg, die Hauptstadt des Schwarzwaldes, liegt in einer der sonnigsten Gegenden Deutschlands. Wo es so viel Sonne gibt, da ist auch viel Lebensfreude, und nicht zuletzt gehören auch badische Küche und badischer Wein zum Besten, was in Deutschland geboten wird. Zum einmaligen Flair der gemütlichen Universitätsstadt trägt auch ihre Lage bei. Frankreich und die Schweiz sind nicht weit entfernt. Die Stadt selbst lockt mit vielen alten Straßen, zahlreichen Museen und Baudenkmälern. Über alles hinaus ragt die große Kirche, die nach 300-jähriger Bauzeit 1513 vollendet wurde.",
    traduction: {
      fr: "Fribourg, considérée comme la capitale de la Forêt-Noire, se trouve dans l'une des régions les plus ensoleillées d'Allemagne. Là où il y a beaucoup de soleil, il y a aussi beaucoup de joie de vivre. La cuisine badoise et le vin de la région comptent également parmi les meilleurs d'Allemagne. La situation géographique contribue aussi au charme particulier de cette agréable ville universitaire. La France et la Suisse ne sont pas loin. La ville attire les visiteurs avec ses vieilles rues, ses nombreux musées et ses monuments historiques. La grande église domine l'ensemble et a été achevée en 1513 après 300 ans de construction.",
      ar: "تقع مدينة فرايبورغ، عاصمة منطقة الغابة السوداء، في واحدة من أكثر المناطق المشمسة في ألمانيا. وحيث توجد الشمس بكثرة، توجد أيضاً متعة الحياة. كما تشتهر المنطقة بمأكولاتها ونبيذها البادني المميز. ويساهم موقع المدينة في منحها طابعاً خاصاً، فهي مدينة جامعية هادئة، كما أن فرنسا وسويسرا قريبتان منها. وتجذب المدينة الزوار بشوارعها القديمة ومتاحفها الكثيرة ومعالمها التاريخية. وتبرز فوقها كنيستها الكبيرة التي اكتمل بناؤها سنة 1513 بعد 300 سنة من العمل.",
      en: "Freiburg, the capital of the Black Forest region, is located in one of Germany's sunniest areas. Where there is plenty of sunshine, there is also a great quality of life. The local Baden cuisine and wine are also among the best in Germany. The city's location contributes to the special atmosphere of this pleasant university town. France and Switzerland are nearby. The city attracts visitors with its old streets, numerous museums and historic monuments. Its large church dominates the skyline and was completed in 1513 after 300 years of construction."
    },
    explication: {
      fr: "Le texte présente Fribourg comme une ville universitaire agréable à vivre. Il décrit son climat ensoleillé, sa gastronomie, sa proximité avec la France et la Suisse ainsi que ses monuments. Le titre doit donc souligner son attractivité et sa qualité de vie.",
      ar: "يقدم النص مدينة فرايبورغ باعتبارها مدينة جامعية جميلة ومريحة للعيش. ويتحدث عن مناخها المشمس ومطبخها وموقعها القريب من فرنسا وسويسرا ومعالمها التاريخية. لذلك يجب أن يبرز العنوان جاذبية المدينة وجودة الحياة فيها.",
      en: "The text presents Freiburg as an attractive university town with a pleasant quality of life. It mentions its sunny climate, food, location near France and Switzerland, and historic monuments. The heading should therefore emphasize the city's attractiveness and quality of life."
    }
  },
  {
    id: 4,
    contenu: "In einer wissenschaftlichen Untersuchung hat man erforscht, warum bestimmte Menschen mehr Geld verdienen als andere. Britische Wissenschaftler behaupten, größeren Menschen zahlt der Chef mehr. Im Laufe des vergangenen Jahres haben zwei weitere Untersuchungen festgestellt: Wer wenig lacht oder häufig mit Kollegen trinken geht, verdient mehr. Nur: Nicht lachen und mit Kollegen trinken gehen, das kann man lernen. Aber wachsen?",
    traduction: {
      fr: "Une étude scientifique a cherché à comprendre pourquoi certaines personnes gagnent plus d'argent que d'autres. Des scientifiques britanniques affirment que les personnes de grande taille sont mieux payées par leur patron. Au cours de l'année dernière, deux autres études ont constaté que les personnes qui rient peu ou qui vont souvent boire un verre avec leurs collègues gagnent davantage. Mais ne pas rire et sortir boire avec ses collègues, cela peut s'apprendre. En revanche, peut-on apprendre à grandir ?",
      ar: "بحثت دراسة علمية في أسباب حصول بعض الأشخاص على رواتب أعلى من غيرهم. ويؤكد علماء بريطانيون أن الأشخاص الأطول قامة يحصلون على أجور أكبر من رؤسائهم. وخلال السنة الماضية، توصلت دراستان أخريان إلى أن الأشخاص الذين يضحكون قليلاً أو يذهبون كثيراً لشرب شيء مع زملائهم يحصلون على رواتب أعلى. لكن يمكن للمرء أن يتعلم عدم الضحك والخروج مع الزملاء. أما زيادة الطول، فهل يمكن تعلمها؟",
      en: "A scientific study investigated why some people earn more money than others. British scientists claim that taller people are paid more by their employers. Two other studies conducted last year found that people who laugh less or often go out for drinks with colleagues earn more. However, one can learn not to laugh and to socialize with colleagues. But can one learn to become taller?"
    },
    explication: {
      fr: "Le texte présente une étude scientifique qui établit un lien entre la taille physique et le salaire. Les personnes plus grandes gagneraient davantage. Les autres comportements mentionnés sont secondaires : l'idée principale concerne l'influence de la taille sur la rémunération.",
      ar: "يعرض النص دراسة علمية تربط بين طول القامة والراتب. فالأشخاص الأطول يحصلون على أجور أعلى حسب الدراسة. أما السلوكيات الأخرى المذكورة فهي ثانوية، والفكرة الرئيسية تتعلق بتأثير طول الجسم على الأجر.",
      en: "The text presents scientific research linking physical height to salary. According to the study, taller people earn more. The other behaviors mentioned are secondary; the main idea is the influence of height on income."
    }
  },
  {
    id: 5,
    contenu: "Das Statistische Bundesamt berichtet, dass in deutschen Schulen allgemein wieder mehr Latein gelernt wird. Allein in Thüringen hat sich die Anzahl in den letzten beiden Jahren verdoppelt. Während der Tiefpunkt bei Latein im vorletzten Jahr erreicht war, wählen zurzeit wieder mehr Schüler Latein als erste Fremdsprache. Als vorteilhaft hat sich offenbar vor allem das Wittenberger Modell erwiesen, das Latein in der fünften Klasse mit einer modernen Fremdsprache (Französisch, Englisch usw.) kombiniert. Allerdings sind hier meist nur drei Stunden für beide Sprachen pro Woche vorgesehen. Das sei bei Weitem zu wenig, kritisieren Lateinlehrer.",
    traduction: {
      fr: "L'Office fédéral allemand de la statistique indique que le latin est de nouveau davantage enseigné dans les écoles allemandes. En Thuringe seulement, le nombre d'élèves concernés a doublé au cours des deux dernières années. Après avoir atteint son niveau le plus bas il y a deux ans, le latin est aujourd'hui choisi à nouveau par davantage d'élèves comme première langue étrangère. Le modèle de Wittenberg semble particulièrement avantageux : il associe le latin à une langue étrangère moderne, comme le français ou l'anglais, dès la cinquième classe. Cependant, seules trois heures par semaine sont généralement prévues pour les deux langues. Les professeurs de latin estiment que c'est largement insuffisant.",
      ar: "أفاد المكتب الاتحادي للإحصاء بأن اللغة اللاتينية أصبحت تُدرّس من جديد بشكل أكبر في المدارس الألمانية. ففي ولاية تورينغن وحدها، تضاعف عدد التلاميذ الذين يتعلمونها خلال السنتين الماضيتين. وبعد أن وصلت دراسة اللاتينية إلى أدنى مستوى لها قبل عامين، أصبح عدد أكبر من التلاميذ يختارونها حالياً كلغة أجنبية أولى. ويبدو أن نموذج فيتنبرغ مفيد بشكل خاص، لأنه يجمع بين اللاتينية ولغة أجنبية حديثة مثل الفرنسية أو الإنجليزية ابتداءً من السنة الخامسة. لكن غالباً ما تُخصص ثلاث ساعات فقط أسبوعياً للغتين، وهو عدد غير كافٍ إطلاقاً حسب مدرسي اللاتينية.",
      en: "The Federal Statistical Office reports that Latin is once again being taught more widely in German schools. In Thuringia alone, the number of students learning it has doubled over the last two years. After reaching its lowest point two years ago, Latin is now being chosen by more students as their first foreign language. The Wittenberg model seems particularly useful because it combines Latin with a modern foreign language, such as French or English, from the fifth grade. However, only three hours per week are usually allocated to both languages. Latin teachers criticize this as far too little."
    },
    explication: {
      fr: "Le texte annonce un regain d'intérêt pour l'apprentissage du latin dans les écoles allemandes. De plus en plus d'élèves choisissent cette langue, notamment grâce à un modèle scolaire qui l'associe à une langue moderne. Le titre correct indique que le latin redevient populaire.",
      ar: "يتحدث النص عن عودة الاهتمام بتعلم اللغة اللاتينية في المدارس الألمانية. فقد أصبح عدد أكبر من التلاميذ يختارونها، خاصة بفضل نموذج تعليمي يجمعها مع لغة حديثة. لذلك فالعنوان المناسب يشير إلى أن اللاتينية أصبحت أكثر شعبية من جديد.",
      en: "The text describes renewed interest in learning Latin in German schools. More students are choosing it, particularly thanks to a school model that combines it with a modern language. The correct heading states that Latin is becoming popular again."
    }
  }
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Märchen-Festspiele in Bremen',
    traduction: {
      fr: 'Festival de contes à Brême',
      ar: 'مهرجان الحكايات الخيالية في بريمن',
      en: 'Fairy-tale festival in Bremen'
    },
    explication: {
      fr: "Ce titre évoque un festival consacré aux contes à Brême. Le texte parle bien des Musiciens de Brême, mais ce n'est pas son sujet principal.",
      ar: 'يشير هذا العنوان إلى مهرجان مخصص للحكايات الخيالية في بريمن. يذكر النص موسيقيي بريمن، لكن هذا ليس موضوعه الأساسي.',
      en: 'This heading refers to a fairy-tale festival in Bremen. The text mentions the Bremen Town Musicians, but this is not its main subject.'
    }
  },
  {
    id: 'B',
    contenu: 'Griechische Botschaft bietet Sprachkurse für Schüler',
    traduction: {
      fr: 'L’ambassade grecque propose des cours de langue aux élèves',
      ar: 'السفارة اليونانية تقدم دروساً لغوية للتلاميذ',
      en: 'Greek Embassy offers language courses for students'
    },
    explication: {
      fr: "Le titre annonce des cours de grec organisés par l'ambassade. Or, le texte parle uniquement du faible nombre d'élèves qui apprennent cette langue.",
      ar: 'يشير العنوان إلى دورات في اللغة اليونانية تنظمها السفارة، بينما يتحدث النص فقط عن قلة عدد التلاميذ الذين يتعلمون هذه اللغة.',
      en: 'The heading announces Greek courses organized by the embassy. However, the text only discusses the small number of students learning the language.'
    }
  },
  {
    id: 'C',
    contenu: 'Universitätsstadt wird 300 Jahre',
    traduction: {
      fr: 'Une ville universitaire fête ses 300 ans',
      ar: 'مدينة جامعية تحتفل بمرور 300 سنة',
      en: 'University town celebrates its 300th anniversary'
    },
    explication: {
      fr: "Ce titre évoque l'anniversaire d'une ville universitaire. Le texte parle de Fribourg et de son église construite pendant 300 ans, et non de l'âge de la ville.",
      ar: 'يتحدث العنوان عن ذكرى تأسيس مدينة جامعية، بينما يشير النص إلى كنيسة فرايبورغ التي استغرق بناؤها 300 سنة، وليس إلى عمر المدينة.',
      en: 'This heading refers to the anniversary of a university town. The text mentions a church in Freiburg that took 300 years to build, not the age of the city.'
    }
  },
  {
    id: 'D',
    contenu: 'Wissenschaft: Von der Körpergröße hängt das Gehalt ab',
    traduction: {
      fr: 'Science : le salaire dépend de la taille physique',
      ar: 'العلم: الراتب يعتمد على طول القامة',
      en: 'Science: salary depends on physical height'
    },
    explication: {
      fr: "Le titre correspond à l'étude scientifique selon laquelle les personnes de grande taille gagneraient davantage. C'est précisément l'idée principale du texte 4.",
      ar: 'يتوافق العنوان مع الدراسة العلمية التي تشير إلى أن الأشخاص الأطول قامة يحصلون على رواتب أعلى. وهذه هي الفكرة الأساسية للنص الرابع.',
      en: 'This heading matches the scientific study suggesting that taller people earn more. This is exactly the main idea of text 4.'
    }
  },
  {
    id: 'E',
    contenu: 'Durch Handel reich geworden',
    traduction: {
      fr: 'Devenue riche grâce au commerce',
      ar: 'أصبحت غنية بفضل التجارة',
      en: 'Became wealthy through trade'
    },
    explication: {
      fr: "Le titre résume l'histoire de Brême : les commerçants et les marins ont enrichi la ville grâce au commerce maritime.",
      ar: 'يلخص العنوان تاريخ بريمن: فقد ساهم التجار والبحارة في جعل المدينة غنية بفضل التجارة البحرية.',
      en: "The heading summarizes Bremen's history: merchants and sailors made the city wealthy through maritime trade."
    }
  },
  {
    id: 'F',
    contenu: 'Interessante Universitätsstadt mit hoher Lebensqualität',
    traduction: {
      fr: 'Une ville universitaire intéressante offrant une grande qualité de vie',
      ar: 'مدينة جامعية مميزة تتمتع بجودة حياة عالية',
      en: 'Interesting university town with a high quality of life'
    },
    explication: {
      fr: "Le titre décrit Fribourg comme une ville universitaire agréable, ensoleillée, riche en culture et bien située près de la France et de la Suisse.",
      ar: 'يصف العنوان فرايبورغ بأنها مدينة جامعية جميلة ومشمسة وغنية بالثقافة، وتتمتع بموقع قريب من فرنسا وسويسرا.',
      en: 'The heading describes Freiburg as a pleasant, sunny university town with cultural attractions and a convenient location near France and Switzerland.'
    }
  },
  {
    id: 'G',
    contenu: 'Latein in deutschen Schulen wieder beliebter',
    traduction: {
      fr: 'Le latin redevient plus populaire dans les écoles allemandes',
      ar: 'اللغة اللاتينية أصبحت أكثر شعبية من جديد في المدارس الألمانية',
      en: 'Latin is becoming popular again in German schools'
    },
    explication: {
      fr: "Le titre correspond à l'augmentation du nombre d'élèves qui choisissent le latin dans les écoles allemandes.",
      ar: 'يتوافق العنوان مع ارتفاع عدد التلاميذ الذين يختارون تعلم اللغة اللاتينية في المدارس الألمانية.',
      en: 'The heading matches the increasing number of students choosing to learn Latin in German schools.'
    }
  },
  {
    id: 'H',
    contenu: 'Wer wenig lacht, verdient auch weniger',
    traduction: {
      fr: 'Celui qui rit peu gagne aussi moins',
      ar: 'من يضحك قليلاً يكسب أقل أيضاً',
      en: 'Those who laugh less also earn less'
    },
    explication: {
      fr: "Ce titre affirme que les personnes qui rient peu gagnent moins. Le texte évoque au contraire une étude selon laquelle elles gagneraient davantage.",
      ar: 'يفيد هذا العنوان بأن الأشخاص الذين يضحكون قليلاً يكسبون أقل، بينما يشير النص إلى دراسة تقول عكس ذلك، أي إنهم قد يكسبون أكثر.',
      en: 'This heading claims that people who laugh less earn less. The text mentions a study suggesting the opposite: they may earn more.'
    }
  },
  {
    id: 'I',
    contenu: 'Fremdsprachen: Schüler lernen nur Englisch und Französisch',
    traduction: {
      fr: 'Langues étrangères : les élèves apprennent uniquement l’anglais et le français',
      ar: 'اللغات الأجنبية: التلاميذ يتعلمون الإنجليزية والفرنسية فقط',
      en: 'Foreign languages: students learn only English and French'
    },
    explication: {
      fr: "Le texte mentionne le français et l'anglais, mais explique surtout que le latin gagne de nouveau en popularité. Ce titre ne résume donc pas le message principal.",
      ar: 'يذكر النص الفرنسية والإنجليزية، لكنه يتحدث أساساً عن عودة شعبية اللغة اللاتينية. لذلك لا يلخص هذا العنوان الفكرة الرئيسية.',
      en: 'The text mentions French and English, but its main subject is the renewed popularity of Latin. This heading does not summarize the main message.'
    }
  },
  {
    id: 'J',
    contenu: 'Griechisch wird in deutschen Schulen kaum unterrichtet',
    traduction: {
      fr: 'Le grec est très peu enseigné dans les écoles allemandes',
      ar: 'اللغة اليونانية نادراً ما تُدرّس في المدارس الألمانية',
      en: 'Greek is rarely taught in German schools'
    },
    explication: {
      fr: "Le titre correspond au texte 1 : seulement 0,14 % des élèves apprennent le grec en Allemagne, contre 0,48 % il y a 30 ans.",
      ar: 'يتوافق العنوان مع النص الأول: فقط 0.14% من التلاميذ يتعلمون اليونانية في ألمانيا، مقابل 0.48% قبل 30 سنة.',
      en: 'This heading matches text 1: only 0.14% of students in Germany learn Greek, compared with 0.48% thirty years ago.'
    }
  }
]

const solutions: Record<number, string> = {
  1: 'J',
  2: 'E',
  3: 'F',
  4: 'D',
  5: 'G'
}

export default function Andreas1Page() {
  const [reponses, setReponses] = useState<Record<number, string>>({})
  const [selection, setSelection] = useState<string | null>(null)
  const [corrige, setCorrige] = useState(false)
  const [einzelPruefung, setEinzelPruefung] = useState<Record<number, boolean>>({})
  const [langue, setLangue] = useState<Langue>('fr')
  const [traductionsTextes, setTraductionsTextes] = useState<number[]>([])
  const [explicationsTextes, setExplicationsTextes] = useState<number[]>([])
  const [detailsTitres, setDetailsTitres] = useState<string[]>([])
  const [draggedTitre, setDraggedTitre] = useState<string | null>(null)

  const choisir = (texteId: number, titreId: string) => {
    if (corrige) return

    const titreDejaUtilise = Object.entries(reponses).some(
      ([id, valeur]) => Number(id) !== texteId && valeur === titreId
    )

    if (titreDejaUtilise) return

    setReponses(prev => ({ ...prev, [texteId]: titreId }))
    setEinzelPruefung(prev => ({ ...prev, [texteId]: false }))
    setSelection(null)
    setCorrige(false)
  }

  const assigner = (texteId: number, titreId: string) => {
    choisir(texteId, titreId)
  }

  const retirer = (texteId: number) => {
    if (corrige) return

    setReponses(prev => {
      const nouvelle = { ...prev }
      delete nouvelle[texteId]
      return nouvelle
    })

    setEinzelPruefung(prev => ({ ...prev, [texteId]: false }))
  }

  const verifier = () => {
    setCorrige(true)
    setSelection(null)
  }

  const pruefenEinzeln = (texteId: number) => {
    if (!reponses[texteId]) return

    setEinzelPruefung(prev => ({
      ...prev,
      [texteId]: true
    }))
    setSelection(null)
  }

  const recommencer = () => {
    setReponses({})
    setSelection(null)
    setCorrige(false)
    setEinzelPruefung({})
    setDraggedTitre(null)
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

  const titreUtilise = (titreId: string) => {
    return Object.values(reponses).includes(titreId)
  }

  const score = Object.entries(reponses).filter(
    ([id, reponse]) => solutions[Number(id)] === reponse
  ).length

  return (
    <main className="paul-page">

      <header className="paul-header">
        <Link href="/espace-etudiant" className="paul-brand">
          <GraduationCap size={27} />
          <span>
            <span>Deutsch</span>
            <strong>Erfolg</strong>
          </span>
        </Link>

        <Link href="/espace-etudiant/examens/b1/lesen" className="paul-back">
          <ArrowLeft size={18} />
          Zurück zu Lesen B1
        </Link>
      </header>

      <div className="paul-content">

        <div className="paul-breadcrumb">
          TELC B1 <span>/</span> LESEN <span>/</span> TEIL 1
        </div>

        <section className="paul-hero">
          <span className="paul-hero-label">LESEVERSTEHEN · TEIL 1</span>
          <h1>Andreas 1</h1>
          <p>Lesen Sie die Texte und ordnen Sie die passenden Überschriften zu.</p>

          <div className="paul-progress">
            <div className="paul-progress-label">
              <span>Fortschritt</span>
              <strong>{Object.keys(reponses).length}/5</strong>
            </div>

            <div className="paul-progress-track">
              <div
                className="paul-progress-fill"
                style={{ width: `${Object.keys(reponses).length * 20}%` }}
              />
            </div>
          </div>
        </section>

        <div className="paul-language-bar">
          <div className="paul-language-label">
            <Languages size={19} />
            <span>Traduction et explication</span>
          </div>

          <select
            value={langue}
            onChange={e => setLangue(e.target.value as Langue)}
          >
            <option value="fr">🇫🇷 Français</option>
            <option value="ar">🇲🇦 العربية</option>
            <option value="en">🇬🇧 English</option>
          </select>

          <span className="paul-language-hint">
            Choisissez une langue pour les traductions
          </span>
        </div>

        <div className="paul-layout">

          <section className="paul-texts">

            <h2>Die Texte</h2>

            <p className="paul-section-hint">
              Wählen Sie einen Text aus und ordnen Sie ihm eine Überschrift zu.
              Vous pouvez afficher la traduction et l'explication à tout moment.
            </p>

            {textes.map(texte => {
              const reponse = reponses[texte.id]
              const istRichtig = solutions[texte.id] === reponse
              const dejaVerifie = einzelPruefung[texte.id] || corrige
              const traductionOuverte = traductionsTextes.includes(texte.id)
              const explicationOuverte = explicationsTextes.includes(texte.id)

              return (
                <article
                  key={texte.id}
                  className={`paul-text-card ${
                    selection && !corrige ? 'paul-selectable' : ''
                  } ${
                    dejaVerifie && reponse
                      ? istRichtig
                        ? 'paul-correct'
                        : 'paul-incorrect'
                      : ''
                  } ${selection && !corrige ? 'paul-target' : ''}`}
                  onClick={() => {
                    if (selection && !corrige) {
                      assigner(texte.id, selection)
                    }
                  }}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => {
                    e.preventDefault()
                    const id = e.dataTransfer.getData('text/plain')
                    if (id && !corrige) assigner(texte.id, id)
                    setDraggedTitre(null)
                  }}
                >
                  <div className="paul-text-top">
                    <span className="paul-text-number">{texte.id}</span>

                    {reponse ? (
                      <button
                        className="paul-assigned-title"
                        onClick={e => {
                          e.stopPropagation()
                          retirer(texte.id)
                        }}
                      >
                        {reponse} · {titel.find(t => t.id === reponse)?.contenu}
                        {!corrige && <span className="paul-remove"> ×</span>}
                      </button>
                    ) : (
                      <span className="paul-empty-slot">
                        {selection
                          ? 'Cliquez ici pour déposer le titre'
                          : 'Déposez votre titre ici'}
                      </span>
                    )}

                    {dejaVerifie && reponse && (
                      <span className="paul-result-icon">
                        {istRichtig ? <CheckCircle2 /> : '✕'}
                      </span>
                    )}
                  </div>

                  <p className="paul-german-text">{texte.contenu}</p>

                  {reponse && (
                    <div className="paul-individual-check">
                      {!dejaVerifie ? (
                        <button
                          className="paul-individual-button"
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
                          className={`paul-feedback ${
                            istRichtig ? 'paul-feedback-right' : 'paul-feedback-wrong'
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
                    className="paul-help-actions"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className={`paul-help-button ${
                        traductionOuverte ? 'paul-active' : ''
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
                      {traductionOuverte
                        ? <ChevronUp size={15} />
                        : <ChevronDown size={15} />}
                    </button>

                    <button
                      className={`paul-help-button ${
                        explicationOuverte ? 'paul-active' : ''
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
                      {explicationOuverte
                        ? <ChevronUp size={15} />
                        : <ChevronDown size={15} />}
                    </button>
                  </div>

                  {traductionOuverte && (
                    <div
                      className={`paul-translation ${
                        langue === 'ar' ? 'paul-arabic' : ''
                      }`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <strong>{langues[langue]}</strong>
                      <p>{texte.traduction[langue]}</p>
                    </div>
                  )}

                  {explicationOuverte && (
                    <div
                      className={`paul-explanation ${
                        langue === 'ar' ? 'paul-arabic' : ''
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
                    <div className="paul-correct-answer">
                      Richtige Antwort: {solutions[texte.id]}
                    </div>
                  )}
                </article>
              )
            })}
          </section>

          <aside className="paul-titles">

            <div className="paul-titles-heading">
              <h2>Überschriften</h2>
              <span>10 Titel</span>
            </div>

            <p className="paul-section-hint">
              Ziehen Sie einen Titel zum passenden Text oder klicken Sie darauf.
              Appuyez sur « Traduire » pour comprendre chaque titre.
            </p>

            <div className="paul-titles-list">

              {titel.map(t => {
                const benutzt = titreUtilise(t.id)
                const detailOuvert = detailsTitres.includes(t.id)

                return (
                  <div
                    key={t.id}
                    className={`paul-title-item ${
                      selection === t.id ? 'paul-chosen' : ''
                    } ${benutzt ? 'paul-used' : ''}`}
                  >
                    <button
                      className={`paul-title-option ${
                        selection === t.id ? 'paul-selected' : ''
                      } ${benutzt ? 'paul-used' : ''}`}
                      draggable={!benutzt && !corrige}
                      onDragStart={e => {
                        e.dataTransfer.setData('text/plain', t.id)
                        setDraggedTitre(t.id)
                      }}
                      onDragEnd={() => setDraggedTitre(null)}
                      onClick={() => {
                        if (benutzt || corrige) return
                        setSelection(selection === t.id ? null : t.id)
                      }}
                      disabled={benutzt || corrige}
                    >
                      <strong>{t.id}</strong>
                      <span>{t.contenu}</span>
                      {benutzt && <CheckCircle2 size={17} />}
                    </button>

                    <button
                      className="paul-title-help"
                      onClick={() =>
                        setDetailsTitres(prev =>
                          prev.includes(t.id)
                            ? prev.filter(id => id !== t.id)
                            : [...prev, t.id]
                        )
                      }
                    >
                      <Languages size={14} />
                      {detailOuvert ? 'Masquer' : 'Traduire / expliquer'}
                      {detailOuvert
                        ? <ChevronUp size={14} />
                        : <ChevronDown size={14} />}
                    </button>

                    {detailOuvert && (
                      <div
                        className={`paul-title-detail ${
                          langue === 'ar' ? 'paul-arabic' : ''
                        }`}
                        dir={langue === 'ar' ? 'rtl' : 'ltr'}
                      >
                        <div className="paul-title-translation">
                          <strong>{langues[langue]}</strong>
                          <p>{t.traduction[langue]}</p>
                        </div>

                        <div className="paul-title-explanation">
                          <strong>
                            <Lightbulb size={14} />
                            Explication
                          </strong>
                          <p>{t.explication[langue]}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}

            </div>
          </aside>
        </div>

        <section className="paul-actions">

          {!corrige ? (
            <button
              className="paul-check-button"
              onClick={verifier}
              disabled={Object.keys(reponses).length !== 5}
            >
              Antworten überprüfen
            </button>
          ) : (
            <>
              <div className="paul-score">
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
                className="paul-restart-button"
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
        .paul-page {
          min-height: 100vh;
          background: #f7f5f0;
          color: #192b43;
          font-family: Arial, sans-serif;
        }

        .paul-header {
          height: 68px;
          background: #192b43;
          padding: 0 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .paul-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #FFFFFF;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
        }

        .paul-brand svg {
          color: #b49760;
          transform: translateY(-3px);
        }

        .paul-brand span {
          display: inline-flex;
          gap: 5px;
        }

        .paul-brand strong {
          color: #b49760;
        }

        .paul-back {
          color: #FFFFFF;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
        }

        .paul-back svg {
          color: #b49760;
        }

        .paul-content {
          max-width: 1400px;
          margin: auto;
          padding: 30px 24px 60px;
        }

        .paul-breadcrumb {
          font-size: 12px;
          color: #626a75;
          margin-bottom: 22px;
        }

        .paul-breadcrumb span {
          margin: 0 8px;
          color: #b49760;
        }

        .paul-hero {
          background: #192b43;
          border-radius: 17px;
          color: white;
          padding: 30px 34px;
          margin-bottom: 22px;
        }

        .paul-hero-label {
          color: #b49760;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .paul-hero h1 {
          font-size: 29px;
          margin: 12px 0 8px;
        }

        .paul-hero p {
          color: #D2DAE5;
          font-size: 14px;
          line-height: 1.6;
        }

        .paul-progress {
          max-width: 400px;
          margin-top: 24px;
        }

        .paul-progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 9px;
        }

        .paul-progress-label strong {
          color: #b49760;
        }

        .paul-progress-track {
          height: 7px;
          background: #ffffff30;
          border-radius: 10px;
          overflow: hidden;
        }

        .paul-progress-fill {
          height: 100%;
          background: #b49760;
          border-radius: 10px;
          transition: width .2s;
        }

        .paul-language-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 24px;
        }

        .paul-language-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #192b43;
          font-size: 13px;
          font-weight: 700;
        }

        .paul-language-label svg {
          color: #806337;
        }

        .paul-language-bar select {
          border: 1px solid #D9DFE8;
          border-radius: 8px;
          padding: 9px 13px;
          background: #F9FAFC;
          color: #192b43;
          font-size: 13px;
          cursor: pointer;
        }

        .paul-language-hint {
          font-size: 11px;
          color: #626a75;
        }

        .paul-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.65fr) minmax(340px, 1fr);
          gap: 25px;
          align-items: start;
        }

        .paul-texts h2,
        .paul-titles h2 {
          font-size: 19px;
          margin: 0 0 8px;
          color: #192b43;
        }

        .paul-section-hint {
          color: #7C8797;
          font-size: 12px;
          line-height: 1.7;
          margin: 0 0 17px;
        }

        .paul-text-card {
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 13px;
          padding: 22px;
          margin-bottom: 18px;
          transition: .2s;
        }

        .paul-text-card.paul-target {
          border: 2px dashed #b49760;
          background: #FFFCF5;
          cursor: pointer;
        }

        .paul-text-card.paul-selectable {
          cursor: pointer;
        }

        .paul-text-top {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 17px;
          min-height: 64px;
        }

        .paul-text-number {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          background: #192b43;
          color: #b49760;
          border-radius: 9px;
          font-weight: 700;
        }

        .paul-empty-slot {
          display: flex;
          align-items: center;
          min-height: 58px;
          flex: 1;
          font-size: 13px;
          color: #626a75;
          background: #f7f5f0;
          border: 2px dashed #D5DCE6;
          padding: 12px 16px;
          border-radius: 9px;
        }

        .paul-text-card.paul-target .paul-empty-slot {
          border-color: #b49760;
          background: #FFF8E9;
          color: #92733A;
        }

        .paul-assigned-title {
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

        .paul-remove {
          color: #A83245;
          font-size: 18px;
        }

        .paul-german-text {
          font-size: 14px;
          line-height: 1.95;
          color: #39475A;
          margin: 0 0 17px;
        }

        .paul-individual-check {
          margin: 12px 0 17px;
        }

        .paul-individual-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 20px;
          border: 0;
          border-radius: 8px;
          background: #192b43;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: .2s;
        }

        .paul-individual-button:hover {
          background: #294B78;
        }

        .paul-feedback {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px 15px;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 700;
        }

        .paul-feedback-right {
          color: #21804E;
          background: #EAF7EF;
          border: 1px solid #BDE5CA;
        }

        .paul-feedback-wrong {
          color: #B43B3B;
          background: #FFF0F0;
          border: 1px solid #F1CACA;
        }

        .paul-correct {
          border-color: #45A477;
          background: #F4FBF7;
        }

        .paul-incorrect {
          border-color: #D66B6B;
          background: #FFF7F7;
        }

        .paul-result-icon {
          margin-left: auto;
          color: #25945C;
        }

        .paul-correct-answer {
          margin-top: 12px;
          color: #258052;
          font-size: 12px;
          font-weight: 700;
        }

        .paul-help-actions {
          display: flex;
          gap: 9px;
          flex-wrap: wrap;
          margin-top: 14px;
        }

        .paul-help-button {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 12px;
          border: 1px solid #E0E5ED;
          border-radius: 8px;
          background: #f7f5f0;
          color: #53647A;
          font-size: 12px;
          cursor: pointer;
        }

        .paul-help-button:hover,
        .paul-help-button.paul-active {
          border-color: #b49760;
          background: #FFFCF5;
          color: #8B6C31;
        }

        .paul-translation,
        .paul-explanation {
          margin-top: 12px;
          padding: 15px 17px;
          border-radius: 9px;
          font-size: 13px;
          line-height: 1.85;
        }

        .paul-translation {
          background: #EEF5FC;
          border-left: 3px solid #628DB9;
          color: #294B70;
        }

        .paul-explanation {
          background: #FFF8EA;
          border-left: 3px solid #b49760;
          color: #6D572D;
        }

        .paul-translation strong,
        .paul-explanation strong {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
        }

        .paul-translation p,
        .paul-explanation p {
          margin: 7px 0 0;
        }

        .paul-arabic {
          text-align: right;
          font-size: 15px;
          line-height: 2.1;
        }

        .paul-arabic strong {
          justify-content: flex-start;
        }

        .paul-titles {
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 13px;
          padding: 20px;
          position: sticky;
          top: 15px;
        }

        .paul-titles-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .paul-titles-heading span {
          font-size: 11px;
          color: #806337;
          background: #F8F1E3;
          padding: 6px 9px;
          border-radius: 20px;
        }

        .paul-titles-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .paul-title-item {
          border: 1px solid #e3ded3;
          border-radius: 10px;
          padding: 9px;
          background: #fff;
        }

        .paul-title-item.paul-chosen {
          border-color: #b49760;
          background: #FFFCF5;
        }

        .paul-title-option {
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

        .paul-title-option strong {
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

        .paul-title-option:hover:not(:disabled) {
          border-color: #b49760;
          background: #FFFCF5;
        }

        .paul-title-option.paul-selected {
          border: 2px solid #b49760;
          background: #FFFCF5;
        }

        .paul-title-option.paul-used {
          opacity: .55;
          cursor: default;
          background: #f7f5f0;
        }

        .paul-title-option:disabled {
          cursor: default;
        }

        .paul-title-option svg {
          flex-shrink: 0;
          color: #25945C;
          margin-left: auto;
        }

        .paul-title-help {
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

        .paul-title-help:hover {
          color: #192b43;
        }

        .paul-title-detail {
          margin-top: 7px;
          padding: 12px;
          background: #f7f5f0;
          border-radius: 8px;
          color: #45556B;
          font-size: 12px;
          line-height: 1.7;
        }

        .paul-title-detail p {
          margin: 5px 0 0;
        }

        .paul-title-translation {
          padding-bottom: 10px;
          border-bottom: 1px solid #e3ded3;
        }

        .paul-title-explanation {
          padding-top: 10px;
        }

        .paul-title-translation strong,
        .paul-title-explanation strong {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #8B713D;
        }

        .paul-actions {
          margin-top: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .paul-check-button,
        .paul-restart-button {
          border: 0;
          border-radius: 9px;
          padding: 15px 27px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
        }

        .paul-check-button {
          background: #192b43;
          color: white;
        }

        .paul-check-button:disabled {
          opacity: .4;
          cursor: not-allowed;
        }

        .paul-restart-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #F2EBDD;
          color: #765C2B;
        }

        .paul-score {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
        }

        .paul-score strong {
          color: #806337;
          font-size: 22px;
        }

        .paul-score span {
          color: #64748B;
          font-size: 13px;
        }

        @media(max-width: 900px) {
          .paul-layout {
            grid-template-columns: 1fr;
          }

          .paul-titles {
            position: static;
            grid-row: 1;
          }
        }

        @media(max-width: 600px) {
          .paul-content {
            padding: 20px 12px 40px;
          }

          .paul-hero {
            padding: 24px 18px;
          }

          .paul-hero h1 {
            font-size: 24px;
          }

          .paul-header {
            padding: 0 14px;
          }

          .paul-text-card {
            padding: 15px;
          }

          .paul-german-text {
            font-size: 13px;
            line-height: 1.9;
          }

          .paul-language-bar {
            gap: 10px;
            padding: 13px;
          }

          .paul-language-hint {
            width: 100%;
          }

          .paul-titles {
            padding: 14px;
          }

          .paul-title-option {
            min-height: 58px;
            font-size: 12px;
          }

          .paul-empty-slot {
            min-height: 62px;
          }

          .paul-assigned-title {
            min-height: 58px;
          }
        }
      
        /* Deutsch Erfolg — Premium exams */
        .paul-page { background: #f7f5f0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
        [dir="rtl"] .paul-page, .paul-page[dir="rtl"] { font-family: 'Tajawal', Arial, sans-serif; }
        .paul-page .paul-hero { background: #192b43; border: 1px solid #314359; border-radius: 12px; box-shadow: none; text-align: start; }
        .paul-page .paul-hero h1 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.025em; line-height: 1.24; overflow-wrap: anywhere; }
        [dir="rtl"] .paul-page .paul-hero h1, .paul-page[dir="rtl"] .paul-hero h1 { font-family: 'Tajawal', Arial, sans-serif; }
        .paul-page a:focus-visible, .paul-page button:focus-visible, .paul-page select:focus-visible { outline: 2px solid #b49760; outline-offset: 3px; }
        .paul-page .paul-text-card,
        .paul-page .paul-titles { border-radius: 10px; box-shadow: none; }
        @media (prefers-reduced-motion: reduce) {
          .paul-page *, .paul-page *::before, .paul-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
        }
      `}</style>
    </main>
  )
}

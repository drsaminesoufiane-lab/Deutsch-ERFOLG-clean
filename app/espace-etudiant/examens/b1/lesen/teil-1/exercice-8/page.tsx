
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
    contenu: "Wenn Sie verreisen, wünschen wir Ihnen erholsame und angenehme Ferien. Bitte denken Sie daran, sich Ihre Zeitung an den Urlaubsort nachsenden zu lassen. Denn mit den Neuigkeiten von zu Hause und aus aller Welt lässt sich die schönste Zeit des Jahres erst richtig genießen. Ausführliche Informationen und entsprechende Coupons finden Sie in unserem großen Reise-Service-Anzeigenteil oder rufen Sie uns einfach an: Telefon 01 30-18 58 50 zum Nulltarif. Hannoversche Allgemeine Neue Presse",
    traduction: {
      fr: "Si vous partez en voyage, nous vous souhaitons des vacances reposantes et agréables. Pensez à faire suivre votre journal jusqu'à votre lieu de vacances. En effet, les nouvelles de chez vous et du monde entier permettent de profiter pleinement de la plus belle période de l'année. Vous trouverez des informations détaillées et les coupons correspondants dans notre grande rubrique publicitaire consacrée aux services de voyage. Vous pouvez également nous appeler gratuitement au numéro indiqué.",
      ar: "إذا كنتم ستسافرون، نتمنى لكم عطلة مريحة وممتعة. لا تنسوا طلب إرسال جريدتكم إلى مكان إقامتكم أثناء العطلة. فالأخبار القادمة من بلدكم ومن جميع أنحاء العالم تساعدكم على الاستمتاع بأجمل فترة في السنة. يمكنكم العثور على معلومات مفصلة والقسائم المناسبة في قسم إعلانات خدمات السفر، أو الاتصال بنا مجاناً على الرقم المذكور.",
      en: "If you are going on a trip, we wish you a relaxing and pleasant holiday. Please remember to have your newspaper forwarded to your holiday destination. News from home and around the world helps you enjoy the best time of the year. You can find detailed information and the relevant coupons in our travel-service advertisement section, or simply call us free of charge."
    },
    explication: {
      fr: "Le journal propose à ses abonnés de faire envoyer leur quotidien à leur lieu de vacances. L'idée principale est que les lecteurs puissent continuer à recevoir leur journal même lorsqu'ils sont en voyage. Le titre D correspond donc à cette offre.",
      ar: "يقترح الجورنال على مشتركيه إرسال الجريدة إلى مكان إقامتهم أثناء العطلة. الفكرة الأساسية هي أن يستمر القراء في الحصول على جريدتهم حتى عندما يكونون مسافرين. لذلك العنوان D هو المناسب.",
      en: "The newspaper offers subscribers the possibility of having their newspaper delivered to their holiday destination. The main idea is that readers can continue receiving their newspaper while travelling. Therefore, heading D is the correct match."
    }
  },
  {
    id: 2,
    contenu: "Im Luftkurort Stadtkylf in der Mittelgebirgslandschaft des Oberen Kullas werden dreitägige Wanderungen ohne Gepäck veranstaltet. Die Rundwanderung im deutsch-belgischen Naturpark führt abends zu reservierten Zimmern. Die Betriebe übernehmen den Gepäcktransport zum nächsten Tagesziel. Die Wanderungen werden ganzjährig angeboten. Im Wanderprogramm sind drei Übernachtungen mit Frühstück, dreimal Gepäcktransport, eine Wanderkarte, eine Wegbeschreibung und ein Wanderpass enthalten. Der Pauschalbetrag beträgt pro Person 89 Euro. Auskünfte: Verkehrsverein Erholungsgebiet Oberes Kylltal. Kurallee, 54589 Stadtkylf, Telefon (06597) 28 78.",
    traduction: {
      fr: "Dans la station climatique de Stadtkylf, située dans le paysage montagneux de l'Obere Kullas, des randonnées de trois jours sans bagages sont organisées. Le circuit dans le parc naturel germano-belge conduit chaque soir les participants vers des chambres déjà réservées. Les établissements se chargent du transport des bagages jusqu'à la prochaine étape. Les randonnées sont proposées toute l'année. Le programme comprend trois nuitées avec petit-déjeuner, trois transports de bagages, une carte de randonnée, un descriptif du parcours et un carnet de randonnée. Le forfait coûte 89 euros par personne.",
      ar: "في المنتجع الصحي Stadtkylf، الواقع في منطقة جبلية، يتم تنظيم رحلات مشي لمدة ثلاثة أيام دون الحاجة إلى حمل الأمتعة. يمر المسار الدائري عبر الحديقة الطبيعية الألمانية البلجيكية، وفي كل مساء يصل المشاركون إلى غرف محجوزة مسبقاً. تتكفل المؤسسات بنقل الأمتعة إلى محطة اليوم التالي. تُنظم هذه الرحلات طوال السنة. يشمل البرنامج ثلاث ليالٍ مع وجبة الإفطار، ونقل الأمتعة ثلاث مرات، وخريطة للمشي، ووصفاً للطريق، وبطاقة خاصة بالرحلة. السعر الإجمالي هو 89 يورو للشخص الواحد.",
      en: "In the health resort of Stadtkylf, located in a mountainous region, three-day hiking tours without luggage are organized. The circular route through the German-Belgian nature park leads hikers to reserved rooms each evening. Local businesses transport the luggage to the next destination. The hikes are offered throughout the year. The package includes three nights with breakfast, luggage transport three times, a hiking map, route instructions and a hiking pass. The total price is 89 euros per person."
    },
    explication: {
      fr: "Le texte présente une offre touristique de randonnée. Les participants marchent pendant plusieurs jours sans porter leurs bagages, car ceux-ci sont transportés jusqu'à l'étape suivante. Le titre G, « Wandern ohne Gepäck », résume exactement cette offre.",
      ar: "يعرض النص عرضاً سياحياً لرحلات المشي. يشارك الأشخاص في رحلة تستمر عدة أيام دون حمل أمتعتهم، لأن المنظمين يتكفلون بنقلها إلى المحطة التالية. العنوان G يلخص هذه الفكرة بدقة: المشي دون أمتعة.",
      en: "The text presents a hiking holiday offer. Participants hike for several days without carrying their luggage because it is transported to the next stop. Heading G, 'Hiking without luggage', summarizes this offer exactly."
    }
  },
  {
    id: 3,
    contenu: "Für den einen ist es musikalischer Hochgenuss, für den anderen schlicht Lärm. Gemeint ist Musik, die aus Lautsprechern, Radios oder durch Musikinstrumente durch geöffnete Türen und Fenster bei sommerlichen Temperaturen ins Freie dringt. Die Gemeinde weist darauf hin, dass während der Mittagsruhe von 13 bis 15 Uhr und nachts von 22 bis 7 Uhr keine musikalische Ruhestörung erfolgen darf. Gartengeräte mit Motoren dürfen montags bis freitags nur von 8 bis 13 und von 15 bis 19 Uhr benutzt werden, an Sonnabenden von 9 bis 13 Uhr. An Sonn- und Feiertagen dürfen die Geräte nicht zum Einsatz kommen.",
    traduction: {
      fr: "Pour certains, c'est un grand plaisir musical ; pour d'autres, ce n'est que du bruit. Il s'agit de la musique qui sort des haut-parleurs, des radios ou des instruments de musique et se répand à l'extérieur par les portes et fenêtres ouvertes pendant les journées d'été. La commune rappelle qu'aucune nuisance sonore musicale n'est autorisée pendant la pause de midi, de 13 h à 15 h, ni pendant la nuit, de 22 h à 7 h. Les appareils de jardin équipés d'un moteur ne peuvent être utilisés que du lundi au vendredi de 8 h à 13 h et de 15 h à 19 h, et le samedi de 9 h à 13 h. Ils sont interdits les dimanches et jours fériés.",
      ar: "بالنسبة للبعض، تُعتبر الموسيقى متعة كبيرة، بينما يعتبرها آخرون مجرد ضجيج. المقصود هو الموسيقى الصادرة عن مكبرات الصوت أو أجهزة الراديو أو الآلات الموسيقية، والتي تنتشر إلى الخارج عبر الأبواب والنوافذ المفتوحة خلال فصل الصيف. تذكّر البلدية بأنه لا يُسمح بإحداث إزعاج موسيقي خلال فترة الراحة من الساعة 13 إلى 15، ولا أثناء الليل من الساعة 22 إلى 7. كما يُسمح باستعمال أدوات الحدائق المزودة بمحركات في أوقات محددة فقط، ويُمنع استعمالها أيام الأحد والعطل الرسمية.",
      en: "For some people, it is a great musical pleasure; for others, it is simply noise. The text refers to music coming from loudspeakers, radios or musical instruments and reaching the outdoors through open doors and windows during summer. The municipality reminds residents that disturbing music is not allowed during the midday rest period from 1 p.m. to 3 p.m. or at night from 10 p.m. to 7 a.m. Motorized garden equipment may only be used at specified times and is prohibited on Sundays and public holidays."
    },
    explication: {
      fr: "Le texte rappelle les règles de tranquillité du voisinage. Il concerne notamment la musique trop forte qui peut déranger les voisins, ainsi que les horaires autorisés pour utiliser les appareils de jardin. Le titre J correspond au problème central : la musique bruyante dérange les voisins.",
      ar: "يذكّر النص بقواعد احترام الهدوء بين الجيران. ويتحدث خصوصاً عن الموسيقى المرتفعة التي قد تزعج الآخرين، بالإضافة إلى أوقات استعمال أدوات الحدائق. الفكرة الأساسية هي أن الموسيقى الصاخبة تزعج الجيران، لذلك العنوان J هو الأنسب.",
      en: "The text explains the rules for respecting neighborhood quiet hours. It particularly concerns loud music that may disturb neighbors, as well as permitted times for using garden equipment. The central idea is that loud music disturbs the neighbors, making heading J the best match."
    }
  },
  {
    id: 4,
    contenu: "Das erste deutsche Bücherdorf hat in Mühlbeck/Friedersdorf (Sachsen-Anhalt) seit Ende September seine Tore geöffnet. In acht Antiquariaten warten über 70.000 Bücher aus allen Bereichen der Literatur auf Interessenten. Das in reizvoller landschaftlicher Umgebung liegende Bücherdorf nahe Bitterfeld – unweit der A9 und des Flughafens Leipzig – ist aus allen Teilen Deutschlands leicht zu erreichen. Geöffnet sind die Antiquariate auch am Samstag und Sonntag. In Europa gibt es bereits acht solcher Bücherdörfer in Belgien, Frankreich, Großbritannien, den Niederlanden, Norwegen und der Schweiz. Initiatorin des deutschen Bücherdorfes ist Heidi Dehne (Tel. 03493/4 30 43).",
    traduction: {
      fr: "Le premier village allemand du livre a ouvert ses portes fin septembre à Mühlbeck/Friedersdorf, en Saxe-Anhalt. Dans huit librairies spécialisées dans les livres anciens, plus de 70 000 ouvrages couvrant tous les domaines de la littérature attendent les visiteurs. Situé dans un cadre naturel agréable près de Bitterfeld, le village est facilement accessible depuis toutes les régions d'Allemagne. Les librairies sont également ouvertes le samedi et le dimanche. Il existe déjà huit villages du livre de ce type en Europe, notamment en Belgique, en France, en Grande-Bretagne, aux Pays-Bas, en Norvège et en Suisse.",
      ar: "افتُتحت أول قرية للكتب في ألمانيا في نهاية شهر سبتمبر بمدينة Mühlbeck/Friedersdorf في ولاية ساكسونيا أنهالت. وتضم ثماني مكتبات للكتب القديمة أكثر من 70 ألف كتاب في مختلف مجالات الأدب، وهي في انتظار الزوار المهتمين. تقع القرية بالقرب من Bitterfeld وسط طبيعة جميلة، ويمكن الوصول إليها بسهولة من مختلف أنحاء ألمانيا. كما تفتح المكتبات أبوابها يومي السبت والأحد. وتوجد بالفعل ثماني قرى مماثلة للكتب في دول أوروبية أخرى.",
      en: "Germany's first book village opened at the end of September in Mühlbeck/Friedersdorf, Saxony-Anhalt. Eight second-hand and antiquarian bookshops offer more than 70,000 books covering all areas of literature. Located in attractive countryside near Bitterfeld, the village is easy to reach from all parts of Germany. The bookshops are also open on Saturdays and Sundays. There are already eight similar book villages in Europe, including in Belgium, France, Great Britain, the Netherlands, Norway and Switzerland."
    },
    explication: {
      fr: "Le texte annonce l'ouverture du premier village du livre en Allemagne. Il présente les huit librairies, les nombreux ouvrages disponibles et les horaires d'ouverture. Il s'adresse aux personnes qui aiment la littérature et les livres. Le titre H est donc le bon choix.",
      ar: "يعلن النص عن افتتاح أول قرية للكتب في ألمانيا. ويقدم المكتبات الثماني والعدد الكبير من الكتب المتوفرة وأوقات العمل. هذا المكان موجه للأشخاص المهتمين بالأدب والكتب، لذلك العنوان H هو الاختيار الصحيح.",
      en: "The text announces the opening of Germany's first book village. It describes the eight bookshops, the large collection of books and the opening hours. It is aimed at people interested in literature and books. Therefore, heading H is correct."
    }
  },
  {
    id: 5,
    contenu: "Die Bregenzer Festspiele sind bemüht, die Vorstellungen auch bei zweifelhafter Witterung bzw. leichtem Regen auf der Seebühne abzuhalten, weshalb es zu Verzögerungen des Beginns oder zu Unterbrechungen kommen kann. Sollte die Seeaufführung nicht stattfinden können, wird eine halbszenische Version von Porgy and Bess im Festspielhaus gegeben. Wir empfehlen unseren Gästen, bei unsicherer Wetterlage regenfester Kleidung den Vorzug zu geben und auf Schirme zu verzichten, da diese die Sicht beeinträchtigen. Das Spiel auf dem See wird ohne Pause gespielt. Die Spieldauer beträgt ca. 2 Std. 45 Min.",
    traduction: {
      fr: "Les organisateurs du festival de Bregenz font leur possible pour maintenir les représentations sur la scène au bord du lac, même lorsque la météo est incertaine ou qu'il pleut légèrement. Cela peut entraîner un retard du début du spectacle ou des interruptions. Si la représentation sur le lac ne peut pas avoir lieu, une version semi-scénique de Porgy and Bess sera présentée dans le palais des festivals. Nous recommandons aux visiteurs de porter des vêtements imperméables en cas de météo incertaine et de ne pas utiliser de parapluies, car ceux-ci gênent la visibilité. Le spectacle sur le lac se déroule sans entracte et dure environ 2 h 45.",
      ar: "يحاول منظمو مهرجانات بريغنز إقامة العروض على المسرح الموجود فوق البحيرة حتى عندما تكون الأحوال الجوية غير مستقرة أو عند سقوط أمطار خفيفة. ولهذا قد يتأخر موعد بداية العرض أو تحدث توقفات. وإذا تعذر تقديم العرض على البحيرة، فسيتم تقديم نسخة نصف مسرحية من أوبرا Porgy and Bess داخل قاعة المهرجان. يُنصح الزوار بارتداء ملابس مقاومة للمطر عند عدم استقرار الطقس، وتجنب استعمال المظلات لأنها تعيق الرؤية. يستمر العرض على البحيرة دون استراحة، وتبلغ مدته حوالي ساعتين و45 دقيقة.",
      en: "The organizers of the Bregenz Festival try to hold performances on the lake stage even when the weather is uncertain or there is light rain. This may cause delays or interruptions. If the performance on the lake cannot take place, a semi-staged version of Porgy and Bess will be performed in the festival hall. Visitors are advised to wear rainproof clothing in uncertain weather and avoid umbrellas because they obstruct the view. The lake performance has no interval and lasts approximately two hours and forty-five minutes."
    },
    explication: {
      fr: "Le texte donne des informations pratiques aux visiteurs des festivals de Bregenz. Il explique ce qui se passe en cas de pluie, où le spectacle sera présenté si nécessaire, et conseille de porter des vêtements adaptés plutôt que d'utiliser un parapluie. Le titre A est donc correct.",
      ar: "يقدم النص معلومات وإرشادات عملية لزوار مهرجانات بريغنز. يوضح ما سيحدث إذا كان الطقس ممطراً، وأين سيُعرض العمل إذا تعذر العرض فوق البحيرة، كما ينصح بارتداء ملابس مناسبة للمطر وعدم استعمال المظلات. لذلك العنوان A هو الصحيح.",
      en: "The text provides practical information for visitors to the Bregenz Festival. It explains what happens in case of rain, where the performance will take place if necessary, and advises visitors to wear suitable clothing instead of using umbrellas. Therefore, heading A is correct."
    }
  }
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Hinweis für Besucher der Bregenzer Festspiele',
    traduction: {
      fr: 'Informations pour les visiteurs des festivals de Bregenz',
      ar: 'إرشادات لزوار مهرجانات بريغنز',
      en: 'Information for visitors to the Bregenz Festival'
    },
    explication: {
      fr: 'Le titre annonce des informations et des conseils pratiques destinés aux personnes qui assistent aux spectacles du festival.',
      ar: 'يشير العنوان إلى معلومات وإرشادات عملية موجهة للأشخاص الذين يحضرون عروض المهرجان.',
      en: 'The heading announces practical information and advice for people attending the festival performances.'
    }
  },
  {
    id: 'B',
    contenu: 'Abendwanderungen ab 89 Euro',
    traduction: {
      fr: 'Randonnées en soirée à partir de 89 euros',
      ar: 'رحلات مشي مسائية ابتداءً من 89 يورو',
      en: 'Evening hikes from 89 euros'
    },
    explication: {
      fr: 'Ce titre parle de randonnées organisées le soir avec un prix de départ de 89 euros.',
      ar: 'يتحدث العنوان عن رحلات مشي منظمة في المساء بسعر يبدأ من 89 يورو.',
      en: 'This heading refers to organized evening hikes starting at a price of 89 euros.'
    }
  },
  {
    id: 'C',
    contenu: 'Musikveranstaltungen am Nachmittag',
    traduction: {
      fr: 'Manifestations musicales dans l’après-midi',
      ar: 'فعاليات موسيقية خلال فترة بعد الظهر',
      en: 'Music events in the afternoon'
    },
    explication: {
      fr: 'Ce titre concerne des événements musicaux organisés pendant l’après-midi.',
      ar: 'يتعلق العنوان بفعاليات موسيقية يتم تنظيمها خلال فترة بعد الظهر.',
      en: 'This heading concerns musical events organized during the afternoon.'
    }
  },
  {
    id: 'D',
    contenu: 'Ihre Zeitung folgt Ihnen in den Urlaub',
    traduction: {
      fr: 'Votre journal vous accompagne en vacances',
      ar: 'جريدتكم ترافقكم في العطلة',
      en: 'Your newspaper follows you on holiday'
    },
    explication: {
      fr: 'Le titre indique que le journal peut être envoyé à l’adresse de vacances de ses abonnés.',
      ar: 'يشير العنوان إلى إمكانية إرسال الجريدة إلى عنوان إقامة المشترك أثناء العطلة.',
      en: 'The heading indicates that the newspaper can be delivered to subscribers at their holiday address.'
    }
  },
  {
    id: 'E',
    contenu: 'Schlechtes Wetter: Festspiele abgesagt',
    traduction: {
      fr: 'Mauvais temps : les festivals sont annulés',
      ar: 'الطقس السيئ: إلغاء المهرجانات',
      en: 'Bad weather: festivals cancelled'
    },
    explication: {
      fr: 'Ce titre annonce une annulation des festivals à cause du mauvais temps.',
      ar: 'يعلن العنوان عن إلغاء المهرجانات بسبب سوء الأحوال الجوية.',
      en: 'This heading announces the cancellation of festivals because of bad weather.'
    }
  },
  {
    id: 'F',
    contenu: 'Rekord: 70.000 Besucher im Bücherdorf',
    traduction: {
      fr: 'Record : 70 000 visiteurs dans le village du livre',
      ar: 'رقم قياسي: 70 ألف زائر في قرية الكتب',
      en: 'Record: 70,000 visitors in the book village'
    },
    explication: {
      fr: 'Le titre met l’accent sur un nombre record de visiteurs dans un village consacré aux livres.',
      ar: 'يركز العنوان على عدد قياسي من الزوار في قرية مخصصة للكتب.',
      en: 'The heading emphasizes a record number of visitors to a village dedicated to books.'
    }
  },
  {
    id: 'G',
    contenu: 'Wandern ohne Gepäck',
    traduction: {
      fr: 'Faire de la randonnée sans bagages',
      ar: 'المشي لمسافات طويلة دون أمتعة',
      en: 'Hiking without luggage'
    },
    explication: {
      fr: 'Le titre décrit une randonnée pendant laquelle les bagages sont transportés séparément jusqu’à la prochaine étape.',
      ar: 'يصف العنوان رحلة مشي يتم خلالها نقل الأمتعة بشكل منفصل إلى المحطة التالية.',
      en: 'The heading describes a hiking trip during which luggage is transported separately to the next stop.'
    }
  },
  {
    id: 'H',
    contenu: 'Neues für Literaturinteressierte',
    traduction: {
      fr: 'Du nouveau pour les passionnés de littérature',
      ar: 'أخبار جديدة للمهتمين بالأدب',
      en: 'Something new for literature lovers'
    },
    explication: {
      fr: 'Le titre s’adresse aux personnes intéressées par les livres et la littérature et annonce une nouvelle possibilité de découvrir des ouvrages.',
      ar: 'يتوجه العنوان إلى الأشخاص المهتمين بالكتب والأدب ويعلن عن فرصة جديدة لاكتشاف الكتب.',
      en: 'The heading is aimed at people interested in books and literature and announces a new opportunity to discover books.'
    }
  },
  {
    id: 'I',
    contenu: 'Neue Zeitung für Ihre Urlaubsplanung',
    traduction: {
      fr: 'Un nouveau journal pour organiser vos vacances',
      ar: 'جريدة جديدة للتخطيط لعطلتكم',
      en: 'A new newspaper for planning your holiday'
    },
    explication: {
      fr: 'Le titre évoque un journal destiné à aider les lecteurs à organiser leurs vacances.',
      ar: 'يشير العنوان إلى جريدة تهدف إلى مساعدة القراء على التخطيط لعطلتهم.',
      en: 'The heading refers to a newspaper intended to help readers plan their holidays.'
    }
  },
  {
    id: 'J',
    contenu: 'Laute Musik stört den Nachbarn',
    traduction: {
      fr: 'La musique forte dérange les voisins',
      ar: 'الموسيقى الصاخبة تزعج الجيران',
      en: 'Loud music disturbs the neighbors'
    },
    explication: {
      fr: 'Le titre résume les nuisances sonores causées par la musique diffusée trop fort et les règles destinées à protéger la tranquillité des voisins.',
      ar: 'يلخص العنوان الإزعاج الناتج عن تشغيل الموسيقى بصوت مرتفع والقواعد التي تهدف إلى حماية هدوء الجيران.',
      en: 'The heading summarizes noise caused by music played too loudly and the rules designed to protect the neighbors’ peace and quiet.'
    }
  }
]

const solutions: Record<number, string> = {
  1: 'D',
  2: 'G',
  3: 'J',
  4: 'H',
  5: 'A'
}

export default function JanPage() {
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
          <h1>Jan</h1>
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

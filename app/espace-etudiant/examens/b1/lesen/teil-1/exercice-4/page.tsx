
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
    contenu: 'Wenn Sie verreisen, wünschen wir Ihnen erholsame und angenehme Ferientage. Bitte denken Sie daran, sich Ihre Zeitung an den Urlaubsort nachsenden zu lassen. Denn mit den Neuigkeiten von zu Hause und aus aller Welt lässt sich die schönste Zeit des Jahres erst richtig genießen. Die Höhe des Bezugsgeldes bleibt unverändert. Ausführliche Informationen und entsprechende Coupons finden Sie in unserem großen Reise-Service-Anzeigen oder rufen Sie uns einfach an: Telefon 01 30-18 58 50 zum Nulltarif. Hannoversche Allgemeine Neue Presse.',
    traduction: {
      fr: 'Lorsque vous partez en voyage, nous vous souhaitons de bonnes vacances reposantes et agréables. Pensez à faire suivre votre journal jusqu’à votre lieu de vacances. En effet, les nouvelles de chez vous et du monde entier permettent de profiter pleinement de la plus belle période de l’année. Le prix de l’abonnement reste inchangé. Vous trouverez des informations détaillées et les coupons correspondants dans nos annonces de services de voyage, ou appelez-nous gratuitement.',
      ar: 'عندما تسافر، نتمنى لك عطلة ممتعة ومريحة. لا تنسَ طلب إرسال جريدتك إلى مكان عطلتك. فالأخبار القادمة من بلدك ومن جميع أنحاء العالم تساعدك على الاستمتاع بأجمل فترة من السنة. يبقى سعر الاشتراك دون تغيير. يمكنك العثور على معلومات مفصلة والقسائم اللازمة في إعلانات خدمات السفر الخاصة بنا، أو الاتصال بنا مجاناً.',
      en: 'When you travel, we wish you a relaxing and pleasant holiday. Remember to have your newspaper forwarded to your holiday destination. News from home and around the world helps you enjoy the best time of the year. The subscription price remains unchanged. You can find detailed information and the relevant coupons in our travel service advertisements, or call us free of charge.',
    },
    explication: {
      fr: 'Le journal propose à ses lecteurs de faire suivre leur abonnement jusqu’à leur lieu de vacances. Le message principal est que le journal continue à être livré même pendant les vacances.',
      ar: 'تقترح الجريدة على قرائها إرسال الصحيفة إلى مكان العطلة حتى يستمروا في قراءتها أثناء السفر.',
      en: 'The newspaper offers readers the possibility of having their newspaper delivered to their holiday destination.',
    },
  },
  {
    id: 2,
    contenu: 'Im Luftkurort Stadtkyll in der Mittelgebirgslandschaft des Oberen Kylltals werden dreitägige Wanderungen ohne Gepäck veranstaltet. Die Rundwanderung im deutsch-belgischen Naturpark führt abends zu reservierten Zimmern. Die Betriebe übernehmen den Gepäcktransport zum nächsten Tagesziel. Die Wanderungen werden ganzjährig angeboten. Im Wanderprogramm sind drei Übernachtungen mit Frühstück, dreimal Gepäcktransport, eine Wanderkarte, eine Wegbeschreibung und ein Wanderpass enthalten. Der Pauschalbetrag beträgt pro Person 89 Euro. Auskünfte: Verkehrsverein Erholungsgebiet Oberes Kylltal, Kurallee, 54589 Stadtkyll.',
    traduction: {
      fr: 'Dans la station climatique de Stadtkyll, située dans le paysage montagneux de la vallée supérieure de la Kyll, des randonnées de trois jours sans bagages sont organisées. Le circuit dans le parc naturel germano-belge conduit chaque soir les participants vers des chambres réservées. Les établissements se chargent du transport des bagages jusqu’à la prochaine étape. Les randonnées sont proposées toute l’année. Le programme comprend trois nuits avec petit-déjeuner, trois transports de bagages, une carte de randonnée, un descriptif du parcours et un carnet de randonnée. Le prix forfaitaire est de 89 euros par personne.',
      ar: 'في المنتجع الصحي Stadtkyll، الواقع في منطقة جبلية بوادي Kyll الأعلى، تُنظّم رحلات مشي لمدة ثلاثة أيام دون الحاجة إلى حمل الأمتعة. يمر المسار داخل الحديقة الطبيعية الألمانية البلجيكية، وفي كل مساء يصل المشاركون إلى غرف محجوزة مسبقاً. تتكفل المؤسسات بنقل الأمتعة إلى المحطة التالية. تُنظّم هذه الرحلات طوال السنة. يشمل البرنامج ثلاث ليالٍ مع الإفطار، وثلاث عمليات لنقل الأمتعة، وخريطة للمشي، ووصفاً للمسار، ودفتر رحلات. السعر الإجمالي هو 89 يورو للشخص الواحد.',
      en: 'In the health resort of Stadtkyll, three-day hiking tours without luggage are organized. The circular route through the German-Belgian nature park leads to reserved rooms each evening. Local businesses transport the luggage to the next destination. The hikes are offered throughout the year. The package includes three nights with breakfast, three luggage transfers, a hiking map, route instructions and a hiking pass. The price is 89 euros per person.',
    },
    explication: {
      fr: 'Le texte présente une offre touristique de randonnée. Les participants marchent pendant trois jours sans porter leurs bagages, car ceux-ci sont transportés jusqu’à l’étape suivante. Le prix est également indiqué.',
      ar: 'يعرض النص عرضاً سياحياً لرحلات المشي لمدة ثلاثة أيام دون حمل الأمتعة، حيث يتم نقلها إلى المحطة التالية.',
      en: 'The text presents a hiking offer. Participants walk for three days without carrying their luggage because it is transported to the next stop.',
    },
  },
  {
    id: 3,
    contenu: 'Für den einen ist es musikalischer Hochgenuss, für den anderen schlicht Lärm. Gemeint ist Musik, die aus Lautsprechern, Radios oder durch Musikinstrumente bei geöffneten Türen und Fenstern und sommerlichen Temperaturen ins Freie dringt. Die Gemeinde weist darauf hin, dass während der Mittagsruhe von 13 bis 15 Uhr und nachts von 22 bis 7 Uhr keine musikalischen Ruhestörungen erfolgen dürfen. Gartengeräte mit Motoren dürfen montags bis freitags nur von 8 bis 13 Uhr und von 15 bis 19 Uhr benutzt werden, an Sonnabenden von 9 bis 13 Uhr. An Sonn- und Feiertagen dürfen die Geräte nicht zum Einsatz kommen.',
    traduction: {
      fr: 'Pour certains, c’est un grand plaisir musical ; pour d’autres, c’est simplement du bruit. Il s’agit de la musique provenant des haut-parleurs, des radios ou des instruments de musique et qui se répand à l’extérieur lorsque les portes et les fenêtres sont ouvertes pendant les journées d’été. La commune rappelle qu’aucune nuisance sonore musicale n’est autorisée pendant la pause de midi, de 13 h à 15 h, ni la nuit, de 22 h à 7 h. Les appareils de jardin équipés d’un moteur ne peuvent être utilisés que du lundi au vendredi de 8 h à 13 h et de 15 h à 19 h, et le samedi de 9 h à 13 h. Ils sont interdits les dimanches et jours fériés.',
      ar: 'بالنسبة للبعض، الموسيقى متعة كبيرة، أما بالنسبة للآخرين فهي مجرد ضجيج. يتعلق الأمر بالموسيقى الصادرة من مكبرات الصوت أو أجهزة الراديو أو الآلات الموسيقية والتي تنتشر إلى الخارج عندما تكون الأبواب والنوافذ مفتوحة في فصل الصيف. تذكّر البلدية بأنه لا يُسمح بإحداث ضوضاء موسيقية خلال فترة الراحة من الساعة 13 إلى 15، ولا ليلاً من الساعة 22 إلى 7. كما يُسمح باستخدام أدوات الحديقة ذات المحركات من الاثنين إلى الجمعة في أوقات محددة، ويُمنع استخدامها أيام الأحد والعطل الرسمية.',
      en: 'For some people, it is musical enjoyment; for others, it is simply noise. The text refers to music coming from loudspeakers, radios or musical instruments and spreading outdoors through open doors and windows. The municipality reminds residents that musical disturbances are not permitted during the midday rest period or at night. Motorized garden equipment may only be used at specified times on weekdays and Saturdays, and not on Sundays or public holidays.',
    },
    explication: {
      fr: 'La commune rappelle les règles concernant le bruit, notamment la musique trop forte et l’utilisation des appareils de jardin. Le but est de protéger la tranquillité des voisins.',
      ar: 'تذكّر البلدية السكان بالقواعد المتعلقة بالضوضاء، وخاصة الموسيقى المرتفعة واستعمال أدوات الحديقة ذات المحركات، وذلك لحماية راحة الجيران.',
      en: 'The municipality reminds residents of noise regulations, especially concerning loud music and motorized garden equipment, in order to protect neighbors’ peace and quiet.',
    },
  },
  {
    id: 4,
    contenu: 'Das erste deutsche Bücherdorf hat in Mühlbeck/Friedersdorf (Sachsen-Anhalt) seit Ende September seine Tore geöffnet. In acht Antiquariaten warten über 70.000 Bücher aus allen Bereichen der Literatur auf Interessenten. Das in reizvoller landschaftlicher Umgebung liegende Bücherdorf nahe Bitterfeld ist aus allen Teilen Deutschlands leicht zu erreichen. Geöffnet sind die Antiquariate auch am Samstag und Sonntag. In Europa gibt es bereits acht solcher Bücherdörfer in Belgien, Frankreich, Großbritannien, den Niederlanden, Norwegen und der Schweiz. Initiatorin des deutschen Bücherdorfes ist Heidi Dehne.',
    traduction: {
      fr: 'Le premier village allemand du livre a ouvert ses portes fin septembre à Mühlbeck/Friedersdorf, en Saxe-Anhalt. Dans huit librairies spécialisées dans les livres anciens, plus de 70 000 livres de tous les domaines littéraires attendent les visiteurs. Situé dans un environnement naturel agréable près de Bitterfeld, le village du livre est facilement accessible depuis toutes les régions d’Allemagne. Les librairies sont également ouvertes le samedi et le dimanche. Il existe déjà huit villages du livre de ce type en Europe, notamment en Belgique, en France, en Grande-Bretagne, aux Pays-Bas, en Norvège et en Suisse.',
      ar: 'افتتحت أول قرية للكتب في ألمانيا أبوابها منذ نهاية شهر سبتمبر في Mühlbeck/Friedersdorf بولاية ساكسونيا أنهالت. وتضم ثماني مكتبات للكتب القديمة أكثر من 70 ألف كتاب في مختلف المجالات الأدبية. تقع القرية في منطقة طبيعية جميلة بالقرب من Bitterfeld، ويمكن الوصول إليها بسهولة من جميع أنحاء ألمانيا. كما تفتح المكتبات أبوابها يومي السبت والأحد. وتوجد بالفعل ثماني قرى مماثلة للكتب في أوروبا.',
      en: 'The first German book village opened at the end of September in Mühlbeck/Friedersdorf, Saxony-Anhalt. Eight second-hand bookshops offer more than 70,000 books from all areas of literature. Located in an attractive natural setting near Bitterfeld, the village is easy to reach from all parts of Germany. The bookshops are also open on Saturdays and Sundays. There are already eight similar book villages in Europe.',
    },
    explication: {
      fr: 'Le texte présente un village consacré aux livres. Les visiteurs peuvent y découvrir et acheter plus de 70 000 livres dans huit librairies spécialisées.',
      ar: 'يعرض النص قرية مخصصة للكتب، حيث يمكن للزوار اكتشاف وشراء أكثر من 70 ألف كتاب في ثماني مكتبات.',
      en: 'The text introduces a village dedicated to books, where visitors can discover more than 70,000 books in eight specialist bookshops.',
    },
  },
  {
    id: 5,
    contenu: 'Die Bregenzer Festspiele sind bemüht, die Vorstellungen auch bei zweifelhafter Witterung bzw. leichtem Regen auf der Seebühne abzuhalten, weshalb es zu Verzögerungen des Beginns oder zu Unterbrechungen kommen kann. Sollte die Seeaufführung nicht stattfinden können, wird eine halbszenische Version von Porgy and Bess im Festspielhaus gegeben. Wir empfehlen unseren Gästen, bei unsicherer Wetterlage regenfester Kleidung den Vorzug zu geben und auf Schirme zu verzichten, da diese die Sicht beeinträchtigen. Das Spiel auf dem See wird ohne Pause gespielt. Die Spieldauer beträgt ca. 2 Std. 45 Min.',
    traduction: {
      fr: 'Les organisateurs du festival de Bregenz s’efforcent de maintenir les représentations sur la scène du lac même lorsque les conditions météorologiques sont incertaines ou qu’il pleut légèrement. Cela peut entraîner un retard du début du spectacle ou des interruptions. Si la représentation sur le lac ne peut pas avoir lieu, une version semi-scénique de Porgy and Bess sera présentée dans le palais des festivals. Nous recommandons aux visiteurs de porter des vêtements imperméables en cas de météo incertaine et de ne pas utiliser de parapluies, car ils gênent la visibilité. Le spectacle sur le lac est joué sans entracte et dure environ 2 heures et 45 minutes.',
      ar: 'يحاول منظمو مهرجانات Bregenz إقامة العروض على المسرح الموجود فوق البحيرة حتى في حالة الطقس غير المستقر أو هطول أمطار خفيفة. وقد يؤدي ذلك إلى تأخير بداية العرض أو توقيفه مؤقتاً. وإذا تعذر تقديم العرض على البحيرة، فسيتم تقديم نسخة شبه مسرحية من أوبرا Porgy and Bess داخل قاعة المهرجانات. يُنصح الزوار بارتداء ملابس مقاومة للمطر عند عدم استقرار الطقس، وتجنب المظلات لأنها تحجب الرؤية. يستمر العرض على البحيرة دون استراحة، وتبلغ مدته حوالي ساعتين و45 دقيقة.',
      en: 'The organizers of the Bregenz Festival try to hold performances on the lake stage even in uncertain weather or light rain. This may cause delays or interruptions. If the lake performance cannot take place, a semi-staged version of Porgy and Bess will be performed in the festival hall. Visitors are advised to wear rainproof clothing and avoid umbrellas because they obstruct the view. The performance on the lake has no interval and lasts approximately two hours and 45 minutes.',
    },
    explication: {
      fr: 'Le texte donne des informations pratiques aux spectateurs du festival de Bregenz : les représentations peuvent être retardées ou déplacées en cas de mauvais temps. Il conseille également de porter des vêtements imperméables et de ne pas prendre de parapluie.',
      ar: 'يقدم النص معلومات مهمة لزوار مهرجانات Bregenz حول احتمال تأخير العروض أو تغيير مكانها بسبب الطقس، كما ينصح بارتداء ملابس مقاومة للمطر وعدم استعمال المظلات.',
      en: 'The text provides practical information for visitors to the Bregenz Festival. Performances may be delayed or moved because of bad weather, and visitors are advised to wear rainproof clothing.',
    },
  },
]

const ueberschriften = [
  {
    id: 'A',
    text: 'Abendwanderungen ab 89 Euro',
    traduction: {
      fr: 'Randonnées du soir à partir de 89 euros',
      ar: 'رحلات مشي مسائية ابتداءً من 89 يورو',
      en: 'Evening hikes from 89 euros',
    },
    explication: {
      fr: 'Ce titre parle de randonnées proposées à un prix de 89 euros. Cependant, le texte concerne surtout des randonnées de plusieurs jours sans bagages.',
      ar: 'يتحدث العنوان عن رحلات مشي بسعر يبدأ من 89 يورو، لكن النص يركز على رحلات متعددة الأيام دون أمتعة.',
      en: 'This heading mentions hiking tours starting at 89 euros, but the text focuses on multi-day hikes without luggage.',
    },
  },
  {
    id: 'B',
    text: 'Ausflugsziele für Literaturinteressierte',
    traduction: {
      fr: 'Destinations de visite pour les passionnés de littérature',
      ar: 'وجهات للزيارة لمحبي الأدب والكتب',
      en: 'Places to visit for literature enthusiasts',
    },
    explication: {
      fr: 'Le texte présente un village du livre avec huit librairies et plus de 70 000 ouvrages. C’est une destination intéressante pour les amateurs de lecture.',
      ar: 'يعرض النص قرية للكتب تضم ثماني مكتبات وأكثر من 70 ألف كتاب، وهي وجهة مناسبة لمحبي القراءة.',
      en: 'The text presents a book village with eight bookshops and more than 70,000 books, making it a destination for book lovers.',
    },
  },
  {
    id: 'C',
    text: 'Hinweis für Besucher der Bregenzer Festspiele',
    traduction: {
      fr: 'Informations pour les visiteurs du festival de Bregenz',
      ar: 'معلومات لزوار مهرجانات Bregenz',
      en: 'Information for visitors to the Bregenz Festival',
    },
    explication: {
      fr: 'Le texte donne des conseils aux spectateurs concernant la météo, les vêtements à porter, les parapluies et le déroulement du spectacle.',
      ar: 'يقدم النص نصائح للزوار حول الطقس والملابس المناسبة والمظلات وكيفية سير العرض.',
      en: 'The text gives visitors advice about the weather, suitable clothing, umbrellas and the performance.',
    },
  },
  {
    id: 'D',
    text: 'Ihre Zeitung folgt Ihnen in den Urlaub',
    traduction: {
      fr: 'Votre journal vous suit en vacances',
      ar: 'جريدتك ترافقك في العطلة',
      en: 'Your newspaper follows you on holiday',
    },
    explication: {
      fr: 'Le journal propose de faire suivre l’abonnement jusqu’au lieu de vacances du lecteur.',
      ar: 'تقترح الجريدة إرسال الصحيفة إلى مكان عطلة القارئ.',
      en: 'The newspaper offers to forward the subscription to the reader’s holiday destination.',
    },
  },
  {
    id: 'E',
    text: 'Laute Musik stört den Nachbarn',
    traduction: {
      fr: 'La musique forte dérange les voisins',
      ar: 'الموسيقى الصاخبة تزعج الجيران',
      en: 'Loud music disturbs the neighbors',
    },
    explication: {
      fr: 'Le texte rappelle les horaires pendant lesquels le bruit et la musique peuvent déranger les voisins.',
      ar: 'يذكر النص بالأوقات التي يمكن أن تسبب فيها الموسيقى والضوضاء إزعاجاً للجيران.',
      en: 'The text reminds residents of the times when noise and music can disturb neighbors.',
    },
  },
  {
    id: 'F',
    text: 'Musikveranstaltungen am Nachmittag',
    traduction: {
      fr: 'Manifestations musicales dans l’après-midi',
      ar: 'فعاليات موسيقية بعد الظهر',
      en: 'Music events in the afternoon',
    },
    explication: {
      fr: 'Ce titre concerne des événements musicaux organisés l’après-midi, ce qui ne correspond pas au texte qui traite des nuisances sonores.',
      ar: 'يتعلق العنوان بفعاليات موسيقية بعد الظهر، بينما يتحدث النص عن الإزعاج الناتج عن الضوضاء.',
      en: 'This heading concerns music events in the afternoon, whereas the text is about noise disturbances.',
    },
  },
  {
    id: 'G',
    text: 'Neue Zeitung für Ihre Urlaubsplanung',
    traduction: {
      fr: 'Un nouveau journal pour organiser vos vacances',
      ar: 'جريدة جديدة للتخطيط لعطلتك',
      en: 'A new newspaper for planning your holiday',
    },
    explication: {
      fr: 'Le titre parle d’un nouveau journal destiné à préparer les vacances, alors que le texte propose de recevoir son journal habituel pendant le séjour.',
      ar: 'يتحدث العنوان عن جريدة جديدة للتخطيط للعطلة، بينما يقترح النص مواصلة تلقي الجريدة المعتادة أثناء السفر.',
      en: 'The heading refers to a new newspaper for holiday planning, while the text offers delivery of an existing subscription during the holiday.',
    },
  },
  {
    id: 'H',
    text: 'Rekord: 70.000 Besucher im Bücherdorf',
    traduction: {
      fr: 'Record : 70 000 visiteurs dans le village du livre',
      ar: 'رقم قياسي: 70 ألف زائر في قرية الكتب',
      en: 'Record: 70,000 visitors in the book village',
    },
    explication: {
      fr: 'Le texte mentionne plus de 70 000 livres, et non 70 000 visiteurs. Le titre contient donc une information différente.',
      ar: 'يذكر النص أكثر من 70 ألف كتاب وليس 70 ألف زائر، لذلك فالعنوان لا يطابق المعلومة.',
      en: 'The text mentions more than 70,000 books, not 70,000 visitors, so the heading gives incorrect information.',
    },
  },
  {
    id: 'I',
    text: 'Schlechtes Wetter: Festspiele abgesagt',
    traduction: {
      fr: 'Mauvais temps : le festival est annulé',
      ar: 'طقس سيئ: تم إلغاء المهرجانات',
      en: 'Bad weather: festival performances cancelled',
    },
    explication: {
      fr: 'Le texte explique que les organisateurs essaient de maintenir les représentations même en cas de pluie légère. Elles ne sont donc pas automatiquement annulées.',
      ar: 'يوضح النص أن المنظمين يحاولون إقامة العروض حتى عند هطول أمطار خفيفة، لذلك لا يتم إلغاؤها تلقائياً.',
      en: 'The text explains that organizers try to hold performances even in light rain, so they are not automatically cancelled.',
    },
  },
  {
    id: 'J',
    text: 'Wandern ohne Gepäck',
    traduction: {
      fr: 'Faire de la randonnée sans bagages',
      ar: 'رحلات المشي دون أمتعة',
      en: 'Hiking without luggage',
    },
    explication: {
      fr: 'Le texte présente des randonnées de trois jours pendant lesquelles les bagages sont transportés séparément jusqu’à chaque étape.',
      ar: 'يعرض النص رحلات مشي لمدة ثلاثة أيام يتم خلالها نقل الأمتعة بشكل منفصل إلى كل محطة.',
      en: 'The text describes three-day hikes during which luggage is transported separately to each destination.',
    },
  },
]

const korrekt: Record<number, string> = {
  1: 'D',
  2: 'J',
  3: 'E',
  4: 'B',
  5: 'C',
}

export default function Exercice4() {
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

  const verifier = () => {
    setCorrige(true)
    setSelection(null)
  }

  const pruefenEinzeln = (texteId: number) => {
    if (!reponses[texteId]) return
    setEinzelPruefung(prev => ({ ...prev, [texteId]: true }))
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
    setListe(liste.includes(id) ? liste.filter(x => x !== id) : [...liste, id])
  }

  const score = Object.entries(reponses).filter(
    ([id, reponse]) => korrekt[Number(id)] === reponse
  ).length

  return (
    <main className="exercise-page">
      <header className="exercise-header">
        <Link href="/espace-etudiant" className="header-brand">
          <GraduationCap size={27} />
          <span>
            <span className="brand-white">Deutsch</span>{' '}
            <span className="brand-gold">Erfolg</span>
          </span>
        </Link>

        <Link
          href="/espace-etudiant/examens/b1/lesen"
          className="back-link"
        >
          <ArrowLeft size={18} />
          Zurück zu Lesen B1
        </Link>
      </header>

      <div className="exercise-content">
        <div className="breadcrumb">
          TELC B1 <span>/</span> LESEN <span>/</span> TEIL 1
        </div>

        <section className="exercise-hero">
          <span className="hero-label">LESEVERSTEHEN · TEIL 1</span>
          <h1>Vera</h1>
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
                  className={`text-card ${selection && !corrige ? 'selectable target' : ''} ${
                    dejaVerifie && reponse
                      ? istRichtig ? 'correct' : 'incorrect'
                      : ''
                  }`}
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
                      onClick={() =>
                        basculer(texte.id, traductionsTextes, setTraductionsTextes)
                      }
                    >
                      <Languages size={15} />
                      Traduction
                      {traductionOuverte
                        ? <ChevronUp size={15} />
                        : <ChevronDown size={15} />}
                    </button>

                    <button
                      className={`help-button ${explicationOuverte ? 'active' : ''}`}
                      onClick={() =>
                        basculer(texte.id, explicationsTextes, setExplicationsTextes)
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
                      className={`translation-panel ${langue === 'ar' ? 'arabic' : ''}`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <strong>{langues[langue]}</strong>
                      <p>{texte.traduction[langue]}</p>
                    </div>
                  )}

                  {explicationOuverte && (
                    <div
                      className={`explanation-panel ${langue === 'ar' ? 'arabic' : ''}`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <strong>
                        <Lightbulb size={15} /> Comprendre le contexte
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
                      onClick={() =>
                        setDetailsTitres(prev =>
                          prev.includes(titel.id)
                            ? prev.filter(id => id !== titel.id)
                            : [...prev, titel.id]
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
                        className={`title-detail ${langue === 'ar' ? 'arabic' : ''}`}
                        dir={langue === 'ar' ? 'rtl' : 'ltr'}
                      >
                        <div className="title-translation">
                          <strong>{langues[langue]}</strong>
                          <p>{titel.traduction[langue]}</p>
                        </div>
                        <div className="title-explanation">
                          <strong>
                            <Lightbulb size={14} /> Explication
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
              <button className="restart-button" onClick={recommencer}>
                <RotateCcw size={17} /> Noch einmal versuchen
              </button>
            </>
          )}
        </section>
      </div>

      <style jsx global>{`
        .exercise-page {
          min-height: 100vh;
          background: #f7f5f0;
          color: #192b43;
          font-family: Arial, sans-serif;
        }

        .exercise-header {
          height: 68px;
          background: #192b43;
          padding: 0 7%;
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

        .header-brand svg {
          color: #b49760;
          transform: translateY(-3px);
        }

        .brand-white { color: #FFFFFF; }
        .brand-gold { color: #b49760; }

        .back-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
        }

        .back-link svg { color: #b49760; }

        .exercise-content {
          max-width: 1400px;
          margin: auto;
          padding: 30px 24px 60px;
        }

        .breadcrumb {
          font-size: 12px;
          color: #626a75;
          margin-bottom: 22px;
        }

        .breadcrumb span {
          margin: 0 8px;
          color: #b49760;
        }

        .exercise-hero {
          background: #192b43;
          border-radius: 17px;
          color: white;
          padding: 30px 34px;
          margin-bottom: 22px;
        }

        .hero-label {
          color: #b49760;
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

        .progress-label strong { color: #b49760; }

        .progress-track {
          height: 7px;
          background: #ffffff30;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #b49760;
          border-radius: 10px;
          transition: width .2s;
        }

        .language-bar {
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

        .language-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #192b43;
          font-size: 13px;
          font-weight: 700;
        }

        .language-label svg { color: #806337; }

        .language-bar select {
          border: 1px solid #D9DFE8;
          border-radius: 8px;
          padding: 9px 13px;
          background: #F9FAFC;
          color: #192b43;
          font-size: 13px;
          cursor: pointer;
        }

        .language-hint {
          font-size: 11px;
          color: #626a75;
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
          color: #192b43;
        }

        .section-hint {
          color: #7C8797;
          font-size: 12px;
          line-height: 1.7;
          margin: 0 0 17px;
        }

        .text-card {
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 13px;
          padding: 22px;
          margin-bottom: 18px;
          transition: .2s;
        }

        .text-card.target {
          border: 2px dashed #b49760;
          background: #FFFCF5;
          cursor: pointer;
        }

        .text-card.selectable { cursor: pointer; }

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
          background: #192b43;
          color: #b49760;
          border-radius: 9px;
          font-weight: 700;
        }

        .empty-slot {
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

        .text-card.target .empty-slot {
          border-color: #b49760;
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

        .individual-check { margin: 12px 0 17px; }

        .individual-check-button {
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

        .individual-check-button:hover { background: #294B78; }

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
          background: #f7f5f0;
          color: #53647A;
          font-size: 12px;
          cursor: pointer;
        }

        .help-button:hover,
        .help-button.active {
          border-color: #b49760;
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
          border-left: 3px solid #b49760;
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
        .explanation-panel p { margin: 7px 0 0; }

        .arabic {
          text-align: right;
          font-size: 15px;
          line-height: 2.1;
        }

        .arabic strong { justify-content: flex-start; }

        .titles-column {
          background: white;
          border: 1px solid #e3ded3;
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
          color: #806337;
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
          border: 1px solid #e3ded3;
          border-radius: 10px;
          padding: 9px;
          background: #fff;
        }

        .title-item.chosen {
          border-color: #b49760;
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
          border-color: #b49760;
          background: #FFFCF5;
        }

        .title-option.selected {
          border: 2px solid #b49760;
          background: #FFFCF5;
        }

        .title-option.used {
          opacity: .55;
          cursor: default;
          background: #f7f5f0;
        }

        .title-option:disabled { cursor: default; }

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

        .title-help:hover { color: #192b43; }

        .title-detail {
          margin-top: 7px;
          padding: 12px;
          background: #f7f5f0;
          border-radius: 8px;
          color: #45556B;
          font-size: 12px;
          line-height: 1.7;
        }

        .title-detail p { margin: 5px 0 0; }

        .title-translation {
          padding-bottom: 10px;
          border-bottom: 1px solid #e3ded3;
        }

        .title-explanation { padding-top: 10px; }

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
          background: #192b43;
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
          color: #806337;
          font-size: 22px;
        }

        .score-result span {
          color: #64748B;
          font-size: 13px;
        }

        @media(max-width: 900px) {
          .exercise-layout { grid-template-columns: 1fr; }
          .titles-column { position: static; grid-row: 1; }
        }

        @media(max-width: 600px) {
          .exercise-content { padding: 20px 12px 40px; }
          .exercise-hero { padding: 24px 18px; }
          .exercise-hero h1 { font-size: 24px; }
          .exercise-header { padding: 0 14px; }
          .text-card { padding: 15px; }
          .german-text { font-size: 13px; line-height: 1.9; }
          .language-bar { gap: 10px; padding: 13px; }
          .language-hint { width: 100%; }
          .titles-column { padding: 14px; }
          .title-option { min-height: 58px; font-size: 12px; }
          .empty-slot { min-height: 62px; }
          .assigned-title { min-height: 58px; }
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

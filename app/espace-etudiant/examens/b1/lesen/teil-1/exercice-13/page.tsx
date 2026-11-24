
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
    contenu: "Die Kunst- und Medienschule F+F Zürich bietet bereits zum dritten Mal den Computerkurs Digitale Bildbearbeitung an. Im neuen Semester steht an zehn Samstagen die Fotografie nach der Fotografie, also die digitale Bearbeitung von Bildern, im Mittelpunkt. Dabei kommen verschiedene Softwareprodukte zum Einsatz. Der Kurs befasst sich aber nicht nur mit der Vermittlung der technischen Möglichkeiten, sondern auch mit Themen und Problembereichen rund um die digitale Foto- und Bildbearbeitung. Kurskosten: 800 Franken. Nähere Informationen und Anmeldung zu diesem Kurs: www.f-f.ch.",
    traduction: {
      fr: "L'école d'art et des médias F+F de Zurich propose pour la troisième fois son cours informatique consacré à la retouche numérique des images. Pendant dix samedis du nouveau semestre, le cours sera centré sur la photographie après la prise de vue, c'est-à-dire le traitement numérique des photos. Différents logiciels seront utilisés. Le cours ne porte pas uniquement sur les possibilités techniques, mais aborde également les thèmes et les problèmes liés à la photographie et à la retouche numérique. Prix du cours : 800 francs. Informations et inscriptions : www.f-f.ch.",
      ar: "تقدم مدرسة الفن والإعلام F+F في زيورخ للمرة الثالثة دورة في الإعلاميات حول المعالجة الرقمية للصور. وخلال عشرة أيام سبت من الفصل الدراسي الجديد، سيركز البرنامج على معالجة الصور بعد التقاطها، أي تعديلها رقمياً. وسيتم استعمال برامج مختلفة. ولا تقتصر الدورة على تعليم الجوانب التقنية فقط، بل تتناول أيضاً المواضيع والمشكلات المرتبطة بالتصوير والمعالجة الرقمية للصور. ثمن الدورة: 800 فرنك. للمعلومات والتسجيل: www.f-f.ch.",
      en: "The F+F School of Art and Media in Zurich is offering its computer course in digital image editing for the third time. Over ten Saturdays during the new semester, the course will focus on photography after the shot has been taken, meaning the digital editing of images. Various software products will be used. The course covers not only technical skills but also topics and issues related to digital photography and image editing. Course fee: 800 francs. Further information and registration: www.f-f.ch."
    },
    explication: {
      fr: "Le texte annonce un cours informatique consacré à la retouche numérique des photographies. Il explique le contenu de la formation, sa durée, son prix et les modalités d'inscription. Le titre A correspond donc directement au sujet.",
      ar: "يعلن النص عن دورة في الإعلاميات مخصصة لتعديل الصور رقمياً. ويوضح محتوى الدورة ومدتها وثمنها وطريقة التسجيل. لذلك فإن العنوان A هو الأنسب.",
      en: "The text announces a computer course about digital photo editing. It gives details about the course content, duration, price and registration. Therefore, heading A is the best match."
    }
  },
  {
    id: 2,
    contenu: "Neuperlach-Süd – Nach dem Einkaufen einen Kaffee genießen, mit anderen ins Gespräch kommen, sich mit Bekannten treffen oder einfach entspannen – all das geht ab 11. Juli immer dienstags zwischen 14 und 18 Uhr im neuen Eiscafé der Dietrich-Bonhoeffer-Kirche. „Wir hoffen damit, einen Ort der Begegnung für Jung und Alt anbieten und zur Belebung des Stadtteils beitragen zu können“, erklärt Pfarrer Sebastian Kühnen. Neben kalten und heißen Getränken sowie Kuchen steht während der Öffnungszeiten auch eine Mitarbeiterin für Gespräche zur Verfügung.",
    traduction: {
      fr: "Neuperlach-Sud – Après les courses, il est possible de savourer un café, de discuter avec d'autres personnes, de rencontrer des connaissances ou simplement de se détendre. Tout cela sera possible à partir du 11 juillet, chaque mardi entre 14 h et 18 h, dans le nouveau café-glacier de l'église Dietrich-Bonhoeffer. « Nous espérons ainsi proposer un lieu de rencontre pour les jeunes et les moins jeunes et contribuer à rendre le quartier plus vivant », explique le pasteur Sebastian Kühnen. En plus des boissons chaudes et froides et des gâteaux, une employée sera disponible pour discuter avec les visiteurs pendant les heures d'ouverture.",
      ar: "نيوبيرلاخ-زود: بعد التسوق، يمكن للزوار الاستمتاع بفنجان من القهوة، والتحدث مع الآخرين، ولقاء المعارف أو الاسترخاء. وسيكون ذلك ممكناً ابتداءً من 11 يوليو، كل يوم ثلاثاء من الساعة الثانية إلى السادسة مساءً، في المقهى الجديد التابع لكنيسة ديتريش بونهوفر. ويقول القس سيباستيان كونيهن إن الهدف هو توفير مكان للقاء الشباب وكبار السن والمساهمة في تنشيط الحي. وإلى جانب المشروبات الساخنة والباردة والحلويات، ستكون هناك موظفة متاحة للتحدث مع الزوار خلال ساعات العمل.",
      en: "Neuperlach-South – After shopping, people can enjoy a coffee, talk to others, meet acquaintances or simply relax. All this will be possible from July 11, every Tuesday between 2 p.m. and 6 p.m., at the new ice cream café of the Dietrich Bonhoeffer Church. The pastor, Sebastian Kühnen, explains that they hope to provide a meeting place for young and old and help bring the neighbourhood to life. In addition to hot and cold drinks and cakes, a staff member will be available for conversations during opening hours."
    },
    explication: {
      fr: "L'église ouvre un nouveau café qui doit devenir un lieu de rencontre pour les habitants du quartier, jeunes et moins jeunes. Le texte insiste sur les rencontres, les discussions et la convivialité. Le titre C est donc correct.",
      ar: "تفتتح الكنيسة مقهى جديداً ليكون مكاناً للقاء سكان الحي من مختلف الأعمار. ويركز النص على التواصل واللقاءات والأجواء الاجتماعية. لذلك فالعنوان C هو الصحيح.",
      en: "The church is opening a new café intended as a meeting place for local residents of all ages. The text emphasizes social contact, conversations and community life. Therefore, heading C is correct."
    }
  },
  {
    id: 3,
    contenu: "Geheimnisse der modernen Konditorkunst: Der Meister des Süßen, Herwig Gasser, sammelte über Jahre hinweg Rezepte für Mehlspeisen. Der Bäcker des berühmten Wiener Café Landtmann präsentiert eine große Auswahl an Köstlichkeiten: von der Birnentorte über den Apfelstrudel bis hin zum Heidelbeer-Stollen. Verlag Kettel, 110 Fotos, 300 Seiten. ISBN 3-85134-014-0.",
    traduction: {
      fr: "Les secrets de l'art moderne de la pâtisserie : le maître des douceurs, Herwig Gasser, a rassemblé pendant des années des recettes de pâtisseries. Le pâtissier du célèbre Café Landtmann de Vienne présente un grand choix de gourmandises : de la tarte aux poires au strudel aux pommes, en passant par le gâteau aux myrtilles. Éditions Kettel, 110 photos, 300 pages. ISBN 3-85134-014-0.",
      ar: "أسرار فن الحلويات الحديث: جمع خبير الحلويات هيرفيغ غاسر وصفات متنوعة للحلويات والمعجنات على مدى سنوات. ويقدم حلواني مقهى لاندتمان الشهير في فيينا مجموعة كبيرة من الوصفات، من كعكة الكمثرى إلى فطيرة التفاح وصولاً إلى كعكة التوت الأزرق. دار نشر Kettel، 110 صور، 300 صفحة. رقم ISBN: 3-85134-014-0.",
      en: "Secrets of modern confectionery: the master of sweets, Herwig Gasser, spent years collecting recipes for pastries and desserts. The pastry chef of Vienna's famous Café Landtmann presents a wide selection of treats, from pear cake and apple strudel to blueberry cake. Kettel Publishing, 110 photos, 300 pages. ISBN 3-85134-014-0."
    },
    explication: {
      fr: "Le texte présente un livre contenant de nombreuses recettes de pâtisseries et de desserts. Il cite plusieurs exemples de gâteaux et donne les informations sur l'éditeur et le nombre de pages. Le titre G correspond aux recettes de gâteaux et de tartes.",
      ar: "يعرض النص كتاباً يضم وصفات كثيرة للحلويات والمعجنات، ويذكر أمثلة مثل كعكة الكمثرى وفطيرة التفاح. لذلك فإن العنوان G المتعلق بوصفات الكعك والحلويات هو الأنسب.",
      en: "The text presents a book containing many recipes for cakes and pastries. It gives examples such as pear cake and apple strudel, as well as publishing details. Heading G, about recipes for cakes and pastries, is the best match."
    }
  },
  {
    id: 4,
    contenu: "Am Montag wird in Stuttgart die BildungsDidacta eröffnet. Dort werden vor allem Lehrmaterialien vorgestellt. Bei vielen davon handelt es sich um Bildungssoftware. Für ein gelungenes Softwareprojekt wird der Bildungssoftwarepreis digita vergeben. Dabei handelt es sich um eine wichtige Auszeichnung für Lehr- und Lernprogramme im deutschsprachigen Raum. Die Veranstalter zeichnen mit dem digita multimediale Angebote aus, die inhaltlich und formal als herausragend und beispielgebend gelten können.",
    traduction: {
      fr: "Le salon BildungsDidacta ouvrira ses portes lundi à Stuttgart. On y présentera principalement du matériel pédagogique, dont une grande partie est constituée de logiciels éducatifs. Le prix du logiciel éducatif « digita » sera décerné à un projet particulièrement réussi. Il s'agit d'une distinction importante pour les programmes d'enseignement et d'apprentissage dans les pays germanophones. Les organisateurs récompensent des outils multimédias dont le contenu et la présentation sont considérés comme exceptionnels et exemplaires.",
      ar: "سيفتتح معرض BildungsDidacta يوم الاثنين في شتوتغارت. وسيتم خلاله عرض وسائل تعليمية، من بينها عدد كبير من البرامج التعليمية. كما سيتم منح جائزة «digita» لأفضل مشروع في مجال البرامج التعليمية. وتُعد هذه الجائزة تكريماً مهماً لبرامج التعليم والتعلم في البلدان الناطقة بالألمانية. ويكرّم المنظمون البرامج متعددة الوسائط التي تتميز بجودة محتواها وطريقة تقديمها.",
      en: "The BildungsDidacta exhibition opens in Stuttgart on Monday. Teaching materials will be presented there, many of which are educational software. The educational software award, digita, will be presented to an outstanding software project. It is an important award for teaching and learning programmes in German-speaking countries. The organizers recognize multimedia products whose content and presentation are considered exceptional and exemplary."
    },
    explication: {
      fr: "Le texte parle du prix « digita », une distinction attribuée aux meilleurs logiciels et programmes éducatifs. Il ne s'agit pas simplement de tester de nouveaux logiciels : le point essentiel est la remise d'un prix. La bonne réponse est F.",
      ar: "يتحدث النص عن جائزة «digita» التي تُمنح للبرامج التعليمية المتميزة. فالفكرة الأساسية ليست اختبار برامج جديدة، بل تكريم أفضل برنامج تعليمي. لذلك فالإجابة الصحيحة هي F.",
      en: "The text is about the digita award, which recognizes outstanding educational software and learning programmes. The main point is the award itself, not simply testing new software. The correct answer is F."
    }
  },
  {
    id: 5,
    contenu: "Eine Studie des Gallup-Instituts hat sich mit dem Kaffeehausverhalten der Wiener beschäftigt. Ein Vorurteil hat sich dabei bestätigt: Das Kaffeehaus gehört zum Leben der Wiener. Die Ergebnisse der Studie zeigen, dass 27 Prozent der Befragten zumindest einmal im Monat in ein Kaffeehaus in der Nähe ihrer Wohnung gehen. Durchschnittlich verbringen die Befragten 54 Minuten in ihrem Stammcafé. Je älter die Kundschaft ist, umso länger bleibt sie. Der Grund: Ein Kaffeehaus ist für viele Menschen wichtig, um zu plaudern und Freunde zu treffen. 77 Prozent der Befragten nennen das als Grund für ihren Besuch im Kaffeehaus.",
    traduction: {
      fr: "Une étude de l'institut Gallup s'est intéressée aux habitudes des Viennois dans les cafés. Un préjugé s'est confirmé : le café fait partie de la vie des habitants de Vienne. Les résultats montrent que 27 % des personnes interrogées se rendent au moins une fois par mois dans un café proche de leur domicile. En moyenne, elles passent 54 minutes dans leur café habituel. Plus les clients sont âgés, plus ils y restent longtemps. La raison : pour beaucoup de personnes, le café est un lieu important pour discuter et retrouver des amis. 77 % des personnes interrogées donnent cette raison pour expliquer leur visite.",
      ar: "تناولت دراسة أجراها معهد غالوب عادات سكان فيينا في المقاهي. وقد تأكدت إحدى الأفكار الشائعة، وهي أن المقهى جزء من حياة سكان فيينا. وتُظهر نتائج الدراسة أن 27% من الأشخاص الذين شملهم الاستطلاع يزورون مقهى قريباً من منازلهم مرة واحدة على الأقل شهرياً. ويقضي المشاركون في المتوسط 54 دقيقة في مقهاهم المعتاد. وكلما تقدم الزبائن في السن، زادت مدة بقائهم. والسبب هو أن المقهى مكان مهم بالنسبة للكثيرين للتحدث ولقاء الأصدقاء. وقد ذكر 77% من المشاركين هذا السبب لزيارة المقهى.",
      en: "A Gallup Institute study examined the coffeehouse habits of people in Vienna. One common belief was confirmed: coffeehouses are part of Viennese life. The results show that 27% of respondents visit a café near their home at least once a month. On average, they spend 54 minutes in their regular café. The older the customers are, the longer they stay. The reason is that coffeehouses are important places for many people to chat and meet friends. 77% of respondents gave this as a reason for visiting a café."
    },
    explication: {
      fr: "Le texte présente une étude sur les habitudes des Viennois dans les cafés. Il explique à quelle fréquence ils s'y rendent, combien de temps ils y restent et surtout pourquoi : discuter et retrouver des amis. Le titre I correspond à cette question : pourquoi les Viennois vont-ils au café ?",
      ar: "يعرض النص دراسة حول عادات سكان فيينا في المقاهي، ويوضح عدد مرات زيارتهم ومدة بقائهم، والأسباب الرئيسية لذلك، وهي التحدث ولقاء الأصدقاء. لذلك فإن العنوان I هو الأنسب.",
      en: "The text presents a study of Viennese coffeehouse habits. It explains how often people visit cafés, how long they stay and, most importantly, why they go there: to chat and meet friends. Heading I is therefore the best match."
    }
  }
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Bilder mit dem Computer bearbeiten',
    traduction: {
      fr: 'Retoucher des images avec un ordinateur',
      ar: 'تعديل الصور باستعمال الحاسوب',
      en: 'Editing images with a computer'
    },
    explication: {
      fr: 'Ce titre concerne la retouche et le traitement numérique des photographies à l’aide de logiciels informatiques.',
      ar: 'يتعلق هذا العنوان بتعديل الصور ومعالجتها رقمياً باستعمال برامج الحاسوب.',
      en: 'This heading refers to editing and digitally processing photographs using computer software.'
    }
  },
  {
    id: 'B',
    contenu: 'Kirche bietet Backkurs für Kinder an',
    traduction: {
      fr: 'Une église propose un cours de pâtisserie pour les enfants',
      ar: 'كنيسة تقدم دورة في صناعة الحلويات للأطفال',
      en: 'Church offers a baking course for children'
    },
    explication: {
      fr: 'Ce titre évoque un cours de cuisine ou de pâtisserie organisé par une église pour les enfants. Aucun texte ne décrit cette activité.',
      ar: 'يشير العنوان إلى دورة في الطبخ أو الحلويات تنظمها كنيسة للأطفال، لكن لا يوجد نص يتحدث عن هذا النشاط.',
      en: 'This heading refers to a cooking or baking course organized by a church for children. None of the texts describes such an activity.'
    }
  },
  {
    id: 'C',
    contenu: 'Kirche eröffnet neuen Treffpunkt',
    traduction: {
      fr: 'Une église ouvre un nouveau lieu de rencontre',
      ar: 'كنيسة تفتتح مكاناً جديداً للقاء',
      en: 'Church opens a new meeting place'
    },
    explication: {
      fr: 'Ce titre correspond au nouveau café de l’église, destiné à permettre aux habitants de se rencontrer et de discuter.',
      ar: 'يتطابق هذا العنوان مع المقهى الجديد التابع للكنيسة، والذي يهدف إلى توفير مكان يلتقي فيه سكان الحي ويتحدثون.',
      en: 'This heading matches the church’s new café, which is intended to give local residents a place to meet and talk.'
    }
  },
  {
    id: 'D',
    contenu: 'Neu: Kochbuch über Wiener Fleischgerichte',
    traduction: {
      fr: 'Nouveau : livre de cuisine sur les plats de viande viennois',
      ar: 'جديد: كتاب طبخ حول أطباق اللحوم الفيينية',
      en: 'New: Cookbook about Viennese meat dishes'
    },
    explication: {
      fr: 'Ce titre annonce un livre de recettes consacré aux plats de viande viennois. Le texte 3 présente plutôt un livre de pâtisseries et de desserts.',
      ar: 'يشير العنوان إلى كتاب وصفات خاص بأطباق اللحوم الفيينية، بينما يتحدث النص 3 عن كتاب للحلويات والمعجنات.',
      en: 'This heading announces a cookbook about Viennese meat dishes. Text 3 instead presents a book about pastries and desserts.'
    }
  },
  {
    id: 'E',
    contenu: 'Neue Computerprogramme werden getestet',
    traduction: {
      fr: 'De nouveaux logiciels informatiques sont testés',
      ar: 'اختبار برامج حاسوبية جديدة',
      en: 'New computer programmes are being tested'
    },
    explication: {
      fr: 'Ce titre parle de tests de nouveaux logiciels. Le texte 1 présente une formation à la retouche numérique, tandis que le texte 4 annonce un prix récompensant des logiciels éducatifs.',
      ar: 'يتحدث العنوان عن اختبار برامج حاسوبية جديدة. أما النص 1 فيعرض دورة لتعديل الصور، والنص 4 يتحدث عن جائزة للبرامج التعليمية.',
      en: 'This heading refers to testing new software. Text 1 describes a digital editing course, while text 4 announces an award for educational software.'
    }
  },
  {
    id: 'F',
    contenu: 'Preis für bestes Lernprogramm',
    traduction: {
      fr: 'Prix du meilleur programme éducatif',
      ar: 'جائزة أفضل برنامج تعليمي',
      en: 'Award for the best learning programme'
    },
    explication: {
      fr: 'Ce titre correspond au prix « digita », décerné aux programmes éducatifs et multimédias particulièrement réussis.',
      ar: 'يتطابق هذا العنوان مع جائزة «digita» التي تُمنح للبرامج التعليمية وبرامج الوسائط المتعددة المتميزة.',
      en: 'This heading matches the digita award, which recognizes outstanding educational and multimedia learning programmes.'
    }
  },
  {
    id: 'G',
    contenu: 'Rezepte für Kuchen und Torten',
    traduction: {
      fr: 'Recettes de gâteaux et de tartes',
      ar: 'وصفات الكعك والفطائر الحلوة',
      en: 'Recipes for cakes and pastries'
    },
    explication: {
      fr: 'Ce titre correspond au livre de recettes de Herwig Gasser, qui présente des gâteaux, des tartes et différentes pâtisseries.',
      ar: 'يتطابق هذا العنوان مع كتاب وصفات هيرفيغ غاسر، الذي يقدم أنواعاً مختلفة من الكعك والفطائر والحلويات.',
      en: 'This heading matches Herwig Gasser’s recipe book, which contains cakes, tarts and various pastries.'
    }
  },
  {
    id: 'H',
    contenu: 'Studie zeigt: Kaffeetrinker sind glücklicher',
    traduction: {
      fr: 'Une étude montre que les buveurs de café sont plus heureux',
      ar: 'دراسة تُظهر أن شاربي القهوة أكثر سعادة',
      en: 'Study shows: coffee drinkers are happier'
    },
    explication: {
      fr: 'Ce titre parle du bonheur des personnes qui boivent du café. Le texte 5 présente une étude sur les habitudes des Viennois dans les cafés, mais ne dit pas que les buveurs de café sont plus heureux.',
      ar: 'يتحدث العنوان عن سعادة الأشخاص الذين يشربون القهوة. أما النص 5 فيعرض دراسة حول عادات سكان فيينا في المقاهي، ولا يقول إن شاربي القهوة أكثر سعادة.',
      en: 'This heading concerns the happiness of coffee drinkers. Text 5 presents a study about Viennese coffeehouse habits, but does not claim that coffee drinkers are happier.'
    }
  },
  {
    id: 'I',
    contenu: 'Warum die Wiener ins Café gehen',
    traduction: {
      fr: 'Pourquoi les Viennois vont au café',
      ar: 'لماذا يذهب سكان فيينا إلى المقاهي؟',
      en: 'Why Viennese people go to cafés'
    },
    explication: {
      fr: 'Ce titre correspond à l’étude sur les habitudes des Viennois. Le texte explique qu’ils vont au café principalement pour discuter et retrouver leurs amis.',
      ar: 'يتطابق هذا العنوان مع الدراسة حول عادات سكان فيينا، إذ يوضح النص أنهم يذهبون إلى المقاهي أساساً للتحدث ولقاء الأصدقاء.',
      en: 'This heading matches the study of Viennese habits. The text explains that people mainly go to cafés to chat and meet friends.'
    }
  },
  {
    id: 'J',
    contenu: 'Zürcher Fotografen stellen aus',
    traduction: {
      fr: 'Des photographes zurichois exposent leurs œuvres',
      ar: 'مصورون من زيورخ يعرضون أعمالهم',
      en: 'Zurich photographers exhibit their work'
    },
    explication: {
      fr: 'Ce titre concerne une exposition de photographies organisée par des photographes zurichois. Le texte 1 parle d’un cours de retouche numérique, et non d’une exposition.',
      ar: 'يتعلق العنوان بمعرض للصور ينظمه مصورون من زيورخ. لكن النص 1 يتحدث عن دورة في تعديل الصور رقمياً وليس عن معرض.',
      en: 'This heading refers to a photography exhibition by Zurich photographers. Text 1 is about a digital image-editing course, not an exhibition.'
    }
  }
]

const solutions: Record<number, string> = {
  1: 'A',
  2: 'C',
  3: 'G',
  4: 'F',
  5: 'I'
}

export default function NadjaClaudiaPage() {
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
          <h1>Nadja / Claudia</h1>
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
          background: #F5F6F8;
          color: #172B4D;
          font-family: Arial, sans-serif;
        }

        .paul-header {
          height: 68px;
          background: #172B4D;
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
          color: #D6B56D;
          transform: translateY(-3px);
        }

        .paul-brand span {
          display: inline-flex;
          gap: 5px;
        }

        .paul-brand strong {
          color: #D6B56D;
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
          color: #D6B56D;
        }

        .paul-content {
          max-width: 1400px;
          margin: auto;
          padding: 30px 24px 60px;
        }

        .paul-breadcrumb {
          font-size: 12px;
          color: #8B96A6;
          margin-bottom: 22px;
        }

        .paul-breadcrumb span {
          margin: 0 8px;
          color: #D6B56D;
        }

        .paul-hero {
          background: linear-gradient(120deg, #172B4D, #294B78);
          border-radius: 17px;
          color: white;
          padding: 30px 34px;
          margin-bottom: 22px;
        }

        .paul-hero-label {
          color: #D6B56D;
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
          color: #D6B56D;
        }

        .paul-progress-track {
          height: 7px;
          background: #ffffff30;
          border-radius: 10px;
          overflow: hidden;
        }

        .paul-progress-fill {
          height: 100%;
          background: #D6B56D;
          border-radius: 10px;
          transition: width .2s;
        }

        .paul-language-bar {
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

        .paul-language-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #172B4D;
          font-size: 13px;
          font-weight: 700;
        }

        .paul-language-label svg {
          color: #A18142;
        }

        .paul-language-bar select {
          border: 1px solid #D9DFE8;
          border-radius: 8px;
          padding: 9px 13px;
          background: #F9FAFC;
          color: #172B4D;
          font-size: 13px;
          cursor: pointer;
        }

        .paul-language-hint {
          font-size: 11px;
          color: #8792A2;
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
          color: #172B4D;
        }

        .paul-section-hint {
          color: #7C8797;
          font-size: 12px;
          line-height: 1.7;
          margin: 0 0 17px;
        }

        .paul-text-card {
          background: white;
          border: 1px solid #E5E9EF;
          border-radius: 13px;
          padding: 22px;
          margin-bottom: 18px;
          transition: .2s;
        }

        .paul-text-card.paul-target {
          border: 2px dashed #D6B56D;
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
          background: #172B4D;
          color: #D6B56D;
          border-radius: 9px;
          font-weight: 700;
        }

        .paul-empty-slot {
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

        .paul-text-card.paul-target .paul-empty-slot {
          border-color: #D6B56D;
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
          background: #172B4D;
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
          background: #F8FAFC;
          color: #53647A;
          font-size: 12px;
          cursor: pointer;
        }

        .paul-help-button:hover,
        .paul-help-button.paul-active {
          border-color: #D6B56D;
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
          border-left: 3px solid #D6B56D;
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
          border: 1px solid #E5E9EF;
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
          color: #A18142;
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
          border: 1px solid #E5E9EF;
          border-radius: 10px;
          padding: 9px;
          background: #fff;
        }

        .paul-title-item.paul-chosen {
          border-color: #D6B56D;
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
          border-color: #D6B56D;
          background: #FFFCF5;
        }

        .paul-title-option.paul-selected {
          border: 2px solid #D6B56D;
          background: #FFFCF5;
        }

        .paul-title-option.paul-used {
          opacity: .55;
          cursor: default;
          background: #F5F6F8;
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
          color: #172B4D;
        }

        .paul-title-detail {
          margin-top: 7px;
          padding: 12px;
          background: #F8FAFC;
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
          border-bottom: 1px solid #E1E6ED;
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
          background: #172B4D;
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
          color: #A18142;
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
      `}</style>
    </main>
  )
}

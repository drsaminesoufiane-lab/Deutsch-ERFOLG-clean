
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
    contenu: "Rund 150,000 Sprachreisen werden von Deutschen jährlich unternommen. Der Wunsch, eine andere Sprache zu lernen, kann verschieden Gründe haben: private, schulische oder berufliche. Das Angebot an Sprachreisen wächst ständig, über die Qualität ist jedoch wenig oder nichts bekannt. Im Marktplatz geht es diesmal um Kriterien für das Lernen mit Erfolg. Welche Methoden sind zu empfehlen, welche Anbieter kosten? Ihre Fragen werden am Hörertelefon unter 0800-839601 von Fachleuten beantwortet.",
    traduction: {
      fr: "Environ 150 000 séjours linguistiques sont effectués chaque année par des Allemands. Le désir d'apprendre une autre langue peut avoir différentes raisons : personnelles, scolaires ou professionnelles. L'offre de séjours linguistiques ne cesse d'augmenter, mais on connaît peu de choses sur leur qualité. Cette émission de conseils s'intéresse cette fois aux critères permettant de réussir son apprentissage. Quelles méthodes sont recommandées ? Quels sont les prestataires les plus intéressants ? Des spécialistes répondent aux questions par téléphone au 0800-839601.",
      ar: "يقوم الألمان بحوالي 150 ألف رحلة لتعلم اللغات سنوياً. وقد تكون الرغبة في تعلم لغة أخرى لأسباب شخصية أو دراسية أو مهنية. ويتزايد عرض الرحلات اللغوية باستمرار، لكن المعلومات حول جودتها قليلة أو غير متوفرة. يتناول البرنامج هذه المرة المعايير التي تساعد على التعلم بنجاح. ما الطرق التي يُنصح بها؟ وما الشركات التي تقدم أفضل الخدمات؟ يجيب المختصون عن أسئلة المستمعين عبر الهاتف على الرقم 0800-839601.",
      en: "Around 150,000 language trips are taken by Germans every year. The desire to learn another language can have various reasons: personal, educational or professional. The range of language trips is constantly growing, but little is known about their quality. This programme focuses on criteria for successful learning. Which methods are recommended? Which providers are worth considering? Experts answer questions by telephone at 0800-839601."
    },
    explication: {
      fr: "Le texte présente une émission qui aide les personnes à choisir un séjour linguistique. Des spécialistes donnent des conseils sur les méthodes d'apprentissage et les prestataires. Le thème central est donc le choix d'un séjour linguistique.",
      ar: "يتحدث النص عن برنامج يساعد الأشخاص على اختيار رحلة لتعلم لغة أجنبية. يقدم المختصون نصائح حول طرق التعلم والشركات المنظمة لهذه الرحلات. إذن الفكرة الأساسية هي كيفية اختيار الإقامة اللغوية المناسبة.",
      en: "The text describes a programme that helps people choose a language trip. Experts provide advice about learning methods and providers. The main topic is therefore how to choose a language stay."
    }
  },
  {
    id: 2,
    contenu: "Die Metropole Wien lädt zum winterlichen Eisvergnügen vor dem Wiener Rathaus ein: vom 22. Januar bis 7. März kann man auf 1800 Quadratmetern übers Eis fahren. Die Musik dazu bestimmt den Fahrstil und reicht vom klassischen Walzer bis zur Diskomusik. Nachts werden auf der Eisbahn Partys veranstaltet, vom Samba-Fest bis zum Hip-Hop-Event. Speisen und Getränke gibt es an verschiedenen Ständen, Schlittschuhe und Stiefel kann man leihen. Informationen: Wiener Tourismusverband.",
    traduction: {
      fr: "La métropole de Vienne invite le public à profiter des plaisirs de la glace en hiver devant l'hôtel de ville. Du 22 janvier au 7 mars, il est possible de patiner sur une surface de 1 800 mètres carrés. La musique influence le style de patinage et va de la valse classique à la musique disco. La nuit, des fêtes sont organisées sur la patinoire, du festival de samba aux événements hip-hop. Des stands proposent de la nourriture et des boissons. Il est possible de louer des patins et des bottes. Informations : Office du tourisme de Vienne.",
      ar: "تدعو مدينة فيينا الزوار للاستمتاع بالتزلج على الجليد خلال فصل الشتاء أمام مبنى البلدية. من 22 يناير إلى 7 مارس، يمكن التزلج على مساحة تبلغ 1800 متر مربع. وتتنوع الموسيقى بين الفالس الكلاسيكي وموسيقى الديسكو. كما تُنظم حفلات ليلية على حلبة التزلج، من حفلات السامبا إلى فعاليات الهيب هوب. وتوجد أكشاك للأطعمة والمشروبات، كما يمكن استئجار أحذية التزلج. للمعلومات: مكتب السياحة في فيينا.",
      en: "The city of Vienna invites visitors to enjoy winter ice skating in front of the Vienna City Hall. From January 22 to March 7, people can skate on an area of 1,800 square metres. The music influences the skating style and ranges from classical waltzes to disco music. Parties are also held on the ice rink at night, from samba festivals to hip-hop events. Food and drinks are available at various stands, and skates and boots can be rented. Information: Vienna Tourist Board."
    },
    explication: {
      fr: "Le texte annonce une activité hivernale organisée à Vienne : une grande patinoire avec différentes musiques et des soirées festives. Le titre doit donc parler d'un événement sur la glace accompagné de musique.",
      ar: "يعلن النص عن نشاط شتوي في فيينا، وهو حلبة كبيرة للتزلج على الجليد مع موسيقى متنوعة وحفلات ليلية. لذلك يجب أن يشير العنوان إلى فعالية على الجليد مصحوبة بالموسيقى.",
      en: "The text announces a winter activity in Vienna: a large ice rink with different kinds of music and evening parties. The heading should therefore refer to a winter event on ice with music."
    }
  },
  {
    id: 3,
    contenu: "Für das Aktionsprogramm der Europäischen Union (EU) zur beruflichen Weiterbildung, Leonardo da Vinci, können noch bis zum 31. März Anträge gestellt werden. Ziel des Programms ist es, europäische Projekte zur beruflichen Weiterbildung zu unterstützen. Anträge auf finanzielle Unterstützung können die Institutionen stellen, die mit mindestens zwei weiteren europäischen Partnern an einem Projekt arbeiten wollen. Information: Nationale Koordinierungsstelle Leonardo da Vinci, Fehrbelliner Platz 3, D-10707 Berlin, Tel. 030/8643-0, Fax 2637.",
    traduction: {
      fr: "Les demandes de participation au programme d'action de l'Union européenne (UE) pour la formation professionnelle continue, Leonardo da Vinci, peuvent encore être déposées jusqu'au 31 mars. L'objectif de ce programme est de soutenir des projets européens de formation professionnelle. Les institutions qui souhaitent travailler sur un projet avec au moins deux autres partenaires européens peuvent demander une aide financière. Informations : Centre national de coordination Leonardo da Vinci, Fehrbelliner Platz 3, D-10707 Berlin, téléphone 030/8643-0, fax 2637.",
      ar: "يمكن تقديم طلبات المشاركة في برنامج الاتحاد الأوروبي للتكوين المهني المستمر، ليوناردو دافنشي، إلى غاية 31 مارس. يهدف هذا البرنامج إلى دعم المشاريع الأوروبية الخاصة بالتكوين المهني. ويمكن للمؤسسات التي ترغب في العمل على مشروع مع شريكين أوروبيين آخرين على الأقل أن تطلب دعماً مالياً. للمعلومات: المركز الوطني لتنسيق برنامج ليوناردو دافنشي في برلين.",
      en: "Applications for the European Union's Leonardo da Vinci action programme for vocational training can still be submitted until March 31. The aim of the programme is to support European vocational training projects. Institutions wishing to work on a project with at least two other European partners can apply for financial support. Information is available from the Leonardo da Vinci National Coordination Office in Berlin."
    },
    explication: {
      fr: "Le texte présente un programme de l'Union européenne qui accorde une aide financière à des projets de formation professionnelle menés avec plusieurs partenaires européens. Il s'agit donc d'un financement destiné à des projets communs européens.",
      ar: "يعرض النص برنامجاً تابعاً للاتحاد الأوروبي يقدم دعماً مالياً لمشاريع التكوين المهني التي تنفذها مؤسسات بالتعاون مع شركاء أوروبيين. إذن الموضوع هو تمويل المشاريع الأوروبية المشتركة.",
      en: "The text presents a European Union programme that provides financial support for vocational training projects involving several European partners. The topic is funding for joint European projects."
    }
  },
  {
    id: 4,
    contenu: "Wien (SN.APA). Wie das Unterrichtsministerium mitteilte, sollen im kommenden Jahr monatlich 70.000 Euro für Kulturprojekte an Schulen zur Verfügung gestellt werden. Unterstützt würden damit Veranstaltungen und Projekte, die das Verständnis der Kinder und Jugendlichen für die Künste wecken, das Interesse am Musisch-Kreativen verstärken und zu Kontakten und einer Auseinandersetzung mit Künstlern führen. Dadurch soll in altersgemäßer Form die ganzheitliche Entwicklung der Persönlichkeit von Kindern und Jugendlichen gefördert werden.",
    traduction: {
      fr: "Vienne. Selon une annonce du ministère de l'Éducation, une somme de 70 000 euros par mois devrait être mise à disposition l'année prochaine pour des projets culturels dans les écoles. Cette aide financera des manifestations et des projets qui éveillent l'intérêt des enfants et des jeunes pour les arts, renforcent leur créativité artistique et leur permettent de rencontrer des artistes et d'échanger avec eux. L'objectif est de favoriser le développement global de la personnalité des enfants et des adolescents, d'une manière adaptée à leur âge.",
      ar: "فيينا. وفقاً لما أعلنه وزير التعليم، سيتم تخصيص 70 ألف يورو شهرياً خلال السنة المقبلة لدعم المشاريع الثقافية في المدارس. وستُستخدم هذه الأموال لتمويل الأنشطة والمشاريع التي تنمي اهتمام الأطفال والشباب بالفنون، وتعزز الإبداع الفني، وتتيح لهم التواصل مع الفنانين والتفاعل معهم. والهدف هو المساهمة في تنمية شخصية الأطفال والمراهقين بشكل متكامل ومناسب لأعمارهم.",
      en: "Vienna. According to the Ministry of Education, 70,000 euros per month will be made available next year for cultural projects in schools. The funding will support events and projects that develop children's and young people's understanding of the arts, strengthen their creative interests and allow them to meet and interact with artists. The aim is to promote the overall development of children's and teenagers' personalities in an age-appropriate way."
    },
    explication: {
      fr: "Le ministère prévoit de mettre de l'argent à disposition des écoles pour financer des projets culturels et artistiques. Le titre correspondant parle donc d'un soutien financier aux projets artistiques réalisés avec les élèves.",
      ar: "تخطط وزارة التعليم لتخصيص أموال للمدارس من أجل تمويل المشاريع الثقافية والفنية. لذلك يشير العنوان المناسب إلى الدعم المالي للمشاريع الفنية التي يشارك فيها التلاميذ.",
      en: "The ministry plans to provide money to schools to finance cultural and artistic projects. The matching heading therefore refers to financial support for art projects involving students."
    }
  },
  {
    id: 5,
    contenu: "Zum sechsten Mal veranstaltet das Comitato Genitori Binningen/Bottmingen seine breit angelegte multikulturelle Kunstausstellung Arte. An der Veranstaltung nehmen 70 Künstlerinnen und Künstler aus der Region sowie Gäste aus Italien, Frankreich, Deutschland und weiteren Ländern teil. Bei dem vor 18 Jahren gegründeten Comitato handelt es sich um einen Elternverein, der damals italienischsprachigen Kindern bei ihren Schulproblemen hilfreich zur Seite stand. Da die jetzige dritte Kindergeneration nicht mehr diese Probleme hat, suchte das Comitato nach neuen Aufgaben und fand in der Organisation der alljährlichen Kunstausstellung ein neues, interessantes Betätigungsfeld.",
    traduction: {
      fr: "Pour la sixième fois, l'association Comitato Genitori Binningen/Bottmingen organise sa grande exposition d'art multiculturelle Arte. Soixante-dix artistes de la région ainsi que des invités venus d'Italie, de France, d'Allemagne et d'autres pays participent à l'événement. Fondée il y a 18 ans, cette association de parents aidait autrefois les enfants italophones à résoudre leurs difficultés scolaires. Comme la troisième génération d'enfants ne rencontre plus ces problèmes, l'association a cherché de nouvelles activités et a trouvé un nouveau domaine d'action intéressant dans l'organisation de cette exposition annuelle.",
      ar: "للمرة السادسة، تنظم جمعية الآباء Comitato Genitori Binningen/Bottmingen معرضها الفني متعدد الثقافات Arte. يشارك في هذا الحدث 70 فناناً وفنانة من المنطقة، إضافة إلى ضيوف من إيطاليا وفرنسا وألمانيا ودول أخرى. تأسست هذه الجمعية قبل 18 عاماً لمساعدة الأطفال الناطقين بالإيطالية في مشاكلهم المدرسية. وبما أن الجيل الثالث من الأطفال لم يعد يعاني من هذه المشاكل، بحثت الجمعية عن أنشطة جديدة ووجدت في تنظيم المعرض الفني السنوي مجالاً جديداً وممتعاً للعمل.",
      en: "For the sixth time, the Comitato Genitori Binningen/Bottmingen is organizing its large multicultural art exhibition, Arte. Seventy artists from the region, as well as guests from Italy, France, Germany and other countries, are taking part. Founded 18 years ago, the parents' association originally helped Italian-speaking children with school problems. Since the third generation of children no longer has these difficulties, the association looked for new activities and found an interesting new role in organizing the annual art exhibition."
    },
    explication: {
      fr: "Le texte explique qu'une association de parents organise une exposition artistique multiculturelle. À l'origine, cette association aidait les enfants italophones à l'école, mais elle organise désormais une exposition annuelle. Le titre insiste sur le rôle de l'association de parents dans l'organisation de l'exposition.",
      ar: "يوضح النص أن جمعية للآباء تنظم معرضاً فنياً متعدد الثقافات. كانت الجمعية في البداية تساعد الأطفال الناطقين بالإيطالية في المدرسة، لكنها أصبحت الآن تنظم معرضاً فنياً سنوياً. يركز العنوان على دور جمعية الآباء في تنظيم المعرض.",
      en: "The text explains that a parents' association organizes a multicultural art exhibition. The association originally helped Italian-speaking children at school, but now organizes an annual exhibition. The heading focuses on the parents' association organizing the art exhibition."
    }
  }
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Finanzielle Unterstützung für Kunstprojekte mit Schülern',
    traduction: {
      fr: 'Aide financière pour les projets artistiques avec les élèves',
      ar: 'دعم مالي للمشاريع الفنية مع التلاميذ',
      en: 'Financial support for art projects with students'
    },
    explication: {
      fr: 'Ce titre concerne une aide financière destinée aux projets artistiques organisés dans les écoles.',
      ar: 'يتعلق العنوان بمساعدة مالية مخصصة للمشاريع الفنية التي تنظم في المدارس.',
      en: 'This heading refers to financial assistance for artistic projects organized in schools.'
    }
  },
  {
    id: 'B',
    contenu: 'Winterveranstaltung auf dem Eis mit Musik',
    traduction: {
      fr: 'Événement hivernal sur la glace avec de la musique',
      ar: 'فعالية شتوية على الجليد مع الموسيقى',
      en: 'Winter event on the ice with music'
    },
    explication: {
      fr: 'Le titre décrit une activité hivernale de patinage accompagnée de musique et de fêtes.',
      ar: 'يصف العنوان نشاطاً شتوياً للتزلج على الجليد مصحوباً بالموسيقى والحفلات.',
      en: 'The heading describes a winter skating activity accompanied by music and parties.'
    }
  },
  {
    id: 'C',
    contenu: 'Aktionsprogramm der EU: Finanzielle Unterstützung für italienische Künstler',
    traduction: {
      fr: 'Programme d’action de l’UE : aide financière pour les artistes italiens',
      ar: 'برنامج عمل الاتحاد الأوروبي: دعم مالي للفنانين الإيطاليين',
      en: 'EU action programme: financial support for Italian artists'
    },
    explication: {
      fr: 'Ce titre évoque un financement européen destiné spécifiquement aux artistes italiens. Ce n’est pas le sujet du texte sur la formation professionnelle.',
      ar: 'يشير هذا العنوان إلى تمويل أوروبي مخصص للفنانين الإيطاليين تحديداً، وليس إلى موضوع التكوين المهني الوارد في النص.',
      en: 'This heading refers specifically to European funding for Italian artists, not to the vocational training programme in the text.'
    }
  },
  {
    id: 'D',
    contenu: 'Kunstausstellung von italienischen Schülern',
    traduction: {
      fr: 'Exposition artistique d’élèves italiens',
      ar: 'معرض فني لتلاميذ إيطاليين',
      en: 'Art exhibition by Italian students'
    },
    explication: {
      fr: 'Ce titre parle d’une exposition réalisée par des élèves italiens. Le texte 5 présente plutôt une exposition organisée par une association de parents.',
      ar: 'يتحدث هذا العنوان عن معرض فني ينظمه تلاميذ إيطاليون، بينما يتحدث النص الخامس عن معرض تنظمه جمعية للآباء.',
      en: 'This heading refers to an exhibition by Italian students, whereas text 5 describes an exhibition organized by a parents’ association.'
    }
  },
  {
    id: 'E',
    contenu: 'Deutschlernen mit neuer Methode im Radio',
    traduction: {
      fr: 'Apprendre l’allemand avec une nouvelle méthode à la radio',
      ar: 'تعلم الألمانية بطريقة جديدة عبر الراديو',
      en: 'Learning German with a new method on the radio'
    },
    explication: {
      fr: 'Ce titre concerne l’apprentissage de l’allemand à la radio. Le texte 1 parle de séjours linguistiques et de conseils pour les choisir.',
      ar: 'يتعلق العنوان بتعلم اللغة الألمانية عبر الراديو، بينما يتحدث النص الأول عن الرحلات اللغوية وكيفية اختيارها.',
      en: 'This heading concerns learning German on the radio, while text 1 is about language trips and how to choose them.'
    }
  },
  {
    id: 'F',
    contenu: 'Geld für gemeinsame europäische Projekte',
    traduction: {
      fr: 'De l’argent pour des projets européens communs',
      ar: 'أموال للمشاريع الأوروبية المشتركة',
      en: 'Funding for joint European projects'
    },
    explication: {
      fr: 'Le titre correspond au programme européen qui finance des projets de formation réalisés avec plusieurs partenaires européens.',
      ar: 'يتطابق العنوان مع البرنامج الأوروبي الذي يمول مشاريع التكوين التي تنفذ بالتعاون مع عدة شركاء أوروبيين.',
      en: 'This heading matches the European programme that funds training projects carried out with several European partners.'
    }
  },
  {
    id: 'G',
    contenu: 'Elternverein organisiert Kunstausstellung',
    traduction: {
      fr: 'Une association de parents organise une exposition artistique',
      ar: 'جمعية للآباء تنظم معرضاً فنياً',
      en: 'Parents’ association organizes an art exhibition'
    },
    explication: {
      fr: 'Le titre met en avant l’association de parents qui organise chaque année une exposition artistique multiculturelle.',
      ar: 'يركز العنوان على جمعية الآباء التي تنظم كل سنة معرضاً فنياً متعدد الثقافات.',
      en: 'The heading highlights the parents’ association that organizes a multicultural art exhibition every year.'
    }
  },
  {
    id: 'H',
    contenu: 'Mit der Eisenbahn ins winterliche Wien',
    traduction: {
      fr: 'À Vienne en hiver en prenant le train',
      ar: 'إلى فيينا الشتوية بالقطار',
      en: 'Travelling by train to wintertime Vienna'
    },
    explication: {
      fr: 'Ce titre parle d’un voyage en train vers Vienne. Le texte 2 décrit une activité de patinage à Vienne, et non le trajet pour s’y rendre.',
      ar: 'يتحدث هذا العنوان عن السفر بالقطار إلى فيينا، بينما يصف النص الثاني نشاط التزلج على الجليد في المدينة وليس وسيلة الوصول إليها.',
      en: 'This heading is about travelling by train to Vienna. Text 2 describes an ice-skating activity in the city, not the journey there.'
    }
  },
  {
    id: 'I',
    contenu: 'Mehr Geld für österreichische Musikschulen',
    traduction: {
      fr: 'Davantage d’argent pour les écoles de musique autrichiennes',
      ar: 'أموال أكثر لمدارس الموسيقى النمساوية',
      en: 'More money for Austrian music schools'
    },
    explication: {
      fr: 'Ce titre concerne le financement des écoles de musique. Le texte 4 parle plutôt de projets culturels et artistiques dans les écoles.',
      ar: 'يتعلق العنوان بتمويل مدارس الموسيقى، بينما يتحدث النص الرابع عن مشاريع ثقافية وفنية داخل المدارس.',
      en: 'This heading concerns funding for music schools, whereas text 4 discusses cultural and artistic projects in schools.'
    }
  },
  {
    id: 'J',
    contenu: 'Wie Sprachaufenthalte auswählen?',
    traduction: {
      fr: 'Comment choisir un séjour linguistique ?',
      ar: 'كيف نختار إقامة لتعلم لغة أجنبية؟',
      en: 'How should language stays be selected?'
    },
    explication: {
      fr: 'Le titre correspond au texte qui donne des conseils et des critères pour choisir un séjour linguistique de qualité.',
      ar: 'يتطابق العنوان مع النص الذي يقدم نصائح ومعايير لاختيار إقامة جيدة لتعلم لغة أجنبية.',
      en: 'This heading matches the text that provides advice and criteria for choosing a good language stay.'
    }
  }
]

const solutions: Record<number, string> = {
  1: 'J',
  2: 'B',
  3: 'F',
  4: 'A',
  5: 'G'
}

export default function Annika2Page() {
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
          <h1>Annika 2</h1>
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

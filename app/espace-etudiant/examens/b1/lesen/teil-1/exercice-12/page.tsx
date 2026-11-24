
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
      fr: "Environ 150 000 séjours linguistiques sont effectués chaque année par des Allemands. Le désir d'apprendre une autre langue peut avoir différentes raisons : personnelles, scolaires ou professionnelles. L'offre de séjours linguistiques ne cesse d'augmenter, mais on connaît peu de choses sur leur qualité. Cette émission s'intéresse aux critères permettant de réussir son apprentissage. Quelles méthodes sont recommandées ? Quels prestataires sont coûteux ? Des spécialistes répondent aux questions par téléphone au 0800-839601.",
      ar: "يقوم الألمان بحوالي 150 ألف رحلة لغوية سنوياً. وقد تكون الرغبة في تعلم لغة أخرى لأسباب مختلفة: شخصية أو دراسية أو مهنية. ويتزايد عرض الرحلات اللغوية باستمرار، لكن المعلومات حول جودتها قليلة أو غير متوفرة. ويتناول البرنامج هذه المرة معايير التعلم الناجح. ما الطرق التي يُنصح بها؟ وما تكلفة مقدمي هذه الخدمات؟ يجيب المختصون عن أسئلة المستمعين عبر الهاتف على الرقم 0800-839601.",
      en: "Around 150,000 language trips are undertaken by Germans every year. The desire to learn another language can have various reasons: personal, educational or professional. The range of language trips is constantly growing, but little is known about their quality. This programme focuses on the criteria for successful learning. Which methods are recommended? Which providers are expensive? Experts answer questions by telephone at 0800-839601."
    },
    explication: {
      fr: "Le texte présente une émission consacrée aux séjours linguistiques. Des spécialistes donnent des conseils pour choisir un séjour et une méthode d'apprentissage adaptés. Le titre correct concerne donc le choix des séjours linguistiques.",
      ar: "يتحدث النص عن برنامج إذاعي مخصص للرحلات اللغوية. يقدم المختصون نصائح حول كيفية اختيار الإقامة اللغوية والطريقة المناسبة للتعلم. لذلك يتعلق العنوان الصحيح بكيفية اختيار الرحلات اللغوية.",
      en: "The text presents a programme about language trips. Experts give advice on choosing a suitable language stay and learning method. The correct heading is therefore about how to choose language trips."
    }
  },
  {
    id: 2,
    contenu: "Die Metropole Wien lädt zum winterlichen Eisvergnügen vor dem Wiener Rathaus ein: vom 22. Januar bis 7.März kann man auf 1800 Quadratmetern übers Eis fahren. Die Musik dazu bestimmt den Fahrstil und reicht vom klassischen Walzer bis zur Diskomusik. Nachts werden auf der Eisbahn Partys veranstaltet, vom Samba - Fest bis zum Hip-Hop –Event. Speisen und Getränke gibt es an verschiedenen Ständen, Schlittschuhe und Stiefel kann man leihen. Informationen: Wiener Tourismusverband.",
    traduction: {
      fr: "La métropole de Vienne invite les visiteurs à profiter des plaisirs de la glace en hiver devant l'hôtel de ville. Du 22 janvier au 7 mars, il est possible de patiner sur une surface de 1 800 mètres carrés. La musique influence le style de patinage et va de la valse classique à la musique disco. La nuit, des fêtes sont organisées sur la patinoire, du festival de samba aux événements hip-hop. Des stands proposent de la nourriture et des boissons. Il est également possible de louer des patins et des chaussures.",
      ar: "تدعو مدينة فيينا الكبرى الزوار للاستمتاع بالتزلج على الجليد في فصل الشتاء أمام مبنى البلدية. ومن 22 يناير إلى 7 مارس، يمكن التزلج على مساحة تبلغ 1800 متر مربع. وتحدد الموسيقى أسلوب التزلج، حيث تتنوع بين الفالس الكلاسيكي وموسيقى الديسكو. وفي الليل تُنظم حفلات على حلبة التزلج، من مهرجان السامبا إلى فعاليات الهيب هوب. كما توجد أكشاك للطعام والشراب، ويمكن استئجار أحذية التزلج.",
      en: "The city of Vienna invites visitors to enjoy winter ice skating in front of the Vienna City Hall. From January 22 to March 7, people can skate on an area of 1,800 square metres. The music influences the skating style and ranges from classical waltzes to disco music. Parties are held on the ice rink at night, from samba festivals to hip-hop events. Food and drinks are available at various stands, and skates and boots can be rented."
    },
    explication: {
      fr: "Le texte décrit une activité hivernale organisée sur une patinoire à Vienne. Il mentionne la musique, les fêtes nocturnes, les stands de nourriture et la location de patins. Le titre B correspond exactement à cette manifestation.",
      ar: "يصف النص نشاطاً شتوياً على حلبة للتزلج على الجليد في فيينا. ويذكر الموسيقى والحفلات الليلية وأكشاك الطعام وإمكانية استئجار أحذية التزلج. لذلك فإن العنوان B هو الأنسب.",
      en: "The text describes a winter activity on an ice rink in Vienna. It mentions music, night parties, food stands and skate rentals. Heading B is the best match."
    }
  },
  {
    id: 3,
    contenu: "Für das Aktionsprogramm der Europäischen Union (EU) zur beruflichen Weiterbildung, Leonardo da Vinci, können noch bis zum 31. März Anträge gestellt werden. Ziel des Programms ist es, europäische Projekte zur beruflichen Weiterbildung zu unterstützen Anträge auf finanzielle unterstützen können die Institutionen stellen, die mit mindestens zwei weiteren europäischen Partnern an einem Projekt arbeiten wollen. Information: Nationale Koordinerungsstelle Leonardo da Vinci, Fehrbelliner Platz 3, D-10707 Berlin, Tel, 030/8643-0, Fax- 2637.",
    traduction: {
      fr: "Les demandes de participation au programme d'action de l'Union européenne Leonardo da Vinci, consacré à la formation professionnelle continue, peuvent encore être déposées jusqu'au 31 mars. L'objectif de ce programme est de soutenir des projets européens de formation professionnelle. Les institutions souhaitant travailler sur un projet avec au moins deux autres partenaires européens peuvent demander une aide financière.",
      ar: "يمكن تقديم الطلبات للمشاركة في برنامج الاتحاد الأوروبي Leonardo da Vinci الخاص بالتكوين المهني المستمر إلى غاية 31 مارس. ويهدف هذا البرنامج إلى دعم المشاريع الأوروبية المتعلقة بالتكوين المهني. ويمكن للمؤسسات التي ترغب في العمل على مشروع مع شريكين أوروبيين آخرين على الأقل تقديم طلب للحصول على دعم مالي.",
      en: "Applications for the European Union's Leonardo da Vinci action programme for professional training can be submitted until March 31. The aim of the programme is to support European projects in vocational training. Institutions that want to work on a project with at least two other European partners can apply for financial support."
    },
    explication: {
      fr: "Le programme européen Leonardo da Vinci apporte une aide financière aux institutions qui souhaitent réaliser des projets de formation professionnelle avec plusieurs partenaires européens. Le titre F parle précisément de financement de projets européens communs.",
      ar: "يقدم برنامج Leonardo da Vinci الأوروبي دعماً مالياً للمؤسسات التي ترغب في إنجاز مشاريع للتكوين المهني بالتعاون مع عدة شركاء أوروبيين. لذلك فإن العنوان F الذي يتحدث عن تمويل المشاريع الأوروبية المشتركة هو الصحيح.",
      en: "The European Leonardo da Vinci programme provides financial support to institutions wishing to carry out vocational training projects with several European partners. Heading F refers to funding for joint European projects."
    }
  },
  {
    id: 4,
    contenu: "Wien(SN.APA). Wie das Unterrichtsministerlum mitteilte, sollen im kommenden. Jahr monatlich 70,000 Euro für Kulturprojekte an Schulen zur Verfügung gestellt werden. Unterstützt würden damit Veranstaltungen und Projekte, die das Verständnis der Kinder und Jugendlichen für die Künste wecken, das Interesse am Musisch – Kreativen verstärken und zu Kontakten und einer Auseinandersetzung mit Künstlern führen. Dadurch soll in altersgemäßer Form die ganzheitliche Entwicklung der Persönlichkeit von Kindern und Jugendlichen gefördert werden.",
    traduction: {
      fr: "Vienne. Selon le ministère de l'Éducation, une somme de 70 000 euros par mois devrait être mise à disposition l'année prochaine pour des projets culturels dans les écoles. Ce soutien financera des événements et des projets destinés à éveiller chez les enfants et les adolescents la compréhension des arts, à renforcer leur intérêt pour les activités artistiques et créatives et à favoriser les contacts avec des artistes. L'objectif est de contribuer au développement global de la personnalité des jeunes, d'une manière adaptée à leur âge.",
      ar: "فيينا. وفقاً لما أعلنته وزارة التعليم، سيتم تخصيص 70 ألف يورو شهرياً خلال السنة المقبلة لدعم المشاريع الثقافية في المدارس. وسيُستخدم هذا الدعم لتمويل الأنشطة والمشاريع التي تهدف إلى تنمية فهم الأطفال والشباب للفنون، وتعزيز اهتمامهم بالإبداع والأنشطة الفنية، وتشجيع التواصل مع الفنانين والتفاعل معهم. والهدف هو المساهمة في تنمية شخصية الأطفال والشباب بشكل متكامل وبطريقة تناسب أعمارهم.",
      en: "Vienna. According to the Ministry of Education, 70,000 euros per month will be made available next year for cultural projects in schools. This support will fund events and projects that encourage children and young people to understand the arts, strengthen their interest in creative activities and bring them into contact with artists. The aim is to promote the overall development of children's and young people's personalities in an age-appropriate way."
    },
    explication: {
      fr: "Le texte annonce un financement mensuel de 70 000 euros destiné aux projets culturels dans les écoles. L'argent sert à soutenir les activités artistiques et créatives des élèves. Le titre A correspond donc au soutien financier des projets artistiques scolaires.",
      ar: "يعلن النص عن تخصيص 70 ألف يورو شهرياً لتمويل المشاريع الثقافية في المدارس. ويهدف هذا التمويل إلى دعم الأنشطة الفنية والإبداعية للتلاميذ. لذلك فإن العنوان A المتعلق بالدعم المالي للمشاريع الفنية المدرسية هو الصحيح.",
      en: "The text announces monthly funding of 70,000 euros for cultural projects in schools. The money supports artistic and creative activities for pupils. Heading A therefore matches the financial support for school art projects."
    }
  },
  {
    id: 5,
    contenu: "Zum sechsten Mal veranstaltet das Comitato Geniton Binnigen/ Bottmingen seine breit angelegte multikulturelle Kunstausstellung Arte. An der Veranstaltung nehmen 70 Künstlerinnen und Künstler aus der Region sowie Gäste aus Italien, Frankreich, Deutschland und weiteren Ländern teil. Bei dem vor 18 Jahren gegründeten Comitato handelt es sich um einen Elternverein, der damals italienischsprachigen Kindern bei ihren Schulprobiemen hilfreich zur Seite stand. Da die jetzige dritte Kindergeneration nicht mehr diese Probleme hat, suchte das Comitato nach neuen Aufgeben und fand in der Organisation der alljährlichen Kunstausstellung ein neues, interessantes Betätigungsfeld.",
    traduction: {
      fr: "Pour la sixième fois, le Comitato Geniton Binnigen/Bottmingen organise sa grande exposition artistique multiculturelle Arte. Soixante-dix artistes de la région ainsi que des invités venus d'Italie, de France, d'Allemagne et d'autres pays participent à l'événement. Fondée il y a 18 ans, cette association est une association de parents qui aidait autrefois les enfants italophones à résoudre leurs problèmes scolaires. Comme la troisième génération d'enfants ne rencontre plus ces difficultés, l'association a recherché de nouvelles missions et a trouvé une nouvelle activité intéressante dans l'organisation de cette exposition annuelle.",
      ar: "للمرة السادسة، تنظم جمعية Comitato Geniton Binnigen/Bottmingen معرضها الفني الكبير والمتعدد الثقافات Arte. ويشارك في هذا الحدث 70 فناناً وفنانة من المنطقة، إلى جانب ضيوف من إيطاليا وفرنسا وألمانيا ودول أخرى. تأسست هذه الجمعية قبل 18 سنة، وهي جمعية للآباء كانت تساعد في الماضي الأطفال الناطقين بالإيطالية على تجاوز مشاكلهم المدرسية. وبما أن الجيل الثالث من الأطفال لم يعد يعاني من هذه المشاكل، بحثت الجمعية عن مهام جديدة ووجدت في تنظيم المعرض الفني السنوي نشاطاً جديداً ومميزاً.",
      en: "For the sixth time, the Comitato Geniton Binnigen/Bottmingen is organizing its large multicultural art exhibition, Arte. Seventy artists from the region, together with guests from Italy, France, Germany and other countries, are taking part. Founded 18 years ago, the organization is a parents' association that originally helped Italian-speaking children with their school problems. Since the current third generation of children no longer has these problems, the association looked for new tasks and found an interesting new activity in organizing the annual art exhibition."
    },
    explication: {
      fr: "Le texte explique qu'une association de parents organise une exposition artistique multiculturelle. Cette association avait été créée pour aider les enfants italophones dans leur scolarité, mais elle a ensuite développé une nouvelle activité : l'organisation d'une exposition annuelle. Le titre G est donc le bon.",
      ar: "يوضح النص أن جمعية للآباء تنظم معرضاً فنياً متعدد الثقافات. وقد تأسست الجمعية في الأصل لمساعدة الأطفال الناطقين بالإيطالية في مشاكلهم المدرسية، لكنها اختارت لاحقاً نشاطاً جديداً يتمثل في تنظيم معرض فني سنوي. لذلك فإن العنوان G هو الصحيح.",
      en: "The text explains that a parents' association organizes a multicultural art exhibition. The association was originally founded to help Italian-speaking children with school problems, but later developed a new activity: organizing an annual art exhibition. Heading G is correct."
    }
  }
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Finanzielle Unterstützung für Kunstprojekte mit Schülern',
    traduction: {
      fr: 'Soutien financier pour les projets artistiques avec les élèves',
      ar: 'دعم مالي للمشاريع الفنية مع التلاميذ',
      en: 'Financial support for art projects with pupils'
    },
    explication: {
      fr: 'Ce titre concerne le financement de projets artistiques organisés dans les écoles pour les enfants et les adolescents. Il correspond au texte 4.',
      ar: 'يتعلق هذا العنوان بتمويل المشاريع الفنية التي تُنظم في المدارس للأطفال والشباب. وهو يناسب النص 4.',
      en: 'This heading concerns funding for artistic projects organized in schools for children and young people. It matches text 4.'
    }
  },
  {
    id: 'B',
    contenu: 'Winterveranstaltung auf dem Eis mit Musik',
    traduction: {
      fr: 'Manifestation hivernale sur la glace avec de la musique',
      ar: 'فعالية شتوية على الجليد مصحوبة بالموسيقى',
      en: 'Winter event on the ice with music'
    },
    explication: {
      fr: 'Le titre décrit une activité hivernale sur une patinoire, accompagnée de musique et de fêtes. Il correspond au texte 2.',
      ar: 'يصف العنوان نشاطاً شتوياً على حلبة للتزلج على الجليد، مع الموسيقى والحفلات. وهو يناسب النص 2.',
      en: 'The heading describes a winter activity on an ice rink, accompanied by music and parties. It matches text 2.'
    }
  },
  {
    id: 'C',
    contenu: 'Aktionsprogramm der EU: Finanzielle Unterstützung für italienische Künstler',
    traduction: {
      fr: 'Programme d’action de l’UE : soutien financier aux artistes italiens',
      ar: 'برنامج عمل الاتحاد الأوروبي: دعم مالي للفنانين الإيطاليين',
      en: 'EU action programme: financial support for Italian artists'
    },
    explication: {
      fr: 'Ce titre parle d’un soutien financier destiné spécifiquement aux artistes italiens. Le texte 3 concerne plutôt des projets européens de formation professionnelle, et non des artistes.',
      ar: 'يتحدث هذا العنوان عن دعم مالي مخصص للفنانين الإيطاليين. أما النص 3 فيتعلق بمشاريع أوروبية للتكوين المهني وليس بالفنانين.',
      en: 'This heading refers specifically to financial support for Italian artists. Text 3 is about European vocational training projects, not artists.'
    }
  },
  {
    id: 'D',
    contenu: 'Kunstausstellung von italienischen Schülern',
    traduction: {
      fr: 'Exposition artistique réalisée par des élèves italiens',
      ar: 'معرض فني من تنظيم تلاميذ إيطاليين',
      en: 'Art exhibition by Italian pupils'
    },
    explication: {
      fr: 'Ce titre annonce une exposition organisée par des élèves italiens. Dans le texte 5, il s’agit d’une association de parents qui organise une exposition avec des artistes de plusieurs pays, et non d’élèves italiens.',
      ar: 'يشير هذا العنوان إلى معرض فني ينظمه تلاميذ إيطاليون. لكن النص 5 يتحدث عن جمعية للآباء تنظم معرضاً بمشاركة فنانين من عدة دول، وليس عن تلاميذ إيطاليين.',
      en: 'This heading announces an exhibition organized by Italian pupils. Text 5 is about a parents’ association organizing an exhibition with artists from several countries, not Italian pupils.'
    }
  },
  {
    id: 'E',
    contenu: 'Deutschlernen mit euer Methode im Radio',
    traduction: {
      fr: 'Apprendre l’allemand avec une nouvelle méthode à la radio',
      ar: 'تعلم الألمانية بطريقة جديدة عبر الراديو',
      en: 'Learning German with a new method on the radio'
    },
    explication: {
      fr: 'Ce titre évoque l’apprentissage de l’allemand à la radio. Le texte 1 parle de séjours linguistiques et de conseils pour choisir une méthode, mais ne présente pas une méthode d’apprentissage de l’allemand à la radio.',
      ar: 'يتحدث هذا العنوان عن تعلم اللغة الألمانية عبر الراديو. أما النص 1 فيتناول الرحلات اللغوية والنصائح لاختيار طريقة التعلم، ولا يقدم طريقة لتعلم الألمانية عبر الراديو.',
      en: 'This heading refers to learning German on the radio. Text 1 discusses language trips and advice on choosing a learning method, but does not present a German-learning method on the radio.'
    }
  },
  {
    id: 'F',
    contenu: 'Geld für gemeinsame europäische Projekte',
    traduction: {
      fr: 'De l’argent pour des projets européens communs',
      ar: 'تمويل للمشاريع الأوروبية المشتركة',
      en: 'Money for joint European projects'
    },
    explication: {
      fr: 'Le titre correspond au programme européen Leonardo da Vinci, qui soutient financièrement des projets de formation professionnelle réalisés avec plusieurs partenaires européens. Il correspond au texte 3.',
      ar: 'يناسب هذا العنوان برنامج Leonardo da Vinci الأوروبي الذي يقدم دعماً مالياً لمشاريع التكوين المهني التي تنفذ بالتعاون مع عدة شركاء أوروبيين. وهو يناسب النص 3.',
      en: 'This heading matches the European Leonardo da Vinci programme, which financially supports vocational training projects involving several European partners. It matches text 3.'
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
      fr: 'Le texte 5 présente une association de parents qui organise chaque année une exposition artistique multiculturelle appelée Arte. Ce titre correspond donc parfaitement.',
      ar: 'يعرض النص 5 جمعية للآباء تنظم كل سنة معرضاً فنياً متعدد الثقافات يسمى Arte. لذلك فإن هذا العنوان مناسب تماماً.',
      en: 'Text 5 presents a parents’ association that organizes a multicultural art exhibition called Arte every year. This heading is therefore a perfect match.'
    }
  },
  {
    id: 'H',
    contenu: 'Mehr Geld für österreichische Musikschulen',
    traduction: {
      fr: 'Davantage d’argent pour les écoles de musique autrichiennes',
      ar: 'المزيد من الأموال لمدارس الموسيقى النمساوية',
      en: 'More money for Austrian music schools'
    },
    explication: {
      fr: 'Ce titre concerne une augmentation du financement des écoles de musique autrichiennes. Le texte 4 parle de projets culturels dans les écoles en général, et non d’une aide spécifique aux écoles de musique.',
      ar: 'يتعلق هذا العنوان بزيادة التمويل المخصص لمدارس الموسيقى النمساوية. أما النص 4 فيتحدث عن مشاريع ثقافية في المدارس بشكل عام، وليس عن دعم خاص لمدارس الموسيقى.',
      en: 'This heading concerns increased funding for Austrian music schools. Text 4 discusses cultural projects in schools in general, not specific support for music schools.'
    }
  },
  {
    id: 'I',
    contenu: 'Mit der Eisenbahn ins winterliche Wien',
    traduction: {
      fr: 'Se rendre à Vienne en hiver par le train',
      ar: 'السفر بالقطار إلى فيينا في فصل الشتاء',
      en: 'Travelling to wintery Vienna by train'
    },
    explication: {
      fr: 'Ce titre parle d’un voyage en train vers Vienne en hiver. Le texte 2 décrit une activité sur une patinoire à Vienne, mais ne parle pas du trajet en train.',
      ar: 'يتحدث هذا العنوان عن السفر بالقطار إلى فيينا في الشتاء. أما النص 2 فيصف نشاطاً على حلبة للتزلج في فيينا، ولا يتحدث عن السفر بالقطار.',
      en: 'This heading refers to travelling by train to Vienna in winter. Text 2 describes an ice-skating event in Vienna but does not mention travelling by train.'
    }
  },
  {
    id: 'J',
    contenu: 'Wie Sprachaufenthalte auswählen?',
    traduction: {
      fr: 'Comment choisir un séjour linguistique ?',
      ar: 'كيف نختار الإقامة اللغوية؟',
      en: 'How to choose a language stay?'
    },
    explication: {
      fr: 'Le texte 1 explique que des spécialistes répondent aux questions concernant les méthodes d’apprentissage et les prestataires de séjours linguistiques. Le titre J correspond exactement.',
      ar: 'يوضح النص 1 أن المختصين يجيبون عن الأسئلة المتعلقة بطرق التعلم ومقدمي خدمات الإقامات اللغوية. لذلك فإن العنوان J هو المطابق.',
      en: 'Text 1 explains that experts answer questions about learning methods and language-trip providers. Heading J is an exact match.'
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

export default function SonjaPage() {
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
          <h1>Sonja</h1>
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

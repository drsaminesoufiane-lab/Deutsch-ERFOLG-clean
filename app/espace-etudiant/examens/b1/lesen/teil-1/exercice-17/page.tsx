
'use client'

import { useState, useEffect } from 'react'
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
  Clock
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
    contenu: "Rund 150,000 Sprachreisen werden von Deutschen jährlich unternommen. Der Wunsch, eine andere Sprache zu lernen, kann verschiedene Gründe haben: private, schulische oder berufliche. Das Angebot an Sprachreisen wächst ständig, über die Qualität ist jedoch wenig oder nichts bekannt. Im Marktplatz geht es diesmal um Kriterien für das Lernen mit Erfolg. Welche Methoden sind zu empfehlen, welche Anbieter kosten? Ihre Fragen werden am Hörertelefon unter 0800-839601 von Fachleuten beantwortet.",
    traduction: {
      fr: "Environ 150 000 séjours linguistiques sont effectués chaque année par des Allemands. Le désir d'apprendre une autre langue peut avoir différentes raisons : personnelles, scolaires ou professionnelles. L'offre de séjours linguistiques augmente constamment, mais on connaît peu de choses sur leur qualité. Cette émission s'intéresse cette fois aux critères permettant de réussir son apprentissage. Quelles méthodes sont recommandées ? Combien coûtent les prestataires ? Des spécialistes répondent à vos questions par téléphone au 0800-839601.",
      ar: "يقوم الألمان بحوالي 150 ألف رحلة لتعلم اللغات سنوياً. وقد تكون الرغبة في تعلم لغة أخرى لأسباب شخصية أو دراسية أو مهنية. يتزايد عرض الرحلات اللغوية باستمرار، لكن المعلومات حول جودتها قليلة. يتناول البرنامج هذه المرة المعايير التي تساعد على التعلم بنجاح. ما هي الطرق الموصى بها؟ وكم تبلغ تكلفة مقدمي هذه الخدمات؟ يجيب الخبراء عن أسئلتكم عبر الهاتف.",
      en: "Around 150,000 language trips are taken by Germans every year. The desire to learn another language can have private, educational or professional reasons. The range of language trips is constantly growing, but little is known about their quality. This programme discusses criteria for successful learning, recommended methods and provider costs. Experts answer questions by telephone."
    },
    explication: {
      fr: "Le texte présente une émission consacrée aux séjours linguistiques. Il explique qu'il existe de nombreuses offres et que les participants peuvent obtenir des conseils de spécialistes pour choisir une méthode et un prestataire de qualité.",
      ar: "يتحدث النص عن برنامج إذاعي مخصص للرحلات اللغوية. ويشرح أن هناك عروضاً كثيرة، وأن المشاركين يستطيعون الحصول على نصائح من الخبراء لاختيار الطريقة ومقدم الخدمة المناسبين.",
      en: "The text presents a programme about language trips. It explains that many offers exist and that experts provide advice to help people choose suitable methods and providers."
    }
  },
  {
    id: 2,
    contenu: "Die Metropole Wien lädt zum winterlichen Eisvergnügen vor dem Wiener Rathaus ein: vom 22. Januar bis 7. März kann man auf 1800 Quadratmetern übers Eis fahren. Die Musik dazu bestimmt den Fahrstil und reicht vom klassischen Walzer bis zur Diskomusik. Nachts werden auf der Eisbahn Partys veranstaltet, vom Samba-Fest bis zum Hip-Hop-Event. Speisen und Getränke gibt es an verschiedenen Ständen, Schlittschuhe und Stiefel kann man leihen. Informationen: Wiener Tourismusverband.",
    traduction: {
      fr: "La métropole de Vienne invite les visiteurs à profiter des plaisirs de la glace en hiver devant l'hôtel de ville. Du 22 janvier au 7 mars, on peut patiner sur une surface de 1 800 mètres carrés. La musique influence le style de patinage et va de la valse classique à la musique disco. La nuit, des fêtes sont organisées sur la patinoire, du festival de samba aux événements hip-hop. Des stands proposent de la nourriture et des boissons. Il est possible de louer des patins et des chaussures.",
      ar: "تدعو مدينة فيينا الزوار للاستمتاع بالتزلج على الجليد خلال فصل الشتاء أمام مبنى البلدية. من 22 يناير إلى 7 مارس، يمكن التزلج على مساحة تبلغ 1800 متر مربع. وتتراوح الموسيقى بين الفالس الكلاسيكي وموسيقى الديسكو. وفي الليل تُنظم حفلات على حلبة التزلج، من السامبا إلى الهيب هوب. كما توجد أكشاك للطعام والشراب ويمكن استئجار أحذية التزلج.",
      en: "Vienna invites visitors to enjoy winter ice skating in front of the city hall. From January 22 to March 7, people can skate on an area of 1,800 square metres. Music ranges from classical waltzes to disco. Parties are organized at night, including samba and hip-hop events. Food and drinks are available, and skates can be rented."
    },
    explication: {
      fr: "Il s'agit d'un événement hivernal organisé sur une grande patinoire à Vienne. Le texte insiste sur la musique, les soirées et les différentes activités proposées aux visiteurs.",
      ar: "يتعلق الأمر بحدث شتوي يُنظم على حلبة كبيرة للتزلج في فيينا. ويركز النص على الموسيقى والحفلات والأنشطة المختلفة المقدمة للزوار.",
      en: "This is a winter event organized on a large ice rink in Vienna. The text emphasizes music, parties and the various activities offered to visitors."
    }
  },
  {
    id: 3,
    contenu: "Für das Aktionsprogramm der Europäischen Union (EU) zur beruflichen Weiterbildung, Leonardo da Vinci, können noch bis zum 31. März Anträge gestellt werden. Ziel des Programms ist es, europäische Projekte zur beruflichen Weiterbildung zu unterstützen. Anträge auf finanzielle Unterstützung können die Institutionen stellen, die mit mindestens zwei weiteren europäischen Partnern an einem Projekt arbeiten wollen. Information: Nationale Koordinierungsstelle Leonardo da Vinci, Fehrbelliner Platz 3, D-10707 Berlin, Tel. 030/8643-0.",
    traduction: {
      fr: "Les demandes peuvent encore être déposées jusqu'au 31 mars dans le cadre du programme d'action de l'Union européenne Leonardo da Vinci, consacré à la formation professionnelle continue. L'objectif du programme est de soutenir des projets européens de formation professionnelle. Les institutions souhaitant travailler sur un projet avec au moins deux autres partenaires européens peuvent demander une aide financière.",
      ar: "يمكن تقديم الطلبات حتى 31 مارس ضمن برنامج الاتحاد الأوروبي Leonardo da Vinci الخاص بالتكوين المهني المستمر. يهدف البرنامج إلى دعم المشاريع الأوروبية في مجال التكوين المهني. ويمكن للمؤسسات التي ترغب في العمل على مشروع مع شريكين أوروبيين آخرين على الأقل تقديم طلب للحصول على دعم مالي.",
      en: "Applications can be submitted until March 31 for the European Union's Leonardo da Vinci programme for vocational training. The programme aims to support European vocational training projects. Institutions wishing to work with at least two other European partners can apply for financial support."
    },
    explication: {
      fr: "Le texte annonce un programme européen qui accorde une aide financière aux institutions travaillant ensemble sur des projets de formation professionnelle. L'idée essentielle est le financement de projets communs entre partenaires européens.",
      ar: "يعلن النص عن برنامج أوروبي يقدم مساعدات مالية للمؤسسات التي تعمل معاً في مشاريع التكوين المهني. الفكرة الأساسية هي تمويل المشاريع المشتركة بين الشركاء الأوروبيين.",
      en: "The text announces a European programme offering financial support to institutions working together on vocational training projects. The main idea is funding for joint European projects."
    }
  },
  {
    id: 4,
    contenu: "Wien (SN.APA). Wie das Unterrichtsministerium mitteilte, sollen im kommenden Jahr monatlich 70.000 Euro für Kulturprojekte an Schulen zur Verfügung gestellt werden. Unterstützt würden damit Veranstaltungen und Projekte, die das Verständnis der Kinder und Jugendlichen für die Künste wecken, das Interesse am Musisch-Kreativen verstärken und zu Kontakten und einer Auseinandersetzung mit Künstlern führen. Dadurch soll in altersgemäßer Form die ganzheitliche Entwicklung der Persönlichkeit von Kindern und Jugendlichen gefördert werden.",
    traduction: {
      fr: "Vienne. Comme l'a annoncé le ministère de l'Éducation, 70 000 euros par mois devraient être mis à disposition l'année prochaine pour des projets culturels dans les écoles. Cette aide financera des événements et des projets qui éveillent l'intérêt des enfants et des jeunes pour les arts, renforcent leur créativité musicale et artistique et leur permettent de rencontrer des artistes. L'objectif est de favoriser le développement global de leur personnalité.",
      ar: "فيينا. أعلن وزير التعليم أنه سيتم تخصيص 70 ألف يورو شهرياً خلال السنة المقبلة للمشاريع الثقافية في المدارس. وستُستخدم هذه الأموال لدعم الأنشطة والمشاريع التي تنمي فهم الأطفال والشباب للفنون، وتعزز اهتمامهم بالإبداع الفني والموسيقي، وتتيح لهم التواصل مع الفنانين. والهدف هو دعم النمو الشامل لشخصية الأطفال والشباب.",
      en: "Vienna. The Ministry of Education announced that 70,000 euros per month will be made available next year for cultural projects in schools. The funding will support events and projects that introduce children and young people to the arts, strengthen their creative interests and bring them into contact with artists. The aim is to promote their overall personal development."
    },
    explication: {
      fr: "Le ministère de l'Éducation prévoit un financement mensuel pour les projets culturels dans les écoles. Le sujet principal est le soutien financier accordé aux activités artistiques et culturelles destinées aux élèves.",
      ar: "تخطط وزارة التعليم لتخصيص تمويل شهري للمشاريع الثقافية داخل المدارس. والموضوع الرئيسي هو الدعم المالي المقدم للأنشطة الفنية والثقافية الموجهة للتلاميذ.",
      en: "The Ministry of Education plans monthly funding for cultural projects in schools. The main subject is financial support for artistic and cultural activities for students."
    }
  },
  {
    id: 5,
    contenu: "Zum sechsten Mal veranstaltet das Comitato Genitori Binningen/Bottmingen seine breit angelegte multikulturelle Kunstausstellung Arte. An der Veranstaltung nehmen 70 Künstlerinnen und Künstler aus der Region sowie Gäste aus Italien, Frankreich, Deutschland und weiteren Ländern teil. Bei dem vor 18 Jahren gegründeten Comitato handelt es sich um einen Elternverein, der damals italienischsprachigen Kindern bei ihren Schulproblemen hilfreich zur Seite stand. Da die jetzige dritte Kindergeneration nicht mehr diese Probleme hat, suchte das Comitato nach neuen Aufgaben und fand in der Organisation der alljährlichen Kunstausstellung ein neues, interessantes Betätigungsfeld.",
    traduction: {
      fr: "Pour la sixième fois, le Comitato Genitori Binningen/Bottmingen organise sa grande exposition artistique multiculturelle Arte. Soixante-dix artistes de la région ainsi que des invités d'Italie, de France, d'Allemagne et d'autres pays participent à l'événement. Le Comitato est une association de parents fondée il y a 18 ans pour aider les enfants italophones à résoudre leurs difficultés scolaires. Comme la troisième génération d'enfants ne rencontre plus ces problèmes, l'association a recherché de nouvelles missions et a trouvé une activité intéressante dans l'organisation annuelle de cette exposition artistique.",
      ar: "للمرة السادسة، تنظم جمعية أولياء الأمور Comitato Genitori Binningen/Bottmingen معرضها الفني متعدد الثقافات Arte. يشارك في هذا الحدث 70 فناناً وفنانة من المنطقة، إضافة إلى ضيوف من إيطاليا وفرنسا وألمانيا ودول أخرى. تأسست الجمعية قبل 18 عاماً لمساعدة الأطفال الناطقين بالإيطالية في مشاكلهم المدرسية. وبما أن الجيل الثالث من الأطفال لم يعد يواجه هذه المشاكل، بحثت الجمعية عن مهام جديدة ووجدت نشاطاً مناسباً في تنظيم المعرض الفني السنوي.",
      en: "For the sixth time, the Comitato Genitori Binningen/Bottmingen is organizing its large multicultural art exhibition, Arte. Seventy regional artists and guests from Italy, France, Germany and other countries are participating. The parents' association was founded 18 years ago to help Italian-speaking children with school problems. Since the current generation no longer has these problems, the association has found a new activity in organizing the annual art exhibition."
    },
    explication: {
      fr: "Le texte présente une association de parents qui organise une exposition artistique multiculturelle. Même si l'association a été créée à l'origine pour aider les enfants à l'école, elle organise aujourd'hui un événement artistique annuel.",
      ar: "يتحدث النص عن جمعية أولياء الأمور التي تنظم معرضاً فنياً متعدد الثقافات. ورغم أن الجمعية تأسست في الأصل لمساعدة الأطفال في المدرسة، فإنها تنظم اليوم حدثاً فنياً سنوياً.",
      en: "The text describes a parents' association organizing a multicultural art exhibition. Although it was originally founded to help children at school, it now organizes an annual artistic event."
    }
  }
]

const titel: Titre[] = [
  {
    id: 'a',
    contenu: 'Finanzielle Unterstützung für Kunstprojekte mit Schülern',
    traduction: {
      fr: "Soutien financier pour les projets artistiques avec les élèves",
      ar: "دعم مالي للمشاريع الفنية مع التلاميذ",
      en: "Financial support for art projects with students"
    },
    explication: {
      fr: "Ce titre concerne le financement de projets artistiques dans les établissements scolaires.",
      ar: "يتعلق هذا العنوان بتمويل المشاريع الفنية داخل المؤسسات المدرسية.",
      en: "This heading concerns the funding of artistic projects in schools."
    }
  },
  {
    id: 'b',
    contenu: 'Winterveranstaltung auf dem Eis mit Musik',
    traduction: {
      fr: "Événement hivernal sur la glace avec de la musique",
      ar: "حدث شتوي على الجليد مع الموسيقى",
      en: "Winter event on the ice with music"
    },
    explication: {
      fr: "Le titre évoque une activité hivernale de patinage accompagnée de musique et de fêtes.",
      ar: "يشير العنوان إلى نشاط شتوي للتزلج على الجليد مصحوب بالموسيقى والحفلات.",
      en: "The heading refers to a winter skating activity accompanied by music and parties."
    }
  },
  {
    id: 'c',
    contenu: 'Aktionsprogramm der EU: Finanzielle Unterstützung für italienische Künstler',
    traduction: {
      fr: "Programme d'action de l'UE : soutien financier aux artistes italiens",
      ar: "برنامج عمل الاتحاد الأوروبي: دعم مالي للفنانين الإيطاليين",
      en: "EU action programme: financial support for Italian artists"
    },
    explication: {
      fr: "Ce titre parle d'un programme européen destiné à soutenir financièrement des artistes italiens.",
      ar: "يتحدث العنوان عن برنامج أوروبي يهدف إلى تقديم دعم مالي للفنانين الإيطاليين.",
      en: "This heading refers to a European programme offering financial support to Italian artists."
    }
  },
  {
    id: 'd',
    contenu: 'Kunstausstellung von italienischen Schülern',
    traduction: {
      fr: "Exposition artistique d'élèves italiens",
      ar: "معرض فني لتلاميذ إيطاليين",
      en: "Art exhibition by Italian students"
    },
    explication: {
      fr: "Le titre concerne une exposition artistique organisée par des élèves italiens.",
      ar: "يتعلق العنوان بمعرض فني ينظمه تلاميذ إيطاليون.",
      en: "The heading concerns an art exhibition organized by Italian students."
    }
  },
  {
    id: 'e',
    contenu: 'Deutschlernen mit eurer Methode im Radio',
    traduction: {
      fr: "Apprendre l'allemand avec votre méthode à la radio",
      ar: "تعلم الألمانية بطريقتكم عبر الراديو",
      en: "Learning German with your method on the radio"
    },
    explication: {
      fr: "Ce titre évoque une méthode d'apprentissage de l'allemand proposée dans une émission de radio.",
      ar: "يشير العنوان إلى طريقة لتعلم اللغة الألمانية يتم تقديمها في برنامج إذاعي.",
      en: "This heading refers to a German-learning method presented on a radio programme."
    }
  },
  {
    id: 'f',
    contenu: 'Geld für gemeinsame europäische Projekte',
    traduction: {
      fr: "De l'argent pour des projets européens communs",
      ar: "تمويل للمشاريع الأوروبية المشتركة",
      en: "Money for joint European projects"
    },
    explication: {
      fr: "Le titre parle d'une aide financière destinée à des projets réalisés en collaboration entre plusieurs partenaires européens.",
      ar: "يتحدث العنوان عن مساعدات مالية مخصصة لمشاريع تنفذ بالتعاون بين عدة شركاء أوروبيين.",
      en: "The heading concerns financial assistance for projects carried out jointly by European partners."
    }
  },
  {
    id: 'g',
    contenu: 'Elternverein organisiert Kunstausstellung',
    traduction: {
      fr: "Une association de parents organise une exposition artistique",
      ar: "جمعية أولياء الأمور تنظم معرضاً فنياً",
      en: "Parents' association organizes an art exhibition"
    },
    explication: {
      fr: "Ce titre correspond à une association de parents qui organise une exposition artistique annuelle.",
      ar: "يتعلق العنوان بجمعية أولياء الأمور التي تنظم معرضاً فنياً سنوياً.",
      en: "This heading refers to a parents' association organizing an annual art exhibition."
    }
  },
  {
    id: 'h',
    contenu: 'Mit der Eisenbahn ins winterliche Wien',
    traduction: {
      fr: "En train vers Vienne en hiver",
      ar: "بالقطار إلى فيينا الشتوية",
      en: "By train to wintery Vienna"
    },
    explication: {
      fr: "Le titre annonce un voyage en train vers Vienne pendant l'hiver.",
      ar: "يعلن العنوان عن رحلة بالقطار إلى فيينا خلال فصل الشتاء.",
      en: "The heading announces a train journey to Vienna during winter."
    }
  },
  {
    id: 'i',
    contenu: 'Mehr Geld für österreichische Musikschulen',
    traduction: {
      fr: "Davantage d'argent pour les écoles de musique autrichiennes",
      ar: "المزيد من الأموال لمدارس الموسيقى النمساوية",
      en: "More money for Austrian music schools"
    },
    explication: {
      fr: "Ce titre concerne une augmentation du financement des écoles de musique en Autriche.",
      ar: "يتعلق العنوان بزيادة تمويل مدارس الموسيقى في النمسا.",
      en: "This heading concerns increased funding for music schools in Austria."
    }
  },
  {
    id: 'j',
    contenu: 'Wie Sprachaufenthalte auswählen?',
    traduction: {
      fr: "Comment choisir un séjour linguistique ?",
      ar: "كيف نختار رحلة لتعلم اللغة؟",
      en: "How to choose a language stay?"
    },
    explication: {
      fr: "Le titre correspond au texte qui donne des conseils pour choisir un séjour linguistique et évaluer les différentes offres.",
      ar: "يتناسب هذا العنوان مع النص الذي يقدم نصائح لاختيار رحلة لغوية وتقييم العروض المختلفة.",
      en: "This heading matches the text giving advice on choosing a language stay and evaluating different offers."
    }
  }
]

const solutions: Record<number, string> = {
  1: 'j',
  2: 'b',
  3: 'f',
  4: 'a',
  5: 'g'
}

export default function CorinaPage() {
  const [reponses, setReponses] = useState<Record<number, string>>({})
  const [selection, setSelection] = useState<string | null>(null)
  const [corrige, setCorrige] = useState(false)
  const [einzelPruefung, setEinzelPruefung] = useState<Record<number, boolean>>({})
  const [langue, setLangue] = useState<Langue>('fr')
  const [traductionsTextes, setTraductionsTextes] = useState<number[]>([])
  const [explicationsTextes, setExplicationsTextes] = useState<number[]>([])
  const [detailsTitres, setDetailsTitres] = useState<string[]>([])

  
  

  const choisir = (texteId: number, titreId: string) => {
    if (corrige || einzelPruefung[texteId]) return

    const titreDejaUtilise = Object.entries(reponses).some(
      ([id, valeur]) => Number(id) !== texteId && valeur === titreId
    )

    if (titreDejaUtilise) return

    setReponses(prev => ({ ...prev, [texteId]: titreId }))
    setEinzelPruefung(prev => ({ ...prev, [texteId]: false }))
    setSelection(null)
  }

  const retirer = (texteId: number) => {
    if (corrige || einzelPruefung[texteId]) return

    setReponses(prev => {
      const nouvelle = { ...prev }
      delete nouvelle[texteId]
      return nouvelle
    })
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
    setTraductionsTextes([])
    setExplicationsTextes([])
    setDetailsTitres([])
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

  const titreUtilise = (titreId: string) =>
    Object.values(reponses).includes(titreId)

  const score = Object.entries(reponses).filter(
    ([id, reponse]) => solutions[Number(id)] === reponse
  ).length

  const progression = Object.keys(reponses).length

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
 <Link
          href="/espace-etudiant/examens/b1/lesen"
          className="back-link"
        >
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
          <h1>Corina</h1>
          <p>Lesen Sie die Texte und ordnen Sie die passenden Überschriften zu.</p>

          <div className="paul-progress">
            <div className="paul-progress-label">
              <span>ÜBERSCHRIFTEN</span>
              <strong>{progression} / 5</strong>
            </div>

            <div className="paul-progress-track">
              <div
                className="paul-progress-fill"
                style={{ width: `${progression * 20}%` }}
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
                      ? istRichtig ? 'paul-correct' : 'paul-incorrect'
                      : ''
                  } ${selection && !corrige ? 'paul-target' : ''}`}
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
                        {reponse.toUpperCase()} · {titel.find(t => t.id === reponse)?.contenu}
                        {!corrige && !einzelPruefung[texte.id] &&
                          <span className="paul-remove"> ×</span>}
                      </button>
                    ) : (
                      <span className="paul-empty-slot">
                        {selection
                          ? 'Klicken Sie hier, um die Überschrift zuzuordnen'
                          : 'Ordnen Sie hier eine Überschrift zu'}
                      </span>
                    )}

                    {dejaVerifie && reponse && (
                      <span className={`paul-result-icon ${istRichtig ? 'right' : 'wrong'}`}>
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
                        <div className={`paul-feedback ${
                          istRichtig ? 'paul-feedback-right' : 'paul-feedback-wrong'
                        }`}>
                          {istRichtig ? (
                            <>
                              <CheckCircle2 size={18} />
                              Richtig! Sehr gut!
                            </>
                          ) : (
                            <>
                              <span>✕</span>
                              Leider falsch! Richtige Antwort: {solutions[texte.id].toUpperCase()}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="paul-help-actions" onClick={e => e.stopPropagation()}>
                    <button
                      className={`paul-help-button ${traductionOuverte ? 'paul-active' : ''}`}
                      onClick={() => basculer(texte.id, traductionsTextes, setTraductionsTextes)}
                    >
                      <Languages size={15} />
                      Traduction
                      {traductionOuverte ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    <button
                      className={`paul-help-button ${explicationOuverte ? 'paul-active' : ''}`}
                      onClick={() => basculer(texte.id, explicationsTextes, setExplicationsTextes)}
                    >
                      <Lightbulb size={15} />
                      Explication
                      {explicationOuverte ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                  </div>

                  {traductionOuverte && (
                    <div
                      className={`paul-translation ${langue === 'ar' ? 'paul-arabic' : ''}`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <strong>{langues[langue]}</strong>
                      <p>{texte.traduction[langue]}</p>
                    </div>
                  )}

                  {explicationOuverte && (
                    <div
                      className={`paul-explanation ${langue === 'ar' ? 'paul-arabic' : ''}`}
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
                      Richtige Antwort: {solutions[texte.id].toUpperCase()}
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
              Appuyez sur « Traduire / expliquer » pour comprendre chaque titre.
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
                      }}
                      onClick={() => {
                        if (benutzt || corrige) return
                        setSelection(selection === t.id ? null : t.id)
                      }}
                      disabled={benutzt || corrige}
                    >
                      <strong>{t.id.toUpperCase()}</strong>
                      <span>{t.contenu}</span>
                      {benutzt && <CheckCircle2 size={17} />}
                    </button>

                    <button
                      className="paul-title-help"
                      onClick={() => setDetailsTitres(prev =>
                        prev.includes(t.id)
                          ? prev.filter(id => id !== t.id)
                          : [...prev, t.id]
                      )}
                    >
                      <Languages size={14} />
                      {detailOuvert ? 'Masquer' : 'Traduire / expliquer'}
                      {detailOuvert ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {detailOuvert && (
                      <div
                        className={`paul-title-detail ${langue === 'ar' ? 'paul-arabic' : ''}`}
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
              disabled={progression !== 5}
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

              <button className="paul-restart-button" onClick={recommencer}>
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
          min-height: 68px;
          background: #192b43;
          padding: 0 7%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .paul-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
        }

        .paul-brand svg {
          color: #b49760;
        }

        .paul-brand span {
          display: inline-flex;
          gap: 5px;
        }

        .paul-brand strong {
          color: #b49760;
        }

        .back-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
        }

        .back-link svg {
          color: #b49760;
        }
          
        .paul-header-right {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .paul-timer {
          display: flex;
          align-items: center;
          gap: 8px;
          color: white;
          background: #ffffff18;
          padding: 9px 13px;
          border-radius: 8px;
          font-size: 14px;
          font-variant-numeric: tabular-nums;
        }

        .paul-timer svg {
          color: #b49760;
        }

        .paul-timer-warning {
          color: #FFAAAA;
          background: #7C2929;
        }

        .paul-back {
          color: white;
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
          min-height: 54px;
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
          min-height: 54px;
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
        }

        .paul-result-icon.right {
          color: #25945C;
        }

        .paul-result-icon.wrong {
          color: #D34B4B;
          font-weight: 700;
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
          background: white;
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
            padding: 12px 14px;
            flex-wrap: wrap;
          }

          .paul-header-right {
            gap: 12px;
          }

          .paul-back {
            font-size: 11px;
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

          .paul-empty-slot,
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

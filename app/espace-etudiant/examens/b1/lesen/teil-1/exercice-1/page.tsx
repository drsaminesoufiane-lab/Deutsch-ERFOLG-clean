
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
    contenu: "Sie haben Mitarbeiter, die gern mit dem Fahrrad zur Arbeit kommen? Warum dann nicht mehr E-Bikes leasen statt nur teure Firmenwagen? Gerade in Städten kommt man mit einem E-Bike schneller und bequemer ans Ziel als mit dem Auto. Und Parkplatzprobleme gibt es auch nicht. Sie fördern zudem die Gesundheit Ihrer Mitarbeiter und schonen die Umwelt, und dabei können Sie noch Steuern sparen. Bei der BikeLeasing GmbH bekommen Sie Angebote, die zu Ihnen passen. Melden Sie sich bei uns an, und wir kümmern uns um den Rest.",
    traduction: {
      fr: "Vous avez des employés qui aiment venir travailler à vélo ? Pourquoi ne pas louer davantage de vélos électriques au lieu de proposer uniquement des voitures de fonction coûteuses ? En ville, on arrive souvent plus rapidement et plus confortablement à destination avec un vélo électrique qu'en voiture. De plus, il n'y a pas de problème de stationnement. Vous favorisez aussi la santé de vos employés et protégez l'environnement, tout en réalisant des économies d'impôts. Chez BikeLeasing GmbH, vous trouverez des offres adaptées à vos besoins. Inscrivez-vous et nous nous occupons du reste.",
      ar: "هل لديك موظفون يحبون الذهاب إلى العمل بالدراجة؟ لماذا لا تستأجر المزيد من الدراجات الكهربائية بدلاً من توفير سيارات الشركة المكلفة فقط؟ في المدن، يمكن الوصول إلى الوجهة بسرعة وراحة أكبر باستعمال الدراجة الكهربائية مقارنة بالسيارة. كما لا توجد مشكلة مواقف السيارات. بالإضافة إلى ذلك، فإنك تحافظ على صحة موظفيك وتحمي البيئة، ويمكنك أيضاً توفير الضرائب. لدى شركة BikeLeasing GmbH ستجد عروضاً تناسب احتياجاتك. سجّل لدينا وسنتكفل بالباقي.",
      en: "Do you have employees who enjoy cycling to work? Why not lease more e-bikes instead of offering only expensive company cars? In cities, an e-bike can often get you to your destination faster and more comfortably than a car. There are also no parking problems. You also promote your employees' health and protect the environment while saving on taxes. BikeLeasing GmbH offers deals tailored to your needs. Register with us and we will take care of the rest."
    },
    explication: {
      fr: "Ce texte est une publicité destinée aux entreprises. Il propose aux employeurs de louer des vélos électriques pour leurs salariés. Les avantages sont la rapidité en ville, l'absence de problèmes de stationnement, la santé, l'environnement et les économies d'impôts.",
      ar: "هذا النص إعلان موجه للشركات وأصحاب العمل. يقترح عليهم استئجار دراجات كهربائية للموظفين. من بين المزايا: السرعة داخل المدن، تجنب مشاكل مواقف السيارات، الحفاظ على الصحة والبيئة، وتوفير الضرائب.",
      en: "This is an advertisement aimed at companies and employers. It suggests leasing electric bikes for employees. The advantages include faster travel in cities, no parking problems, better health, environmental protection and tax savings."
    }
  },
  {
    id: 2,
    contenu: "Die Bahn erhöht dieses Jahr die Ticketpreise nicht. Dies soll die Bahn attraktiver machen, sodass mehr Menschen die Züge nutzen. Ob dies wirklich erfolgreich ist, bestreiten manche Experten. Sie argumentieren, dass das Auto in Deutschland zu beliebt ist. Günstiger werden außerdem die Tickets im öffentlichen Nahverkehr, weil dann nicht mehr so viele Berufstätige mit dem Auto zur Arbeit fahren. Ob diese Maßnahmen wirklich erfolgreich sind, wird sich zeigen. Experten sind sich einig: Ein Schritt in die richtige Richtung!",
    traduction: {
      fr: "Cette année, la compagnie ferroviaire n'augmente pas le prix des billets. Cette mesure doit rendre le train plus attractif afin que davantage de personnes l'utilisent. Certains experts doutent que cela soit réellement efficace. Ils expliquent que la voiture est trop populaire en Allemagne. Les billets des transports publics locaux deviennent également moins chers, afin que moins de personnes se rendent au travail en voiture. Il faudra voir si ces mesures seront vraiment efficaces. Les experts sont d'accord : c'est un pas dans la bonne direction !",
      ar: "لن ترفع شركة السكك الحديدية أسعار التذاكر هذا العام. والهدف من ذلك هو جعل القطار أكثر جاذبية حتى يستعمله عدد أكبر من الناس. لكن بعض الخبراء يشككون في نجاح هذه الخطوة، لأن السيارة تحظى بشعبية كبيرة في ألمانيا. كما ستصبح تذاكر النقل العمومي المحلي أرخص، حتى لا يذهب الكثير من الموظفين إلى العمل بالسيارة. وسنرى ما إذا كانت هذه الإجراءات ستنجح فعلاً. ويتفق الخبراء على أنها خطوة في الاتجاه الصحيح!",
      en: "The railway company will not increase ticket prices this year. This is intended to make train travel more attractive so that more people use trains. Some experts doubt whether this will really work. They argue that cars are too popular in Germany. Tickets for local public transport will also become cheaper so that fewer workers commute by car. We will have to see whether these measures are successful. Experts agree: it is a step in the right direction!"
    },
    explication: {
      fr: "Le texte parle des prix des transports. La compagnie ferroviaire maintient les prix des billets et les transports publics locaux deviennent moins chers. L'objectif est d'encourager les gens à utiliser les transports collectifs plutôt que leur voiture.",
      ar: "يتحدث النص عن أسعار وسائل النقل. لن ترفع شركة القطارات أسعار التذاكر، كما ستصبح تذاكر النقل العمومي المحلي أرخص. الهدف هو تشجيع الناس على استعمال وسائل النقل الجماعي بدلاً من سياراتهم.",
      en: "The text discusses transport prices. The railway company is keeping ticket prices unchanged, and local public transport is becoming cheaper. The aim is to encourage people to use public transport instead of their cars."
    }
  },
  {
    id: 3,
    contenu: "Vergangenen Monat wurden etwa tausend Eltern von der Stiftung Schulqualität befragt, ob sie mit der Schule ihrer Kinder zufrieden sind. Dabei sagten 80%, dass die Schule gut oder sogar sehr gut sei. Und das, obwohl nur 40% der Eltern denken, dass die Kinder in der Schule auf den Beruf vorbereitet werden. Die Schülerinnen und Schüler sollten mehr über Ökonomie lernen. Außerdem sagten über 60%, dass das Thema Umweltschutz im Unterricht eine größere Rolle spielen sollte.",
    traduction: {
      fr: "Le mois dernier, environ mille parents ont été interrogés par la Fondation pour la qualité scolaire afin de savoir s'ils étaient satisfaits de l'école de leurs enfants. 80 % ont déclaré que l'école était bonne, voire très bonne. Et cela malgré le fait que seulement 40 % des parents pensent que les enfants sont préparés à leur future profession à l'école. Les élèves devraient apprendre davantage sur l'économie. En outre, plus de 60 % des parents ont déclaré que la protection de l'environnement devrait occuper une place plus importante dans les cours.",
      ar: "في الشهر الماضي، استطلعت مؤسسة جودة التعليم آراء حوالي ألف من الآباء لمعرفة ما إذا كانوا راضين عن مدارس أبنائهم. قال 80% منهم إن المدرسة جيدة أو جيدة جداً، رغم أن 40% فقط يعتقدون أن الأطفال يتم إعدادهم في المدرسة للحياة المهنية. ويرى الآباء أن التلاميذ يجب أن يتعلموا المزيد عن الاقتصاد. كما قال أكثر من 60% إن حماية البيئة يجب أن تحتل مكانة أكبر في الدروس.",
      en: "Last month, around one thousand parents were surveyed by the School Quality Foundation to find out whether they were satisfied with their children's schools. 80% said that the school was good or even very good. This was despite the fact that only 40% of parents believed that children were being prepared for their future careers at school. Students should learn more about economics. More than 60% also said that environmental protection should play a greater role in lessons."
    },
    explication: {
      fr: "Le texte présente une enquête auprès des parents concernant la qualité des écoles. Malgré quelques critiques sur la préparation professionnelle et les matières enseignées, la majorité des parents sont satisfaits de l'école de leurs enfants.",
      ar: "يعرض النص استطلاعاً لآراء الآباء حول جودة المدارس. ورغم وجود بعض الانتقادات المتعلقة بالإعداد للحياة المهنية والمواد الدراسية، فإن أغلبية الآباء راضون عن مدارس أبنائهم.",
      en: "The text presents a survey of parents about school quality. Despite some criticism concerning career preparation and school subjects, most parents are satisfied with their children's schools."
    }
  },
  {
    id: 4,
    contenu: "Berlin. In der Hauptstadt herrscht weiterhin Lehrermangel: Tausende Lehrkräfte fehlen. Mittlerweile unterrichten sogar schon Studierende die Schülerinnen und Schüler der Hauptstadt, weil sich nicht genügend ausgebildete Lehrkräfte finden. Die Unterrichtsqualität leidet stark. Daher plant der Berliner Senat eine Werbekampagne, um den Lehrerberuf attraktiver zu gestalten. Dabei sollen auch Menschen in anderen Berufen angesprochen werden. Außerdem denkt man über eine Erhöhung der Gehälter für Lehrerinnen und Lehrer nach.",
    traduction: {
      fr: "Berlin. La capitale continue de faire face à une pénurie d'enseignants : des milliers de professeurs manquent. Désormais, des étudiants donnent même des cours aux élèves de la capitale, car on ne trouve pas suffisamment d'enseignants qualifiés. La qualité de l'enseignement en souffre fortement. C'est pourquoi le Sénat de Berlin prévoit une campagne publicitaire pour rendre le métier d'enseignant plus attractif. Cette campagne s'adressera également aux personnes exerçant d'autres professions. On envisage aussi une augmentation des salaires des enseignants.",
      ar: "برلين. لا تزال العاصمة تعاني من نقص في المدرسين، حيث ينقصها آلاف المعلمين. وأصبح بعض الطلبة يدرّسون تلاميذ العاصمة بسبب عدم وجود عدد كافٍ من المدرسين المؤهلين. وقد تأثرت جودة التعليم بشكل كبير. لذلك تخطط حكومة برلين المحلية لإطلاق حملة إعلانية لجعل مهنة التدريس أكثر جاذبية. وستستهدف الحملة أيضاً الأشخاص الذين يعملون في مهن أخرى. كما يجري التفكير في زيادة أجور المدرسين.",
      en: "Berlin. The capital is still suffering from a shortage of teachers: thousands of teachers are missing. University students are now even teaching school pupils because there are not enough qualified teachers. The quality of teaching is suffering considerably. Therefore, the Berlin Senate is planning an advertising campaign to make teaching more attractive. People working in other professions will also be targeted. An increase in teachers' salaries is also being considered."
    },
    explication: {
      fr: "Le problème principal est le manque d'enseignants à Berlin. Pour résoudre ce problème, les autorités envisagent une campagne de recrutement et une augmentation des salaires. Le titre doit donc évoquer la pénurie et la réaction de la ville.",
      ar: "المشكلة الرئيسية هي نقص المدرسين في برلين. ولحل هذه المشكلة، تفكر السلطات في إطلاق حملة لاستقطاب المدرسين وزيادة أجورهم. لذلك يجب أن يشير العنوان إلى النقص ورد فعل المدينة.",
      en: "The main problem is the shortage of teachers in Berlin. To address it, the authorities are considering a recruitment campaign and higher salaries. The heading should therefore mention the shortage and the city's response."
    }
  },
  {
    id: 5,
    contenu: "NaturVerband ist der größte Umweltverband in Deutschland. Er engagiert sich für Umwelt- und Tierschutz. Sie wollen sich auch aktiv gegen Umweltverschmutzung einsetzen? Sie wollen sich für mehr Naturschutz engagieren? Dann sind Sie bei uns richtig. Wir haben regelmäßige Treffen und führen Informationsveranstaltungen zu verschiedenen aktuellen Themen durch. Außerdem gibt es eine monatliche Mitgliederzeitschrift. Melden Sie sich einfach bei uns.",
    traduction: {
      fr: "NaturVerband est la plus grande association environnementale d'Allemagne. Elle s'engage pour la protection de l'environnement et des animaux. Vous souhaitez également agir activement contre la pollution ? Vous voulez vous engager davantage pour la protection de la nature ? Alors vous êtes au bon endroit. Nous organisons des réunions régulières et des séances d'information sur différents sujets d'actualité. Nous publions également un magazine mensuel destiné à nos membres. Il vous suffit de vous inscrire auprès de nous.",
      ar: "تُعد NaturVerband أكبر جمعية بيئية في ألمانيا. وهي تعمل من أجل حماية البيئة والحيوانات. هل ترغب أيضاً في المشاركة الفعالة في مكافحة التلوث؟ هل تريد المساهمة في حماية الطبيعة؟ إذن فأنت في المكان المناسب. ننظم اجتماعات منتظمة ولقاءات إعلامية حول مواضيع مختلفة راهنة. كما نصدر مجلة شهرية للأعضاء. ما عليك سوى التسجيل لدينا.",
      en: "NaturVerband is the largest environmental association in Germany. It is committed to protecting the environment and animals. Would you also like to take action against pollution? Would you like to get involved in protecting nature? Then you are in the right place. We hold regular meetings and organize information events on various current topics. There is also a monthly magazine for members. Simply register with us."
    },
    explication: {
      fr: "C'est une présentation d'une association écologique. Elle invite les personnes intéressées à participer à ses activités pour protéger la nature, les animaux et lutter contre la pollution.",
      ar: "هذا النص يقدم جمعية بيئية ويدعو الأشخاص المهتمين إلى المشاركة في أنشطتها من أجل حماية الطبيعة والحيوانات ومحاربة التلوث.",
      en: "This text introduces an environmental association. It invites interested people to take part in activities to protect nature and animals and fight pollution."
    }
  }
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Eltern trotz Kritik mit der Schule zufrieden',
    traduction: {
      fr: 'Des parents satisfaits de l’école malgré certaines critiques',
      ar: 'الآباء راضون عن المدرسة رغم بعض الانتقادات',
      en: 'Parents satisfied with the school despite criticism'
    },
    explication: {
      fr: 'Les parents sont globalement satisfaits de l’école, même s’ils souhaitent des améliorations.',
      ar: 'الآباء راضون بشكل عام عن المدرسة، رغم رغبتهم في بعض التحسينات.',
      en: 'Parents are generally satisfied with the school, even though they want some improvements.'
    }
  },
  {
    id: 'B',
    contenu: 'Elektromobilität für Angestellte',
    traduction: {
      fr: 'La mobilité électrique pour les salariés',
      ar: 'التنقل الكهربائي للموظفين',
      en: 'Electric mobility for employees'
    },
    explication: {
      fr: 'Il s’agit de proposer des vélos électriques aux employés pour leurs déplacements domicile-travail.',
      ar: 'يتعلق الأمر بتوفير دراجات كهربائية للموظفين من أجل التنقل بين المنزل والعمل.',
      en: 'It refers to offering electric bikes to employees for commuting to work.'
    }
  },
  {
    id: 'C',
    contenu: 'Stärkung von Bus und Bahn',
    traduction: {
      fr: 'Renforcer les bus et les trains',
      ar: 'تعزيز الحافلات والقطارات',
      en: 'Strengthening buses and trains'
    },
    explication: {
      fr: 'Le titre parle de mesures destinées à encourager l’utilisation des transports publics.',
      ar: 'يتحدث العنوان عن إجراءات تهدف إلى تشجيع استعمال وسائل النقل العمومي.',
      en: 'The heading refers to measures designed to encourage the use of public transport.'
    }
  },
  {
    id: 'D',
    contenu: 'Schule und Umweltschutz',
    traduction: {
      fr: 'L’école et la protection de l’environnement',
      ar: 'المدرسة وحماية البيئة',
      en: 'School and environmental protection'
    },
    explication: {
      fr: 'Le titre met l’accent sur la place de l’écologie et de la protection de l’environnement dans les cours.',
      ar: 'يركز العنوان على أهمية البيئة وحمايتها داخل الدروس المدرسية.',
      en: 'The heading focuses on the role of ecology and environmental protection in school lessons.'
    }
  },
  {
    id: 'E',
    contenu: 'Bald keine Firmenwagen mehr?',
    traduction: {
      fr: 'Bientôt plus de voitures de fonction ?',
      ar: 'هل ستختفي سيارات الشركة قريباً؟',
      en: 'No more company cars soon?'
    },
    explication: {
      fr: 'Le titre pose une question sur l’avenir des voitures de fonction dans les entreprises.',
      ar: 'يطرح العنوان سؤالاً حول مستقبل سيارات الشركة في المؤسسات.',
      en: 'The heading asks a question about the future of company cars.'
    }
  },
  {
    id: 'F',
    contenu: 'Ticketpreise bei der Bahn',
    traduction: {
      fr: 'Les prix des billets de train',
      ar: 'أسعار تذاكر القطارات',
      en: 'Railway ticket prices'
    },
    explication: {
      fr: 'Le titre concerne les tarifs des billets de train et leur évolution.',
      ar: 'يتعلق العنوان بأسعار تذاكر القطارات والتغييرات التي تطرأ عليها.',
      en: 'The heading concerns train ticket prices and changes to those prices.'
    }
  },
  {
    id: 'G',
    contenu: 'Lehrerberuf wird immer attraktiver',
    traduction: {
      fr: 'Le métier d’enseignant devient de plus en plus attractif',
      ar: 'مهنة التدريس تصبح أكثر جاذبية',
      en: 'Teaching is becoming more attractive'
    },
    explication: {
      fr: 'Le titre annonce une amélioration de l’attractivité du métier d’enseignant.',
      ar: 'يشير العنوان إلى تحسن جاذبية مهنة التدريس.',
      en: 'The heading suggests that the teaching profession is becoming more appealing.'
    }
  },
  {
    id: 'H',
    contenu: 'Engagement für die Natur',
    traduction: {
      fr: 'S’engager pour la nature',
      ar: 'الالتزام من أجل الطبيعة',
      en: 'Commitment to nature'
    },
    explication: {
      fr: 'Le titre concerne l’engagement personnel ou collectif pour protéger la nature.',
      ar: 'يتعلق العنوان بالمشاركة الفردية أو الجماعية في حماية الطبيعة.',
      en: 'The heading concerns personal or collective action to protect nature.'
    }
  },
  {
    id: 'I',
    contenu: 'Preissenkungen bei Bus, Straßenbahn und U-Bahn!',
    traduction: {
      fr: 'Baisse des prix des bus, tramways et métros !',
      ar: 'تخفيض أسعار الحافلات والترام والمترو!',
      en: 'Price reductions for buses, trams and underground trains!'
    },
    explication: {
      fr: 'Le titre parle spécifiquement de la baisse des tarifs des transports urbains.',
      ar: 'يتحدث العنوان تحديداً عن تخفيض أسعار وسائل النقل داخل المدن.',
      en: 'The heading specifically refers to lower fares for urban transport.'
    }
  },
  {
    id: 'J',
    contenu: 'Zu wenig Lehrer – Stadt reagiert',
    traduction: {
      fr: 'Pas assez d’enseignants : la ville réagit',
      ar: 'نقص في المدرسين – المدينة تتخذ إجراءات',
      en: 'Too few teachers – the city responds'
    },
    explication: {
      fr: 'Le titre présente un problème de manque d’enseignants et les mesures prises par les autorités.',
      ar: 'يعرض العنوان مشكلة نقص المدرسين والإجراءات التي تتخذها السلطات.',
      en: 'The heading presents a teacher shortage and the measures taken by the authorities.'
    }
  }
]

const solutions: Record<number, string> = {
  1: 'B',
  2: 'F',
  3: 'A',
  4: 'J',
  5: 'H'
}

export default function AlexUndCoraPage() {
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
          <h1>Alex Und Cora</h1>
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

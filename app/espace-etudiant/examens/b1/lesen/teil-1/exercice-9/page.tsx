
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

type Lang = 'fr' | 'ar' | 'en'

const langues = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English'
}

const textes = [
  {
    id: 1,
    contenu: "Ein neuer Trend in Sachen Wohnen setzt sich immer mehr durch: Ökodörfer. Ihre Vielfalt ist groß. Außerdem bieten sie eine echte Alternative zur Anonymität und dem Großstadtleben. Nicht nur auf sich selbst, sondern auch auf einen bewussten Umgang mit Gesellschaft und Natur soll in Zukunft geachtet werden. Bei den neuen Wohnungen setzt man auf ökologisches Bauen und auf erneuerbare Energien. Die meisten Ökosiedlungen verfügen über Seminarzentren, in denen Lehrgänge zu dieser neuen Form des Miteinanders angeboten werden.",
    traduction: {
      fr: "Une nouvelle tendance en matière d'habitat se développe de plus en plus : les écovillages. Ils sont très variés. Ils offrent également une véritable alternative à l'anonymat et à la vie dans les grandes villes. À l'avenir, l'attention ne devra pas seulement être portée sur soi-même, mais aussi sur une relation responsable avec la société et la nature. Pour les nouveaux logements, on mise sur la construction écologique et les énergies renouvelables. La plupart des écoquartiers disposent de centres de séminaires proposant des formations sur cette nouvelle façon de vivre ensemble.",
      ar: "هناك اتجاه جديد في مجال السكن ينتشر بشكل متزايد، وهو القرى البيئية. وتتميز هذه القرى بالتنوع، كما تقدم بديلاً حقيقياً عن العزلة والحياة في المدن الكبرى. في المستقبل، لن يكون الاهتمام منصباً على الفرد فقط، بل أيضاً على التعامل الواعي مع المجتمع والطبيعة. وتعتمد المساكن الجديدة على البناء البيئي والطاقات المتجددة. كما تتوفر معظم التجمعات السكنية البيئية على مراكز للندوات تقدم دورات حول هذا النوع الجديد من العيش المشترك.",
      en: "A new housing trend is becoming increasingly popular: eco-villages. They are very diverse and offer a real alternative to anonymity and big-city life. In the future, attention should be paid not only to oneself but also to a responsible relationship with society and nature. New homes focus on ecological construction and renewable energy. Most eco-settlements have seminar centers offering courses on this new way of living together."
    },
    explication: {
      fr: "Le texte présente une nouvelle façon d'habiter : les écovillages. On y privilégie la construction écologique, les énergies renouvelables et la vie en communauté. Le titre I correspond donc aux nouvelles formes d'habitat respectueuses de l'environnement.",
      ar: "يتحدث النص عن طريقة جديدة للسكن، وهي القرى البيئية. تعتمد على البناء الصديق للبيئة والطاقات المتجددة والعيش الجماعي. لذلك يناسبه العنوان I المتعلق بأشكال السكن الجديدة الصديقة للبيئة.",
      en: "The text presents a new way of living: eco-villages. They focus on ecological construction, renewable energy and community life. Heading I therefore matches these new environmentally friendly forms of housing."
    }
  },
  {
    id: 2,
    contenu: "Angebot für Menschen, die durch ihren Beruf überlastet sind: „Yoga und Meditation für das innere Gleichgewicht“. Renate Loebner, ausgebildete Yogalehrerin, erklärt und zeigt in Wochenendseminaren in einem Haus am See, wie es funktioniert. Die Diplom-Biologin bezeichnet Yoga als Kraftquelle für Körper, Geist und Seele. Mit diesen Methoden können gestresste Menschen in kurzer Zeit wieder zur Ruhe kommen, da die körperlichen und geistigen Übungen relativ schnell zu erlernen sind.",
    traduction: {
      fr: "Une offre destinée aux personnes surchargées par leur travail : « Yoga et méditation pour retrouver l'équilibre intérieur ». Renate Loebner, professeure de yoga diplômée, explique et montre comment cela fonctionne lors de séminaires le week-end dans une maison au bord d'un lac. Cette biologiste diplômée considère le yoga comme une source d'énergie pour le corps, l'esprit et l'âme. Grâce à ces méthodes, les personnes stressées peuvent retrouver rapidement leur calme, car les exercices physiques et mentaux sont relativement faciles à apprendre.",
      ar: "عرض موجه للأشخاص الذين يعانون من ضغط العمل: «اليوغا والتأمل من أجل التوازن الداخلي». تشرح ريناته لوبنر، وهي مدربة يوغا مؤهلة، كيفية ممارسة ذلك خلال ندوات نهاية الأسبوع في منزل بجانب بحيرة. وتعتبر عالمة الأحياء الحاصلة على شهادة جامعية أن اليوغا مصدر قوة للجسم والعقل والروح. وبفضل هذه الطرق، يمكن للأشخاص الذين يعانون من التوتر استعادة هدوئهم في وقت قصير، لأن التمارين الجسدية والذهنية سهلة التعلم نسبياً.",
      en: "An offer for people who are overloaded by their jobs: 'Yoga and meditation for inner balance'. Renate Loebner, a qualified yoga teacher, explains and demonstrates how it works during weekend seminars in a house by a lake. The biologist describes yoga as a source of strength for body, mind and soul. These methods help stressed people relax again quickly because the physical and mental exercises are relatively easy to learn."
    },
    explication: {
      fr: "Le texte parle du yoga et de la méditation comme moyens de réduire le stress et de retrouver le calme. Il s'agit donc de techniques de relaxation utilisables dans la vie quotidienne. La bonne réponse est D.",
      ar: "يتحدث النص عن اليوغا والتأمل باعتبارهما وسيلتين للتخلص من التوتر واستعادة الهدوء. لذلك يتعلق الأمر بتقنيات الاسترخاء في الحياة اليومية. الإجابة الصحيحة هي D.",
      en: "The text describes yoga and meditation as ways to reduce stress and regain calm. It is therefore about relaxation techniques in everyday life. The correct answer is D."
    }
  },
  {
    id: 3,
    contenu: "Grau, trocken und hart: Der Baustoff Beton hat einen eher langweiligen Ruf. Dabei ist er ein Multitalent. Je nach Rezeptur wird Beton nun sogar zum Luftreiniger in Großstädten. Der neue Zement mit dem Namen TioCem ist das Ergebnis eines knapp vierjährigen Forschungsprojekts. Er reagiert auf Licht und kann bis zu 90 Prozent der Schadstoffe aus der Luft entfernen.",
    traduction: {
      fr: "Gris, sec et dur : le béton a plutôt une réputation de matériau ennuyeux. Pourtant, c'est un matériau polyvalent. Selon sa composition, le béton peut désormais même purifier l'air dans les grandes villes. Le nouveau ciment, appelé TioCem, est le résultat d'un projet de recherche de près de quatre ans. Il réagit à la lumière et peut éliminer jusqu'à 90 % des substances polluantes présentes dans l'air.",
      ar: "رمادي وجاف وصلب: يتمتع الإسمنت بسمعة مادة بناء مملة إلى حد ما. لكنه في الواقع مادة متعددة الاستخدامات. وبحسب تركيبته، أصبح الإسمنت قادراً حتى على تنقية الهواء في المدن الكبرى. والإسمنت الجديد المسمى TioCem هو نتيجة مشروع بحث استمر قرابة أربع سنوات. يتفاعل هذا الإسمنت مع الضوء ويمكنه إزالة ما يصل إلى 90% من المواد الملوثة في الهواء.",
      en: "Grey, dry and hard: concrete has a rather boring reputation as a building material. However, it is extremely versatile. Depending on its composition, concrete can now even clean the air in large cities. The new cement, called TioCem, is the result of a research project lasting almost four years. It reacts to light and can remove up to 90 percent of pollutants from the air."
    },
    explication: {
      fr: "Le texte présente un nouveau type de ciment, le TioCem, capable de réagir à la lumière et d'éliminer jusqu'à 90 % des polluants de l'air. Le titre A parle précisément d'un matériau de construction qui contribue à purifier l'air.",
      ar: "يعرض النص نوعاً جديداً من الإسمنت يسمى TioCem، وهو قادر على التفاعل مع الضوء وإزالة ما يصل إلى 90% من ملوثات الهواء. العنوان A يتحدث تحديداً عن مادة بناء تساعد على تنقية الهواء.",
      en: "The text presents a new type of cement, TioCem, which reacts to light and can remove up to 90% of air pollutants. Heading A specifically refers to a building material that cleans the air."
    }
  },
  {
    id: 4,
    contenu: "Immer mehr Menschen erfüllen sich einen Traum: ein eigenes Baumhaus. Die Baustile sind so unterschiedlich wie die Besitzer, sie dienen zum Beispiel als Gästezimmer oder Teehäuser. Viele nutzen sie sogar in den Sommermonaten zum Schlafen. Baumhaus-Spezialist Erwin Köstinger freut sich über diese Entwicklung: Kinder-Baumhäuser können nicht nur zum Wohnen, sondern auch zum Arbeiten als Büro genutzt werden.",
    traduction: {
      fr: "De plus en plus de personnes réalisent un rêve : avoir leur propre cabane dans les arbres. Les styles de construction sont aussi variés que les propriétaires. Ces cabanes servent par exemple de chambres d'amis ou de maisons de thé. Beaucoup les utilisent même pour dormir pendant les mois d'été. Le spécialiste des cabanes dans les arbres, Erwin Köstinger, se réjouit de cette évolution : les cabanes dans les arbres pour enfants peuvent servir non seulement d'espace de vie, mais aussi de bureau pour travailler.",
      ar: "يحقق المزيد والمزيد من الناس حلماً يتمثل في امتلاك منزل خاص فوق الأشجار. وتختلف تصاميم هذه المنازل باختلاف أصحابها، إذ يمكن استعمالها مثلاً كغرف للضيوف أو كبيوت للشاي. ويستخدمها الكثيرون حتى للنوم خلال أشهر الصيف. ويعبر المتخصص في بيوت الأشجار إروين كوستينغر عن سعادته بهذا التطور، إذ يمكن استعمال بيوت الأشجار الخاصة بالأطفال للسكن أو للعمل كمكاتب.",
      en: "More and more people are fulfilling a dream: owning their own treehouse. The building styles are as varied as their owners. They can be used as guest rooms or tea houses, for example. Many people even use them for sleeping during the summer months. Treehouse specialist Erwin Köstinger is pleased with this development: children's treehouses can be used not only for living but also as offices."
    },
    explication: {
      fr: "Le texte décrit les cabanes construites dans les arbres et leurs différentes utilisations : chambre d'amis, maison de thé, lieu pour dormir ou bureau. Le titre B correspond aux arbres comme espace de vie.",
      ar: "يصف النص المنازل المبنية فوق الأشجار واستعمالاتها المختلفة، مثل غرف الضيوف أو أماكن النوم أو المكاتب. لذلك يناسبه العنوان B الذي يتحدث عن الأشجار كمساحة للعيش.",
      en: "The text describes treehouses and their different uses: guest rooms, tea houses, sleeping places or offices. Heading B matches the idea of trees as living spaces."
    }
  },
  {
    id: 5,
    contenu: "In Großstädten gehören sie schon zum Alltagsleben: die Partys nach der Arbeit. Neben Musik und Tanz umfasst das Angebot bei solchen Partys auch die Möglichkeit zu einem Imbiss, in der Regel als Ersatz für das Abendessen. Kein Wunder, dass sich aus solchen Treffen, die in der Mehrzahl von Alleinstehenden besucht werden, schon jede Menge Freundschaften und Partnerschaften fürs Leben ergeben haben.",
    traduction: {
      fr: "Dans les grandes villes, elles font déjà partie de la vie quotidienne : les fêtes après le travail. En plus de la musique et de la danse, ces soirées proposent également la possibilité de prendre une collation, généralement à la place du dîner. Il n'est donc pas étonnant que ces rencontres, auxquelles participent principalement des personnes célibataires, aient déjà donné naissance à de nombreuses amitiés et relations durables.",
      ar: "أصبحت الحفلات التي تقام بعد العمل جزءاً من الحياة اليومية في المدن الكبرى. فإلى جانب الموسيقى والرقص، توفر هذه الحفلات أيضاً إمكانية تناول وجبة خفيفة، غالباً كبديل عن العشاء. وليس من المستغرب أن تؤدي هذه اللقاءات، التي يشارك فيها في الغالب أشخاص غير مرتبطين، إلى نشوء العديد من الصداقات والعلاقات العاطفية طويلة الأمد.",
      en: "In large cities, parties after work have already become part of everyday life. In addition to music and dancing, these parties also offer snacks, usually as a substitute for dinner. It is no surprise that these gatherings, mostly attended by single people, have led to many friendships and lifelong relationships."
    },
    explication: {
      fr: "Le texte décrit les fêtes organisées après le travail. Les participants peuvent écouter de la musique, danser et faire des rencontres. Ces soirées permettent même de créer des amitiés et des relations durables. Le titre E résume parfaitement cette idée : d'abord le travail, ensuite le plaisir.",
      ar: "يتحدث النص عن الحفلات التي تقام بعد انتهاء العمل، حيث يمكن للمشاركين الاستماع إلى الموسيقى والرقص والتعارف. وقد تؤدي هذه اللقاءات إلى صداقات وعلاقات طويلة الأمد. العنوان E يلخص الفكرة: العمل أولاً ثم الترفيه.",
      en: "The text describes parties held after work. Participants can listen to music, dance and meet new people. These events can even lead to lasting friendships and relationships. Heading E summarizes this idea: work first, then pleasure."
    }
  }
]

const ueberschriften = [
  {
    id: 'A',
    text: 'Baumaterial für saubere Luft',
    traduction: {
      fr: 'Un matériau de construction pour un air pur',
      ar: 'مواد بناء من أجل هواء نقي',
      en: 'Building material for clean air'
    },
    explication: {
      fr: 'Ce titre parle d’un matériau de construction qui contribue à purifier l’air.',
      ar: 'يتحدث هذا العنوان عن مادة بناء تساعد على تنقية الهواء.',
      en: 'This heading refers to a building material that helps clean the air.'
    }
  },
  {
    id: 'B',
    text: 'Bäume als Lebensraum',
    traduction: {
      fr: 'Les arbres comme espace de vie',
      ar: 'الأشجار كمساحة للعيش',
      en: 'Trees as living spaces'
    },
    explication: {
      fr: 'Ce titre correspond aux cabanes dans les arbres utilisées pour vivre, dormir ou travailler.',
      ar: 'يناسب هذا العنوان المنازل الموجودة فوق الأشجار والتي تستعمل للسكن أو النوم أو العمل.',
      en: 'This heading refers to treehouses used for living, sleeping or working.'
    }
  },
  {
    id: 'C',
    text: 'Betonfreies Bauen wieder im Trend',
    traduction: {
      fr: 'La construction sans béton revient à la mode',
      ar: 'البناء بدون إسمنت يعود إلى الموضة',
      en: 'Building without concrete is becoming trendy again'
    },
    explication: {
      fr: 'Ce titre évoque une tendance à construire sans utiliser de béton.',
      ar: 'يشير هذا العنوان إلى اتجاه نحو البناء دون استعمال الإسمنت.',
      en: 'This heading refers to a trend towards building without concrete.'
    }
  },
  {
    id: 'D',
    text: 'Entspannungstechniken im Alltag',
    traduction: {
      fr: 'Les techniques de relaxation au quotidien',
      ar: 'تقنيات الاسترخاء في الحياة اليومية',
      en: 'Relaxation techniques in everyday life'
    },
    explication: {
      fr: 'Ce titre correspond au yoga et à la méditation utilisés pour réduire le stress.',
      ar: 'يناسب هذا العنوان اليوغا والتأمل المستعملين للتخلص من التوتر.',
      en: 'This heading refers to yoga and meditation used to reduce stress.'
    }
  },
  {
    id: 'E',
    text: 'Erst die Arbeit, dann das Vergnügen',
    traduction: {
      fr: 'D’abord le travail, ensuite le plaisir',
      ar: 'العمل أولاً ثم الترفيه',
      en: 'First work, then pleasure'
    },
    explication: {
      fr: 'Ce titre décrit les fêtes et les rencontres organisées après la journée de travail.',
      ar: 'يصف هذا العنوان الحفلات واللقاءات التي تقام بعد يوم العمل.',
      en: 'This heading describes parties and social gatherings after work.'
    }
  },
  {
    id: 'F',
    text: 'Firmen organisieren Partys in der Freizeit',
    traduction: {
      fr: 'Les entreprises organisent des fêtes pendant les loisirs',
      ar: 'الشركات تنظم حفلات خلال أوقات الفراغ',
      en: 'Companies organize parties during leisure time'
    },
    explication: {
      fr: 'Ce titre parle de fêtes organisées directement par les entreprises.',
      ar: 'يتحدث هذا العنوان عن حفلات تنظمها الشركات مباشرة.',
      en: 'This heading refers to parties organized directly by companies.'
    }
  },
  {
    id: 'G',
    text: 'Fortbildung zur Yogatrainerin',
    traduction: {
      fr: 'Formation continue pour devenir professeure de yoga',
      ar: 'تكوين مستمر لتصبح مدربة يوغا',
      en: 'Further training to become a yoga instructor'
    },
    explication: {
      fr: 'Ce titre concerne une formation professionnelle pour devenir professeure de yoga.',
      ar: 'يتعلق هذا العنوان بتكوين مهني من أجل أن تصبح الشخص مدرب يوغا.',
      en: 'This heading concerns professional training to become a yoga instructor.'
    }
  },
  {
    id: 'H',
    text: 'Holz als natürlicher Baustoff',
    traduction: {
      fr: 'Le bois comme matériau de construction naturel',
      ar: 'الخشب كمادة بناء طبيعية',
      en: 'Wood as a natural building material'
    },
    explication: {
      fr: 'Ce titre met l’accent sur le bois comme matériau utilisé dans la construction.',
      ar: 'يركز هذا العنوان على الخشب باعتباره مادة تستعمل في البناء.',
      en: 'This heading focuses on wood as a material used in construction.'
    }
  },
  {
    id: 'I',
    text: 'Neue umweltfreundliche Wohnformen',
    traduction: {
      fr: 'De nouvelles formes d’habitat écologiques',
      ar: 'أشكال جديدة للسكن الصديق للبيئة',
      en: 'New environmentally friendly forms of housing'
    },
    explication: {
      fr: 'Ce titre correspond aux écovillages, à la construction écologique et aux énergies renouvelables.',
      ar: 'يناسب هذا العنوان القرى البيئية والبناء الصديق للبيئة والطاقات المتجددة.',
      en: 'This heading refers to eco-villages, ecological construction and renewable energy.'
    }
  },
  {
    id: 'J',
    text: 'Seminar „Umweltbewusstes“ Bauen',
    traduction: {
      fr: 'Séminaire sur la construction respectueuse de l’environnement',
      ar: 'ندوة حول البناء الصديق للبيئة',
      en: 'Seminar on environmentally conscious construction'
    },
    explication: {
      fr: 'Ce titre évoque un séminaire consacré aux méthodes de construction écologiques.',
      ar: 'يشير هذا العنوان إلى ندوة مخصصة لطرق البناء البيئية.',
      en: 'This heading refers to a seminar about ecological construction methods.'
    }
  }
]

const korrekt: Record<number, string> = {
  1: 'I',
  2: 'D',
  3: 'A',
  4: 'B',
  5: 'E'
}

export default function Exercice9() {
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
          <h1>Miroslav</h1>
          <p>
            Lesen Sie die fünf Texte und ordnen Sie jedem Text die passende
            Überschrift zu. Fünf Überschriften bleiben übrig.
          </p>

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
                        {reponse} ·{' '}
                        {ueberschriften.find(t => t.id === reponse)?.text}
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
                        <Lightbulb size={15} /> Comprendre le contexte
                      </strong>
                      <p>{texte.explication[langue]}</p>
                    </div>
                  )}

                  {corrige && !istRichtig && (
                    <div className="correct-answer">
                      Richtige Antwort: {korrekt[texte.id]} ·{' '}
                      {ueberschriften.find(t => t.id === korrekt[texte.id])?.text}
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
              Appuyez sur « Traduire / expliquer » pour comprendre chaque titre.
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
                      {detailOuvert ? 'Masquer' : 'Traduire / expliquer'}
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
          color: #b49760;
          transform: translateY(-3px);
        }

        .header-brand strong {
          color: #b49760;
        }

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

        .progress-label strong {
          color: #b49760;
        }

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

        .language-label svg {
          color: #806337;
        }

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
          background: #192b43;
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
          line-height: 1.7;
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
          color: #192b43;
        }

        .title-detail {
          margin-top: 7px;
          padding: 12px;
          background: #f7f5f0;
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
          border-bottom: 1px solid #e3ded3;
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

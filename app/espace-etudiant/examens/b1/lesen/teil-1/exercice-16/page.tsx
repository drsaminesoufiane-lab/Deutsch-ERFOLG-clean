
'use client'

import { useState, type Dispatch, type SetStateAction } from 'react'
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

type Texte = {
  id: number
  contenu: string
  traduction: Record<Lang, string>
  explication: Record<Lang, string>
}

type Ueberschrift = {
  id: string
  text: string
  traduction: Record<Lang, string>
  explication: Record<Lang, string>
}

const langues: Record<Lang, string> = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English'
}

const textes: Texte[] = [
  {
    id: 1,
    contenu: `Man muss auch mal mutig sein! Das dachte sich Jannik. Warum ist es so mutig? Seit drei Jahren kauft er regelmäßig in einem Unverpackt-Laden ein. "Dabei spare ich nicht nur eine Menge Plastik", sagt er. "Auch an der Frische der Produkte merkt man einen Unterschied. Die Schokolade bei uns ist immer knackiger als im Supermarkt." Offenbar sind Unverpackt-Läden gerade im Trend. Das merkt man auch daran, dass in den letzten zwei Jahren doppelt so viele Läden eröffnet haben. Doch es funktioniert: Die Kundinnen und Kunden geben mehr aus, weil es der Umwelt gut geht.`,
    traduction: {
      fr: `Il faut parfois aussi savoir être courageux ! C'est ce que s'est dit Jannik. Pourquoi est-ce courageux ? Depuis trois ans, il fait régulièrement ses courses dans un magasin en vrac. « Ainsi, je n'économise pas seulement beaucoup de plastique », dit-il. « On remarque aussi une différence dans la fraîcheur des produits. Chez nous, le chocolat est toujours plus croquant qu'au supermarché. » Apparemment, les magasins en vrac sont actuellement à la mode. On le constate également au fait que deux fois plus de magasins ont ouvert au cours des deux dernières années. Et cela fonctionne : les clients dépensent davantage parce que c'est bon pour l'environnement.`,
      ar: `يجب على الإنسان أحياناً أن يتحلى بالشجاعة! هذا ما فكر فيه يانيك. لماذا يعتبر ذلك شجاعاً؟ منذ ثلاث سنوات، يتسوق بانتظام من متجر يبيع المنتجات دون تغليف. يقول: «بهذه الطريقة لا أوفر كمية كبيرة من البلاستيك فحسب، بل ألاحظ أيضاً فرقاً في نضارة المنتجات. الشوكولاتة لدينا دائماً أكثر قرمشة من تلك الموجودة في السوبرماركت». يبدو أن متاجر البيع دون تغليف أصبحت رائجة حالياً. والدليل على ذلك أن عدد المتاجر التي افتتحت خلال العامين الماضيين تضاعف. وهذا الأمر ينجح: فالزبائن ينفقون أكثر لأنه مفيد للبيئة.`,
      en: `Sometimes you have to be brave! That is what Jannik thought. Why is it brave? For three years, he has regularly shopped at a packaging-free store. "This way, I not only save a lot of plastic," he says. "You can also notice a difference in the freshness of the products. Our chocolate is always crunchier than in the supermarket." Apparently, package-free stores are currently popular. This is also clear from the fact that twice as many stores have opened in the last two years. And it works: customers spend more because it is good for the environment.`
    },
    explication: {
      fr: `Le texte parle d'un magasin en vrac où les clients achètent des produits sans emballage. Jannik explique qu'il réduit ainsi sa consommation de plastique. Le titre doit donc évoquer le fait de faire ses courses avec ses propres contenants.`,
      ar: `يتحدث النص عن متجر يبيع المنتجات دون تغليف. يوضح يانيك أنه يقلل بهذه الطريقة من استعمال البلاستيك. لذلك يجب أن يشير العنوان إلى التسوق باستعمال العلب أو الأوعية الخاصة.`,
      en: `The text describes a packaging-free shop. Jannik explains that shopping there helps him reduce plastic waste. The heading should therefore refer to shopping with your own containers.`
    }
  },
  {
    id: 2,
    contenu: `Warum nicht das Angenehme mit dem Nützlichen verbinden? "Umweltschutz fängt mit kleinen Schritten an. Ich fahre jetzt seit Monaten mit meinem Rad zur Arbeit. Da tue ich etwas für mich, aber auch für die Umwelt", sagt Lea. Seit ihrem Auslandssemester in Schweden ist sie überzeugt: "Dort ist Umweltschutz ganz selbstverständlich." Warum kann man nicht auch hier sein Hobby mit dem Umweltschutz verbinden?`,
    traduction: {
      fr: `Pourquoi ne pas joindre l'utile à l'agréable ? « La protection de l'environnement commence par de petits gestes. Depuis plusieurs mois, je vais au travail à vélo. Je fais ainsi quelque chose pour moi, mais aussi pour l'environnement », explique Lea. Depuis son semestre d'études à l'étranger en Suède, elle en est convaincue : « Là-bas, la protection de l'environnement va de soi. » Pourquoi ne pourrait-on pas, ici aussi, associer son loisir à la protection de l'environnement ?`,
      ar: `لماذا لا نجمع بين المتعة والفائدة؟ تقول ليا: «تبدأ حماية البيئة بخطوات صغيرة. منذ عدة أشهر أذهب إلى العمل بالدراجة. وبهذا أفعل شيئاً مفيداً لنفسي وللبيئة أيضاً». ومنذ فصلها الدراسي في السويد، أصبحت مقتنعة بأن حماية البيئة هناك أمر طبيعي وتلقائي. لماذا لا يمكننا هنا أيضاً الجمع بين هواياتنا وحماية البيئة؟`,
      en: `Why not combine pleasure with usefulness? "Environmental protection starts with small steps. I have been cycling to work for months. That way, I do something for myself and for the environment," says Lea. Since her semester abroad in Sweden, she has been convinced: "Environmental protection is completely natural there." Why can't we also combine our hobbies with protecting the environment?`
    },
    explication: {
      fr: `Lea utilise son vélo pour aller au travail. Elle associe ainsi une activité agréable à un geste écologique. Attention : aucun des titres proposés ne correspond parfaitement à ce texte. Le titre D est seulement un rapprochement approximatif et doit être vérifié avec la source originale.`,
      ar: `تستعمل ليا دراجتها للذهاب إلى العمل، وبذلك تجمع بين نشاط تستمتع به وحماية البيئة. ملاحظة: لا يوجد عنوان يطابق النص تماماً. العنوان D هو مجرد اختيار تقريبي ويجب التحقق منه بالرجوع إلى المصدر الأصلي.`,
      en: `Lea cycles to work, combining an enjoyable activity with an environmentally friendly action. Note: none of the headings is an exact match. Heading D is only an approximate choice and should be checked against the original source.`
    }
  },
  {
    id: 3,
    contenu: `Wir merken deutlich, dass Getränke in Glasflaschen wieder beliebter werden, besonders Mineralwasser, berichtet Jürgen Fischer auf der Getränkemesse in Düsseldorf. Auch die Verkaufszahlen bestätigen diesen Trend. Dabei sind Glasflaschen nicht unbedingt besser für die Umwelt als Plastikflaschen. Der Grund ist der teilweise lange Transport. Für Milch zum Beispiel werden die Glasflaschen durchschnittlich 721 Kilometer transportiert, bevor sie beim Verbraucher ankommen.`,
    traduction: {
      fr: `Nous constatons clairement que les boissons dans des bouteilles en verre redeviennent populaires, en particulier l'eau minérale, rapporte Jürgen Fischer au salon des boissons de Düsseldorf. Les chiffres de vente confirment également cette tendance. Pourtant, les bouteilles en verre ne sont pas nécessairement meilleures pour l'environnement que les bouteilles en plastique. La raison est notamment liée aux longues distances de transport. Pour le lait, par exemple, les bouteilles en verre parcourent en moyenne 721 kilomètres avant d'arriver chez le consommateur.`,
      ar: `نلاحظ بوضوح أن المشروبات المعبأة في قوارير زجاجية أصبحت أكثر شعبية من جديد، وخاصة المياه المعدنية، حسب ما صرح به يورغن فيشر في معرض المشروبات بمدينة دوسلدورف. وتؤكد أرقام المبيعات هذا الاتجاه أيضاً. ومع ذلك، فإن القوارير الزجاجية ليست بالضرورة أفضل للبيئة من القوارير البلاستيكية. ويرجع ذلك إلى مسافات النقل الطويلة أحياناً. فعلى سبيل المثال، تُنقل قوارير الحليب الزجاجية لمسافة 721 كيلومتراً في المتوسط قبل وصولها إلى المستهلك.`,
      en: `We can clearly see that drinks in glass bottles are becoming popular again, especially mineral water, reports Jürgen Fischer at the beverage fair in Düsseldorf. Sales figures also confirm this trend. However, glass bottles are not necessarily better for the environment than plastic bottles. One reason is the sometimes long transport distance. For milk, for example, glass bottles travel an average of 721 kilometres before reaching consumers.`
    },
    explication: {
      fr: `Le texte explique que les bouteilles en verre ne sont pas toujours meilleures pour l'environnement. Leur transport sur de longues distances peut aussi avoir un impact écologique important.`,
      ar: `يوضح النص أن القوارير الزجاجية ليست دائماً أفضل للبيئة، لأن نقلها لمسافات طويلة قد يكون له تأثير بيئي مهم.`,
      en: `The text explains that glass bottles are not always better for the environment because transporting them over long distances can also have a significant environmental impact.`
    }
  },
  {
    id: 4,
    contenu: `Am 25. November beginnt wieder der Frankfurter Weihnachtsmarkt. Los geht es um 17:05 Uhr mit einem Glockenspiel von der Nikolaikirche. Danach gibt es eine Rede des Bürgermeisters. Es ist für mich immer etwas ganz Besonderes, den Weihnachtsbaum mit seinen 6500 Lichtern zu sehen, erzählt dieser der Frankfurter Rundschau. 700 Sterne sollen den Markt verschönern. Das hr-Radio-Abendprogramm sorgt für gemütliche Stimmung mit Weihnachtsliedern.`,
    traduction: {
      fr: `Le 25 novembre, le marché de Noël de Francfort ouvrira de nouveau ses portes. Le programme commencera à 17 h 05 par un carillon provenant de l'église Saint-Nicolas. Ensuite, le maire prononcera un discours. « C'est toujours quelque chose de très spécial pour moi de voir le sapin de Noël avec ses 6 500 lumières », raconte-t-il au journal Frankfurter Rundschau. Sept cents étoiles doivent embellir le marché. Le programme radiophonique du soir de la chaîne hr créera une ambiance chaleureuse avec des chants de Noël.`,
      ar: `في 25 نوفمبر، سيفتتح سوق عيد الميلاد في فرانكفورت من جديد. يبدأ البرنامج في الساعة 17:05 بعزف أجراس كنيسة نيكولاي. بعد ذلك سيلقي رئيس البلدية كلمة. ويقول للصحيفة إنه يشعر دائماً بشيء مميز عند رؤية شجرة عيد الميلاد التي تزينها 6500 مصباح. كما ستزين 700 نجمة السوق، وسيقدم البرنامج المسائي لإذاعة hr أجواء دافئة مع أغاني عيد الميلاد.`,
      en: `The Frankfurt Christmas market opens again on 25 November. It begins at 5:05 p.m. with a carillon from St Nicholas Church. This is followed by a speech by the mayor. "It is always something very special for me to see the Christmas tree with its 6,500 lights," he tells the Frankfurter Rundschau newspaper. Seven hundred stars will decorate the market. The hr evening radio programme will create a cosy atmosphere with Christmas songs.`
    },
    explication: {
      fr: `Le passage annonce l'ouverture du marché de Noël de Francfort. Il précise l'heure de début et indique que le maire prononcera un discours. Le titre parle donc de l'ouverture du marché par le maire.`,
      ar: `يتحدث النص عن افتتاح سوق عيد الميلاد في فرانكفورت، ويذكر أن رئيس البلدية سيلقي كلمة خلال الافتتاح.`,
      en: `The passage announces the opening of the Frankfurt Christmas market and mentions that the mayor will give a speech.`
    }
  },
  {
    id: 5,
    contenu: `Ein Spaziergang in der Regensburger Altstadt ist in der Weihnachtszeit besonders schön. Im Schatten des Alten Rathauses lädt der Lucreziamarkt zum Träumen ein. Suchen Sie noch ein besonderes Geschenk? Dann sind Sie dort genau richtig, denn Handwerker präsentieren und verkaufen ihre Produkte aus Metall, Glas oder Holz. Auch Kreativen wird eine Bühne für Musik und Theater geboten. Außerdem gibt es heißen Apfelsaft aus der Region.`,
    traduction: {
      fr: `Une promenade dans la vieille ville de Ratisbonne est particulièrement agréable pendant la période de Noël. À l'ombre de l'ancien hôtel de ville, le marché Lucrezia invite à rêver. Vous cherchez encore un cadeau original ? Vous êtes au bon endroit : des artisans présentent et vendent leurs créations en métal, en verre ou en bois. Une scène est également mise à la disposition des artistes pour la musique et le théâtre. On y trouve aussi du jus de pomme chaud de la région.`,
      ar: `تكون النزهة في المدينة القديمة بريغنسبورغ جميلة بشكل خاص خلال فترة عيد الميلاد. في ظل مبنى البلدية القديم، يدعو سوق لوكريتسيا الزوار إلى الاستمتاع بأجواء ساحرة. هل تبحثون عن هدية مميزة؟ إذن أنتم في المكان المناسب، حيث يعرض الحرفيون منتجاتهم المصنوعة من المعدن والزجاج والخشب ويبيعونها. كما تتوفر منصة للفنانين لتقديم الموسيقى والعروض المسرحية. ويمكن أيضاً الاستمتاع بعصير التفاح الساخن من المنطقة.`,
      en: `A walk through Regensburg's old town is especially beautiful during the Christmas season. In the shadow of the Old Town Hall, the Lucrezia market invites visitors to dream. Are you still looking for a special gift? Then this is the right place: craftspeople display and sell their products made of metal, glass or wood. Creative people are also offered a stage for music and theatre. There is also hot apple juice from the region.`
    },
    explication: {
      fr: `Le texte présente un marché de Noël consacré à l'artisanat et à la créativité. On y trouve des objets faits à la main, ainsi que des activités musicales et théâtrales.`,
      ar: `يعرض النص سوقاً لعيد الميلاد يهتم بالحرف اليدوية والإبداع. يمكن شراء منتجات مصنوعة يدوياً والاستمتاع بالموسيقى والمسرح.`,
      en: `The text describes a Christmas market focused on crafts and creativity, with handmade products as well as music and theatre.`
    }
  }
]

const ueberschriften: Ueberschrift[] = [
  {
    id: 'A',
    text: 'Bürgermeister eröffnet Weihnachtsmarkt',
    traduction: {
      fr: 'Le maire inaugure le marché de Noël',
      ar: 'رئيس البلدية يفتتح سوق عيد الميلاد',
      en: 'Mayor opens Christmas market'
    },
    explication: {
      fr: `Le maire participe officiellement à l'ouverture du marché de Noël.`,
      ar: `يشارك رئيس البلدية رسمياً في افتتاح سوق عيد الميلاد.`,
      en: `The mayor officially takes part in opening the Christmas market.`
    }
  },
  {
    id: 'B',
    text: 'Glasflaschen nicht so gut wie gedacht',
    traduction: {
      fr: 'Les bouteilles en verre ne sont pas aussi bonnes qu on le pense',
      ar: 'القوارير الزجاجية ليست جيدة كما يُعتقد',
      en: 'Glass bottles are not as good as people think'
    },
    explication: {
      fr: `Le transport des bouteilles en verre peut avoir un impact négatif sur l'environnement.`,
      ar: `قد يكون لنقل القوارير الزجاجية تأثير سلبي على البيئة.`,
      en: `Transporting glass bottles can have a negative environmental impact.`
    }
  },
  {
    id: 'C',
    text: 'Innenstadt mit Christbäumen geschmückt',
    traduction: {
      fr: 'Le centre-ville décoré avec des sapins de Noël',
      ar: 'تزيين وسط المدينة بأشجار عيد الميلاد',
      en: 'City centre decorated with Christmas trees'
    },
    explication: {
      fr: `Ce titre parle de décorations de Noël installées dans le centre-ville.`,
      ar: `يتحدث العنوان عن زينة عيد الميلاد في وسط المدينة.`,
      en: `This heading refers to Christmas decorations in the city centre.`
    }
  },
  {
    id: 'D',
    text: 'Laufend die Welt vom Müll befreien',
    traduction: {
      fr: 'Débarrasser le monde des déchets en courant',
      ar: 'تنظيف العالم من النفايات أثناء الجري',
      en: 'Cleaning the world of rubbish while running'
    },
    explication: {
      fr: `Ce titre évoque une activité sportive associée au ramassage des déchets. Il ne correspond pas exactement au texte 2 et doit être vérifié avec la source originale.`,
      ar: `يشير العنوان إلى نشاط رياضي مرتبط بجمع النفايات. لكنه لا يطابق النص الثاني تماماً، ويجب التحقق منه بالرجوع إلى المصدر الأصلي.`,
      en: `This heading suggests a sport combined with collecting rubbish. It does not exactly match text 2 and should be checked against the original source.`
    }
  },
  {
    id: 'E',
    text: 'Mit der eigenen Dose in den Supermarkt',
    traduction: {
      fr: 'Aller au supermarché avec sa propre boîte',
      ar: 'الذهاب إلى المتجر باستعمال علبة خاصة',
      en: 'Taking your own container to the supermarket'
    },
    explication: {
      fr: `Il s'agit de faire ses achats sans emballages jetables, en utilisant ses propres contenants.`,
      ar: `يتعلق الأمر بالتسوق دون أغلفة بلاستيكية باستعمال أوعية خاصة.`,
      en: `It refers to shopping without disposable packaging by using your own containers.`
    }
  },
  {
    id: 'F',
    text: 'Neue Sportart aus Schweden',
    traduction: {
      fr: 'Un nouveau sport venu de Suède',
      ar: 'رياضة جديدة من السويد',
      en: 'A new sport from Sweden'
    },
    explication: {
      fr: `Ce titre annonce une nouvelle discipline sportive originaire de Suède.`,
      ar: `يشير العنوان إلى رياضة جديدة مصدرها السويد.`,
      en: `This heading refers to a new sport originating in Sweden.`
    }
  },
  {
    id: 'G',
    text: 'Plastikflaschen immer beliebter',
    traduction: {
      fr: 'Les bouteilles en plastique de plus en plus populaires',
      ar: 'القوارير البلاستيكية تزداد شعبية',
      en: 'Plastic bottles becoming increasingly popular'
    },
    explication: {
      fr: `Ce titre parle d'une hausse de popularité des bouteilles en plastique.`,
      ar: `يتحدث العنوان عن تزايد شعبية القوارير البلاستيكية.`,
      en: `This heading refers to the growing popularity of plastic bottles.`
    }
  },
  {
    id: 'H',
    text: 'Regionale Produkte im Supermarkt',
    traduction: {
      fr: 'Des produits régionaux au supermarché',
      ar: 'منتجات محلية في السوبرماركت',
      en: 'Regional products in the supermarket'
    },
    explication: {
      fr: `Le titre concerne la vente de produits provenant de la région.`,
      ar: `يتعلق العنوان ببيع المنتجات القادمة من المنطقة.`,
      en: `The heading concerns products that come from the local region.`
    }
  },
  {
    id: 'I',
    text: 'Supermarkt setzt auf Plastik',
    traduction: {
      fr: 'Le supermarché mise sur le plastique',
      ar: 'السوبرماركت يعتمد على البلاستيك',
      en: 'Supermarket relies on plastic'
    },
    explication: {
      fr: `Ce titre évoque un supermarché qui utilise ou privilégie les emballages en plastique.`,
      ar: `يشير العنوان إلى متجر يعتمد على الأغلفة البلاستيكية.`,
      en: `This heading describes a supermarket that uses or favours plastic packaging.`
    }
  },
  {
    id: 'J',
    text: 'Weihnachtsmarkt für Kunst-Begeisterte',
    traduction: {
      fr: 'Un marché de Noël pour les passionnés d’art',
      ar: 'سوق عيد الميلاد لمحبي الفن',
      en: 'Christmas market for art lovers'
    },
    explication: {
      fr: `Le marché propose de l'artisanat, des créations artistiques, de la musique et du théâtre.`,
      ar: `يقدم السوق الحرف اليدوية والأعمال الفنية والموسيقى والمسرح.`,
      en: `The market offers crafts, artistic creations, music and theatre.`
    }
  }
]

const korrekt: Record<number, string> = {
  1: 'E',
  2: 'D',
  3: 'B',
  4: 'A',
  5: 'J'
}

export default function ExerciceMoritz() {
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
    setTraductionsTextes([])
    setExplicationsTextes([])
    setDetailsTitres([])
  }

  // Fonction générique : accepte les identifiants numériques et alphabétiques.
  const basculer = <T extends number | string>(
    id: T,
    setListe: Dispatch<SetStateAction<T[]>>
  ) => {
    setListe(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
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
            <span className="brand-white">Deutsch</span>
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
          <h1>Moritz</h1>
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
                        basculer(texte.id, setTraductionsTextes)
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
                        basculer(texte.id, setExplicationsTextes)
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
          background: #F5F6F8;
          color: #172B4D;
          font-family: Arial, sans-serif;
        }

        .exercise-header {
          height: 68px;
          background: #172B4D;
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

        .back-link svg {
          color: #D6B56D;
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
          color: #D6B56D;
          transform: translateY(-3px);
        }

        .brand-white {
          color: white;
          margin-right: 5px;
        }

        .brand-gold {
          color: #D6B56D;
        }

        .exercise-content {
          max-width: 1400px;
          margin: auto;
          padding: 30px 24px 60px;
        }

        .breadcrumb {
          font-size: 12px;
          color: #8B96A6;
          margin-bottom: 22px;
        }

        .breadcrumb span {
          margin: 0 8px;
          color: #D6B56D;
        }

        .exercise-hero {
          background: linear-gradient(120deg, #172B4D, #294B78);
          border-radius: 17px;
          color: white;
          padding: 30px 34px;
          margin-bottom: 22px;
        }

        .hero-label {
          color: #D6B56D;
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
          color: #D6B56D;
        }

        .progress-track {
          height: 7px;
          background: #ffffff30;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #D6B56D;
          border-radius: 10px;
          transition: width .2s;
        }

        .language-bar {
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

        .language-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #172B4D;
          font-size: 13px;
          font-weight: 700;
        }

        .language-label svg {
          color: #A18142;
        }

        .language-bar select {
          border: 1px solid #D9DFE8;
          border-radius: 8px;
          padding: 9px 13px;
          background: #F9FAFC;
          color: #172B4D;
          font-size: 13px;
          cursor: pointer;
        }

        .language-hint {
          font-size: 11px;
          color: #8792A2;
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
          color: #172B4D;
        }

        .section-hint {
          color: #7C8797;
          font-size: 12px;
          line-height: 1.7;
          margin: 0 0 17px;
        }

        .text-card {
          background: white;
          border: 1px solid #E5E9EF;
          border-radius: 13px;
          padding: 22px;
          margin-bottom: 18px;
          transition: .2s;
        }

        .text-card.target {
          border: 2px dashed #D6B56D;
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
          background: #172B4D;
          color: #D6B56D;
          border-radius: 9px;
          font-weight: 700;
        }

        .empty-slot {
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

        .text-card.target .empty-slot {
          border-color: #D6B56D;
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
          background: #172B4D;
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
          background: #F8FAFC;
          color: #53647A;
          font-size: 12px;
          cursor: pointer;
        }

        .help-button:hover,
        .help-button.active {
          border-color: #D6B56D;
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
          border-left: 3px solid #D6B56D;
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
          border: 1px solid #E5E9EF;
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
          color: #A18142;
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
          border: 1px solid #E5E9EF;
          border-radius: 10px;
          padding: 9px;
          background: #fff;
        }

        .title-item.chosen {
          border-color: #D6B56D;
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
          border-color: #D6B56D;
          background: #FFFCF5;
        }

        .title-option.selected {
          border: 2px solid #D6B56D;
          background: #FFFCF5;
        }

        .title-option.used {
          opacity: .55;
          cursor: default;
          background: #F5F6F8;
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
          color: #172B4D;
        }

        .title-detail {
          margin-top: 7px;
          padding: 12px;
          background: #F8FAFC;
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
          border-bottom: 1px solid #E1E6ED;
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
          background: #172B4D;
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
          color: #A18142;
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
      `}</style>
    </main>
  )
}

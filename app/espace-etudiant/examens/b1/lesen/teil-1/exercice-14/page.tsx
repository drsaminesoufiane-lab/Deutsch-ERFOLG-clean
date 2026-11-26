
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
    contenu: "Schätzungen zufolge werden weltweit täglich etwa drei Milliarden Tassen Kaffee getrunken. Viele benötigen das Koffein, um wach in den Tag zu starten. Aber ab einer bestimmten Menge kann Koffein zu einem erhöhten Blutdruck führen. Laut Wissenschaftlern gilt dieser als einer der wichtigsten Risikofaktoren für Herz-Kreislauf-Erkrankungen. Sie stellten fest: Bei mehr als sechs Tassen Kaffee pro Tag nimmt das Risiko für Herzerkrankungen um bis zu 22 Prozent zu.",
    traduction: {
      fr: "Selon les estimations, environ trois milliards de tasses de café sont consommées chaque jour dans le monde. Beaucoup de personnes ont besoin de caféine pour commencer leur journée en étant bien éveillées. Mais à partir d'une certaine quantité, la caféine peut entraîner une augmentation de la tension artérielle. Selon les scientifiques, celle-ci constitue l'un des principaux facteurs de risque des maladies cardiovasculaires. Ils ont constaté que boire plus de six tasses de café par jour augmente jusqu'à 22 % le risque de maladies cardiaques.",
      ar: "وفقاً للتقديرات، يتم شرب حوالي ثلاثة مليارات كوب من القهوة يومياً في جميع أنحاء العالم. يحتاج الكثير من الناس إلى الكافيين لبدء يومهم بنشاط ويقظة. لكن ابتداءً من كمية معينة، يمكن أن يؤدي الكافيين إلى ارتفاع ضغط الدم. ويعتبر العلماء ارتفاع ضغط الدم أحد أهم عوامل خطر الإصابة بأمراض القلب والأوعية الدموية. وقد توصلوا إلى أن شرب أكثر من ستة أكواب من القهوة يومياً يزيد خطر الإصابة بأمراض القلب بنسبة تصل إلى 22%.",
      en: "According to estimates, around three billion cups of coffee are consumed worldwide every day. Many people need caffeine to start their day feeling awake. However, from a certain amount onwards, caffeine can cause high blood pressure. Scientists consider this one of the most important risk factors for cardiovascular diseases. They found that drinking more than six cups of coffee per day increases the risk of heart disease by up to 22 percent."
    },
    explication: {
      fr: "Le texte met en garde contre une consommation excessive de café. Au-delà de six tasses par jour, le risque de maladies cardiaques peut augmenter. Le café est donc présenté comme un produit potentiellement dangereux lorsqu'on en consomme trop. La bonne réponse est I.",
      ar: "يحذر النص من الإفراط في شرب القهوة. فتناول أكثر من ستة أكواب يومياً قد يزيد خطر الإصابة بأمراض القلب. لذلك يقدم النص القهوة كمادة قد تصبح خطيرة عند استهلاكها بكميات كبيرة. الإجابة الصحيحة هي I.",
      en: "The text warns against excessive coffee consumption. Drinking more than six cups a day can increase the risk of heart disease. Coffee is therefore presented as something that can become dangerous when consumed in excess. The correct answer is I."
    }
  },
  {
    id: 2,
    contenu: "Um den Kreislauf in Schwung zu bringen, trinken viele Menschen Kaffee. Vor allem, wenn sie mehrere Stunden arbeiten und sich konzentrieren müssen. Diese Energie durch das Koffein hält aber nicht sehr lange, denn der Kreislauf sinkt wieder und die Müdigkeit kehrt zurück. Vor allem bei hohen Temperaturen sollte man nicht zu viel Kaffee trinken, weil einen das noch mehr ins Schwitzen bringt.",
    traduction: {
      fr: "Pour stimuler leur circulation sanguine, beaucoup de personnes boivent du café, surtout lorsqu'elles doivent travailler et se concentrer pendant plusieurs heures. Cependant, l'énergie apportée par la caféine ne dure pas très longtemps, car la circulation ralentit à nouveau et la fatigue revient. En particulier lorsqu'il fait très chaud, il ne faut pas boire trop de café, car cela fait transpirer encore davantage.",
      ar: "يشرب الكثير من الناس القهوة لتنشيط الدورة الدموية، خاصة عندما يضطرون إلى العمل والتركيز لعدة ساعات. لكن الطاقة التي يوفرها الكافيين لا تدوم طويلاً، إذ تعود الدورة الدموية إلى الانخفاض ويعود الشعور بالتعب. وخاصة في درجات الحرارة المرتفعة، ينبغي عدم شرب الكثير من القهوة لأنها تجعل الشخص يتعرق أكثر.",
      en: "Many people drink coffee to stimulate their circulation, especially when they have to work and concentrate for several hours. However, the energy provided by caffeine does not last very long, as circulation slows down again and tiredness returns. Especially in hot weather, people should avoid drinking too much coffee because it makes them sweat even more."
    },
    explication: {
      fr: "Le texte conseille de limiter la consommation de café lorsqu'il fait chaud. Le café peut augmenter la transpiration, ce qui est particulièrement désagréable en période de fortes températures. Le titre B correspond à cette recommandation.",
      ar: "ينصح النص بتقليل شرب القهوة عندما يكون الطقس حاراً، لأن القهوة قد تزيد من التعرق، وهو أمر مزعج خاصة في درجات الحرارة المرتفعة. لذلك يناسبه العنوان B.",
      en: "The text advises limiting coffee consumption in hot weather. Coffee can increase sweating, which is particularly unpleasant when temperatures are high. Heading B matches this advice."
    }
  },
  {
    id: 3,
    contenu: "Wer eine neue Arbeitsstelle sucht, sollte sich über Folgendes im Klaren sein: Berufliches Pendeln wird oftmals als anstrengend angesehen. Eine gesundheitliche Belastung für viele Pendler ist zu wenig Schlaf. Wer nicht genug schläft, wird oft müde und unkonzentriert. Gründe für Schlafstörungen können auch die vielen Alltagsprobleme von Pendlern sein: Verspätungen, Staus, Baustellen oder einfach nur viel Verkehr.",
    traduction: {
      fr: "Toute personne qui cherche un nouvel emploi devrait être consciente de ce qui suit : les déplacements quotidiens entre le domicile et le travail sont souvent considérés comme fatigants. Le manque de sommeil constitue un problème de santé pour de nombreux navetteurs. Une personne qui ne dort pas suffisamment devient souvent fatiguée et a du mal à se concentrer. Les troubles du sommeil peuvent également être causés par les nombreux problèmes quotidiens rencontrés pendant les trajets : retards, embouteillages, travaux ou simplement une circulation très dense.",
      ar: "ينبغي لكل من يبحث عن عمل جديد أن يكون على دراية بما يلي: غالباً ما تعتبر التنقلات اليومية بين المنزل والعمل أمراً مرهقاً. ويعد نقص النوم مشكلة صحية بالنسبة إلى العديد من الأشخاص الذين يتنقلون يومياً. فالشخص الذي لا ينام بشكل كافٍ يشعر غالباً بالتعب ويفقد القدرة على التركيز. كما يمكن أن تنتج اضطرابات النوم عن المشاكل اليومية أثناء التنقل، مثل التأخر والازدحام المروري وأشغال الطرق أو كثافة حركة المرور.",
      en: "Anyone looking for a new job should be aware of the following: commuting to work is often considered exhausting. Lack of sleep is a health problem for many commuters. People who do not sleep enough often become tired and lose concentration. Sleep problems can also be caused by the many everyday difficulties commuters face: delays, traffic jams, roadworks or simply heavy traffic."
    },
    explication: {
      fr: "Le texte explique que les déplacements domicile-travail peuvent provoquer du stress et des problèmes de sommeil. Les retards, les embouteillages et les travaux rendent les trajets fatigants. Le titre H résume cette relation entre le stress du trajet et le manque de sommeil.",
      ar: "يوضح النص أن التنقل اليومي بين المنزل والعمل قد يسبب التوتر ومشاكل النوم. فالتأخر والازدحام وأشغال الطرق تجعل التنقل مرهقاً. العنوان H يلخص العلاقة بين ضغط التنقل ونقص النوم.",
      en: "The text explains that commuting can cause stress and sleep problems. Delays, traffic jams and roadworks make journeys exhausting. Heading H summarizes the link between commuting stress and lack of sleep."
    }
  },
  {
    id: 4,
    contenu: "Ist der Vollmond daran schuld, dass wir nachts schlecht schlafen? Bisher konnte noch keine Studie zu 100 Prozent beweisen, dass der Vollmond wirklich zu Schlafstörungen führt. Allerdings vermutet man, dass die Qualität des Schlafes bei manchen durch die Helligkeit des Vollmondes leidet. Allein die Erwartung, bei einer Vollmondnacht schlechter zu schlafen, kann diesen Effekt auslösen. Deshalb raten Schlafforscher sensiblen Menschen dazu, die Schlafzimmer abzudunkeln.",
    traduction: {
      fr: "La pleine lune est-elle responsable de notre mauvais sommeil pendant la nuit ? Jusqu'à présent, aucune étude n'a pu prouver à 100 % que la pleine lune provoque réellement des troubles du sommeil. On suppose toutefois que, chez certaines personnes, la qualité du sommeil est affectée par la luminosité de la pleine lune. Le simple fait de s'attendre à mal dormir pendant une nuit de pleine lune peut déclencher cet effet. C'est pourquoi les chercheurs spécialistes du sommeil conseillent aux personnes sensibles d'assombrir leur chambre.",
      ar: "هل القمر المكتمل هو المسؤول عن نومنا السيئ ليلاً؟ حتى الآن، لم تتمكن أي دراسة من إثبات أن البدر يؤدي فعلاً إلى اضطرابات النوم بنسبة 100%. ومع ذلك، يُعتقد أن ضوء القمر المكتمل يؤثر سلباً في جودة النوم لدى بعض الأشخاص. بل إن مجرد توقع النوم بشكل سيئ في ليلة اكتمال القمر قد يؤدي إلى هذا التأثير. لذلك ينصح باحثو النوم الأشخاص الحساسين بتعتيم غرف نومهم.",
      en: "Is the full moon responsible for our poor sleep at night? So far, no study has been able to prove with complete certainty that the full moon really causes sleep disorders. However, it is suspected that the brightness of the full moon affects sleep quality in some people. Even expecting to sleep badly during a full-moon night can trigger this effect. Sleep researchers therefore advise sensitive people to darken their bedrooms."
    },
    explication: {
      fr: "Le texte évoque l'influence possible de la luminosité de la pleine lune sur le sommeil. Certaines personnes peuvent avoir un sommeil plus léger pendant les nuits très lumineuses. Le titre F correspond à l'idée d'un sommeil perturbé par une nuit claire.",
      ar: "يتحدث النص عن التأثير المحتمل لضوء القمر المكتمل على النوم. فقد يصبح النوم أقل عمقاً لدى بعض الأشخاص خلال الليالي المضيئة. لذلك يناسبه العنوان F الذي يشير إلى النوم الخفيف في ليلة مضيئة.",
      en: "The text discusses the possible effect of full-moon brightness on sleep. Some people may sleep less deeply during very bright nights. Heading F matches the idea of light sleep during a bright night."
    }
  },
  {
    id: 5,
    contenu: "Kann Kaffeetrinken doch gesund sein? Wenn man englischen Studien glaubt, dann gibt es mehr gesundheitliche Vorteile als Nachteile, eine gute Nachricht für regelmäßige Kaffeegenießer. Den größten positiven Effekt sollen diejenigen erreichen, die drei bis vier Tassen Kaffee am Tag trinken. Laut Forschern soll das Kaffeetrinken das Risiko für bestimmte Krankheiten senken, wie zum Beispiel Krebserkrankungen. Auf den Kreislauf soll dieses beliebte Getränk keine negativen Auswirkungen haben.",
    traduction: {
      fr: "Et si boire du café était finalement bon pour la santé ? Selon des études anglaises, les avantages pour la santé seraient plus nombreux que les inconvénients. C'est une bonne nouvelle pour les amateurs réguliers de café. Les effets positifs les plus importants seraient obtenus par ceux qui boivent trois à quatre tasses de café par jour. Selon les chercheurs, la consommation de café pourrait réduire le risque de certaines maladies, comme certains cancers. Cette boisson populaire n'aurait pas d'effets négatifs sur la circulation sanguine.",
      ar: "هل يمكن أن يكون شرب القهوة مفيداً للصحة؟ وفقاً لدراسات بريطانية، فإن فوائد القهوة الصحية أكثر من أضرارها، وهذا خبر سار لمحبي القهوة المنتظمين. ويُفترض أن الأشخاص الذين يشربون ثلاثة إلى أربعة أكواب يومياً يحصلون على أكبر فائدة إيجابية. ووفقاً للباحثين، يمكن أن يقلل شرب القهوة من خطر الإصابة ببعض الأمراض، مثل السرطان. كما يُفترض أن هذا المشروب المحبوب ليس له تأثيرات سلبية على الدورة الدموية.",
      en: "Could drinking coffee actually be healthy? According to English studies, coffee has more health benefits than disadvantages, which is good news for regular coffee drinkers. Those who drink three to four cups a day are said to experience the greatest positive effect. Researchers suggest that drinking coffee can reduce the risk of certain diseases, such as cancer. This popular drink is not thought to have negative effects on circulation."
    },
    explication: {
      fr: "Contrairement au premier texte, celui-ci présente les effets positifs du café sur la santé. Une consommation modérée de trois à quatre tasses par jour pourrait réduire le risque de certaines maladies. Le titre C exprime donc l'idée d'un plaisir qui fait du bien.",
      ar: "على عكس النص الأول، يعرض هذا النص الآثار الإيجابية للقهوة على الصحة. فقد يساعد شرب ثلاثة إلى أربعة أكواب يومياً باعتدال على تقليل خطر بعض الأمراض. لذلك يعبر العنوان C عن فكرة متعة تعود بالنفع على الصحة.",
      en: "Unlike the first text, this one presents the positive health effects of coffee. Moderate consumption of three to four cups a day may reduce the risk of certain diseases. Heading C therefore expresses the idea of enjoyment that is good for us."
    }
  }
]

const ueberschriften = [
  {
    id: 'A',
    text: 'Autofahrer schlafen schlechter',
    traduction: {
      fr: 'Les automobilistes dorment moins bien',
      ar: 'سائقو السيارات ينامون بشكل أسوأ',
      en: 'Drivers sleep worse'
    },
    explication: {
      fr: 'Ce titre concerne les automobilistes et leurs problèmes de sommeil.',
      ar: 'يتعلق هذا العنوان بسائقي السيارات ومشاكل النوم لديهم.',
      en: 'This heading concerns drivers and their sleep problems.'
    }
  },
  {
    id: 'B',
    text: 'Dieses Getränk bei Hitze vermeiden',
    traduction: {
      fr: 'Éviter cette boisson lorsqu’il fait chaud',
      ar: 'تجنب هذا المشروب عندما يكون الطقس حاراً',
      en: 'Avoid this drink in hot weather'
    },
    explication: {
      fr: 'Ce titre conseille d’éviter de boire trop de café lorsqu’il fait chaud.',
      ar: 'ينصح هذا العنوان بتجنب شرب الكثير من القهوة عندما يكون الطقس حاراً.',
      en: 'This heading advises avoiding too much coffee in hot weather.'
    }
  },
  {
    id: 'C',
    text: 'Genuss, der uns gut tut',
    traduction: {
      fr: 'Un plaisir qui nous fait du bien',
      ar: 'متعة تعود علينا بالنفع',
      en: 'Enjoyment that is good for us'
    },
    explication: {
      fr: 'Ce titre présente le café comme une boisson qui peut avoir des effets positifs sur la santé.',
      ar: 'يقدم هذا العنوان القهوة كمشروب يمكن أن تكون له آثار إيجابية على الصحة.',
      en: 'This heading presents coffee as a drink that can have positive effects on health.'
    }
  },
  {
    id: 'D',
    text: 'Kaffee hat keinen Einfluss auf Gesundheit',
    traduction: {
      fr: 'Le café n’a aucune influence sur la santé',
      ar: 'القهوة ليس لها أي تأثير على الصحة',
      en: 'Coffee has no effect on health'
    },
    explication: {
      fr: 'Ce titre affirme que le café n’a aucun effet sur la santé, ce qui ne correspond pas aux textes.',
      ar: 'يؤكد هذا العنوان أن القهوة ليس لها أي تأثير على الصحة، وهو ما لا يتوافق مع النصوص.',
      en: 'This heading claims that coffee has no effect on health, which does not match the texts.'
    }
  },
  {
    id: 'E',
    text: 'Kaffeekonsum steigt auf sechs Tassen täglich',
    traduction: {
      fr: 'La consommation de café augmente jusqu’à six tasses par jour',
      ar: 'استهلاك القهوة يرتفع إلى ستة أكواب يومياً',
      en: 'Coffee consumption rises to six cups a day'
    },
    explication: {
      fr: 'Ce titre parle d’une augmentation de la quantité de café consommée chaque jour.',
      ar: 'يتحدث هذا العنوان عن ارتفاع كمية القهوة المستهلكة يومياً.',
      en: 'This heading refers to an increase in the amount of coffee consumed daily.'
    }
  },
  {
    id: 'F',
    text: 'Leichter Schlaf bei heller Nacht',
    traduction: {
      fr: 'Un sommeil léger pendant une nuit lumineuse',
      ar: 'نوم خفيف خلال ليلة مضيئة',
      en: 'Light sleep during a bright night'
    },
    explication: {
      fr: 'Ce titre correspond au texte sur la pleine lune et son influence possible sur la qualité du sommeil.',
      ar: 'يناسب هذا العنوان النص المتعلق بالبدر وتأثيره المحتمل على جودة النوم.',
      en: 'This heading matches the text about the full moon and its possible effect on sleep quality.'
    }
  },
  {
    id: 'G',
    text: 'Mehr trinken bei starker Hitze',
    traduction: {
      fr: 'Boire davantage lorsqu’il fait très chaud',
      ar: 'شرب المزيد من السوائل عندما يكون الجو شديد الحرارة',
      en: 'Drink more when it is very hot'
    },
    explication: {
      fr: 'Ce titre recommande de boire davantage pendant les périodes de forte chaleur.',
      ar: 'ينصح هذا العنوان بشرب المزيد من السوائل خلال فترات الحرارة الشديدة.',
      en: 'This heading recommends drinking more during periods of extreme heat.'
    }
  },
  {
    id: 'H',
    text: 'Stress auf dem Arbeitsweg führt zu Schlafmangel',
    traduction: {
      fr: 'Le stress des trajets domicile-travail entraîne un manque de sommeil',
      ar: 'التوتر أثناء التنقل إلى العمل يؤدي إلى نقص النوم',
      en: 'Commuting stress leads to lack of sleep'
    },
    explication: {
      fr: 'Ce titre résume les problèmes de sommeil liés aux retards, aux embouteillages et au stress des trajets.',
      ar: 'يلخص هذا العنوان مشاكل النوم المرتبطة بالتأخر والازدحام والتوتر أثناء التنقل.',
      en: 'This heading summarizes sleep problems caused by delays, traffic jams and commuting stress.'
    }
  },
  {
    id: 'I',
    text: 'Wenn Genussmittel gefährlich werden',
    traduction: {
      fr: 'Quand les produits de plaisir deviennent dangereux',
      ar: 'عندما تصبح المواد الممتعة خطيرة',
      en: 'When pleasurable substances become dangerous'
    },
    explication: {
      fr: 'Ce titre correspond aux risques liés à une consommation excessive de café.',
      ar: 'يناسب هذا العنوان المخاطر المرتبطة بالإفراط في شرب القهوة.',
      en: 'This heading refers to the risks associated with excessive coffee consumption.'
    }
  },
  {
    id: 'J',
    text: 'Wissenschaftler empfehlen Mittagsschlaf',
    traduction: {
      fr: 'Les scientifiques recommandent la sieste',
      ar: 'العلماء ينصحون بالقيلولة',
      en: 'Scientists recommend an afternoon nap'
    },
    explication: {
      fr: 'Ce titre parle de la sieste recommandée par des scientifiques, un sujet qui n’est pas abordé dans les textes.',
      ar: 'يتحدث هذا العنوان عن القيلولة التي ينصح بها العلماء، وهو موضوع غير موجود في النصوص.',
      en: 'This heading refers to naps recommended by scientists, a subject not discussed in the texts.'
    }
  }
]

const korrekt: Record<number, string> = {
  1: 'I',
  2: 'B',
  3: 'H',
  4: 'F',
  5: 'C'
}

export default function ExerciceKarla() {
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
          <h1>Karla</h1>
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

        .back-link svg {
          color: #b49760;
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

        .brand-white {
          color: white;
          margin-right: 5px;
        }

        .brand-gold {
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

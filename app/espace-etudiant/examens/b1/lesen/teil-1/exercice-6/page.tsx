
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

const textes: Texte[] = [
  {
    id: 1,
    contenu:
      'Immer wieder drehen indische Regisseure Szenen ihrer Kinofilme in den Schweizer Bergen. Warum nehmen sie die Strapazen und hohen Kosten einer solch langen Reise auf sich? Das Hamburger Abendblatt fragte eines dieser Filmteams auf dem Drehplatz im idyllischen Berner Oberland und erhielt spannende und heitere Antworten.',
    traduction: {
      fr: 'Encore et encore, des réalisateurs indiens tournent des scènes de leurs films dans les montagnes suisses. Pourquoi acceptent-ils les difficultés et les coûts élevés d’un si long voyage ? Le journal Hamburger Abendblatt a interrogé l’une de ces équipes de tournage sur son lieu de travail, dans la magnifique région de l’Oberland bernois, et a obtenu des réponses intéressantes et amusantes.',
      ar: 'يقوم مخرجون هنود مراراً بتصوير مشاهد من أفلامهم السينمائية في جبال سويسرا. لماذا يتحملون مشقة وتكاليف رحلة طويلة كهذه؟ طرحت صحيفة هامبورغر أبندبلات أسئلة على أحد فرق التصوير في منطقة بيرنر أوبرلاند الجميلة، وحصلت على أجوبة مثيرة وممتعة.',
      en: 'Indian directors repeatedly film scenes for their movies in the Swiss mountains. Why do they accept the difficulties and high costs of such a long journey? The Hamburger Abendblatt newspaper interviewed one of these film crews at its filming location in the beautiful Bernese Oberland and received interesting and amusing answers.',
    },
    explication: {
      fr: 'Le texte parle d’équipes de cinéma indiennes qui viennent tourner dans les montagnes suisses, plus précisément dans l’Oberland bernois. Le titre J correspond directement au lieu du tournage : « Filmaufnahmen im Berner Oberland ».',
      ar: 'يتحدث النص عن فرق سينمائية هندية تأتي للتصوير في جبال سويسرا، وبالتحديد في منطقة بيرنر أوبرلاند. العنوان J يتطابق مع مكان التصوير.',
      en: 'The text describes Indian film crews travelling to shoot scenes in the Swiss mountains, specifically in the Bernese Oberland. Heading J directly identifies the filming location.',
    },
  },
  {
    id: 2,
    contenu:
      'KIDTOURS – Ferien mit Kindern ist ein praktischer Ausflugsführer für Familien: mit 1000 Tipps, Tricks und Ideen für jeden Geschmack, jedes Alter und jedes Budget. Das übersichtliche, hübsch illustrierte Nachschlagewerk erhalten Sie für € 19,50 im Buchhandel oder direkt bei Werd Verlag, www.werd.net.',
    traduction: {
      fr: 'KIDTOURS – Vacances avec des enfants est un guide pratique de sorties pour les familles : il propose 1 000 conseils, astuces et idées pour tous les goûts, tous les âges et tous les budgets. Cet ouvrage de référence bien organisé et joliment illustré est disponible au prix de 19,50 € dans les librairies ou directement auprès de la maison d’édition Werd.',
      ar: 'كتاب KIDTOURS – العطل مع الأطفال هو دليل عملي للرحلات العائلية، ويحتوي على 1000 نصيحة وفكرة تناسب جميع الأذواق والأعمار والميزانيات. يمكن شراء هذا الكتاب المنظم والمزين بالصور مقابل 19.50 يورو من المكتبات أو مباشرة من دار النشر Werd.',
      en: 'KIDTOURS – Holidays with Children is a practical family outing guide, offering 1,000 tips, tricks and ideas for every taste, age and budget. This clearly organised and beautifully illustrated reference book costs €19.50 and is available in bookshops or directly from Werd Verlag.',
    },
    explication: {
      fr: 'Il s’agit d’une présentation publicitaire d’un livre destiné aux familles. Le livre propose des idées de sorties et d’activités avec les enfants. Le titre C annonce précisément un conseil de lecture pour les sorties en famille.',
      ar: 'النص عبارة عن إعلان عن كتاب مخصص للعائلات، يقدم أفكاراً ونصائح للرحلات والأنشطة مع الأطفال. العنوان C يتحدث عن كتاب مقترح للرحلات العائلية.',
      en: 'This is an advertisement for a book designed for families. It offers ideas and advice for outings with children. Heading C is a book recommendation for family excursions.',
    },
  },
  {
    id: 3,
    contenu:
      'Das Halbtax-Abo ist Ihr Schlüssel zu günstigen Reisen mit Bahn, Bus und Schiff und präsentiert sich im praktischen Kreditkartenformat. Schon beim Abo selbst können Sie kräftig sparen: Für ein Jahr Halbtax bezahlen Sie 150 Schweizer Franken. Und das ist noch nicht alles: Mit dem Halbtax-Abo sind Sie gut informiert: Zweimal jährlich erhalten Sie das Kundenmagazin mit vielen Reise-Ideen und exklusiven Reiseangeboten. Mit Ihrem Halbtax-Abo erhalten Sie 25% Preisnachlass auf Zugfahrten von der Schweiz nach Deutschland und Österreich, wenn Sie Ihre Fahrkarte in der Schweiz kaufen. SBB CFF FFS – Schweizerische Bundesbahnen.',
    traduction: {
      fr: 'L’abonnement demi-tarif est votre clé pour voyager à prix réduit en train, en bus et en bateau. Il se présente sous un format pratique de carte bancaire. Vous économisez déjà avec l’abonnement lui-même : vous payez 150 francs suisses pour une année. Et ce n’est pas tout : deux fois par an, vous recevez un magazine contenant de nombreuses idées de voyages et des offres exclusives. Avec cet abonnement, vous bénéficiez également d’une réduction de 25 % sur les trajets en train de la Suisse vers l’Allemagne et l’Autriche, si vous achetez votre billet en Suisse.',
      ar: 'اشتراك نصف السعر هو مفتاحك للسفر بتكلفة أقل بالقطار والحافلة والسفينة، ويأتي بحجم بطاقة بنكية عملي. يمكنك توفير المال من خلال الاشتراك نفسه: تدفع 150 فرنكاً سويسرياً مقابل سنة واحدة. كما تتلقى مرتين في السنة مجلة تحتوي على أفكار سفر وعروض حصرية. وبفضل هذا الاشتراك تحصل أيضاً على تخفيض بنسبة 25% على رحلات القطار من سويسرا إلى ألمانيا والنمسا عند شراء التذكرة في سويسرا.',
      en: 'The half-fare travel card is your key to cheaper journeys by train, bus and boat. It comes in a convenient credit-card format. You already save money with the subscription itself: one year costs 150 Swiss francs. In addition, you receive a customer magazine twice a year with travel ideas and exclusive offers. The card also gives you a 25% discount on train journeys from Switzerland to Germany and Austria when you buy your ticket in Switzerland.',
    },
    explication: {
      fr: 'Le texte présente un abonnement de transport valable un an, qui permet de voyager moins cher. Il coûte 150 francs suisses et offre notamment une réduction de 25 % sur certains trajets internationaux. Le titre B correspond à l’idée de voyager à prix réduit pendant une année.',
      ar: 'يقدم النص اشتراكاً للنقل لمدة سنة يسمح بالسفر بتكلفة أقل. ثمنه 150 فرنكاً سويسرياً، ويوفر تخفيضات من بينها 25% على بعض الرحلات الدولية. العنوان B يشير إلى السفر بسعر مناسب لمدة سنة.',
      en: 'The text presents a one-year transport subscription that makes travelling cheaper. It costs 150 Swiss francs and includes a 25% discount on certain international journeys. Heading B refers to affordable travel for one year.',
    },
  },
  {
    id: 4,
    contenu:
      'Dokumentarfilm und Seifenoper zusammen heißt Doku-Soap, stammt aus England und macht sich seit Jahren auch auf deutschen TV-Kanälen breit. Vor allem Privatsender haben sich als erfolgreiche Doku-Soap-Sender etabliert. In vielen TV-Serien kann man das wirkliche Leben von Menschen verfolgen und mit ihnen mitleben. Zurzeit besonders erfolgreich: die Sendung „Tausche Familie“, die täglich um 18 Uhr viele Zuschauer vor den Fernseher lockt.',
    traduction: {
      fr: 'Le mélange entre documentaire et feuilleton télévisé s’appelle « Doku-Soap ». Ce format vient d’Angleterre et s’est installé depuis plusieurs années sur les chaînes de télévision allemandes. Les chaînes privées ont notamment connu du succès avec ce genre de programme. Dans de nombreuses séries, on peut suivre la vraie vie de personnes et partager leurs expériences. En ce moment, l’émission « Tausche Familie », diffusée tous les jours à 18 heures, attire particulièrement de nombreux téléspectateurs.',
      ar: 'يُسمى الجمع بين الفيلم الوثائقي والمسلسل التلفزيوني «Doku-Soap». ظهر هذا النوع في إنجلترا وانتشر منذ سنوات على القنوات الألمانية. تتيح هذه البرامج للمشاهدين متابعة الحياة الحقيقية لأشخاص آخرين ومشاركة تجاربهم. ومن البرامج الناجحة حالياً برنامج «Tausche Familie» الذي يجذب الكثير من المشاهدين يومياً في الساعة السادسة مساءً.',
      en: 'The combination of documentary and soap opera is called a docu-soap. It originated in England and has become popular on German TV channels over the years. Many programmes allow viewers to follow people’s real lives and share their experiences. One particularly successful show is “Tausche Familie”, which attracts many viewers every day at 6 p.m.',
    },
    explication: {
      fr: 'Le texte explique le principe des Doku-Soaps : des émissions qui montrent la vie réelle de personnes. Il cite une émission quotidienne qui attire beaucoup de téléspectateurs. Le titre I correspond à la présentation de la réalité à la télévision, jour après jour.',
      ar: 'يشرح النص برامج تلفزيونية تعرض الحياة الحقيقية لأشخاص، ويذكر برنامجاً ناجحاً يُعرض يومياً. العنوان I يعبر عن مشاهدة جزء من الواقع كل يوم على التلفزيون.',
      en: 'The text explains docu-soaps, television programmes that show people’s real lives. It mentions a successful daily show. Heading I describes watching a piece of real life on television every day.',
    },
  },
  {
    id: 5,
    contenu:
      'Wir wollen dir bei der Berufswahl helfen: Die Deutsche Bahn, ein Unternehmen mit Zukunft. Viele Berufe ändern sich im Laufe der Zeit. Genauso wie die Interessen im Leben. Und trotzdem gibt es Neigungen und Fähigkeiten, die du lange Zeit in deinem Leben behalten wirst. So zum Beispiel die Freude am Kontakt mit Menschen. Oder die Begeisterung für fremde Sprachen. Oder das Arbeiten in der freien Natur und im Team. Oder das Interesse an Technik und die Freude am Handwerk. Je nachdem, wofür du dich interessierst, kannst du bei der Deutschen Bahn aus insgesamt 15 Lehrberufen wählen. Um die richtige Entscheidung zu treffen, lohnt es sich, sich gründlich zu informieren, zum Beispiel auf unserer Website www.bahn.de.',
    traduction: {
      fr: 'Nous voulons t’aider à choisir ton métier : la Deutsche Bahn est une entreprise tournée vers l’avenir. De nombreux métiers évoluent avec le temps, tout comme les intérêts personnels. Pourtant, certaines aptitudes et capacités restent présentes longtemps dans la vie : le plaisir de rencontrer des gens, l’intérêt pour les langues étrangères, le travail en plein air et en équipe, l’intérêt pour la technique ou le travail manuel. Selon tes centres d’intérêt, tu peux choisir parmi 15 formations professionnelles à la Deutsche Bahn. Pour prendre la bonne décision, il est utile de bien se renseigner, par exemple sur notre site Internet.',
      ar: 'نريد مساعدتك في اختيار مهنتك: شركة السكك الحديدية الألمانية هي شركة لها مستقبل. تتغير العديد من المهن مع مرور الوقت، وكذلك اهتمامات الإنسان. ومع ذلك، توجد ميولات وقدرات تبقى معك لفترة طويلة، مثل حب التواصل مع الناس، والاهتمام باللغات الأجنبية، والعمل في الطبيعة ضمن فريق، أو الاهتمام بالتكنولوجيا والأعمال اليدوية. حسب اهتماماتك، يمكنك الاختيار من بين 15 تكويناً مهنياً في شركة السكك الحديدية الألمانية.',
      en: 'We want to help you choose a career: Deutsche Bahn is a company with a future. Many professions change over time, just as people’s interests do. However, some abilities and interests remain with you for a long time, such as enjoying contact with people, being interested in foreign languages, working outdoors in a team, or having an interest in technology and crafts. Depending on your interests, you can choose from 15 vocational training programmes at Deutsche Bahn.',
    },
    explication: {
      fr: 'La Deutsche Bahn présente ses possibilités de formation et de carrière. Le texte mentionne 15 métiers en apprentissage, selon les intérêts et les compétences des candidats. Le titre E correspond à une entreprise offrant de nombreuses possibilités professionnelles.',
      ar: 'تعرض شركة السكك الحديدية الألمانية فرص التكوين والعمل لديها. يذكر النص وجود 15 مهنة للتكوين حسب اهتمامات وقدرات المرشحين. العنوان E يتحدث عن شركة توفر فرصاً مهنية متعددة.',
      en: 'Deutsche Bahn presents its training and career opportunities. The text mentions 15 vocational training options based on candidates’ interests and abilities. Heading E describes a company with many professional opportunities.',
    },
  },
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Neue Untersuchung über Familien in der Schweiz',
    traduction: {
      fr: 'Nouvelle étude sur les familles en Suisse',
      ar: 'دراسة جديدة حول العائلات في سويسرا',
      en: 'New study about families in Switzerland',
    },
    explication: {
      fr: 'Ce titre concerne une étude sur les familles suisses, qui n’est pas mentionnée dans les textes.',
      ar: 'يتعلق هذا العنوان بدراسة حول العائلات السويسرية، وهي غير مذكورة في النصوص.',
      en: 'This heading concerns a study about Swiss families, which is not mentioned in the texts.',
    },
  },
  {
    id: 'B',
    contenu: 'Ein Jahr preiswert reisen',
    traduction: {
      fr: 'Voyager à petit prix pendant un an',
      ar: 'السفر بتكلفة منخفضة لمدة سنة',
      en: 'Travel cheaply for one year',
    },
    explication: {
      fr: 'Le texte 3 parle d’un abonnement annuel qui permet de voyager à prix réduit.',
      ar: 'يتحدث النص 3 عن اشتراك سنوي يسمح بالسفر بتكلفة أقل.',
      en: 'Text 3 describes an annual subscription that allows people to travel more cheaply.',
    },
  },
  {
    id: 'C',
    contenu: 'Buchtipp: Ausflüge für Familien',
    traduction: {
      fr: 'Conseil de lecture : sorties en famille',
      ar: 'كتاب مقترح: رحلات عائلية',
      en: 'Book tip: Family outings',
    },
    explication: {
      fr: 'Le texte 2 présente un livre contenant des idées de sorties pour les familles.',
      ar: 'يعرض النص 2 كتاباً يحتوي على أفكار للرحلات العائلية.',
      en: 'Text 2 presents a book containing ideas for family outings.',
    },
  },
  {
    id: 'D',
    contenu: 'Bahnfahren im nächsten Jahr um 25% teurer!',
    traduction: {
      fr: 'Les voyages en train coûteront 25 % plus cher l’année prochaine !',
      ar: 'السفر بالقطار سيكون أغلى بنسبة 25% في السنة القادمة!',
      en: 'Train travel will be 25% more expensive next year!',
    },
    explication: {
      fr: 'Ce titre annonce une augmentation des prix des trains, alors que le texte 3 parle au contraire de réductions.',
      ar: 'يشير هذا العنوان إلى ارتفاع أسعار القطارات، بينما يتحدث النص 3 عن التخفيضات.',
      en: 'This heading announces a train price increase, whereas text 3 actually describes discounts.',
    },
  },
  {
    id: 'E',
    contenu: 'Ein Unternehmen mit vielen beruflichen Möglichkeiten',
    traduction: {
      fr: 'Une entreprise offrant de nombreuses possibilités professionnelles',
      ar: 'شركة توفر العديد من الفرص المهنية',
      en: 'A company with many career opportunities',
    },
    explication: {
      fr: 'Le texte 5 présente les 15 formations professionnelles proposées par la Deutsche Bahn.',
      ar: 'يعرض النص 5 خمسة عشر تكويناً مهنياً تقدمه شركة السكك الحديدية الألمانية.',
      en: 'Text 5 presents the 15 vocational training programmes offered by Deutsche Bahn.',
    },
  },
  {
    id: 'F',
    contenu: 'Neue Kindersendung im Fernsehen',
    traduction: {
      fr: 'Nouvelle émission pour enfants à la télévision',
      ar: 'برنامج جديد للأطفال على التلفزيون',
      en: 'New children’s programme on television',
    },
    explication: {
      fr: 'Aucun texte ne présente une nouvelle émission destinée aux enfants.',
      ar: 'لا يوجد نص يتحدث عن برنامج جديد مخصص للأطفال.',
      en: 'None of the texts presents a new television programme for children.',
    },
  },
  {
    id: 'G',
    contenu: 'Der Film soll echt sein: Schweizer Filmteam in Indien',
    traduction: {
      fr: 'Le film doit être authentique : une équipe suisse en Inde',
      ar: 'يجب أن يكون الفيلم واقعياً: فريق تصوير سويسري في الهند',
      en: 'The film should be authentic: Swiss film crew in India',
    },
    explication: {
      fr: 'Le texte 1 parle de réalisateurs indiens qui tournent en Suisse, et non d’une équipe suisse en Inde.',
      ar: 'يتحدث النص 1 عن مخرجين هنود يصورون في سويسرا، وليس عن فريق سويسري في الهند.',
      en: 'Text 1 is about Indian directors filming in Switzerland, not a Swiss crew filming in India.',
    },
  },
  {
    id: 'H',
    contenu: 'Wie man im Zug Leute kennen lernt',
    traduction: {
      fr: 'Comment faire des rencontres dans le train',
      ar: 'كيف تتعرف على أشخاص في القطار',
      en: 'How to meet people on the train',
    },
    explication: {
      fr: 'Aucun texte ne parle de rencontres ou de contacts entre voyageurs dans le train.',
      ar: 'لا يتحدث أي نص عن التعارف أو التواصل بين المسافرين في القطار.',
      en: 'None of the texts discusses meeting or talking to other passengers on a train.',
    },
  },
  {
    id: 'I',
    contenu: 'Jeden Tag ein Stück Wirklichkeit im Fernsehen',
    traduction: {
      fr: 'Un morceau de réalité chaque jour à la télévision',
      ar: 'جزء من الواقع كل يوم على التلفزيون',
      en: 'A piece of real life on television every day',
    },
    explication: {
      fr: 'Le texte 4 décrit les Doku-Soaps, des émissions qui permettent de suivre la vraie vie de personnes à la télévision.',
      ar: 'يصف النص 4 برامج تلفزيونية تعرض الحياة الحقيقية لأشخاص، ويمكن متابعتها يومياً.',
      en: 'Text 4 describes docu-soaps, television programmes that let viewers follow real people’s lives.',
    },
  },
  {
    id: 'J',
    contenu: 'Filmaufnahmen im Berner Oberland',
    traduction: {
      fr: 'Tournage de films dans l’Oberland bernois',
      ar: 'تصوير الأفلام في منطقة بيرنر أوبرلاند',
      en: 'Film shooting in the Bernese Oberland',
    },
    explication: {
      fr: 'Le texte 1 mentionne explicitement un tournage dans la région du Berner Oberland, en Suisse.',
      ar: 'يذكر النص 1 بشكل واضح تصوير مشاهد في منطقة بيرنر أوبرلاند بسويسرا.',
      en: 'Text 1 explicitly mentions filming in the Bernese Oberland region of Switzerland.',
    },
  },
]

const solutions: Record<number, string> = {
  1: 'J',
  2: 'C',
  3: 'B',
  4: 'I',
  5: 'E',
}

const nomsLangues: Record<Langue, string> = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English',
}

export default function PaulPage() {
  const [reponses, setReponses] = useState<Record<number, string>>({})
  const [selection, setSelection] = useState<string | null>(null)
  const [corrige, setCorrige] = useState(false)
  const [einzelPruefung, setEinzelPruefung] = useState<Record<number, boolean>>({})
  const [langue, setLangue] = useState<Langue>('fr')
  const [traductionsTextes, setTraductionsTextes] = useState<Record<number, boolean>>({})
  const [explicationsTextes, setExplicationsTextes] = useState<Record<number, boolean>>({})
  const [detailsTitres, setDetailsTitres] = useState<Record<string, boolean>>({})
  const [draggedTitre, setDraggedTitre] = useState<string | null>(null)

  const nombreReponses = Object.keys(reponses).length
  const score = textes.filter(
    (texte) => reponses[texte.id] === solutions[texte.id]
  ).length

  const choisir = (id: string) => {
    if (corrige) return
    setSelection((ancienne) => (ancienne === id ? null : id))
  }

  const assigner = (texteId: number, titreId: string) => {
    if (corrige) return

    setReponses((anciennes) => {
      const nouvelles = { ...anciennes }

      Object.keys(nouvelles).forEach((key) => {
        if (nouvelles[Number(key)] === titreId) {
          delete nouvelles[Number(key)]
        }
      })

      nouvelles[texteId] = titreId
      return nouvelles
    })

    setEinzelPruefung((anciennes) => {
      const nouvelles = { ...anciennes }
      delete nouvelles[texteId]
      return nouvelles
    })

    setSelection(null)
  }

  const retirer = (texteId: number) => {
    if (corrige) return

    setReponses((anciennes) => {
      const nouvelles = { ...anciennes }
      delete nouvelles[texteId]
      return nouvelles
    })

    setEinzelPruefung((anciennes) => {
      const nouvelles = { ...anciennes }
      delete nouvelles[texteId]
      return nouvelles
    })
  }

  const verifier = () => {
    if (nombreReponses !== textes.length) return
    setCorrige(true)
    setSelection(null)
  }

  const pruefenEinzeln = (texteId: number) => {
    if (!reponses[texteId]) return

    setEinzelPruefung((anciennes) => ({
      ...anciennes,
      [texteId]: true,
    }))
  }

  const recommencer = () => {
    setReponses({})
    setSelection(null)
    setCorrige(false)
    setEinzelPruefung({})
    setTraductionsTextes({})
    setExplicationsTextes({})
    setDetailsTitres({})
    setDraggedTitre(null)
  }

  const basculer = (
    setter: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
    id: number
  ) => {
    setter((anciennes) => ({
      ...anciennes,
      [id]: !anciennes[id],
    }))
  }

  const titreUtilise = (id: string) =>
    Object.values(reponses).includes(id)

  return (
    <div className="paul-page">
      <header className="paul-header">
        <div className="paul-header-inner">
          <Link href="/espace-etudiant/examens/b1/lesen" className="paul-brand">
            <span className="paul-brand-icon">
              <GraduationCap size={23} />
            </span>
            <span>Deutsch Erfolg</span>
          </Link>

          <Link
            href="/espace-etudiant/examens/b1/lesen"
            className="paul-back"
          >
            <ArrowLeft size={17} />
            <span>Zurück zu Lesen B1</span>
          </Link>
        </div>
      </header>

      <main className="paul-content">
        <div className="paul-breadcrumb">
          <span>TELC B1</span>
          <span>/</span>
          <span>LESEN</span>
          <span>/</span>
          <strong>TEIL 1</strong>
        </div>

        <section className="paul-hero">
          <div className="paul-hero-top">
            <span className="paul-eyebrow">LESEVERSTEHEN · TEIL 1</span>
            <span className="paul-level">B1</span>
          </div>

          <h1>Paul</h1>

          <p>
            Lesen Sie die Texte und ordnen Sie die passenden Überschriften zu.
          </p>

          <div className="paul-progress-area">
            <div className="paul-progress-labels">
              <span>Fortschritt</span>
              <strong>{nombreReponses}/5</strong>
            </div>
            <div className="paul-progress-track">
              <div
                className="paul-progress-fill"
                style={{ width: `${(nombreReponses / 5) * 100}%` }}
              />
            </div>
          </div>
        </section>

        <div className="paul-language-bar">
          <div className="paul-language-title">
            <Languages size={17} />
            <span>Traduction et explications</span>
          </div>

          <div className="paul-language-options">
            {(['fr', 'ar', 'en'] as Langue[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLangue(lang)}
                className={`paul-language-button ${langue === lang ? 'active' : ''}`}
              >
                {nomsLangues[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="paul-instructions">
          <span className="paul-instruction-icon">💡</span>
          <span>
            Cliquez sur un titre à droite, puis sur le texte correspondant.
            Vous pouvez aussi glisser-déposer un titre sur un texte.
          </span>
        </div>

        <div className="paul-layout">
          <section className="paul-texts-column">
            <div className="paul-section-heading">
              <div>
                <span className="paul-section-eyebrow">LESEAUFGABEN</span>
                <h2>Die Texte</h2>
              </div>
              <span className="paul-count">{textes.length} Texte</span>
            </div>

            <div className="paul-text-list">
              {textes.map((texte) => {
                const assigned = reponses[texte.id]
                const isChecked = einzelPruefung[texte.id]
                const isCorrect = assigned === solutions[texte.id]

                return (
                  <article
                    key={texte.id}
                    className={`paul-text-card ${
                      assigned ? 'has-answer' : ''
                    } ${
                      corrige
                        ? isCorrect
                          ? 'is-correct'
                          : 'is-wrong'
                        : ''
                    }`}
                    onDragOver={(event) => {
                      event.preventDefault()
                    }}
                    onDrop={(event) => {
                      event.preventDefault()
                      const dropped =
                        event.dataTransfer.getData('text/plain') ||
                        draggedTitre
                      if (dropped) assigner(texte.id, dropped)
                      setDraggedTitre(null)
                    }}
                  >
                    <div className="paul-text-card-header">
                      <span className="paul-text-number">{texte.id}</span>
                      <span className="paul-text-label">TEXT {texte.id}</span>

                      {corrige && (
                        <span
                          className={`paul-result-icon ${
                            isCorrect ? 'correct' : 'wrong'
                          }`}
                        >
                          {isCorrect ? (
                            <CheckCircle2 size={19} />
                          ) : (
                            '✕'
                          )}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      className={`paul-answer-slot ${
                        assigned ? 'filled' : ''
                      }`}
                      onClick={() => {
                        if (assigned) {
                          retirer(texte.id)
                        } else if (selection) {
                          assigner(texte.id, selection)
                        }
                      }}
                    >
                      {assigned ? (
                        <>
                          <strong>{assigned}</strong>
                          <span>
                            {titel.find((item) => item.id === assigned)?.contenu}
                          </span>
                          {!corrige && <span className="paul-remove">×</span>}
                        </>
                      ) : (
                        <span>
                          {selection
                            ? 'Hier klicken, um den Titel zuzuordnen'
                            : 'Klicken Sie hier und wählen Sie rechts eine Antwort'}
                        </span>
                      )}
                    </button>

                    <p className="paul-text-content">{texte.contenu}</p>

                    {traductionsTextes[texte.id] && (
                      <div className="paul-info-panel translation-panel">
                        <div className="paul-info-title">
                          <Languages size={16} />
                          Traduction – {nomsLangues[langue]}
                        </div>
                        <p dir={langue === 'ar' ? 'rtl' : 'ltr'}>
                          {texte.traduction[langue]}
                        </p>
                      </div>
                    )}

                    {explicationsTextes[texte.id] && (
                      <div className="paul-info-panel explanation-panel">
                        <div className="paul-info-title">
                          <Lightbulb size={16} />
                          Explication
                        </div>
                        <p dir={langue === 'ar' ? 'rtl' : 'ltr'}>
                          {texte.explication[langue]}
                        </p>
                      </div>
                    )}

                    <div className="paul-text-actions">
                      <button
                        type="button"
                        className={`paul-small-action ${
                          traductionsTextes[texte.id] ? 'active' : ''
                        }`}
                        onClick={() =>
                          basculer(setTraductionsTextes, texte.id)
                        }
                      >
                        <Languages size={15} />
                        Traduction
                        {traductionsTextes[texte.id] ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </button>

                      <button
                        type="button"
                        className={`paul-small-action ${
                          explicationsTextes[texte.id] ? 'active' : ''
                        }`}
                        onClick={() =>
                          basculer(setExplicationsTextes, texte.id)
                        }
                      >
                        <Lightbulb size={15} />
                        Explication
                        {explicationsTextes[texte.id] ? (
                          <ChevronUp size={14} />
                        ) : (
                          <ChevronDown size={14} />
                        )}
                      </button>

                      {!corrige && (
                        <button
                          type="button"
                          className="paul-check-one"
                          disabled={!assigned}
                          onClick={() => pruefenEinzeln(texte.id)}
                        >
                          <CheckCircle2 size={15} />
                          Prüfen
                        </button>
                      )}
                    </div>

                    {isChecked && !corrige && (
                      <div
                        className={`paul-individual-feedback ${
                          isCorrect ? 'correct' : 'wrong'
                        }`}
                      >
                        {isCorrect
                          ? '✓ Richtig! Sehr gut!'
                          : '✕ Nicht ganz richtig. Sie können Ihre Antwort noch ändern.'}
                      </div>
                    )}

                    {corrige && (
                      <div
                        className={`paul-correction ${
                          isCorrect ? 'correct' : 'wrong'
                        }`}
                      >
                        <strong>
                          {isCorrect ? 'Richtige Antwort' : 'Korrekte Antwort'}
                        </strong>
                        <span>
                          {solutions[texte.id]} –{' '}
                          {
                            titel.find(
                              (item) => item.id === solutions[texte.id]
                            )?.contenu
                          }
                        </span>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          </section>

          <aside className="paul-titles-column">
            <div className="paul-titles-sticky">
              <div className="paul-section-heading">
                <div>
                  <span className="paul-section-eyebrow">ANTWORTEN</span>
                  <h2>Überschriften</h2>
                </div>
                <span className="paul-count">
                  {titel.length} Titel
                </span>
              </div>

              <div className="paul-title-list">
                {titel.map((item) => {
                  const used = titreUtilise(item.id)
                  const selected = selection === item.id

                  return (
                    <div
                      key={item.id}
                      className={`paul-title-wrapper ${
                        selected ? 'selected' : ''
                      } ${used ? 'used' : ''}`}
                    >
                      <button
                        type="button"
                        className="paul-title-button"
                        disabled={corrige || (used && !selected)}
                        onClick={() => choisir(item.id)}
                        draggable={!corrige && !used}
                        onDragStart={(event) => {
                          setDraggedTitre(item.id)
                          event.dataTransfer.setData('text/plain', item.id)
                          event.dataTransfer.effectAllowed = 'move'
                        }}
                        onDragEnd={() => setDraggedTitre(null)}
                      >
                        <span className="paul-title-letter">{item.id}</span>
                        <span className="paul-title-text">
                          {item.contenu}
                        </span>
                        {used && (
                          <CheckCircle2
                            size={16}
                            className="paul-title-used-icon"
                          />
                        )}
                      </button>

                      {detailsTitres[item.id] && (
                        <div className="paul-title-detail">
                          <div>
                            <strong>Traduction</strong>
                            <p dir={langue === 'ar' ? 'rtl' : 'ltr'}>
                              {item.traduction[langue]}
                            </p>
                          </div>
                          <div>
                            <strong>Explication</strong>
                            <p dir={langue === 'ar' ? 'rtl' : 'ltr'}>
                              {item.explication[langue]}
                            </p>
                          </div>
                        </div>
                      )}

                      <button
                        type="button"
                        className="paul-title-info"
                        onClick={() =>
                          setDetailsTitres((anciennes) => ({
                            ...anciennes,
                            [item.id]: !anciennes[item.id],
                          }))
                        }
                      >
                        <Languages size={13} />
                        Traduction / explication
                        {detailsTitres[item.id] ? (
                          <ChevronUp size={13} />
                        ) : (
                          <ChevronDown size={13} />
                        )}
                      </button>
                    </div>
                  )
                })}
              </div>

              <div className="paul-title-legend">
                <span className="legend-dot available" />
                Disponible
                <span className="legend-dot selected-dot" />
                Sélectionné
                <span className="legend-dot used-dot" />
                Utilisé
              </div>
            </div>
          </aside>
        </div>

        <section className="paul-final-area">
          {!corrige ? (
            <>
              <div className="paul-final-info">
                <span className="paul-final-icon">✍️</span>
                <div>
                  <strong>Haben Sie alle Antworten?</strong>
                  <p>
                    Associez les cinq textes à leurs titres pour vérifier vos
                    réponses.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="paul-final-button"
                disabled={nombreReponses !== 5}
                onClick={verifier}
              >
                <CheckCircle2 size={19} />
                Antworten überprüfen
              </button>

              {nombreReponses !== 5 && (
                <p className="paul-final-hint">
                  Encore {5 - nombreReponses} réponse
                  {5 - nombreReponses > 1 ? 's' : ''} à compléter.
                </p>
              )}
            </>
          ) : (
            <div className="paul-results">
              <div className="paul-results-top">
                <div>
                  <span className="paul-section-eyebrow">ERGEBNIS</span>
                  <h2>Ihre Ergebnisse</h2>
                </div>
                <div className="paul-score">
                  <strong>{score}/5</strong>
                  <span>Richtige Antworten</span>
                </div>
              </div>

              <div className="paul-score-track">
                <div
                  className="paul-score-fill"
                  style={{ width: `${(score / 5) * 100}%` }}
                />
              </div>

              <p className="paul-result-message">
                {score === 5
                  ? 'Ausgezeichnet! Alle Antworten sind richtig! 🎉'
                  : score >= 3
                    ? 'Sehr gut! Sie haben eine gute Leistung erbracht. Weiter so!'
                    : 'Gute Übung! Schauen Sie sich die Erklärungen an und versuchen Sie es noch einmal.'}
              </p>

              <div className="paul-result-list">
                {textes.map((texte) => {
                  const correct =
                    reponses[texte.id] === solutions[texte.id]

                  return (
                    <div
                      key={texte.id}
                      className={`paul-result-row ${
                        correct ? 'correct' : 'wrong'
                      }`}
                    >
                      <span className="paul-result-number">
                        {texte.id}
                      </span>
                      <span className="paul-result-status">
                        {correct ? '✓' : '✕'}
                      </span>
                      <div className="paul-result-answer">
                        <strong>
                          {reponses[texte.id]} → {solutions[texte.id]}
                        </strong>
                        <span>
                          {
                            titel.find(
                              (item) => item.id === solutions[texte.id]
                            )?.contenu
                          }
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button
                type="button"
                className="paul-restart-button"
                onClick={recommencer}
              >
                <RotateCcw size={18} />
                Noch einmal versuchen
              </button>
            </div>
          )}
        </section>

        <footer className="paul-footer">
          <span>Deutsch Erfolg</span>
          <span>·</span>
          <span>TELC B1 – Lesen Teil 1</span>
        </footer>
      </main>

      <style jsx global>{`
        .paul-page {
          min-height: 100vh;
          background: #f5f7fb;
          color: #172b4d;
          font-family: inherit;
          padding-bottom: 50px;
        }

        .paul-header {
          background: #172b4d;
          color: white;
          height: 68px;
          display: flex;
          align-items: center;
        }

        .paul-header-inner {
          max-width: 1320px;
          width: 100%;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .paul-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: white;
          text-decoration: none;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.4px;
        }

        .paul-brand-icon {
          color: #d6b56d;
          display: flex;
          align-items: center;
        }

        .paul-back {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #e1e7f0;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s;
        }

        .paul-back:hover {
          color: #d6b56d;
        }

        .paul-content {
          max-width: 1320px;
          margin: 0 auto;
          padding: 28px;
        }

        .paul-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 1px;
          color: #8a96a9;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .paul-breadcrumb strong {
          color: #172b4d;
        }

        .paul-hero {
          position: relative;
          overflow: hidden;
          border-radius: 19px;
          padding: 30px 34px 27px;
          color: white;
          background: linear-gradient(120deg, #172b4d 0%, #263f67 65%, #344f77 100%);
          box-shadow: 0 8px 24px rgba(23, 43, 77, 0.12);
        }

        .paul-hero::after {
          content: '';
          position: absolute;
          width: 260px;
          height: 260px;
          border: 1px solid rgba(214, 181, 109, 0.17);
          border-radius: 50%;
          right: -60px;
          top: -140px;
          box-shadow: 0 0 0 30px rgba(214, 181, 109, 0.035),
            0 0 0 60px rgba(214, 181, 109, 0.025);
          pointer-events: none;
        }

        .paul-hero-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .paul-eyebrow,
        .paul-section-eyebrow {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
        }

        .paul-eyebrow {
          color: #d6b56d;
        }

        .paul-level {
          background: rgba(214, 181, 109, 0.16);
          border: 1px solid rgba(214, 181, 109, 0.45);
          color: #f0d69e;
          padding: 6px 13px;
          border-radius: 30px;
          font-size: 11px;
          font-weight: 800;
        }

        .paul-hero h1 {
          font-size: 34px;
          line-height: 1.15;
          margin: 15px 0 8px;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        .paul-hero > p {
          color: #dce4ef;
          font-size: 14px;
          margin: 0;
        }

        .paul-progress-area {
          max-width: 380px;
          margin-top: 25px;
        }

        .paul-progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #dce4ef;
          margin-bottom: 8px;
        }

        .paul-progress-labels strong {
          color: #f0d69e;
        }

        .paul-progress-track,
        .paul-score-track {
          width: 100%;
          height: 7px;
          background: rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          overflow: hidden;
        }

        .paul-progress-fill {
          height: 100%;
          background: #d6b56d;
          border-radius: 20px;
          transition: width 0.3s ease;
        }

        .paul-language-bar {
          margin: 20px 0 14px;
          padding: 12px 16px;
          background: white;
          border: 1px solid #e8edf4;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .paul-language-title {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 700;
          color: #53647d;
        }

        .paul-language-title svg {
          color: #c09b4e;
        }

        .paul-language-options {
          display: flex;
          gap: 5px;
          background: #f1f4f8;
          padding: 4px;
          border-radius: 9px;
        }

        .paul-language-button {
          border: 0;
          background: transparent;
          color: #68768a;
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          border-radius: 7px;
          padding: 7px 12px;
          cursor: pointer;
        }

        .paul-language-button.active {
          background: #172b4d;
          color: white;
          box-shadow: 0 2px 5px rgba(23, 43, 77, 0.16);
        }

        .paul-instructions {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff9eb;
          border: 1px solid #f0e2bd;
          color: #76613a;
          padding: 12px 16px;
          border-radius: 11px;
          font-size: 12px;
          line-height: 1.5;
          margin-bottom: 25px;
        }

        .paul-instruction-icon {
          font-size: 18px;
          flex-shrink: 0;
        }

        .paul-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(330px, 0.85fr);
          align-items: start;
          gap: 25px;
        }

        .paul-section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }

        .paul-section-eyebrow {
          color: #b18b40;
          display: block;
          margin-bottom: 5px;
        }

        .paul-section-heading h2,
        .paul-results-top h2 {
          font-size: 19px;
          color: #172b4d;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .paul-count {
          border-radius: 30px;
          background: #e9eef5;
          color: #52647d;
          padding: 6px 10px;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .paul-text-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .paul-text-card {
          background: white;
          border: 1px solid #e5eaf1;
          border-radius: 14px;
          padding: 19px;
          box-shadow: 0 3px 10px rgba(23, 43, 77, 0.035);
          transition: border-color 0.2s, box-shadow 0.2s;
          min-width: 0;
        }

        .paul-text-card.has-answer {
          border-color: #b8c7da;
        }

        .paul-text-card.is-correct {
          border-color: #6ab68a;
          background: #fbfffc;
        }

        .paul-text-card.is-wrong {
          border-color: #e2a0a0;
          background: #fffdfd;
        }

        .paul-text-card-header {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 13px;
        }

        .paul-text-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 29px;
          height: 29px;
          border-radius: 8px;
          background: #172b4d;
          color: white;
          font-weight: 800;
          font-size: 13px;
        }

        .paul-text-label {
          font-size: 10px;
          font-weight: 800;
          color: #8995a7;
          letter-spacing: 1.1px;
        }

        .paul-result-icon {
          margin-left: auto;
          display: flex;
          align-items: center;
        }

        .paul-result-icon.correct {
          color: #26965a;
        }

        .paul-result-icon.wrong {
          color: #d34c4c;
          font-weight: 900;
        }

        .paul-answer-slot {
          width: 100%;
          min-height: 42px;
          border: 1px dashed #cbd4e0;
          border-radius: 8px;
          background: #f8fafc;
          color: #8995a7;
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
          padding: 9px 12px;
          margin-bottom: 14px;
          font-family: inherit;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .paul-answer-slot:hover {
          border-color: #c09b4e;
          background: #fffcf4;
        }

        .paul-answer-slot.filled {
          border: 1px solid #d9c28e;
          background: #fffaf0;
          color: #6b5529;
        }

        .paul-answer-slot.filled strong {
          background: #d6b56d;
          color: #172b4d;
          width: 23px;
          height: 23px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 11px;
        }

        .paul-answer-slot.filled > span:nth-child(2) {
          font-weight: 700;
          flex: 1;
        }

        .paul-remove {
          font-size: 19px;
          color: #a18b62;
          line-height: 1;
        }

        .paul-text-content {
          color: #34445a;
          font-size: 13px;
          line-height: 1.85;
          margin: 0;
          text-align: left;
          overflow-wrap: anywhere;
        }

        .paul-info-panel {
          margin-top: 14px;
          border-radius: 9px;
          padding: 13px 14px;
          font-size: 12px;
          line-height: 1.75;
        }

        .translation-panel {
          background: #f0f5fc;
          border: 1px solid #dce7f5;
          color: #354f70;
        }

        .explanation-panel {
          background: #fff9ec;
          border: 1px solid #f0e4c6;
          color: #705b35;
        }

        .paul-info-title {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 800;
          margin-bottom: 7px;
        }

        .paul-info-panel p {
          margin: 0;
        }

        .paul-text-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 15px;
          padding-top: 12px;
          border-top: 1px solid #edf0f4;
        }

        .paul-small-action,
        .paul-check-one {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 9px;
          border-radius: 7px;
          border: 1px solid #e3e8ef;
          background: white;
          color: #66768c;
          font-family: inherit;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .paul-small-action:hover,
        .paul-small-action.active {
          background: #f1f5fb;
          color: #172b4d;
          border-color: #cbd7e6;
        }

        .paul-check-one {
          margin-left: auto;
          background: #172b4d;
          border-color: #172b4d;
          color: white;
        }

        .paul-check-one:hover:not(:disabled) {
          background: #263f67;
        }

        .paul-check-one:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .paul-individual-feedback {
          padding: 10px 12px;
          border-radius: 8px;
          margin-top: 12px;
          font-size: 11px;
          font-weight: 700;
        }

        .paul-individual-feedback.correct {
          background: #eaf8ef;
          color: #267a48;
        }

        .paul-individual-feedback.wrong {
          background: #fff0f0;
          color: #b84d4d;
        }

        .paul-correction {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 11px 12px;
          border-radius: 8px;
          margin-top: 12px;
          font-size: 11px;
        }

        .paul-correction.correct {
          background: #eaf8ef;
          color: #267a48;
        }

        .paul-correction.wrong {
          background: #fff0f0;
          color: #a94343;
        }

        .paul-titles-sticky {
          position: sticky;
          top: 20px;
        }

        .paul-title-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .paul-title-wrapper {
          background: white;
          border: 1px solid #e5eaf1;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.2s;
        }

        .paul-title-wrapper.selected {
          border-color: #c09b4e;
          background: #fffbf1;
          box-shadow: 0 0 0 2px rgba(214, 181, 109, 0.13);
        }

        .paul-title-wrapper.used {
          background: #f2f5f8;
          border-color: #e1e6ed;
        }

        .paul-title-button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 12px;
          text-align: left;
          border: 0;
          background: transparent;
          color: #34445a;
          font-family: inherit;
          font-size: 12px;
          line-height: 1.5;
          cursor: grab;
          min-height: 49px;
        }

        .paul-title-button:disabled {
          cursor: default;
        }

        .paul-title-letter {
          flex-shrink: 0;
          width: 25px;
          height: 25px;
          border-radius: 7px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #edf1f6;
          color: #52647d;
          font-weight: 800;
          font-size: 11px;
        }

        .paul-title-wrapper.selected .paul-title-letter {
          background: #d6b56d;
          color: #172b4d;
        }

        .paul-title-wrapper.used .paul-title-letter {
          background: #dfe6ed;
          color: #778598;
        }

        .paul-title-text {
          flex: 1;
          font-weight: 650;
        }

        .paul-title-used-icon {
          color: #7c9b86;
          flex-shrink: 0;
        }

        .paul-title-info {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
          border: 0;
          border-top: 1px solid #edf0f4;
          background: rgba(245, 247, 250, 0.7);
          padding: 7px 12px;
          color: #8290a2;
          font-family: inherit;
          font-size: 10px;
          cursor: pointer;
        }

        .paul-title-info:hover {
          color: #172b4d;
          background: #f0f4f9;
        }

        .paul-title-detail {
          padding: 11px 13px;
          border-top: 1px solid #edf0f4;
          background: #fafbfd;
          color: #52647d;
          font-size: 11px;
          line-height: 1.65;
        }

        .paul-title-detail > div + div {
          margin-top: 10px;
          padding-top: 9px;
          border-top: 1px solid #e9edf2;
        }

        .paul-title-detail strong {
          color: #172b4d;
          font-size: 10px;
        }

        .paul-title-detail p {
          margin: 4px 0 0;
        }

        .paul-title-legend {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 14px;
          padding: 11px;
          background: #edf1f6;
          border-radius: 9px;
          color: #728096;
          font-size: 9px;
          font-weight: 650;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          margin-left: 4px;
        }

        .legend-dot.available {
          background: #b8c4d2;
        }

        .legend-dot.selected-dot {
          background: #d6b56d;
        }

        .legend-dot.used-dot {
          background: #7c9b86;
        }

        .paul-final-area {
          background: white;
          border: 1px solid #e5eaf1;
          border-radius: 15px;
          padding: 22px;
          margin-top: 27px;
          box-shadow: 0 3px 10px rgba(23, 43, 77, 0.035);
        }

        .paul-final-info {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 17px;
        }

        .paul-final-icon {
          width: 43px;
          height: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #fff6e4;
          font-size: 20px;
          flex-shrink: 0;
        }

        .paul-final-info strong {
          font-size: 13px;
          color: #172b4d;
        }

        .paul-final-info p {
          font-size: 11px;
          color: #7b8798;
          margin: 4px 0 0;
        }

        .paul-final-button,
        .paul-restart-button {
          width: 100%;
          min-height: 46px;
          border: 0;
          border-radius: 9px;
          background: #172b4d;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-family: inherit;
          font-size: 12px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
        }

        .paul-final-button:hover:not(:disabled),
        .paul-restart-button:hover {
          background: #263f67;
          transform: translateY(-1px);
        }

        .paul-final-button:disabled {
          background: #aeb9c8;
          cursor: not-allowed;
        }

        .paul-final-hint {
          margin: 10px 0 0;
          text-align: center;
          font-size: 10px;
          color: #929eae;
        }

        .paul-results-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 18px;
        }

        .paul-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff8e9;
          border: 1px solid #f0e1bc;
          border-radius: 11px;
          padding: 10px 17px;
        }

        .paul-score strong {
          font-size: 25px;
          color: #9a7736;
          line-height: 1.1;
        }

        .paul-score span {
          font-size: 9px;
          color: #8d7956;
          margin-top: 4px;
        }

        .paul-score-track {
          background: #edf0f4;
          height: 9px;
        }

        .paul-score-fill {
          height: 100%;
          background: #d6b56d;
          border-radius: 20px;
          transition: width 0.5s ease;
        }

        .paul-result-message {
          color: #596b82;
          font-size: 12px;
          line-height: 1.6;
          margin: 15px 0;
        }

        .paul-result-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .paul-result-row {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 10px 12px;
          border-radius: 8px;
          background: #f5f7fa;
        }

        .paul-result-row.correct {
          background: #eff9f2;
        }

        .paul-result-row.wrong {
          background: #fff2f2;
        }

        .paul-result-number {
          font-size: 11px;
          font-weight: 800;
          color: #7d899a;
          width: 15px;
        }

        .paul-result-status {
          font-size: 14px;
          font-weight: 900;
          color: #26965a;
        }

        .paul-result-row.wrong .paul-result-status {
          color: #d34c4c;
        }

        .paul-result-answer {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .paul-result-answer strong {
          font-size: 11px;
          color: #263b58;
        }

        .paul-result-answer span {
          font-size: 10px;
          color: #748196;
        }

        .paul-restart-button {
          background: #f1f4f8;
          color: #172b4d;
          border: 1px solid #dfe5ed;
        }

        .paul-restart-button:hover {
          background: #e7edf5;
        }

        .paul-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          color: #9aa5b4;
          font-size: 10px;
        }

        .paul-footer span:first-child {
          color: #687991;
          font-weight: 800;
        }

        @media (max-width: 900px) {
          .paul-layout {
            grid-template-columns: minmax(0, 1fr);
          }

          .paul-titles-sticky {
            position: static;
          }

          .paul-titles-column {
            order: -1;
          }

          .paul-title-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .paul-header {
            height: 60px;
          }

          .paul-header-inner {
            padding: 0 16px;
          }

          .paul-brand {
            font-size: 16px;
          }

          .paul-back {
            font-size: 11px;
            gap: 5px;
          }

          .paul-content {
            padding: 18px 13px;
          }

          .paul-hero {
            padding: 23px 20px;
            border-radius: 14px;
          }

          .paul-hero h1 {
            font-size: 29px;
          }

          .paul-hero > p {
            font-size: 12px;
            line-height: 1.6;
          }

          .paul-language-bar {
            align-items: flex-start;
            flex-direction: column;
          }

          .paul-language-options {
            width: 100%;
          }

          .paul-language-button {
            flex: 1;
          }

          .paul-instructions {
            font-size: 11px;
            align-items: flex-start;
          }

          .paul-title-list {
            grid-template-columns: 1fr;
          }

          .paul-text-card {
            padding: 14px;
          }

          .paul-text-content {
            font-size: 12px;
            line-height: 1.8;
          }

          .paul-text-actions {
            gap: 6px;
          }

          .paul-small-action,
          .paul-check-one {
            font-size: 9px;
            padding: 7px;
          }

          .paul-final-area {
            padding: 16px;
          }

          .paul-results-top {
            align-items: flex-start;
          }

          .paul-score {
            padding: 8px 12px;
          }
        }

        @media (max-width: 380px) {
          .paul-back span {
            display: none;
          }

          .paul-text-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .paul-check-one {
            margin-left: 0;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}


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
    contenu: "Frauen kommen genauso gut an ihr Ziel wie Männer, sie geben nur nicht so damit an. Das ergab eine Studie der Eberhard – Karls – Universität Tübingen mit 600 Testpersonen. Obwohl Frauen sich so gut zurechtfinden wie Männer. Wenn Frauen allein unterwegs sind, fragen sie öfter nach dem Weg und freuen sich, wenn ihnen Freunde helfen. Die Tübinger Forscher nennen das ein kommunikatives Orientierungsmodell. Männer dagegen verfahren sich lieber dreimal, als einmal um Hilfe zu bitten. Dabei spielt offensichtlich die Erziehung eine Rolle.",
    traduction: {
      fr: "Les femmes arrivent aussi bien à destination que les hommes, elles s'en vantent simplement moins. C'est ce qui ressort d'une étude menée par l'université Eberhard Karl de Tübingen auprès de 600 personnes. Les femmes s'orientent aussi bien que les hommes. Lorsqu'elles voyagent seules, elles demandent plus souvent leur chemin et apprécient que leurs amis les aident. Les chercheurs de Tübingen appellent cela un modèle d'orientation fondé sur la communication. Les hommes, en revanche, préfèrent se perdre trois fois plutôt que de demander de l'aide une seule fois. L'éducation joue manifestement un rôle dans ce comportement.",
      ar: "تصل النساء إلى وجهاتهن بنجاح مثل الرجال تماماً، لكنهن لا يتباهين بذلك كثيراً. هذه هي نتيجة دراسة أجرتها جامعة إبرهارد كارل في توبنغن على 600 شخص. فالنساء يستطعن تحديد الاتجاهات مثل الرجال. وعندما يسافرن بمفردهن، يسألن عن الطريق بشكل أكبر ويسعدن عندما يساعدهن الأصدقاء. ويطلق الباحثون في توبنغن على ذلك اسم نموذج التوجيه القائم على التواصل. أما الرجال فيفضلون أن يضلوا الطريق ثلاث مرات بدلاً من طلب المساعدة مرة واحدة. ويبدو أن التربية تلعب دوراً في هذا السلوك.",
      en: "Women reach their destinations just as well as men; they simply do not boast about it as much. This is the result of a study by the Eberhard Karls University of Tübingen involving 600 participants. Women are just as good at finding their way as men. When travelling alone, they ask for directions more often and appreciate help from friends. Researchers in Tübingen call this a communicative orientation model. Men, by contrast, would rather get lost three times than ask for help once. Upbringing apparently plays a role in this behaviour."
    },
    explication: {
      fr: "Le texte présente une étude qui montre que les femmes savent aussi bien s'orienter que les hommes. Elles ont simplement davantage tendance à demander leur chemin. La bonne réponse est donc F : « Frauen finden den richtigen Weg ».",
      ar: "يعرض النص دراسة تُظهر أن النساء يستطعن تحديد الطريق مثل الرجال تماماً، لكنهن أكثر استعداداً لطلب المساعدة عند الحاجة. لذلك فالعنوان الصحيح هو F: النساء يجدن الطريق الصحيح.",
      en: "The text presents a study showing that women can find their way just as well as men. They are simply more willing to ask for directions. Therefore, the correct heading is F: Women find the right way."
    }
  },
  {
    id: 2,
    contenu: "Bahnfahren ist entspannend und lädt zum Lesen ein. Deswegen liest auch etwa die Hälfte aller Reisenden während ihrer Bahnfahrt. Frauen sind dabei lesefreudiger als Männer: 63 Prozent von ihnen steigen mit dem Buch in den Zug. Wer unterwegs ist, verbringt im Durchschnitt etwa eine Stunde und 28 Minuten mit dem Lesen eines Buches oder einer Zeitung. Ein Zehntel aller Bahnreisenden gesteht, dass sie keine Buchleser sind. Dies sind die wesentlichen Ergebnisse einer Studie der Stiftung Lesen in Zusammenarbeit mit der Deutschen Bahn.",
    traduction: {
      fr: "Voyager en train est reposant et donne envie de lire. C'est pourquoi environ la moitié des voyageurs lisent pendant leur trajet en train. Les femmes aiment davantage lire que les hommes : 63 % d'entre elles montent dans le train avec un livre. Les voyageurs consacrent en moyenne environ une heure et 28 minutes à la lecture d'un livre ou d'un journal pendant leur déplacement. Un dixième des voyageurs reconnaît ne pas lire de livres. Ce sont les principaux résultats d'une étude menée par la Fondation pour la lecture en collaboration avec la Deutsche Bahn.",
      ar: "يُعد السفر بالقطار مريحاً ويشجع على القراءة. ولهذا يقرأ حوالي نصف المسافرين أثناء رحلاتهم بالقطار. وتحب النساء القراءة أكثر من الرجال؛ إذ تصعد 63% منهن إلى القطار ومعهن كتاب. ويقضي المسافر في المتوسط ساعة و28 دقيقة تقريباً في قراءة كتاب أو صحيفة أثناء الرحلة. ويعترف عُشر المسافرين بأنهم لا يقرؤون الكتب. هذه هي أهم نتائج دراسة أجرتها مؤسسة القراءة بالتعاون مع شركة السكك الحديدية الألمانية.",
      en: "Travelling by train is relaxing and encourages people to read. That is why around half of all passengers read during their train journeys. Women enjoy reading more than men: 63 percent of them board the train with a book. Passengers spend an average of about one hour and 28 minutes reading a book or newspaper while travelling. One tenth of all train passengers admit that they do not read books. These are the main findings of a study conducted by the Reading Foundation in cooperation with Deutsche Bahn."
    },
    explication: {
      fr: "Le texte parle d'une étude sur les habitudes de lecture des voyageurs dans les trains. Il indique notamment que près de la moitié des voyageurs lisent pendant leur trajet. La bonne réponse est I : « Lesen im Zug ist beliebt ».",
      ar: "يتحدث النص عن دراسة حول عادات القراءة لدى المسافرين بالقطار. ويذكر أن حوالي نصف المسافرين يقرؤون أثناء الرحلة. لذلك فالعنوان الصحيح هو I: القراءة في القطار أمر شائع.",
      en: "The text discusses a study about passengers' reading habits on trains. It states that around half of passengers read during their journey. Therefore, the correct heading is I: Reading on trains is popular."
    }
  },
  {
    id: 3,
    contenu: "Der frühere Verein junger Mädchen heißt nun Compagna und hat sich zu einem modernen gemeinnützigen Dienstleistungsbetrieb gewandelt. Das wichtigste Ziel des Vereins ist es weiterhin, Menschen zu begleiten. Diese Dienstleistung richtet sich vor allem an Menschen, die auf Hilfe angewiesen sind: alleinreisende Kinder, alte und behinderte Menschen. Die Reisenden werden am Ausgangsbahnhof abgeholt und mit den öffentlichen Verkehrsmitteln bis zum Zielort begleitet.",
    traduction: {
      fr: "L'ancienne association de jeunes filles s'appelle désormais Compagna et s'est transformée en un organisme moderne de services à but non lucratif. Son objectif principal reste d'accompagner les personnes. Ce service s'adresse surtout aux personnes qui ont besoin d'aide : les enfants qui voyagent seuls, les personnes âgées et les personnes handicapées. Les voyageurs sont pris en charge à la gare de départ et accompagnés dans les transports publics jusqu'à leur destination.",
      ar: "أصبحت الجمعية السابقة للفتيات الشابات تُسمى الآن Compagna، وتحولت إلى مؤسسة خدمات حديثة غير ربحية. ولا يزال هدفها الأساسي هو مرافقة الأشخاص. وتُقدم هذه الخدمة خصوصاً للأشخاص الذين يحتاجون إلى المساعدة، مثل الأطفال الذين يسافرون بمفردهم وكبار السن والأشخاص ذوي الإعاقة. يتم استقبال المسافرين في محطة الانطلاق ومرافقتهم بوسائل النقل العمومي حتى وجهتهم.",
      en: "The former young women's association is now called Compagna and has developed into a modern non-profit service organization. Its main goal remains accompanying people. This service is intended particularly for people who need assistance: children travelling alone, elderly people and people with disabilities. Travellers are met at their departure station and accompanied on public transport all the way to their destination."
    },
    explication: {
      fr: "Le texte présente un service d'accompagnement destiné aux personnes qui ont besoin d'aide pour voyager, notamment les enfants seuls, les personnes âgées et les personnes handicapées. La bonne réponse est E : « Hilfe beim Reisen mit der Bahn ».",
      ar: "يعرض النص خدمة لمرافقة الأشخاص الذين يحتاجون إلى المساعدة أثناء السفر، مثل الأطفال الذين يسافرون بمفردهم وكبار السن والأشخاص ذوي الإعاقة. لذلك فالعنوان الصحيح هو E: المساعدة أثناء السفر بالقطار.",
      en: "The text introduces an assistance service for people who need help travelling, especially unaccompanied children, elderly people and people with disabilities. Therefore, the correct heading is E: Help when travelling by train."
    }
  },
  {
    id: 4,
    contenu: "Christine Zumstein, Leiterin der Volkshochschule Solothurn (VHS), ist begeistert: Super gelaufen seien die Kurse, die die VHS im Morgenzug des letzten Quartals angeboten hat. Weil sich das Pilotprojekt von VHS und RBS auf der Strecke Solothurn – Bern bestens bewährt hat, sollen künftig auch Pendlerinnen und Pendler in umgekehrter Richtung die Möglichkeit erhalten, während der Bahnfahrt Sprachen zu lernen. Im Zug ab Bern beginnt ein Kurs mit einer neuen Rechtschreibung. Ebenfalls angeboten werden Englisch, Italienisch und Französisch.",
    traduction: {
      fr: "Christine Zumstein, directrice de l'université populaire de Soleure, est enthousiaste : les cours proposés par l'établissement dans le train du matin au cours du dernier trimestre ont très bien fonctionné. Comme le projet pilote mené par l'université populaire et la compagnie RBS sur la ligne Soleure–Berne a été un grand succès, les voyageurs effectuant le trajet dans le sens inverse pourront également apprendre des langues pendant leur voyage en train. Un cours utilisant la nouvelle orthographe sera proposé dans le train au départ de Berne. L'anglais, l'italien et le français seront également enseignés.",
      ar: "تشعر كريستين تسومشتاين، مديرة الجامعة الشعبية في سولوتورن، بالسعادة لأن الدورات التي قدمتها المؤسسة في قطارات الصباح خلال الربع الماضي حققت نجاحاً كبيراً. وبما أن المشروع التجريبي الذي جمع الجامعة الشعبية وشركة RBS على خط سولوتورن–برن كان ناجحاً، فسيتمكن مستعملو القطار في الاتجاه المعاكس أيضاً من تعلم اللغات أثناء الرحلة. وستبدأ في القطار المنطلق من برن دورة تعتمد قواعد الإملاء الجديدة. كما ستُقدم دورات في الإنجليزية والإيطالية والفرنسية.",
      en: "Christine Zumstein, head of the Solothurn Adult Education Centre, is delighted: the courses offered by the centre on morning trains during the previous quarter were very successful. Since the pilot project run by the adult education centre and RBS on the Solothurn–Bern route worked very well, commuters travelling in the opposite direction will also be able to learn languages during their train journey in future. A course using the new spelling rules will start on the train departing from Bern. English, Italian and French will also be offered."
    },
    explication: {
      fr: "Le texte explique que des cours de langues sont organisés directement dans les trains. Après le succès d'un projet pilote, cette possibilité sera étendue à d'autres voyageurs. La bonne réponse est H : « Jetzt wird auch im Zug gelernt ».",
      ar: "يوضح النص أنه يتم تنظيم دروس لتعلم اللغات داخل القطارات. وبعد نجاح المشروع التجريبي، سيتم توسيع هذه التجربة لتشمل مسافرين آخرين. لذلك فالعنوان الصحيح هو H: أصبح التعلم يتم أيضاً داخل القطار.",
      en: "The text explains that language courses are being organized directly on trains. Following the success of a pilot project, this opportunity will be extended to more passengers. Therefore, the correct heading is H: Learning is now also taking place on trains."
    }
  },
  {
    id: 5,
    contenu: "Sie sind in der Schweiz zu einem Fest eingeladen, aber auf der Einladung steht nur die Adresse? Kein Problem, auch ohne Auto: Seit einiger Zeit hat der Internetfahrplan der Schweizerischen Bundesbahnen (www.sbb.ch) einen großen Bruder. Bis jetzt konnte man nur Verbindungen von Bahnhof zu Bahnhof oder von Haltestelle zu Haltestelle abfragen. Neuerdings ist das auch für den Weg von einer Adresse zu einer anderen möglich. Der elektronische Fahrplan führt Sie automatisch zum Haltepunkt des öffentlichen Verkehrs, der am nächsten bei der Zieladresse liegt. Das ist mit dem Verkehrsleitssystem für Autos vergleichbar, das Sie aber auch in der verkehrten Richtung durch Einbahnstraßen führen kann. Beim öffentlichen Verkehr kommt das glücklicherweise nicht vor.",
    traduction: {
      fr: "Vous êtes invité à une fête en Suisse, mais l'invitation ne mentionne qu'une adresse ? Aucun problème, même sans voiture : depuis quelque temps, le site des horaires en ligne des Chemins de fer fédéraux suisses dispose d'une nouvelle fonctionnalité. Jusqu'à présent, on pouvait uniquement rechercher des trajets entre deux gares ou deux arrêts. Désormais, il est également possible de calculer un itinéraire entre deux adresses. L'horaire électronique vous conduit automatiquement à l'arrêt de transport public le plus proche de l'adresse de destination. Ce système est comparable aux systèmes de navigation pour voitures, qui peuvent parfois vous faire passer dans le mauvais sens dans des rues à sens unique. Heureusement, cela ne se produit pas avec les transports publics.",
      ar: "هل تمت دعوتك إلى حفل في سويسرا، لكن الدعوة تحتوي فقط على العنوان؟ لا مشكلة، حتى من دون سيارة. فقد أصبح جدول المواعيد الإلكتروني للسكك الحديدية الفيدرالية السويسرية يوفر خدمة جديدة. في السابق، كان من الممكن البحث فقط عن الرحلات بين محطتين أو بين موقفين. أما الآن، فيمكن أيضاً تحديد الطريق من عنوان إلى عنوان آخر. ويقودك الجدول الإلكتروني تلقائياً إلى أقرب محطة أو موقف للنقل العمومي من عنوان الوجهة. وتشبه هذه الخدمة أنظمة الملاحة الخاصة بالسيارات، التي قد تقودك أحياناً في الاتجاه الخاطئ داخل الشوارع ذات الاتجاه الواحد. ولحسن الحظ، لا يحدث ذلك مع النقل العمومي.",
      en: "Have you been invited to a party in Switzerland, but the invitation only gives an address? No problem, even without a car. The Swiss Federal Railways' online timetable has recently gained a new feature. Until now, users could only search for connections between railway stations or stops. It is now also possible to plan a route from one address to another. The electronic timetable automatically guides you to the public transport stop closest to your destination address. This is comparable to car navigation systems, which can sometimes direct drivers the wrong way down one-way streets. Fortunately, this does not happen with public transport."
    },
    explication: {
      fr: "Le texte présente une nouvelle fonction du site des chemins de fer suisses : rechercher un trajet directement entre deux adresses grâce à Internet. Le service indique également l'arrêt de transport public le plus proche de la destination. La bonne réponse est C : « Per Internet leichter ans Ziel ».",
      ar: "يعرض النص خدمة جديدة على موقع السكك الحديدية السويسرية، تسمح بتحديد الطريق عبر الإنترنت انطلاقاً من عنوان والوصول إلى عنوان آخر، مع تحديد أقرب موقف للنقل العمومي. لذلك فالعنوان الصحيح هو C: الوصول إلى الوجهة بسهولة أكبر عبر الإنترنت.",
      en: "The text presents a new feature on the Swiss railways website: users can plan a journey online directly between two addresses. The service also identifies the public transport stop closest to the destination. Therefore, the correct heading is C: Reaching your destination more easily via the internet."
    }
  }
]

const titel: Titre[] = [
  {
    id: 'A',
    contenu: 'Nur wenige lesen im Zug',
    traduction: {
      fr: 'Peu de personnes lisent dans le train',
      ar: 'عدد قليل من الناس يقرؤون في القطار',
      en: 'Only a few people read on trains'
    },
    explication: {
      fr: 'Ce titre affirme que la lecture dans le train est rare. Pourtant, le texte 2 indique qu’environ la moitié des voyageurs lisent pendant leur trajet.',
      ar: 'يشير هذا العنوان إلى أن القراءة في القطار نادرة، لكن النص 2 يذكر أن حوالي نصف المسافرين يقرؤون أثناء الرحلة.',
      en: 'This heading suggests that reading on trains is rare. However, text 2 says that around half of passengers read during their journey.'
    }
  },
  {
    id: 'B',
    contenu: 'Bahnfahren bei älteren Menschen immer beliebter',
    traduction: {
      fr: 'Le voyage en train devient de plus en plus populaire chez les personnes âgées',
      ar: 'السفر بالقطار يصبح أكثر شعبية لدى كبار السن',
      en: 'Train travel is becoming increasingly popular among older people'
    },
    explication: {
      fr: 'Ce titre concerne la popularité du train chez les personnes âgées. Aucun des textes ne parle spécifiquement de cette tendance.',
      ar: 'يتعلق هذا العنوان بشعبية السفر بالقطار لدى كبار السن، لكن النصوص لا تتحدث تحديداً عن هذا الموضوع.',
      en: 'This heading concerns the popularity of train travel among elderly people. None of the texts specifically discusses this trend.'
    }
  },
  {
    id: 'C',
    contenu: 'Per Internet leichter ans Ziel',
    traduction: {
      fr: 'Arriver plus facilement à destination grâce à Internet',
      ar: 'الوصول إلى الوجهة بسهولة أكبر عبر الإنترنت',
      en: 'Reaching your destination more easily via the internet'
    },
    explication: {
      fr: 'Ce titre correspond au texte 5, qui présente un service en ligne permettant de calculer un trajet entre deux adresses en Suisse.',
      ar: 'يناسب هذا العنوان النص 5، الذي يقدم خدمة إلكترونية تسمح بتحديد الطريق بين عنوانين في سويسرا.',
      en: 'This heading matches text 5, which describes an online service for planning a route between two addresses in Switzerland.'
    }
  },
  {
    id: 'D',
    contenu: 'Männer fahren besser',
    traduction: {
      fr: 'Les hommes conduisent mieux',
      ar: 'الرجال يقودون بشكل أفضل',
      en: 'Men drive better'
    },
    explication: {
      fr: 'Le texte 1 compare les femmes et les hommes dans leur capacité à s’orienter, mais il ne dit pas que les hommes conduisent mieux.',
      ar: 'يقارن النص 1 بين النساء والرجال في القدرة على تحديد الاتجاهات، لكنه لا يقول إن الرجال يقودون بشكل أفضل.',
      en: 'Text 1 compares men and women in their ability to find their way, but it does not say that men drive better.'
    }
  },
  {
    id: 'E',
    contenu: 'Hilfe beim Reisen mit der Bahn',
    traduction: {
      fr: 'De l’aide pour voyager en train',
      ar: 'المساعدة أثناء السفر بالقطار',
      en: 'Help when travelling by train'
    },
    explication: {
      fr: 'Ce titre correspond au texte 3, qui présente un service d’accompagnement pour les enfants voyageant seuls, les personnes âgées et les personnes handicapées.',
      ar: 'يناسب هذا العنوان النص 3، الذي يقدم خدمة مرافقة للأطفال المسافرين بمفردهم وكبار السن والأشخاص ذوي الإعاقة.',
      en: 'This heading matches text 3, which describes an assistance service for children travelling alone, elderly people and people with disabilities.'
    }
  },
  {
    id: 'F',
    contenu: 'Frauen finden den richtigen Weg',
    traduction: {
      fr: 'Les femmes trouvent le bon chemin',
      ar: 'النساء يجدن الطريق الصحيح',
      en: 'Women find the right way'
    },
    explication: {
      fr: 'Ce titre correspond au texte 1 : une étude montre que les femmes s’orientent aussi bien que les hommes et demandent plus facilement leur chemin.',
      ar: 'يناسب هذا العنوان النص 1، حيث تُظهر دراسة أن النساء يستطعن تحديد الاتجاهات مثل الرجال، كما أنهن يطلبن المساعدة بسهولة أكبر.',
      en: 'This heading matches text 1: a study shows that women find their way just as well as men and are more willing to ask for directions.'
    }
  },
  {
    id: 'G',
    contenu: 'Neuer Deutschkurs in Solothurn',
    traduction: {
      fr: 'Nouveau cours d’allemand à Soleure',
      ar: 'دورة جديدة لتعلم الألمانية في سولوتورن',
      en: 'New German course in Solothurn'
    },
    explication: {
      fr: 'Le texte 4 parle de cours de langues organisés dans les trains, mais pas d’un nouveau cours d’allemand à Soleure uniquement.',
      ar: 'يتحدث النص 4 عن دورات لغوية تُنظم داخل القطارات، وليس عن دورة جديدة للألمانية في سولوتورن فقط.',
      en: 'Text 4 discusses language courses held on trains, not specifically a new German course in Solothurn.'
    }
  },
  {
    id: 'H',
    contenu: 'Jetzt wird auch im Zug gelernt',
    traduction: {
      fr: 'Désormais, on apprend aussi dans le train',
      ar: 'أصبح التعلم يتم أيضاً داخل القطار',
      en: 'Learning is now also taking place on trains'
    },
    explication: {
      fr: 'Ce titre correspond au texte 4, qui explique que des cours de langues sont proposés directement pendant les trajets en train.',
      ar: 'يناسب هذا العنوان النص 4، الذي يوضح أن دروس اللغات أصبحت تُقدم مباشرة أثناء رحلات القطار.',
      en: 'This heading matches text 4, which explains that language courses are offered directly during train journeys.'
    }
  },
  {
    id: 'I',
    contenu: 'Lesen im Zug ist beliebt',
    traduction: {
      fr: 'La lecture dans le train est populaire',
      ar: 'القراءة في القطار أمر شائع',
      en: 'Reading on trains is popular'
    },
    explication: {
      fr: 'Ce titre correspond au texte 2, qui présente une étude montrant que près de la moitié des voyageurs lisent dans le train.',
      ar: 'يناسب هذا العنوان النص 2، الذي يعرض دراسة تُظهر أن حوالي نصف المسافرين يقرؤون في القطار.',
      en: 'This heading matches text 2, which presents a study showing that nearly half of train passengers read during their journey.'
    }
  },
  {
    id: 'J',
    contenu: 'Neue Verkehrsregeln für Autofahrer',
    traduction: {
      fr: 'Nouvelles règles de circulation pour les automobilistes',
      ar: 'قواعد مرور جديدة لسائقي السيارات',
      en: 'New traffic rules for motorists'
    },
    explication: {
      fr: 'Ce titre concerne de nouvelles règles de circulation pour les voitures. Le texte 5 compare simplement le service en ligne aux systèmes de navigation automobile.',
      ar: 'يتعلق هذا العنوان بقواعد مرور جديدة للسيارات، بينما يقارن النص 5 فقط الخدمة الإلكترونية بأنظمة الملاحة الخاصة بالسيارات.',
      en: 'This heading concerns new traffic rules for cars. Text 5 merely compares the online service with car navigation systems.'
    }
  }
]

const solutions: Record<number, string> = {
  1: 'F',
  2: 'I',
  3: 'E',
  4: 'H',
  5: 'C'
}

export default function ViktorPage() {
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
          <h1>Viktor</h1>
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


'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  GraduationCap,
  BookOpen,
  Lightbulb,
  Languages,
  Eye,
  EyeOff
} from 'lucide-react'

type Lang = 'fr' | 'ar' | 'en'
type Translation = Record<Lang, string>

const languages: { id: Lang; flag: string; label: string }[] = [
  { id: 'fr', flag: '🇫🇷', label: 'Français' },
  { id: 'ar', flag: '🇲🇦', label: 'العربية' },
  { id: 'en', flag: '🇬🇧', label: 'English' }
]


const paragraphs: {
  de: string
  translation: Translation
  explanation: Translation
}[] = [
  {
    de: 'Von Antje Blinda. CO₂-Ausstoß: null. Geplante Strecke: einmal um die Welt. Endlich wird der Traum von Louis Palmer wahr: Der Schweizer startet mit seinem Auto, das mit Sonnenenergie fährt, zur Weltumrundung. Er will damit zeigen, dass Autofahren auch geht, ohne der Umwelt zu schaden.',
    translation: {
      fr: 'Par Antje Blinda. Émissions de CO₂ : zéro. Parcours prévu : faire le tour du monde. Le rêve de Louis Palmer devient enfin réalité : ce Suisse part faire le tour du monde avec sa voiture qui fonctionne à l’énergie solaire. Il veut ainsi montrer qu’il est possible de conduire sans nuire à l’environnement.',
      ar: 'بقلم أنتيه بليندا. انبعاثات ثاني أكسيد الكربون: صفر. المسافة المخططة: دورة حول العالم. يتحقق أخيرًا حلم لويس بالمر: ينطلق السويسري بسيارته التي تعمل بالطاقة الشمسية في رحلة حول العالم. ويريد أن يثبت بذلك أن قيادة السيارات ممكنة دون الإضرار بالبيئة.',
      en: 'By Antje Blinda. CO₂ emissions: zero. Planned route: around the world. Louis Palmer’s dream finally comes true: the Swiss man sets off on a trip around the world in his solar-powered car. He wants to show that driving is possible without harming the environment.'
    },
    explanation: {
      fr: 'Le début présente le projet de Louis Palmer : faire le tour du monde dans une voiture fonctionnant à l’énergie solaire. Son objectif est de montrer qu’une mobilité respectueuse de l’environnement est possible.',
      ar: 'تقدم بداية النص مشروع لويس بالمر: القيام برحلة حول العالم بسيارة تعمل بالطاقة الشمسية. وهدفه هو إثبات إمكانية التنقل بطريقة تحافظ على البيئة.',
      en: 'The opening introduces Louis Palmer’s project: travelling around the world in a solar-powered car. His aim is to show that environmentally friendly driving is possible.'
    }
  },
  {
    de: '„Entwickelt für mich ein Fahrzeug für eine Weltreise, das mit Sonnenenergie fährt“, forderte Louis Palmer Studenten an Schweizer Universitäten auf. Das war vor drei Jahren. Heute ist das Auto fertig: ein dreirädriges Fahrzeug mit zwei Sitzplätzen. Und die Weltreise? Am 3. Juli starten er und sein siebenköpfiges Team in Luzern. Das Auto soll als erstes Solarfahrzeug die Welt umrunden.',
    translation: {
      fr: '« Concevez pour moi un véhicule capable de faire le tour du monde et fonctionnant à l’énergie solaire », a demandé Louis Palmer à des étudiants d’universités suisses. C’était il y a trois ans. Aujourd’hui, la voiture est prête : un véhicule à trois roues et deux places. Et le tour du monde ? Le 3 juillet, lui et son équipe de sept personnes partiront de Lucerne. La voiture doit devenir le premier véhicule solaire à faire le tour du monde.',
      ar: 'طلب لويس بالمر من طلاب الجامعات السويسرية: «صمموا لي مركبة تستطيع القيام برحلة حول العالم وتعمل بالطاقة الشمسية». كان ذلك قبل ثلاث سنوات. واليوم أصبحت السيارة جاهزة: مركبة بثلاث عجلات ومقعدين. أما الرحلة حول العالم، فستنطلق يوم 3 يوليو من لوتسرن مع فريق يتكون من سبعة أشخاص. ومن المفترض أن تكون هذه السيارة أول مركبة تعمل بالطاقة الشمسية تدور حول العالم.',
      en: '“Design a vehicle for me that can travel around the world and runs on solar energy,” Louis Palmer asked students at Swiss universities. That was three years ago. Today the car is ready: a three-wheeled vehicle with two seats. On July 3, he and his seven-person team will set off from Lucerne. The car is intended to become the first solar vehicle to travel around the world.'
    },
    explanation: {
      fr: 'Louis Palmer a fait construire sa voiture par des étudiants de quatre universités suisses. Le véhicule possède trois roues et seulement deux places. Le voyage doit commencer à Lucerne le 3 juillet avec une équipe de sept personnes.',
      ar: 'جعل لويس بالمر طلابًا من جامعات سويسرية يصممون سيارته. تتكون المركبة من ثلاث عجلات ومقعدين فقط. ومن المقرر أن تبدأ الرحلة من لوتسرن يوم 3 يوليو مع فريق يضم سبعة أشخاص.',
      en: 'Louis Palmer had students from Swiss universities build his car. The vehicle has three wheels and only two seats. The journey is scheduled to start in Lucerne on July 3 with a team of seven people.'
    }
  },
  {
    de: '„Die ganze Welt wartet auf revolutionäre Erfindungen für ein umweltbewusstes Auto“, sagt der Schweizer. „Ich will darauf aufmerksam machen, dass die technischen Lösungen schon jetzt vorhanden sind.“ Mit 14 Jahren hatte Louis den Entschluss gefasst: Gegen die Veränderung des Klimas muss etwas getan werden. Die Lösung hatte er auch schon: Mit kräftigen Strichen zeichnete er ein Rennauto, verziert mit lachenden Sonnen. Der Rest war nur eine Frage der Organisation und der konsequenten Lebensplanung. „Ich unterteile mein Leben in drei Phasen“, sagt Palmer und lacht über sich selbst: Zwischen 20 und 30 die Welt kennenlernen, zwischen 30 und 40 die Welt aufmerksam machen und zwischen 40 und 50 die Welt verändern.',
    translation: {
      fr: '« Le monde entier attend des inventions révolutionnaires pour une voiture respectueuse de l’environnement », explique le Suisse. « Je veux attirer l’attention sur le fait que les solutions techniques existent déjà. » À 14 ans, Louis avait déjà pris sa décision : il fallait agir contre le changement climatique. Il avait même déjà imaginé une solution : il avait dessiné, avec de grands traits, une voiture de course décorée de soleils souriants. Le reste n’était qu’une question d’organisation et de planification cohérente de sa vie. « Je divise ma vie en trois phases », dit Palmer en riant de lui-même : entre 20 et 30 ans, découvrir le monde ; entre 30 et 40 ans, attirer l’attention du monde ; et entre 40 et 50 ans, changer le monde.',
      ar: 'يقول السويسري: «إن العالم كله ينتظر اختراعات ثورية من أجل سيارة تحترم البيئة. أريد أن ألفت الانتباه إلى أن الحلول التقنية موجودة بالفعل اليوم». اتخذ لويس قراره عندما كان في الرابعة عشرة من عمره: يجب القيام بشيء لمواجهة التغير المناخي. وكانت لديه الفكرة أيضًا؛ فقد رسم سيارة سباق مزينة بشموس مبتسمة. ولم يتبق بعد ذلك سوى التنظيم والتخطيط الدقيق للحياة. يقول بالمر ضاحكًا إنه يقسم حياته إلى ثلاث مراحل: من 20 إلى 30 سنة لاكتشاف العالم، ومن 30 إلى 40 سنة للفت انتباه العالم، ومن 40 إلى 50 سنة لتغيير العالم.',
      en: '“The whole world is waiting for revolutionary inventions for an environmentally friendly car,” says the Swiss man. “I want to draw attention to the fact that the technical solutions already exist.” At the age of 14, Louis had made up his mind that something had to be done about climate change. He already had an idea: he drew a racing car decorated with smiling suns. The rest was a matter of organization and careful life planning. Palmer jokes that he divides his life into three phases: from 20 to 30, discover the world; from 30 to 40, draw the world’s attention; and from 40 to 50, change the world.'
    },
    explanation: {
      fr: 'Dès l’âge de 14 ans, Louis voulait agir contre le changement climatique. Il avait déjà l’idée d’une voiture écologique. Il explique aussi son projet de vie en trois étapes : découvrir le monde, sensibiliser les gens, puis changer le monde.',
      ar: 'منذ سن الرابعة عشرة، أراد لويس أن يفعل شيئًا لمواجهة التغير المناخي. وكانت لديه بالفعل فكرة سيارة صديقة للبيئة. كما يشرح خطته للحياة في ثلاث مراحل: اكتشاف العالم، ثم توعية الناس، ثم تغيير العالم.',
      en: 'From the age of 14, Louis wanted to do something about climate change. He already had the idea of an environmentally friendly car. He also describes his life plan in three stages: discovering the world, raising awareness and then changing the world.'
    }
  },
  {
    de: 'Phase eins begann mit 23 Jahren: Er zog aus, um 50 Länder auf allen Kontinenten zu bereisen. „Anstatt an die Uni zu gehen, habe ich die Welt studiert.“ Mit dem Fahrrad fuhr er von Kenia nach Kapstadt, mit einem Segelflugzeug überflog er Südamerika und als Fotograf reiste er mehrmals nach Afghanistan.',
    translation: {
      fr: 'La première phase a commencé à l’âge de 23 ans : il est parti pour visiter 50 pays sur tous les continents. « Au lieu d’aller à l’université, j’ai étudié le monde. » Il a parcouru à vélo le trajet du Kenya au Cap, survolé l’Amérique du Sud en planeur et, en tant que photographe, s’est rendu plusieurs fois en Afghanistan.',
      ar: 'بدأت المرحلة الأولى عندما كان في الثالثة والعشرين من عمره: انطلق لزيارة 50 دولة في جميع القارات. يقول: «بدلًا من الذهاب إلى الجامعة، درست العالم». سافر بالدراجة من كينيا إلى كيب تاون، وحلّق بطائرة شراعية فوق أمريكا الجنوبية، كما زار أفغانستان عدة مرات بصفته مصورًا.',
      en: 'The first phase began when he was 23: he set out to visit 50 countries on all continents. “Instead of going to university, I studied the world.” He travelled by bicycle from Kenya to Cape Town, flew over South America in a glider and visited Afghanistan several times as a photographer.'
    },
    explanation: {
      fr: 'À 23 ans, Louis voulait découvrir le monde. Il a voyagé dans 50 pays et utilisé différents moyens de transport. La bonne idée à retenir est donc qu’il souhaitait connaître de nombreux pays.',
      ar: 'عندما كان في الثالثة والعشرين، أراد لويس اكتشاف العالم. سافر إلى 50 دولة واستعمل وسائل نقل مختلفة. إذن الفكرة الأساسية هي أنه أراد التعرف على بلدان كثيرة.',
      en: 'At 23, Louis wanted to discover the world. He travelled to 50 countries and used different means of transport. The key point is that he wanted to get to know many different countries.'
    }
  },
  {
    de: 'Phase zwei startete vor drei Jahren: Palmer konnte Studenten von vier Universitäten gewinnen, die für ihn das Auto bauten. Schwierig war es aber, Firmen und private Sponsoren für die finanzielle Unterstützung zu finden, meint Palmer. Doch auch das hat dann schließlich geklappt.',
    translation: {
      fr: 'La deuxième phase a commencé il y a trois ans : Palmer a réussi à convaincre des étudiants de quatre universités de construire la voiture pour lui. Il était toutefois difficile de trouver des entreprises et des sponsors privés pour apporter un soutien financier, explique Palmer. Mais il a finalement réussi également sur ce point.',
      ar: 'بدأت المرحلة الثانية قبل ثلاث سنوات: تمكن بالمر من إقناع طلاب من أربع جامعات ببناء السيارة له. لكنه واجه صعوبة في العثور على شركات ورعاة من القطاع الخاص لتقديم الدعم المالي، كما يقول. ومع ذلك، نجح في النهاية في الحصول على هذا الدعم أيضًا.',
      en: 'The second phase began three years ago: Palmer managed to recruit students from four universities to build the car for him. However, it was difficult to find companies and private sponsors to provide financial support. In the end, he succeeded in that too.'
    },
    explanation: {
      fr: 'Pour réaliser son projet, Palmer a obtenu l’aide d’étudiants de quatre universités. Il a également dû chercher des entreprises et des sponsors privés pour financer le projet. Le texte indique donc un soutien venant des universités et des entreprises.',
      ar: 'لتحقيق مشروعه، حصل بالمر على مساعدة طلاب من أربع جامعات. كما اضطر إلى البحث عن شركات ورعاة من القطاع الخاص لتمويل المشروع. لذلك يذكر النص دعمًا من الجامعات والشركات.',
      en: 'To realize his project, Palmer received help from students at four universities. He also had to find companies and private sponsors to finance it. The text therefore describes support from universities and companies.'
    }
  },
  {
    de: 'Nun ist Palmer bereit für die Tour. „Ich habe keine Ahnung, was auf uns zukommt“, sagt der erfahrene Globetrotter, der sechs Sprachen spricht. „Ich habe schon etwas Angst, zum Beispiel vor dem Straßenverkehr in Millionenstädten oder unvorhersehbaren Zwischenfällen. Das Schlimmste ist aber, wenn jeder Tag wie der andere ist. In den nächsten 16 Monaten wird es dazu nicht kommen.“',
    translation: {
      fr: 'À présent, Palmer est prêt pour le voyage. « Je n’ai aucune idée de ce qui nous attend », dit ce grand voyageur expérimenté, qui parle six langues. « J’ai tout de même un peu peur, par exemple de la circulation dans les très grandes villes ou des incidents imprévus. Mais le pire serait que chaque journée ressemble à la précédente. Cela n’arrivera pas au cours des 16 prochains mois. »',
      ar: 'أصبح بالمر الآن مستعدًا للرحلة. يقول هذا الرحالة الخبير، الذي يتحدث ست لغات: «ليس لدي أي فكرة عما ينتظرنا». ويضيف: «أشعر ببعض الخوف، مثلًا من حركة المرور في المدن الكبرى أو من الحوادث غير المتوقعة. لكن أسوأ شيء هو أن يكون كل يوم مثل اليوم الذي قبله. وهذا لن يحدث خلال الأشهر الستة عشر المقبلة».',
      en: 'Palmer is now ready for the trip. “I have no idea what lies ahead,” says the experienced traveller, who speaks six languages. “I am a little afraid, for example of traffic in very large cities or unexpected incidents. But the worst thing would be if every day were the same. That will not happen in the next 16 months.”'
    },
    explanation: {
      fr: 'Palmer parle de ses inquiétudes, notamment de la circulation et des imprévus. Cependant, il est certain que les 16 prochains mois seront variés. Il ne risque donc pas de s’ennuyer.',
      ar: 'يتحدث بالمر عن مخاوفه، خصوصًا حركة المرور والحوادث غير المتوقعة. لكنه متأكد من أن الأشهر الستة عشر المقبلة لن تكون متشابهة يومًا بعد يوم. لذلك لن يشعر بالملل.',
      en: 'Palmer mentions his worries, especially traffic and unexpected events. However, he is sure that the next 16 months will not be repetitive. He is therefore unlikely to get bored.'
    }
  }
]

const questions = [
  {
    de: 'Mit 23 Jahren wollte Louis Palmer …',
    fr: 'À 23 ans, Louis Palmer voulait …',
    ar: 'عندما كان في الثالثة والعشرين من عمره، أراد لويس بالمر أن ...',
    en: 'At the age of 23, Louis Palmer wanted to …',
    options: [
      {
        de: 'für Studenten Reisen nach Südamerika organisieren.',
        fr: 'organiser des voyages en Amérique du Sud pour des étudiants.',
        ar: 'تنظيم رحلات إلى أمريكا الجنوبية للطلاب.',
        en: 'organize trips to South America for students.'
      },
      {
        de: 'mit dem Fahrrad durch 50 verschiedene Länder fahren.',
        fr: 'traverser 50 pays différents à vélo.',
        ar: 'عبور 50 دولة مختلفة بالدراجة.',
        en: 'travel through 50 different countries by bicycle.'
      },
      {
        de: 'viele verschiedene Länder kennen lernen.',
        fr: 'découvrir de nombreux pays différents.',
        ar: 'التعرف على العديد من البلدان المختلفة.',
        en: 'get to know many different countries.'
      }
    ],
    answer: 2,
    explanation: 'La réponse C reprend l’idée générale du passage : à 23 ans, Palmer est parti pour découvrir 50 pays sur tous les continents. Le texte mentionne le vélo pour une partie de son voyage, mais ne dit pas qu’il a traversé les 50 pays à vélo.',
    evidence: 'Er zog aus, um 50 Länder auf allen Kontinenten zu bereisen.',
    evidenceFr: 'Il est parti pour visiter 50 pays sur tous les continents.'
  },
  {
    de: 'Sein Projekt konnte Palmer realisieren, …',
    fr: 'Palmer a pu réaliser son projet …',
    ar: 'تمكن بالمر من تحقيق مشروعه ...',
    en: 'Palmer was able to realize his project …',
    options: [
      {
        de: 'weil er einen Preis von einer Universität gewonnen hat.',
        fr: 'parce qu’il a remporté un prix décerné par une université.',
        ar: 'لأنه فاز بجائزة من إحدى الجامعات.',
        en: 'because he won a prize from a university.'
      },
      {
        de: 'weil er finanzielle Unterstützung von vier Universitäten erhalten hat.',
        fr: 'parce qu’il a reçu un soutien financier de quatre universités.',
        ar: 'لأنه حصل على دعم مالي من أربع جامعات.',
        en: 'because he received financial support from four universities.'
      },
      {
        de: 'weil ihn Firmen und Universitäten unterstützt haben.',
        fr: 'parce que des entreprises et des universités l’ont soutenu.',
        ar: 'لأن شركات وجامعات قدمت له الدعم.',
        en: 'because companies and universities supported him.'
      }
    ],
    answer: 2,
    explanation: 'Le texte indique que des étudiants de quatre universités ont construit la voiture et que Palmer a également trouvé des entreprises et des sponsors privés pour le financement. Il n’est pas question d’un prix ni d’un financement provenant des universités.',
    evidence: 'Palmer konnte Studenten von vier Universitäten gewinnen ... Schwierig war es aber, Firmen und private Sponsoren für die finanzielle Unterstützung zu finden.',
    evidenceFr: 'Palmer a réussi à convaincre des étudiants de quatre universités ... Il était difficile de trouver des entreprises et des sponsors privés pour le soutien financier.'
  },
  {
    de: 'Schon als Jugendlicher …',
    fr: 'Déjà lorsqu’il était adolescent …',
    ar: 'منذ أن كان مراهقًا ...',
    en: 'Already as a teenager …',
    options: [
      {
        de: 'baute Louis an einem umweltfreundlichen Auto.',
        fr: 'Louis construisait une voiture écologique.',
        ar: 'كان لويس يبني سيارة صديقة للبيئة.',
        en: 'Louis was building an environmentally friendly car.'
      },
      {
        de: 'wollte Louis etwas für die Umwelt tun.',
        fr: 'Louis voulait faire quelque chose pour l’environnement.',
        ar: 'أراد لويس القيام بشيء من أجل البيئة.',
        en: 'Louis wanted to do something for the environment.'
      },
      {
        de: 'wusste Louis genau, wie er sein Leben einteilen will.',
        fr: 'Louis savait exactement comment il voulait organiser sa vie.',
        ar: 'كان لويس يعرف بالضبط كيف يريد تقسيم حياته.',
        en: 'Louis knew exactly how he wanted to organize his life.'
      }
    ],
    answer: 1,
    explanation: 'À 14 ans, Louis avait déjà décidé qu’il fallait agir contre le changement climatique. Il avait imaginé une voiture écologique, mais il ne la construisait pas encore. La bonne réponse est donc B.',
    evidence: 'Mit 14 Jahren hatte Louis den Entschluss gefasst. Gegen die Veränderung des Klimas muss etwas getan werden.',
    evidenceFr: 'À 14 ans, Louis avait pris sa décision : il fallait faire quelque chose contre le changement climatique.'
  },
  {
    de: 'Palmers Auto …',
    fr: 'La voiture de Palmer …',
    ar: 'سيارة بالمر ...',
    en: 'Palmer’s car …',
    options: [
      {
        de: 'fährt mit alternativer Energie.',
        fr: 'fonctionne avec une énergie alternative.',
        ar: 'تعمل بطاقة بديلة.',
        en: 'runs on alternative energy.'
      },
      {
        de: 'geht auf eine dreijährige Weltreise.',
        fr: 'part pour un voyage de trois ans autour du monde.',
        ar: 'ستنطلق في رحلة حول العالم لمدة ثلاث سنوات.',
        en: 'is going on a three-year trip around the world.'
      },
      {
        de: 'hat genug Platz für sieben Personen.',
        fr: 'dispose de suffisamment de place pour sept personnes.',
        ar: 'تتسع لسبعة أشخاص.',
        en: 'has enough room for seven people.'
      }
    ],
    answer: 0,
    explanation: 'La voiture fonctionne à l’énergie solaire, donc avec une énergie alternative. Elle possède deux places, et le texte ne dit pas que le voyage durera trois ans : les trois ans correspondent au temps écoulé depuis le début du projet.',
    evidence: 'Der Schweizer startet mit seinem Auto, das mit Sonnenenergie fährt, zur Weltumrundung.',
    evidenceFr: 'Le Suisse part faire le tour du monde avec sa voiture qui fonctionne à l’énergie solaire.'
  },
  {
    de: 'Louis Palmer …',
    fr: 'Louis Palmer …',
    ar: 'لويس بالمر ...',
    en: 'Louis Palmer …',
    options: [
      {
        de: 'hat für die Weltreise sechs Sprachen gelernt.',
        fr: 'a appris six langues pour faire le tour du monde.',
        ar: 'تعلم ست لغات من أجل الرحلة حول العالم.',
        en: 'learned six languages for the trip around the world.'
      },
      {
        de: 'möchte mit seinem Auto nicht durch Großstädte fahren.',
        fr: 'ne souhaite pas traverser les grandes villes avec sa voiture.',
        ar: 'لا يريد قيادة سيارته عبر المدن الكبرى.',
        en: 'does not want to drive his car through large cities.'
      },
      {
        de: 'wird sich in nächster Zeit nicht langweilen.',
        fr: 'ne va pas s’ennuyer dans les prochains temps.',
        ar: 'لن يشعر بالملل في الفترة القادمة.',
        en: 'will not get bored in the near future.'
      }
    ],
    answer: 2,
    explanation: 'Palmer dit que le pire serait que chaque jour ressemble au précédent, mais il ajoute que cela n’arrivera pas pendant les 16 prochains mois. Il ne risque donc pas de s’ennuyer. Il parle six langues, sans dire qu’il les a apprises pour ce voyage.',
    evidence: 'Das Schlimmste ist aber, wenn jeder Tag wie der andere ist. In den nächsten 16 Monaten wird es dazu nicht kommen.',
    evidenceFr: 'Le pire serait que chaque jour ressemble au précédent. Cela n’arrivera pas au cours des 16 prochains mois.'
  }
]

function LanguageButtons({
  active,
  onSelect
}: {
  active: Lang | null
  onSelect: (language: Lang | null) => void
}) {
  return (
    <div className="language-buttons">
      {languages.map((language) => (
        <button
          key={language.id}
          type="button"
          className={`language-button ${active === language.id ? 'active' : ''}`}
          onClick={() => onSelect(active === language.id ? null : language.id)}
          title={language.label}
        >
          <span>{language.flag}</span>
          <span>{language.label}</span>
        </button>
      ))}
    </div>
  )
}

export default function RitaPage() {
  const [paragraphLanguages, setParagraphLanguages] = useState<Record<number, Lang | null>>({})
  const [paragraphExplanationOpen, setParagraphExplanationOpen] = useState<Record<number, boolean>>({})
  const [paragraphExplanationLanguages, setParagraphExplanationLanguages] = useState<Record<number, Lang>>({})
  const [questionLanguages, setQuestionLanguages] = useState<Record<number, Lang | null>>({})
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showCorrections, setShowCorrections] = useState(false)
  const [explanationsOpen, setExplanationsOpen] = useState<Record<number, boolean>>({})

  const score = questions.reduce(
    (total, question, index) =>
      total + (selectedAnswers[index] === question.answer ? 1 : 0),
    0
  )

  function resetExercise() {
    setParagraphLanguages({})
    setParagraphExplanationOpen({})
    setParagraphExplanationLanguages({})
    setQuestionLanguages({})
    setSelectedAnswers({})
    setShowCorrections(false)
    setExplanationsOpen({})
  }

  return (
    <main className="exercise-page">
      <header className="exercise-header">
        <Link href="/espace-etudiant" className="header-brand">
          <GraduationCap size={30} />
          <span>Deutsch <strong>Erfolg</strong></span>
        </Link>

        <Link
          href="/espace-etudiant/examens/b1/lesen"
          className="back-link"
        >
          <ArrowLeft size={18} />
          <span>Zurück zu Lesen B1</span>
        </Link>
      </header>

      <section className="hero">
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-label">
              <span className="level-badge">B1</span>
              <span>LESEVERSTEHEN · TEIL 2</span>
            </div>

            <h1>Rita</h1>

            <p className="hero-description">
              Lies den Text und beantworte die Fragen.
            </p>
          </div>

          <div className="hero-info">
            <span><BookOpen size={16} /> 1 texte · 6 paragraphes</span>
            <span><Languages size={16} /> 3 langues</span>
            <span><CheckCircle2 size={16} /> 5 questions</span>
          </div>
        </div>
      </section>

      <div className="workspace">
        <section className="text-card">
          <div className="section-heading">
            <div className="section-icon">
              <BookOpen size={21} />
            </div>
            <div>
              <span className="section-eyebrow">LESEVERSTEHEN</span>
              <h2>Lesetext</h2>
              <p>Lis le texte complet dans l’ordre.</p>
            </div>
          </div>

          <div className="reading-tip">
            <Lightbulb size={18} />
            <p>
              Les 6 paragraphes appartiennent au même texte.
              Clique sur les drapeaux pour afficher une traduction.
              Utilise « Comprendre » pour découvrir l’explication de chaque paragraphe.
            </p>
          </div>

          <div className="paragraphs-document">
            {paragraphs.map((paragraph, index) => {
              const language = paragraphLanguages[index]
              const explanationOpen = paragraphExplanationOpen[index]
              const explanationLanguage = paragraphExplanationLanguages[index] || 'fr'

              return (
                <article className="paragraph-unit" key={index}>
                  <p className="german-text">{paragraph.de}</p>

                  <div className="paragraph-actions">
                    <span className="action-label">
                      <Languages size={15} /> Traduction
                    </span>
                    <LanguageButtons
                      active={language || null}
                      onSelect={(lang) =>
                        setParagraphLanguages((previous) => ({
                          ...previous,
                          [index]: lang
                        }))
                      }
                    />
                  </div>

                  {language && (
                    <div className={`translation-box ${language === 'ar' ? 'arabic' : ''}`}>
                      <div className="translation-title">
                        {languages.find((item) => item.id === language)?.flag}
                        {languages.find((item) => item.id === language)?.label}
                      </div>
                      <p dir={language === 'ar' ? 'rtl' : 'ltr'}>
                        {paragraph.translation[language]}
                      </p>
                    </div>
                  )}

                  <button
                    type="button"
                    className={`understand-button ${explanationOpen ? 'opened' : ''}`}
                    onClick={() => {
                      setParagraphExplanationOpen((previous) => ({
                        ...previous,
                        [index]: !previous[index]
                      }))
                      setParagraphExplanationLanguages((previous) => ({
                        ...previous,
                        [index]: previous[index] || 'fr'
                      }))
                    }}
                  >
                    <span className="understand-label">
                      <Lightbulb size={16} />
                      {explanationOpen ? 'Masquer l’explication' : 'Comprendre ce passage'}
                    </span>
                    {explanationOpen ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>

                  {explanationOpen && (
                    <div className="explanation-box paragraph-explanation">
                      <h4>Comprendre ce passage</h4>
                      <LanguageButtons
                        active={explanationLanguage}
                        onSelect={(lang) => {
                          if (lang) {
                            setParagraphExplanationLanguages((previous) => ({
                              ...previous,
                              [index]: lang
                            }))
                          }
                        }}
                      />
                      <p
                        dir={explanationLanguage === 'ar' ? 'rtl' : 'ltr'}
                        className={explanationLanguage === 'ar' ? 'arabic-text' : ''}
                      >
                        {paragraph.explanation[explanationLanguage]}
                      </p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="questions-section">
          <div className="section-heading">
            <div className="section-icon question-icon">
              <CheckCircle2 size={21} />
            </div>
            <div>
              <span className="section-eyebrow">AUFGABEN</span>
              <h2>Fragen zum Text</h2>
              <p>Wähle für jede Frage nur eine Antwort aus.</p>
            </div>
          </div>

          <div className="question-progress">
            <div className="progress-info">
              <span>Réponses sélectionnées</span>
              <strong>{Object.keys(selectedAnswers).length} / 5</strong>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${Object.keys(selectedAnswers).length * 20}%` }}
              />
            </div>
          </div>

          {questions.map((question, index) => {
            const selected = selectedAnswers[index]
            const language = questionLanguages[index]
            const explanationOpen = explanationsOpen[index]

            return (
              <article className="question-card" key={index}>
                <div className="question-top">
                  <span className="question-number">Frage {index + 1}</span>
                  {showCorrections && (
                    <span className={`result-label ${selected === question.answer ? 'correct' : 'incorrect'}`}>
                      {selected === question.answer ? 'Richtig' : 'Falsch'}
                    </span>
                  )}
                </div>

                <h3>{question.de}</h3>

                <div className="question-translation-actions">
                  <span className="action-label">
                    <Languages size={15} /> Traduction
                  </span>
                  <LanguageButtons
                    active={language || null}
                    onSelect={(lang) =>
                      setQuestionLanguages((previous) => ({
                        ...previous,
                        [index]: lang
                      }))
                    }
                  />
                </div>

                {/* TRADUCTION DES QUESTIONS : MÊME STRUCTURE QUE LESETEXT */}
                {language && (
                  <div className={`translation-box question-translation ${language === 'ar' ? 'arabic' : ''}`}>
                    <div className="translation-title">
                      {languages.find((item) => item.id === language)?.flag}
                      {languages.find((item) => item.id === language)?.label}
                    </div>
                    <p dir={language === 'ar' ? 'rtl' : 'ltr'}>
                      {question[language]}
                    </p>
                  </div>
                )}

                <div className="options-list">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected === optionIndex
                    const isCorrect = question.answer === optionIndex

                    let optionClass = ''
                    if (showCorrections && isCorrect) optionClass = 'option-correct'
                    else if (showCorrections && isSelected && !isCorrect) optionClass = 'option-incorrect'
                    else if (isSelected) optionClass = 'option-selected'

                    return (
                      <button
                        type="button"
                        key={optionIndex}
                        disabled={showCorrections}
                        className={`option-button ${optionClass}`}
                        onClick={() =>
                          setSelectedAnswers((previous) => ({
                            ...previous,
                            [index]: optionIndex
                          }))
                        }
                      >
                        <span className="option-letter">
                          {String.fromCharCode(65 + optionIndex)}
                        </span>

                        <span className="option-content">
                          <span>{option.de}</span>
                          {language && (
                            <span
                              className={`option-translation ${language === 'ar' ? 'arabic-text' : ''}`}
                              dir={language === 'ar' ? 'rtl' : 'ltr'}
                            >
                              {option[language]}
                            </span>
                          )}
                        </span>

                        {showCorrections && isCorrect && (
                          <CheckCircle2 className="option-check" size={19} />
                        )}
                      </button>
                    )
                  })}
                </div>

                <button
                  type="button"
                  className={`explain-button ${explanationOpen ? 'opened' : ''}`}
                  onClick={() =>
                    setExplanationsOpen((previous) => ({
                      ...previous,
                      [index]: !previous[index]
                    }))
                  }
                >
                  <span className="understand-label">
                    <Lightbulb size={16} />
                    {explanationOpen ? 'Masquer l’explication' : 'Expliquer la réponse'}
                  </span>
                  {explanationOpen ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>

                {explanationOpen && (
                  <div className="explanation-box">
                    <h4>Pourquoi cette réponse ?</h4>
                    <p>{question.explanation}</p>

                    <div className="evidence-box">
                      <span>Beleg im Text · Preuve dans le texte</span>
                      <p className="evidence-german">{question.evidence}</p>
                      <p className="evidence-french">{question.evidenceFr}</p>
                    </div>
                  </div>
                )}
              </article>
            )
          })}

          <div className="correction-actions">
            {!showCorrections ? (
              <button
                type="button"
                className="correct-button"
                onClick={() => setShowCorrections(true)}
                disabled={Object.keys(selectedAnswers).length !== 5}
              >
                <CheckCircle2 size={18} />
                Corriger mes réponses
              </button>
            ) : (
              <div className="score-result">
                <div className="score-circle">
                  <strong>{score}</strong>
                  <span>/ 5</span>
                </div>
                <div className="score-text">
                  <strong>
                    {score >= 4 ? 'Sehr gut !' : score >= 3 ? 'Gut gemacht !' : 'Weiter üben !'}
                  </strong>
                  <span>Ton résultat : {score} bonne(s) réponse(s) sur 5.</span>
                </div>
              </div>
            )}

            <button
              type="button"
              className="reset-button"
              onClick={resetExercise}
            >
              <RotateCcw size={17} />
              Recommencer
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .exercise-page {
          min-height: 100vh;
          padding: 0 32px 40px;
          background: #f7f5f0;
          color: #192b43;
          font-family: Arial, Helvetica, sans-serif;
        }

        .exercise-header {
          height: 68px;
          background: #192b43;
          padding: 0 7%;
          margin: 0 -32px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
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

        .header-brand :global(svg) {
          color: #b49760;
        }

        .header-brand strong {
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

        .back-link :global(svg) {
          color: #b49760;
        }

        .back-link:hover {
          color: #b49760;
        }

        .hero {
          max-width: 1450px;
          margin: 0 auto 24px;
          padding: 22px 28px;
          border-radius: 12px;
          background: #192b43;
          color: #FFFFFF;
        }

        .hero-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .hero-content {
          min-width: 0;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #b49760;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        .level-badge {
          padding: 4px 8px;
          border-radius: 4px;
          background: #b49760;
          color: #192b43;
          font-size: 11px;
          font-weight: 900;
        }

        .hero h1 {
          margin: 9px 0 4px;
          color: #FFFFFF;
          font-size: 25px;
          font-weight: 750;
          letter-spacing: -.4px;
        }

        .hero-description {
          margin: 0;
          color: #DCE5F1;
          font-size: 12px;
          line-height: 1.5;
        }

        .hero-info {
          display: flex;
          flex-direction: column;
          gap: 11px;
          flex-shrink: 0;
          padding-left: 25px;
          border-left: 1px solid rgba(255,255,255,.2);
        }

        .hero-info span {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #F0F3F8;
          font-size: 12px;
          white-space: nowrap;
        }

        .hero-info :global(svg) {
          color: #b49760;
          flex-shrink: 0;
        }

        .workspace {
          max-width: 1450px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
          gap: 22px;
          align-items: start;
        }

        .text-card,
        .questions-section {
          height: min(78vh, 900px);
          min-height: 650px;
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: #C7CDD6 transparent;
          scrollbar-gutter: stable;
          padding: 25px;
          border: 1px solid #E8E9EC;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 3px 14px rgba(23, 43, 77, .035);
        }

        .text-card::-webkit-scrollbar,
        .questions-section::-webkit-scrollbar {
          width: 6px;
        }

        .text-card::-webkit-scrollbar-thumb,
        .questions-section::-webkit-scrollbar-thumb {
          background: #C7CDD6;
          border-radius: 10px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .section-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #EEF2F8;
          color: #294B78;
        }

        .question-icon {
          background: #F7F1E5;
          color: #A47A35;
        }

        .section-eyebrow {
          display: block;
          margin-bottom: 5px;
          color: #B08A4A;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .section-heading h2 {
          margin: 0;
          color: #192b43;
          font-size: 20px;
          font-weight: 800;
        }

        .section-heading p {
          margin: 5px 0 0;
          color: #626a75;
          font-size: 11px;
        }

        .reading-tip {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 20px;
          padding: 13px 14px;
          border: 1px solid #EEE6D7;
          border-radius: 9px;
          background: #FCFAF5;
          color: #80663C;
        }

        .reading-tip :global(svg) {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .reading-tip p {
          margin: 0;
          font-size: 11px;
          line-height: 1.7;
        }

        .paragraphs-document {
          padding: 22px 24px;
          border: 1px solid #e3ded3;
          border-radius: 12px;
          background: #FFFFFF;
          box-shadow: 0 3px 14px rgba(23, 43, 77, .035);
        }

        .paragraph-unit {
          position: relative;
          padding: 0 0 24px;
          margin-bottom: 23px;
          border-bottom: 1px solid #E8EBF0;
        }

        .paragraph-unit:last-child {
          padding-bottom: 0;
          margin-bottom: 0;
          border-bottom: none;
        }

        .paragraph-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 12px;
        }

        .paragraph-number {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #F5F0E5;
          color: #9A7438;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .paragraph-label {
          color: #A17B3D;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
          text-transform: uppercase;
        }

        .german-text {
          margin: 0 0 15px;
          color: #303B4C;
          font-size: 13px;
          line-height: 1.9;
        }

        .paragraph-actions,
        .question-translation-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;
          padding-top: 12px;
          border-top: 1px solid #EEF0F3;
        }

        .action-label {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #626a75;
          font-size: 10px;
          font-weight: 700;
        }

        .language-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .language-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 11px;
          border: 1px solid #e3ded3;
          border-radius: 20px;
          background: #FFFFFF;
          color: #66758B;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: all .2s ease;
        }

        .language-button:hover {
          border-color: #C4A66A;
          background: #FBF8F1;
          transform: translateY(-1px);
        }

        .language-button.active {
          border-color: #B99758;
          background: #192b43;
          color: #FFFFFF;
          box-shadow: 0 3px 8px rgba(23, 43, 77, .16);
        }

        .paragraphs-document :global(.language-buttons) {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .paragraphs-document :global(.language-button) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 11px;
          border: 1px solid #e3ded3;
          border-radius: 20px;
          background: #FFFFFF;
          color: #66758B;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          transition: all .2s ease;
        }

        .paragraphs-document :global(.language-button:hover) {
          border-color: #C4A66A;
          background: #FBF8F1;
          transform: translateY(-1px);
        }

        .paragraphs-document :global(.language-button.active) {
          border-color: #B99758;
          background: #192b43;
          color: #FFFFFF;
          box-shadow: 0 3px 8px rgba(23, 43, 77, .16);
        }

        /* Les mêmes boutons de langue dans la colonne Fragen */
        .questions-section :global(.language-buttons) {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
        }

        .questions-section :global(.language-button) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 11px;
          border: 1px solid #e3ded3;
          border-radius: 20px;
          background: #FFFFFF;
          color: #66758B;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          white-space: nowrap;
          transition: all .2s ease;
        }

        .questions-section :global(.language-button:hover) {
          border-color: #C4A66A;
          background: #FBF8F1;
          transform: translateY(-1px);
        }

        .questions-section :global(.language-button.active) {
          border-color: #B99758;
          background: #192b43;
          color: #FFFFFF;
          box-shadow: 0 3px 8px rgba(23, 43, 77, .16);
        }

        .translation-box {
          position: relative;
          margin-top: 13px;
          padding: 17px 18px;
          border: 1px solid #e3ded3;
          border-left: 4px solid #B99758;
          border-radius: 10px;
          background: linear-gradient(135deg, #F8FAFD 0%, #F1F4F9 100%);
          color: #34445B;
          box-shadow: 0 4px 12px rgba(23, 43, 77, .045);
          animation: translationAppear .22s ease-out;
        }

        .translation-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 11px;
          padding-bottom: 9px;
          border-bottom: 1px solid #E1E6EE;
          color: #192b43;
          font-size: 11px;
          font-weight: 800;
        }

        .translation-box p {
          margin: 0;
          color: #40516A;
          font-size: 13px;
          line-height: 1.9;
        }

        /* Même présentation pour la traduction des questions */
        .translation-box.question-translation {
          margin-top: 13px;
          margin-bottom: 14px;
        }

        .translation-box.arabic {
          border-left: 1px solid #e3ded3;
          border-right: 4px solid #B99758;
        }

        .arabic-text,
        .arabic p {
          direction: rtl;
          text-align: right;
          font-size: 16px !important;
          line-height: 2.1 !important;
        }

        @keyframes translationAppear {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .understand-button,
        .explain-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: 11px;
          padding: 10px 12px;
          border: 1px solid #E9DFC9;
          border-radius: 7px;
          background: #FCFAF5;
          color: #88672F;
          cursor: pointer;
          font-size: 11px;
          font-weight: 700;
          text-align: left;
          transition: all .18s ease;
        }

        .understand-button:hover,
        .explain-button:hover,
        .understand-button.opened,
        .explain-button.opened {
          border-color: #b49760;
          background: #F8F1E3;
        }

        .understand-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .paragraph-explanation {
          margin-top: 11px;
        }

        .explanation-box {
          margin-top: 12px;
          padding: 14px;
          border: 1px solid #E9DFC9;
          border-radius: 9px;
          background: #FCFAF5;
          color: #5F513A;
        }

        .explanation-box h4 {
          margin: 0 0 10px;
          color: #80602D;
          font-size: 12px;
        }

        .explanation-box > p {
          margin: 0;
          font-size: 12px;
          line-height: 1.8;
        }

        .paragraph-explanation :global(.language-buttons) {
          margin-bottom: 11px;
        }

        .question-progress {
          margin-bottom: 20px;
          padding: 13px;
          border: 1px solid #EAECF0;
          border-radius: 9px;
          background: #FAFAFB;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 9px;
          color: #778295;
          font-size: 11px;
        }

        .progress-info strong {
          color: #9A7438;
        }

        .progress-track {
          height: 5px;
          overflow: hidden;
          border-radius: 10px;
          background: #E9EBEF;
        }

        .progress-fill {
          height: 100%;
          border-radius: 10px;
          background: #B99758;
          transition: width .2s ease;
        }

        .question-card {
          margin-bottom: 16px;
          padding: 17px;
          border: 1px solid #EAECF0;
          border-radius: 10px;
          background: #fff;
        }

        .question-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 11px;
        }

        .question-number {
          color: #A17B3D;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .7px;
          text-transform: uppercase;
        }

        .result-label {
          padding: 5px 8px;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 800;
        }

        .result-label.correct {
          background: #EAF5ED;
          color: #34764C;
        }

        .result-label.incorrect {
          background: #FBEDED;
          color: #B34B4B;
        }

        .question-card h3 {
          margin: 0 0 14px;
          color: #26364D;
          font-size: 14px;
          line-height: 1.65;
        }

        .question-translation-actions {
          margin-bottom: 12px;
        }

        .options-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .option-button {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px;
          border: 1px solid #E7E9ED;
          border-radius: 8px;
          background: #fff;
          color: #3B485B;
          cursor: pointer;
          text-align: left;
          font-size: 11px;
          line-height: 1.65;
          transition: all .18s ease;
        }

        .option-button:not(:disabled):hover {
          border-color: #C7B17F;
          background: #FCFAF5;
        }

        .option-button:disabled {
          cursor: default;
        }

        .option-letter {
          width: 23px;
          height: 23px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: 1px solid #E0E3E8;
          border-radius: 6px;
          color: #788396;
          font-size: 10px;
          font-weight: 800;
        }

        .option-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .option-translation {
          display: block;
          margin-top: 5px;
          padding: 6px 9px;
          border-radius: 6px;
          background: #f7f5f0;
          color: #66758B;
          font-size: 11px;
          line-height: 1.8;
        }

        .option-translation.arabic-text {
          background: #f7f5f0;
          color: #52627A;
        }

        .option-selected {
          border-color: #B99758;
          background: #FCF8EF;
        }

        .option-selected .option-letter {
          border-color: #A98546;
          background: #A98546;
          color: white;
        }

        .option-correct {
          border-color: #75B48A;
          background: #F1F8F2;
        }

        .option-correct .option-letter {
          border-color: #43865A;
          background: #43865A;
          color: white;
        }

        .option-incorrect {
          border-color: #D99393;
          background: #FFF5F5;
        }

        .option-check {
          flex-shrink: 0;
          color: #43865A;
        }

        .explain-button {
          margin-top: 12px;
        }

        .evidence-box {
          margin-top: 12px;
          padding: 11px;
          border-left: 3px solid #B99758;
          border-radius: 5px;
          background: #F7F5EF;
        }

        .evidence-box span {
          display: block;
          margin-bottom: 7px;
          color: #8A7043;
          font-size: 9px;
          font-weight: 800;
        }

        .evidence-box p {
          margin: 0;
          font-size: 11px;
          line-height: 1.7;
        }

        .evidence-german {
          color: #34445B;
          font-weight: 700;
        }

        .evidence-french {
          margin-top: 7px !important;
          color: #788396;
          font-style: italic;
        }

        .correction-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .correct-button,
        .reset-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          transition: all .18s ease;
        }

        .correct-button {
          border: 1px solid #192b43;
          background: #192b43;
          color: white;
        }

        .correct-button:hover:not(:disabled) {
          border-color: #294B78;
          background: #294B78;
        }

        .correct-button:disabled {
          border-color: #D2D5DA;
          background: #D2D5DA;
          cursor: not-allowed;
        }

        .reset-button {
          border: 1px solid #E3E5E9;
          background: #fff;
          color: #778295;
        }

        .reset-button:hover {
          border-color: #CBB98F;
          background: #FCFAF5;
          color: #80602D;
        }

        .score-result {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 15px;
          border: 1px solid #D9E8DD;
          border-radius: 9px;
          background: #F5FAF6;
        }

        .score-circle {
          width: 55px;
          height: 55px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #65A77C;
          border-radius: 50%;
          color: #34764C;
        }

        .score-circle strong {
          font-size: 21px;
        }

        .score-circle span {
          margin-top: 6px;
          font-size: 10px;
        }

        .score-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .score-text strong {
          color: #34764C;
          font-size: 14px;
        }

        .score-text span {
          color: #6D8273;
          font-size: 11px;
        }

        @media (max-width: 900px) {
          .exercise-page {
            padding: 0 16px 30px;
          }

          .exercise-header {
            margin-left: -16px;
            margin-right: -16px;
          }

          .workspace {
            grid-template-columns: 1fr;
          }

          .text-card,
          .questions-section {
            height: auto;
            min-height: 0;
            max-height: none;
            overflow: visible;
            scrollbar-gutter: auto;
          }
        }

        @media (max-width: 600px) {
          .exercise-page {
            padding: 0 11px 25px;
          }

          .exercise-header {
            height: 62px;
            margin: 0 -11px 19px;
            padding: 0 14px;
          }

          .header-brand {
            gap: 7px;
            font-size: 16px;
          }

          .header-brand :global(svg) {
            width: 23px;
            height: 23px;
          }

          .back-link {
            gap: 5px;
            font-size: 10px;
          }

          .back-link :global(svg) {
            width: 15px;
            height: 15px;
          }

          .hero {
            padding: 20px;
            margin-bottom: 17px;
          }

          .hero-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
          }

          .hero h1 {
            font-size: 24px;
          }

          .hero-info {
            width: 100%;
            padding: 14px 0 0;
            border-left: none;
            border-top: 1px solid rgba(255,255,255,.2);
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px 18px;
          }

          .text-card,
          .questions-section {
            padding: 17px 13px;
            border-radius: 11px;
          }

          .section-heading h2 {
            font-size: 19px;
          }

          .paragraphs-document {
            padding: 17px 13px;
          }

          .paragraph-unit {
            padding-bottom: 19px;
            margin-bottom: 19px;
          }

          .german-text {
            font-size: 12px;
            line-height: 1.85;
          }

          .paragraphs-document :global(.language-button) {
            padding: 6px 8px;
          }

          .paragraphs-document :global(.language-button span:last-child) {
            font-size: 9px;
          }

          .question-card {
            padding: 13px 10px;
          }

          .language-button {
            padding: 6px 8px;
          }

          .language-button span:last-child {
            font-size: 9px;
          }

          .questions-section :global(.language-button) {
            padding: 6px 8px;
          }

          .questions-section :global(.language-button span:last-child) {
            font-size: 9px;
          }
        }
      
        /* Deutsch Erfolg — Premium exams */
        .exercise-page { background: #f7f5f0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
        [dir="rtl"] .exercise-page, .exercise-page[dir="rtl"] { font-family: 'Tajawal', Arial, sans-serif; }
        .exercise-page .hero { background: #192b43; border: 1px solid #314359; border-radius: 12px; box-shadow: none; text-align: start; }
        .exercise-page .hero h1 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.025em; line-height: 1.24; overflow-wrap: anywhere; }
        [dir="rtl"] .exercise-page .hero h1, .exercise-page[dir="rtl"] .hero h1 { font-family: 'Tajawal', Arial, sans-serif; }
        .exercise-page a:focus-visible, .exercise-page button:focus-visible, .exercise-page select:focus-visible { outline: 2px solid #b49760; outline-offset: 3px; }
        .exercise-page .question-card,
        .exercise-page .paragraphs-document,
        .exercise-page .questions-section { border-radius: 10px; box-shadow: none; }
        .exercise-page .section-heading h2 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
        [dir="rtl"] .exercise-page .section-heading h2 { font-family: 'Tajawal', Arial, sans-serif; }
        @media (prefers-reduced-motion: reduce) {
          .exercise-page *, .exercise-page *::before, .exercise-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
        }
      `}</style>
    </main>
  )
}

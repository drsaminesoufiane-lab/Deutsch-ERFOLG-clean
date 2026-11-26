
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

type Lang = 'fr' | 'ar' | 'en'
type Multi = Record<Lang, string>

const langues: Record<Lang, string> = {
  fr: 'Français',
  ar: 'العربية',
  en: 'English',
}

const textes: {
  id: number
  contenu: string
  traduction: Multi
  explication: Multi
}[] = [
  {
    id: 1,
    contenu: "Der Frankfurter Flughafen wird weiter ausgebaut. Eine Gruppe von Frankfurter Bürgern aus den östlichen Stadtteilen, die sich seit Jahren aktiv für den Naturschutz und die Umwelt einsetzt, lädt für Donnerstag dieser Woche um 19.30 Uhr zu einem Informationsabend über den Ausbau des Frankfurter Flughafens ein. Im Bürgerhaus Ostend, Parkstraße 24, Clubraurn 12, werden verschiedene Sprecher zu hören sein. Die Gruppe möchte Antworten auf folgende Fragen suchen: Wie viel Lärm durch Flugzeuge verträgt die Stadt? Oder Welche Auswirkungen hat der Flugverkehr auf Umwelt und Natur?",
    traduction: {
      fr: "L'aéroport de Francfort continue de s'agrandir. Un groupe d'habitants de Francfort, venant des quartiers de l'est et engagé depuis plusieurs années dans la protection de la nature et de l'environnement, organise jeudi prochain à 19 h 30 une soirée d'information sur l'agrandissement de l'aéroport. Plusieurs intervenants prendront la parole à la Maison des citoyens d'Ostend, Parkstraße 24, salle 12. Le groupe souhaite obtenir des réponses à plusieurs questions : quelle quantité de bruit provoqué par les avions la ville peut-elle supporter ? Quels sont les effets du trafic aérien sur l'environnement et la nature ?",
      ar: "يستمر توسيع مطار فرانكفورت. وتدعو مجموعة من سكان الأحياء الشرقية في فرانكفورت، الذين يعملون منذ سنوات من أجل حماية الطبيعة والبيئة، إلى حضور أمسية إعلامية يوم الخميس المقبل على الساعة السابعة والنصف مساءً حول توسيع المطار. وسيتحدث عدد من المتدخلين في دار المواطنين بحي أوستند، في شارع Parkstraße رقم 24، القاعة 12. وتريد المجموعة الحصول على إجابات عن أسئلة مهمة: ما مقدار الضجيج الناتج عن الطائرات الذي تستطيع المدينة تحمله؟ وما تأثير حركة الطيران على البيئة والطبيعة؟",
      en: "Frankfurt Airport is continuing to expand. A group of residents from the eastern districts of Frankfurt, who have been actively committed to nature and environmental protection for years, is inviting people to an information evening about the airport expansion on Thursday at 7:30 p.m. Several speakers will give presentations at the Ostend community centre, Parkstraße 24, room 12. The group wants answers to questions such as: How much aircraft noise can the city tolerate? What impact does air traffic have on the environment and nature?",
    },
    explication: {
      fr: "Le texte annonce une soirée d'information organisée par un groupe de citoyens engagé dans la protection de l'environnement. Le sujet principal est l'agrandissement de l'aéroport de Francfort et ses conséquences : le bruit des avions et les effets du trafic aérien sur la nature. Il ne s'agit pas d'une manifestation, mais d'une réunion d'information.",
      ar: "يتحدث النص عن أمسية إعلامية تنظمها مجموعة من المواطنين المهتمين بحماية البيئة. والموضوع الأساسي هو توسيع مطار فرانكفورت والآثار الناتجة عنه، خصوصاً ضجيج الطائرات وتأثير حركة الطيران على الطبيعة. إنها أمسية للنقاش والإعلام وليست مظاهرة.",
      en: "The text announces an information evening organized by a citizens' group concerned with environmental protection. The main topic is the expansion of Frankfurt Airport and its consequences, especially aircraft noise and the effects of air traffic on nature. It is an information meeting, not a demonstration.",
    },
  },
  {
    id: 2,
    contenu: "Der Frankfurter Flughafen erfreut sich bei vielen Firmen als beliebter Ort für Veranstaltungen und Tagungen. Dies zeigt ein Bericht des Frankfurter Flughafens, der beim zehnjährigen Jubiläum des Kongresszentruns vorgelegt wurde. Im Jubiläumsjahr haben am Frankfurter Flughafen 6800 Veranstaltungen mit insgesamt 72000 Teilnehmern stattgefunden. Im Jahr davor waren es nur 6300 Veranstaltungen mit 70000 Gästen. Im Kongresszentrum, das direkt gegenüber dem Hauptgebäude des Flughafens liegt, gibt es 28 Konferenzräume für bis zu 200 Teilnehmer. Modernste Technik wie Laptop-Anschlüsse und Internetzugänge in allen Konferenzräumen sind ebenso vorhanden, wie ein Dolmetscherdienst und verschiedene Speisemöglichkeiten. Eine transportable Videokonferenz-Anlage ermöglicht Verbindungen in die ganze Welt.",
    traduction: {
      fr: "L'aéroport de Francfort est devenu un lieu très apprécié par de nombreuses entreprises pour organiser des événements et des réunions. C'est ce que montre un rapport présenté à l'occasion du dixième anniversaire du centre des congrès. Durant cette année anniversaire, 6 800 événements réunissant au total 72 000 participants ont eu lieu à l'aéroport. L'année précédente, il n'y avait eu que 6 300 événements et 70 000 participants. Le centre des congrès, situé juste en face du bâtiment principal de l'aéroport, dispose de 28 salles de conférence pouvant accueillir jusqu'à 200 personnes. Les salles sont équipées de technologies modernes, notamment de connexions pour ordinateurs portables et d'un accès à Internet. Un service d'interprétation et plusieurs possibilités de restauration sont également proposés. Un système mobile de visioconférence permet de communiquer avec le monde entier.",
      ar: "أصبح مطار فرانكفورت مكاناً مفضلاً لدى العديد من الشركات لتنظيم الفعاليات والاجتماعات. ويؤكد ذلك تقرير قُدّم بمناسبة الذكرى العاشرة لمركز المؤتمرات. خلال سنة الاحتفال، نُظمت في المطار 6800 فعالية بمشاركة 72000 شخص، بينما كان العدد في السنة السابقة 6300 فعالية و70000 مشارك فقط. ويضم مركز المؤتمرات، الموجود مقابل المبنى الرئيسي للمطار، 28 قاعة للاجتماعات تتسع لما يصل إلى 200 شخص. كما تتوفر القاعات على تجهيزات حديثة مثل توصيلات الحواسيب المحمولة والإنترنت، إضافة إلى خدمة الترجمة الفورية ومرافق مختلفة لتقديم الطعام. ويسمح نظام متنقل للاجتماعات عبر الفيديو بالتواصل مع جميع أنحاء العالم.",
      en: "Frankfurt Airport has become a popular venue for events and conferences among many companies. This is shown by a report presented on the tenth anniversary of the congress centre. During the anniversary year, 6,800 events with a total of 72,000 participants took place at the airport. The previous year there had been only 6,300 events with 70,000 guests. The congress centre, located directly opposite the airport's main building, has 28 conference rooms for up to 200 participants. Modern facilities include laptop connections and internet access in every conference room. An interpreting service and various catering options are also available. A mobile video-conferencing system makes it possible to connect with people all over the world.",
    },
    explication: {
      fr: "Le texte présente le centre des congrès de l'aéroport de Francfort. Il insiste sur le nombre croissant d'événements et de participants, ainsi que sur les équipements modernes proposés aux entreprises. L'idée essentielle est que l'aéroport est devenu un lieu apprécié pour les conférences et les événements professionnels.",
      ar: "يعرض النص مركز المؤتمرات الموجود في مطار فرانكفورت. ويركز على ارتفاع عدد الفعاليات والمشاركين، وعلى التجهيزات الحديثة المتوفرة للشركات. الفكرة الأساسية هي أن المطار أصبح مكاناً محبوباً لتنظيم المؤتمرات والفعاليات المهنية.",
      en: "The text describes the congress centre at Frankfurt Airport. It emphasizes the growing number of events and participants, as well as the modern facilities offered to companies. The main idea is that the airport has become a popular place for conferences and business events.",
    },
  },
  {
    id: 3,
    contenu: "Eine Bürgergruppe mit dem Namen Südliches Frankfurt lädt für Montag kommender Woche, um 19.30 Uhr ins Pfarrhaus St. Mauritius, Mauritiusstraße 14, zu einer öffentlichen Expertenbefragung zum Thema Arbeitsplätze am Frankfurter Flughafen ein. Der Gruppe liegen Berichte und Daten vor, die nach den Worten der Sprecher der Gruppe sehr fantastisch und zweifelhaft sind. Deshalb hat die Bürgergruppe Südliches Frankfurt den Personalleiter des Frankfurter Flughafens, einen Experten aus dem Wirtschaftsministerium, einen bekannten Stadtentwicklungsplaner und einen Soziologen, der sich mit der Arbeitsplatzentwicklung in der Frankfurter Region beschäftigt, eingeladen. Im Anschluss an die Vorträge der Experten haben die Gäste Zeit, Fragen zu stellen.",
    traduction: {
      fr: "Un groupe de citoyens appelé « Francfort-Sud » invite le public à une audition avec des experts sur le thème des emplois à l'aéroport de Francfort. La rencontre aura lieu lundi prochain à 19 h 30, au presbytère St. Mauritius, Mauritiusstraße 14. Le groupe possède des rapports et des données qui, selon ses porte-parole, semblent très optimistes et douteux. C'est pourquoi il a invité le responsable des ressources humaines de l'aéroport, un expert du ministère de l'Économie, un spécialiste reconnu de l'urbanisme ainsi qu'un sociologue qui étudie l'évolution de l'emploi dans la région de Francfort. Après leurs interventions, les participants pourront poser leurs questions.",
      ar: "تدعو مجموعة من المواطنين تُسمى «فرانكفورت الجنوبية» الجمهور إلى لقاء مفتوح مع خبراء حول موضوع فرص العمل في مطار فرانكفورت. سيُعقد اللقاء يوم الاثنين المقبل على الساعة السابعة والنصف مساءً في مقر كنيسة سان موريس، شارع Mauritiusstraße رقم 14. وتتوفر المجموعة على تقارير ومعطيات تعتبرها، حسب تصريحات المتحدثين باسمها، متفائلة بشكل مبالغ فيه ومشكوكاً فيها. ولهذا دعت مسؤول الموارد البشرية في المطار، وخبيراً من وزارة الاقتصاد، ومخططاً معروفاً للتنمية الحضرية، وعالماً اجتماعياً يدرس تطور فرص العمل في منطقة فرانكفورت. وبعد مداخلات الخبراء، سيتمكن الحاضرون من طرح أسئلتهم.",
      en: "A citizens' group called Southern Frankfurt is inviting the public to a meeting with experts about jobs at Frankfurt Airport. The meeting will take place next Monday at 7:30 p.m. at the St. Mauritius parish house, Mauritiusstraße 14. The group has reports and figures which, according to its spokespersons, seem overly optimistic and questionable. It has therefore invited the airport's human resources manager, an expert from the Ministry of Economic Affairs, a well-known urban development planner and a sociologist who studies employment trends in the Frankfurt region. After the experts' presentations, guests will have an opportunity to ask questions.",
    },
    explication: {
      fr: "Le texte annonce une rencontre publique avec plusieurs spécialistes afin de discuter des emplois à l'aéroport de Francfort. Les citoyens veulent examiner des chiffres et des rapports qu'ils jugent douteux. Le titre doit donc associer le thème de l'aéroport à celui des emplois et de la discussion avec des experts.",
      ar: "يعلن النص عن لقاء عمومي يشارك فيه عدد من الخبراء لمناقشة فرص العمل في مطار فرانكفورت. ويريد المواطنون مناقشة الأرقام والتقارير التي يشككون في صحتها. لذلك يجب أن يجمع العنوان بين موضوع المطار وفرص العمل والنقاش.",
      en: "The text announces a public meeting with several specialists to discuss jobs at Frankfurt Airport. The citizens want to examine figures and reports they consider questionable. The heading should therefore connect the airport with employment and public discussion.",
    },
  },
  {
    id: 4,
    contenu: "Das neue Halbjahresprogramm der Evangelischen Familienbildungsstätte bringt eine Übersicht über viele Veranstaltungen. Neben Kursen wie Geburtsvorbereitung und Babypflege steht diesmal das Thema Berufstätige Eltern im Mittelpunkt. In Gruppen und Kursen vor allem für Frauen geht es darum, wie sich nach der Geburt eines Kindes Beruf und Familie miteinander vereinbaren lassen. Das Verhältnis zwischen Mann und Frau spielt eine große Rolle im Angebot der Familienbildung; hierzu gibt es wieder spezielle Programme nur für Frauen oder nur für Männer. Auch zum Verhältnis der Generationen (Großeltern und Enkelkinder) gibt es wieder Angebote. Darüber hinaus wartet das Programm mit Kursen für Entspannung und Zeitmanagement auf, die bei Fragen des Alltags helfen wollen.",
    traduction: {
      fr: "Le nouveau programme semestriel du centre protestant d'éducation familiale présente un aperçu de nombreuses activités. En plus des cours de préparation à la naissance et de soins aux bébés, le thème principal cette fois-ci est celui des parents qui travaillent. Des groupes et des cours, destinés surtout aux femmes, expliquent comment concilier vie professionnelle et vie familiale après la naissance d'un enfant. Les relations entre hommes et femmes occupent également une place importante dans le programme. Des activités spécifiques sont proposées aux femmes ou aux hommes. Il existe aussi des activités consacrées aux relations entre les générations, notamment entre les grands-parents et les petits-enfants. Enfin, le programme propose des cours de relaxation et de gestion du temps pour aider à faire face aux difficultés de la vie quotidienne.",
      ar: "يقدم البرنامج الجديد لنصف السنة الخاص بمركز التعليم الأسري البروتستانتي مجموعة متنوعة من الأنشطة. وإلى جانب دورات الاستعداد للولادة والعناية بالرضع، يركز البرنامج هذه المرة على موضوع الآباء والأمهات العاملين. وتتناول مجموعات ودورات، خاصة الموجهة للنساء، كيفية التوفيق بين العمل والأسرة بعد ولادة طفل. كما تحتل العلاقة بين الرجل والمرأة مكانة مهمة في أنشطة المركز، حيث توجد برامج خاصة بالنساء وأخرى خاصة بالرجال. وتوجد أيضاً أنشطة تهتم بالعلاقة بين الأجيال، مثل العلاقة بين الأجداد والأحفاد. بالإضافة إلى ذلك، يقدم البرنامج دورات للاسترخاء وتنظيم الوقت بهدف المساعدة على مواجهة متطلبات الحياة اليومية.",
      en: "The new half-year programme of the Protestant Family Education Centre provides an overview of many activities. Alongside courses such as preparation for childbirth and baby care, the main focus this time is on working parents. Groups and courses, especially for women, deal with how to balance work and family life after the birth of a child. Relationships between men and women are also an important part of the programme, with special activities for women and for men. There are also activities concerning relationships between generations, such as grandparents and grandchildren. In addition, the programme offers relaxation and time-management courses to help people deal with everyday challenges.",
    },
    explication: {
      fr: "Le programme du centre familial propose plusieurs activités, mais le thème mis particulièrement en avant est celui des parents qui travaillent. Il s'agit notamment de trouver un équilibre entre la vie professionnelle et la vie familiale après la naissance d'un enfant. Le titre A correspond donc exactement à l'idée principale.",
      ar: "يقدم المركز الأسري أنشطة متعددة، لكن الموضوع الذي يحظى بالتركيز الأكبر هو الآباء والأمهات العاملون. ويتعلق الأمر خصوصاً بكيفية تحقيق التوازن بين الحياة المهنية والحياة الأسرية بعد ولادة طفل. لذلك فإن العنوان A يعبر عن الفكرة الرئيسية.",
      en: "The family centre offers many activities, but its main focus is on working parents. In particular, it addresses how to balance professional and family life after having a child. Heading A therefore expresses the central idea.",
    },
  },
  {
    id: 5,
    contenu: "Die Volkshochschule Dornbirn bietet in den kommenden Wochen neue Kurse an. Am Mittwoch nächster Woche beginnen zwei Malkurse für Kinder. Zweieinhalb- bis vierjährige Kinder treffen sich um 15.30 Uhr, Kinder im Alter von fünf und sechs Jahren um 17.00 Uhr. Für Kinder im Alter zwischen eineinhalb und sechs Jahren und ihre Väter beginnt am Samstag um 10.00 Uhr eine feste Vater-Kind-Gruppe. Am darauf-folgenden Samstag gibt es dann auch ein Treffen für Väter und Kinder bis dreieinhalb Jahren. Etwas anderes ist die Kultur- und Kreativwerkstatt am Montag nächster Woche. Aus Ton und Erde sollen Figuren nach afrikanischen Beispielen gebastelt werden. Zur Vorbereitung treffen sich die Teilnehmer am kommenden Montag zuerst im Museum. Anmeldung spätestens morgen bis 15.00 Uhr.",
    traduction: {
      fr: "L'université populaire de Dornbirn propose de nouveaux cours au cours des prochaines semaines. Deux cours de peinture pour enfants commenceront mercredi prochain. Les enfants âgés de deux ans et demi à quatre ans se retrouveront à 15 h 30, tandis que ceux de cinq et six ans commenceront à 17 h. Un groupe régulier père-enfant débutera samedi à 10 h pour les enfants de 18 mois à six ans accompagnés de leur père. Le samedi suivant, une autre rencontre sera organisée pour les pères et les enfants jusqu'à trois ans et demi. Un autre atelier, culturel et créatif, aura lieu lundi prochain. Les participants fabriqueront des figurines en argile et en terre inspirées de modèles africains. Pour préparer l'activité, ils se retrouveront d'abord au musée lundi prochain. L'inscription doit être faite au plus tard demain avant 15 h.",
      ar: "تقدم الجامعة الشعبية في مدينة دورنبيرن دورات جديدة خلال الأسابيع المقبلة. وستبدأ يوم الأربعاء المقبل دورتان للرسم مخصصتان للأطفال. يلتقي الأطفال الذين تتراوح أعمارهم بين سنتين ونصف وأربع سنوات على الساعة الثالثة والنصف بعد الظهر، بينما يلتقي الأطفال في سن الخامسة والسادسة على الساعة الخامسة. كما ستنطلق يوم السبت على الساعة العاشرة صباحاً مجموعة منتظمة تجمع الآباء بأطفالهم الذين تتراوح أعمارهم بين سنة ونصف وست سنوات. وفي السبت الذي يليه، سيُنظم لقاء آخر للآباء والأطفال الذين لا تتجاوز أعمارهم ثلاث سنوات ونصف. وهناك أيضاً ورشة ثقافية وإبداعية يوم الاثنين المقبل، حيث سيصنع المشاركون أشكالاً من الطين والتراب مستوحاة من نماذج إفريقية. وسيجتمع المشاركون أولاً في المتحف للتحضير للنشاط. وآخر موعد للتسجيل هو غداً قبل الساعة الثالثة بعد الظهر.",
      en: "Dornbirn Adult Education Centre is offering new courses over the coming weeks. Two painting courses for children will begin next Wednesday. Children aged two and a half to four will meet at 3:30 p.m., while children aged five and six will meet at 5 p.m. A regular father-and-child group for children aged one and a half to six and their fathers will start on Saturday at 10 a.m. The following Saturday there will also be a meeting for fathers and children up to three and a half years old. Another activity is the cultural and creative workshop next Monday. Participants will make figures out of clay and earth, inspired by African examples. To prepare, they will first meet at the museum next Monday. Registration must be completed by tomorrow at 3 p.m. at the latest.",
    },
    explication: {
      fr: "Le texte présente plusieurs nouveaux cours et activités proposés aux enfants et à leurs familles : peinture pour différentes tranches d'âge, rencontres entre pères et enfants et atelier créatif. Le titre le plus général et le plus adapté est « Neue Kurse für Kinder ». Le texte ne parle pas principalement d'une visite guidée du musée.",
      ar: "يعرض النص مجموعة من الدورات والأنشطة الجديدة الموجهة للأطفال وعائلاتهم، مثل الرسم للأطفال حسب أعمارهم، ولقاءات الآباء مع أطفالهم، وورشة إبداعية. والعنوان الأنسب والأكثر شمولاً هو «دورات جديدة للأطفال». فالنص لا يتحدث أساساً عن جولة سياحية في المتحف.",
      en: "The text presents several new courses and activities for children and their families: painting classes for different age groups, father-and-child meetings and a creative workshop. The most suitable general heading is 'New courses for children'. The text is not mainly about a guided museum tour.",
    },
  },
]

const ueberschriften: {
  id: string
  text: string
  traduction: Multi
  explication: Multi
}[] = [
  {
    id: 'A',
    text: 'Familienbildung Schwerpunkt Beruf und Familie',
    traduction: {
      fr: 'Éducation familiale : priorité à la vie professionnelle et à la famille',
      ar: 'التربية الأسرية: التركيز على العمل والأسرة',
      en: 'Family education: focus on work and family',
    },
    explication: {
      fr: "Ce titre correspond au texte 4. Le programme du centre familial met l'accent sur la manière de concilier travail et famille, notamment après la naissance d'un enfant.",
      ar: 'يناسب هذا العنوان النص رقم 4، حيث يركز برنامج المركز الأسري على كيفية التوفيق بين العمل والأسرة، خاصة بعد ولادة طفل.',
      en: 'This heading matches text 4. The family centre programme focuses on balancing work and family life, especially after the birth of a child.',
    },
  },
  {
    id: 'B',
    text: 'Demonstration gegen Fluglärm',
    traduction: {
      fr: 'Manifestation contre le bruit des avions',
      ar: 'مظاهرة ضد ضجيج الطائرات',
      en: 'Demonstration against aircraft noise',
    },
    explication: {
      fr: "Une manifestation est un rassemblement de protestation. Le texte 1 annonce une soirée d'information avec des intervenants, et non une manifestation. Ce titre est donc un piège.",
      ar: 'المظاهرة هي تجمع للاحتجاج. أما النص رقم 1 فيعلن عن أمسية إعلامية يشارك فيها متدخلون، وليس عن مظاهرة. لذلك فهذا العنوان غير مناسب.',
      en: 'A demonstration is a protest gathering. Text 1 announces an information evening with speakers, not a demonstration. This heading is therefore a distractor.',
    },
  },
  {
    id: 'C',
    text: 'Flughafen Frankfurt wird 10 Jahre',
    traduction: {
      fr: "L'aéroport de Francfort fête ses 10 ans",
      ar: 'مطار فرانكفورت يحتفل بمرور عشر سنوات',
      en: 'Frankfurt Airport celebrates its tenth anniversary',
    },
    explication: {
      fr: "Le texte 2 mentionne le dixième anniversaire du centre des congrès, et non celui de l'aéroport lui-même. Il parle surtout des événements organisés dans le centre.",
      ar: 'يشير النص رقم 2 إلى الذكرى العاشرة لمركز المؤتمرات، وليس إلى الذكرى العاشرة للمطار نفسه. كما أنه يركز أساساً على الفعاليات التي تُنظم في المركز.',
      en: 'Text 2 mentions the tenth anniversary of the congress centre, not the airport itself. Its main subject is the events held at the centre.',
    },
  },
  {
    id: 'D',
    text: 'Flughafen Frankfurt beliebter Veranstaltungsort',
    traduction: {
      fr: "L'aéroport de Francfort, un lieu très apprécié pour les événements",
      ar: 'مطار فرانكفورت مكان مفضل لتنظيم الفعاليات',
      en: 'Frankfurt Airport: a popular event venue',
    },
    explication: {
      fr: "Ce titre correspond au texte 2. Celui-ci explique que de nombreuses entreprises choisissent le centre des congrès de l'aéroport pour leurs événements et conférences. Le nombre de manifestations et de participants augmente.",
      ar: 'يناسب هذا العنوان النص رقم 2، الذي يوضح أن العديد من الشركات تختار مركز المؤتمرات في المطار لتنظيم الفعاليات والاجتماعات. كما ارتفع عدد الفعاليات والمشاركين.',
      en: 'This heading matches text 2. Many companies choose the airport congress centre for events and conferences, and the number of events and participants is increasing.',
    },
  },
  {
    id: 'E',
    text: 'Experten gegen Vergrößerung des Flughafens',
    traduction: {
      fr: "Des experts contre l'agrandissement de l'aéroport",
      ar: 'خبراء ضد توسيع المطار',
      en: 'Experts against airport expansion',
    },
    explication: {
      fr: "Le texte 1 parle bien de l'agrandissement de l'aéroport, mais il ne dit pas que des experts s'y opposent. La réunion concerne surtout le bruit et les conséquences environnementales.",
      ar: 'يتحدث النص رقم 1 بالفعل عن توسيع المطار، لكنه لا يقول إن الخبراء يعارضون هذا التوسع. فالاجتماع يركز أساساً على الضجيج والآثار البيئية.',
      en: 'Text 1 does discuss airport expansion, but it does not say that experts oppose it. The meeting mainly concerns noise and environmental consequences.',
    },
  },
  {
    id: 'F',
    text: 'Diskussion über Flughafen und Arbeitsplätze',
    traduction: {
      fr: "Discussion sur l'aéroport et les emplois",
      ar: 'نقاش حول المطار وفرص العمل',
      en: 'Discussion about the airport and jobs',
    },
    explication: {
      fr: "Ce titre correspond au texte 3. Une association de citoyens organise une rencontre publique avec plusieurs experts pour discuter des emplois à l'aéroport de Francfort et examiner des chiffres jugés douteux.",
      ar: 'يناسب هذا العنوان النص رقم 3. تنظم مجموعة من المواطنين لقاءً عمومياً مع خبراء لمناقشة فرص العمل في مطار فرانكفورت ومراجعة أرقام يعتبرونها مشكوكاً فيها.',
      en: 'This heading matches text 3. A citizens’ group is organizing a public meeting with experts to discuss jobs at Frankfurt Airport and examine figures considered questionable.',
    },
  },
  {
    id: 'G',
    text: 'Neue Kurse: Spiele für Mütter und Kinder',
    traduction: {
      fr: 'Nouveaux cours : jeux pour les mères et les enfants',
      ar: 'دورات جديدة: ألعاب للأمهات والأطفال',
      en: 'New courses: activities for mothers and children',
    },
    explication: {
      fr: "Le texte 5 présente des cours de peinture pour enfants, des rencontres entre pères et enfants et un atelier créatif. Il ne parle pas de jeux destinés aux mères et aux enfants.",
      ar: 'يعرض النص رقم 5 دورات للرسم للأطفال ولقاءات بين الآباء وأطفالهم وورشة إبداعية. لكنه لا يتحدث عن ألعاب مخصصة للأمهات والأطفال.',
      en: 'Text 5 presents painting classes for children, meetings for fathers and children, and a creative workshop. It does not describe activities specifically for mothers and children.',
    },
  },
  {
    id: 'H',
    text: 'Umwelt und Flughafen: Ein Informationsabend der Bürger',
    traduction: {
      fr: "Environnement et aéroport : une soirée d'information organisée par les citoyens",
      ar: 'البيئة والمطار: أمسية إعلامية ينظمها المواطنون',
      en: 'Environment and airport: an information evening organized by citizens',
    },
    explication: {
      fr: "Ce titre correspond au texte 1. Un groupe de citoyens organise une soirée d'information sur l'agrandissement de l'aéroport, le bruit des avions et les conséquences du trafic aérien sur la nature.",
      ar: 'يناسب هذا العنوان النص رقم 1. تنظم مجموعة من المواطنين أمسية إعلامية حول توسيع المطار وضجيج الطائرات وتأثير حركة الطيران على الطبيعة.',
      en: 'This heading matches text 1. A citizens’ group organizes an information evening about airport expansion, aircraft noise and the effects of air traffic on nature.',
    },
  },
  {
    id: 'I',
    text: 'Neue Kurse für Kinder',
    traduction: {
      fr: 'Nouveaux cours pour les enfants',
      ar: 'دورات جديدة للأطفال',
      en: 'New courses for children',
    },
    explication: {
      fr: "Ce titre correspond au texte 5. La Volkshochschule propose plusieurs nouvelles activités pour les enfants : cours de peinture, rencontres père-enfant et atelier créatif.",
      ar: 'يناسب هذا العنوان النص رقم 5. تقدم الجامعة الشعبية أنشطة جديدة للأطفال، مثل دروس الرسم ولقاءات الآباء مع الأطفال وورشة إبداعية.',
      en: 'This heading matches text 5. The adult education centre offers several new activities for children, including painting classes, father-and-child meetings and a creative workshop.',
    },
  },
  {
    id: 'J',
    text: 'Neue Kurse: Museumsführung für junge Väter',
    traduction: {
      fr: 'Nouveaux cours : visite guidée du musée pour les jeunes pères',
      ar: 'دورات جديدة: جولة في المتحف للآباء الشباب',
      en: 'New courses: museum tour for young fathers',
    },
    explication: {
      fr: "Le texte 5 mentionne le musée uniquement comme lieu de rendez-vous pour préparer un atelier créatif. Il ne propose pas de visite guidée du musée pour les pères.",
      ar: 'يذكر النص رقم 5 المتحف فقط كمكان للقاء والتحضير لورشة إبداعية. ولا يقترح جولة إرشادية في المتحف للآباء.',
      en: 'Text 5 mentions the museum only as a meeting place to prepare for a creative workshop. It does not offer a guided museum tour for fathers.',
    },
  },
]

const korrekt: Record<number, string> = {
  1: 'H',
  2: 'D',
  3: 'F',
  4: 'A',
  5: 'I',
}

export default function ExerciceCaroline() {
  const [reponses, setReponses] = useState<Record<number, string>>({})
  const [selection, setSelection] = useState<string | null>(null)
  const [corrige, setCorrige] = useState(false)
  const [einzelPruefung, setEinzelPruefung] = useState<Record<number, boolean>>({})
  const [langue, setLangue] = useState<Lang>('fr')
  const [traductionsTextes, setTraductionsTextes] = useState<number[]>([])
  const [explicationsTextes, setExplicationsTextes] = useState<number[]>([])
  const [detailsTitres, setDetailsTitres] = useState<string[]>([])

  const choisir = (texteId: number, titreId: string) => {
    if (corrige) return

    setReponses(prev => {
      const nouvelle = { ...prev }

      Object.keys(nouvelle).forEach(id => {
        if (nouvelle[Number(id)] === titreId) {
          delete nouvelle[Number(id)]
        }
      })

      nouvelle[texteId] = titreId
      return nouvelle
    })

    setEinzelPruefung(prev => ({ ...prev, [texteId]: false }))
    setSelection(null)
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
    if (Object.keys(reponses).length !== 5) return
    setCorrige(true)
    setSelection(null)
  }

  const pruefenEinzeln = (texteId: number) => {
    if (!reponses[texteId]) return

    setEinzelPruefung(prev => ({
      ...prev,
      [texteId]: true,
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

  const progression = Object.keys(reponses).length

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

        <Link href="/espace-etudiant/examens/b1/lesen" className="back-link">
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
          <h1>Caroline</h1>
          <p>Lesen Sie die Texte und ordnen Sie die passenden Überschriften zu.</p>

          <div className="progress-area">
            <div className="progress-label">
              <span>Fortschritt</span>
              <strong>{progression}/5</strong>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progression * 20}%` }}
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
                  className={`text-card ${selection && !corrige ? 'selectable target' : ''} ${
                    dejaVerifie && reponse
                      ? istRichtig
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
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
                          retirer(texte.id)
                        }}
                      >
                        {reponse} · {ueberschriften.find(t => t.id === reponse)?.text}
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
                        <div className={`instant-feedback ${istRichtig ? 'right' : 'wrong'}`}>
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

                  <div className="help-actions" onClick={e => e.stopPropagation()}>
                    <button
                      className={`help-button ${traductionOuverte ? 'active' : ''}`}
                      onClick={() =>
                        basculer(texte.id, traductionsTextes, setTraductionsTextes)
                      }
                    >
                      <Languages size={15} />
                      Traduction
                      {traductionOuverte
                        ? <ChevronUp size={15} />
                        : <ChevronDown size={15} />}
                    </button>

                    <button
                      className={`help-button ${explicationOuverte ? 'active' : ''}`}
                      onClick={() =>
                        basculer(texte.id, explicationsTextes, setExplicationsTextes)
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
                      className={`translation-panel ${langue === 'ar' ? 'arabic' : ''}`}
                      dir={langue === 'ar' ? 'rtl' : 'ltr'}
                    >
                      <strong>{langues[langue]}</strong>
                      <p>{texte.traduction[langue]}</p>
                    </div>
                  )}

                  {explicationOuverte && (
                    <div
                      className={`explanation-panel ${langue === 'ar' ? 'arabic' : ''}`}
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
                    <div className="correct-answer">
                      Richtige Antwort: {korrekt[texte.id]}
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
                    className={`title-item ${selection === titel.id ? 'chosen' : ''} ${
                      benutzt ? 'used' : ''
                    }`}
                  >
                    <button
                      className={`title-option ${
                        selection === titel.id ? 'selected' : ''
                      } ${benutzt ? 'used' : ''}`}
                      draggable={!benutzt && !corrige}
                      onDragStart={e => e.dataTransfer.setData('text/plain', titel.id)}
                      onClick={() => {
                        if (benutzt || corrige) return
                        setSelection(selection === titel.id ? null : titel.id)
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
                      {detailOuvert
                        ? <ChevronUp size={14} />
                        : <ChevronDown size={14} />}
                    </button>

                    {detailOuvert && (
                      <div
                        className={`title-detail ${langue === 'ar' ? 'arabic' : ''}`}
                        dir={langue === 'ar' ? 'rtl' : 'ltr'}
                      >
                        <div className="title-translation">
                          <strong>{langues[langue]}</strong>
                          <p>{titel.traduction[langue]}</p>
                        </div>
                        <div className="title-explanation">
                          <strong>
                            <Lightbulb size={14} />
                            Explication
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
              disabled={progression !== 5}
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
                <RotateCcw size={17} />
                Noch einmal versuchen
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

        .header-brand > span {
          display: inline-flex;
          gap: 5px;
        }

        .brand-white { color: #FFFFFF; }
        .brand-gold { color: #b49760; }

        .back-link {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
        }

        .back-link svg { color: #b49760; }

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

        .progress-label strong { color: #b49760; }

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

        .language-label svg { color: #806337; }

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

        .text-card.selectable { cursor: pointer; }

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

        .individual-check { margin: 12px 0 17px; }

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

        .individual-check-button:hover { background: #294B78; }

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
        .explanation-panel p { margin: 7px 0 0; }

        .arabic {
          text-align: right;
          font-size: 15px;
          line-height: 2.1;
        }

        .arabic strong { justify-content: flex-start; }

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

        .title-option:disabled { cursor: default; }

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

        .title-help:hover { color: #192b43; }

        .title-detail {
          margin-top: 7px;
          padding: 12px;
          background: #f7f5f0;
          border-radius: 8px;
          color: #45556B;
          font-size: 12px;
          line-height: 1.7;
        }

        .title-detail p { margin: 5px 0 0; }

        .title-translation {
          padding-bottom: 10px;
          border-bottom: 1px solid #e3ded3;
        }

        .title-explanation { padding-top: 10px; }

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
          .exercise-layout { grid-template-columns: 1fr; }
          .titles-column {
            position: static;
            grid-row: 1;
          }
        }

        @media(max-width: 600px) {
          .exercise-content { padding: 20px 12px 40px; }
          .exercise-hero { padding: 24px 18px; }
          .exercise-hero h1 { font-size: 24px; }
          .exercise-header { padding: 0 14px; }
          .text-card { padding: 15px; }
          .german-text { font-size: 13px; line-height: 1.9; }
          .language-bar { gap: 10px; padding: 13px; }
          .language-hint { width: 100%; }
          .titles-column { padding: 14px; }
          .title-option { min-height: 58px; font-size: 12px; }
          .empty-slot { min-height: 62px; }
          .assigned-title { min-height: 58px; }
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

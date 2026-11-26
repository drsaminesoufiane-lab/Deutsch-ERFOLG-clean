
'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  GraduationCap,
  Languages,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff
} from 'lucide-react'

type Lang = 'fr' | 'ar' | 'en'

const ads = [
  {
    id: 'A',
    title: 'Farb- und Stilberatung',
    text: 'Die Nachfrage nach individueller Farb- und Stilberatung ist groß. Denn wer heute im Geschäfts- wie auch im Privatleben erfolgreich sein möchte, muss sich in Outfit und Benehmen vorteilhaft präsentieren können. Der Leitfaden zeigt Ihnen, wie Sie sich selbst am besten in Szene setzen. Von der passenden und farblich stimmigen Garderobe über Make-up und Accessoires bis zu modernen Umgangsformen. Nutzen Sie also diesen "Kurs" als Eintrittskarte in diese reizvolle Welt der Selbstdarstellung. Sie werden garantiert mit einem überzeugenden und gewinnenden persönlichen Auftritt davon profitieren.',
    fr: 'La demande de conseils personnalisés en matière de couleurs et de style est importante. Pour réussir dans la vie professionnelle comme privée, il faut savoir se présenter avantageusement par sa tenue et son comportement. Ce guide vous montre comment mettre votre personnalité en valeur : vêtements adaptés, harmonie des couleurs, maquillage, accessoires et règles de savoir-vivre modernes.',
    ar: 'هناك طلب كبير على الاستشارات الفردية المتعلقة بالألوان والأناقة. فمن أجل النجاح في الحياة المهنية والخاصة، يجب أن يعرف الشخص كيف يقدم نفسه من خلال ملابسه وسلوكه. يوضح هذا الدليل كيفية إبراز شخصيتك، من اختيار الملابس والألوان المناسبة إلى المكياج والإكسسوارات وقواعد التعامل الحديثة.',
    en: 'There is strong demand for individual colour and style advice. To succeed professionally and privately, people need to present themselves well through their clothing and behaviour. This guide explains how to make the best impression, from suitable clothes and matching colours to make-up, accessories and modern manners.'
  },
  {
    id: 'B',
    title: 'Besser lernen und behalten',
    text: 'Die meisten Menschen kennen keine Strategien, wie sie ihr Lernverhalten und die Fähigkeit, sich Informationen zu merken, gezielt trainieren können. Dieses Buch gibt zunächst einen Überblick, wie das menschliche Gedächtnis funktioniert, und bietet dann eine Fülle von Techniken an, mit denen auch Ungeübte sich das Lernen und Arbeiten leichter machen können.',
    fr: 'La plupart des gens ne connaissent pas les stratégies permettant d’améliorer leur manière d’apprendre et leur capacité à mémoriser des informations. Ce livre explique d’abord le fonctionnement de la mémoire humaine, puis propose de nombreuses techniques pour faciliter l’apprentissage et le travail, même pour les débutants.',
    ar: 'لا يعرف معظم الناس الاستراتيجيات التي تساعدهم على تحسين طريقة التعلم وتقوية القدرة على تذكر المعلومات. يشرح هذا الكتاب أولاً كيفية عمل الذاكرة البشرية، ثم يقدم مجموعة كبيرة من التقنيات التي تجعل التعلم والعمل أسهل حتى بالنسبة للمبتدئين.',
    en: 'Most people do not know strategies for improving their learning habits and memory. This book first explains how human memory works and then offers many techniques that make learning and working easier, even for inexperienced learners.'
  },
  {
    id: 'C',
    title: 'Über den Umgang mit Menschen',
    text: 'Dieses erstmals 1788 erschienene Buch handelt von dem Umgang der Menschen miteinander und gibt Ratschläge, wie man sich im Umgang mit Menschen verschiedenster Alters- und Rangstufen richtig verhält. Es definiert, was Gutes und was schlechtes Verhalten ist, und galt so lange Zeit als ein Leitfaden für “richtiges” Benehmen.',
    fr: 'Ce livre, publié pour la première fois en 1788, traite des relations entre les personnes. Il donne des conseils sur la manière de se comporter avec des personnes de différents âges et de différents rangs sociaux. Il définit les bons et les mauvais comportements et a longtemps été considéré comme un guide du savoir-vivre.',
    ar: 'يتناول هذا الكتاب، الذي نُشر لأول مرة سنة 1788، كيفية تعامل الناس فيما بينهم. ويقدم نصائح حول السلوك المناسب عند التعامل مع أشخاص من مختلف الأعمار والمكانات الاجتماعية. كما يحدد السلوك الجيد والسيئ، وقد اعتُبر لفترة طويلة دليلاً لقواعد اللباقة.',
    en: 'First published in 1788, this book deals with how people interact. It gives advice on behaving correctly towards people of different ages and social ranks. It defines good and bad behaviour and was long regarded as a guide to proper manners.'
  },
  {
    id: 'D',
    title: 'Das innere Tennisspiel',
    text: "Tim Gallwey entwickelte die Theorie vom Tennis-Spiel, das sich im Kopf abspielt. Er zeigt, wie jeder sein Leben frei von Angst und mit Eleganz spielen kann, ohne in Selbstzweifel oder Unkonzentriertheit zu verfallen. Das Gallwey'sche Tennisspiel setzt ungeahnte Energien frei und zeigt das grenzenlose Potential des menschlichen Körpers und Geistes, wenn es darum geht, seine Lebensziele zu verfolgen und zu erreichen.",
    fr: 'Tim Gallwey a développé la théorie selon laquelle le jeu de tennis se déroule aussi dans la tête. Il montre comment chacun peut vivre sans peur et avec élégance, sans tomber dans le doute de soi ou le manque de concentration. Cette méthode révèle le potentiel du corps et de l’esprit pour poursuivre et atteindre ses objectifs.',
    ar: 'طور تيم غالوي نظرية مفادها أن لعبة التنس تحدث أيضاً داخل العقل. ويوضح كيف يمكن للإنسان أن يعيش دون خوف وبثقة، دون الوقوع في الشك أو فقدان التركيز. وتكشف هذه الطريقة عن الإمكانات الكبيرة للجسم والعقل من أجل متابعة الأهداف وتحقيقها.',
    en: 'Tim Gallwey developed the theory that tennis is also a game played in the mind. He shows how people can live without fear and with confidence, avoiding self-doubt and lack of concentration. His approach reveals the great potential of body and mind when pursuing life goals.'
  },
  {
    id: 'E',
    title: 'Erfolgreich kommunizieren und reden',
    text: 'Jeder Mensch kann seine kommunikativen Möglichkeiten entdecken und damit sein Leben bereichern. Die Themen des Buches sind: Die Grundlagen der Kommunikation, Rede und Vortrag, Gespräche erfolgreich führen, Sicherheit gewinnen und Redeängste überwinden, Zeitmanagement für Redner und Konferenzleiter und vieles mehr. Ein ausführlicher Praxisteil mit zahlreichen Übungen ermöglicht es dem Leser, seine rhetorischen Fähigkeiten zu trainieren.',
    fr: 'Chacun peut découvrir ses capacités de communication et enrichir ainsi sa vie. Ce livre aborde les bases de la communication, les discours et présentations, la conduite efficace des conversations, la confiance en soi et la manière de surmonter la peur de parler. Une partie pratique avec de nombreux exercices permet d’entraîner ses compétences oratoires.',
    ar: 'يمكن لكل شخص اكتشاف قدراته في التواصل وإثراء حياته بها. يتناول الكتاب أساسيات التواصل والخطابة والعروض، وإدارة الحوارات بنجاح، واكتساب الثقة والتغلب على الخوف من التحدث أمام الآخرين. كما يحتوي على تمارين عملية كثيرة لتطوير مهارات التعبير والخطابة.',
    en: 'Everyone can discover their communication skills and enrich their life. The book covers communication basics, speeches and presentations, successful conversations, gaining confidence and overcoming fear of public speaking. A practical section with many exercises helps readers train their speaking skills.'
  },
  {
    id: 'F',
    title: 'Gute Manieren in der Schule?',
    text: 'Gute Umgangsformen sind wieder “in”. Aber gilt das auch in der Schule? Auf humorvolle Weise erzählt die Autorin aus ihrem Alltag als Lehrerin an einer Realschule. Von gutem Benehmen kann da nicht immer die Rede sein - übrigens auch nicht bei den Eltern.',
    fr: 'Les bonnes manières sont de nouveau à la mode. Mais est-ce aussi le cas à l’école ? Avec humour, l’auteure raconte son quotidien d’enseignante dans un collège. Le bon comportement n’est pas toujours au rendez-vous, et cela concerne également les parents.',
    ar: 'عادت قواعد السلوك الجيد إلى الموضة. لكن هل ينطبق ذلك أيضاً على المدرسة؟ تروي الكاتبة بأسلوب فكاهي حياتها اليومية كمدرسة في مدرسة إعدادية. فالسلوك الجيد ليس حاضراً دائماً، حتى لدى الآباء.',
    en: 'Good manners are fashionable again. But is that also true at school? The author humorously describes her everyday life as a teacher. Good behaviour is not always present among pupils, and the same is true of their parents.'
  },
  {
    id: 'G',
    title: 'Reden wir miteinander?',
    text: 'Frieder Schulze "Reden wir miteinander oder aneinander vorbei?" Manche Missverständnisse entstehen, wenn Menschen miteinander reden, besonders im privaten Bereich erleben wir das oft. Wenn Kommunikation erfolgreich sein soll, ist die Fähigkeit erforderlich, den anderen zu durchschauen und seelische Vorgänge und menschliche Probleme zu erkennen. Viele Beispiele zeigen, wie psychologische Aspekte menschliche Kommunikation verkomplizieren können und wie man damit am besten klar kommen kann.',
    fr: 'Frieder Schulze : « Communiquons-nous vraiment ou parlons-nous sans nous comprendre ? » Certains malentendus apparaissent lorsque les gens discutent, notamment dans la vie privée. Pour communiquer efficacement, il faut comprendre l’autre, ses émotions et ses problèmes. De nombreux exemples montrent comment les aspects psychologiques compliquent la communication et comment mieux les gérer.',
    ar: 'فريدر شولزه: «هل نتحدث مع بعضنا أم لا نفهم بعضنا؟». تنشأ بعض حالات سوء الفهم أثناء التواصل، خاصة في الحياة الخاصة. وللتواصل بنجاح يجب فهم الطرف الآخر ومشاعره ومشكلاته الإنسانية. توضح أمثلة عديدة كيف تؤثر العوامل النفسية في التواصل وكيف يمكن التعامل معها.',
    en: 'Frieder Schulze asks: “Are we communicating with each other or talking past each other?” Misunderstandings often occur in conversations, especially in private life. Successful communication requires understanding other people, their feelings and problems. Examples explain how psychological factors complicate communication and how to deal with them.'
  },
  {
    id: 'H',
    title: 'Die Sprache des Körpers',
    text: 'Der Körper lügt nicht, Gesten und Gebärden decken die Ebene des Unbewusstsein auf: Wer einen erhobenen Zeigefinger oder eine gerümpfte Nase sieht, versteht sofort, was der Gesprächspartner meint, auch wenn der mit Worten etwas anderes sagt. Dieses Buch gibt einen anschaulichen Überblick über die Signale, die wir ständig mit unserem Körper senden, und hilft uns zu verstehen, was jemand in Wahrheit gerade denkt und meint.',
    fr: 'Le corps ne ment pas. Les gestes et les expressions révèlent ce qui se passe dans l’inconscient. Un index levé ou un nez froncé peut nous faire comprendre ce que pense réellement notre interlocuteur, même si ses paroles disent autre chose. Ce livre présente les signaux que nous transmettons constamment avec notre corps.',
    ar: 'الجسد لا يكذب. فالإيماءات والحركات تكشف ما يدور في اللاوعي. عندما نرى إصبعاً مرفوعاً أو أنفاً متجعداً، يمكننا فهم ما يقصده الشخص الآخر حتى لو قالت كلماته شيئاً مختلفاً. يقدم هذا الكتاب نظرة واضحة عن الإشارات التي نرسلها بأجسادنا.',
    en: 'The body does not lie. Gestures and movements reveal the unconscious. A raised finger or a wrinkled nose can show what someone really means, even when their words say something different. This book explains the signals we constantly send with our bodies.'
  },
  {
    id: 'I',
    title: 'Basiswissen: Bewerbungstraining',
    text: 'Rolph Barth "Basiswissen: Bewerbungstraining" Die Konkurrenz auf dem Arbeitsmarkt um immer knapper werdende freie Stellen ist groß. Umso wichtiger ist es zu wissen, wie man sich richtig bewirbt. Dieses Buch gibt Arbeitsuchenden umfassende Informationen zur erfolgreichen Bewerbung und bereitet optimal auf das Vorstellungsgespräch vor. Im Übungsteil werden gute Formulierungen für das Anschreiben und das sichere Auftreten des Bewerbers im Gespräch trainiert.',
    fr: 'Rolph Barth : « Les bases de la préparation à une candidature ». La concurrence pour les emplois disponibles est forte. Il est donc important de savoir comment présenter une bonne candidature. Ce livre donne des informations complètes aux personnes en recherche d’emploi et les prépare à l’entretien d’embauche. Des exercices permettent de travailler la rédaction de la lettre de motivation et la présentation devant un recruteur.',
    ar: 'رولف بارث: «أساسيات التدريب على التوظيف». المنافسة كبيرة على فرص العمل المتاحة، لذلك من المهم معرفة كيفية تقديم طلب توظيف جيد. يقدم هذا الكتاب معلومات شاملة للباحثين عن عمل ويعدهم لمقابلات التوظيف، كما يتضمن تمارين لصياغة رسائل التقديم والتصرف بثقة أثناء المقابلة.',
    en: 'Rolph Barth: “Basic Job Application Training”. Competition for available jobs is strong. This book provides job seekers with comprehensive information on successful applications and prepares them for interviews. Exercises help readers write good application letters and present themselves confidently during interviews.'
  },
  {
    id: 'J',
    title: 'Richtig präsentieren',
    text: 'Brigitte Hübner "Richtig präsentieren" Dieses Buch ist ein Leitfaden für alle, die Teamsitzungen, Besprechungen, Workshops und Konferenzen durchführen. Anhand vieler praktischer Beispiele erhält der Leser Anregungen zum gekonnten visualisieren, zur gut geplanten und sicher durchgeführten Präsentation und zur effektiv gestalteten Besprechung. Es zeigt, wie durch den Einsatz von Bildern und Grafiken Präsentationen aufgelockert und Informationen besser verstanden werden können.',
    fr: 'Brigitte Hübner : « Bien présenter ». Ce livre s’adresse aux personnes qui organisent des réunions d’équipe, des ateliers et des conférences. À travers de nombreux exemples pratiques, il donne des conseils pour utiliser efficacement les supports visuels, préparer une présentation et organiser des réunions. Il montre comment les images et les graphiques facilitent la compréhension.',
    ar: 'بريغيته هيبنر: «التقديم بطريقة صحيحة». هذا الكتاب موجه لكل من ينظم اجتماعات الفرق وورش العمل والمؤتمرات. يقدم أمثلة عملية حول استخدام الوسائل البصرية وإعداد العروض وتنظيم الاجتماعات بفعالية. كما يوضح كيف تساعد الصور والرسوم البيانية على فهم المعلومات.',
    en: 'Brigitte Hübner: “Presenting Correctly”. This book is for people who organise team meetings, workshops and conferences. Practical examples provide advice on visualising information, planning presentations and running effective meetings. It shows how pictures and graphics can make presentations clearer.'
  },
  {
    id: 'K',
    title: 'Delfin oder Delphin?',
    text: 'Helga Sinn-Krummacher "Delfin oder Delphin? So schreibt man das jetzt richtig" Dieses Trainingsbuch ist für den Arbeitsplatz und für zu Hause gedacht. Auf humorvolle Art werden die neuen Rechtschreibregeln der deutschen Sprache vorgestellt und eingeübt. Es enthält außerdem die neue amtliche Wortliste zur Rechtschreibung und die neuen Zeichensetzungsregeln.',
    fr: 'Helga Sinn-Krummacher : « Delfin ou Delphin ? Voici comment on écrit correctement aujourd’hui ». Ce livre d’entraînement est destiné au travail et à la maison. Il présente de manière humoristique les nouvelles règles orthographiques de l’allemand et permet de les pratiquer. Il contient également la nouvelle liste officielle des mots et les règles de ponctuation.',
    ar: 'هيلغا زين-كروماتشر: «Delfin أم Delphin؟ هكذا نكتب بشكل صحيح الآن». هذا الكتاب التدريبي مخصص للعمل والمنزل. يقدم بطريقة فكاهية قواعد الإملاء الألمانية الجديدة مع تمارين للتدرب عليها، كما يحتوي على القائمة الرسمية الجديدة للكلمات وقواعد علامات الترقيم.',
    en: 'Helga Sinn-Krummacher: “Delfin or Delphin? How to Spell It Correctly Today”. This training book is intended for work and home. It presents and practises the new German spelling rules in a humorous way. It also contains the new official word list and punctuation rules.'
  },
  {
    id: 'L',
    title: 'Zeitmanagement',
    text: 'Viele Menschen wissen nicht mehr, wo Ihnen der Kopf steht. Zu viele Termine und Aufgaben stellen Sie unter ständigen Zeitdruck. Mit Zeitmanagement lernen Sie, wie Sie Ihre Zeit so einteilen können, dass Sie wieder Zeit zum Leben haben. Sie erkennen Ihre persönlichen Zeitdiebe, Sie lernen, Prioritäten und erreichbare Ziele zu setzen. Durch das Führen eines Zeitplanbuchs lernen Sie wieder (und dauerhaft), aus der Zeitfalle herauszukommen.',
    fr: 'Beaucoup de personnes ne savent plus où donner de la tête. Trop de rendez-vous et de tâches les mettent constamment sous pression. Grâce à la gestion du temps, vous apprenez à organiser votre emploi du temps pour retrouver du temps pour vivre. Vous identifiez les activités qui vous font perdre du temps, apprenez à établir des priorités et à fixer des objectifs réalistes.',
    ar: 'كثير من الناس لم يعودوا يعرفون كيف ينظمون أمورهم بسبب كثرة المواعيد والمهام والضغط المستمر. من خلال إدارة الوقت، تتعلم كيفية تنظيم وقتك حتى تستعيد وقتاً لحياتك. ستتعرف على الأمور التي تسرق وقتك، وتتعلم تحديد الأولويات ووضع أهداف قابلة للتحقيق.',
    en: 'Many people feel overwhelmed by too many appointments and tasks. Time management teaches you how to organise your schedule and regain time for life. You learn to identify time-wasters, set priorities and choose realistic goals. Keeping a planner can help you escape the constant pressure of time.'
  }
]

const situations = [
  {
    id: 1,
    de: 'Eine Bekannte interessiert sich für Bücher über den Tennissport.',
    fr: 'Une connaissance s’intéresse aux livres sur le tennis.',
    ar: 'إحدى معارفك مهتمة بالكتب التي تتحدث عن رياضة التنس.',
    en: 'An acquaintance is interested in books about tennis.'
  },
  {
    id: 2,
    de: 'Ein befreundetes Ehepaar steht andauernd unter Stress und möchte wieder mehr Zeit für sich und andere haben.',
    fr: 'Un couple d’amis est constamment stressé et souhaite retrouver du temps pour lui-même et pour les autres.',
    ar: 'زوجان صديقان يعيشان تحت ضغط مستمر ويرغبان في استعادة الوقت لأنفسهما وللآخرين.',
    en: 'A married couple you know is constantly stressed and wants more time for themselves and others.'
  },
  {
    id: 3,
    de: 'Eine Bekannte möchte ihre Wohnung renovieren und sucht Tipps zu Tapeten und Wandfarben.',
    fr: 'Une connaissance souhaite rénover son appartement et cherche des conseils sur les papiers peints et les couleurs des murs.',
    ar: 'إحدى معارفك تريد تجديد شقتها وتبحث عن نصائح حول ورق الجدران وألوان الحائط.',
    en: 'An acquaintance wants to renovate her apartment and is looking for advice on wallpaper and wall colours.'
  },
  {
    id: 4,
    de: 'Eine Studentin sucht Informationen, wie sie besser und systematischer lernen kann.',
    fr: 'Une étudiante cherche des informations pour apprendre mieux et de manière plus méthodique.',
    ar: 'طالبة تبحث عن معلومات حول كيفية التعلم بشكل أفضل وأكثر تنظيماً.',
    en: 'A student is looking for information on how to learn better and more systematically.'
  },
  {
    id: 5,
    de: 'Ein Bekannter möchte wissen, welche Botschaften durch Gestik und Mimik transportiert werden.',
    fr: 'Une connaissance souhaite savoir quels messages sont transmis par les gestes et les expressions du visage.',
    ar: 'أحد معارفك يريد معرفة الرسائل التي تنقلها الإيماءات وتعابير الوجه.',
    en: 'An acquaintance wants to know what messages are conveyed through gestures and facial expressions.'
  },
  {
    id: 6,
    de: 'Eine Bekannte möchte ihren Kleidungsstil verbessern.',
    fr: 'Une connaissance souhaite améliorer son style vestimentaire.',
    ar: 'إحدى معارفك تريد تحسين أسلوبها في اختيار الملابس.',
    en: 'An acquaintance wants to improve her clothing style.'
  },
  {
    id: 7,
    de: 'Ein Bekannter ist sich noch unsicher, wie er sich bei einem Vorstellungsgespräch am besten präsentiert.',
    fr: 'Une connaissance ne sait pas encore comment se présenter au mieux lors d’un entretien d’embauche.',
    ar: 'أحد معارفك غير متأكد من أفضل طريقة لتقديم نفسه أثناء مقابلة العمل.',
    en: 'An acquaintance is unsure how to present himself best at a job interview.'
  },
  {
    id: 8,
    de: 'Ein Bekannter schreibt an einer Hausarbeit über Höflichkeit und Benimmregeln in früheren Jahrhunderten.',
    fr: 'Une connaissance rédige un travail sur la politesse et les règles de savoir-vivre au cours des siècles passés.',
    ar: 'أحد معارفك يكتب بحثاً حول اللباقة وقواعد السلوك في القرون الماضية.',
    en: 'An acquaintance is writing an assignment about politeness and manners in earlier centuries.'
  },
  {
    id: 9,
    de: 'Ein Bekannter möchte lernen, wie man gute Geschäftsbriefe schreibt.',
    fr: 'Une connaissance souhaite apprendre à rédiger de bonnes lettres commerciales.',
    ar: 'أحد معارفك يريد تعلم كيفية كتابة رسائل تجارية جيدة.',
    en: 'An acquaintance wants to learn how to write good business letters.'
  },
  {
    id: 10,
    de: 'Eine Bekannte ist sehr verunsichert, weil sie auf Konferenzen immer wieder Angst hat, frei zu sprechen.',
    fr: 'Une connaissance manque beaucoup de confiance en elle, car elle a régulièrement peur de parler librement lors des conférences.',
    ar: 'إحدى معارفك تشعر بعدم الثقة لأنها تخاف باستمرار من التحدث بحرية أثناء المؤتمرات.',
    en: 'An acquaintance feels very insecure because she repeatedly feels afraid of speaking freely at conferences.'
  }
]

const correct: Record<number, string> = {
  1: 'D',
  2: 'L',
  3: 'X',
  4: 'B',
  5: 'H',
  6: 'A',
  7: 'I',
  8: 'C',
  9: 'X',
  10: 'E'
}

const explanations: Record<number, Record<Lang, string>> = {
  1: {
    fr: 'L’annonce D présente le livre de Tim Gallwey consacré au tennis et au jeu mental dans ce sport.',
    ar: 'الإعلان D يقدم كتاب تيم غالوي المخصص للتنس والجانب الذهني في هذه الرياضة.',
    en: 'Advertisement D presents Tim Gallwey’s book about tennis and the mental side of the sport.'
  },
  2: {
    fr: 'L’annonce L parle de gestion du temps, de priorités et de réduction de la pression liée aux nombreuses tâches.',
    ar: 'الإعلان L يتحدث عن إدارة الوقت وتحديد الأولويات والتخلص من الضغط الناتج عن كثرة المهام.',
    en: 'Advertisement L deals with time management, setting priorities and reducing pressure caused by too many tasks.'
  },
  3: {
    fr: 'Aucune annonce ne concerne la rénovation d’un appartement, le papier peint ou les couleurs des murs. La réponse est X.',
    ar: 'لا يوجد إعلان يتناول تجديد الشقة أو ورق الجدران أو ألوان الحائط. الإجابة هي X.',
    en: 'None of the advertisements deals with renovating an apartment, wallpaper or wall colours. The answer is X.'
  },
  4: {
    fr: 'L’annonce B présente des méthodes pour améliorer l’apprentissage et la mémorisation.',
    ar: 'الإعلان B يقدم طرقاً لتحسين التعلم وتقوية الذاكرة.',
    en: 'Advertisement B offers methods for improving learning and memory.'
  },
  5: {
    fr: 'L’annonce H explique les messages transmis par le corps, les gestes et les expressions.',
    ar: 'الإعلان H يشرح الرسائل التي ينقلها الجسد والإيماءات وتعابير الوجه.',
    en: 'Advertisement H explains the messages communicated through body language, gestures and facial expressions.'
  },
  6: {
    fr: 'L’annonce A propose des conseils sur les vêtements, les couleurs, le maquillage et les accessoires.',
    ar: 'الإعلان A يقدم نصائح حول الملابس والألوان والمكياج والإكسسوارات.',
    en: 'Advertisement A offers advice about clothing, colours, make-up and accessories.'
  },
  7: {
    fr: 'L’annonce I prépare les candidats aux entretiens d’embauche et leur apprend à se présenter avec assurance.',
    ar: 'الإعلان I يساعد المرشحين على الاستعداد لمقابلات العمل وتقديم أنفسهم بثقة.',
    en: 'Advertisement I prepares applicants for job interviews and helps them present themselves confidently.'
  },
  8: {
    fr: 'L’annonce C correspond au sujet : ce livre, publié en 1788, traite des règles de comportement et du savoir-vivre autrefois.',
    ar: 'الإعلان C مناسب لأن الكتاب نُشر سنة 1788 ويتناول قواعد السلوك واللباقة في الماضي.',
    en: 'Advertisement C matches because this book, published in 1788, deals with manners and behaviour in earlier times.'
  },
  9: {
    fr: 'Aucune annonce ne propose spécifiquement d’apprendre à rédiger des lettres commerciales. La réponse est X.',
    ar: 'لا يوجد إعلان يقدم بشكل محدد تعلّم كتابة الرسائل التجارية. الإجابة هي X.',
    en: 'None of the advertisements specifically offers training in writing business letters. The answer is X.'
  },
  10: {
    fr: 'L’annonce E traite de la communication, des discours et de la manière de surmonter la peur de parler en public.',
    ar: 'الإعلان E يتناول التواصل والخطابة وكيفية التغلب على الخوف من التحدث أمام الجمهور.',
    en: 'Advertisement E deals with communication, speeches and overcoming the fear of speaking in public.'
  }
}

const options = ['X', ...ads.map(ad => ad.id)]

export default function SportIstGesundPage() {
  const [lang, setLang] = useState<Lang>('fr')
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})
  const [finished, setFinished] = useState(false)
  const [openAds, setOpenAds] = useState<string[]>([])
  const [openSituations, setOpenSituations] = useState<string[]>([])
  const [showSituations, setShowSituations] = useState(true)

  const score = useMemo(
    () =>
      situations.reduce(
        (sum, item) => sum + (answers[item.id] === correct[item.id] ? 1 : 0),
        0
      ),
    [answers]
  )

  function toggle(
    list: string[],
    setList: (value: string[]) => void,
    id: string
  ) {
    setList(
      list.includes(id)
        ? list.filter(item => item !== id)
        : [...list, id]
    )
  }

  function restart() {
    setAnswers({})
    setChecked({})
    setFinished(false)
    setOpenAds([])
    setOpenSituations([])
  }

  return (
    <main className="exercise-page">
      <header className="exercise-header">
        <Link href="/espace-etudiant" className="back-link">
          <ArrowLeft size={17} />
          Retour à l’espace étudiant
        </Link>

        <Link href="/espace-etudiant" className="header-brand">
          <GraduationCap size={25} />
          <span>
            <span>Deutsch</span>
            <span>Erfolg</span>
          </span>
        </Link>
      </header>

      <div className="exercise-content">
        <div className="breadcrumb">
          B2 <span>›</span> Lesen <span>›</span> Teil 3 <span>›</span> Sport ist gesund
        </div>

        <section className="exercise-hero">
          <div className="hero-label">B2 · LESEVERSTEHEN</div>
          <h1>Sport ist gesund – Anzeigen</h1>
          <p>
            Lesen Teil 3 – Ordnen Sie jeder Situation die passende Anzeige zu.
            Wenn es keine passende Anzeige gibt, wählen Sie X.
          </p>

          <div className="progress-area">
            <div className="progress-label">
              <span>Fortschritt</span>
              <strong>{Object.keys(answers).length}/10</strong>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${Object.keys(answers).length * 10}%`
                }}
              />
            </div>
          </div>
        </section>

        <div className="language-bar">
          <div className="language-label">
            <Languages size={18} />
            Langue de traduction
          </div>

          <select
            value={lang}
            onChange={e => setLang(e.target.value as Lang)}
          >
            <option value="fr">🇫🇷 Français</option>
            <option value="ar">🇲🇦 العربية</option>
            <option value="en">🇬🇧 English</option>
          </select>

          <span className="language-hint">
            Les traductions et explications s’affichent dans la langue choisie.
          </span>
        </div>

        <div className="instructions">
          <strong>Aufgabe:</strong> Lesen Sie die Situationen 1–10 und die
          Anzeigen A–L. Welche Anzeige passt zu welcher Situation? Für einige
          Situationen gibt es keine passende Anzeige. Markieren Sie in diesem
          Fall X.
        </div>

        <div className="layout-toolbar">
          <span className="layout-description">
            {showSituations
              ? 'Annonces et situations affichées'
              : 'Mode annonces : espace maximal'}
          </span>

          <button
            type="button"
            className="sidebar-toggle"
            onClick={() => setShowSituations(prev => !prev)}
            aria-expanded={showSituations}
            aria-controls="situations-panel"
          >
            {showSituations ? <EyeOff size={17} /> : <Eye size={17} />}
            {showSituations
              ? 'Masquer les situations'
              : 'Afficher les situations'}
          </button>
        </div>

        <div
          className={`exercise-columns ${
            showSituations ? '' : 'situations-hidden'
          }`}
        >
          <section className="ads-section">
            <div className="section-title">
              <h2>Anzeigen A–L</h2>
              <span>12 Anzeigen</span>
            </div>

            <div className="ads-scroll">
              <div className="ads-grid">
                {ads.map(ad => {
                  const opened = openAds.includes(ad.id)

                  return (
                    <article className="ad-card" key={ad.id}>
                      <div className="ad-heading">
                        <span className="ad-letter">{ad.id}</span>
                        <h3>{ad.title}</h3>
                      </div>

                      <p>{ad.text}</p>

                      <button
                        type="button"
                        className={`help-button ${opened ? 'active' : ''}`}
                        onClick={() =>
                          toggle(openAds, setOpenAds, ad.id)
                        }
                      >
                        <Languages size={15} />
                        Traduction
                        {opened
                          ? <ChevronUp size={15} />
                          : <ChevronDown size={15} />}
                      </button>

                      {opened && (
                        <div
                          className={`translation-panel ${
                            lang === 'ar' ? 'arabic' : ''
                          }`}
                          dir={lang === 'ar' ? 'rtl' : 'ltr'}
                        >
                          {ad[lang]}
                        </div>
                      )}
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          {showSituations && (
            <aside
              className="situations-section"
              id="situations-panel"
            >
              <div className="section-title">
                <h2>Situationen 1–10</h2>
                <span>10 questions</span>
              </div>

              <p className="section-hint">
                Choisissez l’annonce qui correspond à chaque situation.
              </p>

              <div className="situations-list">
                {situations.map(item => {
                  const answer = answers[item.id] || ''
                  const isChecked = !!checked[item.id] || finished
                  const isCorrect = answer === correct[item.id]

                  const translationOpened =
                    openSituations.includes(String(item.id))

                  const explanationOpened =
                    openSituations.includes(`exp-${item.id}`)

                  return (
                    <article
                      className={`situation-card ${
                        isChecked && answer
                          ? isCorrect
                            ? 'correct'
                            : 'incorrect'
                          : ''
                      }`}
                      key={item.id}
                    >
                      <div className="situation-top">
                        <span className="question-number">
                          {item.id}
                        </span>
                        <p>{item.de}</p>
                      </div>

                      <div className="answer-row">
                        <select
                          aria-label={`Réponse à la situation ${item.id}`}
                          value={answer}
                          disabled={finished}
                          onChange={e => {
                            setAnswers(prev => ({
                              ...prev,
                              [item.id]: e.target.value
                            }))

                            setChecked(prev => ({
                              ...prev,
                              [item.id]: false
                            }))
                          }}
                        >
                          <option value="">Anzeige wählen…</option>

                          {options.map(option => (
                            <option value={option} key={option}>
                              {option === 'X'
                                ? 'X – keine Anzeige'
                                : `${option} – ${
                                    ads.find(ad => ad.id === option)?.title
                                  }`}
                            </option>
                          ))}
                        </select>

                        {!finished && (
                          <button
                            type="button"
                            className="individual-check-button"
                            disabled={!answer}
                            onClick={() =>
                              setChecked(prev => ({
                                ...prev,
                                [item.id]: true
                              }))
                            }
                            title="Réponse prüfen"
                          >
                            <CheckCircle2 size={15} />
                            Prüfen
                          </button>
                        )}
                      </div>

                      {isChecked && answer && (
                        <div
                          className={`feedback ${
                            isCorrect ? 'right' : 'wrong'
                          }`}
                        >
                          {isCorrect
                            ? '✓ Richtig! Sehr gut!'
                            : `✕ Leider falsch. Richtige Antwort: ${correct[item.id]}`}
                        </div>
                      )}

                      <div className="help-actions">
                        <button
                          type="button"
                          className={`help-button ${
                            translationOpened ? 'active' : ''
                          }`}
                          onClick={() =>
                            toggle(
                              openSituations,
                              setOpenSituations,
                              String(item.id)
                            )
                          }
                        >
                          <Languages size={14} />
                          Traduction
                          {translationOpened
                            ? <ChevronUp size={14} />
                            : <ChevronDown size={14} />}
                        </button>

                        <button
                          type="button"
                          className={`help-button ${
                            explanationOpened ? 'active' : ''
                          }`}
                          onClick={() =>
                            toggle(
                              openSituations,
                              setOpenSituations,
                              `exp-${item.id}`
                            )
                          }
                        >
                          <Lightbulb size={14} />
                          Explication
                        </button>
                      </div>

                      {translationOpened && (
                        <div
                          className={`translation-panel ${
                            lang === 'ar' ? 'arabic' : ''
                          }`}
                          dir={lang === 'ar' ? 'rtl' : 'ltr'}
                        >
                          {item[lang]}
                        </div>
                      )}

                      {explanationOpened && (
                        <div
                          className={`explanation-panel ${
                            lang === 'ar' ? 'arabic' : ''
                          }`}
                          dir={lang === 'ar' ? 'rtl' : 'ltr'}
                        >
                          {explanations[item.id][lang]}
                        </div>
                      )}
                    </article>
                  )
                })}
              </div>
            </aside>
          )}
        </div>

        <section className="exercise-actions">
          {!finished ? (
            <button
              type="button"
              className="check-button"
              onClick={() => setFinished(true)}
              disabled={Object.keys(answers).length !== 10}
            >
              Antworten überprüfen
            </button>
          ) : (
            <>
              <div className="score-result">
                Ergebnis: <strong>{score}/10</strong>
                <span>
                  {score === 10
                    ? 'Ausgezeichnet!'
                    : score >= 6
                      ? 'Gut gemacht!'
                      : 'Weiter üben!'}
                </span>
              </div>

              <button
                type="button"
                className="restart-button"
                onClick={restart}
              >
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

        .back-link {
          color: #fff !important;
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
          color: #fff !important;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
        }

        .header-brand svg {
          color: #b49760;
          flex-shrink: 0;
        }

        .header-brand > span {
          display: flex;
          gap: 5px;
        }

        .header-brand > span span:last-child {
          color: #b49760;
        }

        .exercise-content {
          max-width: 1800px;
          margin: auto;
          padding: 25px 24px 50px;
        }

        .breadcrumb {
          font-size: 12px;
          color: #626a75;
          margin-bottom: 18px;
        }

        .breadcrumb span {
          margin: 0 8px;
          color: #b49760;
        }

        .exercise-hero {
          background: #192b43;
          border-radius: 17px;
          color: white;
          padding: 25px 30px;
          margin-bottom: 18px;
        }

        .hero-label {
          color: #b49760;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .exercise-hero h1 {
          font-size: 27px;
          margin: 10px 0 7px;
        }

        .exercise-hero p {
          color: #D2DAE5;
          font-size: 14px;
          line-height: 1.6;
        }

        .progress-area {
          max-width: 400px;
          margin-top: 18px;
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
          gap: 14px;
          flex-wrap: wrap;
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 12px;
          padding: 11px 16px;
          margin-bottom: 14px;
        }

        .language-label {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 13px;
          font-weight: 700;
        }

        .language-label svg {
          color: #806337;
        }

        .language-bar select,
        .answer-row select {
          border: 1px solid #D9DFE8;
          border-radius: 8px;
          padding: 9px 11px;
          background: #F9FAFC;
          color: #192b43;
          font-size: 13px;
          max-width: 100%;
        }

        .language-hint,
        .section-hint {
          font-size: 12px;
          color: #626a75;
        }

        .instructions {
          padding: 12px 16px;
          background: #FFF8EA;
          border-left: 4px solid #b49760;
          border-radius: 8px;
          font-size: 12px;
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .layout-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 13px;
        }

        .layout-description {
          font-size: 12px;
          color: #626a75;
        }

        .sidebar-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 15px;
          border: 1px solid #b49760;
          border-radius: 8px;
          background: #fff;
          color: #765C2B;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background .2s, color .2s;
        }

        .sidebar-toggle:hover {
          background: #FFF8EA;
        }

        .exercise-columns {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(440px, 0.85fr);
          gap: 18px;
          align-items: start;
        }

        .exercise-columns.situations-hidden {
          grid-template-columns: minmax(0, 1fr);
        }

        .ads-section {
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
        }

        .section-title h2 {
          font-size: 18px;
          margin: 0;
        }

        .section-title span {
          font-size: 11px;
          color: #806337;
          background: #F8F1E3;
          padding: 6px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .ads-scroll {
          height: calc(100vh - 310px);
          min-height: 600px;
          max-height: 1000px;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 3px 9px 3px 2px;
          scrollbar-width: thin;
          scrollbar-color: #C5CEDA #e3ded3;
        }

        .ads-scroll::-webkit-scrollbar {
          width: 9px;
        }

        .ads-scroll::-webkit-scrollbar-track {
          background: #e3ded3;
          border-radius: 10px;
        }

        .ads-scroll::-webkit-scrollbar-thumb {
          background: #C5CEDA;
          border-radius: 10px;
        }

        .ads-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
          align-items: start;
        }

        .ad-card {
          background: #fff;
          border: 1px solid #e3ded3;
          border-radius: 12px;
          padding: 17px 18px;
          margin: 0;
          box-shadow: 0 2px 7px rgba(23, 43, 77, 0.035);
          min-width: 0;
        }

        .ad-heading {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ad-heading h3 {
          font-size: 16px;
          margin: 0;
          color: #24466E;
          line-height: 1.4;
        }

        .ad-letter,
        .question-number {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          background: #192b43;
          color: #b49760;
          border-radius: 8px;
          font-weight: 700;
        }

        .ad-card > p {
          font-size: 14px;
          line-height: 1.7;
          color: #46556A;
          margin: 12px 0;
        }

        .situations-section {
          background: #EEF1F5;
          border: 1px solid #e3ded3;
          border-radius: 13px;
          padding: 13px;
          min-width: 0;
        }

        .situations-section .section-title {
          margin-bottom: 8px;
        }

        .situations-section .section-title h2 {
          font-size: 17px;
        }

        .situations-section .section-hint {
          line-height: 1.5;
          margin: 0 0 10px;
          font-size: 11px;
        }

        .situations-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
          align-items: start;
        }

        .situation-card {
          background: #fff;
          border: 1px solid #E2E7EE;
          border-radius: 9px;
          padding: 10px;
          margin: 0;
          min-width: 0;
        }

        .situation-top {
          display: flex;
          align-items: flex-start;
          gap: 7px;
        }

        .situation-top .question-number {
          width: 24px;
          height: 24px;
          min-width: 24px;
          border-radius: 6px;
          font-size: 11px;
        }

        .situation-top p {
          font-size: 11px;
          line-height: 1.5;
          margin: 2px 0 8px;
          color: #344258;
        }

        .answer-row {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 6px;
          padding: 0;
          background: transparent;
        }

        .answer-row select {
          width: 100%;
          min-width: 0;
          padding: 7px 6px;
          font-size: 10px;
        }

        .individual-check-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 7px 9px;
          border: 0;
          border-radius: 7px;
          background: #192b43;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
        }

        .individual-check-button:disabled {
          opacity: .4;
          cursor: not-allowed;
        }

        .feedback {
          font-size: 11px;
          font-weight: 700;
          margin-top: 7px;
          padding: 7px 9px;
          border-radius: 7px;
        }

        .feedback.right {
          background: #EAF7EF;
          color: #21804E;
        }

        .feedback.wrong {
          background: #FFF0F0;
          color: #B43B3B;
        }

        .correct {
          border-color: #45A477;
        }

        .incorrect {
          border-color: #D66B6B;
        }

        .help-actions {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
          margin-top: 7px;
        }

        .help-button {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 8px;
          border: 1px solid #E0E5ED;
          border-radius: 7px;
          background: #f7f5f0;
          color: #53647A;
          font-size: 10px;
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
          margin-top: 8px;
          padding: 9px 10px;
          border-radius: 8px;
          font-size: 11px;
          line-height: 1.7;
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

        .arabic {
          text-align: right;
          font-size: 13px;
          line-height: 2;
        }

        .exercise-actions {
          margin-top: 25px;
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

        @media (max-width: 1100px) {
          .exercise-columns {
            grid-template-columns: minmax(0, 1fr) minmax(360px, 0.9fr);
            gap: 13px;
          }

          .ad-card {
            padding: 14px;
          }

          .ad-heading h3 {
            font-size: 14px;
          }

          .ad-card > p {
            font-size: 13px;
          }
        }

        @media (max-width: 850px) {
          .exercise-columns,
          .exercise-columns.situations-hidden {
            grid-template-columns: minmax(0, 1fr);
          }

          .situations-section {
            order: 2;
          }

          .ads-section {
            order: 1;
          }

          .ads-scroll {
            height: 650px;
            min-height: 450px;
            max-height: 750px;
          }

          .situations-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .exercise-content {
            padding: 18px 12px 35px;
          }

          .exercise-hero {
            padding: 22px 17px;
          }

          .exercise-hero h1 {
            font-size: 23px;
          }

          .exercise-header {
            padding: 0 14px;
          }

          .header-brand {
            font-size: 17px;
          }

          .layout-toolbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .sidebar-toggle {
            width: 100%;
          }

          .ads-scroll {
            height: 600px;
            min-height: 400px;
          }

          .ads-grid {
            grid-template-columns: 1fr;
          }

          .ad-card {
            padding: 15px;
          }

          .ad-heading h3 {
            font-size: 15px;
          }

          .ad-card > p {
            font-size: 13px;
            line-height: 1.7;
          }

          .situations-list {
            grid-template-columns: 1fr;
          }

          .situation-card {
            padding: 11px;
          }

          .situation-top p {
            font-size: 12px;
          }

          .answer-row {
            flex-direction: row;
          }

          .answer-row select {
            min-width: 0;
          }
        }
      
        /* Deutsch Erfolg — Premium exams */
        .exercise-page { background: #f7f5f0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
        [dir="rtl"] .exercise-page, .exercise-page[dir="rtl"] { font-family: 'Tajawal', Arial, sans-serif; }
        .exercise-page .exercise-hero { background: #192b43; border: 1px solid #314359; border-radius: 12px; box-shadow: none; text-align: start; }
        .exercise-page .exercise-hero h1 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.025em; line-height: 1.24; overflow-wrap: anywhere; }
        [dir="rtl"] .exercise-page .exercise-hero h1, .exercise-page[dir="rtl"] .exercise-hero h1 { font-family: 'Tajawal', Arial, sans-serif; }
        .exercise-page a:focus-visible, .exercise-page button:focus-visible, .exercise-page select:focus-visible { outline: 2px solid #b49760; outline-offset: 3px; }
        .exercise-page .ad-card,
        .exercise-page .situation-card { border-radius: 10px; box-shadow: none; }
        @media (prefers-reduced-motion: reduce) {
          .exercise-page *, .exercise-page *::before, .exercise-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
        }
      `}</style>
    </main>
  )
}

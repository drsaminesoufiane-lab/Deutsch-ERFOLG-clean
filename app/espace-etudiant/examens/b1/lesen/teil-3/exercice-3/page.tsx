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

type Ad = {
  id: string
  title: string
  text: string
  fr: string
  ar: string
  en: string
}

type Situation = {
  id: number
  de: string
  fr: string
  ar: string
  en: string
}

const ads: Ad[] = [
  {
    id: 'A',
    title: 'Museum der Stadt Füssen',
    text: 'MUSEUM DER STADT FÜSSEN, Lechhalde 3 · 87629 Füssen. Tel. (08362) 50 53 – 45 u. -43. STAATSGALERIE IM HOHEN SCHLOSS FÜSSEN, Magnusplatz 10 · 87629 Füssen. Tel. (08362) 50 53 – 64. Öffnungszeiten: April bis Oktober: Di.–So. 11.00–16.00 Uhr, Mo. geschlossen. November bis März: Di.–So. 14.00–16.00 Uhr, Mo. geschlossen.',
    fr: 'Musée de la ville de Füssen et Galerie nationale du château de Füssen. Deux lieux culturels à visiter à Füssen. D’avril à octobre : du mardi au dimanche de 11 h à 16 h. De novembre à mars : du mardi au dimanche de 14 h à 16 h. Fermé le lundi.',
    ar: 'متحف مدينة فوسن والمعرض الوطني في قلعة فوسن. مكانان ثقافيان يمكن زيارتهما في فوسن. من أبريل إلى أكتوبر: من الثلاثاء إلى الأحد، من الساعة 11 إلى 16. ومن نوفمبر إلى مارس: من الثلاثاء إلى الأحد، من الساعة 14 إلى 16. مغلق يوم الاثنين.',
    en: 'Museum of the City of Füssen and State Gallery in Füssen Castle. Two cultural places to visit in Füssen. April to October: Tuesday to Sunday, 11 a.m. to 4 p.m. November to March: Tuesday to Sunday, 2 p.m. to 4 p.m. Closed on Mondays.'
  },
  {
    id: 'B',
    title: 'Franziskaner Stüberl',
    text: 'Franziskaner Stüberl, 87629 Füssen – Eingang Fußgängerzone Kemptener Straße 1. Telefon (08362) 37124. Inh. Bernd Zientek. Gutbürgerliche Allgäuer und Bayerische Küche. Der beliebte Treffpunkt in gemütlicher Atmosphäre. Sonntag-Ruhetag. Auf Ihren Besuch freut sich Bernd Zientek mit Team.',
    fr: 'Restaurant Franziskaner Stüberl à Füssen. Il propose une cuisine traditionnelle de l’Allgäu et de Bavière dans une atmosphère conviviale. Le dimanche est le jour de fermeture.',
    ar: 'مطعم فرانزيسكانر شتوبيرل في فوسن. يقدم أطباقاً تقليدية من منطقة ألغوي وبافاريا في أجواء مريحة وودّية. يوم الأحد هو يوم العطلة.',
    en: 'Franziskaner Stüberl restaurant in Füssen. It offers traditional Allgäu and Bavarian cuisine in a cosy atmosphere. Closed on Sundays.'
  },
  {
    id: 'C',
    title: 'Sennerei-Genossenschaft Bayern',
    text: 'SENNEREI–GENOSSENSCHAFT BAYERN, Hochplateau – Lechlenfeld · Telefon (08362) 917214. Frisch vom Erzeuger: Allgäuer Emmentaler, Allgäuer Bergkäse, Tilsiter, Frisch-Milch, eigene Butterherstellung. Öffnungszeiten: Wochentags: 7.30–12.30 h, 16.30–18.30 h. Sa. u. Feiertag: 7.30–13.00 h, 16.30–17.00 h.',
    fr: 'Coopérative laitière de Bavière. Vente directe de produits frais : emmental de l’Allgäu, fromage de montagne de l’Allgäu, tilsit, lait frais et beurre fabriqué sur place. Ouverte en semaine le matin et en fin d’après-midi, ainsi que le samedi et les jours fériés.',
    ar: 'تعاونية ألبان بافاريا. بيع منتجات طازجة مباشرة من المنتج: جبن إمنتال من ألغوي، وجبن الجبال من ألغوي، وجبن تيلسيت، والحليب الطازج، والزبدة المصنوعة محلياً. مفتوحة خلال أيام الأسبوع صباحاً وبعد الظهر، وكذلك يوم السبت والعطل.',
    en: 'Bavarian dairy cooperative. Fresh products directly from the producer: Allgäu Emmental, Allgäu mountain cheese, Tilsit, fresh milk and homemade butter. Open on weekdays and on Saturdays and public holidays.'
  },
  {
    id: 'D',
    title: 'Sprachen lernen & Leute treffen',
    text: 'Bildungsurlaub für Erwachsene in England, Malta, Frankreich, Spanien, Italien und Kalifornien. Fordern Sie unsere für Sie kostenlose Broschüre an. Schicken Sie uns ein Kennwort Ihrer Wahl, und wir senden Ihnen die Broschüre samt Einstufungstest. SPRACHCAFFEE, Holbeinstr. 16, 60596 Frankfurt. Tel.: 069-61 90 120.',
    fr: 'Séjours linguistiques pour adultes en Angleterre, à Malte, en France, en Espagne, en Italie et en Californie. Une brochure gratuite peut être demandée. Elle est envoyée avec un test de niveau.',
    ar: 'عطلات تعليمية للبالغين في إنجلترا ومالطا وفرنسا وإسبانيا وإيطاليا وكاليفورنيا. يمكن طلب كتيب مجاني، وسيتم إرساله مع اختبار لتحديد المستوى.',
    en: 'Language-learning holidays for adults in England, Malta, France, Spain, Italy and California. A free brochure is available and includes a placement test.'
  },
  {
    id: 'E',
    title: 'Jahreskonzert Füssen',
    text: 'Jahreskonzert Füssen. Wolfgang Amadeus Mozart: Klavierkonzert Nr. 21 in C-Dur. Pianist: Hanno Porter. Leitung: Stadtmusikdirektor Robert Maul. Karten bei der Kurverwaltung Füssen.',
    fr: 'Concert annuel à Füssen avec le Concerto pour piano n° 21 en do majeur de Wolfgang Amadeus Mozart. Le pianiste est Hanno Porter. Les billets sont disponibles auprès de l’office du tourisme de Füssen.',
    ar: 'الحفل السنوي في فوسن، ويتضمن كونشيرتو البيانو رقم 21 في دو الكبير للمؤلف موزارت. عازف البيانو هو هانو بورتر. التذاكر متوفرة لدى إدارة السياحة في فوسن.',
    en: 'Annual concert in Füssen featuring Wolfgang Amadeus Mozart’s Piano Concerto No. 21 in C major. Pianist: Hanno Porter. Tickets are available from the Füssen tourist office.'
  },
  {
    id: 'F',
    title: 'Heimatmuseum Füssen',
    text: 'Das Heimatmuseum Füssen lädt zum Besuch ein. Öffnungszeiten: Montag bis Freitag: 10.00–12.00 Uhr und 14.00–16.45 Uhr. Samstag und Sonntag: 10.00–12.00 Uhr. In der Instrumentensammlung sind wertvolle Geigen von Mittenwalder Meistern ausgestellt. Außerdem kann man in einer besonders eingerichteten Werkstatt dem Geigenbauer bei der Arbeit zuschauen. Außerhalb der Öffnungszeiten sind Gruppen ab 20 Personen nach Voranmeldung willkommen. Telefon (0 83 62) 25 11.',
    fr: 'Le musée régional de Füssen vous invite à le visiter. Il est ouvert du lundi au vendredi de 10 h à 12 h et de 14 h à 16 h 45, et le samedi et dimanche de 10 h à 12 h. La collection présente de précieux violons et permet également d’observer un luthier au travail.',
    ar: 'يدعوكم متحف التراث المحلي في فوسن إلى زيارته. يفتح من الاثنين إلى الجمعة من الساعة 10 إلى 12 ومن 14 إلى 16:45، ويوم السبت والأحد من 10 إلى 12. يضم المتحف مجموعة من الكمانات الثمينة، ويمكن للزوار مشاهدة صانع الكمان أثناء عمله.',
    en: 'The local history museum in Füssen invites visitors. It is open Monday to Friday from 10 a.m. to noon and 2 p.m. to 4:45 p.m., and on Saturdays and Sundays from 10 a.m. to noon. The collection includes valuable violins, and visitors can watch a violin maker at work.'
  },
  {
    id: 'G',
    title: 'bonCas Spezialitätenkäserei',
    text: 'bonCas Spezialitätenkäserei. P. und U. Moser-Kolb, Hessenbohlstraße 14, CH – 8512 Lustdorf, Schweiz. E-Mail: kieronkoelbi@bluewin.ch.',
    fr: 'Fromagerie spécialisée bonCas. Entreprise de P. et U. Moser-Kolb, située à Lustdorf, en Suisse. L’annonce fournit les coordonnées de la fromagerie.',
    ar: 'مصنع bonCas المتخصص في صناعة الأجبان. تابع للسيد والسيدة موزر-كولب، ويقع في لوستدورف بسويسرا. يتضمن الإعلان بيانات الاتصال بمصنع الأجبان.',
    en: 'bonCas specialist cheese dairy, run by P. and U. Moser-Kolb in Lustdorf, Switzerland. The advertisement provides the dairy’s contact details.'
  },
  {
    id: 'H',
    title: 'Alfa Sprachreisen',
    text: 'Alfa Sprachreisen. Crash-Kurse für Manager. Sprachkurse und High-School-Programme für 12- bis 18-Jährige. Englisch, Französisch, Spanisch, 17 Länder, mehr als 60 Kursorte. Fordern Sie unsere kostenlose Broschüre an! Alfa-Sprachreisen GmbH, Rotebühlplatz 75, 70178 Stuttgart. Tel. 0711-61 55 300.',
    fr: 'Voyages linguistiques Alfa. Stages intensifs pour cadres et cours de langues ou programmes de lycée à l’étranger pour les jeunes de 12 à 18 ans. Anglais, français et espagnol dans 17 pays et plus de 60 destinations.',
    ar: 'رحلات ألفا اللغوية. دورات مكثفة للمديرين، ودورات لغوية وبرامج مدرسية بالخارج للشباب من 12 إلى 18 سنة. اللغات المتاحة هي الإنجليزية والفرنسية والإسبانية في 17 دولة وأكثر من 60 موقعاً.',
    en: 'Alfa language trips. Crash courses for managers and language courses or high-school programmes abroad for young people aged 12 to 18. English, French and Spanish in 17 countries and more than 60 locations.'
  },
  {
    id: 'I',
    title: 'Cafe · Bistro Amadeus',
    text: '6. APRIL: Deutsche Schlagernacht. 12. APRIL Donnerstag: 70er/80er Jahre Party. NEU: Schnitzel-Woche. Cafe · Bistro Amadeus, Zirler Straße 19–21, 87450 Füssen/Allgäu. Tel. 08362/93540.',
    fr: 'Café-bistro Amadeus à Füssen. Soirée de musique allemande le 6 avril, fête des années 1970 et 1980 le 12 avril et nouvelle semaine spéciale schnitzel.',
    ar: 'مقهى ومطعم أماديوس في فوسن. ليلة للأغاني الألمانية يوم 6 أبريل، وحفلة موسيقى السبعينيات والثمانينيات يوم 12 أبريل، بالإضافة إلى أسبوع خاص بطبق الشنيتزل.',
    en: 'Cafe-bistro Amadeus in Füssen. German Schlager night on 6 April, a 1970s and 1980s party on 12 April, and a special schnitzel week.'
  },
  {
    id: 'J',
    title: 'Free-System – Sprachkurse',
    text: 'Free-System: Englisch, Französisch, Italienisch, Spanisch, Deutsch für Ausländer. Maschinenschreiben/Steno. Sie bestimmen die Unterrichtszeit. Sie lernen, so rasch Sie wollen. Intensivkurse, Einzel-/Privat- und Kleingruppen (2–3 Teilnehmer), Crash Courses, Brush up und Business Sprachkurse für Manager, Englisch for Secretaries, Prüfungen (intern/extern) First/Proficiency/TOEFL/MAT. Alliance Française Institut Grünberger Rostock, direkt beim Hauptbahnhof.',
    fr: 'Cours de langues Free-System : anglais, français, italien, espagnol et allemand pour étrangers. L’élève choisit ses horaires et son rythme. Cours intensifs, individuels ou en petits groupes, cours de remise à niveau et cours professionnels. Institut situé à Rostock, près de la gare centrale.',
    ar: 'دورات لغوية بنظام Free-System: الإنجليزية والفرنسية والإيطالية والإسبانية والألمانية للأجانب. يختار المتعلم وقت الدروس وسرعة التعلم. تتوفر دورات مكثفة وفردية أو ضمن مجموعات صغيرة ودورات للأعمال والتحضير للامتحانات. المعهد في روستوك قرب المحطة الرئيسية.',
    en: 'Free-System language courses: English, French, Italian, Spanish and German for foreigners. Students choose their own timetable and learning pace. Intensive, private and small-group courses, refresher courses and business language courses are available. The institute is in Rostock near the main station.'
  },
  {
    id: 'K',
    title: 'Ritterstub’n – Fischspezialitäten',
    text: 'Ritterstub’n Fischspezialitäten. Das Restaurant mit gepflegter Gastlichkeit im Herzen der Altstadt. Geöffnet von 11–14½ Uhr und 17½–24 Uhr. Montag Ruhetag. Warme Küche bis 22 Uhr. Ritterstraße 4, 87629 Füssen. Tel. 08362/7759. Fam. Roth-Winter freut sich auf Ihren Besuch.',
    fr: 'Restaurant Ritterstub’n, spécialisé dans les poissons, situé au cœur de la vieille ville de Füssen. Ouvert de 11 h à 14 h 30 et de 17 h 30 à minuit. Fermé le lundi. Les plats chauds sont servis jusqu’à 22 h.',
    ar: 'مطعم ريترشتوبن المتخصص في أطباق السمك، ويقع في قلب المدينة القديمة في فوسن. مفتوح من 11 إلى 14:30 ومن 17:30 إلى منتصف الليل. مغلق يوم الاثنين. تُقدم الوجبات الساخنة حتى الساعة 22.',
    en: 'Ritterstub’n fish restaurant in the heart of Füssen’s old town. Open from 11 a.m. to 2:30 p.m. and 5:30 p.m. to midnight. Closed on Mondays. Hot meals are served until 10 p.m.'
  },
  {
    id: 'L',
    title: 'Hotel-Restaurant Alpenrösle',
    text: 'Wollen Sie fein essen gehen? Hotel–Restaurant Alpenrösle, Füssen-Bad Faulenbach. Tel. (08362) 4017. Auf Ihren Besuch freut sich Familie Hummel. Hotel · Café · Pension.',
    fr: 'Vous souhaitez aller manger dans un bon restaurant ? L’hôtel-restaurant Alpenrösle se trouve à Füssen-Bad Faulenbach. Il propose également un café et une pension, ce qui permet de manger et de passer la nuit sur place.',
    ar: 'هل ترغب في تناول وجبة لذيذة في مطعم؟ يقع فندق ومطعم ألبنروسله في فوسن-باد فاوالنباخ. يضم أيضاً مقهى ودار إقامة، وبالتالي يمكن تناول الطعام والمبيت في المكان.',
    en: 'Would you like to enjoy a good meal? Hotel-Restaurant Alpenrösle is in Füssen-Bad Faulenbach. It also offers a cafe and guesthouse, so guests can eat and stay overnight.'
  }
]

const situations: Situation[] = [
  {
    id: 1,
    de: 'Sie wollen am Wochenende gerne in ein Klavierkonzert gehen.',
    fr: 'Vous aimeriez aller à un concert de piano pendant le week-end.',
    ar: 'ترغب في الذهاب إلى حفل موسيقي للبيانو خلال عطلة نهاية الأسبوع.',
    en: 'You would like to attend a piano concert at the weekend.'
  },
  {
    id: 2,
    de: 'Sie sind in Füssen und wollen am Montag ins Museum gehen.',
    fr: 'Vous êtes à Füssen et vous souhaitez aller au musée le lundi.',
    ar: 'أنت في فوسن وترغب في الذهاب إلى المتحف يوم الاثنين.',
    en: 'You are in Füssen and want to visit a museum on Monday.'
  },
  {
    id: 3,
    de: 'Sie sind in Süddeutschland im Urlaub und möchten gerne eine bayerische Spezialität essen.',
    fr: 'Vous êtes en vacances dans le sud de l’Allemagne et vous aimeriez manger une spécialité bavaroise.',
    ar: 'أنت في عطلة بجنوب ألمانيا وترغب في تناول طبق تقليدي من بافاريا.',
    en: 'You are on holiday in southern Germany and would like to eat a Bavarian speciality.'
  },
  {
    id: 4,
    de: 'Sie haben sich mit Bekannten zu einem Fischessen verabredet.',
    fr: 'Vous avez rendez-vous avec des connaissances pour manger du poisson.',
    ar: 'لديك موعد مع بعض المعارف لتناول وجبة من السمك.',
    en: 'You have arranged to meet some acquaintances for a fish meal.'
  },
  {
    id: 5,
    de: 'Sie sind in Bayern und wollen Käsespezialitäten einkaufen.',
    fr: 'Vous êtes en Bavière et vous souhaitez acheter des spécialités fromagères.',
    ar: 'أنت في بافاريا وترغب في شراء أنواع مميزة من الجبن.',
    en: 'You are in Bavaria and want to buy cheese specialities.'
  },
  {
    id: 6,
    de: 'Sie möchten einen Deutschkurs in Wien besuchen.',
    fr: 'Vous souhaitez suivre un cours d’allemand à Vienne.',
    ar: 'ترغب في الالتحاق بدورة لتعلم اللغة الألمانية في فيينا.',
    en: 'You would like to attend a German course in Vienna.'
  },
  {
    id: 7,
    de: 'Ihr 16-jähriger Sohn soll in den Ferien im Ausland Englisch lernen.',
    fr: 'Votre fils de 16 ans doit apprendre l’anglais à l’étranger pendant les vacances.',
    ar: 'تريد أن يتعلم ابنك البالغ من العمر 16 سنة اللغة الإنجليزية في الخارج خلال العطلة.',
    en: 'Your 16-year-old son is supposed to learn English abroad during the holidays.'
  },
  {
    id: 8,
    de: 'Sie interessieren sich für einen Sprachkurs auf CD.',
    fr: 'Vous êtes intéressé par un cours de langue sur CD.',
    ar: 'أنت مهتم بدورة لتعلم اللغات على قرص مدمج CD.',
    en: 'You are interested in a language course on CD.'
  },
  {
    id: 9,
    de: 'Sie wollen, dass Ihre 10-jährige Tochter in den Ferien eine Fremdsprache lernt.',
    fr: 'Vous souhaitez que votre fille de 10 ans apprenne une langue étrangère pendant les vacances.',
    ar: 'تريد أن تتعلم ابنتك البالغة من العمر 10 سنوات لغة أجنبية خلال العطلة.',
    en: 'You want your 10-year-old daughter to learn a foreign language during the holidays.'
  },
  {
    id: 10,
    de: 'Eine Bekannte will ihren Geburtstag in einem Restaurant feiern und dort auch übernachten.',
    fr: 'Une connaissance souhaite fêter son anniversaire dans un restaurant et y passer également la nuit.',
    ar: 'إحدى معارفك تريد الاحتفال بعيد ميلادها في مطعم والمبيت في المكان نفسه.',
    en: 'An acquaintance wants to celebrate her birthday in a restaurant and also stay overnight there.'
  }
]

const correct: Record<number, string> = {
  1: 'E',
  2: 'F',
  3: 'B',
  4: 'K',
  5: 'C',
  6: 'X',
  7: 'H',
  8: 'X',
  9: 'X',
  10: 'L'
}

const explanations: Record<number, Record<Lang, string>> = {
  1: {
    fr: 'L’annonce E présente le concert annuel de Füssen avec le Concerto pour piano n° 21 de Mozart. Elle correspond à une sortie pour écouter un concert de piano.',
    ar: 'الإعلان E يعلن عن الحفل السنوي في فوسن، ويتضمن كونشيرتو البيانو رقم 21 لموزارت. لذلك فهو مناسب لمن يرغب في حضور حفل للبيانو.',
    en: 'Advertisement E announces the annual concert in Füssen featuring Mozart’s Piano Concerto No. 21. It is the suitable option for someone looking for a piano concert.'
  },
  2: {
    fr: 'L’annonce F concerne le Heimatmuseum. Contrairement à l’annonce A, ce musée est ouvert le lundi, de 10 h à 12 h et de 14 h à 16 h 45.',
    ar: 'الإعلان F يتعلق بمتحف التراث المحلي، وهو مفتوح يوم الاثنين من الساعة 10 إلى 12 ومن 14 إلى 16:45. أما الإعلان A فيذكر أن المتحف مغلق يوم الاثنين.',
    en: 'Advertisement F is about the local history museum. Unlike advertisement A, this museum is open on Mondays, from 10 a.m. to noon and 2 p.m. to 4:45 p.m.'
  },
  3: {
    fr: 'L’annonce B propose une cuisine traditionnelle de l’Allgäu et de Bavière. C’est exactement ce que recherche une personne qui souhaite manger une spécialité bavaroise.',
    ar: 'الإعلان B يقدم المأكولات التقليدية لمنطقة ألغوي وبافاريا، وهو ما يناسب الشخص الذي يريد تناول طبق بافاري تقليدي.',
    en: 'Advertisement B offers traditional Allgäu and Bavarian cuisine. It matches someone looking to eat a Bavarian speciality.'
  },
  4: {
    fr: 'L’annonce K concerne le restaurant Ritterstub’n, spécialisé dans les poissons. C’est donc le bon choix pour un repas de poisson.',
    ar: 'الإعلان K يتعلق بمطعم ريترشتوبن المتخصص في أطباق السمك، ولذلك فهو الاختيار المناسب لتناول وجبة من السمك.',
    en: 'Advertisement K is for Ritterstub’n, a restaurant specialising in fish dishes. It is the right choice for a fish meal.'
  },
  5: {
    fr: 'L’annonce C propose plusieurs fromages de Bavière et de l’Allgäu : emmental, fromage de montagne et tilsit. Elle correspond à l’achat de spécialités fromagères en Bavière.',
    ar: 'الإعلان C يعرض عدة أنواع من الجبن من بافاريا ومنطقة ألغوي، مثل إمنتال وجبن الجبال وتيلسيت. لذلك فهو مناسب لشراء الجبن في بافاريا.',
    en: 'Advertisement C offers several Bavarian and Allgäu cheeses, including Emmental, mountain cheese and Tilsit. It matches buying cheese specialities in Bavaria.'
  },
  6: {
    fr: 'Aucune annonce ne propose un cours d’allemand à Vienne. L’annonce J propose bien l’allemand pour étrangers, mais l’institut se trouve à Rostock, et non à Vienne. La réponse est X.',
    ar: 'لا يوجد إعلان يقدم دورة ألمانية في فيينا. الإعلان J يقدم الألمانية للأجانب، لكن المعهد يقع في روستوك وليس في فيينا. الإجابة هي X.',
    en: 'No advertisement offers a German course in Vienna. Advertisement J does offer German for foreigners, but the institute is in Rostock, not Vienna. The answer is X.'
  },
  7: {
    fr: 'L’annonce H propose des programmes linguistiques et des séjours High-School pour les jeunes de 12 à 18 ans, notamment en anglais. Un garçon de 16 ans entre dans cette tranche d’âge.',
    ar: 'الإعلان H يقدم برامج لغوية وبرامج مدرسية بالخارج للشباب من 12 إلى 18 سنة، ومن بينها اللغة الإنجليزية. الابن البالغ 16 سنة يدخل ضمن هذه الفئة العمرية.',
    en: 'Advertisement H offers language courses and high-school programmes abroad for young people aged 12 to 18, including English. A 16-year-old is within this age range.'
  },
  8: {
    fr: 'Aucune annonce ne mentionne un cours de langue sur CD. Les annonces présentent des cours, des voyages linguistiques ou des formations, mais pas de support CD. La réponse est X.',
    ar: 'لا يوجد إعلان يذكر دورة لغوية على قرص مدمج CD. الإعلانات تتحدث عن دورات ورحلات لغوية، ولكن ليس عن دروس على أقراص مدمجة. الإجابة هي X.',
    en: 'No advertisement mentions a language course on CD. The advertisements offer courses, language trips or training, but no CD-based course. The answer is X.'
  },
  9: {
    fr: 'L’annonce H concerne les jeunes de 12 à 18 ans. Une enfant de 10 ans ne remplit donc pas la condition d’âge. Aucune autre annonce ne propose un séjour linguistique adapté à son âge. La réponse est X.',
    ar: 'الإعلان H مخصص للشباب من 12 إلى 18 سنة، وبالتالي فإن طفلة عمرها 10 سنوات لا تدخل ضمن الفئة العمرية المطلوبة. ولا يوجد إعلان آخر يقدم برنامجاً مناسباً لعمرها. الإجابة هي X.',
    en: 'Advertisement H is for young people aged 12 to 18, so a 10-year-old child does not meet the age requirement. No other advertisement offers a suitable language programme for her age. The answer is X.'
  },
  10: {
    fr: 'L’annonce L concerne l’hôtel-restaurant Alpenrösle. Elle mentionne un restaurant, mais aussi un hôtel, un café et une pension. C’est donc la seule annonce qui permet de manger et de passer la nuit sur place.',
    ar: 'الإعلان L يتعلق بفندق ومطعم ألبنروسله، ويذكر وجود مطعم وفندق ومقهى ودار إقامة. لذلك فهو الخيار المناسب للاحتفال وتناول الطعام ثم المبيت في المكان.',
    en: 'Advertisement L is for Hotel-Restaurant Alpenrösle. It offers a restaurant as well as a hotel, cafe and guesthouse, making it suitable for dining and staying overnight.'
  }
}

const options = ['X', ...ads.map(ad => ad.id)]

export default function CarolinePage() {
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
          B1 <span>›</span> Lesen <span>›</span> Teil 3 <span>›</span> Caroline
        </div>

        <section className="exercise-hero">
          <div className="hero-label">B1 · LESEVERSTEHEN</div>
          <h1>Caroline – Anzeigen</h1>
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
                        onClick={() => toggle(openAds, setOpenAds, ad.id)}
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
            <aside className="situations-section" id="situations-panel">
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
                        <span className="question-number">{item.id}</span>
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
          white-space: pre-line;
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
export const topics = {
  B1: [
    {
      de: 'Arbeit im Homeoffice oder im Büro?',
      en: 'Working from home or at the office?',
      fr: 'Travailler à domicile ou au bureau ?',
      ar: 'العمل من المنزل أم من المكتب؟',
    },
    {
      de: 'Leben in der Großstadt oder auf dem Land?',
      en: 'Living in a big city or in the countryside?',
      fr: 'Vivre dans une grande ville ou à la campagne ?',
      ar: 'العيش في مدينة كبيرة أم في البادية؟',
    },
    {
      de: 'Sport im Alltag – wie wichtig ist Bewegung?',
      en: 'Sport in everyday life – how important is exercise?',
      fr: 'Le sport au quotidien – quelle importance a l’activité physique ?',
      ar: 'الرياضة في الحياة اليومية – ما أهمية النشاط البدني؟',
    },
    {
      de: 'Einkaufen: online oder im Geschäft?',
      en: 'Shopping online or in stores?',
      fr: 'Faire ses achats en ligne ou en magasin ?',
      ar: 'التسوق عبر الإنترنت أم من المتاجر؟',
    },
    {
      de: 'Freunde finden: im echten Leben oder über soziale Medien?',
      en: 'Making friends in real life or through social media?',
      fr: 'Se faire des amis dans la vie réelle ou sur les réseaux sociaux ?',
      ar: 'التعرف على الأصدقاء في الواقع أم عبر وسائل التواصل الاجتماعي؟',
    },
    {
      de: 'Gesunde Ernährung im stressigen Alltag',
      en: 'Healthy eating in a busy everyday life',
      fr: 'Une alimentation saine dans un quotidien stressant',
      ar: 'التغذية الصحية في الحياة اليومية المزدحمة',
    },
  ],
  B2: [
    {
      de: 'Künstliche Intelligenz in Beruf und Ausbildung',
      en: 'Artificial intelligence in work and education',
      fr: 'L’intelligence artificielle dans le travail et la formation',
      ar: 'الذكاء الاصطناعي في العمل والتكوين',
    },
    {
      de: 'Fachkräftemangel – Ursachen und Lösungsansätze',
      en: 'The shortage of skilled workers – causes and solutions',
      fr: 'La pénurie de main-d’œuvre qualifiée – causes et solutions',
      ar: 'نقص الكفاءات المهنية – الأسباب والحلول',
    },
    {
      de: 'Digitalisierung an Schulen und Hochschulen',
      en: 'Digitalization in schools and universities',
      fr: 'La numérisation dans les écoles et les universités',
      ar: 'الرقمنة في المدارس والجامعات',
    },
    {
      de: 'Nachhaltigkeit im Alltag: Pflicht für alle oder persönliche Entscheidung?',
      en: 'Sustainability in everyday life: everyone’s duty or a personal choice?',
      fr: 'La durabilité au quotidien : obligation pour tous ou choix personnel ?',
      ar: 'الاستدامة في الحياة اليومية: واجب على الجميع أم اختيار شخصي؟',
    },
    {
      de: 'Work-Life-Balance: Wie viel Arbeit ist gesund?',
      en: 'Work-life balance: how much work is healthy?',
      fr: 'Équilibre entre vie professionnelle et vie privée : quelle quantité de travail est saine ?',
      ar: 'التوازن بين العمل والحياة: ما مقدار العمل الصحي؟',
    },
    {
      de: 'Öffentliche Verkehrsmittel statt Auto?',
      en: 'Public transport instead of cars?',
      fr: 'Les transports en commun plutôt que la voiture ?',
      ar: 'وسائل النقل العمومي بدلاً من السيارة؟',
    },
  ],
}
export type SpeakingLevel = keyof typeof topics
export type SpeakingLanguage = keyof (typeof topics)[SpeakingLevel][number]
export const modes = ["telc", "oesd", "goethe", "free"] as const
export type SpeakingMode = typeof modes[number]

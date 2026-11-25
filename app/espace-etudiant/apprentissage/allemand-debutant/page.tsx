
'use client'

import { useState } from 'react'
import { useLanguage, type Language } from '@/contexts/LanguageContext'
import {
  BookOpen,
  Volume2,
  GraduationCap,
  Languages,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  RotateCcw,
  Star,
  Headphones,
  Lightbulb,
} from 'lucide-react'

type Tab = 'alphabet' | 'syllables' | 'combinations' | 'words' | 'quiz'

const alphabet = [
  { letter: 'A', name: 'Ah', example: 'Apfel', fr: 'Pomme', de: 'Apfel', en: 'Apple', ar: 'تفاحة', pronunciation: { fr: 'Comme le A dans papa', de: 'Wie das A in Vater', en: 'Like the A in father', ar: 'مثل الألف في بابا' } },
  { letter: 'B', name: 'Beh', example: 'Ball', fr: 'Ballon', de: 'Ball', en: 'Ball', ar: 'كرة', pronunciation: { fr: 'Comme le B français', de: 'Wie B im Deutschen', en: 'Like B in boy', ar: 'مثل حرف ب' } },
  { letter: 'C', name: 'Tseh', example: 'Computer', fr: 'Ordinateur', de: 'Computer', en: 'Computer', ar: 'حاسوب', pronunciation: { fr: 'Comme TS dans tsar', de: 'Wie TS in „Pizza“', en: 'Like TS in cats', ar: 'مثل تس' } },
  { letter: 'D', name: 'Deh', example: 'Danke', fr: 'Merci', de: 'Danke', en: 'Thank you', ar: 'شكراً', pronunciation: { fr: 'Comme le D français', de: 'Wie D in Danke', en: 'Like D in dog', ar: 'مثل حرف د' } },
  { letter: 'E', name: 'Eh', example: 'Elefant', fr: 'Éléphant', de: 'Elefant', en: 'Elephant', ar: 'فيل', pronunciation: { fr: 'Un é fermé ou è selon le mot', de: 'Ein klares E', en: 'A clear E sound', ar: 'صوت قريب من إيه' } },
  { letter: 'F', name: 'Eff', example: 'Fisch', fr: 'Poisson', de: 'Fisch', en: 'Fish', ar: 'سمكة', pronunciation: { fr: 'Comme le F français', de: 'Wie F in Fisch', en: 'Like F in fish', ar: 'مثل حرف ف' } },
  { letter: 'G', name: 'Geh', example: 'Garten', fr: 'Jardin', de: 'Garten', en: 'Garden', ar: 'حديقة', pronunciation: { fr: 'Comme G dans gare', de: 'Wie G in Garten', en: 'Like G in go', ar: 'مثل گ أو ج قاسية' } },
  { letter: 'H', name: 'Hah', example: 'Haus', fr: 'Maison', de: 'Haus', en: 'House', ar: 'منزل', pronunciation: { fr: 'H aspiré, avec un souffle', de: 'Ein hörbarer Hauchlaut', en: 'Like H in house', ar: 'مثل حرف ه مع نفَس' } },
  { letter: 'I', name: 'Ih', example: 'Igel', fr: 'Hérisson', de: 'Igel', en: 'Hedgehog', ar: 'قنفذ', pronunciation: { fr: 'Comme I dans ici', de: 'Wie das lange I', en: 'Like EE in see', ar: 'مثل ي طويلة' } },
  { letter: 'J', name: 'Yott', example: 'Ja', fr: 'Oui', de: 'Ja', en: 'Yes', ar: 'نعم', pronunciation: { fr: 'Comme Y dans yaourt', de: 'Wie J in Ja', en: 'Like Y in yes', ar: 'مثل ي' } },
  { letter: 'K', name: 'Kah', example: 'Kind', fr: 'Enfant', de: 'Kind', en: 'Child', ar: 'طفل', pronunciation: { fr: 'Comme le K français', de: 'Wie K in Kind', en: 'Like K in key', ar: 'مثل حرف ك' } },
  { letter: 'L', name: 'Ell', example: 'Lampe', fr: 'Lampe', de: 'Lampe', en: 'Lamp', ar: 'مصباح', pronunciation: { fr: 'Comme le L français', de: 'Wie L in Lampe', en: 'Like L in love', ar: 'مثل حرف ل' } },
  { letter: 'M', name: 'Emm', example: 'Mutter', fr: 'Mère', de: 'Mutter', en: 'Mother', ar: 'أم', pronunciation: { fr: 'Comme le M français', de: 'Wie M in Mutter', en: 'Like M in mother', ar: 'مثل حرف م' } },
  { letter: 'N', name: 'Enn', example: 'Nase', fr: 'Nez', de: 'Nase', en: 'Nose', ar: 'أنف', pronunciation: { fr: 'Comme le N français', de: 'Wie N in Nase', en: 'Like N in name', ar: 'مثل حرف ن' } },
  { letter: 'O', name: 'Oh', example: 'Oma', fr: 'Grand-mère', de: 'Oma', en: 'Grandmother', ar: 'جدة', pronunciation: { fr: 'Comme un O fermé', de: 'Wie ein klares O', en: 'Like O in more (approximately)', ar: 'مثل و قصيرة' } },
  { letter: 'P', name: 'Peh', example: 'Papa', fr: 'Papa', de: 'Papa', en: 'Dad', ar: 'أب', pronunciation: { fr: 'Comme P, avec une légère expiration', de: 'Mit leichter Behauchung', en: 'Like P in pen', ar: 'مثل پ مع نفَس خفيف' } },
  { letter: 'Q', name: 'Kuh', example: 'Quelle', fr: 'Source', de: 'Quelle', en: 'Source', ar: 'مصدر', pronunciation: { fr: 'Comme K, généralement avec U', de: 'Meistens als QU', en: 'Like K, usually followed by U', ar: 'مثل ك وغالباً بعدها و' } },
  { letter: 'R', name: 'Err', example: 'Rot', fr: 'Rouge', de: 'Rot', en: 'Red', ar: 'أحمر', pronunciation: { fr: 'R allemand, souvent guttural', de: 'Ein R, oft im Rachen gesprochen', en: 'German R, often pronounced in the throat', ar: 'راء ألمانية غالباً من الحلق' } },
  { letter: 'S', name: 'Ess', example: 'Sonne', fr: 'Soleil', de: 'Sonne', en: 'Sun', ar: 'شمس', pronunciation: { fr: 'Comme S dans sac', de: 'Wie S in Sonne', en: 'Like S in sun', ar: 'مثل حرف س' } },
  { letter: 'T', name: 'Teh', example: 'Tisch', fr: 'Table', de: 'Tisch', en: 'Table', ar: 'طاولة', pronunciation: { fr: 'Comme T, avec une légère expiration', de: 'Mit leichter Behauchung', en: 'Like T in table', ar: 'مثل ت مع نفَس خفيف' } },
  { letter: 'U', name: 'Uh', example: 'Uhr', fr: 'Horloge', de: 'Uhr', en: 'Clock', ar: 'ساعة', pronunciation: { fr: 'Comme OU dans roue', de: 'Wie das lange U', en: 'Like OO in moon', ar: 'مثل و طويلة' } },
  { letter: 'V', name: 'Fau', example: 'Vater', fr: 'Père', de: 'Vater', en: 'Father', ar: 'أب', pronunciation: { fr: 'Souvent comme F', de: 'In vielen Wörtern wie F', en: 'Often like F', ar: 'غالباً مثل ف' } },
  { letter: 'W', name: 'Veh', example: 'Wasser', fr: 'Eau', de: 'Wasser', en: 'Water', ar: 'ماء', pronunciation: { fr: 'Comme V en français', de: 'Wie W in Wasser', en: 'Like V in very', ar: 'مثل ڤ' } },
  { letter: 'X', name: 'Iks', example: 'Taxi', fr: 'Taxi', de: 'Taxi', en: 'Taxi', ar: 'سيارة أجرة', pronunciation: { fr: 'Comme X dans taxi', de: 'Wie KS', en: 'Like X in box', ar: 'مثل كس' } },
  { letter: 'Y', name: 'Ypsilon', example: 'Yoga', fr: 'Yoga', de: 'Yoga', en: 'Yoga', ar: 'يوغا', pronunciation: { fr: 'Son variable selon le mot', de: 'Je nach Wort unterschiedlich', en: 'Varies depending on the word', ar: 'يختلف حسب الكلمة' } },
  { letter: 'Z', name: 'Tsett', example: 'Zeit', fr: 'Temps', de: 'Zeit', en: 'Time', ar: 'وقت', pronunciation: { fr: 'Comme TS dans tsar', de: 'Wie TS in Zeit', en: 'Like TS in cats', ar: 'مثل تس' } },
]

const specialLetters = [
  { letter: 'Ä ä', sound: 'Ä', word: 'Mädchen', meaning: { fr: 'Fille', de: 'Mädchen', en: 'Girl', ar: 'فتاة' }, description: { fr: 'Proche du è français.', de: 'Ä klingt ähnlich wie ein offenes E.', en: 'Similar to the vowel in bed.', ar: 'قريب من صوت إي المفتوحة.' } },
  { letter: 'Ö ö', sound: 'Ö', word: 'schön', meaning: { fr: 'Beau / belle', de: 'Schön', en: 'Beautiful', ar: 'جميل / جميلة' }, description: { fr: 'Prononce É avec les lèvres arrondies.', de: 'Sprich E mit gerundeten Lippen.', en: 'Say E with rounded lips.', ar: 'انطق إيه مع تدوير الشفتين.' } },
  { letter: 'Ü ü', sound: 'Ü', word: 'Tür', meaning: { fr: 'Porte', de: 'Tür', en: 'Door', ar: 'باب' }, description: { fr: 'Comme le U français de lune.', de: 'Ähnlich wie das französische U.', en: 'Say EE with rounded lips.', ar: 'مثل صوت U الفرنسي.' } },
  { letter: 'ß', sound: 'SS', word: 'Straße', meaning: { fr: 'Rue', de: 'Straße', en: 'Street', ar: 'شارع' }, description: { fr: 'Se prononce comme SS.', de: 'Wird wie ein scharfes S gesprochen.', en: 'Pronounced like SS.', ar: 'تنطق مثل س.' } },
]

const syllableRows = [
  { consonant: 'B', values: ['ba', 'be', 'bi', 'bo', 'bu'], note: { fr: 'B se prononce comme en français.', de: 'B wird ähnlich wie im Deutschen üblich ausgesprochen.', en: 'B is pronounced as in English.', ar: 'ينطق B مثل الباء تقريباً.' } },
  { consonant: 'D', values: ['da', 'de', 'di', 'do', 'du'], note: { fr: 'D se prononce comme en français.', de: 'D wird ähnlich wie im Deutschen üblich ausgesprochen.', en: 'D is pronounced as in English.', ar: 'ينطق D مثل الدال تقريباً.' } },
  { consonant: 'F', values: ['fa', 'fe', 'fi', 'fo', 'fu'], note: { fr: 'F se prononce comme en français.', de: 'F wird wie in Fisch ausgesprochen.', en: 'F is pronounced as in fish.', ar: 'ينطق F مثل الفاء.' } },
  { consonant: 'L', values: ['la', 'le', 'li', 'lo', 'lu'], note: { fr: 'L se prononce comme en français.', de: 'L wird wie in Lampe ausgesprochen.', en: 'L is pronounced as in lamp.', ar: 'ينطق L مثل اللام.' } },
  { consonant: 'M', values: ['ma', 'me', 'mi', 'mo', 'mu'], note: { fr: 'M se prononce comme en français.', de: 'M wird wie in Mutter ausgesprochen.', en: 'M is pronounced as in mother.', ar: 'ينطق M مثل الميم.' } },
  { consonant: 'N', values: ['na', 'ne', 'ni', 'no', 'nu'], note: { fr: 'N se prononce comme en français.', de: 'N wird wie in Nase ausgesprochen.', en: 'N is pronounced as in name.', ar: 'ينطق N مثل النون.' } },
  { consonant: 'P', values: ['pa', 'pe', 'pi', 'po', 'pu'], note: { fr: 'P est prononcé avec une petite aspiration.', de: 'P wird mit einer leichten Behauchung gesprochen.', en: 'P is pronounced with a small puff of air.', ar: 'ينطق P مع نفَس خفيف.' } },
  { consonant: 'S', values: ['sa', 'se', 'si', 'so', 'su'], note: { fr: 'Au début d’un mot devant une voyelle, S peut sonner comme Z.', de: 'Am Wortanfang vor einem Vokal klingt S oft wie Z.', en: 'At the beginning of a word before a vowel, S often sounds like Z.', ar: 'في بداية الكلمة قبل حرف متحرك، قد ينطق S مثل ز.' } },
  { consonant: 'T', values: ['ta', 'te', 'ti', 'to', 'tu'], note: { fr: 'T est prononcé avec une petite aspiration.', de: 'T wird mit einer leichten Behauchung gesprochen.', en: 'T is pronounced with a small puff of air.', ar: 'ينطق T مع نفَس خفيف.' } },
  { consonant: 'W', values: ['wa', 'we', 'wi', 'wo', 'wu'], note: { fr: 'W allemand se prononce comme V en français.', de: 'W wird wie ein deutsches W ausgesprochen.', en: 'German W sounds like English V.', ar: 'W الألمانية تنطق مثل ڤ.' } },
]

const combinations = [
  {
    category: 'vowels',
    items: [
      { value: 'ei', sound: 'aï', example: 'mein', meaning: { fr: 'mon / ma', de: 'mein', en: 'my', ar: 'لي' }, description: { fr: 'Se prononce comme « aï » dans ail.', de: 'Klingt wie „ai“.', en: 'Sounds like the vowel in “eye”.', ar: 'تنطق مثل آي.' } },
      { value: 'ai', sound: 'aï', example: 'Mai', meaning: { fr: 'mai', de: 'Mai', en: 'May', ar: 'ماي' }, description: { fr: 'Même son que ei. Cette combinaison est moins fréquente.', de: 'Gleicher Klang wie ei. Diese Kombination ist seltener.', en: 'Same sound as ei. This spelling is less common.', ar: 'نفس صوت ei وتستعمل بشكل أقل.' } },
      { value: 'au', sound: 'a-ou', example: 'Haus', meaning: { fr: 'maison', de: 'Haus', en: 'house', ar: 'منزل' }, description: { fr: 'Se prononce comme « aou » en une seule syllabe.', de: 'Wird als Doppellaut gesprochen.', en: 'Sounds like “ow” in “house”.', ar: 'تنطق مثل آو.' } },
      { value: 'eu', sound: 'oï', example: 'heute', meaning: { fr: 'aujourd’hui', de: 'heute', en: 'today', ar: 'اليوم' }, description: { fr: 'Se prononce approximativement « oï ».', de: 'Klingt wie „oy“.', en: 'Sounds like “oy” in “boy”.', ar: 'تنطق تقريباً أوي.' } },
      { value: 'äu', sound: 'oï', example: 'Häuser', meaning: { fr: 'maisons', de: 'Häuser', en: 'houses', ar: 'منازل' }, description: { fr: 'Se prononce comme eu.', de: 'Klingt genauso wie eu.', en: 'Sounds the same as eu.', ar: 'تنطق مثل eu.' } },
      { value: 'ie', sound: 'ii long', example: 'Liebe', meaning: { fr: 'amour', de: 'Liebe', en: 'love', ar: 'حب' }, description: { fr: 'Le i est long : « iii ».', de: 'Das i wird lang ausgesprochen.', en: 'The i is long, like “ee” in “see”.', ar: 'تنطق ي طويلة.' } },
    ],
  },
  {
    category: 'consonants',
    items: [
      { value: 'sch', sound: 'ch', example: 'Schule', meaning: { fr: 'école', de: 'Schule', en: 'school', ar: 'مدرسة' }, description: { fr: 'Se prononce comme « ch » dans chat.', de: 'Wie „sch“ in Schule.', en: 'Like “sh” in “shoe”.', ar: 'مثل ش.' } },
      { value: 'ch', sound: 'kh / ç', example: 'ich', meaning: { fr: 'je', de: 'ich', en: 'I', ar: 'أنا' }, description: { fr: 'Deux sons importants : doux dans ich, guttural dans Buch.', de: 'Zwei wichtige Laute: weich in ich, rau in Buch.', en: 'Two common sounds: soft in ich, guttural in Buch.', ar: 'له صوتان: ناعم في ich وحلقي في Buch.' } },
      { value: 'sp', sound: 'chp', example: 'Sport', meaning: { fr: 'sport', de: 'Sport', en: 'sport', ar: 'رياضة' }, description: { fr: 'Au début d’un mot ou d’une syllabe, se prononce « chp ».', de: 'Am Wort- oder Silbenanfang klingt es wie „schp“.', en: 'At the beginning of a word or syllable, it sounds like “shp”.', ar: 'في بداية الكلمة أو المقطع تنطق شب.' } },
      { value: 'st', sound: 'cht', example: 'Straße', meaning: { fr: 'rue', de: 'Straße', en: 'street', ar: 'شارع' }, description: { fr: 'Au début d’un mot ou d’une syllabe, se prononce « cht ».', de: 'Am Wort- oder Silbenanfang klingt es wie „scht“.', en: 'At the beginning of a word or syllable, it sounds like “sht”.', ar: 'في بداية الكلمة أو المقطع تنطق شت.' } },
      { value: 'ck', sound: 'k', example: 'Jacke', meaning: { fr: 'veste', de: 'Jacke', en: 'jacket', ar: 'سترة' }, description: { fr: 'Se prononce comme un seul K.', de: 'Wird wie ein K ausgesprochen.', en: 'Pronounced like a single K.', ar: 'تنطق مثل ك واحدة.' } },
      { value: 'tz', sound: 'ts', example: 'Katze', meaning: { fr: 'chat', de: 'Katze', en: 'cat', ar: 'قط' }, description: { fr: 'Se prononce « ts ».', de: 'Wird wie „ts“ ausgesprochen.', en: 'Sounds like “ts”.', ar: 'تنطق تس.' } },
      { value: 'pf', sound: 'p + f', example: 'Pferd', meaning: { fr: 'cheval', de: 'Pferd', en: 'horse', ar: 'حصان' }, description: { fr: 'Prononce les deux sons P puis F.', de: 'Beide Laute werden gesprochen: P und F.', en: 'Pronounce both sounds: P followed by F.', ar: 'ننطق الصوتين معاً: پ ثم ف.' } },
      { value: 'qu', sound: 'kv', example: 'Quelle', meaning: { fr: 'source', de: 'Quelle', en: 'source', ar: 'مصدر' }, description: { fr: 'Se prononce généralement « kv ».', de: 'Wird normalerweise wie „kv“ ausgesprochen.', en: 'Usually sounds like “kv”.', ar: 'تنطق غالباً كف.' } },
      { value: 'ng', sound: 'ng', example: 'singen', meaning: { fr: 'chanter', de: 'singen', en: 'to sing', ar: 'يغني' }, description: { fr: 'Le son nasal ng : le g final ne se prononce pas séparément.', de: 'Der Laut ng wird zusammen gesprochen.', en: 'The ng is pronounced as one nasal sound.', ar: 'صوت أنفي واحد، ولا ننطق g بشكل منفصل.' } },
      { value: 'nk', sound: 'nk', example: 'danke', meaning: { fr: 'merci', de: 'danke', en: 'thank you', ar: 'شكراً' }, description: { fr: 'Le N est suivi d’un K clairement prononcé.', de: 'Auf n folgt ein deutliches k.', en: 'The N is followed by a clear K sound.', ar: 'حرف N يتبعه صوت K واضح.' } },
    ],
  },
]

const combinationTranslations = {
  fr: {
    title: 'Les combinaisons de lettres',
    intro: 'En allemand, plusieurs lettres peuvent former ensemble un nouveau son. Apprends à les reconnaître et à les prononcer.',
    vowels: 'Combinaisons de voyelles',
    consonants: 'Combinaisons de consonnes',
    listen: 'Écouter',
    example: 'Exemple',
    pronunciation: 'Prononciation approximative',
    explanation: 'Explication',
    tip: 'Conseil : écoute plusieurs fois le mot entier. La prononciation écrite reste une approximation.',
  },
  de: {
    title: 'Buchstabenkombinationen',
    intro: 'Im Deutschen können mehrere Buchstaben zusammen einen neuen Laut bilden. Lerne, sie zu erkennen und auszusprechen.',
    vowels: 'Vokalkombinationen',
    consonants: 'Konsonantenkombinationen',
    listen: 'Anhören',
    example: 'Beispiel',
    pronunciation: 'Ungefähre Aussprache',
    explanation: 'Erklärung',
    tip: 'Tipp: Höre dir das ganze Wort mehrmals an. Die schriftliche Aussprache ist nur eine Annäherung.',
  },
  en: {
    title: 'Letter combinations',
    intro: 'In German, several letters can work together to create a new sound. Learn to recognize and pronounce them.',
    vowels: 'Vowel combinations',
    consonants: 'Consonant combinations',
    listen: 'Listen',
    example: 'Example',
    pronunciation: 'Approximate pronunciation',
    explanation: 'Explanation',
    tip: 'Tip: Listen to the whole word several times. Written pronunciation is only an approximation.',
  },
  ar: {
    title: 'تركيبات الحروف',
    intro: 'في اللغة الألمانية، يمكن لعدة حروف أن تجتمع لتكوين صوت جديد. تعلم التعرف عليها ونطقها.',
    vowels: 'تركيبات حروف العلة',
    consonants: 'تركيبات الحروف الساكنة',
    listen: 'استمع',
    example: 'مثال',
    pronunciation: 'النطق التقريبي',
    explanation: 'الشرح',
    tip: 'نصيحة: استمع إلى الكلمة كاملة عدة مرات. النطق المكتوب تقريبي فقط.',
  },
}

const firstWords = [
  { de: 'Hallo', sound: 'ha-lo', fr: 'Bonjour / Salut', deMeaning: 'Hallo', en: 'Hello', ar: 'مرحباً' },
  { de: 'Danke', sound: 'dan-keu', fr: 'Merci', deMeaning: 'Danke', en: 'Thank you', ar: 'شكراً' },
  { de: 'Bitte', sound: 'bi-teu', fr: 'S’il vous plaît / De rien', deMeaning: 'Bitte', en: 'Please / You’re welcome', ar: 'من فضلك / العفو' },
  { de: 'Ja', sound: 'ya', fr: 'Oui', deMeaning: 'Ja', en: 'Yes', ar: 'نعم' },
  { de: 'Nein', sound: 'naïn', fr: 'Non', deMeaning: 'Nein', en: 'No', ar: 'لا' },
  { de: 'Tschüss', sound: 'tchüss', fr: 'Au revoir', deMeaning: 'Tschüss', en: 'Bye', ar: 'إلى اللقاء' },
  { de: 'Guten Morgen', sound: 'gou-ten mor-guen', fr: 'Bonjour (le matin)', deMeaning: 'Guten Morgen', en: 'Good morning', ar: 'صباح الخير' },
  { de: 'Guten Abend', sound: 'gou-ten a-bent', fr: 'Bonsoir', deMeaning: 'Guten Abend', en: 'Good evening', ar: 'مساء الخير' },
  { de: 'Ich', sound: 'ikh', fr: 'Je', deMeaning: 'Ich', en: 'I', ar: 'أنا' },
  { de: 'Du', sound: 'dou', fr: 'Tu', deMeaning: 'Du', en: 'You', ar: 'أنت' },
]

const quizQuestions = [
  {
    q: { fr: 'Comment prononce-t-on la lettre W en allemand ?', de: 'Wie spricht man den Buchstaben W auf Deutsch aus?', en: 'How is the letter W pronounced in German?', ar: 'كيف ننطق الحرف W باللغة الألمانية؟' },
    choices: [
      { fr: 'Comme W anglais', de: 'Wie englisches W', en: 'Like English W', ar: 'مثل W الإنجليزية' },
      { fr: 'Comme V français', de: 'Wie deutsches W', en: 'Like English V', ar: 'مثل ڤ' },
      { fr: 'Comme F français', de: 'Wie deutsches F', en: 'Like English F', ar: 'مثل ف' },
    ],
    answer: 1,
    explanation: { fr: 'Le W allemand se prononce comme le V français.', de: 'Das deutsche W wird wie das englische V ausgesprochen.', en: 'German W sounds like English V.', ar: 'الحرف W الألماني ينطق مثل ڤ.' },
  },
  {
    q: { fr: 'Comment prononce-t-on la lettre J ?', de: 'Wie spricht man den Buchstaben J aus?', en: 'How is the letter J pronounced in German?', ar: 'كيف ننطق الحرف J؟' },
    choices: [
      { fr: 'Comme J français', de: 'Wie französisches J', en: 'Like English J', ar: 'مثل ج الفرنسية' },
      { fr: 'Comme Y dans yaourt', de: 'Wie deutsches J', en: 'Like Y in yes', ar: 'مثل ي' },
      { fr: 'Comme G dans gare', de: 'Wie deutsches G', en: 'Like G in go', ar: 'مثل گ' },
    ],
    answer: 1,
    explanation: { fr: 'J allemand se prononce comme le Y de yaourt.', de: 'Das deutsche J wird wie Y ausgesprochen.', en: 'German J sounds like Y in yes.', ar: 'الحرف J الألماني ينطق مثل ي.' },
  },
  {
    q: { fr: 'Quelle lettre se prononce généralement TS ?', de: 'Welcher Buchstabe wird normalerweise wie TS ausgesprochen?', en: 'Which letter is generally pronounced like TS?', ar: 'أي حرف ينطق عادة مثل تس؟' },
    choices: [
      { fr: 'Z', de: 'Z', en: 'Z', ar: 'Z' },
      { fr: 'S', de: 'S', en: 'S', ar: 'S' },
      { fr: 'X', de: 'X', en: 'X', ar: 'X' },
    ],
    answer: 0,
    explanation: { fr: 'La lettre Z allemande se prononce TS.', de: 'Der deutsche Buchstabe Z wird wie TS ausgesprochen.', en: 'The German letter Z is pronounced TS.', ar: 'الحرف Z الألماني ينطق تس.' },
  },
  {
    q: { fr: 'Comment prononce-t-on Ü ?', de: 'Wie spricht man Ü aus?', en: 'How is Ü pronounced?', ar: 'كيف ننطق Ü؟' },
    choices: [
      { fr: 'Comme OU', de: 'Wie U in Mutter', en: 'Like OO', ar: 'مثل أو' },
      { fr: 'Comme U français', de: 'Wie französisches U', en: 'Like French U', ar: 'مثل U الفرنسية' },
      { fr: 'Comme A', de: 'Wie A', en: 'Like A', ar: 'مثل أ' },
    ],
    answer: 1,
    explanation: { fr: 'Ü est proche du U français de lune.', de: 'Ü klingt ähnlich wie das französische U.', en: 'Ü is similar to the French U sound.', ar: 'Ü قريب من صوت U الفرنسي.' },
  },
  {
    q: { fr: 'Comment prononce-t-on ß ?', de: 'Wie spricht man ß aus?', en: 'How is ß pronounced?', ar: 'كيف ننطق ß؟' },
    choices: [
      { fr: 'Comme B', de: 'Wie B', en: 'Like B', ar: 'مثل ب' },
      { fr: 'Comme Z', de: 'Wie Z', en: 'Like Z', ar: 'مثل ز' },
      { fr: 'Comme SS', de: 'Wie SS', en: 'Like SS', ar: 'مثل س' },
    ],
    answer: 2,
    explanation: { fr: 'ß se prononce comme un double S.', de: 'ß wird wie ein scharfes S ausgesprochen.', en: 'ß is pronounced like SS.', ar: 'الحرف ß ينطق مثل س.' },
  },
]

const translations = {
  fr: {
    language: 'Français', beginner: 'Niveau débutant absolu', welcome: 'Bienvenue en allemand !', intro: 'Apprends à lire et prononcer l’allemand, pas à pas.',
    start: 'Commencer à apprendre', audio: 'Audio allemand', progress: 'Ta progression', progressHint: 'Écoute et découvre les lettres pour progresser.',
    letters: 'lettres découvertes', alphabet: 'Alphabet', syllables: 'Les syllabes', words: 'Mes premiers mots', quiz: 'Je m’entraîne',
    alphabetTitle: 'Alphabet allemand', alphabetIntro: '26 lettres comme en français, avec quelques différences de prononciation.',
    selected: 'Lettre sélectionnée', listen: 'Écouter', pronunciation: 'Comment prononcer cette lettre ?', example: 'Exemple de mot',
    previous: 'Précédent', next: 'Suivant', special: 'Les lettres particulières', tip: 'Petit conseil',
    tipText: 'En allemand, la prononciation est généralement régulière. Certaines lettres changent toutefois de son selon leur position dans le mot. Les approximations écrites sont une première aide, mais elles ne remplacent pas l’écoute.',
    syllableTitle: 'Apprendre à lire les syllabes', syllableIntro: 'Une syllabe est un petit groupe de sons. Écoute chaque combinaison, puis essaie de la prononcer seul.',
    rule: 'La règle de départ', formula: 'Consonne + voyelle = syllabe', formulaExample: 'Exemple : B + A = BA · M + A = MA',
    letter: 'Lettre', remember: 'À retenir', tryRead: 'Essaie de lire ces combinaisons', firstWordsTitle: 'Mes premiers mots allemands',
    firstWordsIntro: 'Découvre quelques mots très utiles dans la vie quotidienne.', word: 'MOT', approximate: 'Prononciation approximative',
    conversation: 'Première petite conversation', listenWord: 'Écouter le mot', knowledge: 'Je vérifie mes connaissances',
    quizIntro: 'Un petit exercice pour commencer à reconnaître les sons allemands.', question: 'QUESTION', score: 'Score',
    choose: 'Choisis la bonne réponse', validate: 'Vérifier', correct: 'Bravo ! Bonne réponse.', wrong: 'Pas tout à fait. Voici la bonne réponse :',
    nextQuestion: 'Question suivante', restart: 'Recommencer le quiz', footer: 'Chaque expert a commencé par apprendre l’alphabet. Viel Erfolg !',
    noAudio: 'La lecture audio n’est pas disponible sur ce navigateur.',
  },
  de: {
    language: 'Deutsch', beginner: 'Für absolute Anfänger', welcome: 'Willkommen beim Deutschlernen!', intro: 'Lerne Schritt für Schritt, Deutsch zu lesen und auszusprechen.',
    start: 'Mit dem Lernen beginnen', audio: 'Deutsche Audio-Ausgabe', progress: 'Dein Lernfortschritt', progressHint: 'Höre dir die Buchstaben an und entdecke ihre Aussprache.',
    letters: 'entdeckte Buchstaben', alphabet: 'Alphabet', syllables: 'Silben', words: 'Meine ersten Wörter', quiz: 'Üben',
    alphabetTitle: 'Das deutsche Alphabet', alphabetIntro: '26 Grundbuchstaben wie im Englischen, mit einigen Besonderheiten in der Aussprache.',
    selected: 'Ausgewählter Buchstabe', listen: 'Anhören', pronunciation: 'Wie spricht man diesen Buchstaben aus?', example: 'Wortbeispiel',
    previous: 'Zurück', next: 'Weiter', special: 'Besondere Buchstaben', tip: 'Ein kleiner Tipp',
    tipText: 'Die deutsche Aussprache ist meistens regelmäßig. Einige Buchstaben verändern jedoch ihren Klang je nach Position im Wort. Die schriftlichen Beispiele sind eine erste Hilfe, ersetzen aber nicht das Zuhören.',
    syllableTitle: 'Silben lesen lernen', syllableIntro: 'Eine Silbe ist eine kleine Gruppe von Lauten. Höre dir jede Kombination an und versuche dann, sie selbst auszusprechen.',
    rule: 'Die Grundregel', formula: 'Konsonant + Vokal = Silbe', formulaExample: 'Beispiel: B + A = BA · M + A = MA',
    letter: 'Buchstabe', remember: 'Das solltest du wissen', tryRead: 'Lies diese Kombinationen', firstWordsTitle: 'Meine ersten deutschen Wörter',
    firstWordsIntro: 'Entdecke einige nützliche Wörter für den Alltag.', word: 'WORT', approximate: 'Ungefähre Aussprache',
    conversation: 'Ein erstes kleines Gespräch', listenWord: 'Wort anhören', knowledge: 'Ich überprüfe mein Wissen',
    quizIntro: 'Eine kleine Übung, um deutsche Laute zu erkennen.', question: 'FRAGE', score: 'Punktzahl',
    choose: 'Wähle die richtige Antwort', validate: 'Überprüfen', correct: 'Sehr gut! Die Antwort ist richtig.', wrong: 'Nicht ganz. Die richtige Antwort ist:',
    nextQuestion: 'Nächste Frage', restart: 'Quiz wiederholen', footer: 'Jeder Experte hat einmal mit dem Alphabet angefangen. Viel Erfolg!',
    noAudio: 'Die Audioausgabe ist in diesem Browser nicht verfügbar.',
  },
  en: {
    language: 'English', beginner: 'Absolute beginner level', welcome: 'Welcome to German!', intro: 'Learn to read and pronounce German, step by step.',
    start: 'Start learning', audio: 'German audio', progress: 'Your progress', progressHint: 'Listen to and discover the letters to make progress.',
    letters: 'letters discovered', alphabet: 'Alphabet', syllables: 'Syllables', words: 'My first words', quiz: 'Practice',
    alphabetTitle: 'The German alphabet', alphabetIntro: 'The 26 basic letters, with a few differences in pronunciation.',
    selected: 'Selected letter', listen: 'Listen', pronunciation: 'How do you pronounce this letter?', example: 'Example word',
    previous: 'Previous', next: 'Next', special: 'Special letters', tip: 'A little tip',
    tipText: 'German pronunciation is generally regular. However, some letters change their sound depending on their position in a word. Written approximations are a first guide, but they cannot replace listening.',
    syllableTitle: 'Learn to read syllables', syllableIntro: 'A syllable is a small group of sounds. Listen to each combination, then try to pronounce it yourself.',
    rule: 'The basic rule', formula: 'Consonant + vowel = syllable', formulaExample: 'Example: B + A = BA · M + A = MA',
    letter: 'Letter', remember: 'Remember', tryRead: 'Try reading these combinations', firstWordsTitle: 'My first German words',
    firstWordsIntro: 'Discover some useful words for everyday life.', word: 'WORD', approximate: 'Approximate pronunciation',
    conversation: 'Your first little conversation', listenWord: 'Listen to the word', knowledge: 'Check your knowledge',
    quizIntro: 'A short exercise to start recognizing German sounds.', question: 'QUESTION', score: 'Score',
    choose: 'Choose the correct answer', validate: 'Check', correct: 'Well done! Correct answer.', wrong: 'Not quite. The correct answer is:',
    nextQuestion: 'Next question', restart: 'Restart the quiz', footer: 'Every expert started by learning the alphabet. Viel Erfolg!',
    noAudio: 'Audio playback is not available in this browser.',
  },
  ar: {
    language: 'العربية', beginner: 'مستوى المبتدئين تماماً', welcome: 'مرحباً بك في تعلم الألمانية!', intro: 'تعلم قراءة ونطق الألمانية خطوة بخطوة.',
    start: 'ابدأ التعلم', audio: 'الصوت الألماني', progress: 'تقدمك', progressHint: 'استمع إلى الحروف واكتشف طريقة نطقها.',
    letters: 'حرفاً تم اكتشافها', alphabet: 'الأبجدية', syllables: 'المقاطع الصوتية', words: 'كلماتي الأولى', quiz: 'أتدرب',
    alphabetTitle: 'الأبجدية الألمانية', alphabetIntro: 'تتكون من 26 حرفاً أساسياً، مع بعض الاختلافات في النطق.',
    selected: 'الحرف المحدد', listen: 'استمع', pronunciation: 'كيف ننطق هذا الحرف؟', example: 'مثال على كلمة',
    previous: 'السابق', next: 'التالي', special: 'الحروف الخاصة', tip: 'نصيحة صغيرة',
    tipText: 'النطق الألماني منتظم بشكل عام، لكن بعض الحروف يتغير صوتها حسب موقعها في الكلمة. الكتابة الصوتية هنا مجرد مساعدة أولية ولا تعوض الاستماع.',
    syllableTitle: 'تعلم قراءة المقاطع الصوتية', syllableIntro: 'المقطع الصوتي هو مجموعة صغيرة من الأصوات. استمع إلى كل تركيبة ثم حاول نطقها بنفسك.',
    rule: 'القاعدة الأساسية', formula: 'حرف ساكن + حرف متحرك = مقطع صوتي', formulaExample: 'مثال: B + A = BA · M + A = MA',
    letter: 'الحرف', remember: 'تذكر', tryRead: 'حاول قراءة هذه التركيبات', firstWordsTitle: 'كلماتي الألمانية الأولى',
    firstWordsIntro: 'اكتشف بعض الكلمات المفيدة في الحياة اليومية.', word: 'كلمة', approximate: 'النطق التقريبي',
    conversation: 'محادثة صغيرة أولى', listenWord: 'استمع إلى الكلمة', knowledge: 'اختبر معلوماتك',
    quizIntro: 'تمرين صغير للتعرف على الأصوات الألمانية.', question: 'السؤال', score: 'النتيجة',
    choose: 'اختر الإجابة الصحيحة', validate: 'تحقق', correct: 'أحسنت! إجابة صحيحة.', wrong: 'ليس تماماً. الإجابة الصحيحة هي:',
    nextQuestion: 'السؤال التالي', restart: 'أعد الاختبار', footer: 'كل خبير بدأ بتعلم الأبجدية. Viel Erfolg!',
    noAudio: 'خاصية الصوت غير متاحة في هذا المتصفح.',
  },
}

export default function AllemandDebutantPage() {
  // Utilise la langue globale partagée avec le sélecteur du bas
  const { language, setLanguage } = useLanguage()

  const [tab, setTab] = useState<Tab>('alphabet')
  const [selectedLetter, setSelectedLetter] = useState(0)
  const [selectedQuiz, setSelectedQuiz] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [completed, setCompleted] = useState<number[]>([])

  const tr = translations[language]
  const current = alphabet[selectedLetter]
  const direction = language === 'ar' ? 'rtl' : 'ltr'

  const speak = (text: string) => {
    if (typeof window === 'undefined') return

    if (!('speechSynthesis' in window)) {
      console.warn(tr.noAudio)
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'de-DE'
    utterance.rate = 0.78

    window.speechSynthesis.speak(utterance)
  }

  const markCompleted = (index: number) => {
    setCompleted(prev => prev.includes(index) ? prev : [...prev, index])
  }

  const changeLetter = (index: number) => {
    setSelectedLetter(index)
    markCompleted(index)
  }

  const checkAnswer = () => {
    if (answer === null || answered) return
    setAnswered(true)
    if (answer === quizQuestions[selectedQuiz].answer) {
      setScore(prev => prev + 1)
    }
  }

  const nextQuestion = () => {
    setSelectedQuiz(prev => (prev + 1) % quizQuestions.length)
    setAnswer(null)
    setAnswered(false)
  }

  const restartQuiz = () => {
    setScore(0)
    setSelectedQuiz(0)
    setAnswer(null)
    setAnswered(false)
  }

  return (
    <main className="min-h-screen bg-[#F6F7FA] text-[#172B4D]" dir={direction}>
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-10">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-[#172B4D] p-6 text-white shadow-lg md:p-10">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#D6B56D]/10" />
          <div className="absolute -bottom-20 right-1/3 h-56 w-56 rounded-full bg-white/5" />

          <div className="relative z-10">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm">
                <GraduationCap size={17} />
                {tr.beginner}
              </span>

              <select
                value={language}
                onChange={e => setLanguage(e.target.value as Language)}
                className="rounded-xl border border-white/20 bg-[#263B5C] px-3 py-2 text-sm text-white outline-none"
                aria-label="Select language"
              >
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇲🇦 العربية</option>
              </select>
            </div>

            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B56D]">
                DEUTSCH ERFOLG
              </p>
              <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                Hallo! 👋<br />
                {tr.welcome}
              </h1>
              <p className="max-w-xl text-base leading-7 text-white/80 md:text-lg">
                {tr.intro}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => setTab('alphabet')}
                  className="rounded-xl bg-[#D6B56D] px-5 py-3 font-bold text-[#172B4D] transition hover:bg-[#e5c985]"
                >
                  {tr.start}
                  <ChevronRight className="mx-1 inline" size={18} />
                </button>
                <span className="flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm text-white/80">
                  <Headphones size={17} />
                  {tr.audio}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRESS */}
        <section className="my-6 rounded-2xl border border-[#E5E8EF] bg-white p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-semibold">
              <Star className="text-[#D6B56D]" size={19} />
              {tr.progress}
            </div>
            <span className="text-sm font-bold text-[#172B4D]">
              {completed.length} / 26 {tr.letters}
            </span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-[#EDF0F5]">
            <div
              className="h-full rounded-full bg-[#D6B56D] transition-all"
              style={{ width: `${(completed.length / 26) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-gray-500">{tr.progressHint}</p>
        </section>

        {/* NAVIGATION */}
        <nav className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {([
            ['alphabet', BookOpen, tr.alphabet],
            ['syllables', Languages, tr.syllables],
            ['combinations', Volume2, 'Kombinationen'],
            ['words', GraduationCap, tr.words],
            ['quiz', CheckCircle2, tr.quiz],
          ] as const).map(([id, Icon, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center justify-center gap-2 rounded-xl px-3 py-4 text-sm font-semibold transition ${
                tab === id
                  ? 'bg-[#172B4D] text-white shadow-md'
                  : 'border border-[#E5E8EF] bg-white text-[#53617A] hover:border-[#D6B56D]'
              }`}
            >
              <Icon size={18} /> {label}
            </button>
          ))}
        </nav>

        {/* ALPHABET */}
        {tab === 'alphabet' && (
          <section className="space-y-6">
            <div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold">{tr.alphabetTitle}</h2>
                <p className="mt-1 text-sm text-gray-500">{tr.alphabetIntro}</p>
              </div>

              <div className="grid grid-cols-5 gap-2 sm:grid-cols-7 md:grid-cols-13">
                {alphabet.map((item, index) => (
                  <button
                    key={item.letter}
                    onClick={() => changeLetter(index)}
                    className={`relative flex aspect-square flex-col items-center justify-center rounded-xl border text-xl font-bold transition ${
                      selectedLetter === index
                        ? 'border-[#172B4D] bg-[#172B4D] text-white shadow-md'
                        : completed.includes(index)
                          ? 'border-[#D6B56D] bg-[#FBF6EA] text-[#172B4D]'
                          : 'border-[#E5E8EF] bg-white text-[#172B4D] hover:border-[#D6B56D]'
                    }`}
                  >
                    {item.letter}
                    {completed.includes(index) && (
                      <span className="absolute right-1 top-1 text-[#B18B3E]">
                        <CheckCircle2 size={12} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1fr_1.4fr]">
              <div className="flex flex-col items-center justify-center rounded-3xl bg-[#172B4D] p-8 text-white">
                <span className="text-sm text-white/60">{tr.selected}</span>
                <div className="my-3 text-8xl font-bold text-[#D6B56D]" dir="ltr">
                  {current.letter}
                </div>
                <div className="text-xl font-semibold">{current.name}</div>
                <button
                  onClick={() => speak(current.letter)}
                  className="mt-6 flex items-center gap-2 rounded-xl bg-[#D6B56D] px-5 py-3 font-semibold text-[#172B4D] hover:bg-[#e5c985]"
                >
                  <Volume2 size={19} /> {tr.listen}
                </button>
              </div>

              <div className="rounded-3xl border border-[#E5E8EF] bg-white p-5 md:p-7">
                <h3 className="mb-4 text-lg font-bold">{tr.pronunciation}</h3>

                <div className="rounded-xl bg-[#F6F7FA] p-4">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    🇩🇪 Deutsch
                  </p>
                  <p className="mt-1 font-medium">{current.pronunciation.de}</p>
                </div>

                <div className="mt-3 rounded-xl bg-[#F6F7FA] p-4">
                  <p className="text-xs font-bold uppercase text-gray-400">
                    {language === 'fr' ? '🇫🇷 Français' : language === 'de' ? '🇩🇪 Deutsch' : language === 'en' ? '🇬🇧 English' : '🇲🇦 العربية'}
                  </p>
                  <p className="mt-1 text-lg font-medium">
                    {current.pronunciation[language]}
                  </p>
                </div>

                <div className="mt-5 rounded-xl border border-[#E9D9B4] bg-[#FBF6EA] p-4">
                  <p className="mb-2 text-xs font-bold uppercase text-[#9B7834]">
                    {tr.example}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xl font-bold" dir="ltr">{current.example}</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {current[language]}
                      </p>
                    </div>
                    <button
                      onClick={() => speak(current.example)}
                      className="rounded-full bg-white p-3 text-[#172B4D] shadow-sm hover:bg-[#F4E8CE]"
                      aria-label={tr.listen}
                    >
                      <Volume2 size={21} />
                    </button>
                  </div>
                </div>

                <div className="mt-5 flex justify-between gap-3">
                  <button
                    onClick={() => changeLetter(Math.max(0, selectedLetter - 1))}
                    disabled={selectedLetter === 0}
                    className="flex items-center gap-1 rounded-xl border border-[#E5E8EF] px-4 py-2 text-sm font-semibold disabled:opacity-30"
                  >
                    <ChevronLeft size={17} /> {tr.previous}
                  </button>
                  <button
                    onClick={() => changeLetter(Math.min(25, selectedLetter + 1))}
                    disabled={selectedLetter === 25}
                    className="flex items-center gap-1 rounded-xl bg-[#172B4D] px-4 py-2 text-sm font-semibold text-white disabled:opacity-30"
                  >
                    {tr.next} <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E5E8EF] bg-white p-5 md:p-7">
              <h3 className="mb-4 text-xl font-bold">{tr.special}</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {specialLetters.map(item => (
                  <div key={item.letter} className="rounded-2xl bg-[#F6F7FA] p-4">
                    <div className="text-3xl font-bold text-[#172B4D]" dir="ltr">
                      {item.letter}
                    </div>
                    <p className="mt-2 font-semibold text-[#B18B3E]">{item.sound}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {item.description[language]}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3">
                      <div>
                        <p className="font-bold" dir="ltr">{item.word}</p>
                        <p className="text-xs text-gray-500">{item.meaning[language]}</p>
                      </div>
                      <button
                        onClick={() => speak(item.word)}
                        className="rounded-full bg-white p-2 shadow-sm"
                        aria-label={tr.listen}
                      >
                        <Volume2 size={17} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#E9D9B4] bg-[#FBF6EA] p-4">
              <div className="flex gap-3">
                <Lightbulb className="shrink-0 text-[#B18B3E]" />
                <div>
                  <p className="font-bold">{tr.tip}</p>
                  <p className="mt-1 text-sm text-gray-700">{tr.tipText}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SYLLABLES */}
        {tab === 'syllables' && (
          <section className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold">{tr.syllableTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">{tr.syllableIntro}</p>
            </div>

            <div className="rounded-2xl bg-[#172B4D] p-5 text-white">
              <p className="text-sm text-white/70">{tr.rule}</p>
              <p className="mt-2 text-xl font-bold">{tr.formula}</p>
              <p className="mt-2 text-sm text-white/70">{tr.formulaExample}</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E5E8EF] bg-white">
              <div className="grid grid-cols-6 border-b border-[#E5E8EF] bg-[#F6F7FA] px-3 py-3 text-center text-xs font-bold text-gray-500 sm:px-5">
                <div>{tr.letter}</div>
                {['A', 'E', 'I', 'O', 'U'].map(vowel => (
                  <div key={vowel}>{vowel}</div>
                ))}
              </div>

              {syllableRows.map(row => (
                <div
                  key={row.consonant}
                  className="grid grid-cols-6 items-center border-b border-[#EDF0F5] px-3 py-3 text-center last:border-0 sm:px-5"
                >
                  <div className="font-bold text-[#B18B3E]">{row.consonant}</div>
                  {row.values.map(value => (
                    <button
                      key={value}
                      onClick={() => speak(value)}
                      className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6F7FA] text-base font-bold transition hover:bg-[#F4E8CE] sm:h-14 sm:w-14 sm:text-lg"
                      dir="ltr"
                    >
                      {value}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#E5E8EF] bg-white p-5">
              <h3 className="mb-3 font-bold">{tr.remember}</h3>
              {syllableRows.map(row => (
                <p key={row.consonant} className="mb-2 text-sm text-gray-600">
                  <strong className="text-[#172B4D]">{row.consonant} :</strong>{' '}
                  {row.note[language]}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-[#E9D9B4] bg-[#FBF6EA] p-5">
              <h3 className="mb-3 font-bold">{tr.tryRead}</h3>
              <div className="flex flex-wrap gap-2">
                {['ba-be-bi', 'ma-mi-mo', 'la-le-li', 'pa-pe-pi', 'ta-to-tu', 'na-ne-ni'].map(item => (
                  <button
                    key={item}
                    onClick={() => speak(item.replaceAll('-', ' '))}
                    className="rounded-xl border border-[#E9D9B4] bg-white px-4 py-3 font-semibold"
                    dir="ltr"
                  >
                    {item} <Volume2 className="mx-1 inline" size={15} />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COMBINATIONS */}
        {tab === 'combinations' && (
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">
                {combinationTranslations[language].title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {combinationTranslations[language].intro}
              </p>
            </div>

            {combinations.map(group => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-xl font-bold">
                  {group.category === 'vowels'
                    ? combinationTranslations[language].vowels
                    : combinationTranslations[language].consonants}
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map(item => (
                    <article
                      key={item.value}
                      className="rounded-2xl border border-[#E5E8EF] bg-white p-5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-4xl font-extrabold text-[#172B4D]" dir="ltr">
                          {item.value}
                        </span>
                        <button
                          onClick={() => speak(item.value)}
                          className="rounded-full bg-[#F6F7FA] p-3 hover:bg-[#F4E8CE]"
                          aria-label={combinationTranslations[language].listen}
                        >
                          <Volume2 size={20} />
                        </button>
                      </div>

                      <div className="mt-4 rounded-xl bg-[#F6F7FA] p-3">
                        <p className="text-xs font-bold uppercase text-gray-400">
                          {combinationTranslations[language].pronunciation}
                        </p>
                        <p className="mt-1 font-semibold" dir="ltr">
                          {item.sound}
                        </p>
                      </div>

                      <div className="mt-3">
                        <p className="text-xs font-bold uppercase text-[#B18B3E]">
                          {combinationTranslations[language].explanation}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {item.description[language]}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#EDF0F5] pt-4">
                        <div>
                          <p className="text-xs font-bold text-gray-400">
                            {combinationTranslations[language].example}
                          </p>
                          <p className="mt-1 text-xl font-bold" dir="ltr">
                            {item.example}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.meaning[language]}
                          </p>
                        </div>
                        <button
                          onClick={() => speak(item.example)}
                          className="rounded-full bg-[#FBF6EA] p-3 text-[#172B4D] hover:bg-[#F4E8CE]"
                          aria-label={`${combinationTranslations[language].listen}: ${item.example}`}
                        >
                          <Headphones size={20} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-[#E9D9B4] bg-[#FBF6EA] p-5">
              <div className="flex gap-3">
                <Lightbulb className="shrink-0 text-[#B18B3E]" />
                <p className="text-sm leading-6 text-gray-700">
                  {combinationTranslations[language].tip}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FIRST WORDS */}
        {tab === 'words' && (
          <section className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold">{tr.firstWordsTitle}</h2>
              <p className="mt-2 text-sm text-gray-500">{tr.firstWordsIntro}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {firstWords.map((word, index) => (
                <div
                  key={word.de}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[#E5E8EF] bg-white p-4"
                >
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#B18B3E]">
                      {tr.word} {index + 1}
                    </span>
                    <h3 className="mt-1 text-xl font-bold" dir="ltr">{word.de}</h3>
                    <p className="text-sm text-gray-600">{word[language === 'de' ? 'deMeaning' : language]}</p>
                    <p className="mt-2 text-xs text-[#B18B3E]">
                      {tr.approximate}: <span dir="ltr">{word.sound}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => speak(word.de)}
                    className="shrink-0 rounded-full bg-[#F6F7FA] p-3 hover:bg-[#F4E8CE]"
                    aria-label={`${tr.listen}: ${word.de}`}
                  >
                    <Volume2 size={21} />
                  </button>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[#172B4D] p-5 text-white">
              <h3 className="text-lg font-bold">{tr.conversation}</h3>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="font-bold text-[#D6B56D]" dir="ltr">A : Hallo!</p>
                  <p className="text-sm text-white/80">
                    {language === 'fr' ? 'Bonjour !' : language === 'de' ? 'Hallo!' : language === 'en' ? 'Hello!' : 'مرحباً!'}
                  </p>
                  <button
                    onClick={() => speak('Hallo!')}
                    className="mt-2 text-sm text-[#D6B56D]"
                  >
                    <Volume2 className="mx-1 inline" size={15} /> {tr.listen}
                  </button>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                  <p className="font-bold text-[#D6B56D]" dir="ltr">B : Hallo! Wie geht es dir?</p>
                  <p className="text-sm text-white/80">
                    {language === 'fr' ? 'Salut ! Comment vas-tu ?' : language === 'de' ? 'Hallo! Wie geht es dir?' : language === 'en' ? 'Hello! How are you?' : 'مرحباً! كيف حالك؟'}
                  </p>
                  <button
                    onClick={() => speak('Hallo! Wie geht es dir?')}
                    className="mt-2 text-sm text-[#D6B56D]"
                  >
                    <Volume2 className="mx-1 inline" size={15} /> {tr.listen}
                  </button>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                  <p className="font-bold text-[#D6B56D]" dir="ltr">A : Gut, danke!</p>
                  <p className="text-sm text-white/80">
                    {language === 'fr' ? 'Bien, merci !' : language === 'de' ? 'Gut, danke!' : language === 'en' ? 'Fine, thanks!' : 'بخير، شكراً!'}
                  </p>
                  <button
                    onClick={() => speak('Gut, danke!')}
                    className="mt-2 text-sm text-[#D6B56D]"
                  >
                    <Volume2 className="mx-1 inline" size={15} /> {tr.listen}
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* QUIZ */}
        {tab === 'quiz' && (
          <section className="mx-auto max-w-2xl space-y-5">
            <div>
              <h2 className="text-2xl font-bold">{tr.knowledge}</h2>
              <p className="mt-2 text-sm text-gray-500">{tr.quizIntro}</p>
            </div>

            <div className="rounded-2xl border border-[#E5E8EF] bg-white p-5 md:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#FBF6EA] px-3 py-2 text-xs font-bold text-[#9B7834]">
                  {tr.question} {selectedQuiz + 1} / {quizQuestions.length}
                </span>
                <span className="text-sm font-bold">{tr.score} : {score}</span>
              </div>

              <h3 className="mb-6 text-xl font-bold">
                {quizQuestions[selectedQuiz].q[language]}
              </h3>
              <p className="mb-3 text-sm text-gray-500">{tr.choose}</p>

              <div className="space-y-3">
                {quizQuestions[selectedQuiz].choices.map((choice, index) => {
                  const isCorrect = index === quizQuestions[selectedQuiz].answer
                  const isSelected = answer === index

                  let style = 'border-[#E5E8EF] bg-white hover:border-[#D6B56D]'
                  if (answered && isCorrect) style = 'border-green-500 bg-green-50 text-green-800'
                  else if (answered && isSelected && !isCorrect) style = 'border-red-400 bg-red-50 text-red-800'
                  else if (isSelected) style = 'border-[#172B4D] bg-[#F1F3F7]'

                  return (
                    <button
                      key={`${selectedQuiz}-${index}`}
                      disabled={answered}
                      onClick={() => setAnswer(index)}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 text-start font-medium transition ${style}`}
                    >
                      <span>{String.fromCharCode(65 + index)}. {choice[language]}</span>
                      {answered && isCorrect && <CheckCircle2 size={19} />}
                    </button>
                  )
                })}
              </div>

              {answered && (
                <div className="mt-5 rounded-xl bg-[#F6F7FA] p-4">
                  <p className={`font-bold ${answer === quizQuestions[selectedQuiz].answer ? 'text-green-700' : 'text-red-700'}`}>
                    {answer === quizQuestions[selectedQuiz].answer ? tr.correct : tr.wrong}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {quizQuestions[selectedQuiz].explanation[language]}
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {!answered ? (
                  <button
                    onClick={checkAnswer}
                    disabled={answer === null}
                    className="w-full rounded-xl bg-[#172B4D] px-5 py-3 font-bold text-white disabled:opacity-40"
                  >
                    {tr.validate}
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="w-full rounded-xl bg-[#D6B56D] px-5 py-3 font-bold text-[#172B4D]"
                  >
                    {tr.nextQuestion} <ChevronRight className="mx-1 inline" size={18} />
                  </button>
                )}
              </div>
            </div>

            <button
              onClick={restartQuiz}
              className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#172B4D]"
            >
              <RotateCcw size={16} /> {tr.restart}
            </button>
          </section>
        )}

        {/* FOOTER */}
        <footer className="mt-10 border-t border-[#E5E8EF] pt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#172B4D]">
            <GraduationCap className="text-[#D6B56D]" size={20} />
            DEUTSCH ERFOLG
          </div>
          <p className="mt-2 text-xs text-gray-400">{tr.footer}</p>
        </footer>
      </div>
    </main>
  )
}

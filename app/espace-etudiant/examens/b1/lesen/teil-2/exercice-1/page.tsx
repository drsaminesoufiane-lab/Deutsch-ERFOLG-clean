
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
    de: 'Egal ob Hund, Katze oder Maus: Haustiere sind in Deutschland sehr beliebt. Markus Kleinoth aus der Freizeitredaktion hat sich mit diesem Thema beschäftigt.',
    translation: {
      fr: 'Qu’il s’agisse d’un chien, d’un chat ou d’une souris, les animaux domestiques sont très populaires en Allemagne. Markus Kleinoth, de la rédaction consacrée aux loisirs, s’est intéressé à ce sujet.',
      ar: 'سواء تعلق الأمر بكلب أو قطة أو فأر، فإن الحيوانات الأليفة تحظى بشعبية كبيرة في ألمانيا. اهتم ماركوس كلاينوت من قسم الترفيه بهذا الموضوع.',
      en: 'Whether a dog, cat or mouse, pets are very popular in Germany. Markus Kleinoth from the leisure editorial team has looked into this topic.'
    },
    explanation: {
      fr: 'Ce premier paragraphe introduit le thème général du texte : la popularité des animaux domestiques en Allemagne. Il annonce le sujet qui sera développé dans les paragraphes suivants.',
      ar: 'تقدم هذه الفقرة الموضوع العام للنص، وهو شعبية الحيوانات الأليفة في ألمانيا. كما تعلن عن الموضوع الذي سيتم تطويره في الفقرات التالية.',
      en: 'This first paragraph introduces the main topic: the popularity of pets in Germany. It announces the subject developed in the following paragraphs.'
    }
  },
  {
    de: 'In deutschen Haushalten gibt es rund 34 Millionen Haustiere. Besonders Katzen sind sehr beliebt, denn davon leben 14 Millionen in Deutschland. Und das, obwohl Deutschland als Land der Hundefans gilt. Insgesamt gibt es aber etwa 10 Millionen Hunde.',
    translation: {
      fr: 'Dans les foyers allemands, il y a environ 34 millions d’animaux domestiques. Les chats sont particulièrement populaires : 14 millions vivent en Allemagne. Et cela même si l’Allemagne est considérée comme un pays d’amateurs de chiens. On compte toutefois environ 10 millions de chiens.',
      ar: 'يوجد في المنازل الألمانية حوالي 34 مليون حيوان أليف. وتحظى القطط بشعبية كبيرة، إذ يعيش منها 14 مليونًا في ألمانيا، رغم أن ألمانيا تُعرف بأنها بلد محبي الكلاب. ويبلغ عدد الكلاب حوالي 10 ملايين.',
      en: 'There are around 34 million pets in German households. Cats are especially popular, with 14 million living in Germany. This is despite Germany being considered a country of dog lovers. There are around 10 million dogs.'
    },
    explanation: {
      fr: 'Cette partie présente des statistiques sur les animaux domestiques en Allemagne. Le chiffre le plus important à retenir est que les chats sont plus nombreux que les chiens : 14 millions de chats contre environ 10 millions de chiens.',
      ar: 'تعرض هذه الفقرة إحصائيات عن الحيوانات الأليفة في ألمانيا. أهم معلومة هي أن عدد القطط أكبر من عدد الكلاب: 14 مليون قطة مقابل حوالي 10 ملايين كلب.',
      en: 'This paragraph gives statistics about pets in Germany. The key point is that there are more cats than dogs: 14 million cats compared with around 10 million dogs.'
    }
  },
  {
    de: 'Für den Hund ist manchen Menschen nichts zu teuer. Eine Hundebesitzerin, die überdurchschnittlich viel Geld für ihren Liebling ausgibt, ist Bettina Schröther: „Morgens vor der Arbeit bringe ich meinen Hund in eine sehr gute Tagesbetreuung, in der es auch eine Hundeschule gibt. Aber wenn ich frei habe, sind wir immer zusammen, auch im Urlaub. Ich war mit ihm sogar schon in einem Wellnesshotel für Hunde.“',
    translation: {
      fr: 'Pour certaines personnes, rien n’est trop cher lorsqu’il s’agit de leur chien. Bettina Schröther dépense plus que la moyenne pour son compagnon : « Le matin, avant le travail, je dépose mon chien dans une très bonne garderie qui possède également une école canine. Mais lorsque je suis libre, nous sommes toujours ensemble, même pendant les vacances. Je suis même déjà allée avec lui dans un hôtel de bien-être pour chiens. »',
      ar: 'بالنسبة لبعض الأشخاص، لا شيء يعتبر غاليًا عندما يتعلق الأمر بكلبهم. تنفق بيتينا شرöتر أموالًا أكثر من المعتاد على كلبها. تقول: أضع كلبي صباحًا قبل العمل في مركز جيد للرعاية النهارية، توجد فيه أيضًا مدرسة للكلاب. وعندما أكون متفرغة، نبقى معًا دائمًا، حتى في العطلات. وقد ذهبت معه إلى فندق للاسترخاء مخصص للكلاب.',
      en: 'For some people, nothing is too expensive for their dog. Bettina Schröther spends more than average on her pet. She takes her dog to a good daycare centre before work, but when she is free, they are always together, even on holiday. She has even stayed with him at a wellness hotel for dogs.'
    },
    explanation: {
      fr: 'Bettina consacre beaucoup d’attention à son chien. Pendant ses journées de travail, il est accueilli dans une garderie. Lorsqu’elle est libre, elle passe son temps avec lui, y compris pendant les vacances. L’idée essentielle est qu’elle partage ses loisirs avec son chien.',
      ar: 'تولي بيتينا اهتمامًا كبيرًا بكلبها. أثناء عملها تتركه في مركز للرعاية. وعندما تكون متفرغة، تقضي وقتها معه، حتى خلال العطلات. الفكرة الأساسية هي أنها تشارك أوقات فراغها مع كلبها.',
      en: 'Bettina gives her dog a lot of attention. While she is working, he stays at a daycare centre. When she is free, she spends her time with him, including during holidays. The main idea is that she shares her free time with her dog.'
    }
  },
  {
    de: 'Der Hundeexperte Marius Klotz kennt solche Fälle, sieht das aber kritisch: „Viele Besitzer meinen es gut und tun zu viel für ihre Hunde. Hier sollte man aufpassen. Für einen Hund ist es sehr wichtig, eine gute Erziehung zu bekommen. Wichtig sind klare Regeln, die er verstehen kann. Außerdem braucht er viel Bewegung und unbedingt passendes Futter. Frisches Futter ist nicht unbedingt das beste, da sollte man sich gut informieren, am besten Fachleute fragen.“',
    translation: {
      fr: 'L’expert canin Marius Klotz connaît ce genre de situations, mais il les considère d’un œil critique : « Beaucoup de propriétaires veulent bien faire et en font trop pour leurs chiens. Il faut faire attention. Il est très important qu’un chien reçoive une bonne éducation. Des règles claires, qu’il peut comprendre, sont essentielles. Il a également besoin de beaucoup d’exercice et d’une alimentation adaptée. Les aliments frais ne sont pas forcément les meilleurs ; il faut bien s’informer et, de préférence, demander conseil à des spécialistes. »',
      ar: 'يعرف خبير الكلاب ماريوس كلوتس هذه الحالات، لكنه ينتقدها. يقول إن العديد من المالكين يريدون فعل الخير لكلابهم، لكنهم يبالغون في ذلك. من المهم أن يتلقى الكلب تربية جيدة وأن تكون هناك قواعد واضحة يفهمها. كما يحتاج إلى الحركة والطعام المناسب. والطعام الطازج ليس بالضرورة الأفضل، لذلك يجب الاستعلام وسؤال المختصين.',
      en: 'Dog expert Marius Klotz knows such cases but is critical of them. Many owners mean well but do too much for their dogs. Dogs need good training, clear rules, plenty of exercise and suitable food. Fresh food is not necessarily best, so owners should get information and ask experts.'
    },
    explanation: {
      fr: 'L’expert explique qu’aimer son chien ne signifie pas tout lui permettre ou tout faire à sa place. Un chien a surtout besoin d’une bonne éducation, de règles claires, d’exercice et d’une alimentation adaptée. Pour choisir sa nourriture, il recommande de demander conseil à des spécialistes.',
      ar: 'يوضح الخبير أن حب الكلب لا يعني السماح له بكل شيء أو المبالغة في الاهتمام به. يحتاج الكلب إلى تربية جيدة وقواعد واضحة وحركة وطعام مناسب. وبخصوص التغذية، ينصح باستشارة المختصين.',
      en: 'The expert explains that loving a dog does not mean doing everything for it. A dog mainly needs good training, clear rules, exercise and suitable food. He recommends asking specialists for advice about its diet.'
    }
  },
  {
    de: 'Viele Menschen sehen ihre Katzen und Hunde als Teil der Familie. So auch Ellie Herfried, Hundebesitzerin aus Erfurt: „Unsere Familie feiert jedes Jahr mit unserem kleinen Schatz Geburtstag. Er bekommt einen Geburtstagshundekuchen, natürlich mit Kerzen, und auch ein Geschenk. Dieses Jahr haben wir außerdem seine Hundefreunde eingeladen.“',
    translation: {
      fr: 'Beaucoup de personnes considèrent leurs chats et leurs chiens comme des membres de la famille. C’est également le cas d’Ellie Herfried, propriétaire d’un chien à Erfurt : « Notre famille fête chaque année l’anniversaire de notre petit trésor. Il reçoit un gâteau d’anniversaire pour chien, avec des bougies bien sûr, ainsi qu’un cadeau. Cette année, nous avons également invité ses amis chiens. »',
      ar: 'يعتبر الكثير من الناس قططهم وكلابهم أفرادًا من العائلة. وهذا ما تفعله أيضًا إيلي هيرفريد، وهي صاحبة كلب من إرفورت. تحتفل عائلتها كل سنة بعيد ميلاد كلبها، وتقدم له كعكة خاصة بالكلاب مع الشموع وهدية. وفي هذه السنة دعت أيضًا أصدقاءه من الكلاب.',
      en: 'Many people see their cats and dogs as part of the family. Ellie Herfried from Erfurt does the same. Her family celebrates their dog’s birthday every year with a birthday cake, candles and a present. This year, they also invited his dog friends.'
    },
    explanation: {
      fr: 'Ellie considère son chien comme un membre de sa famille. Pour illustrer cette relation, elle raconte que toute la famille célèbre son anniversaire avec un gâteau, des bougies et un cadeau. Le chien occupe donc une place importante dans la famille.',
      ar: 'تعتبر إيلي كلبها فردًا من العائلة. ولتوضيح هذه العلاقة، تحكي أن العائلة تحتفل بعيد ميلاده بكعكة وشموع وهدية. لذلك يحتل الكلب مكانة مهمة داخل الأسرة.',
      en: 'Ellie considers her dog a member of her family. She explains that the whole family celebrates his birthday with a cake, candles and a present. The dog therefore has an important place in the family.'
    }
  },
  {
    de: 'Auch in einigen Seniorenheimen sind mittlerweile Tiere erlaubt. Sandra Bärenweger ist Altenpflegerin in Hamburg: „Bei uns im Haus haben einige Senioren einen Hund oder eine Katze. Dadurch haben sie eine Aufgabe, denn sie müssen sich ja um ihr Tier kümmern, es füttern oder mit ihm rausgehen, wenn es ein Hund ist. So haben sie jeden Tag eine sinnvolle Beschäftigung. Das tut den älteren Menschen gut; viele bleiben dadurch fit.“',
    translation: {
      fr: 'Dans certaines maisons de retraite, les animaux sont désormais autorisés. Sandra Bärenweger est aide-soignante auprès des personnes âgées à Hambourg : « Dans notre établissement, certains résidents ont un chien ou un chat. Cela leur donne une responsabilité, car ils doivent s’occuper de leur animal, le nourrir ou le sortir lorsqu’il s’agit d’un chien. Ils ont ainsi une activité utile chaque jour. Cela fait du bien aux personnes âgées ; beaucoup restent ainsi en forme. »',
      ar: 'أصبحت الحيوانات مسموحًا بها الآن في بعض دور رعاية المسنين. تعمل ساندرا بيرنفيغر في رعاية المسنين في هامبورغ. لديها بعض المقيمين الذين يملكون كلبًا أو قطة. وهذا يمنحهم مسؤولية، إذ يجب عليهم الاعتناء بالحيوان وإطعامه أو إخراجه للتنزه إذا كان كلبًا. وهكذا تصبح لديهم أنشطة مفيدة يوميًا، مما يساعدهم على البقاء بصحة جيدة.',
      en: 'Animals are now allowed in some retirement homes. Sandra Bärenweger works in elderly care in Hamburg. Some residents have a dog or a cat. This gives them a responsibility: they must care for and feed their pet or take it outside if it is a dog. This provides a meaningful daily activity and helps many older people stay fit.'
    },
    explanation: {
      fr: 'La présence des animaux donne une occupation quotidienne aux personnes âgées. Elles doivent nourrir leur animal, s’en occuper et parfois le promener. Cette responsabilité leur fait du bien et les aide à rester actives et en forme.',
      ar: 'يمنح وجود الحيوانات المسنين نشاطًا يوميًا. فعليهم إطعام الحيوان والاعتناء به وأحيانًا إخراجه للتنزه. هذه المسؤولية مفيدة لهم وتساعدهم على البقاء نشيطين وبصحة جيدة.',
      en: 'Having animals gives older people a daily activity. They must feed and care for their pets and sometimes take them for walks. This responsibility is beneficial and helps them stay active and fit.'
    }
  },
  {
    de: 'Der tägliche Spaziergang mit dem Hund oder das Spielen mit der Katze bietet vielen Haustierbesitzern Ruhe und Entspannung, eine kleine Erholung vom Alltag. Das bestätigen auch Fachleute: Haustiere können gerade bei Stress für viele Menschen ein guter Ausgleich sein. Die tägliche Beschäftigung mit seinem Haustier und die Zuneigung, die man von ihm bekommt, spielen dabei eine wichtige Rolle. Das Haustier ist dabei auch viel mehr als ein Hobby, da es ein Lebewesen ist, das schnell zum Familienmitglied wird und das Leben bereichert.',
    translation: {
      fr: 'La promenade quotidienne avec le chien ou le jeu avec le chat apporte à de nombreux propriétaires d’animaux du calme et de la détente, une petite pause dans la vie quotidienne. Les spécialistes le confirment également : les animaux domestiques peuvent être un bon moyen de compenser le stress pour beaucoup de personnes. Le temps passé chaque jour avec son animal et l’affection que l’on reçoit de lui jouent un rôle important. Un animal domestique est bien plus qu’un passe-temps, car c’est un être vivant qui devient rapidement un membre de la famille et enrichit la vie.',
      ar: 'توفر النزهة اليومية مع الكلب أو اللعب مع القطة الهدوء والاسترخاء للعديد من أصحاب الحيوانات الأليفة، كما تمنحهم استراحة من الحياة اليومية. ويؤكد المختصون أن الحيوانات الأليفة تساعد الكثير من الناس على مواجهة التوتر. كما أن الوقت الذي نقضيه معها والمودة التي نتلقاها منها لهما دور مهم. فالحيوان الأليف أكثر من مجرد هواية، لأنه كائن حي يصبح بسرعة فردًا من العائلة ويثري الحياة.',
      en: 'Walking a dog every day or playing with a cat gives many pet owners peace and relaxation, a little break from everyday life. Experts confirm that pets can help many people cope with stress. Daily activities with a pet and the affection received from it play an important role. A pet is much more than a hobby: it is a living being that quickly becomes a family member and enriches life.'
    },
    explanation: {
      fr: 'Le dernier paragraphe présente les bienfaits des animaux sur le bien-être. Ils apportent de la détente, aident à réduire le stress et donnent de l’affection. Le texte insiste sur le fait qu’un animal n’est pas un simple loisir : il devient souvent un véritable membre de la famille.',
      ar: 'توضح الفقرة الأخيرة فوائد الحيوانات الأليفة للصحة النفسية. فهي تمنح الاسترخاء وتساعد على تقليل التوتر وتقدم المودة. ويؤكد النص أن الحيوان ليس مجرد هواية، بل يصبح غالبًا فردًا حقيقيًا من العائلة.',
      en: 'The final paragraph explains the benefits of pets for well-being. They provide relaxation, help reduce stress and give affection. The text emphasizes that a pet is not just a hobby: it often becomes a real member of the family.'
    }
  }
]

const questions = [
  {
    de: 'Bettina Schröther …',
    fr: 'Bettina Schröther …',
    ar: 'بيتينا شرöتر ...',
    en: 'Bettina Schröther …',
    options: [
      {
        de: 'lässt ihren Hund in einer Hundeschule erziehen.',
        fr: 'fait éduquer son chien dans une école canine.',
        ar: 'تجعل كلبها يتلقى التدريب في مدرسة للكلاب.',
        en: 'has her dog trained at a dog school.'
      },
      {
        de: 'macht mit ihrem Hund regelmäßig Wellnessurlaube.',
        fr: 'part régulièrement en vacances de bien-être avec son chien.',
        ar: 'تذهب بانتظام في عطلات استرخاء مع كلبها.',
        en: 'regularly goes on wellness holidays with her dog.'
      },
      {
        de: 'verbringt die ganze Freizeit mit ihrem Hund.',
        fr: 'passe tout son temps libre avec son chien.',
        ar: 'تقضي كل وقت فراغها مع كلبها.',
        en: 'spends all her free time with her dog.'
      }
    ],
    answer: 2,
    explanation: 'Elle explique que lorsqu’elle est libre, elle est toujours avec son chien, même pendant les vacances. Le texte ne dit pas qu’elle va régulièrement dans un hôtel de bien-être. La garderie possède une école canine, mais elle ne dit pas qu’elle y fait éduquer son chien.',
    evidence: 'Aber wenn ich frei habe, sind wir immer zusammen, auch im Urlaub.',
    evidenceFr: 'Mais lorsque je suis libre, nous sommes toujours ensemble, même pendant les vacances.'
  },
  {
    de: 'Nach Meinung von Hundeexperte Marius Klotz sollte man …',
    fr: 'Selon l’expert canin Marius Klotz, il faudrait …',
    ar: 'حسب رأي خبير الكلاب ماريوس كلوتس، ينبغي ...',
    en: 'According to dog expert Marius Klotz, one should …',
    options: [
      {
        de: 'die Regeln bei der Hundeerziehung beachten.',
        fr: 'respecter les règles dans l’éducation du chien.',
        ar: 'احترام القواعد أثناء تربية الكلب.',
        en: 'follow the rules when training a dog.'
      },
      {
        de: 'seinen Hund immer gut behandeln.',
        fr: 'toujours bien traiter son chien.',
        ar: 'معاملة الكلب دائمًا بطريقة جيدة.',
        en: 'always treat one’s dog well.'
      },
      {
        de: 'sich zur Ernährung des Tiers beraten lassen.',
        fr: 'demander conseil sur l’alimentation de l’animal.',
        ar: 'طلب المشورة بشأن تغذية الحيوان.',
        en: 'get advice about the animal’s diet.'
      }
    ],
    answer: 2,
    explanation: 'L’expert explique que les aliments frais ne sont pas forcément les meilleurs. Il conseille de bien s’informer et de demander conseil à des spécialistes. C’est exactement l’idée de la réponse C. Le texte mentionne aussi des règles claires pour l’éducation, mais la recommandation explicite de demander conseil concerne l’alimentation.',
    evidence: 'Frisches Futter ist nicht unbedingt das beste, da sollte man sich gut informieren, am besten Fachleute fragen.',
    evidenceFr: 'Les aliments frais ne sont pas forcément les meilleurs : il faut bien s’informer et, de préférence, demander conseil à des spécialistes.'
  },
  {
    de: 'Die Hundebesitzerin Ellie Herfried …',
    fr: 'La propriétaire du chien, Ellie Herfried …',
    ar: 'إيلي هيرفريد، صاحبة الكلب، ...',
    en: 'The dog owner Ellie Herfried …',
    options: [
      {
        de: 'backt ihrem Hund zum Geburtstag einen Kuchen.',
        fr: 'prépare elle-même un gâteau pour l’anniversaire de son chien.',
        ar: 'تحضر بنفسها كعكة لعيد ميلاد كلبها.',
        en: 'bakes a birthday cake for her dog.'
      },
      {
        de: 'feiert ihren Geburtstag immer mit ihrem Hund.',
        fr: 'fête toujours son propre anniversaire avec son chien.',
        ar: 'تحتفل دائمًا بعيد ميلادها مع كلبها.',
        en: 'always celebrates her own birthday with her dog.'
      },
      {
        de: 'sieht ihren Hund als festes Familienmitglied.',
        fr: 'considère son chien comme un véritable membre de la famille.',
        ar: 'تعتبر كلبها فردًا حقيقيًا من العائلة.',
        en: 'sees her dog as a real member of the family.'
      }
    ],
    answer: 2,
    explanation: 'Le texte dit que beaucoup de personnes considèrent leurs animaux comme des membres de la famille, et Ellie est présentée comme un exemple. La famille fête l’anniversaire du chien, et non celui d’Ellie.',
    evidence: 'Viele Menschen sehen ihre Katzen und Hunde als Teil der Familie.',
    evidenceFr: 'Beaucoup de personnes considèrent leurs chats et leurs chiens comme des membres de la famille.'
  },
  {
    de: 'In Seniorenheimen gibt es oft Tiere, damit …',
    fr: 'Dans les maisons de retraite, on trouve souvent des animaux afin que …',
    ar: 'توجد الحيوانات غالبًا في دور رعاية المسنين لكي ...',
    en: 'Animals are often found in retirement homes so that …',
    options: [
      {
        de: 'die Senioren etwas tun, was gut für sie ist.',
        fr: 'les personnes âgées aient une activité qui leur fait du bien.',
        ar: 'يكون لدى المسنين نشاط مفيد لهم.',
        en: 'the elderly have an activity that is good for them.'
      },
      {
        de: 'die Senioren mehr spazieren gehen.',
        fr: 'les personnes âgées se promènent davantage.',
        ar: 'يذهب المسنون في نزهات أكثر.',
        en: 'the elderly go for more walks.'
      },
      {
        de: 'sie auf die älteren Menschen aufpassen.',
        fr: 'les animaux veillent sur les personnes âgées.',
        ar: 'تعتني الحيوانات بكبار السن.',
        en: 'the animals look after the elderly.'
      }
    ],
    answer: 0,
    explanation: 'Les animaux donnent une responsabilité aux résidents : ils doivent les nourrir et s’en occuper. Le texte précise que cette activité quotidienne leur fait du bien et les aide à rester en forme.',
    evidence: 'So haben sie jeden Tag eine sinnvolle Beschäftigung. Das tut den älteren Menschen gut; viele bleiben dadurch fit.',
    evidenceFr: 'Ils ont ainsi une activité utile chaque jour. Cela fait du bien aux personnes âgées et beaucoup restent en forme grâce à cela.'
  },
  {
    de: 'Fachleute meinen, dass …',
    fr: 'Les spécialistes pensent que …',
    ar: 'يرى المختصون أن ...',
    en: 'Experts believe that …',
    options: [
      {
        de: 'ein Haustier ein sinnvolles Hobby ist.',
        fr: 'un animal domestique est un passe-temps utile.',
        ar: 'الحيوان الأليف هواية مفيدة.',
        en: 'a pet is a meaningful hobby.'
      },
      {
        de: 'man mit seinem Hund täglich spazieren gehen sollte.',
        fr: 'il faut promener son chien tous les jours.',
        ar: 'ينبغي التنزه مع الكلب يوميًا.',
        en: 'one should walk one’s dog every day.'
      },
      {
        de: 'man sich durch sein Haustier erholen kann.',
        fr: 'on peut se détendre grâce à son animal domestique.',
        ar: 'يمكن للإنسان الاسترخاء بفضل حيوانه الأليف.',
        en: 'one can relax thanks to one’s pet.'
      }
    ],
    answer: 2,
    explanation: 'Le texte explique que les animaux apportent calme et détente et qu’ils peuvent aider à compenser le stress. Ils permettent donc de se reposer et de récupérer du quotidien.',
    evidence: 'Haustiere können gerade bei Stress für viele Menschen ein guter Ausgleich sein.',
    evidenceFr: 'Les animaux domestiques peuvent être un excellent moyen de compenser le stress pour de nombreuses personnes.'
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

export default function AlexUndCoraPage() {
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

            <h1>Alex und Cora</h1>

            <p className="hero-description">
              Lies den Text und beantworte die Fragen.
            </p>
          </div>

          <div className="hero-info">
            <span><BookOpen size={16} /> 1 texte · 7 paragraphes</span>
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
              Les 7 paragraphes appartiennent au même texte.
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
          background: #F5F6F8;
          color: #172B4D;
          font-family: Arial, Helvetica, sans-serif;
        }

        .exercise-header {
          height: 68px;
          background: #172B4D;
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
          color: #D6B56D;
        }

        .header-brand strong {
          color: #D6B56D;
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
          color: #D6B56D;
        }

        .back-link:hover {
          color: #D6B56D;
        }

        .hero {
          max-width: 1450px;
          margin: 0 auto 24px;
          padding: 22px 28px;
          border-radius: 12px;
          background: linear-gradient(110deg, #172B4D, #294B78);
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
          color: #D6B56D;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.3px;
        }

        .level-badge {
          padding: 4px 8px;
          border-radius: 4px;
          background: #D6B56D;
          color: #172B4D;
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
          color: #D6B56D;
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
          color: #172B4D;
          font-size: 20px;
          font-weight: 800;
        }

        .section-heading p {
          margin: 5px 0 0;
          color: #8993A2;
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
          border: 1px solid #E5E9EF;
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
          color: #8993A2;
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
          border: 1px solid #E2E7EF;
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
          background: #172B4D;
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
          border: 1px solid #E2E7EF;
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
          background: #172B4D;
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
          border: 1px solid #E2E7EF;
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
          background: #172B4D;
          color: #FFFFFF;
          box-shadow: 0 3px 8px rgba(23, 43, 77, .16);
        }

        .translation-box {
          position: relative;
          margin-top: 13px;
          padding: 17px 18px;
          border: 1px solid #E4E9F1;
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
          color: #172B4D;
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
          border-left: 1px solid #E4E9F1;
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
          border-color: #D6B56D;
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
          background: #F4F6F9;
          color: #66758B;
          font-size: 11px;
          line-height: 1.8;
        }

        .option-translation.arabic-text {
          background: #F4F6F9;
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
          border: 1px solid #172B4D;
          background: #172B4D;
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
      `}</style>
    </main>
  )
}

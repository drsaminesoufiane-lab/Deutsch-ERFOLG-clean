
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
  { id: 'A', title: 'Café Simon', text: 'Drei Standorte in Passau. Hausgemachte Pralinen, Kuchen, Torten und Eis. Dazu gibt es eine kleine Mittagskarte.', fr: 'Trois établissements à Passau. Pralinés, gâteaux, tartes et glaces faits maison. Une petite carte est également proposée à midi.', ar: 'ثلاثة فروع في باساو. حلويات وشوكولاتة وكعك ومثلجات محضرة في المكان. كما توجد قائمة غداء صغيرة.', en: 'Three locations in Passau. Homemade pralines, cakes, tarts and ice cream, plus a small lunch menu.' },
  { id: 'B', title: 'Tourismusschulen Bad Leonfelden', text: 'Ausbildungsmöglichkeiten: fünfjährige Ausbildung mit Matura, dreisemestriges Kolleg, dreijährige Hotelfachschule und Tourismusschule.', fr: 'Plusieurs formations : cursus de cinq ans avec baccalauréat autrichien, formation collégiale de trois semestres, école hôtelière de trois ans et école de tourisme.', ar: 'تكوينات متعددة: دراسة خمس سنوات مع شهادة Matura، وتكوين من ثلاثة فصول، ومدرسة فندقية لثلاث سنوات ومدرسة للسياحة.', en: 'Training options include a five-year programme with Matura, a three-semester college course, a three-year hotel school and a tourism school.' },
  { id: 'C', title: 'Liederbühne Robinson', text: 'Kabarett und Live-Unterhaltung, gemütliches Restaurant und Gastgarten. Preiswerte Spezialitäten, auch vegetarische Gerichte. Mittwoch bis Samstag abends, Sonn- und Feiertage ab 11 Uhr geöffnet.', fr: 'Cabaret et spectacles en direct, restaurant convivial et jardin. Spécialités à prix abordables, avec aussi des plats végétariens. Ouvert du mercredi au samedi soir, ainsi que les dimanches et jours fériés dès 11 h.', ar: 'عروض كوميدية وترفيه مباشر، ومطعم مريح وحديقة. أطباق خاصة بأسعار مناسبة، بما فيها أطباق نباتية. مفتوح من الأربعاء إلى السبت مساءً، والأحد وأيام العطل ابتداءً من 11 صباحاً.', en: 'Cabaret and live entertainment, a cosy restaurant and garden. Inexpensive specialities, including vegetarian dishes. Open Wednesday to Saturday evenings and Sundays/public holidays from 11 a.m.' },
  { id: 'D', title: 'Interkulturelle Arbeit', text: 'Berufsbegleitende Weiterbildung für Fachkräfte aus pädagogischen, sozialen und Gesundheitsberufen. Beginn im Januar/Februar.', fr: 'Formation continue en parallèle du travail pour les professionnels de l’éducation, du secteur social et de la santé. Début en janvier/février.', ar: 'تكوين مهني مستمر بالتوازي مع العمل للمتخصصين في التربية والمجال الاجتماعي والصحي. البداية في يناير/فبراير.', en: 'Part-time professional development for specialists in education, social work and healthcare. Starts in January/February.' },
  { id: 'E', title: 'Restaurantcafé Chesa', text: 'Schweizer und bayerische Küche. Besondere Spezialitäten: heimische Fischgerichte.', fr: 'Cuisine suisse et bavaroise. Spécialités : plats préparés avec des poissons locaux.', ar: 'مأكولات سويسرية وبافارية. ومن التخصصات أطباق السمك المحلي.', en: 'Swiss and Bavarian cuisine. Specialities include local fish dishes.' },
  { id: 'F', title: 'BIZ – Berufsinformationszentrum', text: 'Information und Beratung rund um Beruf, Ausbildung und Studium. Informieren Sie sich über Berufe und Ihre Möglichkeiten.', fr: 'Informations et conseils sur les métiers, la formation et les études. Découvrez les professions et les possibilités qui s’offrent à vous.', ar: 'معلومات واستشارات حول المهن والتكوين والدراسة. تعرفوا على المهن والفرص المتاحة لكم.', en: 'Information and advice about careers, vocational training and higher education. Find out about occupations and your options.' },
  { id: 'G', title: 'Abendkurs für Anfänger', text: 'Grundkenntnisse am Computer. Windows und Linux. Volkshochschule Favoriten.', fr: 'Cours du soir pour débutants : connaissances informatiques de base, Windows et Linux. Université populaire de Favoriten.', ar: 'دروس مسائية للمبتدئين لاكتساب أساسيات الحاسوب، Windows وLinux، في مركز التعليم الشعبي Favoriten.', en: 'Evening course for beginners: basic computer skills, Windows and Linux. Adult education centre in Favoriten.' },
  { id: 'H', title: 'MoritzCafé', text: 'Täglich bis 18 Uhr: Kaffee so viel Sie wollen. Von 18 bis 21 Uhr verschiedene Biersorten.', fr: 'Tous les jours jusqu’à 18 h : café à volonté. De 18 h à 21 h : différentes sortes de bière.', ar: 'يومياً إلى غاية السادسة مساءً: قهوة بقدر ما تريد. ومن السادسة إلى التاسعة مساءً أنواع مختلفة من البيرة.', en: 'Every day until 6 p.m.: as much coffee as you like. From 6 to 9 p.m.: various types of beer.' },
  { id: 'I', title: 'Rathauskeller', text: 'Österreichische, italienische und französische Qualitätsweine. Kaltes und warmes Buffet. Montag und Dienstag geschlossen.', fr: 'Vins de qualité autrichiens, italiens et français. Buffet froid et chaud. Fermé le lundi et le mardi.', ar: 'نبيذ عالي الجودة من النمسا وإيطاليا وفرنسا. بوفيه بارد وساخن. مغلق يومي الاثنين والثلاثاء.', en: 'Quality wines from Austria, Italy and France. Hot and cold buffet. Closed on Mondays and Tuesdays.' },
  { id: 'J', title: 'Internationales Studium', text: 'Fremdsprachen und Betriebswirtschaft. Staatlicher Studienabschluss: B.A. in European Administration. Zwei Jahre in Köln und ein Jahr in England oder Frankreich.', fr: 'Langues étrangères et gestion d’entreprise. Diplôme universitaire d’État : Bachelor of Arts en administration européenne. Deux ans à Cologne et une année en Angleterre ou en France.', ar: 'اللغات الأجنبية وإدارة الأعمال. شهادة جامعية حكومية في الإدارة الأوروبية. سنتان في كولونيا وسنة في إنجلترا أو فرنسا.', en: 'Foreign languages and business administration. State-recognised B.A. in European Administration: two years in Cologne and one year in England or France.' },
  { id: 'K', title: 'USA – Schuljahr', text: 'Ein Schuljahr an einer High School in den USA. Leben in einer Gastfamilie, Betreuung vor Ort. Kostenlose Broschüre und Video.', fr: 'Une année scolaire dans un lycée américain. Séjour dans une famille d’accueil et accompagnement sur place. Brochure et vidéo gratuites.', ar: 'سنة دراسية في مدرسة ثانوية بالولايات المتحدة، مع الإقامة لدى عائلة مضيفة ومرافقة محلية. كتيب وفيديو مجانيان.', en: 'A school year at an American high school, living with a host family with local support. Free brochure and video.' },
  { id: 'L', title: 'Bachls Kerzenstub’n', text: 'Tanz und Essen, Live-Musik mit Tanzmöglichkeit. Deftige Fleischspezialitäten. Übernachtungsmöglichkeit vorhanden.', fr: 'Danse et repas, musique en direct avec possibilité de danser. Spécialités copieuses à base de viande. Hébergement disponible.', ar: 'رقص وطعام وموسيقى مباشرة مع إمكانية الرقص. أطباق دسمة من اللحوم. تتوفر إمكانية المبيت.', en: 'Dancing and food, live music with dancing. Hearty meat specialities. Overnight accommodation available.' }
]

const situations = [
  { id: 1, de: 'Sie möchten viele Stunden in einem Café verbringen und dabei nicht viel Geld ausgeben.', fr: 'Vous souhaitez passer de nombreuses heures dans un café sans dépenser beaucoup d’argent.', ar: 'تريد قضاء ساعات طويلة في مقهى دون إنفاق الكثير من المال.', en: 'You want to spend many hours in a café without spending much money.' },
  { id: 2, de: 'Sie haben vor Kurzem den Beruf gewechselt und brauchen für Ihre Arbeit grundlegende Computerkenntnisse.', fr: 'Vous avez récemment changé de métier et avez besoin de connaissances informatiques de base pour votre travail.', ar: 'غيّرت مهنتك مؤخراً وتحتاج إلى أساسيات الحاسوب من أجل عملك.', en: 'You recently changed jobs and need basic computer skills for work.' },
  { id: 3, de: 'Sie arbeiten in einem Krankenhaus und haben oft mit Patienten aus vielen Ländern zu tun. Sie möchten sich besser qualifizieren.', fr: 'Vous travaillez dans un hôpital et êtes souvent en contact avec des patients de nombreux pays. Vous souhaitez améliorer vos qualifications.', ar: 'تعمل في مستشفى وتتواصل كثيراً مع مرضى من بلدان مختلفة، وتريد تحسين مؤهلاتك المهنية.', en: 'You work in a hospital and often deal with patients from many countries. You want to improve your qualifications.' },
  { id: 4, de: 'Sie möchten einen Tanzkurs für Anfänger besuchen. Sie haben nur abends Zeit.', fr: 'Vous souhaitez suivre un cours de danse pour débutants. Vous n’êtes disponible que le soir.', ar: 'تريد الالتحاق بدورة رقص للمبتدئين، وليس لديك وقت إلا في المساء.', en: 'You want to attend a beginner dance course. You are only free in the evenings.' },
  { id: 5, de: 'Sie möchten beruflich mit Fremdsprachen zu tun haben, im Ausland studieren und vielleicht später dort arbeiten.', fr: 'Vous souhaitez travailler avec les langues étrangères, étudier à l’étranger et peut-être y travailler plus tard.', ar: 'تريد العمل في مجال اللغات الأجنبية والدراسة في الخارج وربما العمل هناك لاحقاً.', en: 'You want a career involving foreign languages, study abroad and perhaps work there later.' },
  { id: 6, de: 'Sie möchten mit einer Bekannten einen gemütlichen Nachmittag in der Stadt verbringen. Sie liebt Süßigkeiten.', fr: 'Vous souhaitez passer un après-midi agréable en ville avec une connaissance qui adore les douceurs.', ar: 'تريد قضاء فترة ما بعد الظهر في المدينة مع معرفة تحب الحلويات.', en: 'You want to spend a pleasant afternoon in town with an acquaintance who loves sweet things.' },
  { id: 7, de: 'Ein Freund aus den USA besucht Sie. Er kennt sich mit Wein aus und möchte europäische Weine probieren.', fr: 'Un ami des États-Unis vous rend visite. C’est un connaisseur de vin et il souhaite goûter des vins européens.', ar: 'يزورك صديق من الولايات المتحدة، وهو خبير بالنبيذ ويريد تذوق أنواع أوروبية.', en: 'A friend from the USA is visiting. He knows a lot about wine and wants to taste European wines.' },
  { id: 8, de: 'In Ihrer Freizeit möchten Sie mehr über andere Länder, fremde Kulturen und Traditionen erfahren.', fr: 'Pendant votre temps libre, vous souhaitez en apprendre davantage sur d’autres pays, cultures et traditions.', ar: 'في وقت فراغك تريد التعرف أكثر على البلدان والثقافات والتقاليد الأخرى.', en: 'In your free time, you want to learn more about other countries, cultures and traditions.' },
  { id: 9, de: 'Die Tochter Ihrer Freunde hat gerade das Abitur gemacht und weiß nicht, was sie später machen möchte. Sie braucht Informationen und Beratung.', fr: 'La fille de vos amis vient de passer le baccalauréat et ne sait pas quoi faire ensuite. Elle a besoin d’informations et de conseils.', ar: 'أنهت ابنة أصدقائك الثانوية للتو ولا تعرف ماذا تريد أن تفعل مستقبلاً. إنها بحاجة إلى معلومات ونصائح.', en: 'Your friends’ daughter has just completed her school-leaving exams and is unsure what to do next. She needs information and advice.' },
  { id: 10, de: 'Sie möchten mit Freunden essen gehen und Unterhaltung erleben. Ihre Freunde essen aber weder Fleisch noch Fisch.', fr: 'Vous souhaitez dîner avec des amis et profiter d’un divertissement. Vos amis ne mangent ni viande ni poisson.', ar: 'تريد تناول الطعام مع أصدقائك والاستمتاع بالترفيه، لكن أصدقاءك لا يأكلون اللحوم ولا السمك.', en: 'You want to eat out with friends and enjoy entertainment, but your friends eat neither meat nor fish.' }
]

const correct: Record<number, string> = {
  1: 'H', 2: 'G', 3: 'D', 4: 'X', 5: 'J',
  6: 'A', 7: 'I', 8: 'X', 9: 'F', 10: 'C'
}

const options = ['X', ...ads.map(ad => ad.id)]

export default function AlexUndCoraPage() {
  const [lang, setLang] = useState<Lang>('fr')
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})
  const [finished, setFinished] = useState(false)
  const [openAds, setOpenAds] = useState<string[]>([])
  const [openSituations, setOpenSituations] = useState<string[]>([])
  const [showSituations, setShowSituations] = useState(true)

  const score = useMemo(
    () => situations.reduce((sum, item) => sum + (answers[item.id] === correct[item.id] ? 1 : 0), 0),
    [answers]
  )

  function toggle(list: string[], setList: (value: string[]) => void, id: string) {
    setList(list.includes(id) ? list.filter(item => item !== id) : [...list, id])
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
          <ArrowLeft size={17} /> Retour à l’espace étudiant
        </Link>
        <Link href="/espace-etudiant" className="header-brand">
          <GraduationCap size={25} />
          <span><span>Deutsch</span><span>Erfolg</span></span>
        </Link>
      </header>

      <div className="exercise-content">
        <div className="breadcrumb">B1 <span>›</span> Lesen <span>›</span> Teil 3 <span>›</span> Alex Und Cora</div>

        <section className="exercise-hero">
          <div className="hero-label">B1 · LESEVERSTEHEN</div>
          <h1>Alex Und Cora</h1>
          <p>Lesen Teil 3 – Ordnen Sie jeder Situation die passende Anzeige zu. Wenn es keine passende Anzeige gibt, wählen Sie X.</p>
          <div className="progress-area">
            <div className="progress-label">
              <span>Fortschritt</span>
              <strong>{Object.keys(answers).length}/10</strong>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${Object.keys(answers).length * 10}%` }} />
            </div>
          </div>
        </section>

        <div className="language-bar">
          <div className="language-label"><Languages size={18} /> Langue de traduction</div>
          <select value={lang} onChange={e => setLang(e.target.value as Lang)}>
            <option value="fr">🇫🇷 Français</option>
            <option value="ar">🇲🇦 العربية</option>
            <option value="en">🇬🇧 English</option>
          </select>
          <span className="language-hint">Les traductions et explications s’affichent dans la langue choisie.</span>
        </div>

        <div className="instructions">
          <strong>Aufgabe:</strong> Lesen Sie die Situationen 1–10 und die Anzeigen A–L. Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige. Markieren Sie in diesem Fall X.
        </div>

        <div className="layout-toolbar">
          <span className="layout-description">
            {showSituations ? 'Annonces et situations affichées' : 'Mode annonces : espace maximal'}
          </span>
          <button
            type="button"
            className="sidebar-toggle"
            onClick={() => setShowSituations(prev => !prev)}
            aria-expanded={showSituations}
            aria-controls="situations-panel"
          >
            {showSituations ? <EyeOff size={17} /> : <Eye size={17} />}
            {showSituations ? 'Masquer les situations' : 'Afficher les situations'}
          </button>
        </div>

        <div className={`exercise-columns ${showSituations ? '' : 'situations-hidden'}`}>
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
                        className={`help-button ${opened ? 'active' : ''}`}
                        onClick={() => toggle(openAds, setOpenAds, ad.id)}
                      >
                        <Languages size={15} />
                        Traduction
                        {opened ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>

                      {opened && (
                        <div
                          className={`translation-panel ${lang === 'ar' ? 'arabic' : ''}`}
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
                  const translationOpened = openSituations.includes(String(item.id))
                  const explanationOpened = openSituations.includes(`exp-${item.id}`)

                  return (
                    <article
                      className={`situation-card ${isChecked && answer ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
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
                            setAnswers(prev => ({ ...prev, [item.id]: e.target.value }))
                            setChecked(prev => ({ ...prev, [item.id]: false }))
                          }}
                        >
                          <option value="">Anzeige wählen…</option>
                          {options.map(option => (
                            <option value={option} key={option}>
                              {option === 'X'
                                ? 'X – keine Anzeige'
                                : `${option} – ${ads.find(ad => ad.id === option)?.title}`}
                            </option>
                          ))}
                        </select>

                        {!finished && (
                          <button
                            className="individual-check-button"
                            disabled={!answer}
                            onClick={() => setChecked(prev => ({ ...prev, [item.id]: true }))}
                            title="Réponse prüfen"
                          >
                            <CheckCircle2 size={15} />
                            Prüfen
                          </button>
                        )}
                      </div>

                      {isChecked && answer && (
                        <div className={`feedback ${isCorrect ? 'right' : 'wrong'}`}>
                          {isCorrect
                            ? '✓ Richtig! Sehr gut!'
                            : `✕ Leider falsch. Richtige Antwort: ${correct[item.id]}`}
                        </div>
                      )}

                      <div className="help-actions">
                        <button
                          className={`help-button ${translationOpened ? 'active' : ''}`}
                          onClick={() => toggle(openSituations, setOpenSituations, String(item.id))}
                        >
                          <Languages size={14} />
                          Traduction
                          {translationOpened ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>

                        <button
                          className={`help-button ${explanationOpened ? 'active' : ''}`}
                          onClick={() => toggle(openSituations, setOpenSituations, `exp-${item.id}`)}
                        >
                          <Lightbulb size={14} />
                          Explication
                        </button>
                      </div>

                      {translationOpened && (
                        <div
                          className={`translation-panel ${lang === 'ar' ? 'arabic' : ''}`}
                          dir={lang === 'ar' ? 'rtl' : 'ltr'}
                        >
                          {item[lang]}
                        </div>
                      )}

                      {explanationOpened && (
                        <div className="explanation-panel">
                          {lang === 'fr'
                            ? 'Repérez les mots-clés de la situation, puis cherchez dans les annonces une offre qui répond précisément au besoin. Attention : une annonce qui parle d’un thème proche ne convient pas forcément.'
                            : lang === 'ar'
                              ? 'ابحث عن الكلمات المفتاحية في الوضعية، ثم تحقق من الإعلان الذي يلبي الحاجة بدقة. انتبه: الإعلان الذي يتحدث عن موضوع قريب ليس بالضرورة مناسباً.'
                              : 'Identify the key words in the situation and find the advertisement that meets the need precisely. A related topic does not necessarily mean it is the correct match.'}
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
                <span>{score === 10 ? 'Ausgezeichnet!' : score >= 6 ? 'Gut gemacht!' : 'Weiter üben!'}</span>
              </div>
              <button className="restart-button" onClick={restart}>
                <RotateCcw size={17} /> Noch einmal versuchen
              </button>
            </>
          )}
        </section>
      </div>

      <style jsx global>{`
        .exercise-page {
          min-height: 100vh;
          background: #F5F6F8;
          color: #172B4D;
          font-family: Arial, sans-serif;
        }

        .exercise-header {
          height: 68px;
          background: #172B4D;
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
          color: #D6B56D;
          flex-shrink: 0;
        }

        .header-brand > span {
          display: flex;
          gap: 5px;
        }

        .header-brand > span span:last-child {
          color: #D6B56D;
        }

        .exercise-content {
          max-width: 1800px;
          margin: auto;
          padding: 25px 24px 50px;
        }

        .breadcrumb {
          font-size: 12px;
          color: #8B96A6;
          margin-bottom: 18px;
        }

        .breadcrumb span {
          margin: 0 8px;
          color: #D6B56D;
        }

        .exercise-hero {
          background: linear-gradient(120deg, #172B4D, #294B78);
          border-radius: 17px;
          color: white;
          padding: 25px 30px;
          margin-bottom: 18px;
        }

        .hero-label {
          color: #D6B56D;
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
          color: #D6B56D;
        }

        .progress-track {
          height: 7px;
          background: #ffffff30;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #D6B56D;
          border-radius: 10px;
          transition: width .2s;
        }

        .language-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          background: white;
          border: 1px solid #E5E9EF;
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
          color: #A18142;
        }

        .language-bar select,
        .answer-row select {
          border: 1px solid #D9DFE8;
          border-radius: 8px;
          padding: 9px 11px;
          background: #F9FAFC;
          color: #172B4D;
          font-size: 13px;
          max-width: 100%;
        }

        .language-hint,
        .section-hint {
          font-size: 12px;
          color: #8792A2;
        }

        .instructions {
          padding: 12px 16px;
          background: #FFF8EA;
          border-left: 4px solid #D6B56D;
          border-radius: 8px;
          font-size: 12px;
          line-height: 1.7;
          margin-bottom: 14px;
        }

        /* BARRE DE COMMANDE DU PANNEAU */
        .layout-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 13px;
        }

        .layout-description {
          font-size: 12px;
          color: #8792A2;
        }

        .sidebar-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 15px;
          border: 1px solid #D6B56D;
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

        /* ANNONCES À GAUCHE + PANNEAU À DROITE */
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
          color: #A18142;
          background: #F8F1E3;
          padding: 6px 10px;
          border-radius: 20px;
          white-space: nowrap;
        }

        /* ANNONCES : DEUX COLONNES ET DÉFILEMENT */
        .ads-scroll {
          height: calc(100vh - 310px);
          min-height: 600px;
          max-height: 1000px;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 3px 9px 3px 2px;
          scrollbar-width: thin;
          scrollbar-color: #C5CEDA #EDF0F4;
        }

        .ads-scroll::-webkit-scrollbar {
          width: 9px;
        }

        .ads-scroll::-webkit-scrollbar-track {
          background: #EDF0F4;
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
          border: 1px solid #E1E6ED;
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
          background: #172B4D;
          color: #D6B56D;
          border-radius: 8px;
          font-weight: 700;
        }

        .ad-card > p {
          font-size: 14px;
          line-height: 1.7;
          color: #46556A;
          margin: 12px 0;
        }

        /* PANNEAU DES SITUATIONS À DROITE */
        .situations-section {
          background: #EEF1F5;
          border: 1px solid #E1E6ED;
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

        /* DEUX SITUATIONS PAR LIGNE */
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
          background: #172B4D;
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
          background: #F8FAFC;
          color: #53647A;
          font-size: 10px;
          cursor: pointer;
        }

        .help-button:hover,
        .help-button.active {
          border-color: #D6B56D;
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
          border-left: 3px solid #D6B56D;
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
          background: #172B4D;
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
          color: #A18142;
          font-size: 22px;
        }

        .score-result span {
          color: #64748B;
          font-size: 13px;
        }

        /* TABLETTES */
        @media (max-width: 1100px) {
          .exercise-columns {
            grid-template-columns: minmax(0, 1fr) minmax(360px, 0.9fr);
            gap: 13px;
          }

          .situations-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
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

        /* PETITS ÉCRANS ET MOBILES */
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
      `}</style>
    </main>
  )
}

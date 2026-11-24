
"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  GripVertical,
  RotateCcw,
  X,
} from "lucide-react";
import Link from "next/link";
import { chapterOne, type Exercise } from "@/lib/chapters/chapterData";
import "./chapter.css";

type AnswerValue = string | string[];
type PageView = "lesson" | "list" | "exercise";

const normalize = (value: AnswerValue) =>
  (Array.isArray(value) ? value.join("|") : value)
    .trim()
    .toLowerCase();

function RuleTable() {
  return (
    <div className="rule-table" role="table">
      <div className="rule-row rule-head" role="row">
        <span>Personne</span>
        <span>Singular</span>
        <span>Plural</span>
      </div>

      {chapterOne.rules.map((rule) => (
        <div className="rule-row" role="row" key={rule.label}>
          <strong>{rule.label}</strong>
          <span className={rule.tone}>{rule.singular}</span>
          <span className={rule.tone}>{rule.plural}</span>
        </div>
      ))}
    </div>
  );
}

function ExerciseCard({
  exercise,
  value,
  submitted,
  onAnswer,
}: {
  exercise: Exercise;
  value: AnswerValue | undefined;
  submitted: boolean;
  onAnswer: (answer: AnswerValue) => void;
}) {
  const [dragged, setDragged] = useState<string | null>(null);

  const initialDragAnswers =
    Array.isArray(value) && exercise.type === "drag"
      ? Object.fromEntries(
          (exercise.pairs ?? []).map((pair, index) => [
            pair.id,
            value[index] ?? "",
          ])
        )
      : {};

  const [dragAnswers, setDragAnswers] =
    useState<Record<string, string>>(initialDragAnswers);

  const isAnswered = value !== undefined;
  const isCorrect =
    isAnswered && normalize(value) === normalize(exercise.answer);

  const fillAnswers = Array.isArray(value)
    ? value
    : value
      ? [value]
      : [];

  const fillExpected = Array.isArray(exercise.answer)
    ? exercise.answer
    : [exercise.answer];

  const commitDrag = (id: string, answer: string) => {
    if (submitted) return;

    const next = { ...dragAnswers, [id]: answer };
    setDragAnswers(next);

    const ordered =
      exercise.pairs?.map((pair) => next[pair.id] ?? "") ?? [];

    if (ordered.length > 0 && ordered.every(Boolean)) {
      onAnswer(ordered);
    }
  };

  return (
    <article
      className={`exercise-card ${
        submitted
          ? isCorrect
            ? "is-correct"
            : "is-wrong"
          : ""
      }`}
    >
      <div className="exercise-meta">
        <span className="exercise-number">
          {String(exercise.number).padStart(2, "0")}
        </span>

        <span className="exercise-label">{exercise.label}</span>

        {submitted && (
          <span className="result-badge">
            {isCorrect ? (
              <>
                <Check size={14} /> Correct
              </>
            ) : (
              <>
                <X size={14} /> À revoir
              </>
            )}
          </span>
        )}
      </div>

      <h3>{exercise.prompt}</h3>

      {exercise.type !== "drag" && exercise.sentence && (
        <p className="exercise-sentence">{exercise.sentence}</p>
      )}

      {exercise.type === "mcq" || exercise.type === "referent" ? (
        <div className="option-grid">
          {exercise.options?.map((option) => (
            <button
              type="button"
              className={`option-button ${
                value === option ? "selected" : ""
              }`}
              key={option}
              disabled={submitted}
              onClick={() => onAnswer(option)}
              aria-pressed={value === option}
            >
              {option}
            </button>
          ))}
        </div>
      ) : exercise.type === "fill" ? (
        <FillExercise
          expected={fillExpected}
          answers={fillAnswers}
          disabled={submitted}
          onSubmit={(answers) =>
            onAnswer(answers.length === 1 ? answers[0] : answers)
          }
        />
      ) : (
        <div className="drag-exercise">
          <div className="drag-bank" aria-label="Pronoms à déplacer">
            {["er", "sie", "es"].map((pronoun) => (
              <button
                type="button"
                className={`drag-chip ${
                  dragged === pronoun ? "dragging" : ""
                }`}
                key={pronoun}
                draggable={!submitted}
                disabled={submitted}
                onDragStart={() => setDragged(pronoun)}
                onDragEnd={() => setDragged(null)}
                onClick={() => setDragged(pronoun)}
              >
                <GripVertical size={14} /> {pronoun}
              </button>
            ))}
          </div>

          <div className="drop-list">
            {exercise.pairs?.map((pair) => {
              const answer = dragAnswers[pair.id] ?? "";

              return (
                <div className="drop-row" key={pair.id}>
                  <span>{pair.left}</span>

                  <div
                    className={`drop-target ${answer ? "filled" : ""}`}
                    onDragOver={(event) => {
                      if (!submitted) event.preventDefault();
                    }}
                    onDrop={() => {
                      if (dragged && !submitted) {
                        commitDrag(pair.id, dragged);
                      }
                      setDragged(null);
                    }}
                    onClick={() => {
                      if (dragged && !submitted) {
                        commitDrag(pair.id, dragged);
                        setDragged(null);
                      }
                    }}
                  >
                    {answer || "déposer ici"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {submitted && (
        <div className="explanation">
          <strong>{isCorrect ? "Bien joué !" : "Correction"}</strong>
          <span>{exercise.explanation}</span>
        </div>
      )}
    </article>
  );
}

function FillExercise({
  expected,
  answers,
  disabled,
  onSubmit,
}: {
  expected: string[];
  answers: string[];
  disabled: boolean;
  onSubmit: (answers: string[]) => void;
}) {
  const [draft, setDraft] = useState<string[]>(
    answers.length > 0 ? answers : expected.map(() => "")
  );

  const setValue = (index: number, next: string) => {
    const values = [...draft];
    values[index] = next;
    setDraft(values);
  };

  return (
    <div className="fill-exercise">
      <div className="fill-line">
        {expected.map((_, index) => (
          <input
            key={index}
            value={draft[index] ?? ""}
            disabled={disabled}
            onChange={(event) => setValue(index, event.target.value)}
            aria-label={`Réponse ${index + 1}`}
            placeholder="…"
            maxLength={12}
          />
        ))}
      </div>

      {!disabled && (
        <>
          <button
            type="button"
            className="secondary-button"
            disabled={draft.some((item) => !item.trim())}
            onClick={() => onSubmit(draft.map((item) => item.trim()))}
          >
            Valider la réponse
          </button>
          <span className="hint">
            Vérifiez votre réponse avant de terminer l'exercice.
          </span>
        </>
      )}
    </div>
  );
}

export default function PersonalPronouns() {
  const [view, setView] = useState<PageView>("lesson");
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalQuestions = chapterOne.exercises.length;
  const answeredCount = Object.keys(answers).length;

  const correctCount = useMemo(
    () =>
      chapterOne.exercises.filter((exercise) => {
        const answer = answers[exercise.id];

        return (
          answer !== undefined &&
          normalize(answer) === normalize(exercise.answer)
        );
      }).length,
    [answers]
  );

  const score = Math.round((correctCount / totalQuestions) * 100);

  const allAnswered = chapterOne.exercises.every(
    (exercise) => answers[exercise.id] !== undefined
  );

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setView("lesson");
  };

  const finishExercise = () => {
    if (allAnswered) {
      setSubmitted(true);
    }
  };

  return (
    <div className="chapter-demo">
      <main className="book-shell chapter-shell">
        <header className="topbar">
          <Link className="brand" href="/">
            <span className="brand-mark">DE</span>
            <span>Deutsch Erfolg</span>
          </Link>

          <Link className="back-link" href="/">
            <ArrowLeft size={15} /> Tous les chapitres
          </Link>
        </header>

        <section className="chapter-heading">
          <div>
            <span className="eyebrow">Kapitel 1 · A1</span>
            <h1>{chapterOne.title}</h1>
            <p>{chapterOne.subtitle}</p>
          </div>

          <div className="progress-card">
            <span>Progression</span>
            <strong>
              {submitted ? "Terminé" : `${answeredCount}/${totalQuestions}`}
            </strong>
            <div className="progress-track">
              <i
                style={{
                  width: `${
                    (answeredCount / totalQuestions) * 100
                  }%`,
                }}
              />
            </div>
          </div>
        </section>

        <nav className="chapter-tabs" aria-label="Navigation du chapitre">
          <button
            type="button"
            className={view === "lesson" ? "active" : ""}
            onClick={() => setView("lesson")}
          >
            01 <span>Lektion</span>
          </button>

          <button
            type="button"
            className={view !== "lesson" ? "active" : ""}
            onClick={() => setView("list")}
          >
            02 <span>Übungen</span>
          </button>

          <button
            type="button"
            className="reset-tab"
            onClick={reset}
          >
            <RotateCcw size={15} /> Recommencer
          </button>
        </nav>

        {view === "lesson" && (
          <section className="lesson-layout">
            <div className="lesson-image-wrap">
              <img
                data-image-slot="lesson.personalpronomen"
                src="/assets/slots/lesson.personalpronomen.jpg"
                alt={chapterOne.lessonAlt}
              />
            </div>

            <aside className="lesson-side">
              <div className="side-card side-card-teal">
                <span className="side-label">Objectif</span>
                <p>{chapterOne.objective}</p>
              </div>

              <div className="side-card">
                <span className="side-label">À retenir</span>
                <RuleTable />
              </div>

              <div className="side-card">
                <span className="side-label">Pronomen für Sachen</span>
                <div className="thing-list">
                  {chapterOne.things.map((thing) => (
                    <div key={thing.noun}>
                      <span>
                        {thing.article} {thing.noun}
                      </span>
                      <strong>→ {thing.pronoun}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="primary-button full-width"
                onClick={() => setView("list")}
              >
                Terminer la leçon <ChevronRight size={17} />
              </button>
            </aside>
          </section>
        )}

        {view === "list" && (
          <section className="practice-layout">
            <div className="practice-intro">
              <div>
                <span className="eyebrow">Kapitel 1 · Übungen</span>
                <h2>Exercices disponibles</h2>
                <p>
                  Choisissez un exercice pour commencer.
                </p>
              </div>

              <div className="score-pill">
                <strong>{submitted ? score : "—"}</strong>
                <span>/ 100 points</span>
              </div>
            </div>

            <button
              type="button"
              className="exercise-card exercise-choice"
              onClick={() => setView("exercise")}
            >
              <div className="exercise-meta">
                <span className="exercise-number">01</span>
                <span className="exercise-label">
                  Übung 1 · Personalpronomen
                </span>

                {submitted && (
                  <span className="result-badge">
                    <Check size={14} /> Terminé
                  </span>
                )}
              </div>

              <h3>Les pronoms personnels allemands</h3>

              <p className="exercise-sentence">
                7 questions · QCM · Texte à trous · Glisser-déposer
              </p>

              <span className="exercise-open">
                {submitted ? "Voir les résultats" : "Commencer l'exercice"}
                <ChevronRight size={16} />
              </span>
            </button>

            {submitted && (
              <div className="side-card side-card-teal">
                <span className="side-label">Résultat de l'Übung 1</span>
                <h2>{score}/100</h2>
                <p>
                  {correctCount} bonne(s) réponse(s) sur {totalQuestions}.
                </p>
              </div>
            )}
          </section>
        )}

        {view === "exercise" && (
          <section className="practice-layout">
            <div className="practice-intro">
              <div>
                <span className="eyebrow">
                  Kapitel 1 · Übung 1
                </span>
                <h2>Personalpronomen</h2>
                <p>
                  Répondez aux 7 questions, puis terminez votre exercice.
                </p>
              </div>

              <div className="score-pill">
                <strong>{submitted ? score : answeredCount}</strong>
                <span>
                  {submitted ? "/ 100 points" : `/ ${totalQuestions} réponses`}
                </span>
              </div>
            </div>

            <div className="exercise-list">
              {chapterOne.exercises.map((exercise: Exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  value={answers[exercise.id]}
                  submitted={submitted}
                  onAnswer={(answer) =>
                    setAnswers((previous) => ({
                      ...previous,
                      [exercise.id]: answer,
                    }))
                  }
                />
              ))}
            </div>

            {!submitted ? (
              <div className="practice-footer">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setView("list")}
                >
                  Retour à la liste
                </button>

                <span>
                  {answeredCount}/{totalQuestions} réponses
                </span>

                <button
                  type="button"
                  className="primary-button"
                  disabled={!allAnswered}
                  onClick={finishExercise}
                >
                  Terminer l'Übung <Check size={16} />
                </button>
              </div>
            ) : (
              <div className="side-card side-card-teal">
                <span className="side-label">Übung abgeschlossen</span>
                <h2>Votre résultat : {score}/100</h2>
                <p>
                  {correctCount} bonne(s) réponse(s) sur {totalQuestions}.
                  Vous pouvez consulter les corrections ci-dessus.
                </p>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setView("list")}
                >
                  Retour aux exercices <ChevronRight size={16} />
                </button>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

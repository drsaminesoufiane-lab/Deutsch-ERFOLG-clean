export type ExerciseType = "mcq" | "fill" | "drag" | "referent";

export interface Exercise {
  id: string;
  number: number;
  type: ExerciseType;
  label: string;
  prompt: string;
  sentence?: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
  pairs?: Array<{ id: string; left: string; answer: string }>;
}

export const chapterOne = {
  id: "1",
  eyebrow: "Kapitel 1",
  title: "Personalpronomen",
  subtitle: "Ich, du, er, sie, es, wir, ihr, sie und Sie",
  objective: "Sprechen, fragen und antworten: Personen und Sachen richtig ersetzen.",
  lessonImage: "/assets/slots/lesson.personalpronomen.jpg",
  lessonAlt:
    "Eigenständige Lernkarte zu deutschen Personalpronomen mit Tabelle für Singular und Plural, Pronomen für Sachen und Beispielsätzen",
  rules: [
    { label: "1. Person", singular: "ich", plural: "wir", tone: "teal" },
    { label: "2. Person", singular: "du · Sie", plural: "ihr · Sie", tone: "pink" },
    { label: "3. Person", singular: "er · sie · es", plural: "sie", tone: "teal" },
  ],
  things: [
    { article: "der", noun: "Tisch", pronoun: "er" },
    { article: "die", noun: "Lampe", pronoun: "sie" },
    { article: "das", noun: "Messer", pronoun: "es" },
    { article: "die (Plural)", noun: "Tassen", pronoun: "sie" },
  ],
  examples: [
    { name: "Herr Gupta", sentence: "Er kommt aus Indien.", accent: "er" },
    { name: "Frau Kioka", sentence: "Sie kommt aus Japan.", accent: "Sie" },
    { name: "Herr Gupta und Frau Kioka", sentence: "Sie lernen Deutsch.", accent: "Sie" },
    { name: "Der Tisch", sentence: "Er ist klein.", accent: "Er" },
  ],
  exercises: [
    {
      id: "e1",
      number: 1,
      type: "mcq",
      label: "Choisir le bon pronom",
      prompt: "Deux personnes parlent allemand.",
      sentence: "___ sprechen Deutsch.",
      options: ["Wir", "Ihr", "Sie"],
      answer: "Sie",
      explanation: "Deux personnes = 3e personne du pluriel : « Sie ».",
    },
    {
      id: "e2",
      number: 2,
      type: "fill",
      label: "Compléter une phrase",
      prompt: "Remplacez « Herr Gupta ».",
      sentence: "Das ist Herr Gupta. ___ kommt aus Indien.",
      answer: "Er",
      explanation: "Herr Gupta est une personne masculine au singulier : « Er ».",
    },
    {
      id: "e3",
      number: 3,
      type: "mcq",
      label: "Sujet féminin",
      prompt: "Frau Meier fait les courses.",
      sentence: "Frau Meier geht einkaufen. ___ kauft Gemüse und Obst.",
      options: ["Er", "Sie", "Es"],
      answer: "Sie",
      explanation: "Une femme = « sie » avec une minuscule dans la phrase.",
    },
    {
      id: "e4",
      number: 4,
      type: "drag",
      label: "Glisser-déposer · objets",
      prompt: "Faites glisser le pronom vers le bon nom.",
      answer: ["er", "sie", "es", "sie"],
      explanation: "Le genre grammatical de l’article donne le pronom : der → er, die → sie, das → es.",
      pairs: [
        { id: "p1", left: "der Schrank", answer: "er" },
        { id: "p2", left: "die Lampe", answer: "sie" },
        { id: "p3", left: "das Regal", answer: "es" },
        { id: "p4", left: "die Sessel (Plural)", answer: "sie" },
      ],
    },
    {
      id: "e5",
      number: 5,
      type: "fill",
      label: "Dialogue à trous",
      prompt: "Complétez les deux répliques.",
      sentence: "Marie, kommst ___ bitte? — Nein, ___ habe keine Zeit.",
      answer: ["du", "ich"],
      explanation: "On parle directement à Marie : « du ». La personne qui répond dit « ich ».",
    },
    {
      id: "e6",
      number: 6,
      type: "mcq",
      label: "Formel ou informel ?",
      prompt: "Vous vous adressez à Frau Schmidt.",
      sentence: "Frau Schmidt, was machen ___?",
      options: ["du", "ihr", "Sie"],
      answer: "Sie",
      explanation: "Avec un nom de famille et une relation formelle, on utilise « Sie ».",
    },
    {
      id: "e7",
      number: 7,
      type: "referent",
      label: "Retrouver le référent",
      prompt: "Qui est « Sie » dans cette phrase ?",
      sentence: "Herr Lindner: Kommen Sie bitte herein.",
      options: ["Frau Peneva", "die Kinder", "Karina"],
      answer: "Frau Peneva",
      explanation: "La majuscule « Sie » indique la forme de politesse adressée à Frau Peneva.",
    },
  ] satisfies Exercise[],
} as const;

export type Chapter = typeof chapterOne;

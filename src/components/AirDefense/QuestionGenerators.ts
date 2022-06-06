import { MultipleChoiceQuestion, Question } from "./QuizApp";
import { AllAnswerOptions, System } from  "./types";

export type QuestionGenerator = (system: System, field: keyof System, questionText: string, option: AllAnswerOptions<System>) => Question;

export const createMultipleChoice: QuestionGenerator = (system: System, field: keyof System, questionText: string, options: AllAnswerOptions<System>): MultipleChoiceQuestion => {
  const possibleAnswers = options[field as keyof AllAnswerOptions<System>];
  const answer = system[field];
  const possibleAnswersSliced = possibleAnswers.filter((val => val !== answer));
  const answers = [answer].concat(possibleAnswersSliced)
  const answersReduced = (answers).slice(0, Math.min(4, possibleAnswersSliced.length + 1));
  const shuffledAnswers = answersReduced.sort(() => 0.5 - Math.random());
  return {
    type: "multipleChoice",
    question: questionText,
    options: shuffledAnswers,
    //answerFn: (answer: string, question: Question) => answer === system[field]
    answer: system[field]
  }
};

export const createBoolean: QuestionGenerator = (system: System, field: keyof System, questionText: string, options: AllAnswerOptions<System>): MultipleChoiceQuestion => {
  return {
    type: "multipleChoice",
    question: questionText,
    options: ["Yes", "No"],
    // answerFn: (answer: string, question: Question) => answer === (system[field] ? "Yes" : "No")
    answer: system[field] ? "Yes": "No"
  }
};
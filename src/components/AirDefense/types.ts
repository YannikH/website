import { QuestionGenerator } from "./QuestionGenerators";
import { SPAA } from "./SPAAQuizConfiguration";
import { SAM } from "./SamQuizConfiguration";

export type Guidance = "Infra-red" | "Radar";

export type BaseSystemProps = {
  image: string
};
export type System = 
| SPAA
| SAM;

export type AllAnswerOptions<T> = {[key in keyof T]: Array<any>}

export interface QuestionConfiguration {
  field: string
  questionText: string,
  generator: QuestionGenerator
};
export type QuizConfiguration = {
  questions: Array<QuestionConfiguration>
  systems: Array<System>
}
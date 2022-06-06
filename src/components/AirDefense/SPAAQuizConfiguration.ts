import { createMultipleChoice } from "./QuestionGenerators";
import { BaseSystemProps, QuizConfiguration } from "./types";

export type SPAA = BaseSystemProps & {
  name: string,
  image: string,
  test: number
};

export const spaaQuizConfiguration: QuizConfiguration = {
  title: "Self Propelled AAA",
  description: "Gun based self propelled AAA systems",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/05/ZSU-57-2_Hun_2010_02.jpg",
  questions: [
    {
      field: "name",
      questionText: "What is the name of this system",
      generator: createMultipleChoice
    }
  ],
  systems: [
    {
      name: "ZSU-57-2",
      test: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/ZSU-57-2_Hun_2010_02.jpg"
    },
    {
      name: "ZSU-23-4",
      test: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/%D0%97%D0%A1%D0%A3-23-4_%C2%AB%D0%A8%D0%B8%D0%BB%D0%BA%D0%B0%C2%BB_%D0%B2_%D0%9C%D1%83%D0%B7%D0%B5%D0%B5_%D0%BE%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8.jpg"
    },
  ]
};

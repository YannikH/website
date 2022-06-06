import React, { useEffect, useMemo, useState } from "react";
import { MultipleChoiceQuestion, Question } from "./QuizApp";
import { QuizCard, QuizCardContainer, QuizCardWrapper } from "./QuizCard";
import confetti from 'canvas-confetti'
import { Slide } from "@mui/material";
import { AllAnswerOptions, AllAnswerOptions as AllFieldOptions, Guidance, QuizConfiguration, System } from "./types";

const createConfetti = () => {
  const myCanvas = document.getElementById('confettiCanvas') as HTMLCanvasElement;
  return confetti.create(myCanvas, {
    resize : true
  });
}

const getAllOptions = (quizConfiguration: QuizConfiguration) => {
  const allOptions: {[key: string]: any} = {};

  quizConfiguration.questions.forEach(({field}) => allOptions[field] = []);

  quizConfiguration.systems.forEach(system => {
    Object.keys(allOptions).forEach((key: string) => {
      const list = allOptions[key as keyof AllAnswerOptions<System>];
      const value = system[key as keyof System];
      if(list.indexOf(value as never) === -1) {
        list.push(value as never)
      }
    })
  });
  return allOptions as AllFieldOptions<System>;
}

const prepareQuizQuestions = (quizConfiguration: QuizConfiguration) => {
  const allOptions = getAllOptions(quizConfiguration);
  const questionsList: Array<{system: System, question: Question}> = [];
  quizConfiguration.systems.forEach(system => {
    quizConfiguration.questions.forEach(({field, questionText, generator}) => {
      questionsList.push({system: system, question: generator(system, field as keyof System, questionText, allOptions)})
    })
  });
  return questionsList.sort(() => 0.5 - Math.random());
};

export const Quiz = ({quizConfiguration}: {quizConfiguration: QuizConfiguration}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  
  const myConfetti = createConfetti();
  const answerCallback = (result: boolean, action = "answer") => {
    if (action === "continue") {
      setQuestionIndex(questionIndex + 1);
    } else if (result) {
      myConfetti()
    }
  };

  let questionsList: Array<{system: System, question: Question}> = useMemo(() => {
    console.log("preparing questions")
    return prepareQuizQuestions(quizConfiguration);
  }, [])
  const allQuestionCards = questionsList.map(({system, question}, index) => 
    <Slide in={questionIndex === index} key={index} direction="left">
      <QuizCardWrapper>
        <QuizCard question={question} system={system} answerCallback={answerCallback}/>
      </QuizCardWrapper>
    </Slide>
  )

  return <QuizCardContainer>
    {allQuestionCards}
  </QuizCardContainer>
};
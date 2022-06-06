import React, { useEffect, useMemo, useState } from "react";
import { MultipleChoiceQuestion, Question } from "./QuizApp";
import { QuizCard, QuizCardContainer, QuizCardWrapper } from "./QuizCard";
import confetti from 'canvas-confetti'
import { Box, Slide, Typography } from "@mui/material";
import { AllAnswerOptions, AllAnswerOptions as AllFieldOptions, Guidance, QuizConfiguration, System } from "./types";
import { get, set } from "local-storage";
import EndingCard from "./EndingCard";

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
  const questionsShuffled =  questionsList.sort(() => 0.5 - Math.random());
  if (quizConfiguration.length && quizConfiguration.length > 0) questionsShuffled.splice(quizConfiguration.length)
  return questionsShuffled;
};

type QuestionsList = Array<{system: System, question: Question}>;
type QuizInstance = {questionIndex: number, questionsList: QuestionsList, correctAnswers: number}

const saveQuizInstance = (questionIndex: number, questionsList: QuestionsList, correctAnswers: number) => {
  set("currentQuiz", {questionIndex, questionsList, correctAnswers})
};

const getQuizInstance = (newQuiz: boolean, quizConfiguration: QuizConfiguration): QuizInstance => {
  if (newQuiz) {
    const questionsList: QuestionsList = prepareQuizQuestions(quizConfiguration)
    const instance = {questionsList: questionsList, questionIndex: 0, correctAnswers: 0}
    saveQuizInstance(0, questionsList, 0)
    return instance
  };
  const quizState = get("currentQuiz") as QuizInstance;
  return quizState
};

const ProgressDisplay = ({index, total, correct}: {index: number, total: number, correct: number}) => (
  <Box m={2}>
    <Box style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
      <Typography variant="h5">
        correct: { correct }
      </Typography>
      <Typography variant="h5">
        { index + 1 }/{ total }
      </Typography>
    </Box>
  </Box>
);

type QuizProps = {
  quizConfiguration: QuizConfiguration;
  newQuiz: boolean;
  setNewQuiz: React.Dispatch<boolean>
  scrollableRef: React.MutableRefObject<HTMLElement | null>
};

export const Quiz = ({quizConfiguration, newQuiz, setNewQuiz, scrollableRef}: QuizProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionsList, setQuestionsList] = useState<QuestionsList>([])
  const [correctAnswers, setCorrectAnswers] = useState(0);
  
  const myConfetti = createConfetti();
  const answerCallback = (result: boolean, action = "answer") => {
    if (action === "continue") {
      setQuestionIndex(questionIndex + 1);
      saveQuizInstance(questionIndex, questionsList, correctAnswers)
      saveQuizInstance(questionIndex, questionsList, correctAnswers)
      if (scrollableRef.current) scrollableRef.current.scrollTop = 0;
    } else if (result) {
      myConfetti()
      setCorrectAnswers(correctAnswers + 1)
      saveQuizInstance(questionIndex + 1, questionsList, correctAnswers + 1)
      if (scrollableRef.current) scrollableRef.current.scrollTop = 99999;
    } else {
      saveQuizInstance(questionIndex + 1, questionsList, correctAnswers)
    }
    console.log('correct answers', correctAnswers)
  };

  useEffect(() => {
    const instance = getQuizInstance(newQuiz, quizConfiguration)
    console.log(instance, newQuiz)
    setNewQuiz(false)
    setQuestionIndex(instance.questionIndex)
    setQuestionsList(instance.questionsList)
    setCorrectAnswers(instance.correctAnswers)
  }, [newQuiz])
  const allQuestionCards = questionsList.map(({system, question}, index) => 
    <Slide in={questionIndex === index} key={index} direction="left">
      <QuizCardWrapper style={{ display: (questionIndex === index) ? 'initial' : 'none' }}>
        <ProgressDisplay {...{index: questionIndex, total: questionsList.length, correct: correctAnswers}} />
        <QuizCard question={question} system={system} answerCallback={answerCallback}/>
      </QuizCardWrapper>
    </Slide>
  )

  return <QuizCardContainer>
    {allQuestionCards}
    <Slide in={questionIndex >= questionsList.length}>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <EndingCard {...{index: questionIndex, total: questionsList.length, correct: correctAnswers}}/>
      </div>
    </Slide>
  </QuizCardContainer>
};
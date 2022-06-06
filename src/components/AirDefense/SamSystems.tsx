import React, { useState } from "react";
import { MultipleChoiceQuestion, Question } from "./Quiz";
import { QuizCard, QuizCardContainer, QuizCardWrapper } from "./QuizCard";
import confetti from 'canvas-confetti'
import { Slide } from "@mui/material";

export type Guidance = "IR" | "RDR";
export type SAM = {
  natoNum: number,
  natoName: string,
  range: number,
  alt: number,
  guidance: Guidance,
  radarName: string,
  missileDefense: boolean,
  additionalInformation: any,
  image: string,
  questions: Array<Question>
}

const createSAM = (
    natoNum: number,
    natoName: string,
    range: number,
    alt: number,
    guidance: Guidance,
    radarName: string,
    missileDefense: boolean,
    additionalInformation: any,
    image: string
  ): SAM => {
  const createRangeEvaluator = (ranges: Array<Array<Number>>, systemRange: number) => (answer: string, question: Question) => {
    question = question as MultipleChoiceQuestion;
    const answerIndex = question.options.findIndex(val => val === answer);
    const rangeBracket = ranges[answerIndex];
    return (systemRange >=rangeBracket[0] && systemRange <= rangeBracket[1])
  }
  const questions: Array<Question> = [
    {type: "number", question: "What is the NATO designation (SA-_) for this system?", answerFn: (answer, question) => answer === natoNum.toString()},
    {type: "multipleChoice", question: "What is the maximum effective range (km) of this SAM system", options: ["0-5km", "5-15km", "15-30km", "30+ km"], answerFn: createRangeEvaluator([[0,5],[5,15],[15,30],[30,9999]],range)}
  ];
  return {
    natoNum,
    natoName,
    range,
    alt,
    radarName,
    guidance,
    missileDefense,
    additionalInformation,
    image,
    questions
  } 
}

export const SamSystems: Array<SAM> = [
  createSAM(2, "Guideline", 55, 98, "RDR", "Fan Song", false, {remarks: "Rear Area Defense"}, "https://upload.wikimedia.org/wikipedia/commons/b/b9/03_SA-2_Guideline.jpg"),
  createSAM(8, "Gecko", 15, 16, "RDR", "Land Roll", false, {remarks: "6 Wheeled vehicle"}, "https://upload.wikimedia.org/wikipedia/commons/7/70/ParkPatriot2015part8-28.jpg"),
  createSAM(9, "Gaskin", 4, 11, "IR", "Flat Box A", false, {remarks: "BRDM-2 Chassis"}, "https://photo.weaponsystems.net/image/s-carousel/n-ad_spsam_sa9_m1.jpg/--/img/ws/ad_spsam_sa9_m1.jpg")
];

export const SamQuiz = () => {
  const questionsList = SamSystems.reduce(
    (prev: Array<{system: SAM, question: Question}>, cur) => prev.concat(
        cur.questions.map(question => ({system: cur, question}))
      )
    , []
  )
  const [questionIndex, setQuestionIndex] = useState(0);
  
  const myCanvas = document.getElementById('confettiCanvas') as HTMLCanvasElement;
  var myConfetti = confetti.create(myCanvas, {
    resize : true
  });

  const answerCallback = (result: boolean) => {
    if (result) {
      console.log(result)
      myConfetti({
        particleCount: 300,
        spread: 160
      })
      new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
        setQuestionIndex(questionIndex + 1);
      });
    }
  };

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
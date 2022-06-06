import React, { useState } from "react";
import { MultipleChoiceQuestion, Question } from "./Quiz";
import { QuizCard, QuizCardContainer, QuizCardWrapper } from "./QuizCard";
import confetti from 'canvas-confetti'
import { Slide } from "@mui/material";

export type Guidance = "Infra-red" | "Radar";
export type SAM = {
  natoNum: string,
  natoName: string,
  range: string,
  alt: string,
  guidance: Guidance,
  radarName: string,
  missileDefense: boolean,
  additionalInformation: any,
  image: string,
  questions: Array<Question>
}

const createSAM = (
    natoNum: string,
    natoName: string,
    range: string,
    alt: string,
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
  // const questions: Array<Question> = [
  //   {type: "number", question: "What is the NATO designation (SA-_) for this system?", answerFn: (answer, question) => answer === natoNum.toString()},
  //   {type: "multipleChoice", question: "What is the maximum effective range (km) of this SAM system", options: ["0-5km", "5-15km", "15-30km", "30+ km"], answerFn: createRangeEvaluator([[0,5],[5,15],[15,30],[30,9999]],range)}
  // ];
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
    questions: []
  } 
}

export const SamSystems: Array<SAM> = [
  createSAM("2", "Guideline", "55", "98", "Radar", "Fan Song", false, {remarks: "Rear Area Defense"}, "https://upload.wikimedia.org/wikipedia/commons/b/b9/03_SA-2_Guideline.jpg"),
  createSAM("8", "Gecko", "15", "16", "Radar", "Land Roll", false, {remarks: "6 Wheeled vehicle"}, "https://upload.wikimedia.org/wikipedia/commons/7/70/ParkPatriot2015part8-28.jpg"),
  createSAM("9", "Gaskin", "4", "11", "Infra-red", "Flat Box A", false, {remarks: "BRDM-2 Chassis"}, "https://photo.weaponsystems.net/image/s-carousel/n-ad_spsam_sa9_m1.jpg/--/img/ws/ad_spsam_sa9_m1.jpg")
];

type AllAnswerOptions = {
  natoNum: Array<number>,
  natoName: Array<string>,
  range: Array<number>,
  alt: Array<number>,
  guidance: Array<Guidance>,
  radarName: Array<string>,
  missileDefense: Array<boolean>,
  additionalInformation: Array<any>,
};

const createMultipleChoice = (sam: SAM, field: keyof SAM, questionText: string, options: AllAnswerOptions): MultipleChoiceQuestion => {
  const possibleAnswers = options[field as keyof AllAnswerOptions];
  const answer = sam[field];
  const possibleAnswersSliced = possibleAnswers.filter((val => val !== answer));
  const answers = [answer].concat(possibleAnswersSliced)
  const shuffledAnswers = answers.sort(() => 0.5 - Math.random());
  return {
    type: "multipleChoice",
    question: questionText,
    options: shuffledAnswers,
    answerFn: (answer: string, question: Question) => answer === sam[field]
  }
};

const createBoolean = (sam: SAM, field: keyof SAM, questionText: string, options: AllAnswerOptions): MultipleChoiceQuestion => {
  return {
    type: "multipleChoice",
    question: questionText,
    options: ["Yes", "No"],
    answerFn: (answer: string, question: Question) => answer === (sam[field] ? "Yes" : "No")
  }
};

const questionMap = [
  {
    field: "natoNum",
    questionText: "what is the NATO designation of this system (SA-...)",
    generator: createMultipleChoice
  },
  {
    field: "natoName",
    questionText: "What is the NATO name for this system",
    generator: createMultipleChoice
  },
  {
    field: "range",
    questionText: "What is the maximum engagement range of this system (km)",
    generator: createMultipleChoice
  },
  {
    field: "alt",
    questionText: "What is the maximum engagement altitude for this system (thousands ft)",
    generator: createMultipleChoice
  },
  {
    field: "guidance",
    questionText: "What type of guidance does this system use",
    generator: createMultipleChoice
  },
  {
    field: "radarName",
    questionText: "What type of radar is associated with this system",
    generator: createMultipleChoice
  },
  {
    field: "missileDefense",
    questionText: "Is this system capable of or designated for missile defense",
    generator: createBoolean
  }
];

const createConfetti = () => {
  const myCanvas = document.getElementById('confettiCanvas') as HTMLCanvasElement;
  return confetti.create(myCanvas, {
    resize : true
  });
}

const getAllOptions = () => {
  const allOptions: AllAnswerOptions = {
    natoNum: [],
    natoName: [],
    range: [],
    alt: [],
    guidance: [],
    radarName: [],
    missileDefense: [],
    additionalInformation: [],
  };
  SamSystems.forEach(sam => {
    Object.keys(allOptions).forEach((key: string) => {
      const list = allOptions[key as keyof AllAnswerOptions];
      const value = sam[key as keyof SAM];
      if(list.indexOf(value as never) === -1) {
        list.push(value as never)
      }
    })
  });
  return allOptions;
}

export const SamQuiz = () => {
  const allOptions = getAllOptions();
  const [questionIndex, setQuestionIndex] = useState(0);
  
  const myConfetti = createConfetti();
  const answerCallback = (result: boolean, action = "answer") => {
    if (action === "continue") {
      setQuestionIndex(questionIndex + 1);
    } else if (result) {
      myConfetti()
    }
  };

  const questionsList: Array<{system: SAM, question: MultipleChoiceQuestion}> = [];
  SamSystems.forEach(sam => {
    questionMap.forEach(({field, questionText, generator}) => {
      questionsList.push({system: sam, question: generator(sam, field as keyof SAM, questionText, allOptions)})
    })
  });
  const shuffled = questionsList.sort(() => 0.5 - Math.random());

  const allQuestionCards = shuffled.map(({system, question}, index) => 
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
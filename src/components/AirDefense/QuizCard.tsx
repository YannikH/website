import { AppBar, Box, Button, ButtonGroup, Card, CardContent, CardMedia, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { SAM, SamSystems } from "./SamSystems";
import { useState } from "react";
import { MultipleChoiceQuestion, Question } from "./Quiz";
import styled from 'styled-components'

type QuestionProps = {question: Question, answerCallback: (result: boolean) => void, answered: boolean, setAnswered: React.Dispatch<boolean>};

const NumberQuestionDisplay = ({question, answerCallback, answered, setAnswered}: QuestionProps) => {
  const [number, setNumber] = useState("");
  return (
    <>
      <Typography variant="h6">{question.question}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Box m={1}><TextField type="number" onChange={event => setNumber(event.target.value)} size="small" style={{width: "100px"}}/></Box>
        <Box m={1}><Button style={{ height: "40px" }} variant="contained" onClick={() => answerCallback(question.answerFn(number.toString(), question))}>Submit</Button></Box>
      </Box>
    </>
  );
};

const AnswerButton = ({option, question, answerCallback, answered, setAnswered}: QuestionProps & {option: string}) => {
  if (!answered) {
    return (<Button onClick={() => {
      setAnswered(true)
      answerCallback(question.answerFn(option, question))}
    }>{option}</Button>);
  } else {
    const buttonColor = (question.answerFn(option, question)) ? "success" : "warning";
    return (<Button variant="contained" color={buttonColor}>{option}</Button>)
  };
};

const MultipleChoiceQuestionDisplay = ({question, answerCallback, answered, setAnswered}: QuestionProps) => {
  return (
    <>
      <Typography variant="h6">{question.question}</Typography>
      <ButtonGroup style={{ width: "100%" }} orientation="vertical">
        {(question as MultipleChoiceQuestion).options.map(option => 
          <AnswerButton key={option} option={option} {...{question, answered, answerCallback, setAnswered}}></AnswerButton>
        )}
      </ButtonGroup>
    </>
  );
};

export const QuestionDisplay = ({question, answerCallback, answered, setAnswered}: QuestionProps) => {
  switch (question.type) {
    case "number": return <NumberQuestionDisplay {...{question, answered, answerCallback, setAnswered}}/>
    case "multipleChoice": return <MultipleChoiceQuestionDisplay {...{question, answered, answerCallback, setAnswered}}/>
  }
};

export const QuizCardContainer = styled.div`
  position:relative;
  height: 100%;
  width: 100%;
`;

export const QuizCardWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

type QuizCardProps = {question: Question, system:SAM, answerCallback: (result:boolean, action?: string) => void};

export const QuizCard: React.FC<QuizCardProps> = ({system, question, answerCallback}: QuizCardProps) => {
  const [answered, setAnswered] = useState(false);
  return (
    <Box m={2}>
      <Card>
        <CardMedia
          component="img"
          image={system.image}
        />
        <CardContent>
          <QuestionDisplay {...{question, answered, answerCallback, setAnswered}} />
          { answered ? <Box mt={2}>
            <Button variant="contained" style={{ width: "100%" }} onClick={() => answerCallback(false, "continue")}>Continue</Button>
          </Box> : <></>}
        </CardContent>
      </Card>
    </Box>
  );
};
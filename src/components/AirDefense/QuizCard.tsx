import { AppBar, Box, Button, ButtonGroup, Card, CardContent, CardMedia, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { SAM, SamSystems } from "./SamSystems";
import { useState } from "react";
import { MultipleChoiceQuestion, Question } from "./Quiz";
import styled from 'styled-components'


const NumberQuestionDisplay = ({question, answerCallback}: {question: Question, answerCallback: (result: boolean) => void}) => {
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

const MultipleChoiceQuestionDisplay = ({question, answerCallback}: {question: MultipleChoiceQuestion, answerCallback: (result: boolean) => void}) => {
  return (
    <>
      <Typography variant="h6">{question.question}</Typography>
      <ButtonGroup style={{ width: "100%" }} orientation="vertical">
        {question.options.map(option => <Button key={option} onClick={() => answerCallback(question.answerFn(option, question))}>{option}</Button>)}
      </ButtonGroup>
    </>
  );
};

export const QuestionDisplay = ({question, answerCallback}: {question: Question, answerCallback: (result: boolean) => void}) => {
  switch (question.type) {
    case "number": return <NumberQuestionDisplay question={question} answerCallback={answerCallback}/>
    case "multipleChoice": return <MultipleChoiceQuestionDisplay question={question as MultipleChoiceQuestion} answerCallback={answerCallback} />
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

type QuizCardProps = {question: Question, system:SAM, answerCallback: (result:boolean) => void};

export const QuizCard: React.FC<QuizCardProps> = ({system, question, answerCallback}: QuizCardProps) => {
  return (
    <Box m={2}>
      <Card>
        <CardMedia
          component="img"
          image={system.image}
        />
        <CardContent>
          <QuestionDisplay {...{question}} answerCallback={answerCallback}/>
        </CardContent>
      </Card>
    </Box>
  );
};
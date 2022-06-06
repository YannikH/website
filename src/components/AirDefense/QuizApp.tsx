import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, ButtonGroup, Card, CardContent, CardMedia, TextField, Toolbar, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Quiz } from "./Quiz";
import { useState } from "react";
import styled from "styled-components";
import { samCapabilities, samQuizConfiguration, samRanges, samRecognition } from "./SamQuizConfiguration";
import { QuizConfiguration, System } from "./types";
import { spaaQuizConfiguration } from "./SPAAQuizConfiguration";
import QuizListItem from "./QuizListItem";
import { ViewList } from "@mui/icons-material";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { Link } from 'react-router-dom';

export type AnswerFunction = (answer: string, question: Question) => boolean;
export type QuestionBase = {
  type: "number" | "multipleChoice";
  question: string;
  answer: string;
}

export type NumberQuestion = QuestionBase & {type: "number"};
export type MultipleChoiceQuestion = QuestionBase & {
  type: "multipleChoice";
  options: Array<string>;
};

export type Question = NumberQuestion | MultipleChoiceQuestion;

const ConfettiCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  pointer-events: none;
`;

const QuizSelector = ({availableQuizzes, openQuiz}: {availableQuizzes: QuizConfiguration[]; openQuiz: (quiz: QuizConfiguration, number: number) => void}) => {
  const quizlist = availableQuizzes.map(quiz => <QuizListItem {...{quiz, openQuiz}} key={quiz.title}/>);
  return <Box style={{ height: "100%" }}>{ quizlist}</Box>
};

const QuizApp: React.FC = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizConfiguration>();

  const availableQuizzes = [samRecognition, samCapabilities, samRanges, spaaQuizConfiguration];

  const [bottomNavigationValue, setBottomNavigationValue] = useState(0);
  const [newQuiz, setNewQuiz] = useState(true);
  const openQuiz = (quiz: QuizConfiguration, quizLength: number) => {
    quiz.length = quizLength;
    setNewQuiz(true)
    setSelectedQuiz(quiz)
    setBottomNavigationValue(1)
  };
  const scrollableRef = useRef<HTMLElement>(null)
  return (
    <Box style={{ height: "100%", position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <ConfettiCanvas id={'confettiCanvas'}/>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Air Defense Quizzes
          </Typography>
        </Toolbar>
      </AppBar>
      <Box ref={scrollableRef} sx={{ flexGrow: '1', display: 'flex', flexDirection: "column", justifyContent: 'space-around', overflow: 'scroll', overflowX: 'hidden'}}>
        { (selectedQuiz && bottomNavigationValue > 0) ? 
          <Quiz quizConfiguration={selectedQuiz} newQuiz={newQuiz} setNewQuiz={setNewQuiz} scrollableRef={scrollableRef} /> :
          <QuizSelector {...{availableQuizzes, openQuiz}}/>
        }
      </Box>
      <BottomNavigation
        showLabels
        value={bottomNavigationValue}
        onChange={(_, newValue) => {
          setBottomNavigationValue(newValue);
        }}>
        <BottomNavigationAction label="Quizzes" icon={<ViewList />} />
        <BottomNavigationAction label="Current Quiz" icon={<LibraryAddCheckIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default QuizApp
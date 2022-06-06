import { AppBar, Box, Button, ButtonGroup, Card, CardContent, CardMedia, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { SAM, SamQuiz, SamSystems } from "./SamSystems";
import { useState } from "react";
import styled from "styled-components";

export type AnswerFunction = (answer: string, question: Question) => boolean;
export type QuestionBase = {
  type: "number" | "multipleChoice";
  question: string;
  answerFn: AnswerFunction;
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
const Quiz: React.FC = () => (
  <Box style={{ height: "100%" }}>
    <ConfettiCanvas id={'confettiCanvas'}/>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Air Defense Recognition
        </Typography>
      </Toolbar>
    </AppBar>
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'space-around', height: '100%' }}>
      <SamQuiz/>
    </Box>
  </Box>
);

export default Quiz
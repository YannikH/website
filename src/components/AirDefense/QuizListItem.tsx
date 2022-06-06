import { Box, Card, CardMedia, CardContent, Button, Typography } from "@mui/material";
import React from "react";
import { QuizConfiguration } from "./types";

const QuizListItem = ({quiz, openQuiz}: {quiz: QuizConfiguration; openQuiz: (quiz: QuizConfiguration, number: number) => void}) => (
  <Box m={2}>
    <Card>
      <CardMedia
        component="img"
        image={quiz.image}
      />
      <CardContent>
        <Typography variant="h6">{quiz.title}</Typography>
        <Typography>{quiz.description}</Typography>
        <Box style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
          <Button variant="contained" onClick={() => openQuiz(quiz,15)}>15 Questions</Button>
          <Button variant="contained" onClick={() => openQuiz(quiz,-1)}>All questions</Button>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default QuizListItem
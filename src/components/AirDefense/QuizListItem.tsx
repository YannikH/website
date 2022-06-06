import { Box, Card, CardMedia, CardContent, Button, Typography } from "@mui/material";
import React from "react";
import { QuizConfiguration } from "./types";

const QuizListItem = ({quiz, openQuiz}: {quiz: QuizConfiguration; openQuiz: (quiz: QuizConfiguration) => void}) => (
  <Box m={2}>
    <Card>
      <CardMedia
        component="img"
        image={quiz.image}
      />
      <CardContent>
        <Typography variant="h6">{quiz.title}</Typography>
        <Typography>{quiz.description}</Typography>
        <Button onClick={() => openQuiz(quiz)}>Start quiz</Button>
      </CardContent>
    </Card>
  </Box>
);

export default QuizListItem
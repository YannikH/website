import { AppBar, Box, Button, Card, CardContent, CardMedia, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { SAM, SamSystems } from "./SamSystems";

const QuizCard = (system: SAM) => {
  const question = (
      <>
        <Typography variant="h6">What is the NATO designation for this SAM system?</Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', width: '100%' }}>
          <Box m={1}><Typography variant="h4">SA</Typography></Box>
          <Box m={1}><TextField type="number" size="small" style={{width: "60px"}}/></Box>
          <Box m={1}><Button style={{ height: "40px" }} variant="contained">Submit</Button></Box>
        </Box>
      </>
    )
  return (
    <Box m={2}>
      <Card>
        <CardMedia
          component="img"
          image={system.image}
        />
        <CardContent>
          {question}
        </CardContent>
      </Card>
    </Box>
  );
};

const Quiz: React.FC = () => (
  <Box style={{ height: "100%" }}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Air Defense Recognition
        </Typography>
      </Toolbar>
    </AppBar>
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'space-around', height: '100%' }}>
      <QuizCard {...(SamSystems[0])}></QuizCard>
    </Box>
  </Box>
);

export default Quiz
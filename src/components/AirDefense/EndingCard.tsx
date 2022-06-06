import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { green, orange, red } from "@mui/material/colors";
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';

const EndingCard = ({index, total, correct}: {index: number, total: number, correct: number}) => {
  let color: string = green[500];
  let Icon = CheckIcon;
  let text = "Great job!";
  if (correct / total < 0.6) {
    color = orange[500];
    Icon = InfoIcon;
    text = "Not bad!";
  }
  if (correct / total < 0.3) {
    color = red[500];
    Icon = CancelIcon;
    text = "Time for some more practice";
  }
  return (<Box m={2} style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
    <Card style={{ backgroundColor: color, color: 'white', flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
      <CardContent style={{flexGrow: '1', display: 'flex', flexDirection: 'column'}}>
        <Box style={{ textAlign: 'center', flexGrow: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h1"><Icon fontSize="inherit"/></Typography>
          <Typography variant="h4">You got</Typography>
          <Typography variant="h4">{correct} out of {total}</Typography>
          <Typography variant="h4">questions right</Typography>
          <Box m={3}></Box>
          <Typography variant="h4">{text}</Typography>
        </Box>
      </CardContent>
    </Card>
  </Box>)
};

export default EndingCard
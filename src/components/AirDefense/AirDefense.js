import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { DeviceFrameset, DeviceSelector } from "react-device-frameset";
import { Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";

const QuizWrapped = () => (
  <DeviceSelector>
  { props => 
    <DeviceFrameset {...props}>
      <Quiz/>
    </DeviceFrameset>
  }
</DeviceSelector>
);

const AirDefense = () => {
  return (
    <Routes>
      <Route path="/" element={<Quiz/>}></Route>
      <Route path="/devices" element={<QuizWrapped/>}></Route>
    </Routes>
  )
};

export default AirDefense
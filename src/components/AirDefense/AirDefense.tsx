import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { DeviceEmulator, DeviceFrameset, DeviceSelector } from "react-device-frameset";
import { Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";

const QuizWrapped = () => (
  <DeviceFrameset device="Nexus 5">
    <Quiz/>
  </DeviceFrameset>
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
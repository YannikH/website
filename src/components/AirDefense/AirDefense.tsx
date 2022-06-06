import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { DeviceEmulator, DeviceFrameset, DeviceSelector } from "react-device-frameset";
import { Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";

const QuizTest = () => (
  <>
    <DeviceFrameset device="Nexus 5">
      <Quiz/>
    </DeviceFrameset>
  </>
);

const AirDefense = () => {
  return (
    <Routes>
      <Route path="/" element={<Quiz/>}></Route>
      <Route path="/devices" element={<QuizTest/>}></Route>
    </Routes>
  )
};

export default AirDefense
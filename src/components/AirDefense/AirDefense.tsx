import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { DeviceEmulator, DeviceFrameset, DeviceSelector } from "react-device-frameset";
import { Route, Routes } from "react-router-dom";
import QuizApp from "./QuizApp";

const QuizTest = () => (
  <>
    <DeviceFrameset device="iPhone X">
      <QuizApp/>
    </DeviceFrameset>
  </>
);

const AirDefense = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizApp/>}></Route>
      <Route path="/devices" element={<QuizTest/>}></Route>
    </Routes>
  )
};

export default AirDefense
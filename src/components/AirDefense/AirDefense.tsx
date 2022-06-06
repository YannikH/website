import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { DeviceEmulator, DeviceFrameset, DeviceSelector } from "react-device-frameset";
import { Route, Routes } from "react-router-dom";
import QuizApp from "./QuizApp";

const MobileWrapped = () => (
  <>
    <MobileView style={{height: '100%'}}>
      <QuizApp/>
    </MobileView>
    <BrowserView>
      <Box m={5}>
        <Typography variant="h1" align="center">Air Defense Recognition</Typography>
        <Typography variant="h6" align="center">This webpage is intended to be opened on mobile devices</Typography>
        <Typography variant="h6" align="center">Open this page on your mobile phone for a better experience</Typography>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <DeviceFrameset device="iPhone 8 Plus" color="black">
          <QuizApp/>
        </DeviceFrameset>
      </Box>
    </BrowserView>
  </>
)

const QuizTest = () => (
  <>
    <DeviceFrameset device="iPhone X">
      <QuizApp/>
    </DeviceFrameset>
  </>
);

const AirDefense = () => {
  document.title = "Air Defense Quizzes"
  return (
    <Routes>
      <Route path="/" element={<MobileWrapped/>}></Route>
      <Route path="/devices" element={<QuizTest/>}></Route>
    </Routes>
  )
};

export default AirDefense
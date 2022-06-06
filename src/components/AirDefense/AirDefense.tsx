import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { DeviceEmulator, DeviceFrameset, DeviceSelector } from "react-device-frameset";
import { Route, Routes } from "react-router-dom";
import QuizApp from "./QuizApp";

const MobileWrapped = () => (
  <>
    <MobileView>
      <QuizApp/>
    </MobileView>
    <BrowserView>
      <DeviceFrameset device="iPhone 8 Plus" color="black">
        <QuizApp/>
      </DeviceFrameset>
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
  return (
    <Routes>
      <Route path="/" element={<MobileWrapped/>}></Route>
      <Route path="/devices" element={<QuizTest/>}></Route>
    </Routes>
  )
};

export default AirDefense
import './App.css';
import WorkInProgress from './components/WorkInProgress/WorkInProgress'
import Blog from './components/Blog/Blog'
import MobileApp from './components/MobileApp/MobileApp'
import AirDefense from './components/AirDefense/AirDefense'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'


function App() {
  let HomeComponent = WorkInProgress;
  switch (window.location.host.split('.')[0]) {
    case "app": HomeComponent = MobileApp; break;
    case "quiz": HomeComponent = AirDefense; break;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        {/* <Route path="/blog/*" element={<Blog/>}></Route> */}
        <Route path="/mobile/*" element={<MobileApp/>}></Route>
        <Route path="/airdefense/*" element={<AirDefense/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

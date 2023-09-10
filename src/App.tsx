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
import Helmet from 'react-helmet';
import Notes from './components/Blog/Notes';
import Landing from './components/Portfolio/Landing';
import Card from './components/Portfolio/Card';


function App() {
  let HomeComponent = WorkInProgress;
  switch (window.location.host.split('.')[0]) {
    case "app": HomeComponent = MobileApp; break;
    case "quiz": HomeComponent = AirDefense; break;
  }
  return (
    <>
      <Helmet>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/card" element={<Card/>}></Route>
          <Route path="/blog/*" element={<Blog/>}></Route>
          <Route path="/mobile/*" element={<MobileApp/>}></Route>
          <Route path="/airdefense/*" element={<AirDefense/>}></Route>
          <Route path="/notes/*" element={<Notes/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

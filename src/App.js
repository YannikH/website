import logo from './logo.svg';
import './App.css';
import WorkInProgress from './components/WorkInProgress/WorkInProgress'
import MarkDownDemo from './components/Util/MarkDownDemo'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkInProgress/>}></Route>
        <Route path="/progress" element={<WorkInProgress/>}></Route>
        <Route path="/markdown" element={<MarkDownDemo/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

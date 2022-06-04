import logo from './logo.svg';
import './App.css';
import WorkInProgress from './components/WorkInProgress/WorkInProgress'
import Blog from './components/Blog/Blog'
import Article from './components/Blog/Article'
import NotFound from './components/Blog/NotFound'
import MarkDownDemo from './components/Util/MarkDownDemo'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#cfd8dc',
      dark: '#9ea7aa',
      contrastText: '#000000',
    },
    secondary: {
      light: '#b2fab4',
      main: '#81c784',
      dark: '#519657',
      contrastText: '#000000',
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<WorkInProgress/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/blog/404" element={<NotFound/>}></Route>
          <Route path="/blog/:articleId" element={<Article/>}></Route>
          <Route path="/markdown" element={<MarkDownDemo/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

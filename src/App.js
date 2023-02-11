
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          </Route>  
          </Routes>
    </Router>
    </>
  );
}

export default App;

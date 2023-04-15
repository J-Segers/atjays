import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="app-container">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/aboutme"} element={<About />} />
          <Route path={"/projects"} element={<Projects />} />
        </Routes>
    </div>
  );
}

export default App;

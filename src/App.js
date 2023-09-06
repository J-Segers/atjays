import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import { Route, Routes } from "react-router-dom";
import PersonalProject from './pages/personalProject/PersonalProject';

function App() {
  return (
    <div id="app-container">
      <Routes>
        <Route exact path={"/atjays"} element={<Home />} />
        <Route path={"/atjays/aboutme"} element={<About />} />
        <Route path={"/atjays/projects"} element={<Projects />} />
        <Route path={"/atjays/personal-project"} element={<PersonalProject />} />
      </Routes>
    </div>
  );
}

export default App;

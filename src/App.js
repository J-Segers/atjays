import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Footer from './components/footer/Footer';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="app-container">
      <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/aboutme"} element={<About />} />
          <Route path={"/projects"} element={<Projects />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

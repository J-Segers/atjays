import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home';
import About from './pages/About';
import Projects from './pages/projects';
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

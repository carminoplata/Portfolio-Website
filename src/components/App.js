import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Preloader from "./preloader/Preloader";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
//import About from "./about/about";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";
import Resume from "./resume/ResumeNew";
import { ThemeContext } from "../Context/theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import styles from '../styles/App.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [{ themename }] = React.useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${themename} app`}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
      </div>
    </div>
  )
 /* return (
    <div className={`${themename} app`}>
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );*/
}

export default App;

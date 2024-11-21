import React, { useEffect, useState } from 'react';
import "./App.scss";

import { HashRouter as Router, Route, Routes} from "react-router-dom";

// components //
import TopNavbar from "./components/TopNavbar";
import Contact from "./components/Contact";

// pages //
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import MobileNavbar from './components/MobileNavbar';

const App: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth >= 800);

  useEffect(() => {
    if (width < 800) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width])

  return (
    <div className="App">
      {
        isMobile ?
        <TopNavbar />
        : <MobileNavbar />
      }
      <div className="LayoutEntryPoint">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work-experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
        {
          isMobile ?
          <Contact />
          : null
        }
      </div>
    </div>
  );
}

export default App;
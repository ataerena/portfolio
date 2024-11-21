import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="App">
      <TopNavbar />
      <div className="LayoutEntryPoint">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work-experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Router>
        <Contact />
      </div>
    </div>
  );
}

export default App;
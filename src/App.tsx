import React from 'react';
import "./App.scss";

import { HashRouter as Router, Route, Routes} from "react-router-dom";

// components //
import TopNavbar from './components/TopNavbar';

// pages //
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
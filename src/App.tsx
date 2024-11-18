import React from 'react';
import "./App.scss";

import { HashRouter as Router, Route, Routes} from "react-router-dom";

// components //
import TopNavbar from './components/TopNavbar';

// pages //
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
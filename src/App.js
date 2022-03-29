import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PublicSpeaking from "./pages/PublicSpeaking";
import Books from "./pages/Books";
import Community from "./pages/Community";
import Websites from "./pages/Websites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/speaking" element={<PublicSpeaking />} />
        <Route path="/books" element={<Books />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;

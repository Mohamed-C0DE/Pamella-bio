import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PublicSpeaking from "./pages/PublicSpeaking";
import Books from "./pages/Books";
import Community from "./pages/Community";
import Commercial from "./pages/Commercial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/speaking" element={<PublicSpeaking />} />
        <Route path="/books" element={<Books />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Resources from "./pages/Resources";
import CrisisSupport from "./pages/CrisisSupport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/crisis-support" element={<CrisisSupport />} />
      </Routes>
    </Router>
  );
}

export default App;

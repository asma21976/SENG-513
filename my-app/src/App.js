import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Signup from "./pages/signup";
import Verify from "./pages/verify";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verify />} />

    </Routes>
  );
}

export default App;

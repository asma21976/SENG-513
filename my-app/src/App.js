import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;

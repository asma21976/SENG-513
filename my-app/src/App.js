import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Signup from "./pages/signup";
import Verify from "./pages/verify";
import SignupPersonal from "./pages/signupPersonal";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/signupPersonal" element={<SignupPersonal />} />


    </Routes>
  );
}

export default App;

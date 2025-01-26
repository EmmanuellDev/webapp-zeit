import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

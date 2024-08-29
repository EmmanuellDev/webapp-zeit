// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Route */}
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* You can add a default route or a 404 page if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

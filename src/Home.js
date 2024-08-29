// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
// import './Home.css'; // Import CSS for Home component styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Welcome Message */}
      <h1>Welcome to Our Application</h1>
      <p>Start your journey with us by signing up or logging in to your account.</p>

      {/* Navigation Links */}
      <div className="button-container">
        <Link to="/sign-up" className="home-button sign-up-button">
          Sign Up
        </Link>
        <Link to="/login" className="home-button login-button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;

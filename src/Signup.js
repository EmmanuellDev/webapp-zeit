// src/components/Signup.js
import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Google Icon

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Data", formData);
    // Add your signup logic here
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
    // Add your Google signup logic here
  };

  return (
    <div className="form-container">
      {/* Sign Up Form */}
      <form onSubmit={handleSubmit} className="form">
        <h2>Create Your Account</h2>
        <p>Let's get started your journey with coding</p>

        {/* Google Signup Option */}
        <button type="button" className="google-button" onClick={handleGoogleSignup}>
          <FcGoogle className="icon" /> Continue with Google
        </button>

        {/* OR Separator */}
        <div className="separator">
          <span>-----Or-----</span>
        </div>

        {/* Name Inputs - Flex Container */}
        <div className="input-flex">
          {/* First Name Input */}
          <div className="input-container">
            <FaUser className="icon" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Last Name Input */}
          <div className="input-container">
            <FaUser className="icon" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="input-container">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Inputs - Flex Container */}
        <div className="input-flex">
          {/* Password Input */}
          <div className="input-container">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="input-container">
            <FaLock className="icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Terms of Service and Privacy Policy Text */}
        <p className="terms-text">
          By signing up, you are agreeing to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </p>

        {/* Signup Button */}
        <button type="submit" className="submit-button">
          Sign Up
        </button>

        {/* Login Link */}
        <p className="login-link">
  Already have an account? <Link to="/login">Login Here</Link>
</p>

      </form>
    </div>
  );
};

export default Signup;

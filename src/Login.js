// src/components/Login.js
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data", formData);
    // Add your login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>
      <div className="input-container">
        <FaUser className="icon" />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
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
      <button type="submit" className="submit-button">
        Login
      </button>
      <p className="login-link">
  Not yet Registered <Link to="/sign-up">Sign Up Here</Link>
</p>

    </form>
  );
};

export default Login;

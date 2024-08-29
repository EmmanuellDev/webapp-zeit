import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Eye icons

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [loginError, setLoginError] = useState(""); // State to manage login error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for email and password
    if (!formData.email || !formData.password) {
      setLoginError("Please enter both email and password.");
      return;
    }

    // Validate email format using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setLoginError("Please enter a valid email address.");
      return;
    }

    // If validation passes, clear errors
    setLoginError("");

    console.log("Login Data", formData);
    // Add your login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add your Google login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Log in to continue your journey with coding
        </p>

        {/* Google Login Option */}
        <button
          type="button"
          className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mb-4 hover:bg-gray-100"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="mr-2" /> Continue with Google
        </button>

        {/* OR Separator */}
        <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
          <span>-----Or-----</span>
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"} // Toggle input type
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {showPassword ? (
            <AiFillEye
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <AiFillEyeInvisible
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>

        {/* Display Login Error if Exists */}
        {loginError && (
          <p className="text-red-500 text-sm text-center mb-4">{loginError}</p>
        )}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Not yet Registered?{" "}
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Sign Up Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

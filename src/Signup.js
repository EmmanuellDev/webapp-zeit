import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(formData.password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a symbol."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    setPasswordError("");
    console.log("Signup Data", formData);
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create Your Account
        </h2>
        <p className="text-gray-600 text-center">
          Let's get started with your journey in coding
        </p>

        <button
          type="button"
          className="flex items-center justify-center border border-gray-300 text-gray-700 px-4 py-2 rounded-md w-full space-x-2 hover:bg-gray-100"
          onClick={handleGoogleSignup}
        >
          <FcGoogle className="text-xl" /> <span>Continue with Google</span>
        </button>

        <div className="text-center text-gray-500 my-4">
          <span>---------------Or---------------</span>
        </div>

        {/* First Name Input */}
        <div className="relative w-full">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
            placeholder="First Name"
          />
          <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            First Name
          </label>
        </div>

        {/* Last Name Input */}
        <div className="relative w-full">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
            placeholder="Last Name"
          />
          <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            Last Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative w-full">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
            placeholder="Email"
          />
          <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            Email
          </label>
        </div>

        {/* Password Input */}
        <div className="relative w-full">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
            placeholder="Password"
          />
          <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            Password
          </label>
          {showPassword ? (
            <AiFillEye
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <AiFillEyeInvisible
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="relative w-full">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
            placeholder="Confirm Password"
          />
          <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-500 duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            Confirm Password
          </label>
          {showConfirmPassword ? (
            <AiFillEye
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          ) : (
            <AiFillEyeInvisible
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            />
          )}
        </div>

        {/* Display Password Error if Exists */}
        {passwordError && (
          <p className="text-red-500 text-center text-sm">{passwordError}</p>
        )}

        <p className="text-xs text-gray-600 text-center mt-4">
          By signing up, you agree to the{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md w-full hover:bg-blue-600"
        >
          Sign Up
        </button>

        <p className="text-sm text-gray-800 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

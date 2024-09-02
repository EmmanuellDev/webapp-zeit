import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import backgroundImage from './img/imgg-3.jpg'; 
import zeitLoginImage from './img/zeit-login.jpg'; // Import the image

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setLoginError("Please enter both email and password.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setLoginError("Please enter a valid email address.");
      return;
    }

    setLoginError("");
    console.log("Login Data", formData);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      {/* Glass Effect Form Container */}
      <div className="relative max-w-2xl w-full p-6 rounded-lg shadow-md bg-white bg-opacity-20 backdrop-blur-md backdrop-saturate-150 flex">
        {/* Left Side Image */}
        <div className="hidden md:block w-2/3 pt-12">
          <img
            src={zeitLoginImage}
            alt="Login Illustration"
            className="w-96 h-96 object-cover rounded-lg border-2 p-2 border-black"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-2/3 p-6">
          <form onSubmit={handleSubmit} className="p-6">
            <h2 className="text-2xl font-semibold text-center text-black mb-2">
              Welcome Back!
            </h2>
            <p className="text-center text-black font-semibold mb-4">
              Log in to continue your journey with coding
            </p>

            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mb-4 hover:bg-gray-100"
              onClick={handleGoogleLogin}
            >
              <FcGoogle className="mr-2 font-semibold" /> Continue with Google
            </button>

            <div className="flex items-center justify-center text-black text-sm mb-4">
              <span>---------------Or---------------</span>
            </div>

            <div className="relative mb-4">
              <FaEnvelope className="absolute left-3 top-3 text-black" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 py-2 border placeholder:text-black border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
            </div>

            <div className="relative mb-4">
              <FaLock className="absolute left-3 top-3 text-black" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border placeholder:text-black border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
              {showPassword ? (
                <AiFillEye
                  className="absolute right-3 top-3 text-black cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-black cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>

            {loginError && (
              <p className="text-red-500 text-sm text-center mb-4">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-black text-white border-2 py-2 rounded-lg hover:bg-white hover:text-black hover:border-black transition-colors"
            >
              Log In
            </button>

            <p className="text-center text-sm text-black font-semibold mt-4">
              Not yet Registered?{" "}
              <Link to="/sign-up" className="text-black font-bold underline hover:underline">
                Sign Up Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

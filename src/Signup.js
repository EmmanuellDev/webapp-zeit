import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import backgroundImage from "./img/imgg-3.jpg";
import signupImage from "./img/zeit-signup.jpg";
import { auth, db, doc, setDoc, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "./firebase";

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

  const handleSubmit = async (e) => {
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

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });

      console.log("User registered successfully:", user);
    } catch (error) {
      console.error("Error during signup:", error.message);
      setPasswordError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: user.displayName.split(" ")[0],
        lastName: user.displayName.split(" ")[1] || "",
        email: user.email,
      });

      console.log("User signed in with Google:", user);
    } catch (error) {
      console.error("Error during Google signup:", error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex justify-center items-center w-3/4 max-w-4xl p-8">
        {/* Glass Effect Container */}
        <div className="flex items-center space-x-6 p-6 bg-white bg-opacity-30 backdrop-blur-md border border-gray-300 rounded-lg shadow-lg w-full max-w-4xl">
          {/* Image Section */}
          <div className="flex-shrink-0 object-scale-down w-96 h-96 flex items-center justify-center border-2 border-black p-4">
            <img
              src={signupImage}
              alt="Signup"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1">
            <h2 className="text-2xl pb-1 font-bold text-gray-800 text-center">
              Create Your Account
            </h2>
            <p className="text-black pb-1 font-semibold text-center">
              Let's get started with your journey in coding
            </p>

            <button
              type="button"
              className="flex items-center justify-center font-semibold border border-gray-300 text-black px-4 py-2 rounded-md w-full space-x-2 hover:bg-gray-100"
              onClick={handleGoogleSignup}
            >
              <FcGoogle className="text-xl " /> <span>Continue with Google</span>
            </button>

            <div className="text-center font-semibold text-black my-4">
              <span>---------------Or---------------</span>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name Input */}
              <div className="relative w-full">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
                  placeholder="First Name"
                />
                <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-black duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                  First Name
                </label>
              </div>

              {/* Last Name Input */}
              <div className="relative w-full">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
                  placeholder="Last Name"
                />
                <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-black duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Last Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative w-full">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
                  placeholder="Email"
                />
                <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-black duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Email
                </label>
              </div>

              {/* Password Input */}
              <div className="relative w-full">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
                  placeholder="Password"
                />
                <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-black duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Password
                </label>
                {showPassword ? (
                  <AiFillEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="relative w-full">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 peer placeholder-transparent"
                  placeholder="Confirm Password"
                />
                <label className="absolute left-10 top-1/2 transform -translate-y-1/2 text-black duration-300 origin-[0] bg-white px-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                  Confirm Password
                </label>
                {showConfirmPassword ? (
                  <AiFillEye
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>

              {/* Display Password Error if Exists */}
              {passwordError && (
                <p className="text-red-500 text-center text-sm">{passwordError}</p>
              )}

              <p className="text-xs text-black text-center mt-4">
                By signing up, you agree to the{" "}
                <a href="#" className="text-black underline font-semibold hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-black font-semibold underline hover:underline">
                  Privacy Policy
                </a>
                .
              </p>

              {/* Signup Button */}
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 border-white border-2 rounded-md w-full hover:bg-white hover:text-black hover:text-2px hover:border-black"
              >
                Sign Up
              </button>
            </form>

            <p className="text-black text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-black font-semibold underline hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

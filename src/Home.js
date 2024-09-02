import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

// Import the images from the src directory
import img0 from "./img/img-0.jpg";
import img1 from "./img/img-1.jpg";
import img2 from "./img/img-2.jpg";
import bgZeit from "./img/imgg-2.jpg"; // Import the background image
import codeZeit from "./img/code-zeit.jpg"; // Updated image extension to jpg

const images = [img0, img1, img2];
const texts = [
  "A revolution in learning. The evolution of you",
  "On-demand courses and bit-sized videos to fit your schedule",
  "Discover the most in-demand skills",
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleJoinNowClick = () => {
    navigate('./sign-up'); // Redirect to sign-up page
  };

  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: `url(${bgZeit})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col h-full justify-center items-center">
        {/* Main Container with Glass Effect */}
        <div className="relative flex flex-row items-center p-5 bg-white/30 backdrop-blur-md rounded-xl shadow-lg max-w-4xl w-full">
          <div className="relative flex flex-row items-center p-5 bg-gray-500/30 backdrop-blur-md rounded-xl shadow-lg max-w-4xl w-full">
            {/* Image section */}
            <div className="relative flex-shrink-0 w-1/2">
              <img
                src={images[currentImageIndex]}
                alt="Carousel"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Text Overlay */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center z-20">
                <div className="text-baskervville text-white bg-gray-900 bg-opacity-50 p-4 rounded-md w-full max-w-xs">
                  {texts[currentImageIndex]}
                </div>
              </div>
              {/* Dots Section */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? "bg-blue-500" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Button and Text Section */}
            <div className="flex flex-col items-center justify-center space-y-4 ml-auto flex-shrink-0 z-10 w-1/2">
              {/* New Image above the button */}
              <img
                src={codeZeit}
                alt="Code Zeit"
                className="max-w-full max-h-64 object-contain border-black border-2" // Ensures the image fits within the container
              />
              <p className="text-xl font-semibold text-white text-center">Let's Get Started</p>
              <button
                onClick={handleJoinNowClick} // Attach the redirection handler
                className="bg-black text-white border-2 border-white hover:bg-white hover:text-black hover:border-black py-2 px-6 rounded-md text-lg hover:bg-blue-600 transition-colors"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

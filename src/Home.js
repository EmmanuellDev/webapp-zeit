import React, { useState, useEffect } from "react";

// Import the images from the src directory
import img0 from "./img/img-0.jpg";
import img1 from "./img/img-1.jpg";
import img2 from "./img/img-2.jpg";
import bgZeit from "./img/bg-zeit.jpg"; // Import the background image

const images = [img0, img1, img2];
const texts = [
  "A revolution in learning. The evolution of you",
  "On-demand courses and bit-sized videos to fit your schedule",
  "Discover the most in-demand skills",
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-screen" style={{ backgroundImage: `url(${bgZeit})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col h-full justify-center items-center">
        {/* Main Container */}
        <div className="relative flex flex-row items-center p-5 bg-gray-100 rounded-lg shadow-lg max-w-4xl w-full">
          {/* Image section */}
          <div className="relative flex-shrink-0 w-1/2">
            <img
              src={images[currentImageIndex]}
              alt="Carousel"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Dots Section */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex
                      ? "bg-blue-500"
                      : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text Overlay */}
          <div className="flex-shrink-0 w-1/2 pl-6">
            <div className="relative flex flex-col items-start h-full justify-center">
              <div className="text-baskervville text-white bg-gray-900 bg-opacity-50 p-4 rounded-md w-full max-w-xs">
                {texts[currentImageIndex]}
              </div>
              {/* Footer Text and Button */}
              <div className="mt-6 flex flex-col items-center">
                <p className="text-xl font-semibold text-gray-700">Let's Get Started</p>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-md text-lg hover:bg-blue-600 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

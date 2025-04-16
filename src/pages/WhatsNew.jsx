import React from "react";
import { useNavigate } from "react-router-dom";

const AnnouncementCountdown = () => {
  const navigate = useNavigate();
  
  const handleWinnerClick = () => {
    navigate('/winner');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white text-gray-800">
      <div className="mb-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          <br/>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            WINNERS
          </span> Have Been Announced 🎉
        </h1>
        <p className="md:text-2xl text-lg text-gray-600 mb-8">
          <a href="#" onClick={handleWinnerClick} className="text-blue-500 hover:text-blue-700 underline font-medium">
            Click here to see who got lucky!
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementCountdown;
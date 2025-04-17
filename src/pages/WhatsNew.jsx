import React from "react";
import { useNavigate } from "react-router-dom";

const AnnouncementCountdown = () => {
  const navigate = useNavigate();

  const handleWinnerClick = () => {
    navigate("/winner");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center text-gray-800">
      <div className="mb-6">
        <h1 className="mb-8 text-4xl font-bold md:text-6xl">
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            WINNERS
          </span>{" "}
          Have Been Announced 🎉
        </h1>
        <p className="mb-8 text-lg text-gray-600 md:text-2xl">
          <a
            href="#"
            onClick={handleWinnerClick}
            className="font-medium text-blue-500 underline hover:text-blue-700"
          >
            Click here to see the winners who earned it!
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementCountdown;
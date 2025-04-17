import React, { useState, useEffect } from "react";

const SpaceCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 196,
    hours: 4,
    minutes: 38,
    seconds: 6
  });

  useEffect(() => {
    // Set target date to April 17, 2025 at 9:00 AM in WITA (UTC+8)
    const targetDate = new Date(Date.UTC(2025, 3, 17, 2, 0, 0)); 

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white text-gray-800">

      {/* Main text - moved up with extra padding-top */}
      <div className="mb-6 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          COUNTDOWN TO <br/>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            WINNERS
          </span> ANNOUNCEMENT 🚀
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          The winners will be announced on April 17th, 2025 at 09:00 AM WITA.
        </p>
      </div>
      
      {/* Timer */}
      <div className="flex justify-center w-full max-w-xl">
        {/* Days */}
        <div className="flex-1 px-2">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {timeLeft.days}
          </div>
          <div className="text-xs mt-2 text-gray-600">Days</div>
        </div>
        
        {/* Hours */}
        <div className="flex-1 px-2">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {timeLeft.hours}
          </div>
          <div className="text-xs mt-2 text-gray-600">Hours</div>
        </div>
        
        {/* Minutes */}
        <div className="flex-1 px-2">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {timeLeft.minutes}
          </div>
          <div className="text-xs mt-2 text-gray-600">Minutes</div>
        </div>
        
        {/* Seconds */}
        <div className="flex-1 px-2">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            {timeLeft.seconds}
          </div>
          <div className="text-xs mt-2 text-gray-600">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCountdown;
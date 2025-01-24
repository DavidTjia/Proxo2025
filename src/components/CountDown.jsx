// import React, { useState, useEffect } from "react";

// // Hook untuk menghitung waktu mundur
// const useCountdown = (targetDate) => {
//   const calculateTimeLeft = () => {
//     const now = new Date(); // Ambil waktu saat ini
//     const diff = targetDate.getTime() - now.getTime();
//     return {
//       total: diff,
//       days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
//       hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
//       minutes: Math.max(Math.floor((diff / 1000 / 60) % 60), 0),
//       seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft()); // Hitung ulang waktu yang tersisa
//     }, 1000);

//     return () => clearInterval(timer); // Bersihkan interval saat komponen di-unmount
//   }, [targetDate]);

//   return timeLeft;
// };

// // Komponen CountDown
// const CountDown = ({ targetDate }) => {
//   const { days, hours, minutes, seconds } = useCountdown(targetDate);

//   useEffect(() => {
//     console.log("Time Left:", { days, hours, minutes, seconds });
//   }, [days, hours, minutes, seconds]);

//   return (
//     <div>
//       <h1>Countdown</h1>
//       <p>
//         {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
//       </p>
//     </div>
//   );
// };



// export default CountDown;




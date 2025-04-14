import React, { useState, useEffect } from "react";

const AnnouncementCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 196,
    hours: 4,
    minutes: 38,
    seconds: 6
  });

  useEffect(() => {
    // Set target date to April 17, 2025 at 9:00 AM in WITA (UTC+8)
    const targetDate = new Date(Date.UTC(2025, 3, 17, 1, 0, 0)); 

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
      <div className="mb-6  ">
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

export default AnnouncementCountdown;

// import { motion } from "framer-motion";

// const PitchingSchedule = () => {
//   const [activeCategory, setActiveCategory] = useState("Business Plan");

//   // Data from the images with enhanced color schemes
//   const allTeamData = {
//     "Mobile App": {
//       title: "MOBILE APP DEVELOPMENT PITCHING STAGE",
//       subtitle: "Sunday, March 23, 2025 ( 14:00 – 17:00 WITA )",
//       color: "bg-blue-600",
//       buttonColor: "bg-blue-600",
//       headerColor: "bg-blue-500",
//       stripColor: "bg-blue-100",
//       teams: [
//         {
//           no: "1",
//           name: "Nutrilab",
//           institute: "Universitas Teknologi Bandung",
//           time: "14.15 - 14.30",
//         },
//         {
//           no: "2",
//           name: "Radverse",
//           institute: "Universitas Potensi Utama",
//           time: "14.30 - 14.45",
//         },
//         {
//           no: "3",
//           name: "Little Hope",
//           institute: "Institut Sains Dan Bisnis Atma Luhur",
//           time: "14.45 - 15.00",
//         },
//         {
//           no: "4",
//           name: "KOTLIN WIZARDS",
//           institute: "Institut Sains dan Bisnis Atma Luhur",
//           time: "15.00 - 15.15",
//         },
//         {
//           no: "5",
//           name: "Gurita aIngit",
//           institute: "Gurita Langit Technologies",
//           time: "15.15 - 15.30",
//         },
//         {
//           no: "6",
//           name: "LABKOM AL / ASLAB AL",
//           institute: "Institut Sains dan Bisnis Atma Luhur",
//           time: "15.45 - 16.00",
//         },
//         {
//           no: "7",
//           name: "FrogWare/Growell",
//           institute: "SMK Raden Umar Said",
//           time: "16.00 - 16.15",
//         },
//         {
//           no: "8",
//           name: "Ecooling",
//           institute: "AMIKOM Yogyakarta",
//           time: "16.15 - 16.30",
//         },
//         {
//           no: "9",
//           name: "PASCA SARJANA ATMA LUHUR",
//           institute: "Institut Sains dan Bisnis Atma Luhur",
//           time: "16.30 - 16.45",
//         },
//         {
//           no: "10",
//           name: "Proxo Team 4 UBG",
//           institute: "Universitas Bumigora",
//           time: "16.45 - 17.00",
//         },
//       ],
//     },
//     "Web Dev": {
//       title: "WEB DEVELOPMENT PITCHING STAGE",
//       subtitle: "Sunday, March 30, 2025 ( 09:00 – 12:00 WITA )",
//       color: "bg-indigo-600",
//       buttonColor: "bg-indigo-600",
//       headerColor: "bg-indigo-500",
//       stripColor: "bg-indigo-100",
//       teams: [
//         {
//           no: "1",
//           name: "Gyoza Geprek",
//           institute: "Universitas Brawijaya",
//           time: "09.15 - 09.30",
//         },
//         {
//           no: "2",
//           name: "Noobz",
//           institute: "Institut Sains dan Bisnis Atma Luhur",
//           time: "09.30 - 09.45",
//         },
//         {
//           no: "3",
//           name: "Altep",
//           institute: "University of Dian Nuswantoro",
//           time: "09.45 - 10.00",
//         },
//         {
//           no: "4",
//           name: "Hirejin Timur Studio",
//           institute: "Institut Teknologi dan Bisnis PalComTech",
//           time: "10.00 - 10.15",
//         },
//         {
//           no: "5",
//           name: "The Raid",
//           institute: "Universitas 'Aisyiyah Yogyakarta",
//           time: "10.15 - 10.30",
//         },
//         {
//           no: "6",
//           name: "Jaya Koding",
//           institute: "Amikom Purwokerto University",
//           time: "10.30 - 10.45",
//         },
//         {
//           no: "7",
//           name: "DIVDEV",
//           institute: "Universitas Klabat",
//           time: "10.45 -11.00",
//         },
//         {
//           no: "8",
//           name: "Proxo Team 2 UBG",
//           institute: "Bumigora university",
//           time: "11.00 - 11.15",
//         },
//         {
//           no: "9",
//           name: "Nemesa",
//           institute: "SMK IDN Boarding School",
//           time: "11.15 - 11.30",
//         },
//         {
//           no: "10",
//           name: "Tim 3 UBG",
//           institute: "Bumigora university",
//           time: "11.30 - 11.45",
//         },
//       ],
//     },
//     "Business Plan": {
//       title: "BUSINESS PLAN PITCHING STAGE",
//       subtitle: "Sunday, March 23, 2025 ( 09:00 – 12:00 WITA )",
//       color: "bg-orange-600",
//       buttonColor: "bg-orange-600",
//       headerColor: "bg-orange-500",
//       stripColor: "bg-orange-100",
//       teams: [
//         {
//           no: "1",
//           name: "EcoFire Briquettes",
//           institute: "Universitas Teknologi Bandung",
//           time: "09.15 - 09.30",
//         },
//         {
//           no: "2",
//           name: "ChrisBry",
//           institute: "Brawijaya University",
//           time: "09.30 - 09.45",
//         },
//         {
//           no: "3",
//           name: "ACC Team",
//           institute: "Ming Chi University of Technology",
//           time: "09.45 - 10.00",
//         },
//         {
//           no: "4",
//           name: "Meriff Academy",
//           institute: "STMIK AMIKOM Surakarta",
//           time: "10.00 - 10.15",
//         },
//         {
//           no: "5",
//           name: "PEDULIST",
//           institute: "Universitas Dipa Makassar",
//           time: "10.15 - 10.30",
//         },
//         {
//           no: "6",
//           name: "THE LOKABYTE",
//           institute: "STIKOM PGRI Banyuwangi",
//           time: "10.30 - 10.45",
//         },
//         {
//           no: "7",
//           name: "Nawa Cita",
//           institute: "Institut Teknologi dan Bisnis STIKOM Bali",
//           time: "10.45 -11.00",
//         },
//         {
//           no: "8",
//           name: "PENTARA TEAM",
//           institute: "ITB STIKOM BALI",
//           time: "11.00 - 11.15",
//         },
//         {
//           no: "9",
//           name: "Ecoblearn",
//           institute: "ITB STIKOM Bali",
//           time: "11.15 - 11.30",
//         },
//         {
//           no: "10",
//           name: "Oghevy",
//           institute: "Singapore Institute of Management",
//           time: "11.30 - 11.45",
//         },
//       ],
//     },
//     "Business Case": {
//       title: "BUSINESS CASE PITCHING STAGE",
//       subtitle: "Sunday, March 30, 2025 ( 14:00 – 16:25 WITA )",
//       color: "bg-green-600",
//       buttonColor: "bg-green-600",
//       headerColor: "bg-green-500",
//       stripColor: "bg-green-100",
//       teams: [
//         {
//           no: "1",
//           name: "Wabarayitefa",
//           institute: "Institut Teknologi Bandung",
//           time: "14.15 - 14.30",
//         },
//         {
//           no: "2",
//           name: "Eh tiba-tiba ikut",
//           institute: "ITB STIKOM BALI",
//           time: "14.30 - 14.45",
//         },
//         {
//           no: "3",
//           name: "WTK Team",
//           institute: "Ming Chi University of Technology",
//           time: "14.45 - 15.00",
//         },
//         {
//           no: "4",
//           name: "PROXO TEAM 7 UBG",
//           institute: "University of Bumigora",
//           time: "15.00 - 15.15",
//         },
//         {
//           no: "5",
//           name: "PalComTech Troops",
//           institute: "Institut Teknologi dan Bisnis PalComTech",
//           time: "15.15 - 15.30",
//         },
//         {
//           no: "6",
//           name: "Adventura",
//           institute: "Institut Teknologi Bandung",
//           time: "15.30 - 15.45",
//         },
//         {
//           no: "7",
//           name: "Proxo Tim 1 UBG",
//           institute: "Universitas Bumigora",
//           time: "15.45 - 16.00",
//         },
//         {
//           no: "8",
//           name: "InnovateX",
//           institute: "Universitas Klabat",
//           time: "16.00 - 16.15",
//         },
//       ],
//     },
//   };

//   // Handle category change
//   const handleCategoryChange = (category) => {
//     setActiveCategory(category);
//   };

//   return (
//     <div className="mx-auto min-h-screen max-w-6xl p-4">
//       <div className="mb-8 text-center">
//         <h1 className="mb-2 text-3xl font-bold">
//           Development Pitching Schedule
//         </h1>
//         <p className="text-gray-600">
//           Select a category to view the pitching schedule
//         </p>
//       </div>

//       <div className="mb-8">
//         <motion.div
//           key={activeCategory + "-filter"}
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ type: "spring", stiffness: 100, damping: 10 }}
//           className="flex flex-wrap justify-center gap-3"
//         >
//           {Object.keys(allTeamData).map((category) => (
//             <motion.button
//               key={category}
//               whileTap={{ scale: 0.95 }}
//               className={`rounded-lg px-6 py-3 font-bold text-white shadow-md transition ${
//                 activeCategory === category
//                   ? `${allTeamData[category].buttonColor} ring-4 ring-opacity-50 ring-${allTeamData[category].buttonColor.split("-")[1]}-300`
//                   : "bg-gray-500 hover:bg-gray-600"
//               }`}
//               onClick={() => handleCategoryChange(category)}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>
//       </div>

//       <motion.div
//         key={activeCategory + "-content"}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.5 }}
//         className="overflow-hidden rounded-xl bg-white shadow-lg"
//       >
//         <div
//           className={`${allTeamData[activeCategory].color} p-4 text-center text-white`}
//         >
//           <h2 className="text-2xl font-extrabold tracking-wide">
//             {allTeamData[activeCategory].title}
//           </h2>
//           <p className="mt-1 font-medium">
//             {allTeamData[activeCategory].subtitle}
//           </p>
//         </div>

//         <div className="overflow-x-auto p-4">
//           <table className="w-full border-collapse bg-white text-left text-sm">
//             <thead>
//               <tr
//                 className={`${allTeamData[activeCategory].headerColor} text-white`}
//               >
//                 <th className="rounded-tl-lg border px-4 py-3 font-bold">No</th>
//                 <th className="border px-4 py-3 font-bold">Team Name</th>
//                 <th className="border px-4 py-3 font-bold">Institute</th>
//                 <th className="rounded-tr-lg border px-4 py-3 text-center font-bold">
//                   Pitching Time
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {allTeamData[activeCategory].teams.map((team, index) => (
//                 <tr
//                   key={team.no}
//                   className={`hover:bg-gray-50 ${index % 2 === 0 ? allTeamData[activeCategory].stripColor : "bg-white"}`}
//                 >
//                   <td className="border px-4 py-3 font-semibold">{team.no}</td>
//                   <td className="border px-4 py-3 font-medium">{team.name}</td>
//                   <td className="border px-4 py-3">{team.institute}</td>
//                   <td className="border px-4 py-3 text-center">{team.time}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </motion.div>

//       <div className="mt-8 text-center text-gray-500">
//         <p>Updated: March 18, 2025</p>
//       </div>
//     </div>
//   );
// };

// export default PitchingSchedule;

// import React, { useState } from "react";
// import { Trophy, Medal, Award, Star } from "lucide-react";

// const Winner = () => {
//   const [hoveredRow, setHoveredRow] = useState(null);

//   const initialData = [
//     {
//       team: "Example Team 1",
//       institution: "Example University 1",
//       project: "Example Project 1",
//       rank: 1,
//       competition: "Example Competition 1",
//       icon: Trophy,
//     },
//     {
//       team: "Example Team 2",
//       institution: "Example University 2",
//       project: "Example Project 2",
//       rank: 2,
//       competition: "Example Competition 1",
//       icon: Medal,
//     },
//     {
//       team: "Example Team 3",
//       institution: "Example University 3",
//       project: "Example Project 3",
//       rank: 3,
//       competition: "Example Competition 1",
//       icon: Award,
//     },
//     {
//       team: "Example Team 4",
//       institution: "Example University 4",
//       project: "Example Project 4",
//       rank: 4,
//       competition: "Example Competition 1",
//       icon: Star,
//     },
//     {
//       team: "Example Team 5",
//       institution: "Example University 5",
//       project: "Example Project 5",
//       rank: 1,
//       competition: "Example Competition 2",
//       icon: Trophy,
//     },
//     {
//       team: "Example Team 6",
//       institution: "Example University 6",
//       project: "Example Project 6",
//       rank: 2,
//       competition: "Example Competition 2",
//       icon: Medal,
//     },
//     {
//       team: "Example Team 7",
//       institution: "Example University 7",
//       project: "Example Project 7",
//       rank: 3,
//       competition: "Example Competition 2",
//       icon: Award,
//     },
//     {
//       team: "Example Team 8",
//       institution: "Example University 8",
//       project: "Example Project 8",
//       rank: 4,
//       competition: "Example Competition 2",
//       icon: Star,
//     },
//     {
//       team: "Example Team 9",
//       institution: "Example University 9",
//       project: "Example Project 9",
//       rank: 1,
//       competition: "Example Competition 3",
//       icon: Trophy,
//     },
//     {
//       team: "Example Team 10",
//       institution: "Example University 10",
//       project: "Example Project 10",
//       rank: 2,
//       competition: "Example Competition 3",
//       icon: Medal,
//     },
//     {
//       team: "Example Team 11",
//       institution: "Example University 11",
//       project: "Example Project 11",
//       rank: 3,
//       competition: "Example Competition 3",
//       icon: Award,
//     },
//     {
//       team: "Example Team 12",
//       institution: "Example University 12",
//       project: "Example Project 12",
//       rank: 4,
//       competition: "Example Competition 3",
//       icon: Star,
//     },
//     {
//       team: "Example Team 13",
//       institution: "Example University 13",
//       project: "Example Project 13",
//       rank: 1,
//       competition: "Example Competition 4",
//       icon: Trophy,
//     },
//     {
//       team: "Example Team 14",
//       institution: "Example University 14",
//       project: "Example Project 14",
//       rank: 2,
//       competition: "Example Competition 4",
//       icon: Medal,
//     },
//     {
//       team: "Example Team 15",
//       institution: "Example University 15",
//       project: "Example Project 15",
//       rank: 3,
//       competition: "Example Competition 4",
//       icon: Award,
//     },
//     {
//       team: "Example Team 16",
//       institution: "Example University 16",
//       project: "Example Project 16",
//       rank: 4,
//       competition: "Example Competition 4",
//       icon: Star,
//     },
//     {
//       team: "Example Team 17",
//       institution: "Example University 17",
//       project: "Example Project 17",
//       rank: 1,
//       competition: "Example Competition 5",
//       icon: Trophy,
//     },
//     {
//       team: "Example Team 18",
//       institution: "Example University 18",
//       project: "Example Project 18",
//       rank: 2,
//       competition: "Example Competition 5",
//       icon: Medal,
//     },
//     {
//       team: "Example Team 19",
//       institution: "Example University 19",
//       project: "Example Project 19",
//       rank: 3,
//       competition: "Example Competition 5",
//       icon: Award,
//     },
//     {
//       team: "Example Team 20",
//       institution: "Klabat University",
//       project: "Example Project 20",
//       rank: 4,
//       competition: "Example Competition 5",
//       icon: Star,
//     },
//   ];

//   const competitionTypes = [
//     "Example Competition 1",
//     "Example Competition 2",
//     "Example Competition 3",
//     "Example Competition 4",
//     "Example Competition 5",
//   ];

//   const getRankStyles = (rank) => {
//     const styles = {
//       1: {
//         badge:
//           "bg-gradient-to-r from-fuchsia-400 to-pink-400 shadow-pink-200/50",
//         text: "text-pink-900",
//         glow: "shadow-lg shadow-pink-200/50",
//       },
//       2: {
//         badge:
//           "bg-gradient-to-r from-purple-400 to-fuchsia-400 shadow-purple-200/50",
//         text: "text-purple-900",
//         glow: "shadow-lg shadow-purple-200/50",
//       },
//       3: {
//         badge:
//           "bg-gradient-to-r from-violet-400 to-purple-400 shadow-violet-200/50",
//         text: "text-violet-900",
//         glow: "shadow-lg shadow-violet-200/50",
//       },
//       4: {
//         badge:
//           "bg-gradient-to-r from-pink-400 to-violet-400 shadow-pink-200/50",
//         text: "text-pink-900",
//         glow: "shadow-lg shadow-pink-200/50",
//       },
//     };
//     return styles[rank] || styles[4];
//   };

//   const renderTable = (competition) => {
//     const data = initialData.filter((item) => item.competition === competition);
//     return (
//       <div className="mb-8 rounded-2xl bg-white p-1 shadow-xl">
//         <div className="overflow-hidden rounded-xl">
//           {/* Table Header */}
//           <div className="bg-gradient-to-r from-fuchsia-600 via-pink-500 to-purple-500">
//             <div className="p-6 pb-2 text-center">
//               <h1 className="text-3xl font-bold text-white">{competition}</h1>
//             </div>
//             <div className="p-6 pt-4">
//               <div className="grid grid-cols-4 gap-4">
//                 <div className="text-lg font-semibold text-white">Team</div>
//                 <div className="text-lg font-semibold text-white">
//                   Institution
//                 </div>
//                 <div className="text-lg font-semibold text-white">
//                   Project Title
//                 </div>
//                 <div className="text-right text-lg font-semibold text-white">
//                   Rank
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Table Body */}
//           <div className="divide-y divide-pink-100">
//             {data.length > 0 ? (
//               data.map((item, index) => {
//                 const rankStyle = getRankStyles(item.rank);
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={index}
//                     className={`grid grid-cols-4 gap-4 p-6 transition-all duration-300 ease-in-out ${hoveredRow === index ? "scale-[1.01] bg-fuchsia-50/50" : "bg-white"}`}
//                     onMouseEnter={() => setHoveredRow(index)}
//                     onMouseLeave={() => setHoveredRow(null)}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <span className="font-medium text-gray-900">
//                         {item.team}
//                       </span>
//                     </div>
//                     <div className="text-gray-600">{item.institution}</div>
//                     <div className="font-medium text-fuchsia-600">
//                       {item.project}
//                     </div>
//                     <div className="flex items-center justify-end space-x-2">
//                       <div
//                         className={`flex h-12 w-12 items-center justify-center rounded-full ${rankStyle.badge} transition-all duration-300 ease-in-out ${hoveredRow === index ? rankStyle.glow : ""}`}
//                       >
//                         <Icon className={`h-6 w-6 ${rankStyle.text}`} />
//                       </div>
//                       <span className={`text-2xl font-bold ${rankStyle.text}`}>
//                         {item.rank}
//                       </span>
//                     </div>
//                   </div>
//                 );
//               })
//             ) : (
//               <div className="p-8 text-center text-gray-500">
//                 No results found.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-50 p-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Render each competition table */}
//         {competitionTypes.map((competition, index) => renderTable(competition))}
//       </div>
//     </div>
//   );
// };

// export default Winner;
import React from "react";

function Winner() {
  return (
    <div className="flex h-[86vh] items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold md:text-6xl">Coming Soon</h1>
        <p className="mt-4 text-lg text-gray-600 md:text-2xl">
          Stay tuned! Exciting updates are on the way.
        </p>
      </div>
    </div>
  );
}

export default Winner;

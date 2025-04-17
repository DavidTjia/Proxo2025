import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementCountdown = () => {
  const [activeCategory, setActiveCategory] = useState("Business Plan");

  // Modified data structure with university information
  const allTeamData = {
    "Business Plan": {
      title: "BUSINESS PLAN WINNERS",
      subtitle: "Competition Results",
      color: "bg-orange-600",
      buttonColor: "bg-orange-600",
      headerColor: "bg-orange-500",
      stripColor: "bg-orange-100",
      teams: [
        {
          no: "1",
          category: "Winner 1st Place 🥇",
          team: "Nawa Cita",
          institute: "Institut Teknologi dan Bisnis STIKOM Bali",
        },
        {
          no: "2",
          category: "Winner 2nd Place 🥈",
          team: "ChrisBy",
          institute: "Brawijaya University",
        },
        {
          no: "3",
          category: "Winner 3rd Place 🥉",
          team: "PENTARA TEAM",
          institute: "ITB STIKOM BALI",
        },
        {
          no: "4",
          category: "Best Innovation",
          team: "ACC Team",
          institute: "Ming Chi University of Technology",
        },
        {
          no: "5",
          category: "Best Presentation",
          team: "Pioneer Impact",
          institute: "Universitas Klabat",
        },
      ],
    },
    "Business Case": {
      title: "BUSINESS CASE WINNERS",
      subtitle: "Competition Results",
      color: "bg-green-600",
      buttonColor: "bg-green-600",
      headerColor: "bg-green-500",
      stripColor: "bg-green-100",
      teams: [
        {
          no: "1",
          category: "Winner 1st Place 🥇",
          team: "Vyaparavijeta",
          institute: "Institut Teknologi Bandung",
        },
        {
          no: "2",
          category: "Winner 2nd Place 🥈",
          team: "WTK Team",
          institute: "Ming Chi University of Technology",
        },
        {
          no: "3",
          category: "Winner 3rd Place 🥉",
          team: "Adventura",
          institute: "Institut Teknologi Bandung",
        },
        {
          no: "4",
          category: "Best Problem Solving",
          team: "InnovateX",
          institute: "Universitas Klabat",
        },
        {
          no: "5",
          category: "Best Innovation",
          team: "PalComTech Troops",
          institute: "Institut Teknologi dan Bisnis PalComTech",
        },
      ],
    },
    "Mobile App": {
      title: "MOBILE APP DEVELOPMENT WINNERS",
      subtitle: "Competition Results",
      color: "bg-blue-600",
      buttonColor: "bg-blue-600",
      headerColor: "bg-blue-500",
      stripColor: "bg-blue-100",
      teams: [
        {
          no: "1",
          category: "Winner 1st Place 🥇",
          team: "Gurita Langit",
          institute: "Gurita Langit Technologies",
        },
        {
          no: "2",
          category: "Winner 2nd Place 🥈",
          team: "GenSmart",
          institute: "Universitas Dipa Makassar",
        },
        {
          no: "3",
          category: "Winner 3rd Place 🥉",
          team: "PASCA SARJANA ATMA LUHUR",
          institute: "Institut Sains dan Bisnis Atma Luhur",
        },
        {
          no: "4",
          category: "Most Impactful App",
          team: "KOTLIN WIZARDS",
          institute: "Institut Sains dan Bisnis Atma Luhur",
        },
        {
          no: "5",
          category: "Best UI/UX Design",
          team: "Nutrilab",
          institute: "Universitas Teknologi Bandung",
        },
      ],
    },
    "Web Dev": {
      title: "WEB DEVELOPMENT WINNERS",
      subtitle: "Competition Results",
      color: "bg-indigo-600",
      buttonColor: "bg-indigo-600",
      headerColor: "bg-indigo-500",
      stripColor: "bg-indigo-100",
      teams: [
        {
          no: "1",
          category: "Winner 1st Place 🥇",
          team: "Proxo Team 2 UBG",
          institute: "Bumigora university",
        },
        {
          no: "2",
          category: "Winner 2nd Place 🥈",
          team: "Jaya Coding",
          institute: "Amikom Purwokerto University",
        },
        {
          no: "3",
          category: "Winner 3rd Place 🥉",
          team: "Namesa",
          institute: "SMK IDN Boarding School",
        },
        {
          no: "4",
          category: "Best Functionality",
          team: "Tim 3 UBG",
          institute: "Bumigora university",
        },
        {
          no: "5",
          category: "Best UI/UX Design",
          team: "Altep",
          institute: "University of Dian Nuswantoro",
        },
      ],
    },
    "Short Movie": {
      title: "SHORT MOVIE WINNERS",
      subtitle: "Competition Results",
      color: "bg-purple-600",
      buttonColor: "bg-purple-600",
      headerColor: "bg-purple-500",
      stripColor: "bg-purple-100",
      teams: [
        {
          no: "1",
          category: "Winner 1st Place 🥇",
          team: "Taxsyn Bercerita",
          institute: "ITB STIKOM Bali",
        },
        {
          no: "2",
          category: "Winner 2nd Place 🥈",
          team: "UKM HIMATOGRAPHY",
          institute: "ITB STIKOM Bali",
        },
        {
          no: "3",
          category: "Winner 3rd Place 🥉",
          team: "TRISPERA",
          institute: "ITB STIKOM Bali",
        },
        {
          no: "4",
          category: "Best Storyline",
          team: "Cinecomtech",
          institute: "Institut Teknologi dan Bisnis Palcomtech",
        },
        {
          no: "5",
          category: "Best Cinematography",
          team: "Pisang Telor",
          institute: "Universitas Brawijaya",
        },
      ],
    },
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Tailwind utility class for ring effect based on category
  const getRingClass = (category) => {
    const baseColor = allTeamData[category].buttonColor.split("-")[1];
    return `ring-4 ring-opacity-50 ring-${baseColor}-300`;
  };

  return (
    <div className="mx-auto min-h-screen max-w-6xl p-4">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Competition WINNERS Announcement
          </span>
        </h1>
        <p className="text-gray-600">
          Select a category to view the competition winners
        </p>
      </div>

      <div className="mb-8">
        <motion.div
          key={activeCategory + "-filter"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {Object.keys(allTeamData).map((category) => (
            <motion.button
              key={category}
              whileTap={{ scale: 0.95 }}
              className={`rounded-lg px-6 py-3 font-bold text-white shadow-md transition ${
                activeCategory === category
                  ? `${allTeamData[category].buttonColor} ${getRingClass(category)}`
                  : "bg-gray-500 hover:bg-gray-600"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + "-content"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl bg-white shadow-lg"
        >
          <div
            className={`${allTeamData[activeCategory].color} p-4 text-center text-white`}
          >
            <h2 className="text-2xl font-extrabold tracking-wide">
              {allTeamData[activeCategory].title}
            </h2>
            <p className="mt-1 font-medium">
              {allTeamData[activeCategory].subtitle}
            </p>
          </div>

          <div className="overflow-x-auto p-4">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead>
                <tr
                  className={`${allTeamData[activeCategory].headerColor} text-white`}
                >
                  <th className="rounded-tl-lg border px-4 py-3 font-bold">
                    No
                  </th>
                  <th className="border px-4 py-3 font-bold">Award Category</th>
                  <th className="border px-4 py-3 font-bold">Team</th>
                  <th className="rounded-tr-lg border px-4 py-3 font-bold">
                    Institute
                  </th>
                </tr>
              </thead>
              <tbody>
                {allTeamData[activeCategory].teams.map((team, index) => (
                  <tr
                    key={team.no}
                    className={`hover:bg-gray-50 ${index % 2 === 0 ? allTeamData[activeCategory].stripColor : "bg-white"}`}
                  >
                    <td className="border px-4 py-3 font-semibold">
                      {team.no}
                    </td>
                    <td className="border px-4 py-3 font-medium">
                      {team.category}
                    </td>
                    <td className="border px-4 py-3">{team.team}</td>
                    <td className="border px-4 py-3">{team.institute}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnnouncementCountdown;
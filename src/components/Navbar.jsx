import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logopx from "@/assets/proxo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItem = ({ text, to, target }) => {
    const isExternal = target === "_blank"; // Periksa apakah ini link eksternal
    return isExternal ? (
      <a
        href={to}
        target={target}
        rel="noopener noreferrer" // Keamanan tambahan untuk link eksternal
        className="block px-4 py-2 text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-purple-600"
      >
        {text}
      </a>
    ) : (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block px-4 py-2 text-lg font-semibold transition-all duration-300 ${
            isActive ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
          }`
        }
      >
        {text}
      </NavLink>
    );
  };

  const DropdownItem = ({ text, to }) => (
    <NavLink
      to={to}
      className="block px-4 py-2 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-purple-600"
    >
      {text}
    </NavLink>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={logopx} alt="Logo" className="h-16 w-auto" />
          </div>

          <div className="submenu hidden items-center space-x-6 md:flex">
            <NavItem text="Home" to="/home" />
            <NavItem
              text="Registration"
              to="https://bit.ly/ProxoCoris2025"
              target="_blank"
            />

            <div className="group relative">
              <button className="relative px-4 py-2 text-lg font-semibold text-gray-700 transition-all duration-300 hover:text-purple-600">
                Announcement
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              <div className="absolute left-0 z-50 mt-2 w-48 translate-y-2 transform rounded-lg bg-white opacity-0 shadow-lg transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <DropdownItem text="Winner" to="/winner" />
                <DropdownItem text="What's New" to="/whatsnew" />
              </div>
            </div>
          </div>

          <button
            className="block rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 space-y-2 bg-white p-4 shadow-lg md:hidden">
            <a
              href="/home"
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-purple-600"
            >
              Home
            </a>
            <a
              href="https://bit.ly/ProxoCoris2025"
              target="_blank"
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-purple-600"
            >
              Registration
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 hover:text-purple-600"
              >
                Announcement
              </button>
              {isDropdownOpen && (
                <div className="mt-2 space-y-2 rounded-lg bg-white shadow-lg">
                  <DropdownItem text="Winner" to="/winner" />
                  <DropdownItem text="What's New" to="/whatsnew" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

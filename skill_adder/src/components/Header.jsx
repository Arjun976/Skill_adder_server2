import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#0a0018] via-[#180037] to-[#35006d]
                 shadow-md border-b border-purple-800/40"
    >
      <nav className="flex justify-between items-center px-8 md:px-16 py-4 relative">
        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
            closeMenu(); // Close menu on logo click
          }}
          className="text-fuchsia-400 font-extrabold text-3xl cursor-pointer hover:text-fuchsia-300 transition-all duration-200"
        >
          Skill Adder
        </div>

        {/* Desktop Buttons - Hidden on mobile */}
        <div className="hidden md:flex gap-4 md:gap-6 items-center">
          <button
            onClick={() => navigate("/search")}
            className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base 
                       ${location.pathname === "/search"
                         ? "bg-fuchsia-700 text-white shadow-lg shadow-fuchsia-600/40"
                         : "bg-transparent border border-fuchsia-500 text-fuchsia-300 hover:bg-fuchsia-800/40"}
                       transition-all duration-200`}
          >
            🔍 Search Skill
          </button>

          <button
            onClick={() => navigate("/progress")}
            className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base 
                       ${location.pathname === "/progress"
                         ? "bg-purple-700 text-white shadow-lg shadow-purple-600/40"
                         : "bg-transparent border border-purple-500 text-purple-300 hover:bg-purple-800/40"}
                       transition-all duration-200`}
          >
            📊 Skill Status
          </button>

          <button
            onClick={() => {
              navigate("/form");
              closeMenu(); // Close menu if somehow open
            }}
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white 
                       font-semibold rounded-full shadow-md hover:shadow-fuchsia-500/50 
                       hover:scale-105 active:scale-95 transition-all duration-200"
          >
            ➕ Add Skill
          </button>
        </div>

        {/* Hamburger Button - Visible on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-fuchsia-300 hover:text-fuchsia-400 focus:outline-none focus:text-white transition-all duration-200"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${
                isMenuOpen ? "rotate-45 translate-y-0.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full md:hidden bg-gradient-to-r from-[#0a0018] via-[#180037] to-[#35006d] border-t border-purple-800/40 shadow-lg py-2 px-8">
            <button
              onClick={() => {
                navigate("/search");
                closeMenu();
              }}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-sm mb-2 block
                         ${location.pathname === "/search"
                           ? "bg-fuchsia-700 text-white shadow-lg shadow-fuchsia-600/40"
                           : "text-fuchsia-300 hover:bg-fuchsia-800/40 hover:text-fuchsia-400"}
                         transition-all duration-200`}
            >
              🔍 Search Skill
            </button>

            <button
              onClick={() => {
                navigate("/progress");
                closeMenu();
              }}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-sm mb-2 block
                         ${location.pathname === "/progress"
                           ? "bg-purple-700 text-white shadow-lg shadow-purple-600/40"
                           : "text-purple-300 hover:bg-purple-800/40 hover:text-purple-400"}
                         transition-all duration-200`}
            >
              📊 Skill Status
            </button>

            <button
              onClick={() => {
                navigate("/form");
                closeMenu();
              }}
              className="w-full text-left px-4 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white 
                         font-semibold rounded-lg shadow-md hover:shadow-fuchsia-500/50 
                         hover:scale-105 active:scale-95 transition-all duration-200"
            >
              ➕ Add Skill
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
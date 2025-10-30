import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#0a0018] via-[#180037] to-[#35006d]
                 shadow-md border-b border-purple-800/40"
    >
      <nav className="flex justify-between items-center px-8 md:px-16 py-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-fuchsia-400 font-extrabold text-3xl cursor-pointer hover:text-fuchsia-300 transition-all duration-200"
        >
          Skill Adder
        </div>

        {/* Buttons */}
        <div className="flex gap-4 md:gap-6 items-center">
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
            onClick={() => navigate("/form")}
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white 
                       font-semibold rounded-full shadow-md hover:shadow-fuchsia-500/50 
                       hover:scale-105 active:scale-95 transition-all duration-200"
          >
            ➕ Add Skill
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

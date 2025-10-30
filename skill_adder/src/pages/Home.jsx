import React from "react";
import bgImage from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-no-repeat bg-cover bg-center 
                 before:absolute before:inset-0 before:bg-gradient-to-br 
                 before:from-black/95 before:via-[#15002b]/90 before:to-[#3b0072]/80 
                 before:opacity-95 before:content-['']"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[80vh] px-6 md:px-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-purple-400 drop-shadow-lg mb-4">
          Skill Adder
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10">
          Empower your growth journey — track your learning hours, visualize your
          progress, and master new skills effortlessly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => navigate("/form")}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-700 
                       text-white font-semibold rounded-full shadow-lg 
                       hover:shadow-purple-500/50 hover:scale-105 transition-all"
          >
            🚀 Get Started
          </button>

          <button
            onClick={() => navigate("/progress")}
            className="px-8 py-3 bg-black/50 border border-purple-600 
                       text-purple-300 font-semibold rounded-full 
                       backdrop-blur-md hover:bg-purple-700/40 
                       hover:shadow-lg hover:shadow-purple-600/40 transition-all"
          >
            📊 View Skill Status
          </button>
        </div>
      </div>

      {/* Bottom Gradient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-20 
                      bg-gradient-to-t from-purple-900/70 to-transparent" />
    </div>
  );
}

export default Home;

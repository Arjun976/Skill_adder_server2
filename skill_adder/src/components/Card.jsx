import React from "react";
import { Link } from "react-router-dom";
import QR from "./QR"

const Card = ({ skillData }) => {
  return (
    <div className="bg-black/60 border border-purple-700 backdrop-blur-xl rounded-2xl shadow-xl shadow-purple-900/40 text-white w-80 p-6 hover:scale-105 transition-all duration-300 hover:shadow-purple-500/40">
      <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center uppercase">
        {skillData.skillname || "Unknown Skill"}
      </h3>

      <div className="space-y-2 text-base">
        <p>
          <span className="text-purple-300 font-semibold">Effort Time:</span>{" "}
          {skillData.Efforttime} hrs
        </p>
        <p>
          <span className="text-purple-300 font-semibold">Source:</span>{" "}
          {skillData.Source}
        </p>
        <p>
          <span className="text-purple-300 font-semibold">Link:</span>{" "}
          <Link
            to={skillData.Sourcelink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            {skillData.Sourcelink || "N/A"}
          </Link>
        </p>
        <p>
          <span className="text-purple-300 font-semibold">Remark:</span>{" "}
          {skillData.remark || "None"}
        </p>
        <p>
          <span className="text-purple-300 font-semibold">Added:</span>{" "}
          {skillData.addedtime || "—"}
        </p>
      </div>

      <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-2.5 rounded-lg shadow-md shadow-purple-700/40 transition-all duration-300">
        Delete
      </button>
      <QR link={skillData.Sourcelink} />
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import { addSkillAPI } from "../services/allAPI";

const Preview = ({ skilldata, setskilldata, onSkillAdded }) => {
  const [loading, setLoading] = useState(false);

  const handleAddSkill = async () => {
    if (!skilldata.skillname.trim()) {
      alert("Please enter a skill name!");
      return;
    }

    try {
      setLoading(true);

      const currentTime = new Date().toLocaleString();

      const skillWithTime = {
        ...skilldata,
        addedtime: currentTime,
      };

      await addSkillAPI(skillWithTime);
      alert("✅ Skill added successfully!");

      if (onSkillAdded) onSkillAdded();

      setskilldata({
        skillname: "",
        Efforttime: "",
        Source: "",
        Sourcelink: "",
        remark: "",
      });
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("❌ Failed to add skill. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0033] to-[#35006d] flex justify-center items-center px-6 py-12">
      <div className="w-full max-w-xl bg-black/70 border border-purple-700 rounded-2xl p-8 shadow-2xl shadow-purple-900/40 backdrop-blur-lg">
        <h2 className="text-3xl font-semibold text-center text-purple-400 mb-8 drop-shadow-lg">
          Add New Skill
        </h2>

        {/* Input fields */}
        <div className="space-y-5">
          <input
            type="text"
            name="skillname"
            value={skilldata.skillname}
            onChange={(e) =>
              setskilldata({ ...skilldata, skillname: e.target.value })
            }
            placeholder="Skill Name"
            className="w-full bg-transparent border border-purple-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="number"
            name="Efforttime"
            value={skilldata.Efforttime}
            onChange={(e) =>
              setskilldata({ ...skilldata, Efforttime: e.target.value })
            }
            placeholder="Effort Time (hours)"
            className="w-full bg-transparent border border-purple-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="Source"
            value={skilldata.Source}
            onChange={(e) =>
              setskilldata({ ...skilldata, Source: e.target.value })
            }
            placeholder="Source (e.g. YouTube, Udemy)"
            className="w-full bg-transparent border border-purple-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="Sourcelink"
            value={skilldata.Sourcelink}
            onChange={(e) =>
              setskilldata({ ...skilldata, Sourcelink: e.target.value })
            }
            placeholder="Source Link"
            className="w-full bg-transparent border border-purple-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="text"
            name="remark"
            value={skilldata.remark}
            onChange={(e) =>
              setskilldata({ ...skilldata, remark: e.target.value })
            }
            placeholder="Remark"
            className="w-full bg-transparent border border-purple-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleAddSkill}
          disabled={loading}
          className={`w-full mt-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 
          ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-purple-700 hover:bg-purple-800 hover:shadow-[0_0_15px_#a855f7]"
          } text-white`}
        >
          {loading ? "Adding..." : "Add Skill"}
        </button>
      </div>
    </div>
  );
};

export default Preview;

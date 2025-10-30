import React, { useEffect, useState } from "react";
import { getSkillAPI, deleteSkillAPI } from "../services/allAPI";
import { FaTrash } from "react-icons/fa";

function Search() {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch all skills
  const fetchSkills = async () => {
    try {
      const response = await getSkillAPI();
      const data =
        response?.data?.Skill || response?.data || response || [];
      setSkills(data);
      setFilteredSkills(data);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  // ✅ Delete skill
  const handleDelete = async (skillId) => {
    if (!window.confirm("Are you sure you want to delete this skill?")) return;
    try {
      await deleteSkillAPI(skillId);
      setSkills((prev) => prev.filter((s) => s.id !== skillId && s._id !== skillId));
      setFilteredSkills((prev) => prev.filter((s) => s.id !== skillId && s._id !== skillId));
      alert("🗑️ Skill deleted successfully!");
    } catch (error) {
      console.error("Error deleting skill:", error);
      alert("❌ Failed to delete skill.");
    }
  };

  // ✅ Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setFilteredSkills(skills);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = skills.filter(
      (skill) =>
        skill.skillname?.toLowerCase().includes(lowerQuery) ||
        skill.addedtime?.toLowerCase().includes(lowerQuery)
    );
    setFilteredSkills(results);
  };

  // ✅ Fetch on mount
  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0033] to-[#3b0066] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-400 drop-shadow-lg">
        Skill Search & Manager
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by skill name or added date..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full max-w-lg px-4 py-2 rounded-lg bg-[#1a0033] border border-purple-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Skills grid */}
      {filteredSkills.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No matching skills found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            const skillId = skill.id || skill._id;
            return (
              <div
                key={skillId}
                className="relative bg-[#15002b] rounded-2xl shadow-md hover:shadow-purple-600/50 transition duration-300 p-5"
              >
                <h2 className="text-xl font-semibold text-purple-300 mb-2">
                  {skill.skillname}
                </h2>

                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-purple-400">Hours:</span>{" "}
                  {skill.Efforttime}
                </p>

                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-purple-400">Source:</span>{" "}
                  {skill.Source}
                </p>

                <p className="text-gray-300 text-sm truncate">
                  <span className="font-semibold text-purple-400">Link:</span>{" "}
                  <a
                    href={skill.Sourcelink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    {skill.Sourcelink || "N/A"}
                  </a>
                </p>

                <p className="text-gray-400 text-xs mt-2">
                  Added: {skill.addedtime || "Unknown"}
                </p>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(skillId)}
                  className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition duration-300"
                  title="Delete Skill"
                >
                  <FaTrash size={14} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;

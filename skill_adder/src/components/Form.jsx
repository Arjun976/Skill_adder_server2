import React, { useEffect, useState } from "react";
import Preview from "./Preview";
import Card from "./Card";
import Progress from "../pages/Progress";
import { getSkillAPI } from "../services/allAPI";

function Form() {
  const [Addid, setAddid] = useState("");
  const [skilldata, setskilldata] = useState({
    skillname: "",
    Efforttime: "",
    Source: "",
    Sourcelink: "",
    remark: "",
  });

  const [skills, setSkills] = useState([]);

  // ✅ Fetch all skills
  const fetchSkills = async () => {
    try {
      const response = await getSkillAPI();
      setSkills(response.data || []);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  // ✅ Fetch once on mount
  useEffect(() => {
    fetchSkills();
  }, []);
    <div className="max-w-4xl mx-auto">
        <Progress  />
      </div>
      



  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#1a0033] to-[#3b0066] text-white p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-400 drop-shadow-lg">
        Skill Progress Manager
      </h1>

      {/* ✅ Add Skill Form */}
      <div className="flex justify-center mb-16">
        <Preview
          skilldata={skilldata}
          setskilldata={setskilldata}
          Addid={Addid}
          setAddid={setAddid}
          onSkillAdded={fetchSkills}
        />
      </div>

      {/* ✅ Show Progress Tracker */}
    
      {/* ✅ Skill Cards Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-purple-300">
          Recently Added Skills
        </h2>

        {skills.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No skills added yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.slice(-3).map((skill, index) => (
              <Card key={index} skillData={skill} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;

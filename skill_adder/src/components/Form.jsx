import React, { useEffect, useState } from "react";
import Preview from "./Preview";
import Progress from "../pages/Progress.jsx";
import { getSkillAPI } from "../services/allAPI";
import Card from "./Card.jsx";
function Form() {
  const [Addid, setAddid] = useState("");
  const [skilldata, setskilldata] = useState({
    skillname: "",
    Efforttime: "",
    Source: "",
    Sourcelink: "",
    remark: "",
  });

  // ✅ State to store all skills for progress display
  const [skills, setSkills] = useState([]);

  // ✅ Fetch all skills from API
  const fetchSkills = async () => {
    try {
      const response = await getSkillAPI();
      setSkills(response.Skill || []);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  // ✅ Run once when the component mounts
  useEffect(() => {
    fetchSkills();
  }, []);
   <Progress skills={skills} />

  return (
    <div>
      {/* Form section to add skills */}
      <Preview
        skilldata={skilldata}
        setskilldata={setskilldata}
        Addid={Addid}
        setAddid={setAddid}
        onSkillAdded={fetchSkills}  // ✅ Callback to refresh progress
      />

      {/* Progress tracker below */}

      <Card skillData={skilldata} />
     
    </div>
  );
}

export default Form;

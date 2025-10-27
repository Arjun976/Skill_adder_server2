import React, { useState } from "react";
import { addSkillAPI } from "../services/allAPI"; // adjust path as needed

const Preview = ({ skilldata, setskilldata }) => {
  const [loading, setLoading] = useState(false);

  const handleAddSkill = async () => {
    if (!skilldata.skillname.trim()) {
      alert("Please enter a skill name!");
      return;
    }

    try {
      setLoading(true);
      const result = await addSkillAPI(skilldata);
      alert("Skill added successfully!");
      console.log(result.data);
      setskilldata({
        skillname: "",
        Efforttime: "",
        Source: "",
        Sourcelink: "",
        remark: "",
      });
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Add Skill</h3>
      <input
        type="text"
        name="skillname"
        value={skilldata.skillname}
        onChange={(e) => setskilldata({ ...skilldata, skillname: e.target.value })}
        placeholder="Skill Name"
      />
      <input
        type="text"
        name="Efforttime"
        value={skilldata.Efforttime}
        onChange={(e) => setskilldata({ ...skilldata, Efforttime: e.target.value })}
        placeholder="Effort Time"
      />
      <input
        type="text"
        name="Source"
        value={skilldata.Source}
        onChange={(e) => setskilldata({ ...skilldata, Source: e.target.value })}
        placeholder="Source"
      />
      <input
        type="text"
        name="Sourcelink"
        value={skilldata.Sourcelink}
        onChange={(e) => setskilldata({ ...skilldata, Sourcelink: e.target.value })}
        placeholder="Source Link"
      />
      <input
        type="text"
        name="remark"
        value={skilldata.remark}
        onChange={(e) => setskilldata({ ...skilldata, remark: e.target.value })}
        placeholder="Remark"
      />

      <button onClick={handleAddSkill} disabled={loading}>
        {loading ? "Adding..." : "Add Skill"}
      </button>
    </div>
  );
};

export default Preview;

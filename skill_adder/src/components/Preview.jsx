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
    <div>
      <div>
        <h2>Add New Skill</h2>

        <div>
          <input
            type="text"
            name="skillname"
            value={skilldata.skillname}
            onChange={(e) =>
              setskilldata({ ...skilldata, skillname: e.target.value })
            }
            placeholder="Skill Name"
          />

          <input
            type="number"
            name="Efforttime"
            value={skilldata.Efforttime}
            onChange={(e) =>
              setskilldata({ ...skilldata, Efforttime: e.target.value })
            }
            placeholder="Effort Time (hours)"
          />

          <input
            type="text"
            name="Source"
            value={skilldata.Source}
            onChange={(e) =>
              setskilldata({ ...skilldata, Source: e.target.value })
            }
            placeholder="Source (e.g. YouTube, Udemy)"
          />

          <input
            type="text"
            name="Sourcelink"
            value={skilldata.Sourcelink}
            onChange={(e) =>
              setskilldata({ ...skilldata, Sourcelink: e.target.value })
            }
            placeholder="Source Link"
          />

          <input
            type="text"
            name="remark"
            value={skilldata.remark}
            onChange={(e) =>
              setskilldata({ ...skilldata, remark: e.target.value })
            }
            placeholder="Remark"
          />
        </div>

        <button onClick={handleAddSkill} disabled={loading}>
          {loading ? "Adding..." : "Add Skill"}
        </button>
      </div>
    </div>
  );
};

export default Preview;
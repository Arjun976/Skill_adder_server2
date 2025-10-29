import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { getSkillAPI } from "../services/allAPI";

const Progress = () => {
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const result = await getSkillAPI();
      const data = result?.data || [];

      // Combine skills with the same name
      const merged = data.reduce((acc, skill) => {
        const name = skill.skillname.trim().toLowerCase();
        const hours = Number(skill.Efforttime) || 0;
        if (!acc[name]) {
          acc[name] = { ...skill, totalHours: hours };
        } else {
          acc[name].totalHours += hours;
        }
        return acc;
      }, {});

      setSkills(Object.values(merged));
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  // Decide label & color
  const getProgressInfo = (progress) => {
    if (progress < 25) {
      return { color: "#4caf50", label: "Beginner" }; // green
    } else if (progress < 50) {
      return { color: "#ffb300", label: "Intermediate" }; // yellow
    } else if (progress < 75) {
      return { color: "#ff9800", label: "Advanced" }; // orange
    } else {
      return { color: "#f44336", label: "Expert" }; // red
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Skill Progress Tracker
      </Typography>

      {skills.length === 0 ? (
        <Typography>No skills added yet.</Typography>
      ) : (
        skills.map((skill) => {
          const hours = skill.totalHours || Number(skill.Efforttime) || 0;
          const progress = Math.min((hours / 100) * 100, 100);
          const { color, label } = getProgressInfo(progress);

          return (
            <Paper
              key={skill.skillname}
              sx={{
                p: 2,
                mb: 2,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "#fafafa",
              }}
            >
              <Typography variant="h6" fontWeight="600">
                {skill.skillname}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 12,
                  borderRadius: 6,
                  mt: 1,
                  backgroundColor: "#e0e0e0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: color,
                    transition: "all 0.6s ease",
                  },
                }}
              />

              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body2">
                  {hours} hrs / 100 hrs ({progress.toFixed(0)}%)
                </Typography>
                <Typography variant="body2" fontWeight="500" color={color}>
                  {label}
                </Typography>
              </Box>
            </Paper>
          );
        })
      )}
    </Box>
  );
};

export default Progress;

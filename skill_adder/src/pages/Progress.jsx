import React, { useEffect, useState } from "react";
import { getSkillAPI } from "../services/allAPI";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ safer explicit import

const Progress = () => {
  const [skills, setSkills] = useState([]);

  // Fetch skills and merge by skill name
  const fetchSkills = async () => {
    try {
      const result = await getSkillAPI();
      const data = result?.data || [];

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

  // Progress bar label + color
  const getProgressInfo = (progress) => {
    if (progress < 25) return { color: "bg-green-500", label: "Beginner" };
    if (progress < 50) return { color: "bg-yellow-400", label: "Intermediate" };
    if (progress < 75) return { color: "bg-orange-500", label: "Advanced" };
    return { color: "bg-purple-600", label: "Expert" };
  };

  // ✅ Download progress report as PDF
  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.text("Skill Progress Report", 14, 20);
      doc.setFontSize(12);

      const tableColumn = ["Skill Name", "Total Hours", "Progress (%)", "Level"];
      const tableRows = skills.map((skill) => {
        const hours = skill.totalHours || Number(skill.Efforttime) || 0;
        const progress = Math.min((hours / 100) * 100, 100);
        const { label } = getProgressInfo(progress);
        return [
          skill.skillname,
          `${hours} hrs`,
          `${progress.toFixed(1)}%`,
          label,
        ];
      });

      // ✅ Using function-style call for compatibility with Vite + ES modules
      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 30,
        theme: "grid",
        headStyles: { fillColor: [102, 0, 204] },
        styles: { fontSize: 11 },
      });

      doc.save("Skill_Progress_Report.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#15002b] to-[#3b0072] text-white px-8 py-12">
      <div className="flex justify-between items-center mb-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-purple-400 drop-shadow-lg">
          Skill Progress Tracker
        </h1>
        <button
          onClick={handleDownloadPDF}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow-md transition-all"
        >
          📄 Download PDF
        </button>
      </div>

      {skills.length === 0 ? (
        <p className="text-center text-gray-400 text-lg italic">
          No skills added yet 🚀
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {skills.map((skill, index) => {
            const hours = skill.totalHours || Number(skill.Efforttime) || 0;
            const progress = Math.min((hours / 100) * 100, 100);
            const { color, label } = getProgressInfo(progress);

            return (
              <div
                key={index}
                className="bg-black/60 border border-purple-700 rounded-2xl p-6 backdrop-blur-lg shadow-xl shadow-purple-900/40 hover:shadow-purple-500/40 transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-bold text-purple-300 capitalize">
                    {skill.skillname}
                  </h2>
                  <span className="text-sm font-semibold text-gray-400">
                    {hours} hrs / 100 hrs
                  </span>
                </div>

                <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`h-4 ${color} transition-all duration-700 ease-in-out`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                <div className="flex justify-between mt-2">
                  <p className="text-gray-400 text-sm">
                    {progress.toFixed(0)}%
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      label === "Expert"
                        ? "text-purple-400"
                        : label === "Advanced"
                        ? "text-orange-400"
                        : label === "Intermediate"
                        ? "text-yellow-300"
                        : "text-green-400"
                    }`}
                  >
                    {label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Progress;

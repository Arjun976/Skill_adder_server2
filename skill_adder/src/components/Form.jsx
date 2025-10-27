import React, { useState } from "react";
import Preview from "./Preview";

function Form() {
  const [Addid, setAddid] = useState("");

  // Holds details for a single skill
  const [skilldata, setskilldata] = useState({
    skillname: "",
    Efforttime: "",
    Source: "",
    Sourcelink: "",
    remark: "",
  });

  return (
    <div>
      <Preview
        skilldata={skilldata}
        setskilldata={setskilldata}
        Addid={Addid}
        setAddid={setAddid}
      />
    </div>
  );
}

export default Form;  

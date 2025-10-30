import React from "react";
import { Link } from "react-router-dom";

const Card = ({ skillData }) => {
  return (
    <div className="text-white border-2 backdrop-blur-xl min-w-[300px] py-14  flex flex-col justify-center items-center px-7  ml-7 rounded-2xl shadow-xl/30 shadow-black  mb-10">
        <h4 className="font-bold uppercase text-2xl font-serif text-shadow-lg/30 text-center mb-4">Current Skill Data</h4>
      <div>{/* <img src="" alt="" className='w-2xl h-2xl'/> */}</div>
      <div className="text-xl font-bold px-5 capitalize">
        <h4>Skill Name:     <span className="text-2xl text-blue-500">{skillData.skillname} </span></h4>
        <h5>    Source:         <span className="text-2xl text-blue-500">{skillData.Source}    </span></h5>
        <h6>Effort Time :   <span className="text-2xl text-blue-500">{skillData.Efforttime}</span></h6>
        <p>Source Link:     <span className="text-2xl text-blue-500"><Link to={skillData.Sourcelink}>{skillData.Sourcelink}</Link></span></p>
        <p>     Remark:          <span className="text-2xl text-blue-500"> {skillData.remark}</span></p>
        <p>Added Time <span className="text-2xl text-blue-500">{skillData.addedtime}</span></p>
      </div>
      <button className=" mt-4 text-white bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:none dark:focus:none  rounded-lg font-bold px-5 py-2.5 text-center me-2 mb-2">Delete</button>
    </div>
  );
};

export default Card;
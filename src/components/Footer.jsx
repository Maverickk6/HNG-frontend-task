import React from "react";
import I4G from '../assets/I4G.png';


function Footer() {
  return (
    <div className="py-2 sm:h-[200px] sm:py-4 px-4 sm:px-12 my-2 sm:my-6 mt-6 w-[90vW] flex sm:flex-row flex-col justify-between">
      <h1 className="font-bold text-[25px]">
        Zuri <span className="text-[40px] text-red-500">.</span> Internship
      </h1>
      <p className="text-xs text-gray-500">HNG internship 9 frontend task</p>
      <img
        src={I4G}
        className="self-left h-[45px] sm:h-[55px] w-[200px] sm:w-[300px] mt-[20px] sm:h-[50px] sm:w-[200px]"
      />
    </div>
  );
}

export default Footer;

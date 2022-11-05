import React from "react";
import I4G from "../assets/I4G.png";

function Footer() {
  return (
    <div className="py-2 h-[100px] md:h-[200px] md:py-4 px-4 md:px-8 mb-12 md:mb-6 md:mt-16  mt-6 w-[90vW] flex md:flex-row flex-col justify-between">
      <h1 className="font-bold text-[25px]">
        Zuri <span className="text-[40px] text-red-500">.</span> Internship
      </h1>
      <p className="text-xs text-gray-500">HNG internship 9 frontend task</p>
      <img
        src={I4G}
        className="self-left h-[45px] w-[200px] md:w-[170px] mt-[20px] md:h-[40px]"
      />
    </div>
  );
}

export default Footer;

import React from "react";
import I4G from "../assets/I4G.png";

function Footer() {
  return (
    <div className="h-[90px] md:h-[200px] md:py-4 px-2 md:px-8 py-1 mb-12 md:mb-6 md:mt-6 mt-6 w-[90vW]">
      <div className="w-full h-[1px] bg-gray-300 mb-2 md:mb-6"></div>
      <div className="  flex md:flex-row flex-col justify-between">
        <h1 className="font-bold text-[25px]">
          Zuri <span className="text-[40px] text-red-500">.</span> Internship
        </h1>
        <p className="text-xs text-gray-500 md:mt-6">
          HNG internship 9 frontend task
        </p>
        <img
          src={I4G}
          className="self-left h-[40px] w-[130px] md:w-[170px] mt-[20px] md:h-[40px]"
        />
      </div>
    </div>
  );
}

export default Footer;

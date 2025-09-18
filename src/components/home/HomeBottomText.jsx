import React from "react";
import { Link } from "react-router-dom";
import Video from "./Video";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center gap-4 text-white ">
      <Link
        className="text-[6.5vw] border-5  uppercase px-10 pt-6 leading-[4.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center  border-white rounded-full"
        to="/Project"
      >
        Project
      </Link>
      <Link
        className="text-[6.5vw] border-5  uppercase px-10 pt-6 leading-[4.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center border-white rounded-full"
        to="/Agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;

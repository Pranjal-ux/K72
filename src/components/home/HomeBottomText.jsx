import React from "react";
import { Link } from "react-router-dom";
import Video from "./Video";

const HomeBottomText = () => {
  return (
    <div className="font-[Font02] flex justify-center items-center gap-4 text-white">
      <Link
        className="text-[6.5vw] border-5 rounded-full uppercase px-10 pt-6 leading-[4.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]"
        to="/Project"
      >
        Project
      </Link>
      <Link
        className="text-[6.5vw] border-5 rounded-full uppercase px-10 pt-6 leading-[4.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]"
        to="/Agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;

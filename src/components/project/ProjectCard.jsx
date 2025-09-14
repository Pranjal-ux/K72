import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className=" group w-1/2 h-full relative hover:rounded-[3.5vw] transition-all  overflow-x-hidden">
        <img
          className="object-cover h-full w-full  "
          src={props.image1}
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <h2
            className=" opacity-0 transition-all group-hover:opacity-100 text-white uppercase border-2  border-white  rounded-[20vw] w-[22vw] h-[7vh]  
             pt-3 px-10 font-[Font01] text-5xl "
          >
            Vior le projet
          </h2>
        </div>
      </div>
      <div className=" group w-1/2 h-full relative hover:rounded-[3.5vw] transition-all  overflow-x-hidden">
        <img className="object-cover h-full w-full" src={props.image2} />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <h2
            className=" opacity-0 transition-all group-hover:opacity-200 text-white uppercase border-2  border-white  rounded-[20vw] w-[22vw] h-[7vh]  
             pt-3 px-10 font-[Font01] text-5xl "
          >
            Vior le projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

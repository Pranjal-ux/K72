import React from "react";

const Project = () => {
  return (
    <div className="p-3.5">
      <div className=" pt-[45vh] ">
        <h2 className="font-[Font02] uppercase text-[9vw]">Projets16</h2>
      </div>
      <div className="-mt-18">
        <div className="w-full h-[800px] flex gap-5  mb-4 ">
          <div className="w-1/2 h-full ">
            <img
              className="object-cover h-full w-full hover:rounded-[3.5vw] transition-all  overflow-x-hidden "
              src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
              alt=""
            />
          </div>
          <div className="w-1/2 h-full  hover:rounded-[3.5vw] transition-all  overflow-x-hidden ">
            <img
              className="object-cover h-full w-full"
              src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

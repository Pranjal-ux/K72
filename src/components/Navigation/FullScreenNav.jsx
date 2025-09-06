import React from "react";

const FullScreenNav = () => {
  return (
    //FullScreenNav div
    <div className=" text-white h-screen w-full bg-slate-800 absolute top-0">
      {/* //All links */}
      <div className="">
        <div className="pt-4 border-t-1 border-white">
          <h1 className="font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
            Project
          </h1>
          <div className=" absolute flex overflow-auto ">
            <div className="flex items-center">
              <h2 className="whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR{" "}
              </h2>
              <img
                className="h-36"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;

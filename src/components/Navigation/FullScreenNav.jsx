import { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../context/NavContext";
const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const { navOpen, setNavOpen } = useContext(NavbarContext);
  console.log(navOpen);
  console.log(setNavOpen);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".stairRing", {
      height: 0,
      delay: 1,
      stagger: {
        amount: -0.2,
      },
    });
    tl.from("fullNavLinkRef.current", {
      opacity: 0,
    });
    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.2,
      },
    });
  });

  return (
    //FullScreenNav div
    <div className=" hidden  overflow-hidden text-white h-screen w-full absolute top-0 ">
      <div className="h-screen w-full fixed">
        <div className="h-screen w-full fixed z-20 top-0">
          <div className="h-full w-full flex ">
            <div className=" stairRing  bg-black h-full w-1/5"></div>
            <div className=" stairRing  bg-black h-full w-1/5"></div>
            <div className=" stairRing  bg-black -full w-1/5"></div>
            <div className=" stairRing  bg-black -full w-1/5"></div>
            <div className=" stairRing  bg-black  h-full w-1/5"></div>
          </div>
        </div>
      </div>
      {/* //All links */}
      <div ref={fullNavLinkRef} className="relative">
        <div className="flex items-start justify-between w-full">
          <div className="p-4">
            <div className=" w-23 ">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            ref={fullNavLinkRef}
            className=" h-40 w-25 mt-2 cursor-pointer relative "
          >
            <div className="h-60 w-1 -rotate-45 origin-top bg-[#D3FD50] absolute"></div>
            <div className="h-35 w-1 right-0 rotate-45 origin-top bg-[#D3FD50] absolute"></div>
          </div>
        </div>
      </div>
      <div className="py-20 ">
        <div className="link origin-top pt-4 border-t-1 border-white relative">
          <h1 className="font-[Font02] text-[8vw] text-center uppercase leading-[6.8vw]">
            Project
          </h1>
          <div className=" moveLink bg-[#D3FD50] text-black absolute flex top-0">
            <div className="moveX flex items-center ">
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
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center  ">
              <h2 className="whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR{" "}
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link origin-top  pt-4 border-t-1 border-white relative object-cover">
          <h1 className="font-[Font02] text-[8vw] text-center uppercase leading-[6.8vw]">
            Agence
          </h1>
          <div className=" moveLink bg-[#D3FD50] text-black absolute flex top-0">
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0"
                src="https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR{" "}
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center  ">
              <h2 className="whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR{" "}
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link origin-top pt-4 border-t-1 border-white relative">
          <h1 className="font-[Font02] text-[8vw] text-center uppercase leading-[6.8vw]">
            Contacts
          </h1>
          <div className=" moveLink bg-[#D3FD50] text-black absolute flex top-0">
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0"
                src="https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR{" "}
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center  ">
              <h2 className="whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR{" "}
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="link origin-top pt-4 border-y-1 border-white relative">
          <h1 className="font-[Font02] text-[8vw] text-center uppercase leading-[6.8vw]">
            Blogue
          </h1>
          <div className=" moveLink bg-[#D3FD50] text-black absolute flex top-0">
            <div className="moveX flex items-center ">
              <h2 className="whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0"
                src="https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR{" "}
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg"
                alt=""
              />
            </div>
            <div className="moveX flex items-center  ">
              <h2 className="whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
              <h2 className=" whitespace-nowrap  font-[Font02] text-[10vw] text-center uppercase leading-[6.8vw]">
                POUR TOUT VOIR{" "}
              </h2>
              <img
                className="h-36 w-96 rounded-[12vw] object-cover shrink-0 "
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

import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        src="/public/video/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className=" w-full h-full object-cover"
      />
    </div>
  );
};

export default Video;

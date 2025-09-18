import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="/video/video.mp4"
      ></video>
    </div>
  );
};

export default Video;

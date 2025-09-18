import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        src="/video/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
    </div>
  );
};

export default Video;

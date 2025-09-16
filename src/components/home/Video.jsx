import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        src="public/Video/video.mp4"
      ></video>
    </div>
  );
};

export default Video;

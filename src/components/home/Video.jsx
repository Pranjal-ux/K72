import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video src="../../../video/video.mp4" autoPlay muted loop></video>
    </div>
  );
};

export default Video;

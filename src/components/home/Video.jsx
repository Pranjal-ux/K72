import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source src="/video/video.mp4" type="video/mp4" />
        {/* fallback content if video not supported */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;

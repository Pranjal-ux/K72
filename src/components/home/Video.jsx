import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-screen w-screen object-cover"
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1758087653~exp=1758091253~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=4dbbbc4c002c8972d44381f17afd5ffca88e610e0a23d09d38170c83eda8eb7c&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;

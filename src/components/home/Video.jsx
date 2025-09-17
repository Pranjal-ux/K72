import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1758116105~exp=1758119705~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=ab6e2df5943a8fead3c09200f3f8d6610f9c1de3a9b309caa7d80617f8971051&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;

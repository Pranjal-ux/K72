import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757851441~exp=1757855041~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=a71e7f036e0996d937ac3d5f0a3229c227e881e295bf3e7e9229ba7f0492e6e4&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;

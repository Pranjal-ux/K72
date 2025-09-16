import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <iframe
        className="h-full w-full object-cover"
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1758028484~exp=1758032084~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=4004468eaee4c7a9e2714da333b780f5ce38df4e3fbcd82a86ef337925a21b48&r=dXMtd2VzdDE%3D"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;

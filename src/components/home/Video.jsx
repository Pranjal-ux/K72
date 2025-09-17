import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1758121167~exp=1758124767~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=b08980149838002d3a9405c964fb97df7b662a6ee63f531667a0f724037dad79&amp;r=dXMtd2VzdDE%3D"
          type="video/mp4"
        />
        .
      </video>
    </div>
  );
};

export default Video;

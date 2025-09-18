import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1758205168~exp=1758208768~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=71f3c3a55313d8c6d567dae5a00d14ab77ec3fc6259d4d9e6d05036c095b6a08&r=dXMtZWFzdDE%3D"
        autoPlay
        muted
        loop
        playsInline
        className=" w-full h-full object-cover"
      />
    </div>
  );
};

export default Video;

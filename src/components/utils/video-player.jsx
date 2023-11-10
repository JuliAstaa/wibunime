"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="w-full h-[15rem] lg:h-[30rem] ">
      {youtubeId ? (
        <YouTube
          className="w-full h-full "
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
        />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-slate-300 font-semibold text-xl">
            {"Trailer is not available:( "}
          </h1>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

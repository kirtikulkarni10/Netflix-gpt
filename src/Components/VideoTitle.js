import React from "react";
import playIcon from "../Icons/playIcon.svg";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-40 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h1 className="py-6 text-2xl w-1/4">{overview}</h1>
      <div>
        <button className=" bg-white text-black p-4 px-16 text-xl bg-opacity-50 rounded-lg hover: bg-opacity-80">
          Play
        </button>
        {/* <img src={playIcon} alt='playicon' width="15px" height="10px"/> */}
        <button className="ml-5 bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg hover: bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

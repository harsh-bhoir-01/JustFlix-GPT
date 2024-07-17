import React from "react";
import { BsFillPlayFill, BsFillInfoCircleFill } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 pl-16 font-sans absolute text-white w-full aspect-video bg-gradient-to-r from-black select-none">
      <h1 className="text-5xl  font-bold">{title}</h1>
      <p className="w-1/3 mt-3 font-medium">{overview}</p>
      <div className="mt-3 flex ">
        <button className="py-[6px] bg-white px-6 rounded-[4px] text-lg flex font-medium text-black hover:bg-opacity-85">
          <BsFillPlayFill className="mt-[3px] text-2xl mr-1" /> Play
        </button>
        <button className="py-[6px] bg-white px-6 rounded-[4px] text-lg flex ml-2 font-medium text-black bg-opacity-45 hover:bg-opacity-25">
          <BsFillInfoCircleFill className="mt-[3px] text-2xl mr-1" />
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

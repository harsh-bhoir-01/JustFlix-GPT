import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import { NETFLIX_BG } from "../Utils/constants";
const GptSearch = () => {
  return (
    <div>
      <div>
        <img className="fixed -z-20 " alt="bg" src={NETFLIX_BG} />
      </div>
      <GptSearchBar />
      <GptSearchSuggestions />
    </div>
  );
};

export default GptSearch;

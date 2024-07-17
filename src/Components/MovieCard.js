import React, { useState } from "react";
import { IMG_CDN } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addPopUpMovieData } from "../Utils/moviesSlice";
import play_icon from "../Images/play_btn.png";
import info_icon from "../Images/info_btn.png";
import takeUserToYoutubeTrailer from "../Utils/takeUserToYoutubeTrailer";
import MoviePopUp from "./MoviePopUp";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const [showPopUp, setShowPopUp] = useState(false);
  const { ...allProperties } = movie;
  const moviePoster = IMG_CDN + allProperties?.poster_path;

  const movieInfoIconHandler = () => {
    dispatch(addPopUpMovieData({ ...allProperties, moviePoster }));
    setShowPopUp(true);
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };

  if (!allProperties?.poster_path) return null;
  return (
    <div className="m-2 md:m-3 relative">
      {moviePoster && (
        <>
          <img
            className="rounded w-[100px] md:w-auto max-w-none"
            src={moviePoster}
            alt={allProperties?.original_title}
          />
          <div
            className="infoBtns p-2 rounded-xl left-[1%]
            absolute top-[1%] text-center shadow-2xl bg-[rgba(0,0,0,0.7)] flex flex-col"
          >
            <button
              onClick={() => {
                takeUserToYoutubeTrailer(allProperties?.title);
              }}
              className="watchTrailer bg-white rounded-[50%] p-1 md:p-2 shadow-lg mb-2"
            >
              <img className="w-4 md:w-6" src={play_icon} alt="play icon" />
            </button>
            <button
              onClick={movieInfoIconHandler}
              className="watchTrailer bg-white rounded-[50%] p-1 md:p-2 shadow-lg"
            >
              <img className="w-4 md:w-6" src={info_icon} alt="info icon" />
            </button>
          </div>
        </>
      )}
      {showPopUp && (
        <MoviePopUp
          movieData={{ ...allProperties, moviePoster }}
          closePopUp={closePopUp}
        />
      )}
    </div>
  );
};

export default MovieCard;

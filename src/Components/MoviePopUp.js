import React from "react";

const MoviePopUp = ({ movieData, closePopUp }) => {
  const { moviePoster, title, overview, release_date } = movieData;

  const trimmedOverView =
    window.innerWidth < 768 ? overview.substr(0, 150) : overview;

  return (
    <div className="moviePopUp p-0 md:p-8 mx-auto w-full md:w-1/2 fixed top-[60%] md:top-[50vh] left-[50vw] -translate-x-[50%] -translate-y-[60%] md:-translate-y-[50%] z-50 shadow-2xl">
      <div className="movieCard bg-[rgba(0,0,0,0.85)] m-4 md:m-0 p-0 md:p-4 rounded-xl flex flex-col md:flex-row justify-between items-center">
        <div className="imgContent pr-4">
          <img
            className="rounded w-[185px] max-w-none"
            src={moviePoster}
            alt={title}
          />
        </div>
        <div className="infoContent text-white w-3/4">
          <div className="movieTitle text-center">
            <p className="p-2 text-3xl my-2 font-bold">{title}</p>
            <p className="p-2 text-base my-2">{trimmedOverView}</p>
            <p className="p-2 text-lg my-2 font-medium">
              Release Date: {release_date}
            </p>
          </div>
        </div>
      </div>
      <div
        className="closeBtn cursor-pointer absolute top-[3rem] right-[3.25rem]"
        onClick={closePopUp}
      >
        ❌
      </div>
    </div>
  );
};

export default MoviePopUp;

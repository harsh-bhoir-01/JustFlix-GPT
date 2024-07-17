import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className=" -mt-60 relative">
        <MoviesList title={"Now Playing"} movies={movies?.nowPlayMovies} />
        <MoviesList title={"Top Rated"} movies={movies?.nowTopRatedMovies} />
        <MoviesList title={"Popular"} movies={movies?.nowPopularMovies} />
        <MoviesList title={"Upcoming"} movies={movies?.nowUpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

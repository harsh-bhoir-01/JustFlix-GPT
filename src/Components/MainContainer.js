import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayMovies);
  if (movies == null) return;
  const displayMovie = movies[0];
  const { title, overview, id } = displayMovie;
  console.log(displayMovie);
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground videoId={id} />
    </div>
  );
};

export default MainContainer;

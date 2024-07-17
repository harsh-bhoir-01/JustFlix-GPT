import { useEffect } from "react";
import { addTrailerMovie } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (videoId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerMovie);
  const getMoviesVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((v) => v.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.type[0];
    dispatch(addTrailerMovie(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMoviesVideo();
  }, []);
};

export default useMovieTrailer;

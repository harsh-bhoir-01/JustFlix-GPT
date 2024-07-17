import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addNowPlayMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePlayMovies = () => {
  const dispatach = useDispatch();
  const playMovies = useSelector((store) => store.movies.nowPlayMovies);
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatach(addNowPlayMovies(json.results));
  };

  useEffect(() => {
    !playMovies && getNowPlayingMovie();
  }, []);
};

export default usePlayMovies;

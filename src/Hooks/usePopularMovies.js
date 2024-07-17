import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addNowPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatach = useDispatch();
  const popularMovies = useSelector((store) => store.movies.nowPopularMovies);

  const getNowPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatach(addNowPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getNowPopularMovie();
  }, []);
};

export default usePopularMovies;

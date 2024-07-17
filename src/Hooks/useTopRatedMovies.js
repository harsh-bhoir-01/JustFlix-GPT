import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addNowTopRatedMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatach = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.nowTopRatedMovies);

  const getNowTopRatedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    dispatach(addNowTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getNowTopRatedMovie();
  }, []);
};

export default useTopRatedMovies;

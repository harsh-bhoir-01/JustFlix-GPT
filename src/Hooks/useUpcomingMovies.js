import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addNowUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatach = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.nowUpcomingMovies);
  const getNowUpcomingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatach(addNowUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getNowUpcomingMovie();
  }, []);
};

export default useUpcomingMovies;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptSearchSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (movieResults && movieName) {
      setIsLoading(false);
    }
  }, [movieResults, movieName]);
  if (!movieName) return null;
  return (
    <div className="bg-black my-6 mx-7 rounded-xl bg-opacity-85 ">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {movieName.map((m, index) => (
            <MoviesList key={m} title={m} movies={movieResults[index]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GptSearchSuggestions;

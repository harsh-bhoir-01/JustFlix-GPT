import React, { useRef } from "react";
import { API_OPTIONS, GEMINI_API_KEY } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addGeminiResults } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGeminiSearch = async () => {
    const queryText = searchText.current.value;
    const geminiQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      queryText +
      " only give me names of 6 movies, comma-separated like the example results given ahead. Example Result: Avenger End-game, Don, Sanju, Jawan, Interstellar, Wild Wild Punjab";

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" +
        GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: geminiQuery,
                },
              ],
            },
          ],
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data?.candidates[0]?.content.parts[0]?.text);
    const geminiResults = data?.candidates[0]?.content.parts[0]?.text
      ?.split(",")
      .slice(0, 5);

    const promiseArray = geminiResults.map((m) => searchMovieTmdb(m));

    const tmdbSearchResult = await Promise.all(promiseArray);

    dispatch(
      addGeminiResults({
        movieName: geminiResults,
        movieResults: tmdbSearchResult,
      })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black justify-center py-2 w-[60%] rounded-md grid grid-cols-12 px-5 bg-opacity-85"
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What's on your mind today!!!"
          className="p-2 m-2 placeholder:font-sans rounded-md col-span-10"
        />
        <button
          onClick={() => handleGeminiSearch()}
          className="text-[#E50914] text-base font-medium font-sans border border-[#E50914]   bg-[#000000] rounded-md hover:bg-[#E50914] hover:text-white col-span-2 m-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

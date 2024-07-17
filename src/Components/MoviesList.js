import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col pl-16 relative py-6">
      <div>
        <h1 className="text-white font-sans text-2xl font-semibold select-none">
          {title}
        </h1>
      </div>
      <div className="relative mt-5 flex items-center">
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto hide-scroll-bar w-full"
        >
          {movies && movies.map((m) => <MovieCard key={m.id} movie={m} />)}
        </div>

        {/* Left arrow button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-opacity duration-300"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-opacity duration-300"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MoviesList;

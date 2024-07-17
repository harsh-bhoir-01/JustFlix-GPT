import Header from "./Header";
import usePlayMovies from "../Hooks/usePlayMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gpt.gptShowSearch);
  usePlayMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="h-screen flex flex-col">
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;

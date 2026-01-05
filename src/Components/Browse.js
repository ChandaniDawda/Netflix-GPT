
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar"; // updated import

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const movieResults = useSelector((store) => store.gpt.movieResults); // GPT + TMDB results

  // Load TMDB data hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />

      {showGptSearch ? (
        <>
          {/* GPT Search Bar */}
          <GptSearchBar />

          {/* Display GPT + TMDB results */}
          {movieResults && movieResults.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
              {movieResults.map((movie) => (
                <div key={movie.id} className="text-white">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded shadow-md"
                  />
                  <p className="mt-2 text-center font-semibold">{movie.title}</p>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

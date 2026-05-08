
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
 const {movieResults, movieNames} = useSelector(store => store.gpt);

 if (!movieNames) return null;

  return (
    <div className="m-4 p-4 border border-white rounded-lg bg-black bg-opacity-50">
     <div>
        {movieNames.map((movieName, index) => {
          const results = movieResults?.[index];
          const movies = Array.isArray(results) ? results : results ? [results] : [];

          return (
            <MovieList
              key={`${movieName}-${index}`}
              title={movieName}
              movies={movies}
            />
          );
        })}
      </div>
     </div>
  );
};

export default GptMovieSuggestions;
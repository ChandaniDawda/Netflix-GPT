
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
 const {movieResults, movieNames} = useSelector(store => store.gpt);

 if (!movieNames) return null;

  return (
    <div className="m-4 p-4 border border-white rounded-lg bg-black bg-opacity-50">
     <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))};
      </div>
     </div>
  );
};

export default GptMovieSuggestions;
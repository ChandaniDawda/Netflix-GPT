import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
      const movies = useSelector(store => store.movies);

   console.log('SecondaryContainer movies:', movies);

   const hasAny = movies && (movies.nowPlayingMovies || movies.PopularMovies || movies.TopRatedMovies || movies.UpcomingMovies);

   return (
      hasAny ? (
         <div className="bg-black">
            <div className="mt-6 relative z-20">
               <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
               <MovieList title={"Popular"} movies={movies.PopularMovies} />
               <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
               <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
            </div>
         </div>
      ) : null
   );
};

export default SecondaryContainer;
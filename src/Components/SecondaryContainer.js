import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);


  return (
     movies.nowPlayingMovies && (
    <div className = " bg-black ">  
    <div className= "-mt-40 relative z-20">
       <MovieList title = {"Now Playing"}movies ={movies.nowPlayingMovies}/>
       <MovieList title = {"Popular"}movies ={movies.PopularMovies}/>
       <MovieList title = {"Top Rated"}movies ={movies.TopRatedMovies}/>
       <MovieList title = {"Upcoming"}movies ={movies.UpcomingMovies}/>
       

    </div>
     
    </div>
     )
  );
};

export default SecondaryContainer;
import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
    console.log(movies);

  return (
    <div className="px-6 bg-transparent py-4">
        <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll">
       
        <div className="flex  space-x-3">
            {movies?.map (movies => <MovieCard key = {movies.id} posterPath={movies.poster_path}/>)}
            
        </div>
            </div>
                 </div>
    
  );
};

export default MovieList;
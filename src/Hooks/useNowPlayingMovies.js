import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {

      const dispatch = useDispatch();

      const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

      useEffect(() => {
        const getNowPlayingMovies = async () => {

          if (nowPlayingMovies) return;
      
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS  );

        const json = await data.json();

        dispatch(addNowPlayingMovies(json.results));
      }
      
      getNowPlayingMovies();
    }, [nowPlayingMovies, dispatch] 
        
        ); 
   
   // ✅ dependency fixed
};

export default useNowPlayingMovies;
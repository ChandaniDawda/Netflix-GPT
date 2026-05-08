import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMovies = () => {
    const dispatch = useDispatch();

    const PopularMovies = useSelector((store) => store.movies.PopularMovies);

    useEffect(() => {
      const getPopularMovies = async () => {

          const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS  );

          const json = await data.json();

          dispatch(addPopularMovies(json.results));
        }
      !PopularMovies && getPopularMovies();

    }, [PopularMovies, dispatch]);
    };

  export default usePopularMovies;
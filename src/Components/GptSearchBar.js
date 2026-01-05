import lang from "../utils/languageConstants"
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { BG_URL } from "../utils/constants"; 


const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  const movieResults = useSelector(store => store.gpt.movieResults);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch ( "https://api.themoviedb.org/3/search/movie?query=" +
       movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS );
    const json = await data.json();
    return json.results;
  }


     const handleGptSearchClick = async () => {
  console.log(searchText.current.value);

  const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated";

  try {
    const gptResults = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",  
  messages: [{ role: "user", content: gptQuery }],
});

    const gptMovies =
      gptResults.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) =>
      searchMovieTMDB(movie.trim())
    );

    const tmdbResultsRaw = await Promise.all(promiseArray);
    const tmdbResults = tmdbResultsRaw.map(res => res?.[0] || null).filter(Boolean);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovies,
        movieResults: tmdbResults,
      })
    );
  } catch (err) {
    console.error("GPT request failed:", err);
    alert(lang[langKey]?.gptError || "Something went wrong");
  }
};

     /*const handleGptSearchClick = async() => {
    // Implement the search functionality here
     console.log(searchText.current.value);

     const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
       // model: "gpt-3.5-turbo",
      });

      if (!gptResults?.choices || gptResults.choices.length === 0) {
        console.error("Unexpected GPT response:", gptResults);
        alert(lang[langKey]?.gptError || "Failed to get suggestions. Please try again.");
        return;
      }

    console.log(gptResults.choices[0]?.message?.content);
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (err) {
      console.error("GPT request failed:", err);
      alert(lang[langKey]?.gptError || "An error occurred while fetching suggestions.");
    }

  }; */


  return (

    <div className="relative w-full h-screen">
    <img
      src={BG_URL}
      alt="background"
      className="absolute w-full h-full object-cover -z-10"
    /> 

    <div className=" pt-[10%] flex justify-center">

        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={ (e) => { e.preventDefault(); }}>  

            <input ref={searchText}    type="text" 

            placeholder={lang[langKey].gptSearchPlaceholder}

             className=" m-4 p-4  rounded-lg border border-gray-300 col-span-10"/>

            <button className="m-4 py-2 px-2 bg-red-600 text-white rounded-lg col-span-2"
            
            onClick = {handleGptSearchClick}> 
              
              {lang[langKey].search}  </button>
        </form> 
        
    </div>
    </div>
  )
} 

  

export default GptSearchBar;
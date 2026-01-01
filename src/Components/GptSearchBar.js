import lang from "../utils/languageConstants"
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);
  return (

    <div className=" pt-[10%] flex justify-center">

        <form className="w-1/2 bg-black grid grid-cols-12">

            <input type="text" 

            placeholder={lang[langKey].gptSearchPlaceholder}

             className=" m-4 p-4  rounded-lg border border-gray-300 col-span-10"/>

            <button className="m-4 py-2 px-2 bg-red-600 text-white rounded-lg col-span-2"> {lang[langKey].search}  </button>
        </form> 
    </div>
  )
}

export default GptSearchBar;
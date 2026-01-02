
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  
if (!posterPath) return null;

  return (
    <div className="w-48 m-4 hover:scale-105 ease-in-out duration-300">
        
        <img alt = "Movie Card" 
    
    src={IMG_CDN_URL + posterPath}/></div>
  )
}

export default MovieCard;
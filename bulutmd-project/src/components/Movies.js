import {useState} from "react";
import Webdesign from "../Webdesign"

export default function Movies(){
  const [movies,setMovies] = useState(["movie 1","movie 2", "movie 3", "movie 4","movie 5"])

  const moviesMap = movies.map(movie => <h2>{movie}</h2>)
  return(
    <Webdesign moviesMap={moviesMap} render={()=>(
     <div className="movies--container">
        {moviesMap}
     </div>
    )} />
  )
}
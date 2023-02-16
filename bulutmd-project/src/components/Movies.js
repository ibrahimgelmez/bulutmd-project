import {useState} from "react";
import Webdesign from "../Webdesign";
import SampleData from "../sample.json";

//images
import witcherposter from "../imgs/witcher-2021.png"

export default function Movies(){
  const [data,setData] = useState(SampleData.entries)
  const movies = data.filter(data => data.programType === "movie")


  const moviesMap = movies.map(movie => 
  <div className = "releasedmovies">
    <img className="released--poster" src={witcherposter} />
    <h2>{movie.title}</h2>
  </div>
  )
  return(
    <Webdesign moviesMap={moviesMap} render={()=>(
      <>
      <input icon="search" className="search-input" placeholder="Film / Dizi / Oyuncu ara"/>
      <div className="movies--container">
          {moviesMap}
      </div>
     </>
    )} />
  )
}
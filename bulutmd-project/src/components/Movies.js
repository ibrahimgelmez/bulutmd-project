import {useState} from "react";
import Webdesign from "../Webdesign";
import SampleData from "../sample.json";

//images
import jumanjiposter from "../imgs/jumanji-nextlevel.png"

export default function Movies(){
  const [data,setData] = useState(SampleData.entries)  //Burada bir nevi bilinçli kod tekrarı yapmış oldum bu alanı da 
  //bir film sitesinden örnek verirsek belgesel-korku-aksiyon vs. gibi çeşitli kategori sayfaları var ve bunların her biri için
  // aşağı yukarı aynı çeşit görünümler kullanılıyor.bu görünümleri her seferinde tekrar tekrar kopyalamak yerine prop render 
  //yöntemi beni kodumu tekrarlamaktan kurtarırdı.Fakat şuan bu test projesi için sadece 2 sayfa yapmam gerektiğinden dolayı seriesteki kodu kopyalayıp buraya yapıştırdım.
  const movies = data.filter(data => data.programType === "movie")
  const [inputText,setInputText] = useState("")

  const [optionValue,setOptionValue] = useState()

  function inputHandler(e){
    const lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }


  const filteredData = movies.filter((movie)=>{
    if(inputText === ''){
      return movie
    }else{
      return movie.title.toLowerCase().includes(inputText)
    }
  })  
  const sortedArray = filteredData.sort((a,b)=>{      
    if(optionValue === "yenideneskiye"){              
      return b.releaseYear - a.releaseYear  
    }else if(optionValue === "eskidenyeniye"){   
      return a.releaseYear - b.releaseYear       
    }                                            
  })

  const moviesMap = sortedArray.map(movie => 
  <div className = "released">
    <img className="released--poster" src={jumanjiposter} />
    <h2>{movie.title}</h2>
  </div>
  )

  return(
    <Webdesign moviesMap={moviesMap} render={()=>(
      <>
      <div className="find-and-sort">
        <input 
        onChange={inputHandler} 
        className="search-input" 
        placeholder="Film ara"/>

        <select defaultValue="rastgele" onChange={(e)=>setOptionValue(e.target.value)} className="sort-select">
        <option value="yenideneskiye">Yeniye Göre Sırala</option>
        <option value="eskidenyeniye">Eskiye Göre Sırala</option>
        <option value="puanagöre">Puana Göre Sırala</option>
        <option value="rastgele">Rastgele Sırala</option>
        </select>
      </div>
      

      <div className="release--container">
          {moviesMap}
      </div>
     </>
    )} />
  )
}
import {useState} from "react";
import Webdesign from "../Webdesign";
import SampleData from "../sample.json";

//images
import witcherposter from "../imgs/witcher-2021.png"

export default function Movies(){
  const [data,setData] = useState(SampleData.entries)
  const [inputText,setInputText] = useState("")

  const [optionValue,setOptionValue] = useState()


  //Gelen veri setinden dizi ve filmleri ayırmak için filter metodunu kullandım.
  const series = data.filter(data => data.programType === "series")  


  //Burada arama çubuğunda girdiğim textleri elde edebilmek için bir fonksiyon yazdım.
  function inputHandler(e){
    const lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  //yukarıda elde ettiğim textleri burada includes fonksiyonu sayesindefilmlerin başlıklarında bu textlerin olup olmadığını kontrol ettim ve dahil olanları 
  //filteredData değişkenine kaydettim.
  const filteredData = series.filter((series)=>{ 
    if(inputText === ''){                        
      return series
    }else{
      return series.title.toLowerCase().includes(inputText)
    }
  })

  const sortedArray = filteredData.sort((a,b)=>{      
    if(optionValue === "yenideneskiye"){              
      return b.releaseYear - a.releaseYear  
    }else if(optionValue === "eskidenyeniye"){   
      return a.releaseYear - b.releaseYear       
    }                                            

  })

  console.log(sortedArray)
  //filtrelenmiş  dataların her birini map metoduyla gezerek ekrana yazdırdım.released isimlendirmesinin doğru bir seçim olup olmadığıyla alakalı şüphelerim var.
  const seriesMap = sortedArray.map(series => 
  <div className = "released">   
    <img className="released--poster" src={witcherposter} />
    <h2>{series.title}</h2>
  </div>
  )

  return(
    //Burada da aynı web desenini kullanacağım için önceden yazdığım web deseni içerisine bunları prop geçtim.
    <Webdesign seriesMap={seriesMap} render={()=>(   
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
          {seriesMap}
      </div>
     </>
    )} />
  )
}
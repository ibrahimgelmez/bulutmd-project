import React from "react";
import Webdesign from "../Webdesign"

//router-dom
import {Link} from "react-router-dom";

//images
import jumanjiposter from "../imgs/jumanji-nextlevel.png"
import witcherposter from "../imgs/witcher-2021.png"

export default function Homepage(){
  return(
    <Webdesign render={()=>(                 

      <main className="main">
        <div className="main--movies">
          <img className="main--jumanjiposter" src={jumanjiposter}/>
          <h2>Movies</h2>
        </div>
        <div className="main--series">
          <img className="main--witcherposter" src={witcherposter} />
          <h2>Series</h2>
        </div>
      </main>

    )}/>
      

    

      
    
  )
}
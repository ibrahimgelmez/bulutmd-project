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
          
          <Link to="/movies"><img alt="jumanjiposter" className="main--jumanjiposter" src={jumanjiposter}/></Link>
          <h2>Filmler</h2>
          
        </div>
        <div className="main--series">
          <Link to="/series"><img alt="witcherposter" className="main--witcherposter" src={witcherposter} /></Link>
          <h2>Diziler</h2>
        </div>
      </main>

    )}/>
      

    

      
    
  )
}
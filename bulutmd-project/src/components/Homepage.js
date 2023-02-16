import React from "react";

//router-dom
import {Link} from "react-router-dom";

//images
import facebooklogo from "../imgs/facebook-blacklogo.png"
import twitterlogo from "../imgs/twitter-blacklogo.png"
import jumanjiposter from "../imgs/jumanji-nextlevel.png"
import witcherposter from "../imgs/witcher-2021.png"

export default function Homepage(){
  return(
    <>
      <header className="header">
        <div className="title">
          <h1 className="header--title">BulutMD</h1>
          <div className="header--buttons">
            <button className="login-button">Giriş</button>
            <button className="trial-button">Deneme Başlat</button>
          </div>
          
        </div>
        
        <h2 className="header--downtitle">Popüler Başlıklar</h2>
      </header>

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

      <footer className="footer">
        <div className="footer--text">
          <Link style={{textDecoration : "none",color:"white"}} to="/">Anasayfa </Link>
          <p>| Kullanıcı Sözleşmesi</p>
          <p>| Gizlilik Sözleşmesi</p>
        </div>
        {/* <img src={facebooklogo}></img> */}
      </footer>
    </>
  )
}
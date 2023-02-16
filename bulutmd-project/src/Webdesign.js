import React,{Component} from "react"
import {Link} from "react-router-dom"

//images
import facebooklogo from "./imgs/facebook-256.png"
import twitterlogo from "./imgs/twitter-256.png"

class Webdesign extends Component {   //Bu web desenini birçok sayfada kullanmam gerekeceği için kod tekrarı yapmamak
  //adına bir web design componenti oluşturdum ve bu deseni kullanacağım sayfaları buraya prop geçerek birleştirdim.

  render() {
      return (
        <div>
          <header className="header">  
            <div className="title">
              <Link to="/" style={{textDecoration:"none",color:"white"}}><h1 className="header--title">BulutMD</h1></Link>
              <div className="header--buttons">
                <button className="login-button">Giriş</button>
                <button className="trial-button">Deneme Başlat</button>
              </div>
            </div>  
            <h2 className="header--downtitle">Popüler Başlıklar</h2>
          </header>

          {this.props.render()}
          
          <footer className="footer">
            <div className="footer--text">
              <Link style={{textDecoration : "none",color:"white"}} to="/">Anasayfa </Link>
              <p>| Kullanıcı Sözleşmesi</p>
              <p>| Gizlilik Sözleşmesi</p>
            </div>
            <a href="https://www.facebook.com/bulutmdyazilim/" target={"_blank"}><img className="footer-facelogo" src={facebooklogo}/></a>
            <a href="https://twitter.com/bulut_mdyazilim" target={"_blank"}><img className="footer-tweetlogo" src={twitterlogo}/></a>
          </footer>
        </div>
      )
  }
}

export default Webdesign
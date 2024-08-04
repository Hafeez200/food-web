import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-img">
        <a href="https://www.facebook.com"><img src={facebook} alt='facebook-img' style={{width:"40px"}}/></a>
        <a href="https://www.instagram.com"><img src={instagram} alt="insta-img"  style={{width:"40px"}}/></a>
        <a href="https://www.twitter.com"><img src={twitter} alt="twitter-img"  style={{width:"40px"}}/></a>
        </div>
        <p>Copyright &copy; 2024.All rights reserved. </p>
    </div>

  )
}

export default Footer
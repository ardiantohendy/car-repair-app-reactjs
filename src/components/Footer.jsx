import instagram from "../assets/icon/instagram.png";
import facebook from "../assets/icon/facebook.png";
import twitter from "../assets/icon/twitter.png";
import youtube from "../assets/icon/youtube.png";
import mail from "../assets/icon/mail.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="logo">
            <h2>DOCTOR CAR</h2>
          </div>
          <div className="list">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Book</a>
            <a href="">Contac Us</a>
          </div>
        </div>
        <div className="bot">
          <h3>Stay in Touch</h3>
          <div className="listEn">
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
            <a href="#">
              <img src={mail} alt="" />
            </a>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
          </div>
          <p>&copy;Doctor Car, All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

import topGarage1 from "../assets/image/topgarage1.jpg";
import topGarage2 from "../assets/image/topgarage2.jpg";
import topGarage3 from "../assets/image/topgarage3.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="aboutPage">
        <div className="img">
          <img src={topGarage1} alt="image" />
          <div className="imgInside">
            <img className="first" src={topGarage2} alt="" />
            <img className="second" src={topGarage3} alt="" />
          </div>
        </div>
        <div className="desc">
          <h2>WELCOME TO DOCTOR CAR</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quas distinctio amet sed eius nulla consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, neque deserunt pariatur nihil veniam tempore a magni
            minima quo provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nulla incidunt at! Nam eveniet perferendis quibusdam incidunt? Labore, velit sed.
          </p>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, fugiat?</h3>
          <div className="btnList">
            <button>About Us</button>
            <button>Our Services</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

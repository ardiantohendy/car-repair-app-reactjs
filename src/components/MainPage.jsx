import Header from "./Header";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homePage">
        <Header />
        <div className="content">
          <div className="mid">
            <div className="text">
              <h1>
                FIND THE BEST <br />
                SERVICE FOR YOUR CAR
              </h1>
              <p className="redOne">We Serve Better Than Any Other</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam exercitationem facilis Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="btn">
              <button className="bookBtn" onClick={() => navigate("/book")}>
                Book Now
              </button>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

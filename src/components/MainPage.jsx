import Header from "./Header";

const MainPage = () => {
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
              <button className="bookBtn">Book Now</button>
              <button>Learn More</button>
            </div>
          </div>
          <div className="bot">
            <div className="listBot">
              <div className="first">
                <h2>Car Cleaning & Washing</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas illo esse nulla rem?</p>
              </div>
              <div className="second">
                <h2>Maintenance & Security Check</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas illo esse nulla rem?</p>
              </div>
              <div className="third">
                <h2>Repair Service & Inspections</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptas illo esse nulla rem?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

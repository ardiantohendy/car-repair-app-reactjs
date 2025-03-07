import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo">DOCTOR CAR</div>
      <div className="list">
        <ul>
          <li>
            <a onClick={() => navigate("/")}>Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            {/* UNTUK ROUTER TAG A PERLU DIGANTI KE BUSTTON */}
            <a onClick={() => navigate("/book")}>Book</a>
          </li>
          <li>
            <a className="log">Log In</a>
          </li>
          <li>
            <a className="reg" onClick={() => navigate("/register")}>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

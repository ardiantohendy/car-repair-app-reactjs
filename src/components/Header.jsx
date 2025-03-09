import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../api/api";
const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogOut = async () => {
    try {
      await logout(localStorage.getItem("refresh"));
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout Failed!", error);
    }
  };

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
            <a onClick={() => navigate("/book")}>Book</a>
          </li>
          {isAuthenticated ? (
            <li>
              <a className="reg" onClick={handleLogOut}>
                Log Out
              </a>
            </li>
          ) : (
            <>
              <li>
                <a className="log" onClick={() => navigate("/login")}>
                  Log In
                </a>
              </li>
              <li>
                <a className="reg" onClick={() => navigate("/register")}>
                  Sign Up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/api";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user);
      alert("Log in successful!");
      setUser({
        username: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.log("Login failed", error);
    }
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <h2>Welcome To Doctor Car</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam earum, atque facilis assumenda rem adipisci cumque dolores? Exercitationem, iste tempora?</p>
          <form onSubmit={handleSubmit}>
            <div className="username">
              <label>Username:</label>
              <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} /> {/* need value and onChange */}
            </div>
            <div className="password">
              <label>Password:</label>
              <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} /> {/* need value and onChange */}
            </div>
            <div className="button">
              <button type="submit">Log in</button>
            </div>
          </form>
          <p className="donthave">
            Do not have any account yet? <a onClick={() => navigate("/register")}>register</a> instead
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;

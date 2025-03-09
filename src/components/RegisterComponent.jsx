import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../api/api";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", email: "", password: "", password2: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(user);
      alert("Registration successful!");
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  return (
    <>
      <div className="register">
        <div className="container">
          <h2>Welcome To Doctor Car</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam earum, atque facilis assumenda rem adipisci cumque dolores? Exercitationem, iste tempora?</p>
          <form onSubmit={handleSubmit}>
            <div className="username">
              <label>Username:</label>
              <input type="text" name="username" placeholder="Username" onChange={handleChange} /> {/* need value and onChange */}
            </div>
            <div className="email">
              <label>Email:</label>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} /> {/* need value and onChange */}
            </div>
            <div className="password">
              <label>Password:</label>
              <input type="password" name="password" placeholder="Password" onChange={handleChange} /> {/* need value and onChange */}
            </div>
            <div className="password">
              <label>Repeat Password:</label>
              <input type="password" name="password2" placeholder="Repeat Password" onChange={handleChange} /> {/* need value and onChange */}
            </div>
            <div className="button">
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <p className="alre">
            Already have an account? <a onClick={() => navigate("/login")}>login</a> instead
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;

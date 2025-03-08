import { useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login">
        <div className="container">
          <h2>Welcome To Doctor Car</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam earum, atque facilis assumenda rem adipisci cumque dolores? Exercitationem, iste tempora?</p>
          <form action="">
            <div className="username">
              <label>Username:</label>
              <input type="text" name="username" /> {/* need value and onChange */}
            </div>
            <div className="password">
              <label>Password:</label>
              <input type="password" name="password" /> {/* need value and onChange */}
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

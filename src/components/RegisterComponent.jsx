const RegisterComponent = () => {
  return (
    <>
      <div className="register">
        <div className="container">
          <h2>Welcome To Doctor Car</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam earum, atque facilis assumenda rem adipisci cumque dolores? Exercitationem, iste tempora?</p>
          <form action="">
            <div className="username">
              <label>Username:</label>
              <input type="text" name="username" /> {/* need value and onChange */}
            </div>
            <div className="email">
              <label>Email:</label>
              <input type="email" name="email" /> {/* need value and onChange */}
            </div>
            <div className="password">
              <label>Password:</label>
              <input type="password" name="password" /> {/* need value and onChange */}
            </div>
            <div className="password">
              <label>Repeat Password:</label>
              <input type="password" name="password2" /> {/* need value and onChange */}
            </div>
            <div className="button">
              <button type="submit">Register</button>
            </div>
          </form>
          <p>Already have an account? Login instead</p>
          <a href="">Login</a>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;

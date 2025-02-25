const Header = () => {
  return (
    <header>
      <div className="logo">DOCTOR CAR</div>
      <div className="list">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Book</a>
          </li>
          <li>
            <a className="log" href="#">
              Log In
            </a>
          </li>
          <li>
            <a className="reg" href="#">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

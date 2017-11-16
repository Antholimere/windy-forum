import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div id="navbar">
      <Link to="/" className="nav_button">
        <p>Home</p>
      </Link>
      <Link to="/add" className="nav_button">
        <p>ADD SPOT</p>
      </Link>
    </div>
  )
}

export default Header;

import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="NavbarItems" onClick={toggleClick}>
      <h1 className="navbar-logo">
        React
        <i className="fa-react fab"></i>
      </h1>
      <div className="menu-icons">
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="./Signup">
        <Button>Sign Up</Button>
      </Link>
    </nav>
  );
}

export default Navbar;

import React from "react";
import "../stylesheets/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>PAMELLA ORGOR</h1>
      <nav>
        <ul className="navbar">
          <li className="nav-links">ABOUT</li>
          <li className="nav-links">SERVICES</li>
          <li className="nav-links">BOOKS</li>
          <li className="nav-links">COMMUNITY</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

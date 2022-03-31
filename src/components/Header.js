import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.css";

const Header = () => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    let windowSize = window.innerWidth;
    if (windowSize >= 992) {
      setWidth(true);
    }
  }, []);

  window.addEventListener("resize", () => {
    let windowSize = window.innerWidth;
    if (windowSize >= 992) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  });

  if (width === true) {
    return (
      <nav className="header navbar navbar-expand-lg navbar-light flex-column">
        <div className="container-fluid justify-content-between">
          <Link className="navbar-brand" to="/">
            <h2>PAMELLA OH</h2>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/commercial">
                  COMMERCIAL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/speaking">
                  PUBLIC SPEAKING
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  BOOKS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
                  COMMUNITY WORK
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="header navbar navbar-expand-lg navbar-light flex-column">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand text-center" to="/">
          <h2>PAMELLA OH</h2>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/commercial">
                COMMERCIAL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/speaking">
                PUBLIC SPEAKING
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">
                BOOKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community">
                COMMUNITY WORK
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

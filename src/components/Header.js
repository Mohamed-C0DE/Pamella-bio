import React, { useState, useEffect } from "react";
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
          <a className="navbar-brand" href="#">
            <h2>PAMELLA ORGOR</h2>
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BOOKS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  COMMUNITY
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="header navbar navbar-expand-lg navbar-light flex-column">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="#">
          <h2>PAMELLA ORGOR</h2>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BOOKS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                COMMUNITY
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

{
  /* <header className="header">
  <h1>PAMELLA ORGOR</h1>
  <nav>
    <ul className="navbar">
      <li className="nav-links">ABOUT</li>
      <li className="nav-links">SERVICES</li>
      <li className="nav-links">BOOKS</li>
      <li className="nav-links">COMMUNITY</li>
    </ul>
  </nav>
</header> */
}

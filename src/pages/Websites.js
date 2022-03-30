import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Main from "../UI/Main";
import "../stylesheets/Websites.css";

const Websites = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <Main>
        <div className="websites">
          <h3>Websites</h3>
          <div className="websites-gallery">
            <div className="column">
              <a href="https://dankbeautyco.com/" target="_blank">
                <div className="img img1">
                  <p>DANK BEAUTY</p>
                </div>
              </a>
              <a href="https://pamohherbs.com/home/" target="_blank">
                <div className="img img2">
                  <p>PAM OH HERBS</p>
                </div>
              </a>
              <a href="https://moggpam.com/" target="_blank">
                <div className="img img3">
                  <p>MOGGPAM</p>
                </div>
              </a>
            </div>
            <div className="column">
              <a href="https://dankluxeproperties.com/" target="_blank">
                <div className="img img4">
                  <p>DANK LUXE PROPERTIES</p>
                </div>
              </a>
              <a href="https://myorganicchef.com/" target="_blank">
                <div className="img img5">
                  <p>MY ORGANIC CHEF</p>
                </div>
              </a>
              <a href="https://pamskids.com/" target="_blank">
                <div className="img img6">
                  <p>PAMS KIDS</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Websites;

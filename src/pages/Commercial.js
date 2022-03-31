import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Main from "../UI/Main";
import "../stylesheets/Commercial.css";

const Commercial = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <Main>
        <div className="commercial">
          <h3>Commercial</h3>
          <div className="commercial-gallery">
            <a
              href="https://dankbeautyco.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img img1">
                <p>DANK BEAUTY</p>
              </div>
            </a>

            <a
              href="https://pamohherbs.com/home/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img img2">
                <p>PAM OH HERBS</p>
              </div>
            </a>

            <a href="https://moggpam.com/" target="_blank" rel="noreferrer">
              <div className="img img3">
                <p>MOGGPAM</p>
              </div>
            </a>

            <a
              href="https://dankluxeproperties.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img img4">
                <p>DANK LUXE PROPERTIES</p>
              </div>
            </a>

            <a
              href="https://myorganicchef.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img img5">
                <p>MY ORGANIC CHEF</p>
              </div>
            </a>

            <a href="https://pamskids.com/" target="_blank" rel="noreferrer">
              <div className="img img6">
                <p>PAMS KIDS</p>
              </div>
            </a>

            <a
              href="https://dankyums.ca/password"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img img7">
                <p>DANK YUMS</p>
              </div>
            </a>

            <a href="https://biobugs.ca/" target="_blank" rel="noreferrer">
              <div className="img img8">
                <p>BIO BUGS</p>
              </div>
            </a>

            <a
              href="https://itsorganic.ca/password"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img img9">
                <p>IT'S ORGANIC</p>
              </div>
            </a>

            <a
              href="https://thedankgroup.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img img10">
                <p>THE DANK GROUP</p>
              </div>
            </a>

            <a href="http://dankboutique.ca/" target="_blank" rel="noreferrer">
              <div className="img img11">
                <p>DANK BOUTIQUE</p>
              </div>
            </a>

            <a href="http://dankfarms.tech/" target="_blank" rel="noreferrer">
              <div className="img img12">
                <p>DANK FARMS</p>
              </div>
            </a>
          </div>
        </div>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Commercial;

import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Main from "../UI/Main";
import SectionDivider from "../UI/SectionDivider";
import Footer from "../components/Footer";
import "../stylesheets/Homepage.css";

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <div className="homepage">
          <div className="jumbotron"></div>
          <section className="intro">
            <h2>Professional Public Speaker & Serial Entrepreneur</h2>
            <p>
              Pamella Oh is a professional public speaker and serial
              entrepreneur whose vast experience in building successful,
              world-class businesses cut across several industries including
              airbnb, fashion, beauty and cosmetics and agriculture. Pamella is
              well renowned for turning ideas into reality, and her reputation
              for initiating projects and successfully executing projects is
              second to none. Pamella is a results-driven entrepreneur with
              expertise in launching successful products and building profitable
              brands. Her experience and accomplishments over the years have
              proven her to be an astute entrepreneur and business leader.
            </p>
          </section>

          <div className="row">
            <div className="column">
              <Link to="/about">
                <div className="img img1">
                  <p>About</p>
                </div>
              </Link>
              <Link to="/websites">
                <div className="img img2">
                  <p>Websites</p>
                </div>
              </Link>
            </div>
            <div className="column">
              <Link to="/speaking">
                <div className="img img3">
                  <p>Public Speaking</p>
                </div>
              </Link>
            </div>
            <div className="column">
              <Link to="/books">
                <div className="img img4">
                  <p>Books</p>
                </div>
              </Link>
              <Link to="/community">
                <div className="img img5">
                  <p>Community Work</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Homepage;

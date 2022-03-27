import { Fragment } from "react";
import Header from "../components/Header";
import Main from "../UI/Main";
import SectionDivider from "../UI/SectionDivider";
import "../stylesheets/Homepage.css";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <Main className="homepage">
        <div className="jumbotron"></div>
        <SectionDivider />
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Homepage;

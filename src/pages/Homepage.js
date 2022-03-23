import { Fragment } from "react";
import Header from "../components/Header";
import Main from "../UI/Main";
import "../stylesheets/Homepage.css";

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <Main className="homepage">
        <div className="jumbotron"></div>
      </Main>
    </Fragment>
  );
};

export default Homepage;

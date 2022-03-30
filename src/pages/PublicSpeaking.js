import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../UI/Main";
import "../stylesheets/PublicSpeaking.css";

const Services = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <div className="speaking">
          <div className="speaking-row">
            <div className="column">
              <img src="https://images.unsplash.com/photo-1574802406791-ef6898f311d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=382&q=80" />
            </div>
            <div className="column">
              <h3>Hosting An Event About Entrepreneurship or Startups?</h3>
              <p>Look no further</p>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Services;

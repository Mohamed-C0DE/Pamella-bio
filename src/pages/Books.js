import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../UI/Main";

const Books = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <h1>Books Page</h1>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Books;

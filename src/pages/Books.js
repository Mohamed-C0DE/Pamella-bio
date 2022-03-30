import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Main from "../UI/Main";
import "../stylesheets/Books.css";

const Books = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <Main>
        <div className="books">
          <h3>Books</h3>
          <div className="books-row">
            <div className="column">
              <div className="card">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51Rt4lDo8vL._SX404_BO1,204,203,200_.jpg"
                  className="card-img-top"
                  alt="book cover"
                />
                <div className="card-body">
                  <div>
                    <h5 className="card-title">ABC Medicinal Herbs</h5>
                    <p className="card-text">
                      Introduce your children to the world of using herbs not
                      only for cooking but for healing and therapeutic use. This
                      book includes a creative blend of practical information,
                      and interesting herbal tidbits. It helps parents to easily
                      introduce their children to the wonderful world of herbs
                      and makes learning about herbs fun and educational for
                      their inquisitive minds.
                    </p>
                  </div>
                  <a
                    href="https://www.amazon.ca/ABC-Medicinal-Herbs-Pamella-Orgor/dp/1777961572/ref=sr_1_1?qid=1648604233&refinements=p_27%3APamella+Orgor&s=books&sr=1-1&text=Pamella+Orgor"
                    className="btn btn-dark"
                    target="_blank"
                  >
                    View Book
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/41bVEEW8NXL._SX404_BO1,204,203,200_.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <div>
                    <h5 className="card-title">The Cannabis Cookbook</h5>
                    <p className="card-text">
                      Whether you're looking for the perfect midnight snack or
                      you want to take dinnertime to a higher level, these
                      delectable recipes will spark the interest of budding
                      chefs and experienced cannabis cooks. The cannabis
                      cookbook contains 25+ delicious recipes including cannabis
                      gummy bears, breakfast, brownies, oils. It ventures boldly
                      beyond pot brownies with delicious and unique baked
                      confections as well as innovative savory treats.
                    </p>
                  </div>
                  <a
                    href="https://www.amazon.ca/Cannabis-Cookbook-Pamella-Orgor/dp/177796153X/ref=sr_1_2?qid=1648604233&refinements=p_27%3APamella+Orgor&s=books&sr=1-2&text=Pamella+Orgor"
                    className="btn btn-dark"
                    target="_blank"
                  >
                    View Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Books;

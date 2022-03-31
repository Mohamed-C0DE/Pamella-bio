import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Main from "../UI/Main";
import Image from "../images/IMG_1264.png";
import "../stylesheets/About.css";

const About = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <Main>
        <div className="about">
          <div>
            <p>
              <img src={Image} alt="avatar" />
              <span>
                <h3>About</h3>
              </span>
              Pamella Oh is a professional public speaker and serial
              entrepreneur whose vast experience in building successful,
              world-class businesses cut across several industries including
              airbnb, fashion, beauty and cosmetics and agriculture. <br />
              <br />
              Born with innate business acumen, Pamella’s entrepreneurial
              journey began at the age of 12 when she started custom designing
              sneakers for her classmates in middle school. Soon, she assumed
              more responsibilities when she began working, managing and selling
              products at her family’s African artifacts store at the age of 14.
              She successfully managed these roles until her high school
              graduation. In 2014, she started PAM’S KIDS LLC; a case management
              agency for children and pregnant women for the State of Texas. She
              founded this social enterprise with a mission to help pregnant
              women and children get access to educational services and medical
              care. Pamella is well renowned for turning ideas into reality, and
              her reputation for initiating projects and successfully executing
              projects is second to none. In 2016, she established Pam Oh Herbs,
              a natural and organic herbal teas and skincare products. She
              maintains a strong dedication to helping people to lead quality
              and healthier lives through the use of organic products. Under
              Mogg Pam’s outstanding leadership, Pam Oh Herb’s business
              operations have expanded into an agricultural company, where fresh
              organic herb and vegetable produce are sourced and supplied to
              international grocery stores. In 2021, she founded Dank
              Enterprises in Canada, and Dank Enterprises LLC, licensed in USA.
              She is also the owner of Mogg Pam, a custom made African clothing
              brand, currently in operations in Houston, Texas and Calgary,
              Alberta. <br />
              <br />
              Pamella is a results-driven entrepreneur with expertise in
              launching successful products and building profitable brands. Her
              experience and accomplishments over the years have proven her to
              be an astute entrepreneur and business leader.
            </p>
          </div>
        </div>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default About;

import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Main from "../UI/Main";
import "../stylesheets/PublicSpeaking.css";

const Services = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <Main>
        <div className="speaking">
          <div className="speaking-row">
            <div className="column">
              <div className="img"></div>
            </div>
            <div className="column">
              <h3>Hosting An Event About Entrepreneurship or Startups?</h3>
              <p>
                Having experience building successful, world-class businesses
                across several industries, I would love to share my experience
                to help others achieve success. Fill out the form below to
                contact me if your in need of a guest speaker.
              </p>
              <h4>Contact Form</h4>
              <form
                name="contact-form"
                method="post"
                data-netlify="true"
                onSubmit="submit"
                className="form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <label>Name:</label>
                <input type="text" name="name" required />
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Message:</label>
                <textarea
                  name="message"
                  placeholder="Enter details like time, address, event subject, and what to speak about."
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Services;

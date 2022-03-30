import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Main from "../UI/Main";
import "../stylesheets/Community.css";

const Community = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <Main>
        <div className="community">
          <h3>Charities supported</h3>
          <div className="community-row">
            <div className="card">
              <a href="https://www.calgaryfoodbank.com/" target="_blank">
                <img
                  src="https://www.calgaryfoodbank.com/wp-content/uploads/2018/02/CalgaryFoodBank_Logo.png"
                  className="card-img-top"
                  alt="charity logo"
                />
              </a>
            </div>

            <div className="card">
              <a href="https://minniesfoodpantry.org/" target="_blank">
                <img
                  src="https://minniesfoodpantry.org/wp-content/uploads/2021/02/minnies-food-pantry-logo.png"
                  className="card-img-top"
                  alt="charity logo"
                />
              </a>
            </div>

            {/* <div className="card">
                <a href="https://rapereliefshelter.bc.ca/" target="_blank">
                  <img
                    src="https://rapereliefshelter.bc.ca/wp-content/uploads/2020/05/VRRWS_Logo_Horizontal_Black.png.webp"
                    className="card-img-top"
                    alt="charity logo"
                  />
                </a>
              </div> */}

            <div className="card">
              <a href="https://rapereliefshelter.bc.ca/" target="_blank">
                <img
                  src="https://rapereliefshelter.bc.ca/wp-content/uploads/2020/05/VRRWS_Logo_Horizontal_Black.png.webp"
                  className="card-img-top"
                  alt="charity logo"
                />
              </a>
            </div>

            <div className="card">
              <a href="https://www.northshorewomen.ca/" target="_blank">
                <img
                  src="https://static.wixstatic.com/media/3231fc_e0f14b6fddc44fa98996321d4802b42e~mv2.png/v1/crop/x_39,y_0,w_631,h_189/fill/w_493,h_150,al_c,usm_0.66_1.00_0.01,enc_auto/Full%20Logo_edited.png"
                  className="card-img-top"
                  alt="charity logo"
                />
              </a>
            </div>

            {/* <div className="card">
                <a href="https://www.northshorewomen.ca/" target="_blank">
                  <img
                    src="https://static.wixstatic.com/media/3231fc_e0f14b6fddc44fa98996321d4802b42e~mv2.png/v1/crop/x_39,y_0,w_631,h_189/fill/w_493,h_150,al_c,usm_0.66_1.00_0.01,enc_auto/Full%20Logo_edited.png"
                    className="card-img-top"
                    alt="charity logo"
                  />
                </a>
              </div> */}

            <div className="card">
              <a href="https://www.calgaryfoodbank.com/" target="_blank">
                <img
                  src="https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/61955724_10161728583450403_4521169183232229376_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sh-cpT3tIIUAX9xlyLP&_nc_ht=scontent-yyz1-1.xx&oh=00_AT9O0fKWAbAFQ_1qXSZWxfAtGTqY9B7fPmCOR0YEKRZyew&oe=626949F5"
                  className="card-img-top"
                  alt="charity logo"
                />
              </a>
            </div>

            <div className="card">
              <a href="https://assistancecenter.org/" target="_blank">
                <img
                  src="https://img1.wsimg.com/isteam/ip/f616a088-45f5-494f-8116-f00014ef384a/Assistance%20Center%20of%20Collin%20County%20Left%20.png/:/rs=w:294,h:102,cg:true,m/cr=w:294,h:102/qt=q:95"
                  className="card-img-top"
                  alt="charity logo"
                />
              </a>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </Fragment>
  );
};

export default Community;

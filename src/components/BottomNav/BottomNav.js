import PropTypes from "prop-types";
import React from "react";
// import Img from "gatsby-image"
import Logo from "./../../assets/images/logoUpdate.png";
// import "bootstrap/dist/css/bootstrap.css"
import "./BottomNav.css";
const BottomNav = () => {
  return (
    <div style={{ display: `flex`, alignItems: `center`, height: 400 }}>
      <img
        class="img-fluid"
        width={200}
        style={{ marginLeft: "12%", marginRight: "-19%" }}
        height={200}
        src={Logo}
      ></img>
      <div style={{ margin: `auto`, width: 600 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div style={{ fontSize: 12 }}>
                CONTACT US
                <hr style={{ width: 140, marginBottom: 6, marginTop: 10 }} />
              </div>
              <div style={{ marginTop: -2 }}>
                <span className="addresssLinks">
                370 Thornton Road, <br />
                </span>
                <span className="addresssLinks">
                Bradford, BD8 8LQ, <br />
                </span>
                <span className="addresssLinks">
                United Kingdom.<br />
                </span>
                <span className="addresssLinks">contact@npo.org</span>
              </div>
            </div>
            <div className="col-4">
              <div style={{ fontSize: 12 }}>
                LINKS
                <hr style={{ width: 140, marginBottom: 6, marginTop: 10 }} />
              </div>
              <div style={{ marginTop: -2 }}>
                <a className="addresssLinks" href="/Schools">
                  What we do
                </a>
                <br />
                <a className="addresssLinks" href="/Pvps">
                  Where we work
                </a>
                <br />
                <a className="addresssLinks" href="/GetInvolved">
                  Get Involved
                </a>
                <br />
                <a className="addresssLinks" href="/News">
                  Latest news
                </a>
              </div>
            </div>
            <div className="col-4">
              <div style={{ fontSize: 12 }}>
                FOLLOW US
                <hr style={{ width: 140, marginBottom: 6, marginTop: 10 }} />
              </div>
              <div style={{ marginTop: -2 }}>
                <a className="addresssLinks" href="#">
                  Facebook
                </a>
                <br />
                <a className="addresssLinks" href="#">
                  Twitter
                </a>
                <br />
                <a className="addresssLinks" href="#">
                  Instagram
                </a>
                <br />
                <a className="addresssLinks" href="#">
                  Medium
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

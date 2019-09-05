import PropTypes from "prop-types";
import React from "react";
import logoImg from "./../../assets/images/logo.png";
import "./Header.css";
const Header = ({ siteTitle, siteSubTitle }) => (
  <div className="headContainer">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <a href="/" className="logoStyle">
            <img src={logoImg} class="img-fluid" width={170} height={130}></img>
          </a>
        </div>
        <div className="col-sm-6">
          <p className="headerSubHeading">{siteSubTitle}</p>
        </div>
        <div className="col-sm-4">
          <a href="/Donate" className="donatebtn">
            <p>DONATE NOW</p>
          </a>
        </div>
      </div>
    </div>
    {/* <hr /> */}
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;

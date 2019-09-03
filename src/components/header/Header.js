import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoImg from "./../../images/logo.png"
import headerStyle from "./Header.module.css"
const Header = ({ siteTitle, siteSubTitle }) => (
  <div className={headerStyle.headContainer}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-2">
          <a href="/" className={headerStyle.logoStyle}>
            <img src={logoImg} class="img-fluid" width={170} height={130}></img>
          </a>
        </div>
        <div className="col-sm-6">
          <p className={headerStyle.headerSubHeading}>{siteSubTitle}</p>
        </div>
        <div className="col-sm-4">
          <a href="/Donate" className={headerStyle.donatebtn}>
            <p>DONATE NOW</p>
          </a>
        </div>
      </div>
    </div>
    {/* <hr /> */}
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

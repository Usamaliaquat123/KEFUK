import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import headerStyle from "./header.module.css"
const Header = ({ siteTitle, siteSubTitle }) => (
  <header className={headerStyle.headContainer}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <p className={headerStyle.headerSubHeading}>
            <Link to="/" className={headerStyle.subHeadingStyles}>
              {siteSubTitle}
            </Link>
          </p>
        </div>
        <div className="col-sm-6">
          <div className={headerStyle.donatebtn}>
            <p>DONATE NOW</p>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

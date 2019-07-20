import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      borderBottomColor: 'black',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        flexDirection:'row',
        flex: 1, 
      }}
    > 
      {/* <Img fluid={"../images/donate/logo.png"} /> */}
      <p style={{  margin: 0, fontSize: 17 }}>
      <Link
          to="/"
          style={{
            color: `#EB5D5F`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </p>
          <div style={{  background : `#4698D0`, width: 140, height: 70  , position: 'absolute', right: 0, top: -5}}>
            <p style={{ color: 'aliceblue', fontSize: 14, textAlign: 'center',paddingTop: 26, paddingBottom: 17 }}>DONATE NOW</p>
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

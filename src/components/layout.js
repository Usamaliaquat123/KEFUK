/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "typeface-emilys-candy"
import "typeface-merriweather"
import Subscribe from "./subscribe"
import Header from "./header/Header"
import BottomNav from "./bottomNav"
import BasicFeatures from "./basicFeatures/basicFeatures"
import "./layout.css"
import Typed from "typed.js"
import Donation from "./donaion/donation"
import NavigatorView from "./NavigatorView/navigatorView"
import HomeSlide from "./Home/HomeSlide/HomeSlide"
import HomeSlideSecond from "./Home/Slide2/HomeSlideSecond";
import HomeSlideThird from "./Home/Slide3/HomeSlideThird";
const Layout = ({ children }) => {
  return (
    <>
      <Header siteSubTitle={`Education since 1996`} />
      {/* <hr /> */}
      <NavigatorView />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <HomeSlide />
        <HomeSlideSecond />
        <HomeSlideThird />
        <main>{children}</main>

        <Subscribe subscribeText="Subscribe to our monthly news letter and stay up to date with all news and events" />
        <BottomNav />

        <footer>
          <hr />
          <p style={{ textAlign: "center", fontSize: 13 }}>
            Copyright © 2010 Kashmir Education Eoundation. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'typeface-emilys-candy';
import 'typeface-merriweather';
import Subscribe from "./subscribe"
import Header from "./header"
import BottomNav from "./bottomNav"
import BasicFeatures from "./basicFeatures/basicFeatures";
import "./layout.css"
import Donation from "./donaion/donation";
const Layout = ({ children }) => {


  return (
    <>
      <Header siteTitle={`Education since 1996`} />
      <hr />
      <div
        style={{
          margin: `0 auto`,
        }}
      >

        <main>{children}</main>
        <Donation />
        <BasicFeatures />
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

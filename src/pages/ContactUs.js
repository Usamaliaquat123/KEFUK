import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/NavigatorView"
import Donation from "../components/donaion/donation"
import Subscribe from "../components/Subscribe/Subscribe"
import BottomNav from "../components/bottomNav"
import WhereWeWorkSlideOne from "../components/WhereWeWork/bvps/Slide1/WhereWeWorkSlideOne"
import WhereWeWorkSlideThree from "../components/WhereWeWork/bvps/Slide3/WhereWeWorkSlideThree"
import BasicFeatures from "../components/basicFeatures/basicFeatures"
import ContactUsSlideOne from "../components/ContactUS/ContactUsSlideOne/ContactUsSlideOne";
import ContactUsSlideTwo from "../components/ContactUS/ContactUsSlideTwo/ContactUsSlideTwo";

export class ContactUs extends Component {
  static propTypes = {}

  render() {
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
            <ContactUsSlideOne/>
            <ContactUsSlideTwo />
            <Subscribe  subscribeText="Subscribe to our monthly news letter and stay up to date with all news and events" />
            <BottomNav />
          <footer>
            <hr />
            <p style={{ textAlign: "center", fontSize: 13 }}>
              Copyright © 2010 Kashmir Education Eoundation. All rights
              reserved.
            </p>
          </footer>
        </div>
      </>
    )
  }
}

export default ContactUs

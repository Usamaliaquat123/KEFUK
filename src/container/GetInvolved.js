import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/NavigatorView"

import Subscribe from "../components/Subscribe/Subscribe"
import BottomNav from "../components/BottomNav/BottomNav"
import GetInvolvedOne from "../components/GetInvolved/Slide1/GetInvolvedOne";
import GetInvolvedTwo from "../components/GetInvolved/Slide2/GetInvolvedTwo";
import GetInvolvedThree from "../components/GetInvolved/Slide3/GetInvolvedThree";

export class GetInvolved extends Component {
  static propTypes = {}

  donateWithStripe() {
    console.log(`test`)
  }

  render() {
    return (
      <div>
        <Header siteSubTitle={`Education since 1996`} />
        {/* <hr /> */}
        <NavigatorView />
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          {/* <Donation /> */}
          <GetInvolvedOne /> 
          <GetInvolvedTwo /> 
          <GetInvolvedThree />  
          {/* <Donation */}

          <Subscribe subscribeText="Subscribe to our monthly news letter and stay up to date with all news and events" />
          <BottomNav />

          <footer>
            <hr />
            <p style={{ textAlign: "center", fontSize: 13 }}>
              Copyright © 2010 Kashmir Education Eoundation. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
    )
  }
}

export default GetInvolved

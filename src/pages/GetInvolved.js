import React, { Component } from "react"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/NavigatorView"
import Subscribe from "../components/Subscribe/Subscribe"
import BottomNav from "../components/bottomNav"
import GetInvolvedOne from "../components/GetInvolved/Slide1/GetInvolvedOne";
import GetInvolvedTwo from "../components/GetInvolved/Slide2/GetInvolvedTwo";
import GetInvolvedThree from "../components/GetInvolved/Slide3/GetInvolvedThree";
import Donation from "../components/donaion/donation";

export class GetInvolved extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <Header siteSubTitle={`Education since 1996`} />
        <NavigatorView />
        <div
          style={{
            margin: `0 auto`,
          }}
        >


          <GetInvolvedOne />
          <GetInvolvedTwo />
          <GetInvolvedThree />

          <Subscribe subscribeText="Subscribe to our monthly news letter and stay up to date with all news and events" />
            <Donation />
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

export default GetInvolved

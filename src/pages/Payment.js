import React, { Component } from "react"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/NavigatorView"
import BasicFeatures from "../components/basicFeatures/basicFeatures"

import Subscribe from "../components/Subscribe/Subscribe"
import BottomNav from "../components/bottomNav"
import PaymentComp from "../components/donaion/payment/Payment"
export class Payment extends Component {
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
          <PaymentComp />
          <BasicFeatures />
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

export default Payment

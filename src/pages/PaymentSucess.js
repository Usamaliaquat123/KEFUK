import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/NavigatorView"
import Subscribe from "../components/Subscribe/Subscribe"
import BottomNav from "../components/bottomNav"
import PaymentSucessOne from "./../components/donaion/paymentSucess/PaymentSucessOne";

export class PaymentSucess extends Component {
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

          <PaymentSucessOne />
          
            <Subscribe />
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

export default PaymentSucess

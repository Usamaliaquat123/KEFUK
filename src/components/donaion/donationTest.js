import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import backgroundImage from "./../../images/donation.png"
import donation from "./donation.module.css"
import {StripeProvider, Elements} from 'react-stripe-elements';
import MyStoreCheckout from "./MyStoreCheckout";
import Payment from "./payment/Payment";
import Usamasaleemkighalti from "./Usamasaleemkighalti";
const DonationTest = (props) => {
 

  return (
    <StripeProvider  apiKey="pk_test_oC0Z5L1Oy1LPEA9B3zb961Ea00gh5qy4K9">
      {/* <Elements> */}
      <Usamasaleemkighalti />

      
    </StripeProvider>
  )
}

export default DonationTest

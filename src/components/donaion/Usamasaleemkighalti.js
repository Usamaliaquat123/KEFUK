import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import backgroundImage from "./../../images/donation.png"
import donation from "./donation.module.css"
import PaymentRec from "./payment/Payment";
import {CardElement, injectStripe, ReactStripeElements, CardNumberElement, Elements} from 'react-stripe-elements';
const Usamasaleemkighalti = () => {
  

  return (
    <div>
      <Elements>
        <PaymentRec />
      </Elements>
    </div>
  )
}

export default Usamasaleemkighalti

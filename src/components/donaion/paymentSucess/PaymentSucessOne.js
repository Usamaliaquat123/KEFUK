import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import facebook from "./../../../images/Payment/facebook.png";
import email from "./../../../images/Payment/email.png";
import message from "./../../../images/Payment/message.png";
import twitter from "./../../../images/Payment/twitter.png";
import backgroundImage from "./../../../images/Payment/paymentSucess.png"
import PaymentCompStyle from "./PaymentSucessOne.module.css"
const PaymentSucessOne = () => {
  return (
    <div
    style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: 0,
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
    minHeight: '500'
    }}
        className={PaymentCompStyle.containerCard}
    >

<div class='container-fluid'>
    <div class='row'>
      <div class='col-sm-6 col-md-6'>
      <div className={PaymentCompStyle.donationDesc}></div>

      </div>
      <div class='col-sm-6 col-md-6'>
        <div className={PaymentCompStyle.cardOfSharing}>
            <div className={PaymentCompStyle.socialIconCard}>
              <img src={twitter} ></img> TWITTER
            </div>
            <div className={PaymentCompStyle.socialIconCard}>
              <img src={facebook} ></img>fACEBOOK
            </div>
            <div className={PaymentCompStyle.socialIconCard}>
              <img src={email} ></img>EMAIL
            </div>
            <div className={PaymentCompStyle.socialIconCard}>
              <img src={message} ></img>MESSAGE
            </div>
        </div>
      </div>
    </div>
</div>
    </div>
  )
}

export default PaymentSucessOne

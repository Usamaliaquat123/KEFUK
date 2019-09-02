import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
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

      
       <p>sdsda</p>
    </div>
  )
}

export default PaymentSucessOne

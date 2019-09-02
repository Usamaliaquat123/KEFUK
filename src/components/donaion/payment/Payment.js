import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import backgroundImage from "./../../../images/donation.png"
import paymentStyle from "./Payment.module.css"
const PaymentComp = () => {
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
        
    minHeight: '100%'
      }}
    >
      <div class="container-fluid">
        <div className={paymentStyle.containerPayment}>
          <div className={paymentStyle.heading}>
            <p>Your information</p>
          </div>
          <div className={paymentStyle.yourInfoForm}>
            {/*First Name and Last Name ROw */}
            <div class="row">
              <div class="col-sm-6 col-md-6">
                {/* First Name */}
                <div className={paymentStyle.nameContainer}>
                  <label>FIRST NAME</label>
                  <input width="100%" placeholder="First name" />
                </div>
              </div>
              <div class="col-sm-6 col-md-6">
                {/* Last Name */}
                <div className={paymentStyle.nameContainer}>
                  <label>LAST NAME</label>
                  <input width="100%" placeholder="Last name" />
                </div>
              </div>
            </div>
            {/* Street Address */}
            <div className={paymentStyle.streetAddressContainer}>
              <p>STREET ADDRESS</p>
              <input width="100%" placeholder="Street address" />
            </div>
            {/* City Name */}
            <div className={paymentStyle.cityNameContainer}>
            <p>CITY NAME</p>
                  <input width="100%" placeholder="City name" />
            </div>
            {/* Email Container */}
            <div className={paymentStyle.emailContainer}>
            <p>EMAIL ADDRESS</p>
                  <input width="100%" placeholder="Email address" />
            </div>
          </div>
          {/* Payment Information Section */}
          <div className={paymentStyle.yourPaymentInfo}></div>
          {/* Payment Info Heading */}
          <div className={paymentStyle.headingPayment}>
            <p>Payment information</p>
          </div>
          {/* Payment Card Number */}
          <div className={paymentStyle.paymentInfoCardNo}> 
          <p>CREDIT CARD NUMBER</p>
          <input width="100%" placeholder="Credit card number" />
          </div>
          {/* Payment Expiration | Month */}
          <div class='row'>
            <div class='col-sm-6 col-md-6'><div className={paymentStyle.paymentMonthHeading}>
            <p>EXPIRATION</p>
          </div></div>
          {/* Payment expiration Security code heading */}
            <div class='col-sm-6 col-md-6'>
            <div className={paymentStyle.securityCodeText}>
              <p>SECURITY CODE</p>
            </div>
            </div>
          </div>
          <div class='row'>
            {/*  Payment Expiration Month */}
            <div class='col-sm-4 col-md-4'>
              <div className={paymentStyle.paymentExpMonth}>
               <input  width="100%" type='number'  placeholder="MM" />

              </div>
            </div>
            {/*  Payment Expiration Year */}
            <div class='col-sm-4 col-md-4'>
              <div className={paymentStyle.paymentExpYear}>
              <input  width="100%" type='number'  placeholder="YYYY" />
              </div>
            </div>
            {/* Payment Expiration CVC */}
            <div class='col-sm-4 col-md-4'>
              <div className={paymentStyle.paymentExpCVC}>
              <input  width="100%" type='number'  placeholder="CVC" />
              </div>
            </div>
          </div>
          {/*  Payment Description */}
          <div className={paymentStyle.paymentDesc}>
            <p>In order to Gift Aid your donation you must tick the box below</p>
          </div>
          {/* Payment Gift Aid Checkbox */}
          <div className={paymentStyle.giftAidPayment}>
            <p><input type={'checkbox'} /> I want to Gift Aid my donation to KEF</p>
          </div>

          {/* ///////////////////////////////// */}
          <div class='row'>
            <div class='col-sm-6 col-md-6'>
              <div className={paymentStyle.goBackbtn}>
                <p>Go back</p>
              </div>
            </div>
            <div class='col-sm-6 col-md-6'>
              <div className={paymentStyle.paymentProcessBtn}>Process Payment</div>
            </div>
          </div>
        </div>
      </div>
      {/* payment component */}
    </div>
  )
}

export default PaymentComp

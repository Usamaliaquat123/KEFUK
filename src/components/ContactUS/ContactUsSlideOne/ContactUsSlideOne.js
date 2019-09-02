 import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import ContactUsSlideOneStyle from "./ContactUsSlideOne.module.css"
import Typed from "react-typed"
import facebook from "./../../../images/Home/Icons/facebook.png"
import twitter from "./../../../images/Home/Icons/twitter.png"
import backgroundImage from "./../../../images/ContactUs/HomeSlide1.jpg"
import instagram from "./../../../images/Home/Icons/instagram.png"
import wifi from "./../../../images/Home/Icons/wifi.png"
import youtube from "./../../../images/Home/Icons/youtube.png"
const ContactUsSlideOne = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: 0,
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: `auto`,
      }}
      className={ContactUsSlideOneStyle.backgroundHeight}
    >
        <div className={ContactUsSlideOneStyle.containerContent}>
            <div className={ContactUsSlideOneStyle.contactUsBox}>
                <p className={ContactUsSlideOneStyle.ContactUsText}>CONTACT US</p>
                <p className={ContactUsSlideOneStyle.getinTouchWithKEF}>GET IN TOUCH WITH KEF</p>
            </div>
        </div>
        <div className={ContactUsSlideOneStyle.supportCareTeamRender}>
            <p className={ContactUsSlideOneStyle.headingCareTeam}>OUR SUPPORTER CARE TEAM IS READY TO HELP</p>
            <p className={ContactUsSlideOneStyle.addressCareTeam}>370 Thornton Rd. Bardford BD88LQ, UK</p>
        <div className={ContactUsSlideOneStyle.btnEamilNow}>EMAIL NOW</div>
        </div>
    </div>
  )
}

export default ContactUsSlideOne

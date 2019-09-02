import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import ContactUsSlideTwoStyle from "./ContactUsSlideTwo.module.css"
import Typed from "react-typed"
import facebook from "./../../../images/Home/Icons/facebook.png"
import twitter from "./../../../images/Home/Icons/twitter.png"
import backgroundImage from "./../../../images/ContactUs/HomeSlide1.jpg"
import instagram from "./../../../images/Home/Icons/instagram.png"
import wifi from "./../../../images/Home/Icons/wifi.png"
import youtube from "./../../../images/Home/Icons/youtube.png"
const ContactUsSlideTwo = () => {
  return (
    <div
     
      className={ContactUsSlideTwoStyle.backgroundHeight}
    >
        <div className={ContactUsSlideTwoStyle.containerCard}>
            <p className={ContactUsSlideTwoStyle.telephoneNo}>Telephone: ++44(0)1277-549970</p>
            <p className={ContactUsSlideTwoStyle.faxTelNo}>Facsimile (Fax): ++44(0)1277-549970</p>
        </div>
        <div className={ContactUsSlideTwoStyle.slideFiveContainer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className={ContactUsSlideTwoStyle.headingSlide}>
              <p>Learn</p>
            </div>
            <p className={ContactUsSlideTwoStyle.slideFiveDescription}>
              Get the facts and how we're helping.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={ContactUsSlideTwoStyle.headingSlide}>
              <p>Volunteer</p>
            </div>
            <p className={ContactUsSlideTwoStyle.slideFiveDescription}>
              Find out about upcomming events that need your help.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={ContactUsSlideTwoStyle.headingSlide}>
              <p>Share</p>
            </div>
            <p className={ContactUsSlideTwoStyle.slideFiveDescription}>
              Let your social media networks know about this important cause.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={ContactUsSlideTwoStyle.headingSlide}>
              <p>Donate</p>
            </div>
            <p className={ContactUsSlideTwoStyle.slideFiveDescription}>
              Help us raise money to make a big difference with this issue.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactUsSlideTwo

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import HomeSlideFiveStyle from "./HomeSlideFive.module.css"
import Typed from "react-typed"
const HomeSlideFive = () => {
  return (
    <div className={HomeSlideFiveStyle.slideFiveContainer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className={HomeSlideFiveStyle.headingSlide}>
              <p>Learn</p>
            </div>
            <p className={HomeSlideFiveStyle.slideFiveDescription}>
              Get the facts and how we're helping.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={HomeSlideFiveStyle.headingSlide}>
              <p>Volunteer</p>
            </div>
            <p className={HomeSlideFiveStyle.slideFiveDescription}>
              Find out about upcomming events that need your help.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={HomeSlideFiveStyle.headingSlide}>
              <p>Share</p>
            </div>
            <p className={HomeSlideFiveStyle.slideFiveDescription}>
              Let your social media networks know about this important cause.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={HomeSlideFiveStyle.headingSlide}>
              <p>Donate</p>
            </div>
            <p className={HomeSlideFiveStyle.slideFiveDescription}>
              Help us raise money to make a big difference with this issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSlideFive

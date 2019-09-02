import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachiBachaRun from "./../../../images/WhereWedo/bachiBachaRun.png"
import ghar from "./../../../images/WhereWedo/ghar.png"
import GetInvolvedStyle from "./GetInvolvedTwo.module.css"
import Typed from "react-typed"
import slide2 from "./../../../images/GetInv/slide2.png";
const GetInvolvedTwo = () => {
  return <>
        <div className={GetInvolvedStyle.slideFiveContainer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <div className={GetInvolvedStyle.headingSlide}>
              <p>Learn</p>
            </div>
            <p className={GetInvolvedStyle.slideFiveDescription}>
              Get the facts and how we're helping.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={GetInvolvedStyle.headingSlide}>
              <p>Volunteer</p>
            </div>
            <p className={GetInvolvedStyle.slideFiveDescription}>
              Find out about upcomming events that need your help.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={GetInvolvedStyle.headingSlide}>
              <p>Share</p>
            </div>
            <p className={GetInvolvedStyle.slideFiveDescription}>
              Let your social media networks know about this important cause.
            </p>
          </div>
          <div className="col-sm-12 col-md-3">
            <div className={GetInvolvedStyle.headingSlide}>
              <p>Donate</p>
            </div>
            <p className={GetInvolvedStyle.slideFiveDescription}>
              Help us raise money to make a big difference with this issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default GetInvolvedTwo

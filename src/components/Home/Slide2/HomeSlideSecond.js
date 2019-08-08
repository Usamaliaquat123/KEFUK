import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logoImg from "./../../Images/logo.png"
import homeLesson from "./../../Images/Home/homeLesson.png"
import teacherLesson from "./../../Images/Home/teacherLesson.png"
import eductionLesson from "./../../Images/Home/eductionLesson.png"
import HomeSlideSecondStyle from "./HomeSlideSecond.module.css"
import Typed from "react-typed"
const HomeSlideSecond = () => {
  return (
    <div>
      <div className={HomeSlideSecondStyle.logImg}>
        <img src={logoImg} class="img-fluid" width={320} height={320}></img>
      </div>
      <div className={HomeSlideSecondStyle.DescriptionSlide}>
        <p>
          We are non- profit organization eduction orphaned & underpriviledged
          children at your purpose built schools in Soan Valley in Pakistan and
          Banjosa and Rawalakot in Azad Kashmir
        </p>
      </div>
      <div className={HomeSlideSecondStyle.containerFeatures}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-4 ">
              <div className={HomeSlideSecondStyle.featureAllign}>
                <img
                  src={homeLesson}
                  class="img-fluid"
                  width={140}
                  height={140}
                ></img>
              </div>
              <p className={HomeSlideSecondStyle.featureText}>
                900+ students in 3 schools
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className={HomeSlideSecondStyle.featureAllign}>
                <img
                  src={eductionLesson}
                  class="img-fluid"
                  width={140}
                  height={140}
                ></img>
              </div>
              <p className={HomeSlideSecondStyle.donationPolicyText}>
                100% donation policy
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className={HomeSlideSecondStyle.featureAllign}>
                <img
                  src={teacherLesson}
                  class="img-fluid"
                  width={140}
                  height={140}
                ></img>
              </div>
              <p className={HomeSlideSecondStyle.teachersTrainedText}>
                1250 teachers trained
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSlideSecond

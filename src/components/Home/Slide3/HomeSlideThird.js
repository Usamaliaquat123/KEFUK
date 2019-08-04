import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logoImg from "./../../Images/logo.png"
import homeLesson from "./../../Images/Home/homeLesson.png"
import teacherLesson from "./../../Images/Home/teacherLesson.png"
import eductionLesson from "./../../Images/Home/eductionLesson.png"
import bachiWatching from "./../../Images/Home/bachiWatching.png"
import HomeSlideThirdStyle from "./HomeSlideThird.module.css"
import Typed from "react-typed"
const HomeSlideThird = () => {
  return (
    <div className={HomeSlideThirdStyle.containerSlide}>
      <div className={HomeSlideThirdStyle.buttonWhatWeDo}>
        <p>WHAT WE DO</p>
      </div>
      <div className={HomeSlideThirdStyle.secondLayerContainer}>
        <div className={HomeSlideThirdStyle.containerTextInner}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <p className={HomeSlideThirdStyle.headingText}>
                  Promoting 21st Century Quality Education in Kashmir & Pakistan
                  for future generations.
                </p>
              </div>
            </div>
            <div className={HomeSlideThirdStyle.slideDescription}>
              <div className="row">
                <div className="col-md-7">
                  <p className={HomeSlideThirdStyle.descriptionText}>
                    Kasimir Education Foundation UK was established in
                    conjunction with KEF Pakistan in 1996 out of an altruistic
                    response to fight poverty in equality amongest the most
                    vulnerable and marginalized rural communities in Azad
                    Kashmir and Pakistan. Three schools have been constructed in
                    various rural areas where currently 900 students are
                    enrolled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={HomeSlideThirdStyle.circleLayer}>
          
          <div className={HomeSlideThirdStyle.imageLayer}>
            <img
              src={bachiWatching}
              class="img-fluid"
              width={480}
              height={480}
            ></img>
          </div>
        </div>
      </div>
      <div className={HomeSlideThirdStyle.buttonLastBlack}>Read more</div>
    </div>
  )
}

export default HomeSlideThird

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import logoImg from "./../../Images/logo.png"
// import homeLesson from "./../../Images/Home/homeLesson.png"
// import teacherLesson from "./../../Images/Home/teacherLesson.png"
// import eductionLesson from "./../../Images/Home/eductionLesson.png"
import bachiWatching from "./../../../images/Home/bachiWatching.png"
import HomeSlideThirdStyle from "./HomeSlideThird.module.css"
import Typed from "react-typed"
const HomeSlideThird = () => {
  return (
    <div className={HomeSlideThirdStyle.containerSlide}>
      <div className={HomeSlideThirdStyle.buttonWhatWeDo}>
        <p>WHAT WE DO</p>
      </div>
      <div className={HomeSlideThirdStyle.secondLayerContainer}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className={HomeSlideThirdStyle.containerTextInner}>
                <p className={HomeSlideThirdStyle.headingText}>
                  Promoting 21st Century Quality Education in Kashmir & Pakistan
                  for future generations.
                </p>
                <div className={HomeSlideThirdStyle.slideDescription}>
                  <p className={HomeSlideThirdStyle.descriptionText}>
                    Kasimir Education Foundation UK was established in
                    conjunction with KEF Pakistan in 1996 out of an altruistic
                    response to fight poverty in equality amongest the most
                    vulnerable and marginalized rural communities in Azad
                    Kashmir and Pakistan. Three schools have been constructed in
                    various rural areas where currently 900 students are
                    enrolled.
                  </p>
                  <a href="/Schools" className={HomeSlideThirdStyle.buttonLastBlack}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <div className={HomeSlideThirdStyle.circleLayer}>
        <div className={HomeSlideThirdStyle.imageLayer}>
          <img src={bachiWatching}></img>
        </div>
      </div>

      <div className={HomeSlideThirdStyle.containerSecondImage}></div>
    </div>
  )
}

export default HomeSlideThird

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import tafreeTeacher from "./../../../images/Home/tafreeTeacher.png"
import HomeSlideFourStyle from "./HomeSlideFour.module.css"
import Typed from "react-typed"
const HomeSlideFour = () => {
  return (
    <div className={HomeSlideFourStyle.containerSlide}>
      <div className={HomeSlideFourStyle.buttonWhatWeDo}>
        <p>WHAT WE DO</p>
      </div>
      <div className={HomeSlideFourStyle.secondLayerContainer}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className={HomeSlideFourStyle.containerTextInner}>
                <p className={HomeSlideFourStyle.headingText}>
                  Creating sustainable work for women in rural areas of Pakistan
                  & Kashmir
                </p>
                <div className={HomeSlideFourStyle.slideDescription}>
                  <p className={HomeSlideFourStyle.descriptionText}>
                    Kashimir Education Foundation set up a Teachers Training
                    Institute in 2001. by the name of Joan Atkinson College of
                    Teacher Education for female graduates, particularly from
                    rural areas to enable them to become high quality English
                    medium primary school teachers.
                  </p>
                  <a href="/Teachers" className={HomeSlideFourStyle.buttonLastBlack}>
                    Read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <div className={HomeSlideFourStyle.circleLayer}>
        <div className={HomeSlideFourStyle.imageLayer}>
          <img src={tafreeTeacher}></img>
        </div>
      </div>

      <div className={HomeSlideFourStyle.containerSecondImage}></div>
    </div>
  )
}

export default HomeSlideFour

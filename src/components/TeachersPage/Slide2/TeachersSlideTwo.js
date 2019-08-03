import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import backgroundImage from "./../../Images/Home/TeachersTab/teachers_background.png"
import TeachersSlideTwoStyle from "./TeachersSlideTwo.module.css"
import Typed from "react-typed"
const TeachersSlideTwo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: "auto",
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: `500`,
      }}
    >
      <div className={TeachersSlideTwoStyle.containerContent}>
        <div className={TeachersSlideTwoStyle.btnOurImpact}>OUR IMPACT</div>
        <div className={TeachersSlideTwoStyle.desc}>
          At KEF we continue to aspire for excellence in all our projects
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <p className={TeachersSlideTwoStyle.HeadingCount}>357</p>
              <p className={TeachersSlideTwoStyle.descContainer}>
                girls have passed out as qualified teachers from JACTE
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className={TeachersSlideTwoStyle.HeadingCount}>239+</p>
              <p className={TeachersSlideTwoStyle.descContainer}>
                went on to complete Post Graduate Diploma Course
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className={TeachersSlideTwoStyle.HeadingCount}>286</p>
              <p className={TeachersSlideTwoStyle.descContainer}>
                trained teachers currently employed in educational institutes
              </p>
            </div>
            <div className="col-sm-12 col-md-3">
              <p className={TeachersSlideTwoStyle.HeadingCount}>18</p>
              <p className={TeachersSlideTwoStyle.descContainer}>
                years of producing well versed modern teachers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeachersSlideTwo

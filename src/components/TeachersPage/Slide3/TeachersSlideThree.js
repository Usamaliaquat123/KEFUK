import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import backgroundImage from "./../../Images/Home/HomeSlide1.jpg"
import TeachersSlideThreeStyle from "./TeachersSlideThree.module.css"
import Typed from "react-typed"
const TeachersSlideThree = () => {
  return (
    <div className={TeachersSlideThreeStyle.containerSLideOne}>
      <div className={TeachersSlideThreeStyle.textsContainer}>
        <p className={TeachersSlideThreeStyle.HeadingSTyle}>GET INVOLVED</p>
        <p className={TeachersSlideThreeStyle.Description}>
          Sponser a child at any KEF's schools.
        </p>
        <div className={TeachersSlideThreeStyle.btnStyle}>DONATE NOW</div>
      </div>
    </div>
  )
}

export default TeachersSlideThree

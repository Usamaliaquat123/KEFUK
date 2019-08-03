import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import backgroundImage from "./../../Images/Home/HomeSlide1.jpg"
import ChildrenSlideThreeStyle from "./ChildrenSlideThree.module.css"
import Typed from "react-typed"
const ChildrenSlideThree = () => {
  return (
    <div className={ChildrenSlideThreeStyle.containerSLideOne}>
      <div className={ChildrenSlideThreeStyle.textsContainer}>
        <p className={ChildrenSlideThreeStyle.HeadingSTyle}>GET INVOLVED</p>
        <p className={ChildrenSlideThreeStyle.Description}>
          Sponser a child at any KEF's schools.
        </p>
        <div className={ChildrenSlideThreeStyle.btnStyle}>DONATE NOW</div>
      </div>
    </div>
  )
}

export default ChildrenSlideThree

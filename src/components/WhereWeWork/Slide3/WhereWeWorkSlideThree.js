import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachiBachaRun from "./../../Images/WhereWedo/bachiBachaRun.png"
import ghar from "./../../Images/WhereWedo/ghar.png"
import WhereWeWorkSlideThreeStyle from "./WhereWeWorkSlideThree.module.css"
import Typed from "react-typed"
const WhereWeWorkSlideThree = () => {
  return (
    <>
      <div className={WhereWeWorkSlideThreeStyle.containerSLideOne}>
        <div className={WhereWeWorkSlideThreeStyle.textsContainer}>
          <p className={WhereWeWorkSlideThreeStyle.HeadingSTyle}>
            GET INVOLVED
          </p>
          <p className={WhereWeWorkSlideThreeStyle.Description}>
            Sponser a child at any KEF's schools.
          </p>
          <div className={WhereWeWorkSlideThreeStyle.btnStyle}>DONATE NOW</div>
        </div>
      </div>
    </>
  )
}

export default WhereWeWorkSlideThree
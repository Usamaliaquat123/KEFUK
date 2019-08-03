import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachiBachaRun from "./../../Images/WhereWedo/bachiBachaRun.png"
import ghar from "./../../Images/WhereWedo/ghar.png"
import WhereWeWorkSlideTwoStyle from "./WhereWeWorkSlideTwo.module.css"
import Typed from "react-typed"
const WhereWeWorkSlideTwo = () => {
  return (
    <>
      <div className={WhereWeWorkSlideTwoStyle.containerStyle}>
        <div className={WhereWeWorkSlideTwoStyle.slideTextLeft}>
          <p className={WhereWeWorkSlideTwoStyle.slideDescLeft}>
            "When a nation come devoid of arts and learning, it invites poverty.
            And when poverty comes it brings in it's wake thousands of crimes"
            <br />
            <br />
            <br />- Sir Syed Ahmed Khan
          </p>
          <div className={WhereWeWorkSlideTwoStyle.slideRightImage}>
            <img src={ghar} class="img-fluid" width={500} height={140}></img>
          </div>
        </div>
        <div className={WhereWeWorkSlideTwoStyle.slideRightContainer}>
          <div className={WhereWeWorkSlideTwoStyle.textContainer}>
            <p className={WhereWeWorkSlideTwoStyle.headingSlideText}>
              Pearl Valley Public School
            </p>
            <p className={WhereWeWorkSlideTwoStyle.DescStyleRight}>
              Pearl Valley Public School and College was the pilot project of
              Kashmir Education Foundation. It is located at Rawalkot, Azad
              Kashmir for which over 3 acres were donated by the Trustees. The
              school started functioning on August 14, 1996 and currently has
              classes up to 12th grade.
              <br /> <br />
              In line with KEF's policy, new intake is limited to class Prep
              only. It is non residential day school were children from
              underpriviledged areas of Rawalkot and surrounding Villages
              (covering an area of 200 square kilometers with a population of
              over 100,000 people) are admitted on merit basis, with girls
              comprising 50% of the total number.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhereWeWorkSlideTwo

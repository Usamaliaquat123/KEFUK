import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachiBachaRun from "./../../../../images/WhereWedo/jact.png"
import ghar from "./../../../../images/WhereWedo/jact2.png"
import WhereWeWorkSlideOneStyle from "./WhereWeWorkSlideOne.module.css"
import Typed from "react-typed"
const WhereWeWorkSlideOne = () => {
  return (
    <>
      <div className={WhereWeWorkSlideOneStyle.containerSlide}>
        <div className={WhereWeWorkSlideOneStyle.conbtainer}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className={WhereWeWorkSlideOneStyle.workbtn}>
                  WHERE WE WORK
                </div>
                <div className={WhereWeWorkSlideOneStyle.containerText}>
                  <div
                    className={WhereWeWorkSlideOneStyle.nonSelect}
                  >
                    PEARL VALLEY PUBLIC SCHOOL
                  </div>
                  <div
                    className={WhereWeWorkSlideOneStyle.nonSelect}
                  >
                    BANJOSA VALLEY PUBLIC SCHOOL
                  </div>
                  <div
                    className={WhereWeWorkSlideOneStyle.nonSelect}
                  >
                    SOAN VALLEY PUBLIC SCHOOL
                  </div>
                  <div
                    className={WhereWeWorkSlideOneStyle.containerDescSl}
                  >
                    JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  // class='img-fluid'
                  // width={500}
                  height={300}
                  className={WhereWeWorkSlideOneStyle.bachiImg}
                  src={bachiBachaRun}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className={WhereWeWorkSlideOneStyle.containerStyle}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className={WhereWeWorkSlideOneStyle.slideTextLeft}>
                <p className={WhereWeWorkSlideOneStyle.slideDescLeft}>
                  "When a nation come devoid of arts and learning, it invites
                  poverty. And when poverty comes it brings in it's wake
                  thousands of crimes"
                  <br />
                  <br />
                  <br />- Sir Syed Ahmed Khan
                </p>
                <div className={WhereWeWorkSlideOneStyle.slideRightImage}>
                  <img
                    src={ghar}
                    class="img-fluid"
                    width={500}
                    height={140}
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={WhereWeWorkSlideOneStyle.slideRightContainer}>
                <div className={WhereWeWorkSlideOneStyle.textContainer}>
                  <p className={WhereWeWorkSlideOneStyle.headingSlideText}>
                    Pearl Valley Public School
                  </p>
                  <p className={WhereWeWorkSlideOneStyle.DescStyleRight}>
                    Pearl Valley Public School and College was the pilot project
                    of Kashmir Education Foundation. It is located at Rawalkot,
                    Azad Kashmir for which over 3 acres were donated by the
                    Trustees. The school started functioning on August 14, 1996
                    and currently has classes up to 12th grade.
                    <br /> <br />
                    In line with KEF's policy, new intake is limited to class
                    Prep only. It is non residential day school were children
                    from underpriviledged areas of Rawalkot and surrounding
                    Villages (covering an area of 200 square kilometers with a
                    population of over 100,000 people) are admitted on merit
                    basis, with girls comprising 50% of the total number.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhereWeWorkSlideOne

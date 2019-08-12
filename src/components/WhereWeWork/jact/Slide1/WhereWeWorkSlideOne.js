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
                  <div className={WhereWeWorkSlideOneStyle.nonSelect}>
                    PEARL VALLEY PUBLIC SCHOOL
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.nonSelect}>
                    BANJOSA VALLEY PUBLIC SCHOOL
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.nonSelect}>
                    SOAN VALLEY PUBLIC SCHOOL
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.containerDescSl}>
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
                  "No nation can raise to the height of glory unless your women
                  has side by side with you "
                  <br />
                  <br />
                  <br />- Muhammad Ali Jinnah
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
                    Joan Atkinson College of Teacher Education
                  </p>
                  <p className={WhereWeWorkSlideOneStyle.DescStyleRight}>
                    Quality education that KEF is committed to cannot be
                    deliverd without teachers who are personally motivated, who
                    have a wide range of pedagogical skills to develop child
                    centered learning enviroments with a focus on interactive
                    teaching methodology to promote advanced cognitive
                    performance.
                    <br /> <br />
                    KEF made a conscious decision to invest in establishing and
                    developing our own College of Teacher Education in 2001, in
                    order to take the bes available teachers and support them
                    towords becoming outstanding teachers using the most
                    effective research oriented continous professional
                    development techniques
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachiBachaRun from "./../../../../images/WhereWedo/svpc.png"
import ghar from "./../../../../images/WhereWedo/svpc2.png"
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
                  <div className={WhereWeWorkSlideOneStyle.containerDescSl}>
                    SOAN VALLEY PUBLIC SCHOOL
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.nonSelect}>
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
                  "An investment in knowledge pays the best interest"
                  <br />
                  <br />
                  <br />- Benjamin Franklin
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
                    Soan Valley Public School
                  </p>
                  <p className={WhereWeWorkSlideOneStyle.DescStyleRight}>
                    Encouraged by the phenomenal sucess of PVPS, KEF planned to
                    replicate similar schools in other parts of the country.
                    Thus, Soan Valley Public School was established in May,2005
                    at village Pakhowal about 35 km from Rawalpindi. The entire
                    funding for the school building serves as an adjuct to
                    College of Teacher Education as a Resource Center of initial
                    Teaching practices.
                    <br /> <br />
                    like PVPS, SVPS has been provided with all the modern
                    educational facilities. Its library, named after Miss Anna
                    Finn, a london school teacher has almost 10,000 books,
                    mostly donated by KEF UK.
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

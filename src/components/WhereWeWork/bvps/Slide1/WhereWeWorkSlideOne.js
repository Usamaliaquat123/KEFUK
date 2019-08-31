import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachiBachaRun from "./../../../../images/WhereWedo/bvpc.png"
import ghar from "./../../../../images/WhereWedo/bvpc2.png"
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
                    <a href="/Pvps" style={{ textDecoration: "none" }}>
                      PEARL VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.containerDescSl}>
                    BANJOSA VALLEY PUBLIC SCHOOL
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.nonSelect}>
                    <a href="/Svps" style={{ textDecoration: "none" }}>
                      SOAN VALLEY PUBLIC SCHOOL
                    </a>
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.nonSelect}>
                    <a href="/Jact" style={{ textDecoration: "none" }}>
                      JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={WhereWeWorkSlideOneStyle.firstSlideImage}>
                <img
                  className={WhereWeWorkSlideOneStyle.bachiImg}
                  src={bachiBachaRun}
                ></img>
                </div>
                {/* <div className={WhereWeWorkSlideOneStyle.total}>
                <img
                  className={WhereWeWorkSlideOneStyle.smallTottal}
                  src={bachiBachaRun}
                ></img>
                </div> */}
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
                  "Education is the most powerfull weapon you can use to change
                  the world"
                  <br />
                  <br />
                  <br />- Nelson Mandela
                </p>
                <div className={WhereWeWorkSlideOneStyle.slideRightImage}>
                  <img
                    src={ghar}
                    class="img-fluid"
                   
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className={WhereWeWorkSlideOneStyle.slideRightContainer}>
                <div className={WhereWeWorkSlideOneStyle.textContainer}>
                  <p className={WhereWeWorkSlideOneStyle.headingSlideText}>
                    Banjosa Valley Public School
                  </p>
                  <p className={WhereWeWorkSlideOneStyle.DescStyleRight}>
                    In an effort to develop the potential of children from
                    underpriviledged and marginalised sections of the society,
                    Kashmir Education Foundation (KEF) has dedicated itself to
                    make quality education accessible to children.
                    <br /> <br />
                    Banjosa Valley Public School-BVPS. AJ&K commerced its
                    classes on 24th Mmarch 2009. The BVPS has been constructed
                    to take classes up to tenth grade and is equipped with all
                    the modern educational and recreational facilities. The
                    teaching faculty for BVPS was trained at our College for
                    Teacher Education.
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

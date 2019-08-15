import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import NewsEventsSlideTwoStyle from "./NewsEventsSlideTwo.module.css"
import postImage from "./../../../images/features/tharki_medal.png"
import Typed from "react-typed"
const NewsEventsSlideTwo = () => {
  return (
    <>
      <div className={NewsEventsSlideTwoStyle.containerView}>
        <div className={NewsEventsSlideTwoStyle.oneRowConatiner}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                {/* /////////////////////////////// */}
                <div className={NewsEventsSlideTwoStyle.postOne}>
                  {/* todo Image section */}
                  <div className={NewsEventsSlideTwoStyle.btnStyle}>
                    NEWS POST
                  </div>
                  <img
                    className={NewsEventsSlideTwoStyle.socialIcons}
                    src={postImage}
                  ></img>
                  <div className={NewsEventsSlideTwoStyle.containerCardText}>
                    <p className={NewsEventsSlideTwoStyle.titleNews}>
                      Tree planting initiative in Pearl Valley Public School,
                      Rawalkot.
                    </p>
                    <p className={NewsEventsSlideTwoStyle.linkNews}>
                      Read this post
                    </p>
                  </div>
                </div>
                {/* /////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* ///////////////////////// */}
                <div className={NewsEventsSlideTwoStyle.postTwo}>
                  {/* todo Image section */}
                  <div className={NewsEventsSlideTwoStyle.btnStyle}>
                    NEWS POST
                  </div>
                  <img
                    className={NewsEventsSlideTwoStyle.socialIcons}
                    src={postImage}
                  ></img>
                  <div
                    className={NewsEventsSlideTwoStyle.containerCardTextPostTwo}
                  >
                    <p className={NewsEventsSlideTwoStyle.titleNews}>
                      Banjosa Valley Public School
                    </p>
                    <p className={NewsEventsSlideTwoStyle.linkNewspostTwo}>
                      Read this post
                    </p>
                  </div>
                </div>
                {/* //////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-6">
                {/* /////////////////////// */}
                <div className={NewsEventsSlideTwoStyle.postThree}>
                  <div
                    className={
                      NewsEventsSlideTwoStyle.containerCardTextPostThree
                    }
                  >
                    <p className={NewsEventsSlideTwoStyle.titleNews}>
                      Tree planting initiative in Green Fields Park
                    </p>
                    <p className={NewsEventsSlideTwoStyle.linkNews}>
                      Find out more about this event
                    </p>
                  </div>
                  <div className={NewsEventsSlideTwoStyle.btnStyleSlideThree}>
                    EVENT
                  </div>
                  {/* todo Image section */}
                  <img
                    className={NewsEventsSlideTwoStyle.cardLlandImage}
                    src={postImage}
                  ></img>
                </div>
                {/* /////////////////////// */}
              </div>
            </div>
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////// */}

            <br />
            <div className="row">
              <div className="col-sm-12 col-md-6">
                {/* ///////////////////////////////// */}
                <div className={NewsEventsSlideTwoStyle.postThree}>
                  <div
                    className={
                      NewsEventsSlideTwoStyle.containerCardTextPostThree
                    }
                  >
                    <p className={NewsEventsSlideTwoStyle.titleNews}>
                      Donation by Acklam Grange School
                    </p>
                    <p className={NewsEventsSlideTwoStyle.linkNews}>
                      Find out more about this event
                    </p>
                  </div>
                  <div className={NewsEventsSlideTwoStyle.btnStyleSlideThree}>
                    2018
                  </div>
                  {/* todo Image section */}
                  <img
                    className={NewsEventsSlideTwoStyle.cardLlandImage}
                    src={postImage}
                  ></img>
                </div>
                {/* ///////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* //////////////////////////////// */}
                <div className={NewsEventsSlideTwoStyle.postTwo}>
                  {/* todo Image section */}
                  <div className={NewsEventsSlideTwoStyle.btnStyle}>
                    NEWS POST
                  </div>
                  <img
                    className={NewsEventsSlideTwoStyle.socialIcons}
                    src={postImage}
                  ></img>
                  <div
                    className={NewsEventsSlideTwoStyle.containerCardTextPostTwo}
                  >
                    <p className={NewsEventsSlideTwoStyle.titleNews}>
                      KEF UK Annual Fund Raising Dinner
                    </p>
                    <p
                      className={NewsEventsSlideTwoStyle.linkNewspostTwoSlide2}
                    >
                      Read this post
                    </p>
                  </div>
                </div>
                {/* ////////////////////////////////// */}
              </div>
              <div className="col-sm-12 col-md-3">
                {/* /////////////////////// */}
                <div className={NewsEventsSlideTwoStyle.postOne}>
                  {/* todo Image section */}
                  <div className={NewsEventsSlideTwoStyle.btnStyle}>
                    NEWS POST
                  </div>
                  <img
                    className={NewsEventsSlideTwoStyle.socialIcons}
                    src={postImage}
                  ></img>
                  <div className={NewsEventsSlideTwoStyle.containerCardText}>
                    <p className={NewsEventsSlideTwoStyle.titleNews}>
                      KEF's students visit Aeronotical Complex, Kamra.
                    </p>
                    <p className={NewsEventsSlideTwoStyle.linkNews}>
                      Read this post
                    </p>
                  </div>
                </div>
                {/* /////////////////////// */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default NewsEventsSlideTwo

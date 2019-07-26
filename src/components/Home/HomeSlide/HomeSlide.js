import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import backgroundImage from "./../../Images/Home/HomeSlide1.jpg"
import HomeSlideStyle from "./HomeSlide.module.css"
import Typed from "react-typed"
const HomeSlide = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: 0,
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: 500,
      }}
    >
      <div className="container-fluid">
        <div className={HomeSlideStyle.mainContainerHeadingText}>
          {/* <div className={HomeSlideStyle.backgroundText}> */}

          <p>
            <span className={HomeSlideStyle.backgroundText}>
              THE SMALLEST ACT OF KINDNESS IS WORTH MORE{" "}
            </span>
            <br />
            <span className={HomeSlideStyle.backgroundText}>
              THAN THE GRANDEST INTENTION
            </span>
            <br />
            <span className={HomeSlideStyle.backgroundText}>- OSCAR WILDE</span>
          </p>
        </div>
        <div className='btn btn-danger'>asd</div>
      </div>
    </div>
  )
}

export default HomeSlide

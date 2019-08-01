import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logoImg from './../../Images/logo.png'
import homeLesson from './../../Images/Home/homeLesson.png'
import teacherLesson from './../../Images/Home/teacherLesson.png'
import eductionLesson from './../../Images/Home/eductionLesson.png'
import tafreeTeacher from "./../../Images/Home/tafreeTeacher.png"
import HomeSlideFourStyle from "./HomeSlideFour.module.css"
import Typed from "react-typed"
const HomeSlideFour = () => {
  return (
    <div className={HomeSlideFourStyle.containerSlide} >
        <div className={HomeSlideFourStyle.buttonWhatWeDo}>
            <p>WHAT WE DO</p>
        </div>
        <div className={HomeSlideFourStyle.secondLayerContainer}>
           <div className={HomeSlideFourStyle.containerTextInner}>
           <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-7'><p className={HomeSlideFourStyle.headingText}>Creating sustainable work for women in rural areas of Pakistan & Kashmir</p></div>    
                </div>   
                <div className={HomeSlideFourStyle.slideDescription}>
                    <div className='row'>
                    <div className='col-md-7'><p className={HomeSlideFourStyle.descriptionText}>Kashimir Education Foundation set up a Teachers Training Institute in 2001. by the name of Joan Atkinson College of Teacher Education for female graduates, particularly from rural areas to enable them to become high quality English medium primary school teachers.</p></div>    
                    </div>
                </div>
            </div> 
           </div>
            <div className={HomeSlideFourStyle.circleLayer}>
                <div className={HomeSlideFourStyle.imageLayer}>
                    <img src={tafreeTeacher} class="img-fluid" width={600} height={600}></img>
                </div>
            </div>
        </div>
        <div className={HomeSlideFourStyle.buttonLastBlack}>
                Read more
        </div>
    </div>
  )
}

export default HomeSlideFour

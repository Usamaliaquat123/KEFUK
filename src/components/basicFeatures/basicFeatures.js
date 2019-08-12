import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import bachi from "./../../images/features/bachi.png"
import tharkiMedal from "./../../images/features/tharki_medal.png"
import tharkiTeacher from "./../../images/features/tharki_teacher.png"
import basicFeature from "./basicFeatures.module.css"
import facebook from "./../../images/Home/Icons/facebook.png"
import twitter from "./../../images/Home/Icons/twitter.png"
import instagram from "./../../images/Home/Icons/instagram.png"
import wifi from "./../../images/Home/Icons/wifi.png"
import youtube from "./../../images/Home/Icons/youtube.png"
const BasicFeatures = () => {
  return (
    <div className={basicFeature.containerOverlay}>
      <div className="container-fluid">
        <div className={basicFeature.containerStyle}>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className={basicFeature.cardCcontainer}>
                <div className={basicFeature.containerImage}>
                  <img src={bachi} width="260" height="160"></img>
                </div>
                <p className={basicFeature.cardHeading}>Support a Child</p>
                <p className={basicFeature.containerDdesc}>
                  {" "}
                  You have the opportunity to impact the lioves of children and
                  families surrounded by poverty. It is through your generosity
                  that we can create a powerfull change.{" "}
                </p>
                <div className={basicFeature.containerButton}>Read more</div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className={basicFeature.cardCcontainer}>
                <div className={basicFeature.containerImage}>
                  <img src={tharkiTeacher} width="260" height="160"></img>
                </div>
                <p className={basicFeature.cardHeading}>Teacher Training</p>
                <p className={basicFeature.containerDdesc}>
                  {" "}
                  KEF made a concise decision to invest in establishing and
                  developing our own College of Teacvher Education to promote
                  advanced cognitive performance
                </p>
                <div className={basicFeature.containerButton}>Read more</div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className={basicFeature.cardCcontainer}>
                <div className={basicFeature.containerImage}>
                  <img src={tharkiMedal} width="260" height="160"></img>
                </div>
                <p className={basicFeature.cardHeading}>
                  Volunteer and Fundraising
                </p>
                <p className={basicFeature.containerDdesc}>
                  You can transform a child's world. Wheather it is by
                  volunteering or by participating in fund raisers.
                </p>
                <div className={basicFeature.containerButton}>Read more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={basicFeature.socialMediaTab}>
        <div className={basicFeature.followUsText}>FOLLOW US</div>
        <img
          className={basicFeature.socialIcons}
          src={facebook}
          width={25}
          height={25}
        ></img>
        <img
          className={basicFeature.socialIcons}
          src={youtube}
          width={25}
          height={25}
        ></img>
        <img
          className={basicFeature.socialIcons}
          src={instagram}
          width={25}
          height={25}
        ></img>
        <img
          className={basicFeature.socialIcons}
          src={wifi}
          width={25}
          height={25}
        ></img>
        <img
          className={basicFeature.socialIcons}
          src={twitter}
          width={25}
          height={25}
        ></img>
      </div>
    </div>
  )
}

export default BasicFeatures

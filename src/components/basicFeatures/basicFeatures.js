import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sampleImg from "./../../images/don.jpg"
import basicFeature from "./basicFeatures.module.css"
const BasicFeatures = () => {
  return (
    <div className={basicFeature.containerOverlay}>
      <div
        className="container"
        style={{ padding: 120, paddingTop: 80, paddingBottom: 80 }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className={basicFeature.cardCcontainer}>
              <div className={basicFeature.containerImage}>
                <img src={sampleImg} width="260" height="160"></img>
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
                <img src={sampleImg} width="260" height="160"></img>
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
                <img src={sampleImg} width="260" height="160"></img>
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
  )
}

export default BasicFeatures

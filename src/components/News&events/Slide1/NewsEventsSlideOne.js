import React, { useState } from "react"
import NewsEventsSlideOneStyle from "./NewsEventsSlideOne.module.css"
import Typed from "react-typed"
import facebook from "./../../../images/Home/Icons/facebook.png"
import twitter from "./../../../images/Home/Icons/twitter.png"
import instagram from "./../../../images/Home/Icons/instagram.png"
import wifi from "./../../../images/Home/Icons/wifi.png"
import youtube from "./../../../images/Home/Icons/youtube.png"
import bachi from "./../../../images/NewsandEvents/1.png"
const NewsEventsSlideOne = () => {
  return (
    <>
      <div className={NewsEventsSlideOneStyle.containerStyle}>
        <div className={NewsEventsSlideOneStyle.headingSocialMmediaIcons}>
        <div className={NewsEventsSlideOneStyle.allignSocialAndHeading}>
                {/* Heading container  */}
                <p className={NewsEventsSlideOneStyle.latestPostText}>
                  LATEST POST
                </p>
                {/* Heading Icons */}
                <div className={NewsEventsSlideOneStyle.containerIcons}>
                  <p className={NewsEventsSlideOneStyle.followUsText}>
                    FOLLOW US
                  </p>
                  <img
                    className={NewsEventsSlideOneStyle.socialIcons}
                    src={facebook}
                    class="img-fluid"
                  ></img>
                  <img
                    className={NewsEventsSlideOneStyle.socialIcons}
                    src={youtube}
                    class="img-fluid"
              
                  ></img>
                  <img
                    className={NewsEventsSlideOneStyle.socialIcons}
                    src={instagram}
                    class="img-fluid"
                  
                  ></img>
                  <img
                    className={NewsEventsSlideOneStyle.socialIcons}
                    src={wifi}
                    class="img-fluid"
                  
                  ></img>
                  <img
                    className={NewsEventsSlideOneStyle.socialIcons}
                    src={twitter}
                    class="img-fluid"
                  
                  ></img>
          </div>
        </div>
        </div>
       
        <div className={NewsEventsSlideOneStyle.containerContent}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className={NewsEventsSlideOneStyle.containerContentLeft}>
                  <p className={NewsEventsSlideOneStyle.containerHeading}>
                    GROUND BREAKING CERMONY OF SECONDARY BLOCK OF BVPS
                  </p>
                  <p className={NewsEventsSlideOneStyle.containerDesc}>
                    The grounding breaking cermony for the construction of the
                    new building of Banjosa Valley Public School took place at
                    Kashmir.Mr. Yaqoob Sattar, DMD /CFO & Chairman, PSO CSR
                    Trust
                  </p>
                  <p className={NewsEventsSlideOneStyle.containerLink}>
                    Continue reading this post
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className={NewsEventsSlideOneStyle.imageContainer}>
                <img
              
                  className={NewsEventsSlideOneStyle.tharkis}
                  src={bachi}
                ></img>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsEventsSlideOne

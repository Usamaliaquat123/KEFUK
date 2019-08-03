import React, { useState } from "react"
import NewsEventsSlideOneStyle from "./NewsEventsSlideOne.module.css"
import Typed from "react-typed"
const NewsEventsSlideOne = () => {
  return (
    <>
      <div className={NewsEventsSlideOneStyle.containerStyle}>
        <div className={NewsEventsSlideOneStyle.containerContent}>
          <div className="container">
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
                {/* <img
          className={TeachersSlideOneStyle.tharkis}
          src={bachi}
        ></img> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsEventsSlideOne

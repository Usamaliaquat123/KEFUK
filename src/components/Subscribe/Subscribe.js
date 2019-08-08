import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.css"
import SubscribeStyle from "./Subscribe.module.css"
const Subscribe = ({ subscribeText }) => {
  return (
    <div className={SubscribeStyle.containerSTyle}>
      <div style={{ maxWidth: 1000, margin: "auto" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <p
            className={SubscribeStyle.containerText}
            >
              {subscribeText}
            </p>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
              <input
                className={SubscribeStyle.containerEmailInput}
              
                placeholder={"Enter your email address"}
              ></input>
              </div>
              <div className='col-sm-12 col-md-6'>
              <div style={{ marginTop: 13 }}>
              
              <div
                className={SubscribeStyle.subscribeBtn}
              >
                Subscribe
              </div>
            </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

Subscribe.propTypes = {
  subscribeText: PropTypes.string,
}

Subscribe.defaultProps = {
  subscribeText: ``,
}

export default Subscribe

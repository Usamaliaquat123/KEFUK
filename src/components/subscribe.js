import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.css"
const Subscribe = ({ subscribeText }) => {
  return (
    <div
      style={{
        backgroundPosition: "fixed",
        display: `flex`,
        alignItems: `center`,
        background: "#EB5D5F",
        height: 200,
      }}
    >
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm col-md col-6">
              <p
                style={{
                  fontSize: 18,
                  color: "aliceblue",
                  textAlign: "center",
                }}
              >
                {subscribeText}
              </p>
            </div>
            <div className="col-sm col-md col-4">
              <div style={{ marginTop: 13 }}>
                <input
                  style={{
                    marginRight: 40,
                    float: `left`,
                    border: `none`,
                    width: 300,
                    borderRadius: 35,
                    padding: 10,
                    paddingLeft: 20,
                    letterSpacing: 0.5,
                    fontSize: 12,
                  }}
                  placeholder={"Enter your email address"}
                ></input>
                <div
                  style={{
                    marginLeft: 20,
                    width: `auto`,
                    display: `flex`,
                    alignItems: `center`,
                    padding: 10,
                    paddingLeft: 35,
                    background: `#03B9FE`,
                    borderRadius: 30,
                    fontSize: 14,
                    color: `aliceblue`,
                  }}
                >
                  Subscribe
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

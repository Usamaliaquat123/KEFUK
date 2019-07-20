import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import "bootstrap/dist/css/bootstrap.css"
const BottomNav = () => {
  return (
    <div style={{ display: `flex`, alignItems: `center`, height: 400 }}>
      <div style={{ margin: `auto`, width: 600 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div style={{ fontSize: 12 }}>
                CONTACT US
                <hr style={{ width: 140, marginBottom: 6, marginTop: 10 }} />
              </div>
              <div style={{ marginTop: -2 }}>
                <span
                  style={{
                    fontSize: 11,
                    color: "#161821",
                    textDecoration: "none",
                  }}
                >
                  123 Anywhere St. <br />
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "#161821",
                    textDecoration: "none",
                  }}
                >
                  Cityname, NY 11206 <br />
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "#161821",
                    textDecoration: "none",
                  }}
                >
                  (123) 456-7890 <br />
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "#161821",
                    textDecoration: "none",
                  }}
                >
                  contact@npo.org
                </span>
              </div>
            </div>
            <div className="col-4">
              <div style={{ fontSize: 12 }}>
                LINKS
                <hr style={{ width: 140, marginBottom: 6, marginTop: 10 }} />
              </div>
              <div style={{ marginTop: -2 }}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#161821",
                    fontSize: 11,
                  }}
                  to="/"
                >
                  The issue
                </Link>
                <br />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#161821",
                    fontSize: 11,
                  }}
                  to=""
                >
                  How we help
                </Link>
                <br />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#161821",
                    fontSize: 11,
                  }}
                  to=""
                >
                  Get involved{" "}
                </Link>
                <br />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#161821",
                    fontSize: 11,
                  }}
                  to=""
                >
                  Latest news
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div style={{ fontSize: 12 }}>
                FOLLOW US
                <hr style={{ width: 140, marginBottom: 6, marginTop: 10 }} />
              </div>
              <div style={{ marginTop: -2 }}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#161821",
                    fontSize: 11,
                  }}
                  to="/"
                >
                  Facebook
                </Link>
                <br />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#161821",
                    fontSize: 11,
                  }}
                  to=""
                >
                  Twitter
                </Link>
                <br />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#161821",
                    fontSize: 11,
                  }}
                  to=""
                >
                  Instagram
                </Link>
                <br />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#161821",
                    fontSize: 11,
                  }}
                  to=""
                >
                  Medium
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomNav

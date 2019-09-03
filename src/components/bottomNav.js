import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import Logo from "./../images/logoUpdate.png"
import "bootstrap/dist/css/bootstrap.css"
import BottomNavSTyles from "./bottomNav.module.css";
const BottomNav = () => {
  return (
    <div style={{ display: `flex`, alignItems: `center`, height: 400 }}>
      <img
        class="img-fluid"
        width={200}
        style={{ marginLeft: "12%", marginRight: "-19%" }}
        height={200}
        src={Logo}
      ></img>
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
                  className={BottomNavSTyles.addresssLinks}
                >
                  123 Anywhere St. <br />
                </span>
                <span
                 className={BottomNavSTyles.addresssLinks}
                 
                >
                  Cityname, NY 11206 <br />
                </span>
                <span
                 className={BottomNavSTyles.addresssLinks}
                >
                  (123) 456-7890 <br />
                </span>
                <span
                 className={BottomNavSTyles.addresssLinks}
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
                   className={BottomNavSTyles.addresssLinks}
                  to="/Schools"
                >
                  What we do
                </Link>
                <br />
                <Link
                   className={BottomNavSTyles.addresssLinks}
                  to="/Pvps"
                >
                  Where we work
                </Link>
                <br />
                <Link
                   className={BottomNavSTyles.addresssLinks}
                  to="/GetInvolved"
                >
                  Get Involved
                </Link>
                <br />
                <Link
                   className={BottomNavSTyles.addresssLinks}
                  to="/News"
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
                className={BottomNavSTyles.addresssLinks}
                  to="/"
                >
                  Facebook
                </Link>
                <br />
                <Link
                className={BottomNavSTyles.addresssLinks}
                  to=""
                >
                  Twitter
                </Link>
                <br />
                <Link
                className={BottomNavSTyles.addresssLinks}
                  to=""
                >
                  Instagram
                </Link>
                <br />
                <Link
                className={BottomNavSTyles.addresssLinks}
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

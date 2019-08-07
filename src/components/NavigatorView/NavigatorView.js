import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, ReactDOM } from "react"
import navigationView from "./NavigatorView.module.css"

export default class NavigatorView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ismenuActive: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
    this.setState({ ismenuActive: !this.state.ismenuActive })
  }
  render() {
    return (
      <div className={navigationView.containerNav}>
        <nav>
          <ul
            className={
              this.state.ismenuActive
                ? navigationView.showing
                : navigationView.defaultClose
            }
          >
            <a href="#" className={navigationView.dropdown}>
              <li>WHAT WE DO</li>
              <div className={navigationView.dropdownContent}>
                <a href="/Schools">SCHOOLS</a>
                <a href="/Teachers">TEACHER TRAINING</a>
              </div>
            </a>
            <a href="#" className={navigationView.dropdownSchools}>
              <li>WHERE WE WORK</li>
              <div className={navigationView.dropdownContentSchools  }>
                <a href="/schools/Svpc">PEARL VALLEY PUBLIC SCHOOL</a>
                <a href="#">BANJOSA VALLEY PUBLIC SCHOOL</a>
                <a href="#">SOAN VALLEY PUBLIC SCHOOL</a>
                <a href="#">JOAN ATKINSON COLLEGE OF TEACHER EDUCATION</a>
              </div>
            </a>
            <a href="#">
              <li>GET INVLOVED</li>
            </a>
            <a href="#">
              <li>NEWS & EVENTS</li>
            </a>
            <a href="#">
              <li>CONTACT US</li>
            </a>
            <a href="#">
              <li>CONTACT</li>
            </a>
          </ul>
          <div className={navigationView.handle}>
            <p className={navigationView.menu}>Kefuk</p>
            <div
              onClick={this.toggleClass}
              className={navigationView.menu_icon}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

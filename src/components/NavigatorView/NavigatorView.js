import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{ useState} from "react"
import navigationView from './navigatorView.module.css'
import $ from 'jquery' // important: case sensitive.

const navigatorView = () => {
  // Donation box states

	
  return (
        <div  className={navigationView.containerNav}>
            <nav>
			<ul>
				<a href="#"><li>WHAT WE DO</li></a>
				<a href="#"><li>WHERE WE WORK</li></a>
				<a href="#"><li>GET INVLOVED</li></a>
				<a href="#"><li>NEWS & EVENTS</li></a>
				<a href="#"><li>CONTACT US</li></a>
				<a href="#"><li>CONTACT</li></a>
			</ul>
			<div className={navigationView.handle}>
				<p className={navigationView.menu}>Kefuk</p>
				<div className={navigationView.menu_icon}>
			      <div></div>
			      <div></div>
			      <div></div>
		      </div>
			</div>
		</nav>
        </div>
    )
}

export default navigatorView

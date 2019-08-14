import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/NavigatorView"
import NewsEventsSlideOne from "../components/News&events/Slide1/NewsEventsSlideOne"
import NewsEventsSlideThree from "../components/News&events/Slide3/NewsEventsSlideThree"
import NewsEventsSlideTwo from "../components/News&events/Slide2/NewsEventsSlideTwo"
// import Donation from "../components/donaion/donation"
// import Subscribe from "../components/Subscribe/Subscribe"
// import BottomNav from "../components/bottomNav"
// import BasicFeatures from "../components/basicFeatures/basicFeatures"
// import WhereWeWorkSlideOne from "../components/WhereWeWork/svps/Slide1/WhereWeWorkSlideOne"

export class News extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <Header />
        <NavigatorView />
        <NewsEventsSlideOne />
        <NewsEventsSlideTwo />
        <NewsEventsSlideThree />
      </>
    )
  }
}

export default News

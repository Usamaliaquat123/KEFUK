import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/NavigatorView"
import NewsEventsSlideOne from "../components/News&events/Slide1/NewsEventsSlideOne"
import NewsEventsSlideThree from "../components/News&events/Slide3/NewsEventsSlideThree"
import NewsEventsSlideTwo from "../components/News&events/Slide2/NewsEventsSlideTwo"

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

import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/NavigatorView"
import NewsEventsSlideOne from "../components/News&events/Slide1/NewsEventsSlideOne"
import NewsEventsSlideThree from "../components/News&events/Slide3/NewsEventsSlideThree"
import NewsEventsSlideTwo from "../components/News&events/Slide2/NewsEventsSlideTwo"
import Subscribe from "../components/Subscribe/Subscribe"
import BottomNav from "../components/bottomNav"
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
        <Subscribe subscribeText="Subscribe to our monthly news letter and stay up to date with all news and events" />
        <BottomNav />

<footer>
  <hr />
  <p style={{ textAlign: "center", fontSize: 13 }}>
    Copyright © 2010 Kashmir Education Eoundation. All rights
    reserved.
  </p>
</footer>
      </>
    )
  }
}

export default News

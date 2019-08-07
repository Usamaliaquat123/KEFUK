import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Header from "../../components/header/Header"
import NavigatorView from "../../components/NavigatorView/navigatorView"
import Donation from "../../components/donaion/donation"
import Subscribe from "../../components/Subscribe/subscribe"
import BottomNav from "../../components/bottomNav"
import WhereWeWorkSlideOne from "../../components/WhereWeWork/Slide1/WhereWeWorkSlideOne"
// import WhereWeWorkSlideTwo from "../../c omponents/WhereWeWork/Slide1/WhereWeWorkSlideTwo";
import WhereWeWorkSlideThree from "../../components/WhereWeWork/Slide3/WhereWeWorkSlideThree"
// import HomeSlideSecond from "../components/Home/Slide2/HomeSlideSecond"
// import HomeSlide from "../components/Home/HomeSlide/HomeSlide"
// import HomeSlideThird from "../components/Home/Slide3/HomeSlideThird"
// import HomeSlideFour from "../components/Home/Slide4/HomeSlideFour"
// import HomeSlideFive from "../components/Home/Slide5/HomeSlideFive"

export class Svpc extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <Header siteSubTitle={`Education since 1996`} />
        {/* <hr /> */}
        <NavigatorView />
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <WhereWeWorkSlideOne />
          {/* <WhereWeWorkSlideTwo /> */}
          <WhereWeWorkSlideThree />
          {/* <main>{children}</main> */}
          <Donation />
          <Subscribe subscribeText="Subscribe to our monthly news letter and stay up to date with all news and events" />
          <BottomNav />

          <footer>
            <hr />
            <p style={{ textAlign: "center", fontSize: 13 }}>
              Copyright © 2010 Kashmir Education Eoundation. All rights
              reserved.
            </p>
          </footer>
        </div>
      </>
    )
  }
}

export default Svpc

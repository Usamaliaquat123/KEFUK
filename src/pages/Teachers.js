import React, { useState } from "react"
import "typeface-emilys-candy"
import "typeface-merriweather"
import Header from "../components/header/Header"
import NavigatorView from "../components/NavigatorView/navigatorView"
import BasicFeatures from "../components/basicFeatures/basicFeatures"
import Subscribe from "../components/subscribe"
import BottomNav from "../components/bottomNav"
import TeachersSlideOne from "../components/TeachersPage/Slide1/TeachersSlideOne"
import TeachersSlideTwo from "../components/TeachersPage/Slide2/TeachersSlideTwo"
import TeachersSlideThree from "../components/TeachersPage/Slide3/TeachersSlideThree"

const Teachers = () => {
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
        <TeachersSlideOne />
        <TeachersSlideTwo />
        <TeachersSlideThree />
        <BasicFeatures />
        <Subscribe subscribeText="Subscribe to our monthly news letter and stay up to date with all news and events" />
        <BottomNav />

        <footer>
          <hr />
          <p style={{ textAlign: "center", fontSize: 13 }}>
            Copyright © 2010 Kashmir Education Eoundation. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

export default Teachers

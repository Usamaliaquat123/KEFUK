
import React, { useState } from "react"
import "typeface-emilys-candy"
import "typeface-merriweather"
import Header from "../../components/header/Header";
import NavigatorView from "../../components/NavigatorView/navigatorView";
import ChildrenSlideOne from "../../components/ChildrenPage/Slide1/ChildrenSlideOne";
import ChildrenSlideTwo from "../../components/ChildrenPage/Slide2/ChildrenSlideTwo";
import ChildrenSlideThree from "../../components/ChildrenPage/Slide3/ChildrenSlideThree";
import BasicFeatures from "../../components/basicFeatures/basicFeatures";
import Subscribe from "../../components/subscribe";
import BottomNav from "../../components/bottomNav";

const Schools = () => {
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
        <ChildrenSlideOne />
        <ChildrenSlideTwo />
        <ChildrenSlideThree />
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



export default Schools

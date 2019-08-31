import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachiBachaRun from "./../../../images/WhereWedo/bachiBachaRun.png"
import ghar from "./../../../images/WhereWedo/ghar.png"
import GetInvolvedStyle from "./GetInvolvedTwo.module.css"
import Typed from "react-typed"
import slide2 from "./../../../images/GetInv/slide2.png";
const GetInvolvedTwo = () => {
  return <>
      <div   style={{
        backgroundImage: `url(${slide2})`,
        maxWidth: "100%",
        margin: "auto",
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: `400`,
      }}>
     <div className={GetInvolvedStyle.containerSTyle}>
          <p className={GetInvolvedStyle.heading}>MAKE AN IMPACT</p>
          <p className={GetInvolvedStyle.descText}>
          You have the opportunity to impact the lives of children and families surrounded 
          <br /><br />by poverty. It is through your generosity that we can create a powerful change.
          </p>
          <div className={GetInvolvedStyle.btnInvolved}>
              GET INVOLVED
          </div>
     </div>
    </div>
  </>
}

export default GetInvolvedTwo

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachi from "./../../../images/Home/ChildrenTab/bachi.png"
import ChildrenSlideOneStyle from "./ChildrenSlideOne.module.css"
import Typed from "react-typed"
const ChildrenSlideOne = () => {
  return (
    <div className={ChildrenSlideOneStyle.containerSLideOne}>
      <div className={ChildrenSlideOneStyle.ImageContainer}>
        <img
          className={ChildrenSlideOneStyle.bachiImg}
          src={bachi}
          class="img-fluid"
        ></img>
      </div>
      <div className={ChildrenSlideOneStyle.containerTextSTyle}>
        <div className={ChildrenSlideOneStyle.btnWhatweDO}>WHAT WE DO</div>
        <p className={ChildrenSlideOneStyle.headingText}>
          Providing Modern Quality Education in Kashmir & Pakistan
        </p>
        <p className={ChildrenSlideOneStyle.descText}>
          Kashmir Education Foundation (KEF) is a charitable Educational Trust
          and is currently running three schools which provide modern quality
          education to bright children from marginalized sections of the society
        </p>
        <p className={ChildrenSlideOneStyle.descText}>
          Illeracy and sub-standard education for the rural masses is recognized
          as the root cause Pakistan's major problems. Social and sectarian
          tensions and widespread pockets of poverty can offten be directly
          traced back to outmoded and inadequate education
        </p>
        <p className={ChildrenSlideOneStyle.descText}>
          The primary aim of KEF is to make the highest quality education
          accessible to talented boys and girls from underprivileged and
          hitherto and marginalised sections of society, with special emphasis
          on female education
        </p>
      </div>
    </div>
  )
}

export default ChildrenSlideOne

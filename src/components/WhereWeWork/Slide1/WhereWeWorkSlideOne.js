import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import bachiBachaRun from "./../../Images/WhereWedo/bachiBachaRun.png"
import ghar from "./../../Images/WhereWedo/ghar.png"
import WhereWeWorkSlideOneStyle from "./WhereWeWorkSlideOne.module.css"
import Typed from "react-typed"
const WhereWeWorkSlideOne = () => {
  const { pvpc, setpvpc } = useState(true)
  const { bvpc, setbvpc } = useState(false)
  const { svpc, setsvpc } = useState(false)
  const { jacte, setjacte } = useState(false)

  const setDefaultChanger = async val => {
    if (val == pvpc) {
      setpvpc(true)
      setbvpc(false)
      setsvpc(false)
      setjacte(false)
    } else if (val == bvpc) {
      setbvpc(true)
      setsvpc(false)
      setjacte(false)
      setpvpc(false)
    } else if (val == svpc) {
      setsvpc(true)
      setjacte(false)
      setbvpc(false)
      setpvpc(false)
    } else if (val == jacte) {
      setjacte(true)
      setpvpc(false)
      setbvpc(false)
      setsvpc(false)
    }
  }

  return (
    <>
      <div className={WhereWeWorkSlideOneStyle.containerSlide}>
        <div className={WhereWeWorkSlideOneStyle.conbtainer}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className={WhereWeWorkSlideOneStyle.workbtn}>
                  WHERE WE WORK
                </div>
                <div className={WhereWeWorkSlideOneStyle.containerText}>
                  <div className={WhereWeWorkSlideOneStyle.containerTextTiles}>
                    PEARL VALLEY PUBLIC SCHOOL
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.containerTextTiles}>
                    BANJOSA VALLEY PUBLIC SCHOOL
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.containerTextTiles}>
                    SOAN VALLEY PUBLIC SCHOOL
                  </div>
                  <div className={WhereWeWorkSlideOneStyle.containerTextTiles}>
                    JOAN ATKINSON COLLEGE OF TEACHER EDUCATION
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <img
                  // class='img-fluid'
                  width={500}
                  // height={400}
                  //   className={WhereWeWorkSlideOneStyle.bachiImg}
                  src={bachiBachaRun}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhereWeWorkSlideOne

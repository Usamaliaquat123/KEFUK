import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import backgroundImage from "./../../assets/images/donation.png"
import donationStyle from "./donationStyle.css"
const Donation = () => {
  // Donation box states
  const [eduChildDonate, useeduChildDonate] = useState()
  const [sponserChild, usesponserChild] = useState()
  const [sponserTeacher, usesponserTeacher] = useState()

  function ChangeMode(val) {
    if (val == "£10") {
      useeduChildDonate(true)+
      usesponserChild(false)
      usesponserTeacher(false)
    } else if (val == "£25") {
      useeduChildDonate(false)
      usesponserChild(true)
      usesponserTeacher(false) 
    } else if (val == "£60") {
      useeduChildDonate(false)
      usesponserChild(false)
      usesponserTeacher(true)
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        maxWidth: "100%",
        margin: 0,
        height: `100%`,
        backgroundSize: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        minHeight: 838,
      }}
    >


      
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className='cardContainer'>
              <div style={{ fontSize: 15, fontWeight: "bold" }}>
                {" "}
                Choose a donation amount
              </div>
              <div style={{ marginTop: 15 }}>
                <form action="#">
                  <div
                    onClick={() => ChangeMode("£10")}
                    className={
                      eduChildDonate
                        ? 'selectedPaymentCardItem'
                        : 'paymentCardItem'
                    }
                  >
                    <div className="row">
                      <div className="col-sm-2">
                        <input type="radio" id="test1" name="radio-group" />
                      </div>
                      <div className="col-sm-3">
                        <div className='paymentCardItemMoney'>£10</div>
                      </div>
                      <div className="col-sm-7">
                        <div className='paymentCardItemDText'>
                          Make a difference by subsidizing the education of a
                          child
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => ChangeMode("£25")}
                    className={
                      usesponserChild
                        ? 'selectedPaymentCardItem'
                        : 'paymentCardItem'
                    }
                  >
                    <div className="row">
                      <div className="col-sm-2">
                        <input type="radio" id="test1" name="radio-group" />
                      </div>
                      <div className="col-sm-3">
                        <div className='paymentCardItemMoney'>£25</div>
                      </div>
                      <div className="col-sm-7">
                        <div className='paymentCardItemDText'>
                          Make a difference by subsidizing the education of a
                          child
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => ChangeMode("£60")}
                    className={
                      usesponserTeacher
                        ? 'selectedPaymentCardItem'
                        : 'paymentCardItem'
                    }
                  >
                    <div className="row">
                      <div className="col-sm-2">
                        <input
                          type="radio"
                          id="test1"
                          name="radio-group"
                          checked
                        />
                      </div>
                      <div className="col-sm-3">
                        <div className='paymentCardItemMoney'>£60</div>
                      </div>
                      <div className="col-sm-7">
                        <div className='paymentCardItemDText'>
                          Make a difference by subsidizing the education of a
                          child
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className='enterCustomDonationText'>
                <p>Enter a custom donation amount</p>
              </div>
              <div className='selectdonationFrequency'>
                <p>Choose a donation frequency</p>

                <div className='selectDonationFSelectorContainer'>
                  <div className='donationFrequencyButtonOneTime'>
                    <span className='donationOneTimeText'>
                      One time
                    </span>
                  </div>
                  <div className='donationFrequencyButtonMonthly'>
                    <span className='donationMonthlyText'>
                      Monthly
                    </span>
                  </div>
                </div>
              </div>
              <div className='donateNowAndCancel'>
                <div className='donateNowButton'>Donate Now</div>
                <div className='cancelBbutton'>cancel</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Donation

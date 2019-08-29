import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
// import sampleImg from "./../../images/don.jpg"
import backgroundImage from "./../../images/donation.png"
import donation from "./donation.module.css"
const Donation = () => {
  // Donation box states
  const [eduChildDonate, useeduChildDonate] = useState()
  const [sponserChild, usesponserChild] = useState()
  const [sponserTeacher, usesponserTeacher] = useState()

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
        <di className="row">
          <div className="col-sm-6">
            <div className={donation.cardContainer}>
              <div style={{ fontSize: 15, fontWeight: "bold" }}>
                {" "}
                Choose a donation amount
              </div>
              <div style={{ marginTop: 15 }}>
                <form action="#">
                  <div className={donation.paymentCardItem}>
                    <div className="row">
                      <div className="col-sm-2">
                        <input type="radio" id="test1" name="radio-group" />
                        <label for="test1">Apple</label>
                      </div>
                      <div className="col-sm-3">
                        <div className={donation.paymentCardItemMoney}>£60</div>
                      </div>
                      <div className="col-sm-7">
                        <div className={donation.paymentCardItemDText}>
                          Make a difference by subsidizing the education of a
                          child
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={donation.paymentCardItem}>
                    <div className="row">
                      <div className="col-sm-2">
                        <input type="radio" id="test1" name="radio-group" />
                        <label for="test1">Apple</label>
                      </div>
                      <div className="col-sm-3">
                        <div className={donation.paymentCardItemMoney}>£25</div>
                      </div>
                      <div className="col-sm-7">
                        <div className={donation.paymentCardItemDText}>
                          Make a difference by subsidizing the education of a
                          child
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={donation.paymentCardItem}>
                    <div className="row">
                      <div className="col-sm-2">
                        <input
                          type="radio"
                          id="test1"
                          name="radio-group"
                          checked
                        />
                        <label for="test1">Apple</label>
                      </div>
                      <div className="col-sm-3">
                        <div className={donation.paymentCardItemMoney}>£60</div>
                      </div>
                      <div className="col-sm-7">
                        <div className={donation.paymentCardItemDText}>
                          Make a difference by subsidizing the education of a
                          child
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className={donation.enterCustomDonationText}>
                <p>Enter a custom donation amount</p>
              </div>
              <div className={donation.selectdonationFrequency}>
                <p>Choose a donation frequency</p>

                <div className={donation.selectDonationFSelectorContainer}>
                  <div className={donation.donationFrequencyButtonOneTime}>
                    <span className={donation.donationOneTimeText}>
                      One time
                    </span>
                  </div>
                  <div className={donation.donationFrequencyButtonMonthly}>
                    <span className={donation.donationMonthlyText}>
                      Monthly
                    </span>
                  </div>
                </div>
              </div>
              <div className={donation.donateNowAndCancel}>
                <div className={donation.donateNowButton}>Donate Now</div>
                <div className={donation.cancelBbutton}>cancel</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-2"></div>
        </di>
      </div>
    </div>
  )
}

export default Donation

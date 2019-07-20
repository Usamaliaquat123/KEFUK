import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export class Donate extends Component {
  static propTypes = {}

  donateWithStripe() {
    console.log(`test`)
  }

  render() {
    return (
      <div>
        <button id="checkout-button-sku_FSajkfu5EcXMeG" role="link">
          Checkout
        </button>
      </div>
    )
  }
}

export default Donate

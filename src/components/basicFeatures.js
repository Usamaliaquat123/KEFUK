import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sampleImg from "./../images/don.jpg";
const BasicFeatures = () => {
  return (
    <div style={{ display: `flex`, background : '#ECF4FA  ', alignItems: `center`, height: 700 }}>
      
      <div className='container' style={{ padding: 150 }}>
          <div className='row'>
            <div className='col-sm-12 col-md-4'>
              <div style={{ width: 250, padding: 25, height: 'auto', background: '#fff' }}>
                <div style={{ marginTop: -50, marginRight: -50 }}> 
                <img src={sampleImg} width="260" height="160"></img>
                </div>
                <p style={{ fontSize: 20, fontWeight:'bold' }}>Support a Child</p>
                <p style={{ fontSize: 13 }}> veniam minim ad laboris non. Voluptate minim enim cupidatat in cupidatat dolore quis dolore laborum. Ea sit esse incididunt consequat magna sit commodo. Ea sit esse incididunt consequat magna sit commodo   </p>
                <div style={{ textAlign: 'center', borderRadius: 30, width: 120, color: '#fff', fontSize: 13 , background: '#03B9FE', padding:10, paddingLeft: 20 }}>Read more</div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4'>
            <div style={{ width: 250, padding: 25, height: 'auto', background: '#fff' }}>
                <div style={{ marginTop: -50, marginRight: -50 }}> 
                <img src={sampleImg} width="260" height="160"></img>
                </div>
                <p style={{ fontSize: 20, fontWeight:'bold' }}>Teacher Training</p>
                <p style={{ fontSize: 13 }}> veniam minim ad laboris non. Voluptate minim enim cupidatat in cupidatat dolore quis dolore laborum. Ea sit esse incididunt consequat magna sit commodo. Ea sit esse incididunt consequat magna sit commodo  </p>
                <div style={{  textAlign: 'center',borderRadius: 30, width: 120, color: '#fff', fontSize: 13 , background: '#03B9FE', padding:10, paddingLeft: 20 }}>Read more</div>
              </div>
            </div>
            <div className='col-sm-12 col-md-4'>
            <div style={{ width: 250, padding: 25, height: 'auto', background: '#fff' }}>
                <div style={{ marginTop: -50, marginRight: -50 }}> 
                <img src={sampleImg} width="260" height="160"></img>
                </div>
                <p style={{ fontSize: 20, fontWeight:'bold' }}>Volunteer and Fundraising</p>
                <p style={{ fontSize: 13 }}> veniam minim ad laboris non. Voluptate minim enim cupidatat in cupidatat dolore quis dolore laborum. Ea sit esse incididunt consequat magna sit commodo. Ea sit esse incididunt consequat magna sit commodo    </p>
                <div style={{ textAlign: 'center', borderRadius: 30, width: 120, color: '#fff', fontSize: 13 , background: '#03B9FE', padding:10, paddingLeft: 20 }}>Read more</div>
              </div>
            </div>
          </div>
      </div>
    </div>
    
      )
}

export default BasicFeatures

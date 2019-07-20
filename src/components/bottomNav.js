import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import 'bootstrap/dist/css/bootstrap.css';
const BottomNav = () => {


    return(
        <div style={{ display: `flex`,
            alignItems: `center`,  height: 200 }}>
        <div style={{ margin: `auto`, width: 800 , background: '#03B9FE' }} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <div style={{fontSize: 14,}}>
                        CONTACT US    
                        <hr />
                        </div>    
                        <p>asdas</p>
                    </div>
                    <div className="col-4">
                    <div style={{fontSize: 14,}}>
                        LINKS   
                        <hr />
                        </div>    
                        <p>asdas</p>
                    </div>
                    <div className="col-4">
                    <div style={{fontSize: 14,}}>
                        FOLLOW US    
                        <hr />
                        </div>    
                        <p>asdas</p>
                    </div>
                </div>
            </div>
            

            
        </div>
        </div>
    )
}


export default BottomNav

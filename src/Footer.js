import React from 'react'
import logo from "./Assets/logo.png"
import insta from "./Assets/insta.png"
import facebook from "./Assets/facebook.png"
import twitter from "./Assets/twitter.png"
import "./Footer.css"
function Footer() {
  return (
    <div className='footer'>
    <div className='logo-div'><img src={logo} alt="logo"/></div>
    <div className='contact'>
    <h3>Contact Us</h3>
    <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
    <p>example2020@gmail.com</p>
    <p>(904) 443-0343</p>
    </div>
    <div className='more'>
    <h3>More</h3>
    <p>About Us</p>
    <p>Products</p>
    <p>Careers</p>
    <p>Contact Us</p>
    </div>
    <div className='social'>
    <div>
    <h3>Social Links</h3>
    <div>
    <img src={insta} alt="instagram"/>
    <img src={twitter} alt="twitter"/>
    <img src={facebook} alt="facebook"/>
    </div>
    </div>
    <p>© 2022 Food Truck Example</p>
    </div>
    </div>
  )
}

export default Footer
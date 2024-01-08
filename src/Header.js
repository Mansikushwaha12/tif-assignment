import React from 'react'
import "./Header.css";
import logo from "./Assets/logo.png"
import pizza from "./Assets/pizza.png"
import color from "./Assets/color.png"
function Header() {
  return (
    <div className='header'>
    <div className='left-header'>
    <div className='logo'>
    <img src={logo} alt='logo'/>
    </div>
    <div className='description'>
    <h1>Discover the 
    <span style={{color:"red"}}> Best</span> Food and Drinks</h1>
    <p>Naturally made Healthcare Products for the better care & support of your body.</p>
    <button>Explore Now!</button>
    </div>
    </div>
    <div className='right-header'>
    <div className='right-header'>
    <img className="pizza" src={pizza} alt="food-img" />
    <div className='above-items'>
    <img className="red-color"src={color} alt="colour"/>
    <button>Get In Touch</button>
    </div>
   
    </div>
    </div>

    </div>
  )
}

export default Header
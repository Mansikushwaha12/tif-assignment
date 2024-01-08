import React from 'react'
import about from "./Assets/about.png"
import "./About.css"
function About() {
  return (
    <div className='about'>
    <div className='aboutUs'>
    <div className='left-about'><img src={about} alt="about-img"/></div>
    <div className='right-about'><h1>About Us</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
    <button>Read More</button>
    </div>
    </div>
    </div>
  )
}

export default About
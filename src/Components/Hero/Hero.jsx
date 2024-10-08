import React from 'react'
import './Hero.css'
import wom_icon from '../Assests/women4 1.png';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-image">
        <img src={wom_icon} alt="Exquisite Jewelry" />
        <div className="hero-overlay">
          <h1 className="hero-title1">Elevate Your Style with </h1>
          <h1 className="hero-title2">Eterno's Exquisite Jewelry </h1>
          
          <button className="explore-button">Explore More</button>
        </div>
      </div> 
    </div>
  )
}

export default Hero

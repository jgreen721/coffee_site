import React from 'react'

const Hero = () => {
  return (
    <div className="about-hero">
      <div className="about-card">
        <h1 className="about-h1">About Us</h1>
        <p className="about-blurb">Coffeeroasters beagan its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
      </div>
      <picture className="about-hero-bg">
      <source media="(min-width:650px)" srcSet="./assets/about/desktop/image-hero-whitecup.jpg"/>
      <source media="(min-width:465px)" srcSet="./assets/about/desktop/image-hero-whitecup.jpg"/>
      <img src="./assets/about/desktop/image-hero-whitecup.jpg" alt="img"/>
    </picture>    
    </div>
  )
}

export default Hero
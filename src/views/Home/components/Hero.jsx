import React from 'react'

const Hero = () => {
  return (
    <section className="home-hero">
       <picture>
      <source media="(min-width:650px)" srcSet="./assets/home/desktop/image-hero-coffeepress.jpg"/>
      <source media="(min-width:465px)" srcSet="./assets/home/tablet/image-hero-coffeepress.jpg"/>
      <img className="hero-home-img" src="./assets/home/mobile/image-hero-coffeepress.jpg" alt="img"/>
    </picture>
    <div className="hero-card">
      <h1 className="hero-h1">Great Coffee made simple</h1>
      <p className="hero-blurb">Start your mornings with the worlds best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
      <button className="btn create-btn">Create your plan</button>
    </div>
    </section>
  )
}

export default Hero
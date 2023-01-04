import React from 'react'

const Committment = () => {
  return (
    <div className="committment-parent">
      <div className="commit-column">
      <picture className="about-hero-bg">
      <source media="(min-width:650px)" srcSet="./assets/about/desktop/image-commitment.jpg"/>
      <source media="(min-width:465px)" srcSet="./assets/about/desktop/image-commitment.jpg"/>
      <img src="./assets/about/desktop/image-commitment.jpg" alt="img"/>
    </picture> 
      </div>
      <div className="commit-column">
        <h1 className="commit-h1">Our Commitment</h1>
        <p className="commit-p">  We’re built on a simple mission and a commitment to doing good along the way. We want to 
  make it easy for you to discover and brew the world’s best coffee at home. It all starts 
  at the source. To locate the specific lots we want to purchase, we travel nearly 60 days 
  a year trying to understand the challenges and opportunities in each of these places.
  We collaborate with exceptional coffee growers and empower a global community of farmers 
  through with well above fair-trade benchmarks. We also offer training, support farm community 
  initiatives, and invest in coffee plant science. Curating only the finest blends, we roast 
  each lot to highlight tasting profiles distinctive to their native growing region.</p>
      </div>
    </div>
  )
}

export default Committment
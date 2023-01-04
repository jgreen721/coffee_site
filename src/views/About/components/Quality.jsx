import React from 'react'

const Quality = () => {
  return (
    <div className="quality-card">
        <div className="quality-col">
            <h1 className="quality-h1">Uncompromising quality</h1>
            <p className="quality-blurb">  Although we work with growers who pay close attention to all stages of harvest and processing, 
  we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the 
  coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
  consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
        </div>
<div className="quality-col">
    <picture>
      <source media="(min-width:650px)" srcSet="./assets/about/desktop/bg-quality.png" />
      <source media="(min-width:465px)" srcSet="./assets/about/tablet/bg-quality.png" />
      <img src="./assets/about/mobile/bg-quality.png" alt="img" />
    </picture>
</div>
    </div>
  )
}

export default Quality
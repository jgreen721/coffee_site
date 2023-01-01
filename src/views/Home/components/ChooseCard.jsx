import React from 'react'

const ChooseCard = ({card}) => {
  return (
    <div className="choose-card">
        <img className="choose-icon" src={card.icon} alt="icon" />
        <div className="choose-card-text-div">
        <h3 className="choose-h3">{card.title}</h3>
        <p className="choose-caption">{card.blurb}</p>
        </div>
    </div>
  )
}

export default ChooseCard
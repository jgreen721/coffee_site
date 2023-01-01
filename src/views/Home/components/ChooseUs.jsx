import React, {useState} from 'react'
import ChooseCard from "./ChooseCard";

const ChooseUs = () => {
  const [cardData, setCardData] = useState([
    {id:1,icon:"./assets/home/desktop/icon-coffee-bean.svg",title:"Best quality",blurb:"Discover the endless variety of the world's best artisan coffee from each of our roasters"},
    {id:2,icon:"./assets/home/desktop/icon-gift.svg",title:"Exclusive Benefits",blurb:"Special offers and swag when you subscribe, including 30% off your first shipment"},
    {id:3,icon:"./assets/home/desktop/icon-truck.svg",title:"Free shipping",blurb:"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."},
  ])
  return (
    <div className="choose-parent">
      <div className="choose-bg"></div>
      <div className="choose-header">
        <h1 className="choose-h1">Why choose us?</h1>
        <p className="choose-blurb">A large part of our role is choosing which particular coffeees will be featured in our range. This means working closely with the best coffee grown to give you a more impactful experience on every level.</p>
      </div>
      <ul className="cards-list">
      {cardData.map(c=>(
        <ChooseCard key={c.id} card={c}/>
      ))}
      </ul>
    </div>
  )
}

export default ChooseUs
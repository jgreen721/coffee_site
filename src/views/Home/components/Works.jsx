import React, {useState} from 'react'
import WorkCard from "./WorkCard"

const Works = () => {
    const [worksData]= useState([
        {id:1,number:'01',title:"Pick your coffee",blurb:"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."},
        {id:2,number:'02',title:"Choose the frequency",blurb:"Customize your order frequency., quantity, even your roast style and grid type. Pause, skip or cancel your subscription with no committment through our online portal."},
        {id:3,number:'03',title:"Receive and enjoy",blurb:"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class-coffees curated to provide a distinct tasting experience."},
    ])
  return (
    <div className="works-container">
        <h3 className="how-h3">How it works</h3>
        <div className="works-content-container">
            <div className="works-meter">
                
                <div className="bubble bubble1"></div>
                <div className="bubble bubble2"></div>
                <div className="bubble bubble3"></div>
            </div>
            <ul className="works-list">
                {worksData.map(w=>(
                    <WorkCard key={w.id} work={w}/>
                ))}
            </ul>
            <button className="btn create-btn">Create your plan</button>
        </div>
    </div>
  )
}

export default Works
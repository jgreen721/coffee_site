import React from 'react'
import {Hero,Collections, ChooseUs} from "./components"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-app">
      <Hero/>
      <Collections/>
      <ChooseUs/>
    </div>
  )
}

export default Home
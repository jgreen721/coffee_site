import React from 'react'
import {Hero,Collections, ChooseUs,Works} from "./components"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-app">
      <Hero/>
      <Collections/>
      <ChooseUs/>
      <Works/>
    </div>
  )
}

export default Home
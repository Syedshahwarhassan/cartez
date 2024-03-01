// import React from 'react'

import Home_men from "./Home_men"
import Home_women from "./Home_women"

import Slider from "./Slider"
import Featured_Product from "../Featured_Product"
const Home = () => {
  return (
    <div>
      <Slider/>
      <div className="product-container">
   <Featured_Product/>
   </div>

  <Home_women/>
  <Home_men/>


 
    </div>
  )
}

export default Home

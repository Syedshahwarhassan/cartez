// import React from 'react'

import Home_men from "./Home_men"
import Home_women from "./Home_women"

import Slider from "./Slider"
import Featured_Product from "../Featured_Product"
import { Shirt } from "../Shirt"
import { NewApi } from "../NewApi"
const Home = () => {
  return (
    <div>
      <Slider/>
      <div className="product-container">
   <Featured_Product/>
   </div>

  <Home_men/>
  <div className="product-container">
  <Shirt/>
   </div>
<NewApi/>
 
    </div>
  )
}

export default Home

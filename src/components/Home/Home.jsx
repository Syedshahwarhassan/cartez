// import React from 'react'

import Decor from "../Products/Decor"
import Electronic from "../Products/Electronic"
import Kitchen from "../Products/Kitchen"
import Home_men from "./Home_men"


import Slider from "./Slider"


const Home = () => {
  return (
    <div>
      <Slider/>
      <div className="product-container">
<Decor/>
   </div>
<Kitchen/>
  <Home_men/>
  <div className="product-container">
<Decor/>
   </div>

 
    </div>
  )
}

export default Home

// import React from 'react'

import All from "../All"
import Decor from "../Products/Decor"
import Electronic from "../Products/Electronic"
import Kitchen from "../Products/Kitchen"
import Home_men from "./Home_men"


import Slider from "./Slider"


const Home = () => {
  return (
    <div>
      <Slider/>
      {/* <div className="product-container">

   </div> */}

  <Home_men/>
  <div className="product-container">
<All/>
   </div>

 
    </div>
  )
}

export default Home

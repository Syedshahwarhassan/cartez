// import React from 'react'

import { Link } from "react-router-dom"
import "../Home/mens.css"
const Home_men = () => {
  return (
    <div className="men-container">
      <h1>{`Men's`}</h1>
      <h4>NEW TRENDING PRODUCTS</h4>
      <div className="men-items">
      <div className="men-two-pic">
  <Link to={"#"}  className="one-pic">    <img src="/men's/Accessories_For_Men_s_1.png"/></Link>
     <Link to={"#"} className="two-pic"> <img src="/men's/Mens.png" className="two-pic"/></Link>
      </div>
      <div className="men-two-text">
<div className="text-two">
<h4>{`Men's Trend`}</h4>
<h5>{`Trending Accessories For Men `}</h5>
</div>
<Link className="men-link">Discover Now</Link>
      </div>
      <div className="men-three-pic">
      <div className="men-pic-div"><Link to={"#"}><img className="men-pics" src="/men's/Untitled_design_2.png"/></Link></div>
      <div className="men-pic-div"><Link to={"#"}><img className="men-pics" src="/men's/Untitled_design_3.png"/></Link></div>
      <div className="men-pic-land"><Link to={"#"}><img className="men-pics" src="/men's/Landscape.png"/></Link></div>
      </div>
      </div>
    </div>
  )
}

export default Home_men

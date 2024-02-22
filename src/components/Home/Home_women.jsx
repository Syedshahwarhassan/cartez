// import React from 'react'

import { Link } from "react-router-dom"

const Home_women = () => {
  return (
    <div className="men-container">
      <h1>{`Women's`}</h1>
      <h4>NEW TRENDING PRODUCTS</h4>
      <div className="men-items">
      <div className="women-two-pic">
  <Link to={"#"}  className="one-pic-women"><img src="/women's/1 (5).png"/></Link>
  
      </div>
      <div className="men-two-text">
<div className="text-two">
<h4>{`Women's Trend`}</h4>
<h5>{`Trending Accessories For Women `}</h5>
</div>
<Link className="men-link">Discover Now</Link>
      </div>
      <div className="women-four-pic">
      <div className="women-pic-div"><Link to={"#"}><img className="men-pics" src="/women's/1 (1).png"/></Link></div>
      <div className="women-pic-div"><Link to={"#"}><img className="men-pics" src="/women's/1 (2).png"/></Link></div>
      <div className="women-pic-div"><Link to={"#"}><img className="men-pics" src="/women's/1 (3).png"/></Link></div>
      <div className="women-pic-div"><Link to={"#"}><img className="men-pics" src="/women's/1 (4).png"/></Link></div>
    
      </div>
      </div>
    </div>
  )
}

export default Home_women

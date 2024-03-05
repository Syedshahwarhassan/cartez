// import React from 'react'

import { Link } from "react-router-dom"

const Slider = () => {
  return (
    <div>
 <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
      <Link to={"/product"}><img src="/men's/special_promo_2 (1).png" className="d-block w-100" alt="..." /></Link>
    </div>
    <div className="carousel-item">
      <img src="/men's/special_promo_1 (1).png" className="d-block w-100" alt="..." />
    </div>

    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default Slider

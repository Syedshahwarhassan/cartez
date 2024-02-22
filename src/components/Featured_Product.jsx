// import React from 'react'

import { Link } from "react-router-dom"
import { mens_kurta } from "../api/men_kurta"
import "../App.css"
const Featured_Product = () => {
  return (
    <div className="card-container d-flex flex-wrap justify-content-evenly">
     {mens_kurta.map((c)=>{
        return(
<div key={c.id} className="mini-card mt-3 mb-3" style={{width: '13rem'}}>
<Link to={`/product/${c.id}`}>  <img src={c.imageUrl} className="card-img-top" alt="..." height={"250px"} /></Link>
  <div className="card-body">
    <h5 className="card-title">{c.title.slice(0,18)}...</h5>
    
    
    <p>{c.brand}</p>
    <p><span style={{"color":"red"}}>{`Price: ${c.discountedPrice}`}</span> <br/> <s>  {c.price}</s> <span style={{color:"gray"}}>{`-${c.discountPersent}%`}</span></p>

  </div>
</div>

        )
     })}
    </div>
  )
}

export default Featured_Product

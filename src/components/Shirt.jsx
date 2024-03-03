import React from 'react'
import { shirt } from '../api/men_shirt'
import { Link } from 'react-router-dom'

export const Shirt = () => {
  return (
    <div>
    <h1 style={{textAlign:"center",margin:"10px"}}>Men Shirts</h1>
<div className='card-container card-container d-flex flex-wrap justify-content-evenly' >
{
    shirt.map((c)=>{
        return(
 

 <div className="mini-card mt-4 mb-3 " >
 <Link to={`/Shirts/${c.id}`}>  <img src={c.imageUrl} className="card-img-top" alt="..." height={"250px"} /></Link>
  <div className="card-body">
    <h5 className="card-title">{c.title.slice(0,15)}...</h5>
    <p className="card-text">{c.brand}</p>
    
    <p><span style={{"color":"red"}}>{`Price: ${c.discountedPrice}`}</span> <br/> <s>  {c.price}</s> <span style={{color:"gray"}}>{`-${c.discountPersent}%`}</span></p>

  </div>
</div>

        )
    })
}


</div>


    </div>
  )
}

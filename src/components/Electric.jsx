import React from 'react'
import { product } from '../api/dummy'
import { Link } from 'react-router-dom'

const Electric = () => {
  return (
    
    <div className='card-container d-flex flex-wrap'>
{
    product.map((c)=>{
return(
    <div key={c.id} className="mini-card" style={{width: '13rem'}}>
  <Link to={`/electric/${c.id}`}><img src={c.thumbnail} className="card-img-top" style={{height:"200px"}} alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title">{c.title.slice(0,20)}...</h5>
    <p className="card-text">{c.brand}</p>
   <p style={{color:"red"}}><span style={{color:"black"}}>Price :</span>{c.price}</p>
  </div>
</div>
)

    })
}


    </div>
  )
}

export default Electric
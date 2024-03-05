import React from 'react'
import { New } from '../api/new_api'
import { Link } from 'react-router-dom'

export const NewApi = () => {
  return (
    <div>
    <h1 style={{textAlign:"center",margin:"10px"}}>New Arrivals</h1>
<div className='card-container card-container d-flex flex-wrap justify-content-evenly' >
{
    New.map((c)=>{
        return(
            <div className="mini-card mt-4 mb-3 " >
 <Link to={`/New/${c.id}`}>  <img src={c.images} className="card-img-top" alt="..." height={"250px"} /></Link>
  <div className="card-body">
    <h5 className="card-title">{c.title.slice(0,15)}...</h5>
    <p className="card-text">{c.description.slice(0,30)}...</p>
    
    <p>Price:  {c.price}$</p>

  </div>
</div>



        )
    })
}


</div>


    </div>
  )
}

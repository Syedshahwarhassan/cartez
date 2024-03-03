import React from 'react'
import { mens_kurta } from '../api/men_kurta';
import { Link } from 'react-router-dom';
import { shirt } from '../api/men_shirt';

const Youlike = () => {
let a=Math.floor(Math.random()*40)
let b=Math.floor(Math.random()*40)
let ca=Math.floor(Math.random()*40)
let w=mens_kurta.find((c)=>c.id==a);
let x=shirt.find((c)=>c.id==b);
let y=mens_kurta.find((c)=>c.id==ca);

   
  return (
  <div className='you-h1'>
  <h1>May you like</h1>
      <div className='you-like'>
    <div className="card-container m-4 d-flex flex-wrap justify-content-evenly">
 
 <div key={w.id} className="mini-card mt-3 mb-3" style={{width: '13rem'}}>
 <Link to={`/product/${w.id}`}>  <img src={w.imageUrl} className="card-img-top" alt="..." height={"250px"} /></Link>
   <div className="card-body">
     <h5 className="card-title">{w.title.slice(0,18)}...</h5>
     
     
     <p>{w.brand}</p>
     <p><span style={{"color":"red"}}>{`Price: ${w.discountedPrice}`}</span> <br/> <s>  {w.price}</s> <span style={{color:"gray"}}>{`-${w.discountPersent}%`}</span></p>
 
   </div>
 </div>
  </div>
{/* ========================2================================ */}
<div className="card-container m-4 d-flex flex-wrap justify-content-evenly">
 
 <div key={x.id} className="mini-card mt-3 mb-3" style={{width: '13rem'}}>
 <Link to={`/product/${x.id}`}>  <img src={x.imageUrl} className="card-img-top" alt="..." height={"250px"} /></Link>
   <div className="card-body">
     <h5 className="card-title">{x.title.slice(0,18)}...</h5>
     
     
     <p>{x.brand}</p>
     <p><span style={{"color":"red"}}>{`Price: ${x.discountedPrice}`}</span> <br/> <s>  {x.price}</s> <span style={{color:"gray"}}>{`-${x.discountPersent}%`}</span></p>
 
   </div>
 </div>

 </div>
{/* ========================3================================ */}
<div className="card-container m-4 d-flex flex-wrap justify-content-evenly">
 
 <div key={y.id} className="mini-card mt-3 mb-3" style={{width: '13rem'}}>
 <Link to={`/product/${y.id}`}>  <img src={y.imageUrl} className="card-img-top" alt="..." height={"250px"} /></Link>
   <div className="card-body">
     <h5 className="card-title">{y.title.slice(0,18)}...</h5>
     
     
     <p>{y.brand}</p>
     <p><span style={{"color":"red"}}>{`Price: ${y.discountedPrice}`}</span> <br/> <s>  {y.price}</s> <span style={{color:"gray"}}>{`-${y.discountPersent}%`}</span></p>
 
   </div>
 </div>

 </div>
 </div>
  </div>
 
    
  )
}

export default Youlike
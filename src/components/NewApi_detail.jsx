import React from 'react'
import { New } from '../api/new_api'
import { useParams } from 'react-router-dom'

const NewApi_detail = () => {
  const {id}=useParams();
  const x=New.find((c)=>c.id==id)
  function start(){
 
    let x=Math.floor(Math.random() * 50);
    let v=Math.floor(Math.random() * 30);
    if(v<=0){
      v=+4;
    }
    let y=  document.getElementById("random-number");
    y.innerHTML=`🔥 ${x}  Product Sale in ${v} minutes`;
    let i=(Math.random() * 5 + 1).toFixed(1);
    if(i>5 )
    {
      i=5
    }if (i<2) {
      i=+2;
    }
     document.getElementById("rate").innerHTML=`${i} ⭐⭐⭐⭐⭐`;
   }
 setTimeout(start,3000)
  return (
    <div className='new-container'>
<div className='new-div1'>
{
  x.images.map((c)=>{
    return(
      <img src={c}/>
    )
  })
}
</div>
<div className='new-div'>
  <h2 className='mt-5'>{x.title}</h2>
  <div className="onfire" id="onfire">
<span id="random-number" ></span>
</div>
<h5>Rating: <span className="rate" id="rate"></span></h5>
 
  <h4 className='mt-3 mb-3'>Price :{x.price}$</h4>
<h3>Category:</h3>
<h5>Name: {x.category.name}</h5>
<img src={x.category.image} style={{height:"100px",width:"100px",border:"1px solid black",padding:"5px"}}/>
  <p className='mt-5'><span style={{fontSize:"large",fontWeight:"bold"}}>Description:</span><br/>{x.description}</p>
</div>
    </div>
  )
}

export default NewApi_detail
import React from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../api/dummy';
import { Button } from './Button';

const Electric_detail = () => {
    const {id}=useParams();
    let x=product.find((c)=>c.id==id);
        
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
    <div className='ele-container'>
<div  className='ele-div'>
    <img src={x.thumbnail} style={{width:"100%",height:"auto"}} />
    <div className='mini-img'>
{
    x.images.map((c)=>{
        return(
            <img src={c} style={{margin:"5px",height:"100px",width:"100px",padding:"5px",border:"1px solid black"}}/>
        )
    })
}
    </div>
</div>
<div className='ele-div'>
<h6 className="dis">{`-${x.discountPercentage}%`}</h6>
<h1 className="title">{x.title}</h1>
<div className="onfire" id="onfire">
<span id="random-number" ></span>
</div>
<h5>Rating: <span className="rate" id="rate"></span></h5>
<h2 className="brand">Brand : <span style={{color:"#ABA944"}}>{x.brand}</span></h2>
<h5>Price : {x.price}$</h5>
<h5 className="qty">Quantity: <span>{x.stock}</span></h5>
<Button/>
<p>Description: <br/>{x.description}</p>
</div>
    </div>
  )
}

export default Electric_detail
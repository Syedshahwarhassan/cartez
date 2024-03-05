import React from 'react'
import { useParams } from 'react-router-dom'
import { shirt } from '../api/men_shirt';
import Review from './review/Review';
import Youlike from './Youlike';
import { Button } from './Button';

export const Shirt_deatil = () => {
    const {id}=useParams();
    const x=shirt.find((c)=>c.id==id)
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
    <div>
    <div className="detail-container" >
<div className="card-data">
<div className="detail-img-div ">
<img className="detail_featured-img" src={x.imageUrl} height={"500px"}/>
</div>
<div className="cardbody ">

<h6 className="dis">{`-${x.discountPersent}%`}</h6>

<h2 className="title">{x.title}</h2>
<div className="onfire" id="onfire">
<span id="random-number" ></span>
</div>
<h5>Rating: <span className="rate" id="rate"></span></h5>
<h2 className="brand">Brand : <span style={{color:"#ABA944"}}>{x.brand}</span></h2>

<p className="price" style={{color:"red"}}>{`Price: ${x.discountedPrice}`}  <s style={{color:"black"}}>{x.price}</s></p>
<div className="color" > <p style={{height:"50px",width:"50px",backgroundColor:`${x.color}`}}></p></div>
<h5 className="qty">Quantity: <span>{x.quantity}</span></h5>
<h6>Size :</h6>
<div className="size-list d-flex">
{x.size.map((c)=>{
 return(
     <p key={c.name}>{c.name}</p>
 )
})}
</div>
<h6>{x.topLavelCategory}/{x.secondLavelCategory}/{x.thirdLavelCategory}</h6>
<Button/>

<div className="des-container"><h3>Description:</h3> <p className="des">{x.description}</p></div>
</div>
</div>
<Review/>
<Youlike/>

    </div>

    </div>
  )
}

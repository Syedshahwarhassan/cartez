// import React from 'react'

import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";



const Review = () => {
const [show,setShow]=useState("transparent");
const [shows,setShows]=useState("transparent");
  const [data,setData]=useState([]);
  const {id}=useParams();
  let c=data.find((c)=>c.id==id);

  if(c){
console.log("chalo thk ha")

document.getElementById("cover").style.backgroundColor=show;
document.getElementById("title-h6").innerHTML=c.title;
document.getElementById("text-h6").innerHTML=c.text;
document.getElementById("date-h6").innerHTML=c.date;
document.getElementById("user-h6").innerHTML=c.name;
document.getElementById("images").src=c.image;
  }else{

    // document.getElementById("cover").style.backgroundColor = "red";
    console.log("error")
   
  }
useEffect(()=>{
const getdata = ()=>{
  let x=localStorage.getItem('detail');

    setData(JSON.parse(x));
    }
getdata();

},[])
  return (
    <div>
      <div className="mt-5">
      <h3 style={{textAlign:"center"}}>Customer Reviews</h3>
      <div className="review">
      <div className="star-review">
      <h2>☆☆☆☆☆</h2>
      <h5>Be the first to write a review</h5>
      </div>
      <div className="line"></div>
      <div className="review-btn-div">
  <Link to={"write"}><button className="review-btn">Write a review</button></Link>
      </div>
      </div>
      </div>

<Outlet/>
 

  <section id="section" className="section ">
  <div >
  <div className="data">
  <img id="images" src="" height={"30px"} width={"30px"}/><br/>
  <h6 id="user-h6" >User_Name</h6>
  </div>
 
  <h6 id="title-h6">Title</h6>
  <h6 id="text-h6">Text</h6>
  </div>
  <div className="detail">

  <p id="date-h6">date</p>
  </div>
  <div className="cover" id="cover" >
</div>
   </section>

  
   
    
   
   

    </div>
  )
}

export default Review

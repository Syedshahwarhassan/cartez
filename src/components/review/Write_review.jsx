// import React from 'react'

import { useState } from "react"
import { useParams } from "react-router-dom";


const Write_review = () => {
    const [title,setTitle]=useState('');
    const [text,setText]=useState('');
    const [name,setName]=useState('');
    const {id}=useParams();
   const date=new Date();

function sub() {
    const value={
        title:title,
        text:text,
        name:name,
        id:id,
        date:date,
        image:"https://cdn-icons-png.flaticon.com/512/149/149071.png"
    }
   
    var values=JSON.parse(localStorage.getItem('detail') || "[]");
    values.push(value)
 localStorage.setItem('detail',JSON.stringify(values));
alert("Thanks For Review");
}
  return (
    <div>
    <div className="write-review" id="write-review">

    <h1 className="text-center m-4">Write Review</h1>
    <label className="review-title">Title:<br/><input type="text" required placeholder="title of  your review" name="value" onChange={(e)=>setTitle(e.target.value)} /></label><br/>
    <label className="review-text">Review:<br/><textarea rows={"5"} required cols={"100"} placeholder="your Review here...." name="text" onChange={(e)=>setText(e.target.value)}></textarea></label><br/>
    <label className="review-name"> User Name:<br/><input type="text" required onChange={(e)=>setName(e.target.value)} placeholder="Your Name for Display" name="name"/></label><br/>
    <button className="review-btn" onClick={()=>sub()}>Submit</button>
    
     </div>
    </div>
  )
}

export default Write_review

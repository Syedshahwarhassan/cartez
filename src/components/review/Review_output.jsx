// import React from 'react'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDatabase,ref,onValue } from "firebase/database";
import {app} from '../Firebase'
const Review_output = () => {
const {id}=useParams();
console.log(id)
const [preview,setPreview]=useState();
useEffect(()=>{
const db=getDatabase(app)
const REf=ref(db,'/product/'+ id +'/review/')
onValue(REf,(snapshot)=>{
const data=snapshot.val();
setPreview(data);
})
},[])

  return (
    <div>
    <h1>Reviews</h1>
  {preview && (
  <div>

    {
      Object.entries(preview).map(([key,c])=>{
        console.log(c.User)
        return(
          <div key={key} style={{backgroundColor:"lightgray",padding:"10px" , margin:"10px"}}>
            <div className="d-flex text-center m-3" style={{alignItems:"center"}}>
              <img src={c.image} alt="" height={"40px"} width={'40px'}/>
              <h6 className="m-2">{c.User}</h6>
            </div>
            <div className=" m-3" style={{alignItems:"center"}}>
              <h5>{c.Title}</h5>
              <h6>{c.Review}</h6>
            </div>
          </div>
        )
      })
    }
  </div>
  )}
        
     </div>
  )
}

export default Review_output

// import React from 'react'

import { useState } from "react"

const Review_output = () => {
  const [data,setData]=useState();
  setData(JSON.parse(localStorage.getItem('detail')));
  console.log(data)
  return (
    <div>
      {
        
      }
    </div>
  )
}

export default Review_output

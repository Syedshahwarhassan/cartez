import React, { useState } from 'react'

const Quantity = () => {
 const [value,setValue]=useState(0);
const plus= ()=>{
setValue(value+1)
document.getElementById('qty-value').innerHTML=value;
}
const sub= ()=>{
    setValue(value-1)
    document.getElementById('qty-value').innerHTML=value;
    }
  return (
<div>
<h6>Quantity:</h6>
<div className='quantity-div'>
        <button className='qty-btn' id='qty-plus' onClick={()=>plus()}>+</button>
        <h6 className='qty-value' id='qty-value'>0</h6>
        <button className='qty-btn' id='qty-sub' onClick={()=>sub()}>-</button>
    </div>
</div>
  )
}

export default Quantity
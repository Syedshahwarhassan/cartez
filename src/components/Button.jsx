import React, { useState } from 'react'

import Swal from 'sweetalert2'
import Login from './Login';
import { toast } from 'react-toastify';

export const Button = () => {
  const [login,setLogin]=useState(false);

  function add(){
  toast.error("In Working")
  }
  return (
    <div>

    <div className="detail-btn">
<button className="addtocart" onClick={()=>add()} >Add to Cart</button><br/>
<button className="buynow" onClick={()=>add()}>Buy Now</button>
</div>


    </div>
  )
}

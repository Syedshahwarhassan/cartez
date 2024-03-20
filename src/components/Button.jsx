import React, { useState } from 'react'

import Swal from 'sweetalert2'
import Login from './Login';

export const Button = () => {
  const [login,setLogin]=useState(false);

  function add(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
    
      showCancelButton:true,
      confirmButtonText: 'Login Now'
    }).then((res)=>{
      if(res.isConfirmed){
       window.location.href='/login';

      }
    })
  }
  return (
    <div>

    <div className="detail-btn">
<button className="addtocart" onClick={()=>add()} >Add to Cart</button><br/>
<button className="buynow">Buy Now</button>
</div>


    </div>
  )
}

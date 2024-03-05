import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  return (
    <div>
<div className='text-center mt-5 mb-5'>
  <h1>Your Cart is empty.</h1>
 <Link to={"/"}> <button className='cart-btn m-4'>Continue Shopping</button></Link>
</div>

    </div>
  )
}

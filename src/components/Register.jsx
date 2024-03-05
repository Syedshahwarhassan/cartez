import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    function error(e){
        Swal.fire({
          title:"Network Problem",
          text:"Please try again after few minutes",
          timer:4000,
          icon:"error"
        }
        )
        }
        function stop(e){
          e.preventDefault();
        }
  return (
    <div>

<div className='sign' id='sign'>
    <div className='login-head'>
       <h2>Sign In</h2>
    </div>
    <div className='login-body'>
    <form onSubmit={stop}>
    <input type='text' placeholder='Enter Your Name'/><br/>
<input type='email' placeholder='Enter Your Email'/><br/>
<input type='password' placeholder='Enter Your Password'/><br/>
<button className='login-btn' onClick={()=>error()}>Sign in </button>
<p>Already have a account? <Link style={{textDecoration:"none"}} to={'/login'}><span >Login here?</span></Link></p>
</form>
    </div>
    </div>
    </div>
  )
}

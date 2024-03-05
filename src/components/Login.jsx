import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

const Login = () => {
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
    <div className='login' id='login'>
    <div className='login-head'>
       <h2>Login</h2>
    </div>
    <div className='login-body'>
    <form onSubmit={stop}>
    <input type='email' required  placeholder='Enter Your Email'/><br/>
<input type='password' required placeholder='Enter Your Password'/><br/>
<button className='login-btn' onClick={()=>error()}>Login </button>
<p>Create new account? <Link style={{textDecoration:"none"}} to={'/register'} ><span>Register here?</span></Link></p>
 
    </form>
   </div>
    </div>
  
    
    </div>
  )
}

export default Login
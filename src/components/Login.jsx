import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { app } from './Firebase'; 
import { toast } from 'react-toastify';
const Login = () => {
const auth=getAuth(app)
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const navi=useNavigate();
const login=()=>{
signInWithEmailAndPassword(auth,email,password).then(res=>{
  toast.success("Sign In Successful")
  navi('/')
}).catch(error=>{
  toast.error("Not successful")
})
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
    <input type='email' onChange={(e)=>setEmail(e.target.value)} required  placeholder='Enter Your Email'/><br/>
<input type='password' onChange={(e)=>setPassword(e.target.value)} required placeholder='Enter Your Password'/><br/>
<button className='login-btn' onClick={()=>login() }>Login </button>
<p>Create new account? <Link style={{textDecoration:"none"}} to={'/register'} ><span>Register here?</span></Link></p>
 
    </form>
   </div>
    </div>
  
    
    </div>
  )
}

export default Login
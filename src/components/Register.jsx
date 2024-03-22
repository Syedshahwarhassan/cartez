import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { getDatabase,ref,set } from 'firebase/database';
import { app } from './Firebase'; 
import { toast } from 'react-toastify';
export const Register = () => {
  const auth=getAuth(app)
  const navi=useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [user,setUser]=useState();
  const db=getDatabase(app)
  const id=(Math.floor(Math.random()*1000000))
  const sign=()=>{
    createUserWithEmailAndPassword(auth,email,password).then(res=>{
set(ref(db,'user/' + id),{
  Name:user,
  Email:email,
  password:password,
  Id:id
})
toast.success('Login Success')

navi('/login')
    }).catch(err=>{
      console.log(err)
      toast.error("Not successful")
    })
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
    <input type='text' onChange={(e)=>setUser(e.target.value)} placeholder='Enter Your Name'/><br/>
<input type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/><br/>
<input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'/><br/>
<button className='login-btn' onClick={()=>sign()}>Sign in </button>
<p>Already have a account? <Link style={{textDecoration:"none"}} to={'/login'}><span >Login here?</span></Link></p>
</form>
    </div>
    </div>
    </div>
  )
}

import React, { useState } from 'react'
import { getDatabase,set,ref } from 'firebase/database';
import {app} from './Firebase'
import { toast } from 'react-toastify';
import '../App.css'
export const Contact = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [msg,setMsg]=useState();
function sendinfo(){
  const db=getDatabase(app)
  const id=Math.floor(Math.random()*1000000)
  set(ref(db,'contact/'+ id),{
    Name:name,
    Email:email,
    Msg:msg,
    image:"https://firebasestorage.googleapis.com/v0/b/cartez-2c9d2.appspot.com/o/149071%20(1).png?alt=media&token=7384cedf-34c2-4a0f-b8f4-91a73441321c"
  })
  toast.info('Thanks For Contacting')
}
  return (
    <div>
<div className="container">
  <h2 className="title">Contact Us</h2>
  <form action="#" method="POST" className="contact-form" onSubmit={(e)=>e.preventDefault()}>
    <label htmlFor="name" className="label">Name</label>
    <input type="text" id="name" name="name" className="input" required  onChange={(e)=>setName(e.target.value)}/>
    <label htmlFor="email" className="label">Email</label>
    <input type="email" id="email" name="email" className="input" required  onChange={(e)=>setEmail(e.target.value)}/>
    <label htmlFor="message" className="label">Message</label>
    <textarea id="message" name="message" rows={5} className="input" onChange={(e)=>setMsg(e.target.value)} required defaultValue={""} />
    <button type="submit" className="submit-btn" onClick={()=>sendinfo()}>Submit</button>
  </form>
</div>

    </div>
  )
}

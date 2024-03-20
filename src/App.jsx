// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Bottomnav from "./components/Navbar/Bottomnav"
import Topnav from "./components/Navbar/Topnav"
import Home from "./components/Home/Home"

import { ToastContainer } from "react-toastify"
import { Cart } from "./featured/Cart"
import { Footer } from "./components/footer/Footer"

import Privacy from "./components/footer/Privacy"
import { About } from "./components/footer/About"
import { Term } from "./components/footer/Term"

import Login from "./components/Login"
import { Register } from "./components/Register"
import { Contact } from "./components/Contact"
import Upload from "./components/Upload"
import All from "./components/All"
import All_detail from "./components/All_detail"
import Electronic from "./components/Products/Electronic"
import Decor from "./components/Products/Decor"
import Kitchen from "./components/Products/Kitchen"
import Write_review from "./components/review/Write_review"



const App = () => {
  return (
    <div>
  
<Topnav/>
<Bottomnav/>
<ToastContainer/>
<Routes>
<Route path="/upload" element={<Upload/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/all" element={<All/>}></Route>
<Route path="/all/:id" element={<All_detail/>}>
  <Route path='write'  element={<Write_review/>}/>
</Route>
<Route path="/electronics" element={<Electronic/>}></Route>
<Route path="/decor" element={<Decor/>}></Route>
<Route path="/kitchen" element={<Kitchen/>}></Route>
<Route path="/term" element={<Term/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/privacy" element={<Privacy/>}></Route>

<Route path="/" element={<Home/>}></Route>



<Route path="/cart" element={<Cart/>}></Route>

</Routes>
<Footer/>
    </div>
    
  )
}

export default App

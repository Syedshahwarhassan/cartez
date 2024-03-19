// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Bottomnav from "./components/Navbar/Bottomnav"
import Topnav from "./components/Navbar/Topnav"
import Home from "./components/Home/Home"
import Featured_Product from "./components/Featured_Product"
import Featured_Detail from "./components/Featured_Detail"
import Write_review from "./components/review/Write_review"
import { ToastContainer } from "react-toastify"
import { Cart } from "./featured/Cart"
import { Footer } from "./components/footer/Footer"
import { Shirt } from "./components/Shirt"
import { Shirt_deatil } from "./components/Shirt_deatil"
import { NewApi } from "./components/NewApi"
import NewApi_detail from "./components/NewApi_detail"
import Privacy from "./components/footer/Privacy"
import { About } from "./components/footer/About"
import { Term } from "./components/footer/Term"
import Electric from "./components/Electric"
import Electric_detail from "./components/Electric_detail"
import Login from "./components/Login"
import { Register } from "./components/Register"
import { Contact } from "./components/Contact"
import Upload from "./components/Upload"


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
<Route path="/electric" element={<Electric/>}></Route>
<Route path="/electric/:id" element={<Electric_detail/>}>

<Route path="write" element={<Write_review/>}></Route>
</Route>
<Route path="/term" element={<Term/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/privacy" element={<Privacy/>}></Route>
<Route path="/Shirts" element={<Shirt/>}></Route>
<Route path="/Shirts/:id" element={<Shirt_deatil/>}>

<Route path="write" element={<Write_review/>}></Route>
</Route>
<Route path="/" element={<Home/>}></Route>
<Route path="/product" element={<Featured_Product/>}></Route>
<Route path="/product/:id" element={<Featured_Detail/>}>

<Route path="write" element={<Write_review/>}></Route>
</Route>
<Route path="/cart" element={<Cart/>}></Route>
<Route path="/New" element={<NewApi/>}></Route>
<Route path="/New/:id" element={<NewApi_detail/>}>

<Route path="write" element={<Write_review/>}></Route>
</Route>
</Routes>
<Footer/>
    </div>
    
  )
}

export default App

// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Bottomnav from "./components/Navbar/Bottomnav"
import Topnav from "./components/Navbar/Topnav"
import Home from "./components/Home/Home"
import Featured_Product from "./components/Featured_Product"
import Featured_Detail from "./components/Featured_Detail"
import Write_review from "./components/review/Write_review"
import { ToastContainer } from "react-toastify"
import Cart from "./featured/Cart"

const App = () => {
  return (
    <div>
  
<Topnav/>
<Bottomnav/>
<ToastContainer/>
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/product" element={<Featured_Product/>}></Route>
<Route path="/product/:id" element={<Featured_Detail/>}>
<Route path="write" element={<Write_review/>}></Route>
</Route>
<Route path="/cart" element={<Cart/>}></Route>
</Routes>

    </div>
    
  )
}

export default App

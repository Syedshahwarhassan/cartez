// import React from 'react'
import { Link } from "react-router-dom";
import "../Navbar/Nav.css";
const Bottomnav = () => {

  function showSearchBar(){
    let x=document.getElementById("search-nav");
    if(x.style.display==="none"){
      x.style.display="block"
  }else{
    x.style.display="none";
  }
  }
  return (
  <nav className="navbar sticky-top navbar-expand-lg bg-white ">
  <div className="container-fluid ">
    <a className="navbar-brand " href="#"><img src="/logo-no-background.png" style={{height:"30px",width:"150px",margin:"10px"}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center m-auto">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={"/"}>Home</Link>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Collection
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/product"}>Men Kurta</Link></li>
            <li><Link className="dropdown-item" to={"/Shirts"} >Men Shirt</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" to={"/New"}>New Arrivals</Link></li>
            <li><Link className="dropdown-item" to={"/electric"}>Electric</Link></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/contact"}>Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/upload"}>Upload</Link>
      </li>
      </ul>
     <div className="nav-search text-center" onClick={()=>showSearchBar()} >
 <i className="fa-solid fa-magnifying-glass" />

     </div>
          <div className="nav-search text-center"  >
          <Link to={"/cart"}><button type="button" className="btn  position-relative">
          Cart
         
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {
              
              localStorage.getItem("qty")?localStorage.getItem("qty"):0
            }
            <span className="visually-hidden"></span>
          </span>
        </button>
        </Link>
     </div>
     <div>
<Link to={'/login'}><i className="fa-solid fa-user fa-xl m-2" style={{color: '#000000'}} /></Link>

     </div>
    </div>
  </div>
  <div className="search-nav" id="search-nav">
  <h3><i className="fa-solid fa-xmark" onClick={()=>showSearchBar()}/>
</h3>
  <h1 >Search here</h1>
 <div className="input-container">
 <input type="text" className="input-search"/>
 <button className="search-btn">Search</button></div>
  
  </div>
</nav>

  );
};

export default Bottomnav;

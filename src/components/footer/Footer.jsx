import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
<div className="main-footer" >
        <div className="footer-div">
      <div className="footer-min"> 
      <Link to={"/"}>      <img src="/logo-no-background.png" height={"30px"} width={"150px"} style={{marginTop:"50px"}}/>
</Link>
      </div>
      <div className="footer-min"> 
      <h6>Company</h6>
 <Link className="footer-link" to={'/privacy'}><p>Privacy Policy</p></Link>
      <Link className="footer-link" to={"/about"}><p>About Us</p></Link>
      <Link className="footer-link" to={'/term'}><p>Term & Conditions</p></Link>

    
      </div>
      <div className="footer-min">
      <h6>Products</h6>
      <Link className="footer-link"  to={'/product'}><p>Men Dress</p></Link>
      <Link className="footer-link" to={'New'}><p>New Arrivals</p></Link>
      <Link className="footer-link" to={'/electric'}><p>Electronics</p></Link>
      </div>
      <div className="footer-min"> 
      <h6>Contact Us</h6>
      <Link className="footer-link"><p>+923456786234</p></Link>
      <Link className="footer-link"><p>cartez@gmail.com</p></Link>
      <Link className="footer-link"><p>Pakistan</p></Link>
      </div>
      <div className="footer-min"> 
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425.3544464380959!2d74.29869283143161!3d31.473709049445198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037278b68ccf%3A0xa2e2d73de5861647!2sXaasol!5e0!3m2!1sen!2s!4v1708711526873!5m2!1sen!2s" width={200} height={200} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
<div className="line"></div>
<div className="footer-icon">

  <i className="fa-brands fa-facebook" />
  <i className="fa-brands fa-twitter" />
  <i className="fa-brands fa-youtube" />
  <i className="fa-brands fa-instagram" />
  <i className="fa-brands fa-tiktok" />


</div>
    </div>
</div>
  );
};

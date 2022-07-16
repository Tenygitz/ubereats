import React from 'react';
import "./Footer.css";
import{Link} from "react-router-dom";

function Footer() {
  return (
    <div className='footer'>
          <div class="footer-main">
        <div class="footer-info">
        <img class="logo-footer"src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo.png"/>
        
        
        <input type="email" placeholder="Enter Your Email"/><input type="submit" class="send"value="Send" /></div>
    
    <div class="links">
        <h3>Quick Links</h3>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="">Orders</a></li>
          <li>  <Link to="contact">Contact Us</Link></li>
            
        </ul>
    </div>
    <div class="links">
        <h3>Support</h3>
        <ul>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & condition</a></li>
            <li><a href="">Delivery Policy</a></li>
            <li><a href="">Be a Partner</a></li>
        </ul>
    </div>
    <div class="links">
        <h3>Contact US</h3>
        <ul>
            <li>Phone : 9895341669</li>
            <li>Address: A-203,sathi enclave</li>
            <li>Email: UberIndia@gmail.com</li>
            <li>PinCode: 682020</li>
           
        </ul>
    </div></div>
    <div class="footer-ed">
    <div class="footer-end">
        <h5>Terms Of Service</h5>
        <h5>Privacy</h5>
        <h5>Security</h5>

    </div>
    <div class="footer-end1">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram-square"></i>
        <i class="fa-brands fa-youtube"></i>

    </div>
    <h5>@2022 UberEats India .All right reserved</h5>
</div></div>
    
  )
}

export default Footer
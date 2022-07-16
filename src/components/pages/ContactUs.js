import React from 'react';
import "./ContactUs.css";


function ContactUs() {
  return (
    
    <div className='ContactUs'>
        <div className='ContactUs-banner'>
        <div className="linear-gradients">
        
            <h1>Get In Touch</h1>
            <h5>Please Get in touch and Our expert support team will anwers all youur questions</h5>

       
        </div></div>
        <div className='ContactUs-card'>
           <div className='ContactUs-card1'>
           <i class="fa-solid fa-phone"></i>
               <h3>Talk to Sales</h3>
                             <p>Having Issues ? Just pick up the phone to chat with a member of our sales team.</p>
                   <h3>8897341669</h3>
         </div>
        <div className='ContactUs-card1'>
        
        <i class="fa-solid fa-message"></i>
        <h3>Contact Customer Support</h3>
        <p>Sometimes you need a little help from friend. Or a UberEats support experts. Don’t worry… we’re here for you.</p>
        <button className='customerBtn'>Contact Support</button>
        </div>
    
        </div>
            
        <div className='forms'>
            <div className='Contact-form'>
                <h1>Send us Message</h1>
                <input type="text" placeholder='Please Enter Name'/>
                <input type="email" placeholder='Your Email'/>
                <input type="number" placeholder='Your Number'/>
                <input type="textarea" placeholder='Message'/>
                <input type="submit"/>
                <input type="reset"/>
            </div></div>
       
        
    </div>
  )
}

export default ContactUs
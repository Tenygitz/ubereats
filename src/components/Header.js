import React from "react";
import "./Header.css";
import{Link} from "react-router-dom";

function Header(){
    return(
        <header>
            
            <div className="headers ">
               
            
                <div className="logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo.png" alt='logo'/>
                </div>
                <div className="nav">
                    <ul>
                        <Link to="/">Home</Link>
                        <li>Order</li>
                       
                        <Link to="Contact">Contact</Link>
                    </ul>
                </div></div>
                
               

            

        </header>


        

    )
}
export default Header;
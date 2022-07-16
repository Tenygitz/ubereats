import React,{useState} from "react";
import "./Cards.css";
import heart from "../assets/heart.svg"

function Cards(props){
    
let [favBTn,setfavBTn]=useState("Add");
let[classState,setclassState]=useState('');
function favouriteHandler(imgsrc){
    setfavBTn((prevstate)=>{
        if(prevstate==="Add"){
            props.cardFn(imgsrc);
            return("Added to Favorite")
        }else{
            return("Add")
        }
    });
    setclassState((prevclass)=>{
        if(prevclass ===""){
            return("active")
        }else{
            return("")
        }
    })
}

    return(
        
        <div className={`cards ${classState}`}>
           
            <div className="cardsContent">
                <img src={heart} className="icons"/>
                <img src={props.cardContent.imgsrc} alt="image1"/>
                <h4>{props.cardContent.restaurant}</h4>
                <h5>{props.cardContent.special}</h5>
                <button className="timeBtn">{props.cardContent.time}</button><button className="timeBtn">{props.cardContent.ratting}<i class="fa-solid fa-circle-star"></i></button>
                <button onClick={()=>{favouriteHandler(props.cardContent.imgsrc)}} className="addBtn">{favBTn}</button>

            </div>
           
 </div>

    )
}
export default Cards;
import React,{useState,useContext}  from "react";
import PopUp from "./PopUp";
import"./SpecialDishes.css";
import {AllMenuContext} from "../Menu";
import AddToCart from "./AddToCart";
function SpecialDishes(props){
    let[showPopUp,setShowPopUp]=useState(false)
    let[dishName,setDishName]=useState("")
    let[addToCartItem,setAddToCartItem]=useState([])
    // useContext hook to manage allmenus 
    const allMenu=useContext(AllMenuContext)
    // show popup 
    function showPopUpHandler(dishItem){
        
        setDishName(dishItem)
        setShowPopUp(true)
    }
    // addtocart function
    function addToCartHandler(addToCartImage,addToCartTitle){
        setAddToCartItem(
            [...addToCartItem,
                {
                    "img":addToCartImage,
                    "title":addToCartTitle
                }
            ]
        )
        
    }
    // close popup
    function closePopUpHandler(){
        setShowPopUp(false)
    }
    console.log(props.specialMenu)
    let maxSpecialDishes=8;
    let spcialMenu=allMenu.map((items,index)=>{
        if(index<maxSpecialDishes){
        return(
           
            <li onClick={()=>showPopUpHandler(items.strMeal)}><img src={items.strMealThumb}/>
            <h1>{items.strMeal}</h1></li>
            
        )}
    })
    return(
        <section className="special-dishes">
            {showPopUp && <PopUp closePopUpHandler={closePopUpHandler}  dishName={dishName} allDishes={allMenu} addToCartHandler={addToCartHandler}/>}
            <div className="container">
                      <AddToCart addToCartItem={addToCartItem}/>
                <div className="special-dishes-content">
                <h1 >Our Special<span> Dishes</span> </h1>
                <p>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
            </div>
            <div className="special-dishes-list ">
                <ul>{spcialMenu}</ul>
                
            </div></div>

        </section>
    )
}
export default SpecialDishes;
import React from 'react';
import "./PopUp.css"
// destructing the props 
function PopUp({closePopUpHandler,dishName,allDishes,allMenus,allSingleDish,addToCartHandler}) {
 
  
  let dishDetails=allDishes.filter((item)=>{
    return(
      item.strMeal== dishName
    )
  }).map((item)=>{
    return(
      <div className='popup-content-data'>
        <div className='popup-header'>
        <img src={item.strMealThumb}/>
        <h4 className='popup-header-category'>{item.strCategory}</h4>
        </div>
      <h1>{item.strMeal}</h1>
      <p>{item.strInstructions}</p>
      <ul className='dish-ingredients'>
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>

          </ul>
          <button onClick={()=>addToCartHandler(item.strMealThumb,item.strMeal)}>Order Now</button>
          <div className='Popup-close'>
      
      <i onClick={closePopUpHandler} class="fa fa-window-close" aria-hidden="true"></i>

       </div>
      </div>
    )
  })
  return (
    <div className='Popup'>
        <div className='Popup-content'>
           {dishDetails}
          
          
            
        </div>
       
    </div>
  )
}

export default PopUp
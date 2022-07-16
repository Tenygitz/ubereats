import React from 'react';
import "./AddToCart.css";

function AddToCart({addToCartItem}) {
  let result=addToCartItem.map((item)=>{
    return(
      <>
         <img src={item.img}/>
            <h5>{item.title}</h5>
      </>
    )
  })
  return (
    <div className='AddToCart'>
        <div className='AddToCart-content'>
          <div className="AddToCart-heading">
            <h1>Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></h1>
          </div>
            {result}
        </div>
    </div>
  )
}

export default AddToCart
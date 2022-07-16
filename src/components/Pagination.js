import React from 'react';
import"./Pagination.css";

function Pagination(props) {
   // show the pagination
    let numberOfPages=[]
    for(let i=1;i<=Math.ceil(props.filteredDishes.length/props.itemsPerpage);i++){
      numberOfPages.push(i)
    }
    function showDishesHandler(event){
      let currentPagess=event.target.id
      props.setCurrentPage(currentPagess)
    }
    let pages=numberOfPages.map((item)=>{
      return(
        <li id={item} onClick={showDishesHandler}>{item}</li>
      )
    })

  return (
    <ul className='pagination'>
        {pages}
    </ul>
  )
}

export default Pagination
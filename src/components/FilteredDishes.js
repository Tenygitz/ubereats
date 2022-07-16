import React, { useState,useContext } from 'react';
import "./FilteredDishes.css"
import Pagination from './Pagination';
import PopUp from './PopUp';
import {AllMenuContext} from "../Menu";

function FilteredDishes(props) {
    
    let[filteredDishes,setFilteredDishes]=useState([])
    let[activeDishes,setActiveDishes]=useState("Beef")
    let[currentPage,setCurrentPage]=useState(1)
    let[itemsPerpage,setItemPerPage]= useState(4)
    let[showPopUp,setShowPopUp]=useState(false)
    let[dishName,setDishName]=useState("")
    const allMenu=useContext(AllMenuContext)
     // set pagination starting page and ending page
    let indexOfLastDish= currentPage*itemsPerpage;
    // 1*4=4
    // 2*4=8
    let indexOfFirstDish=indexOfLastDish-itemsPerpage;
    // 4-4=0
    // 8-4=4
    let showTheseDishes=filteredDishes.slice(indexOfFirstDish,indexOfLastDish)
    // show singleDish
    let maxItem=8
    let singleItemDish=props.singleDish.map((item,index)=>{
        if(index<maxItem){
        return(
            <li onClick={()=>showPopUpHandler(item.strMeal)}>
                <img src={item.strMealThumb}/>
            <h1>{item.strMeal}</h1>

            </li>
        )}
    })
     // show Popup Screen
    function showPopUpHandler(dishItem){
        setDishName(dishItem)
        setShowPopUp(true)
    }
    // close Popup Screen
    function closePopUpHandler(){
        setShowPopUp(false)
    }
    // show dishes onclick
    function showFilteredDishesHandler(category){
        props.setSingleDish([])
        setActiveDishes(category)
        let filteredDishesAre=allMenu.filter((item)=>{
         return  ( item.strCategory === category)
        }).map((item)=>{
            return(
                <li onClick={()=>showPopUpHandler(item.strMeal)}>
                    <img src={item.strMealThumb}/>
                <h1>{item.strMeal}</h1>

                </li>
            )
        })
           setFilteredDishes(filteredDishesAre)
          
    }
    // shows all categories
    let allCategory=props.specialCategoryMenu.map((item)=>{
        return(
            <li className={item.strCategory ==activeDishes? "active":""} onClick={()=>{showFilteredDishesHandler(item.strCategory)}}>{item.strCategory}</li>
        )
    })
  return (
    <div className='Filtered-dishes'>
        {showPopUp && <PopUp  closePopUpHandler={ closePopUpHandler} dishName={dishName} allMenus={allMenu} allSingleDish={props.singleDish}/>}
            <div className='Filtered-dishes-content'>
                <h1>Choose Your Dishes</h1>
                <p>Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love. Food is not rational. Food is culture, habit, craving and identity.</p>
            </div>
           < h1 className="heading">FOOD <span> CATEGORIES</span></h1>
            <div className='Filtered-dishes-category'>
                <ul>{allCategory}</ul>
            </div>
            <div className='Filtered-dishes-list'>
                <ul >{singleItemDish }
                  { singleItemDish.length !=0 ||filteredDishes.length !=0 ?showTheseDishes:
                  <div className='alert'>
                    <h3>Sorry ,No items Found</h3>
                    <h4>Please Try another Dish</h4>
                  </div> }
                </ul>
                <Pagination filteredDishes={filteredDishes} itemsPerpage={itemsPerpage} setCurrentPage={setCurrentPage}/>
            </div>
            
    </div>
  )
}

export default FilteredDishes
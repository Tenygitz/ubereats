import React,{useEffect,useState} from "react";
import SpecialDishes from "./components/SpecialDishes";
import FilteredDishes from "./components/FilteredDishes";
import Loader from "./components/Loader";
export const AllMenuContext=React.createContext();
 function Menu(){
    let [menu,setMenu]=useState([])
    let[categoryMenu,setCategoryMenu]=useState([])
    let[loading,setLoading]=useState(true)
    let[singleDish,setSingleDish]=useState([])
    async function getAllMenu(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response= await fetch(API_URL)
        let data=await response.json()
         setMenu(data.meals)
         setLoading(false)
    }
    async function getALLTheCategory(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php";
        let response= await fetch(API_URL)
        let categoryData=await response.json()
        setCategoryMenu(categoryData.categories)
        
    }
    async function getSingleDish(){
        const API_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c=beef"
        let response=await fetch(API_URL)
        let singleData=await response.json()
        setSingleDish(singleData.meals)
    }
    useEffect(()=>{
   getAllMenu();
   getALLTheCategory();
   getSingleDish()

    },[]);
   
    return(
        <div ><AllMenuContext.Provider value={menu} >
            {!loading ?<SpecialDishes  />:<Loader/>}
            
            {!loading ?<FilteredDishes specialCategoryMenu={categoryMenu}  singleDish={singleDish}  setSingleDish={ setSingleDish}/>:null}
            
            </AllMenuContext.Provider>
        </div>
    )
 }

 export default Menu;
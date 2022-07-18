import React,{useState} from 'react';
import Header from './components/Header';
import './App.css';
import Banner from './components/Banner';
import cardData from './components/CardData';
import Cards from './components/Cards';
import Menu from './Menu';
import ContactUs from './components/pages/ContactUs';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from './components/Footer';
function App() {
  let [favImage,setFavImage]=useState('');
  function getFavimg(imgsrc){
    setFavImage([...favImage,imgsrc]);
  }
  
  
  let card= cardData.map((item)=>{
    return(
      <Cards cardContent={{imgsrc:item.imgsrc,special:item.special,restaurant:item.restaurant,time:item.time,ratting:item.ratting}} cardFn={getFavimg}/>
    )
  })
  return (
    <BrowserRouter>
    <div className="App">
      
      <Header/>
      
      <Banner/>
      
     
<Routes>
  <Route path="Contact" element={<ContactUs/>}/>
</Routes>
<Footer/>

  
    
    </div>
    </BrowserRouter>
  );
}

export default App;

//HOOKS Imports//

import { useState,useEffect,useContext,useReducer } from 'react';
import React from 'react';
import HashLoader from "react-spinners/HashLoader";



//JS Imports//

import Home from './Home/Home';
import Navbar from './Navigation-Bar/Navbar';
import Books from './Books/Books';
import Basket from "./Basket/Basket"
import Bestsellers from './Bestsellers/Bestsellers';
import Discount from "./Discount/Discount"
import DropdownBooksCategories from './DropDownBooksCategories/DropdownBooksCategories';
import Horror from './Horror/Horror';
//CSS Imports//
import './App.css';
import './Navigation-Bar/Navbar.css'
import './Spinner/Spinner.css'
import './Home/Home.css'
import "./Books/Books.css"
import "./Discount/Discount.css"
import './Bestsellers/Bestsellers.css'
import './DropDownBooksCategories/DropdownBooksCategories.css'
import './Horror/Horror.css'



function App( showCart) {

  const [basketItems,setBasketItems] = useState([])
   const [loading,setLoading] = useState(false)

   const onAdd = (value)=>{
    const exist = basketItems.find(x=>x.id===value.id);
    if(exist) {
      setBasketItems(basketItems.map(x=>x.id === value.id ? {...exist,qty:exist.qty +1}:x
        ));
        
    }
    else{
      setBasketItems([...basketItems,{...value,qty:1}])
    }
   }
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
    setLoading(false)
    },3000)
  },[])

  return (
    <div className="App" >
      
      {/* Spinner */}
      {
    loading?
    <div className='spinner'>
    <HashLoader

    className='spinner-center'
    // color="#45f248"
    color="#72BF44"
    cssOverride={{}}
    size={80}
    speedMultiplier={1}
  />
  </div>
    :
        <div className='main-page'> 

         <Navbar></Navbar>
       
         {/* <DropdownBooksCategories></DropdownBooksCategories> */}
         <br></br><br></br>
         
          <Home></Home>

          {/* <Books onAdd={onAdd} basketItems={basketItems}></Books> */}
          {/* <Basket onAdd={onAdd} basketItems={basketItems}></Basket> */}
          <Discount></Discount>
        <Bestsellers></Bestsellers>
        <Horror></Horror>
</div>

      }

    </div>
  );
}

export default App;

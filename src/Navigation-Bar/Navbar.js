import React from 'react'
import DropdownBooksCategories from '../DropDownBooksCategories/DropdownBooksCategories'
import { useState } from 'react'
const Navbar = () => {
  const [showDropDown,setShowDropDown] = useState(false)
  return (
    <div className='navigation-page'>

    <div className='navigation-bar'>


        <div className='navigation-logo'>Eternal</div>

        <div className='navigation-pages'>
          <a href='#'>   <span className='navigation-home'>HOME</span></a>
          <span className='navigation-books' onClick={()=>{

         setShowDropDown(!showDropDown)}}>BOOKS</span>


          <a href='#'>   <span className='navigation-about'>ABOUT</span></a>
          <a href='#'>   <span className='navigation-contact'>CONTACT</span></a>
        </div>

      <div className='navigation-user'>

      <a href='#'>   <span className='navigation-auth'><i class="fa-regular fa-user"></i></span> </a>
      <a href='#'> <span className='navigation-shop'><i class="fa-solid fa-cart-plus"></i></span></a>
     
      </div>

  
    </div>

{
  showDropDown && (
    <DropdownBooksCategories></DropdownBooksCategories>
  )
}
    
    </div>
    
  )
}

export default Navbar
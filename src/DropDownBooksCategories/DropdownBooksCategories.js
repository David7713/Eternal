import React, { useState } from 'react'

const DropdownBooksCategories = () => {
  const [showDropDown,setShowDropDown] = useState(false)
  return (

    
   
    <div className='Dropdown-books-categories'>

     
        <ul >
            <a href='discount'><li>Discounts</li></a>
            <a href='#'><li>Bestsellers</li></a>
            <a href='#'><li>Horror</li></a>
            <a href='#'><li>Tales</li></a>
            <a href='#'><li>Crime</li></a>
            <a href='#'><li>Dedective</li></a>
        </ul>


    </div>
   
  )
}

export default DropdownBooksCategories
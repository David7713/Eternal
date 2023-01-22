import React from 'react'
import { useState } from 'react'
import data from "./Data.json"
const Books = () => {
  const [searchTerm,setSearchTerm] = useState("")
  return (
    <div className='books-page'>

      <div  className='books-search'>
            <input className='books-page-input' type="text" placeholder='Search For a Book...' onChange={(event)=>{
    setSearchTerm(event.target.value);

  }}></input>
  
  </div>
  <br></br><br></br>
        <div className='books-list'>

 
              {   
  data
  .filter((value) =>{
    if(searchTerm == ""){
return value;
  }else if(value.title.toLowerCase().includes(searchTerm.toLowerCase()))
    return value;
  }
  
  
  )
  .map((value)=>{
    return(
      <div className='template' onClick={()=>{
        console.log(value.id)
      }} key={value.id}>
        <img  className='template-image' src={value.image} alt ="" />
        <h3  className='template-title' >{value.title}</h3>
        <span className='template-author'>{value.author}</span>
        <p className='template-price'>{value.price}</p>
        <button className='template-button'>Buy Now</button>
        </div>
    )
  })


    }

        </div>
            
    </div>
  )
}

export default Books
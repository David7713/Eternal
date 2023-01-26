import React from 'react'
import { useState } from 'react'
import data from "./Data"
const Books = (props) => {
  const [searchTerm,setSearchTerm] = useState("")
const {onAdd} = props
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
      <div className='template' 
       key={value.id} onAdd={onAdd}> 
        <img  className='template-image' src={value.image} alt ="" />
        <h3  className='template-title' >{value.title}</h3>
        <span className='template-author'>{value.author}</span>
        <p className='template-price'>{value.price}</p>
        <button onClick={()=>{onAdd(value)}}
         className='template-button'>Buy Now</button>
        </div>
    )
  })


    }

        </div>
            
    </div>
  )
}

export default Books
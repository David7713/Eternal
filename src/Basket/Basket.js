import React, { Suspense } from 'react'
import "./Basket.css"
const Basket = (props) => {
  const {basketItems,onAdd} = props
  return (
    <div className='basket-page'>
      <div className='basket'>{
        basketItems.length === 0 && <div>Basket is Empty</div>
      }
    
    </div>
        {
          basketItems.map((item) => (
             <div>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <div>

                <button onClick={()=>{
                  onAdd(item)
                }}>+</button>
              </div>
            </div>
          ))}
    </div>
  )
}

export default Basket
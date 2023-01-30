import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import {FreeMode} from "swiper";
import "swiper/css";
import 'swiper/css/free-mode';
import "swiper/css/navigation";
import data from "./DiscountData"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Bestsellers = () => {
   
 
    
 

  return (
    
    <div className='bestsellers-page'>

        <div className='sale-banner'></div>


        <Swiper
        className='swiper-main'
        freeMode={true}
        grapCursor={true}
        modules={[FreeMode]}
        slidesPerView={5}
        spaceBetween={13}
        
      
        pagination={{
            clickable: true,
           
          }}
          navigation ={true} 
          modules={[Pagination, Navigation]}
        >

      

       {
        data.map(item=>(
            <SwiperSlide key={item.id}>
              <img className='discount-image' src={item.image}></img>
                <p className='discount-title'>{item.title}</p>
                <p className='discount-author'>{item.author}</p>
                <p className='discount-oldprice'>{item.oldprice}</p>
                <p className='discount-price'>{item.price}</p>
                <button className='discount-button' onClick={()=>{
                  console.log(item)
                }}>Buy Now</button>
            </SwiperSlide>
        )


        )
       }
       
   
{/* <SwiperSlide className='swiper-parts'>
     
     <h1>20</h1>

        </SwiperSlide>
<SwiperSlide className='swiper-parts'>
     <h1>21</h1>
        </SwiperSlide>
<SwiperSlide className='swiper-parts'>
     <h1>31</h1>

        </SwiperSlide>
<SwiperSlide className='swiper-parts'>
     <h1>11</h1>

        </SwiperSlide>
<SwiperSlide className='swiper-parts'>
     <h1>22</h1>

        </SwiperSlide>
<SwiperSlide className='swiper-parts'>
     <h1>10</h1>

        </SwiperSlide>
<SwiperSlide className='swiper-parts'>
     <h1>1</h1>

        </SwiperSlide> */}


     
        </Swiper>
        

    </div>
  )
}

export default Bestsellers
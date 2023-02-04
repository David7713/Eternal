import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import {FreeMode} from "swiper";
import "swiper/css";
import 'swiper/css/free-mode';
import "swiper/css/navigation";
import data from "./HorrorData"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Horror = () => {
  return (
    <div className='horror-page'>
        <div className='horror-banner'></div>
      <p className='horror-page-text'>Horror</p>
        <Swiper
        className='swiper-main'
        freeMode={true}
        grapCursor={true}
        modules={[FreeMode]}
        slidesPerView={4}
        spaceBetween={-50}
        
      
        pagination={{
            clickable: true,
           
          }}
          navigation ={true} 
          modules={[Pagination, Navigation]}
        >

      

       {
        data.map(item=>(
            <SwiperSlide key={item.id}>
              <img className='book-image' src={item.image}></img>
                <p className='book-title'>{item.title}</p>
                <p className='book-author'>{item.author}</p> 
                <p className='book-price'>{item.price}</p>
                <button className='book-button' onClick={()=>{
                  console.log(item)
                }}>Buy Now</button>
            </SwiperSlide>
        )


        )
       }

</Swiper>
    </div>
  )
}

export default Horror
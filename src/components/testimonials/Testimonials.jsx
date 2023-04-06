import React from 'react';
import './testimonials.css'
import Data from './Testimonial_clients'


// import required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";











function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Valuable</h5>
      <h2>Testimonials</h2>

      <Swiper
      
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
        dynamicBullets: true,
        clickable: true ,
      }}
      modules={[Pagination]}
      className="mySwiper container testimonials__container">
      {
        Data.map(({avatar,name,review,comapny_name},index)=>{
          return(
            <SwiperSlide className="testimonial">
            <div key={index} className="client__avatar">
              <img src={avatar} alt="User" />
            </div>
            <h5 className="client__name">{name} @ {comapny_name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
  
          )
        })
      }

       

      </Swiper>
    </section>
  )
}

export default Testimonials
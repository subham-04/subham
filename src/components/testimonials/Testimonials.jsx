import React from 'react';
import './testimonials.css'
import Human from '../../assets/images/humaniod.jpg';


// import required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";









const data = [
    
    {
        avatar: Human,
          name: 'Avatar Baba',
          comapny_name:"company_name",
          review: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'
    }


    

  ];


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
        data.map(({avatar,name,review,comapny_name},index)=>{
          return(
            <SwiperSlide className="testimonial">
            <div key={index} className="client__avatar">
              <img src={avatar} alt="User" />
            </div>
            <h5 className="client__name">{name} at {comapny_name}</h5>
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
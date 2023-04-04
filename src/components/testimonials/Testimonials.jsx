import React from 'react';
import './testimonials.css'
import Krishnendu from '../../assets/testimonial_img/Krishnendu Nandi.jpg';


// import required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";









const data = [
    
    {
        avatar: Krishnendu,
          name: 'Krishnendu Nandi',
          comapny_name:"Accenture",
          review: 'I know Subham for quite some times as he is my junior from same college. We have come across many times during hackathons, different coding competitions. I have seen a few folks having the amount of enthusiasm and learning capacity Subham has. He is truly a smart-working geek. And last but not the least, he is a good human being.'
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
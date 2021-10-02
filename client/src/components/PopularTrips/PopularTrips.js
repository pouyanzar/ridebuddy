import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const myTrips = [
  {'id': 1, 'rider': 'Frank', 'seats': 2, 'price': 50,'departure': '12-Dec-2021'},
  {'id': 8, 'rider': 'Rogers', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
  {'id': 10, 'rider': 'Joseph', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
  {'id': 90, 'rider': 'Saif', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
]

export default function PopularTrips(props) {

  return(  
    
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="border border-primary">
          {myTrips[0]['rider']}
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="border border-primary">
          {myTrips[1]['rider']}
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="border border-primary">
          {myTrips[2]['rider']}
        </div>
      </SwiperSlide>
     
      <SwiperSlide>
        <div className="border border-primary">
          {myTrips[3]['rider']}
        </div>
      </SwiperSlide>
      
    </Swiper>
  )
}
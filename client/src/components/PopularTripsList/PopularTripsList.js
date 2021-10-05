import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import SwiperCore, {
  Navigation
} from 'swiper';

SwiperCore.use([Navigation]);


const myTrips = [
  {'id': 1, 'rider': 'Frank', 'seats': 2, 'price': 50,'departure': '12-Dec-2021'},
  {'id': 8, 'rider': 'Rogers', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
  {'id': 10, 'rider': 'Joseph', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
  {'id': 90, 'rider': 'Saif', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
]

export default function PopularTripsList(props) {

  return(  

    <Swiper navigation={true} className="mySwiper border border-dark">
    
      <div className="popularlistborder">
        <SwiperSlide>{props.name}</SwiperSlide>
      </div>
  
    </Swiper>
  )
}
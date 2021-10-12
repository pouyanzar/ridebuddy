import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './PopularTrips.css';
import SwiperCore, {
  Navigation
} from 'swiper';

SwiperCore.use([Navigation]);

const popularlist = {

}

export default function PopularTrips(props) {

  return( 
  <Swiper navigation={true} className="swiper-slider mySwiper border border-dark">        
 
     <SwiperSlide>
        <div className="popularTrips">
          <div className="city-text-pic">
            <img className="city-pic" src="https://www.konnecthq.com/wp-content/uploads/2019/07/CN-Tower-31-12-1.jpg"></img>
            <div className="city-text">
              <h1>Toronto</h1>
            </div>
          </div>
          <div className="city-text-pic">
            <img className="city-pic" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/a5/c9/17.jpg"></img>
            <div className="city-text">
              <h1>Ottawa</h1>
            </div>
          </div>
        </div>
     </SwiperSlide>
     <SwiperSlide> 
      <div className="popularTrips">
          <div className="city-text-pic">
            <img className="city-pic" src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cf/5b/85/rideau-canal-ottawa-tourism.jpg"></img>
            <div className="city-text">
            <h1>Ottawa</h1>
            </div>
          </div>
          <div className="city-text-pic">
            <img className="city-pic" src="city-pic" src="https://www.cogir.net/DATA/PHOTO/2014_aprinc.jpg"></img>
            <div className="city-text">
            <h1>Montreal</h1>
            </div>
          </div>
      </div>   
     </SwiperSlide>
     <SwiperSlide>
      <div className="popularTrips">
          <div className="city-text-pic">
            <img className="city-pic" src="https://www.konnecthq.com/wp-content/uploads/2019/07/CN-Tower-31-12-1.jpg"></img>
            <div className="city-text">
              <h1>Toronto</h1>
            </div>
          </div>
          <div className="city-text-pic">
            <img className="city-pic" src="https://www.cogir.net/DATA/PHOTO/2014_aprinc.jpg"></img>
            <div className="city-text">
              <h1>Montreal</h1>
            </div>
          </div>
        </div>  
     </SwiperSlide>
  </Swiper>
  )
}
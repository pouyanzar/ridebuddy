import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyTrips.css";
import MyTripsListItem from '../MyTripsListItem/MyTripListItem';


export default function MyTrips(props) {
  
  console.log('my trips', props.myTrips);

  const trip =  props.myTrips.map((trip) => {
    return(
      <MyTripsListItem
        key={trip.pass_id} 
        name = {trip.name}
        destination = {trip.destination}
        avatar = {trip.avatar}
        price = {trip.price}
        departure = {trip.departure}
        origin = {trip.origin}
        pass_id = {trip.pass_id}
        cancelBooking = {(event)=>props.cancelBooking(trip.pass_id)}
      />)
  })

  return( 
    <div className="search-main">
      {trip} 
    </div>  
  )
}

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyTrips.css";
import MyTripsListItem from '../MyTripsListItem/MyTripListItem';

const myTrips = [
  {'id': 1, 'rider': 'Frank', 'seats': 2, 'price': 50,'departure': '12-Dec-2021'},
  {'id': 2, 'rider': 'Rogers', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
]

export default function MyTrips(props) {
  
  const cancelBooking = function (name){
    console.log('Cancelling your Booking with rider', name)
  }
  
  const trip =  myTrips.map((trip) => {
    return(
      <MyTripsListItem
        key={trip.id} 
        name= {trip.rider}
        seats= {trip.seats}
        price={trip.price}
        departure = {trip.departure} 
        cancelBooking = {(event)=>cancelBooking(trip.rider)}
      />)
  })

  return( 
    <div className="search-main">
      {trip} 
    </div>  
  )
}

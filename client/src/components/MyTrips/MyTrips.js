import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyTrips.css";
import MyTripsListItem from '../MyTripsListItem/MyTripListItem';
import axios from 'axios';

export default function MyTrips(props) {
  
  const setMyTrips = props.setMyTrips;
  const user_id = props.userId;
  
  useEffect(() => {
   
    return axios.get(`/trips/${user_id}`)
      .then((data) => {
        setMyTrips(data.data.rows);
      })
       
  },[user_id, setMyTrips]);
  
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
        trip_id = {trip.trip_id}
        cancelBooking = {(event)=>props.cancelBooking(trip.pass_id, trip.trip_id)}
        contacting = {(event)=>props.contacting(trip.name)}
        tripTracking = {(event) => props.tripTracking(trip.destination)}
      />)
  })

  return( 
    <div className="search-main">
      {trip} 
    </div>  
  )
}

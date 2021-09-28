import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyTrips.css";
import MyTripsListItem from '../MyTripsListItem/MyTripListItem';

const myTrips = [
  {'id': 1, 'rider': 'Frank', 'seats': 2, 'price': 50,'departure': '12-Dec-2021'},
  {'id': 8, 'rider': 'Rogers', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
  {'id': 10, 'rider': 'Joseph', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'}
]

export default function MyTrips(props) {
  
  const [myTripList, setMyTripList] = useState(myTrips)

  const cancelBooking = function (id){
  
    const updatedTrips = myTripList.filter(x => x['id'] !== id) 
    setMyTripList([...updatedTrips])
    
  }
  
  useEffect(() => {
    // Update the document title using the browser API
    console.log(myTripList)
  },[myTripList]);

  const trip =  myTripList.map((trip) => {
    return(
      <MyTripsListItem
        key={trip.id} 
        name= {trip.rider}
        seats= {trip.seats}
        price={trip.price}
        departure = {trip.departure} 
        cancelBooking = {(event)=>cancelBooking(trip.id)}
      />)
  })

  return( 
    <div className="search-main">
      {trip} 
    </div>  
  )
}

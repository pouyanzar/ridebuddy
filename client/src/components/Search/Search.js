import React, {useState, useEffect} from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TripListItem from '../TripListItem/TripListItem';

export default function Search(props) {
  
  const [book,setBook] = useState(props.searchTrip);

  //Helper function to book a seat and update the spots
  const trip_id = function (id) {
    for (const item in book) {
      if(book[item]['id']===id){
        return item;
      }
    }
  }
  //Helper function to book a seat and update the spots
  const updateSeats = function(id){
    const newId = trip_id(id);
    book[newId] = {...book[newId], 'seats':book[newId]['seats']-1}
    setBook([...book])
  }
  //Helper function to book a seat and update the spots
  const booking = function(id) { 
    updateSeats(id);
    props.booking(id);
  }

  useEffect(() => {
    props.handleSearch(props.origin, props.destination);
    setBook(props.searchTrip);
    console.log('Use effect running')
  },[]);

  console.log('refresh searchTrip', props.searchTrip);

  const trip =  book.map((trip) => {
    return(
      <TripListItem 
        key={trip.id} 
        name= {trip.rider}
        seats= {trip.seats}
        avatar = {trip.avatar}
        price={trip.price}
        departure = {trip.departure} 
        booking = {(event)=>booking(trip.id)}
      />)
  })

  return( 
    <div className="search-main">
      {trip} 
    </div>  
  )
}
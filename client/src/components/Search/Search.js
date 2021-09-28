import React, {useState, useEffect} from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TripListItem from '../TripListItem/TripListItem';

const trips = [
  {'id': 1, 'rider': 'Pouyan', 'seats': 2, 'price': 50,'departure': '12-Dec-2021'},
  {'id': 2, 'rider': 'Hamza', 'seats': 3,'price': 50, 'departure': '14-Dec-2021'},
  {'id': 5, 'rider': 'Andrew','seats': 3, 'price': 40,'departure': '15-Dec-2021'},
  {'id': 10, 'rider': 'James','seats': 3,'price': 30, 'departure': '15-Dec-2021'},
  {'id': 3, 'rider': 'Jonathan','seats': 1,'price': 30, 'departure': '25-Dec-2021'}
]

export default function Search(props) {
  
  const [book,setBook] = useState(trips);

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
  }

  useEffect(() => {
    
  }, [book]);

  const trip =  book.map((trip) => {
    return(
      <TripListItem 
        key={trip.id} 
        name= {trip.rider}
        seats= {trip.seats}
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
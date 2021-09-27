import React from 'react';
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
  
  const trip =  trips.map((trip) => {
    return(
      <TripListItem 
        key={trip.id} 
        name= {trip.rider}
        seats= {trip.seats}
        price={trip.price}
        departure = {trip.departure} 
      />)
  })

  return( 
    <div className="search-main">
      {trip} 
    </div>  
  )
}
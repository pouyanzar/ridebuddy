import React from "react";
import classNames from 'classnames/bind';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TripListItem.css";

export default function TripListItem(props) {
    
  return (
    <div className='border border-dark triplistitem'>
      <h2 >Driver: {props.name}</h2>
      <h5 >Departure on: {props.departure}</h5>
      <h5 >Price: {`$${props.price}`}</h5>
      <h5 >Available Seats: {props.seats}</h5>
    </div>
  );
}


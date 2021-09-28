import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TripListItem.css";

export default function TripListItem(props) {
  
  return (
   
    <div className='border border-dark triplistitem'>
      <div className='driver'>
        <img src="https://i.ibb.co/Gn1pxbw/driverpassenger-modified.png" alt=""></img>
        <h5 >{props.name}</h5>
      </div>
      <div>
        <h6 ><i className="far fa-calendar-alt"></i> {props.departure}</h6>
        <h6 ><i className="fas fa-coins"></i> {`$${props.price}`}</h6>
        <h6 ><i className="fas fa-chair"></i> {props.seats} </h6>
      </div>
      <div>
        <form onClick = {props.booking}>
          <button type="button" className="btn btn-success book-now" data-toggle="button"> Book now! </button>
        </form>
      </div>
    </div>
  );
}


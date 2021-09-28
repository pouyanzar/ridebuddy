import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TripListItem.css";

export default function TripListItem(props) {
  
  const [book, setBooking] = useState(false);

  const booking = function (){
    setBooking(true);
  }
  const confirmBooking = function (){
    props.booking();
    setBooking(false);
  }
  
  const cancelBooking = function (){
    setBooking(false);
  }

  if (book) {
    return (
   
      <div className='border border-dark triplistitem'>
        <div className='driver'>
          <h5 >Are you sure you want to book a ride with {props.name}</h5>
        </div>
        <div>
          <form onClick = {confirmBooking}>
            <button type="button" className="btn btn-success book-now" data-toggle="button"> Confirm! </button>
          </form>
          <form onClick = {cancelBooking}>
            <button type="button" className="btn btn-light book-now" data-toggle="button"> cancel! </button>
          </form>
        </div>
      </div>
    );
  }
   
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
        <form onClick = {booking}>
          <button type="button" className="btn btn-success book-now" data-toggle="button"> Book now! </button>
        </form>
      </div>
    </div>
  );
}


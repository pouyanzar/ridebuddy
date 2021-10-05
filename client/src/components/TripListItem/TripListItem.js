import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TripListItem.css";

export default function TripListItem(props) {
  
  const [book, setBooking] = useState(false);

  const booking = function (){
    setBooking(true);
  }
  const confirmBooking = function (){
    setBooking(false);
    props.booking();
  }
  
  const cancelBooking = function (){
    setBooking(false);
  }

  const d = new Date(props.departure);

  if (book) {
    return (
   
      <div className='border border-dark triplistitem'>
        <div className='driver'>
          <h5 >Are you sure you want to book a ride with {props.name}</h5>
        </div>
        <div>
          <form onClick = {confirmBooking}>
            <button type="button" className="btn btn-success" data-toggle="button"> Confirm! </button>
          </form>
          <form onClick = {cancelBooking}>
            <button type="button" className="btn btn-light" data-toggle="button"> cancel! </button>
          </form>
        </div>
      </div>
    );
  }
   
  return (
   
    <div className='border border-dark triplistitem'>
      <div className='driver'>
        <img className='car-pic' src={props.pic} alt=""></img>
        <div className='driver-name'>
        
           <img className= "driver-pic" src={props.avatar} alt ="driver-pic"></img>
           <h6 >{props.name} </h6>
        
        </div>  
      </div>
      <div className="trip-detail">
        <div>
        <h6 ><i className="far fa-calendar-alt"></i> {d.toLocaleString('en-US', { timeZone: 'America/New_York' })}</h6>
        <h6 ><i className="fas fa-coins"></i> {`$${props.price}`}</h6>
        <h6 ><i className="fas fa-chair"></i> {props.seats} </h6>
        </div>
        <div className="book-button">
          <div>
           <form className="book-button" onClick = {booking}>
            <button type="button" className="btn btn-success book-now" data-toggle="button"> Book now! </button>
           </form>
          </div>
        </div>
      </div>
    </div>
  );
}


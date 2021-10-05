import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyTripListItem.css";

export default function MyTripsListItem(props) {

  const [cancel, setCancel] = useState(false);

  const cancelling = function (){
    setCancel(true);
  }
  const confirmCancelling = function (pass_id, trip_id){
    props.cancelBooking(pass_id, trip_id);
  }
  
  const cancelCancelling = function (){
    setCancel(false);
  }

  const contacting = function (name) {
    props.contacting(name)
  }

  var d = new Date(props.departure);
  
  const tripTracking = function (destination){
    props.tripTracking(destination)
  }

  if (cancel) {
    return (
    <div className='border border-dark mytripslistitem'>  
      <div>
        <h6 >Are you sure you want to cancel your booking with {props.name} </h6>
      </div>
      <div>
        <form onClick = {()=> confirmCancelling(props.pass_id, props.trip_id)}>
          <button type="button" className="btn btn-danger cancel-now" data-toggle="button"> Confirm </button>
        </form>
        <form onClick = {cancelCancelling}>
          <button type="button" className="btn btn-secondary cancel-now" data-toggle="button"> Cancel</button>
        </form>
      </div>
    </div>
    );
  }

  return (
   
    <div className='border border-dark mytripslistitem'>
      <div className='driver'>
        <img className='driver-pic' src={props.avatar} alt=""></img>
        <h5 >{props.name}</h5>
      </div>
      <div>  
        <h6 >{props.origin} to {props.destination}</h6>
        <h6 ><i className="far fa-calendar-alt"></i> {d.toLocaleString('en-US', { timeZone: 'America/New_York' })} </h6>
        <h6 ><i className="fas fa-coins"></i> {`$${props.price}`}</h6>
        <form onClick = {contacting}>
          <button type="button"><i className="fas fa-comments fa-2x fas-purple"></i></button>
        </form>
      </div>
      <div>
        <form onClick = {cancelling}>
          <button type="button" className="btn btn-danger cancel-now" data-toggle="button"> Cancel Booking</button>
        </form>
      </div>
      <div>
        <form onClick = {tripTracking}>
          <button type="button" className="btn btn-danger cancel-now" data-toggle="button">Live Tracking</button>
        </form>
      </div>
    </div>
  );
}


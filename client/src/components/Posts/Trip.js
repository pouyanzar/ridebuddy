import {useState} from 'react';
import PointCreator from './helpers/PointCreator';
import './Trip.css'
export default function Trip(props) {
  const [state, setState] = useState();

  const changeHandler = (e) => {
    setState(e.target.value);
  }
  return (
    <div className="trip">
      <h1>Let's post a ride!</h1>
      <form>
        <label className="mt-2" htmlFor="origin">Origin</label>
        <PointCreator name={"origin"}/>
        <label className="mt-2" htmlFor="destination">Destination</label>
        <PointCreator name={"destination"}/>
        <label className="mt-2" htmlFor="price">Price</label>
        <input 
          name="price" 
          className="form-control-sm price" 
          type="number" 
          onChange={changeHandler}
        />$
        <label className="mt-2" htmlFor="departure">Departure</label>
        <input 
          name="departure" 
          type="datetime-local" 
          className="form-control"
          placeholder="Departure Time" 
          onChange={changeHandler}
        />
        <label className="mt-2" htmlFor="seat">Available Seats</label>
        <input 
          name="seat" 
          type="number" 
          className="form-control"
          placeholder="Number of available seats" 
          onChange={changeHandler} 
        />
        <label className="mt-2" htmlFor="luggage">Available Luggage</label>
        <input 
          name="luggage" 
          type="number" 
          className="form-control" 
          placeholder="How many luggages?" 
          onChange={changeHandler} 
        />
        <h2 className="mt-4">Vehicle information</h2>
        <label className="mt-2" htmlFor="make">Make</label>
        <input 
          name="make" 
          type="text" 
          className="form-control" 
          placeholder="e.g. Hyundai" 
          onChange={changeHandler} 
        />
        <label className="mt-2" htmlFor="model">Model</label>
        <input 
          name="model" 
          type="text" 
          className="form-control" 
          placeholder="e.g. Santa Fe" 
          onChange={changeHandler} 
        />
        <label className="mt-2" htmlFor="year">Year</label>
        <input 
          name="year" 
          type="number" 
          className="form-control" 
          placeholder="YYYY" 
          onChange={changeHandler} 
        />
        <label className="mt-2" htmlFor="color">Color</label>
        <input 
          name="color" 
          type="text" 
          className="form-control" 
          placeholder="Vehicle color" 
          onChange={changeHandler} 
        />
        <label className="mt-2" htmlFor="plate">Licence Plate</label>
        <input 
          name="plate" 
          type="text" 
          className="form-control"
          placeholder="Enter your licence plate" 
          onChange={changeHandler} 
        />
        <label className="mt-2" htmlFor="pic">Vehicle Photo</label>
        <input 
          name="pic" 
          type="file" 
          className="form-control"
          placeholder="Enter your licence plate" 
          onChange={changeHandler} 
        />
        <div>
          <button className="btn btn-dark m-4" type="submit">Post the Ride!</button>
        </div>
      </form>
    </div>
    
  )
}
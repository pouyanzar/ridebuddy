import {useState} from 'react';
import PointCreator from './helpers/PointCreator';
import { submitHandler } from './helpers/helperFunctions';
import './Request.css'
export default function Trip(props) {
  const [state, setState] = useState();

  const changeHandler = (e) => {
    setState(e.target.value);
  }
  return (
    <div className="trip">
      <h1>Let's post a request!</h1>
      <form onSubmit={submitHandler}>
        <label className="mt-2" htmlFor="origin">Origin</label>
        <PointCreator name={"origin"}/>
        <label className="mt-2" htmlFor="destination">Destination</label>
        <PointCreator name={"destination"}/>
        <label className="mt-2" htmlFor="departure">Departure</label>
        <input 
          name="departure" 
          type="datetime-local" 
          className="form-control"
          placeholder="Departure Time" 
          onChange={changeHandler}
        />
        <label className="mt-2" htmlFor="seat">Required Seats</label>
        <input 
          name="seat" 
          type="number" 
          className="form-control"
          placeholder="Number of available seats"
          onChange={changeHandler} 
        />
        <div>
        <button className="btn btn-dark m-4" type="submit">Post Request!</button>
        </div>
      </form>
    </div>
  )
}
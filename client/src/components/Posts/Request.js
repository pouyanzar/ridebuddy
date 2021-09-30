import {useState} from 'react';
import PointCreator from './helpers/PointCreator';
import { submitHandler } from './helpers/helperFunctions';
import './Request.css'
import axios from 'axios';
export default function Trip(props) {

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState(Date.now());
  const [seats, setSeat] = useState(0);
  const [description, setDescripton] = useState('');

  const originChangeHandler = (e) => {
    setOrigin(e.target.value);
  }
  const destinationChangeHandler = (e) => {
    setDestination(e.target.value);
  }
  const departureChangeHandler = (e) => {
    setDeparture(e.target.value);
  }
  
  const descriptionChangeHandler = (e) => {
    setDescripton(e.target.value);
  }

  const seatChangeHandler = (e) => {
    setSeat(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const form = {
      origin,
      destination,
      departure,
      seats,
      description,
      userId: Number(document.cookie.charAt(8))
    }
    axios.post('/requests/request', form)
    .then(res => {
      console.log(res.data)
      e.target.reset();
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="trip">
      <h1>Let's post a request!</h1>
      <form onSubmit={submitHandler}>
        <label className="mt-2" htmlFor="origin">Origin</label>
        <select 
          onChange={originChangeHandler} 
          className="form-control" 
          name="origin"
          required
        >
          <option value="montreal">Montreal</option>
          <option value="ottawa">Ottawa</option>
          <option value="toronto">Toronto</option>
        </select>
        <label className="mt-2" htmlFor="destination">Destination</label>
        <select 
          onChange={destinationChangeHandler} 
          className="form-control" 
          name="destination"
          required
        >
          <option value="montreal">Montreal</option>
          <option value="ottawa">Ottawa</option>
          <option value="toronto">Toronto</option>
        </select>
        <label className="mt-2" htmlFor="departure">Departure</label>
        <input 
          name="departure" 
          type="datetime-local" 
          className="form-control"
          placeholder="Departure Time" 
          onChange={departureChangeHandler}
          required
        />
        <label className="mt-2" htmlFor="seat">Required Seats</label>
        <input 
          name="seat" 
          type="number" 
          className="form-control"
          placeholder="Number of available seats"
          onChange={seatChangeHandler} 
          required
        />
        <label className="mt-2" htmlFor="description">Description</label>
        <textarea
          className='form-control'
          name='description'
          placeholder='describe about yourself and/or your trip'
          onChange={descriptionChangeHandler}
          required
        >
        </textarea>
        <div>
        <button className="btn btn-dark m-4" type="submit">Post Request!</button>
        </div>
      </form>
    </div>
  )
}
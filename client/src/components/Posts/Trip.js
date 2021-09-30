import {useState} from 'react';
import PointCreator from './helpers/PointCreator';
import axios from 'axios';
import './Trip.css'
export default function Trip(props) {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState(Date.now());
  const [price, setPrice] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [availableLuggages, setAvailableLuggages] = useState(0);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2020);
  const [color, setColor] = useState('');
  const [plate, setPlate] = useState('');
  const [pic, setPic] = useState('');

  const originChangeHandler = (e) => {
    setOrigin(e.target.value);
  }
  const destinationChangeHandler = (e) => {
    setDestination(e.target.value);
  }
  const departureChangeHandler = (e) => {
    setDeparture(e.target.value);
  }
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  }
  const availableSeatsChangeHandler = (e) => {
    setAvailableSeats(e.target.value);
  }
  const availableLuggagesChangeHandler = (e) => {
    setAvailableLuggages(e.target.value);
  }
  const makeChangeHandler = (e) => {
    setMake(e.target.value);
  }
  const modelChangeHandler = (e) => {
    setModel(e.target.value);
  }
  const yearChangeHandler = (e) => {
    setYear(e.target.value);
  }
  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  }
  const plateChangeHandler = (e) => {
    setPlate(e.target.value);
  }
  const picChangeHandler = (e) => {
    setPic(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const form = {
      origin, 
      destination, 
      departure, 
      price, 
      availableLuggages, 
      availableSeats,
      make,
      model,
      year,
      color,
      plate,
      pic,
      userId: Number(document.cookie.charAt(8))
     }
    return axios.post('trips/trip', form)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  };

  return (
    <div className="trip">
      <h1>Let's post a ride!</h1>
      <form onSubmit={submitHandler}>
        <label className="mt-2" htmlFor="origin">Origin</label>
        <select 
          onChange={originChangeHandler} 
          className="form-control" 
          name="origin"
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
        >
          <option value="montreal">Montreal</option>
          <option value="ottawa">Ottawa</option>
          <option value="toronto">Toronto</option>
        </select>
        <label className="mt-2" htmlFor="price">Price</label>
        <input 
          name="price" 
          className="form-control-sm price" 
          type="number" 
          onChange={priceChangeHandler}
        />$
        <label className="mt-2" htmlFor="departure">Departure</label>
        <input 
          name="departure" 
          type="datetime-local" 
          className="form-control"
          placeholder="Departure Time" 
          onChange={departureChangeHandler}
        />
        <label className="mt-2" htmlFor="seat">Available Seats</label>
        <input 
          name="seat" 
          type="number" 
          className="form-control"
          placeholder="Number of available seats" 
          onChange={availableSeatsChangeHandler} 
        />
        <label className="mt-2" htmlFor="luggage">Available Luggage</label>
        <input 
          name="luggage" 
          type="number" 
          className="form-control" 
          placeholder="How many luggages?" 
          onChange={availableLuggagesChangeHandler} 
        />
        <h2 className="mt-4">Vehicle information</h2>
        <label className="mt-2" htmlFor="make">Make</label>
        <input 
          name="make" 
          type="text" 
          className="form-control" 
          placeholder="e.g. Hyundai" 
          onChange={makeChangeHandler} 
        />
        <label className="mt-2" htmlFor="model">Model</label>
        <input 
          name="model" 
          type="text" 
          className="form-control" 
          placeholder="e.g. Santa Fe" 
          onChange={modelChangeHandler} 
        />
        <label className="mt-2" htmlFor="year">Year</label>
        <input 
          name="year" 
          type="number" 
          className="form-control" 
          placeholder="YYYY" 
          onChange={yearChangeHandler} 
        />
        <label className="mt-2" htmlFor="color">Color</label>
        <input 
          name="color" 
          type="text" 
          className="form-control" 
          placeholder="Vehicle color" 
          onChange={colorChangeHandler} 
        />
        <label className="mt-2" htmlFor="plate">Licence Plate</label>
        <input 
          name="plate" 
          type="text" 
          className="form-control"
          placeholder="Enter your licence plate" 
          onChange={plateChangeHandler} 
        />
        <label className="mt-2" htmlFor="pic">Vehicle Photo</label>
        <input 
          name="pic" 
          type="file" 
          className="form-control"
          placeholder="Enter your licence plate" 
          onChange={picChangeHandler} 
        />
        <div>
          <button className="btn btn-dark m-4" type="submit">Post the Ride!</button>
        </div>
      </form>
    </div>
    
  )
}
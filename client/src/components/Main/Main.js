import React, {useState} from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import PopularTrips from '../PopularTrips/PopularTrips'; 

export default function Main(props) {

  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    props.handleSearch(origin, destination);
  }

  return(  
    <div>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div className= "form">
            {/* <div className="field"><input  className= "input" type="text" placeholder="Origin" onChange={e => setOrigin(e.target.value)}/></div> */}
            <div className="field">
              <input className="input" list="cities"  id="origin" name="origin" onChange={e => setOrigin(e.target.value)} placeholder="Origin"/>
                <datalist id="cities">
                  <option value="Montreal"></option>
                  <option value="Ottawa"></option>
                  <option value="Toronto"></option>
                </datalist>
            </div>
            
            <div>
            {/* <div className="field"><input  className= "input" type="text" placeholder="Destination" onChange={e => setDestination(e.target.value)}/></div> */}
              <div className="field">
                <input className="input" list="cities" id="destination" name="destination`" onChange={e => setDestination(e.target.value)} placeholder="Destination"/>
                  <datalist id="cities">
                    <option value="Montreal"></option>
                    <option value="Ottawa"></option>
                    <option value="Toronto"></option>
                  </datalist>
              </div>
            </div>
          </div>
          <div className="search-button">
            <Button variant="primary rounded-pill" className="custom-btn" type="submit"><i className="fas fa-search-location"></i></Button>
          </div>
        </form>
      </div>
      <div className="popular-trips">
          <PopularTrips />
      </div>
    </div>  
  )
}
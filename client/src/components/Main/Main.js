import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

 

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
            <div className="field"><input  className= "input" type="text" placeholder="Origin" onChange={e => setOrigin(e.target.value)}/></div>
            <div>
            <div className="field"><input  className= "input" type="text" placeholder="Destination" onChange={e => setDestination(e.target.value)}/></div>
            </div>
          </div>
          <div className="search-button">
            <Button variant="primary rounded-pill" className="custom-btn" type="submit"><i className="fas fa-search-location"></i></Button>
          </div>
        </form>
      </div>
      <div className = "main-text">
       <h1>Popular Trips</h1>
       <h5>Toronto to Ottawa </h5>
       <h5>Ottawa to Montreal</h5>
       <h5>Toronto to Waterloo</h5>
       <h5>Toronto to Guelph</h5>
      </div>
    </div>  
  )
}
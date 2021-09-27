import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 

export default function Main() {
  
  return(
    
    <div>
      <div className="main">
        <form >
          <div className= "form">
            <div className="field"><input  className= "input" type="text" placeholder="Origin"/></div>
            <div>
            <div className="field"><input  className= "input" type="text" placeholder="Destination"/></div>
            </div>
          </div>
          <div className="search-button">
           <Link to="/search"> <Button variant="primary rounded-pill" className="custom-btn" type="submit"><i class="fas fa-search-location"></i></Button></Link>
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
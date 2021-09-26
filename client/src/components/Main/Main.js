import React from 'react';
import './Main.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
 

export default function Main() {
  
  return(
    
    <div>
      <div class="main">
        <form >
          <div className= "form">
            <div className="field"><input  className= "input" type="text" placeholder="Origin"/></div>
            <div className="field"><input  className= "input" type="text" placeholder="Destination"/></div>
          </div>
          <div className="search-button">
            <Button variant="primary rounded-pill" className="custom-btn" type="submit">Search</Button>
          </div>
        </form>
      </div>
      <div className = "main-text">
       <h1>Popular Trips</h1>
       <h5>Toronto to Ottawa </h5>
       <h5>Ottawa to Montreal</h5>
       <h5>Toronto to Waterloo</h5>
       <h5>Toronto to Guelph</h5>
       <h1>Saved Trips</h1>
       <h1>Hello</h1>  
       <h1>Hello</h1>
       <h1>Hello</h1>
       <h1>Hello</h1>
       <h1>Hello</h1>
       <h1>Hello</h1>
      </div>
    </div>  
  )
}
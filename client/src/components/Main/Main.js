import React from 'react';
import './Main.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
 

export default function Main() {
  
  return(
    
    <div>
      <div> <Navbar /></div>
      
      <div class="main">
        <form >
          <div className= "form">
            <div className="field"><input  className= "input" type="text" placeholder="Origin"/></div>
            <div className="field"><input  className= "input" type="text" placeholder="Destination"/></div>
          </div> 
          <div className="Button">
            <Button variant="primary rounded-pill" className="custom-btn" type="submit">Search</Button>
          </div>
        </form>
      </div>
      <div><Footer /></div>
    </div>  
  )
}
import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
 

export default function Login() {
  
  return(
    
    <div className = "login">
      <div className="logo">
        <h1>RideBuddy</h1>
      </div>
      <div>  
        <form >
          <div className= "form">
            <div className="field"><input  className= "input" type="text" placeholder="Username"/></div>
            <div className="field"><input  className= "input" type="password" placeholder="Password"/></div>
          </div> 
          <div className="Button">
            <Button variant="primary rounded-pill" className="custom-btn" type="submit">Login</Button>
            <Button variant="primary rounded-pill" className="custom-btn" type="submit">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>    

  )
}

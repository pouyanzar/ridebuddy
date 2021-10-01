import React, {useState} from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Cookies } from 'react-cookie';
import axios from 'axios';
 

export default function Login(props) {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const login = {email, password}

    props.handleCookies(login);

  }

  return(
    
    <div className = "login">
      <div className="logo">
       <img src="https://i.ibb.co/PDXM0R7/Ride-Buddy.gif" alt="RidyBuddy" width="250" height="150"></img>
      </div>
      <div>  
        <form onSubmit={handleSubmit}>
          <div className= "form">
            <div className="field"><input name="email" className= "input" type="email" placeholder="Username" onChange={e => setEmail(e.target.value)}/></div>
            <div className="field"><input name="password" className= "input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/></div>
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

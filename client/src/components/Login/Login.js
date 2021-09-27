import React, {useState} from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
 

export default function Login(props) {
  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const user = "saif"
  const pass ="123"

  const handleSubmit = async e => {
    e.preventDefault();
    if(username === user && password === pass) {
      const token = {
        username,
        password
      };
      props.setToken(token);
    }
  }

  return(
    
    <div className = "login">
      <div className="logo">
       <img src="https://i.ibb.co/PDXM0R7/Ride-Buddy.gif" alt="RidyBuddy" width="250" height="150"></img>
      </div>
      <div>  
        <form onSubmit={handleSubmit}>
          <div className= "form">
            <div className="field"><input  className= "input" type="text" placeholder="Username"onChange={e => setUserName(e.target.value)}/></div>
            <div className="field"><input  className= "input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/></div>
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

import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 

export default function Profile() {
  
  return(
    
    <div className="profile-main">
      <div >
        <img className="profile-picture" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile-pic"></img>
        
      </div>
      <div className="border border-dark rounded">
        <div className="profile-name-edit">
          <div><h1>Saif Ali</h1></div>
          <div><i className="fas fa-user-edit"></i></div> 
        </div>
        
        <h5>Email</h5>
        <h5>Phone</h5>
        <h5>Location</h5>
      </div>
    </div>  
  )
}
import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 

export default function Profile(props) {
  
  const user = {...props}

  console.log('profile props', user.user.id);

  return(
    
    <div className="profile-main">
      <div >
        <img className="profile-picture" src={user.user.avatar} alt="profile-pic"></img>
        
      </div>
      <div className="border border-dark rounded profile-info">
        <div className="profile-name-edit">
          <div><h1>{user.user.name}</h1></div>
          <div><i className="fas fa-user-edit"></i></div> 
        </div>
        
        <h5>Age : {user.user.age}</h5>
        <h5>Email : {user.user.email}</h5>
        <h5>Phone : {user.user.phone}</h5>
       
      </div>
    </div>  
  )
}
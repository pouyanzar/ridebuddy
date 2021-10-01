import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  
  const user = {...props}
  

  return (
    <div className="navbar">
      <div className = "nav-logo"><Link to="/"> <img src="https://i.ibb.co/dQ36P3S/finalnavbar.png" alt="ridebuddy" width="160" height="50"></img></Link></div>
      <div className = "profile-add">
        <div className="add-icon"><Link to="/profile"><img className="profile-pic" src={user.user.avatar} alt=""></img></Link></div>
        <div className="profile"><Link to="/posts"><i className="fas fa-plus-circle fa-2x fas-white"></i></Link></div>
      </div>
    </div>
  );
}

export default Navbar;

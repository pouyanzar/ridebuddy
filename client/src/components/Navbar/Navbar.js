import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className = "nav-logo"><Link to="/"> <img src="https://i.ibb.co/xCRkk17/Screenshot-from-2021-09-26-21-08-34.png" alt="ridebuddy" width="175" height="50"></img></Link></div>
      <div className = "profile-add">
        <div className="add-icon"><Link to="/profile"><img className="profile-pic" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img></Link></div>
        <div className="profile"><Link to="/posts"><i class="fas fa-plus-circle fa-2x fas-white"></i></Link></div>
      </div>
    </div>
  );
}

export default Navbar;

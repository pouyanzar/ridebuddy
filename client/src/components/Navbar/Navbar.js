import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className = "nav-logo"> RideBuddy</div>
      <div className = "profile-add">
        <h6>pic</h6>
        <h6>add</h6>
      </div>
    </div>
  );
}

export default Navbar;

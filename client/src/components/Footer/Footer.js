import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Footer() {
  
  return(
    <div>
    <div class="footer">
      <div class="footer-icon">
       <div><Link to="/chats"><i class="fas fa-comments fa-2x fas-purple"></i></Link></div>
       <div><Link to="/mytrips"><i class="fas fa-car-side fa-2x fas-purple"></i></Link></div>
       <div><Link to="/settings"><i class="fas fa-bars fa-2x fas-purple"></i></Link></div>
      </div>
    </div> 
    </div> 
  )
}
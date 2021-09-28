import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  
  return(
    <div>
    <div className="footer">
      <div className="footer-icon">
       <div><Link to="/chats"><i className="fas fa-comments fa-2x fas-purple"></i></Link></div>
       <div><Link to="/mytrips"><i className="fas fa-car-side fa-2x fas-purple"></i></Link></div>
       <div><Link to="/settings"><i className="fas fa-bars fa-2x fas-purple"></i></Link></div>
      </div>
    </div> 
    </div> 
  )
}
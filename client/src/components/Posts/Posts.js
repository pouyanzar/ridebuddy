import React from 'react';
import './Posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default function Posts() {
  
  return(
    <div className="posts">
      <Link to="/trip">
        <div className="add-posts border border-dark rounded">
          <div>
            <img src="https://i.ibb.co/Gn1pxbw/driverpassenger-modified.png" alt="rider"></img>
          </div>
          <div className="post-detail">
          <h4>Add a post</h4>
          <h6>You’re driving and have empty seats</h6>
          </div>
          <div className="arrow-circle-right">
            <i className="fas fa-arrow-circle-right fa-2x"></i>
          </div>
        </div>
      </Link>
      <Link to="/request">
        <div className="add-posts border border-dark rounded">
          <div>
            <img src="https://i.ibb.co/Xb29vLd/driverpassenger-modified-1.png" alt="passenger"></img>
          </div>
          <div className="post-detail">
            <h4>Post a request</h4>
            <h6>You’re looking for a ride</h6>
          </div>
          <div className="arrow-circle-right">
            <i className="fas fa-arrow-circle-right fa-2x"></i>
          </div>
        </div>
      </Link>
    </div>  
  )
}
import React from 'react';
import './Posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 

export default function Posts() {
  
  return(
    <div className="posts">
      <div className="add-posts border border-dark rounded">
        <div>
          <img src="https://i.ibb.co/Gn1pxbw/driverpassenger-modified.png" alt="rider"></img>
        </div>
        <div className="post-detail">
         <h3>Add a post</h3>
         <h7>You’re driving and have empty seats</h7>
        </div>
        <div className="arrow-circle-right">
          <i class="fas fa-arrow-circle-right fa-2x"></i>
        </div>
      </div>
      <div className="add-posts border border-dark rounded">
        <div>
          <img src="https://i.ibb.co/Xb29vLd/driverpassenger-modified-1.png" alt="passenger"></img>
        </div>
        <div className="post-detail">
          <h3>Post a request</h3>
          <h7>You’re looking for a ride</h7>
        </div>
        <div className="arrow-circle-right">
          <i class="fas fa-arrow-circle-right fa-2x"></i>
        </div>
      </div>
    </div>  
  )
}
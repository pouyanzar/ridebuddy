import React from 'react';
import './Posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 

export default function Posts() {
  
  return(
    <div className="posts">
      <div className="add-posts border border-dark rounded">
        <h1>Add a post</h1>
      </div>
      <div className="add-request border border-dark rounded">
        <h1>Add a request</h1>
      </div>
    </div>  
  )
}
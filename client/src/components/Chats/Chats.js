import React from 'react';
import './Chats.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Chats(props) {
  
  return(
    
    <div className="chat-main">
      <h1> Pouyan</h1>
      <h1> James</h1>
      <h1> Steve</h1>
      <h1> Rahul</h1>
      <h1> Sarah</h1>
      <h1> Anthony</h1>
      <h1> Emerson</h1>
      <h1> Shahrukh</h1>
      <h1> {props.name}</h1>
      <h1> Rathod</h1>
      <h1> Virat Kohli</h1>
      <h1> Akshay Kumar</h1>
      <h1> Jonathan</h1>
      <h1> Vicky Kaushal</h1>
      <h1> Manpreet Toor</h1>
      <h1> Mickey Singh</h1>
      <h1> Shahrukh Khan</h1>
    </div>    

  )
}
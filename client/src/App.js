import React, { useState } from 'react';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const [token, setToken] = useState();

  if(token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Main />
    </div>
  );
}

export default App;

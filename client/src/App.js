import React, { useState } from 'react';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chats from './components/Chats/Chats';
import Profile from './components/Profile/Profile';
import Posts from './components/Posts/Posts';

function App() {
  const [token, setToken] = useState();

  if(token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div>
        <div><Navbar /></div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/chats">
            <Chats name={"James"}/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
        <div><Footer /></div>
     </div>
    </Router>

  );
}

export default App;

import React, { useState , useEffect } from 'react';
import { useCookies} from 'react-cookie';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chats from './components/Chats/Chats';
import Profile from './components/Profile/Profile';
import Posts from './components/Posts/Posts';
import Search from './components/Search/Search';
import Trip from './components/Posts/Trip';
import Request from './components/Posts/Request';
import MyTrips from './components/MyTrips/MyTrips';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  
  const handleCookies = (data) => {
    setCookie('user_id', data.user_id, { path: '/' });
    setCookie('user_name', data.user_name, { path: '/' });
  };

  const removeHandle = () => {
    removeCookie("user_id");
    removeCookie("user_name");

  };
  
  useEffect(() => {
  
  },[cookies]);
  
  
  if(!cookies['user_id']) {
    return <Login handleCookies={handleCookies} />
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
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/trip">
            <Trip />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/mytrips">
            <MyTrips />
          </Route>
        </Switch>
        <div><Footer /></div>
     </div>
    </Router>

  );
}

export default App;

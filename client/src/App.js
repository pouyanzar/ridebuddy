import React, { useState , useEffect } from 'react';
import { useCookies} from 'react-cookie';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route, Switch, useHistory  } from 'react-router-dom';
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
import axios from 'axios';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [searchTrip, setSearchTrip] = useState();
  let history = useHistory();
  
  const handleCookies = (data) => {
    setCookie('user_id', data.user_id, { path: '/' });
    setCookie('user_name', data.user_name, { path: '/' });
  };

  const removeHandle = () => {
    removeCookie("user_id");
    removeCookie("user_name");
  };

  const handleSearch = (origin, destination) => {
    const search = {origin, destination}
    return axios.post(`/search`, search)
      .then((data) => {
        setSearchTrip(data.data.rows);   
        history.push("/search");    
      }) 
  }

  //Helper function to book a seat and update the spots
  const trip_id = function (id) {
    for (const item in searchTrip) {
      if(searchTrip[item]['id']===id){
          return item;
      }
    }
  }
  //Helper function to book a seat and update the spots
  const updateSeats = function(id){
    const newId = trip_id(id);
    searchTrip[newId] = {...searchTrip[newId], 'seats':searchTrip[newId]['seats']-1}
    setSearchTrip([...searchTrip])
  }

  const booking = function (id) {
    updateSeats(id);
    console.log('Apps', searchTrip[trip_id(id)]);
    const tripToBeUpdated = searchTrip[trip_id(id)];
    return axios.post(`/search/${id}`, tripToBeUpdated)
      .then(() => {
        //setSearchTrip(data.data.rows);   
        history.push("/search");    
      }) 
  }
  
  useEffect(() => {
    
  },[cookies]);

  useEffect(() => {
    console.log('update in seats')
  },[searchTrip]);

 
  if(!cookies['user_id']) {
    return <Login handleCookies={handleCookies} />
  }

  return (
      <div>
        <div><Navbar /></div>
        <Switch>
          <Route exact path="/">
            <Main handleSearch = {handleSearch}/>
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
            <Search searchTrip = {searchTrip} booking = {booking} />
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

  );
}

export default App;

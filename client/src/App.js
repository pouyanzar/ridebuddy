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
import Map from './components/Map/Map';
import Initializer from './components/Map/Initializer';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [searchTrip, setSearchTrip] = useState([]);
  const [user, setUser] = useState([]);
  const [myTrips, setMyTrips] = useState([]);
  let history = useHistory();
  
  const handleCookies = (data) => {
    
    return axios.post(`/login`, data )
    .then((data) => {    
      const user = data.data.user;
      if(user.id) {
        setCookie('user_id', user.id, { path: '/' });
        setCookie('user_name', user.name, { path: '/' });
        setUser(user);
      }
    })  
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
        setOrigin(origin);
        setDestination(destination);  
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

  const cancelBooking = function (pass_id){
    console.log('pass_id', pass_id)
    return axios.delete(`/passengers/${pass_id}`)
      .then(() => {  
        setMyTrips(myTrips => myTrips.filter(x => x['pass_id'] !== pass_id)) 
      })
      .then(()=>{
        history.push("/mytrips");  
      })   
  }
  
  const searchMyTrips = function () {
    console.log()
  }

  useEffect(() => {
    const user_id = cookies.user_id;
    return axios.get(`/trips/${user_id}`)
      .then((data) => {
        setMyTrips(data.data.rows);
      }) 
      
  },[cookies]);
 
  useEffect(() => {
    console.log('my trips', setMyTrips);
  },[searchTrip]);
 
  useEffect(() => {
   
    const user_id = cookies.user_id;
    if(user_id){
      return axios.get(`/login/${user_id}`)
      .then((data) => {
        setUser(data.data.user);
      }) 
    }
  },[]);

 
  if(!cookies['user_id']) {
    return <Login handleCookies={handleCookies} />
  }

  return (
      <div>
        <div><Navbar user={user} /></div>
        <Switch>
          <Route exact path="/">
            <Main handleSearch = {handleSearch}/>
          </Route>
          <Route path="/chats">
            <Chats name={"James"}/>
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/search">
            <Search searchTrip = {searchTrip} booking = {booking} handleSearch ={handleSearch} origin = {origin} destination = {destination}/>
          </Route>
          <Route path="/trip">
            <Trip />
          </Route>
          <Route path="/request">
            <Request />
          </Route>
          <Route path="/mytrips">
            <MyTrips  myTrips = {myTrips} cancelBooking ={cancelBooking}/>
          </Route>
          <Route path="/tripTracker">
            <Initializer />
          </Route>
        </Switch>
        <div><Footer /></div>
      </div>

  );
}

export default App;

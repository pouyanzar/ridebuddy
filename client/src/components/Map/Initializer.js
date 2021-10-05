import Map from "./Map";
import {useState, useEffect} from 'react';
import axios from 'axios';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

function Initializer(props) {
    mapboxgl.accessToken = 'pk.eyJ1IjoicG91eWFuMTIxIiwiYSI6ImNrdTJrNTI0ZjEya2EyeHA3YnlxbHNnaHgifQ.gSLfFKuoSfOkamoK8DKl2w';
    const [start, setStart] = useState([]);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const [end, setEnd] = useState([])
    let destination = props.destination;
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    function success(pos) {
      var crd = pos.coords;
      setLng(crd.longitude);
      setLat(crd.latitude);
      setZoom(9);
      setStart([crd.longitude, crd.latitude]);
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    useEffect(() => {
      const coordinates = JSON.parse(window.localStorage.coordinates);
      navigator.geolocation.getCurrentPosition(success, error, options)
        
        axios.get(`/tripTracker/${destination}`)
        .then(res => setEnd(res.data))
        .catch(err => console.log(err))
        
    },[])
    if (start.length === 0) return <div>Getting Route from your location to ${destination}</div>
  return <div><Map start={start} lng={lng} lat={lat} zoom={zoom} endPoint={end} /></div>
}

export default Initializer;
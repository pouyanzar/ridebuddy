import Map from "./Map";
import {useState, useEffect} from 'react';

function Initializer() {
    const [start, setStart] = useState([]);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const end = [-75.697189, 45.421532]
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
      console.log(start)
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    useEffect(() => {
      
        navigator.geolocation.getCurrentPosition(success, error, options)
        // setTimeout(() => {
        //   let i =0;
        //   console.log('This will run after 1 second!' + i)
        // }, 1000);
        // return () => clearTimeout(timer);
  
      
    },[])
    if (start.length === 0) return <div>Getting user location</div>
  return <div><Map start={start} lng={lng} lat={lat} zoom={zoom} endPoint={end} /></div>
}

export default Initializer;
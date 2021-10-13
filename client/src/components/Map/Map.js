import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {useState, useEffect, useRef } from 'react';
import './Map.css';

function Map(props) {
  const {start, lng, lat, zoom, endPoint} = props;
  const mapContainer = useRef(null);
  const map = useRef(null);
 
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
  },[]);
  
  const size = 200;
 
// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
   const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),
    
    // When the layer is added to the map,
    // get the rendering context for the map canvas.
    onAdd: function () {
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext('2d');
    },
    
    // Call once before every frame where the icon will be used.
    render: function () {
      const duration = 1000;
      const t = (performance.now() % duration) / duration;
      
      const radius = (size / 2) * 0.3;
      const outerRadius = (size / 2) * 0.7 * t + radius;
      const context = this.context;
      
      // Draw the outer circle.
      context.clearRect(0, 0, this.width, this.height);
      context.beginPath();
      context.arc(
      this.width / 2,
      this.height / 2,
      outerRadius,
      0,
      Math.PI * 2
      );
      context.fillStyle = `rgba(56, 135, 190, ${1 - t})`;
      context.fill();
      
      // Draw the inner circle.
      context.beginPath();
      context.arc(
      this.width / 2,
      this.height / 2,
      radius,
      0,
      Math.PI * 2
      );
      context.fillStyle = 'rgba(56, 35, 90, 1)';
      context.strokeStyle = 'white';
      context.lineWidth = 2 + 4 * (1 - t);
      context.fill();
      context.stroke();
      
      // Update this image's data with data from the canvas.
      this.data = context.getImageData(
      0,
      0,
      this.width,
      this.height
      ).data;
      
      // Continuously repaint the map, resulting
      // in the smooth animation of the dot.
      map.current.triggerRepaint();
      
      // Return `true` to let the map know that the image was updated.
      return true;
    }
  };
  // create a function to make a directions request
  async function getRoute() {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    
    const query = await fetch(`/tripTracker`,
      { 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({start, endPoint}),
        method: 'POST' 
      }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
    // window.localStorage.setItem("coordinates", JSON.stringify(route));
    const geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    };
    // if the route already exists on the map, we'll reset it using setData
    if (map.current.getSource('route')) {
      map.current.getSource('route').setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });
    }
  };
  

  function routeMaker(route) {
    map.current.flyTo({
      center: route[1],
      zoom: 9
    })
    
    if(route.length < 10) {
      map.current.setZoom(15, {duration:5000});
      map.current.setCenter(route[1])

    }
    if(route.length === 1)  {
      routeMakerStopper();
      return alert("You arrived at your destination")
    }
    
    route.shift();
    const geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    };
    if (map.current.getSource('route')) {
      map.current.getSource('route').setData(geojson);

    } else {

      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      })
      }
      const newCoord = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: route[0] // icon position [lng, lat]
        }
      }
    if (map.current.getSource('dot-point')) {
      map.current.getSource('dot-point').setData(newCoord);
      } else {
        map.current.addSource('dot-point', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': [
              {
                'type': 'Feature',
                'geometry': {
                  'type': 'Point',
                  'coordinates': navigator.geolocation.getCurrentPosition() // icon position [lng, lat]
                }
              }
            ]
          }
          });
          map.current.addLayer({
            'id': 'layer-with-pulsing-dot',
            'type': 'symbol',
            'source': 'dot-point',
            'layout': {
            'icon-image': 'pulsing-dot'
            }
            });
          }
  }
  let route = JSON.parse(window.localStorage.coordinates);
  let go;
  function routeMakerRunner() {
     go = setInterval(() => routeMaker(route),1000);
    }
    
  function routeMakerStopper() {     
    clearInterval(go);
  }
  useEffect(() => {
    
    map.current.on('load', () => {
      // make an initial directions request that
      // starts and ends at the same location
      getRoute();
      map.current.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
      map.current.addSource('dot-point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': start // icon position [lng, lat]
              }
            }
          ]
        }
        });
        map.current.addLayer({
          'id': 'layer-with-pulsing-dot',
          'type': 'symbol',
          'source': 'dot-point',
          'layout': {
          'icon-image': 'pulsing-dot'
          }
          });
      
      const end = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: endPoint
            }
          }
        ]
      };
      if (map.current.getLayer('end')) {
        map.current.getSource('end').setData(end);
      } else {
        map.current.addLayer({
          id: 'end',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'Point',
                    coordinates: endPoint
                  }
                }
              ]
            }
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#f30'
          }
        });
      }
    }); 

  
    map.current.on('load', routeMakerRunner)
    
  },[])
  
  return (
      <div ref={mapContainer} className="map-container"></div>
  )
}

export default Map;
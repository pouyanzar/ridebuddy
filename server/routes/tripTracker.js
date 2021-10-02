const express = require('express');
const router = express.Router();
const  axios = require('axios');
const KEY = process.env.MAP_KEY;

module.exports = (db) => {
  router.post('/', (req, res) => {
    const {start, endPoint} = req.body;
    console.log(req.body);
    axios.get(`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${endPoint[0]},${endPoint[1]}?steps=true&geometries=geojson&access_token=${KEY}`)
      .then(data => res.send(data.data));
  });

  router.get('/:destination', (req, res) => {
    const {destination} = req.params;
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?access_token=${KEY}`)
      .then(data => {
        console.log("response: ", data.data.features[0].geometry.coordinates);
        res.send(data.data.features[0].geometry.coordinates);
      })
      .catch(err => res.send(err));
  });

  return router;
};
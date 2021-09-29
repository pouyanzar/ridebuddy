const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    res.send('trips');
  });
  router.post('/trip', (req, res) => {
    const {
      origin,
      destination,
      departure,
      price,
      availableSeats,
      availableLuggages,
      make,
      model,
      year,
      color,
      plate,
      pic
    } = req.body;
    db.query(`INSERT INTO Trips (origin, destination, departure, price, available_seats,available_luggages, make, model, year, color, plate, pic) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,[origin, destination, departure, price, availableSeats, availableLuggages, make, model, year, color, plate, pic])
      .then(data => res.send("successful!"))
      .catch(e => res.send().status().json({err: e.message}));
  });
  return router;
};
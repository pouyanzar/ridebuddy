const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM trips`)
      .then(({ rows: trips }) => {
        res.json({ rows: trips });
      });
  });
  router.post('/trip', (req, res) => {
    console.log(req.body.userId);
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
      pic,
      userId
    } = req.body;

    db.query(`INSERT INTO Trips (origin, destination, departure, price, available_seats,available_luggages, make, model, year, color, plate, pic, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,[origin, destination, departure, price, availableSeats, availableLuggages, make, model, year, color, plate, pic, userId])
      .then(data => res.send(data))
      // .catch(e => res.send().json({err: e.message}));
  });

  return router;
};
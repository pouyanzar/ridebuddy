const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM trips`)
      .then(({ rows: trips }) => {
        res.json({ rows: trips });
      });
  });

  router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.query(`SELECT passengers.id as pass_id, origin, destination, departure, avatar, pic, trip_id, name, price FROM trips 
    JOIN passengers ON trips.id = trip_id JOIN users ON users.id = trips.user_id
    WHERE passengers.user_id = $1
    `, [id])
      .then(({ rows: trips }) => {
        res.json({ rows: trips });
      });
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
      pic,
      userId
    } = req.body;

    db.query(`INSERT INTO Trips (origin, destination, departure, price, available_seats,available_luggages, make, model, year, color, plate, pic, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,[origin, destination, departure, price, availableSeats, availableLuggages, make, model, year, color, plate, pic, userId])
      .then(data => res.send("Your request successfully added!"))
      .catch(e => res.send({err: e.message}));
  });

  return router;
};
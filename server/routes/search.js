const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {

    db.query(`SELECT * FROM trips;`)
      .then(({ rows: trips }) => {
          res.json({ rows: trips })
      })
      .catch(err => {
        res.send().status(500)
        .json({error: err.message});
      });
  });

  router.post("/", (req, res) => {
    const origin = req.body.origin;
    const destination = req.body.destination;
    
    db.query(`SELECT trips.id, users.name as rider, avatar, price, available_seats as seats, available_luggages as luggage, pic, departure FROM trips 
      JOIN users ON users.id = user_id 
      WHERE origin = $1 AND destination = $2
      ORDER BY departure ASC;
      `, [origin, destination])
      .then(({ rows: trips }) => {
        res.json({ rows: trips })
      })
      .catch(err => {
        res.send().status(500)
        .json({error: err.message});
      });
  });

  router.post("/:id", (req, res) => {
    
    const trip_id = req.body.id;
    const seats = req.body.seats;

    console.log('trp_id', trip_id);
    console.log('seats', seats);

    db.query(`UPDATE trips
      SET available_seats = $1
      WHERE trips.id = $2;
      `, [seats, trip_id])
      .then(({ rows: trips }) => {
        res.json({ rows: trips })
      })
      .catch(err => {
        res.send().status(500)
        .json({error: err.message});
      });
  });

  return router;
};
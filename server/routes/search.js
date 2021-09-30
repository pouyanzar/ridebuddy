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
      WHERE origin = $1 AND destination = $2;
      `, [origin, destination])
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
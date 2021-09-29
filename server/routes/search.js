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
    console.log('request received');
    db.query(`SELECT * FROM trips
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
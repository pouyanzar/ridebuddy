const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    res.send('requests');
  });

  router.post('/request', (req, res) => {
    const {
      origin,
      destination,
      seats,
      departure,
      description,
      userId
    } = req.body;
    db.query(`INSERT INTO requests (origin, destination, required_seat, departure, description) VALUES ($1, $2, $3, $4, $5) RETURNING id`, [origin, destination, seats, departure, description])
      .then(data => {
        db.query(`INSERT INTO passengers (user_id, request_id) VALUES ($1, $2)`, [userId, data.rows[0].id]);
      })
      .catch(err => res.send(err));
  });
  return router;
};
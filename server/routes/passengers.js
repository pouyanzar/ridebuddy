const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.delete('/:id', (req, res) => {
    const passenger_id = parseInt(req.params.id);
    db.query(`DELETE FROM passengers 
    WHERE passengers.id = $1;
    `, [passenger_id])
      .then(() => {
        res.send('successfull update');
      })

  });

  router.post('/', (req, res) => {
    const user_id = parseInt(req.body.user_id);
    const trip_id = parseInt(req.body.trip_id);
    db.query(`INSERT INTO passengers (user_id, trip_id)
    VALUES ($1, $2)`, [user_id, trip_id])
      .then(() => {
        res.send('successfull update');
      });
      
  });

  return router;
};
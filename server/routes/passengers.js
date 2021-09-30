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
      });
  });

  return router;
};
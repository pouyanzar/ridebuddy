const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM trips`)
      .then(({ rows: trips }) => {
        res.json({ rows: trips })
    });
  });

  return router;
};
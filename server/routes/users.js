const express = require('express');
const router = express.Router();

/* GET users listing. */
module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM users`)
      .then(({ rows: trips }) => {
        res.json({ rows: trips });
      });
  });
  return router;
};

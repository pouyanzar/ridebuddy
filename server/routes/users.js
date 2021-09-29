const express = require('express');
const router = express.Router();

/* GET users listing. */
module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT * FROM users`)
      .then(({ rows: users }) => {
        res.json({ rows: users })
    });
  });
  return router;
};

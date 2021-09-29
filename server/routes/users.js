const express = require('express');
const router = express.Router();

/* GET users listing. */
module.exports = (db) => {
  router.get('/', function(req, res) {
    res.send('respond with a resource');
  });
  return router;
};

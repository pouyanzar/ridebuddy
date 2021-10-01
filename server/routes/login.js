const express = require('express');
const router = express.Router();

module.exports = (db) => {
  
  router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(`SELECT * FROM users
      WHERE email = $1;
      `, [email])
      .then(data => {
        const user = data.rows[0];
        const user_name = data.rows[0].name;
        const user_id = data.rows[0].id;
        const databasePassword = data.rows[0].password;
        if (user && databasePassword === password ) {
          console.log('successful');
          return res.json({user})
        }
        console.log('not successful')
        return res.send("<html><head></head><body>Email/password combination is not correct try <a href='/login'>login</a> again!</body></html>");
      })
      .catch(err => {
        res.send().status(500)
        .json({error: err.message});
      });
  });
  
  router.get("/:id", (req, res) => {
    const user_id = req.params.id;
    console.log('user_id', user_id);

    db.query(`SELECT * FROM users
      WHERE users.id = $1;
      `, [user_id])
      .then(data => {
        const user = data.rows[0];
        const user_name = data.rows[0].name;
        const user_id = data.rows[0].id;
        const databasePassword = data.rows[0].password;
       
        console.log('successful');
        return res.json({user})
        
      })
      .catch(err => {
        res.send().status(500)
        .json({error: err.message});
      });
  });

  return router;
};

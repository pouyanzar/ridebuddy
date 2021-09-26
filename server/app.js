const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {Pool} = require('pg');
const dbParams = require('./lib/db.js');

//connet to db
const db = new Pool(dbParams);

db.connect();

// import routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const profileRoute = require('./routes/profile');
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mount routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/profile', profileRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);

module.exports = app;
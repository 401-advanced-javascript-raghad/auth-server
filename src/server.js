'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const authRouter = require('../src/auth/router');
const notFoundHandler = require('./middleware/404');
const serverErrorHandler = require('./middleware/500');
const bearer = require('./auth/middleware/bearer-auth');
const authorize = require('./middleware/extra-routes');
const oauth = require('./auth/middleware/oauth');

const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(authorize);
app.use(bearer);
app.use(express.static('./public'));
// Esoteric Resources

// Routes
app.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});

app.get('/secret', bearer, (req, res)=> {
  res.cookie('token', req.token, {
    expires: new Date(Date.now() + 900000),
    httpOnly : false,
  });
  res.status(200).json(req.user);
});

app.get('/public',(req, res)=> {
  res.status(200).send('public-route response.');
});


app.use('*', notFoundHandler); 
app.use(serverErrorHandler); 

module.exports = {
  server: app,
  start: (port, mongodb_uri) => {
    app.listen(port, () => {
      console.log('Server is up and running on port', port);
    });
    let options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };

    mongoose.connect(mongodb_uri, options);
  },
};
'use strict';

const users = require('../models/users/users-model');

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    next('User is not loggedin');
    return;
  }

  let token = req.headers.authorization.split(' ').pop();
  users.verifyToken(token) //here eather we will receve reject/resolve so we need to deal with both 
    .then(userObject =>{
      // console.log('userObject .....', userObject);
      req.user = userObject;
      next();
    })
    .catch(err => next('protected ... invalid uesr token'));
};
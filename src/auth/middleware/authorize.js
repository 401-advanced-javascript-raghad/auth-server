'use strict';

const userModel = require('../models/users/users-model');

module.exports = (capability)=> {
  return (req, res, next) => {
    userModel.can(req.user.capabilities.includes(capability))
      .then(data =>{
        if (data == 'true'){
          next();
        }else {
          next('Access Denied');
        }
      }).cath(e =>{
        next('Invalid Login');

      });     
  };
};
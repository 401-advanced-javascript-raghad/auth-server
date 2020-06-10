'use strict';

require('dotenv').config();
const schema = require('./users-schema');
const Model = require('../mongo');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');


const SECRET = process.env.SECRET || 'secret';

let roles = {
  user: ['read'],
  writer: ['read', 'add'],
  editor: ['read', 'change', 'add'],
  admin: ['read', 'change', 'add', 'remove'],
};

class Myusers extends Model {
  constructor() {
    super(schema);
  }
 
  async save(record) {
    let data = await this.get({ username: record.username });
    if (!data[record.username]) {
      return this.create(record);
    }
    return Promise.reject('This user is exists!');
  }

  async authenticateBasic(username, password) {
    let data = await this.get({ username: username });
    let valid = await bcryptjs.compare(password, data[0].password);
    return valid ? data[0] : Promise.reject();
  }

  generateToken(user){
    const token =  jwt.sign({
      username: user.username,
      capabities: roles[user.role],
    }, SECRET);
    return token;
  }
  can (permission){
    if(permission){
      Promise.resolve('true');
    }else{
      Promise.reject('false');
    }
  }
  verifyToken(token) {
    const schemaa = this.schema;
    return jwt.verify(token, SECRET, async function(err, decoded) {
      if (err) {
        return Promise.reject(err);
      }      
      const result = await schemaa.findOne({ username: decoded.username });
      if (result) {
        return Promise.resolve(decoded);
      } 
      return Promise.reject();
    });
  }
}


module.exports = new Myusers();
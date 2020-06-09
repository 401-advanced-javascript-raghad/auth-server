'use strict';

const serverObj = require('../src/auth/router');
const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(serverObj.server);

describe('Happy Path', () => {
  it('should respond 404 of an invalid route',() => {
    return mockRequest
      .get('/anything')
      .then(results => {
        expect(results.status).toBe(404);
      });
  });
  it('should respond properly /users', ()=> {
    return mockRequest
      .get('/users')
      .then(results => {
        expect(results.status).toBe(200);
      });
  });
  it('POST  /signup ', async() => {
    let test = { 'username': 'raghad', 'password': '1234' };
    mockRequest
      .post('/signup')
      .send(test)
      .then(data => {
        expect(data.status).toBe(200);
      });
  });
//   it('can signin a user', async () => {
//     let res = await mockRequest
//       .post('/signin')
//       .set('Authorization', 'Basic YlVzZXI6YlBhc3M=');
//     expect(res.status).toBe(200);
//     expect(res.body.username).toBe('raghad');
//   });
});
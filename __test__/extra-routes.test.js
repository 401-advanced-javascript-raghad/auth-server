// 'use strict';
// const {server} = require('../src/middleware/extra-routes');
// const supergoose = require('@code-fellows/supergoose');
// const mockRequest = supergoose(server);

// describe('testing',()=>{
//   it('create',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'admin'};
//     mockRequest
//       .post('/add')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(201);
//       });
//   });
//   it('read',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'admin'};
//     mockRequest
//       .get('/read')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(200);
//       });
//   });
//   it('update',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'admin'};
//     mockRequest
//       .put('/change')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(200);
//       });
//   });
//   it('delete',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'admin'};
//     mockRequest
//       .delete('/delete')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(200);
//       });
//   });
//   it('create',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'writer'};
//     mockRequest
//       .post('/add')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(201);
//       });
//   });
//   it('read',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'writer'};
//     mockRequest
//       .get('/read')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(200);
//       });
//   });
//   it('update',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'writer'};
//     mockRequest
//       .put('/change')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(403);
//       });
//   });

//   it('delete',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'writer'};
//     mockRequest
//       .delete('/delete')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(403);
//       });
//   });
  
//   it('create',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'editor'};
//     mockRequest
//       .post('/add')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(201);
//       });
//   });
//   it('read',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'editor'};
//     mockRequest
//       .get('/read')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(200);
//       });
//   });
//   it('update',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'editor'};
//     mockRequest
//       .put('/change')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(200);
//       });
//   });

//   it('delete',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'editor'};
//     mockRequest
//       .delete('/delete')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(403);
//       });
//   });
  
//   it('create',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'user'};
//     mockRequest
//       .post('/add')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(403);
//       });
//   });
//   it('read',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'user'};
//     mockRequest
//       .get('/read')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(200);
//       });
//   });
//   it('update',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'user'};
//     mockRequest
//       .put('/change')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(403);
//       });
//   });

//   it('delete',()=>{
//     let test = { 'username': 'raghad', 'password':'123','role':'user'};
//     mockRequest
//       .delete('/delete')
//       .send(test)
//       .then(data => {
//         expect(data.status).toBe(403);
//       });
//   });


// });
# auth-server
# LAB: Authentication
Today, we begin the first of a 4-Phase build of an authentication system, written in Express. The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I want to create a new account so that I may later login.
- As a user, I want to login to my account so that I may access protected information.
- As a developer, I want to create an authentication server so that our application can restrict access to certain routes.
- As a developer, I want to create a authentication as a reusable module, so that I can use it in other projects.
- As a developer, I want to use industry standards for http based basic authentication.
- As a developer, I want to provide applications and users a token following authentication to facilitate re-authentication on subsequent requests.

### Author: Raghad Al-Quran

### Links and Resources
- [submission PR class-11](https://github.com/401-advanced-javascript-raghad/auth-server/pull/2)
- [submission PR class-12](https://github.com/401-advanced-javascript-raghad/auth-server/pull/4)

### Modules
#### `Node.js` , `Postman` , `Swagger`

### Packages
#### `express` , `jest` , `supertest` , `base-64` ,mongoose`, `pcryptjs`

#### How to initialize/run your application
- signin : POST - http://localhost:3000/signin
- signup: POST - http://localhost:3000/signup
- GET ALL: GET - http://localhost:3000/users

- GET : GET - http://localhost:3000/oauth

- GET : GET - http://localhost:3000/secret

- add : POST - http://localhost:3000/add
- read: GET - http://localhost:3000/read
- change : PUT - http://localhost:3000/change
- delete : DELETE - http://localhost:3000/delete

#### Tests

- Test: `node index.js` or `nodemon` or `npm run start`

#### UML
![UML-Diagram](auth.png)





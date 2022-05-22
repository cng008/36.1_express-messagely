# **Express Calculator**

## **Overview**

Message.ly is a user-to-user private messaging app.

This exercise is meant to teach and reinforce useful common patterns around authentication and authorization.

## **Requirements**

- app.js

  - Pulls in user routes, messages routes, and auth routes

- expressError.js

  - Handle errors in express more gracefully

- db.js

  - Sets up messagely database

- server.js

  - Starts server on 3000

- config.js
  This may be a new file for us. As you build the app (and, in particular, the further study), you may add to it.

  Its job is to be a centralized place for constants needed in different places in the application. Other places should require() in these values.

  In order to make it easier to keep secret things secret, it also will try to read a file named .env. This is a traditional name for a file containing “environmental variables needed for an application”.

- middleware/auth.js

  - Useful middleware for “is a user logged in?” and “is the logged-in user the same as the :username provided in a route?”

### Routes

- anyone can login or register
- any logged-in user can see the list of users
- only that user can view their get-user-detail route, or their from-messages or to-messages routes.
- only the sender or recipient of a message can view the message-detail route
- only the recipient of a message can mark it as read
- any logged in user can send a message to any other user

## **Technologies Used:**

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org)
- [Express](https://expressjs.com/en/4x/api.html)
- [Node-Bcrypt](https://www.npmjs.com/package/bcrypt/)
- [Jest](https://jestjs.io)
- [Supertest](https://www.npmjs.com/package/supertest)
- [VSCode](https://code.visualstudio.com/docs)

## **How to Run**

```bash
# Clone Repository
$ git clone https://github.com/cng008/36.1_express-messagely.git
$ npm install
$ psql < data.sql
$ nodemon server.js
open http://localhost:3000/auth/register in API viewer
```

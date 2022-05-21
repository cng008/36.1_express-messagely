const jwt = require('jsonwebtoken');
const express = require('express');
const router = new express.Router();

const User = require('../models/user');
const { SECRET_KEY } = require('../config');
const ExpressError = require('../expressError');

/** POST /login - login: {username, password} => {token} **/

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (await User.authenticate(username, password)) {
      const token = jwt.sign({ username }, SECRET_KEY);
      User.updateLoginTimestamp(username);
      return res.json({
        message: `Hi, ${username}! You've been successfully logged in.`,
        token
      });
    } else {
      throw new ExpressError('Invalid username/password', 400);
    }
  } catch (err) {
    return next(err);
  }
});

/** POST /register - register user: registers, logs in, and returns token.
 * {username, password, first_name, last_name, phone} => {token}.
 */

router.post('/register', async (req, res, next) => {
  try {
    const { username } = await User.register(req.body);
    const token = jwt.sign({ username }, SECRET_KEY);
    User.updateLoginTimestamp(username);
    return res.json({ token });
  } catch (err) {
    console.log(err);
    if (err.code === '23505') {
      return next(
        new ExpressError('Username taken, please pick another.', 400)
      );
    }
    return next(err);
  }
});

module.exports = router;

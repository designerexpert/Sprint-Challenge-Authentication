const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/userModels');
const { mysecret } = require('../../config');
const SaltRounds = 11;

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) {
    jwt.verify(token, mysecret, (err, decoded) => {
      if (err) return res.status(422).json(err);
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

const encryptUserPW = (req, res, next) => {
  const { username, password } = req.body;
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password encrypting, bcrypt.hash()
  // Once the password is encrypted using bcrypt you'll need to set a user obj on req.user with the encrypted PW
  // Once the user is set, call next and head back into the userController to save it to the DB
  bcrypt.hash(password, SaltRounds, (err, hashed) => {
    if (err) {
      res.status(422).json(err);
      next();
    }
    if (!password) {
      res.status(422).json({ error: 'Please Provide a Password!' });
      next();
    }
    req.body.hashed = hashed;
    next();
  });
};

const compareUserPW = (req, res, next) => {
  const { username, password } = req.body;
  // https://github.com/kelektiv/node.bcrypt.js#usage
  // TODO: Fill this middleware in with the Proper password comparing, bcrypt.compare()
  // You'll need to find the user in your DB
  // Once you have the user, you'll need to pass the encrypted pw and the plaintext pw to the compare function
  // If the passwords match set the username on `req` ==> req.username = user.username; and call next();
  User.findOne({ username })
    .then((foundUser) => {
      const foundHash = foundUser.password;
      bcrypt.compare(password, foundHash, (error, sucess) => {
        if (error) {
          res.status(422).json(error);
          return;
        }
        if (sucess) {
          req.username = foundUser.username;
          next();
        }
      })
    })
    .catch((err) => {
      res.status(422).json(err);
    })
};

module.exports = {
  authenticate,
  encryptUserPW,
  compareUserPW
};

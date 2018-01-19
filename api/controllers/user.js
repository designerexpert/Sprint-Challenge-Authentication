const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username, hashed } = req.body;
  const newUser = new User({ username, password: hashed });
  newUser.save()
    .then((res) => {
      res.status(200).json()
    })
    .catch((err) => {
      res.status(422).json(err);
    });
};

module.exports = {
  createUser
};

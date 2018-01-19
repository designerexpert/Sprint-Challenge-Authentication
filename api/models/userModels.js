const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  // create your user schema here.
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);

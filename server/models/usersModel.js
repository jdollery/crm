const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;


// const userSchema = new Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String,
//   permissionLevel: Number
// });
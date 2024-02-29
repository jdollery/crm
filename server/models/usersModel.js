const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  // id: {
  //   type: String,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },

  firstName: {
    type: String,
    allowNull: false,
    required: true,
  },

  lastName: {
    type: String,
    allowNull: false,
    required: true,
  },

  password: { 
    type: String, 
    required: true,
    allowNull: false,
    trim: true 
  },

  createdOn: {
    type:Date,
    default:Date.now
  },

  status:{
    type:Boolean,
    required:true
  },

  role:{
    type:Number,
    required:true
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
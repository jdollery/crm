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

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  password: { 
    type: String, 
    required: true,
    trim: true,
    unique: true,
    min: 6,
  },
  
  status:{
    type:Boolean,
    required:true
  },
  
  role:{
    type:Number,
    required:true
  },
  
  created: {
    type:Date,
    default:Date.now
  },

});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
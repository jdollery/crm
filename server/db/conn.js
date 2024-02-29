const mongoose = require("mongoose");

const options = {
  useNewUrlParser:  true,
  useUnifiedTopology:  true
};

const connection = mongoose.connect(
  process.env.ATLAS_URI,
  options
)

connection.then(()=>console.log('connected'))
connection.catch(e=>console.log(e));
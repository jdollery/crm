const mongoose = require("mongoose");

const options = {
  useNewUrlParser:  true,
  useUnifiedTopology:  true
};

mongoose.createConnection(
  process.env.ATLAS_URI,
  options
)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));
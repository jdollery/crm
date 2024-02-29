const express = require('express');

const app = express ();
const cors = require("cors");
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

require("dotenv").config();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(require("./routes/userRoute"));

require("./db/conn");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server Listening on PORT ${PORT}`)

});
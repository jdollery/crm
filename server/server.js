const express = require('express');

const app = express ();
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use(require("./routes/usersRoute"));

require("./db/conn");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server Listening on PORT ${PORT}`)

});
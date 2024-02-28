const express = require('express');

const app = express ();
const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// require("dotenv").config({ path: "./.env" });
require("dotenv").config(); //check works (remove 'config' and move to parent folder)

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/usersRoute');
app.use('/users', userRoutes);

// app.use(require("./routes/usersRoute"));

const dbo = require("./db/conn");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });

  // console.log("Server Listening on PORT:", 5000);
  console.log(`Server Listening on PORT ${PORT}`)

});

app.get("/status", (req, res) => {

  const status = {
    "Status": "Running"
  };

  res.send(status);

});
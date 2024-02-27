const express = require('express');

const app = express ();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(express.json());

// app.use(require("./routes/record"));

const dbo = require("./db/conn");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });

  console.log("Server Listening on PORT:", 5000);

});

app.get("/status", (request, response) => {

  const status = {
    "Status": "Running"
  };

  response.send(status);

});
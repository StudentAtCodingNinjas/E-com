const express = require("express");
const db = require("./config/mongoose");
const port = 8000;

const app = express();

//Body parser
app.use(express.urlencoded({extended: true}));


// Express router
app.use("/", require("./routes"));

//Listen to the server
app.listen(port, function(err) {
  if (err) {
    console.log("Error Running the Server", err);
  }
  console.log("Server Running on Port: ", port);
});
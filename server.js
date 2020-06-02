const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const fs = require('fs')
const PORT = process.env.PORT || 3001;
const cors = require("cors")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/kealoha-blog";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('mongoose connection success')
  }
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

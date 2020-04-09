const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/kealoha-blog";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, }, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log('mongoose connection success')
  }
});

const Seed = [
  {
    category: "test",
    title: "test title",
    text:"test text",
    subject: "test subject",
    file: "test summary"
  }
];


db.ContentModel
  .deleteOne({})
  .then(() => db.ContentModel.collection.insertMany(Seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error('is this my error', err);
    process.exit(1);
  });

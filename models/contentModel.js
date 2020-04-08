const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  category: { type: String },
  title: { type: String },
  text: { type: String },
  file: { type: String }
});

const ContentModel = mongoose.model("ContentModel", contentSchema);

module.exports = ContentModel;

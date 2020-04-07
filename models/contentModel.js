const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  file: { type: String, required: true }
});

const ContentModel = mongoose.model("ContentModel", contentSchema);

module.exports = ContentModel;

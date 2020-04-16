const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  category: { type: String },
  title: { type: String },
  text: { type: String },
  subject: { type: String },
  file: { data: Buffer, contentType: String }
});

const ContentModel = mongoose.model("ContentModel", contentSchema);

module.exports = ContentModel;

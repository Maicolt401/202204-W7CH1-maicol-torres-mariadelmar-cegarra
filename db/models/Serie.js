const { Schema } = require("mongoose");

const SerieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
  },
  category: {
    type: String,
  },
});

module.exports = model("Serie", SerieSchema, "series");

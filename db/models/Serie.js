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

const Serie = model("Serie", SerieSchema, "series");

module.exports = Serie;

const { Schema, model, SchemaType } = require("mongoose");

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
  platform: {
    type: SchemaType.ObjectId,
    ref: "Platform",
  },
});

const Serie = model("Serie", SerieSchema, "series");

module.exports = Serie;

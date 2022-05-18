const { Schema, model } = require("mongoose");

const PlatformSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Platform = model("Platform", PlatformSchema, "platforms");

module.exports = Platform;

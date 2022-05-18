const { Schema, model, SchemaType } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  yearOfBirth: {
    type: Date,
    required: true,
  },
  admin: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  series: {
    watched: {
      type: [SchemaType.ObjectId],
      ref: "series",
    },
    pending: {
      type: [SchemaType.ObjectId],
      ref: "series",
    },
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;

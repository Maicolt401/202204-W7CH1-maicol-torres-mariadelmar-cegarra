const { Schema, model } = require("mongoose");

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
  // series: {
  //   watched: {
  //     type: [SchemaType.ObjectId],
  //     ref: "Serie",
  //   },
  //   pending: {
  //     type: [SchemaType.ObjectId],
  //     ref: "Serie",
  //   },
  // },
});

const User = model("User", UserSchema, "users");

module.exports = User;

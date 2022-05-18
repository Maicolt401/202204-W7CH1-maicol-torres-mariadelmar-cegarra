const { Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  yearOfBirth: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", UserSchema, "users");

module.exports = User;

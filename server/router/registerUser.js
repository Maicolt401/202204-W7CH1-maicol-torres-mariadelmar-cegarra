const express = require("express");
const registerUser = require("../controllers/registerController");

const userRegister = express.Router();

userRegister.post("/", registerUser);

module.exports = userRegister;

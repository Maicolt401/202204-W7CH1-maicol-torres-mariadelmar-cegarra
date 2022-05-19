const express = require("express");
const registerUser = require("../controllers/registerController");
const { loginUser } = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;

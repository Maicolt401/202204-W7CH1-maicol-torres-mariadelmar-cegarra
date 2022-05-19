const bcrypt = require("bcrypt");
const chalk = require("chalk");
const debug = require("debug")("series:server:controller:register");
const User = require("../../db/models/User");

const registerUser = async (req, res, next) => {
  const { username, password, admin, yearOfBirth } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username,
      admin,
      yearOfBirth,
      password: encryptedPassword,
    });
    res.status(201).json(req.body);
    debug(chalk.green("user register"));
  } catch (error) {
    error.statusCode = 400;
    error.customMessage = "bad request";
    next(error);
  }
};

module.exports = registerUser;

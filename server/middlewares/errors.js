const chalk = require("chalk");

const debug = require("debug")("series:server:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404).json({ msg: "404 endpoint Not Found" });
  debug("Received a request for an unexisting endpoint");
};

const generalError = (error, req, res) => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.customMessage ?? "General error";
  debug(chalk.red(error.message));

  res.status(statusCode).json({ msg: errorMessage });
};

module.exports = { generalError, notFoundError };

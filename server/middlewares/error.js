const debug = require("debug")("robots:middlewares:errors");

const notFoundError = (req, res) => {
  res.status(404).json({ msg: "404 endpoint Not Found" });
  debug("Received a request for an unexisting endpoint");
};

module.exports = notFoundError;

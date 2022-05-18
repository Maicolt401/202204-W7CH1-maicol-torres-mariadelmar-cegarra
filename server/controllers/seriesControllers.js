const debug = require("debug")("series:server:seriesConrollers");
const chalk = require("chalk");
const Serie = require("../../db/models/Serie");

const getSeries = async (req, res) => {
  const series = await Serie.find();
  res.status(200).json({ series });
  debug(chalk.green("request received on data base"));
};

module.exports = { getSeries };

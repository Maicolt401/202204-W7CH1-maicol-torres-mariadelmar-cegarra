const chalk = require("chalk");
const debug = require("debug");
const Platform = require("../../db/models/Platform");

const getPlatforms = async (req, res, next) => {
  try {
    const platforms = await Platform.find({});

    res.status(200).json({ platforms });
  } catch (error) {
    debug(chalk.red(error.message));
    error.customMessage = "Could not get any platforms";
    error.statusCode = 403;

    next(error);
  }
};

module.exports = { getPlatforms };

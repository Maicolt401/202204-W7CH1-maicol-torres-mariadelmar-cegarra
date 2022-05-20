const chalk = require("chalk");
const debug = require("debug")("series:server:controller:patformDelete");
const Platform = require("../../db/models/Platform");

const deletePlatform = async (req, res) => {
  const { platFormId } = req.params;

  await Platform.findIdAndDelete(platFormId);

  res.status(200).json({ msg: "platform Deleted" });
  debug(chalk.green("deleted platform to data base"));
};
module.exports = deletePlatform;

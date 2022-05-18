const debug = require("debug")("series:db:index");
const chalk = require("chalk");
const { default: mongoose } = require("mongoose");

const connectDB = (conectString) =>
  new Promise((resolve, reject) => {
    mongoose.set("debug", true);
    mongoose.connect(conectString, (error) => {
      if (error) {
        debug(chalk.red("error in data base", error.message));
        reject();
        return;
      }
      debug(chalk.yellow("connect to data base"));
      resolve();
    });
  });

module.exports = connectDB;

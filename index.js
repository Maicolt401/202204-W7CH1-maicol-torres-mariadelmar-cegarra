require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("series:root");
const connectDb = require("./db");
const initialServer = require("./server/initialServer");

(async () => {
  try {
    await connectDb(process.env.MONGO_STRING);
    await initialServer(process.env.PORT || 4000);
    debug(chalk.yellow("Conenct to data base"));
  } catch (error) {
    debug(chalk.red("Error to Connect"));
  }
})();

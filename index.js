require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("series:root");
const connectDb = require("./db");
const initialServer = require("./server/initialServer");

(async () => {
  try {
    await initialServer(process.env.PORT || 4000);
    await connectDb(process.env.MONGO_STRING);
  } catch (error) {
    debug(chalk.red("Error to Connect"));
  }
})();

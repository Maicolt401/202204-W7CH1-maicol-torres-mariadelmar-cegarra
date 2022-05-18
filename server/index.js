const express = require("express");
const morgan = require("morgan");
const seriesRouter = require("./router/seriesRouter");

const app = express();

app.use = morgan("dev");
app.use = express.json();

module.exports = app;

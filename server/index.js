const express = require("express");
const morgan = require("morgan");
const userRegister = require("./router/registerUser");
const seriesRouter = require("./router/seriesRouter");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/series", seriesRouter);
app.use("/user/register", userRegister);
module.exports = app;

const express = require("express");
const morgan = require("morgan");
const platformsRouter = require("./router/platformsRouter");
const userRouter = require("./router/registerUser");
const notFoundError = require("./middlewares/error");
const seriesRouter = require("./router/seriesRouter");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/series", seriesRouter);
app.use("/platforms", platformsRouter);
app.use("/user/register", userRouter);
app.use("/platforms/:idPlatform", platformsRouter);

app.use(notFoundError);

module.exports = app;

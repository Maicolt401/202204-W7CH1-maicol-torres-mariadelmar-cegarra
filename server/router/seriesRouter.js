const express = require("express");
const { getSeries } = require("../controllers/seriesControllers");

const seriesRouter = express.Router();

seriesRouter.get("/", getSeries);

module.exports = seriesRouter;

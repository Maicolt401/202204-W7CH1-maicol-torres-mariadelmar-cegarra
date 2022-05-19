const express = require("express");
const { getPlatforms } = require("../controllers/platformControllers");

const platformsRouter = express.Router();

platformsRouter.get("/platforms", getPlatforms);

module.exports = platformsRouter;

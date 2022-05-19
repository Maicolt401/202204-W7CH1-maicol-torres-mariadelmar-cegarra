const express = require("express");
const { getPlatforms } = require("../controllers/platformControllers");
const deletePlatform = require("../controllers/platformDelete");

const platformsRouter = express.Router();

platformsRouter.get("/platforms", getPlatforms);
platformsRouter.delete("/platforms/:idPlatform", deletePlatform);

module.exports = platformsRouter;

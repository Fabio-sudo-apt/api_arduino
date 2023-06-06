const express = require("express");
const { powerOffController, powerOnController } = require('./Controller/controller')

const router = express.Router();

router.get("/on", powerOnController);
router.get("/off", powerOffController);

module.exports = router;

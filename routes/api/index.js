const router = require("express").Router();
const contentRoute = require("./api");

// Book routes
router.use("/", contentRoute);

module.exports = router;

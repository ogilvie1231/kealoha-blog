const router = require("express").Router();
const newRoutes = require("./api");

// new routes
router.use("/", newRoutes);

module.exports = router;

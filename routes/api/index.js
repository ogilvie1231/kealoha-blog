const router = require("express").Router();
const newRoutes = require("./api");

// new routes
router.use("/api", newRoutes);

module.exports = router;

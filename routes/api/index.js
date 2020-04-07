const router = require("express").Router();
const newRoutes = require("./api");

// new routes
router.use("/newpost", newRoutes);

module.exports = router;

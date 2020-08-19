const router = require("express").Router();
const gearRoutes = require("./gears");
const orderRoutes = require("./orders")

// routes
router.use("/gears", gearRoutes)
router.use("/orders", orderRoutes)

module.exports = router;

const router = require("express").Router();
const gearRoutes = require("./gears");

// proj routes
router.use("/gears", gearRoutes);

module.exports = router;

const router = require("express").Router();
const projRoutes = require("./projectors");

// proj routes
router.use("/projectors", projRoutes);

module.exports = router;

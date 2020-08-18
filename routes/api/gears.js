const router = require("express").Router();
const gearController = require("../../controllers/gearController");

// Matches with "/api/projectors"
router.route("/")
.get(gearController.findAll)

// Matches with "/api/projectors/:id"
router
  .route("/:id")
  .get(gearController.findById)
  // .put(projController.update)
  // .delete(projController.remove);

module.exports = router;

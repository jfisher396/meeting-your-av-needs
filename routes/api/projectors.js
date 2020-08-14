const router = require("express").Router();
const projController = require("../../controllers/projectorsController");

// Matches with "/api/projectors"
router.route("/")
.get(projController.findAll)

// Matches with "/api/projectors/:id"
router
  .route("/:id")
  .get(projController.findById)
  // .put(projController.update)
  // .delete(projController.remove);

module.exports = router;

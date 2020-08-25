const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/projectors"
router.route("/")
    .get(ordersController.findOne)
    .post(ordersController.create)

// Matches with "/api/projectors/:id"
router.route("/:id").get(ordersController.findById);
// .put(projController.update)
// .delete(projController.remove);

module.exports = router;

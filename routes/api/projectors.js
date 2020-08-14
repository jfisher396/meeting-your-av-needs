const router = require("express").Router();
const projController = require("../../controllers/projController");

// Matches with "/api/books"
router.route("/").get(projController.findAll).post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;

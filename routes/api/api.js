const router = require("express").Router();
const contentController = require("../../controllers/contentController");


router.route("/")
  .get(contentController.findAll)
  .post(contentController.create);
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contentController.findAll)
  .put(contentController.update)
  .delete(contentController.remove);

module.exports = router;

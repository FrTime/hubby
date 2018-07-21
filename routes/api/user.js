const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

router
  .route("/:id")
  .get(userController.findById)
  .get(userController.findOne)
  .put(userController.update)
  .delete(userController.remove);

router
.route("/email/:email")
.get(userController.findOne);

router
.route("/id/:id")
.get(userController.update);

module.exports = router;

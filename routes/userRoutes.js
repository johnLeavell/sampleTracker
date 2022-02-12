const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/users", userController.findAll);
router.post("/user", userController.create);
router.get("/user/:id", userController.findById);
router.put("/user/:id", userController.updateById);
router.delete("/user/:id", userController.deleteById);
router.get("/users/samples", userController.findAllUserSamples)
module.exports = router;

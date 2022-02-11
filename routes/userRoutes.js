const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");


router.get("/", userController.findAll);
router.post("/", userController.create);
router.get("/:id", userController.findById);
router.put("/:id", userController.updateById);
router.delete("/:id", userController.deleteById);
// router.get("/usersamples", userController.findAllUserSamples)
module.exports = router;

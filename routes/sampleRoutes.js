const express = require("express");
const router = express.Router();
const sampleController = require("../controllers/sample");

router.get("/", sampleController.findAll);
router.post("/", sampleController.create);
router.get("/:id", sampleController.findById);
router.put("/:id", sampleController.updateById);
router.delete("/:id", sampleController.deleteById);
module.exports = router;

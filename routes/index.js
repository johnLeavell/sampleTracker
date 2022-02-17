const { Router } = require("express");
const sampleController = require("../controllers/sample");
const userController = require("../controllers/user");
const { protect, admin } = require("../utils/auth");
const router = Router();

//user routes
router.get("/api/users", userController.findAll);
router.post("/api/user", userController.create);
router.get("/api/user/:id", userController.findById);
router.put("/api/user/:id", userController.updateById);
router.delete("/api/user/:id", userController.deleteById);
router.get("/api/users/samples", userController.findAllUserSamples);
router.post("/api/user/login", userController.userAuth);
router.route("/api/userprofile/").get(protect, userController.userProfile);
router.route("/api/registeruser").post(userController.registerUser).get(protect, admin, userController.findAll);

//sample routes
router.get("/api/samples", sampleController.findAll);
router.post("/api/sample", sampleController.create);
router.get("/api/sample/:id", sampleController.findById);
router.put("/api/sample/:id", sampleController.updateById);
router.delete("/api/sample/:id", sampleController.deleteById);

module.exports = router;
